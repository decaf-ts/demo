import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';
import { ForAngularModule } from '../../for-angular.module';
import { NgxBaseComponent } from '../../engine/NgxBaseComponent';
import { EventConstants } from '../../engine';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@ngx-translate/core";
const _c0 = (a0, a1) => ({ value0: a0, value1: a1 });
const _c1 = a0 => ({ "dcf-disabled": a0 });
const _c2 = a0 => ({ "dcf-active": a0 });
function PaginationComponent_For_9_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵlistener("click", function PaginationComponent_For_9_Template_div_click_0_listener() { const page_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.navigate(page_r3["index"])); })("keydown.enter", function PaginationComponent_For_9_Template_div_keydown_enter_0_listener() { const page_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.navigate(page_r3["index"])); });
    i0.ɵɵelementStart(1, "span", 10);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const page_r3 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(page_r3["class"]);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c2, ctx_r3.current === page_r3["index"]));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(page_r3["text"]);
} }
/**
 * @description A pagination component for navigating through multiple pages of content.
 * @summary This component provides a user interface for paginated content navigation,
 * displaying page numbers and navigation controls. It supports customizable page counts,
 * current page tracking, and emits events when users navigate between pages.
 *
 * The component intelligently handles large numbers of pages by showing a subset of page
 * numbers with ellipses to indicate skipped pages, ensuring the UI remains clean and usable
 * even with many pages.
 *
 * @mermaid
 * sequenceDiagram
 *   participant U as User
 *   participant P as PaginationComponent
 *   participant E as External Component
 *
 *   U->>P: Click page number
 *   P->>P: navigate(page)
 *   P->>P: handleClick(direction, page)
 *   P->>E: Emit clickEvent with PaginationCustomEvent
 *
 *   U->>P: Click next button
 *   P->>P: next()
 *   P->>P: handleClick('next')
 *   P->>E: Emit clickEvent with PaginationCustomEvent
 *
 *   U->>P: Click previous button
 *   P->>P: previous()
 *   P->>P: handleClick('previous')
 *   P->>E: Emit clickEvent with PaginationCustomEvent
 *
 * @example
 * <ngx-decaf-pagination
 *   [pages]="10"
 *   [current]="3"
 *   (clickEvent)="handlePageChange($event)">
 * </ngx-decaf-pagination>
 *
 * @extends {NgxBaseComponent}
 * @implements {OnInit}
 */
