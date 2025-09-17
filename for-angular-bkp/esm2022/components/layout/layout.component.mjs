import { Component, Input } from '@angular/core';
import { ForAngularModule } from '../../for-angular.module';
import { NgxBaseComponent } from '../../engine/NgxBaseComponent';
import { ComponentRendererComponent } from '../component-renderer/component-renderer.component';
import { ModelRendererComponent } from '../model-renderer/model-renderer.component';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
function _forTrack0($index, $item) { return this.trackItemFn($index, $item.col); }
const _c0 = a0 => ({ props: a0 });
function LayoutComponent_Conditional_0_For_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "ion-card", 3);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const row_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 1, row_r1.title), " ");
} }
function LayoutComponent_Conditional_0_For_1_For_3_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-card")(1, "ion-card-content")(2, "ngx-decaf-model-renderer", 5);
    i0.ɵɵlistener("listenEvent", function LayoutComponent_Conditional_0_For_1_For_3_Conditional_2_Template_ngx_decaf_model_renderer_listenEvent_2_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r2.handleEvent($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const child_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMap("dcf-height-1-1 " + ctx_r2.className);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("model", child_r4.props.name);
} }
function LayoutComponent_Conditional_0_For_1_For_3_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-decaf-component-renderer", 6);
    i0.ɵɵlistener("listenEvent", function LayoutComponent_Conditional_0_For_1_For_3_Conditional_3_Template_ngx_decaf_component_renderer_listenEvent_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r2.handleEvent($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("tag", child_r4.tag)("globals", i0.ɵɵpureFunction1(2, _c0, child_r4.props));
} }
function LayoutComponent_Conditional_0_For_1_For_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div");
    i0.ɵɵtemplate(2, LayoutComponent_Conditional_0_For_1_For_3_Conditional_2_Template, 3, 3, "ion-card", 2)(3, LayoutComponent_Conditional_0_For_1_For_3_Conditional_3_Template, 1, 4, "ngx-decaf-component-renderer", 4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const child_r4 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMap(child_r4.col === ctx_r2.cols.length ? "dcf-width-1-1" : "dcf-width-" + child_r4.col + "-" + ctx_r2.cols.length + "@" + ctx_r2.breakpoint);
    i0.ɵɵadvance();
    i0.ɵɵclassMap("dcf-grid-child " + child_r4.col);
    i0.ɵɵadvance();
    i0.ɵɵconditional(child_r4.tag === "ngx-decaf-crud-form" ? 2 : 3);
} }
function LayoutComponent_Conditional_0_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵtemplate(1, LayoutComponent_Conditional_0_For_1_Conditional_1_Template, 4, 3, "div", 1);
    i0.ɵɵrepeaterCreate(2, LayoutComponent_Conditional_0_For_1_For_3_Template, 4, 5, "div", 2, _forTrack0, true);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("id", ctx_r2.uid);
    i0.ɵɵadvance();
    i0.ɵɵconditional(row_r1 ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(row_r1.cols);
} }
function LayoutComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, LayoutComponent_Conditional_0_For_1_Template, 4, 2, "div", 0, i0.ɵɵcomponentInstance().trackItemFn, true);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵrepeater(ctx_r2.rows);
} }
/**
 * @description Layout component for creating responsive grid layouts in Angular applications.
 * @summary This component provides a flexible grid system that can be configured with dynamic
 * rows and columns. It supports responsive breakpoints and can render child components within
 * the grid structure. The component extends NgxBaseComponent to inherit common functionality
 * and integrates with the model and component renderer systems.
 *
 * @class LayoutComponent
 * @extends {NgxBaseComponent}
 * @implements {OnInit}
 * @memberOf LayoutComponent
 */
