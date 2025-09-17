import { RenderingEngine } from '@decaf-ts/ui-decorators';
import { AngularEngineKeys } from './constants';
import { InternalError } from '@decaf-ts/db-decorators';
import { reflectComponentType, } from '@angular/core';
import { NgxFormService } from './NgxFormService';
/**
 * @description Angular implementation of the RenderingEngine with enhanced features
 * @summary This class extends the base RenderingEngine to provide Angular-specific rendering capabilities
 * with additional features compared to NgxRenderingEngine. It handles the conversion of field definitions
 * to Angular components, manages component registration, and provides utilities for component creation
 * and input handling. This implementation uses Angular's newer component APIs.
 *
 * @template AngularFieldDefinition - Type for Angular-specific field definitions
 * @template AngularDynamicOutput - Type for Angular-specific component output
 *
 * @class NgxRenderingEngine
 * @example
 * ```typescript
 * const engine = NgxRenderingEngine.get();
 * engine.initialize();
 * const output = engine.render(myModel, {}, viewContainerRef, injector, templateRef);
 * ```
 *
 * @mermaid
 * sequenceDiagram
 *   participant Client
 *   participant Engine as NgxRenderingEngine
 *   participant Components as RegisteredComponents
 *
 *   Client->>Engine: get()
 *   Client->>Engine: initialize()
 *   Client->>Engine: render(model, props, vcr, injector, tpl)
 *   Engine->>Engine: toFieldDefinition(model, props)
 *   Engine->>Engine: fromFieldDefinition(fieldDef, vcr, injector, tpl)
 *   Engine->>Components: components(fieldDef.tag)
 *   Components-->>Engine: component constructor
 *   Engine->>Engine: createComponent(component, inputs, metadata, vcr, injector, template)
 *   Engine-->>Client: return AngularDynamicOutput
 */