export class PaginationComponent extends NgxBaseComponent {
    /**
     * @constructor
     * @description Initializes a new instance of the PaginationComponent.
     * Calls the parent constructor with the component name for generate base locale string.
     */
    constructor() {
        super("PaginationComponent");
        /**
         * @description Controls whether the component uses translation services.
         * @summary When set to true, the component will attempt to use translation services
         * for any text content. This allows for internationalization of the pagination component.
         *
         * @type {StringOrBoolean}
         * @default true
         * @memberOf PaginationComponent
         */
        this.translatable = true;
        /**
         * @description The currently active page number.
         * @summary Specifies which page is currently active or selected. This value is used
         * to highlight the current page in the UI and as a reference point for navigation.
         *
         * @type {number}
         * @default 1
         * @memberOf PaginationComponent
         */
        this.current = 1;
        /**
         * @description Event emitter for pagination navigation events.
         * @summary Emits a custom event when users navigate between pages, either by clicking
         * on page numbers or using the next/previous buttons. The event contains information
         * about the navigation direction and the target page number.
         *
         * @type {EventEmitter<PaginationCustomEvent>}
         * @memberOf PaginationComponent
         */
        this.clickEvent = new EventEmitter();
        addIcons({ chevronBackOutline, chevronForwardOutline });
    }
    /**
     * @description Initializes the component after Angular sets the input properties.
     * @summary Sets up the component by initializing the locale settings based on the
     * translatable property, generating the page numbers based on the total pages and
     * current page, and storing the last page number for boundary checking.
     *
     * @mermaid
     * sequenceDiagram
     *   participant A as Angular Lifecycle
     *   participant P as PaginationComponent
     *
     *   A->>P: ngOnInit()
     *   P->>P: getLocale(translatable)
     *   P->>P: Set locale
     *   P->>P: getPages(data, current)
     *   P->>P: Set pages array
     *   P->>P: Set last page number
     *
     * @returns {void}
     * @memberOf PaginationComponent
     */
    ngOnInit() {
        this.locale = this.getLocale(this.translatable);
        this.pages = this.getPages(this.totalPages, this.current);
        this.last = this.totalPages;
    }
    /**
     * @description Handles click events on pagination controls.
     * @summary Processes user interactions with the pagination component, updating the
     * current page if specified and emitting an event with navigation details. This method
     * is called when users click on page numbers or navigation buttons.
     *
     * @param {('next' | 'previous')} direction - The direction of navigation
     * @param {number} [page] - Optional page number to navigate to directly
     * @returns {void}
     *
     * @mermaid
     * sequenceDiagram
     *   participant U as User
     *   participant P as PaginationComponent
     *   participant E as External Component
     *
     *   U->>P: Click pagination control
     *   P->>P: handleClick(direction, page?)
     *   alt page is provided
     *     P->>P: Update current page
     *   end
     *   P->>E: Emit clickEvent with direction and page
     *
     * @memberOf PaginationComponent
     */
    handleClick(direction, page) {
        if (page)
            this.current = page;
        this.clickEvent.emit({
            name: EventConstants.CLICK,
            data: {
                direction,
                page: this.current
            },
            component: this.componentName
        });
    }
    /**
     * @description Generates the array of page objects for display.
     * @summary Creates an array of page objects based on the total number of pages and
     * the current page. For small page counts (≤5), all pages are shown. For larger page
     * counts, a subset is shown with ellipses to indicate skipped pages. This ensures
     * the pagination UI remains clean and usable even with many pages.
     *
     * @param {number} total - The total number of pages
     * @param {number} [current] - The current active page (defaults to this.current)
     * @returns {KeyValue[]} Array of page objects with index and text properties
     *
     * @mermaid
     * flowchart TD
     *   A[Start] --> B{total <= 5?}
     *   B -->|Yes| C[Show all pages]
     *   B -->|No| D[Show first page]
     *   D --> E[Show last pages]
     *   E --> F[Add ellipses for skipped pages]
     *   C --> G[Return pages array]
     *   F --> G
     *
     * @memberOf PaginationComponent
     */
    getPages(total, current) {
        if (!current)
            current = this.current;
        const pages = [];
        function getPage(index, text = '', clazz = 'button') {
            if (pages.some(item => item['index'] === index))
                return;
            pages.push({ index, text: index != null ? index.toString().padStart(2, '0') : text, class: clazz });
        }
        if (total <= 5) {
            for (let i = 1; i <= total; i++)
                getPage(i);
        }
        else {
            // Adiciona os dois primeiros
            getPage(1);
            getPage(2);
            // Adiciona "..." entre os blocos
            if (current && current > 3)
                getPage(null, '...');
            // Adiciona a página atual (se estiver no meio)
            if (current && current > 2 && current < total - 1)
                getPage(current);
            // Adiciona "..." entre os blocos
            if (current && current < total - 2)
                getPage(null, '...', 'separator');
            // Adiciona os dois últimos
            getPage(total - 1);
            getPage(total);
        }
        return pages;
    }
    /**
     * @description Gets the current active page number.
     * @summary Returns the current page number that is active in the pagination component.
     * This method provides a way to access the current page state from outside the component.
     *
     * @returns {number} The current page number
     * @memberOf PaginationComponent
     */
    getCurrent() {
        return this.current;
    }
    /**
     * @description Navigates to the next page.
     * @summary Increments the current page number if not at the last page and triggers
     * the click event handler with 'next' direction. This method is typically called
     * when the user clicks on the "next" button in the pagination UI.
     *
     * @returns {void}
     *
     * @mermaid
     * sequenceDiagram
     *   participant U as User
     *   participant P as PaginationComponent
     *
     *   U->>P: Click next button
     *   P->>P: next()
     *   alt page <= max pages
     *     P->>P: Increment current page
     *     P->>P: handleClick('next')
     *   end
     *
     * @memberOf PaginationComponent
     */
    next() {
        const page = this.current + 1;
        if (page <= Object.keys(this.pages)?.length || 0) {
            this.current = page;
            this.handleClick('next');
        }
    }
    /**
     * @description Navigates to the previous page.
     * @summary Decrements the current page number if not at the first page and triggers
     * the click event handler with 'previous' direction. This method is typically called
     * when the user clicks on the "previous" button in the pagination UI.
     *
     * @returns {void}
     *
     * @mermaid
     * sequenceDiagram
     *   participant U as User
     *   participant P as PaginationComponent
     *
     *   U->>P: Click previous button
     *   P->>P: previous()
     *   alt page > 0
     *     P->>P: Decrement current page
     *     P->>P: handleClick('previous')
     *   end
     *
     * @memberOf PaginationComponent
     */
    previous() {
        const page = this.current - 1;
        if (page > 0) {
            this.current = page;
            this.handleClick('previous');
        }
    }
    /**
     * @description Navigates to a specific page number.
     * @summary Updates the current page to the specified page number and triggers
     * the click event handler with the appropriate direction. This method is typically
     * called when the user clicks directly on a page number in the pagination UI.
     *
     * @param {number | null} page - The page number to navigate to
     * @returns {void}
     *
     * @mermaid
     * sequenceDiagram
     *   participant U as User
     *   participant P as PaginationComponent
     *
     *   U->>P: Click page number
     *   P->>P: navigate(page)
     *   alt page is not null and different from current
     *     P->>P: Determine direction (next/previous)
     *     P->>P: handleClick(direction, page)
     *   end
     *
     * @memberOf PaginationComponent
     */
    navigate(page) {
        if (page !== null && this.current !== page)
            this.handleClick(page > this.current ? 'next' : 'previous', page);
    }
    static { this.ɵfac = function PaginationComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaginationComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaginationComponent, selectors: [["ngx-decaf-pagination"]], inputs: { totalPages: "totalPages", current: "current" }, outputs: { clickEvent: "clickEvent" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 12, vars: 14, consts: [["paginationComponent", ""], [1, "dcf-paginator-container", "dcf-flex", "dcf-flex-center", 3, "id"], [1, "dcf-width-1-1"], [1, "dcf-pagination-resume", 3, "innerHTML"], [1, "dcf-pagination", "dcf-flex-center"], ["aria-label", "previous", "tabindex", "0", 3, "click", "keydown.enter", "ngClass"], ["name", "chevron-back-outline", "aria-hidden", "true"], ["tabindex", "0", 3, "class", "ngClass"], ["tabindex", "0", 3, "click", "keydown.enter", "ngClass"], ["name", "chevron-forward-outline", "aria-hidden", "true"], [1, "page-item"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
            i0.ɵɵelement(2, "div", 3);
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵelementStart(4, "div", 4, 0)(6, "div", 5);
            i0.ɵɵlistener("click", function PaginationComponent_Template_div_click_6_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.previous()); })("keydown.enter", function PaginationComponent_Template_div_keydown_enter_6_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.previous()); });
            i0.ɵɵelement(7, "ion-icon", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(8, PaginationComponent_For_9_Template, 3, 6, "div", 7, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementStart(10, "div", 8);
            i0.ɵɵlistener("click", function PaginationComponent_Template_div_click_10_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.next()); })("keydown.enter", function PaginationComponent_Template_div_keydown_enter_10_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.next()); });
            i0.ɵɵelement(11, "ion-icon", 9);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵproperty("id", ctx.uid);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind2(3, 4, ctx.locale + ".resume", i0.ɵɵpureFunction2(7, _c0, ctx.current, ctx.last)), i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(10, _c1, ctx.current === 1));
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.pages);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(12, _c1, ctx.current === ctx.last));
        } }, dependencies: [ForAngularModule, i1.NgClass, i2.TranslatePipe, IonIcon], styles: [".dcf-paginator-container[_ngcontent-%COMP%]{margin-bottom:1rem}.dcf-pagination[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;margin-left:0;padding:0;list-style:none}.dcf-pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center;font-weight:600;width:34px;line-height:34px;padding:0!important;border-radius:50%;box-sizing:border-box}@media (prefers-color-scheme: dark){.dcf-pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]{color:var(--dcf-color-gray-3)!important}}@media (prefers-color-scheme: light){.dcf-pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]{color:var(--dcf-color-gray-7)!important}}.dcf-pagination[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:none;padding-left:0;position:relative;margin:0px .15rem;cursor:pointer}.dcf-pagination[_ngcontent-%COMP%] > *.dcf-disabled[_ngcontent-%COMP%]{pointer-events:none;touch-action:none;cursor:text}.dcf-pagination[_ngcontent-%COMP%] > *.dcf-active[_ngcontent-%COMP%]{pointer-events:none;touch-action:none}@media (prefers-color-scheme: light){.dcf-pagination[_ngcontent-%COMP%] > *.dcf-active[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]{background:rgba(var(--dcf-color-primary-rgb),.15)}.dcf-pagination[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:hover:not(.dcf-active)   *[_ngcontent-%COMP%]{color:var(--dcf-color-primary)!important}}@media (prefers-color-scheme: dark){.dcf-pagination[_ngcontent-%COMP%] > *.dcf-active[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]{background:var(--dcf-color-gray-7)}.dcf-pagination[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:hover:not(.dcf-active)   *[_ngcontent-%COMP%]{color:var(--dcf-color-primary)!important}}.dcf-pagination-resume[_ngcontent-%COMP%]{margin:1rem 0px;text-align:center}@media (prefers-color-scheme: light){.dcf-pagination-resume[_ngcontent-%COMP%]{color:var(--dcf-color-gray-8)}}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationComponent, [{
        type: Component,
        args: [{ selector: 'ngx-decaf-pagination', imports: [
                    ForAngularModule,
                    IonIcon
                ], standalone: true, template: " <div [id]=\"uid\" class=\"dcf-paginator-container dcf-flex dcf-flex-center\">\n  <div class=\"dcf-width-1-1\">\n    <div class=\"dcf-pagination-resume\" [innerHTML]=\"locale + '.resume' | translate: {value0: current, value1: last}\"></div>\n    <div #paginationComponent class=\"dcf-pagination dcf-flex-center\">\n      <div\n        aria-label=\"previous\"\n        tabindex=\"0\"\n        (click)=\"previous()\"\n        (keydown.enter)=\"previous()\" [ngClass]=\"{'dcf-disabled': current === 1}\">\n        <ion-icon name=\"chevron-back-outline\" aria-hidden=\"true\"></ion-icon>\n      </div>\n      @for(page of pages; track page) {\n        <div tabindex=\"0\" [class]=\"page['class']\" (click)=\"navigate(page['index'])\"\n          (keydown.enter)=\"navigate(page['index'])\"\n          [ngClass]=\"{'dcf-active': current === page['index']}\">\n          <span class=\"page-item\">{{ page['text'] }}</span>\n        </div>\n      }\n      <div\n        tabindex=\"0\" (click)=\"next()\"\n        (keydown.enter)=\"next()\"\n        [ngClass]=\"{'dcf-disabled': current === last}\">\n        <ion-icon name=\"chevron-forward-outline\" aria-hidden=\"true\"></ion-icon>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".dcf-paginator-container{margin-bottom:1rem}.dcf-pagination{display:flex;flex-wrap:wrap;align-items:center;margin-left:0;padding:0;list-style:none}.dcf-pagination .page-item{display:flex;justify-content:center;align-items:center;text-align:center;font-weight:600;width:34px;line-height:34px;padding:0!important;border-radius:50%;box-sizing:border-box}@media (prefers-color-scheme: dark){.dcf-pagination .page-item{color:var(--dcf-color-gray-3)!important}}@media (prefers-color-scheme: light){.dcf-pagination .page-item{color:var(--dcf-color-gray-7)!important}}.dcf-pagination>*{flex:none;padding-left:0;position:relative;margin:0px .15rem;cursor:pointer}.dcf-pagination>*.dcf-disabled{pointer-events:none;touch-action:none;cursor:text}.dcf-pagination>*.dcf-active{pointer-events:none;touch-action:none}@media (prefers-color-scheme: light){.dcf-pagination>*.dcf-active .page-item{background:rgba(var(--dcf-color-primary-rgb),.15)}.dcf-pagination>*:hover:not(.dcf-active) *{color:var(--dcf-color-primary)!important}}@media (prefers-color-scheme: dark){.dcf-pagination>*.dcf-active .page-item{background:var(--dcf-color-gray-7)}.dcf-pagination>*:hover:not(.dcf-active) *{color:var(--dcf-color-primary)!important}}.dcf-pagination-resume{margin:1rem 0px;text-align:center}@media (prefers-color-scheme: light){.dcf-pagination-resume{color:var(--dcf-color-gray-8)}}\n"] }]
    }], () => [], { totalPages: [{
            type: Input,
            args: [{ required: true }]
        }], current: [{
            type: Input
        }], clickEvent: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaginationComponent, { className: "PaginationComponent", filePath: "components/pagination/pagination.component.ts", lineNumber: 62 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNwQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUE2QixNQUFNLGNBQWMsQ0FBQzs7Ozs7Ozs7O0lDTWpFLDhCQUV3RDtJQUR0RCxBQUR3QyxzTUFBUyx3QkFBYyxPQUFPLEVBQUUsS0FBQyx5TUFDeEQsd0JBQWMsT0FBTyxFQUFFLEtBQUM7SUFFekMsZ0NBQXdCO0lBQUEsWUFBa0I7SUFDNUMsQUFENEMsaUJBQU8sRUFDN0M7Ozs7SUFKWSwrQkFBdUI7SUFFdkMseUZBQXFEO0lBQzdCLGVBQWtCO0lBQWxCLHFDQUFrQjs7QUROcEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Q0c7QUFZSCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZ0JBQWdCO0lBb0V2RDs7OztPQUlHO0lBQ0g7UUFDRSxLQUFLLENBQUMscUJBQXFC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QUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RFLENBQUM7b0hBMVNVLG1CQUFtQjtvRUFBbkIsbUJBQW1COztZQzVEOUIsQUFERCw4QkFBeUUsYUFDN0M7WUFDekIseUJBQXVIOztZQUVySCxBQURGLGlDQUFpRSxhQUtZO1lBQXpFLEFBREEsbUlBQVMsY0FBVSxLQUFDLHNJQUNILGNBQVUsS0FBQztZQUM1Qiw4QkFBb0U7WUFDdEUsaUJBQU07WUFDTix3R0FNQztZQUNELCtCQUdpRDtZQUQvQyxBQURhLG9JQUFTLFVBQU0sS0FBQyx1SUFDWixVQUFNLEtBQUM7WUFFeEIsK0JBQXVFO1lBSS9FLEFBREUsQUFERSxBQURFLGlCQUFNLEVBQ0YsRUFDRixFQUNGOztZQTFCQSw0QkFBVTtZQUV1QixlQUE2RTtZQUE3RSw4SUFBNkU7WUFNL0UsZUFBMkM7WUFBM0Msd0VBQTJDO1lBRzFFLGVBTUM7WUFORCx3QkFNQztZQUlDLGVBQThDO1lBQTlDLCtFQUE4Qzs0QkRrQ2xELGdCQUFnQixnQ0FDaEIsT0FBTzs7aUZBS0UsbUJBQW1CO2NBWC9CLFNBQVM7MkJBQ0Usc0JBQXNCLFdBR3ZCO29CQUNQLGdCQUFnQjtvQkFDaEIsT0FBTztpQkFDUixjQUNXLElBQUk7b0JBMEJoQixVQUFVO2tCQURULEtBQUs7bUJBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO1lBYXpCLE9BQU87a0JBRE4sS0FBSztZQWdDTixVQUFVO2tCQURULE1BQU07O2tGQWpFSSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJb25JY29uIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvc3RhbmRhbG9uZSc7XG5pbXBvcnQgeyBhZGRJY29ucyB9IGZyb20gJ2lvbmljb25zJztcbmltcG9ydCB7IGNoZXZyb25CYWNrT3V0bGluZSwgY2hldnJvbkZvcndhcmRPdXRsaW5lIH0gZnJvbSAnaW9uaWNvbnMvaWNvbnMnO1xuaW1wb3J0IHsgRm9yQW5ndWxhck1vZHVsZSB9IGZyb20gJy4uLy4uL2Zvci1hbmd1bGFyLm1vZHVsZSc7XG5pbXBvcnQgeyBOZ3hCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZW5naW5lL05neEJhc2VDb21wb25lbnQnO1xuaW1wb3J0IHsgRXZlbnRDb25zdGFudHMsIEtleVZhbHVlLCBTdHJpbmdPckJvb2xlYW4gfSBmcm9tICcuLi8uLi9lbmdpbmUnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkN1c3RvbUV2ZW50IH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBIHBhZ2luYXRpb24gY29tcG9uZW50IGZvciBuYXZpZ2F0aW5nIHRocm91Z2ggbXVsdGlwbGUgcGFnZXMgb2YgY29udGVudC5cbiAqIEBzdW1tYXJ5IFRoaXMgY29tcG9uZW50IHByb3ZpZGVzIGEgdXNlciBpbnRlcmZhY2UgZm9yIHBhZ2luYXRlZCBjb250ZW50IG5hdmlnYXRpb24sXG4gKiBkaXNwbGF5aW5nIHBhZ2UgbnVtYmVycyBhbmQgbmF2aWdhdGlvbiBjb250cm9scy4gSXQgc3VwcG9ydHMgY3VzdG9taXphYmxlIHBhZ2UgY291bnRzLFxuICogY3VycmVudCBwYWdlIHRyYWNraW5nLCBhbmQgZW1pdHMgZXZlbnRzIHdoZW4gdXNlcnMgbmF2aWdhdGUgYmV0d2VlbiBwYWdlcy5cbiAqXG4gKiBUaGUgY29tcG9uZW50IGludGVsbGlnZW50bHkgaGFuZGxlcyBsYXJnZSBudW1iZXJzIG9mIHBhZ2VzIGJ5IHNob3dpbmcgYSBzdWJzZXQgb2YgcGFnZVxuICogbnVtYmVycyB3aXRoIGVsbGlwc2VzIHRvIGluZGljYXRlIHNraXBwZWQgcGFnZXMsIGVuc3VyaW5nIHRoZSBVSSByZW1haW5zIGNsZWFuIGFuZCB1c2FibGVcbiAqIGV2ZW4gd2l0aCBtYW55IHBhZ2VzLlxuICpcbiAqIEBtZXJtYWlkXG4gKiBzZXF1ZW5jZURpYWdyYW1cbiAqICAgcGFydGljaXBhbnQgVSBhcyBVc2VyXG4gKiAgIHBhcnRpY2lwYW50IFAgYXMgUGFnaW5hdGlvbkNvbXBvbmVudFxuICogICBwYXJ0aWNpcGFudCBFIGFzIEV4dGVybmFsIENvbXBvbmVudFxuICpcbiAqICAgVS0+PlA6IENsaWNrIHBhZ2UgbnVtYmVyXG4gKiAgIFAtPj5QOiBuYXZpZ2F0ZShwYWdlKVxuICogICBQLT4+UDogaGFuZGxlQ2xpY2soZGlyZWN0aW9uLCBwYWdlKVxuICogICBQLT4+RTogRW1pdCBjbGlja0V2ZW50IHdpdGggUGFnaW5hdGlvbkN1c3RvbUV2ZW50XG4gKlxuICogICBVLT4+UDogQ2xpY2sgbmV4dCBidXR0b25cbiAqICAgUC0+PlA6IG5leHQoKVxuICogICBQLT4+UDogaGFuZGxlQ2xpY2soJ25leHQnKVxuICogICBQLT4+RTogRW1pdCBjbGlja0V2ZW50IHdpdGggUGFnaW5hdGlvbkN1c3RvbUV2ZW50XG4gKlxuICogICBVLT4+UDogQ2xpY2sgcHJldmlvdXMgYnV0dG9uXG4gKiAgIFAtPj5QOiBwcmV2aW91cygpXG4gKiAgIFAtPj5QOiBoYW5kbGVDbGljaygncHJldmlvdXMnKVxuICogICBQLT4+RTogRW1pdCBjbGlja0V2ZW50IHdpdGggUGFnaW5hdGlvbkN1c3RvbUV2ZW50XG4gKlxuICogQGV4YW1wbGVcbiAqIDxuZ3gtZGVjYWYtcGFnaW5hdGlvblxuICogICBbcGFnZXNdPVwiMTBcIlxuICogICBbY3VycmVudF09XCIzXCJcbiAqICAgKGNsaWNrRXZlbnQpPVwiaGFuZGxlUGFnZUNoYW5nZSgkZXZlbnQpXCI+XG4gKiA8L25neC1kZWNhZi1wYWdpbmF0aW9uPlxuICpcbiAqIEBleHRlbmRzIHtOZ3hCYXNlQ29tcG9uZW50fVxuICogQGltcGxlbWVudHMge09uSW5pdH1cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWRlY2FmLXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BhZ2luYXRpb24uY29tcG9uZW50LnNjc3MnXSxcbiAgaW1wb3J0czogW1xuICAgIEZvckFuZ3VsYXJNb2R1bGUsXG4gICAgSW9uSWNvblxuICBdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQgZXh0ZW5kcyBOZ3hCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENvbnRyb2xzIHdoZXRoZXIgdGhlIGNvbXBvbmVudCB1c2VzIHRyYW5zbGF0aW9uIHNlcnZpY2VzLlxuICAgKiBAc3VtbWFyeSBXaGVuIHNldCB0byB0cnVlLCB0aGUgY29tcG9uZW50IHdpbGwgYXR0ZW1wdCB0byB1c2UgdHJhbnNsYXRpb24gc2VydmljZXNcbiAgICogZm9yIGFueSB0ZXh0IGNvbnRlbnQuIFRoaXMgYWxsb3dzIGZvciBpbnRlcm5hdGlvbmFsaXphdGlvbiBvZiB0aGUgcGFnaW5hdGlvbiBjb21wb25lbnQuXG4gICAqXG4gICAqIEB0eXBlIHtTdHJpbmdPckJvb2xlYW59XG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICogQG1lbWJlck9mIFBhZ2luYXRpb25Db21wb25lbnRcbiAgICovXG4gIG92ZXJyaWRlIHRyYW5zbGF0YWJsZTogU3RyaW5nT3JCb29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFRoZSB0b3RhbCBudW1iZXIgb2YgcGFnZXMgdG8gZGlzcGxheSBpbiB0aGUgcGFnaW5hdGlvbiBjb21wb25lbnQuXG4gICAqIEBzdW1tYXJ5IFNwZWNpZmllcyB0aGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzIGF2YWlsYWJsZSBmb3IgbmF2aWdhdGlvbi4gVGhpcyBpcyBhIHJlcXVpcmVkXG4gICAqIGlucHV0IHRoYXQgZGV0ZXJtaW5lcyBob3cgbWFueSBwYWdlIG51bWJlcnMgd2lsbCBiZSBnZW5lcmF0ZWQgYW5kIGRpc3BsYXllZC5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQHJlcXVpcmVkXG4gICAqIEBtZW1iZXJPZiBQYWdpbmF0aW9uQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoeyByZXF1aXJlZDogdHJ1ZSB9KVxuICB0b3RhbFBhZ2VzITogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhlIGN1cnJlbnRseSBhY3RpdmUgcGFnZSBudW1iZXIuXG4gICAqIEBzdW1tYXJ5IFNwZWNpZmllcyB3aGljaCBwYWdlIGlzIGN1cnJlbnRseSBhY3RpdmUgb3Igc2VsZWN0ZWQuIFRoaXMgdmFsdWUgaXMgdXNlZFxuICAgKiB0byBoaWdobGlnaHQgdGhlIGN1cnJlbnQgcGFnZSBpbiB0aGUgVUkgYW5kIGFzIGEgcmVmZXJlbmNlIHBvaW50IGZvciBuYXZpZ2F0aW9uLlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCAxXG4gICAqIEBtZW1iZXJPZiBQYWdpbmF0aW9uQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBjdXJyZW50ID0gMTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEFycmF5IG9mIHBhZ2Ugb2JqZWN0cyBmb3IgcmVuZGVyaW5nIGluIHRoZSB0ZW1wbGF0ZS5cbiAgICogQHN1bW1hcnkgQ29udGFpbnMgdGhlIHByb2Nlc3NlZCBwYWdlIGRhdGEgdXNlZCBmb3IgcmVuZGVyaW5nIHRoZSBwYWdpbmF0aW9uIFVJLlxuICAgKiBFYWNoIG9iamVjdCBpbmNsdWRlcyBhbiBpbmRleCAocGFnZSBudW1iZXIpIGFuZCB0ZXh0IHJlcHJlc2VudGF0aW9uLlxuICAgKlxuICAgKiBAdHlwZSB7S2V5VmFsdWVbXX1cbiAgICogQG1lbWJlck9mIFBhZ2luYXRpb25Db21wb25lbnRcbiAgICovXG4gIHBhZ2VzITogS2V5VmFsdWVbXTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFRoZSBsYXN0IHBhZ2UgbnVtYmVyIGluIHRoZSBwYWdpbmF0aW9uLlxuICAgKiBAc3VtbWFyeSBTdG9yZXMgdGhlIG51bWJlciBvZiB0aGUgbGFzdCBwYWdlIGZvciBib3VuZGFyeSBjaGVja2luZyBkdXJpbmcgbmF2aWdhdGlvbi5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQG1lbWJlck9mIFBhZ2luYXRpb25Db21wb25lbnRcbiAgICovXG4gIGxhc3QhOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBFdmVudCBlbWl0dGVyIGZvciBwYWdpbmF0aW9uIG5hdmlnYXRpb24gZXZlbnRzLlxuICAgKiBAc3VtbWFyeSBFbWl0cyBhIGN1c3RvbSBldmVudCB3aGVuIHVzZXJzIG5hdmlnYXRlIGJldHdlZW4gcGFnZXMsIGVpdGhlciBieSBjbGlja2luZ1xuICAgKiBvbiBwYWdlIG51bWJlcnMgb3IgdXNpbmcgdGhlIG5leHQvcHJldmlvdXMgYnV0dG9ucy4gVGhlIGV2ZW50IGNvbnRhaW5zIGluZm9ybWF0aW9uXG4gICAqIGFib3V0IHRoZSBuYXZpZ2F0aW9uIGRpcmVjdGlvbiBhbmQgdGhlIHRhcmdldCBwYWdlIG51bWJlci5cbiAgICpcbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxQYWdpbmF0aW9uQ3VzdG9tRXZlbnQ+fVxuICAgKiBAbWVtYmVyT2YgUGFnaW5hdGlvbkNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGNsaWNrRXZlbnQ6IEV2ZW50RW1pdHRlcjxQYWdpbmF0aW9uQ3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdpbmF0aW9uQ3VzdG9tRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAZGVzY3JpcHRpb24gSW5pdGlhbGl6ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIFBhZ2luYXRpb25Db21wb25lbnQuXG4gICAqIENhbGxzIHRoZSBwYXJlbnQgY29uc3RydWN0b3Igd2l0aCB0aGUgY29tcG9uZW50IG5hbWUgZm9yIGdlbmVyYXRlIGJhc2UgbG9jYWxlIHN0cmluZy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiUGFnaW5hdGlvbkNvbXBvbmVudFwiKTtcbiAgICAgYWRkSWNvbnMoe2NoZXZyb25CYWNrT3V0bGluZSwgY2hldnJvbkZvcndhcmRPdXRsaW5lfSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEluaXRpYWxpemVzIHRoZSBjb21wb25lbnQgYWZ0ZXIgQW5ndWxhciBzZXRzIHRoZSBpbnB1dCBwcm9wZXJ0aWVzLlxuICAgKiBAc3VtbWFyeSBTZXRzIHVwIHRoZSBjb21wb25lbnQgYnkgaW5pdGlhbGl6aW5nIHRoZSBsb2NhbGUgc2V0dGluZ3MgYmFzZWQgb24gdGhlXG4gICAqIHRyYW5zbGF0YWJsZSBwcm9wZXJ0eSwgZ2VuZXJhdGluZyB0aGUgcGFnZSBudW1iZXJzIGJhc2VkIG9uIHRoZSB0b3RhbCBwYWdlcyBhbmRcbiAgICogY3VycmVudCBwYWdlLCBhbmQgc3RvcmluZyB0aGUgbGFzdCBwYWdlIG51bWJlciBmb3IgYm91bmRhcnkgY2hlY2tpbmcuXG4gICAqXG4gICAqIEBtZXJtYWlkXG4gICAqIHNlcXVlbmNlRGlhZ3JhbVxuICAgKiAgIHBhcnRpY2lwYW50IEEgYXMgQW5ndWxhciBMaWZlY3ljbGVcbiAgICogICBwYXJ0aWNpcGFudCBQIGFzIFBhZ2luYXRpb25Db21wb25lbnRcbiAgICpcbiAgICogICBBLT4+UDogbmdPbkluaXQoKVxuICAgKiAgIFAtPj5QOiBnZXRMb2NhbGUodHJhbnNsYXRhYmxlKVxuICAgKiAgIFAtPj5QOiBTZXQgbG9jYWxlXG4gICAqICAgUC0+PlA6IGdldFBhZ2VzKGRhdGEsIGN1cnJlbnQpXG4gICAqICAgUC0+PlA6IFNldCBwYWdlcyBhcnJheVxuICAgKiAgIFAtPj5QOiBTZXQgbGFzdCBwYWdlIG51bWJlclxuICAgKlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICogQG1lbWJlck9mIFBhZ2luYXRpb25Db21wb25lbnRcbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubG9jYWxlID0gdGhpcy5nZXRMb2NhbGUodGhpcy50cmFuc2xhdGFibGUpO1xuICAgIHRoaXMucGFnZXMgPSB0aGlzLmdldFBhZ2VzKHRoaXMudG90YWxQYWdlcywgdGhpcy5jdXJyZW50KSBhcyBLZXlWYWx1ZVtdO1xuICAgIHRoaXMubGFzdCA9IHRoaXMudG90YWxQYWdlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gSGFuZGxlcyBjbGljayBldmVudHMgb24gcGFnaW5hdGlvbiBjb250cm9scy5cbiAgICogQHN1bW1hcnkgUHJvY2Vzc2VzIHVzZXIgaW50ZXJhY3Rpb25zIHdpdGggdGhlIHBhZ2luYXRpb24gY29tcG9uZW50LCB1cGRhdGluZyB0aGVcbiAgICogY3VycmVudCBwYWdlIGlmIHNwZWNpZmllZCBhbmQgZW1pdHRpbmcgYW4gZXZlbnQgd2l0aCBuYXZpZ2F0aW9uIGRldGFpbHMuIFRoaXMgbWV0aG9kXG4gICAqIGlzIGNhbGxlZCB3aGVuIHVzZXJzIGNsaWNrIG9uIHBhZ2UgbnVtYmVycyBvciBuYXZpZ2F0aW9uIGJ1dHRvbnMuXG4gICAqXG4gICAqIEBwYXJhbSB7KCduZXh0JyB8ICdwcmV2aW91cycpfSBkaXJlY3Rpb24gLSBUaGUgZGlyZWN0aW9uIG9mIG5hdmlnYXRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtwYWdlXSAtIE9wdGlvbmFsIHBhZ2UgbnVtYmVyIHRvIG5hdmlnYXRlIHRvIGRpcmVjdGx5XG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKlxuICAgKiBAbWVybWFpZFxuICAgKiBzZXF1ZW5jZURpYWdyYW1cbiAgICogICBwYXJ0aWNpcGFudCBVIGFzIFVzZXJcbiAgICogICBwYXJ0aWNpcGFudCBQIGFzIFBhZ2luYXRpb25Db21wb25lbnRcbiAgICogICBwYXJ0aWNpcGFudCBFIGFzIEV4dGVybmFsIENvbXBvbmVudFxuICAgKlxuICAgKiAgIFUtPj5QOiBDbGljayBwYWdpbmF0aW9uIGNvbnRyb2xcbiAgICogICBQLT4+UDogaGFuZGxlQ2xpY2soZGlyZWN0aW9uLCBwYWdlPylcbiAgICogICBhbHQgcGFnZSBpcyBwcm92aWRlZFxuICAgKiAgICAgUC0+PlA6IFVwZGF0ZSBjdXJyZW50IHBhZ2VcbiAgICogICBlbmRcbiAgICogICBQLT4+RTogRW1pdCBjbGlja0V2ZW50IHdpdGggZGlyZWN0aW9uIGFuZCBwYWdlXG4gICAqXG4gICAqIEBtZW1iZXJPZiBQYWdpbmF0aW9uQ29tcG9uZW50XG4gICAqL1xuICBoYW5kbGVDbGljayhkaXJlY3Rpb246ICduZXh0JyB8ICdwcmV2aW91cycsIHBhZ2U/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZihwYWdlKVxuICAgICAgdGhpcy5jdXJyZW50ID0gcGFnZTtcbiAgICB0aGlzLmNsaWNrRXZlbnQuZW1pdCh7XG4gICAgICBuYW1lOiBFdmVudENvbnN0YW50cy5DTElDSyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICBwYWdlOiB0aGlzLmN1cnJlbnRcbiAgICAgIH0sXG4gICAgICBjb21wb25lbnQ6IHRoaXMuY29tcG9uZW50TmFtZVxuICAgIH0gYXMgUGFnaW5hdGlvbkN1c3RvbUV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gR2VuZXJhdGVzIHRoZSBhcnJheSBvZiBwYWdlIG9iamVjdHMgZm9yIGRpc3BsYXkuXG4gICAqIEBzdW1tYXJ5IENyZWF0ZXMgYW4gYXJyYXkgb2YgcGFnZSBvYmplY3RzIGJhc2VkIG9uIHRoZSB0b3RhbCBudW1iZXIgb2YgcGFnZXMgYW5kXG4gICAqIHRoZSBjdXJyZW50IHBhZ2UuIEZvciBzbWFsbCBwYWdlIGNvdW50cyAo4omkNSksIGFsbCBwYWdlcyBhcmUgc2hvd24uIEZvciBsYXJnZXIgcGFnZVxuICAgKiBjb3VudHMsIGEgc3Vic2V0IGlzIHNob3duIHdpdGggZWxsaXBzZXMgdG8gaW5kaWNhdGUgc2tpcHBlZCBwYWdlcy4gVGhpcyBlbnN1cmVzXG4gICAqIHRoZSBwYWdpbmF0aW9uIFVJIHJlbWFpbnMgY2xlYW4gYW5kIHVzYWJsZSBldmVuIHdpdGggbWFueSBwYWdlcy5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRvdGFsIC0gVGhlIHRvdGFsIG51bWJlciBvZiBwYWdlc1xuICAgKiBAcGFyYW0ge251bWJlcn0gW2N1cnJlbnRdIC0gVGhlIGN1cnJlbnQgYWN0aXZlIHBhZ2UgKGRlZmF1bHRzIHRvIHRoaXMuY3VycmVudClcbiAgICogQHJldHVybnMge0tleVZhbHVlW119IEFycmF5IG9mIHBhZ2Ugb2JqZWN0cyB3aXRoIGluZGV4IGFuZCB0ZXh0IHByb3BlcnRpZXNcbiAgICpcbiAgICogQG1lcm1haWRcbiAgICogZmxvd2NoYXJ0IFREXG4gICAqICAgQVtTdGFydF0gLS0+IEJ7dG90YWwgPD0gNT99XG4gICAqICAgQiAtLT58WWVzfCBDW1Nob3cgYWxsIHBhZ2VzXVxuICAgKiAgIEIgLS0+fE5vfCBEW1Nob3cgZmlyc3QgcGFnZV1cbiAgICogICBEIC0tPiBFW1Nob3cgbGFzdCBwYWdlc11cbiAgICogICBFIC0tPiBGW0FkZCBlbGxpcHNlcyBmb3Igc2tpcHBlZCBwYWdlc11cbiAgICogICBDIC0tPiBHW1JldHVybiBwYWdlcyBhcnJheV1cbiAgICogICBGIC0tPiBHXG4gICAqXG4gICAqIEBtZW1iZXJPZiBQYWdpbmF0aW9uQ29tcG9uZW50XG4gICAqL1xuICBnZXRQYWdlcyh0b3RhbDogbnVtYmVyLCBjdXJyZW50PzogbnVtYmVyKTogS2V5VmFsdWVbXSB7XG4gICAgaWYgKCFjdXJyZW50KSBjdXJyZW50ID0gdGhpcy5jdXJyZW50O1xuXG4gICAgY29uc3QgcGFnZXM6IEtleVZhbHVlW10gPSBbXTtcblxuICAgIGZ1bmN0aW9uIGdldFBhZ2UoaW5kZXg6IG51bWJlciB8IG51bGwsIHRleHQgPSAnJywgY2xhenogPSAnYnV0dG9uJyk6IHZvaWQge1xuICAgICAgICBpZiAocGFnZXMuc29tZShpdGVtID0+IGl0ZW1bJ2luZGV4J10gPT09IGluZGV4KSkgcmV0dXJuO1xuICAgICAgICBwYWdlcy5wdXNoKHsgaW5kZXgsIHRleHQ6IGluZGV4ICE9IG51bGwgPyBpbmRleC50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJykgOiB0ZXh0LCBjbGFzczogY2xhenogfSk7XG4gICAgfVxuXG4gICAgaWYgKHRvdGFsIDw9IDUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdG90YWw7IGkrKykgZ2V0UGFnZShpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQWRpY2lvbmEgb3MgZG9pcyBwcmltZWlyb3NcbiAgICAgIGdldFBhZ2UoMSk7XG4gICAgICBnZXRQYWdlKDIpO1xuXG4gICAgICAvLyBBZGljaW9uYSBcIi4uLlwiIGVudHJlIG9zIGJsb2Nvc1xuICAgICAgaWYgKGN1cnJlbnQgJiYgY3VycmVudCA+IDMpIGdldFBhZ2UobnVsbCwgJy4uLicpO1xuXG4gICAgICAvLyBBZGljaW9uYSBhIHDDoWdpbmEgYXR1YWwgKHNlIGVzdGl2ZXIgbm8gbWVpbylcbiAgICAgIGlmIChjdXJyZW50ICYmIGN1cnJlbnQgPiAyICYmIGN1cnJlbnQgPCB0b3RhbCAtIDEpIGdldFBhZ2UoY3VycmVudCk7XG5cbiAgICAgIC8vIEFkaWNpb25hIFwiLi4uXCIgZW50cmUgb3MgYmxvY29zXG4gICAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50IDwgdG90YWwgLSAyKSBnZXRQYWdlKG51bGwsICcuLi4nICwgJ3NlcGFyYXRvcicpO1xuXG4gICAgICAvLyBBZGljaW9uYSBvcyBkb2lzIMO6bHRpbW9zXG4gICAgICBnZXRQYWdlKHRvdGFsIC0gMSk7XG4gICAgICBnZXRQYWdlKHRvdGFsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFnZXM7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEdldHMgdGhlIGN1cnJlbnQgYWN0aXZlIHBhZ2UgbnVtYmVyLlxuICAgKiBAc3VtbWFyeSBSZXR1cm5zIHRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyIHRoYXQgaXMgYWN0aXZlIGluIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudC5cbiAgICogVGhpcyBtZXRob2QgcHJvdmlkZXMgYSB3YXkgdG8gYWNjZXNzIHRoZSBjdXJyZW50IHBhZ2Ugc3RhdGUgZnJvbSBvdXRzaWRlIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyXG4gICAqIEBtZW1iZXJPZiBQYWdpbmF0aW9uQ29tcG9uZW50XG4gICAqL1xuICBnZXRDdXJyZW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gTmF2aWdhdGVzIHRvIHRoZSBuZXh0IHBhZ2UuXG4gICAqIEBzdW1tYXJ5IEluY3JlbWVudHMgdGhlIGN1cnJlbnQgcGFnZSBudW1iZXIgaWYgbm90IGF0IHRoZSBsYXN0IHBhZ2UgYW5kIHRyaWdnZXJzXG4gICAqIHRoZSBjbGljayBldmVudCBoYW5kbGVyIHdpdGggJ25leHQnIGRpcmVjdGlvbi4gVGhpcyBtZXRob2QgaXMgdHlwaWNhbGx5IGNhbGxlZFxuICAgKiB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgXCJuZXh0XCIgYnV0dG9uIGluIHRoZSBwYWdpbmF0aW9uIFVJLlxuICAgKlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICpcbiAgICogQG1lcm1haWRcbiAgICogc2VxdWVuY2VEaWFncmFtXG4gICAqICAgcGFydGljaXBhbnQgVSBhcyBVc2VyXG4gICAqICAgcGFydGljaXBhbnQgUCBhcyBQYWdpbmF0aW9uQ29tcG9uZW50XG4gICAqXG4gICAqICAgVS0+PlA6IENsaWNrIG5leHQgYnV0dG9uXG4gICAqICAgUC0+PlA6IG5leHQoKVxuICAgKiAgIGFsdCBwYWdlIDw9IG1heCBwYWdlc1xuICAgKiAgICAgUC0+PlA6IEluY3JlbWVudCBjdXJyZW50IHBhZ2VcbiAgICogICAgIFAtPj5QOiBoYW5kbGVDbGljaygnbmV4dCcpXG4gICAqICAgZW5kXG4gICAqXG4gICAqIEBtZW1iZXJPZiBQYWdpbmF0aW9uQ29tcG9uZW50XG4gICAqL1xuICBuZXh0KCk6IHZvaWQge1xuICAgIGNvbnN0IHBhZ2UgPSB0aGlzLmN1cnJlbnQgKyAxO1xuICAgIGlmKHBhZ2UgPD0gT2JqZWN0LmtleXModGhpcy5wYWdlcyk/Lmxlbmd0aCB8fCAwKSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSBwYWdlO1xuICAgICAgdGhpcy5oYW5kbGVDbGljaygnbmV4dCcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gTmF2aWdhdGVzIHRvIHRoZSBwcmV2aW91cyBwYWdlLlxuICAgKiBAc3VtbWFyeSBEZWNyZW1lbnRzIHRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyIGlmIG5vdCBhdCB0aGUgZmlyc3QgcGFnZSBhbmQgdHJpZ2dlcnNcbiAgICogdGhlIGNsaWNrIGV2ZW50IGhhbmRsZXIgd2l0aCAncHJldmlvdXMnIGRpcmVjdGlvbi4gVGhpcyBtZXRob2QgaXMgdHlwaWNhbGx5IGNhbGxlZFxuICAgKiB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgXCJwcmV2aW91c1wiIGJ1dHRvbiBpbiB0aGUgcGFnaW5hdGlvbiBVSS5cbiAgICpcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqXG4gICAqIEBtZXJtYWlkXG4gICAqIHNlcXVlbmNlRGlhZ3JhbVxuICAgKiAgIHBhcnRpY2lwYW50IFUgYXMgVXNlclxuICAgKiAgIHBhcnRpY2lwYW50IFAgYXMgUGFnaW5hdGlvbkNvbXBvbmVudFxuICAgKlxuICAgKiAgIFUtPj5QOiBDbGljayBwcmV2aW91cyBidXR0b25cbiAgICogICBQLT4+UDogcHJldmlvdXMoKVxuICAgKiAgIGFsdCBwYWdlID4gMFxuICAgKiAgICAgUC0+PlA6IERlY3JlbWVudCBjdXJyZW50IHBhZ2VcbiAgICogICAgIFAtPj5QOiBoYW5kbGVDbGljaygncHJldmlvdXMnKVxuICAgKiAgIGVuZFxuICAgKlxuICAgKiBAbWVtYmVyT2YgUGFnaW5hdGlvbkNvbXBvbmVudFxuICAgKi9cbiAgcHJldmlvdXMoKTogdm9pZCB7XG4gICAgY29uc3QgcGFnZSA9IHRoaXMuY3VycmVudCAtIDE7XG4gICAgaWYocGFnZSA+IDApIHtcbiAgICAgIHRoaXMuY3VycmVudCA9IHBhZ2U7XG4gICAgICB0aGlzLmhhbmRsZUNsaWNrKCdwcmV2aW91cycpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gTmF2aWdhdGVzIHRvIGEgc3BlY2lmaWMgcGFnZSBudW1iZXIuXG4gICAqIEBzdW1tYXJ5IFVwZGF0ZXMgdGhlIGN1cnJlbnQgcGFnZSB0byB0aGUgc3BlY2lmaWVkIHBhZ2UgbnVtYmVyIGFuZCB0cmlnZ2Vyc1xuICAgKiB0aGUgY2xpY2sgZXZlbnQgaGFuZGxlciB3aXRoIHRoZSBhcHByb3ByaWF0ZSBkaXJlY3Rpb24uIFRoaXMgbWV0aG9kIGlzIHR5cGljYWxseVxuICAgKiBjYWxsZWQgd2hlbiB0aGUgdXNlciBjbGlja3MgZGlyZWN0bHkgb24gYSBwYWdlIG51bWJlciBpbiB0aGUgcGFnaW5hdGlvbiBVSS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXIgfCBudWxsfSBwYWdlIC0gVGhlIHBhZ2UgbnVtYmVyIHRvIG5hdmlnYXRlIHRvXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKlxuICAgKiBAbWVybWFpZFxuICAgKiBzZXF1ZW5jZURpYWdyYW1cbiAgICogICBwYXJ0aWNpcGFudCBVIGFzIFVzZXJcbiAgICogICBwYXJ0aWNpcGFudCBQIGFzIFBhZ2luYXRpb25Db21wb25lbnRcbiAgICpcbiAgICogICBVLT4+UDogQ2xpY2sgcGFnZSBudW1iZXJcbiAgICogICBQLT4+UDogbmF2aWdhdGUocGFnZSlcbiAgICogICBhbHQgcGFnZSBpcyBub3QgbnVsbCBhbmQgZGlmZmVyZW50IGZyb20gY3VycmVudFxuICAgKiAgICAgUC0+PlA6IERldGVybWluZSBkaXJlY3Rpb24gKG5leHQvcHJldmlvdXMpXG4gICAqICAgICBQLT4+UDogaGFuZGxlQ2xpY2soZGlyZWN0aW9uLCBwYWdlKVxuICAgKiAgIGVuZFxuICAgKlxuICAgKiBAbWVtYmVyT2YgUGFnaW5hdGlvbkNvbXBvbmVudFxuICAgKi9cbiAgbmF2aWdhdGUocGFnZTogbnVtYmVyIHwgbnVsbCk6IHZvaWQge1xuICAgIGlmKHBhZ2UgIT09IG51bGwgJiYgdGhpcy5jdXJyZW50ICE9PSBwYWdlIGFzIG51bWJlcilcbiAgICAgIHRoaXMuaGFuZGxlQ2xpY2socGFnZSA+IHRoaXMuY3VycmVudCA/ICduZXh0JyA6ICdwcmV2aW91cycsIHBhZ2UpO1xuICB9XG59XG4iLCIgPGRpdiBbaWRdPVwidWlkXCIgY2xhc3M9XCJkY2YtcGFnaW5hdG9yLWNvbnRhaW5lciBkY2YtZmxleCBkY2YtZmxleC1jZW50ZXJcIj5cbiAgPGRpdiBjbGFzcz1cImRjZi13aWR0aC0xLTFcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZGNmLXBhZ2luYXRpb24tcmVzdW1lXCIgW2lubmVySFRNTF09XCJsb2NhbGUgKyAnLnJlc3VtZScgfCB0cmFuc2xhdGU6IHt2YWx1ZTA6IGN1cnJlbnQsIHZhbHVlMTogbGFzdH1cIj48L2Rpdj5cbiAgICA8ZGl2ICNwYWdpbmF0aW9uQ29tcG9uZW50IGNsYXNzPVwiZGNmLXBhZ2luYXRpb24gZGNmLWZsZXgtY2VudGVyXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGFyaWEtbGFiZWw9XCJwcmV2aW91c1wiXG4gICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgIChjbGljayk9XCJwcmV2aW91cygpXCJcbiAgICAgICAgKGtleWRvd24uZW50ZXIpPVwicHJldmlvdXMoKVwiIFtuZ0NsYXNzXT1cInsnZGNmLWRpc2FibGVkJzogY3VycmVudCA9PT0gMX1cIj5cbiAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJjaGV2cm9uLWJhY2stb3V0bGluZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaW9uLWljb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIEBmb3IocGFnZSBvZiBwYWdlczsgdHJhY2sgcGFnZSkge1xuICAgICAgICA8ZGl2IHRhYmluZGV4PVwiMFwiIFtjbGFzc109XCJwYWdlWydjbGFzcyddXCIgKGNsaWNrKT1cIm5hdmlnYXRlKHBhZ2VbJ2luZGV4J10pXCJcbiAgICAgICAgICAoa2V5ZG93bi5lbnRlcik9XCJuYXZpZ2F0ZShwYWdlWydpbmRleCddKVwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwieydkY2YtYWN0aXZlJzogY3VycmVudCA9PT0gcGFnZVsnaW5kZXgnXX1cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBhZ2UtaXRlbVwiPnt7IHBhZ2VbJ3RleHQnXSB9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgICA8ZGl2XG4gICAgICAgIHRhYmluZGV4PVwiMFwiIChjbGljayk9XCJuZXh0KClcIlxuICAgICAgICAoa2V5ZG93bi5lbnRlcik9XCJuZXh0KClcIlxuICAgICAgICBbbmdDbGFzc109XCJ7J2RjZi1kaXNhYmxlZCc6IGN1cnJlbnQgPT09IGxhc3R9XCI+XG4gICAgICAgIDxpb24taWNvbiBuYW1lPVwiY2hldnJvbi1mb3J3YXJkLW91dGxpbmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2lvbi1pY29uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=