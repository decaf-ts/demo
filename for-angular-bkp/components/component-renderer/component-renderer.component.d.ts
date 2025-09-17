import { ComponentRef, EnvironmentInjector, EventEmitter, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { KeyValue, RendererCustomEvent } from '../../engine';
import { Logger } from '@decaf-ts/logging';
import { Model } from '@decaf-ts/decorator-validation';
import * as i0 from "@angular/core";
/**
 * @description Dynamic component renderer for Decaf Angular applications.
 * @summary This component provides a flexible way to dynamically render Angular components
 * at runtime based on a tag name. It handles the creation, property binding, and event
 * subscription for dynamically loaded components. This is particularly useful for
 * building configurable UIs where components need to be determined at runtime.
 *
 * @component {ComponentRendererComponent}
 * @example
 * <ngx-decaf-component-renderer
 *   [tag]="tag"
 *   [globals]="globals"
 *   (listenEvent)="listenEvent($event)">
 * </ngx-decaf-component-renderer>
 *
 * @mermaid
 * classDiagram
 *   class ComponentRendererComponent {
 *     +ViewContainerRef vcr
 *     +string tag
 *     +Record~string, unknown~ globals
 *     +EnvironmentInjector injector
 *     +ComponentRef~unknown~ component
 *     +EventEmitter~RendererCustomEvent~ listenEvent
 *     +ngOnInit()
 *     +ngOnDestroy()
 *     +ngOnChanges(changes)
 *     -createComponent(tag, globals)
 *     -subscribeEvents()
 *     -unsubscribeEvents()
 *   }
 *   ComponentRendererComponent --|> OnInit
 *   ComponentRendererComponent --|> OnChanges
 *   ComponentRendererComponent --|> OnDestroy
 *
 * @implements {OnInit}
 * @implements {OnChanges}
 * @implements {OnDestroy}
 */
export declare class ComponentRendererComponent implements OnInit, OnDestroy {
    /**
     * @description Reference to the container where the dynamic component will be rendered.
     * @summary This ViewContainerRef provides the container where the dynamically created
     * component will be inserted into the DOM. It's marked as static to ensure it's available
     * during the ngOnInit lifecycle hook when the component is created.
     *
     * @type {ViewContainerRef}
     * @memberOf ComponentRendererComponent
     */
    vcr: ViewContainerRef;
    /**
     * @description The tag name of the component to be dynamically rendered.
     * @summary This input property specifies which component should be rendered by providing
     * its registered tag name. The tag must correspond to a component that has been registered
     * with the NgxRenderingEngine. This is a required input as it determines which component
     * to create.
     *
     * @type {string}
     * @required
     * @memberOf ComponentRendererComponent
     */
    tag: string;
    /**
     * @description Global properties to pass to the rendered component.
     * @summary This input property allows passing a set of properties to the dynamically
     * rendered component. These properties will be mapped to the component's inputs if they
     * match. Properties that don't match any input on the target component will be filtered out
     * with a warning.
     *
     * @type {Record<string, unknown>}
     * @default {}
     * @memberOf ComponentRendererComponent
     */
    globals: Record<string, unknown>;
    /**
     * @description Injector used for dependency injection in the dynamic component.
     * @summary This injector is used when creating the dynamic component to provide it with
     * access to the application's dependency injection system. It ensures that the dynamically
     * created component can access the same services and dependencies as statically created
     * components.
     *
     * @type {EnvironmentInjector}
     * @memberOf ComponentRendererComponent
     */
    injector: EnvironmentInjector;
    /**
     * @description Reference to the dynamically created component.
     * @summary This property holds a reference to the ComponentRef of the dynamically created
     * component. It's used to interact with the component instance, subscribe to its events,
     * and properly destroy it when the renderer is destroyed.
     *
     * @type {ComponentRef<unknown>}
     * @memberOf ComponentRendererComponent
     */
    component: ComponentRef<unknown>;
    /**
     * @description Event emitter for events from the rendered component.
     * @summary This output property emits events that originate from the dynamically rendered
     * component. It allows the parent component to listen for and respond to events from the
     * dynamic component, creating a communication channel between the parent and the dynamically
     * rendered child.
     *
     * @type {EventEmitter<RendererCustomEvent>}
     * @memberOf ComponentRendererComponent
     */
    listenEvent: EventEmitter<RendererCustomEvent>;
    /**
     * @description Logger instance for the component.
     * @summary This property holds a Logger instance specific to this component.
     * It's used to log information, warnings, and errors related to the component's
     * operations, particularly useful for debugging and monitoring the dynamic
     * component rendering process.
     *
     * @type {Logger}
     * @memberOf ComponentRendererComponent
     */
    logger: Logger;
    /**
     * @description Repository model for data operations.
     * @summary The data model repository that this component will use for CRUD operations.
     * This provides a connection to the data layer for retrieving and manipulating data.
     *
     * @type {Model| undefined}
     */
    model: Model | undefined;
    parent: undefined | KeyValue;
    inner?: TemplateRef<unknown>;
    uid: string;
    /**
     * @description Creates an instance of ComponentRendererComponent.
     * @summary Initializes a new ComponentRendererComponent. This component doesn't require
     * any dependencies to be injected in its constructor as it uses the inject function to
     * obtain the EnvironmentInjector.
     *
     * @memberOf ComponentRendererComponent
     */
    constructor();
    /**
     * @description Initializes the component after Angular first displays the data-bound properties.
     * @summary Sets up the component by creating the dynamic component specified by the tag input.
     * This method is called once when the component is initialized and triggers the dynamic
     * component creation process with the provided tag name and global properties.
     *
     * @mermaid
     * sequenceDiagram
     *   participant A as Angular Lifecycle
     *   participant C as ComponentRendererComponent
     *   participant R as NgxRenderingEngine
     *
     *   A->>C: ngOnInit()
     *   C->>C: createComponent(tag, globals)
     *   C->>R: components(tag)
     *   R-->>C: Return component constructor
     *   C->>C: Process component inputs
     *   C->>C: Create component instance
     *   C->>C: subscribeEvents()
     *
     * @return {void}
     * @memberOf ComponentRendererComponent
     */
    ngOnInit(): void;
    /**
     * @description Cleans up resources when the component is destroyed.
     * @summary Performs cleanup operations when the component is being destroyed by Angular.
     * This includes unsubscribing from all event emitters of the dynamic component and
     * destroying the rendering engine instance to prevent memory leaks.
     *
     * @mermaid
     * sequenceDiagram
     *   participant A as Angular Lifecycle
     *   participant C as ComponentRendererComponent
     *   participant R as NgxRenderingEngine
     *
     *   A->>C: ngOnDestroy()
     *   alt component exists
     *     C->>C: unsubscribeEvents()
     *     C->>R: destroy()
     *   end
     *
     * @return {Promise<void>} A promise that resolves when cleanup is complete
     * @memberOf ComponentRendererComponent
     */
    ngOnDestroy(): Promise<void>;
    /**
     * @description Creates and renders a dynamic component.
     * @summary This method handles the creation of a dynamic component based on the provided tag.
     * It retrieves the component constructor from the rendering engine, processes its inputs,
     * filters out unmapped properties, creates the component instance, and sets up event subscriptions.
     *
     * @param {string} tag - The tag name of the component to create
     * @param {KeyValue} globals - Global properties to pass to the component
     * @return {void}
     *
     * @mermaid
     * sequenceDiagram
     *   participant C as ComponentRendererComponent
     *   participant R as NgxRenderingEngine
     *   participant V as ViewContainerRef
     *
     *   C->>R: components(tag)
     *   R-->>C: Return component constructor
     *   C->>C: reflectComponentType(component)
     *   C->>C: Process input properties
     *   C->>C: Filter unmapped properties
     *   C->>V: clear()
     *   C->>R: createComponent(component, props, metadata, vcr, injector, [])
     *   R-->>C: Return component reference
     *   C->>C: subscribeEvents()
     *
     * @private
     * @memberOf ComponentRendererComponent
     */
    private createComponent;
    createParentComponent(): void;
    /**
     * @description Subscribes to events emitted by the dynamic component.
     * @summary This method sets up subscriptions to all EventEmitter properties of the
     * dynamically created component. When an event is emitted by the dynamic component,
     * it is captured and re-emitted through the listenEvent output property with additional
     * metadata about the event source.
     *
     * @mermaid
     * sequenceDiagram
     *   participant C as ComponentRendererComponent
     *   participant D as Dynamic Component
     *   participant P as Parent Component
     *
     *   C->>C: subscribeEvents()
     *   C->>D: Get instance properties
     *   loop For each property
     *     C->>C: Check if property is EventEmitter
     *     alt is EventEmitter
     *       C->>D: Subscribe to event
     *       D-->>C: Event emitted
     *       C->>P: Re-emit event with metadata
     *     end
     *   end
     *
     * @private
     * @return {void}
     * @memberOf ComponentRendererComponent
     */
    private subscribeEvents;
    /**
     * @description Unsubscribes from all events of the dynamic component.
     * @summary This method cleans up event subscriptions when the component is being destroyed.
     * It iterates through all properties of the dynamic component instance and unsubscribes
     * from any EventEmitter properties to prevent memory leaks and unexpected behavior after
     * the component is destroyed.
     *
     * @mermaid
     * sequenceDiagram
     *   participant C as ComponentRendererComponent
     *   participant D as Dynamic Component
     *
     *   C->>C: unsubscribeEvents()
     *   C->>D: Get instance properties
     *   loop For each property
     *     C->>C: Check if property is EventEmitter
     *     alt is EventEmitter
     *       C->>D: Unsubscribe from event
     *     end
     *   end
     *
     * @private
     * @return {void}
     * @memberOf ComponentRendererComponent
     */
    private unsubscribeEvents;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComponentRendererComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ComponentRendererComponent, "ngx-decaf-component-renderer", never, { "tag": { "alias": "tag"; "required": true; }; "globals": { "alias": "globals"; "required": false; }; "model": { "alias": "model"; "required": false; }; "parent": { "alias": "parent"; "required": false; }; }, { "listenEvent": "listenEvent"; }, never, never, true, never>;
}
//# sourceMappingURL=component-renderer.component.d.ts.map