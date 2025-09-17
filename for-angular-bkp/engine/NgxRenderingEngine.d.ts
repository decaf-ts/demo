import { FieldDefinition, RenderingEngine } from '@decaf-ts/ui-decorators';
import { AngularFieldDefinition, KeyValue } from './types';
import { AngularDynamicOutput } from './interfaces';
import { Constructor, Model } from '@decaf-ts/decorator-validation';
import { ComponentMirror, ComponentRef, Injector, TemplateRef, Type, ViewContainerRef } from '@angular/core';
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
export declare class NgxRenderingEngine extends RenderingEngine<AngularFieldDefinition, AngularDynamicOutput> {
    /**
     * @description Registry of components available for rendering
     * @summary Static registry that stores all registered components indexed by their selector name.
     * Each component entry contains a constructor reference that can be used to instantiate
     * the component during the rendering process. This registry is shared across all instances
     * of the rendering engine and is populated through the registerComponent method.
     *
     * @private
     * @static
     * @type {Record<string, { constructor: Constructor<unknown> }>}
     */
    private static _components;
    /**
     * @description Currently active model being rendered
     * @summary Stores a reference to the model instance that is currently being processed
     * by the rendering engine. This property is set during the render method execution
     * and is used throughout the rendering lifecycle to access model data and metadata.
     * The definite assignment assertion (!) is used because this property is always
     * initialized before use within the render method.
     *
     * @private
     * @type {Model}
     */
    private _model;
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
    private static _operation;
    /**
     * @description Reference to the currently active component instance
     * @summary Static property that maintains a reference to the most recently created
     * component instance. This is used internally for component lifecycle management
     * and can be cleared through the destroy method. The reference allows access to
     * the active component instance for operations that need to interact with the
     * currently rendered component.
     *
     * @private
     * @static
     * @type {Type<unknown> | undefined}
     */
    private static _instance;
    /**
     * @description Constructs a new NgxRenderingEngine instance
     * @summary Initializes a new instance of the Angular rendering engine by calling the parent
     * constructor with the 'angular' engine type identifier. This constructor sets up the base
     * rendering engine functionality with Angular-specific configurations and prepares the
     * instance for component registration and rendering operations.
     *
     * @constructor
     */
    constructor();
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
    private fromFieldDefinition;
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
    static createComponent(component: Type<unknown>, inputs: KeyValue | undefined, metadata: ComponentMirror<unknown>, vcr: ViewContainerRef, injector: Injector, template?: Node[]): ComponentRef<unknown>;
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
    getDecorators(model: Model, globalProps: Record<string, unknown>): FieldDefinition<AngularFieldDefinition>;
    /**
     * @description Destroys the current engine instance
     * @summary This static method clears the current instance reference, effectively
     * destroying the singleton instance of the rendering engine. This can be used
     * to reset the engine state or to prepare for a new instance creation.
     *
     * @return {Promise<void>} A promise that resolves when the instance is destroyed
     */
    static destroy(): Promise<void>;
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
    render<M extends Model>(model: M, globalProps: Record<string, unknown>, vcr: ViewContainerRef, injector: Injector, tpl: TemplateRef<unknown>): AngularDynamicOutput;
    /**
     * @description Initializes the rendering engine
     * @summary This method initializes the rendering engine. It checks if the engine is already initialized
     * and sets the initialized flag to true. This method is called before the engine is used
     * to ensure it's properly set up for rendering operations.
     *
     * @return {Promise<void>} A promise that resolves when initialization is complete
     */
    initialize(): Promise<void>;
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
    static registerComponent(name: string, constructor: Constructor<unknown>): void;
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
    static components(selector?: string): object | string[];
    /**
     * @description Generates a key for reflection metadata
     * @summary This static method generates a key for reflection metadata by prefixing the input key
     * with the Angular engine's reflection prefix. This is used for storing and retrieving
     * metadata in a namespaced way to avoid conflicts with other metadata.
     *
     * @param {string} key - The base key to prefix
     * @return {string} The prefixed key for reflection metadata
     */
    static key(key: string): string;
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
    static setInputs(component: ComponentRef<unknown>, inputs: KeyValue, metadata: ComponentMirror<unknown>): void;
}
//# sourceMappingURL=NgxRenderingEngine.d.ts.map