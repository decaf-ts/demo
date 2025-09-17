import { Component, EnvironmentInjector, EventEmitter, inject, Input, Output, reflectComponentType, TemplateRef, ViewChild, ViewContainerRef, } from '@angular/core';
import { NgxRenderingEngine } from '../../engine/NgxRenderingEngine';
import { ForAngularModule, getLogger } from '../../for-angular.module';
import { generateRandomValue } from '../../helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["componentViewContainer"];
const _c1 = ["inner"];
function ComponentRendererComponent_ng_template_1_Template(rf, ctx) { }
function ComponentRendererComponent_ng_template_3_Conditional_0_For_1_Conditional_0_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ComponentRendererComponent_ng_template_3_Conditional_0_For_1_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ComponentRendererComponent_ng_template_3_Conditional_0_For_1_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 4);
} if (rf & 2) {
    const child_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngComponentOutlet", child_r1.component)("ngComponentOutletInjector", child_r1.injector)("ngComponentOutletInputs", child_r1.inputs)("ngComponentOutletContent", child_r1.content);
} }
function ComponentRendererComponent_ng_template_3_Conditional_0_For_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-decaf-component-renderer", 3);
} if (rf & 2) {
    const child_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("parent", child_r1);
} }
function ComponentRendererComponent_ng_template_3_Conditional_0_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ComponentRendererComponent_ng_template_3_Conditional_0_For_1_Conditional_0_Template, 1, 4, "ng-container")(1, ComponentRendererComponent_ng_template_3_Conditional_0_For_1_Conditional_1_Template, 1, 1, "ngx-decaf-component-renderer", 3);
} if (rf & 2) {
    const child_r1 = ctx.$implicit;
    i0.ɵɵconditional(!(child_r1.children == null ? null : child_r1.children.length) ? 0 : 1);
} }
function ComponentRendererComponent_ng_template_3_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, ComponentRendererComponent_ng_template_3_Conditional_0_For_1_Template, 2, 1, null, null, i0.ɵɵrepeaterTrackByIdentity);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵrepeater(ctx_r1.parent.children);
} }
function ComponentRendererComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ComponentRendererComponent_ng_template_3_Conditional_0_Template, 2, 0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵconditional((ctx_r1.parent == null ? null : ctx_r1.parent.children == null ? null : ctx_r1.parent.children.length) ? 0 : -1);
} }
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
export class ComponentRendererComponent {
    /**
     * @description Creates an instance of ComponentRendererComponent.
     * @summary Initializes a new ComponentRendererComponent. This component doesn't require
     * any dependencies to be injected in its constructor as it uses the inject function to
     * obtain the EnvironmentInjector.
     *
     * @memberOf ComponentRendererComponent
     */
    constructor() {
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
        this.globals = {};
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
        this.injector = inject(EnvironmentInjector);
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
        this.listenEvent = new EventEmitter();
        this.parent = undefined;
        this.uid = generateRandomValue(12);
        this.logger = getLogger(this);
    }
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
    ngOnInit() {
        if (!this.parent) {
            this.createComponent(this.tag, this.globals);
        }
        else {
            this.createParentComponent();
        }
    }
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
    async ngOnDestroy() {
        if (this.component) {
            this.unsubscribeEvents();
            NgxRenderingEngine.destroy();
        }
    }
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
    createComponent(tag, globals = {}) {
        const component = NgxRenderingEngine.components(tag)
            ?.constructor;
        const metadata = reflectComponentType(component);
        const componentInputs = metadata.inputs;
        const props = globals?.['item'] || globals?.['props'] || {};
        if (props?.['tag'])
            delete props['tag'];
        const inputKeys = Object.keys(props);
        const unmappedKeys = [];
        for (const input of inputKeys) {
            if (!inputKeys.length)
                break;
            const prop = componentInputs.find((item) => item.propName === input);
            if (!prop) {
                delete props[input];
                unmappedKeys.push(input);
            }
        }
        this.vcr.clear();
        this.component = NgxRenderingEngine.createComponent(component, props, metadata, this.vcr, this.injector, []);
        this.subscribeEvents();
    }
    createParentComponent() {
        const { component, inputs } = this.parent;
        const metadata = reflectComponentType(component);
        const template = this.vcr.createEmbeddedView(this.inner, this.injector).rootNodes;
        this.component = NgxRenderingEngine.createComponent(component, inputs, metadata, this.vcr, this.injector, template);
        this.subscribeEvents();
    }
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
    subscribeEvents() {
        if (this.component) {
            const instance = this.component?.instance;
            const componentKeys = Object.keys(instance);
            for (const key of componentKeys) {
                const value = instance[key];
                if (value instanceof EventEmitter)
                    instance[key].subscribe((event) => {
                        this.listenEvent.emit({
                            name: key,
                            ...event,
                        });
                    });
            }
        }
    }
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
    unsubscribeEvents() {
        if (this.component) {
            const instance = this.component?.instance;
            const componentKeys = Object.keys(instance);
            for (const key of componentKeys) {
                const value = instance[key];
                if (value instanceof EventEmitter)
                    instance[key].unsubscribe();
            }
        }
    }
    static { this.ɵfac = function ComponentRendererComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ComponentRendererComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ComponentRendererComponent, selectors: [["ngx-decaf-component-renderer"]], viewQuery: function ComponentRendererComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7, ViewContainerRef);
            i0.ɵɵviewQuery(_c1, 7, TemplateRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.vcr = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inner = _t.first);
        } }, hostVars: 1, hostBindings: function ComponentRendererComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("id", ctx.rendererId);
        } }, inputs: { tag: "tag", globals: "globals", model: "model", parent: "parent" }, outputs: { listenEvent: "listenEvent" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 5, vars: 1, consts: [["componentViewContainer", ""], ["inner", ""], [3, "id"], [3, "parent"], [4, "ngComponentOutlet", "ngComponentOutletInjector", "ngComponentOutletInputs", "ngComponentOutletContent"]], template: function ComponentRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 2);
            i0.ɵɵtemplate(1, ComponentRendererComponent_ng_template_1_Template, 0, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(3, ComponentRendererComponent_ng_template_3_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("id", ctx.uid);
        } }, dependencies: [ComponentRendererComponent, ForAngularModule, i1.NgComponentOutlet] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ComponentRendererComponent, [{
        type: Component,
        args: [{ selector: 'ngx-decaf-component-renderer', imports: [ForAngularModule], standalone: true, host: { '[attr.id]': 'rendererId' }, template: "<!-- Keep to avoid id conflicts -->\n<div [id]=\"uid\"></div>\n\n<ng-template #componentViewContainer></ng-template>\n<ng-template #inner>\n  @if(parent?.children?.length) {\n    @for(child of parent.children; track child) {\n        @if(!child.children?.length) {\n          <ng-container\n                *ngComponentOutlet=\"\n                  child.component;\n                  injector: child.injector;\n                  inputs: child.inputs;\n                  content:child.content;\n                \"\n          />\n        } @else {\n          <ngx-decaf-component-renderer [parent]=\"child\"> </ngx-decaf-component-renderer>\n        }\n    }\n  }\n</ng-template>\n\n\n\n" }]
    }], () => [], { vcr: [{
            type: ViewChild,
            args: ['componentViewContainer', { static: true, read: ViewContainerRef }]
        }], tag: [{
            type: Input,
            args: [{ required: true }]
        }], globals: [{
            type: Input
        }], listenEvent: [{
            type: Output
        }], model: [{
            type: Input
        }], parent: [{
            type: Input
        }], inner: [{
            type: ViewChild,
            args: ['inner', { read: TemplateRef, static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ComponentRendererComponent, { className: "ComponentRendererComponent", filePath: "components/component-renderer/component-renderer.component.ts", lineNumber: 73 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXJlbmRlcmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9jb21wb25lbnQtcmVuZGVyZXIvY29tcG9uZW50LXJlbmRlcmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9jb21wb25lbnQtcmVuZGVyZXIvY29tcG9uZW50LXJlbmRlcmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsbUJBQW1CLEVBQ25CLFlBQVksRUFDWixNQUFNLEVBRU4sS0FBSyxFQUdMLE1BQU0sRUFDTixvQkFBb0IsRUFDcEIsV0FBVyxFQUVYLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQ2YxQyx3QkFPRTs7O0lBUEYsNklBT0U7OztJQUZ5QixBQURBLEFBREEsQUFGcEIsc0RBRW9CLGdEQUNBLDRDQUNBLDhDQUVyQzs7O0lBRVUsa0RBQStFOzs7SUFBakQsaUNBQWdCOzs7SUFEOUMsQUFURiwySEFBOEIsaUlBU3JCOzs7SUFUVCx3RkFXQzs7O0lBWkwsNklBYUM7OztJQWJELHFDQWFDOzs7SUFkSCx1RkFBK0I7OztJQUEvQixpSUFlQzs7QURLSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQ0c7QUFTSCxNQUFNLE9BQU8sMEJBQTBCO0lBOEdyQzs7Ozs7OztPQU9HO0lBQ0g7UUExRkE7Ozs7Ozs7Ozs7V0FVRztRQUVILFlBQU8sR0FBNEIsRUFB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b25lbnRNaXJyb3IsXG4gIENvbXBvbmVudFJlZixcbiAgRW52aXJvbm1lbnRJbmplY3RvcixcbiAgRXZlbnRFbWl0dGVyLFxuICBpbmplY3QsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgcmVmbGVjdENvbXBvbmVudFR5cGUsXG4gIFRlbXBsYXRlUmVmLFxuICBUeXBlLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4UmVuZGVyaW5nRW5naW5lIH0gZnJvbSAnLi4vLi4vZW5naW5lL05neFJlbmRlcmluZ0VuZ2luZSc7XG5pbXBvcnQgeyBCYXNlQ3VzdG9tRXZlbnQsIEtleVZhbHVlLCBSZW5kZXJlckN1c3RvbUV2ZW50IH0gZnJvbSAnLi4vLi4vZW5naW5lJztcbmltcG9ydCB7IEZvckFuZ3VsYXJNb2R1bGUsIGdldExvZ2dlciB9IGZyb20gJy4uLy4uL2Zvci1hbmd1bGFyLm1vZHVsZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICdAZGVjYWYtdHMvbG9nZ2luZyc7XG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJ0BkZWNhZi10cy9kZWNvcmF0b3ItdmFsaWRhdGlvbic7XG5pbXBvcnQgeyBnZW5lcmF0ZVJhbmRvbVZhbHVlIH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIER5bmFtaWMgY29tcG9uZW50IHJlbmRlcmVyIGZvciBEZWNhZiBBbmd1bGFyIGFwcGxpY2F0aW9ucy5cbiAqIEBzdW1tYXJ5IFRoaXMgY29tcG9uZW50IHByb3ZpZGVzIGEgZmxleGlibGUgd2F5IHRvIGR5bmFtaWNhbGx5IHJlbmRlciBBbmd1bGFyIGNvbXBvbmVudHNcbiAqIGF0IHJ1bnRpbWUgYmFzZWQgb24gYSB0YWcgbmFtZS4gSXQgaGFuZGxlcyB0aGUgY3JlYXRpb24sIHByb3BlcnR5IGJpbmRpbmcsIGFuZCBldmVudFxuICogc3Vic2NyaXB0aW9uIGZvciBkeW5hbWljYWxseSBsb2FkZWQgY29tcG9uZW50cy4gVGhpcyBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvclxuICogYnVpbGRpbmcgY29uZmlndXJhYmxlIFVJcyB3aGVyZSBjb21wb25lbnRzIG5lZWQgdG8gYmUgZGV0ZXJtaW5lZCBhdCBydW50aW1lLlxuICpcbiAqIEBjb21wb25lbnQge0NvbXBvbmVudFJlbmRlcmVyQ29tcG9uZW50fVxuICogQGV4YW1wbGVcbiAqIDxuZ3gtZGVjYWYtY29tcG9uZW50LXJlbmRlcmVyXG4gKiAgIFt0YWddPVwidGFnXCJcbiAqICAgW2dsb2JhbHNdPVwiZ2xvYmFsc1wiXG4gKiAgIChsaXN0ZW5FdmVudCk9XCJsaXN0ZW5FdmVudCgkZXZlbnQpXCI+XG4gKiA8L25neC1kZWNhZi1jb21wb25lbnQtcmVuZGVyZXI+XG4gKlxuICogQG1lcm1haWRcbiAqIGNsYXNzRGlhZ3JhbVxuICogICBjbGFzcyBDb21wb25lbnRSZW5kZXJlckNvbXBvbmVudCB7XG4gKiAgICAgK1ZpZXdDb250YWluZXJSZWYgdmNyXG4gKiAgICAgK3N0cmluZyB0YWdcbiAqICAgICArUmVjb3JkfnN0cmluZywgdW5rbm93bn4gZ2xvYmFsc1xuICogICAgICtFbnZpcm9ubWVudEluamVjdG9yIGluamVjdG9yXG4gKiAgICAgK0NvbXBvbmVudFJlZn51bmtub3dufiBjb21wb25lbnRcbiAqICAgICArRXZlbnRFbWl0dGVyflJlbmRlcmVyQ3VzdG9tRXZlbnR+IGxpc3RlbkV2ZW50XG4gKiAgICAgK25nT25Jbml0KClcbiAqICAgICArbmdPbkRlc3Ryb3koKVxuICogICAgICtuZ09uQ2hhbmdlcyhjaGFuZ2VzKVxuICogICAgIC1jcmVhdGVDb21wb25lbnQodGFnLCBnbG9iYWxzKVxuICogICAgIC1zdWJzY3JpYmVFdmVudHMoKVxuICogICAgIC11bnN1YnNjcmliZUV2ZW50cygpXG4gKiAgIH1cbiAqICAgQ29tcG9uZW50UmVuZGVyZXJDb21wb25lbnQgLS18PiBPbkluaXRcbiAqICAgQ29tcG9uZW50UmVuZGVyZXJDb21wb25lbnQgLS18PiBPbkNoYW5nZXNcbiAqICAgQ29tcG9uZW50UmVuZGVyZXJDb21wb25lbnQgLS18PiBPbkRlc3Ryb3lcbiAqXG4gKiBAaW1wbGVtZW50cyB7T25Jbml0fVxuICogQGltcGxlbWVudHMge09uQ2hhbmdlc31cbiAqIEBpbXBsZW1lbnRzIHtPbkRlc3Ryb3l9XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1kZWNhZi1jb21wb25lbnQtcmVuZGVyZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50LXJlbmRlcmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29tcG9uZW50LXJlbmRlcmVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGltcG9ydHM6IFtGb3JBbmd1bGFyTW9kdWxlXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaG9zdDogeydbYXR0ci5pZF0nOiAncmVuZGVyZXJJZCd9LFxufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRSZW5kZXJlckNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBSZWZlcmVuY2UgdG8gdGhlIGNvbnRhaW5lciB3aGVyZSB0aGUgZHluYW1pYyBjb21wb25lbnQgd2lsbCBiZSByZW5kZXJlZC5cbiAgICogQHN1bW1hcnkgVGhpcyBWaWV3Q29udGFpbmVyUmVmIHByb3ZpZGVzIHRoZSBjb250YWluZXIgd2hlcmUgdGhlIGR5bmFtaWNhbGx5IGNyZWF0ZWRcbiAgICogY29tcG9uZW50IHdpbGwgYmUgaW5zZXJ0ZWQgaW50byB0aGUgRE9NLiBJdCdzIG1hcmtlZCBhcyBzdGF0aWMgdG8gZW5zdXJlIGl0J3MgYXZhaWxhYmxlXG4gICAqIGR1cmluZyB0aGUgbmdPbkluaXQgbGlmZWN5Y2xlIGhvb2sgd2hlbiB0aGUgY29tcG9uZW50IGlzIGNyZWF0ZWQuXG4gICAqXG4gICAqIEB0eXBlIHtWaWV3Q29udGFpbmVyUmVmfVxuICAgKiBAbWVtYmVyT2YgQ29tcG9uZW50UmVuZGVyZXJDb21wb25lbnRcbiAgICovXG4gIEBWaWV3Q2hpbGQoJ2NvbXBvbmVudFZpZXdDb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSwgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxuICB2Y3IhOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhlIHRhZyBuYW1lIG9mIHRoZSBjb21wb25lbnQgdG8gYmUgZHluYW1pY2FsbHkgcmVuZGVyZWQuXG4gICAqIEBzdW1tYXJ5IFRoaXMgaW5wdXQgcHJvcGVydHkgc3BlY2lmaWVzIHdoaWNoIGNvbXBvbmVudCBzaG91bGQgYmUgcmVuZGVyZWQgYnkgcHJvdmlkaW5nXG4gICAqIGl0cyByZWdpc3RlcmVkIHRhZyBuYW1lLiBUaGUgdGFnIG11c3QgY29ycmVzcG9uZCB0byBhIGNvbXBvbmVudCB0aGF0IGhhcyBiZWVuIHJlZ2lzdGVyZWRcbiAgICogd2l0aCB0aGUgTmd4UmVuZGVyaW5nRW5naW5lLiBUaGlzIGlzIGEgcmVxdWlyZWQgaW5wdXQgYXMgaXQgZGV0ZXJtaW5lcyB3aGljaCBjb21wb25lbnRcbiAgICogdG8gY3JlYXRlLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAcmVxdWlyZWRcbiAgICogQG1lbWJlck9mIENvbXBvbmVudFJlbmRlcmVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoeyByZXF1aXJlZDogdHJ1ZSB9KVxuICB0YWchOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBHbG9iYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSByZW5kZXJlZCBjb21wb25lbnQuXG4gICAqIEBzdW1tYXJ5IFRoaXMgaW5wdXQgcHJvcGVydHkgYWxsb3dzIHBhc3NpbmcgYSBzZXQgb2YgcHJvcGVydGllcyB0byB0aGUgZHluYW1pY2FsbHlcbiAgICogcmVuZGVyZWQgY29tcG9uZW50LiBUaGVzZSBwcm9wZXJ0aWVzIHdpbGwgYmUgbWFwcGVkIHRvIHRoZSBjb21wb25lbnQncyBpbnB1dHMgaWYgdGhleVxuICAgKiBtYXRjaC4gUHJvcGVydGllcyB0aGF0IGRvbid0IG1hdGNoIGFueSBpbnB1dCBvbiB0aGUgdGFyZ2V0IGNvbXBvbmVudCB3aWxsIGJlIGZpbHRlcmVkIG91dFxuICAgKiB3aXRoIGEgd2FybmluZy5cbiAgICpcbiAgICogQHR5cGUge1JlY29yZDxzdHJpbmcsIHVua25vd24+fVxuICAgKiBAZGVmYXVsdCB7fVxuICAgKiBAbWVtYmVyT2YgQ29tcG9uZW50UmVuZGVyZXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdsb2JhbHM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBJbmplY3RvciB1c2VkIGZvciBkZXBlbmRlbmN5IGluamVjdGlvbiBpbiB0aGUgZHluYW1pYyBjb21wb25lbnQuXG4gICAqIEBzdW1tYXJ5IFRoaXMgaW5qZWN0b3IgaXMgdXNlZCB3aGVuIGNyZWF0aW5nIHRoZSBkeW5hbWljIGNvbXBvbmVudCB0byBwcm92aWRlIGl0IHdpdGhcbiAgICogYWNjZXNzIHRvIHRoZSBhcHBsaWNhdGlvbidzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIHN5c3RlbS4gSXQgZW5zdXJlcyB0aGF0IHRoZSBkeW5hbWljYWxseVxuICAgKiBjcmVhdGVkIGNvbXBvbmVudCBjYW4gYWNjZXNzIHRoZSBzYW1lIHNlcnZpY2VzIGFuZCBkZXBlbmRlbmNpZXMgYXMgc3RhdGljYWxseSBjcmVhdGVkXG4gICAqIGNvbXBvbmVudHMuXG4gICAqXG4gICAqIEB0eXBlIHtFbnZpcm9ubWVudEluamVjdG9yfVxuICAgKiBAbWVtYmVyT2YgQ29tcG9uZW50UmVuZGVyZXJDb21wb25lbnRcbiAgICovXG4gIGluamVjdG9yOiBFbnZpcm9ubWVudEluamVjdG9yID0gaW5qZWN0KEVudmlyb25tZW50SW5qZWN0b3IpO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUmVmZXJlbmNlIHRvIHRoZSBkeW5hbWljYWxseSBjcmVhdGVkIGNvbXBvbmVudC5cbiAgICogQHN1bW1hcnkgVGhpcyBwcm9wZXJ0eSBob2xkcyBhIHJlZmVyZW5jZSB0byB0aGUgQ29tcG9uZW50UmVmIG9mIHRoZSBkeW5hbWljYWxseSBjcmVhdGVkXG4gICAqIGNvbXBvbmVudC4gSXQncyB1c2VkIHRvIGludGVyYWN0IHdpdGggdGhlIGNvbXBvbmVudCBpbnN0YW5jZSwgc3Vic2NyaWJlIHRvIGl0cyBldmVudHMsXG4gICAqIGFuZCBwcm9wZXJseSBkZXN0cm95IGl0IHdoZW4gdGhlIHJlbmRlcmVyIGlzIGRlc3Ryb3llZC5cbiAgICpcbiAgICogQHR5cGUge0NvbXBvbmVudFJlZjx1bmtub3duPn1cbiAgICogQG1lbWJlck9mIENvbXBvbmVudFJlbmRlcmVyQ29tcG9uZW50XG4gICAqL1xuICBjb21wb25lbnQhOiBDb21wb25lbnRSZWY8dW5rbm93bj47XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBFdmVudCBlbWl0dGVyIGZvciBldmVudHMgZnJvbSB0aGUgcmVuZGVyZWQgY29tcG9uZW50LlxuICAgKiBAc3VtbWFyeSBUaGlzIG91dHB1dCBwcm9wZXJ0eSBlbWl0cyBldmVudHMgdGhhdCBvcmlnaW5hdGUgZnJvbSB0aGUgZHluYW1pY2FsbHkgcmVuZGVyZWRcbiAgICogY29tcG9uZW50LiBJdCBhbGxvd3MgdGhlIHBhcmVudCBjb21wb25lbnQgdG8gbGlzdGVuIGZvciBhbmQgcmVzcG9uZCB0byBldmVudHMgZnJvbSB0aGVcbiAgICogZHluYW1pYyBjb21wb25lbnQsIGNyZWF0aW5nIGEgY29tbXVuaWNhdGlvbiBjaGFubmVsIGJldHdlZW4gdGhlIHBhcmVudCBhbmQgdGhlIGR5bmFtaWNhbGx5XG4gICAqIHJlbmRlcmVkIGNoaWxkLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPFJlbmRlcmVyQ3VzdG9tRXZlbnQ+fVxuICAgKiBAbWVtYmVyT2YgQ29tcG9uZW50UmVuZGVyZXJDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBsaXN0ZW5FdmVudDogRXZlbnRFbWl0dGVyPFJlbmRlcmVyQ3VzdG9tRXZlbnQ+ID1cbiAgICBuZXcgRXZlbnRFbWl0dGVyPFJlbmRlcmVyQ3VzdG9tRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBMb2dnZXIgaW5zdGFuY2UgZm9yIHRoZSBjb21wb25lbnQuXG4gICAqIEBzdW1tYXJ5IFRoaXMgcHJvcGVydHkgaG9sZHMgYSBMb2dnZXIgaW5zdGFuY2Ugc3BlY2lmaWMgdG8gdGhpcyBjb21wb25lbnQuXG4gICAqIEl0J3MgdXNlZCB0byBsb2cgaW5mb3JtYXRpb24sIHdhcm5pbmdzLCBhbmQgZXJyb3JzIHJlbGF0ZWQgdG8gdGhlIGNvbXBvbmVudCdzXG4gICAqIG9wZXJhdGlvbnMsIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIGRlYnVnZ2luZyBhbmQgbW9uaXRvcmluZyB0aGUgZHluYW1pY1xuICAgKiBjb21wb25lbnQgcmVuZGVyaW5nIHByb2Nlc3MuXG4gICAqXG4gICAqIEB0eXBlIHtMb2dnZXJ9XG4gICAqIEBtZW1iZXJPZiBDb21wb25lbnRSZW5kZXJlckNvbXBvbmVudFxuICAgKi9cbiAgbG9nZ2VyITogTG9nZ2VyO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUmVwb3NpdG9yeSBtb2RlbCBmb3IgZGF0YSBvcGVyYXRpb25zLlxuICAgKiBAc3VtbWFyeSBUaGUgZGF0YSBtb2RlbCByZXBvc2l0b3J5IHRoYXQgdGhpcyBjb21wb25lbnQgd2lsbCB1c2UgZm9yIENSVUQgb3BlcmF0aW9ucy5cbiAgICogVGhpcyBwcm92aWRlcyBhIGNvbm5lY3Rpb24gdG8gdGhlIGRhdGEgbGF5ZXIgZm9yIHJldHJpZXZpbmcgYW5kIG1hbmlwdWxhdGluZyBkYXRhLlxuICAgKlxuICAgKiBAdHlwZSB7TW9kZWx8IHVuZGVmaW5lZH1cbiAgICovXG4gIEBJbnB1dCgpXG4gIG1vZGVsITogIE1vZGVsIHwgdW5kZWZpbmVkO1xuXG4gIEBJbnB1dCgpXG4gIHBhcmVudDogdW5kZWZpbmVkIHwgS2V5VmFsdWUgPSB1bmRlZmluZWQ7XG5cblxuICBAVmlld0NoaWxkKCdpbm5lcicsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICBpbm5lcj86IFRlbXBsYXRlUmVmPHVua25vd24+O1xuXG4gIHVpZDogc3RyaW5nID0gZ2VuZXJhdGVSYW5kb21WYWx1ZSgxMik7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIENvbXBvbmVudFJlbmRlcmVyQ29tcG9uZW50LlxuICAgKiBAc3VtbWFyeSBJbml0aWFsaXplcyBhIG5ldyBDb21wb25lbnRSZW5kZXJlckNvbXBvbmVudC4gVGhpcyBjb21wb25lbnQgZG9lc24ndCByZXF1aXJlXG4gICAqIGFueSBkZXBlbmRlbmNpZXMgdG8gYmUgaW5qZWN0ZWQgaW4gaXRzIGNvbnN0cnVjdG9yIGFzIGl0IHVzZXMgdGhlIGluamVjdCBmdW5jdGlvbiB0b1xuICAgKiBvYnRhaW4gdGhlIEVudmlyb25tZW50SW5qZWN0b3IuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBDb21wb25lbnRSZW5kZXJlckNvbXBvbmVudFxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5sb2dnZXIgPSBnZXRMb2dnZXIodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEluaXRpYWxpemVzIHRoZSBjb21wb25lbnQgYWZ0ZXIgQW5ndWxhciBmaXJzdCBkaXNwbGF5cyB0aGUgZGF0YS1ib3VuZCBwcm9wZXJ0aWVzLlxuICAgKiBAc3VtbWFyeSBTZXRzIHVwIHRoZSBjb21wb25lbnQgYnkgY3JlYXRpbmcgdGhlIGR5bmFtaWMgY29tcG9uZW50IHNwZWNpZmllZCBieSB0aGUgdGFnIGlucHV0LlxuICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgb25jZSB3aGVuIHRoZSBjb21wb25lbnQgaXMgaW5pdGlhbGl6ZWQgYW5kIHRyaWdnZXJzIHRoZSBkeW5hbWljXG4gICAqIGNvbXBvbmVudCBjcmVhdGlvbiBwcm9jZXNzIHdpdGggdGhlIHByb3ZpZGVkIHRhZyBuYW1lIGFuZCBnbG9iYWwgcHJvcGVydGllcy5cbiAgICpcbiAgICogQG1lcm1haWRcbiAgICogc2VxdWVuY2VEaWFncmFtXG4gICAqICAgcGFydGljaXBhbnQgQSBhcyBBbmd1bGFyIExpZmVjeWNsZVxuICAgKiAgIHBhcnRpY2lwYW50IEMgYXMgQ29tcG9uZW50UmVuZGVyZXJDb21wb25lbnRcbiAgICogICBwYXJ0aWNpcGFudCBSIGFzIE5neFJlbmRlcmluZ0VuZ2luZVxuICAgKlxuICAgKiAgIEEtPj5DOiBuZ09uSW5pdCgpXG4gICAqICAgQy0+PkM6IGNyZWF0ZUNvbXBvbmVudCh0YWcsIGdsb2JhbHMpXG4gICAqICAgQy0+PlI6IGNvbXBvbmVudHModGFnKVxuICAgKiAgIFItLT4+QzogUmV0dXJuIGNvbXBvbmVudCBjb25zdHJ1Y3RvclxuICAgKiAgIEMtPj5DOiBQcm9jZXNzIGNvbXBvbmVudCBpbnB1dHNcbiAgICogICBDLT4+QzogQ3JlYXRlIGNvbXBvbmVudCBpbnN0YW5jZVxuICAgKiAgIEMtPj5DOiBzdWJzY3JpYmVFdmVudHMoKVxuICAgKlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKiBAbWVtYmVyT2YgQ29tcG9uZW50UmVuZGVyZXJDb21wb25lbnRcbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wYXJlbnQpIHtcbiAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KHRoaXMudGFnLCB0aGlzLmdsb2JhbHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNyZWF0ZVBhcmVudENvbXBvbmVudCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ2xlYW5zIHVwIHJlc291cmNlcyB3aGVuIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkLlxuICAgKiBAc3VtbWFyeSBQZXJmb3JtcyBjbGVhbnVwIG9wZXJhdGlvbnMgd2hlbiB0aGUgY29tcG9uZW50IGlzIGJlaW5nIGRlc3Ryb3llZCBieSBBbmd1bGFyLlxuICAgKiBUaGlzIGluY2x1ZGVzIHVuc3Vic2NyaWJpbmcgZnJvbSBhbGwgZXZlbnQgZW1pdHRlcnMgb2YgdGhlIGR5bmFtaWMgY29tcG9uZW50IGFuZFxuICAgKiBkZXN0cm95aW5nIHRoZSByZW5kZXJpbmcgZW5naW5lIGluc3RhbmNlIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLlxuICAgKlxuICAgKiBAbWVybWFpZFxuICAgKiBzZXF1ZW5jZURpYWdyYW1cbiAgICogICBwYXJ0aWNpcGFudCBBIGFzIEFuZ3VsYXIgTGlmZWN5Y2xlXG4gICAqICAgcGFydGljaXBhbnQgQyBhcyBDb21wb25lbnRSZW5kZXJlckNvbXBvbmVudFxuICAgKiAgIHBhcnRpY2lwYW50IFIgYXMgTmd4UmVuZGVyaW5nRW5naW5lXG4gICAqXG4gICAqICAgQS0+PkM6IG5nT25EZXN0cm95KClcbiAgICogICBhbHQgY29tcG9uZW50IGV4aXN0c1xuICAgKiAgICAgQy0+PkM6IHVuc3Vic2NyaWJlRXZlbnRzKClcbiAgICogICAgIEMtPj5SOiBkZXN0cm95KClcbiAgICogICBlbmRcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBjbGVhbnVwIGlzIGNvbXBsZXRlXG4gICAqIEBtZW1iZXJPZiBDb21wb25lbnRSZW5kZXJlckNvbXBvbmVudFxuICAgKi9cbiAgYXN5bmMgbmdPbkRlc3Ryb3koKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMuY29tcG9uZW50KSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlRXZlbnRzKCk7XG4gICAgICBOZ3hSZW5kZXJpbmdFbmdpbmUuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyBhbmQgcmVuZGVycyBhIGR5bmFtaWMgY29tcG9uZW50LlxuICAgKiBAc3VtbWFyeSBUaGlzIG1ldGhvZCBoYW5kbGVzIHRoZSBjcmVhdGlvbiBvZiBhIGR5bmFtaWMgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBwcm92aWRlZCB0YWcuXG4gICAqIEl0IHJldHJpZXZlcyB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIGZyb20gdGhlIHJlbmRlcmluZyBlbmdpbmUsIHByb2Nlc3NlcyBpdHMgaW5wdXRzLFxuICAgKiBmaWx0ZXJzIG91dCB1bm1hcHBlZCBwcm9wZXJ0aWVzLCBjcmVhdGVzIHRoZSBjb21wb25lbnQgaW5zdGFuY2UsIGFuZCBzZXRzIHVwIGV2ZW50IHN1YnNjcmlwdGlvbnMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgLSBUaGUgdGFnIG5hbWUgb2YgdGhlIGNvbXBvbmVudCB0byBjcmVhdGVcbiAgICogQHBhcmFtIHtLZXlWYWx1ZX0gZ2xvYmFscyAtIEdsb2JhbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIGNvbXBvbmVudFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKlxuICAgKiBAbWVybWFpZFxuICAgKiBzZXF1ZW5jZURpYWdyYW1cbiAgICogICBwYXJ0aWNpcGFudCBDIGFzIENvbXBvbmVudFJlbmRlcmVyQ29tcG9uZW50XG4gICAqICAgcGFydGljaXBhbnQgUiBhcyBOZ3hSZW5kZXJpbmdFbmdpbmVcbiAgICogICBwYXJ0aWNpcGFudCBWIGFzIFZpZXdDb250YWluZXJSZWZcbiAgICpcbiAgICogICBDLT4+UjogY29tcG9uZW50cyh0YWcpXG4gICAqICAgUi0tPj5DOiBSZXR1cm4gY29tcG9uZW50IGNvbnN0cnVjdG9yXG4gICAqICAgQy0+PkM6IHJlZmxlY3RDb21wb25lbnRUeXBlKGNvbXBvbmVudClcbiAgICogICBDLT4+QzogUHJvY2VzcyBpbnB1dCBwcm9wZXJ0aWVzXG4gICAqICAgQy0+PkM6IEZpbHRlciB1bm1hcHBlZCBwcm9wZXJ0aWVzXG4gICAqICAgQy0+PlY6IGNsZWFyKClcbiAgICogICBDLT4+UjogY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudCwgcHJvcHMsIG1ldGFkYXRhLCB2Y3IsIGluamVjdG9yLCBbXSlcbiAgICogICBSLS0+PkM6IFJldHVybiBjb21wb25lbnQgcmVmZXJlbmNlXG4gICAqICAgQy0+PkM6IHN1YnNjcmliZUV2ZW50cygpXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJPZiBDb21wb25lbnRSZW5kZXJlckNvbXBvbmVudFxuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGVDb21wb25lbnQodGFnOiBzdHJpbmcsIGdsb2JhbHM6IEtleVZhbHVlID0ge30pOiB2b2lkIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBOZ3hSZW5kZXJpbmdFbmdpbmUuY29tcG9uZW50cyh0YWcpXG4gICAgICA/LmNvbnN0cnVjdG9yIGFzIFR5cGU8dW5rbm93bj47XG4gICAgY29uc3QgbWV0YWRhdGEgPSByZWZsZWN0Q29tcG9uZW50VHlwZShjb21wb25lbnQpO1xuICAgIGNvbnN0IGNvbXBvbmVudElucHV0cyA9IChtZXRhZGF0YSBhcyBDb21wb25lbnRNaXJyb3I8dW5rbm93bj4pLmlucHV0cztcbiAgICBjb25zdCBwcm9wcyA9IGdsb2JhbHM/LlsnaXRlbSddIHx8IGdsb2JhbHM/LlsncHJvcHMnXSB8fCB7fTtcbiAgICBpZihwcm9wcz8uWyd0YWcnXSlcbiAgICAgIGRlbGV0ZSBwcm9wc1sndGFnJ107XG4gICAgY29uc3QgaW5wdXRLZXlzID0gT2JqZWN0LmtleXMocHJvcHMpO1xuICAgIGNvbnN0IHVubWFwcGVkS2V5czogc3RyaW5nW10gPSBbXTtcblxuICAgIGZvciAoY29uc3QgaW5wdXQgb2YgaW5wdXRLZXlzKSB7XG4gICAgICBpZiAoIWlucHV0S2V5cy5sZW5ndGgpIGJyZWFrO1xuICAgICAgY29uc3QgcHJvcCA9IGNvbXBvbmVudElucHV0cy5maW5kKFxuICAgICAgICAoaXRlbTogeyBwcm9wTmFtZTogc3RyaW5nIH0pID0+IGl0ZW0ucHJvcE5hbWUgPT09IGlucHV0LFxuICAgICAgKTtcbiAgICAgIGlmICghcHJvcCkge1xuICAgICAgICBkZWxldGUgcHJvcHNbaW5wdXRdO1xuICAgICAgICB1bm1hcHBlZEtleXMucHVzaChpbnB1dCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudmNyLmNsZWFyKCk7XG4gICAgdGhpcy5jb21wb25lbnQgPSBOZ3hSZW5kZXJpbmdFbmdpbmUuY3JlYXRlQ29tcG9uZW50KFxuICAgICAgY29tcG9uZW50LFxuICAgICAgcHJvcHMsXG4gICAgICBtZXRhZGF0YSBhcyBDb21wb25lbnRNaXJyb3I8dW5rbm93bj4sXG4gICAgICB0aGlzLnZjcixcbiAgICAgIHRoaXMuaW5qZWN0b3IgYXMgSW5qZWN0b3IsXG4gICAgICBbXSxcbiAgICApO1xuICAgIHRoaXMuc3Vic2NyaWJlRXZlbnRzKCk7XG4gIH1cblxuICBjcmVhdGVQYXJlbnRDb21wb25lbnQoKSB7XG4gICAgY29uc3QgeyBjb21wb25lbnQsIGlucHV0cyB9ID0gdGhpcy5wYXJlbnQgYXMgS2V5VmFsdWU7XG4gICAgY29uc3QgbWV0YWRhdGEgPSByZWZsZWN0Q29tcG9uZW50VHlwZShjb21wb25lbnQpIGFzIENvbXBvbmVudE1pcnJvcjx1bmtub3duPjtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMudmNyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLmlubmVyIGFzIFRlbXBsYXRlUmVmPHVua25vd24+LCB0aGlzLmluamVjdG9yKS5yb290Tm9kZXM7XG4gICAgdGhpcy5jb21wb25lbnQgPSBOZ3hSZW5kZXJpbmdFbmdpbmUuY3JlYXRlQ29tcG9uZW50KFxuICAgICAgY29tcG9uZW50LFxuICAgICAgaW5wdXRzLFxuICAgICAgbWV0YWRhdGEsXG4gICAgICB0aGlzLnZjcixcbiAgICAgIHRoaXMuaW5qZWN0b3IsXG4gICAgICB0ZW1wbGF0ZSxcbiAgICApO1xuICAgIHRoaXMuc3Vic2NyaWJlRXZlbnRzKCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFN1YnNjcmliZXMgdG8gZXZlbnRzIGVtaXR0ZWQgYnkgdGhlIGR5bmFtaWMgY29tcG9uZW50LlxuICAgKiBAc3VtbWFyeSBUaGlzIG1ldGhvZCBzZXRzIHVwIHN1YnNjcmlwdGlvbnMgdG8gYWxsIEV2ZW50RW1pdHRlciBwcm9wZXJ0aWVzIG9mIHRoZVxuICAgKiBkeW5hbWljYWxseSBjcmVhdGVkIGNvbXBvbmVudC4gV2hlbiBhbiBldmVudCBpcyBlbWl0dGVkIGJ5IHRoZSBkeW5hbWljIGNvbXBvbmVudCxcbiAgICogaXQgaXMgY2FwdHVyZWQgYW5kIHJlLWVtaXR0ZWQgdGhyb3VnaCB0aGUgbGlzdGVuRXZlbnQgb3V0cHV0IHByb3BlcnR5IHdpdGggYWRkaXRpb25hbFxuICAgKiBtZXRhZGF0YSBhYm91dCB0aGUgZXZlbnQgc291cmNlLlxuICAgKlxuICAgKiBAbWVybWFpZFxuICAgKiBzZXF1ZW5jZURpYWdyYW1cbiAgICogICBwYXJ0aWNpcGFudCBDIGFzIENvbXBvbmVudFJlbmRlcmVyQ29tcG9uZW50XG4gICAqICAgcGFydGljaXBhbnQgRCBhcyBEeW5hbWljIENvbXBvbmVudFxuICAgKiAgIHBhcnRpY2lwYW50IFAgYXMgUGFyZW50IENvbXBvbmVudFxuICAgKlxuICAgKiAgIEMtPj5DOiBzdWJzY3JpYmVFdmVudHMoKVxuICAgKiAgIEMtPj5EOiBHZXQgaW5zdGFuY2UgcHJvcGVydGllc1xuICAgKiAgIGxvb3AgRm9yIGVhY2ggcHJvcGVydHlcbiAgICogICAgIEMtPj5DOiBDaGVjayBpZiBwcm9wZXJ0eSBpcyBFdmVudEVtaXR0ZXJcbiAgICogICAgIGFsdCBpcyBFdmVudEVtaXR0ZXJcbiAgICogICAgICAgQy0+PkQ6IFN1YnNjcmliZSB0byBldmVudFxuICAgKiAgICAgICBELS0+PkM6IEV2ZW50IGVtaXR0ZWRcbiAgICogICAgICAgQy0+PlA6IFJlLWVtaXQgZXZlbnQgd2l0aCBtZXRhZGF0YVxuICAgKiAgICAgZW5kXG4gICAqICAgZW5kXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqIEBtZW1iZXJPZiBDb21wb25lbnRSZW5kZXJlckNvbXBvbmVudFxuICAgKi9cbiAgcHJpdmF0ZSBzdWJzY3JpYmVFdmVudHMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29tcG9uZW50KSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY29tcG9uZW50Py5pbnN0YW5jZSBhcyBLZXlWYWx1ZTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudEtleXMgPSBPYmplY3Qua2V5cyhpbnN0YW5jZSk7XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBjb21wb25lbnRLZXlzKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaW5zdGFuY2Vba2V5XTtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKVxuICAgICAgICAgIChpbnN0YW5jZSBhcyBLZXlWYWx1ZSlba2V5XS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAoZXZlbnQ6IFBhcnRpYWw8QmFzZUN1c3RvbUV2ZW50PikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmxpc3RlbkV2ZW50LmVtaXQoe1xuICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICAuLi5ldmVudCxcbiAgICAgICAgICAgICAgfSBhcyBSZW5kZXJlckN1c3RvbUV2ZW50KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFVuc3Vic2NyaWJlcyBmcm9tIGFsbCBldmVudHMgb2YgdGhlIGR5bmFtaWMgY29tcG9uZW50LlxuICAgKiBAc3VtbWFyeSBUaGlzIG1ldGhvZCBjbGVhbnMgdXAgZXZlbnQgc3Vic2NyaXB0aW9ucyB3aGVuIHRoZSBjb21wb25lbnQgaXMgYmVpbmcgZGVzdHJveWVkLlxuICAgKiBJdCBpdGVyYXRlcyB0aHJvdWdoIGFsbCBwcm9wZXJ0aWVzIG9mIHRoZSBkeW5hbWljIGNvbXBvbmVudCBpbnN0YW5jZSBhbmQgdW5zdWJzY3JpYmVzXG4gICAqIGZyb20gYW55IEV2ZW50RW1pdHRlciBwcm9wZXJ0aWVzIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzIGFuZCB1bmV4cGVjdGVkIGJlaGF2aW9yIGFmdGVyXG4gICAqIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkLlxuICAgKlxuICAgKiBAbWVybWFpZFxuICAgKiBzZXF1ZW5jZURpYWdyYW1cbiAgICogICBwYXJ0aWNpcGFudCBDIGFzIENvbXBvbmVudFJlbmRlcmVyQ29tcG9uZW50XG4gICAqICAgcGFydGljaXBhbnQgRCBhcyBEeW5hbWljIENvbXBvbmVudFxuICAgKlxuICAgKiAgIEMtPj5DOiB1bnN1YnNjcmliZUV2ZW50cygpXG4gICAqICAgQy0+PkQ6IEdldCBpbnN0YW5jZSBwcm9wZXJ0aWVzXG4gICAqICAgbG9vcCBGb3IgZWFjaCBwcm9wZXJ0eVxuICAgKiAgICAgQy0+PkM6IENoZWNrIGlmIHByb3BlcnR5IGlzIEV2ZW50RW1pdHRlclxuICAgKiAgICAgYWx0IGlzIEV2ZW50RW1pdHRlclxuICAgKiAgICAgICBDLT4+RDogVW5zdWJzY3JpYmUgZnJvbSBldmVudFxuICAgKiAgICAgZW5kXG4gICAqICAgZW5kXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqIEBtZW1iZXJPZiBDb21wb25lbnRSZW5kZXJlckNvbXBvbmVudFxuICAgKi9cbiAgcHJpdmF0ZSB1bnN1YnNjcmliZUV2ZW50cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb21wb25lbnQpIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jb21wb25lbnQ/Lmluc3RhbmNlIGFzIEtleVZhbHVlO1xuICAgICAgY29uc3QgY29tcG9uZW50S2V5cyA9IE9iamVjdC5rZXlzKGluc3RhbmNlKTtcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIGNvbXBvbmVudEtleXMpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpbnN0YW5jZVtrZXldO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXIpIGluc3RhbmNlW2tleV0udW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjwhLS0gS2VlcCB0byBhdm9pZCBpZCBjb25mbGljdHMgLS0+XG48ZGl2IFtpZF09XCJ1aWRcIj48L2Rpdj5cblxuPG5nLXRlbXBsYXRlICNjb21wb25lbnRWaWV3Q29udGFpbmVyPjwvbmctdGVtcGxhdGU+XG48bmctdGVtcGxhdGUgI2lubmVyPlxuICBAaWYocGFyZW50Py5jaGlsZHJlbj8ubGVuZ3RoKSB7XG4gICAgQGZvcihjaGlsZCBvZiBwYXJlbnQuY2hpbGRyZW47IHRyYWNrIGNoaWxkKSB7XG4gICAgICAgIEBpZighY2hpbGQuY2hpbGRyZW4/Lmxlbmd0aCkge1xuICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAqbmdDb21wb25lbnRPdXRsZXQ9XCJcbiAgICAgICAgICAgICAgICAgIGNoaWxkLmNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgIGluamVjdG9yOiBjaGlsZC5pbmplY3RvcjtcbiAgICAgICAgICAgICAgICAgIGlucHV0czogY2hpbGQuaW5wdXRzO1xuICAgICAgICAgICAgICAgICAgY29udGVudDpjaGlsZC5jb250ZW50O1xuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgPG5neC1kZWNhZi1jb21wb25lbnQtcmVuZGVyZXIgW3BhcmVudF09XCJjaGlsZFwiPiA8L25neC1kZWNhZi1jb21wb25lbnQtcmVuZGVyZXI+XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbjwvbmctdGVtcGxhdGU+XG5cblxuXG4iXX0=