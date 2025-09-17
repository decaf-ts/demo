import { Component, EventEmitter, inject, Injector, Input, Output, TemplateRef, ViewChild, ViewContainerRef, } from '@angular/core';
import { Model, sf } from '@decaf-ts/decorator-validation';
import { NgComponentOutlet } from '@angular/common';
import { AngularEngineKeys, BaseComponentProps, NgxRenderingEngine, } from '../../engine';
import { ForAngularModule } from '../../for-angular.module';
import { ComponentRendererComponent } from '../component-renderer/component-renderer.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["inner"];
const _c1 = ["componentOuter"];
function ModelRendererComponent_ng_template_1_Template(rf, ctx) { }
function ModelRendererComponent_ng_template_3_For_2_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-decaf-component-renderer", 4);
} if (rf & 2) {
    const child_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("parent", child_r1);
} }
function ModelRendererComponent_ng_template_3_For_2_Conditional_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, null, 2);
} }
function ModelRendererComponent_ng_template_3_For_2_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ModelRendererComponent_ng_template_3_For_2_Conditional_1_ng_container_0_Template, 2, 0, "ng-container", 5);
} if (rf & 2) {
    const child_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngComponentOutlet", child_r1.component)("ngComponentOutletInjector", child_r1.injector)("ngComponentOutletInputs", child_r1.inputs)("ngComponentOutletContent", child_r1.content);
} }
function ModelRendererComponent_ng_template_3_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ModelRendererComponent_ng_template_3_For_2_Conditional_0_Template, 1, 1, "ngx-decaf-component-renderer", 4)(1, ModelRendererComponent_ng_template_3_For_2_Conditional_1_Template, 1, 4, "ng-container");
} if (rf & 2) {
    const child_r1 = ctx.$implicit;
    i0.ɵɵconditional((child_r1 == null ? null : child_r1.children == null ? null : child_r1.children.length) ? 0 : 1);
} }
function ModelRendererComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵrepeaterCreate(1, ModelRendererComponent_ng_template_3_For_2_Template, 2, 1, null, null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", ctx_r1.rendererId || null);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.output == null ? null : ctx_r1.output.children);
} }
/**
 * @description Component for rendering dynamic models
 * @summary This component is responsible for dynamically rendering models,
 * handling model changes, and managing event subscriptions for the rendered components.
 * It uses the NgxRenderingEngine to render the models and supports both string and Model inputs.
 * @class
 * @template M - Type extending Model
 * @param {Injector} injector - Angular Injector for dependency injection
 * @example
 * <ngx-decaf-model-renderer
 *   [model]="myModel"
 *   [globals]="globalVariables"
 *   (listenEvent)="handleEvent($event)">
 * </ngx-decaf-model-renderer>
 * @mermaid
 * sequenceDiagram
 *   participant App
 *   participant ModelRenderer
 *   participant RenderingEngine
 *   participant Model
 *   App->>ModelRenderer: Input model
 *   ModelRenderer->>Model: Parse if string
 *   Model-->>ModelRenderer: Parsed model
 *   ModelRenderer->>RenderingEngine: Render model
 *   RenderingEngine-->>ModelRenderer: Rendered output
 *   ModelRenderer->>ModelRenderer: Subscribe to events
 *   ModelRenderer-->>App: Emit events
 */
