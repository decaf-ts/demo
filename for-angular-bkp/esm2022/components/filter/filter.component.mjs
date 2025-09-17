import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ForAngularModule } from '../../for-angular.module';
import { NgxBaseComponent } from '../../engine/NgxBaseComponent';
import { IonChip, IonIcon, IonItem, IonLabel, IonSelect } from '@ionic/angular/standalone';
import { Dynamic } from '../../engine';
import { getWindowWidth, isDarkMode } from '../../helpers/utils';
import { debounceTime, fromEvent } from 'rxjs';
import { OrderDirection, Repository } from '@decaf-ts/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { addIcons } from 'ionicons';
import { chevronDownOutline, chevronUpOutline } from 'ionicons/icons';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular/standalone";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "@ngx-translate/core";
const _c0 = ["optionsFilterElement"];
function _forTrack0($index, $item) { return this.trackItemFn($index, $item == null ? null : $item["index"]); }
const _c1 = a0 => ({ "dcf-hidden": a0 });
function FilterComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-decaf-searchbar", 15);
    i0.ɵɵlistener("searchEvent", function FilterComponent_Conditional_0_Template_ngx_decaf_searchbar_searchEvent_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.handleSearch($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("emitEventToWindow", false)("debounce", 500);
} }
function FilterComponent_For_6_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-chip", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const filter_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("outline", true);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(filter_r4 == null ? null : filter_r4["index"]);
} }
function FilterComponent_For_6_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-chip", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const filter_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("outline", true);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(filter_r4 == null ? null : filter_r4["condition"]);
} }
function FilterComponent_For_6_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-chip", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "ion-icon", 18);
    i0.ɵɵlistener("click", function FilterComponent_For_6_Conditional_2_Template_ion_icon_click_2_listener() { i0.ɵɵrestoreView(_r5); const filter_r4 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.removeFilter(filter_r4 == null ? null : filter_r4["value"])); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const filter_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("outline", true);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", filter_r4 == null ? null : filter_r4["value"], " ");
} }
function FilterComponent_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, FilterComponent_For_6_Conditional_0_Template, 2, 2, "ion-chip", 16)(1, FilterComponent_For_6_Conditional_1_Template, 2, 2, "ion-chip", 16)(2, FilterComponent_For_6_Conditional_2_Template, 3, 2, "ion-chip", 17);
} if (rf & 2) {
    const filter_r4 = ctx.$implicit;
    i0.ɵɵconditional((filter_r4 == null ? null : filter_r4["index"]) ? 0 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional((filter_r4 == null ? null : filter_r4["condition"]) ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional((filter_r4 == null ? null : filter_r4["value"]) ? 2 : -1);
} }
function FilterComponent_Conditional_11_Conditional_3_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵlistener("keydown.enter", function FilterComponent_Conditional_11_Conditional_3_For_1_Template_div_keydown_enter_0_listener() { const key_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.selectOption(key_r7)); })("click", function FilterComponent_Conditional_11_Conditional_3_For_1_Template_div_click_0_listener() { const key_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.selectOption(key_r7)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const key_r7 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", key_r7, " ");
} }
function FilterComponent_Conditional_11_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, FilterComponent_Conditional_11_Conditional_3_For_1_Template, 2, 1, "div", 20, i0.ɵɵrepeaterTrackByIdentity);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵrepeater(ctx_r2.filteredOptions);
} }
function FilterComponent_Conditional_11_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵlistener("click", function FilterComponent_Conditional_11_Conditional_4_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(2); ctx_r2.filteredOptions = ctx_r2.options; return i0.ɵɵresetView(ctx_r2.value = ""); })("keydown.enter", function FilterComponent_Conditional_11_Conditional_4_Template_div_keydown_enter_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(2); ctx_r2.filteredOptions = ctx_r2.options; return i0.ɵɵresetView(ctx_r2.value = ""); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r2.locale + ".no_suggestions"), " ");
} }
function FilterComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", null, 1)(2, "div");
    i0.ɵɵtemplate(3, FilterComponent_Conditional_11_Conditional_3_Template, 2, 0)(4, FilterComponent_Conditional_11_Conditional_4_Template, 3, 3, "div", 19);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMap("dcf-dropdown " + (ctx_r2.options.length > 0 ? " dcf-active" : ""));
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r2.filteredOptions.length > 0 ? 3 : 4);
} }
function FilterComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "ion-button", 12);
    i0.ɵɵlistener("click", function FilterComponent_Conditional_12_Template_ion_button_click_1_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.clear()); });
    i0.ɵɵelement(2, "ion-icon", 23);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("color", !ctx_r2.isDarkMode ? "dark" : "medium");
} }
function FilterComponent_Conditional_16_Conditional_3_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵlistener("keydown.enter", function FilterComponent_Conditional_16_Conditional_3_For_1_Template_div_keydown_enter_0_listener() { const key_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.selectOption(key_r11)); })("click", function FilterComponent_Conditional_16_Conditional_3_For_1_Template_div_click_0_listener() { const key_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.selectOption(key_r11)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const key_r11 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", key_r11, " ");
} }
function FilterComponent_Conditional_16_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, FilterComponent_Conditional_16_Conditional_3_For_1_Template, 2, 1, "div", 20, i0.ɵɵrepeaterTrackByIdentity);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵrepeater(ctx_r2.filteredOptions);
} }
function FilterComponent_Conditional_16_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵlistener("click", function FilterComponent_Conditional_16_Conditional_4_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r2 = i0.ɵɵnextContext(2); ctx_r2.filteredOptions = ctx_r2.options; return i0.ɵɵresetView(ctx_r2.value = ""); })("keydown.enter", function FilterComponent_Conditional_16_Conditional_4_Template_div_keydown_enter_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r2 = i0.ɵɵnextContext(2); ctx_r2.filteredOptions = ctx_r2.options; return i0.ɵɵresetView(ctx_r2.value = ""); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r2.locale + ".no_suggestions"), " ");
} }
function FilterComponent_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", null, 1)(2, "div");
    i0.ɵɵtemplate(3, FilterComponent_Conditional_16_Conditional_3_Template, 2, 0)(4, FilterComponent_Conditional_16_Conditional_4_Template, 3, 3, "div", 19);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMap("dcf-dropdown " + (ctx_r2.options.length > 0 ? " dcf-active" : ""));
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r2.filteredOptions.length > 0 ? 3 : 4);
} }
function FilterComponent_Conditional_17_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-select-option", 26);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sort_r14 = ctx.$implicit;
    i0.ɵɵproperty("value", sort_r14);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 2, sort_r14));
} }
function FilterComponent_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 24)(2, "div", 4)(3, "ion-select", 25);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵlistener("ionChange", function FilterComponent_Conditional_17_Template_ion_select_ionChange_3_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.handleSortChange($event)); });
    i0.ɵɵrepeaterCreate(5, FilterComponent_Conditional_17_For_6_Template, 3, 4, "ion-select-option", 26, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 27)(8, "ion-button", 28);
    i0.ɵɵlistener("click", function FilterComponent_Conditional_17_Template_ion_button_click_8_listener() { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.handleSortDirectionChange()); });
    i0.ɵɵelement(9, "ion-icon", 29);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("value", ctx_r2.sortValue)("label", i0.ɵɵpipeBind1(4, 4, ctx_r2.locale + ".sort"));
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r2.sortBy);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("color", !ctx_r2.isDarkMode ? "primary" : "medium")("name", ctx_r2.sortDirection === "desc" ? "arrow-down-outline" : "arrow-up-outline");
} }
/**
 * @description Advanced filter component for creating dynamic search filters with step-by-step construction.
 * @summary This component provides a comprehensive filtering interface that allows users to build
 * complex search criteria using a three-step approach: select index → select condition → enter value.
 * It supports filtering by multiple field indexes, comparison conditions, and values, displaying
 * selected filters as removable chips. The component is responsive and includes auto-suggestions
 * with keyboard navigation support.
 *
 * @example
 * ```html
 * <ngx-decaf-filter
 *   [indexes]="['name', 'email', 'department', 'status']"
 *   [conditions]="['Equal', 'Contains', 'Greater Than', 'Less Than']"
 *   [sort]="['createdAt', 'updatedAt']"
 *   [disableSort]="false"
 *   (filterEvent)="onFiltersChanged($event)">
 * </ngx-decaf-filter>
 * ```
 *
 * @mermaid
 * sequenceDiagram
 *   participant U as User
 *   participant F as FilterComponent
 *   participant P as Parent Component
 *
 *   U->>F: Focus input field
 *   F->>F: handleFocus() - Show available indexes
 *   U->>F: Select index (e.g., "name")
 *   F->>F: addFilter() - Step 1 completed
 *   F->>F: Show available conditions
 *   U->>F: Select condition (e.g., "Contains")
 *   F->>F: addFilter() - Step 2 completed
 *   F->>F: Show value input prompt
 *   U->>F: Enter value and press Enter
 *   F->>F: addFilter() - Step 3 completed
 *   F->>F: Create complete filter object
 *   F->>P: Emit filterEvent with new filter array
 *   F->>F: Reset to step 1 for next filter
 *
 * @memberOf ForAngularModule
 */