export class NgxRenderingEngine extends RenderingEngine {
    /**
     * @description Current operation context for component visibility control
     * @summary Static property that stores the current operation being performed,
     * which is used to determine component visibility through the 'hidden' property.
     * Components can specify operations where they should be hidden, and this property
     * provides the context for those visibility checks. The value is typically extracted
     * from the global properties during the rendering process.
     *
     * @private
     * @static
     * @type {string | undefined}
     */
    static { this._operation = undefined; }
    /**
     * @description Constructs a new NgxRenderingEngine instance
     * @summary Initializes a new instance of the Angular rendering engine by calling the parent
     * constructor with the 'angular' engine type identifier. This constructor sets up the base
     * rendering engine functionality with Angular-specific configurations and prepares the
     * instance for component registration and rendering operations.
     *
     * @constructor
     */
    constructor() {
        super('angular');
    }
    /**
     * @description Converts a field definition to an Angular component output
     * @summary This private method takes a field definition and creates the corresponding Angular component.
     * It handles component instantiation, input property mapping, and child component rendering.
     * The method validates input properties against the component's metadata and processes
     * child components recursively.
     *
     * @param {FieldDefinition<AngularFieldDefinition>} fieldDef - The field definition to convert
     * @param {ViewContainerRef} vcr - The view container reference for component creation
     * @param {Injector} injector - The Angular injector for dependency injection
     * @param {TemplateRef<any>} tpl - The template reference for content projection
     * @param {string} registryFormId - Form identifier for the component renderer
     * @return {AngularDynamicOutput} The Angular component output with component reference and inputs
     *
     * @mermaid
     * sequenceDiagram
     *   participant Method as fromFieldDefinition
     *   participant Components as NgxRenderingEngine.components
     *   participant Angular as Angular Core
     *   participant Process as processChild
     *
     *   Method->>Components: components(fieldDef.tag)
     *   Components-->>Method: component constructor
     *   Method->>Angular: reflectComponentType(component)
     *   Angular-->>Method: componentMetadata
     *   Method->>Method: Validate input properties
     *   Method->>Method: Create result object
     *   alt Has children
     *     Method->>Process: Process children recursively
     *     Process->>Method: Return processed children
     *     Method->>Angular: Create embedded view
     *     Method->>Method: Create component instance
     *   end
     *   Method-->>Caller: return AngularDynamicOutput
     */
    fromFieldDefinition(fieldDef, vcr, injector, tpl, registryFormId = Date.now().toString(36).toUpperCase()) {
        const cmp = fieldDef?.['component'] || NgxRenderingEngine.components(fieldDef.tag);
        const component = cmp.constructor;
        const componentMetadata = reflectComponentType(component);
        if (!componentMetadata) {
            throw new InternalError(`Metadata for component ${fieldDef.tag} not found.`);
        }
        const { inputs: possibleInputs } = componentMetadata;
        const inputs = { ...fieldDef.props };
        const unmappedKeys = Object.keys(inputs).filter(input => {
            const isMapped = possibleInputs.find(({ propName }) => propName === input);
            if (!isMapped)
                delete inputs[input];
            return !isMapped;
        });
        if (unmappedKeys.length > 0)
            console.warn(`Unmapped input properties for component ${fieldDef.tag}: ${unmappedKeys.join(', ')}`);
        const operation = NgxRenderingEngine._operation;
        const hiddenOn = inputs?.hidden || [];
        if (hiddenOn.includes(operation))
            return { inputs, injector };
        // const hiddenOn = inputs?.hidden || [];
        const result = {
            component,
            inputs,
            injector,
        };
        if (fieldDef.rendererId)
            result.inputs['rendererId'] = fieldDef.rendererId;
        // process children
        if (fieldDef.children?.length) {
            result.children = fieldDef.children.map((child) => {
                if (child?.children?.length) {
                    child.children = child.children.filter(c => {
                        const hiddenOn = c?.props?.hidden || [];
                        if (!hiddenOn.includes(operation))
                            return c;
                    });
                }
                // create a child form and add its controls as properties of child.props
                NgxFormService.addControlFromProps(registryFormId, child.props, inputs);
                return this.fromFieldDefinition(child, vcr, injector, tpl, registryFormId);
            });
        }
        // generating DOM
        vcr.clear();
        const template = vcr.createEmbeddedView(tpl, injector).rootNodes;
        const componentInstance = NgxRenderingEngine.createComponent(component, { ...inputs, model: this._model }, componentMetadata, vcr, injector, template);
        result.instance = NgxRenderingEngine._instance = componentInstance.instance;
        return result;
    }
    /**
     * @description Creates an Angular component instance
     * @summary This static utility method creates an Angular component instance with the specified
     * inputs and template. It uses Angular's component creation API to instantiate the component
     * and then sets the input properties using the provided metadata.
     *
     * @param {Type<unknown>} component - The component type to create
     * @param {KeyValue} [inputs={}] - The input properties to set on the component
     * @param {ComponentMirror<unknown>} metadata - The component metadata for input validation
     * @param {ViewContainerRef} vcr - The view container reference for component creation
     * @param {Injector} injector - The Angular injector for dependency injection
     * @param {Node[]} [template=[]] - The template nodes to project into the component
     * @return {ComponentRef<unknown>} The created component reference
     */
    static createComponent(component, inputs = {}, metadata, vcr, injector, template = []) {
        const componentInstance = vcr.createComponent(component, {
            environmentInjector: injector,
            projectableNodes: [template],
        });
        this.setInputs(componentInstance, inputs, metadata);
        return componentInstance;
    }
    /**
     * @description Extracts decorator metadata from a model
     * @summary This method provides access to the field definition generated from a model's
     * decorators. It's a convenience wrapper around the toFieldDefinition method that
     * converts a model to a field definition based on its decorators and the provided
     * global properties.
     *
     * @param {Model} model - The model to extract decorators from
     * @param {Record<string, unknown>} globalProps - Global properties to include in the field definition
     * @return {FieldDefinition<AngularFieldDefinition>} The field definition generated from the model
     */
    getDecorators(model, globalProps) {
        return this.toFieldDefinition(model, globalProps);
    }
    /**
     * @description Destroys the current engine instance
     * @summary This static method clears the current instance reference, effectively
     * destroying the singleton instance of the rendering engine. This can be used
     * to reset the engine state or to prepare for a new instance creation.
     *
     * @return {Promise<void>} A promise that resolves when the instance is destroyed
     */
    static async destroy() {
        NgxRenderingEngine._instance = undefined;
    }
    /**
     * @description Renders a model into an Angular component output
     * @summary This method takes a model and converts it to an Angular component output.
     * It first stores a reference to the model, then converts it to a field definition
     * using the base RenderingEngine's toFieldDefinition method, and finally converts
     * that field definition to an Angular component output using fromFieldDefinition.
     *
     * @template M - Type extending Model
     * @param {M} model - The model to render
     * @param {Record<string, unknown>} globalProps - Global properties to pass to the component
     * @param {ViewContainerRef} vcr - The view container reference for component creation
     * @param {Injector} injector - The Angular injector for dependency injection
     * @param {TemplateRef<any>} tpl - The template reference for content projection
     * @return {AngularDynamicOutput} The Angular component output with component reference and inputs
     *
     * @mermaid
     * sequenceDiagram
     *   participant Client as Client Code
     *   participant Render as render method
     *   participant ToField as toFieldDefinition
     *   participant FromField as fromFieldDefinition
     *
     *   Client->>Render: render(model, globalProps, vcr, injector, tpl)
     *   Render->>Render: Store model reference
     *   Render->>ToField: toFieldDefinition(model, globalProps)
     *   ToField-->>Render: fieldDef
     *   Render->>FromField: fromFieldDefinition(fieldDef, vcr, injector, tpl)
     *   FromField-->>Render: AngularDynamicOutput
     *   Render-->>Client: return AngularDynamicOutput
     */
    render(model, globalProps, vcr, injector, tpl) {
        let result;
        try {
            this._model = model;
            const formId = Date.now().toString(36).toUpperCase();
            const fieldDef = this.toFieldDefinition(model, globalProps);
            const props = fieldDef.props;
            if (!NgxRenderingEngine._operation)
                NgxRenderingEngine._operation = props?.['operation'] || undefined;
            result = this.fromFieldDefinition(fieldDef, vcr, injector, tpl, formId);
            result.instance['formGroup'] = NgxFormService.getControlFromForm(formId);
            NgxFormService.removeRegistry(formId);
        }
        catch (e) {
            throw new InternalError(`Failed to render Model ${model.constructor.name}: ${e}`);
        }
        return result;
    }
    /**
     * @description Initializes the rendering engine
     * @summary This method initializes the rendering engine. It checks if the engine is already initialized
     * and sets the initialized flag to true. This method is called before the engine is used
     * to ensure it's properly set up for rendering operations.
     *
     * @return {Promise<void>} A promise that resolves when initialization is complete
     */
    async initialize() {
        if (this.initialized)
            return;
        // ValidatableByType[]
        this.initialized = true;
    }
    /**
     * @description Registers a component with the rendering engine
     * @summary This static method registers a component constructor with the rendering engine
     * under a specific name. It initializes the components registry if needed and throws
     * an error if a component is already registered under the same name to prevent
     * accidental overrides.
     *
     * @param {string} name - The name to register the component under
     * @param {Constructor<unknown>} constructor - The component constructor
     * @return {void}
     */
    static registerComponent(name, constructor) {
        if (!this._components)
            this._components = {};
        if (name in this._components)
            throw new InternalError(`Component already registered under ${name}`);
        this._components[name] = {
            constructor: constructor,
        };
    }
    /**
     * @description Retrieves registered components from the rendering engine
     * @summary This static method retrieves either all registered components or a specific component
     * by its selector. When called without a selector, it returns an array of all registered
     * components. When called with a selector, it returns the specific component if found,
     * or throws an error if the component is not registered.
     *
     * @param {string} [selector] - Optional selector to retrieve a specific component
     * @return {Object|Array} Either a specific component or an array of all components
     */
    static components(selector) {
        if (!selector)
            return Object.values(this._components);
        if (!(selector in this._components))
            throw new InternalError(`No Component registered under ${selector}`);
        return this._components[selector];
    }
    /**
     * @description Generates a key for reflection metadata
     * @summary This static method generates a key for reflection metadata by prefixing the input key
     * with the Angular engine's reflection prefix. This is used for storing and retrieving
     * metadata in a namespaced way to avoid conflicts with other metadata.
     *
     * @param {string} key - The base key to prefix
     * @return {string} The prefixed key for reflection metadata
     */
    static key(key) {
        return `${AngularEngineKeys.REFLECT}${key}`;
    }
    /**
     * @description Sets input properties on a component instance
     * @summary This static utility method sets input properties on a component instance
     * based on the provided inputs object and component metadata. It handles both simple
     * values and nested objects, recursively processing object properties. The method
     * validates each input against the component's metadata to ensure only valid inputs
     * are set.
     *
     * @param {ComponentRef<unknown>} component - The component reference to set inputs on
     * @param {KeyValue} inputs - The input properties to set
     * @param {ComponentMirror<unknown>} metadata - The component metadata for input validation
     * @return {void}
     *
     * @mermaid
     * sequenceDiagram
     *   participant Caller
     *   participant SetInputs as setInputs
     *   participant Parse as parseInputValue
     *   participant Component as ComponentRef
     *
     *   Caller->>SetInputs: setInputs(component, inputs, metadata)
     *   SetInputs->>SetInputs: Iterate through inputs
     *   loop For each input
     *     SetInputs->>SetInputs: Check if input exists in metadata
     *     alt Input is 'props'
     *       SetInputs->>Parse: parseInputValue(component, value)
     *       Parse->>Parse: Recursively process nested objects
     *       Parse->>Component: setInput(key, value)
     *     else Input is valid
     *       SetInputs->>Component: setInput(key, value)
     *     end
     *   end
     */
    static setInputs(component, inputs, metadata) {
        function parseInputValue(component, input) {
            Object.keys(input).forEach(key => {
                const value = input[key];
                if (typeof value === 'object' && !!value)
                    return parseInputValue(component, value);
                component.setInput(key, value);
            });
        }
        Object.entries(inputs).forEach(([key, value]) => {
            const prop = metadata.inputs.find((item) => item.propName === key);
            if (prop) {
                if (key === 'props')
                    parseInputValue(component, value);
                // if(key === 'locale' && !value)
                //   value = getLocaleFromClassName(this._componentName);
                component.setInput(key, value);
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmd4UmVuZGVyaW5nRW5naW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9lbmdpbmUvTmd4UmVuZGVyaW5nRW5naW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBbUIsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRWhELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBS0wsb0JBQW9CLEdBSXJCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVsRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUNHO0FBQ0gsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGVBQTZEO0lBNEJuRzs7Ozs7Ozs7Ozs7T0FXRzthQUNZLGVBQVUsR0FBdUIsU0FBUyxDQUFDO0lBZ0IxRDs7Ozs7Ozs7T0FRRztJQUNIO1FBQ0UsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWtDRztJQUNLLG1CQUFtQixDQUN6QixRQUFpRCxFQUNqRCxHQUFxQixFQUNyQixRQUFrQixFQUNsQixHQUF5QixFQUN6QixpQkFBeUIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUU7UUFFOUQsTUFBTSxHQUFHLEdBQUksUUFBcUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakcsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFdBQXVDLENBQUM7UUFFOUQsTUFBTSxpQkFBaUIsR0FBRyxvQkFBb0Is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LEtBQUssS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDLEtBQUs7b0JBQ3RDLE9BQU8sZUFBZSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDM0MsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDakMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFO1lBQzlDLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBMEIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUN6RixJQUFJLElBQUksRUFBRSxDQUFDO2dCQUNULElBQUksR0FBRyxLQUFLLE9BQU87b0JBQ2pCLGVBQWUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3BDLGlDQUFpQztnQkFDakMseURBQXlEO2dCQUN6RCxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNqQyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGREZWZpbml0aW9uLCBSZW5kZXJpbmdFbmdpbmUgfSBmcm9tICdAZGVjYWYtdHMvdWktZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBBbmd1bGFyRmllbGREZWZpbml0aW9uLCBLZXlWYWx1ZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgQW5ndWxhckR5bmFtaWNPdXRwdXQgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQW5ndWxhckVuZ2luZUtleXMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciwgTW9kZWx9IGZyb20gJ0BkZWNhZi10cy9kZWNvcmF0b3ItdmFsaWRhdGlvbic7XG5pbXBvcnQgeyBJbnRlcm5hbEVycm9yIH0gZnJvbSAnQGRlY2FmLXRzL2RiLWRlY29yYXRvcnMnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50TWlycm9yLFxuICBDb21wb25lbnRSZWYsXG4gIEVudmlyb25tZW50SW5qZWN0b3IsXG4gIEluamVjdG9yLFxuICByZWZsZWN0Q29tcG9uZW50VHlwZSxcbiAgVGVtcGxhdGVSZWYsXG4gIFR5cGUsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4Rm9ybVNlcnZpY2UgfSBmcm9tICcuL05neEZvcm1TZXJ2aWNlJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQW5ndWxhciBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUmVuZGVyaW5nRW5naW5lIHdpdGggZW5oYW5jZWQgZmVhdHVyZXNcbiAqIEBzdW1tYXJ5IFRoaXMgY2xhc3MgZXh0ZW5kcyB0aGUgYmFzZSBSZW5kZXJpbmdFbmdpbmUgdG8gcHJvdmlkZSBBbmd1bGFyLXNwZWNpZmljIHJlbmRlcmluZyBjYXBhYmlsaXRpZXNcbiAqIHdpdGggYWRkaXRpb25hbCBmZWF0dXJlcyBjb21wYXJlZCB0byBOZ3hSZW5kZXJpbmdFbmdpbmUuIEl0IGhhbmRsZXMgdGhlIGNvbnZlcnNpb24gb2YgZmllbGQgZGVmaW5pdGlvbnNcbiAqIHRvIEFuZ3VsYXIgY29tcG9uZW50cywgbWFuYWdlcyBjb21wb25lbnQgcmVnaXN0cmF0aW9uLCBhbmQgcHJvdmlkZXMgdXRpbGl0aWVzIGZvciBjb21wb25lbnQgY3JlYXRpb25cbiAqIGFuZCBpbnB1dCBoYW5kbGluZy4gVGhpcyBpbXBsZW1lbnRhdGlvbiB1c2VzIEFuZ3VsYXIncyBuZXdlciBjb21wb25lbnQgQVBJcy5cbiAqXG4gKiBAdGVtcGxhdGUgQW5ndWxhckZpZWxkRGVmaW5pdGlvbiAtIFR5cGUgZm9yIEFuZ3VsYXItc3BlY2lmaWMgZmllbGQgZGVmaW5pdGlvbnNcbiAqIEB0ZW1wbGF0ZSBBbmd1bGFyRHluYW1pY091dHB1dCAtIFR5cGUgZm9yIEFuZ3VsYXItc3BlY2lmaWMgY29tcG9uZW50IG91dHB1dFxuICpcbiAqIEBjbGFzcyBOZ3hSZW5kZXJpbmdFbmdpbmVcbiAqIEBleGFtcGxlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBjb25zdCBlbmdpbmUgPSBOZ3hSZW5kZXJpbmdFbmdpbmUuZ2V0KCk7XG4gKiBlbmdpbmUuaW5pdGlhbGl6ZSgpO1xuICogY29uc3Qgb3V0cHV0ID0gZW5naW5lLnJlbmRlcihteU1vZGVsLCB7fSwgdmlld0NvbnRhaW5lclJlZiwgaW5qZWN0b3IsIHRlbXBsYXRlUmVmKTtcbiAqIGBgYFxuICpcbiAqIEBtZXJtYWlkXG4gKiBzZXF1ZW5jZURpYWdyYW1cbiAqICAgcGFydGljaXBhbnQgQ2xpZW50XG4gKiAgIHBhcnRpY2lwYW50IEVuZ2luZSBhcyBOZ3hSZW5kZXJpbmdFbmdpbmVcbiAqICAgcGFydGljaXBhbnQgQ29tcG9uZW50cyBhcyBSZWdpc3RlcmVkQ29tcG9uZW50c1xuICpcbiAqICAgQ2xpZW50LT4+RW5naW5lOiBnZXQoKVxuICogICBDbGllbnQtPj5FbmdpbmU6IGluaXRpYWxpemUoKVxuICogICBDbGllbnQtPj5FbmdpbmU6IHJlbmRlcihtb2RlbCwgcHJvcHMsIHZjciwgaW5qZWN0b3IsIHRwbClcbiAqICAgRW5naW5lLT4+RW5naW5lOiB0b0ZpZWxkRGVmaW5pdGlvbihtb2RlbCwgcHJvcHMpXG4gKiAgIEVuZ2luZS0+PkVuZ2luZTogZnJvbUZpZWxkRGVmaW5pdGlvbihmaWVsZERlZiwgdmNyLCBpbmplY3RvciwgdHBsKVxuICogICBFbmdpbmUtPj5Db21wb25lbnRzOiBjb21wb25lbnRzKGZpZWxkRGVmLnRhZylcbiAqICAgQ29tcG9uZW50cy0tPj5FbmdpbmU6IGNvbXBvbmVudCBjb25zdHJ1Y3RvclxuICogICBFbmdpbmUtPj5FbmdpbmU6IGNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQsIGlucHV0cywgbWV0YWRhdGEsIHZjciwgaW5qZWN0b3IsIHRlbXBsYXRlKVxuICogICBFbmdpbmUtLT4+Q2xpZW50OiByZXR1cm4gQW5ndWxhckR5bmFtaWNPdXRwdXRcbiAqL1xuZXhwb3J0IGNsYXNzIE5neFJlbmRlcmluZ0VuZ2luZSBleHRlbmRzIFJlbmRlcmluZ0VuZ2luZTxBbmd1bGFyRmllbGREZWZpbml0aW9uLCBBbmd1bGFyRHluYW1pY091dHB1dD4ge1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUmVnaXN0cnkgb2YgY29tcG9uZW50cyBhdmFpbGFibGUgZm9yIHJlbmRlcmluZ1xuICAgKiBAc3VtbWFyeSBTdGF0aWMgcmVnaXN0cnkgdGhhdCBzdG9yZXMgYWxsIHJlZ2lzdGVyZWQgY29tcG9uZW50cyBpbmRleGVkIGJ5IHRoZWlyIHNlbGVjdG9yIG5hbWUuXG4gICAqIEVhY2ggY29tcG9uZW50IGVudHJ5IGNvbnRhaW5zIGEgY29uc3RydWN0b3IgcmVmZXJlbmNlIHRoYXQgY2FuIGJlIHVzZWQgdG8gaW5zdGFudGlhdGVcbiAgICogdGhlIGNvbXBvbmVudCBkdXJpbmcgdGhlIHJlbmRlcmluZyBwcm9jZXNzLiBUaGlzIHJlZ2lzdHJ5IGlzIHNoYXJlZCBhY3Jvc3MgYWxsIGluc3RhbmNlc1xuICAgKiBvZiB0aGUgcmVuZGVyaW5nIGVuZ2luZSBhbmQgaXMgcG9wdWxhdGVkIHRocm91Z2ggdGhlIHJlZ2lzdGVyQ29tcG9uZW50IG1ldGhvZC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHN0YXRpY1xuICAgKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgeyBjb25zdHJ1Y3RvcjogQ29uc3RydWN0b3I8dW5rbm93bj4gfT59XG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBfY29tcG9uZW50czogUmVjb3JkPHN0cmluZywgeyBjb25zdHJ1Y3RvcjogQ29uc3RydWN0b3I8dW5rbm93bj4gfT47XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDdXJyZW50bHkgYWN0aXZlIG1vZGVsIGJlaW5nIHJlbmRlcmVkXG4gICAqIEBzdW1tYXJ5IFN0b3JlcyBhIHJlZmVyZW5jZSB0byB0aGUgbW9kZWwgaW5zdGFuY2UgdGhhdCBpcyBjdXJyZW50bHkgYmVpbmcgcHJvY2Vzc2VkXG4gICAqIGJ5IHRoZSByZW5kZXJpbmcgZW5naW5lLiBUaGlzIHByb3BlcnR5IGlzIHNldCBkdXJpbmcgdGhlIHJlbmRlciBtZXRob2QgZXhlY3V0aW9uXG4gICAqIGFuZCBpcyB1c2VkIHRocm91Z2hvdXQgdGhlIHJlbmRlcmluZyBsaWZlY3ljbGUgdG8gYWNjZXNzIG1vZGVsIGRhdGEgYW5kIG1ldGFkYXRhLlxuICAgKiBUaGUgZGVmaW5pdGUgYXNzaWdubWVudCBhc3NlcnRpb24gKCEpIGlzIHVzZWQgYmVjYXVzZSB0aGlzIHByb3BlcnR5IGlzIGFsd2F5c1xuICAgKiBpbml0aWFsaXplZCBiZWZvcmUgdXNlIHdpdGhpbiB0aGUgcmVuZGVyIG1ldGhvZC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge01vZGVsfVxuICAgKi9cbiAgcHJpdmF0ZSBfbW9kZWwhOiBNb2RlbDtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEN1cnJlbnQgb3BlcmF0aW9uIGNvbnRleHQgZm9yIGNvbXBvbmVudCB2aXNpYmlsaXR5IGNvbnRyb2xcbiAgICogQHN1bW1hcnkgU3RhdGljIHByb3BlcnR5IHRoYXQgc3RvcmVzIHRoZSBjdXJyZW50IG9wZXJhdGlvbiBiZWluZyBwZXJmb3JtZWQsXG4gICAqIHdoaWNoIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIGNvbXBvbmVudCB2aXNpYmlsaXR5IHRocm91Z2ggdGhlICdoaWRkZW4nIHByb3BlcnR5LlxuICAgKiBDb21wb25lbnRzIGNhbiBzcGVjaWZ5IG9wZXJhdGlvbnMgd2hlcmUgdGhleSBzaG91bGQgYmUgaGlkZGVuLCBhbmQgdGhpcyBwcm9wZXJ0eVxuICAgKiBwcm92aWRlcyB0aGUgY29udGV4dCBmb3IgdGhvc2UgdmlzaWJpbGl0eSBjaGVja3MuIFRoZSB2YWx1ZSBpcyB0eXBpY2FsbHkgZXh0cmFjdGVkXG4gICAqIGZyb20gdGhlIGdsb2JhbCBwcm9wZXJ0aWVzIGR1cmluZyB0aGUgcmVuZGVyaW5nIHByb2Nlc3MuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBzdGF0aWNcbiAgICogQHR5cGUge3N0cmluZyB8IHVuZGVmaW5lZH1cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIF9vcGVyYXRpb246IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFJlZmVyZW5jZSB0byB0aGUgY3VycmVudGx5IGFjdGl2ZSBjb21wb25lbnQgaW5zdGFuY2VcbiAgICogQHN1bW1hcnkgU3RhdGljIHByb3BlcnR5IHRoYXQgbWFpbnRhaW5zIGEgcmVmZXJlbmNlIHRvIHRoZSBtb3N0IHJlY2VudGx5IGNyZWF0ZWRcbiAgICogY29tcG9uZW50IGluc3RhbmNlLiBUaGlzIGlzIHVzZWQgaW50ZXJuYWxseSBmb3IgY29tcG9uZW50IGxpZmVjeWNsZSBtYW5hZ2VtZW50XG4gICAqIGFuZCBjYW4gYmUgY2xlYXJlZCB0aHJvdWdoIHRoZSBkZXN0cm95IG1ldGhvZC4gVGhlIHJlZmVyZW5jZSBhbGxvd3MgYWNjZXNzIHRvXG4gICAqIHRoZSBhY3RpdmUgY29tcG9uZW50IGluc3RhbmNlIGZvciBvcGVyYXRpb25zIHRoYXQgbmVlZCB0byBpbnRlcmFjdCB3aXRoIHRoZVxuICAgKiBjdXJyZW50bHkgcmVuZGVyZWQgY29tcG9uZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAc3RhdGljXG4gICAqIEB0eXBlIHtUeXBlPHVua25vd24+IHwgdW5kZWZpbmVkfVxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBUeXBlPHVua25vd24+IHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ29uc3RydWN0cyBhIG5ldyBOZ3hSZW5kZXJpbmdFbmdpbmUgaW5zdGFuY2VcbiAgICogQHN1bW1hcnkgSW5pdGlhbGl6ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIEFuZ3VsYXIgcmVuZGVyaW5nIGVuZ2luZSBieSBjYWxsaW5nIHRoZSBwYXJlbnRcbiAgICogY29uc3RydWN0b3Igd2l0aCB0aGUgJ2FuZ3VsYXInIGVuZ2luZSB0eXBlIGlkZW50aWZpZXIuIFRoaXMgY29uc3RydWN0b3Igc2V0cyB1cCB0aGUgYmFzZVxuICAgKiByZW5kZXJpbmcgZW5naW5lIGZ1bmN0aW9uYWxpdHkgd2l0aCBBbmd1bGFyLXNwZWNpZmljIGNvbmZpZ3VyYXRpb25zIGFuZCBwcmVwYXJlcyB0aGVcbiAgICogaW5zdGFuY2UgZm9yIGNvbXBvbmVudCByZWdpc3RyYXRpb24gYW5kIHJlbmRlcmluZyBvcGVyYXRpb25zLlxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCdhbmd1bGFyJyk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENvbnZlcnRzIGEgZmllbGQgZGVmaW5pdGlvbiB0byBhbiBBbmd1bGFyIGNvbXBvbmVudCBvdXRwdXRcbiAgICogQHN1bW1hcnkgVGhpcyBwcml2YXRlIG1ldGhvZCB0YWtlcyBhIGZpZWxkIGRlZmluaXRpb24gYW5kIGNyZWF0ZXMgdGhlIGNvcnJlc3BvbmRpbmcgQW5ndWxhciBjb21wb25lbnQuXG4gICAqIEl0IGhhbmRsZXMgY29tcG9uZW50IGluc3RhbnRpYXRpb24sIGlucHV0IHByb3BlcnR5IG1hcHBpbmcsIGFuZCBjaGlsZCBjb21wb25lbnQgcmVuZGVyaW5nLlxuICAgKiBUaGUgbWV0aG9kIHZhbGlkYXRlcyBpbnB1dCBwcm9wZXJ0aWVzIGFnYWluc3QgdGhlIGNvbXBvbmVudCdzIG1ldGFkYXRhIGFuZCBwcm9jZXNzZXNcbiAgICogY2hpbGQgY29tcG9uZW50cyByZWN1cnNpdmVseS5cbiAgICpcbiAgICogQHBhcmFtIHtGaWVsZERlZmluaXRpb248QW5ndWxhckZpZWxkRGVmaW5pdGlvbj59IGZpZWxkRGVmIC0gVGhlIGZpZWxkIGRlZmluaXRpb24gdG8gY29udmVydFxuICAgKiBAcGFyYW0ge1ZpZXdDb250YWluZXJSZWZ9IHZjciAtIFRoZSB2aWV3IGNvbnRhaW5lciByZWZlcmVuY2UgZm9yIGNvbXBvbmVudCBjcmVhdGlvblxuICAgKiBAcGFyYW0ge0luamVjdG9yfSBpbmplY3RvciAtIFRoZSBBbmd1bGFyIGluamVjdG9yIGZvciBkZXBlbmRlbmN5IGluamVjdGlvblxuICAgKiBAcGFyYW0ge1RlbXBsYXRlUmVmPGFueT59IHRwbCAtIFRoZSB0ZW1wbGF0ZSByZWZlcmVuY2UgZm9yIGNvbnRlbnQgcHJvamVjdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVnaXN0cnlGb3JtSWQgLSBGb3JtIGlkZW50aWZpZXIgZm9yIHRoZSBjb21wb25lbnQgcmVuZGVyZXJcbiAgICogQHJldHVybiB7QW5ndWxhckR5bmFtaWNPdXRwdXR9IFRoZSBBbmd1bGFyIGNvbXBvbmVudCBvdXRwdXQgd2l0aCBjb21wb25lbnQgcmVmZXJlbmNlIGFuZCBpbnB1dHNcbiAgICpcbiAgICogQG1lcm1haWRcbiAgICogc2VxdWVuY2VEaWFncmFtXG4gICAqICAgcGFydGljaXBhbnQgTWV0aG9kIGFzIGZyb21GaWVsZERlZmluaXRpb25cbiAgICogICBwYXJ0aWNpcGFudCBDb21wb25lbnRzIGFzIE5neFJlbmRlcmluZ0VuZ2luZS5jb21wb25lbnRzXG4gICAqICAgcGFydGljaXBhbnQgQW5ndWxhciBhcyBBbmd1bGFyIENvcmVcbiAgICogICBwYXJ0aWNpcGFudCBQcm9jZXNzIGFzIHByb2Nlc3NDaGlsZFxuICAgKlxuICAgKiAgIE1ldGhvZC0+PkNvbXBvbmVudHM6IGNvbXBvbmVudHMoZmllbGREZWYudGFnKVxuICAgKiAgIENvbXBvbmVudHMtLT4+TWV0aG9kOiBjb21wb25lbnQgY29uc3RydWN0b3JcbiAgICogICBNZXRob2QtPj5Bbmd1bGFyOiByZWZsZWN0Q29tcG9uZW50VHlwZShjb21wb25lbnQpXG4gICAqICAgQW5ndWxhci0tPj5NZXRob2Q6IGNvbXBvbmVudE1ldGFkYXRhXG4gICAqICAgTWV0aG9kLT4+TWV0aG9kOiBWYWxpZGF0ZSBpbnB1dCBwcm9wZXJ0aWVzXG4gICAqICAgTWV0aG9kLT4+TWV0aG9kOiBDcmVhdGUgcmVzdWx0IG9iamVjdFxuICAgKiAgIGFsdCBIYXMgY2hpbGRyZW5cbiAgICogICAgIE1ldGhvZC0+PlByb2Nlc3M6IFByb2Nlc3MgY2hpbGRyZW4gcmVjdXJzaXZlbHlcbiAgICogICAgIFByb2Nlc3MtPj5NZXRob2Q6IFJldHVybiBwcm9jZXNzZWQgY2hpbGRyZW5cbiAgICogICAgIE1ldGhvZC0+PkFuZ3VsYXI6IENyZWF0ZSBlbWJlZGRlZCB2aWV3XG4gICAqICAgICBNZXRob2QtPj5NZXRob2Q6IENyZWF0ZSBjb21wb25lbnQgaW5zdGFuY2VcbiAgICogICBlbmRcbiAgICogICBNZXRob2QtLT4+Q2FsbGVyOiByZXR1cm4gQW5ndWxhckR5bmFtaWNPdXRwdXRcbiAgICovXG4gIHByaXZhdGUgZnJvbUZpZWxkRGVmaW5pdGlvbihcbiAgICBmaWVsZERlZjogRmllbGREZWZpbml0aW9uPEFuZ3VsYXJGaWVsZERlZmluaXRpb24+LFxuICAgIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgdHBsOiBUZW1wbGF0ZVJlZjx1bmtub3duPixcbiAgICByZWdpc3RyeUZvcm1JZDogc3RyaW5nID0gRGF0ZS5ub3coKS50b1N0cmluZygzNikudG9VcHBlckNhc2UoKSxcbiAgKTogQW5ndWxhckR5bmFtaWNPdXRwdXQge1xuICAgIGNvbnN0IGNtcCA9IChmaWVsZERlZiBhcyBLZXlWYWx1ZSk/LlsnY29tcG9uZW50J10gfHwgTmd4UmVuZGVyaW5nRW5naW5lLmNvbXBvbmVudHMoZmllbGREZWYudGFnKTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBjbXAuY29uc3RydWN0b3IgYXMgdW5rbm93biBhcyBUeXBlPHVua25vd24+O1xuXG4gICAgY29uc3QgY29tcG9uZW50TWV0YWRhdGEgPSByZWZsZWN0Q29tcG9uZW50VHlwZShjb21wb25lbnQpO1xuICAgIGlmICghY29tcG9uZW50TWV0YWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBJbnRlcm5hbEVycm9yKGBNZXRhZGF0YSBmb3IgY29tcG9uZW50ICR7ZmllbGREZWYudGFnfSBub3QgZm91bmQuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgeyBpbnB1dHM6IHBvc3NpYmxlSW5wdXRzIH0gPSBjb21wb25lbnRNZXRhZGF0YTtcbiAgICBjb25zdCBpbnB1dHMgPSB7IC4uLmZpZWxkRGVmLnByb3BzIH07XG5cbiAgICBjb25zdCB1bm1hcHBlZEtleXMgPSBPYmplY3Qua2V5cyhpbnB1dHMpLmZpbHRlcihpbnB1dCA9PiB7XG4gICAgICBjb25zdCBpc01hcHBlZCA9IHBvc3NpYmxlSW5wdXRzLmZpbmQoKHsgcHJvcE5hbWUgfSkgPT4gcHJvcE5hbWUgPT09IGlucHV0KTtcbiAgICAgIGlmICghaXNNYXBwZWQpIGRlbGV0ZSBpbnB1dHNbaW5wdXRdO1xuICAgICAgcmV0dXJuICFpc01hcHBlZDtcbiAgICB9KTtcblxuICAgIGlmICh1bm1hcHBlZEtleXMubGVuZ3RoID4gMClcbiAgICAgIGNvbnNvbGUud2FybihgVW5tYXBwZWQgaW5wdXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50ICR7ZmllbGREZWYudGFnfTogJHt1bm1hcHBlZEtleXMuam9pbignLCAnKX1gKTtcblxuICAgIGNvbnN0IG9wZXJhdGlvbiA9IE5neFJlbmRlcmluZ0VuZ2luZS5fb3BlcmF0aW9uO1xuXG4gICAgY29uc3QgaGlkZGVuT24gPSBpbnB1dHM/LmhpZGRlbiB8fCBbXTtcbiAgICBpZigoaGlkZGVuT24gYXMgc3RyaW5nW10pLmluY2x1ZGVzKG9wZXJhdGlvbiBhcyBzdHJpbmcpKVxuICAgICAgcmV0dXJuIHtpbnB1dHMsIGluamVjdG9yfTtcbiAgICAvLyBjb25zdCBoaWRkZW5PbiA9IGlucHV0cz8uaGlkZGVuIHx8IFtdO1xuICAgIGNvbnN0IHJlc3VsdDogQW5ndWxhckR5bmFtaWNPdXRwdXQgPSB7XG4gICAgICBjb21wb25lbnQsXG4gICAgICBpbnB1dHMsXG4gICAgICBpbmplY3RvcixcbiAgICB9O1xuXG4gICAgaWYgKGZpZWxkRGVmLnJlbmRlcmVySWQpXG4gICAgICAocmVzdWx0LmlucHV0cyBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilbJ3JlbmRlcmVySWQnXSA9IGZpZWxkRGVmLnJlbmRlcmVySWQ7XG5cbiAgICAvLyBwcm9jZXNzIGNoaWxkcmVuXG4gICAgaWYgKGZpZWxkRGVmLmNoaWxkcmVuPy5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdC5jaGlsZHJlbiA9IGZpZWxkRGVmLmNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IHtcbiAgICAgICAgaWYoY2hpbGQ/LmNoaWxkcmVuPy5sZW5ndGgpIHtcbiAgICAgICAgICBjaGlsZC5jaGlsZHJlbiA9IGNoaWxkLmNoaWxkcmVuLmZpbHRlcihjID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhpZGRlbk9uID0gYz8ucHJvcHM/LmhpZGRlbiB8fCBbXTtcbiAgICAgICAgICAgIGlmKCEoaGlkZGVuT24gYXMgc3RyaW5nW10pLmluY2x1ZGVzKG9wZXJhdGlvbiBhcyBzdHJpbmcpKVxuICAgICAgICAgICAgICByZXR1cm4gY1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgLy8gY3JlYXRlIGEgY2hpbGQgZm9ybSBhbmQgYWRkIGl0cyBjb250cm9scyBhcyBwcm9wZXJ0aWVzIG9mIGNoaWxkLnByb3BzXG4gICAgICAgIE5neEZvcm1TZXJ2aWNlLmFkZENvbnRyb2xGcm9tUHJvcHMocmVnaXN0cnlGb3JtSWQsIGNoaWxkLnByb3BzLCBpbnB1dHMpO1xuICAgICAgICByZXR1cm4gdGhpcy5mcm9tRmllbGREZWZpbml0aW9uKGNoaWxkLCB2Y3IsIGluamVjdG9yLCB0cGwsIHJlZ2lzdHJ5Rm9ybUlkKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGdlbmVyYXRpbmcgRE9NXG4gICAgdmNyLmNsZWFyKCk7XG4gICAgY29uc3QgdGVtcGxhdGUgPSB2Y3IuY3JlYXRlRW1iZWRkZWRWaWV3KHRwbCwgaW5qZWN0b3IpLnJvb3ROb2RlcztcbiAgICBjb25zdCBjb21wb25lbnRJbnN0YW5jZSA9IE5neFJlbmRlcmluZ0VuZ2luZS5jcmVhdGVDb21wb25lbnQoXG4gICAgICBjb21wb25lbnQsXG4gICAgICB7IC4uLmlucHV0cywgbW9kZWw6IHRoaXMuX21vZGVsIH0sXG4gICAgICBjb21wb25lbnRNZXRhZGF0YSxcbiAgICAgIHZjcixcbiAgICAgIGluamVjdG9yLFxuICAgICAgdGVtcGxhdGUsXG4gICAgKTtcblxuICAgIHJlc3VsdC5pbnN0YW5jZSA9IE5neFJlbmRlcmluZ0VuZ2luZS5faW5zdGFuY2UgPSBjb21wb25lbnRJbnN0YW5jZS5pbnN0YW5jZSBhcyBUeXBlPHVua25vd24+O1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIGFuIEFuZ3VsYXIgY29tcG9uZW50IGluc3RhbmNlXG4gICAqIEBzdW1tYXJ5IFRoaXMgc3RhdGljIHV0aWxpdHkgbWV0aG9kIGNyZWF0ZXMgYW4gQW5ndWxhciBjb21wb25lbnQgaW5zdGFuY2Ugd2l0aCB0aGUgc3BlY2lmaWVkXG4gICAqIGlucHV0cyBhbmQgdGVtcGxhdGUuIEl0IHVzZXMgQW5ndWxhcidzIGNvbXBvbmVudCBjcmVhdGlvbiBBUEkgdG8gaW5zdGFudGlhdGUgdGhlIGNvbXBvbmVudFxuICAgKiBhbmQgdGhlbiBzZXRzIHRoZSBpbnB1dCBwcm9wZXJ0aWVzIHVzaW5nIHRoZSBwcm92aWRlZCBtZXRhZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtUeXBlPHVua25vd24+fSBjb21wb25lbnQgLSBUaGUgY29tcG9uZW50IHR5cGUgdG8gY3JlYXRlXG4gICAqIEBwYXJhbSB7S2V5VmFsdWV9IFtpbnB1dHM9e31dIC0gVGhlIGlucHV0IHByb3BlcnRpZXMgdG8gc2V0IG9uIHRoZSBjb21wb25lbnRcbiAgICogQHBhcmFtIHtDb21wb25lbnRNaXJyb3I8dW5rbm93bj59IG1ldGFkYXRhIC0gVGhlIGNvbXBvbmVudCBtZXRhZGF0YSBmb3IgaW5wdXQgdmFsaWRhdGlvblxuICAgKiBAcGFyYW0ge1ZpZXdDb250YWluZXJSZWZ9IHZjciAtIFRoZSB2aWV3IGNvbnRhaW5lciByZWZlcmVuY2UgZm9yIGNvbXBvbmVudCBjcmVhdGlvblxuICAgKiBAcGFyYW0ge0luamVjdG9yfSBpbmplY3RvciAtIFRoZSBBbmd1bGFyIGluamVjdG9yIGZvciBkZXBlbmRlbmN5IGluamVjdGlvblxuICAgKiBAcGFyYW0ge05vZGVbXX0gW3RlbXBsYXRlPVtdXSAtIFRoZSB0ZW1wbGF0ZSBub2RlcyB0byBwcm9qZWN0IGludG8gdGhlIGNvbXBvbmVudFxuICAgKiBAcmV0dXJuIHtDb21wb25lbnRSZWY8dW5rbm93bj59IFRoZSBjcmVhdGVkIGNvbXBvbmVudCByZWZlcmVuY2VcbiAgICovXG4gIHN0YXRpYyBjcmVhdGVDb21wb25lbnQoY29tcG9uZW50OiBUeXBlPHVua25vd24+LCBpbnB1dHM6IEtleVZhbHVlID0ge30sIG1ldGFkYXRhOiBDb21wb25lbnRNaXJyb3I8dW5rbm93bj4sIHZjcjogVmlld0NvbnRhaW5lclJlZiwgaW5qZWN0b3I6IEluamVjdG9yLCB0ZW1wbGF0ZTogTm9kZVtdID0gW10pOiBDb21wb25lbnRSZWY8dW5rbm93bj4ge1xuICAgIGNvbnN0IGNvbXBvbmVudEluc3RhbmNlID0gdmNyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQgYXMgVHlwZTx1bmtub3duPiwge1xuICAgICAgZW52aXJvbm1lbnRJbmplY3RvcjogaW5qZWN0b3IgYXMgRW52aXJvbm1lbnRJbmplY3RvcixcbiAgICAgIHByb2plY3RhYmxlTm9kZXM6IFt0ZW1wbGF0ZV0sXG4gICAgfSk7XG4gICAgdGhpcy5zZXRJbnB1dHMoY29tcG9uZW50SW5zdGFuY2UsIGlucHV0cywgbWV0YWRhdGEpO1xuICAgIHJldHVybiBjb21wb25lbnRJbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gRXh0cmFjdHMgZGVjb3JhdG9yIG1ldGFkYXRhIGZyb20gYSBtb2RlbFxuICAgKiBAc3VtbWFyeSBUaGlzIG1ldGhvZCBwcm92aWRlcyBhY2Nlc3MgdG8gdGhlIGZpZWxkIGRlZmluaXRpb24gZ2VuZXJhdGVkIGZyb20gYSBtb2RlbCdzXG4gICAqIGRlY29yYXRvcnMuIEl0J3MgYSBjb252ZW5pZW5jZSB3cmFwcGVyIGFyb3VuZCB0aGUgdG9GaWVsZERlZmluaXRpb24gbWV0aG9kIHRoYXRcbiAgICogY29udmVydHMgYSBtb2RlbCB0byBhIGZpZWxkIGRlZmluaXRpb24gYmFzZWQgb24gaXRzIGRlY29yYXRvcnMgYW5kIHRoZSBwcm92aWRlZFxuICAgKiBnbG9iYWwgcHJvcGVydGllcy5cbiAgICpcbiAgICogQHBhcmFtIHtNb2RlbH0gbW9kZWwgLSBUaGUgbW9kZWwgdG8gZXh0cmFjdCBkZWNvcmF0b3JzIGZyb21cbiAgICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPn0gZ2xvYmFsUHJvcHMgLSBHbG9iYWwgcHJvcGVydGllcyB0byBpbmNsdWRlIGluIHRoZSBmaWVsZCBkZWZpbml0aW9uXG4gICAqIEByZXR1cm4ge0ZpZWxkRGVmaW5pdGlvbjxBbmd1bGFyRmllbGREZWZpbml0aW9uPn0gVGhlIGZpZWxkIGRlZmluaXRpb24gZ2VuZXJhdGVkIGZyb20gdGhlIG1vZGVsXG4gICAqL1xuICBnZXREZWNvcmF0b3JzKG1vZGVsOiBNb2RlbCwgZ2xvYmFsUHJvcHM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogRmllbGREZWZpbml0aW9uPEFuZ3VsYXJGaWVsZERlZmluaXRpb24+IHtcbiAgICByZXR1cm4gdGhpcy50b0ZpZWxkRGVmaW5pdGlvbihtb2RlbCwgZ2xvYmFsUHJvcHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBEZXN0cm95cyB0aGUgY3VycmVudCBlbmdpbmUgaW5zdGFuY2VcbiAgICogQHN1bW1hcnkgVGhpcyBzdGF0aWMgbWV0aG9kIGNsZWFycyB0aGUgY3VycmVudCBpbnN0YW5jZSByZWZlcmVuY2UsIGVmZmVjdGl2ZWx5XG4gICAqIGRlc3Ryb3lpbmcgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgcmVuZGVyaW5nIGVuZ2luZS4gVGhpcyBjYW4gYmUgdXNlZFxuICAgKiB0byByZXNldCB0aGUgZW5naW5lIHN0YXRlIG9yIHRvIHByZXBhcmUgZm9yIGEgbmV3IGluc3RhbmNlIGNyZWF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBpbnN0YW5jZSBpcyBkZXN0cm95ZWRcbiAgICovXG4gIHN0YXRpYyBhc3luYyBkZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIE5neFJlbmRlcmluZ0VuZ2luZS5faW5zdGFuY2UgPSB1bmRlZmluZWQ7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUmVuZGVycyBhIG1vZGVsIGludG8gYW4gQW5ndWxhciBjb21wb25lbnQgb3V0cHV0XG4gICAqIEBzdW1tYXJ5IFRoaXMgbWV0aG9kIHRha2VzIGEgbW9kZWwgYW5kIGNvbnZlcnRzIGl0IHRvIGFuIEFuZ3VsYXIgY29tcG9uZW50IG91dHB1dC5cbiAgICogSXQgZmlyc3Qgc3RvcmVzIGEgcmVmZXJlbmNlIHRvIHRoZSBtb2RlbCwgdGhlbiBjb252ZXJ0cyBpdCB0byBhIGZpZWxkIGRlZmluaXRpb25cbiAgICogdXNpbmcgdGhlIGJhc2UgUmVuZGVyaW5nRW5naW5lJ3MgdG9GaWVsZERlZmluaXRpb24gbWV0aG9kLCBhbmQgZmluYWxseSBjb252ZXJ0c1xuICAgKiB0aGF0IGZpZWxkIGRlZmluaXRpb24gdG8gYW4gQW5ndWxhciBjb21wb25lbnQgb3V0cHV0IHVzaW5nIGZyb21GaWVsZERlZmluaXRpb24uXG4gICAqXG4gICAqIEB0ZW1wbGF0ZSBNIC0gVHlwZSBleHRlbmRpbmcgTW9kZWxcbiAgICogQHBhcmFtIHtNfSBtb2RlbCAtIFRoZSBtb2RlbCB0byByZW5kZXJcbiAgICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPn0gZ2xvYmFsUHJvcHMgLSBHbG9iYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBjb21wb25lbnRcbiAgICogQHBhcmFtIHtWaWV3Q29udGFpbmVyUmVmfSB2Y3IgLSBUaGUgdmlldyBjb250YWluZXIgcmVmZXJlbmNlIGZvciBjb21wb25lbnQgY3JlYXRpb25cbiAgICogQHBhcmFtIHtJbmplY3Rvcn0gaW5qZWN0b3IgLSBUaGUgQW5ndWxhciBpbmplY3RvciBmb3IgZGVwZW5kZW5jeSBpbmplY3Rpb25cbiAgICogQHBhcmFtIHtUZW1wbGF0ZVJlZjxhbnk+fSB0cGwgLSBUaGUgdGVtcGxhdGUgcmVmZXJlbmNlIGZvciBjb250ZW50IHByb2plY3Rpb25cbiAgICogQHJldHVybiB7QW5ndWxhckR5bmFtaWNPdXRwdXR9IFRoZSBBbmd1bGFyIGNvbXBvbmVudCBvdXRwdXQgd2l0aCBjb21wb25lbnQgcmVmZXJlbmNlIGFuZCBpbnB1dHNcbiAgICpcbiAgICogQG1lcm1haWRcbiAgICogc2VxdWVuY2VEaWFncmFtXG4gICAqICAgcGFydGljaXBhbnQgQ2xpZW50IGFzIENsaWVudCBDb2RlXG4gICAqICAgcGFydGljaXBhbnQgUmVuZGVyIGFzIHJlbmRlciBtZXRob2RcbiAgICogICBwYXJ0aWNpcGFudCBUb0ZpZWxkIGFzIHRvRmllbGREZWZpbml0aW9uXG4gICAqICAgcGFydGljaXBhbnQgRnJvbUZpZWxkIGFzIGZyb21GaWVsZERlZmluaXRpb25cbiAgICpcbiAgICogICBDbGllbnQtPj5SZW5kZXI6IHJlbmRlcihtb2RlbCwgZ2xvYmFsUHJvcHMsIHZjciwgaW5qZWN0b3IsIHRwbClcbiAgICogICBSZW5kZXItPj5SZW5kZXI6IFN0b3JlIG1vZGVsIHJlZmVyZW5jZVxuICAgKiAgIFJlbmRlci0+PlRvRmllbGQ6IHRvRmllbGREZWZpbml0aW9uKG1vZGVsLCBnbG9iYWxQcm9wcylcbiAgICogICBUb0ZpZWxkLS0+PlJlbmRlcjogZmllbGREZWZcbiAgICogICBSZW5kZXItPj5Gcm9tRmllbGQ6IGZyb21GaWVsZERlZmluaXRpb24oZmllbGREZWYsIHZjciwgaW5qZWN0b3IsIHRwbClcbiAgICogICBGcm9tRmllbGQtLT4+UmVuZGVyOiBBbmd1bGFyRHluYW1pY091dHB1dFxuICAgKiAgIFJlbmRlci0tPj5DbGllbnQ6IHJldHVybiBBbmd1bGFyRHluYW1pY091dHB1dFxuICAgKi9cbiAgb3ZlcnJpZGUgcmVuZGVyPE0gZXh0ZW5kcyBNb2RlbD4oXG4gICAgbW9kZWw6IE0sXG4gICAgZ2xvYmFsUHJvcHM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICAgIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgdHBsOiBUZW1wbGF0ZVJlZjx1bmtub3duPixcbiAgKTogQW5ndWxhckR5bmFtaWNPdXRwdXQge1xuICAgIGxldCByZXN1bHQ6IEFuZ3VsYXJEeW5hbWljT3V0cHV0O1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9tb2RlbCA9IG1vZGVsO1xuICAgICAgY29uc3QgZm9ybUlkID0gRGF0ZS5ub3coKS50b1N0cmluZygzNikudG9VcHBlckNhc2UoKTtcbiAgICAgIGNvbnN0IGZpZWxkRGVmID0gdGhpcy50b0ZpZWxkRGVmaW5pdGlvbihtb2RlbCwgZ2xvYmFsUHJvcHMpO1xuICAgICAgY29uc3QgcHJvcHMgPSBmaWVsZERlZi5wcm9wcyBhcyBLZXlWYWx1ZTtcbiAgICAgIGlmKCFOZ3hSZW5kZXJpbmdFbmdpbmUuX29wZXJhdGlvbilcbiAgICAgICAgTmd4UmVuZGVyaW5nRW5naW5lLl9vcGVyYXRpb24gPSBwcm9wcz8uWydvcGVyYXRpb24nXSB8fCB1bmRlZmluZWQ7XG4gICAgICByZXN1bHQgPSB0aGlzLmZyb21GaWVsZERlZmluaXRpb24oZmllbGREZWYsIHZjciwgaW5qZWN0b3IsIHRwbCwgZm9ybUlkKTtcblxuICAgICAgKHJlc3VsdCEuaW5zdGFuY2UhIGFzIEtleVZhbHVlKVsnZm9ybUdyb3VwJ10gPSBOZ3hGb3JtU2VydmljZS5nZXRDb250cm9sRnJvbUZvcm0oZm9ybUlkKTtcbiAgICAgIE5neEZvcm1TZXJ2aWNlLnJlbW92ZVJlZ2lzdHJ5KGZvcm1JZCk7XG4gICAgfSBjYXRjaCAoZTogdW5rbm93bikge1xuICAgICAgdGhyb3cgbmV3IEludGVybmFsRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgdG8gcmVuZGVyIE1vZGVsICR7bW9kZWwuY29uc3RydWN0b3IubmFtZX06ICR7ZX1gLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBJbml0aWFsaXplcyB0aGUgcmVuZGVyaW5nIGVuZ2luZVxuICAgKiBAc3VtbWFyeSBUaGlzIG1ldGhvZCBpbml0aWFsaXplcyB0aGUgcmVuZGVyaW5nIGVuZ2luZS4gSXQgY2hlY2tzIGlmIHRoZSBlbmdpbmUgaXMgYWxyZWFkeSBpbml0aWFsaXplZFxuICAgKiBhbmQgc2V0cyB0aGUgaW5pdGlhbGl6ZWQgZmxhZyB0byB0cnVlLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBlbmdpbmUgaXMgdXNlZFxuICAgKiB0byBlbnN1cmUgaXQncyBwcm9wZXJseSBzZXQgdXAgZm9yIHJlbmRlcmluZyBvcGVyYXRpb25zLlxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGluaXRpYWxpemF0aW9uIGlzIGNvbXBsZXRlXG4gICAqL1xuICBvdmVycmlkZSBhc3luYyBpbml0aWFsaXplKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLmluaXRpYWxpemVkKVxuICAgICAgcmV0dXJuO1xuICAgIC8vIFZhbGlkYXRhYmxlQnlUeXBlW11cbiAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUmVnaXN0ZXJzIGEgY29tcG9uZW50IHdpdGggdGhlIHJlbmRlcmluZyBlbmdpbmVcbiAgICogQHN1bW1hcnkgVGhpcyBzdGF0aWMgbWV0aG9kIHJlZ2lzdGVycyBhIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB3aXRoIHRoZSByZW5kZXJpbmcgZW5naW5lXG4gICAqIHVuZGVyIGEgc3BlY2lmaWMgbmFtZS4gSXQgaW5pdGlhbGl6ZXMgdGhlIGNvbXBvbmVudHMgcmVnaXN0cnkgaWYgbmVlZGVkIGFuZCB0aHJvd3NcbiAgICogYW4gZXJyb3IgaWYgYSBjb21wb25lbnQgaXMgYWxyZWFkeSByZWdpc3RlcmVkIHVuZGVyIHRoZSBzYW1lIG5hbWUgdG8gcHJldmVudFxuICAgKiBhY2NpZGVudGFsIG92ZXJyaWRlcy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSB0byByZWdpc3RlciB0aGUgY29tcG9uZW50IHVuZGVyXG4gICAqIEBwYXJhbSB7Q29uc3RydWN0b3I8dW5rbm93bj59IGNvbnN0cnVjdG9yIC0gVGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvclxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgc3RhdGljIHJlZ2lzdGVyQ29tcG9uZW50KG5hbWU6IHN0cmluZywgY29uc3RydWN0b3I6IENvbnN0cnVjdG9yPHVua25vd24+KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9jb21wb25lbnRzKSB0aGlzLl9jb21wb25lbnRzID0ge307XG4gICAgaWYgKG5hbWUgaW4gdGhpcy5fY29tcG9uZW50cylcbiAgICAgIHRocm93IG5ldyBJbnRlcm5hbEVycm9yKGBDb21wb25lbnQgYWxyZWFkeSByZWdpc3RlcmVkIHVuZGVyICR7bmFtZX1gKTtcbiAgICB0aGlzLl9jb21wb25lbnRzW25hbWVdID0ge1xuICAgICAgY29uc3RydWN0b3I6IGNvbnN0cnVjdG9yLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFJldHJpZXZlcyByZWdpc3RlcmVkIGNvbXBvbmVudHMgZnJvbSB0aGUgcmVuZGVyaW5nIGVuZ2luZVxuICAgKiBAc3VtbWFyeSBUaGlzIHN0YXRpYyBtZXRob2QgcmV0cmlldmVzIGVpdGhlciBhbGwgcmVnaXN0ZXJlZCBjb21wb25lbnRzIG9yIGEgc3BlY2lmaWMgY29tcG9uZW50XG4gICAqIGJ5IGl0cyBzZWxlY3Rvci4gV2hlbiBjYWxsZWQgd2l0aG91dCBhIHNlbGVjdG9yLCBpdCByZXR1cm5zIGFuIGFycmF5IG9mIGFsbCByZWdpc3RlcmVkXG4gICAqIGNvbXBvbmVudHMuIFdoZW4gY2FsbGVkIHdpdGggYSBzZWxlY3RvciwgaXQgcmV0dXJucyB0aGUgc3BlY2lmaWMgY29tcG9uZW50IGlmIGZvdW5kLFxuICAgKiBvciB0aHJvd3MgYW4gZXJyb3IgaWYgdGhlIGNvbXBvbmVudCBpcyBub3QgcmVnaXN0ZXJlZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcl0gLSBPcHRpb25hbCBzZWxlY3RvciB0byByZXRyaWV2ZSBhIHNwZWNpZmljIGNvbXBvbmVudFxuICAgKiBAcmV0dXJuIHtPYmplY3R8QXJyYXl9IEVpdGhlciBhIHNwZWNpZmljIGNvbXBvbmVudCBvciBhbiBhcnJheSBvZiBhbGwgY29tcG9uZW50c1xuICAgKi9cbiAgc3RhdGljIGNvbXBvbmVudHMoc2VsZWN0b3I/OiBzdHJpbmcpOiBvYmplY3QgfCBzdHJpbmdbXSB7XG4gICAgaWYgKCFzZWxlY3RvcikgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5fY29tcG9uZW50cyk7XG4gICAgaWYgKCEoc2VsZWN0b3IgaW4gdGhpcy5fY29tcG9uZW50cykpXG4gICAgICB0aHJvdyBuZXcgSW50ZXJuYWxFcnJvcihgTm8gQ29tcG9uZW50IHJlZ2lzdGVyZWQgdW5kZXIgJHtzZWxlY3Rvcn1gKTtcbiAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50c1tzZWxlY3Rvcl07XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEdlbmVyYXRlcyBhIGtleSBmb3IgcmVmbGVjdGlvbiBtZXRhZGF0YVxuICAgKiBAc3VtbWFyeSBUaGlzIHN0YXRpYyBtZXRob2QgZ2VuZXJhdGVzIGEga2V5IGZvciByZWZsZWN0aW9uIG1ldGFkYXRhIGJ5IHByZWZpeGluZyB0aGUgaW5wdXQga2V5XG4gICAqIHdpdGggdGhlIEFuZ3VsYXIgZW5naW5lJ3MgcmVmbGVjdGlvbiBwcmVmaXguIFRoaXMgaXMgdXNlZCBmb3Igc3RvcmluZyBhbmQgcmV0cmlldmluZ1xuICAgKiBtZXRhZGF0YSBpbiBhIG5hbWVzcGFjZWQgd2F5IHRvIGF2b2lkIGNvbmZsaWN0cyB3aXRoIG90aGVyIG1ldGFkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIGJhc2Uga2V5IHRvIHByZWZpeFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBwcmVmaXhlZCBrZXkgZm9yIHJlZmxlY3Rpb24gbWV0YWRhdGFcbiAgICovXG4gIHN0YXRpYyBvdmVycmlkZSBrZXkoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHtBbmd1bGFyRW5naW5lS2V5cy5SRUZMRUNUfSR7a2V5fWA7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFNldHMgaW5wdXQgcHJvcGVydGllcyBvbiBhIGNvbXBvbmVudCBpbnN0YW5jZVxuICAgKiBAc3VtbWFyeSBUaGlzIHN0YXRpYyB1dGlsaXR5IG1ldGhvZCBzZXRzIGlucHV0IHByb3BlcnRpZXMgb24gYSBjb21wb25lbnQgaW5zdGFuY2VcbiAgICogYmFzZWQgb24gdGhlIHByb3ZpZGVkIGlucHV0cyBvYmplY3QgYW5kIGNvbXBvbmVudCBtZXRhZGF0YS4gSXQgaGFuZGxlcyBib3RoIHNpbXBsZVxuICAgKiB2YWx1ZXMgYW5kIG5lc3RlZCBvYmplY3RzLCByZWN1cnNpdmVseSBwcm9jZXNzaW5nIG9iamVjdCBwcm9wZXJ0aWVzLiBUaGUgbWV0aG9kXG4gICAqIHZhbGlkYXRlcyBlYWNoIGlucHV0IGFnYWluc3QgdGhlIGNvbXBvbmVudCdzIG1ldGFkYXRhIHRvIGVuc3VyZSBvbmx5IHZhbGlkIGlucHV0c1xuICAgKiBhcmUgc2V0LlxuICAgKlxuICAgKiBAcGFyYW0ge0NvbXBvbmVudFJlZjx1bmtub3duPn0gY29tcG9uZW50IC0gVGhlIGNvbXBvbmVudCByZWZlcmVuY2UgdG8gc2V0IGlucHV0cyBvblxuICAgKiBAcGFyYW0ge0tleVZhbHVlfSBpbnB1dHMgLSBUaGUgaW5wdXQgcHJvcGVydGllcyB0byBzZXRcbiAgICogQHBhcmFtIHtDb21wb25lbnRNaXJyb3I8dW5rbm93bj59IG1ldGFkYXRhIC0gVGhlIGNvbXBvbmVudCBtZXRhZGF0YSBmb3IgaW5wdXQgdmFsaWRhdGlvblxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKlxuICAgKiBAbWVybWFpZFxuICAgKiBzZXF1ZW5jZURpYWdyYW1cbiAgICogICBwYXJ0aWNpcGFudCBDYWxsZXJcbiAgICogICBwYXJ0aWNpcGFudCBTZXRJbnB1dHMgYXMgc2V0SW5wdXRzXG4gICAqICAgcGFydGljaXBhbnQgUGFyc2UgYXMgcGFyc2VJbnB1dFZhbHVlXG4gICAqICAgcGFydGljaXBhbnQgQ29tcG9uZW50IGFzIENvbXBvbmVudFJlZlxuICAgKlxuICAgKiAgIENhbGxlci0+PlNldElucHV0czogc2V0SW5wdXRzKGNvbXBvbmVudCwgaW5wdXRzLCBtZXRhZGF0YSlcbiAgICogICBTZXRJbnB1dHMtPj5TZXRJbnB1dHM6IEl0ZXJhdGUgdGhyb3VnaCBpbnB1dHNcbiAgICogICBsb29wIEZvciBlYWNoIGlucHV0XG4gICAqICAgICBTZXRJbnB1dHMtPj5TZXRJbnB1dHM6IENoZWNrIGlmIGlucHV0IGV4aXN0cyBpbiBtZXRhZGF0YVxuICAgKiAgICAgYWx0IElucHV0IGlzICdwcm9wcydcbiAgICogICAgICAgU2V0SW5wdXRzLT4+UGFyc2U6IHBhcnNlSW5wdXRWYWx1ZShjb21wb25lbnQsIHZhbHVlKVxuICAgKiAgICAgICBQYXJzZS0+PlBhcnNlOiBSZWN1cnNpdmVseSBwcm9jZXNzIG5lc3RlZCBvYmplY3RzXG4gICAqICAgICAgIFBhcnNlLT4+Q29tcG9uZW50OiBzZXRJbnB1dChrZXksIHZhbHVlKVxuICAgKiAgICAgZWxzZSBJbnB1dCBpcyB2YWxpZFxuICAgKiAgICAgICBTZXRJbnB1dHMtPj5Db21wb25lbnQ6IHNldElucHV0KGtleSwgdmFsdWUpXG4gICAqICAgICBlbmRcbiAgICogICBlbmRcbiAgICovXG4gIHN0YXRpYyBzZXRJbnB1dHMoY29tcG9uZW50OiBDb21wb25lbnRSZWY8dW5rbm93bj4sIGlucHV0czogS2V5VmFsdWUsIG1ldGFkYXRhOiBDb21wb25lbnRNaXJyb3I8dW5rbm93bj4pOiB2b2lkIHtcbiAgICBmdW5jdGlvbiBwYXJzZUlucHV0VmFsdWUoY29tcG9uZW50OiBDb21wb25lbnRSZWY8dW5rbm93bj4sIGlucHV0OiBLZXlWYWx1ZSkge1xuICAgICAgT2JqZWN0LmtleXMoaW5wdXQpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpbnB1dFtrZXldO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhIXZhbHVlKVxuICAgICAgICAgIHJldHVybiBwYXJzZUlucHV0VmFsdWUoY29tcG9uZW50LCB2YWx1ZSk7XG4gICAgICAgIGNvbXBvbmVudC5zZXRJbnB1dChrZXksIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIE9iamVjdC5lbnRyaWVzKGlucHV0cykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICBjb25zdCBwcm9wID0gbWV0YWRhdGEuaW5wdXRzLmZpbmQoKGl0ZW06IHsgcHJvcE5hbWU6IHN0cmluZyB9KSA9PiBpdGVtLnByb3BOYW1lID09PSBrZXkpO1xuICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ3Byb3BzJylcbiAgICAgICAgICBwYXJzZUlucHV0VmFsdWUoY29tcG9uZW50LCB2YWx1ZSk7XG4gICAgICAgIC8vIGlmKGtleSA9PT0gJ2xvY2FsZScgJiYgIXZhbHVlKVxuICAgICAgICAvLyAgIHZhbHVlID0gZ2V0TG9jYWxlRnJvbUNsYXNzTmFtZSh0aGlzLl9jb21wb25lbnROYW1lKTtcbiAgICAgICAgY29tcG9uZW50LnNldElucHV0KGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=