export class ModelRendererComponent {
    constructor() {
        /**
         * @description Global variables to be passed to the rendered component
         */
        this.globals = {};
        /**
         * @description Event emitter for custom events from the rendered component
         */
        this.listenEvent = new EventEmitter();
        this.injector = inject(Injector);
        this.JSON = JSON;
    }
    // constructor() {}
    /**
     * @description Refreshes the rendered model
     * @param {string | M} model - The model to be rendered
     */
    refresh(model) {
        model =
            typeof model === 'string'
                ? Model.build({}, model)
                : model;
        this.output = model.render(this.globals || {}, this.vcr, this.injector, this.inner);
        if (this.output?.inputs)
            this.rendererId = sf(AngularEngineKeys.RENDERED_ID, this.output.inputs['rendererId']);
        this.instance = this.output?.instance;
        this.subscribeEvents();
    }
    /**
     * @description Lifecycle hook that is called when data-bound properties of a directive change
     * @param {SimpleChanges} changes - Object containing changes
     */
    ngOnChanges(changes) {
        if (changes[BaseComponentProps.MODEL]) {
            const { currentValue } = changes[BaseComponentProps.MODEL];
            this.refresh(currentValue);
        }
    }
    /**
     * @description Lifecycle hook that is called when a directive, pipe, or service is destroyed
     * @return {Promise<void>}
     */
    async ngOnDestroy() {
        if (this.instance) {
            this.unsubscribeEvents();
            await NgxRenderingEngine.destroy();
        }
        this.output = undefined;
    }
    subscribeEvents() {
        const component = this?.output?.component;
        if (this.instance && component) {
            const componentKeys = Object.keys(this.instance);
            for (const key of componentKeys) {
                const value = this.instance[key];
                if (value instanceof EventEmitter)
                    this.instance[key].subscribe((event) => {
                        this.listenEvent.emit({
                            component: component.name || '',
                            name: key,
                            ...event,
                        });
                    });
            }
        }
    }
    /**
     * @description Unsubscribes from events emitted by the rendered component
     */
    unsubscribeEvents() {
        if (this.instance) {
            const componentKeys = Object.keys(this.instance);
            for (const key of componentKeys) {
                const value = this.instance[key];
                if (value instanceof EventEmitter)
                    this.instance[key].unsubscribe();
            }
        }
    }
    static { this.ɵfac = function ModelRendererComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ModelRendererComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModelRendererComponent, selectors: [["ngx-decaf-model-renderer"]], viewQuery: function ModelRendererComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7, TemplateRef);
            i0.ɵɵviewQuery(_c1, 7, ViewContainerRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inner = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.vcr = _t.first);
        } }, hostVars: 1, hostBindings: function ModelRendererComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("id", ctx.rendererId);
        } }, inputs: { model: "model", globals: "globals", rendererId: "rendererId" }, outputs: { listenEvent: "listenEvent" }, standalone: true, features: [i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 5, vars: 1, consts: [["componentOuter", ""], ["inner", ""], ["childComponents", ""], [3, "id"], [3, "parent"], [4, "ngComponentOutlet", "ngComponentOutletInjector", "ngComponentOutletInputs", "ngComponentOutletContent"]], template: function ModelRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 3);
            i0.ɵɵtemplate(1, ModelRendererComponent_ng_template_1_Template, 0, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(3, ModelRendererComponent_ng_template_3_Template, 3, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("id", ctx.rendererId);
        } }, dependencies: [ForAngularModule, i1.NgComponentOutlet, ComponentRendererComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModelRendererComponent, [{
        type: Component,
        args: [{ standalone: true, imports: [ForAngularModule, NgComponentOutlet, ComponentRendererComponent], selector: 'ngx-decaf-model-renderer', host: { '[attr.id]': 'rendererId' }, template: "  <!-- Keep to avoid id conflicts -->\n  <div [id]=\"rendererId\"></div>\n\n  <ng-template #componentOuter></ng-template>\n  <ng-template #inner>\n    <div  [id]=\"rendererId || null\">\n      @for (child of output?.children; track child) {\n        @if(child?.children?.length) {\n          <ngx-decaf-component-renderer [parent]=\"child\" />\n        } @else {\n          <ng-container\n            #childComponents\n            *ngComponentOutlet=\"\n              child.component;\n              injector: child.injector;\n              inputs: child.inputs;\n              content:child.content;\n            \"\n          />\n        }\n      }\n    </div>\n  </ng-template>\n" }]
    }], null, { model: [{
            type: Input,
            args: [{ required: true }]
        }], globals: [{
            type: Input
        }], inner: [{
            type: ViewChild,
            args: ['inner', { read: TemplateRef, static: true }]
        }], rendererId: [{
            type: Input
        }], vcr: [{
            type: ViewChild,
            args: ['componentOuter', { static: true, read: ViewContainerRef }]
        }], listenEvent: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ModelRendererComponent, { className: "ModelRendererComponent", filePath: "components/model-renderer/model-renderer.component.ts", lineNumber: 66 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwtcmVuZGVyZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL21vZGVsLXJlbmRlcmVyL21vZGVsLXJlbmRlcmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9tb2RlbC1yZW5kZXJlci9tb2RlbC1yZW5kZXJlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFHTCxNQUFNLEVBRU4sV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBRUwsaUJBQWlCLEVBQ2pCLGtCQUFrQixFQUVsQixrQkFBa0IsR0FFbkIsTUFBTSxjQUFjLENBQUM7QUFFdEIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFNUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7Ozs7Ozs7SUNuQnRGLGtEQUFpRDs7O0lBQW5CLGlDQUFnQjs7O0lBRTlDLGlDQVFFOzs7SUFSRiwySEFRRTs7O0lBRmlCLEFBREEsQUFEQSxBQUZoQixzREFFZ0IsZ0RBQ0EsNENBQ0EsOENBRTdCOzs7SUFUVSxBQUZGLDRIQUE4Qiw0RkFFckI7OztJQUZULGlIQVlDOzs7SUFkTCw4QkFBZ0M7SUFDOUIsMkhBY0M7SUFDSCxpQkFBTTs7O0lBaEJBLDhDQUF5QjtJQUM3QixjQWNDO0lBZEQsb0VBY0M7O0FEU1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJCRztBQVNILE1BQU0sT0FBTyxzQkFBc0I7SUFSbkM7UUFrQkU7O1dBRUc7UUFFSCxZQUFPLEdBQTRCLEVBQUUsQ0FBQztRQXlCdEM7O1dBRUc7UUFFSCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUF1QixDQUFDO1FBTzlDLGFBQVEsR0FBYSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFtRjNCLFNBQUksR0FBRyxJQUFJLENBQUM7S0FDaEM7SUFsRkMsbUJBQW1CO0lBRW5COzs7T0FHRztJQUNLLE9BQU8sQ0FBQyxLQUFpQjtRQUMvQixLQUFLO1lBQ0gsT0FBTyxLQUFLLEtBQUssUUFBUTtnQkFDdkIsQ0FBQyxDQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBTztnQkFDL0IsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNaLElBQUksQ0FBQyxNQUFNLEdBQUksS0FBK0IsQ0FBQyxNQUFNLENBQ25ELElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxFQUNsQixJQUFJLENBQUMsR0FBRyxFQUNSLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDLEtBQUssQ0FDWCxDQUFDO1FBQ0YsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU07WUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQ2xCLGlCQUFpQixDQUFDLFdBQVcsRUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFrQyxDQUFDLFlBQVksQ0FBVyxDQUN4RSxDQUFDO1FBQ0osSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztRQUN0QyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7T0FHRztJQUNILFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3RDLE1BQU0sRUFBRSxZQUFZLEVBQUUsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM3QixDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxXQUFXO1FBQ2YsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDekIsTUFBTSxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVPLGVBQWU7UUFDckIsTUFBTSxTQUFTLEdBQUcsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUM7UUFDMUMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLFNBQVMsRUFBRSxDQUFDO1lBQy9CLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pELEtBQUssTUFBTSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7Z0JBQ2hDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksS0FBSyxZQUFZLFlBQVk7b0JBQzlCLElBQUksQ0FBQyxRQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQStCLEVBQUUsRUFBRTt3QkFDN0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7NEJBQ3BCLFNBQVMsRUFBRSxTQUFTLENBQUMsSUFBSSxJQUFJLEVBQUU7NEJBQy9CLElBQUksRUFBRSxHQUFHOzRCQUNULEdBQUcsS0FBSzt5QkFDYyxDQUFDLENBQUM7b0JBQzVCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSyxpQkFBaUI7UUFDdkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakQsS0FBSyxNQUFNLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztnQkFDaEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakMsSUFBSSxLQUFLLFlBQVksWUFBWTtvQkFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNyQyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7dUhBbklVLHNCQUFzQjtvRUFBdEIsc0JBQXNCO21DQW1CTCxXQUFXO21DQWlCWSxnQkFBZ0I7Ozs7Ozs7O1lDcEduRSx5QkFBNkI7WUFHN0IsQUFEQSx3SEFBNkIsMkdBQ1Q7O1lBSGYsbUNBQWlCOzRCRDBEWixnQkFBZ0Isd0JBQXFCLDBCQUEwQjs7aUZBTTlELHNCQUFzQjtjQVJsQyxTQUFTOzZCQUNJLElBQUksV0FDUCxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLDBCQUEwQixDQUFDLFlBQ2hFLDBCQUEwQixRQUc5QixFQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUM7Z0JBVWpDLEtBQUs7a0JBREosS0FBSzttQkFBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7WUFPekIsT0FBTztrQkFETixLQUFLO1lBT04sS0FBSztrQkFESixTQUFTO21CQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQVl2RCxVQUFVO2tCQURULEtBQUs7WUFPTixHQUFHO2tCQURGLFNBQVM7bUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtZQU9yRSxXQUFXO2tCQURWLE1BQU07O2tGQTFDSSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgaW5qZWN0LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kZWwsIHNmIH0gZnJvbSAnQGRlY2FmLXRzL2RlY29yYXRvci12YWxpZGF0aW9uJztcbmltcG9ydCB7IE5nQ29tcG9uZW50T3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFuZ3VsYXJEeW5hbWljT3V0cHV0LFxuICBBbmd1bGFyRW5naW5lS2V5cyxcbiAgQmFzZUNvbXBvbmVudFByb3BzLFxuICBCYXNlQ3VzdG9tRXZlbnQsXG4gIE5neFJlbmRlcmluZ0VuZ2luZSxcbiAgUmVuZGVyZWRNb2RlbCxcbn0gZnJvbSAnLi4vLi4vZW5naW5lJztcbmltcG9ydCB7IEtleVZhbHVlLCBSZW5kZXJlckN1c3RvbUV2ZW50IH0gZnJvbSAnLi4vLi4vZW5naW5lL3R5cGVzJztcbmltcG9ydCB7IEZvckFuZ3VsYXJNb2R1bGUgfSBmcm9tICcuLi8uLi9mb3ItYW5ndWxhci5tb2R1bGUnO1xuaW1wb3J0IHsgUmVuZGVyYWJsZSB9IGZyb20gJ0BkZWNhZi10cy91aS1kZWNvcmF0b3JzJztcbmltcG9ydCB7IENvbXBvbmVudFJlbmRlcmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50LXJlbmRlcmVyL2NvbXBvbmVudC1yZW5kZXJlci5jb21wb25lbnQnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBDb21wb25lbnQgZm9yIHJlbmRlcmluZyBkeW5hbWljIG1vZGVsc1xuICogQHN1bW1hcnkgVGhpcyBjb21wb25lbnQgaXMgcmVzcG9uc2libGUgZm9yIGR5bmFtaWNhbGx5IHJlbmRlcmluZyBtb2RlbHMsXG4gKiBoYW5kbGluZyBtb2RlbCBjaGFuZ2VzLCBhbmQgbWFuYWdpbmcgZXZlbnQgc3Vic2NyaXB0aW9ucyBmb3IgdGhlIHJlbmRlcmVkIGNvbXBvbmVudHMuXG4gKiBJdCB1c2VzIHRoZSBOZ3hSZW5kZXJpbmdFbmdpbmUgdG8gcmVuZGVyIHRoZSBtb2RlbHMgYW5kIHN1cHBvcnRzIGJvdGggc3RyaW5nIGFuZCBNb2RlbCBpbnB1dHMuXG4gKiBAY2xhc3NcbiAqIEB0ZW1wbGF0ZSBNIC0gVHlwZSBleHRlbmRpbmcgTW9kZWxcbiAqIEBwYXJhbSB7SW5qZWN0b3J9IGluamVjdG9yIC0gQW5ndWxhciBJbmplY3RvciBmb3IgZGVwZW5kZW5jeSBpbmplY3Rpb25cbiAqIEBleGFtcGxlXG4gKiA8bmd4LWRlY2FmLW1vZGVsLXJlbmRlcmVyXG4gKiAgIFttb2RlbF09XCJteU1vZGVsXCJcbiAqICAgW2dsb2JhbHNdPVwiZ2xvYmFsVmFyaWFibGVzXCJcbiAqICAgKGxpc3RlbkV2ZW50KT1cImhhbmRsZUV2ZW50KCRldmVudClcIj5cbiAqIDwvbmd4LWRlY2FmLW1vZGVsLXJlbmRlcmVyPlxuICogQG1lcm1haWRcbiAqIHNlcXVlbmNlRGlhZ3JhbVxuICogICBwYXJ0aWNpcGFudCBBcHBcbiAqICAgcGFydGljaXBhbnQgTW9kZWxSZW5kZXJlclxuICogICBwYXJ0aWNpcGFudCBSZW5kZXJpbmdFbmdpbmVcbiAqICAgcGFydGljaXBhbnQgTW9kZWxcbiAqICAgQXBwLT4+TW9kZWxSZW5kZXJlcjogSW5wdXQgbW9kZWxcbiAqICAgTW9kZWxSZW5kZXJlci0+Pk1vZGVsOiBQYXJzZSBpZiBzdHJpbmdcbiAqICAgTW9kZWwtLT4+TW9kZWxSZW5kZXJlcjogUGFyc2VkIG1vZGVsXG4gKiAgIE1vZGVsUmVuZGVyZXItPj5SZW5kZXJpbmdFbmdpbmU6IFJlbmRlciBtb2RlbFxuICogICBSZW5kZXJpbmdFbmdpbmUtLT4+TW9kZWxSZW5kZXJlcjogUmVuZGVyZWQgb3V0cHV0XG4gKiAgIE1vZGVsUmVuZGVyZXItPj5Nb2RlbFJlbmRlcmVyOiBTdWJzY3JpYmUgdG8gZXZlbnRzXG4gKiAgIE1vZGVsUmVuZGVyZXItLT4+QXBwOiBFbWl0IGV2ZW50c1xuICovXG5AQ29tcG9uZW50KHtcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0ZvckFuZ3VsYXJNb2R1bGUsIE5nQ29tcG9uZW50T3V0bGV0LCBDb21wb25lbnRSZW5kZXJlckNvbXBvbmVudF0sXG4gIHNlbGVjdG9yOiAnbmd4LWRlY2FmLW1vZGVsLXJlbmRlcmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21vZGVsLXJlbmRlcmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL21vZGVsLXJlbmRlcmVyLmNvbXBvbmVudC5zY3NzJyxcbiAgaG9zdDogeydbYXR0ci5pZF0nOiAncmVuZGVyZXJJZCd9LFxufSlcbmV4cG9ydCBjbGFzcyBNb2RlbFJlbmRlcmVyQ29tcG9uZW50PE0gZXh0ZW5kcyBNb2RlbD5cbiAgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgUmVuZGVyZWRNb2RlbCB7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBJbnB1dCBtb2RlbCB0byBiZSByZW5kZXJlZFxuICAgKiBAc3VtbWFyeSBDYW4gYmUgYSBNb2RlbCBpbnN0YW5jZSBvciBhIEpTT04gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgbW9kZWxcbiAgICovXG4gIEBJbnB1dCh7IHJlcXVpcmVkOiB0cnVlIH0pXG4gIG1vZGVsITogTSB8IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEdsb2JhbCB2YXJpYWJsZXMgdG8gYmUgcGFzc2VkIHRvIHRoZSByZW5kZXJlZCBjb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdsb2JhbHM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBUZW1wbGF0ZSByZWZlcmVuY2UgZm9yIGlubmVyIGNvbnRlbnRcbiAgICovXG4gIEBWaWV3Q2hpbGQoJ2lubmVyJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gIGlubmVyPzogVGVtcGxhdGVSZWY8dW5rbm93bj47XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBPdXRwdXQgb2YgdGhlIHJlbmRlcmVkIG1vZGVsXG4gICAqL1xuICBvdXRwdXQ/OiBBbmd1bGFyRHluYW1pY091dHB1dDtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgcmVuZGVyZXJcbiAgICovXG4gIEBJbnB1dCgpXG4gIHJlbmRlcmVySWQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBWaWV3IGNvbnRhaW5lciByZWZlcmVuY2UgZm9yIGR5bmFtaWMgY29tcG9uZW50IHJlbmRlcmluZ1xuICAgKi9cbiAgQFZpZXdDaGlsZCgnY29tcG9uZW50T3V0ZXInLCB7IHN0YXRpYzogdHJ1ZSwgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxuICB2Y3IhOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gRXZlbnQgZW1pdHRlciBmb3IgY3VzdG9tIGV2ZW50cyBmcm9tIHRoZSByZW5kZXJlZCBjb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBsaXN0ZW5FdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8UmVuZGVyZXJDdXN0b21FdmVudD4oKTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEluc3RhbmNlIG9mIHRoZSByZW5kZXJlZCBjb21wb25lbnRcbiAgICovXG4gIHByaXZhdGUgaW5zdGFuY2UhOiBLZXlWYWx1ZSB8IHVuZGVmaW5lZDtcblxuICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvciA9IGluamVjdChJbmplY3Rvcik7XG5cbiAgLy8gY29uc3RydWN0b3IoKSB7fVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUmVmcmVzaGVzIHRoZSByZW5kZXJlZCBtb2RlbFxuICAgKiBAcGFyYW0ge3N0cmluZyB8IE19IG1vZGVsIC0gVGhlIG1vZGVsIHRvIGJlIHJlbmRlcmVkXG4gICAqL1xuICBwcml2YXRlIHJlZnJlc2gobW9kZWw6IHN0cmluZyB8IE0pIHtcbiAgICBtb2RlbCA9XG4gICAgICB0eXBlb2YgbW9kZWwgPT09ICdzdHJpbmcnXG4gICAgICAgID8gKE1vZGVsLmJ1aWxkKHt9LCBtb2RlbCkgYXMgTSlcbiAgICAgICAgOiBtb2RlbDtcbiAgICB0aGlzLm91dHB1dCA9IChtb2RlbCBhcyB1bmtub3duIGFzIFJlbmRlcmFibGUpLnJlbmRlcjxBbmd1bGFyRHluYW1pY091dHB1dD4oXG4gICAgICB0aGlzLmdsb2JhbHMgfHwge30sXG4gICAgICB0aGlzLnZjcixcbiAgICAgIHRoaXMuaW5qZWN0b3IsXG4gICAgICB0aGlzLmlubmVyLFxuICAgICk7XG4gICAgaWYgKHRoaXMub3V0cHV0Py5pbnB1dHMpXG4gICAgICB0aGlzLnJlbmRlcmVySWQgPSBzZihcbiAgICAgICAgQW5ndWxhckVuZ2luZUtleXMuUkVOREVSRURfSUQsXG4gICAgICAgICh0aGlzLm91dHB1dC5pbnB1dHMgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pWydyZW5kZXJlcklkJ10gYXMgc3RyaW5nLFxuICAgICAgKTtcbiAgICB0aGlzLmluc3RhbmNlID0gdGhpcy5vdXRwdXQ/Lmluc3RhbmNlO1xuICAgIHRoaXMuc3Vic2NyaWJlRXZlbnRzKCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIExpZmVjeWNsZSBob29rIHRoYXQgaXMgY2FsbGVkIHdoZW4gZGF0YS1ib3VuZCBwcm9wZXJ0aWVzIG9mIGEgZGlyZWN0aXZlIGNoYW5nZVxuICAgKiBAcGFyYW0ge1NpbXBsZUNoYW5nZXN9IGNoYW5nZXMgLSBPYmplY3QgY29udGFpbmluZyBjaGFuZ2VzXG4gICAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXNbQmFzZUNvbXBvbmVudFByb3BzLk1PREVMXSkge1xuICAgICAgY29uc3QgeyBjdXJyZW50VmFsdWUgfSA9IGNoYW5nZXNbQmFzZUNvbXBvbmVudFByb3BzLk1PREVMXTtcbiAgICAgIHRoaXMucmVmcmVzaChjdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gTGlmZWN5Y2xlIGhvb2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBhIGRpcmVjdGl2ZSwgcGlwZSwgb3Igc2VydmljZSBpcyBkZXN0cm95ZWRcbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIGFzeW5jIG5nT25EZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlRXZlbnRzKCk7XG4gICAgICBhd2FpdCBOZ3hSZW5kZXJpbmdFbmdpbmUuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLm91dHB1dCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlRXZlbnRzKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXM/Lm91dHB1dD8uY29tcG9uZW50O1xuICAgIGlmICh0aGlzLmluc3RhbmNlICYmIGNvbXBvbmVudCkge1xuICAgICAgY29uc3QgY29tcG9uZW50S2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuaW5zdGFuY2UpO1xuICAgICAgZm9yIChjb25zdCBrZXkgb2YgY29tcG9uZW50S2V5cykge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5zdGFuY2Vba2V5XTtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKVxuICAgICAgICAgICh0aGlzLmluc3RhbmNlIGFzIEtleVZhbHVlKVtrZXldLnN1YnNjcmliZSgoZXZlbnQ6IFBhcnRpYWw8QmFzZUN1c3RvbUV2ZW50PikgPT4ge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5FdmVudC5lbWl0KHtcbiAgICAgICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQubmFtZSB8fCAnJyxcbiAgICAgICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgICAgICAuLi5ldmVudCxcbiAgICAgICAgICAgIH0gYXMgUmVuZGVyZXJDdXN0b21FdmVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBVbnN1YnNjcmliZXMgZnJvbSBldmVudHMgZW1pdHRlZCBieSB0aGUgcmVuZGVyZWQgY29tcG9uZW50XG4gICAqL1xuICBwcml2YXRlIHVuc3Vic2NyaWJlRXZlbnRzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICBjb25zdCBjb21wb25lbnRLZXlzID0gT2JqZWN0LmtleXModGhpcy5pbnN0YW5jZSk7XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBjb21wb25lbnRLZXlzKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnN0YW5jZVtrZXldO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXIpXG4gICAgICAgICAgdGhpcy5pbnN0YW5jZVtrZXldLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IEpTT04gPSBKU09OO1xufVxuIiwiICA8IS0tIEtlZXAgdG8gYXZvaWQgaWQgY29uZmxpY3RzIC0tPlxuICA8ZGl2IFtpZF09XCJyZW5kZXJlcklkXCI+PC9kaXY+XG5cbiAgPG5nLXRlbXBsYXRlICNjb21wb25lbnRPdXRlcj48L25nLXRlbXBsYXRlPlxuICA8bmctdGVtcGxhdGUgI2lubmVyPlxuICAgIDxkaXYgIFtpZF09XCJyZW5kZXJlcklkIHx8IG51bGxcIj5cbiAgICAgIEBmb3IgKGNoaWxkIG9mIG91dHB1dD8uY2hpbGRyZW47IHRyYWNrIGNoaWxkKSB7XG4gICAgICAgIEBpZihjaGlsZD8uY2hpbGRyZW4/Lmxlbmd0aCkge1xuICAgICAgICAgIDxuZ3gtZGVjYWYtY29tcG9uZW50LXJlbmRlcmVyIFtwYXJlbnRdPVwiY2hpbGRcIiAvPlxuICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAjY2hpbGRDb21wb25lbnRzXG4gICAgICAgICAgICAqbmdDb21wb25lbnRPdXRsZXQ9XCJcbiAgICAgICAgICAgICAgY2hpbGQuY29tcG9uZW50O1xuICAgICAgICAgICAgICBpbmplY3RvcjogY2hpbGQuaW5qZWN0b3I7XG4gICAgICAgICAgICAgIGlucHV0czogY2hpbGQuaW5wdXRzO1xuICAgICAgICAgICAgICBjb250ZW50OmNoaWxkLmNvbnRlbnQ7XG4gICAgICAgICAgICBcIlxuICAgICAgICAgIC8+XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cbiJdfQ==