export class LayoutComponent extends NgxBaseComponent {
    /**
     * @description Creates an instance of LayoutComponent.
     * @summary Initializes a new LayoutComponent with the component name "LayoutComponent".
     * This constructor calls the parent NgxBaseComponent constructor to set up base
     * functionality and component identification.
     *
     * @memberOf LayoutComponent
     */
    constructor() {
        super("LayoutComponent");
        /**
         * @description Number of columns or array of column definitions for the grid layout.
         * @summary Defines the column structure of the grid. When a number is provided, it creates
         * that many equal-width columns. When an array is provided, each element can define specific
         * column properties or sizing. This allows for flexible grid layouts that can adapt to
         * different content requirements.
         *
         * @type {(number | string[])}
         * @default 1
         * @memberOf LayoutComponent
         */
        this.cols = 1;
        /**
         * @description Number of rows or array of row definitions for the grid layout.
         * @summary Defines the row structure of the grid. When a number is provided, it creates
         * that many equal-height rows. When an array is provided, each element can define specific
         * row properties or sizing. This provides control over vertical spacing and content organization.
         *
         * @type {(number | string[])}
         * @default 1
         * @memberOf LayoutComponent
         */
        this.rows = 1;
        /**
         * @description Media breakpoint for responsive behavior.
         * @summary Determines the responsive breakpoint at which the layout should adapt.
         * This affects how the grid behaves on different screen sizes, allowing for
         * mobile-first or desktop-first responsive design patterns. The breakpoint
         * is automatically processed to ensure compatibility with the UI framework.
         *
         * @type {UIMediaBreakPoints}
         * @default 'medium'
         * @memberOf LayoutComponent
         */
        this.breakpoint = 'medium';
        /**
         * @description Array of child components or data to render within the grid.
         * @summary Contains the child elements that will be distributed across the grid layout.
         * Each item in the array represents content that will be rendered using the appropriate
         * renderer component (ModelRenderer or ComponentRenderer). This allows for mixed content
         * types within a single layout structure.
         *
         * @type {KeyValue[]}
         * @default []
         * @memberOf LayoutComponent
         */
        this.children = [];
    }
    /**
     * @description Getter that converts columns input to an array format.
     * @summary Transforms the cols input property into a standardized string array format.
     * When cols is a number, it creates an array with that many empty string elements.
     * When cols is already an array, it returns the array as-is. This normalization
     * ensures consistent handling of column definitions in the template.
     *
     * @type {string[]}
     * @readonly
     * @memberOf LayoutComponent
     */
    get _cols() {
        let cols = this.cols;
        if (typeof cols === "number")
            cols = Array.from({ length: Number(cols) }, () => ``);
        return cols;
    }
    /**
     * @description Getter that converts rows input to an array format.
     * @summary Transforms the rows input property into a standardized string array format.
     * When rows is a number, it creates an array with that many empty string elements.
     * When rows is already an array, it returns the array as-is. This normalization
     * ensures consistent handling of row definitions in the template.
     *
     * @type {KeyValue[]}
     * @readonly
     * @memberOf LayoutComponent
     */
    get _rows() {
        let rows = this.rows;
        if (typeof rows === "number")
            rows = Array.from({ length: Number(rows) }, () => ({ title: '' }));
        return rows.map((row, index) => {
            return {
                title: row?.['title'],
                cols: this.children.filter(child => {
                    if (child['row'] === index + 1)
                        return child;
                })
            };
        });
    }
    /**
     * @description Angular lifecycle hook that runs after component initialization.
     * @summary Called once, after the first ngOnChanges(). This method triggers the
     * component's initialization process, which includes property parsing and grid
     * setup. It ensures the component is properly configured before rendering.
     *
     * @memberOf LayoutComponent
     */
    ngOnInit() {
        this.initialize();
    }
    /**
     * @description Initializes the layout component with processed properties.
     * @summary Overrides the base component's initialize method to set up the grid layout.
     * This method processes input properties, normalizes the breakpoint value, converts
     * rows and columns to their array representations, and marks the component as initialized.
     * The initialization ensures all properties are in the correct format for rendering.
     *
     * @mermaid
     * sequenceDiagram
     *   participant L as LayoutComponent
     *   participant B as NgxBaseComponent
     *
     *   L->>B: parseProps(this)
     *   Note over L: Process component properties
     *   L->>L: Normalize breakpoint to lowercase
     *   L->>L: Convert rows to array format
     *   L->>L: Convert cols to array format
     *   L->>L: Set initialized = true
     *
     * @override
     * @memberOf LayoutComponent
     */
    initialize() {
        this.parseProps(this);
        this.breakpoint = this.breakpoint.slice(0, 2).toLowerCase();
        this.cols = this._cols;
        this.rows = this._rows;
        this.initialized = true;
    }
    static { this.ɵfac = function LayoutComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LayoutComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LayoutComponent, selectors: [["ngx-decaf-layout"]], inputs: { cols: "cols", rows: "rows", breakpoint: "breakpoint", children: "children" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [[1, "dcf-grid", "dcf-grid-collapse", "dcf-grid-match", 3, "id"], [1, "dcf-width-1-1", "dcf-grid-title"], [3, "class"], [1, "dcf-grid-title"], [3, "tag", "globals"], [3, "listenEvent", "model"], [3, "listenEvent", "tag", "globals"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, LayoutComponent_Conditional_0_Template, 2, 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.initialized ? 0 : -1);
        } }, dependencies: [ForAngularModule, i1.TranslatePipe, ModelRendererComponent, ComponentRendererComponent], styles: [".dcf-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.dcf-grid-title)     ngx-decaf-component-renderer>*>*{height:100%;display:flex;justify-content:center!important;align-items:center!important}.dcf-grid[_ngcontent-%COMP%]   ion-card.dcf-height-1-1[_ngcontent-%COMP%] > ion-card-content[_ngcontent-%COMP%]{margin-top:2rem}.dcf-grid.dcf-grid-small[_ngcontent-%COMP%]   .dcf-grid-child[_ngcontent-%COMP%]{margin-bottom:2rem}.dcf-grid.dcf-grid-collapse[_ngcontent-%COMP%]   .dcf-grid-child[_ngcontent-%COMP%]{margin-bottom:1.25rem}.dcf-grid.dcf-grid-collapse[_ngcontent-%COMP%]   .dcf-grid-child[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{margin-bottom:1.25rem}.dcf-grid-title[_ngcontent-%COMP%]{font-size:1.05rem!important;background:none;box-shadow:none;margin-bottom:0;padding-bottom:0;font-weight:600;color:var(--dcf-color-dark);display:flex;align-items:center;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutComponent, [{
        type: Component,
        args: [{ selector: 'ngx-decaf-layout', imports: [ForAngularModule, ModelRendererComponent, ComponentRendererComponent], standalone: true, template: "\n@if(initialized) {\n  @for (row of rows; track trackItemFn($index, row); let rowIndex = $index) {\n    <div [id]=\"uid\" class=\"dcf-grid dcf-grid-collapse dcf-grid-match\">\n      @if(row) {\n        <div class=\"dcf-width-1-1 dcf-grid-title\">\n          <ion-card class=\"dcf-grid-title\">\n            {{row.title | translate}}\n          </ion-card>\n        </div>\n      }\n      @for (child of row.cols; track trackItemFn($index, child.col); let colIndex = $index) {\n        <div [class]=\"(child.col === cols.length ? 'dcf-width-1-1' : 'dcf-width-'+child.col+'-'+cols.length+'@'+breakpoint)\">\n            <div [class]=\"'dcf-grid-child '+child.col \">\n              @if(child.tag === 'ngx-decaf-crud-form') {\n                <ion-card [class]=\"'dcf-height-1-1 ' + className\">\n                  <ion-card-content>\n                    <ngx-decaf-model-renderer\n                      [model]=\"child.props.name\"\n                      (listenEvent)=\"handleEvent($event)\"\n                      />\n                    </ion-card-content>\n                  </ion-card>\n              } @else {\n                <ngx-decaf-component-renderer\n                  [tag]=\"child.tag\"\n                  (listenEvent)=\"handleEvent($event)\"\n                  [globals]=\"{props: child.props}\"\n                />\n              }\n            </div>\n        </div>\n      }\n    </div>\n  }\n}\n", styles: [".dcf-grid>div:not(.dcf-grid-title) ::ng-deep ngx-decaf-component-renderer>*>*{height:100%;display:flex;justify-content:center!important;align-items:center!important}.dcf-grid ion-card.dcf-height-1-1>ion-card-content{margin-top:2rem}.dcf-grid.dcf-grid-small .dcf-grid-child{margin-bottom:2rem}.dcf-grid.dcf-grid-collapse .dcf-grid-child{margin-bottom:1.25rem}.dcf-grid.dcf-grid-collapse .dcf-grid-child ion-card{margin-bottom:1.25rem}.dcf-grid-title{font-size:1.05rem!important;background:none;box-shadow:none;margin-bottom:0;padding-bottom:0;font-weight:600;color:var(--dcf-color-dark);display:flex;align-items:center;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}\n"] }]
    }], () => [], { cols: [{
            type: Input
        }], rows: [{
            type: Input
        }], breakpoint: [{
            type: Input
        }], children: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "components/layout/layout.component.ts", lineNumber: 29 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRWpFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOzs7NENDTTlFLG1DQUE4Qjs7O0lBTDFCLEFBREYsOEJBQTBDLGtCQUNQO0lBQy9CLFlBQ0Y7O0lBQ0YsQUFERSxpQkFBVyxFQUNQOzs7SUFGRixlQUNGO0lBREUsbUVBQ0Y7Ozs7SUFTVSxBQURGLEFBREYsZ0NBQWtELHVCQUM5QixrQ0FJWjtJQURGLGtQQUFlLDBCQUFtQixLQUFDO0lBR3ZDLEFBREUsQUFKQSxpQkFHSSxFQUNlLEVBQ1Y7Ozs7SUFQSCxtREFBdUM7SUFHM0MsZUFBMEI7SUFBMUIsMkNBQTBCOzs7O0lBTWhDLHVEQUlFO0lBRkEsc1BBQWUsMEJBQW1CLEtBQUM7SUFGckMsaUJBSUU7OztJQURBLEFBRkEsa0NBQWlCLHVEQUVlOzs7SUFkdEMsQUFESiwyQkFBcUgsVUFDckU7SUFVeEMsQUFURix1R0FBMEMsOEdBU2pDO0lBUWYsQUFESSxpQkFBTSxFQUNKOzs7O0lBbkJELHVKQUErRztJQUMzRyxjQUFzQztJQUF0QywrQ0FBc0M7SUFDekMsY0FlQztJQWZELGdFQWVDOzs7SUExQlgs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SUFBSTtvQkFpQmhCLElBQUk7a0JBREgsS0FBSztZQWNOLElBQUk7a0JBREgsS0FBSztZQWVOLFVBQVU7a0JBRFQsS0FBSztZQWVOLFFBQVE7a0JBRFAsS0FBSzs7a0ZBdERLLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9yQW5ndWxhck1vZHVsZSB9IGZyb20gJy4uLy4uL2Zvci1hbmd1bGFyLm1vZHVsZSc7XG5pbXBvcnQgeyBOZ3hCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZW5naW5lL05neEJhc2VDb21wb25lbnQnO1xuaW1wb3J0IHsgS2V5VmFsdWUgfSBmcm9tICcuLi8uLi9lbmdpbmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50UmVuZGVyZXJDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnQtcmVuZGVyZXIvY29tcG9uZW50LXJlbmRlcmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RlbFJlbmRlcmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vbW9kZWwtcmVuZGVyZXIvbW9kZWwtcmVuZGVyZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFVJTWVkaWFCcmVha1BvaW50cyB9IGZyb20gJ0BkZWNhZi10cy91aS1kZWNvcmF0b3JzJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gTGF5b3V0IGNvbXBvbmVudCBmb3IgY3JlYXRpbmcgcmVzcG9uc2l2ZSBncmlkIGxheW91dHMgaW4gQW5ndWxhciBhcHBsaWNhdGlvbnMuXG4gKiBAc3VtbWFyeSBUaGlzIGNvbXBvbmVudCBwcm92aWRlcyBhIGZsZXhpYmxlIGdyaWQgc3lzdGVtIHRoYXQgY2FuIGJlIGNvbmZpZ3VyZWQgd2l0aCBkeW5hbWljXG4gKiByb3dzIGFuZCBjb2x1bW5zLiBJdCBzdXBwb3J0cyByZXNwb25zaXZlIGJyZWFrcG9pbnRzIGFuZCBjYW4gcmVuZGVyIGNoaWxkIGNvbXBvbmVudHMgd2l0aGluXG4gKiB0aGUgZ3JpZCBzdHJ1Y3R1cmUuIFRoZSBjb21wb25lbnQgZXh0ZW5kcyBOZ3hCYXNlQ29tcG9uZW50IHRvIGluaGVyaXQgY29tbW9uIGZ1bmN0aW9uYWxpdHlcbiAqIGFuZCBpbnRlZ3JhdGVzIHdpdGggdGhlIG1vZGVsIGFuZCBjb21wb25lbnQgcmVuZGVyZXIgc3lzdGVtcy5cbiAqXG4gKiBAY2xhc3MgTGF5b3V0Q29tcG9uZW50XG4gKiBAZXh0ZW5kcyB7Tmd4QmFzZUNvbXBvbmVudH1cbiAqIEBpbXBsZW1lbnRzIHtPbkluaXR9XG4gKiBAbWVtYmVyT2YgTGF5b3V0Q29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1kZWNhZi1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGF5b3V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGF5b3V0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGltcG9ydHM6IFtGb3JBbmd1bGFyTW9kdWxlLCBNb2RlbFJlbmRlcmVyQ29tcG9uZW50LCBDb21wb25lbnRSZW5kZXJlckNvbXBvbmVudF0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG5cbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgTmd4QmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBOdW1iZXIgb2YgY29sdW1ucyBvciBhcnJheSBvZiBjb2x1bW4gZGVmaW5pdGlvbnMgZm9yIHRoZSBncmlkIGxheW91dC5cbiAgICogQHN1bW1hcnkgRGVmaW5lcyB0aGUgY29sdW1uIHN0cnVjdHVyZSBvZiB0aGUgZ3JpZC4gV2hlbiBhIG51bWJlciBpcyBwcm92aWRlZCwgaXQgY3JlYXRlc1xuICAgKiB0aGF0IG1hbnkgZXF1YWwtd2lkdGggY29sdW1ucy4gV2hlbiBhbiBhcnJheSBpcyBwcm92aWRlZCwgZWFjaCBlbGVtZW50IGNhbiBkZWZpbmUgc3BlY2lmaWNcbiAgICogY29sdW1uIHByb3BlcnRpZXMgb3Igc2l6aW5nLiBUaGlzIGFsbG93cyBmb3IgZmxleGlibGUgZ3JpZCBsYXlvdXRzIHRoYXQgY2FuIGFkYXB0IHRvXG4gICAqIGRpZmZlcmVudCBjb250ZW50IHJlcXVpcmVtZW50cy5cbiAgICpcbiAgICogQHR5cGUgeyhudW1iZXIgfCBzdHJpbmdbXSl9XG4gICAqIEBkZWZhdWx0IDFcbiAgICogQG1lbWJlck9mIExheW91dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgY29sczogbnVtYmVyIHwgc3RyaW5nW10gPSAxO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gTnVtYmVyIG9mIHJvd3Mgb3IgYXJyYXkgb2Ygcm93IGRlZmluaXRpb25zIGZvciB0aGUgZ3JpZCBsYXlvdXQuXG4gICAqIEBzdW1tYXJ5IERlZmluZXMgdGhlIHJvdyBzdHJ1Y3R1cmUgb2YgdGhlIGdyaWQuIFdoZW4gYSBudW1iZXIgaXMgcHJvdmlkZWQsIGl0IGNyZWF0ZXNcbiAgICogdGhhdCBtYW55IGVxdWFsLWhlaWdodCByb3dzLiBXaGVuIGFuIGFycmF5IGlzIHByb3ZpZGVkLCBlYWNoIGVsZW1lbnQgY2FuIGRlZmluZSBzcGVjaWZpY1xuICAgKiByb3cgcHJvcGVydGllcyBvciBzaXppbmcuIFRoaXMgcHJvdmlkZXMgY29udHJvbCBvdmVyIHZlcnRpY2FsIHNwYWNpbmcgYW5kIGNvbnRlbnQgb3JnYW5pemF0aW9uLlxuICAgKlxuICAgKiBAdHlwZSB7KG51bWJlciB8IHN0cmluZ1tdKX1cbiAgICogQGRlZmF1bHQgMVxuICAgKiBAbWVtYmVyT2YgTGF5b3V0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICByb3dzOiBudW1iZXIgfCBLZXlWYWx1ZVtdIHwgc3RyaW5nW10gPSAxO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gTWVkaWEgYnJlYWtwb2ludCBmb3IgcmVzcG9uc2l2ZSBiZWhhdmlvci5cbiAgICogQHN1bW1hcnkgRGV0ZXJtaW5lcyB0aGUgcmVzcG9uc2l2ZSBicmVha3BvaW50IGF0IHdoaWNoIHRoZSBsYXlvdXQgc2hvdWxkIGFkYXB0LlxuICAgKiBUaGlzIGFmZmVjdHMgaG93IHRoZSBncmlkIGJlaGF2ZXMgb24gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgYWxsb3dpbmcgZm9yXG4gICAqIG1vYmlsZS1maXJzdCBvciBkZXNrdG9wLWZpcnN0IHJlc3BvbnNpdmUgZGVzaWduIHBhdHRlcm5zLiBUaGUgYnJlYWtwb2ludFxuICAgKiBpcyBhdXRvbWF0aWNhbGx5IHByb2Nlc3NlZCB0byBlbnN1cmUgY29tcGF0aWJpbGl0eSB3aXRoIHRoZSBVSSBmcmFtZXdvcmsuXG4gICAqXG4gICAqIEB0eXBlIHtVSU1lZGlhQnJlYWtQb2ludHN9XG4gICAqIEBkZWZhdWx0ICdtZWRpdW0nXG4gICAqIEBtZW1iZXJPZiBMYXlvdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGJyZWFrcG9pbnQ6IFVJTWVkaWFCcmVha1BvaW50cyA9ICdtZWRpdW0nO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQXJyYXkgb2YgY2hpbGQgY29tcG9uZW50cyBvciBkYXRhIHRvIHJlbmRlciB3aXRoaW4gdGhlIGdyaWQuXG4gICAqIEBzdW1tYXJ5IENvbnRhaW5zIHRoZSBjaGlsZCBlbGVtZW50cyB0aGF0IHdpbGwgYmUgZGlzdHJpYnV0ZWQgYWNyb3NzIHRoZSBncmlkIGxheW91dC5cbiAgICogRWFjaCBpdGVtIGluIHRoZSBhcnJheSByZXByZXNlbnRzIGNvbnRlbnQgdGhhdCB3aWxsIGJlIHJlbmRlcmVkIHVzaW5nIHRoZSBhcHByb3ByaWF0ZVxuICAgKiByZW5kZXJlciBjb21wb25lbnQgKE1vZGVsUmVuZGVyZXIgb3IgQ29tcG9uZW50UmVuZGVyZXIpLiBUaGlzIGFsbG93cyBmb3IgbWl4ZWQgY29udGVudFxuICAgKiB0eXBlcyB3aXRoaW4gYSBzaW5nbGUgbGF5b3V0IHN0cnVjdHVyZS5cbiAgICpcbiAgICogQHR5cGUge0tleVZhbHVlW119XG4gICAqIEBkZWZhdWx0IFtdXG4gICAqIEBtZW1iZXJPZiBMYXlvdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGNoaWxkcmVuOiBLZXlWYWx1ZVtdID0gW107XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIExheW91dENvbXBvbmVudC5cbiAgICogQHN1bW1hcnkgSW5pdGlhbGl6ZXMgYSBuZXcgTGF5b3V0Q29tcG9uZW50IHdpdGggdGhlIGNvbXBvbmVudCBuYW1lIFwiTGF5b3V0Q29tcG9uZW50XCIuXG4gICAqIFRoaXMgY29uc3RydWN0b3IgY2FsbHMgdGhlIHBhcmVudCBOZ3hCYXNlQ29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIHNldCB1cCBiYXNlXG4gICAqIGZ1bmN0aW9uYWxpdHkgYW5kIGNvbXBvbmVudCBpZGVudGlmaWNhdGlvbi5cbiAgICpcbiAgICogQG1lbWJlck9mIExheW91dENvbXBvbmVudFxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJMYXlvdXRDb21wb25lbnRcIilcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gR2V0dGVyIHRoYXQgY29udmVydHMgY29sdW1ucyBpbnB1dCB0byBhbiBhcnJheSBmb3JtYXQuXG4gICAqIEBzdW1tYXJ5IFRyYW5zZm9ybXMgdGhlIGNvbHMgaW5wdXQgcHJvcGVydHkgaW50byBhIHN0YW5kYXJkaXplZCBzdHJpbmcgYXJyYXkgZm9ybWF0LlxuICAgKiBXaGVuIGNvbHMgaXMgYSBudW1iZXIsIGl0IGNyZWF0ZXMgYW4gYXJyYXkgd2l0aCB0aGF0IG1hbnkgZW1wdHkgc3RyaW5nIGVsZW1lbnRzLlxuICAgKiBXaGVuIGNvbHMgaXMgYWxyZWFkeSBhbiBhcnJheSwgaXQgcmV0dXJucyB0aGUgYXJyYXkgYXMtaXMuIFRoaXMgbm9ybWFsaXphdGlvblxuICAgKiBlbnN1cmVzIGNvbnNpc3RlbnQgaGFuZGxpbmcgb2YgY29sdW1uIGRlZmluaXRpb25zIGluIHRoZSB0ZW1wbGF0ZS5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ1tdfVxuICAgKiBAcmVhZG9ubHlcbiAgICogQG1lbWJlck9mIExheW91dENvbXBvbmVudFxuICAgKi9cbiAgZ2V0IF9jb2xzKCk6IHN0cmluZ1tdIHtcbiAgICBsZXQgY29scyA9IHRoaXMuY29scztcbiAgICBpZih0eXBlb2YgY29scyA9PT0gXCJudW1iZXJcIilcbiAgICAgIGNvbHMgPSBBcnJheS5mcm9tKHtsZW5ndGg6IE51bWJlcihjb2xzKX0sICgpID0+ICBgYCk7XG4gICAgcmV0dXJuIGNvbHM7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEdldHRlciB0aGF0IGNvbnZlcnRzIHJvd3MgaW5wdXQgdG8gYW4gYXJyYXkgZm9ybWF0LlxuICAgKiBAc3VtbWFyeSBUcmFuc2Zvcm1zIHRoZSByb3dzIGlucHV0IHByb3BlcnR5IGludG8gYSBzdGFuZGFyZGl6ZWQgc3RyaW5nIGFycmF5IGZvcm1hdC5cbiAgICogV2hlbiByb3dzIGlzIGEgbnVtYmVyLCBpdCBjcmVhdGVzIGFuIGFycmF5IHdpdGggdGhhdCBtYW55IGVtcHR5IHN0cmluZyBlbGVtZW50cy5cbiAgICogV2hlbiByb3dzIGlzIGFscmVhZHkgYW4gYXJyYXksIGl0IHJldHVybnMgdGhlIGFycmF5IGFzLWlzLiBUaGlzIG5vcm1hbGl6YXRpb25cbiAgICogZW5zdXJlcyBjb25zaXN0ZW50IGhhbmRsaW5nIG9mIHJvdyBkZWZpbml0aW9ucyBpbiB0aGUgdGVtcGxhdGUuXG4gICAqXG4gICAqIEB0eXBlIHtLZXlWYWx1ZVtdfVxuICAgKiBAcmVhZG9ubHlcbiAgICogQG1lbWJlck9mIExheW91dENvbXBvbmVudFxuICAgKi9cbiAgZ2V0IF9yb3dzKCk6IEtleVZhbHVlW10ge1xuICAgIGxldCByb3dzID0gdGhpcy5yb3dzO1xuICAgIGlmKHR5cGVvZiByb3dzID09PSBcIm51bWJlclwiKVxuICAgICAgcm93cyA9IEFycmF5LmZyb20oe2xlbmd0aDogTnVtYmVyKHJvd3MpfSwgKCkgPT4gKHt0aXRsZTogJyd9KSk7XG4gICAgcmV0dXJuIHJvd3MubWFwKChyb3csIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogKHJvdyBhcyBLZXlWYWx1ZSk/LlsndGl0bGUnXSxcbiAgICAgICAgY29sczogdGhpcy5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4ge1xuICAgICAgICAgIGlmKGNoaWxkWydyb3cnXSA9PT0gaW5kZXggKyAxKVxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICB9KVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQW5ndWxhciBsaWZlY3ljbGUgaG9vayB0aGF0IHJ1bnMgYWZ0ZXIgY29tcG9uZW50IGluaXRpYWxpemF0aW9uLlxuICAgKiBAc3VtbWFyeSBDYWxsZWQgb25jZSwgYWZ0ZXIgdGhlIGZpcnN0IG5nT25DaGFuZ2VzKCkuIFRoaXMgbWV0aG9kIHRyaWdnZXJzIHRoZVxuICAgKiBjb21wb25lbnQncyBpbml0aWFsaXphdGlvbiBwcm9jZXNzLCB3aGljaCBpbmNsdWRlcyBwcm9wZXJ0eSBwYXJzaW5nIGFuZCBncmlkXG4gICAqIHNldHVwLiBJdCBlbnN1cmVzIHRoZSBjb21wb25lbnQgaXMgcHJvcGVybHkgY29uZmlndXJlZCBiZWZvcmUgcmVuZGVyaW5nLlxuICAgKlxuICAgKiBAbWVtYmVyT2YgTGF5b3V0Q29tcG9uZW50XG4gICAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gSW5pdGlhbGl6ZXMgdGhlIGxheW91dCBjb21wb25lbnQgd2l0aCBwcm9jZXNzZWQgcHJvcGVydGllcy5cbiAgICogQHN1bW1hcnkgT3ZlcnJpZGVzIHRoZSBiYXNlIGNvbXBvbmVudCdzIGluaXRpYWxpemUgbWV0aG9kIHRvIHNldCB1cCB0aGUgZ3JpZCBsYXlvdXQuXG4gICAqIFRoaXMgbWV0aG9kIHByb2Nlc3NlcyBpbnB1dCBwcm9wZXJ0aWVzLCBub3JtYWxpemVzIHRoZSBicmVha3BvaW50IHZhbHVlLCBjb252ZXJ0c1xuICAgKiByb3dzIGFuZCBjb2x1bW5zIHRvIHRoZWlyIGFycmF5IHJlcHJlc2VudGF0aW9ucywgYW5kIG1hcmtzIHRoZSBjb21wb25lbnQgYXMgaW5pdGlhbGl6ZWQuXG4gICAqIFRoZSBpbml0aWFsaXphdGlvbiBlbnN1cmVzIGFsbCBwcm9wZXJ0aWVzIGFyZSBpbiB0aGUgY29ycmVjdCBmb3JtYXQgZm9yIHJlbmRlcmluZy5cbiAgICpcbiAgICogQG1lcm1haWRcbiAgICogc2VxdWVuY2VEaWFncmFtXG4gICAqICAgcGFydGljaXBhbnQgTCBhcyBMYXlvdXRDb21wb25lbnRcbiAgICogICBwYXJ0aWNpcGFudCBCIGFzIE5neEJhc2VDb21wb25lbnRcbiAgICpcbiAgICogICBMLT4+QjogcGFyc2VQcm9wcyh0aGlzKVxuICAgKiAgIE5vdGUgb3ZlciBMOiBQcm9jZXNzIGNvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICAqICAgTC0+Pkw6IE5vcm1hbGl6ZSBicmVha3BvaW50IHRvIGxvd2VyY2FzZVxuICAgKiAgIEwtPj5MOiBDb252ZXJ0IHJvd3MgdG8gYXJyYXkgZm9ybWF0XG4gICAqICAgTC0+Pkw6IENvbnZlcnQgY29scyB0byBhcnJheSBmb3JtYXRcbiAgICogICBMLT4+TDogU2V0IGluaXRpYWxpemVkID0gdHJ1ZVxuICAgKlxuICAgKiBAb3ZlcnJpZGVcbiAgICogQG1lbWJlck9mIExheW91dENvbXBvbmVudFxuICAgKi9cbiAgb3ZlcnJpZGUgaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLnBhcnNlUHJvcHModGhpcyk7XG4gICAgdGhpcy5icmVha3BvaW50ID0gdGhpcy5icmVha3BvaW50LnNsaWNlKDAsIDIpLnRvTG93ZXJDYXNlKCkgYXMgVUlNZWRpYUJyZWFrUG9pbnRzO1xuICAgIHRoaXMuY29scyA9IHRoaXMuX2NvbHM7XG4gICAgdGhpcy5yb3dzID0gdGhpcy5fcm93cztcbiAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxufVxuIiwiXG5AaWYoaW5pdGlhbGl6ZWQpIHtcbiAgQGZvciAocm93IG9mIHJvd3M7IHRyYWNrIHRyYWNrSXRlbUZuKCRpbmRleCwgcm93KTsgbGV0IHJvd0luZGV4ID0gJGluZGV4KSB7XG4gICAgPGRpdiBbaWRdPVwidWlkXCIgY2xhc3M9XCJkY2YtZ3JpZCBkY2YtZ3JpZC1jb2xsYXBzZSBkY2YtZ3JpZC1tYXRjaFwiPlxuICAgICAgQGlmKHJvdykge1xuICAgICAgICA8ZGl2IGNsYXNzPVwiZGNmLXdpZHRoLTEtMSBkY2YtZ3JpZC10aXRsZVwiPlxuICAgICAgICAgIDxpb24tY2FyZCBjbGFzcz1cImRjZi1ncmlkLXRpdGxlXCI+XG4gICAgICAgICAgICB7e3Jvdy50aXRsZSB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgPC9pb24tY2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgICBAZm9yIChjaGlsZCBvZiByb3cuY29sczsgdHJhY2sgdHJhY2tJdGVtRm4oJGluZGV4LCBjaGlsZC5jb2wpOyBsZXQgY29sSW5kZXggPSAkaW5kZXgpIHtcbiAgICAgICAgPGRpdiBbY2xhc3NdPVwiKGNoaWxkLmNvbCA9PT0gY29scy5sZW5ndGggPyAnZGNmLXdpZHRoLTEtMScgOiAnZGNmLXdpZHRoLScrY2hpbGQuY29sKyctJytjb2xzLmxlbmd0aCsnQCcrYnJlYWtwb2ludClcIj5cbiAgICAgICAgICAgIDxkaXYgW2NsYXNzXT1cIidkY2YtZ3JpZC1jaGlsZCAnK2NoaWxkLmNvbCBcIj5cbiAgICAgICAgICAgICAgQGlmKGNoaWxkLnRhZyA9PT0gJ25neC1kZWNhZi1jcnVkLWZvcm0nKSB7XG4gICAgICAgICAgICAgICAgPGlvbi1jYXJkIFtjbGFzc109XCInZGNmLWhlaWdodC0xLTEgJyArIGNsYXNzTmFtZVwiPlxuICAgICAgICAgICAgICAgICAgPGlvbi1jYXJkLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGVjYWYtbW9kZWwtcmVuZGVyZXJcbiAgICAgICAgICAgICAgICAgICAgICBbbW9kZWxdPVwiY2hpbGQucHJvcHMubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgKGxpc3RlbkV2ZW50KT1cImhhbmRsZUV2ZW50KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvaW9uLWNhcmQtY29udGVudD5cbiAgICAgICAgICAgICAgICAgIDwvaW9uLWNhcmQ+XG4gICAgICAgICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICAgICAgIDxuZ3gtZGVjYWYtY29tcG9uZW50LXJlbmRlcmVyXG4gICAgICAgICAgICAgICAgICBbdGFnXT1cImNoaWxkLnRhZ1wiXG4gICAgICAgICAgICAgICAgICAobGlzdGVuRXZlbnQpPVwiaGFuZGxlRXZlbnQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICBbZ2xvYmFsc109XCJ7cHJvcHM6IGNoaWxkLnByb3BzfVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvZGl2PlxuICB9XG59XG4iXX0=