let FilterComponent = class FilterComponent extends NgxBaseComponent {
    /**
     * @description Constructor for FilterComponent.
     * @summary Initializes a new instance of the FilterComponent.
     * Calls the parent constructor with the component name to establish base locale string generation
     * and internationalization support.
     *
     * @memberOf FilterComponent
     */
    constructor() {
        super("FilterComponent");
        /**
         * @description Available field indexes for filtering operations.
         * @summary Defines the list of field names that users can filter by. These represent
         * the data properties available for filtering operations. Each index corresponds to
         * a field in the data model that supports comparison operations.
         *
         * @type {string[]}
         * @default []
         * @memberOf FilterComponent
         */
        this.indexes = [];
        /**
         * @description Available comparison conditions for filters.
         * @summary Defines the list of comparison operators that can be used when creating filters.
         * These conditions determine how the filter value is compared against the field value.
         * Common conditions include equality, containment, and numerical comparison operations.
         *
         * @type {string[]}
         * @default []
         * @memberOf FilterComponent
         */
        this.conditions = ['Equal', 'Contains', 'Not Contains', 'Greater Than', 'Less Than', 'Not Equal'];
        /**
         * @description Available sorting options for the filtered data.
         * @summary Defines the list of field names that can be used for sorting the filtered results.
         * When disableSort is false, this array is automatically merged with the indexes array
         * to provide comprehensive sorting capabilities.
         *
         * @type {string[]}
         * @default []
         * @memberOf FilterComponent
         */
        this.sortBy = [];
        /**
         * @description Controls whether sorting functionality is disabled.
         * @summary When set to true, prevents the automatic merging of sort and indexes arrays,
         * effectively disabling sorting capabilities. This is useful when you want to provide
         * filtering without sorting options.
         *
         * @type {boolean}
         * @default false
         * @memberOf FilterComponent
         */
        this.disableSort = false;
        /**
         * @description Available options for the current filter step.
         * @summary Contains the list of options available for selection in the current step.
         * This array changes dynamically based on the current step: indexes → conditions → empty for value input.
         *
         * @type {string[]}
         * @default []
         * @memberOf FilterComponent
         */
        this.options = [];
        /**
         * @description Filtered options based on user input.
         * @summary Contains the subset of options that match the current user input for real-time
         * filtering. This array is updated as the user types to show only relevant suggestions
         * in the dropdown menu.
         *
         * @type {string[]}
         * @default []
         * @memberOf FilterComponent
         */
        this.filteredOptions = [];
        /**
         * @description Complete filter objects created by the user.
         * @summary Array of complete filter objects, each containing index, condition, and value properties.
         * These represent the active filters that can be applied to data operations.
         *
         * @type {KeyValue[]}
         * @default []
         * @memberOf FilterComponent
         */
        this.filterValue = [];
        /**
         * @description Current filter being constructed.
         * @summary Temporary object that accumulates filter properties (index, condition, value)
         * during the three-step filter creation process. Gets added to filterValue when complete.
         *
         * @type {KeyValue}
         * @default {}
         * @memberOf FilterComponent
         */
        this.lastFilter = {};
        /**
         * @description Current step in the filter creation process.
         * @summary Tracks the current step of filter creation: 1 = index selection, 2 = condition selection,
         * 3 = value input. Automatically resets to 1 after completing a filter.
         *
         * @type {number}
         * @default 1
         * @memberOf FilterComponent
         */
        this.step = 1;
        /**
         * @description Controls dropdown visibility state.
         * @summary Boolean flag that determines whether the options dropdown is currently visible.
         * Used to manage the dropdown's open/close state and coordinate with focus/blur events.
         *
         * @type {boolean}
         * @default false
         * @memberOf FilterComponent
         */
        this.dropdownOpen = false;
        /**
         * @description Current input field value.
         * @summary Stores the current text input value that the user is typing. This value is
         * bound to the input field and is cleared after each successful filter step completion.
         *
         * @type {string}
         * @default ''
         * @memberOf FilterComponent
         */
        this.value = '';
        /**
         * @description Current sorting field value.
         * @summary Stores the field name currently selected for sorting operations.
         * This value determines which field is used to order the filtered results.
         * Defaults to 'id' and can be changed through the sort dropdown selection.
         *
         * @type {string}
         * @default 'id'
         * @memberOf FilterComponent
         */
        this.sortValue = 'id';
        /**
         * @description Current sorting direction.
         * @summary Defines the direction of the sort operation - ascending or descending.
         * This value works in conjunction with sortValue to determine the complete
         * sorting configuration for filtered results.
         *
         * @type {OrderDirection}
         * @default OrderDirection.DSC
         * @memberOf FilterComponent
         */
        this.sortDirection = OrderDirection.DSC;
        /**
         * @description Browsing mode (dark or light).
         * @summary Indicates whether the dark mode theme is currently enabled.
         * Defaults to `false`.
         *
         * @type {boolean}
         * @memberOf FilterComponent
         */
        this.isDarkMode = false;
        /**
         * @description Event emitter for filter changes.
         * @summary Emits filter events when the user creates, modifies, or clears filters.
         * The emitted value contains an array of complete filter objects or undefined when
         * filters are cleared. Parent components listen to this event to update their data display.
         *
         * @type {EventEmitter<KeyValue[] | undefined>}
         * @memberOf FilterComponent
         */
        this.filterEvent = new EventEmitter();
        /**
         * @description Event emitter for search events.
         * @summary Emits search events when the user interacts with the searchbar.
         * @type {EventEmitter<string>}
         * @memberOf FilterComponent
         */
        this.searchEvent = new EventEmitter();
        addIcons({ chevronDownOutline, chevronUpOutline });
    }
    /**
     * @description Initializes the component after Angular first displays the data-bound properties.
     * @summary Sets up the component by initializing window width tracking, setting up resize event
     * subscriptions with debouncing, configuring sorting options, and calling the base initialization.
     * This method prepares the component for user interaction and responsive behavior.
     *
     * @mermaid
     * sequenceDiagram
     *   participant A as Angular Lifecycle
     *   participant F as FilterComponent
     *   participant W as Window
     *   participant R as RxJS
     *
     *   A->>F: ngOnInit()
     *   F->>W: getWindowWidth()
     *   W-->>F: Return current width
     *   F->>R: Setup resize subscription with debounce
     *   R-->>F: Subscription created
     *   alt disableSort is false
     *     F->>F: Merge sort and indexes arrays
     *   end
     *   F->>F: Call initialize()
     *
     * @returns {Promise<void>}
     * @memberOf FilterComponent
     */
    async ngOnInit() {
        this.isDarkMode = await isDarkMode();
        this.windowWidth = getWindowWidth();
        this.windowResizeSubscription = fromEvent(window, 'resize')
            .pipe(debounceTime(300))
            .subscribe(() => {
            this.windowWidth = getWindowWidth();
        });
        this.getIndexes();
        this.initialize();
    }
    /**
     * @description Retrieves and configures available indexes for filtering and sorting.
     * @summary Extracts field indexes from the model if available and merges them with
     * sorting options when sorting is enabled. This method sets up the available field
     * options for both filtering and sorting operations based on the model structure.
     *
     * @returns {void}
     * @memberOf FilterComponent
     */
    getIndexes() {
        if (this.model)
            this.indexes = Object.keys(Repository.indexes(this.model) || {});
        if (!this.disableSort)
            this.sortBy = [...this.sortBy, ...this.indexes];
    }
    /**
     * @description Cleanup method called when the component is destroyed.
     * @summary Unsubscribes from window resize events to prevent memory leaks.
     * This is essential for proper cleanup of RxJS subscriptions when the component
     * is removed from the DOM.
     *
     * @returns {void}
     * @memberOf FilterComponent
     */
    ngOnDestroy() {
        this.windowResizeSubscription.unsubscribe();
        this.clear();
    }
    /**
     * @description Handles input events from the text field.
     * @summary Processes user input and filters the available options based on the typed value.
     * This method provides real-time filtering of suggestions as the user types in the input field.
     *
     * @param {InputEvent} event - The input event containing the new value
     * @returns {void}
     * @memberOf FilterComponent
     */
    handleInput(event) {
        const { value } = event.target;
        this.filteredOptions = this.filterOptions(value);
    }
    /**
     * @description Handles focus events on the input field.
     * @summary Sets up the available options when the input field receives focus and opens the dropdown.
     * If no options are provided, automatically determines the appropriate options based on current step.
     * This method initializes the dropdown with contextually relevant suggestions.
     *
     * @param {string[]} options - Optional array of options to display
     * @returns {void}
     * @memberOf FilterComponent
     */
    handleFocus(options = []) {
        if (!options.length)
            options = this.getOptions();
        this.filteredOptions = this.options = options;
        this.dropdownOpen = true;
    }
    /**
     * @description Handles blur events on the input field with delayed closing.
     * @summary Manages the dropdown closing behavior with a delay to allow for option selection.
     * Uses a two-phase approach to prevent premature closing when users click on dropdown options.
     *
     * @param {boolean} close - Internal flag to control the closing phase
     * @returns {void}
     * @memberOf FilterComponent
     */
    handleBlur(close = false) {
        if (!close) {
            this.dropdownOpen = false;
            setTimeout(() => {
                this.handleBlur(true);
            }, 100);
        }
        else {
            if (!this.dropdownOpen && this.options.length) {
                setTimeout(() => {
                    this.options = [];
                    this.dropdownOpen = false;
                }, 50);
            }
        }
    }
    /**
     * @description Determines the appropriate options based on the current filter step.
     * @summary Returns the contextually relevant options for the current step in the filter creation process.
     * Step 1 shows indexes, Step 2 shows conditions, Step 3 shows no options (value input).
     *
     * @returns {string[]} Array of options appropriate for the current step
     * @memberOf FilterComponent
     */
    getOptions() {
        switch (this.step) {
            case 1:
                this.options = this.indexes;
                break;
            case 2:
                this.options = this.conditions;
                break;
            case 3:
                this.options = [];
                break;
        }
        return this.options;
    }
    /**
     * @description Adds a filter step or completes filter creation through a three-step process.
     * @summary Core method for building filters step by step: Step 1 (Index) → Step 2 (Condition) → Step 3 (Value).
     * When all steps are complete, creates a complete filter object and adds it to the filter collection.
     * Handles both keyboard events (Enter to submit) and programmatic calls.
     *
     * @param {string} value - The value to add for the current step
     * @param {CustomEvent} event - Optional event (KeyboardEvent triggers submission when value is empty)
     * @returns {void}
     *
     * @mermaid
     * sequenceDiagram
     *   participant U as User
     *   participant F as FilterComponent
     *
     *   U->>F: addFilter(value, event)
     *   F->>F: Trim and validate value
     *   alt KeyboardEvent && empty value
     *     F->>F: submit() - Send current filters
     *   else Valid value or step 3
     *     alt Step 1 (Index)
     *       F->>F: lastFilter.index = value
     *       F->>F: options = conditions
     *     else Step 2 (Condition)
     *       F->>F: lastFilter.condition = value
     *       F->>F: options = []
     *     else Step 3 (Value)
     *       F->>F: lastFilter.value = value
     *       F->>F: Add complete filter to filterValue
     *       F->>F: Reset step to 1
     *     end
     *     F->>F: Increment step
     *     F->>F: Clear input & focus
     *     F->>F: Show next options
     *   end
     *
     * @memberOf FilterComponent
     */
    addFilter(value, event) {
        value = value.trim();
        if (event instanceof KeyboardEvent && !value) {
            this.submit();
        }
        else {
            if ((value && (!(event instanceof KeyboardEvent)) || this.step === 3)) {
                const filter = this.lastFilter;
                switch (this.step) {
                    case 1:
                        filter['index'] = value;
                        this.options = this.conditions;
                        break;
                    case 2:
                        filter['condition'] = value;
                        this.options = [];
                        break;
                    case 3:
                        filter['value'] = value;
                        this.options = this.indexes;
                        break;
                }
                if (!this.filterValue.length) {
                    this.filterValue.push(filter);
                }
                else {
                    if (this.step === 1)
                        this.filterValue.push(filter);
                }
                if (this.step === 3) {
                    this.step = 0;
                    this.filterValue[this.filterValue.length - 1] = filter;
                    this.lastFilter = {};
                }
                this.step++;
                this.value = '';
                if (this.options.length)
                    this.handleFocus(this.options);
                this.component.nativeElement.focus();
            }
        }
    }
    /**
     * @description Selects an option from the dropdown suggestions.
     * @summary Handles option selection when a user clicks on a suggestion in the dropdown.
     * This method acts as a bridge between dropdown clicks and the main addFilter logic.
     *
     * @param {CustomEvent} event - The click event from the dropdown option
     * @param {string} value - The selected option value
     * @returns {void}
     * @memberOf FilterComponent
     */
    selectOption(value) {
        this.addFilter(value);
    }
    /**
     * @description Determines if a filter option can be individually removed.
     * @summary Checks whether a filter component should display a close icon for removal.
     * Only value options can be removed individually; index and condition options are part
     * of the complete filter structure and cannot be removed separately.
     *
     * @param {string} option - The filter option text to check
     * @returns {boolean} True if the option can be cleared individually, false otherwise
     * @memberOf FilterComponent
     */
    allowClear(option) {
        return this.indexes.indexOf(option) === -1 && this.conditions.indexOf(option) === -1;
    }
    /**
     * @description Removes a complete filter from the collection based on filter value.
     * @summary Removes a complete filter by matching the provided value against filter values
     * in the collection. Uses string normalization to handle accents and case differences.
     * After removal, resets the interface to show available indexes for new filter creation.
     *
     * @param {string} filter - The filter value to remove (matches against filter.value property)
     * @returns {void}
     *
     * @mermaid
     * sequenceDiagram
     *   participant U as User
     *   participant F as FilterComponent
     *
     *   U->>F: removeFilter(filterValue)
     *   F->>F: cleanString(filterValue)
     *   F->>F: Filter out matching filter objects
     *   F->>F: Clear input value
     *   F->>F: handleFocus(indexes) - Reset to index selection
     *   Note over F: Filter removed and UI reset
     *
     * @memberOf FilterComponent
     */
    removeFilter(filter) {
        function cleanString(filter) {
            return filter
                .toLowerCase() // convert all characters to lowercase
                .normalize("NFD") // separate accent marks from characters
                .replace(/[\u0300-\u036f]/g, "") // remove accent marks
                .replace(/\s+/g, ""); // remove all whitespace
        }
        this.value = "";
        this.filterValue = this.filterValue.filter((item) => item?.['value'] && cleanString(item?.['value']) !== cleanString(filter));
        if (this.filterValue.length === 0) {
            this.step = 1;
            this.lastFilter = {};
        }
        this.handleFocus(this.indexes);
    }
    /**
     * @description Resets the component to its initial state.
     * @summary Clears all filter data, options, and resets the step counter to 1.
     * This method provides a clean slate for new filter creation without emitting events.
     *
     * @returns {void}
     * @memberOf FilterComponent
     */
    reset() {
        this.options = this.filteredOptions = this.filterValue = [];
        this.step = 1;
        this.lastFilter = {};
        this.value = '';
        setTimeout(() => {
            this.submit();
        }, 100);
    }
    /**
     * @description Clears all filters and notifies parent components.
     * @summary Resets the component state and emits undefined to notify parent components
     * that all filters have been cleared. This triggers any connected data refresh logic.
     *
     * @param {string} value - Optional parameter (currently unused)
     * @returns {void}
     * @memberOf FilterComponent
     */
    clear(value) {
        if (!value)
            this.reset();
    }
    /**
     * @description Submits the current filter collection to parent components.
     * @summary Emits the current filter array to parent components when filters are ready
     * to be applied. Only emits if there are active filters. Clears options after submission.
     *
     * @returns {void}
     * @memberOf FilterComponent
     */
    submit() {
        this.filterEvent.emit({
            query: this.filterValue.length > 0 ? this.filterValue : undefined,
            sort: {
                value: this.sortValue,
                direction: this.sortDirection
            }
        });
        if (this.filterValue.length === 0)
            this.options = [];
    }
    /**
     * @description Toggles the sort direction between ascending and descending.
     * @summary Handles sort direction changes by toggling between ASC and DSC values.
     * When the direction changes, automatically triggers a submit to apply the new
     * sorting configuration to the filtered results.
     *
     * @returns {void}
     * @memberOf FilterComponent
     */
    handleSortDirectionChange() {
        const direction = this.sortDirection === OrderDirection.ASC ? OrderDirection.DSC : OrderDirection.ASC;
        if (direction !== this.sortDirection) {
            this.sortDirection = direction;
            this.submit();
        }
    }
    /**
     * @description Handles sort field selection changes from the dropdown.
     * @summary Processes sort field changes when users select a different field
     * from the sort dropdown. Updates the sortValue property and triggers
     * a submit to apply the new sorting configuration if the value has changed.
     *
     * @param {CustomEvent} event - The select change event containing the new sort field value
     * @returns {void}
     * @memberOf FilterComponent
     */
    handleSortChange(event) {
        const target = event.target;
        const value = target.value;
        if (value !== this.sortValue) {
            this.sortValue = value;
            this.submit();
        }
    }
    /**
     * @description Filters available options based on user input with visual highlighting.
     * @summary Performs real-time filtering of available options based on user input.
     * Also handles visual highlighting of matching options in the dropdown. Returns all
     * options if input is less than 2 characters for performance optimization.
     *
     * @param {string | null | undefined} value - The search value to filter by
     * @returns {string[]} Array of filtered options that match the input
     *
     * @mermaid
     * sequenceDiagram
     *   participant U as User
     *   participant F as FilterComponent
     *   participant D as DOM
     *
     *   U->>F: filterOptions(inputValue)
     *   alt inputValue < 2 characters
     *     F->>D: Remove existing highlights
     *     F-->>U: Return all options
     *   else inputValue >= 2 characters
     *     F->>D: Query all option elements
     *     F->>D: Add highlight to first matching option
     *     F->>F: Filter options by substring match
     *     F-->>U: Return filtered options
     *   end
     *
     * @memberOf FilterComponent
     */
    filterOptions(value) {
        const optionsElement = this.optionsFilterElement.nativeElement;
        if (!value?.length || !value || value.length < 2) {
            const filteredOption = optionsElement.querySelector('.dcf-filtering-item');
            if (filteredOption)
                filteredOption.classList.remove('dcf-filtering-item');
            return this.options;
        }
        const options = optionsElement.querySelectorAll('.dcf-item');
        for (const option of options) {
            const isActive = option.textContent?.toLowerCase().includes(value.toLowerCase());
            if (isActive) {
                option.classList.add('dcf-filtering-item');
                break;
            }
        }
        return this.options.filter((option) => option.toLowerCase().includes(value.toLowerCase()));
    }
    /**
     * @description Handles search events from the integrated searchbar component.
     * @summary Processes search input from the searchbar and emits search events
     * to parent components. This method acts as a bridge between the internal
     * searchbar component and external search event listeners.
     *
     * @param {string | undefined} value - The search value entered by the user
     * @returns {void}
     * @memberOf FilterComponent
     */
    handleSearch(value) {
        this.searchEvent.emit(value);
    }
    static { this.ɵfac = function FilterComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FilterComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FilterComponent, selectors: [["ngx-decaf-filter"]], viewQuery: function FilterComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.optionsFilterElement = _t.first);
        } }, inputs: { indexes: "indexes", conditions: "conditions", sortBy: "sortBy", disableSort: "disableSort" }, outputs: { filterEvent: "filterEvent", searchEvent: "searchEvent" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 18, vars: 14, consts: [["component", ""], ["optionsFilterElement", ""], [3, "emitEventToWindow", "debounce"], [1, "dcf-grid", "dcf-grid-small", "dcf-grid-match", "dcf-filter-grid", 3, "id", "ngClass"], [1, "dcf-width-expand"], [1, "dcf-filter"], [1, "dcf-input"], [1, "dcf-width-1-1"], ["fill", "none", "type", "text", 3, "ngModelChange", "keydown.enter", "keydown.backspace", "input", "click", "blur", "ngModel", "placeholder"], [3, "class"], [1, "dcf-icon-clear"], [1, "dcf-icon-search"], ["fill", "clear", "size", "small", 3, "click"], ["name", "search-outline", "slot", "icon-only", 3, "color"], [1, "dcf-width-1-5@m", "dcf-width-1-1", "dcf-sort-container"], [3, "searchEvent", "emitEventToWindow", "debounce"], [3, "outline"], [1, "dcf-filter-value", 3, "outline"], ["name", "close", "size", "small", 3, "click"], ["tabindex", "0", 1, "dcf-empty"], ["tabindex", "0", 1, "dcf-item"], ["tabindex", "0", 1, "dcf-item", 3, "keydown.enter", "click"], ["tabindex", "0", 1, "dcf-empty", 3, "click", "keydown.enter"], ["name", "trash-outline", "slot", "icon-only", 3, "color"], [1, "dcf-grid", "dcf-grid-collapse", "dcf-flex", "dcf-flex-middle", "dcf-grid-match"], ["toggleIcon", "chevron-down-outline", "expandedIcon", "chevron-up-outline", "interface", "popover", "label-placement", "floating", "fill", "outline", 1, "dcf-sort-select", 3, "ionChange", "value", "label"], [3, "value"], [1, "dcf-width-auto"], ["fill", "clear", 3, "click"], ["slot", "icon-only", 3, "color", "name"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵtemplate(0, FilterComponent_Conditional_0_Template, 1, 2, "ngx-decaf-searchbar", 2);
            i0.ɵɵelementStart(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6);
            i0.ɵɵrepeaterCreate(5, FilterComponent_For_6_Template, 3, 3, null, null, _forTrack0, true);
            i0.ɵɵelementStart(7, "div", 7)(8, "input", 8, 0);
            i0.ɵɵpipe(10, "translate");
            i0.ɵɵtwoWayListener("ngModelChange", function FilterComponent_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.value, $event) || (ctx.value = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("keydown.enter", function FilterComponent_Template_input_keydown_enter_8_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.addFilter(ctx.value, $event)); })("keydown.backspace", function FilterComponent_Template_input_keydown_backspace_8_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.clear(ctx.value)); })("input", function FilterComponent_Template_input_input_8_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.handleInput($event)); })("click", function FilterComponent_Template_input_click_8_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.handleFocus()); })("blur", function FilterComponent_Template_input_blur_8_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.handleBlur()); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(11, FilterComponent_Conditional_11_Template, 5, 3, "div", 9);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(12, FilterComponent_Conditional_12_Template, 3, 1, "div", 10);
            i0.ɵɵelementStart(13, "div", 11)(14, "ion-button", 12);
            i0.ɵɵlistener("click", function FilterComponent_Template_ion_button_click_14_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.submit()); });
            i0.ɵɵelement(15, "ion-icon", 13);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(16, FilterComponent_Conditional_16_Template, 5, 3, "div", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(17, FilterComponent_Conditional_17_Template, 10, 6, "div", 14);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵconditional(!ctx.indexes.length ? 0 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("id", ctx.uid)("ngClass", i0.ɵɵpureFunction1(12, _c1, !ctx.indexes.length));
            i0.ɵɵadvance(4);
            i0.ɵɵrepeater(ctx.filterValue);
            i0.ɵɵadvance(3);
            i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(10, 10, ctx.locale + (ctx.step === 3 ? ".type" : ".select")));
            i0.ɵɵtwoWayProperty("ngModel", ctx.value);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.windowWidth >= 768 ? 11 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.filterValue.length > 0 ? 12 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("color", !ctx.isDarkMode ? "dark" : "medium");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.windowWidth < 768 ? 16 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.disableSort ? 17 : -1);
        } }, dependencies: [ForAngularModule, i1.IonButton, i2.NgClass, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.TranslatePipe, IonChip,
            IonIcon,
            IonSelect,
            SearchbarComponent], styles: [".dcf-filter-grid[_ngcontent-%COMP%]{padding:0 .5rem;margin-top:.75rem;margin-bottom:.75rem}ion-select[_ngcontent-%COMP%]{min-height:44px!important}.dcf-hidden[_ngcontent-%COMP%]{display:none!important}.dcf-filter[_ngcontent-%COMP%]{display:flex;width:100%;min-height:40px;box-shadow:0 1px 2px #0a0d120d;border-radius:var(--dcf-border-radius);box-sizing:border-box}@media (prefers-color-scheme: light){.dcf-filter[_ngcontent-%COMP%]{border:1px solid var(--dcf-color-gray-3);background-color:#fff}.dcf-filter[_ngcontent-%COMP%]:focus-within{border-color:var(--dcf-color-primary);background-color:#fff}}@media (prefers-color-scheme: dark){.dcf-filter[_ngcontent-%COMP%]{border:1px solid var(--dcf-color-step-500)}.dcf-filter[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder, .dcf-filter[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:var(--dcf-color-gray-4)!important}.dcf-filter[_ngcontent-%COMP%]:hover{border-color:var(--dcf-color-gray-2)}.dcf-filter[_ngcontent-%COMP%]:focus-within{border-color:var(--dcf-color-gray-2)}}.dcf-filter[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{border-radius:6px;padding:0 8px!important;height:24px;min-height:24px;font-size:.75rem;font-style:normal;font-weight:500;flex-shrink:0;margin-right:2px;white-space:nowrap}@media (prefers-color-scheme: light){.dcf-filter[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{border:1px solid var(--dcf-color-gray-3);color:var(--dcf-color-gray-7)}.dcf-filter[_ngcontent-%COMP%]   ion-chip.dcf-filter-value[_ngcontent-%COMP%]{background:var(--dcf-color-gray-2);border-color:var(--dcf-color-gray-4)!important;color:var(--dcf-color-gray-8)!important}}@media (prefers-color-scheme: dark){.dcf-filter[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{border-color:var(--dcf-color-step-300);background:rgba(var(--dcf-color-medium-rgb),.1)}.dcf-filter[_ngcontent-%COMP%]   ion-chip.dcf-filter-value[_ngcontent-%COMP%]{background:rgba(var(--dcf-color-medium-rgb),.3)!important;border-color:var(--dcf-color-step-500)}}.dcf-filter[_ngcontent-%COMP%]   ion-chip.sc-ion-chip-md-h[_ngcontent-%COMP%], .dcf-filter[_ngcontent-%COMP%]   ion-chip.sc-ion-chip-ios-h[_ngcontent-%COMP%]{height:24px;min-height:24px}.dcf-filter[_ngcontent-%COMP%]   ion-chip.sc-ion-chip-md-h[_ngcontent-%COMP%]   .chip-native[_ngcontent-%COMP%], .dcf-filter[_ngcontent-%COMP%]   ion-chip.sc-ion-chip-ios-h[_ngcontent-%COMP%]   .chip-native[_ngcontent-%COMP%]{padding:0 8px!important;height:24px;min-height:24px}.dcf-filter[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{padding:0 4px;margin:0;font-size:.75rem;white-space:nowrap}.dcf-filter[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin:0 2px;font-size:.75rem}.dcf-filter[_ngcontent-%COMP%]   .dcf-input[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;overflow-x:auto;overflow-y:hidden;white-space:nowrap;padding-left:.5rem}.dcf-filter[_ngcontent-%COMP%]   .dcf-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{min-height:40px;min-width:100px;width:100%;font-size:1rem;border:none;outline:none;background:transparent;border:0px!important;outline:none!important}@media (prefers-color-scheme: light){.dcf-filter[_ngcontent-%COMP%]   .dcf-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:var(--dcf-color-gray-7)}}@media (prefers-color-scheme: dark){.dcf-filter[_ngcontent-%COMP%]   .dcf-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:var(--dcf-color-gray-1)}}.dcf-filter[_ngcontent-%COMP%]   .dcf-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border:0px!important;outline:none!important}.dcf-filter[_ngcontent-%COMP%]   .dcf-icon-clear[_ngcontent-%COMP%], .dcf-filter[_ngcontent-%COMP%]   .dcf-icon-search[_ngcontent-%COMP%]{display:flex;justify-content:center;text-align:center;align-items:center;min-width:40px}.dcf-filter[_ngcontent-%COMP%]   .dcf-icon-search[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.25rem}.dcf-sort-container[_ngcontent-%COMP%]{min-width:200px!important;width:auto}@media (min-width: 990px){.dcf-sort-container[_ngcontent-%COMP%]{max-width:20%!important}}@media (max-width: 680px){.dcf-sort-container[_ngcontent-%COMP%]{min-width:100%!important;margin:.75rem 0rem}}.dcf-dropdown[_ngcontent-%COMP%]{position:absolute;max-height:200px;overflow-y:auto;border-radius:4px;z-index:1000!important;min-width:200px;max-width:300px;display:none}@media (prefers-color-scheme: light){.dcf-dropdown[_ngcontent-%COMP%]{background-color:#fff}.dcf-dropdown.dcf-active[_ngcontent-%COMP%]{border:1px solid var(--dcf-color-gray-2)}}@media (prefers-color-scheme: dark){.dcf-dropdown[_ngcontent-%COMP%]{background-color:var(--dcf-item-background)}.dcf-dropdown.dcf-active[_ngcontent-%COMP%]{border:1px solid var(--dcf-color-step-600)}}.dcf-dropdown.dcf-active[_ngcontent-%COMP%]{display:block;margin-top:-3px;box-shadow:0 12px 16px -4px #0a0d1214,0 4px 6px -2px #0a0d1208,0 2px 2px -1px #0a0d120a!important;border-radius:var(--dcf-border-radius);padding:.5rem .25rem}@media (max-width: 768px){.dcf-dropdown.dcf-active[_ngcontent-%COMP%]{margin-top:55px}}.dcf-dropdown.dcf-active[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{cursor:pointer;height:35px;padding:.5rem 1rem;border:1px solid transparent;font-size:1rem;display:flex;align-items:center;border-radius:6px}@media (prefers-color-scheme: light){.dcf-dropdown.dcf-active[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{color:var(--dcf-color-gray-8)}.dcf-dropdown.dcf-active[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div.dcf-filtering-item[_ngcontent-%COMP%], .dcf-dropdown.dcf-active[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:only-child{border-color:var(--dcf-color-gray-3)}.dcf-dropdown.dcf-active[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div.dcf-filtering-item.dcf-empty[_ngcontent-%COMP%], .dcf-dropdown.dcf-active[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:only-child.dcf-empty{pointer-events:none;touch-action:none;cursor:text!important;border-color:transparent!important}.dcf-dropdown.dcf-active[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:hover{background-color:var(--dcf-color-gray-1)}}@media (prefers-color-scheme: dark){.dcf-dropdown.dcf-active[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{color:var(--dcf-color-gray-1)}.dcf-dropdown.dcf-active[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div.dcf-filtering-item[_ngcontent-%COMP%], .dcf-dropdown.dcf-active[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:only-child{border-color:var(--dcf-color-gray-5)}.dcf-dropdown.dcf-active[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div.dcf-filtering-item.dcf-empty[_ngcontent-%COMP%], .dcf-dropdown.dcf-active[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:only-child.dcf-empty{cursor:text!important;pointer-events:none;touch-action:none;border-color:transparent!important}.dcf-dropdown.dcf-active[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:hover{background-color:var(--dcf-color-gray-8)}}"] }); }
};
FilterComponent = __decorate([
    Dynamic(),
    __metadata("design:paramtypes", [])
], FilterComponent);
export { FilterComponent };
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterComponent, [{
        type: Component,
        args: [{ selector: 'ngx-decaf-filter', imports: [
                    ForAngularModule,
                    IonLabel,
                    IonItem,
                    IonChip,
                    IonIcon,
                    IonSelect,
                    IonIcon,
                    SearchbarComponent
                ], standalone: true, template: "\n@if(!indexes.length) {\n  <ngx-decaf-searchbar [emitEventToWindow]=\"false\" [debounce]=\"500\" (searchEvent)=\"handleSearch($event)\" />\n}\n\n<div [id]=\"uid\" class=\"dcf-grid dcf-grid-small dcf-grid-match dcf-filter-grid\" [ngClass]=\"{'dcf-hidden': !indexes.length}\">\n  <div class=\"dcf-width-expand\">\n    <div class=\"dcf-filter\">\n      <div class=\"dcf-input\">\n        @for(filter of filterValue; track trackItemFn($index, filter?.['index'])) {\n          @if(filter?.['index']) {\n            <ion-chip [outline]=\"true\">{{ filter?.['index'] }}</ion-chip>\n          }\n          @if(filter?.['condition']) {\n            <ion-chip [outline]=\"true\">{{ filter?.['condition'] }}</ion-chip>\n          }\n          @if(filter?.['value']) {\n            <ion-chip [outline]=\"true\" class=\"dcf-filter-value\">\n              {{ filter?.['value'] }}\n              <ion-icon name=\"close\" (click)=\"removeFilter(filter?.['value'])\" size=\"small\"></ion-icon>\n            </ion-chip>\n          }\n        }\n        <div class=\"dcf-width-1-1\">\n             <!-- [readonly]=\"step !== 3\" -->\n          <input\n            fill=\"none\"\n            [(ngModel)]=\"value\"\n            (keydown.enter)=\"addFilter(value, $event)\"\n            (keydown.backspace)=\"clear(value)\"\n            (input)=\"handleInput($event)\"\n            (click)=\"handleFocus()\"\n            (blur)=\"handleBlur()\"\n            type=\"text\"\n\n            placeholder=\"{{ locale + (step === 3 ? '.type' : '.select') | translate }}\"\n            #component\n          />\n          @if(windowWidth >= 768) {\n            <div [class]=\"'dcf-dropdown ' + (options.length > 0 ? ' dcf-active' : '')\" #optionsFilterElement>\n              <div>\n                @if(filteredOptions.length > 0) {\n                  @for(key of filteredOptions; track key) {\n                    <div\n                      class=\"dcf-item\"\n                      tabindex=\"0\"\n                      (keydown.enter)=\"selectOption(key)\"\n                      (click)=\"selectOption(key)\">\n                      {{ key }}\n                    </div>\n                  }\n                } @else {\n                  <div class=\"dcf-empty\"\n                    (click)=\"filteredOptions = options; value = ''\"\n                    tabindex=\"0\"\n                    (keydown.enter)=\"filteredOptions = options; value = ''\"\n                  >\n                    {{ locale + '.no_suggestions' | translate }}\n                  </div>\n                }\n              </div>\n            </div>\n          }\n        </div>\n      </div>\n      @if(filterValue.length > 0) {\n        <div class=\"dcf-icon-clear\">\n          <ion-button fill=\"clear\" size=\"small\" (click)=\"clear()\">\n            <ion-icon name=\"trash-outline\" [color]=\"!isDarkMode ? 'dark' : 'medium'\" slot=\"icon-only\"></ion-icon>\n          </ion-button>\n        </div>\n      }\n      <div class=\"dcf-icon-search\">\n        <ion-button fill=\"clear\" size=\"small\" (click)=\"submit()\">\n          <ion-icon name=\"search-outline\" [color]=\"!isDarkMode ? 'dark' : 'medium'\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n    @if(windowWidth < 768) {\n      <div [class]=\"'dcf-dropdown ' + (options.length > 0 ? ' dcf-active' : '')\" #optionsFilterElement>\n        <div>\n          @if(filteredOptions.length > 0) {\n            @for(key of filteredOptions; track key) {\n              <div\n                class=\"dcf-item\"\n                tabindex=\"0\"\n                (keydown.enter)=\"selectOption(key)\"\n                (click)=\"selectOption(key)\">\n                {{ key }}\n              </div>\n            }\n          } @else {\n            <div class=\"dcf-empty\"\n            (click)=\"filteredOptions = options; value = ''\"\n            tabindex=\"0\"\n            (keydown.enter)=\"filteredOptions = options; value = ''\"\n            >\n              {{ locale + '.no_suggestions' | translate }}\n            </div>\n          }\n        </div>\n      </div>\n    }\n  </div>\n  @if(!disableSort) {\n    <div class=\"dcf-width-1-5@m dcf-width-1-1 dcf-sort-container\">\n      <div class=\"dcf-grid dcf-grid-collapse dcf-flex dcf-flex-middle dcf-grid-match\">\n        <div class=\"dcf-width-expand\">\n          <ion-select\n              toggleIcon=\"chevron-down-outline\"\n              expandedIcon=\"chevron-up-outline\"\n              class=\"dcf-sort-select\"\n              (ionChange)=\"handleSortChange($event)\"\n              interface=\"popover\"\n              [value]=\"sortValue\"\n              label-placement=\"floating\"\n              fill=\"outline\"\n              [label]=\"locale + '.sort' | translate\"\n            >\n            @for(sort of sortBy; track sort) {\n\n              <ion-select-option [value]=\"sort\">{{ sort | translate }}</ion-select-option>\n            }\n          </ion-select>\n        </div>\n        <div class=\"dcf-width-auto\">\n          <ion-button (click)=\"handleSortDirectionChange()\" fill=\"clear\">\n            <ion-icon slot=\"icon-only\" [color]=\"!isDarkMode ? 'primary' : 'medium'\" [name]=\"sortDirection === 'desc' ? 'arrow-down-outline' : 'arrow-up-outline'\"></ion-icon>\n          </ion-button>\n        </div>\n      </div>\n    </div>\n  }\n</div>\n\n\n", styles: [".dcf-filter-grid{padding:0 .5rem;margin-top:.75rem;margin-bottom:.75rem}ion-select{min-height:44px!important}.dcf-hidden{display:none!important}.dcf-filter{display:flex;width:100%;min-height:40px;box-shadow:0 1px 2px #0a0d120d;border-radius:var(--dcf-border-radius);box-sizing:border-box}@media (prefers-color-scheme: light){.dcf-filter{border:1px solid var(--dcf-color-gray-3);background-color:#fff}.dcf-filter:focus-within{border-color:var(--dcf-color-primary);background-color:#fff}}@media (prefers-color-scheme: dark){.dcf-filter{border:1px solid var(--dcf-color-step-500)}.dcf-filter ::-webkit-input-placeholder,.dcf-filter ::placeholder{color:var(--dcf-color-gray-4)!important}.dcf-filter:hover{border-color:var(--dcf-color-gray-2)}.dcf-filter:focus-within{border-color:var(--dcf-color-gray-2)}}.dcf-filter ion-chip{border-radius:6px;padding:0 8px!important;height:24px;min-height:24px;font-size:.75rem;font-style:normal;font-weight:500;flex-shrink:0;margin-right:2px;white-space:nowrap}@media (prefers-color-scheme: light){.dcf-filter ion-chip{border:1px solid var(--dcf-color-gray-3);color:var(--dcf-color-gray-7)}.dcf-filter ion-chip.dcf-filter-value{background:var(--dcf-color-gray-2);border-color:var(--dcf-color-gray-4)!important;color:var(--dcf-color-gray-8)!important}}@media (prefers-color-scheme: dark){.dcf-filter ion-chip{border-color:var(--dcf-color-step-300);background:rgba(var(--dcf-color-medium-rgb),.1)}.dcf-filter ion-chip.dcf-filter-value{background:rgba(var(--dcf-color-medium-rgb),.3)!important;border-color:var(--dcf-color-step-500)}}.dcf-filter ion-chip.sc-ion-chip-md-h,.dcf-filter ion-chip.sc-ion-chip-ios-h{height:24px;min-height:24px}.dcf-filter ion-chip.sc-ion-chip-md-h .chip-native,.dcf-filter ion-chip.sc-ion-chip-ios-h .chip-native{padding:0 8px!important;height:24px;min-height:24px}.dcf-filter ion-chip ion-label{padding:0 4px;margin:0;font-size:.75rem;white-space:nowrap}.dcf-filter ion-chip ion-icon{margin:0 2px;font-size:.75rem}.dcf-filter .dcf-input{width:100%;display:flex;align-items:center;overflow-x:auto;overflow-y:hidden;white-space:nowrap;padding-left:.5rem}.dcf-filter .dcf-input input{min-height:40px;min-width:100px;width:100%;font-size:1rem;border:none;outline:none;background:transparent;border:0px!important;outline:none!important}@media (prefers-color-scheme: light){.dcf-filter .dcf-input input{color:var(--dcf-color-gray-7)}}@media (prefers-color-scheme: dark){.dcf-filter .dcf-input input{color:var(--dcf-color-gray-1)}}.dcf-filter .dcf-input input:focus{border:0px!important;outline:none!important}.dcf-filter .dcf-icon-clear,.dcf-filter .dcf-icon-search{display:flex;justify-content:center;text-align:center;align-items:center;min-width:40px}.dcf-filter .dcf-icon-search ion-icon{font-size:1.25rem}.dcf-sort-container{min-width:200px!important;width:auto}@media (min-width: 990px){.dcf-sort-container{max-width:20%!important}}@media (max-width: 680px){.dcf-sort-container{min-width:100%!important;margin:.75rem 0rem}}.dcf-dropdown{position:absolute;max-height:200px;overflow-y:auto;border-radius:4px;z-index:1000!important;min-width:200px;max-width:300px;display:none}@media (prefers-color-scheme: light){.dcf-dropdown{background-color:#fff}.dcf-dropdown.dcf-active{border:1px solid var(--dcf-color-gray-2)}}@media (prefers-color-scheme: dark){.dcf-dropdown{background-color:var(--dcf-item-background)}.dcf-dropdown.dcf-active{border:1px solid var(--dcf-color-step-600)}}.dcf-dropdown.dcf-active{display:block;margin-top:-3px;box-shadow:0 12px 16px -4px #0a0d1214,0 4px 6px -2px #0a0d1208,0 2px 2px -1px #0a0d120a!important;border-radius:var(--dcf-border-radius);padding:.5rem .25rem}@media (max-width: 768px){.dcf-dropdown.dcf-active{margin-top:55px}}.dcf-dropdown.dcf-active>div>div{cursor:pointer;height:35px;padding:.5rem 1rem;border:1px solid transparent;font-size:1rem;display:flex;align-items:center;border-radius:6px}@media (prefers-color-scheme: light){.dcf-dropdown.dcf-active>div>div{color:var(--dcf-color-gray-8)}.dcf-dropdown.dcf-active>div>div.dcf-filtering-item,.dcf-dropdown.dcf-active>div>div:only-child{border-color:var(--dcf-color-gray-3)}.dcf-dropdown.dcf-active>div>div.dcf-filtering-item.dcf-empty,.dcf-dropdown.dcf-active>div>div:only-child.dcf-empty{pointer-events:none;touch-action:none;cursor:text!important;border-color:transparent!important}.dcf-dropdown.dcf-active>div>div:hover{background-color:var(--dcf-color-gray-1)}}@media (prefers-color-scheme: dark){.dcf-dropdown.dcf-active>div>div{color:var(--dcf-color-gray-1)}.dcf-dropdown.dcf-active>div>div.dcf-filtering-item,.dcf-dropdown.dcf-active>div>div:only-child{border-color:var(--dcf-color-gray-5)}.dcf-dropdown.dcf-active>div>div.dcf-filtering-item.dcf-empty,.dcf-dropdown.dcf-active>div>div:only-child.dcf-empty{cursor:text!important;pointer-events:none;touch-action:none;border-color:transparent!important}.dcf-dropdown.dcf-active>div>div:hover{background-color:var(--dcf-color-gray-8)}}\n"] }]
    }], () => [], { optionsFilterElement: [{
            type: ViewChild,
            args: ['optionsFilterElement', { read: ElementRef, static: false }]
        }], indexes: [{
            type: Input
        }], conditions: [{
            type: Input
        }], sortBy: [{
            type: Input
        }], disableSort: [{
            type: Input
        }], filterEvent: [{
            type: Output
        }], searchEvent: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FilterComponent, { className: "FilterComponent", filePath: "components/filter/filter.component.ts", lineNumber: 72 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsU0FBUyxFQUFHLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDMUYsT0FBTyxFQUFFLE9BQU8sRUFBa0MsTUFBTSxjQUFjLENBQUM7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OzRDQ0Y5RCxzREFBNkIsT0FBTyxFQUFFOzs7O0lBUDVDLCtDQUF5RztJQUF2QyxrTkFBZSwyQkFBb0IsS0FBQztJQUF0RyxpQkFBeUc7O0lBQXhELEFBQTVCLHlDQUEyQixpQkFBaUI7OztJQVN2RCxvQ0FBMkI7SUFBQSxZQUF1QjtJQUFBLGlCQUFXOzs7SUFBbkQsOEJBQWdCO0lBQUMsY0FBdUI7SUFBdkIsbUVBQXVCOzs7SUFHbEQsb0NBQTJCO0lBQUEsWUFBMkI7SUFBQSxpQkFBVzs7O0lBQXZELDhCQUFnQjtJQUFDLGNBQTJCO0lBQTNCLHVFQUEyQjs7OztJQUd0RCxvQ0FBb0Q7SUFDbEQsWUFDQTtJQUFBLG9DQUE4RTtJQUF2RCwyT0FBUyx5REFBc0IsT0FBTyxFQUFFLEtBQUM7SUFDbEUsQUFEZ0YsaUJBQVcsRUFDaEY7OztJQUhELDhCQUFnQjtJQUN4QixjQUNBO0lBREEsOEVBQ0E7OztJQUhKLEFBSEEsQUFIQSxvRkFBd0IsdUVBR0ksdUVBR0o7OztJQU54QiwwRUFFQztJQUNELGNBRUM7SUFGRCw4RUFFQztJQUNELGNBS0M7SUFMRCwwRUFLQzs7OztJQXNCUywrQkFJOEI7SUFBNUIsQUFEQSwrT0FBaUIsMkJBQWlCLEtBQUMsa05BQzFCLDJCQUFpQixLQUFDO0lBQzNCLFlBQ0Y7SUFBQSxpQkFBTTs7O0lBREosY0FDRjtJQURFLHVDQUNGOzs7SUFQRixrSUFRQzs7O0lBUkQscUNBUUM7Ozs7SUFFRCwrQkFJQztJQURDLEFBRkEsd1BBQTRDLEVBQUUsS0FBQywyUEFFSyxFQUFFLEtBQUM7SUFFdkQsWUFDRjs7SUFBQSxpQkFBTTs7O0lBREosY0FDRjtJQURFLHdGQUNGOzs7SUFsQkosQUFERixvQ0FBaUcsVUFDMUY7SUFXRCxBQVZGLDZFQUFpQywyRUFVeEI7SUFVYixBQURFLGlCQUFNLEVBQ0Y7OztJQXRCRCxpRkFBcUU7SUFFdEUsZUFrQkM7SUFsQkQsMkRBa0JDOzs7O0lBUVAsQUFERiwrQkFBNEIscUJBQzhCO0lBQWxCLHdMQUFTLGNBQU8sS0FBQztJQUNyRCwrQkFBcUc7SUFFekcsQUFERSxpQkFBYSxFQUNUOzs7SUFGNkIsZUFBeUM7SUFBekMsOERBQXlDOzs7O0lBZXRFLCtCQUk4QjtJQUE1QixBQURBLGlQQUFpQiw0QkFBaUIsS0FBQyxvTkFDMUIsNEJBQWlCLEtBQUM7SUFDM0IsWUFDRjtJQUFBLGlCQUFNOzs7SUFESixjQUNGO0lBREUsd0NBQ0Y7OztJQVBGLGtJQVFDOzs7SUFSRCxxQ0FRQzs7OztJQUVELCtCQUlDO0lBREQsQUFGQSx5UEFBNEMsRUFBRSxLQUFDLDRQQUVLLEVBQUUsS0FBQztJQUVyRCxZQUNGOztJQUFBLGlCQUFNOzs7SUFESixjQUNGO0lBREUsd0ZBQ0Y7OztJQWxCSixBQURGLG9DQUFpRyxVQUMxRjtJQVdELEFBVkYsNkVBQWlDLDJFQVV4QjtJQVViLEFBREUsaUJBQU0sRUFDRjs7O0lBdEJELGlGQUFxRTtJQUV0RSxlQWtCQztJQWxCRCwyREFrQkM7OztJQXNCRyw2Q0FBa0M7SUFBQSxZQUFzQjs7SUFBQSxpQkFBb0I7OztJQUF6RCxnQ0FBYztJQUFDLGNBQXNCO0lBQXRCLG9EQUFzQjs7OztJQWI1RCxBQURGLEFBREYsQUFERiwrQkFBOEQsY0FDb0IsYUFDaEQscUJBV3pCOztJQU5DLHVNQUFhLCtCQUF3QixLQUFDO0lBT3hDLGtJQUdDO0lBRUwsQUFERSxpQkFBYSxFQUNUO0lBRUosQUFERiwrQkFBNEIscUJBQ3FDO0lBQW5ELHlMQUFTLGtDQUEyQixLQUFDO0lBQy9DLCtCQUFpSztJQUl6SyxBQURFLEFBREUsQUFERSxpQkFBYSxFQUNULEVBQ0YsRUFDRjs7O0lBakJJLGVBQW1CO0lBR25CLEFBSEEsd0NBQW1CLHdEQUdtQjtJQUV4QyxlQUdDO0lBSEQsNEJBR0M7SUFLMEIsZUFBNEM7SUFBQyxBQUE3QyxpRUFBNEMscUZBQThFOztBRGxIaks7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Q0c7QUFrQkksSUFBTSxlQUFlLEdBQXJCLE1BQU0sZUFBZ0IsU0FBUSxnQkFBZ0I7SUE4Tm5EOzs7Ozs7O09BT0c7SUFDSDtRQUNFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBek4zQjs7Ozs7Ozs7O1dBU0c7UUFFSCxZQUFPLEdBQWEsRUFBRSxDQUFDO1FBRXZCOzs7Ozs7Ozs7V0FTRztRQUVILGVBQVUsR0FBYSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFdkc7Ozs7Ozs7OztXQVNHO1FBRUgsV0FBTSxHQUFhLEVBQUUsQ0FBQztRQUV0Qjs7Ozs7Ozs7O1dBU0c7UUFFSCxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQWE3Qjs7Ozs7Ozs7V0FRRztRQUNILFlBQU8sR0FBYSxFQUFFLENBQUM7UUFFdkI7Ozs7Ozs7OztXQVNHO1FBQ0gsb0JBQWUsR0FBYSxFQUFFLENBQUM7UUFFL0I7Ozs7Ozs7O1dBUUc7UUFDSCxnQkFBVyxHQUF1QixFQUFFLENBQUM7UUFFckM7Ozs7Ozs7O1dBUUc7UUFDSCxlQUFVLEdBQXFCLEVBQUUsQ0FBQztRQUVsQzs7Ozs7Ozs7V0FRRztRQUNILFNBQUksR0FBVyxDQUFDLENBQUM7UUFFakI7Ozs7Ozs7O1dBUUc7UUFDSCxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUU5Qjs7Ozs7Ozs7V0FRRztRQUNILFVBQUssR0FBVyxFQUFFLENBQUM7UUFFbkI7Ozs7Ozs7OztXQVNHO1FBQ0gsY0FBUyxHQUFXLElBQUksQ0FBQztRQUV6Qjs7Ozs7Ozs7O1dBU0c7UUFDSCxrQkFBYSxHQUFtQixjQUFjLENBQUMsR0FBRyxDQUFDO1FBYW5EOzs7Ozs7O1dBT0c7UUFDSCxlQUFVLEdBQVksS0FBSyxDQUFDO1FBRTVCOzs7Ozs7OztXQVFHO1FBRUgsZ0JBQVcsR0FBMkMsSUFBSSxZQUFZLEVBQTRCLENBQUM7UUFFbkc7Ozs7O1dBS0c7UUFFSCxnQkFBVyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBYTdELFFBQVEsQ0FBQyxFQUFDLGtCQUFrQixFQUFFLGdCQUFnQixFQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F5Qkc7SUFDSCxLQUFLLENBQUMsUUFBUTtRQUNaLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxVQUFVLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsRUFBWSxDQUFDO1FBQzlDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQzthQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZCLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsRUFBWSxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCxVQUFVO1FBQ1IsSUFBRyxJQUFJLENBQUMsS0FBSztZQUNYLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM1RSxJQUFHLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBR0Q7Ozs7Ozs7O09BUUc7SUFDSCxXQUFXO1FBQ1QsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILFdBQVcsQ0FBQyxLQUFpQjtRQUMzQixNQUFNLEVBQUMsS0FBSyxFQUFDLEdBQUcsS0FBSyxDQUFDLE1BQTBCLENBQUM7UUFDL0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSCxXQUFXLENBQUMsVUFBcUIsRUFBRTtRQUNqQyxJQUFHLENBQUMsT0FBTyxDQUFDLE1BQU07WUFDakIsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzlDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILFVBQVUsQ0FBQyxRQUFpQixLQUFLO1FBQy9CLElBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNWLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDVixDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzdDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUM1QixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDVCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsVUFBVTtRQUNULFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pCLEtBQUssQ0FBQztnQkFDSixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQzVCLE1BQU07WUFDUixLQUFLLENBQUM7Z0JBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUMvQixNQUFNO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO2dCQUNsQixNQUFNO1FBQ1YsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUNyQixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FxQ0c7SUFDSCxTQUFTLENBQUMsS0FBYSxFQUFFLEtBQW1CO1FBQzFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBRyxLQUFLLFlBQVksYUFBYSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDNUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUM7YUFBTSxDQUFDO1lBQ0wsSUFBRyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFlBQVksYUFBYSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3RFLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQy9CLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNsQixLQUFLLENBQUM7d0JBQ0osTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQzt3QkFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO3dCQUMvQixNQUFNO29CQUNSLEtBQUssQ0FBQzt3QkFDSixNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDO3dCQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzt3QkFDbEIsTUFBTTtvQkFDUixLQUFLLENBQUM7d0JBQ0osTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQzt3QkFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO3dCQUM1QixNQUFNO2dCQUNWLENBQUM7Z0JBQ0QsSUFBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO3FCQUFNLENBQUM7b0JBQ04sSUFBRyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUM7d0JBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQUNELElBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQztvQkFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7b0JBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7b0JBQ3ZELElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDWixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDaEIsSUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07b0JBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN2QyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSCxZQUFZLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSCxVQUFVLENBQUMsTUFBYztRQUN2QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXNCRztJQUNILFlBQVksQ0FBQyxNQUFjO1FBQ3pCLFNBQVMsV0FBVyxDQUFDLE1BQWM7WUFDakMsT0FBTyxNQUFNO2lCQUNWLFdBQVcsRUFBRSxDQUFpQixzQ0FBc0M7aUJBQ3BFLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBYyx3Q0FBd0M7aUJBQ3RFLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxzQkFBc0I7aUJBQ3RELE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBVSx3QkFBd0I7UUFDM0QsQ0FBQztRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzlILElBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUN2QixDQUFDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNiLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNqQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCxLQUFLLENBQUMsS0FBYztRQUNsQixJQUFHLENBQUMsS0FBSztZQUNQLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILE1BQU07UUFDSixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUNwQixLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQ2pFLElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVM7Z0JBQ3JCLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYTthQUM5QjtTQUNjLENBQUMsQ0FBQztRQUNuQixJQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0YseUJBQXlCO1FBQ3hCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLEtBQU0sY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQztRQUN2RyxJQUFHLFNBQVMsS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDL0IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0gsZ0JBQWdCLENBQUMsS0FBa0I7UUFDakMsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQThCLENBQUM7UUFDcEQsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFHLEtBQUssS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFlLENBQUM7WUFDakMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTJCRztJQUNILGFBQWEsQ0FBQyxLQUFpQztRQUM3QyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDO1FBQy9ELElBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDaEQsTUFBTSxjQUFjLEdBQUcsY0FBYyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzNFLElBQUcsY0FBYztnQkFDZixjQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ3hELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDO1FBQ0QsTUFBTSxPQUFPLEdBQUcsY0FBYyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdELEtBQUssTUFBTSxNQUFNLElBQUksT0FBTyxFQUFFLENBQUM7WUFDN0IsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFDakYsSUFBRyxRQUFRLEVBQUUsQ0FBQztnQkFDWixNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUMzQyxNQUFNO1lBQ1IsQ0FBQztRQUNILENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBYyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQVksQ0FBQyxDQUFDLENBQUM7SUFDL0csQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILFlBQVksQ0FBQyxLQUF5QjtRQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO2dIQXRxQlUsZUFBZTtvRUFBZixlQUFlO21DQVdpQixVQUFVOzs7Ozs7WUNqRnZELHdGQUFzQjtZQU9oQixBQURGLEFBREYsQUFERiw4QkFBMkgsYUFDM0YsYUFDSixhQUNDO1lBQ3JCLDBGQWFDO1lBR0MsQUFGRiw4QkFBMkIsa0JBY3ZCOztZQVZBLDBPQUFtQjtZQUtuQixBQURBLEFBREEsQUFEQSxBQURBLHVKQUFpQixnQ0FBd0IsS0FBQyw0SUFDckIsb0JBQVksS0FBQywwSEFDekIsdUJBQW1CLEtBQUMsb0hBQ3BCLGlCQUFhLEtBQUMsa0hBQ2YsZ0JBQVksS0FBQztZQVB2QixpQkFZRTtZQUNGLDBFQUF5QjtZQTBCN0IsQUFERSxpQkFBTSxFQUNGO1lBQ04sMkVBQTZCO1lBUTNCLEFBREYsZ0NBQTZCLHNCQUM4QjtZQUFuQix1SUFBUyxZQUFRLEtBQUM7WUFDdEQsZ0NBQXNHO1lBRzVHLEFBREUsQUFERSxpQkFBYSxFQUNULEVBQ0Y7WUFDTiwwRUFBd0I7WUF5QjFCLGlCQUFNO1lBQ04sNEVBQW1CO1lBNkJyQixpQkFBTTs7WUFwSU4sOENBRUM7WUFFSSxjQUFVO1lBQWdFLEFBQTFFLDRCQUFVLDZEQUEyRztZQUlsSCxlQWFDO1lBYkQsOEJBYUM7WUFhRyxlQUEyRTtZQUEzRSxvSEFBMkU7WUFSM0UseUNBQW1CO1lBV3JCLGVBd0JDO1lBeEJELGtEQXdCQztZQUdMLGNBTUM7WUFORCxzREFNQztZQUdtQyxlQUF5QztZQUF6QywyREFBeUM7WUFJL0UsY0F3QkM7WUF4QkQsaURBd0JDO1lBRUgsY0E0QkM7WUE1QkQsNENBNEJDOzRCRHhFQyxnQkFBZ0IsdUdBR2hCLE9BQU87WUFDUCxPQUFPO1lBQ1AsU0FBUztZQUVULGtCQUFrQjs7QUFJVCxlQUFlO0lBakIzQixPQUFPLEVBQUU7O0dBaUJHLGVBQWUsQ0F3cUIzQjs7aUZBeHFCWSxlQUFlO2NBaEIzQixTQUFTOzJCQUNFLGtCQUFrQixXQUduQjtvQkFDUCxnQkFBZ0I7b0JBQ2hCLFFBQVE7b0JBQ1IsT0FBTztvQkFDUCxPQUFPO29CQUNQLE9BQU87b0JBQ1AsU0FBUztvQkFDVCxPQUFPO29CQUNQLGtCQUFrQjtpQkFDbkIsY0FDVyxJQUFJO29CQWNoQixvQkFBb0I7a0JBRG5CLFNBQVM7bUJBQUMsc0JBQXNCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFjdEUsT0FBTztrQkFETixLQUFLO1lBY04sVUFBVTtrQkFEVCxLQUFLO1lBY04sTUFBTTtrQkFETCxLQUFLO1lBY04sV0FBVztrQkFEVixLQUFLO1lBbUpOLFdBQVc7a0JBRFYsTUFBTTtZQVVQLFdBQVc7a0JBRFYsTUFBTTs7a0ZBMU5JLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvckFuZ3VsYXJNb2R1bGUgfSBmcm9tICcuLi8uLi9mb3ItYW5ndWxhci5tb2R1bGUnO1xuaW1wb3J0IHsgTmd4QmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2VuZ2luZS9OZ3hCYXNlQ29tcG9uZW50JztcbmltcG9ydCB7IElvbkNoaXAsIElvbkljb24sIElvbkl0ZW0sIElvbkxhYmVsLCBJb25TZWxlY3R9IGZyb20gJ0Bpb25pYy9hbmd1bGFyL3N0YW5kYWxvbmUnO1xuaW1wb3J0IHsgRHluYW1pYywgSUZpbHRlclF1ZXJ5LCBJRmlsdGVyUXVlcnlJdGVtIH0gZnJvbSAnLi4vLi4vZW5naW5lJztcbmltcG9ydCB7IGdldFdpbmRvd1dpZHRoLCBpc0RhcmtNb2RlIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPcmRlckRpcmVjdGlvbiwgUmVwb3NpdG9yeSB9IGZyb20gJ0BkZWNhZi10cy9jb3JlJztcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnQGRlY2FmLXRzL2RlY29yYXRvci12YWxpZGF0aW9uJztcbmltcG9ydCB7IFNlYXJjaGJhckNvbXBvbmVudCB9IGZyb20gJy4uL3NlYXJjaGJhci9zZWFyY2hiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IGFkZEljb25zIH0gZnJvbSAnaW9uaWNvbnMnO1xuaW1wb3J0IHsgY2hldnJvbkRvd25PdXRsaW5lLCBjaGV2cm9uVXBPdXRsaW5lIH0gZnJvbSAnaW9uaWNvbnMvaWNvbnMnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBZHZhbmNlZCBmaWx0ZXIgY29tcG9uZW50IGZvciBjcmVhdGluZyBkeW5hbWljIHNlYXJjaCBmaWx0ZXJzIHdpdGggc3RlcC1ieS1zdGVwIGNvbnN0cnVjdGlvbi5cbiAqIEBzdW1tYXJ5IFRoaXMgY29tcG9uZW50IHByb3ZpZGVzIGEgY29tcHJlaGVuc2l2ZSBmaWx0ZXJpbmcgaW50ZXJmYWNlIHRoYXQgYWxsb3dzIHVzZXJzIHRvIGJ1aWxkXG4gKiBjb21wbGV4IHNlYXJjaCBjcml0ZXJpYSB1c2luZyBhIHRocmVlLXN0ZXAgYXBwcm9hY2g6IHNlbGVjdCBpbmRleCDihpIgc2VsZWN0IGNvbmRpdGlvbiDihpIgZW50ZXIgdmFsdWUuXG4gKiBJdCBzdXBwb3J0cyBmaWx0ZXJpbmcgYnkgbXVsdGlwbGUgZmllbGQgaW5kZXhlcywgY29tcGFyaXNvbiBjb25kaXRpb25zLCBhbmQgdmFsdWVzLCBkaXNwbGF5aW5nXG4gKiBzZWxlY3RlZCBmaWx0ZXJzIGFzIHJlbW92YWJsZSBjaGlwcy4gVGhlIGNvbXBvbmVudCBpcyByZXNwb25zaXZlIGFuZCBpbmNsdWRlcyBhdXRvLXN1Z2dlc3Rpb25zXG4gKiB3aXRoIGtleWJvYXJkIG5hdmlnYXRpb24gc3VwcG9ydC5cbiAqXG4gKiBAZXhhbXBsZVxuICogYGBgaHRtbFxuICogPG5neC1kZWNhZi1maWx0ZXJcbiAqICAgW2luZGV4ZXNdPVwiWyduYW1lJywgJ2VtYWlsJywgJ2RlcGFydG1lbnQnLCAnc3RhdHVzJ11cIlxuICogICBbY29uZGl0aW9uc109XCJbJ0VxdWFsJywgJ0NvbnRhaW5zJywgJ0dyZWF0ZXIgVGhhbicsICdMZXNzIFRoYW4nXVwiXG4gKiAgIFtzb3J0XT1cIlsnY3JlYXRlZEF0JywgJ3VwZGF0ZWRBdCddXCJcbiAqICAgW2Rpc2FibGVTb3J0XT1cImZhbHNlXCJcbiAqICAgKGZpbHRlckV2ZW50KT1cIm9uRmlsdGVyc0NoYW5nZWQoJGV2ZW50KVwiPlxuICogPC9uZ3gtZGVjYWYtZmlsdGVyPlxuICogYGBgXG4gKlxuICogQG1lcm1haWRcbiAqIHNlcXVlbmNlRGlhZ3JhbVxuICogICBwYXJ0aWNpcGFudCBVIGFzIFVzZXJcbiAqICAgcGFydGljaXBhbnQgRiBhcyBGaWx0ZXJDb21wb25lbnRcbiAqICAgcGFydGljaXBhbnQgUCBhcyBQYXJlbnQgQ29tcG9uZW50XG4gKlxuICogICBVLT4+RjogRm9jdXMgaW5wdXQgZmllbGRcbiAqICAgRi0+PkY6IGhhbmRsZUZvY3VzKCkgLSBTaG93IGF2YWlsYWJsZSBpbmRleGVzXG4gKiAgIFUtPj5GOiBTZWxlY3QgaW5kZXggKGUuZy4sIFwibmFtZVwiKVxuICogICBGLT4+RjogYWRkRmlsdGVyKCkgLSBTdGVwIDEgY29tcGxldGVkXG4gKiAgIEYtPj5GOiBTaG93IGF2YWlsYWJsZSBjb25kaXRpb25zXG4gKiAgIFUtPj5GOiBTZWxlY3QgY29uZGl0aW9uIChlLmcuLCBcIkNvbnRhaW5zXCIpXG4gKiAgIEYtPj5GOiBhZGRGaWx0ZXIoKSAtIFN0ZXAgMiBjb21wbGV0ZWRcbiAqICAgRi0+PkY6IFNob3cgdmFsdWUgaW5wdXQgcHJvbXB0XG4gKiAgIFUtPj5GOiBFbnRlciB2YWx1ZSBhbmQgcHJlc3MgRW50ZXJcbiAqICAgRi0+PkY6IGFkZEZpbHRlcigpIC0gU3RlcCAzIGNvbXBsZXRlZFxuICogICBGLT4+RjogQ3JlYXRlIGNvbXBsZXRlIGZpbHRlciBvYmplY3RcbiAqICAgRi0+PlA6IEVtaXQgZmlsdGVyRXZlbnQgd2l0aCBuZXcgZmlsdGVyIGFycmF5XG4gKiAgIEYtPj5GOiBSZXNldCB0byBzdGVwIDEgZm9yIG5leHQgZmlsdGVyXG4gKlxuICogQG1lbWJlck9mIEZvckFuZ3VsYXJNb2R1bGVcbiAqL1xuQER5bmFtaWMoKVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWRlY2FmLWZpbHRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maWx0ZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgaW1wb3J0czogW1xuICAgIEZvckFuZ3VsYXJNb2R1bGUsXG4gICAgSW9uTGFiZWwsXG4gICAgSW9uSXRlbSxcbiAgICBJb25DaGlwLFxuICAgIElvbkljb24sXG4gICAgSW9uU2VsZWN0LFxuICAgIElvbkljb24sXG4gICAgU2VhcmNoYmFyQ29tcG9uZW50XG4gIF0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlckNvbXBvbmVudCBleHRlbmRzIE5neEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBSZWZlcmVuY2UgdG8gdGhlIGRyb3Bkb3duIG9wdGlvbnMgY29udGFpbmVyIGVsZW1lbnQuXG4gICAqIEBzdW1tYXJ5IFZpZXdDaGlsZCByZWZlcmVuY2UgdXNlZCB0byBhY2Nlc3MgYW5kIG1hbmlwdWxhdGUgdGhlIGRyb3Bkb3duIG9wdGlvbnMgZWxlbWVudFxuICAgKiBmb3IgaGlnaGxpZ2h0aW5nIGZpbHRlcmVkIGl0ZW1zIGFuZCBtYW5hZ2luZyB2aXN1YWwgZmVlZGJhY2sgZHVyaW5nIG9wdGlvbiBzZWxlY3Rpb24uXG4gICAqIFRoaXMgZWxlbWVudCBjb250YWlucyB0aGUgZmlsdGVyYWJsZSBzdWdnZXN0aW9ucyB0aGF0IHVzZXJzIGNhbiBpbnRlcmFjdCB3aXRoLlxuICAgKlxuICAgKiBAdHlwZSB7RWxlbWVudFJlZn1cbiAgICogQG1lbWJlck9mIEZpbHRlckNvbXBvbmVudFxuICAgKi9cbiAgQFZpZXdDaGlsZCgnb3B0aW9uc0ZpbHRlckVsZW1lbnQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSlcbiAgb3B0aW9uc0ZpbHRlckVsZW1lbnQhOiBFbGVtZW50UmVmO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQXZhaWxhYmxlIGZpZWxkIGluZGV4ZXMgZm9yIGZpbHRlcmluZyBvcGVyYXRpb25zLlxuICAgKiBAc3VtbWFyeSBEZWZpbmVzIHRoZSBsaXN0IG9mIGZpZWxkIG5hbWVzIHRoYXQgdXNlcnMgY2FuIGZpbHRlciBieS4gVGhlc2UgcmVwcmVzZW50XG4gICAqIHRoZSBkYXRhIHByb3BlcnRpZXMgYXZhaWxhYmxlIGZvciBmaWx0ZXJpbmcgb3BlcmF0aW9ucy4gRWFjaCBpbmRleCBjb3JyZXNwb25kcyB0b1xuICAgKiBhIGZpZWxkIGluIHRoZSBkYXRhIG1vZGVsIHRoYXQgc3VwcG9ydHMgY29tcGFyaXNvbiBvcGVyYXRpb25zLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nW119XG4gICAqIEBkZWZhdWx0IFtdXG4gICAqIEBtZW1iZXJPZiBGaWx0ZXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGluZGV4ZXM6IHN0cmluZ1tdID0gW107XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBBdmFpbGFibGUgY29tcGFyaXNvbiBjb25kaXRpb25zIGZvciBmaWx0ZXJzLlxuICAgKiBAc3VtbWFyeSBEZWZpbmVzIHRoZSBsaXN0IG9mIGNvbXBhcmlzb24gb3BlcmF0b3JzIHRoYXQgY2FuIGJlIHVzZWQgd2hlbiBjcmVhdGluZyBmaWx0ZXJzLlxuICAgKiBUaGVzZSBjb25kaXRpb25zIGRldGVybWluZSBob3cgdGhlIGZpbHRlciB2YWx1ZSBpcyBjb21wYXJlZCBhZ2FpbnN0IHRoZSBmaWVsZCB2YWx1ZS5cbiAgICogQ29tbW9uIGNvbmRpdGlvbnMgaW5jbHVkZSBlcXVhbGl0eSwgY29udGFpbm1lbnQsIGFuZCBudW1lcmljYWwgY29tcGFyaXNvbiBvcGVyYXRpb25zLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nW119XG4gICAqIEBkZWZhdWx0IFtdXG4gICAqIEBtZW1iZXJPZiBGaWx0ZXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGNvbmRpdGlvbnM6IHN0cmluZ1tdID0gWydFcXVhbCcsICdDb250YWlucycsICdOb3QgQ29udGFpbnMnLCAnR3JlYXRlciBUaGFuJywgJ0xlc3MgVGhhbicsICdOb3QgRXF1YWwnXTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEF2YWlsYWJsZSBzb3J0aW5nIG9wdGlvbnMgZm9yIHRoZSBmaWx0ZXJlZCBkYXRhLlxuICAgKiBAc3VtbWFyeSBEZWZpbmVzIHRoZSBsaXN0IG9mIGZpZWxkIG5hbWVzIHRoYXQgY2FuIGJlIHVzZWQgZm9yIHNvcnRpbmcgdGhlIGZpbHRlcmVkIHJlc3VsdHMuXG4gICAqIFdoZW4gZGlzYWJsZVNvcnQgaXMgZmFsc2UsIHRoaXMgYXJyYXkgaXMgYXV0b21hdGljYWxseSBtZXJnZWQgd2l0aCB0aGUgaW5kZXhlcyBhcnJheVxuICAgKiB0byBwcm92aWRlIGNvbXByZWhlbnNpdmUgc29ydGluZyBjYXBhYmlsaXRpZXMuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmdbXX1cbiAgICogQGRlZmF1bHQgW11cbiAgICogQG1lbWJlck9mIEZpbHRlckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgc29ydEJ5OiBzdHJpbmdbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ29udHJvbHMgd2hldGhlciBzb3J0aW5nIGZ1bmN0aW9uYWxpdHkgaXMgZGlzYWJsZWQuXG4gICAqIEBzdW1tYXJ5IFdoZW4gc2V0IHRvIHRydWUsIHByZXZlbnRzIHRoZSBhdXRvbWF0aWMgbWVyZ2luZyBvZiBzb3J0IGFuZCBpbmRleGVzIGFycmF5cyxcbiAgICogZWZmZWN0aXZlbHkgZGlzYWJsaW5nIHNvcnRpbmcgY2FwYWJpbGl0aWVzLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIHlvdSB3YW50IHRvIHByb3ZpZGVcbiAgICogZmlsdGVyaW5nIHdpdGhvdXQgc29ydGluZyBvcHRpb25zLlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQG1lbWJlck9mIEZpbHRlckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgZGlzYWJsZVNvcnQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEN1cnJlbnQgd2luZG93IHdpZHRoIGZvciByZXNwb25zaXZlIGJlaGF2aW9yLlxuICAgKiBAc3VtbWFyeSBTdG9yZXMgdGhlIGN1cnJlbnQgYnJvd3NlciB3aW5kb3cgd2lkdGggaW4gcGl4ZWxzLiBUaGlzIHZhbHVlIGlzIHVwZGF0ZWRcbiAgICogb24gd2luZG93IHJlc2l6ZSBldmVudHMgdG8gZW5hYmxlIHJlc3BvbnNpdmUgZmlsdGVyaW5nIGJlaGF2aW9yIGFuZCBsYXlvdXQgYWRqdXN0bWVudHNcbiAgICogYmFzZWQgb24gYXZhaWxhYmxlIHNjcmVlbiBzcGFjZS5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQG1lbWJlck9mIEZpbHRlckNvbXBvbmVudFxuICAgKi9cbiAgd2luZG93V2lkdGghOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBBdmFpbGFibGUgb3B0aW9ucyBmb3IgdGhlIGN1cnJlbnQgZmlsdGVyIHN0ZXAuXG4gICAqIEBzdW1tYXJ5IENvbnRhaW5zIHRoZSBsaXN0IG9mIG9wdGlvbnMgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb24gaW4gdGhlIGN1cnJlbnQgc3RlcC5cbiAgICogVGhpcyBhcnJheSBjaGFuZ2VzIGR5bmFtaWNhbGx5IGJhc2VkIG9uIHRoZSBjdXJyZW50IHN0ZXA6IGluZGV4ZXMg4oaSIGNvbmRpdGlvbnMg4oaSIGVtcHR5IGZvciB2YWx1ZSBpbnB1dC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ1tdfVxuICAgKiBAZGVmYXVsdCBbXVxuICAgKiBAbWVtYmVyT2YgRmlsdGVyQ29tcG9uZW50XG4gICAqL1xuICBvcHRpb25zOiBzdHJpbmdbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gRmlsdGVyZWQgb3B0aW9ucyBiYXNlZCBvbiB1c2VyIGlucHV0LlxuICAgKiBAc3VtbWFyeSBDb250YWlucyB0aGUgc3Vic2V0IG9mIG9wdGlvbnMgdGhhdCBtYXRjaCB0aGUgY3VycmVudCB1c2VyIGlucHV0IGZvciByZWFsLXRpbWVcbiAgICogZmlsdGVyaW5nLiBUaGlzIGFycmF5IGlzIHVwZGF0ZWQgYXMgdGhlIHVzZXIgdHlwZXMgdG8gc2hvdyBvbmx5IHJlbGV2YW50IHN1Z2dlc3Rpb25zXG4gICAqIGluIHRoZSBkcm9wZG93biBtZW51LlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nW119XG4gICAqIEBkZWZhdWx0IFtdXG4gICAqIEBtZW1iZXJPZiBGaWx0ZXJDb21wb25lbnRcbiAgICovXG4gIGZpbHRlcmVkT3B0aW9uczogc3RyaW5nW10gPSBbXTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENvbXBsZXRlIGZpbHRlciBvYmplY3RzIGNyZWF0ZWQgYnkgdGhlIHVzZXIuXG4gICAqIEBzdW1tYXJ5IEFycmF5IG9mIGNvbXBsZXRlIGZpbHRlciBvYmplY3RzLCBlYWNoIGNvbnRhaW5pbmcgaW5kZXgsIGNvbmRpdGlvbiwgYW5kIHZhbHVlIHByb3BlcnRpZXMuXG4gICAqIFRoZXNlIHJlcHJlc2VudCB0aGUgYWN0aXZlIGZpbHRlcnMgdGhhdCBjYW4gYmUgYXBwbGllZCB0byBkYXRhIG9wZXJhdGlvbnMuXG4gICAqXG4gICAqIEB0eXBlIHtLZXlWYWx1ZVtdfVxuICAgKiBAZGVmYXVsdCBbXVxuICAgKiBAbWVtYmVyT2YgRmlsdGVyQ29tcG9uZW50XG4gICAqL1xuICBmaWx0ZXJWYWx1ZTogSUZpbHRlclF1ZXJ5SXRlbVtdID0gW107XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDdXJyZW50IGZpbHRlciBiZWluZyBjb25zdHJ1Y3RlZC5cbiAgICogQHN1bW1hcnkgVGVtcG9yYXJ5IG9iamVjdCB0aGF0IGFjY3VtdWxhdGVzIGZpbHRlciBwcm9wZXJ0aWVzIChpbmRleCwgY29uZGl0aW9uLCB2YWx1ZSlcbiAgICogZHVyaW5nIHRoZSB0aHJlZS1zdGVwIGZpbHRlciBjcmVhdGlvbiBwcm9jZXNzLiBHZXRzIGFkZGVkIHRvIGZpbHRlclZhbHVlIHdoZW4gY29tcGxldGUuXG4gICAqXG4gICAqIEB0eXBlIHtLZXlWYWx1ZX1cbiAgICogQGRlZmF1bHQge31cbiAgICogQG1lbWJlck9mIEZpbHRlckNvbXBvbmVudFxuICAgKi9cbiAgbGFzdEZpbHRlcjogSUZpbHRlclF1ZXJ5SXRlbSA9IHt9O1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ3VycmVudCBzdGVwIGluIHRoZSBmaWx0ZXIgY3JlYXRpb24gcHJvY2Vzcy5cbiAgICogQHN1bW1hcnkgVHJhY2tzIHRoZSBjdXJyZW50IHN0ZXAgb2YgZmlsdGVyIGNyZWF0aW9uOiAxID0gaW5kZXggc2VsZWN0aW9uLCAyID0gY29uZGl0aW9uIHNlbGVjdGlvbixcbiAgICogMyA9IHZhbHVlIGlucHV0LiBBdXRvbWF0aWNhbGx5IHJlc2V0cyB0byAxIGFmdGVyIGNvbXBsZXRpbmcgYSBmaWx0ZXIuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDFcbiAgICogQG1lbWJlck9mIEZpbHRlckNvbXBvbmVudFxuICAgKi9cbiAgc3RlcDogbnVtYmVyID0gMTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENvbnRyb2xzIGRyb3Bkb3duIHZpc2liaWxpdHkgc3RhdGUuXG4gICAqIEBzdW1tYXJ5IEJvb2xlYW4gZmxhZyB0aGF0IGRldGVybWluZXMgd2hldGhlciB0aGUgb3B0aW9ucyBkcm9wZG93biBpcyBjdXJyZW50bHkgdmlzaWJsZS5cbiAgICogVXNlZCB0byBtYW5hZ2UgdGhlIGRyb3Bkb3duJ3Mgb3Blbi9jbG9zZSBzdGF0ZSBhbmQgY29vcmRpbmF0ZSB3aXRoIGZvY3VzL2JsdXIgZXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQG1lbWJlck9mIEZpbHRlckNvbXBvbmVudFxuICAgKi9cbiAgZHJvcGRvd25PcGVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDdXJyZW50IGlucHV0IGZpZWxkIHZhbHVlLlxuICAgKiBAc3VtbWFyeSBTdG9yZXMgdGhlIGN1cnJlbnQgdGV4dCBpbnB1dCB2YWx1ZSB0aGF0IHRoZSB1c2VyIGlzIHR5cGluZy4gVGhpcyB2YWx1ZSBpc1xuICAgKiBib3VuZCB0byB0aGUgaW5wdXQgZmllbGQgYW5kIGlzIGNsZWFyZWQgYWZ0ZXIgZWFjaCBzdWNjZXNzZnVsIGZpbHRlciBzdGVwIGNvbXBsZXRpb24uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICcnXG4gICAqIEBtZW1iZXJPZiBGaWx0ZXJDb21wb25lbnRcbiAgICovXG4gIHZhbHVlOiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEN1cnJlbnQgc29ydGluZyBmaWVsZCB2YWx1ZS5cbiAgICogQHN1bW1hcnkgU3RvcmVzIHRoZSBmaWVsZCBuYW1lIGN1cnJlbnRseSBzZWxlY3RlZCBmb3Igc29ydGluZyBvcGVyYXRpb25zLlxuICAgKiBUaGlzIHZhbHVlIGRldGVybWluZXMgd2hpY2ggZmllbGQgaXMgdXNlZCB0byBvcmRlciB0aGUgZmlsdGVyZWQgcmVzdWx0cy5cbiAgICogRGVmYXVsdHMgdG8gJ2lkJyBhbmQgY2FuIGJlIGNoYW5nZWQgdGhyb3VnaCB0aGUgc29ydCBkcm9wZG93biBzZWxlY3Rpb24uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICdpZCdcbiAgICogQG1lbWJlck9mIEZpbHRlckNvbXBvbmVudFxuICAgKi9cbiAgc29ydFZhbHVlOiBzdHJpbmcgPSAnaWQnO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ3VycmVudCBzb3J0aW5nIGRpcmVjdGlvbi5cbiAgICogQHN1bW1hcnkgRGVmaW5lcyB0aGUgZGlyZWN0aW9uIG9mIHRoZSBzb3J0IG9wZXJhdGlvbiAtIGFzY2VuZGluZyBvciBkZXNjZW5kaW5nLlxuICAgKiBUaGlzIHZhbHVlIHdvcmtzIGluIGNvbmp1bmN0aW9uIHdpdGggc29ydFZhbHVlIHRvIGRldGVybWluZSB0aGUgY29tcGxldGVcbiAgICogc29ydGluZyBjb25maWd1cmF0aW9uIGZvciBmaWx0ZXJlZCByZXN1bHRzLlxuICAgKlxuICAgKiBAdHlwZSB7T3JkZXJEaXJlY3Rpb259XG4gICAqIEBkZWZhdWx0IE9yZGVyRGlyZWN0aW9uLkRTQ1xuICAgKiBAbWVtYmVyT2YgRmlsdGVyQ29tcG9uZW50XG4gICAqL1xuICBzb3J0RGlyZWN0aW9uOiBPcmRlckRpcmVjdGlvbiA9IE9yZGVyRGlyZWN0aW9uLkRTQztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFN1YnNjcmlwdGlvbiBmb3Igd2luZG93IHJlc2l6ZSBldmVudHMuXG4gICAqIEBzdW1tYXJ5IFJ4SlMgc3Vic2NyaXB0aW9uIHRoYXQgbGlzdGVucyBmb3Igd2luZG93IHJlc2l6ZSBldmVudHMgd2l0aCBkZWJvdW5jaW5nXG4gICAqIHRvIHVwZGF0ZSB0aGUgd2luZG93V2lkdGggcHJvcGVydHkuIFRoaXMgZW5hYmxlcyByZXNwb25zaXZlIGJlaGF2aW9yIGFuZCBwcmV2ZW50c1xuICAgKiBleGNlc3NpdmUgdXBkYXRlcyBkdXJpbmcgcmVzaXplIG9wZXJhdGlvbnMuXG4gICAqXG4gICAqIEB0eXBlIHtTdWJzY3JpcHRpb259XG4gICAqIEBtZW1iZXJPZiBGaWx0ZXJDb21wb25lbnRcbiAgICovXG4gIHdpbmRvd1Jlc2l6ZVN1YnNjcmlwdGlvbiE6IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEJyb3dzaW5nIG1vZGUgKGRhcmsgb3IgbGlnaHQpLlxuICAgKiBAc3VtbWFyeSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgZGFyayBtb2RlIHRoZW1lIGlzIGN1cnJlbnRseSBlbmFibGVkLlxuICAgKiBEZWZhdWx0cyB0byBgZmFsc2VgLlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQG1lbWJlck9mIEZpbHRlckNvbXBvbmVudFxuICAgKi9cbiAgaXNEYXJrTW9kZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gRXZlbnQgZW1pdHRlciBmb3IgZmlsdGVyIGNoYW5nZXMuXG4gICAqIEBzdW1tYXJ5IEVtaXRzIGZpbHRlciBldmVudHMgd2hlbiB0aGUgdXNlciBjcmVhdGVzLCBtb2RpZmllcywgb3IgY2xlYXJzIGZpbHRlcnMuXG4gICAqIFRoZSBlbWl0dGVkIHZhbHVlIGNvbnRhaW5zIGFuIGFycmF5IG9mIGNvbXBsZXRlIGZpbHRlciBvYmplY3RzIG9yIHVuZGVmaW5lZCB3aGVuXG4gICAqIGZpbHRlcnMgYXJlIGNsZWFyZWQuIFBhcmVudCBjb21wb25lbnRzIGxpc3RlbiB0byB0aGlzIGV2ZW50IHRvIHVwZGF0ZSB0aGVpciBkYXRhIGRpc3BsYXkuXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8S2V5VmFsdWVbXSB8IHVuZGVmaW5lZD59XG4gICAqIEBtZW1iZXJPZiBGaWx0ZXJDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBmaWx0ZXJFdmVudDogRXZlbnRFbWl0dGVyPElGaWx0ZXJRdWVyeSB8IHVuZGVmaW5lZD4gPSBuZXcgRXZlbnRFbWl0dGVyPElGaWx0ZXJRdWVyeSB8IHVuZGVmaW5lZD4oKTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEV2ZW50IGVtaXR0ZXIgZm9yIHNlYXJjaCBldmVudHMuXG4gICAqIEBzdW1tYXJ5IEVtaXRzIHNlYXJjaCBldmVudHMgd2hlbiB0aGUgdXNlciBpbnRlcmFjdHMgd2l0aCB0aGUgc2VhcmNoYmFyLlxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPHN0cmluZz59XG4gICAqIEBtZW1iZXJPZiBGaWx0ZXJDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBzZWFyY2hFdmVudDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ29uc3RydWN0b3IgZm9yIEZpbHRlckNvbXBvbmVudC5cbiAgICogQHN1bW1hcnkgSW5pdGlhbGl6ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIEZpbHRlckNvbXBvbmVudC5cbiAgICogQ2FsbHMgdGhlIHBhcmVudCBjb25zdHJ1Y3RvciB3aXRoIHRoZSBjb21wb25lbnQgbmFtZSB0byBlc3RhYmxpc2ggYmFzZSBsb2NhbGUgc3RyaW5nIGdlbmVyYXRpb25cbiAgICogYW5kIGludGVybmF0aW9uYWxpemF0aW9uIHN1cHBvcnQuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBGaWx0ZXJDb21wb25lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiRmlsdGVyQ29tcG9uZW50XCIpO1xuICAgIGFkZEljb25zKHtjaGV2cm9uRG93bk91dGxpbmUsIGNoZXZyb25VcE91dGxpbmV9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gSW5pdGlhbGl6ZXMgdGhlIGNvbXBvbmVudCBhZnRlciBBbmd1bGFyIGZpcnN0IGRpc3BsYXlzIHRoZSBkYXRhLWJvdW5kIHByb3BlcnRpZXMuXG4gICAqIEBzdW1tYXJ5IFNldHMgdXAgdGhlIGNvbXBvbmVudCBieSBpbml0aWFsaXppbmcgd2luZG93IHdpZHRoIHRyYWNraW5nLCBzZXR0aW5nIHVwIHJlc2l6ZSBldmVudFxuICAgKiBzdWJzY3JpcHRpb25zIHdpdGggZGVib3VuY2luZywgY29uZmlndXJpbmcgc29ydGluZyBvcHRpb25zLCBhbmQgY2FsbGluZyB0aGUgYmFzZSBpbml0aWFsaXphdGlvbi5cbiAgICogVGhpcyBtZXRob2QgcHJlcGFyZXMgdGhlIGNvbXBvbmVudCBmb3IgdXNlciBpbnRlcmFjdGlvbiBhbmQgcmVzcG9uc2l2ZSBiZWhhdmlvci5cbiAgICpcbiAgICogQG1lcm1haWRcbiAgICogc2VxdWVuY2VEaWFncmFtXG4gICAqICAgcGFydGljaXBhbnQgQSBhcyBBbmd1bGFyIExpZmVjeWNsZVxuICAgKiAgIHBhcnRpY2lwYW50IEYgYXMgRmlsdGVyQ29tcG9uZW50XG4gICAqICAgcGFydGljaXBhbnQgVyBhcyBXaW5kb3dcbiAgICogICBwYXJ0aWNpcGFudCBSIGFzIFJ4SlNcbiAgICpcbiAgICogICBBLT4+RjogbmdPbkluaXQoKVxuICAgKiAgIEYtPj5XOiBnZXRXaW5kb3dXaWR0aCgpXG4gICAqICAgVy0tPj5GOiBSZXR1cm4gY3VycmVudCB3aWR0aFxuICAgKiAgIEYtPj5SOiBTZXR1cCByZXNpemUgc3Vic2NyaXB0aW9uIHdpdGggZGVib3VuY2VcbiAgICogICBSLS0+PkY6IFN1YnNjcmlwdGlvbiBjcmVhdGVkXG4gICAqICAgYWx0IGRpc2FibGVTb3J0IGlzIGZhbHNlXG4gICAqICAgICBGLT4+RjogTWVyZ2Ugc29ydCBhbmQgaW5kZXhlcyBhcnJheXNcbiAgICogICBlbmRcbiAgICogICBGLT4+RjogQ2FsbCBpbml0aWFsaXplKClcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqIEBtZW1iZXJPZiBGaWx0ZXJDb21wb25lbnRcbiAgICovXG4gIGFzeW5jIG5nT25Jbml0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNEYXJrTW9kZSA9IGF3YWl0IGlzRGFya01vZGUoKTtcbiAgICB0aGlzLndpbmRvd1dpZHRoID0gZ2V0V2luZG93V2lkdGgoKSBhcyBudW1iZXI7XG4gICAgdGhpcy53aW5kb3dSZXNpemVTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAucGlwZShkZWJvdW5jZVRpbWUoMzAwKSlcbiAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgdGhpcy53aW5kb3dXaWR0aCA9IGdldFdpbmRvd1dpZHRoKCkgYXMgbnVtYmVyO1xuICAgIH0pO1xuXG4gICAgdGhpcy5nZXRJbmRleGVzKCk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFJldHJpZXZlcyBhbmQgY29uZmlndXJlcyBhdmFpbGFibGUgaW5kZXhlcyBmb3IgZmlsdGVyaW5nIGFuZCBzb3J0aW5nLlxuICAgKiBAc3VtbWFyeSBFeHRyYWN0cyBmaWVsZCBpbmRleGVzIGZyb20gdGhlIG1vZGVsIGlmIGF2YWlsYWJsZSBhbmQgbWVyZ2VzIHRoZW0gd2l0aFxuICAgKiBzb3J0aW5nIG9wdGlvbnMgd2hlbiBzb3J0aW5nIGlzIGVuYWJsZWQuIFRoaXMgbWV0aG9kIHNldHMgdXAgdGhlIGF2YWlsYWJsZSBmaWVsZFxuICAgKiBvcHRpb25zIGZvciBib3RoIGZpbHRlcmluZyBhbmQgc29ydGluZyBvcGVyYXRpb25zIGJhc2VkIG9uIHRoZSBtb2RlbCBzdHJ1Y3R1cmUuXG4gICAqXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKiBAbWVtYmVyT2YgRmlsdGVyQ29tcG9uZW50XG4gICAqL1xuICBnZXRJbmRleGVzKCk6IHZvaWQge1xuICAgIGlmKHRoaXMubW9kZWwpXG4gICAgICB0aGlzLmluZGV4ZXMgPSBPYmplY3Qua2V5cyhSZXBvc2l0b3J5LmluZGV4ZXModGhpcy5tb2RlbCBhcyBNb2RlbCkgfHwge30pO1xuICAgIGlmKCF0aGlzLmRpc2FibGVTb3J0KVxuICAgICAgdGhpcy5zb3J0QnkgPSBbLi4uIHRoaXMuc29ydEJ5LCAuLi50aGlzLmluZGV4ZXNdO1xuICB9XG5cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENsZWFudXAgbWV0aG9kIGNhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkLlxuICAgKiBAc3VtbWFyeSBVbnN1YnNjcmliZXMgZnJvbSB3aW5kb3cgcmVzaXplIGV2ZW50cyB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy5cbiAgICogVGhpcyBpcyBlc3NlbnRpYWwgZm9yIHByb3BlciBjbGVhbnVwIG9mIFJ4SlMgc3Vic2NyaXB0aW9ucyB3aGVuIHRoZSBjb21wb25lbnRcbiAgICogaXMgcmVtb3ZlZCBmcm9tIHRoZSBET00uXG4gICAqXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKiBAbWVtYmVyT2YgRmlsdGVyQ29tcG9uZW50XG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLndpbmRvd1Jlc2l6ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gSGFuZGxlcyBpbnB1dCBldmVudHMgZnJvbSB0aGUgdGV4dCBmaWVsZC5cbiAgICogQHN1bW1hcnkgUHJvY2Vzc2VzIHVzZXIgaW5wdXQgYW5kIGZpbHRlcnMgdGhlIGF2YWlsYWJsZSBvcHRpb25zIGJhc2VkIG9uIHRoZSB0eXBlZCB2YWx1ZS5cbiAgICogVGhpcyBtZXRob2QgcHJvdmlkZXMgcmVhbC10aW1lIGZpbHRlcmluZyBvZiBzdWdnZXN0aW9ucyBhcyB0aGUgdXNlciB0eXBlcyBpbiB0aGUgaW5wdXQgZmllbGQuXG4gICAqXG4gICAqIEBwYXJhbSB7SW5wdXRFdmVudH0gZXZlbnQgLSBUaGUgaW5wdXQgZXZlbnQgY29udGFpbmluZyB0aGUgbmV3IHZhbHVlXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKiBAbWVtYmVyT2YgRmlsdGVyQ29tcG9uZW50XG4gICAqL1xuICBoYW5kbGVJbnB1dChldmVudDogSW5wdXRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHt2YWx1ZX0gPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gdGhpcy5maWx0ZXJPcHRpb25zKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gSGFuZGxlcyBmb2N1cyBldmVudHMgb24gdGhlIGlucHV0IGZpZWxkLlxuICAgKiBAc3VtbWFyeSBTZXRzIHVwIHRoZSBhdmFpbGFibGUgb3B0aW9ucyB3aGVuIHRoZSBpbnB1dCBmaWVsZCByZWNlaXZlcyBmb2N1cyBhbmQgb3BlbnMgdGhlIGRyb3Bkb3duLlxuICAgKiBJZiBubyBvcHRpb25zIGFyZSBwcm92aWRlZCwgYXV0b21hdGljYWxseSBkZXRlcm1pbmVzIHRoZSBhcHByb3ByaWF0ZSBvcHRpb25zIGJhc2VkIG9uIGN1cnJlbnQgc3RlcC5cbiAgICogVGhpcyBtZXRob2QgaW5pdGlhbGl6ZXMgdGhlIGRyb3Bkb3duIHdpdGggY29udGV4dHVhbGx5IHJlbGV2YW50IHN1Z2dlc3Rpb25zLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBvcHRpb25zIC0gT3B0aW9uYWwgYXJyYXkgb2Ygb3B0aW9ucyB0byBkaXNwbGF5XG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKiBAbWVtYmVyT2YgRmlsdGVyQ29tcG9uZW50XG4gICAqL1xuICBoYW5kbGVGb2N1cyhvcHRpb25zOiBzdHJpbmdbXSAgPSBbXSk6IHZvaWQge1xuICAgIGlmKCFvcHRpb25zLmxlbmd0aClcbiAgICAgb3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucygpO1xuICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmRyb3Bkb3duT3BlbiA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEhhbmRsZXMgYmx1ciBldmVudHMgb24gdGhlIGlucHV0IGZpZWxkIHdpdGggZGVsYXllZCBjbG9zaW5nLlxuICAgKiBAc3VtbWFyeSBNYW5hZ2VzIHRoZSBkcm9wZG93biBjbG9zaW5nIGJlaGF2aW9yIHdpdGggYSBkZWxheSB0byBhbGxvdyBmb3Igb3B0aW9uIHNlbGVjdGlvbi5cbiAgICogVXNlcyBhIHR3by1waGFzZSBhcHByb2FjaCB0byBwcmV2ZW50IHByZW1hdHVyZSBjbG9zaW5nIHdoZW4gdXNlcnMgY2xpY2sgb24gZHJvcGRvd24gb3B0aW9ucy5cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBjbG9zZSAtIEludGVybmFsIGZsYWcgdG8gY29udHJvbCB0aGUgY2xvc2luZyBwaGFzZVxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICogQG1lbWJlck9mIEZpbHRlckNvbXBvbmVudFxuICAgKi9cbiAgaGFuZGxlQmx1cihjbG9zZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgaWYoIWNsb3NlKSB7XG4gICAgICB0aGlzLmRyb3Bkb3duT3BlbiA9IGZhbHNlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlQmx1cih0cnVlKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKCF0aGlzLmRyb3Bkb3duT3BlbiAmJiB0aGlzLm9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMub3B0aW9ucyA9IFtdO1xuICAgICAgICAgIHRoaXMuZHJvcGRvd25PcGVuID0gZmFsc2U7XG4gICAgICAgIH0sIDUwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIERldGVybWluZXMgdGhlIGFwcHJvcHJpYXRlIG9wdGlvbnMgYmFzZWQgb24gdGhlIGN1cnJlbnQgZmlsdGVyIHN0ZXAuXG4gICAqIEBzdW1tYXJ5IFJldHVybnMgdGhlIGNvbnRleHR1YWxseSByZWxldmFudCBvcHRpb25zIGZvciB0aGUgY3VycmVudCBzdGVwIGluIHRoZSBmaWx0ZXIgY3JlYXRpb24gcHJvY2Vzcy5cbiAgICogU3RlcCAxIHNob3dzIGluZGV4ZXMsIFN0ZXAgMiBzaG93cyBjb25kaXRpb25zLCBTdGVwIDMgc2hvd3Mgbm8gb3B0aW9ucyAodmFsdWUgaW5wdXQpLlxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nW119IEFycmF5IG9mIG9wdGlvbnMgYXBwcm9wcmlhdGUgZm9yIHRoZSBjdXJyZW50IHN0ZXBcbiAgICogQG1lbWJlck9mIEZpbHRlckNvbXBvbmVudFxuICAgKi9cbiAgZ2V0T3B0aW9ucygpOiBzdHJpbmdbXSB7XG4gICBzd2l0Y2ggKHRoaXMuc3RlcCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmluZGV4ZXM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmNvbmRpdGlvbnM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBbXTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm9wdGlvbnNcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQWRkcyBhIGZpbHRlciBzdGVwIG9yIGNvbXBsZXRlcyBmaWx0ZXIgY3JlYXRpb24gdGhyb3VnaCBhIHRocmVlLXN0ZXAgcHJvY2Vzcy5cbiAgICogQHN1bW1hcnkgQ29yZSBtZXRob2QgZm9yIGJ1aWxkaW5nIGZpbHRlcnMgc3RlcCBieSBzdGVwOiBTdGVwIDEgKEluZGV4KSDihpIgU3RlcCAyIChDb25kaXRpb24pIOKGkiBTdGVwIDMgKFZhbHVlKS5cbiAgICogV2hlbiBhbGwgc3RlcHMgYXJlIGNvbXBsZXRlLCBjcmVhdGVzIGEgY29tcGxldGUgZmlsdGVyIG9iamVjdCBhbmQgYWRkcyBpdCB0byB0aGUgZmlsdGVyIGNvbGxlY3Rpb24uXG4gICAqIEhhbmRsZXMgYm90aCBrZXlib2FyZCBldmVudHMgKEVudGVyIHRvIHN1Ym1pdCkgYW5kIHByb2dyYW1tYXRpYyBjYWxscy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGFkZCBmb3IgdGhlIGN1cnJlbnQgc3RlcFxuICAgKiBAcGFyYW0ge0N1c3RvbUV2ZW50fSBldmVudCAtIE9wdGlvbmFsIGV2ZW50IChLZXlib2FyZEV2ZW50IHRyaWdnZXJzIHN1Ym1pc3Npb24gd2hlbiB2YWx1ZSBpcyBlbXB0eSlcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqXG4gICAqIEBtZXJtYWlkXG4gICAqIHNlcXVlbmNlRGlhZ3JhbVxuICAgKiAgIHBhcnRpY2lwYW50IFUgYXMgVXNlclxuICAgKiAgIHBhcnRpY2lwYW50IEYgYXMgRmlsdGVyQ29tcG9uZW50XG4gICAqXG4gICAqICAgVS0+PkY6IGFkZEZpbHRlcih2YWx1ZSwgZXZlbnQpXG4gICAqICAgRi0+PkY6IFRyaW0gYW5kIHZhbGlkYXRlIHZhbHVlXG4gICAqICAgYWx0IEtleWJvYXJkRXZlbnQgJiYgZW1wdHkgdmFsdWVcbiAgICogICAgIEYtPj5GOiBzdWJtaXQoKSAtIFNlbmQgY3VycmVudCBmaWx0ZXJzXG4gICAqICAgZWxzZSBWYWxpZCB2YWx1ZSBvciBzdGVwIDNcbiAgICogICAgIGFsdCBTdGVwIDEgKEluZGV4KVxuICAgKiAgICAgICBGLT4+RjogbGFzdEZpbHRlci5pbmRleCA9IHZhbHVlXG4gICAqICAgICAgIEYtPj5GOiBvcHRpb25zID0gY29uZGl0aW9uc1xuICAgKiAgICAgZWxzZSBTdGVwIDIgKENvbmRpdGlvbilcbiAgICogICAgICAgRi0+PkY6IGxhc3RGaWx0ZXIuY29uZGl0aW9uID0gdmFsdWVcbiAgICogICAgICAgRi0+PkY6IG9wdGlvbnMgPSBbXVxuICAgKiAgICAgZWxzZSBTdGVwIDMgKFZhbHVlKVxuICAgKiAgICAgICBGLT4+RjogbGFzdEZpbHRlci52YWx1ZSA9IHZhbHVlXG4gICAqICAgICAgIEYtPj5GOiBBZGQgY29tcGxldGUgZmlsdGVyIHRvIGZpbHRlclZhbHVlXG4gICAqICAgICAgIEYtPj5GOiBSZXNldCBzdGVwIHRvIDFcbiAgICogICAgIGVuZFxuICAgKiAgICAgRi0+PkY6IEluY3JlbWVudCBzdGVwXG4gICAqICAgICBGLT4+RjogQ2xlYXIgaW5wdXQgJiBmb2N1c1xuICAgKiAgICAgRi0+PkY6IFNob3cgbmV4dCBvcHRpb25zXG4gICAqICAgZW5kXG4gICAqXG4gICAqIEBtZW1iZXJPZiBGaWx0ZXJDb21wb25lbnRcbiAgICovXG4gIGFkZEZpbHRlcih2YWx1ZTogc3RyaW5nLCBldmVudD86IEN1c3RvbUV2ZW50KTogdm9pZCB7XG4gICAgdmFsdWUgPSB2YWx1ZS50cmltKCk7XG4gICAgaWYoZXZlbnQgaW5zdGFuY2VvZiBLZXlib2FyZEV2ZW50ICYmICF2YWx1ZSkge1xuICAgICAgdGhpcy5zdWJtaXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgIGlmKCh2YWx1ZSAmJiAoIShldmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQpKSB8fCB0aGlzLnN0ZXAgPT09IDMpKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMubGFzdEZpbHRlcjtcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0ZXApIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBmaWx0ZXJbJ2luZGV4J10gPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuY29uZGl0aW9ucztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGZpbHRlclsnY29uZGl0aW9uJ10gPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IFtdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgZmlsdGVyWyd2YWx1ZSddID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmluZGV4ZXM7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZighdGhpcy5maWx0ZXJWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmZpbHRlclZhbHVlLnB1c2goZmlsdGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZih0aGlzLnN0ZXAgPT09IDEpXG4gICAgICAgICAgICB0aGlzLmZpbHRlclZhbHVlLnB1c2goZmlsdGVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnN0ZXAgPT09IDMpIHtcbiAgICAgICAgICB0aGlzLnN0ZXAgPSAwO1xuICAgICAgICAgIHRoaXMuZmlsdGVyVmFsdWVbdGhpcy5maWx0ZXJWYWx1ZS5sZW5ndGggLSAxXSA9IGZpbHRlcjtcbiAgICAgICAgICB0aGlzLmxhc3RGaWx0ZXIgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0ZXArKztcbiAgICAgICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgICAgICBpZih0aGlzLm9wdGlvbnMubGVuZ3RoKVxuICAgICAgICAgIHRoaXMuaGFuZGxlRm9jdXModGhpcy5vcHRpb25zKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gU2VsZWN0cyBhbiBvcHRpb24gZnJvbSB0aGUgZHJvcGRvd24gc3VnZ2VzdGlvbnMuXG4gICAqIEBzdW1tYXJ5IEhhbmRsZXMgb3B0aW9uIHNlbGVjdGlvbiB3aGVuIGEgdXNlciBjbGlja3Mgb24gYSBzdWdnZXN0aW9uIGluIHRoZSBkcm9wZG93bi5cbiAgICogVGhpcyBtZXRob2QgYWN0cyBhcyBhIGJyaWRnZSBiZXR3ZWVuIGRyb3Bkb3duIGNsaWNrcyBhbmQgdGhlIG1haW4gYWRkRmlsdGVyIGxvZ2ljLlxuICAgKlxuICAgKiBAcGFyYW0ge0N1c3RvbUV2ZW50fSBldmVudCAtIFRoZSBjbGljayBldmVudCBmcm9tIHRoZSBkcm9wZG93biBvcHRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVGhlIHNlbGVjdGVkIG9wdGlvbiB2YWx1ZVxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICogQG1lbWJlck9mIEZpbHRlckNvbXBvbmVudFxuICAgKi9cbiAgc2VsZWN0T3B0aW9uKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmFkZEZpbHRlcih2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIERldGVybWluZXMgaWYgYSBmaWx0ZXIgb3B0aW9uIGNhbiBiZSBpbmRpdmlkdWFsbHkgcmVtb3ZlZC5cbiAgICogQHN1bW1hcnkgQ2hlY2tzIHdoZXRoZXIgYSBmaWx0ZXIgY29tcG9uZW50IHNob3VsZCBkaXNwbGF5IGEgY2xvc2UgaWNvbiBmb3IgcmVtb3ZhbC5cbiAgICogT25seSB2YWx1ZSBvcHRpb25zIGNhbiBiZSByZW1vdmVkIGluZGl2aWR1YWxseTsgaW5kZXggYW5kIGNvbmRpdGlvbiBvcHRpb25zIGFyZSBwYXJ0XG4gICAqIG9mIHRoZSBjb21wbGV0ZSBmaWx0ZXIgc3RydWN0dXJlIGFuZCBjYW5ub3QgYmUgcmVtb3ZlZCBzZXBhcmF0ZWx5LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uIC0gVGhlIGZpbHRlciBvcHRpb24gdGV4dCB0byBjaGVja1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgb3B0aW9uIGNhbiBiZSBjbGVhcmVkIGluZGl2aWR1YWxseSwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqIEBtZW1iZXJPZiBGaWx0ZXJDb21wb25lbnRcbiAgICovXG4gIGFsbG93Q2xlYXIob3B0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleGVzLmluZGV4T2Yob3B0aW9uKSA9PT0gLTEgJiYgdGhpcy5jb25kaXRpb25zLmluZGV4T2Yob3B0aW9uKSA9PT0gLTE7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYSBjb21wbGV0ZSBmaWx0ZXIgZnJvbSB0aGUgY29sbGVjdGlvbiBiYXNlZCBvbiBmaWx0ZXIgdmFsdWUuXG4gICAqIEBzdW1tYXJ5IFJlbW92ZXMgYSBjb21wbGV0ZSBmaWx0ZXIgYnkgbWF0Y2hpbmcgdGhlIHByb3ZpZGVkIHZhbHVlIGFnYWluc3QgZmlsdGVyIHZhbHVlc1xuICAgKiBpbiB0aGUgY29sbGVjdGlvbi4gVXNlcyBzdHJpbmcgbm9ybWFsaXphdGlvbiB0byBoYW5kbGUgYWNjZW50cyBhbmQgY2FzZSBkaWZmZXJlbmNlcy5cbiAgICogQWZ0ZXIgcmVtb3ZhbCwgcmVzZXRzIHRoZSBpbnRlcmZhY2UgdG8gc2hvdyBhdmFpbGFibGUgaW5kZXhlcyBmb3IgbmV3IGZpbHRlciBjcmVhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbHRlciAtIFRoZSBmaWx0ZXIgdmFsdWUgdG8gcmVtb3ZlIChtYXRjaGVzIGFnYWluc3QgZmlsdGVyLnZhbHVlIHByb3BlcnR5KVxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICpcbiAgICogQG1lcm1haWRcbiAgICogc2VxdWVuY2VEaWFncmFtXG4gICAqICAgcGFydGljaXBhbnQgVSBhcyBVc2VyXG4gICAqICAgcGFydGljaXBhbnQgRiBhcyBGaWx0ZXJDb21wb25lbnRcbiAgICpcbiAgICogICBVLT4+RjogcmVtb3ZlRmlsdGVyKGZpbHRlclZhbHVlKVxuICAgKiAgIEYtPj5GOiBjbGVhblN0cmluZyhmaWx0ZXJWYWx1ZSlcbiAgICogICBGLT4+RjogRmlsdGVyIG91dCBtYXRjaGluZyBmaWx0ZXIgb2JqZWN0c1xuICAgKiAgIEYtPj5GOiBDbGVhciBpbnB1dCB2YWx1ZVxuICAgKiAgIEYtPj5GOiBoYW5kbGVGb2N1cyhpbmRleGVzKSAtIFJlc2V0IHRvIGluZGV4IHNlbGVjdGlvblxuICAgKiAgIE5vdGUgb3ZlciBGOiBGaWx0ZXIgcmVtb3ZlZCBhbmQgVUkgcmVzZXRcbiAgICpcbiAgICogQG1lbWJlck9mIEZpbHRlckNvbXBvbmVudFxuICAgKi9cbiAgcmVtb3ZlRmlsdGVyKGZpbHRlcjogc3RyaW5nKTogdm9pZCB7XG4gICAgZnVuY3Rpb24gY2xlYW5TdHJpbmcoZmlsdGVyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGZpbHRlclxuICAgICAgICAudG9Mb3dlckNhc2UoKSAgICAgICAgICAgICAgICAgLy8gY29udmVydCBhbGwgY2hhcmFjdGVycyB0byBsb3dlcmNhc2VcbiAgICAgICAgLm5vcm1hbGl6ZShcIk5GRFwiKSAgICAgICAgICAgICAgLy8gc2VwYXJhdGUgYWNjZW50IG1hcmtzIGZyb20gY2hhcmFjdGVyc1xuICAgICAgICAucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIikgLy8gcmVtb3ZlIGFjY2VudCBtYXJrc1xuICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCBcIlwiKTsgICAgICAgICAgLy8gcmVtb3ZlIGFsbCB3aGl0ZXNwYWNlXG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSBcIlwiO1xuICAgIHRoaXMuZmlsdGVyVmFsdWUgPSB0aGlzLmZpbHRlclZhbHVlLmZpbHRlcigoaXRlbSkgPT4gaXRlbT8uWyd2YWx1ZSddICYmIGNsZWFuU3RyaW5nKGl0ZW0/LlsndmFsdWUnXSkgIT09IGNsZWFuU3RyaW5nKGZpbHRlcikpO1xuICAgIGlmKHRoaXMuZmlsdGVyVmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnN0ZXAgPSAxO1xuICAgICAgdGhpcy5sYXN0RmlsdGVyID0ge307XG4gICAgfVxuICAgIHRoaXMuaGFuZGxlRm9jdXModGhpcy5pbmRleGVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUmVzZXRzIHRoZSBjb21wb25lbnQgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG4gICAqIEBzdW1tYXJ5IENsZWFycyBhbGwgZmlsdGVyIGRhdGEsIG9wdGlvbnMsIGFuZCByZXNldHMgdGhlIHN0ZXAgY291bnRlciB0byAxLlxuICAgKiBUaGlzIG1ldGhvZCBwcm92aWRlcyBhIGNsZWFuIHNsYXRlIGZvciBuZXcgZmlsdGVyIGNyZWF0aW9uIHdpdGhvdXQgZW1pdHRpbmcgZXZlbnRzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICogQG1lbWJlck9mIEZpbHRlckNvbXBvbmVudFxuICAgKi9cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSB0aGlzLmZpbHRlclZhbHVlID0gW107XG4gICAgdGhpcy5zdGVwID0gMTtcbiAgICB0aGlzLmxhc3RGaWx0ZXIgPSB7fTtcbiAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgdGhpcy5zdWJtaXQoKTtcbiAgICB9LCAxMDApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDbGVhcnMgYWxsIGZpbHRlcnMgYW5kIG5vdGlmaWVzIHBhcmVudCBjb21wb25lbnRzLlxuICAgKiBAc3VtbWFyeSBSZXNldHMgdGhlIGNvbXBvbmVudCBzdGF0ZSBhbmQgZW1pdHMgdW5kZWZpbmVkIHRvIG5vdGlmeSBwYXJlbnQgY29tcG9uZW50c1xuICAgKiB0aGF0IGFsbCBmaWx0ZXJzIGhhdmUgYmVlbiBjbGVhcmVkLiBUaGlzIHRyaWdnZXJzIGFueSBjb25uZWN0ZWQgZGF0YSByZWZyZXNoIGxvZ2ljLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBPcHRpb25hbCBwYXJhbWV0ZXIgKGN1cnJlbnRseSB1bnVzZWQpXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKiBAbWVtYmVyT2YgRmlsdGVyQ29tcG9uZW50XG4gICAqL1xuICBjbGVhcih2YWx1ZT86IHN0cmluZyk6IHZvaWQge1xuICAgIGlmKCF2YWx1ZSlcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gU3VibWl0cyB0aGUgY3VycmVudCBmaWx0ZXIgY29sbGVjdGlvbiB0byBwYXJlbnQgY29tcG9uZW50cy5cbiAgICogQHN1bW1hcnkgRW1pdHMgdGhlIGN1cnJlbnQgZmlsdGVyIGFycmF5IHRvIHBhcmVudCBjb21wb25lbnRzIHdoZW4gZmlsdGVycyBhcmUgcmVhZHlcbiAgICogdG8gYmUgYXBwbGllZC4gT25seSBlbWl0cyBpZiB0aGVyZSBhcmUgYWN0aXZlIGZpbHRlcnMuIENsZWFycyBvcHRpb25zIGFmdGVyIHN1Ym1pc3Npb24uXG4gICAqXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKiBAbWVtYmVyT2YgRmlsdGVyQ29tcG9uZW50XG4gICAqL1xuICBzdWJtaXQoKTogdm9pZCB7XG4gICAgdGhpcy5maWx0ZXJFdmVudC5lbWl0KHtcbiAgICAgIHF1ZXJ5OiB0aGlzLmZpbHRlclZhbHVlLmxlbmd0aCA+IDAgPyB0aGlzLmZpbHRlclZhbHVlIDogdW5kZWZpbmVkLFxuICAgICAgc29ydDoge1xuICAgICAgICB2YWx1ZTogdGhpcy5zb3J0VmFsdWUsXG4gICAgICAgIGRpcmVjdGlvbjogdGhpcy5zb3J0RGlyZWN0aW9uXG4gICAgICB9XG4gICAgfSBhcyBJRmlsdGVyUXVlcnkpO1xuICAgIGlmKHRoaXMuZmlsdGVyVmFsdWUubGVuZ3RoID09PSAwKVxuICAgICAgdGhpcy5vcHRpb25zID0gW107XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFRvZ2dsZXMgdGhlIHNvcnQgZGlyZWN0aW9uIGJldHdlZW4gYXNjZW5kaW5nIGFuZCBkZXNjZW5kaW5nLlxuICAgKiBAc3VtbWFyeSBIYW5kbGVzIHNvcnQgZGlyZWN0aW9uIGNoYW5nZXMgYnkgdG9nZ2xpbmcgYmV0d2VlbiBBU0MgYW5kIERTQyB2YWx1ZXMuXG4gICAqIFdoZW4gdGhlIGRpcmVjdGlvbiBjaGFuZ2VzLCBhdXRvbWF0aWNhbGx5IHRyaWdnZXJzIGEgc3VibWl0IHRvIGFwcGx5IHRoZSBuZXdcbiAgICogc29ydGluZyBjb25maWd1cmF0aW9uIHRvIHRoZSBmaWx0ZXJlZCByZXN1bHRzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICogQG1lbWJlck9mIEZpbHRlckNvbXBvbmVudFxuICAgKi9cbiAgIGhhbmRsZVNvcnREaXJlY3Rpb25DaGFuZ2UoKTogdm9pZCB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5zb3J0RGlyZWN0aW9uID09PSAgT3JkZXJEaXJlY3Rpb24uQVNDID8gT3JkZXJEaXJlY3Rpb24uRFNDIDogT3JkZXJEaXJlY3Rpb24uQVNDO1xuICAgIGlmKGRpcmVjdGlvbiAhPT0gdGhpcy5zb3J0RGlyZWN0aW9uKSB7XG4gICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICB0aGlzLnN1Ym1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gSGFuZGxlcyBzb3J0IGZpZWxkIHNlbGVjdGlvbiBjaGFuZ2VzIGZyb20gdGhlIGRyb3Bkb3duLlxuICAgKiBAc3VtbWFyeSBQcm9jZXNzZXMgc29ydCBmaWVsZCBjaGFuZ2VzIHdoZW4gdXNlcnMgc2VsZWN0IGEgZGlmZmVyZW50IGZpZWxkXG4gICAqIGZyb20gdGhlIHNvcnQgZHJvcGRvd24uIFVwZGF0ZXMgdGhlIHNvcnRWYWx1ZSBwcm9wZXJ0eSBhbmQgdHJpZ2dlcnNcbiAgICogYSBzdWJtaXQgdG8gYXBwbHkgdGhlIG5ldyBzb3J0aW5nIGNvbmZpZ3VyYXRpb24gaWYgdGhlIHZhbHVlIGhhcyBjaGFuZ2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge0N1c3RvbUV2ZW50fSBldmVudCAtIFRoZSBzZWxlY3QgY2hhbmdlIGV2ZW50IGNvbnRhaW5pbmcgdGhlIG5ldyBzb3J0IGZpZWxkIHZhbHVlXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKiBAbWVtYmVyT2YgRmlsdGVyQ29tcG9uZW50XG4gICAqL1xuICBoYW5kbGVTb3J0Q2hhbmdlKGV2ZW50OiBDdXN0b21FdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW9uU2VsZWN0RWxlbWVudDtcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICBpZih2YWx1ZSAhPT0gdGhpcy5zb3J0VmFsdWUpIHtcbiAgICAgIHRoaXMuc29ydFZhbHVlID0gdmFsdWUgYXMgc3RyaW5nO1xuICAgICAgdGhpcy5zdWJtaXQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEZpbHRlcnMgYXZhaWxhYmxlIG9wdGlvbnMgYmFzZWQgb24gdXNlciBpbnB1dCB3aXRoIHZpc3VhbCBoaWdobGlnaHRpbmcuXG4gICAqIEBzdW1tYXJ5IFBlcmZvcm1zIHJlYWwtdGltZSBmaWx0ZXJpbmcgb2YgYXZhaWxhYmxlIG9wdGlvbnMgYmFzZWQgb24gdXNlciBpbnB1dC5cbiAgICogQWxzbyBoYW5kbGVzIHZpc3VhbCBoaWdobGlnaHRpbmcgb2YgbWF0Y2hpbmcgb3B0aW9ucyBpbiB0aGUgZHJvcGRvd24uIFJldHVybnMgYWxsXG4gICAqIG9wdGlvbnMgaWYgaW5wdXQgaXMgbGVzcyB0aGFuIDIgY2hhcmFjdGVycyBmb3IgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZyB8IG51bGwgfCB1bmRlZmluZWR9IHZhbHVlIC0gVGhlIHNlYXJjaCB2YWx1ZSB0byBmaWx0ZXIgYnlcbiAgICogQHJldHVybnMge3N0cmluZ1tdfSBBcnJheSBvZiBmaWx0ZXJlZCBvcHRpb25zIHRoYXQgbWF0Y2ggdGhlIGlucHV0XG4gICAqXG4gICAqIEBtZXJtYWlkXG4gICAqIHNlcXVlbmNlRGlhZ3JhbVxuICAgKiAgIHBhcnRpY2lwYW50IFUgYXMgVXNlclxuICAgKiAgIHBhcnRpY2lwYW50IEYgYXMgRmlsdGVyQ29tcG9uZW50XG4gICAqICAgcGFydGljaXBhbnQgRCBhcyBET01cbiAgICpcbiAgICogICBVLT4+RjogZmlsdGVyT3B0aW9ucyhpbnB1dFZhbHVlKVxuICAgKiAgIGFsdCBpbnB1dFZhbHVlIDwgMiBjaGFyYWN0ZXJzXG4gICAqICAgICBGLT4+RDogUmVtb3ZlIGV4aXN0aW5nIGhpZ2hsaWdodHNcbiAgICogICAgIEYtLT4+VTogUmV0dXJuIGFsbCBvcHRpb25zXG4gICAqICAgZWxzZSBpbnB1dFZhbHVlID49IDIgY2hhcmFjdGVyc1xuICAgKiAgICAgRi0+PkQ6IFF1ZXJ5IGFsbCBvcHRpb24gZWxlbWVudHNcbiAgICogICAgIEYtPj5EOiBBZGQgaGlnaGxpZ2h0IHRvIGZpcnN0IG1hdGNoaW5nIG9wdGlvblxuICAgKiAgICAgRi0+PkY6IEZpbHRlciBvcHRpb25zIGJ5IHN1YnN0cmluZyBtYXRjaFxuICAgKiAgICAgRi0tPj5VOiBSZXR1cm4gZmlsdGVyZWQgb3B0aW9uc1xuICAgKiAgIGVuZFxuICAgKlxuICAgKiBAbWVtYmVyT2YgRmlsdGVyQ29tcG9uZW50XG4gICAqL1xuICBmaWx0ZXJPcHRpb25zKHZhbHVlOiBzdHJpbmcgfCBudWxsIHwgIHVuZGVmaW5lZCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBvcHRpb25zRWxlbWVudCA9IHRoaXMub3B0aW9uc0ZpbHRlckVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBpZighdmFsdWU/Lmxlbmd0aCB8fCAhdmFsdWUgfHwgdmFsdWUubGVuZ3RoIDwgMikge1xuICAgICAgY29uc3QgZmlsdGVyZWRPcHRpb24gPSBvcHRpb25zRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGNmLWZpbHRlcmluZy1pdGVtJyk7XG4gICAgICBpZihmaWx0ZXJlZE9wdGlvbilcbiAgICAgICAgZmlsdGVyZWRPcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnZGNmLWZpbHRlcmluZy1pdGVtJyk7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zO1xuICAgIH1cbiAgICBjb25zdCBvcHRpb25zID0gb3B0aW9uc0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRjZi1pdGVtJyk7XG4gICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgICAgY29uc3QgaXNBY3RpdmUgPSBvcHRpb24udGV4dENvbnRlbnQ/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUudG9Mb3dlckNhc2UoKSk7XG4gICAgICBpZihpc0FjdGl2ZSkge1xuICAgICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZCgnZGNmLWZpbHRlcmluZy1pdGVtJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcigob3B0aW9uOiBzdHJpbmcpID0+IG9wdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbHVlLnRvTG93ZXJDYXNlKCkgYXMgc3RyaW5nKSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEhhbmRsZXMgc2VhcmNoIGV2ZW50cyBmcm9tIHRoZSBpbnRlZ3JhdGVkIHNlYXJjaGJhciBjb21wb25lbnQuXG4gICAqIEBzdW1tYXJ5IFByb2Nlc3NlcyBzZWFyY2ggaW5wdXQgZnJvbSB0aGUgc2VhcmNoYmFyIGFuZCBlbWl0cyBzZWFyY2ggZXZlbnRzXG4gICAqIHRvIHBhcmVudCBjb21wb25lbnRzLiBUaGlzIG1ldGhvZCBhY3RzIGFzIGEgYnJpZGdlIGJldHdlZW4gdGhlIGludGVybmFsXG4gICAqIHNlYXJjaGJhciBjb21wb25lbnQgYW5kIGV4dGVybmFsIHNlYXJjaCBldmVudCBsaXN0ZW5lcnMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgdW5kZWZpbmVkfSB2YWx1ZSAtIFRoZSBzZWFyY2ggdmFsdWUgZW50ZXJlZCBieSB0aGUgdXNlclxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICogQG1lbWJlck9mIEZpbHRlckNvbXBvbmVudFxuICAgKi9cbiAgaGFuZGxlU2VhcmNoKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaEV2ZW50LmVtaXQodmFsdWUpO1xuICB9XG5cbn1cbiIsIlxuQGlmKCFpbmRleGVzLmxlbmd0aCkge1xuICA8bmd4LWRlY2FmLXNlYXJjaGJhciBbZW1pdEV2ZW50VG9XaW5kb3ddPVwiZmFsc2VcIiBbZGVib3VuY2VdPVwiNTAwXCIgKHNlYXJjaEV2ZW50KT1cImhhbmRsZVNlYXJjaCgkZXZlbnQpXCIgLz5cbn1cblxuPGRpdiBbaWRdPVwidWlkXCIgY2xhc3M9XCJkY2YtZ3JpZCBkY2YtZ3JpZC1zbWFsbCBkY2YtZ3JpZC1tYXRjaCBkY2YtZmlsdGVyLWdyaWRcIiBbbmdDbGFzc109XCJ7J2RjZi1oaWRkZW4nOiAhaW5kZXhlcy5sZW5ndGh9XCI+XG4gIDxkaXYgY2xhc3M9XCJkY2Ytd2lkdGgtZXhwYW5kXCI+XG4gICAgPGRpdiBjbGFzcz1cImRjZi1maWx0ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkY2YtaW5wdXRcIj5cbiAgICAgICAgQGZvcihmaWx0ZXIgb2YgZmlsdGVyVmFsdWU7IHRyYWNrIHRyYWNrSXRlbUZuKCRpbmRleCwgZmlsdGVyPy5bJ2luZGV4J10pKSB7XG4gICAgICAgICAgQGlmKGZpbHRlcj8uWydpbmRleCddKSB7XG4gICAgICAgICAgICA8aW9uLWNoaXAgW291dGxpbmVdPVwidHJ1ZVwiPnt7IGZpbHRlcj8uWydpbmRleCddIH19PC9pb24tY2hpcD5cbiAgICAgICAgICB9XG4gICAgICAgICAgQGlmKGZpbHRlcj8uWydjb25kaXRpb24nXSkge1xuICAgICAgICAgICAgPGlvbi1jaGlwIFtvdXRsaW5lXT1cInRydWVcIj57eyBmaWx0ZXI/LlsnY29uZGl0aW9uJ10gfX08L2lvbi1jaGlwPlxuICAgICAgICAgIH1cbiAgICAgICAgICBAaWYoZmlsdGVyPy5bJ3ZhbHVlJ10pIHtcbiAgICAgICAgICAgIDxpb24tY2hpcCBbb3V0bGluZV09XCJ0cnVlXCIgY2xhc3M9XCJkY2YtZmlsdGVyLXZhbHVlXCI+XG4gICAgICAgICAgICAgIHt7IGZpbHRlcj8uWyd2YWx1ZSddIH19XG4gICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiY2xvc2VcIiAoY2xpY2spPVwicmVtb3ZlRmlsdGVyKGZpbHRlcj8uWyd2YWx1ZSddKVwiIHNpemU9XCJzbWFsbFwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8L2lvbi1jaGlwPlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGNmLXdpZHRoLTEtMVwiPlxuICAgICAgICAgICAgIDwhLS0gW3JlYWRvbmx5XT1cInN0ZXAgIT09IDNcIiAtLT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxuICAgICAgICAgICAgKGtleWRvd24uZW50ZXIpPVwiYWRkRmlsdGVyKHZhbHVlLCAkZXZlbnQpXCJcbiAgICAgICAgICAgIChrZXlkb3duLmJhY2tzcGFjZSk9XCJjbGVhcih2YWx1ZSlcIlxuICAgICAgICAgICAgKGlucHV0KT1cImhhbmRsZUlucHV0KCRldmVudClcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImhhbmRsZUZvY3VzKClcIlxuICAgICAgICAgICAgKGJsdXIpPVwiaGFuZGxlQmx1cigpXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcblxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyBsb2NhbGUgKyAoc3RlcCA9PT0gMyA/ICcudHlwZScgOiAnLnNlbGVjdCcpIHwgdHJhbnNsYXRlIH19XCJcbiAgICAgICAgICAgICNjb21wb25lbnRcbiAgICAgICAgICAvPlxuICAgICAgICAgIEBpZih3aW5kb3dXaWR0aCA+PSA3NjgpIHtcbiAgICAgICAgICAgIDxkaXYgW2NsYXNzXT1cIidkY2YtZHJvcGRvd24gJyArIChvcHRpb25zLmxlbmd0aCA+IDAgPyAnIGRjZi1hY3RpdmUnIDogJycpXCIgI29wdGlvbnNGaWx0ZXJFbGVtZW50PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIEBpZihmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgQGZvcihrZXkgb2YgZmlsdGVyZWRPcHRpb25zOyB0cmFjayBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZGNmLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgKGtleWRvd24uZW50ZXIpPVwic2VsZWN0T3B0aW9uKGtleSlcIlxuICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RPcHRpb24oa2V5KVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt7IGtleSB9fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkY2YtZW1wdHlcIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiZmlsdGVyZWRPcHRpb25zID0gb3B0aW9uczsgdmFsdWUgPSAnJ1wiXG4gICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgICAgICAgICAgIChrZXlkb3duLmVudGVyKT1cImZpbHRlcmVkT3B0aW9ucyA9IG9wdGlvbnM7IHZhbHVlID0gJydcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7eyBsb2NhbGUgKyAnLm5vX3N1Z2dlc3Rpb25zJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIEBpZihmaWx0ZXJWYWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkY2YtaWNvbi1jbGVhclwiPlxuICAgICAgICAgIDxpb24tYnV0dG9uIGZpbGw9XCJjbGVhclwiIHNpemU9XCJzbWFsbFwiIChjbGljayk9XCJjbGVhcigpXCI+XG4gICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cInRyYXNoLW91dGxpbmVcIiBbY29sb3JdPVwiIWlzRGFya01vZGUgPyAnZGFyaycgOiAnbWVkaXVtJ1wiIHNsb3Q9XCJpY29uLW9ubHlcIj48L2lvbi1pY29uPlxuICAgICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgICA8ZGl2IGNsYXNzPVwiZGNmLWljb24tc2VhcmNoXCI+XG4gICAgICAgIDxpb24tYnV0dG9uIGZpbGw9XCJjbGVhclwiIHNpemU9XCJzbWFsbFwiIChjbGljayk9XCJzdWJtaXQoKVwiPlxuICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwic2VhcmNoLW91dGxpbmVcIiBbY29sb3JdPVwiIWlzRGFya01vZGUgPyAnZGFyaycgOiAnbWVkaXVtJ1wiIHNsb3Q9XCJpY29uLW9ubHlcIj48L2lvbi1pY29uPlxuICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBAaWYod2luZG93V2lkdGggPCA3NjgpIHtcbiAgICAgIDxkaXYgW2NsYXNzXT1cIidkY2YtZHJvcGRvd24gJyArIChvcHRpb25zLmxlbmd0aCA+IDAgPyAnIGRjZi1hY3RpdmUnIDogJycpXCIgI29wdGlvbnNGaWx0ZXJFbGVtZW50PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIEBpZihmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgQGZvcihrZXkgb2YgZmlsdGVyZWRPcHRpb25zOyB0cmFjayBrZXkpIHtcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZGNmLWl0ZW1cIlxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgICAgICAgKGtleWRvd24uZW50ZXIpPVwic2VsZWN0T3B0aW9uKGtleSlcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RPcHRpb24oa2V5KVwiPlxuICAgICAgICAgICAgICAgIHt7IGtleSB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkY2YtZW1wdHlcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImZpbHRlcmVkT3B0aW9ucyA9IG9wdGlvbnM7IHZhbHVlID0gJydcIlxuICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgICAgIChrZXlkb3duLmVudGVyKT1cImZpbHRlcmVkT3B0aW9ucyA9IG9wdGlvbnM7IHZhbHVlID0gJydcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eyBsb2NhbGUgKyAnLm5vX3N1Z2dlc3Rpb25zJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgPC9kaXY+XG4gIEBpZighZGlzYWJsZVNvcnQpIHtcbiAgICA8ZGl2IGNsYXNzPVwiZGNmLXdpZHRoLTEtNUBtIGRjZi13aWR0aC0xLTEgZGNmLXNvcnQtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGNmLWdyaWQgZGNmLWdyaWQtY29sbGFwc2UgZGNmLWZsZXggZGNmLWZsZXgtbWlkZGxlIGRjZi1ncmlkLW1hdGNoXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkY2Ytd2lkdGgtZXhwYW5kXCI+XG4gICAgICAgICAgPGlvbi1zZWxlY3RcbiAgICAgICAgICAgICAgdG9nZ2xlSWNvbj1cImNoZXZyb24tZG93bi1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgZXhwYW5kZWRJY29uPVwiY2hldnJvbi11cC1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJkY2Ytc29ydC1zZWxlY3RcIlxuICAgICAgICAgICAgICAoaW9uQ2hhbmdlKT1cImhhbmRsZVNvcnRDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgICAgIGludGVyZmFjZT1cInBvcG92ZXJcIlxuICAgICAgICAgICAgICBbdmFsdWVdPVwic29ydFZhbHVlXCJcbiAgICAgICAgICAgICAgbGFiZWwtcGxhY2VtZW50PVwiZmxvYXRpbmdcIlxuICAgICAgICAgICAgICBmaWxsPVwib3V0bGluZVwiXG4gICAgICAgICAgICAgIFtsYWJlbF09XCJsb2NhbGUgKyAnLnNvcnQnIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIEBmb3Ioc29ydCBvZiBzb3J0Qnk7IHRyYWNrIHNvcnQpIHtcblxuICAgICAgICAgICAgICA8aW9uLXNlbGVjdC1vcHRpb24gW3ZhbHVlXT1cInNvcnRcIj57eyBzb3J0IHwgdHJhbnNsYXRlIH19PC9pb24tc2VsZWN0LW9wdGlvbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2lvbi1zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGNmLXdpZHRoLWF1dG9cIj5cbiAgICAgICAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwiaGFuZGxlU29ydERpcmVjdGlvbkNoYW5nZSgpXCIgZmlsbD1cImNsZWFyXCI+XG4gICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIFtjb2xvcl09XCIhaXNEYXJrTW9kZSA/ICdwcmltYXJ5JyA6ICdtZWRpdW0nXCIgW25hbWVdPVwic29ydERpcmVjdGlvbiA9PT0gJ2Rlc2MnID8gJ2Fycm93LWRvd24tb3V0bGluZScgOiAnYXJyb3ctdXAtb3V0bGluZSdcIj48L2lvbi1pY29uPlxuICAgICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgfVxuPC9kaXY+XG5cblxuIl19