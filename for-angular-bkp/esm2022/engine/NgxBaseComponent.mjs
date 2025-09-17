import { Input, Component, Inject, ViewChild, ElementRef, Output, EventEmitter, } from '@angular/core';
import { generateRandomValue, getInjectablesRegistry, getOnWindow, isDevelopmentMode, stringToBoolean, } from '../helpers/utils';
import { getLocaleContext } from '../i18n/Loader';
import { Model } from '@decaf-ts/decorator-validation';
import { InternalError, OperationKeys, } from '@decaf-ts/db-decorators';
import { BaseComponentProps } from './constants';
import { NgxRenderingEngine } from './NgxRenderingEngine';
import { getLogger } from '../for-angular.module';
import { Repository } from '@decaf-ts/core';
import { RamAdapter } from '@decaf-ts/core/ram';
import * as i0 from "@angular/core";
const _c0 = ["component"];
/**
 * @description Base component class that provides common functionality for all Decaf components.
 * @summary The NgxBaseComponent serves as the foundation for all Decaf UI components, providing
 * shared functionality for localization, element references, and styling. This abstract class
 * implements common properties and methods that are used across the component library, ensuring
 * consistent behavior and reducing code duplication. Components that extend this class inherit
 * its capabilities for handling translations, accessing DOM elements, and applying custom styling.
 *
 * @template M - The model type that this component works with
 * @param {string} instance - The component instance token used for identification
 * @param {string} locale - The locale to be used for translations
 * @param {StringOrBoolean} translatable - Whether the component should be translated
 * @param {string} className - Additional CSS classes to apply to the component
 * @param {"ios" | "md" | undefined} mode - Component platform style
 *
 * @component NgxBaseComponent
 * @example
 * ```typescript
 * @Component({
 *   selector: 'app-my-component',
 *   templateUrl: './my-component.component.html',
 *   styleUrls: ['./my-component.component.scss']
 * })
 * export class MyComponent extends NgxBaseComponent {
 *   constructor(@Inject('instanceToken') instance: string) {
 *     super(instance);
 *   }
 *
 *   ngOnInit() {
 *     this.initialize();
 *     // Component-specific initialization
 *   }
 * }
 * ```
 * @mermaid
 * sequenceDiagram
 *   participant App as Application
 *   participant Comp as Component
 *   participant Base as NgxBaseComponent
 *   participant Engine as NgxRenderingEngine
 *
 *   App->>Comp: Create component
 *   Comp->>Base: super(instance)
 *   Base->>Base: Set componentName & componentLocale
 *
 *   App->>Comp: Set @Input properties
 *   Comp->>Base: ngOnChanges(changes)
 *
 *   alt model changed
 *     Base->>Base: getModel(model)
 *     Base->>Engine: getDecorators(model, {})
 *     Engine-->>Base: Return decorator metadata
 *     Base->>Base: Configure mapper and item
 *     Base->>Base: getLocale(translatable)
 *   else locale/translatable changed
 *     Base->>Base: getLocale(translatable)
 *   end
 *
 *   App->>Comp: ngOnInit()
 *   Comp->>Base: initialize()
 *   Base->>Base: Set initialized flag
 */
export class NgxBaseComponent {
    /**
     * @description Creates an instance of NgxBaseComponent.
     * @summary Initializes a new instance of the base component with the provided instance token.
     * This constructor sets up the fundamental properties required by all Decaf components,
     * including the component name, locale settings, and logging capabilities. The instance
     * token is used for component identification and locale derivation.
     *
     * The constructor performs the following initialization steps:
     * 1. Sets the componentName from the provided instance token
     * 2. Derives the componentLocale from the class name using utility functions
     * 3. Initializes the logger instance for the component
     *
     * @param {string} instance - The component instance token used for identification
     *
     * @mermaid
     * sequenceDiagram
     *   participant A as Angular
     *   participant C as Component
     *   participant B as NgxBaseComponent
     *   participant U as Utils
     *   participant L as Logger
     *
     *   A->>C: new Component(instance)
     *   C->>B: super(instance)
     *   B->>B: Set componentName = instance
     *   B->>U: getLocaleContext(instance)
     *   U-->>B: Return derived locale
     *   B->>B: Set componentLocale
     *   B->>L: getLogger(this)
     *   L-->>B: Return logger instance
     *   B->>B: Set logger
     *
     * @memberOf NgxBaseComponent
     */
    // eslint-disable-next-line @angular-eslint/prefer-inject
    constructor(instance) {
        this.instance = instance;
        /**
         * @description Dynamic properties configuration object.
         * @summary Contains key-value pairs of dynamic properties that can be applied to the component
         * at runtime. This flexible configuration object allows for dynamic property assignment without
         * requiring explicit input bindings for every possible configuration option. Properties from
         * this object are parsed and applied to the component instance through the parseProps method,
         * enabling customizable component behavior based on external configuration.
         *
         * @type {Record<string, unknown>}
         * @default {}
         * @memberOf NgxBaseComponent
         */
        this.props = {};
        /**
         * @description Configuration for list item rendering
         * @summary Defines how list items should be rendered in the component.
         * This property holds a configuration object that specifies the tag name
         * and other properties needed to render list items correctly. The tag property
         * identifies which component should be used to render each item in a list.
         * Additional properties can be included to customize the rendering behavior.
         *
         * @type {Record<string, unknown>}
         * @default {tag: ""}
         * @memberOf NgxBaseComponent
         */
        this.item = { tag: '' };
        /**
         * @description Available CRUD operations for this component.
         * @summary Defines which CRUD operations (Create, Read, Update, Delete) are available
         * for this component. This affects which operations can be performed on the data.
         *
         * @default [OperationKeys.READ]
         * @memberOf NgxBaseComponent
         */
        this.operations = [OperationKeys.READ];
        /**
         * @description Field mapping configuration.
         * @summary Defines how fields from the data model should be mapped to properties used by the component.
         * This allows for flexible data binding between the model and the component's display logic.
         *
         * @type {Record<string, string>}
         * @memberOf NgxBaseComponent
         */
        this.mapper = {};
        /**
         * @description Determines if the component should be translated.
         * @summary Controls whether the component's text content should be processed for translation.
         * When true, the component will attempt to translate text using the specified locale.
         * When false, text is displayed as-is without translation. This property accepts either
         * a boolean value or a string that can be converted to a boolean (e.g., 'true', 'false', '1', '0').
         *
         * @type {StringOrBoolean}
         * @default false
         * @memberOf NgxBaseComponent
         */
        this.translatable = true;
        /**
         * @description Additional CSS class names to apply to the component.
         * @summary Allows custom CSS classes to be added to the component's root element.
         * These classes are appended to any automatically generated classes based on other
         * component properties. Multiple classes can be provided as a space-separated string.
         * This provides a way to customize the component's appearance beyond the built-in styling options.
         *
         * @type {string}
         * @default ""
         * @memberOf NgxBaseComponent
         */
        this.className = '';
        /**
         * @description Component platform style.
         * @summary Controls the visual appearance of the component based on platform design guidelines.
         * The 'ios' mode follows iOS design patterns, while 'md' (Material Design) follows Android/Google
         * design patterns. This property affects various visual aspects such as animations, form elements,
         * and icons. Setting this property allows components to maintain platform-specific styling
         * for a more native look and feel.
         *
         * @type {("ios" | "md" | undefined)}
         * @default "md"
         * @memberOf NgxBaseComponent
         */
        this.mode = 'md';
        /**
         * @description Controls whether child components should be rendered
         * @summary Determines if child components should be rendered by the component.
         * This can be set to a boolean value or a string that can be converted to a boolean.
         * When true, child components defined in the model will be rendered. When false,
         * child components will be skipped. This provides control over the rendering depth.
         *
         * @type {string | StringOrBoolean}
         * @default true
         * @memberOf NgxBaseComponent
         */
        this.renderChild = true;
        /**
         * @description Flag indicating if the component has been initialized
         * @summary Tracks whether the component has completed its initialization process.
         * This flag is used to prevent duplicate initialization and to determine if
         * certain operations that require initialization can be performed.
         *
         * @type {boolean}
         * @default false
         */
        this.initialized = false;
        /**
         * @description Event emitter for custom renderer events.
         * @summary Emits custom events that occur within child components or the layout itself.
         * This allows parent components to listen for and respond to user interactions or
         * state changes within the grid layout. Events are passed up the component hierarchy
         * to enable coordinated behavior across the application.
         *
         * @type {EventEmitter<RendererCustomEvent>}
         * @memberOf NgxBaseComponent
         */
        this.listenEvent = new EventEmitter();
        /**
         * @description Reference to the rendering engine instance
         * @summary Provides access to the NgxRenderingEngine singleton instance,
         * which handles the rendering of components based on model definitions.
         * This engine is used to extract decorator metadata and render child components.
         *
         * @type {NgxRenderingEngine}
         */
        this.renderingEngine = NgxRenderingEngine.get();
        this.componentName = instance;
        this.componentLocale = getLocaleContext(instance);
        this.logger = getLogger(this);
        this.getLocale(this.translatable);
        this.uid = generateRandomValue(12);
    }
    /**
     * @description Getter for the repository instance.
     * @summary Provides a connection to the data layer for retrieving and manipulating data.
     * This method initializes the `_repository` property if it is not already set, ensuring
     * that a single instance of the repository is used throughout the component.
     *
     * The repository is used to perform CRUD operations on the data model, such as fetching data,
     * creating new items, updating existing items, and deleting items. It also provides methods
     * for querying and filtering data based on specific criteria.
     *
     * @returns {DecafRepository<Model>} The initialized repository instance.
     * @private
     * @memberOf NgxBaseComponent
     */
    get repository() {
        try {
            if (!this._repository) {
                const modelName = this.model.constructor.name;
                const constructor = Model.get(modelName);
                if (!constructor)
                    throw new InternalError('Cannot find model. was it registered with @model?');
                let dbAdapterFlavour = getOnWindow('dbAdapterFlavour');
                if (!dbAdapterFlavour && isDevelopmentMode()) {
                    const adapter = new RamAdapter({ user: 'user' });
                    dbAdapterFlavour = adapter.flavour;
                }
                this._repository = Repository.forModel(constructor, dbAdapterFlavour);
                this.model = new constructor();
                if (this.model && !this.pk)
                    this.pk =
                        this._repository.pk || 'id';
            }
        }
        catch (error) {
            throw new InternalError(error?.message || error);
        }
        return this._repository;
    }
    /**
     * @description Handles changes to component inputs
     * @summary This Angular lifecycle hook is called when input properties change.
     * It responds to changes in the model, locale, or translatable properties by
     * updating the component's internal state accordingly. When the model changes,
     * it calls getModel to process the new model and getLocale to update the locale.
     * When locale or translatable properties change, it calls getLocale to update
     * the translation settings.
     *
     * @param {SimpleChanges} changes - Object containing changed properties
     * @return {void}
     */
    ngOnChanges(changes) {
        if (changes[BaseComponentProps.MODEL]) {
            const { currentValue } = changes[BaseComponentProps.MODEL];
            if (currentValue)
                this.getModel(currentValue);
            this.getLocale(this.translatable);
        }
        if (changes[BaseComponentProps.INITIALIZED] ||
            changes[BaseComponentProps.LOCALE] ||
            changes[BaseComponentProps.TRANSLATABLE])
            this.getLocale(this.translatable);
    }
    /**
     * @description Gets the appropriate locale string based on the translatable flag and available locales.
     * @summary Determines which locale string to use for translation based on the translatable flag
     * and available locale settings. This method first converts the translatable parameter to a boolean
     * using the stringToBoolean utility function. If translatable is false, it returns an empty string,
     * indicating no translation should be performed. If translatable is true, it checks for an explicitly
     * provided locale via the locale property. If no explicit locale is available, it falls back to the
     * componentLocale derived from the component's class name.
     *
     * @param {StringOrBoolean} translatable - Whether the component should be translated
     * @return {string} The locale string to use for translation, or empty string if not translatable
     *
     * @mermaid
     * sequenceDiagram
     *   participant C as Component
     *   participant N as NgxBaseComponent
     *   participant S as StringUtils
     *
     *   C->>N: getLocale(translatable)
     *   N->>S: stringToBoolean(translatable)
     *   S-->>N: Return boolean value
     *   N->>N: Store in this.translatable
     *   alt translatable is false
     *     N-->>C: Return empty string
     *   else translatable is true
     *     alt this.locale is defined
     *       N-->>C: Return this.locale
     *     else this.locale is not defined
     *       N-->>C: Return this.componentLocale
     *     end
     *   end
     */
    getLocale(translatable) {
        this.translatable = stringToBoolean(translatable);
        if (!this.translatable)
            return '';
        if (!this.locale)
            this.locale = this.componentLocale;
        return this.locale;
    }
    /**
     * @description Gets the route for the component
     * @summary Retrieves the route path for the component, generating one based on the model
     * if no route is explicitly set. This method checks if a route is already defined, and if not,
     * it creates a default route based on the model's constructor name. The generated route follows
     * the pattern '/model/{ModelName}'. This is useful for automatic routing in CRUD operations.
     *
     * @return {string} The route path for the component, or empty string if no route is available
     */
    getRoute() {
        if (!this.route && this.model instanceof Model)
            this.route = `/model/${this.model?.constructor.name}`;
        return this.route || '';
    }
    /**
     * @description Resolves and sets the component's model
     * @summary Processes the provided model parameter, which can be either a Model instance
     * or a string identifier. If a string is provided, it attempts to resolve the actual model
     * from the injectables registry. After resolving the model, it calls setModelDefinitions
     * to configure the component based on the model's metadata.
     *
     * @param {string | Model} model - The model instance or identifier string
     * @return {void}
     */
    getModel(model) {
        if (!(model instanceof Model))
            this.model = getInjectablesRegistry().get(model);
        this.setModelDefinitions(this.model);
    }
    /**
     * @description Configures component properties based on model metadata
     * @summary Extracts and applies configuration from the model's decorators to set up
     * the component. This method uses the rendering engine to retrieve decorator metadata
     * from the model, then configures the component's mapper and item properties accordingly.
     * It ensures the route is properly set and merges various properties from the model's
     * metadata into the component's configuration.
     *
     * @param {Model} model - The model to extract configuration from
     * @return {void}
     */
    setModelDefinitions(model) {
        if (model instanceof Model) {
            this.getRoute();
            this.model = model;
            const field = this.renderingEngine.getDecorators(this.model, {});
            const { props, item, children } = field;
            this.props = Object.assign(props || {}, { children: children || [] });
            if (item?.props?.['mapper'])
                this.mapper = item?.props['mapper'] || {};
            this.item = {
                tag: item?.tag || '',
                ...item?.props,
                ...(this.mapper ? { mapper: this.mapper } : {}),
                ...{ route: item?.props?.['route'] || this.route },
            };
        }
    }
    /**
     * @description Initializes the component
     * @summary Performs one-time initialization of the component. This method checks if
     * the component has already been initialized to prevent duplicate initialization.
     * When called for the first time, it sets the initialized flag to true and logs
     * an initialization message with the component name. This method is typically called
     * during the component's lifecycle setup.
     */
    initialize() {
        this.initialized = true;
    }
    /**
     * @description Handles custom events from child components.
     * @summary Receives events from child renderer components and forwards them to parent
     * components through the listenEvent output. This creates an event propagation chain
     * that allows events to bubble up through the component hierarchy, enabling coordinated
     * responses to user interactions across the layout structure.
     *
     * @param {RendererCustomEvent} event - The custom event from a child component
     * @return {void}
     *
     * @mermaid
     * sequenceDiagram
     *   participant C as Child Component
     *   participant L as NgxBaseComponent
     *   participant P as Parent Component
     *
     *   C->>L: Emit RendererCustomEvent
     *   L->>L: handleEvent(event)
     *   L->>P: listenEvent.emit(event)
     *   Note over P: Handle event in parent
     *
     * @memberOf NgxBaseComponent
     */
    handleEvent(event) {
        this.listenEvent.emit(event);
    }
    /**
     * @description Tracks items in ngFor loops for optimal change detection.
     * @summary Provides a tracking function for Angular's *ngFor directive to optimize rendering
     * performance. This method generates unique identifiers for list items based on their index
     * and content, allowing Angular to efficiently track changes and minimize DOM manipulations
     * during list updates. The tracking function is essential for maintaining component state
     * and preventing unnecessary re-rendering of unchanged items.
     *
     * @param {number} index - The index of the item in the list
     * @param {KeyValue | string | number} item - The item data to track
     * @returns {string | number} A unique identifier for the item
     * @memberOf NgxBaseComponent
     */
    trackItemFn(index, item) {
        return `${index}-${item}`;
    }
    /**
     * @description Parses and applies properties from the props object to the component instance.
     * @summary This method iterates through the properties of the provided instance object
     * and applies any matching properties from the component's props configuration to the
     * component instance. This allows for dynamic property assignment based on configuration
     * stored in the props object, enabling flexible component customization without requiring
     * explicit property binding for every possible configuration option.
     *
     * The method performs a safe property assignment by checking if each key from the instance
     * exists in the props object before applying it. This prevents accidental property
     * overwriting and ensures only intended properties are modified.
     *
     * @param {KeyValue} instance - The component instance object to process
     * @return {void}
     *
     * @mermaid
     * sequenceDiagram
     *   participant C as Component
     *   participant B as NgxBaseComponent
     *   participant P as Props Object
     *
     *   C->>B: parseProps(instance)
     *   B->>B: Get Object.keys(instance)
     *   loop For each key in instance
     *     B->>P: Check if key exists in this.props
     *     alt Key exists in props
     *       B->>B: Set this[key] = this.props[key]
     *     else Key not in props
     *       Note over B: Skip this key
     *     end
     *   end
     *
     * @protected
     * @memberOf NgxBaseComponent
     */
    parseProps(instance) {
        Object.keys(instance).forEach((key) => {
            if (Object.keys(this.props).includes(key))
                this[key] = this.props[key];
        });
    }
    static { this.ɵfac = function NgxBaseComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NgxBaseComponent)(i0.ɵɵdirectiveInject('instanceToken')); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxBaseComponent, selectors: [["ng-component"]], viewQuery: function NgxBaseComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.component = _t.first);
        } }, hostVars: 1, hostBindings: function NgxBaseComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("id", ctx.uid);
        } }, inputs: { rendererId: "rendererId", model: "model", props: "props", item: "item", pk: "pk", route: "route", operations: "operations", uid: "uid", mapper: "mapper", locale: "locale", translatable: "translatable", className: "className", mode: "mode", renderChild: "renderChild" }, outputs: { listenEvent: "listenEvent" }, standalone: true, features: [i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 0, template: function NgxBaseComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div");
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxBaseComponent, [{
        type: Component,
        args: [{
                standalone: true,
                template: '<div></div>',
                host: { '[attr.id]': 'uid' },
            }]
    }], () => [{ type: undefined, decorators: [{
                type: Inject,
                args: ['instanceToken']
            }] }], { component: [{
            type: ViewChild,
            args: ['component', { read: ElementRef, static: true }]
        }], rendererId: [{
            type: Input
        }], model: [{
            type: Input
        }], props: [{
            type: Input
        }], item: [{
            type: Input
        }], pk: [{
            type: Input
        }], route: [{
            type: Input
        }], operations: [{
            type: Input
        }], uid: [{
            type: Input
        }], mapper: [{
            type: Input
        }], locale: [{
            type: Input
        }], translatable: [{
            type: Input
        }], className: [{
            type: Input
        }], mode: [{
            type: Input
        }], renderChild: [{
            type: Input
        }], listenEvent: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NgxBaseComponent, { className: "NgxBaseComponent", filePath: "engine/NgxBaseComponent.ts", lineNumber: 102 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmd4QmFzZUNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZW5naW5lL05neEJhc2VDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsRUFDVCxVQUFVLEVBR1YsTUFBTSxFQUNOLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLHNCQUFzQixFQUN0QixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLGVBQWUsR0FDaEIsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdkQsT0FBTyxFQUVMLGFBQWEsRUFDYixhQUFhLEdBQ2QsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWxELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUVoRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTZERztBQU1ILE1BQU0sT0FBZ0IsZ0JBQWdCO0lBdVNwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BaUNHO0lBQ0gseURBQXlEO0lBQ3pELFlBQXlELFFBQWdCO1FBQWhCLGFBQVEsR0FBUixRQUFRLENBQVE7UUFqUXpFOzs7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QUFXLEVBQUUsS0FBSyxFQUFFO2FBQzdCOztzQkEyVXdCLE1BQU07dUJBQUMsZUFBZTtxQkE5VDdDLFNBQVM7a0JBRFIsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFpQzFELFVBQVU7a0JBRFQsS0FBSztZQVlOLEtBQUs7a0JBREosS0FBSztZQWdDTixLQUFLO2tCQURKLEtBQUs7WUFnQk4sSUFBSTtrQkFESCxLQUFLO1lBYU4sRUFBRTtrQkFERCxLQUFLO1lBWU4sS0FBSztrQkFESixLQUFLO1lBWU4sVUFBVTtrQkFEVCxLQUFLO1lBWU4sR0FBRztrQkFERixLQUFLO1lBWU4sTUFBTTtrQkFETCxLQUFLO1lBZU4sTUFBTTtrQkFETCxLQUFLO1lBZU4sWUFBWTtrQkFEWCxLQUFLO1lBZU4sU0FBUztrQkFEUixLQUFLO1lBZ0JOLElBQUk7a0JBREgsS0FBSztZQTRCTixXQUFXO2tCQURWLEtBQUs7WUF5Qk4sV0FBVztrQkFEVixNQUFNOztrRkF4UWEsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5wdXQsXG4gIENvbXBvbmVudCxcbiAgSW5qZWN0LFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgS2V5VmFsdWUsIFJlbmRlcmVyQ3VzdG9tRXZlbnQsIFN0cmluZ09yQm9vbGVhbiB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtcbiAgZ2VuZXJhdGVSYW5kb21WYWx1ZSxcbiAgZ2V0SW5qZWN0YWJsZXNSZWdpc3RyeSxcbiAgZ2V0T25XaW5kb3csXG4gIGlzRGV2ZWxvcG1lbnRNb2RlLFxuICBzdHJpbmdUb0Jvb2xlYW4sXG59IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnO1xuaW1wb3J0IHsgZ2V0TG9jYWxlQ29udGV4dCB9IGZyb20gJy4uL2kxOG4vTG9hZGVyJztcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnQGRlY2FmLXRzL2RlY29yYXRvci12YWxpZGF0aW9uJztcbmltcG9ydCB7XG4gIENydWRPcGVyYXRpb25zLFxuICBJbnRlcm5hbEVycm9yLFxuICBPcGVyYXRpb25LZXlzLFxufSBmcm9tICdAZGVjYWYtdHMvZGItZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50UHJvcHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBOZ3hSZW5kZXJpbmdFbmdpbmUgfSBmcm9tICcuL05neFJlbmRlcmluZ0VuZ2luZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICdAZGVjYWYtdHMvbG9nZ2luZyc7XG5pbXBvcnQgeyBnZXRMb2dnZXIgfSBmcm9tICcuLi9mb3ItYW5ndWxhci5tb2R1bGUnO1xuaW1wb3J0IHsgRGVjYWZSZXBvc2l0b3J5IH0gZnJvbSAnLi4vY29tcG9uZW50cy9saXN0L2NvbnN0YW50cyc7XG5pbXBvcnQgeyBSZXBvc2l0b3J5IH0gZnJvbSAnQGRlY2FmLXRzL2NvcmUnO1xuaW1wb3J0IHsgUmFtQWRhcHRlciB9IGZyb20gJ0BkZWNhZi10cy9jb3JlL3JhbSc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEJhc2UgY29tcG9uZW50IGNsYXNzIHRoYXQgcHJvdmlkZXMgY29tbW9uIGZ1bmN0aW9uYWxpdHkgZm9yIGFsbCBEZWNhZiBjb21wb25lbnRzLlxuICogQHN1bW1hcnkgVGhlIE5neEJhc2VDb21wb25lbnQgc2VydmVzIGFzIHRoZSBmb3VuZGF0aW9uIGZvciBhbGwgRGVjYWYgVUkgY29tcG9uZW50cywgcHJvdmlkaW5nXG4gKiBzaGFyZWQgZnVuY3Rpb25hbGl0eSBmb3IgbG9jYWxpemF0aW9uLCBlbGVtZW50IHJlZmVyZW5jZXMsIGFuZCBzdHlsaW5nLiBUaGlzIGFic3RyYWN0IGNsYXNzXG4gKiBpbXBsZW1lbnRzIGNvbW1vbiBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIHRoYXQgYXJlIHVzZWQgYWNyb3NzIHRoZSBjb21wb25lbnQgbGlicmFyeSwgZW5zdXJpbmdcbiAqIGNvbnNpc3RlbnQgYmVoYXZpb3IgYW5kIHJlZHVjaW5nIGNvZGUgZHVwbGljYXRpb24uIENvbXBvbmVudHMgdGhhdCBleHRlbmQgdGhpcyBjbGFzcyBpbmhlcml0XG4gKiBpdHMgY2FwYWJpbGl0aWVzIGZvciBoYW5kbGluZyB0cmFuc2xhdGlvbnMsIGFjY2Vzc2luZyBET00gZWxlbWVudHMsIGFuZCBhcHBseWluZyBjdXN0b20gc3R5bGluZy5cbiAqXG4gKiBAdGVtcGxhdGUgTSAtIFRoZSBtb2RlbCB0eXBlIHRoYXQgdGhpcyBjb21wb25lbnQgd29ya3Mgd2l0aFxuICogQHBhcmFtIHtzdHJpbmd9IGluc3RhbmNlIC0gVGhlIGNvbXBvbmVudCBpbnN0YW5jZSB0b2tlbiB1c2VkIGZvciBpZGVudGlmaWNhdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsZSAtIFRoZSBsb2NhbGUgdG8gYmUgdXNlZCBmb3IgdHJhbnNsYXRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ09yQm9vbGVhbn0gdHJhbnNsYXRhYmxlIC0gV2hldGhlciB0aGUgY29tcG9uZW50IHNob3VsZCBiZSB0cmFuc2xhdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIC0gQWRkaXRpb25hbCBDU1MgY2xhc3NlcyB0byBhcHBseSB0byB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1wiaW9zXCIgfCBcIm1kXCIgfCB1bmRlZmluZWR9IG1vZGUgLSBDb21wb25lbnQgcGxhdGZvcm0gc3R5bGVcbiAqXG4gKiBAY29tcG9uZW50IE5neEJhc2VDb21wb25lbnRcbiAqIEBleGFtcGxlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBAQ29tcG9uZW50KHtcbiAqICAgc2VsZWN0b3I6ICdhcHAtbXktY29tcG9uZW50JyxcbiAqICAgdGVtcGxhdGVVcmw6ICcuL215LWNvbXBvbmVudC5jb21wb25lbnQuaHRtbCcsXG4gKiAgIHN0eWxlVXJsczogWycuL215LWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyddXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIE15Q29tcG9uZW50IGV4dGVuZHMgTmd4QmFzZUNvbXBvbmVudCB7XG4gKiAgIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2luc3RhbmNlVG9rZW4nKSBpbnN0YW5jZTogc3RyaW5nKSB7XG4gKiAgICAgc3VwZXIoaW5zdGFuY2UpO1xuICogICB9XG4gKlxuICogICBuZ09uSW5pdCgpIHtcbiAqICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAqICAgICAvLyBDb21wb25lbnQtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb25cbiAqICAgfVxuICogfVxuICogYGBgXG4gKiBAbWVybWFpZFxuICogc2VxdWVuY2VEaWFncmFtXG4gKiAgIHBhcnRpY2lwYW50IEFwcCBhcyBBcHBsaWNhdGlvblxuICogICBwYXJ0aWNpcGFudCBDb21wIGFzIENvbXBvbmVudFxuICogICBwYXJ0aWNpcGFudCBCYXNlIGFzIE5neEJhc2VDb21wb25lbnRcbiAqICAgcGFydGljaXBhbnQgRW5naW5lIGFzIE5neFJlbmRlcmluZ0VuZ2luZVxuICpcbiAqICAgQXBwLT4+Q29tcDogQ3JlYXRlIGNvbXBvbmVudFxuICogICBDb21wLT4+QmFzZTogc3VwZXIoaW5zdGFuY2UpXG4gKiAgIEJhc2UtPj5CYXNlOiBTZXQgY29tcG9uZW50TmFtZSAmIGNvbXBvbmVudExvY2FsZVxuICpcbiAqICAgQXBwLT4+Q29tcDogU2V0IEBJbnB1dCBwcm9wZXJ0aWVzXG4gKiAgIENvbXAtPj5CYXNlOiBuZ09uQ2hhbmdlcyhjaGFuZ2VzKVxuICpcbiAqICAgYWx0IG1vZGVsIGNoYW5nZWRcbiAqICAgICBCYXNlLT4+QmFzZTogZ2V0TW9kZWwobW9kZWwpXG4gKiAgICAgQmFzZS0+PkVuZ2luZTogZ2V0RGVjb3JhdG9ycyhtb2RlbCwge30pXG4gKiAgICAgRW5naW5lLS0+PkJhc2U6IFJldHVybiBkZWNvcmF0b3IgbWV0YWRhdGFcbiAqICAgICBCYXNlLT4+QmFzZTogQ29uZmlndXJlIG1hcHBlciBhbmQgaXRlbVxuICogICAgIEJhc2UtPj5CYXNlOiBnZXRMb2NhbGUodHJhbnNsYXRhYmxlKVxuICogICBlbHNlIGxvY2FsZS90cmFuc2xhdGFibGUgY2hhbmdlZFxuICogICAgIEJhc2UtPj5CYXNlOiBnZXRMb2NhbGUodHJhbnNsYXRhYmxlKVxuICogICBlbmRcbiAqXG4gKiAgIEFwcC0+PkNvbXA6IG5nT25Jbml0KClcbiAqICAgQ29tcC0+PkJhc2U6IGluaXRpYWxpemUoKVxuICogICBCYXNlLT4+QmFzZTogU2V0IGluaXRpYWxpemVkIGZsYWdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHRlbXBsYXRlOiAnPGRpdj48L2Rpdj4nLFxuICBob3N0OiB7ICdbYXR0ci5pZF0nOiAndWlkJyB9LFxufSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOZ3hCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBSZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCdzIGVsZW1lbnQuXG4gICAqIEBzdW1tYXJ5IFByb3ZpZGVzIGRpcmVjdCBhY2Nlc3MgdG8gdGhlIG5hdGl2ZSBET00gZWxlbWVudCBvZiB0aGUgY29tcG9uZW50IHRocm91Z2ggQW5ndWxhcidzXG4gICAqIFZpZXdDaGlsZCBkZWNvcmF0b3IuIFRoaXMgcmVmZXJlbmNlIGNhbiBiZSB1c2VkIHRvIG1hbmlwdWxhdGUgdGhlIERPTSBlbGVtZW50IGRpcmVjdGx5LFxuICAgKiBhcHBseSBjdXN0b20gc3R5bGVzLCBvciBhY2Nlc3MgbmF0aXZlIGVsZW1lbnQgcHJvcGVydGllcyBhbmQgbWV0aG9kcy4gVGhlIGVsZW1lbnQgaXNcbiAgICogaWRlbnRpZmllZCBieSB0aGUgJ2NvbXBvbmVudCcgdGVtcGxhdGUgcmVmZXJlbmNlIHZhcmlhYmxlLlxuICAgKlxuICAgKiBAdHlwZSB7RWxlbWVudFJlZn1cbiAgICogQG1lbWJlck9mIE5neEJhc2VDb21wb25lbnRcbiAgICovXG4gIEBWaWV3Q2hpbGQoJ2NvbXBvbmVudCcsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pXG4gIGNvbXBvbmVudCE6IEVsZW1lbnRSZWY7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGUgbmFtZSBvZiB0aGUgY29tcG9uZW50LlxuICAgKiBAc3VtbWFyeSBTdG9yZXMgdGhlIG5hbWUgb2YgdGhlIGNvbXBvbmVudCwgd2hpY2ggaXMgdHlwaWNhbGx5IGRlcml2ZWQgZnJvbSB0aGUgY2xhc3MgbmFtZS5cbiAgICogVGhpcyBwcm9wZXJ0eSBpcyB1c2VkIGludGVybmFsbHkgZm9yIHZhcmlvdXMgcHVycG9zZXMgc3VjaCBhcyBsb2dnaW5nLCBkZXJpdmluZyB0aGUgZGVmYXVsdFxuICAgKiBsb2NhbGUsIGFuZCBwb3RlbnRpYWxseSBmb3IgY29tcG9uZW50IGlkZW50aWZpY2F0aW9uIGluIGRlYnVnZ2luZyBvciBlcnJvciByZXBvcnRpbmcuXG4gICAqXG4gICAqIFRoZSBgY29tcG9uZW50TmFtZWAgaXMgc2V0IGR1cmluZyB0aGUgY29tcG9uZW50J3MgaW5pdGlhbGl6YXRpb24gcHJvY2VzcyBhbmQgc2hvdWxkIG5vdFxuICAgKiBiZSBtb2RpZmllZCBleHRlcm5hbGx5LiBJdCdzIG1hcmtlZCBhcyBwcm90ZWN0ZWQgdG8gYWxsb3cgYWNjZXNzIGluIGRlcml2ZWQgY2xhc3NlcyB3aGlsZVxuICAgKiBwcmV2ZW50aW5nIGRpcmVjdCBhY2Nlc3MgZnJvbSBvdXRzaWRlIHRoZSBjb21wb25lbnQgaGllcmFyY2h5LlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBtZW1iZXJPZiBOZ3hCYXNlQ29tcG9uZW50XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIC8vIEluc2lkZSBhIGRlcml2ZWQgY29tcG9uZW50IGNsYXNzXG4gICAqIGNvbnNvbGUubG9nKHRoaXMuY29tcG9uZW50TmFtZSk7IC8vIE91dHB1dHM6IFwiTXlDdXN0b21Db21wb25lbnRcIlxuICAgKi9cbiAgY29tcG9uZW50TmFtZSE6IHN0cmluZztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgcmVuZGVyZXIuXG4gICAqIEBzdW1tYXJ5IEEgdW5pcXVlIGlkZW50aWZpZXIgdXNlZCB0byByZWZlcmVuY2UgdGhlIGNvbXBvbmVudCdzIHJlbmRlcmVyIGluc3RhbmNlLlxuICAgKiBUaGlzIGNhbiBiZSB1c2VkIGZvciB0YXJnZXRpbmcgc3BlY2lmaWMgcmVuZGVyZXIgaW5zdGFuY2VzIHdoZW4gbXVsdGlwbGUgY29tcG9uZW50c1xuICAgKiBhcmUgcHJlc2VudCBvbiB0aGUgc2FtZSBwYWdlLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyT2YgTmd4QmFzZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgcmVuZGVyZXJJZCE6IHN0cmluZztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFJlcG9zaXRvcnkgbW9kZWwgZm9yIGRhdGEgb3BlcmF0aW9ucy5cbiAgICogQHN1bW1hcnkgVGhlIGRhdGEgbW9kZWwgcmVwb3NpdG9yeSB0aGF0IHRoaXMgY29tcG9uZW50IHdpbGwgdXNlIGZvciBDUlVEIG9wZXJhdGlvbnMuXG4gICAqIFRoaXMgcHJvdmlkZXMgYSBjb25uZWN0aW9uIHRvIHRoZSBkYXRhIGxheWVyIGZvciByZXRyaWV2aW5nIGFuZCBtYW5pcHVsYXRpbmcgZGF0YS5cbiAgICpcbiAgICogQHR5cGUge01vZGVsfCB1bmRlZmluZWR9XG4gICAqIEBtZW1iZXJPZiBOZ3hCYXNlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBtb2RlbCE6IE1vZGVsIHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhlIHJlcG9zaXRvcnkgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIGRhdGEgbW9kZWwuXG4gICAqIEBzdW1tYXJ5IFByb3ZpZGVzIGEgY29ubmVjdGlvbiB0byB0aGUgZGF0YSBsYXllciBmb3IgcmV0cmlldmluZyBhbmQgbWFuaXB1bGF0aW5nIGRhdGEuXG4gICAqIFRoaXMgaXMgYW4gaW5zdGFuY2Ugb2YgdGhlIGBEZWNhZlJlcG9zaXRvcnlgIGNsYXNzIGZyb20gdGhlIGBAZGVjYWYtdHMvY29yZWAgcGFja2FnZSxcbiAgICogd2hpY2ggaXMgaW5pdGlhbGl6ZWQgaW4gdGhlIGByZXBvc2l0b3J5YCBnZXR0ZXIgbWV0aG9kLlxuICAgKlxuICAgKiBUaGUgcmVwb3NpdG9yeSBpcyB1c2VkIHRvIHBlcmZvcm0gQ1JVRCAoQ3JlYXRlLCBSZWFkLCBVcGRhdGUsIERlbGV0ZSkgb3BlcmF0aW9ucyBvbiB0aGVcbiAgICogZGF0YSBtb2RlbCwgc3VjaCBhcyBmZXRjaGluZyBkYXRhLCBjcmVhdGluZyBuZXcgaXRlbXMsIHVwZGF0aW5nIGV4aXN0aW5nIGl0ZW1zLCBhbmQgZGVsZXRpbmdcbiAgICogaXRlbXMuIEl0IGFsc28gcHJvdmlkZXMgbWV0aG9kcyBmb3IgcXVlcnlpbmcgYW5kIGZpbHRlcmluZyBkYXRhIGJhc2VkIG9uIHNwZWNpZmljIGNyaXRlcmlhLlxuICAgKlxuICAgKiBAdHlwZSB7RGVjYWZSZXBvc2l0b3J5PE1vZGVsPn1cbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlck9mIE5neEJhc2VDb21wb25lbnRcbiAgICovXG4gIHByb3RlY3RlZCBfcmVwb3NpdG9yeT86IERlY2FmUmVwb3NpdG9yeTxNb2RlbD47XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBEeW5hbWljIHByb3BlcnRpZXMgY29uZmlndXJhdGlvbiBvYmplY3QuXG4gICAqIEBzdW1tYXJ5IENvbnRhaW5zIGtleS12YWx1ZSBwYWlycyBvZiBkeW5hbWljIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgYXBwbGllZCB0byB0aGUgY29tcG9uZW50XG4gICAqIGF0IHJ1bnRpbWUuIFRoaXMgZmxleGlibGUgY29uZmlndXJhdGlvbiBvYmplY3QgYWxsb3dzIGZvciBkeW5hbWljIHByb3BlcnR5IGFzc2lnbm1lbnQgd2l0aG91dFxuICAgKiByZXF1aXJpbmcgZXhwbGljaXQgaW5wdXQgYmluZGluZ3MgZm9yIGV2ZXJ5IHBvc3NpYmxlIGNvbmZpZ3VyYXRpb24gb3B0aW9uLiBQcm9wZXJ0aWVzIGZyb21cbiAgICogdGhpcyBvYmplY3QgYXJlIHBhcnNlZCBhbmQgYXBwbGllZCB0byB0aGUgY29tcG9uZW50IGluc3RhbmNlIHRocm91Z2ggdGhlIHBhcnNlUHJvcHMgbWV0aG9kLFxuICAgKiBlbmFibGluZyBjdXN0b21pemFibGUgY29tcG9uZW50IGJlaGF2aW9yIGJhc2VkIG9uIGV4dGVybmFsIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPn1cbiAgICogQGRlZmF1bHQge31cbiAgICogQG1lbWJlck9mIE5neEJhc2VDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ29uZmlndXJhdGlvbiBmb3IgbGlzdCBpdGVtIHJlbmRlcmluZ1xuICAgKiBAc3VtbWFyeSBEZWZpbmVzIGhvdyBsaXN0IGl0ZW1zIHNob3VsZCBiZSByZW5kZXJlZCBpbiB0aGUgY29tcG9uZW50LlxuICAgKiBUaGlzIHByb3BlcnR5IGhvbGRzIGEgY29uZmlndXJhdGlvbiBvYmplY3QgdGhhdCBzcGVjaWZpZXMgdGhlIHRhZyBuYW1lXG4gICAqIGFuZCBvdGhlciBwcm9wZXJ0aWVzIG5lZWRlZCB0byByZW5kZXIgbGlzdCBpdGVtcyBjb3JyZWN0bHkuIFRoZSB0YWcgcHJvcGVydHlcbiAgICogaWRlbnRpZmllcyB3aGljaCBjb21wb25lbnQgc2hvdWxkIGJlIHVzZWQgdG8gcmVuZGVyIGVhY2ggaXRlbSBpbiBhIGxpc3QuXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyBjYW4gYmUgaW5jbHVkZWQgdG8gY3VzdG9taXplIHRoZSByZW5kZXJpbmcgYmVoYXZpb3IuXG4gICAqXG4gICAqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPn1cbiAgICogQGRlZmF1bHQge3RhZzogXCJcIn1cbiAgICogQG1lbWJlck9mIE5neEJhc2VDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGl0ZW06IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0geyB0YWc6ICcnIH07XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBQcmltYXJ5IGtleSBmaWVsZCBuYW1lIGZvciB0aGUgbW9kZWwuXG4gICAqIEBzdW1tYXJ5IFNwZWNpZmllcyB3aGljaCBmaWVsZCBpbiB0aGUgbW9kZWwgc2hvdWxkIGJlIHVzZWQgYXMgdGhlIHByaW1hcnkga2V5LlxuICAgKiBUaGlzIGlzIHR5cGljYWxseSB1c2VkIGZvciBpZGVudGlmeWluZyB1bmlxdWUgcmVjb3JkcyBpbiBvcGVyYXRpb25zIGxpa2UgdXBkYXRlIGFuZCBkZWxldGUuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICdpZCdcbiAgICogQG1lbWJlck9mIE5neEJhc2VDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHBrITogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQmFzZSByb3V0ZSBmb3IgbmF2aWdhdGlvbiByZWxhdGVkIHRvIHRoaXMgY29tcG9uZW50LlxuICAgKiBAc3VtbWFyeSBEZWZpbmVzIHRoZSBiYXNlIHJvdXRlIHBhdGggdXNlZCBmb3IgbmF2aWdhdGlvbiBhY3Rpb25zIHJlbGF0ZWQgdG8gdGhpcyBjb21wb25lbnQuXG4gICAqIFRoaXMgaXMgb2Z0ZW4gdXNlZCBhcyBhIHByZWZpeCBmb3IgY29uc3RydWN0aW5nIG5hdmlnYXRpb24gVVJMcy5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlck9mIE5neEJhc2VDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHJvdXRlITogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQXZhaWxhYmxlIENSVUQgb3BlcmF0aW9ucyBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqIEBzdW1tYXJ5IERlZmluZXMgd2hpY2ggQ1JVRCBvcGVyYXRpb25zIChDcmVhdGUsIFJlYWQsIFVwZGF0ZSwgRGVsZXRlKSBhcmUgYXZhaWxhYmxlXG4gICAqIGZvciB0aGlzIGNvbXBvbmVudC4gVGhpcyBhZmZlY3RzIHdoaWNoIG9wZXJhdGlvbnMgY2FuIGJlIHBlcmZvcm1lZCBvbiB0aGUgZGF0YS5cbiAgICpcbiAgICogQGRlZmF1bHQgW09wZXJhdGlvbktleXMuUkVBRF1cbiAgICogQG1lbWJlck9mIE5neEJhc2VDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG9wZXJhdGlvbnM6IENydWRPcGVyYXRpb25zW10gPSBbT3BlcmF0aW9uS2V5cy5SRUFEXTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgY3VycmVudCByZWNvcmQuXG4gICAqIEBzdW1tYXJ5IEEgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBjdXJyZW50IHJlY29yZCBiZWluZyBkaXNwbGF5ZWQgb3IgbWFuaXB1bGF0ZWQuXG4gICAqIFRoaXMgaXMgdHlwaWNhbGx5IHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgcHJpbWFyeSBrZXkgZm9yIG9wZXJhdGlvbnMgb24gc3BlY2lmaWMgcmVjb3Jkcy5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZyB8IG51bWJlcn1cbiAgICogQG1lbWJlck9mIE5neEJhc2VDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHVpZCE6IHN0cmluZyB8IG51bWJlcjtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEZpZWxkIG1hcHBpbmcgY29uZmlndXJhdGlvbi5cbiAgICogQHN1bW1hcnkgRGVmaW5lcyBob3cgZmllbGRzIGZyb20gdGhlIGRhdGEgbW9kZWwgc2hvdWxkIGJlIG1hcHBlZCB0byBwcm9wZXJ0aWVzIHVzZWQgYnkgdGhlIGNvbXBvbmVudC5cbiAgICogVGhpcyBhbGxvd3MgZm9yIGZsZXhpYmxlIGRhdGEgYmluZGluZyBiZXR3ZWVuIHRoZSBtb2RlbCBhbmQgdGhlIGNvbXBvbmVudCdzIGRpc3BsYXkgbG9naWMuXG4gICAqXG4gICAqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+fVxuICAgKiBAbWVtYmVyT2YgTmd4QmFzZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgbWFwcGVyOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGUgbG9jYWxlIHRvIGJlIHVzZWQgZm9yIHRyYW5zbGF0aW9ucy5cbiAgICogQHN1bW1hcnkgU3BlY2lmaWVzIHRoZSBsb2NhbGUgaWRlbnRpZmllciB0byB1c2Ugd2hlbiB0cmFuc2xhdGluZyBjb21wb25lbnQgdGV4dC5cbiAgICogVGhpcyBjYW4gYmUgc2V0IGV4cGxpY2l0bHkgdmlhIGlucHV0IHByb3BlcnR5IHRvIG92ZXJyaWRlIHRoZSBhdXRvbWF0aWNhbGx5IGRlcml2ZWRcbiAgICogbG9jYWxlIGZyb20gdGhlIGNvbXBvbmVudCBuYW1lLiBUaGUgbG9jYWxlIGlzIHR5cGljYWxseSBhIGxhbmd1YWdlIGNvZGUgKGUuZy4sICdlbicsICdmcicpXG4gICAqIG9yIGEgbGFuZ3VhZ2UtcmVnaW9uIGNvZGUgKGUuZy4sICdlbi1VUycsICdmci1DQScpIHRoYXQgZGV0ZXJtaW5lcyB3aGljaCB0cmFuc2xhdGlvblxuICAgKiBzZXQgdG8gdXNlIGZvciB0aGUgY29tcG9uZW50J3MgdGV4dCBjb250ZW50LlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyT2YgTmd4QmFzZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgbG9jYWxlITogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyBpZiB0aGUgY29tcG9uZW50IHNob3VsZCBiZSB0cmFuc2xhdGVkLlxuICAgKiBAc3VtbWFyeSBDb250cm9scyB3aGV0aGVyIHRoZSBjb21wb25lbnQncyB0ZXh0IGNvbnRlbnQgc2hvdWxkIGJlIHByb2Nlc3NlZCBmb3IgdHJhbnNsYXRpb24uXG4gICAqIFdoZW4gdHJ1ZSwgdGhlIGNvbXBvbmVudCB3aWxsIGF0dGVtcHQgdG8gdHJhbnNsYXRlIHRleHQgdXNpbmcgdGhlIHNwZWNpZmllZCBsb2NhbGUuXG4gICAqIFdoZW4gZmFsc2UsIHRleHQgaXMgZGlzcGxheWVkIGFzLWlzIHdpdGhvdXQgdHJhbnNsYXRpb24uIFRoaXMgcHJvcGVydHkgYWNjZXB0cyBlaXRoZXJcbiAgICogYSBib29sZWFuIHZhbHVlIG9yIGEgc3RyaW5nIHRoYXQgY2FuIGJlIGNvbnZlcnRlZCB0byBhIGJvb2xlYW4gKGUuZy4sICd0cnVlJywgJ2ZhbHNlJywgJzEnLCAnMCcpLlxuICAgKlxuICAgKiBAdHlwZSB7U3RyaW5nT3JCb29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAbWVtYmVyT2YgTmd4QmFzZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgdHJhbnNsYXRhYmxlOiBTdHJpbmdPckJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQWRkaXRpb25hbCBDU1MgY2xhc3MgbmFtZXMgdG8gYXBwbHkgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogQHN1bW1hcnkgQWxsb3dzIGN1c3RvbSBDU1MgY2xhc3NlcyB0byBiZSBhZGRlZCB0byB0aGUgY29tcG9uZW50J3Mgcm9vdCBlbGVtZW50LlxuICAgKiBUaGVzZSBjbGFzc2VzIGFyZSBhcHBlbmRlZCB0byBhbnkgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgY2xhc3NlcyBiYXNlZCBvbiBvdGhlclxuICAgKiBjb21wb25lbnQgcHJvcGVydGllcy4gTXVsdGlwbGUgY2xhc3NlcyBjYW4gYmUgcHJvdmlkZWQgYXMgYSBzcGFjZS1zZXBhcmF0ZWQgc3RyaW5nLlxuICAgKiBUaGlzIHByb3ZpZGVzIGEgd2F5IHRvIGN1c3RvbWl6ZSB0aGUgY29tcG9uZW50J3MgYXBwZWFyYW5jZSBiZXlvbmQgdGhlIGJ1aWx0LWluIHN0eWxpbmcgb3B0aW9ucy5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgXCJcIlxuICAgKiBAbWVtYmVyT2YgTmd4QmFzZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgY2xhc3NOYW1lOiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENvbXBvbmVudCBwbGF0Zm9ybSBzdHlsZS5cbiAgICogQHN1bW1hcnkgQ29udHJvbHMgdGhlIHZpc3VhbCBhcHBlYXJhbmNlIG9mIHRoZSBjb21wb25lbnQgYmFzZWQgb24gcGxhdGZvcm0gZGVzaWduIGd1aWRlbGluZXMuXG4gICAqIFRoZSAnaW9zJyBtb2RlIGZvbGxvd3MgaU9TIGRlc2lnbiBwYXR0ZXJucywgd2hpbGUgJ21kJyAoTWF0ZXJpYWwgRGVzaWduKSBmb2xsb3dzIEFuZHJvaWQvR29vZ2xlXG4gICAqIGRlc2lnbiBwYXR0ZXJucy4gVGhpcyBwcm9wZXJ0eSBhZmZlY3RzIHZhcmlvdXMgdmlzdWFsIGFzcGVjdHMgc3VjaCBhcyBhbmltYXRpb25zLCBmb3JtIGVsZW1lbnRzLFxuICAgKiBhbmQgaWNvbnMuIFNldHRpbmcgdGhpcyBwcm9wZXJ0eSBhbGxvd3MgY29tcG9uZW50cyB0byBtYWludGFpbiBwbGF0Zm9ybS1zcGVjaWZpYyBzdHlsaW5nXG4gICAqIGZvciBhIG1vcmUgbmF0aXZlIGxvb2sgYW5kIGZlZWwuXG4gICAqXG4gICAqIEB0eXBlIHsoXCJpb3NcIiB8IFwibWRcIiB8IHVuZGVmaW5lZCl9XG4gICAqIEBkZWZhdWx0IFwibWRcIlxuICAgKiBAbWVtYmVyT2YgTmd4QmFzZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgbW9kZTogJ2lvcycgfCAnbWQnIHwgdW5kZWZpbmVkID0gJ21kJztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFRoZSBsb2NhbGUgZGVyaXZlZCBmcm9tIHRoZSBjb21wb25lbnQncyBjbGFzcyBuYW1lLlxuICAgKiBAc3VtbWFyeSBTdG9yZXMgdGhlIGF1dG9tYXRpY2FsbHkgZGVyaXZlZCBsb2NhbGUgYmFzZWQgb24gdGhlIGNvbXBvbmVudCdzIGNsYXNzIG5hbWUuXG4gICAqIFRoaXMgaXMgZGV0ZXJtaW5lZCBkdXJpbmcgY29tcG9uZW50IGluaXRpYWxpemF0aW9uIGFuZCBzZXJ2ZXMgYXMgYSBmYWxsYmFjayB3aGVuIG5vXG4gICAqIGV4cGxpY2l0IGxvY2FsZSBpcyBwcm92aWRlZCB2aWEgdGhlIGxvY2FsZSBpbnB1dCBwcm9wZXJ0eS4gVGhlIGRlcml2YXRpb24gaXMgaGFuZGxlZFxuICAgKiBieSB0aGUgZ2V0TG9jYWxlQ29udGV4dCB1dGlsaXR5IGZ1bmN0aW9uLCB3aGljaCBleHRyYWN0cyBhIGxvY2FsZSBpZGVudGlmaWVyXG4gICAqIGZyb20gdGhlIGNvbXBvbmVudCdzIGNsYXNzIG5hbWUuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJPZiBOZ3hCYXNlQ29tcG9uZW50XG4gICAqL1xuICBjb21wb25lbnRMb2NhbGUhOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDb250cm9scyB3aGV0aGVyIGNoaWxkIGNvbXBvbmVudHMgc2hvdWxkIGJlIHJlbmRlcmVkXG4gICAqIEBzdW1tYXJ5IERldGVybWluZXMgaWYgY2hpbGQgY29tcG9uZW50cyBzaG91bGQgYmUgcmVuZGVyZWQgYnkgdGhlIGNvbXBvbmVudC5cbiAgICogVGhpcyBjYW4gYmUgc2V0IHRvIGEgYm9vbGVhbiB2YWx1ZSBvciBhIHN0cmluZyB0aGF0IGNhbiBiZSBjb252ZXJ0ZWQgdG8gYSBib29sZWFuLlxuICAgKiBXaGVuIHRydWUsIGNoaWxkIGNvbXBvbmVudHMgZGVmaW5lZCBpbiB0aGUgbW9kZWwgd2lsbCBiZSByZW5kZXJlZC4gV2hlbiBmYWxzZSxcbiAgICogY2hpbGQgY29tcG9uZW50cyB3aWxsIGJlIHNraXBwZWQuIFRoaXMgcHJvdmlkZXMgY29udHJvbCBvdmVyIHRoZSByZW5kZXJpbmcgZGVwdGguXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmcgfCBTdHJpbmdPckJvb2xlYW59XG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICogQG1lbWJlck9mIE5neEJhc2VDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHJlbmRlckNoaWxkOiBzdHJpbmcgfCBTdHJpbmdPckJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gRmxhZyBpbmRpY2F0aW5nIGlmIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gaW5pdGlhbGl6ZWRcbiAgICogQHN1bW1hcnkgVHJhY2tzIHdoZXRoZXIgdGhlIGNvbXBvbmVudCBoYXMgY29tcGxldGVkIGl0cyBpbml0aWFsaXphdGlvbiBwcm9jZXNzLlxuICAgKiBUaGlzIGZsYWcgaXMgdXNlZCB0byBwcmV2ZW50IGR1cGxpY2F0ZSBpbml0aWFsaXphdGlvbiBhbmQgdG8gZGV0ZXJtaW5lIGlmXG4gICAqIGNlcnRhaW4gb3BlcmF0aW9ucyB0aGF0IHJlcXVpcmUgaW5pdGlhbGl6YXRpb24gY2FuIGJlIHBlcmZvcm1lZC5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBpbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gRXZlbnQgZW1pdHRlciBmb3IgY3VzdG9tIHJlbmRlcmVyIGV2ZW50cy5cbiAgICogQHN1bW1hcnkgRW1pdHMgY3VzdG9tIGV2ZW50cyB0aGF0IG9jY3VyIHdpdGhpbiBjaGlsZCBjb21wb25lbnRzIG9yIHRoZSBsYXlvdXQgaXRzZWxmLlxuICAgKiBUaGlzIGFsbG93cyBwYXJlbnQgY29tcG9uZW50cyB0byBsaXN0ZW4gZm9yIGFuZCByZXNwb25kIHRvIHVzZXIgaW50ZXJhY3Rpb25zIG9yXG4gICAqIHN0YXRlIGNoYW5nZXMgd2l0aGluIHRoZSBncmlkIGxheW91dC4gRXZlbnRzIGFyZSBwYXNzZWQgdXAgdGhlIGNvbXBvbmVudCBoaWVyYXJjaHlcbiAgICogdG8gZW5hYmxlIGNvb3JkaW5hdGVkIGJlaGF2aW9yIGFjcm9zcyB0aGUgYXBwbGljYXRpb24uXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8UmVuZGVyZXJDdXN0b21FdmVudD59XG4gICAqIEBtZW1iZXJPZiBOZ3hCYXNlQ29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgbGlzdGVuRXZlbnQ6IEV2ZW50RW1pdHRlcjxSZW5kZXJlckN1c3RvbUV2ZW50PiA9XG4gICAgbmV3IEV2ZW50RW1pdHRlcjxSZW5kZXJlckN1c3RvbUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUmVmZXJlbmNlIHRvIHRoZSByZW5kZXJpbmcgZW5naW5lIGluc3RhbmNlXG4gICAqIEBzdW1tYXJ5IFByb3ZpZGVzIGFjY2VzcyB0byB0aGUgTmd4UmVuZGVyaW5nRW5naW5lIHNpbmdsZXRvbiBpbnN0YW5jZSxcbiAgICogd2hpY2ggaGFuZGxlcyB0aGUgcmVuZGVyaW5nIG9mIGNvbXBvbmVudHMgYmFzZWQgb24gbW9kZWwgZGVmaW5pdGlvbnMuXG4gICAqIFRoaXMgZW5naW5lIGlzIHVzZWQgdG8gZXh0cmFjdCBkZWNvcmF0b3IgbWV0YWRhdGEgYW5kIHJlbmRlciBjaGlsZCBjb21wb25lbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7Tmd4UmVuZGVyaW5nRW5naW5lfVxuICAgKi9cbiAgcmVuZGVyaW5nRW5naW5lOiBOZ3hSZW5kZXJpbmdFbmdpbmUgPVxuICAgIE5neFJlbmRlcmluZ0VuZ2luZS5nZXQoKSBhcyB1bmtub3duIGFzIE5neFJlbmRlcmluZ0VuZ2luZTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIExvZ2dlciBpbnN0YW5jZSBmb3IgdGhlIGNvbXBvbmVudC5cbiAgICogQHN1bW1hcnkgUHJvdmlkZXMgbG9nZ2luZyBjYXBhYmlsaXRpZXMgZm9yIHRoZSBjb21wb25lbnQsIGFsbG93aW5nIGZvciBjb25zaXN0ZW50XG4gICAqIGFuZCBzdHJ1Y3R1cmVkIGxvZ2dpbmcgb2YgaW5mb3JtYXRpb24sIHdhcm5pbmdzLCBhbmQgZXJyb3JzLiBUaGlzIGxvZ2dlciBpcyBpbml0aWFsaXplZFxuICAgKiBpbiB0aGUgbmdPbkluaXQgbWV0aG9kIHVzaW5nIHRoZSBnZXRMb2dnZXIgZnVuY3Rpb24gZnJvbSB0aGUgRm9yQW5ndWxhck1vZHVsZS5cbiAgICpcbiAgICogVGhlIGxvZ2dlciBpcyB1c2VkIHRocm91Z2hvdXQgdGhlIGNvbXBvbmVudCB0byByZWNvcmQgaW1wb3J0YW50IGV2ZW50cywgZGVidWcgaW5mb3JtYXRpb24sXG4gICAqIGFuZCBwb3RlbnRpYWwgaXNzdWVzLiBJdCBoZWxwcyBpbiBtb25pdG9yaW5nIHRoZSBjb21wb25lbnQncyBiZWhhdmlvciwgdHJhY2tpbmcgdGhlIGZsb3dcbiAgICogb2Ygb3BlcmF0aW9ucywgYW5kIGZhY2lsaXRhdGluZyBlYXNpZXIgZGVidWdnaW5nIGFuZCBtYWludGVuYW5jZS5cbiAgICpcbiAgICogQHR5cGUge0xvZ2dlcn1cbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlck9mIE5neEJhc2VDb21wb25lbnRcbiAgICovXG4gIGxvZ2dlciE6IExvZ2dlcjtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgTmd4QmFzZUNvbXBvbmVudC5cbiAgICogQHN1bW1hcnkgSW5pdGlhbGl6ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIGJhc2UgY29tcG9uZW50IHdpdGggdGhlIHByb3ZpZGVkIGluc3RhbmNlIHRva2VuLlxuICAgKiBUaGlzIGNvbnN0cnVjdG9yIHNldHMgdXAgdGhlIGZ1bmRhbWVudGFsIHByb3BlcnRpZXMgcmVxdWlyZWQgYnkgYWxsIERlY2FmIGNvbXBvbmVudHMsXG4gICAqIGluY2x1ZGluZyB0aGUgY29tcG9uZW50IG5hbWUsIGxvY2FsZSBzZXR0aW5ncywgYW5kIGxvZ2dpbmcgY2FwYWJpbGl0aWVzLiBUaGUgaW5zdGFuY2VcbiAgICogdG9rZW4gaXMgdXNlZCBmb3IgY29tcG9uZW50IGlkZW50aWZpY2F0aW9uIGFuZCBsb2NhbGUgZGVyaXZhdGlvbi5cbiAgICpcbiAgICogVGhlIGNvbnN0cnVjdG9yIHBlcmZvcm1zIHRoZSBmb2xsb3dpbmcgaW5pdGlhbGl6YXRpb24gc3RlcHM6XG4gICAqIDEuIFNldHMgdGhlIGNvbXBvbmVudE5hbWUgZnJvbSB0aGUgcHJvdmlkZWQgaW5zdGFuY2UgdG9rZW5cbiAgICogMi4gRGVyaXZlcyB0aGUgY29tcG9uZW50TG9jYWxlIGZyb20gdGhlIGNsYXNzIG5hbWUgdXNpbmcgdXRpbGl0eSBmdW5jdGlvbnNcbiAgICogMy4gSW5pdGlhbGl6ZXMgdGhlIGxvZ2dlciBpbnN0YW5jZSBmb3IgdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5zdGFuY2UgLSBUaGUgY29tcG9uZW50IGluc3RhbmNlIHRva2VuIHVzZWQgZm9yIGlkZW50aWZpY2F0aW9uXG4gICAqXG4gICAqIEBtZXJtYWlkXG4gICAqIHNlcXVlbmNlRGlhZ3JhbVxuICAgKiAgIHBhcnRpY2lwYW50IEEgYXMgQW5ndWxhclxuICAgKiAgIHBhcnRpY2lwYW50IEMgYXMgQ29tcG9uZW50XG4gICAqICAgcGFydGljaXBhbnQgQiBhcyBOZ3hCYXNlQ29tcG9uZW50XG4gICAqICAgcGFydGljaXBhbnQgVSBhcyBVdGlsc1xuICAgKiAgIHBhcnRpY2lwYW50IEwgYXMgTG9nZ2VyXG4gICAqXG4gICAqICAgQS0+PkM6IG5ldyBDb21wb25lbnQoaW5zdGFuY2UpXG4gICAqICAgQy0+PkI6IHN1cGVyKGluc3RhbmNlKVxuICAgKiAgIEItPj5COiBTZXQgY29tcG9uZW50TmFtZSA9IGluc3RhbmNlXG4gICAqICAgQi0+PlU6IGdldExvY2FsZUNvbnRleHQoaW5zdGFuY2UpXG4gICAqICAgVS0tPj5COiBSZXR1cm4gZGVyaXZlZCBsb2NhbGVcbiAgICogICBCLT4+QjogU2V0IGNvbXBvbmVudExvY2FsZVxuICAgKiAgIEItPj5MOiBnZXRMb2dnZXIodGhpcylcbiAgICogICBMLS0+PkI6IFJldHVybiBsb2dnZXIgaW5zdGFuY2VcbiAgICogICBCLT4+QjogU2V0IGxvZ2dlclxuICAgKlxuICAgKiBAbWVtYmVyT2YgTmd4QmFzZUNvbXBvbmVudFxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9wcmVmZXItaW5qZWN0XG4gIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihASW5qZWN0KCdpbnN0YW5jZVRva2VuJykgcHJvdGVjdGVkIGluc3RhbmNlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbXBvbmVudE5hbWUgPSBpbnN0YW5jZTtcbiAgICB0aGlzLmNvbXBvbmVudExvY2FsZSA9IGdldExvY2FsZUNvbnRleHQoaW5zdGFuY2UpO1xuICAgIHRoaXMubG9nZ2VyID0gZ2V0TG9nZ2VyKHRoaXMpO1xuICAgIHRoaXMuZ2V0TG9jYWxlKHRoaXMudHJhbnNsYXRhYmxlKTtcbiAgICB0aGlzLnVpZCA9IGdlbmVyYXRlUmFuZG9tVmFsdWUoMTIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBHZXR0ZXIgZm9yIHRoZSByZXBvc2l0b3J5IGluc3RhbmNlLlxuICAgKiBAc3VtbWFyeSBQcm92aWRlcyBhIGNvbm5lY3Rpb24gdG8gdGhlIGRhdGEgbGF5ZXIgZm9yIHJldHJpZXZpbmcgYW5kIG1hbmlwdWxhdGluZyBkYXRhLlxuICAgKiBUaGlzIG1ldGhvZCBpbml0aWFsaXplcyB0aGUgYF9yZXBvc2l0b3J5YCBwcm9wZXJ0eSBpZiBpdCBpcyBub3QgYWxyZWFkeSBzZXQsIGVuc3VyaW5nXG4gICAqIHRoYXQgYSBzaW5nbGUgaW5zdGFuY2Ugb2YgdGhlIHJlcG9zaXRvcnkgaXMgdXNlZCB0aHJvdWdob3V0IHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIFRoZSByZXBvc2l0b3J5IGlzIHVzZWQgdG8gcGVyZm9ybSBDUlVEIG9wZXJhdGlvbnMgb24gdGhlIGRhdGEgbW9kZWwsIHN1Y2ggYXMgZmV0Y2hpbmcgZGF0YSxcbiAgICogY3JlYXRpbmcgbmV3IGl0ZW1zLCB1cGRhdGluZyBleGlzdGluZyBpdGVtcywgYW5kIGRlbGV0aW5nIGl0ZW1zLiBJdCBhbHNvIHByb3ZpZGVzIG1ldGhvZHNcbiAgICogZm9yIHF1ZXJ5aW5nIGFuZCBmaWx0ZXJpbmcgZGF0YSBiYXNlZCBvbiBzcGVjaWZpYyBjcml0ZXJpYS5cbiAgICpcbiAgICogQHJldHVybnMge0RlY2FmUmVwb3NpdG9yeTxNb2RlbD59IFRoZSBpbml0aWFsaXplZCByZXBvc2l0b3J5IGluc3RhbmNlLlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyT2YgTmd4QmFzZUNvbXBvbmVudFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCByZXBvc2l0b3J5KCk6IERlY2FmUmVwb3NpdG9yeTxNb2RlbD4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXRoaXMuX3JlcG9zaXRvcnkpIHtcbiAgICAgICAgY29uc3QgbW9kZWxOYW1lID0gKHRoaXMubW9kZWwgYXMgTW9kZWwpLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gTW9kZWwuZ2V0KG1vZGVsTmFtZSk7XG4gICAgICAgIGlmICghY29uc3RydWN0b3IpXG4gICAgICAgICAgdGhyb3cgbmV3IEludGVybmFsRXJyb3IoXG4gICAgICAgICAgICAnQ2Fubm90IGZpbmQgbW9kZWwuIHdhcyBpdCByZWdpc3RlcmVkIHdpdGggQG1vZGVsPydcbiAgICAgICAgICApO1xuICAgICAgICBsZXQgZGJBZGFwdGVyRmxhdm91ciA9IGdldE9uV2luZG93KCdkYkFkYXB0ZXJGbGF2b3VyJyk7XG4gICAgICAgIGlmICghZGJBZGFwdGVyRmxhdm91ciAmJiBpc0RldmVsb3BtZW50TW9kZSgpKSB7XG4gICAgICAgICAgY29uc3QgYWRhcHRlciA9IG5ldyBSYW1BZGFwdGVyKHsgdXNlcjogJ3VzZXInIH0pO1xuICAgICAgICAgIGRiQWRhcHRlckZsYXZvdXIgPSBhZGFwdGVyLmZsYXZvdXI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcmVwb3NpdG9yeSA9IFJlcG9zaXRvcnkuZm9yTW9kZWwoXG4gICAgICAgICAgY29uc3RydWN0b3IsXG4gICAgICAgICAgZGJBZGFwdGVyRmxhdm91ciBhcyBzdHJpbmdcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBjb25zdHJ1Y3RvcigpIGFzIE1vZGVsO1xuICAgICAgICBpZiAodGhpcy5tb2RlbCAmJiAhdGhpcy5waylcbiAgICAgICAgICB0aGlzLnBrID1cbiAgICAgICAgICAgICh0aGlzLl9yZXBvc2l0b3J5IGFzIHVua25vd24gYXMgRGVjYWZSZXBvc2l0b3J5PE1vZGVsPikucGsgfHwgJ2lkJztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgICAgdGhyb3cgbmV3IEludGVybmFsRXJyb3IoKGVycm9yIGFzIEVycm9yKT8ubWVzc2FnZSB8fCAoZXJyb3IgYXMgc3RyaW5nKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9yZXBvc2l0b3J5O1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBIYW5kbGVzIGNoYW5nZXMgdG8gY29tcG9uZW50IGlucHV0c1xuICAgKiBAc3VtbWFyeSBUaGlzIEFuZ3VsYXIgbGlmZWN5Y2xlIGhvb2sgaXMgY2FsbGVkIHdoZW4gaW5wdXQgcHJvcGVydGllcyBjaGFuZ2UuXG4gICAqIEl0IHJlc3BvbmRzIHRvIGNoYW5nZXMgaW4gdGhlIG1vZGVsLCBsb2NhbGUsIG9yIHRyYW5zbGF0YWJsZSBwcm9wZXJ0aWVzIGJ5XG4gICAqIHVwZGF0aW5nIHRoZSBjb21wb25lbnQncyBpbnRlcm5hbCBzdGF0ZSBhY2NvcmRpbmdseS4gV2hlbiB0aGUgbW9kZWwgY2hhbmdlcyxcbiAgICogaXQgY2FsbHMgZ2V0TW9kZWwgdG8gcHJvY2VzcyB0aGUgbmV3IG1vZGVsIGFuZCBnZXRMb2NhbGUgdG8gdXBkYXRlIHRoZSBsb2NhbGUuXG4gICAqIFdoZW4gbG9jYWxlIG9yIHRyYW5zbGF0YWJsZSBwcm9wZXJ0aWVzIGNoYW5nZSwgaXQgY2FsbHMgZ2V0TG9jYWxlIHRvIHVwZGF0ZVxuICAgKiB0aGUgdHJhbnNsYXRpb24gc2V0dGluZ3MuXG4gICAqXG4gICAqIEBwYXJhbSB7U2ltcGxlQ2hhbmdlc30gY2hhbmdlcyAtIE9iamVjdCBjb250YWluaW5nIGNoYW5nZWQgcHJvcGVydGllc1xuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzW0Jhc2VDb21wb25lbnRQcm9wcy5NT0RFTF0pIHtcbiAgICAgIGNvbnN0IHsgY3VycmVudFZhbHVlIH0gPSBjaGFuZ2VzW0Jhc2VDb21wb25lbnRQcm9wcy5NT0RFTF07XG4gICAgICBpZiAoY3VycmVudFZhbHVlKSB0aGlzLmdldE1vZGVsKGN1cnJlbnRWYWx1ZSk7XG4gICAgICB0aGlzLmdldExvY2FsZSh0aGlzLnRyYW5zbGF0YWJsZSk7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGNoYW5nZXNbQmFzZUNvbXBvbmVudFByb3BzLklOSVRJQUxJWkVEXSB8fFxuICAgICAgY2hhbmdlc1tCYXNlQ29tcG9uZW50UHJvcHMuTE9DQUxFXSB8fFxuICAgICAgY2hhbmdlc1tCYXNlQ29tcG9uZW50UHJvcHMuVFJBTlNMQVRBQkxFXVxuICAgIClcbiAgICAgIHRoaXMuZ2V0TG9jYWxlKHRoaXMudHJhbnNsYXRhYmxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgYXBwcm9wcmlhdGUgbG9jYWxlIHN0cmluZyBiYXNlZCBvbiB0aGUgdHJhbnNsYXRhYmxlIGZsYWcgYW5kIGF2YWlsYWJsZSBsb2NhbGVzLlxuICAgKiBAc3VtbWFyeSBEZXRlcm1pbmVzIHdoaWNoIGxvY2FsZSBzdHJpbmcgdG8gdXNlIGZvciB0cmFuc2xhdGlvbiBiYXNlZCBvbiB0aGUgdHJhbnNsYXRhYmxlIGZsYWdcbiAgICogYW5kIGF2YWlsYWJsZSBsb2NhbGUgc2V0dGluZ3MuIFRoaXMgbWV0aG9kIGZpcnN0IGNvbnZlcnRzIHRoZSB0cmFuc2xhdGFibGUgcGFyYW1ldGVyIHRvIGEgYm9vbGVhblxuICAgKiB1c2luZyB0aGUgc3RyaW5nVG9Cb29sZWFuIHV0aWxpdHkgZnVuY3Rpb24uIElmIHRyYW5zbGF0YWJsZSBpcyBmYWxzZSwgaXQgcmV0dXJucyBhbiBlbXB0eSBzdHJpbmcsXG4gICAqIGluZGljYXRpbmcgbm8gdHJhbnNsYXRpb24gc2hvdWxkIGJlIHBlcmZvcm1lZC4gSWYgdHJhbnNsYXRhYmxlIGlzIHRydWUsIGl0IGNoZWNrcyBmb3IgYW4gZXhwbGljaXRseVxuICAgKiBwcm92aWRlZCBsb2NhbGUgdmlhIHRoZSBsb2NhbGUgcHJvcGVydHkuIElmIG5vIGV4cGxpY2l0IGxvY2FsZSBpcyBhdmFpbGFibGUsIGl0IGZhbGxzIGJhY2sgdG8gdGhlXG4gICAqIGNvbXBvbmVudExvY2FsZSBkZXJpdmVkIGZyb20gdGhlIGNvbXBvbmVudCdzIGNsYXNzIG5hbWUuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nT3JCb29sZWFufSB0cmFuc2xhdGFibGUgLSBXaGV0aGVyIHRoZSBjb21wb25lbnQgc2hvdWxkIGJlIHRyYW5zbGF0ZWRcbiAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgbG9jYWxlIHN0cmluZyB0byB1c2UgZm9yIHRyYW5zbGF0aW9uLCBvciBlbXB0eSBzdHJpbmcgaWYgbm90IHRyYW5zbGF0YWJsZVxuICAgKlxuICAgKiBAbWVybWFpZFxuICAgKiBzZXF1ZW5jZURpYWdyYW1cbiAgICogICBwYXJ0aWNpcGFudCBDIGFzIENvbXBvbmVudFxuICAgKiAgIHBhcnRpY2lwYW50IE4gYXMgTmd4QmFzZUNvbXBvbmVudFxuICAgKiAgIHBhcnRpY2lwYW50IFMgYXMgU3RyaW5nVXRpbHNcbiAgICpcbiAgICogICBDLT4+TjogZ2V0TG9jYWxlKHRyYW5zbGF0YWJsZSlcbiAgICogICBOLT4+Uzogc3RyaW5nVG9Cb29sZWFuKHRyYW5zbGF0YWJsZSlcbiAgICogICBTLS0+Pk46IFJldHVybiBib29sZWFuIHZhbHVlXG4gICAqICAgTi0+Pk46IFN0b3JlIGluIHRoaXMudHJhbnNsYXRhYmxlXG4gICAqICAgYWx0IHRyYW5zbGF0YWJsZSBpcyBmYWxzZVxuICAgKiAgICAgTi0tPj5DOiBSZXR1cm4gZW1wdHkgc3RyaW5nXG4gICAqICAgZWxzZSB0cmFuc2xhdGFibGUgaXMgdHJ1ZVxuICAgKiAgICAgYWx0IHRoaXMubG9jYWxlIGlzIGRlZmluZWRcbiAgICogICAgICAgTi0tPj5DOiBSZXR1cm4gdGhpcy5sb2NhbGVcbiAgICogICAgIGVsc2UgdGhpcy5sb2NhbGUgaXMgbm90IGRlZmluZWRcbiAgICogICAgICAgTi0tPj5DOiBSZXR1cm4gdGhpcy5jb21wb25lbnRMb2NhbGVcbiAgICogICAgIGVuZFxuICAgKiAgIGVuZFxuICAgKi9cbiAgZ2V0TG9jYWxlKHRyYW5zbGF0YWJsZTogU3RyaW5nT3JCb29sZWFuKTogc3RyaW5nIHtcbiAgICB0aGlzLnRyYW5zbGF0YWJsZSA9IHN0cmluZ1RvQm9vbGVhbih0cmFuc2xhdGFibGUpO1xuICAgIGlmICghdGhpcy50cmFuc2xhdGFibGUpIHJldHVybiAnJztcbiAgICBpZiAoIXRoaXMubG9jYWxlKSB0aGlzLmxvY2FsZSA9IHRoaXMuY29tcG9uZW50TG9jYWxlO1xuICAgIHJldHVybiB0aGlzLmxvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgcm91dGUgZm9yIHRoZSBjb21wb25lbnRcbiAgICogQHN1bW1hcnkgUmV0cmlldmVzIHRoZSByb3V0ZSBwYXRoIGZvciB0aGUgY29tcG9uZW50LCBnZW5lcmF0aW5nIG9uZSBiYXNlZCBvbiB0aGUgbW9kZWxcbiAgICogaWYgbm8gcm91dGUgaXMgZXhwbGljaXRseSBzZXQuIFRoaXMgbWV0aG9kIGNoZWNrcyBpZiBhIHJvdXRlIGlzIGFscmVhZHkgZGVmaW5lZCwgYW5kIGlmIG5vdCxcbiAgICogaXQgY3JlYXRlcyBhIGRlZmF1bHQgcm91dGUgYmFzZWQgb24gdGhlIG1vZGVsJ3MgY29uc3RydWN0b3IgbmFtZS4gVGhlIGdlbmVyYXRlZCByb3V0ZSBmb2xsb3dzXG4gICAqIHRoZSBwYXR0ZXJuICcvbW9kZWwve01vZGVsTmFtZX0nLiBUaGlzIGlzIHVzZWZ1bCBmb3IgYXV0b21hdGljIHJvdXRpbmcgaW4gQ1JVRCBvcGVyYXRpb25zLlxuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSByb3V0ZSBwYXRoIGZvciB0aGUgY29tcG9uZW50LCBvciBlbXB0eSBzdHJpbmcgaWYgbm8gcm91dGUgaXMgYXZhaWxhYmxlXG4gICAqL1xuICBnZXRSb3V0ZSgpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5yb3V0ZSAmJiB0aGlzLm1vZGVsIGluc3RhbmNlb2YgTW9kZWwpXG4gICAgICB0aGlzLnJvdXRlID0gYC9tb2RlbC8ke3RoaXMubW9kZWw/LmNvbnN0cnVjdG9yLm5hbWV9YDtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZSB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUmVzb2x2ZXMgYW5kIHNldHMgdGhlIGNvbXBvbmVudCdzIG1vZGVsXG4gICAqIEBzdW1tYXJ5IFByb2Nlc3NlcyB0aGUgcHJvdmlkZWQgbW9kZWwgcGFyYW1ldGVyLCB3aGljaCBjYW4gYmUgZWl0aGVyIGEgTW9kZWwgaW5zdGFuY2VcbiAgICogb3IgYSBzdHJpbmcgaWRlbnRpZmllci4gSWYgYSBzdHJpbmcgaXMgcHJvdmlkZWQsIGl0IGF0dGVtcHRzIHRvIHJlc29sdmUgdGhlIGFjdHVhbCBtb2RlbFxuICAgKiBmcm9tIHRoZSBpbmplY3RhYmxlcyByZWdpc3RyeS4gQWZ0ZXIgcmVzb2x2aW5nIHRoZSBtb2RlbCwgaXQgY2FsbHMgc2V0TW9kZWxEZWZpbml0aW9uc1xuICAgKiB0byBjb25maWd1cmUgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgbW9kZWwncyBtZXRhZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBNb2RlbH0gbW9kZWwgLSBUaGUgbW9kZWwgaW5zdGFuY2Ugb3IgaWRlbnRpZmllciBzdHJpbmdcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGdldE1vZGVsKG1vZGVsOiBzdHJpbmcgfCBNb2RlbCk6IHZvaWQge1xuICAgIGlmICghKG1vZGVsIGluc3RhbmNlb2YgTW9kZWwpKVxuICAgICAgdGhpcy5tb2RlbCA9IGdldEluamVjdGFibGVzUmVnaXN0cnkoKS5nZXQobW9kZWwpIGFzIE1vZGVsO1xuICAgIHRoaXMuc2V0TW9kZWxEZWZpbml0aW9ucyh0aGlzLm1vZGVsIGFzIE1vZGVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ29uZmlndXJlcyBjb21wb25lbnQgcHJvcGVydGllcyBiYXNlZCBvbiBtb2RlbCBtZXRhZGF0YVxuICAgKiBAc3VtbWFyeSBFeHRyYWN0cyBhbmQgYXBwbGllcyBjb25maWd1cmF0aW9uIGZyb20gdGhlIG1vZGVsJ3MgZGVjb3JhdG9ycyB0byBzZXQgdXBcbiAgICogdGhlIGNvbXBvbmVudC4gVGhpcyBtZXRob2QgdXNlcyB0aGUgcmVuZGVyaW5nIGVuZ2luZSB0byByZXRyaWV2ZSBkZWNvcmF0b3IgbWV0YWRhdGFcbiAgICogZnJvbSB0aGUgbW9kZWwsIHRoZW4gY29uZmlndXJlcyB0aGUgY29tcG9uZW50J3MgbWFwcGVyIGFuZCBpdGVtIHByb3BlcnRpZXMgYWNjb3JkaW5nbHkuXG4gICAqIEl0IGVuc3VyZXMgdGhlIHJvdXRlIGlzIHByb3Blcmx5IHNldCBhbmQgbWVyZ2VzIHZhcmlvdXMgcHJvcGVydGllcyBmcm9tIHRoZSBtb2RlbCdzXG4gICAqIG1ldGFkYXRhIGludG8gdGhlIGNvbXBvbmVudCdzIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7TW9kZWx9IG1vZGVsIC0gVGhlIG1vZGVsIHRvIGV4dHJhY3QgY29uZmlndXJhdGlvbiBmcm9tXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBzZXRNb2RlbERlZmluaXRpb25zKG1vZGVsOiBNb2RlbCk6IHZvaWQge1xuICAgIGlmIChtb2RlbCBpbnN0YW5jZW9mIE1vZGVsKSB7XG4gICAgICB0aGlzLmdldFJvdXRlKCk7XG4gICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgICBjb25zdCBmaWVsZCA9IHRoaXMucmVuZGVyaW5nRW5naW5lLmdldERlY29yYXRvcnModGhpcy5tb2RlbCBhcyBNb2RlbCwge30pO1xuICAgICAgY29uc3QgeyBwcm9wcywgaXRlbSwgY2hpbGRyZW4gfSA9IGZpZWxkO1xuICAgICAgdGhpcy5wcm9wcyA9IE9iamVjdC5hc3NpZ24ocHJvcHMgfHwge30sIHsgY2hpbGRyZW46IGNoaWxkcmVuIHx8IFtdIH0pO1xuICAgICAgaWYgKGl0ZW0/LnByb3BzPy5bJ21hcHBlciddKSB0aGlzLm1hcHBlciA9IGl0ZW0/LnByb3BzIVsnbWFwcGVyJ10gfHwge307XG4gICAgICB0aGlzLml0ZW0gPSB7XG4gICAgICAgIHRhZzogaXRlbT8udGFnIHx8ICcnLFxuICAgICAgICAuLi5pdGVtPy5wcm9wcyxcbiAgICAgICAgLi4uKHRoaXMubWFwcGVyID8geyBtYXBwZXI6IHRoaXMubWFwcGVyIH0gOiB7fSksXG4gICAgICAgIC4uLnsgcm91dGU6IGl0ZW0/LnByb3BzPy5bJ3JvdXRlJ10gfHwgdGhpcy5yb3V0ZSB9LFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEluaXRpYWxpemVzIHRoZSBjb21wb25lbnRcbiAgICogQHN1bW1hcnkgUGVyZm9ybXMgb25lLXRpbWUgaW5pdGlhbGl6YXRpb24gb2YgdGhlIGNvbXBvbmVudC4gVGhpcyBtZXRob2QgY2hlY2tzIGlmXG4gICAqIHRoZSBjb21wb25lbnQgaGFzIGFscmVhZHkgYmVlbiBpbml0aWFsaXplZCB0byBwcmV2ZW50IGR1cGxpY2F0ZSBpbml0aWFsaXphdGlvbi5cbiAgICogV2hlbiBjYWxsZWQgZm9yIHRoZSBmaXJzdCB0aW1lLCBpdCBzZXRzIHRoZSBpbml0aWFsaXplZCBmbGFnIHRvIHRydWUgYW5kIGxvZ3NcbiAgICogYW4gaW5pdGlhbGl6YXRpb24gbWVzc2FnZSB3aXRoIHRoZSBjb21wb25lbnQgbmFtZS4gVGhpcyBtZXRob2QgaXMgdHlwaWNhbGx5IGNhbGxlZFxuICAgKiBkdXJpbmcgdGhlIGNvbXBvbmVudCdzIGxpZmVjeWNsZSBzZXR1cC5cbiAgICovXG4gIGluaXRpYWxpemUoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEhhbmRsZXMgY3VzdG9tIGV2ZW50cyBmcm9tIGNoaWxkIGNvbXBvbmVudHMuXG4gICAqIEBzdW1tYXJ5IFJlY2VpdmVzIGV2ZW50cyBmcm9tIGNoaWxkIHJlbmRlcmVyIGNvbXBvbmVudHMgYW5kIGZvcndhcmRzIHRoZW0gdG8gcGFyZW50XG4gICAqIGNvbXBvbmVudHMgdGhyb3VnaCB0aGUgbGlzdGVuRXZlbnQgb3V0cHV0LiBUaGlzIGNyZWF0ZXMgYW4gZXZlbnQgcHJvcGFnYXRpb24gY2hhaW5cbiAgICogdGhhdCBhbGxvd3MgZXZlbnRzIHRvIGJ1YmJsZSB1cCB0aHJvdWdoIHRoZSBjb21wb25lbnQgaGllcmFyY2h5LCBlbmFibGluZyBjb29yZGluYXRlZFxuICAgKiByZXNwb25zZXMgdG8gdXNlciBpbnRlcmFjdGlvbnMgYWNyb3NzIHRoZSBsYXlvdXQgc3RydWN0dXJlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlbmRlcmVyQ3VzdG9tRXZlbnR9IGV2ZW50IC0gVGhlIGN1c3RvbSBldmVudCBmcm9tIGEgY2hpbGQgY29tcG9uZW50XG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqXG4gICAqIEBtZXJtYWlkXG4gICAqIHNlcXVlbmNlRGlhZ3JhbVxuICAgKiAgIHBhcnRpY2lwYW50IEMgYXMgQ2hpbGQgQ29tcG9uZW50XG4gICAqICAgcGFydGljaXBhbnQgTCBhcyBOZ3hCYXNlQ29tcG9uZW50XG4gICAqICAgcGFydGljaXBhbnQgUCBhcyBQYXJlbnQgQ29tcG9uZW50XG4gICAqXG4gICAqICAgQy0+Pkw6IEVtaXQgUmVuZGVyZXJDdXN0b21FdmVudFxuICAgKiAgIEwtPj5MOiBoYW5kbGVFdmVudChldmVudClcbiAgICogICBMLT4+UDogbGlzdGVuRXZlbnQuZW1pdChldmVudClcbiAgICogICBOb3RlIG92ZXIgUDogSGFuZGxlIGV2ZW50IGluIHBhcmVudFxuICAgKlxuICAgKiBAbWVtYmVyT2YgTmd4QmFzZUNvbXBvbmVudFxuICAgKi9cbiAgaGFuZGxlRXZlbnQoZXZlbnQ6IFJlbmRlcmVyQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RlbkV2ZW50LmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBUcmFja3MgaXRlbXMgaW4gbmdGb3IgbG9vcHMgZm9yIG9wdGltYWwgY2hhbmdlIGRldGVjdGlvbi5cbiAgICogQHN1bW1hcnkgUHJvdmlkZXMgYSB0cmFja2luZyBmdW5jdGlvbiBmb3IgQW5ndWxhcidzICpuZ0ZvciBkaXJlY3RpdmUgdG8gb3B0aW1pemUgcmVuZGVyaW5nXG4gICAqIHBlcmZvcm1hbmNlLiBUaGlzIG1ldGhvZCBnZW5lcmF0ZXMgdW5pcXVlIGlkZW50aWZpZXJzIGZvciBsaXN0IGl0ZW1zIGJhc2VkIG9uIHRoZWlyIGluZGV4XG4gICAqIGFuZCBjb250ZW50LCBhbGxvd2luZyBBbmd1bGFyIHRvIGVmZmljaWVudGx5IHRyYWNrIGNoYW5nZXMgYW5kIG1pbmltaXplIERPTSBtYW5pcHVsYXRpb25zXG4gICAqIGR1cmluZyBsaXN0IHVwZGF0ZXMuIFRoZSB0cmFja2luZyBmdW5jdGlvbiBpcyBlc3NlbnRpYWwgZm9yIG1haW50YWluaW5nIGNvbXBvbmVudCBzdGF0ZVxuICAgKiBhbmQgcHJldmVudGluZyB1bm5lY2Vzc2FyeSByZS1yZW5kZXJpbmcgb2YgdW5jaGFuZ2VkIGl0ZW1zLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gaW4gdGhlIGxpc3RcbiAgICogQHBhcmFtIHtLZXlWYWx1ZSB8IHN0cmluZyB8IG51bWJlcn0gaXRlbSAtIFRoZSBpdGVtIGRhdGEgdG8gdHJhY2tcbiAgICogQHJldHVybnMge3N0cmluZyB8IG51bWJlcn0gQSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGl0ZW1cbiAgICogQG1lbWJlck9mIE5neEJhc2VDb21wb25lbnRcbiAgICovXG4gIHRyYWNrSXRlbUZuKFxuICAgIGluZGV4OiBudW1iZXIsXG4gICAgaXRlbTogS2V5VmFsdWUgfCBzdHJpbmcgfCBudW1iZXJcbiAgKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gYCR7aW5kZXh9LSR7aXRlbX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBQYXJzZXMgYW5kIGFwcGxpZXMgcHJvcGVydGllcyBmcm9tIHRoZSBwcm9wcyBvYmplY3QgdG8gdGhlIGNvbXBvbmVudCBpbnN0YW5jZS5cbiAgICogQHN1bW1hcnkgVGhpcyBtZXRob2QgaXRlcmF0ZXMgdGhyb3VnaCB0aGUgcHJvcGVydGllcyBvZiB0aGUgcHJvdmlkZWQgaW5zdGFuY2Ugb2JqZWN0XG4gICAqIGFuZCBhcHBsaWVzIGFueSBtYXRjaGluZyBwcm9wZXJ0aWVzIGZyb20gdGhlIGNvbXBvbmVudCdzIHByb3BzIGNvbmZpZ3VyYXRpb24gdG8gdGhlXG4gICAqIGNvbXBvbmVudCBpbnN0YW5jZS4gVGhpcyBhbGxvd3MgZm9yIGR5bmFtaWMgcHJvcGVydHkgYXNzaWdubWVudCBiYXNlZCBvbiBjb25maWd1cmF0aW9uXG4gICAqIHN0b3JlZCBpbiB0aGUgcHJvcHMgb2JqZWN0LCBlbmFibGluZyBmbGV4aWJsZSBjb21wb25lbnQgY3VzdG9taXphdGlvbiB3aXRob3V0IHJlcXVpcmluZ1xuICAgKiBleHBsaWNpdCBwcm9wZXJ0eSBiaW5kaW5nIGZvciBldmVyeSBwb3NzaWJsZSBjb25maWd1cmF0aW9uIG9wdGlvbi5cbiAgICpcbiAgICogVGhlIG1ldGhvZCBwZXJmb3JtcyBhIHNhZmUgcHJvcGVydHkgYXNzaWdubWVudCBieSBjaGVja2luZyBpZiBlYWNoIGtleSBmcm9tIHRoZSBpbnN0YW5jZVxuICAgKiBleGlzdHMgaW4gdGhlIHByb3BzIG9iamVjdCBiZWZvcmUgYXBwbHlpbmcgaXQuIFRoaXMgcHJldmVudHMgYWNjaWRlbnRhbCBwcm9wZXJ0eVxuICAgKiBvdmVyd3JpdGluZyBhbmQgZW5zdXJlcyBvbmx5IGludGVuZGVkIHByb3BlcnRpZXMgYXJlIG1vZGlmaWVkLlxuICAgKlxuICAgKiBAcGFyYW0ge0tleVZhbHVlfSBpbnN0YW5jZSAtIFRoZSBjb21wb25lbnQgaW5zdGFuY2Ugb2JqZWN0IHRvIHByb2Nlc3NcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICpcbiAgICogQG1lcm1haWRcbiAgICogc2VxdWVuY2VEaWFncmFtXG4gICAqICAgcGFydGljaXBhbnQgQyBhcyBDb21wb25lbnRcbiAgICogICBwYXJ0aWNpcGFudCBCIGFzIE5neEJhc2VDb21wb25lbnRcbiAgICogICBwYXJ0aWNpcGFudCBQIGFzIFByb3BzIE9iamVjdFxuICAgKlxuICAgKiAgIEMtPj5COiBwYXJzZVByb3BzKGluc3RhbmNlKVxuICAgKiAgIEItPj5COiBHZXQgT2JqZWN0LmtleXMoaW5zdGFuY2UpXG4gICAqICAgbG9vcCBGb3IgZWFjaCBrZXkgaW4gaW5zdGFuY2VcbiAgICogICAgIEItPj5QOiBDaGVjayBpZiBrZXkgZXhpc3RzIGluIHRoaXMucHJvcHNcbiAgICogICAgIGFsdCBLZXkgZXhpc3RzIGluIHByb3BzXG4gICAqICAgICAgIEItPj5COiBTZXQgdGhpc1trZXldID0gdGhpcy5wcm9wc1trZXldXG4gICAqICAgICBlbHNlIEtleSBub3QgaW4gcHJvcHNcbiAgICogICAgICAgTm90ZSBvdmVyIEI6IFNraXAgdGhpcyBrZXlcbiAgICogICAgIGVuZFxuICAgKiAgIGVuZFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBtZW1iZXJPZiBOZ3hCYXNlQ29tcG9uZW50XG4gICAqL1xuICBwcm90ZWN0ZWQgcGFyc2VQcm9wcyhpbnN0YW5jZTogS2V5VmFsdWUpOiB2b2lkIHtcbiAgICBPYmplY3Qua2V5cyhpbnN0YW5jZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5wcm9wcykuaW5jbHVkZXMoa2V5KSlcbiAgICAgICAgKHRoaXMgYXMgS2V5VmFsdWUpW2tleV0gPSB0aGlzLnByb3BzW2tleV07XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==