import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, Output, Input, HostListener } from '@angular/core';
import { IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonRefresher, IonRefresherContent, IonSkeletonText, IonText, IonThumbnail, IonLoading } from '@ionic/angular/standalone';
import { debounceTime, Subject } from 'rxjs';
import { OperationKeys } from '@decaf-ts/db-decorators';
import { Model, Primitives } from '@decaf-ts/decorator-validation';
import { Condition, OrderDirection } from '@decaf-ts/core';
import { Dynamic, EventConstants, ComponentsTagNames } from '../../engine';
import { ForAngularModule } from '../../for-angular.module';
import { NgxBaseComponent } from '../../engine/NgxBaseComponent';
import { stringToBoolean, formatDate, isValidDate } from '../../helpers';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { EmptyStateComponent } from '../empty-state/empty-state.component';
import { ListItemComponent } from '../list-item/list-item.component';
import { ComponentRendererComponent } from '../component-renderer/component-renderer.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { ListComponentsTypes } from './constants';
import { FilterComponent } from '../filter/filter.component';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular/standalone";
import * as i2 from "@angular/common";
import * as i3 from "@ngx-translate/core";
const _c0 = ["*"];
const _c1 = (a0, a1, a2) => ({ item: a0, mapper: a1, route: a2 });
function ListComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-refresher", 2);
    i0.ɵɵlistener("ionRefresh", function ListComponent_Conditional_0_Template_ion_refresher_ionRefresh_0_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.handleRefresh($event)); });
    i0.ɵɵelement(1, "ion-refresher-content");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("pullFactor", 1)("pullMin", 100)("pullMax", 200);
} }
function ListComponent_Conditional_1_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-decaf-filter", 5);
    i0.ɵɵlistener("filterEvent", function ListComponent_Conditional_1_Conditional_0_Template_ngx_decaf_filter_filterEvent_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.handleFilter($event)); })("searchEvent", function ListComponent_Conditional_1_Conditional_0_Template_ngx_decaf_filter_searchEvent_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.handleSearch($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("model", ctx_r1.model)("sortDirection", ctx_r1.sortDirection)("disableSort", ctx_r1.disableSort);
} }
function ListComponent_Conditional_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-decaf-searchbar", 6);
    i0.ɵɵlistener("searchEvent", function ListComponent_Conditional_1_Conditional_1_Template_ngx_decaf_searchbar_searchEvent_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.handleSearch($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("emitEventToWindow", false)("debounce", 500);
} }
function ListComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListComponent_Conditional_1_Conditional_0_Template, 1, 3, "ngx-decaf-filter", 3)(1, ListComponent_Conditional_1_Conditional_1_Template, 1, 2, "ngx-decaf-searchbar", 4);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵconditional(ctx_r1.model && ctx_r1.enableFilter ? 0 : 1);
} }
function ListComponent_Conditional_2_Conditional_2_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-decaf-component-renderer", 9);
    i0.ɵɵlistener("listenEvent", function ListComponent_Conditional_2_Conditional_2_For_1_Template_ngx_decaf_component_renderer_listenEvent_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.handleEvent($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r6 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("tag", ctx_r1.item.tag)("globals", i0.ɵɵpureFunction3(2, _c1, child_r6, ctx_r1.mapper, ctx_r1.route));
} }
function ListComponent_Conditional_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, ListComponent_Conditional_2_Conditional_2_For_1_Template, 1, 6, "ngx-decaf-component-renderer", 8, i0.ɵɵcomponentInstance().trackItemFn, true);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵrepeater(ctx_r1.items);
} }
function ListComponent_Conditional_2_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function ListComponent_Conditional_2_Conditional_4_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-decaf-pagination", 12);
    i0.ɵɵlistener("clickEvent", function ListComponent_Conditional_2_Conditional_4_Conditional_0_Template_ngx_decaf_pagination_clickEvent_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.handlePaginate($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("totalPages", ctx_r1.pages)("current", ctx_r1.page);
} }
function ListComponent_Conditional_2_Conditional_4_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-infinite-scroll", 13);
    i0.ɵɵlistener("ionInfinite", function ListComponent_Conditional_2_Conditional_4_Conditional_1_Template_ion_infinite_scroll_ionInfinite_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.handleRefresh($event)); });
    i0.ɵɵelement(1, "ion-infinite-scroll-content", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMap((ctx_r1.searchValue == null ? null : ctx_r1.searchValue.length) ? "dcf-hidden" : "");
    i0.ɵɵproperty("position", ctx_r1.scrollPosition)("threshold", ctx_r1.scrollThreshold);
    i0.ɵɵadvance();
    i0.ɵɵproperty("loadingSpinner", ctx_r1.loadingSpinner)("loadingText", ctx_r1.loadingText);
} }
function ListComponent_Conditional_2_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListComponent_Conditional_2_Conditional_4_Conditional_0_Template, 1, 2, "ngx-decaf-pagination", 10)(1, ListComponent_Conditional_2_Conditional_4_Conditional_1_Template, 2, 6, "ion-infinite-scroll", 11);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵconditional(ctx_r1.pages > 0 && ctx_r1.type === "paginated" && !(ctx_r1.searchValue == null ? null : ctx_r1.searchValue.length) ? 0 : 1);
} }
function ListComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-list", 7, 0);
    i0.ɵɵtemplate(2, ListComponent_Conditional_2_Conditional_2_Template, 2, 0)(3, ListComponent_Conditional_2_Conditional_3_Template, 1, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, ListComponent_Conditional_2_Conditional_4_Template, 2, 1);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", ctx_r1.uid)("inset", ctx_r1.inset)("lines", ctx_r1.lines);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional((ctx_r1.item == null ? null : ctx_r1.item.tag) ? 2 : 3);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.loadMoreData ? 4 : -1);
} }
function ListComponent_Conditional_3_Conditional_0_ion_item_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-item")(1, "ion-thumbnail", 16);
    i0.ɵɵelement(2, "ion-skeleton-text", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ion-label");
    i0.ɵɵelement(4, "ion-skeleton-text", 17);
    i0.ɵɵelementStart(5, "ion-text", 18);
    i0.ɵɵelement(6, "ion-skeleton-text", 17);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("animated", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("animated", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("animated", true);
} }
function ListComponent_Conditional_3_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListComponent_Conditional_3_Conditional_0_ion_item_0_Template, 7, 3, "ion-item", 15);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.skeletonData);
} }
function ListComponent_Conditional_3_Conditional_1_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-decaf-empty-state", 19);
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵpipe(3, "translate");
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("title", i0.ɵɵpipeBind1(1, 4, ctx_r1.locale + "." + ctx_r1.empty.title))("subtitle", i0.ɵɵpipeBind1(2, 6, ctx_r1.locale + "." + ctx_r1.empty.subtitle))("buttonText", ctx_r1.empty.showButton ? i0.ɵɵpipeBind1(3, 8, ctx_r1.locale + "." + ctx_r1.empty.button) : "")("buttonLink", ctx_r1.empty.showButton ? ctx_r1.empty.route : "");
} }
function ListComponent_Conditional_3_Conditional_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-decaf-empty-state", 20);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("translatable", true)("searchValue", ctx_r1.searchValue);
} }
function ListComponent_Conditional_3_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListComponent_Conditional_3_Conditional_1_Conditional_0_Template, 4, 10, "ngx-decaf-empty-state", 19)(1, ListComponent_Conditional_3_Conditional_1_Conditional_1_Template, 1, 2, "ngx-decaf-empty-state", 20);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵconditional(!(ctx_r1.searchValue == null ? null : ctx_r1.searchValue.length) ? 0 : 1);
} }
function ListComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListComponent_Conditional_3_Conditional_0_Template, 1, 1, "ion-item")(1, ListComponent_Conditional_3_Conditional_1_Template, 2, 1);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵconditional(ctx_r1.refreshing ? 0 : 1);
} }
/**
 * @description A versatile list component that supports various data display modes.
 * @summary This component provides a flexible way to display lists of data with support
 * for infinite scrolling, pagination, searching, and custom item rendering. It can fetch
 * data from various sources including models, functions, or direct data input.
 *
 * The component supports two main display types:
 * 1. Infinite scrolling - Loads more data as the user scrolls
 * 2. Pagination - Displays data in pages with navigation controls
 *
 * Additional features include:
 * - Pull-to-refresh functionality
 * - Search filtering
 * - Empty state customization
 * - Custom item rendering
 * - Event emission for interactions
 *
 * @mermaid
 * sequenceDiagram
 *   participant U as User
 *   participant L as ListComponent
 *   participant D as Data Source
 *   participant E as External Components
 *
 *   U->>L: Initialize component
 *   L->>L: ngOnInit()
 *   L->>D: Request initial data
 *   D-->>L: Return data
 *   L->>L: Process and display data
 *
 *   alt User scrolls (Infinite mode)
 *     U->>L: Scroll to bottom
 *     L->>D: Request more data
 *     D-->>L: Return additional data
 *     L->>L: Append to existing data
 *   else User changes page (Paginated mode)
 *     U->>L: Click page number
 *     L->>L: handlePaginate()
 *     L->>D: Request data for page
 *     D-->>L: Return page data
 *     L->>L: Replace displayed data
 *   end
 *
 *   alt User searches
 *     U->>L: Enter search term
 *     L->>L: handleSearch()
 *     L->>D: Filter data by search term
 *     D-->>L: Return filtered data
 *     L->>L: Update displayed data
 *   end
 *
 *   alt User clicks item
 *     U->>L: Click list item
 *     L->>L: handleClick()
 *     L->>E: Emit clickEvent
 *   end
 *
 * @example
 * <ngx-decaf-list
 *   [source]="dataSource"
 *   [limit]="10"
 *   [type]="'infinite'"
 *   [showSearchbar]="true"
 *   (clickEvent)="handleItemClick($event)"
 *   (refreshEvent)="handleRefresh($event)">
 * </ngx-decaf-list>
 *
 * @extends {NgxBaseComponent}
 * @implements {OnInit}
 */
let ListComponent = class ListComponent extends NgxBaseComponent {
    /**
     * @description Initializes a new instance of the ListComponent.
     * @summary Creates a new ListComponent and sets up the base component with the appropriate
     * component name. This constructor is called when Angular instantiates the component and
     * before any input properties are set. It passes the component name to the parent class
     * constructor to enable proper localization and component identification.
     *
     * The constructor is intentionally minimal, with most initialization logic deferred to
     * the ngOnInit lifecycle hook. This follows Angular best practices by keeping the constructor
     * focused on dependency injection and basic setup, while complex initialization that depends
     * on input properties is handled in ngOnInit.
     *
     * @memberOf ListComponent
     */
    constructor() {
        super("ListComponent");
        /**
         * @description The display mode for the list component.
         * @summary Determines how the list data is loaded and displayed. Options include:
         * - INFINITE: Loads more data as the user scrolls (infinite scrolling)
         * - PAGINATED: Displays data in pages with navigation controls
         *
         * @type {ListComponentsTypes}
         * @default ListComponentsTypes.INFINITE
         * @memberOf ListComponent
         */
        this.type = ListComponentsTypes.INFINITE;
        /**
         * @description Controls whether the component uses translation services.
         * @summary When set to true, the component will attempt to use translation services
         * for any text content. This allows for internationalization of the list component.
         *
         * @type {StringOrBoolean}
         * @default true
         * @memberOf ListComponent
         */
        this.translatable = true;
        /**
         * @description Controls the visibility of the search bar.
         * @summary When set to true, displays a search bar at the top of the list that allows
         * users to filter the list items. The search functionality works by filtering the
         * existing data or by triggering a new data fetch with search parameters.
         *
         * @type {StringOrBoolean}
         * @default true
         * @memberOf ListComponent
         */
        this.showSearchbar = true;
        /**
         * @description Direct data input for the list component.
         * @summary Provides a way to directly pass data to the list component instead of
         * fetching it from a source. When both data and source are provided, the component
         * will use the source to fetch data only if the data array is empty.
         *
         * @type {KeyValue[] | undefined}
         * @default undefined
         * @memberOf ListComponent
         */
        this.data = undefined;
        /**
         * @description The starting index for data fetching.
         * @summary Specifies the index from which to start fetching data. This is used
         * for pagination and infinite scrolling to determine which subset of data to load.
         *
         * @type {number}
         * @default 0
         * @memberOf ListComponent
         */
        this.start = 0;
        /**
         * @description The number of items to fetch per page or load operation.
         * @summary Determines how many items are loaded at once during pagination or
         * infinite scrolling. This affects the size of data chunks requested from the source.
         *
         * @type {number}
         * @default 10
         * @memberOf ListComponent
         */
        this.limit = 10;
        /**
         * @description Controls whether more data can be loaded.
         * @summary When set to true, the component will allow loading additional data
         * through infinite scrolling or pagination. When false, the component will not
         * attempt to load more data beyond what is initially displayed.
         *
         * @type {StringOrBoolean}
         * @default true
         * @memberOf ListComponent
         */
        this.loadMoreData = true;
        /**
         * @description The style of dividing lines between list items.
         * @summary Determines how dividing lines appear between list items. Options include:
         * - "inset": Lines are inset from the edges
         * - "full": Lines extend the full width
         * - "none": No dividing lines
         *
         * @type {"inset" | "full" | "none"}
         * @default "full"
         * @memberOf ListComponent
         */
        this.lines = "full";
        /**
         * @description Controls whether the list has inset styling.
         * @summary When set to true, the list will have inset styling with rounded corners
         * and margin around the edges. This creates a card-like appearance for the list.
         *
         * @type {StringOrBoolean}
         * @default false
         * @memberOf ListComponent
         */
        this.inset = false;
        /**
         * @description The threshold for triggering infinite scroll loading.
         * @summary Specifies how close to the bottom of the list the user must scroll
         * before the component triggers loading of additional data. This is expressed
         * as a percentage of the list height.
         *
         * @type {string}
         * @default "15%"
         * @memberOf ListComponent
         */
        this.scrollThreshold = "15%";
        /**
         * @description The position where new items are added during infinite scrolling.
         * @summary Determines whether new items are added to the top or bottom of the list
         * when loading more data through infinite scrolling.
         *
         * @type {"bottom" | "top"}
         * @default "bottom"
         * @memberOf ListComponent
         */
        this.scrollPosition = "bottom";
        /**
         * @description Controls the visibility of the pull-to-refresh feature.
         * @summary When set to true, enables the pull-to-refresh functionality that allows
         * users to refresh the list data by pulling down from the top of the list.
         *
         * @type {StringOrBoolean}
         * @default true
         * @memberOf ListComponent
         */
        this.showRefresher = true;
        /**
         * @description The type of spinner to display during loading operations.
         * @summary Specifies the visual style of the loading spinner shown during data
         * fetching operations. Uses Ionic's predefined spinner types.
         *
         * @type {SpinnerTypes}
         * @default "circular"
         * @memberOf ListComponent
         */
        this.loadingSpinner = "circular";
        // /**
        //  * @description Query parameters for data fetching.
        //  * @summary Specifies additional query parameters to use when fetching data from
        //  * the source. This can be provided as a string (JSON) or a direct object.
        //  *
        //  * @type {string | KeyValue | undefined}
        //  * @memberOf ListComponent
        //  */
        // @Input()
        // query?: string | KeyValue;
        /**
         * @description Controls whether the filtering functionality is enabled.
         * @summary When set to true, enables the filter component that allows users to create
         * complex search criteria with multiple field filters, conditions, and values.
         * When false, disables the filter interface entirely.
         *
         * @type {StringOrBoolean}
         * @default true
         * @memberOf ListComponent
         */
        this.enableFilter = true;
        /**
         * @description Sorting parameters for data fetching.
         * @summary Specifies how the fetched data should be sorted. This can be provided
         * as a string (field name with optional direction) or a direct object.
         *
         * @type {string | KeyValue | undefined}
         * @memberOf ListComponent
         */
        this.sortDirection = OrderDirection.DSC;
        /**
         * @description Controls whether sorting functionality is disabled.
         * @summary When set to true, disables the sort controls and prevents users from
         * changing the sort order or field. The list will maintain its default or
         * programmatically set sort configuration without user interaction.
         *
         * @type {StringOrBoolean}
         * @default false
         * @memberOf ListComponent
         */
        this.disableSort = false;
        /**
         * @description Icon to display when the list is empty.
         * @summary Specifies the icon shown in the empty state when no data is available.
         * This can be any icon name supported by the application's icon system.
         *
         * @type {string | undefined}
         * @default 'ti-database-exclamation'
         * @memberOf ListComponent
         */
        this.emptyIcon = 'ti-database-exclamation';
        /**
         * @description Configuration for the empty state display.
         * @summary Customizes how the empty state is displayed when no data is available.
         * This includes the title, subtitle, button text, icon, and navigation link.
         *
         * @type {Partial<IListEmptyResult>}
         * @default {
         *   title: 'empty.title',
         *   subtitle: 'empty.subtitle',
         *   showButton: false,
         *   icon: 'alert-circle-outline',
         *   buttonText: 'locale.empty.button',
         *   link: ''
         * }
         * @memberOf ListComponent
         */
        this.empty = {
            title: 'empty.title',
            subtitle: 'empty.subtitle',
            showButton: false,
            icon: 'alert-circle-outline',
            buttonText: 'locale.empty.button',
            link: ''
        };
        /**
         * @description The current page number in paginated mode.
         * @summary Tracks which page is currently being displayed when the component
         * is in paginated mode. This is used for pagination controls and data fetching.
         *
         * @type {number}
         * @default 1
         * @memberOf ListComponent
         */
        this.page = 1;
        /**
         * @description Indicates whether a refresh operation is in progress.
         * @summary When true, the component is currently fetching new data. This is used
         * to control loading indicators and prevent duplicate refresh operations from
         * being triggered simultaneously.
         *
         * @type {boolean}
         * @default false
         * @memberOf ListComponent
         */
        this.refreshing = false;
        /**
         * @description Array used for rendering skeleton loading placeholders.
         * @summary Contains placeholder items that are displayed during data loading.
         * The length of this array determines how many skeleton items are shown.
         *
         * @type {string[]}
         * @default new Array(2)
         * @memberOf ListComponent
         */
        this.skeletonData = new Array(2);
        /**
         * @description The last page number that was displayed.
         * @summary Keeps track of the previously displayed page number, which is useful
         * for handling navigation and search operations in paginated mode.
         *
         * @type {number}
         * @default 1
         * @memberOf ListComponent
         */
        this.lastPage = 1;
        /**
         * @description Event emitter for refresh operations.
         * @summary Emits an event when the list data is refreshed, either through pull-to-refresh
         * or programmatic refresh. The event includes the refreshed data and component information.
         *
         * @type {EventEmitter<BaseCustomEvent>}
         * @memberOf ListComponent
         */
        this.refreshEvent = new EventEmitter();
        /**
         * @description Event emitter for item click interactions.
         * @summary Emits an event when a list item is clicked. The event includes the data
         * of the clicked item, allowing parent components to respond to the interaction.
         *
         * @type {EventEmitter<KeyValue>}
         * @memberOf ListComponent
         */
        this.clickEvent = new EventEmitter();
        /**
         * @description Subject for debouncing click events.
         * @summary Uses RxJS Subject to collect click events and emit them after a debounce
         * period. This prevents multiple rapid clicks from triggering multiple events.
         *
         * @private
         * @type {Subject<CustomEvent | ListItemCustomEvent | RendererCustomEvent>}
         * @memberOf ListComponent
         */
        this.clickItemSubject = new Subject();
        /**
         * @description Subject for debouncing repository observation events.
         * @summary RxJS Subject that collects repository change events and emits them after
         * a debounce period. This prevents multiple rapid repository changes from triggering
         * multiple list refresh operations, improving performance and user experience.
         *
         * @private
         * @type {Subject<any>}
         * @memberOf ListComponent
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.observerSubjet = new Subject();
        /**
         * @description Observer object for repository change notifications.
         * @summary Implements the Observer interface to receive notifications when the
         * underlying data repository changes. This enables automatic list updates when
         * data is created, updated, or deleted through the repository.
         *
         * @private
         * @type {Observer}
         * @memberOf ListComponent
         */
        this.observer = { refresh: async (...args) => this.observeRepository(...args) };
    }
    /**
     * @description Initializes the component after Angular sets the input properties.
     * @summary Sets up the component by initializing event subscriptions, processing boolean
     * inputs, and loading the initial data. This method prepares the component for user
     * interaction by ensuring all properties are properly initialized and data is loaded.
     *
     * @returns {Promise<void>}
     *
     * @mermaid
     * sequenceDiagram
     *   participant A as Angular Lifecycle
     *   participant L as ListComponent
     *   participant D as Data Source
     *
     *   A->>L: ngOnInit()
     *   L->>L: Set up click event debouncing
     *   L->>L: Process boolean inputs
     *   L->>L: Configure component based on inputs
     *   L->>L: refresh()
     *   L->>D: Request initial data
     *   D-->>L: Return data
     *   L->>L: Process and display data
     *   L->>L: Configure empty state if needed
     *   L->>L: initialize()
     *
     * @memberOf ListComponent
     */
    async ngOnInit() {
        this.clickItemSubject.pipe(debounceTime(100)).subscribe(event => this.clickEventEmit(event));
        this.observerSubjet.pipe(debounceTime(100)).subscribe(args => this.handleObserveEvent(args[0], args[1], args[2]));
        this.enableFilter = stringToBoolean(this.enableFilter);
        this.limit = Number(this.limit);
        this.start = Number(this.start);
        this.inset = stringToBoolean(this.inset);
        this.showRefresher = stringToBoolean(this.showRefresher);
        this.loadMoreData = stringToBoolean(this.loadMoreData);
        this.showSearchbar = stringToBoolean(this.showSearchbar);
        this.disableSort = stringToBoolean(this.disableSort);
        if (typeof this.item?.['tag'] === 'boolean' && this.item?.['tag'] === true)
            this.item['tag'] = ComponentsTagNames.LIST_ITEM;
        await this.refresh();
        if (this.operations.includes(OperationKeys.CREATE) && this.route)
            this.empty.link = `${this.route}/${OperationKeys.CREATE}`;
        this.initialize();
        if (this.model instanceof Model && this._repository)
            this._repository.observe(this.observer);
    }
    /**
     * @description Cleans up resources when the component is destroyed.
     * @summary Performs cleanup operations when the component is being removed from the DOM.
     * This includes clearing references to models and data to prevent memory leaks.
     *
     * @returns {void}
     * @memberOf ListComponent
     */
    ngOnDestroy() {
        if (this._repository)
            this._repository.unObserve(this.observer);
        this.data = this.model = this._repository = this.paginator = undefined;
    }
    /**
     * @description Handles repository observation events with debouncing.
     * @summary Processes repository change notifications and routes them appropriately.
     * For CREATE events with a UID, handles them immediately. For other events,
     * passes them to the debounced observer subject to prevent excessive updates.
     *
     * @param {...unknown[]} args - The repository event arguments including table, event type, and UID
     * @returns {Promise<void>}
     * @memberOf ListComponent
     */
    async observeRepository(...args) {
        const [table, event, uid] = args;
        if (event === OperationKeys.CREATE && !!uid)
            return this.handleObserveEvent(table, event, uid);
        return this.observerSubjet.next(args);
    }
    /**
     * @description Handles specific repository events and updates the list accordingly.
     * @summary Processes repository change events (CREATE, UPDATE, DELETE) and performs
     * the appropriate list operations. This includes adding new items, updating existing
     * ones, or removing deleted items from the list display.
     *
     * @param {string} table - The table/model name that changed
     * @param {OperationKeys} event - The type of operation (CREATE, UPDATE, DELETE)
     * @param {string | number} uid - The unique identifier of the affected item
     * @returns {Promise<void>}
     * @memberOf ListComponent
     */
    async handleObserveEvent(table, event, uid) {
        if (event === OperationKeys.CREATE) {
            if (uid) {
                await this.handleCreate(uid);
            }
            else {
                await this.refresh(true);
            }
        }
        else {
            if (event === OperationKeys.UPDATE)
                await this.handleUpdate(uid);
            if (event === OperationKeys.DELETE)
                this.handleDelete(uid);
            this.refreshEventEmit();
        }
    }
    /**
     * @description Function for tracking items in the list.
     * @summary Provides a tracking function for the `*ngFor` directive in the component template.
     * This function is used to identify and control the rendering of items in the list,
     * preventing duplicate or unnecessary rendering.
     *
     * The `trackItemFn` function takes two parameters: `index` (the index of the item in the list)
     * and `item` (the actual item from the list). It returns the tracking key, which in this case
     * is the union of the `uid` of the item with the model name.
     *
     * @param {number} index - The index of the item in the list.
  
     * @param {KeyValue | string | number} item - The actual item from the list.
     * @returns {string | number} The tracking key for the item.
     * @memberOf ListComponent
     */
    trackItemFn(index, item) {
        return `${item?.['uid'] || item?.[this.pk]}-${index}`;
    }
    /**
     * Handles the create event from the repository.
     *
     * @param {string | number} uid - The ID of the item to create.
     * @returns {Promise<void>} A promise that resolves when the item is created and added to the list.
     */
    async handleCreate(uid) {
        const result = await this._repository?.read(uid);
        const item = this.mapResults([result])[0];
        this.items = this.data = [item, ...this.items || []];
    }
    /**
     * @description Handles the update event from the repository.
     * @summary Updates the list item with the specified ID based on the new data.
     *
     * @param {string | number} uid - The ID of the item to update
     * @returns {Promise<void>}
     * @private
     * @memberOf ListComponent
     */
    async handleUpdate(uid) {
        const item = this.itemMapper(await this._repository?.read(uid) || {}, this.mapper);
        this.data = [];
        for (const key in this.items) {
            const child = this.items[key];
            if (child['uid'] === item['uid']) {
                this.items[key] = Object.assign({}, child, item);
                break;
            }
        }
        setTimeout(() => {
            this.data = [...this.items];
        }, 0);
    }
    /**
     * @description Removes an item from the list by ID.
     * @summary Filters out an item with the specified ID from the data array and
     * refreshes the list display. This is typically used after a delete operation.
     *
     * @param {string} uid - The ID of the item to delete
     * @param {string} pk - The primary key field name
     * @returns {Promise<void>}
     *
     * @memberOf ListComponent
     */
    handleDelete(uid, pk) {
        if (!pk)
            pk = this.pk;
        this.items = this.data?.filter((item) => item['uid'] !== uid) || [];
    }
    /**
     * @description Handles click events from list items.
     * @summary Listens for global ListItemClickEvent events and passes them to the
     * debounced click subject. This allows the component to respond to clicks on
     * list items regardless of where they originate from.
     *
     * @param {ListItemCustomEvent | RendererCustomEvent} event - The click event
     * @returns {void}
     *
     * @memberOf ListComponent
     */
    handleClick(event) {
        this.clickItemSubject.next(event);
    }
    /**
     * @description Handles search events from the search bar.
     * @summary Processes search queries from the search bar component, updating the
     * displayed data based on the search term. The behavior differs between infinite
     * and paginated modes to provide the best user experience for each mode.
     *
     * @param {string | undefined} value - The search term or undefined to clear search
     * @returns {Promise<void>}
     *
     * @mermaid
     * flowchart TD
     *   A[Search Event] --> B{Type is Infinite?}
     *   B -->|Yes| C[Disable loadMoreData]
     *   B -->|No| D[Enable loadMoreData]
     *   C --> E{Search value undefined?}
     *   E -->|Yes| F[Enable loadMoreData]
     *   E -->|No| G[Store search value]
     *   D --> G
     *   F --> H[Reset page to 1]
     *   G --> I[Refresh data]
     *   H --> I
     *
     * @memberOf ListComponent
     */
    async handleSearch(value) {
        if (this.type === ListComponentsTypes.INFINITE) {
            this.loadMoreData = false;
            if (value === undefined) {
                this.loadMoreData = true;
                this.page = 1;
            }
            this.searchValue = value;
            await this.refresh(true);
        }
        else {
            this.loadMoreData = true;
            this.searchValue = value;
            if (value === undefined)
                this.page = this.lastPage;
            await this.refresh(true);
        }
    }
    /**
     * @description Handles filter events from the filter component.
     * @summary Processes filter queries from the filter component and applies them
     * to the list data. This method acts as a bridge between the filter component
     * and the search functionality, converting filter queries into search operations.
     *
     * @param {IFilterQuery | undefined} value - The filter query object or undefined to clear filters
     * @returns {Promise<void>}
     * @memberOf ListComponent
     */
    async handleFilter(value) {
        await this.handleSearch(value);
    }
    /**
     * @description Clears the current search and resets the list.
     * @summary Convenience method that clears the search by calling handleSearch
     * with undefined. This resets the list to show all data without filtering.
     *
     * @returns {Promise<void>}
     * @memberOf ListComponent
     */
    async clearSearch() {
        await this.handleSearch(undefined);
    }
    /**
     * @description Emits a refresh event with the current data.
     * @summary Creates and emits a refresh event containing the current list data.
     * This notifies parent components that the list data has been refreshed.
     *
     * @param {KeyValue[]} [data] - Optional data to include in the event
     * @returns {void}
     *
     * @memberOf ListComponent
     */
    refreshEventEmit(data) {
        if (!data)
            data = this.items;
        this.skeletonData = new Array(data?.length || 2);
        this.refreshEvent.emit({
            name: EventConstants.REFRESH,
            data: data || [],
            component: this.componentName
        });
    }
    /**
     * @description Emits a click event for a list item.
     * @summary Processes and emits a click event when a list item is clicked.
     * This extracts the relevant data from the event and passes it to parent components.
     *
     * @private
     * @param {ListItemCustomEvent | RendererCustomEvent} event - The click event
     * @returns {void}
     *
     * @memberOf ListComponent
     */
    clickEventEmit(event) {
        this.clickEvent.emit(event);
    }
    /**
     * @description Refreshes the list data from the configured source.
     * @summary This method handles both initial data loading and subsequent refresh operations,
     * including pull-to-refresh and infinite scrolling. It manages the data fetching process,
     * updates the component's state, and handles pagination or infinite scrolling logic based
     * on the component's configuration.
     *
     * The method performs the following steps:
     * 1. Sets the refreshing flag to indicate a data fetch is in progress
     * 2. Calculates the appropriate start and limit values based on pagination settings
     * 3. Fetches data from the appropriate source (model or request)
     * 4. Updates the component's data and emits a refresh event
     * 5. Handles pagination or infinite scrolling state updates
     * 6. Completes any provided event (like InfiniteScrollCustomEvent)
     *
     * @param {InfiniteScrollCustomEvent | RefresherCustomEvent | boolean} event - The event that triggered the refresh,
     * or a boolean flag indicating if this is a forced refresh
     * @returns {Promise<void>} A promise that resolves when the refresh operation is complete
     *
     * @mermaid
     * sequenceDiagram
     *   participant L as ListComponent
     *   participant D as Data Source
     *   participant E as Event System
     *
     *   L->>L: refresh(event)
     *   L->>L: Set refreshing flag
     *   L->>L: Calculate start and limit
     *   alt Using model
     *     L->>D: getFromModel(force, start, limit)
     *     D-->>L: Return data
     *   else Using request
     *     L->>D: getFromRequest(force, start, limit)
     *     D-->>L: Return data
     *   end
     *   L->>E: refreshEventEmit()
     *   alt Infinite scrolling mode
     *     L->>L: Check if reached last page
     *     alt Last page reached
     *       L->>L: Complete scroll event
     *       L->>L: Disable loadMoreData
     *     else More pages available
     *       L->>L: Increment page number
     *       L->>L: Complete scroll event after delay
     *     end
     *   else Paginated mode
     *     L->>L: Clear refreshing flag after delay
     *   end
     *
     * @memberOf ListComponent
     */
    async refresh(event = false) {
        //  if(typeof force !== 'boolean' && force.type === EventConstants.BACK_BUTTON_NAVIGATION) {
        //    const {refresh} = (force as CustomEvent).detail;
        //    if(!refresh)
        //      return false;
        //  }
        this.refreshing = true;
        const start = this.page > 1 ? (this.page - 1) * this.limit : this.start;
        const limit = (this.page * (this.limit > 12 ? 12 : this.limit));
        this.data = !this.model ?
            await this.getFromRequest(!!event, start, limit)
            : await this.getFromModel(!!event);
        this.refreshEventEmit();
        if (this.type === ListComponentsTypes.INFINITE) {
            if (this.page === this.pages) {
                if (event?.target)
                    event.target.complete();
                this.loadMoreData = false;
            }
            else {
                this.page += 1;
                this.refreshing = false;
                setTimeout(() => {
                    if (event?.target && event?.type !== EventConstants.BACK_BUTTON_NAVIGATION)
                        event.target.complete();
                }, 200);
            }
        }
        else {
            setTimeout(() => {
                this.refreshing = false;
            }, 200);
        }
    }
    /**
   * @description Handles pagination events from the pagination component.
   * @summary Processes pagination events by updating the current page number and
   * refreshing the list data to display the selected page. This method is called
   * when a user interacts with the pagination controls to navigate between pages.
   *
   * @param {PaginationCustomEvent} event - The pagination event containing page information
   * @returns {void}
   *
   * @memberOf ListComponent
   */
    handlePaginate(event) {
        const { page } = event.data;
        this.page = page;
        this.refresh(true);
    }
    /**
     * @description Handles pull-to-refresh events from the refresher component.
     * @summary Processes refresh events triggered by the user pulling down on the list
     * or by programmatic refresh requests. This method refreshes the list data and
     * completes the refresher animation when the data is loaded.
     *
     * @param {InfiniteScrollCustomEvent | CustomEvent} [event] - The refresh event
     * @returns {Promise<void>} A promise that resolves when the refresh operation is complete
     *
     * @memberOf ListComponent
     */
    async handleRefresh(event) {
        await this.refresh(event || true);
        if (event instanceof CustomEvent)
            setTimeout(() => {
                // Any calls to load data go here
                event.target.complete();
            }, 400);
    }
    /**
     * @description Filters data based on a search string.
     * @summary Processes the current data array to find items that match the provided
     * search string. This uses the arrayQueryByString utility to perform the filtering
     * across all properties of the items.
     *
     * @param {KeyValue[]} results - The array of items to search through
     * @param {string} search - The search string to filter by
     * @returns {KeyValue[]} A promise that resolves to the filtered array of items
     *
     * @memberOf ListComponent
     */
    parseSearchResults(results, search) {
        return results.filter((item) => Object.values(item).some(value => value.toString().toLowerCase().includes(search?.toLowerCase())));
    }
    /**
     * @description Fetches data from a request source.
     * @summary Retrieves data from the configured source function or URL, processes it,
     * and updates the component's data state. This method handles both initial data loading
     * and subsequent refresh operations when using an external data source rather than a model.
     *
     * @param {boolean} force - Whether to force a refresh even if data already exists
     * @param {number} start - The starting index for pagination
     * @param {number} limit - The maximum number of items to retrieve
     * @returns {Promise<KeyValue[]>} A promise that resolves to the fetched data
     *
     * @memberOf ListComponent
     */
    async getFromRequest(force = false, start, limit) {
        let request = [];
        if (!this.data?.length || force || this.searchValue?.length || !!this.searchValue) {
            // (self.data as ListItem[]) = [];
            if (!this.searchValue?.length && !this.searchValue) {
                if (!this.source && !this.data?.length) {
                    this.logger.info('No data and source passed to infinite list');
                    return [];
                }
                if (this.source instanceof Function)
                    request = await this.source();
                if (!Array.isArray(request))
                    request = request?.['response']?.['data'] || request?.['results'] || [];
                this.data = [...await this.parseResult(request)];
                if (this.data?.length)
                    this.items = this.type === ListComponentsTypes.INFINITE ?
                        (this.items || []).concat([...this.data.slice(start, limit)]) : [...request.slice(start, limit)];
            }
            else {
                this.data = this.parseSearchResults(this.data, this.searchValue);
                this.items = this.data;
            }
        }
        if (this.loadMoreData && this.type === ListComponentsTypes.PAGINATED)
            this.getMoreData(this.data?.length || 0);
        return this.data || [];
    }
    /**
     * @description Fetches data from a model source.
     * @summary Retrieves data from the configured model using its pagination or find methods,
     * processes it, and updates the component's data state. This method handles both initial
     * data loading and subsequent refresh operations when using a model as the data source.
     *
     * @param {boolean} force - Whether to force a refresh even if data already exists
     * @param {number} start - The starting index for pagination
     * @param {number} limit - The maximum number of items to retrieve
     * @returns {Promise<KeyValue[]>} A promise that resolves to the fetched data
     *
     * @memberOf ListComponent
     */
    async getFromModel(force = false) {
        let data = [...this.data || []];
        let request = [];
        // getting model repository
        if (!this._repository)
            this._repository = this.repository;
        const repo = this._repository;
        if (!this.data?.length || force || this.searchValue?.length || !!this.searchValue) {
            try {
                if (!this.searchValue?.length && !this.searchValue) {
                    this.data = [];
                    // const rawQuery = this.parseQuery(self.model as Repository<Model>, start, limit);
                    // request = this.parseResult(await (this.model as any)?.paginate(start, limit));
                    if (!this.paginator) {
                        this.paginator = await repo
                            .select()
                            .orderBy([this.pk, this.sortDirection])
                            .paginate(this.limit);
                    }
                    request = await this.parseResult(this.paginator);
                }
                else {
                    if (!this.indexes)
                        this.indexes = (Object.values(this.mapper) || [this.pk]);
                    const condition = this.parseConditions(this.searchValue);
                    request = await this.parseResult(await repo.query(condition, (this.sortBy || this.pk), this.sortDirection));
                    data = [];
                }
                data = this.type === ListComponentsTypes.INFINITE ? [...(data).concat(request)] : [...request];
            }
            catch (error) {
                this.logger.error(error?.message || `Unable to find ${this.model} on registry. Return empty array from component`);
            }
        }
        if (data?.length) {
            if (this.searchValue) {
                this.items = [...data];
                if (this.items?.length <= this.limit)
                    this.loadMoreData = false;
            }
            else {
                this.items = [...data];
            }
        }
        if (this.type === ListComponentsTypes.PAGINATED && this.paginator)
            this.getMoreData(this.paginator.total);
        return data || [];
    }
    /**
     * @description Converts search values or filter queries into database conditions.
     * @summary Transforms search input or complex filter queries into Condition objects
     * that can be used for database querying. Handles both simple string/number searches
     * across indexed fields and complex filter queries with multiple criteria.
     *
     * For simple searches (string/number):
     * - Creates conditions that search across all indexed fields
     * - Uses equality for numeric values and regex for string values
     * - Combines conditions with OR logic to search multiple fields
     *
     * For complex filter queries:
     * - Processes each filter item with its specific condition type
     * - Supports Equal, Not Equal, Contains, Not Contains, Greater Than, Less Than
     * - Updates sort configuration based on the filter query
     * - Combines multiple filter conditions with OR logic
     *
     * @param {string | number | IFilterQuery} value - The search value or filter query object
     * @returns {Condition<Model>} A Condition object for database querying
     * @memberOf ListComponent
     */
    parseConditions(value) {
        let _condition;
        if (typeof value === Primitives.STRING || typeof value === Primitives.NUMBER) {
            _condition = Condition.attribute(this.pk).eq(!isNaN(value) ? Number(value) : value);
            for (const index of this.indexes) {
                if (index === this.pk)
                    continue;
                let orCondition;
                if (!isNaN(value)) {
                    orCondition = Condition.attribute(index).eq(Number(value));
                }
                else {
                    orCondition = Condition.attribute(index).regexp(value);
                }
                _condition = _condition.or(orCondition);
            }
        }
        else {
            const { query, sort } = value;
            _condition = Condition.attribute(this.pk).dif('null');
            if (query?.length)
                _condition = undefined;
            (query || []).forEach((item) => {
                const { value, condition, index } = item;
                let val = value;
                if (index === this.pk || !isNaN(val))
                    val = Number(val);
                let orCondition;
                switch (condition) {
                    case "Equal":
                        orCondition = Condition.attribute(index).eq(val);
                        break;
                    case "Not Equal":
                        orCondition = Condition.attribute(index).dif(val);
                        break;
                    case "Not Contains":
                        orCondition = !Condition.attribute(index).regexp(new RegExp(`^(?!.*${val}).*$`));
                        break;
                    case "Contains":
                        orCondition = Condition.attribute(index).regexp(val);
                        break;
                    case "Greater Than":
                        orCondition = Condition.attribute(index).gte(val);
                        break;
                    case "Less Than":
                        orCondition = Condition.attribute(index).lte(val);
                        break;
                }
                _condition = (!_condition ?
                    orCondition : _condition.and(orCondition));
            });
            this.sortBy = sort?.value || this.pk;
            this.sortDirection = sort?.direction || this.sortDirection;
        }
        return _condition;
    }
    /**
     * @description Processes query results into a standardized format.
     * @summary Handles different result formats from various data sources, extracting
     * pagination information when available and applying any configured data mapping.
     * This ensures consistent data structure regardless of the source.
     *
     * @protected
     * @param {KeyValue[] | Paginator} result - The raw query result
     * @returns {KeyValue[]} The processed array of items
     *
     * @memberOf ListComponent
     */
    async parseResult(result) {
        if (!Array.isArray(result) && ('page' in result && 'total' in result)) {
            const paginator = result;
            result = await paginator.page(this.page);
            // TODO: Chage for result.total;
            this.getMoreData(paginator.total);
        }
        else {
            this.getMoreData(result?.length || 0);
        }
        return (Object.keys(this.mapper || {}).length) ?
            this.mapResults(result) : result;
    }
    /**
     * @description Updates pagination state based on data length.
     * @summary Calculates whether more data is available and how many pages exist
     * based on the total number of items and the configured limit per page.
     * This information is used to control pagination UI and infinite scrolling behavior.
     *
     * @param {number} length - The total number of items available
     * @returns {void}
     *
     * @memberOf ListComponent
     */
    getMoreData(length) {
        if (this.type === ListComponentsTypes.INFINITE) {
            if (this.paginator)
                length = length * this.limit;
            if (length <= this.limit) {
                this.loadMoreData = false;
            }
            else {
                this.pages = Math.floor(length / this.limit);
                if ((this.pages * this.limit) < length)
                    this.pages += 1;
                if (this.pages === 1)
                    this.loadMoreData = false;
            }
        }
        else {
            this.pages = length;
            if (this.pages === 1)
                this.loadMoreData = false;
        }
    }
    /**
     * @description Maps a single item using the configured mapper.
     * @summary Transforms a data item according to the mapping configuration,
     * extracting nested properties and formatting values as needed. This allows
     * the component to display data in a format different from how it's stored.
     *
     * @protected
     * @param {KeyValue} item - The item to map
     * @param {KeyValue} mapper - The mapping configuration
     * @param {KeyValue} [props] - Additional properties to include
     * @returns {KeyValue} The mapped item
     *
     * @memberOf ListComponent
     */
    itemMapper(item, mapper, props) {
        return Object.entries(mapper).reduce((accum, [key, value]) => {
            const arrayValue = value.split('.');
            if (!value) {
                accum[key] = value;
            }
            else {
                if (arrayValue.length === 1) {
                    value = item?.[value] || value;
                    if (isValidDate(value))
                        value = `${formatDate(value)}`;
                    accum[key] = value;
                }
                else {
                    let val;
                    for (const _value of arrayValue)
                        val = !val
                            ? item[_value]
                            : (typeof val === 'string' ? JSON.parse(val) : val)[_value];
                    if (isValidDate(new Date(val)))
                        val = `${formatDate(val)}`;
                    accum[key] = val === null || val === undefined ? value : val;
                }
            }
            return Object.assign({}, props || {}, accum);
        }, {});
    }
    /**
     * @description Maps all result items using the configured mapper.
     * @summary Applies the itemMapper to each item in the result set, adding
     * common properties like operations and route information. This transforms
     * the raw data into the format expected by the list item components.
     *
     * @param {KeyValue[]} data - The array of items to map
     * @returns {KeyValue[]} The array of mapped items
     *
     * @memberOf ListComponent
     */
    mapResults(data) {
        if (!data || !data.length)
            return [];
        // passing uid as prop to mapper
        this.mapper = { ...this.mapper, ...{ uid: this.pk } };
        const props = Object.assign({
            operations: this.operations,
            route: this.route,
            ...Object.keys(this.item).reduce((acc, key) => {
                acc[key] = this.item[key];
                return acc;
            }, {}),
            // ... (!this.item.render ? {} :  Object.keys(this.item).reduce((acc: KeyValue, key: string) => {
            //   acc[key] = this.item[key as keyof IListItemProp];
            //   return acc;
            // }, {}))
        });
        return data.reduce((accum, curr) => {
            accum.push({ ...this.itemMapper(curr, this.mapper, props), ...{ pk: this.pk } });
            return accum;
        }, []);
    }
    static { this.ɵfac = function ListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ListComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListComponent, selectors: [["ngx-decaf-list"]], hostBindings: function ListComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("ListItemClickEvent", function ListComponent_ListItemClickEvent_HostBindingHandler($event) { return ctx.handleClick($event); }, false, i0.ɵɵresolveWindow)("searchbarEvent", function ListComponent_searchbarEvent_HostBindingHandler($event) { return ctx.handleSearch($event); }, false, i0.ɵɵresolveWindow)("BackButtonNavigationEndEvent", function ListComponent_BackButtonNavigationEndEvent_HostBindingHandler($event) { return ctx.refresh($event); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { type: "type", translatable: "translatable", showSearchbar: "showSearchbar", data: "data", source: "source", start: "start", limit: "limit", loadMoreData: "loadMoreData", lines: "lines", inset: "inset", scrollThreshold: "scrollThreshold", scrollPosition: "scrollPosition", loadingText: "loadingText", showRefresher: "showRefresher", loadingSpinner: "loadingSpinner", enableFilter: "enableFilter", sortDirection: "sortDirection", sortBy: "sortBy", disableSort: "disableSort", emptyIcon: "emptyIcon", empty: "empty" }, outputs: { refreshEvent: "refreshEvent", clickEvent: "clickEvent" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], ngContentSelectors: _c0, decls: 4, vars: 3, consts: [["component", ""], ["slot", "fixed", 3, "pullFactor", "pullMin", "pullMax"], ["slot", "fixed", 3, "ionRefresh", "pullFactor", "pullMin", "pullMax"], [3, "model", "sortDirection", "disableSort"], [3, "emitEventToWindow", "debounce"], [3, "filterEvent", "searchEvent", "model", "sortDirection", "disableSort"], [3, "searchEvent", "emitEventToWindow", "debounce"], [3, "id", "inset", "lines"], [3, "tag", "globals"], [3, "listenEvent", "tag", "globals"], [3, "totalPages", "current"], [3, "class", "position", "threshold"], [3, "clickEvent", "totalPages", "current"], [3, "ionInfinite", "position", "threshold"], [3, "loadingSpinner", "loadingText"], [4, "ngFor", "ngForOf"], ["slot", "start"], [3, "animated"], [1, "date", 2, "width", "20%"], [3, "title", "subtitle", "buttonText", "buttonLink"], ["icon", "search-outline", "ngClass", "empty-search", "title", "search.title", "subtitle", "search.subtitle", 3, "translatable", "searchValue"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, ListComponent_Conditional_0_Template, 2, 3, "ion-refresher", 1)(1, ListComponent_Conditional_1_Template, 2, 1)(2, ListComponent_Conditional_2_Template, 5, 5)(3, ListComponent_Conditional_3_Template, 2, 1);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.showRefresher ? 0 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showSearchbar ? 1 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional((ctx.data == null ? null : ctx.data.length) ? 2 : 3);
        } }, dependencies: [ForAngularModule, i1.IonText, i2.NgClass, i2.NgForOf, i3.TranslatePipe, IonRefresher,
            PaginationComponent,
            IonList,
            IonItem,
            IonThumbnail,
            IonSkeletonText,
            IonLabel,
            IonRefresherContent,
            IonInfiniteScroll,
            IonInfiniteScrollContent,
            SearchbarComponent,
            EmptyStateComponent,
            FilterComponent,
            ComponentRendererComponent], styles: ["ion-infinite-scroll-content[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%]{--color: var(--dcf-color-primary)}@media (max-width: 768px){#end[_ngcontent-%COMP%], [slot=end][_ngcontent-%COMP%]{display:none!important}}"] }); }
};
ListComponent = __decorate([
    Dynamic(),
    __metadata("design:paramtypes", [])
], ListComponent);
export { ListComponent };
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListComponent, [{
        type: Component,
        args: [{ selector: 'ngx-decaf-list', standalone: true, imports: [
                    ForAngularModule,
                    IonRefresher,
                    IonLoading,
                    PaginationComponent,
                    IonList,
                    IonItem,
                    IonThumbnail,
                    IonSkeletonText,
                    IonLabel,
                    IonText,
                    IonRefresherContent,
                    IonInfiniteScroll,
                    IonInfiniteScrollContent,
                    IonThumbnail,
                    IonSkeletonText,
                    SearchbarComponent,
                    EmptyStateComponent,
                    ListItemComponent,
                    FilterComponent,
                    ComponentRendererComponent
                ], template: "\n@if(showRefresher) {\n  <ion-refresher slot=\"fixed\" [pullFactor]=\"1\" [pullMin]=\"100\" [pullMax]=\"200\" (ionRefresh)=\"handleRefresh($event)\">\n    <ion-refresher-content />\n  </ion-refresher>\n}\n\n@if(showSearchbar) {\n  @if(model && enableFilter) {\n    <ngx-decaf-filter\n      [model]=\"model\"\n      [sortDirection]=\"sortDirection\"\n      [disableSort]=\"disableSort\"\n      (filterEvent)=\"handleFilter($event)\"\n      (searchEvent)=\"handleSearch($event)\"\n    />\n  } @else {\n    <ngx-decaf-searchbar [emitEventToWindow]=\"false\" [debounce]=\"500\" (searchEvent)=\"handleSearch($event)\" />\n  }\n}\n\n@if(data?.length) {\n  <ion-list [id]=\"uid\" [inset]=\"inset\" [lines]=\"lines\" #component>\n    @if(item?.tag) {\n      @for(child of items; track trackItemFn($index, child)) {\n        <ngx-decaf-component-renderer\n          [tag]=\"item.tag\"\n          (listenEvent)=\"handleEvent($event)\"\n          [globals]='{\n            item: child,\n            mapper: mapper,\n            route: route\n          }'>\n          </ngx-decaf-component-renderer>\n        }\n    } @else {\n      <ng-content></ng-content>\n    }\n  </ion-list>\n\n  @if(loadMoreData) {\n    @if(pages > 0 && type === 'paginated' && !searchValue?.length) {\n      <ngx-decaf-pagination\n        [totalPages]=\"pages\"\n        [current]=\"page\"\n        (clickEvent)=\"handlePaginate($event)\"\n      />\n\n    } @else {\n      <ion-infinite-scroll\n        [class]=\"searchValue?.length ? 'dcf-hidden' : ''\"\n        [position]=\"scrollPosition\"\n        [threshold]=\"scrollThreshold\"\n        (ionInfinite)=\"handleRefresh($event)\">\n        <ion-infinite-scroll-content [loadingSpinner]=\"loadingSpinner\" [loadingText]=\"loadingText\" />\n      </ion-infinite-scroll>\n    }\n  }\n} @else {\n  @if(refreshing) {\n    <ion-item *ngFor=\"let skl of skeletonData\">\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\n        <ion-text class=\"date\" style=\"width: 20%;\"><ion-skeleton-text [animated]=\"true\"></ion-skeleton-text></ion-text>\n      </ion-label>\n    </ion-item>\n  } @else {\n    @if(!searchValue?.length) {\n      <ngx-decaf-empty-state\n        [title]=\"(locale + '.'+ empty.title) | translate\"\n        [subtitle]=\"(locale + '.'+ empty.subtitle) | translate\"\n        [buttonText]=\"empty.showButton ? (locale + '.'+ empty.button | translate) : ''\"\n        [buttonLink]=\"empty.showButton ? empty.route : ''\"\n      />\n    } @else {\n      <ngx-decaf-empty-state\n        icon=\"search-outline\"\n        ngClass=\"empty-search\"\n        [translatable]=\"true\"\n        title=\"search.title\"\n        subtitle=\"search.subtitle\"\n        [searchValue]=\"searchValue\"\n      />\n    }\n  }\n}\n\n", styles: ["ion-infinite-scroll-content ion-spinner{--color: var(--dcf-color-primary)}@media (max-width: 768px){#end,[slot=end]{display:none!important}}\n"] }]
    }], () => [], { type: [{
            type: Input
        }], translatable: [{
            type: Input
        }], showSearchbar: [{
            type: Input
        }], data: [{
            type: Input
        }], source: [{
            type: Input
        }], start: [{
            type: Input
        }], limit: [{
            type: Input
        }], loadMoreData: [{
            type: Input
        }], lines: [{
            type: Input
        }], inset: [{
            type: Input
        }], scrollThreshold: [{
            type: Input
        }], scrollPosition: [{
            type: Input
        }], loadingText: [{
            type: Input
        }], showRefresher: [{
            type: Input
        }], loadingSpinner: [{
            type: Input
        }], enableFilter: [{
            type: Input
        }], sortDirection: [{
            type: Input
        }], sortBy: [{
            type: Input
        }], disableSort: [{
            type: Input
        }], emptyIcon: [{
            type: Input
        }], empty: [{
            type: Input
        }], refreshEvent: [{
            type: Output
        }], clickEvent: [{
            type: Output
        }], handleClick: [{
            type: HostListener,
            args: ['window:ListItemClickEvent', ['$event']]
        }], handleSearch: [{
            type: HostListener,
            args: ['window:searchbarEvent', ['$event']]
        }], refresh: [{
            type: HostListener,
            args: ['window:BackButtonNavigationEndEvent', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ListComponent, { className: "ListComponent", filePath: "components/list/list.component.ts", lineNumber: 146 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFjLE1BQU0sZUFBZSxDQUFDO0FBRXpHLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsd0JBQXdCLEVBQ3hCLE9BQU8sRUFDUCxRQUFRLEVBQ1IsT0FBTyxFQUNQLFlBQVksRUFDWixtQkFBbUIsRUFDbkIsZUFBZSxFQUNmLE9BQU8sRUFDUCxZQUFZLEVBQ1osVUFBVSxFQUNYLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxFQUFFLFNBQVMsRUFBWSxjQUFjLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRixPQUFPLEVBRUwsT0FBTyxFQUNQLGNBQWMsRUFDZCxrQkFBa0IsRUFLbkIsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUNMLGVBQWUsRUFDZixVQUFVLEVBQ1YsV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRXpFLE9BQU8sRUFBb0IsbUJBQW1CLEVBQW1CLE1BQU0sYUFBYSxDQUFDO0FBRXJGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7O0lDMUMzRCx3Q0FBa0g7SUFBckMsd01BQWMsNEJBQXFCLEtBQUM7SUFDL0csd0NBQXlCO0lBQzNCLGlCQUFnQjs7SUFGNkMsQUFBaEIsQUFBakIsOEJBQWdCLGdCQUFnQixnQkFBZ0I7Ozs7SUFPMUUsMkNBTUU7SUFEQSxBQURBLDROQUFlLDJCQUFvQixLQUFDLCtNQUNyQiwyQkFBb0IsS0FBQztJQUx0QyxpQkFNRTs7O0lBSEEsQUFEQSxBQURBLG9DQUFlLHVDQUNnQixtQ0FDSjs7OztJQUs3Qiw4Q0FBeUc7SUFBdkMsK05BQWUsMkJBQW9CLEtBQUM7SUFBdEcsaUJBQXlHOztJQUF4RCxBQUE1Qix5Q0FBMkIsaUJBQWlCOzs7SUFEakUsQUFSRixpR0FBNEIsdUZBUW5COzs7SUFSVCw2REFVQzs7OztJQU9LLHVEQU9LO0lBTEgsOE9BQWUsMEJBQW1CLEtBQUM7SUFNbkMsaUJBQStCOzs7O0lBTC9CLEFBRkEscUNBQWdCLDhFQU1kOzs7SUFSTixxS0FVRzs7O0lBVkgsMkJBVUc7OztJQUVILGtCQUF5Qjs7OztJQU16QixnREFJRTtJQURBLDRPQUFjLDZCQUFzQixLQUFDO0lBSHZDLGlCQUlFOzs7SUFGQSxBQURBLHlDQUFvQix3QkFDSjs7OztJQUtsQiwrQ0FJd0M7SUFBdEMsNk9BQWUsNEJBQXFCLEtBQUM7SUFDckMsa0RBQTZGO0lBQy9GLGlCQUFzQjs7O0lBTHBCLGtHQUFpRDtJQUVqRCxBQURBLGdEQUEyQixxQ0FDRTtJQUVBLGNBQWlDO0lBQUMsQUFBbEMsc0RBQWlDLG1DQUE0Qjs7O0lBTjVGLEFBUEYsb0hBQWdFLHNHQU92RDs7O0lBUFQsNklBZUM7OztJQWxDSCxzQ0FBZ0U7SUFhNUQsQUFaRiwwRUFBZ0IsNkRBWVA7SUFHWCxpQkFBVztJQUVYLDBFQUFtQjs7O0lBbEJrQixBQUFoQixBQUFYLCtCQUFVLHVCQUFnQix1QkFBZ0I7SUFDbEQsZUFjQztJQWRELHdFQWNDO0lBR0gsZUFpQkM7SUFqQkQsOENBaUJDOzs7SUFJRyxBQURGLGdDQUEyQyx3QkFDYjtJQUMxQix3Q0FBeUQ7SUFDM0QsaUJBQWdCO0lBQ2hCLGlDQUFXO0lBQ1Qsd0NBQXlEO0lBQ3pELG9DQUEyQztJQUFBLHdDQUF5RDtJQUV4RyxBQURFLEFBRHNHLGlCQUFXLEVBQ3JHLEVBQ0g7O0lBTlksZUFBaUI7SUFBakIsK0JBQWlCO0lBR2pCLGVBQWlCO0lBQWpCLCtCQUFpQjtJQUMwQixlQUFpQjtJQUFqQiwrQkFBaUI7OztJQU5uRixxR0FBMkM7OztJQUFqQiw2Q0FBZTs7O0lBV3ZDLDRDQUtFOzs7Ozs7SUFEQSxBQURBLEFBREEsQUFEQSxzRkFBaUQsK0VBQ00sOEdBQ3dCLGlFQUM3Qjs7O0lBR3BELDRDQU9FOzs7SUFEQSxBQUhBLG1DQUFxQixtQ0FHTTs7O0lBUDdCLEFBUEYsc0hBQTJCLHdHQU9sQjs7O0lBUFQsMEZBZ0JDOzs7SUFqQkQsQUFWRixzRkFBaUIsNkRBVVI7OztJQVZULDJDQTRCQzs7QUR6Q0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFFRztBQThCSSxJQUFNLGFBQWEsR0FBbkIsTUFBTSxhQUFjLFNBQVEsZ0JBQWdCO0lBc2NqRDs7Ozs7Ozs7Ozs7OztPQWFHO0lBQ0g7UUFDRSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7UUFuZHpCOzs7Ozs7Ozs7V0FTRztRQUVILFNBQUksR0FBd0IsbUJBQW1CLENBQUMsUUFBUSxDQUFDO1FBRXpEOzs7Ozs7OztXQVFHO1FBRU0saUJBQVksR0FBb0IsSUFBSSxDQUFDO1FBRTlDOzs7Ozs7Ozs7V0FTRztRQUVILGtCQUFhLEdBQW9CLElBQUksQ0FBQztRQUV0Qzs7Ozs7Ozs7O1dBU0c7UUFFSCxTQUFJLEdBQTRCLFNBQVMsQ0FBQztRQWdCMUM7Ozs7Ozs7O1dBUUc7UUFFSCxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCOzs7Ozs7OztXQVFHO1FBRUgsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUVuQjs7Ozs7Ozs7O1dBU0c7UUFFSCxpQkFBWSxHQUFvQixJQUFJLENBQUE7UUFFcEM7Ozs7Ozs7Ozs7V0FVRztRQUVILFVBQUssR0FBOEIsTUFBTSxDQUFDO1FBRTFDOzs7Ozs7OztXQVFHO1FBRUgsVUFBSyxHQUFvQixLQUFLLENBQUM7UUFFL0I7Ozs7Ozs7OztXQVNHO1FBRUgsb0JBQWUsR0FBVyxLQUFLLENBQUM7UUFFaEM7Ozs7Ozs7O1dBUUc7UUFFSCxtQkFBYyxHQUFxQixRQUFRLENBQUM7UUFhNUM7Ozs7Ozs7O1dBUUc7UUFFSCxrQkFBYSxHQUFvQixJQUFJLENBQUM7UUFFdEM7Ozs7Ozs7O1dBUUc7UUFFSCxtQkFBYyxHQUFpQixVQUFVLENBQUM7UUFFMUMsTUFBTTtRQUNOLHNEQUFzRDtRQUN0RCxtRkFBbUY7UUFDbkYsNkVBQTZFO1FBQzdFLEtBQUs7UUFDTCwyQ0FBMkM7UUFDM0MsNkJBQTZCO1FBQzdCLE1BQU07UUFDTixXQUFXO1FBQ1gsNkJBQTZCO1FBRTdCOzs7Ozs7Ozs7V0FTRztRQUVILGlCQUFZLEdBQW9CLElBQUksQ0FBQztRQUVyQzs7Ozs7OztXQU9HO1FBRUgsa0JBQWEsR0FBbUIsY0FBYyxDQUFDLEdBQUcsQ0FBQztRQWVuRDs7Ozs7Ozs7O1dBU0c7UUFFSCxnQkFBVyxHQUFvQixLQUFLLENBQUM7UUFHckM7Ozs7Ozs7O1dBUUc7UUFFSCxjQUFTLEdBQVkseUJBQXlCLENBQUM7UUFFL0M7Ozs7Ozs7Ozs7Ozs7OztXQWVHO1FBRUgsVUFBSyxHQUE4QjtZQUNqQyxLQUFLLEVBQUUsYUFBYTtZQUNwQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLElBQUksRUFBRSxzQkFBc0I7WUFDNUIsVUFBVSxFQUFFLHFCQUFxQjtZQUNqQyxJQUFJLEVBQUUsRUFBRTtTQUNULENBQUE7UUFFRDs7Ozs7Ozs7V0FRRztRQUNILFNBQUksR0FBVyxDQUFDLENBQUM7UUFZakI7Ozs7Ozs7OztXQVNHO1FBQ0gsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUU1Qjs7Ozs7Ozs7V0FRRztRQUNILGlCQUFZLEdBQWEsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFzQ3RDOzs7Ozs7OztXQVFHO1FBQ0gsYUFBUSxHQUFXLENBQUMsQ0FBQTtRQUVwQjs7Ozs7OztXQU9HO1FBRUgsaUJBQVksR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFFbEY7Ozs7Ozs7V0FPRztRQUVILGVBQVUsR0FBMkQsSUFBSSxZQUFZLEVBQTJDLENBQUM7UUFFakk7Ozs7Ozs7O1dBUUc7UUFDSyxxQkFBZ0IsR0FBcUUsSUFBSSxPQUFPLEVBQTJELENBQUM7UUFHcEs7Ozs7Ozs7OztXQVNHO1FBQ0gsOERBQThEO1FBQ3RELG1CQUFjLEdBQWlCLElBQUksT0FBTyxFQUFPLENBQUM7UUFFMUQ7Ozs7Ozs7OztXQVNHO1FBQ0ssYUFBUSxHQUFhLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFJLElBQWUsRUFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFDLENBQUE7SUFnQ3RILENBQUM7SUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0EwQkc7SUFDSCxLQUFLLENBQUMsUUFBUTtRQUNaLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFrRCxDQUFDLENBQUMsQ0FBQztRQUMxSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xILElBQUksQ0FBQyxZQUFZLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckQsSUFBRyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUk7WUFDdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxTQUFtQixDQUFDO1FBRTVELE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRXJCLElBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLO1lBQzdELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFNUQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRWxCLElBQUcsSUFBSSxDQUFDLEtBQUssWUFBWSxLQUFLLElBQUksSUFBSSxDQUFDLFdBQVc7WUFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsV0FBVztRQUNULElBQUcsSUFBSSxDQUFDLFdBQVc7WUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLEdBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzFFLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSCxLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxJQUFlO1FBQ3hDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFHLEtBQUssS0FBSyxhQUFhLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHO1lBQ3hDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQWUsRUFBRSxLQUFLLEVBQUUsR0FBc0IsQ0FBQyxDQUFDO1FBQ2pGLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7Ozs7Ozs7OztPQVdHO0lBQ0gsS0FBSyxDQUFDLGtCQUFrQixDQUFDLEtBQWEsRUFBRSxLQUFvQixFQUFFLEdBQW9CO1FBQ2hGLElBQUcsS0FBSyxLQUFLLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNsQyxJQUFHLEdBQUcsRUFBRSxDQUFDO2dCQUNQLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMvQixDQUFDO2lCQUFNLENBQUM7Z0JBQ04sTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNCLENBQUM7UUFDSCxDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUcsS0FBSyxLQUFLLGFBQWEsQ0FBQyxNQUFNO2dCQUMvQixNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0IsSUFBRyxLQUFLLEtBQUssYUFBYSxDQUFDLE1BQU07Z0JBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDMUIsQ0FBQztJQUNILENBQUM7SUFHRDs7Ozs7Ozs7Ozs7Ozs7O09BZUc7SUFDTSxXQUFXLENBQUMsS0FBYSxFQUFFLElBQWdDO1FBQ2xFLE9BQU8sR0FBSyxJQUFpQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUssSUFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQztJQUNyRixDQUFDO0lBR0Q7Ozs7O09BS0c7SUFDSCxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQW9CO1FBQ3JDLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUdEOzs7Ozs7OztPQVFHO0lBQ0gsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFvQjtRQUNyQyxNQUFNLElBQUksR0FBYSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLEtBQUksTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQW1CLEVBQUUsQ0FBQztZQUN4QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBYSxDQUFDO1lBQzFDLElBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDakQsTUFBTTtZQUNSLENBQUM7UUFDTCxDQUFDO1FBQ0QsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7T0FVRztJQUNILFlBQVksQ0FBQyxHQUFvQixFQUFFLEVBQVc7UUFDNUMsSUFBRyxDQUFDLEVBQUU7WUFDSixFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFjLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEYsQ0FBQztJQUdEOzs7Ozs7Ozs7O09BVUc7SUFFSCxXQUFXLENBQUMsS0FBZ0Q7UUFDMUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BdUJHO0lBRUgsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUF3QztRQUN6RCxJQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDOUMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBRyxLQUFLLEtBQUssU0FBUyxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNoQixDQUFDO1lBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBRyxLQUFLLEtBQUssU0FBUztnQkFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzVCLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixDQUFDO0lBQ0gsQ0FBQztJQUdEOzs7Ozs7Ozs7T0FTRztJQUNILEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBK0I7UUFDaEQsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsS0FBSyxDQUFDLFdBQVc7UUFDZixNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILGdCQUFnQixDQUFDLElBQWlCO1FBQ2hDLElBQUcsQ0FBQyxJQUFJO1lBQ04sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ3JCLElBQUksRUFBRSxjQUFjLENBQUMsT0FBTztZQUM1QixJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDaEIsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhO1NBQzlCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7Ozs7OztPQVVHO0lBQ0ssY0FBYyxDQUFDLEtBQWdEO1FBQ3JFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FrREc7SUFFSCxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQW9FLEtBQUs7UUFDckYsNEZBQTRGO1FBQzVGLHNEQUFzRDtRQUN0RCxrQkFBa0I7UUFDbEIscUJBQXFCO1FBQ3JCLEtBQUs7UUFFTCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixNQUFNLEtBQUssR0FBVyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDaEYsTUFBTSxLQUFLLEdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFeEUsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QixNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ2hELENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBZSxDQUFDO1FBRW5ELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRXhCLElBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM5QyxJQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUM1QixJQUFJLEtBQW1DLEVBQUUsTUFBTTtvQkFDNUMsS0FBbUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3pELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzVCLENBQUM7aUJBQU0sQ0FBQztnQkFDTixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtvQkFDWixJQUFJLEtBQW1DLEVBQUUsTUFBTSxJQUFLLEtBQXFCLEVBQUUsSUFBSSxLQUFLLGNBQWMsQ0FBQyxzQkFBc0I7d0JBQ3RILEtBQW1DLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUM3RCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQzthQUFNLENBQUM7WUFDTixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQzFCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNULENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7S0FVQztJQUNILGNBQWMsQ0FBQyxLQUE0QjtRQUN6QyxNQUFNLEVBQUUsSUFBSSxFQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7Ozs7Ozs7OztPQVVHO0lBQ0gsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUErQztRQUNqRSxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBa0MsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUMvRCxJQUFHLEtBQUssWUFBWSxXQUFXO1lBQzdCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsaUNBQWlDO2dCQUNoQyxLQUFLLENBQUMsTUFBa0MsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN2RCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7O09BV0c7SUFDRCxrQkFBa0IsQ0FBQyxPQUFtQixFQUFFLE1BQWM7UUFDcEQsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBYyxFQUFFLEVBQUUsQ0FDdkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDN0IsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBRSxNQUFpQixFQUFFLFdBQVcsRUFBRSxDQUFDLENBQzNFLENBQ0osQ0FBQztJQUNKLENBQUM7SUFFSDs7Ozs7Ozs7Ozs7O09BWUc7SUFDSCxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQWlCLEtBQUssRUFBRSxLQUFhLEVBQUUsS0FBYTtRQUN2RSxJQUFJLE9BQU8sR0FBZSxFQUFFLENBQUM7UUFDN0IsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxJQUFJLEtBQUssSUFBSyxJQUFJLENBQUMsV0FBc0IsRUFBRSxNQUFNLElBQUksQ0FBQyxDQUFFLElBQUksQ0FBQyxXQUE0QixFQUFFLENBQUM7WUFDL0csa0NBQWtDO1lBQ2xDLElBQUcsQ0FBRSxJQUFJLENBQUMsV0FBc0IsRUFBRSxNQUFNLElBQUksQ0FBRSxJQUFJLENBQUMsV0FBNEIsRUFBRSxDQUFDO2dCQUNoRixJQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDRDQUE0QyxDQUFDLENBQUM7b0JBQy9ELE9BQU8sRUFBRSxDQUFDO2dCQUNaLENBQUM7Z0JBRUQsSUFBRyxJQUFJLENBQUMsTUFBTSxZQUFZLFFBQVE7b0JBQ2hDLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFFaEMsSUFBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO29CQUN4QixPQUFPLEdBQUcsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzFFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFJLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNsRCxJQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTTtvQkFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUN2RCxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFlLENBQUMsQ0FBQztZQUNySCxDQUFDO2lCQUFNLENBQUM7Z0JBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQVUsRUFBRSxJQUFJLENBQUMsV0FBcUIsQ0FBQyxDQUFDO2dCQUNqRixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDekIsQ0FBQztRQUNILENBQUM7UUFFRCxJQUFHLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxtQkFBbUIsQ0FBQyxTQUFTO1lBQ2pFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDM0MsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQWdCLENBQUM7SUFDdkMsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7T0FZRztJQUNILEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBaUIsS0FBSztRQUN2QyxJQUFJLElBQUksR0FBRyxDQUFFLEdBQUksSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNsQyxJQUFJLE9BQU8sR0FBZSxFQUFFLENBQUM7UUFFN0IsMkJBQTJCO1FBQzNCLElBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVztZQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDckMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQXFDLENBQUM7UUFDeEQsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxJQUFJLEtBQUssSUFBSyxJQUFJLENBQUMsV0FBc0IsRUFBRSxNQUFNLElBQUksQ0FBQyxDQUFFLElBQUksQ0FBQyxXQUE0QixFQUFFLENBQUM7WUFDL0csSUFBSSxDQUFDO2dCQUNKLElBQUcsQ0FBRSxJQUFJLENBQUMsV0FBc0IsRUFBRSxNQUFNLElBQUksQ0FBRSxJQUFJLENBQUMsV0FBNEIsRUFBRSxDQUFDO29CQUM5RSxJQUFJLENBQUMsSUFBbUIsR0FBRyxFQUFFLENBQUM7b0JBQy9CLG1GQUFtRjtvQkFDbkYsaUZBQWlGO29CQUMvRSxJQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO3dCQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sSUFBSTs2QkFDeEIsTUFBTSxFQUFFOzZCQUNSLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFpQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzs2QkFDckQsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDMUIsQ0FBQztvQkFDRCxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDckQsQ0FBQztxQkFBTSxDQUFDO29CQUVOLElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTzt3QkFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFFM0QsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBNkMsQ0FBQyxDQUFDO29CQUMzRixPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQWdCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7b0JBQzNILElBQUksR0FBRyxFQUFFLENBQUM7Z0JBQ1osQ0FBQztnQkFDRCxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7WUFDbEcsQ0FBQztZQUFDLE9BQU0sS0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFFLEtBQWUsRUFBRSxPQUFPLElBQUksa0JBQWtCLElBQUksQ0FBQyxLQUFLLGlEQUFpRCxDQUFDLENBQUM7WUFDaEksQ0FBQztRQUNILENBQUM7UUFFRCxJQUFHLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQztZQUNoQixJQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZCLElBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUs7b0JBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzlCLENBQUM7aUJBQU0sQ0FBQztnQkFDTixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUN6QixDQUFDO1FBQ0gsQ0FBQztRQUNELElBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxtQkFBbUIsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVM7WUFDNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLE9BQU8sSUFBSSxJQUFJLEVBQWdCLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQW9CRztJQUNILGVBQWUsQ0FBQyxLQUFxQztRQUNuRCxJQUFJLFVBQTRCLENBQUM7UUFDakMsSUFBRyxPQUFPLEtBQUssS0FBSyxVQUFVLENBQUMsTUFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1RSxVQUFVLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBUSxJQUFJLENBQUMsRUFBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwSCxLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDL0IsSUFBRyxLQUFLLEtBQUssSUFBSSxDQUFDLEVBQUU7b0JBQ2xCLFNBQVM7Z0JBQ1gsSUFBSSxXQUFXLENBQUM7Z0JBQ2hCLElBQUcsQ0FBQyxLQUFLLENBQUMsS0FBZSxDQUFDLEVBQUUsQ0FBQztvQkFDM0IsV0FBVyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQVEsS0FBb0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDbkYsQ0FBQztxQkFBTSxDQUFDO29CQUNOLFdBQVcsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFRLEtBQW9CLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBZSxDQUFDLENBQUM7Z0JBQ3pGLENBQUM7Z0JBQ0QsVUFBVSxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDNUMsQ0FBQztRQUNILENBQUM7YUFBTSxDQUFDO1lBQ04sTUFBTSxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsR0FBRyxLQUFxQixDQUFDO1lBQzVDLFVBQVUsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFRLElBQUksQ0FBQyxFQUFpQixDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTVFLElBQUcsS0FBSyxFQUFFLE1BQU07Z0JBQ2QsVUFBVSxHQUFHLFNBQXdDLENBQUM7WUFFeEQsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBc0IsRUFBRSxFQUFFO2dCQUMvQyxNQUFNLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZDLElBQUksR0FBRyxHQUFHLEtBQXdCLENBQUM7Z0JBQ25DLElBQUcsS0FBSyxLQUFLLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBYSxDQUFDO29CQUMzQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLFdBQVcsQ0FBQztnQkFDaEIsUUFBUSxTQUFTLEVBQUUsQ0FBQztvQkFDbEIsS0FBSyxPQUFPO3dCQUNWLFdBQVcsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFRLEtBQW9CLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3ZFLE1BQU07b0JBQ1IsS0FBSyxXQUFXO3dCQUNkLFdBQVcsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFRLEtBQW9CLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3hFLE1BQU07b0JBQ1IsS0FBSyxjQUFjO3dCQUNqQixXQUFXLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFRLEtBQW9CLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ3ZHLE1BQU07b0JBQ1IsS0FBSyxVQUFVO3dCQUNiLFdBQVcsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFRLEtBQW9CLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBYSxDQUFDLENBQUM7d0JBQ3JGLE1BQU07b0JBQ1IsS0FBSyxjQUFjO3dCQUNqQixXQUFXLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBUSxLQUFvQixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN4RSxNQUFNO29CQUNSLEtBQUssV0FBVzt3QkFDZCxXQUFXLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBUSxLQUFvQixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN4RSxNQUFNO2dCQUNWLENBQUM7Z0JBQ0QsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDekIsV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQTBDLENBQUMsQ0FBcUIsQ0FBQztZQUNsRyxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUFFLEtBQW9CLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNwRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksRUFBRSxTQUFTLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM3RCxDQUFDO1FBQ0QsT0FBTyxVQUE4QixDQUFDO0lBRXhDLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7T0FXRztJQUNPLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBcUM7UUFDL0QsSUFBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxJQUFJLE9BQU8sSUFBSSxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ3JFLE1BQU0sU0FBUyxHQUFHLE1BQTBCLENBQUM7WUFDN0MsTUFBTSxHQUFHLE1BQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekMsZ0NBQWdDO1lBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBRSxNQUFxQixFQUFFLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7T0FVRztJQUNILFdBQVcsQ0FBQyxNQUFjO1FBQ3hCLElBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM5QyxJQUFHLElBQUksQ0FBQyxTQUFTO2dCQUNmLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUMvQixJQUFHLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzVCLENBQUM7aUJBQU0sQ0FBQztnQkFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDN0MsSUFBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU07b0JBQ25DLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO2dCQUNsQixJQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQztvQkFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDOUIsQ0FBQztRQUNILENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7WUFDcEIsSUFBRyxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7T0FhRztJQUNPLFVBQVUsQ0FBQyxJQUFjLEVBQUUsTUFBZ0IsRUFBRSxLQUFnQjtRQUNyRSxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBZSxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUU7WUFDckUsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ1gsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNyQixDQUFDO2lCQUFNLENBQUM7Z0JBQ04sSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO29CQUM1QixLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDO29CQUMvQixJQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7d0JBQ25CLEtBQUssR0FBRyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO29CQUNqQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixDQUFDO3FCQUFNLENBQUM7b0JBQ04sSUFBSSxHQUFHLENBQUM7b0JBRVIsS0FBSyxNQUFNLE1BQU0sSUFBSSxVQUFVO3dCQUM3QixHQUFHLEdBQUcsQ0FBQyxHQUFHOzRCQUNSLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDOzRCQUNkLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBR2hFLElBQUksV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUM1QixHQUFHLEdBQUcsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztvQkFFN0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQy9ELENBQUM7WUFDSCxDQUFDO1lBQ0QsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLElBQUksRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9DLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNULENBQUM7SUFFRDs7Ozs7Ozs7OztPQVVHO0lBQ0QsVUFBVSxDQUFDLElBQWdCO1FBQ3pCLElBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUN0QixPQUFPLEVBQUUsQ0FBQztRQUNaLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUMsR0FBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUksRUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBQyxFQUFDLENBQUM7UUFDcEQsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUMxQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLEdBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBYSxFQUFFLEdBQVcsRUFBRSxFQUFFO2dCQUNoRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDMUIsT0FBTyxHQUFHLENBQUM7WUFDYixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ04saUdBQWlHO1lBQ2pHLHNEQUFzRDtZQUN0RCxnQkFBZ0I7WUFDaEIsVUFBVTtTQUNYLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQWlCLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDM0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQWtCLEVBQUUsS0FBSyxDQUFDLEVBQUUsR0FBSSxFQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQzNGLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNULENBQUM7OEdBL3RDVSxhQUFhO29FQUFiLGFBQWE7WUFBYixrSEFBQSx1QkFBbUIsK0JBQU4sNkZBQWIsd0JBQW9CLCtCQUFQLHlIQUFiLG1CQUFlLCtCQUFGOzs7WUN2RnhCLEFBckNGLEFBZEEsQUFOQSxnRkFBb0IsK0NBTUEsK0NBY0QsK0NBcUNWOztZQXpEVCw0Q0FJQztZQUVELGNBWUM7WUFaRCw0Q0FZQztZQUVELGNBbUVDO1lBbkVELHFFQW1FQzs0QkRtQ0csZ0JBQWdCLHdEQUNoQixZQUFZO1lBRVosbUJBQW1CO1lBQ25CLE9BQU87WUFDUCxPQUFPO1lBQ1AsWUFBWTtZQUNaLGVBQWU7WUFDZixRQUFRO1lBRVIsbUJBQW1CO1lBQ25CLGlCQUFpQjtZQUNqQix3QkFBd0I7WUFHeEIsa0JBQWtCO1lBQ2xCLG1CQUFtQjtZQUVuQixlQUFlO1lBQ2YsMEJBQTBCOztBQUdqQixhQUFhO0lBN0J6QixPQUFPLEVBQUU7O0dBNkJHLGFBQWEsQ0FndUN6Qjs7aUZBaHVDWSxhQUFhO2NBNUJ6QixTQUFTOzJCQUNFLGdCQUFnQixjQUdkLElBQUksV0FDUDtvQkFDUCxnQkFBZ0I7b0JBQ2hCLFlBQVk7b0JBQ1osVUFBVTtvQkFDVixtQkFBbUI7b0JBQ25CLE9BQU87b0JBQ1AsT0FBTztvQkFDUCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsUUFBUTtvQkFDUixPQUFPO29CQUNQLG1CQUFtQjtvQkFDbkIsaUJBQWlCO29CQUNqQix3QkFBd0I7b0JBQ3hCLFlBQVk7b0JBQ1osZUFBZTtvQkFDZixrQkFBa0I7b0JBQ2xCLG1CQUFtQjtvQkFDbkIsaUJBQWlCO29CQUNqQixlQUFlO29CQUNmLDBCQUEwQjtpQkFDM0I7b0JBZUQsSUFBSTtrQkFESCxLQUFLO1lBYUcsWUFBWTtrQkFEcEIsS0FBSztZQWNOLGFBQWE7a0JBRFosS0FBSztZQWNOLElBQUk7a0JBREgsS0FBSztZQWVOLE1BQU07a0JBREwsS0FBSztZQWFOLEtBQUs7a0JBREosS0FBSztZQWFOLEtBQUs7a0JBREosS0FBSztZQWNOLFlBQVk7a0JBRFgsS0FBSztZQWVOLEtBQUs7a0JBREosS0FBSztZQWFOLEtBQUs7a0JBREosS0FBSztZQWNOLGVBQWU7a0JBRGQsS0FBSztZQWFOLGNBQWM7a0JBRGIsS0FBSztZQVlOLFdBQVc7a0JBRFYsS0FBSztZQWFOLGFBQWE7a0JBRFosS0FBSztZQWFOLGNBQWM7a0JBRGIsS0FBSztZQXlCTixZQUFZO2tCQURYLEtBQUs7WUFZTixhQUFhO2tCQURaLEtBQUs7WUFhTixNQUFNO2tCQURMLEtBQUs7WUFlTixXQUFXO2tCQURWLEtBQUs7WUFjTixTQUFTO2tCQURSLEtBQUs7WUFvQk4sS0FBSztrQkFESixLQUFLO1lBOEdOLFlBQVk7a0JBRFgsTUFBTTtZQVlQLFVBQVU7a0JBRFQsTUFBTTtZQWlSUCxXQUFXO2tCQURWLFlBQVk7bUJBQUMsMkJBQTJCLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUE4Qi9DLFlBQVk7a0JBRGpCLFlBQVk7bUJBQUMsdUJBQXVCLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFzSTNDLE9BQU87a0JBRFosWUFBWTttQkFBQyxxQ0FBcUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7a0ZBbDBCcEQsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgT25EZXN0cm95ICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5maW5pdGVTY3JvbGxDdXN0b21FdmVudCwgUmVmcmVzaGVyQ3VzdG9tRXZlbnQsIFNwaW5uZXJUeXBlcyB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7XG4gIElvbkluZmluaXRlU2Nyb2xsLFxuICBJb25JbmZpbml0ZVNjcm9sbENvbnRlbnQsXG4gIElvbkl0ZW0sXG4gIElvbkxhYmVsLFxuICBJb25MaXN0LFxuICBJb25SZWZyZXNoZXIsXG4gIElvblJlZnJlc2hlckNvbnRlbnQsXG4gIElvblNrZWxldG9uVGV4dCxcbiAgSW9uVGV4dCxcbiAgSW9uVGh1bWJuYWlsLFxuICBJb25Mb2FkaW5nXG59IGZyb20gJ0Bpb25pYy9hbmd1bGFyL3N0YW5kYWxvbmUnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPcGVyYXRpb25LZXlzIH0gZnJvbSAnQGRlY2FmLXRzL2RiLWRlY29yYXRvcnMnO1xuaW1wb3J0IHsgTW9kZWwsIFByaW1pdGl2ZXMgfSBmcm9tICdAZGVjYWYtdHMvZGVjb3JhdG9yLXZhbGlkYXRpb24nO1xuaW1wb3J0IHsgQ29uZGl0aW9uLCBPYnNlcnZlciwgT3JkZXJEaXJlY3Rpb24sIFBhZ2luYXRvciB9IGZyb20gJ0BkZWNhZi10cy9jb3JlJztcbmltcG9ydCB7XG4gIEJhc2VDdXN0b21FdmVudCxcbiAgRHluYW1pYyxcbiAgRXZlbnRDb25zdGFudHMsXG4gIENvbXBvbmVudHNUYWdOYW1lcyxcbiAgUmVuZGVyZXJDdXN0b21FdmVudCxcbiAgU3RyaW5nT3JCb29sZWFuLFxuICBLZXlWYWx1ZSxcbiAgTGlzdEl0ZW1DdXN0b21FdmVudFxufSBmcm9tICcuLi8uLi9lbmdpbmUnO1xuaW1wb3J0IHsgRm9yQW5ndWxhck1vZHVsZSB9IGZyb20gJy4uLy4uL2Zvci1hbmd1bGFyLm1vZHVsZSc7XG5pbXBvcnQgeyBOZ3hCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZW5naW5lL05neEJhc2VDb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgc3RyaW5nVG9Cb29sZWFuLFxuICBmb3JtYXREYXRlLFxuICBpc1ZhbGlkRGF0ZVxufSBmcm9tICcuLi8uLi9oZWxwZXJzJztcbmltcG9ydCB7IFNlYXJjaGJhckNvbXBvbmVudCB9IGZyb20gJy4uL3NlYXJjaGJhci9zZWFyY2hiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IEVtcHR5U3RhdGVDb21wb25lbnQgfSBmcm9tICcuLi9lbXB0eS1zdGF0ZS9lbXB0eS1zdGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb25lbnRSZW5kZXJlckNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudC1yZW5kZXJlci9jb21wb25lbnQtcmVuZGVyZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2luYXRpb25DdXN0b21FdmVudCB9IGZyb20gJy4uL3BhZ2luYXRpb24vY29uc3RhbnRzJztcbmltcG9ydCB7IElMaXN0RW1wdHlSZXN1bHQsIExpc3RDb21wb25lbnRzVHlwZXMsIERlY2FmUmVwb3NpdG9yeSB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IEZ1bmN0aW9uTGlrZSwgSUZpbHRlclF1ZXJ5LCBJRmlsdGVyUXVlcnlJdGVtIH0gZnJvbSAnLi4vLi4vZW5naW5lJztcbmltcG9ydCB7IEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4uL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50JztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQSB2ZXJzYXRpbGUgbGlzdCBjb21wb25lbnQgdGhhdCBzdXBwb3J0cyB2YXJpb3VzIGRhdGEgZGlzcGxheSBtb2Rlcy5cbiAqIEBzdW1tYXJ5IFRoaXMgY29tcG9uZW50IHByb3ZpZGVzIGEgZmxleGlibGUgd2F5IHRvIGRpc3BsYXkgbGlzdHMgb2YgZGF0YSB3aXRoIHN1cHBvcnRcbiAqIGZvciBpbmZpbml0ZSBzY3JvbGxpbmcsIHBhZ2luYXRpb24sIHNlYXJjaGluZywgYW5kIGN1c3RvbSBpdGVtIHJlbmRlcmluZy4gSXQgY2FuIGZldGNoXG4gKiBkYXRhIGZyb20gdmFyaW91cyBzb3VyY2VzIGluY2x1ZGluZyBtb2RlbHMsIGZ1bmN0aW9ucywgb3IgZGlyZWN0IGRhdGEgaW5wdXQuXG4gKlxuICogVGhlIGNvbXBvbmVudCBzdXBwb3J0cyB0d28gbWFpbiBkaXNwbGF5IHR5cGVzOlxuICogMS4gSW5maW5pdGUgc2Nyb2xsaW5nIC0gTG9hZHMgbW9yZSBkYXRhIGFzIHRoZSB1c2VyIHNjcm9sbHNcbiAqIDIuIFBhZ2luYXRpb24gLSBEaXNwbGF5cyBkYXRhIGluIHBhZ2VzIHdpdGggbmF2aWdhdGlvbiBjb250cm9sc1xuICpcbiAqIEFkZGl0aW9uYWwgZmVhdHVyZXMgaW5jbHVkZTpcbiAqIC0gUHVsbC10by1yZWZyZXNoIGZ1bmN0aW9uYWxpdHlcbiAqIC0gU2VhcmNoIGZpbHRlcmluZ1xuICogLSBFbXB0eSBzdGF0ZSBjdXN0b21pemF0aW9uXG4gKiAtIEN1c3RvbSBpdGVtIHJlbmRlcmluZ1xuICogLSBFdmVudCBlbWlzc2lvbiBmb3IgaW50ZXJhY3Rpb25zXG4gKlxuICogQG1lcm1haWRcbiAqIHNlcXVlbmNlRGlhZ3JhbVxuICogICBwYXJ0aWNpcGFudCBVIGFzIFVzZXJcbiAqICAgcGFydGljaXBhbnQgTCBhcyBMaXN0Q29tcG9uZW50XG4gKiAgIHBhcnRpY2lwYW50IEQgYXMgRGF0YSBTb3VyY2VcbiAqICAgcGFydGljaXBhbnQgRSBhcyBFeHRlcm5hbCBDb21wb25lbnRzXG4gKlxuICogICBVLT4+TDogSW5pdGlhbGl6ZSBjb21wb25lbnRcbiAqICAgTC0+Pkw6IG5nT25Jbml0KClcbiAqICAgTC0+PkQ6IFJlcXVlc3QgaW5pdGlhbCBkYXRhXG4gKiAgIEQtLT4+TDogUmV0dXJuIGRhdGFcbiAqICAgTC0+Pkw6IFByb2Nlc3MgYW5kIGRpc3BsYXkgZGF0YVxuICpcbiAqICAgYWx0IFVzZXIgc2Nyb2xscyAoSW5maW5pdGUgbW9kZSlcbiAqICAgICBVLT4+TDogU2Nyb2xsIHRvIGJvdHRvbVxuICogICAgIEwtPj5EOiBSZXF1ZXN0IG1vcmUgZGF0YVxuICogICAgIEQtLT4+TDogUmV0dXJuIGFkZGl0aW9uYWwgZGF0YVxuICogICAgIEwtPj5MOiBBcHBlbmQgdG8gZXhpc3RpbmcgZGF0YVxuICogICBlbHNlIFVzZXIgY2hhbmdlcyBwYWdlIChQYWdpbmF0ZWQgbW9kZSlcbiAqICAgICBVLT4+TDogQ2xpY2sgcGFnZSBudW1iZXJcbiAqICAgICBMLT4+TDogaGFuZGxlUGFnaW5hdGUoKVxuICogICAgIEwtPj5EOiBSZXF1ZXN0IGRhdGEgZm9yIHBhZ2VcbiAqICAgICBELS0+Pkw6IFJldHVybiBwYWdlIGRhdGFcbiAqICAgICBMLT4+TDogUmVwbGFjZSBkaXNwbGF5ZWQgZGF0YVxuICogICBlbmRcbiAqXG4gKiAgIGFsdCBVc2VyIHNlYXJjaGVzXG4gKiAgICAgVS0+Pkw6IEVudGVyIHNlYXJjaCB0ZXJtXG4gKiAgICAgTC0+Pkw6IGhhbmRsZVNlYXJjaCgpXG4gKiAgICAgTC0+PkQ6IEZpbHRlciBkYXRhIGJ5IHNlYXJjaCB0ZXJtXG4gKiAgICAgRC0tPj5MOiBSZXR1cm4gZmlsdGVyZWQgZGF0YVxuICogICAgIEwtPj5MOiBVcGRhdGUgZGlzcGxheWVkIGRhdGFcbiAqICAgZW5kXG4gKlxuICogICBhbHQgVXNlciBjbGlja3MgaXRlbVxuICogICAgIFUtPj5MOiBDbGljayBsaXN0IGl0ZW1cbiAqICAgICBMLT4+TDogaGFuZGxlQ2xpY2soKVxuICogICAgIEwtPj5FOiBFbWl0IGNsaWNrRXZlbnRcbiAqICAgZW5kXG4gKlxuICogQGV4YW1wbGVcbiAqIDxuZ3gtZGVjYWYtbGlzdFxuICogICBbc291cmNlXT1cImRhdGFTb3VyY2VcIlxuICogICBbbGltaXRdPVwiMTBcIlxuICogICBbdHlwZV09XCInaW5maW5pdGUnXCJcbiAqICAgW3Nob3dTZWFyY2hiYXJdPVwidHJ1ZVwiXG4gKiAgIChjbGlja0V2ZW50KT1cImhhbmRsZUl0ZW1DbGljaygkZXZlbnQpXCJcbiAqICAgKHJlZnJlc2hFdmVudCk9XCJoYW5kbGVSZWZyZXNoKCRldmVudClcIj5cbiAqIDwvbmd4LWRlY2FmLWxpc3Q+XG4gKlxuICogQGV4dGVuZHMge05neEJhc2VDb21wb25lbnR9XG4gKiBAaW1wbGVtZW50cyB7T25Jbml0fVxuICovXG5ARHluYW1pYygpXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZGVjYWYtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdC5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgRm9yQW5ndWxhck1vZHVsZSxcbiAgICBJb25SZWZyZXNoZXIsXG4gICAgSW9uTG9hZGluZyxcbiAgICBQYWdpbmF0aW9uQ29tcG9uZW50LFxuICAgIElvbkxpc3QsXG4gICAgSW9uSXRlbSxcbiAgICBJb25UaHVtYm5haWwsXG4gICAgSW9uU2tlbGV0b25UZXh0LFxuICAgIElvbkxhYmVsLFxuICAgIElvblRleHQsXG4gICAgSW9uUmVmcmVzaGVyQ29udGVudCxcbiAgICBJb25JbmZpbml0ZVNjcm9sbCxcbiAgICBJb25JbmZpbml0ZVNjcm9sbENvbnRlbnQsXG4gICAgSW9uVGh1bWJuYWlsLFxuICAgIElvblNrZWxldG9uVGV4dCxcbiAgICBTZWFyY2hiYXJDb21wb25lbnQsXG4gICAgRW1wdHlTdGF0ZUNvbXBvbmVudCxcbiAgICBMaXN0SXRlbUNvbXBvbmVudCxcbiAgICBGaWx0ZXJDb21wb25lbnQsXG4gICAgQ29tcG9uZW50UmVuZGVyZXJDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGV4dGVuZHMgTmd4QmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFRoZSBkaXNwbGF5IG1vZGUgZm9yIHRoZSBsaXN0IGNvbXBvbmVudC5cbiAgICogQHN1bW1hcnkgRGV0ZXJtaW5lcyBob3cgdGhlIGxpc3QgZGF0YSBpcyBsb2FkZWQgYW5kIGRpc3BsYXllZC4gT3B0aW9ucyBpbmNsdWRlOlxuICAgKiAtIElORklOSVRFOiBMb2FkcyBtb3JlIGRhdGEgYXMgdGhlIHVzZXIgc2Nyb2xscyAoaW5maW5pdGUgc2Nyb2xsaW5nKVxuICAgKiAtIFBBR0lOQVRFRDogRGlzcGxheXMgZGF0YSBpbiBwYWdlcyB3aXRoIG5hdmlnYXRpb24gY29udHJvbHNcbiAgICpcbiAgICogQHR5cGUge0xpc3RDb21wb25lbnRzVHlwZXN9XG4gICAqIEBkZWZhdWx0IExpc3RDb21wb25lbnRzVHlwZXMuSU5GSU5JVEVcbiAgICogQG1lbWJlck9mIExpc3RDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHR5cGU6IExpc3RDb21wb25lbnRzVHlwZXMgPSBMaXN0Q29tcG9uZW50c1R5cGVzLklORklOSVRFO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ29udHJvbHMgd2hldGhlciB0aGUgY29tcG9uZW50IHVzZXMgdHJhbnNsYXRpb24gc2VydmljZXMuXG4gICAqIEBzdW1tYXJ5IFdoZW4gc2V0IHRvIHRydWUsIHRoZSBjb21wb25lbnQgd2lsbCBhdHRlbXB0IHRvIHVzZSB0cmFuc2xhdGlvbiBzZXJ2aWNlc1xuICAgKiBmb3IgYW55IHRleHQgY29udGVudC4gVGhpcyBhbGxvd3MgZm9yIGludGVybmF0aW9uYWxpemF0aW9uIG9mIHRoZSBsaXN0IGNvbXBvbmVudC5cbiAgICpcbiAgICogQHR5cGUge1N0cmluZ09yQm9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKiBAbWVtYmVyT2YgTGlzdENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgb3ZlcnJpZGUgdHJhbnNsYXRhYmxlOiBTdHJpbmdPckJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ29udHJvbHMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIHNlYXJjaCBiYXIuXG4gICAqIEBzdW1tYXJ5IFdoZW4gc2V0IHRvIHRydWUsIGRpc3BsYXlzIGEgc2VhcmNoIGJhciBhdCB0aGUgdG9wIG9mIHRoZSBsaXN0IHRoYXQgYWxsb3dzXG4gICAqIHVzZXJzIHRvIGZpbHRlciB0aGUgbGlzdCBpdGVtcy4gVGhlIHNlYXJjaCBmdW5jdGlvbmFsaXR5IHdvcmtzIGJ5IGZpbHRlcmluZyB0aGVcbiAgICogZXhpc3RpbmcgZGF0YSBvciBieSB0cmlnZ2VyaW5nIGEgbmV3IGRhdGEgZmV0Y2ggd2l0aCBzZWFyY2ggcGFyYW1ldGVycy5cbiAgICpcbiAgICogQHR5cGUge1N0cmluZ09yQm9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKiBAbWVtYmVyT2YgTGlzdENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgc2hvd1NlYXJjaGJhcjogU3RyaW5nT3JCb29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIERpcmVjdCBkYXRhIGlucHV0IGZvciB0aGUgbGlzdCBjb21wb25lbnQuXG4gICAqIEBzdW1tYXJ5IFByb3ZpZGVzIGEgd2F5IHRvIGRpcmVjdGx5IHBhc3MgZGF0YSB0byB0aGUgbGlzdCBjb21wb25lbnQgaW5zdGVhZCBvZlxuICAgKiBmZXRjaGluZyBpdCBmcm9tIGEgc291cmNlLiBXaGVuIGJvdGggZGF0YSBhbmQgc291cmNlIGFyZSBwcm92aWRlZCwgdGhlIGNvbXBvbmVudFxuICAgKiB3aWxsIHVzZSB0aGUgc291cmNlIHRvIGZldGNoIGRhdGEgb25seSBpZiB0aGUgZGF0YSBhcnJheSBpcyBlbXB0eS5cbiAgICpcbiAgICogQHR5cGUge0tleVZhbHVlW10gfCB1bmRlZmluZWR9XG4gICAqIEBkZWZhdWx0IHVuZGVmaW5lZFxuICAgKiBAbWVtYmVyT2YgTGlzdENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgZGF0YT86IEtleVZhbHVlW10gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGUgZGF0YSBzb3VyY2UgZm9yIHRoZSBsaXN0IGNvbXBvbmVudC5cbiAgICogQHN1bW1hcnkgU3BlY2lmaWVzIHdoZXJlIHRoZSBsaXN0IHNob3VsZCBmZXRjaCBpdHMgZGF0YSBmcm9tLiBUaGlzIGNhbiBiZSBlaXRoZXI6XG4gICAqIC0gQSBzdHJpbmcgVVJMIG9yIGVuZHBvaW50IGlkZW50aWZpZXJcbiAgICogLSBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBkYXRhIHdoZW4gY2FsbGVkXG4gICAqIFRoZSBjb21wb25lbnQgd2lsbCBjYWxsIHRoaXMgc291cmNlIHdoZW4gaXQgbmVlZHMgdG8gbG9hZCBvciByZWZyZXNoIGRhdGEuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmcgfCBGdW5jdGlvbkxpa2V9XG4gICAqIEByZXF1aXJlZFxuICAgKiBAbWVtYmVyT2YgTGlzdENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgc291cmNlITogc3RyaW5nIHwgRnVuY3Rpb25MaWtlO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhlIHN0YXJ0aW5nIGluZGV4IGZvciBkYXRhIGZldGNoaW5nLlxuICAgKiBAc3VtbWFyeSBTcGVjaWZpZXMgdGhlIGluZGV4IGZyb20gd2hpY2ggdG8gc3RhcnQgZmV0Y2hpbmcgZGF0YS4gVGhpcyBpcyB1c2VkXG4gICAqIGZvciBwYWdpbmF0aW9uIGFuZCBpbmZpbml0ZSBzY3JvbGxpbmcgdG8gZGV0ZXJtaW5lIHdoaWNoIHN1YnNldCBvZiBkYXRhIHRvIGxvYWQuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDBcbiAgICogQG1lbWJlck9mIExpc3RDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHN0YXJ0OiBudW1iZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhlIG51bWJlciBvZiBpdGVtcyB0byBmZXRjaCBwZXIgcGFnZSBvciBsb2FkIG9wZXJhdGlvbi5cbiAgICogQHN1bW1hcnkgRGV0ZXJtaW5lcyBob3cgbWFueSBpdGVtcyBhcmUgbG9hZGVkIGF0IG9uY2UgZHVyaW5nIHBhZ2luYXRpb24gb3JcbiAgICogaW5maW5pdGUgc2Nyb2xsaW5nLiBUaGlzIGFmZmVjdHMgdGhlIHNpemUgb2YgZGF0YSBjaHVua3MgcmVxdWVzdGVkIGZyb20gdGhlIHNvdXJjZS5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlZmF1bHQgMTBcbiAgICogQG1lbWJlck9mIExpc3RDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGxpbWl0OiBudW1iZXIgPSAxMDtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENvbnRyb2xzIHdoZXRoZXIgbW9yZSBkYXRhIGNhbiBiZSBsb2FkZWQuXG4gICAqIEBzdW1tYXJ5IFdoZW4gc2V0IHRvIHRydWUsIHRoZSBjb21wb25lbnQgd2lsbCBhbGxvdyBsb2FkaW5nIGFkZGl0aW9uYWwgZGF0YVxuICAgKiB0aHJvdWdoIGluZmluaXRlIHNjcm9sbGluZyBvciBwYWdpbmF0aW9uLiBXaGVuIGZhbHNlLCB0aGUgY29tcG9uZW50IHdpbGwgbm90XG4gICAqIGF0dGVtcHQgdG8gbG9hZCBtb3JlIGRhdGEgYmV5b25kIHdoYXQgaXMgaW5pdGlhbGx5IGRpc3BsYXllZC5cbiAgICpcbiAgICogQHR5cGUge1N0cmluZ09yQm9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKiBAbWVtYmVyT2YgTGlzdENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgbG9hZE1vcmVEYXRhOiBTdHJpbmdPckJvb2xlYW4gPSB0cnVlXG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGUgc3R5bGUgb2YgZGl2aWRpbmcgbGluZXMgYmV0d2VlbiBsaXN0IGl0ZW1zLlxuICAgKiBAc3VtbWFyeSBEZXRlcm1pbmVzIGhvdyBkaXZpZGluZyBsaW5lcyBhcHBlYXIgYmV0d2VlbiBsaXN0IGl0ZW1zLiBPcHRpb25zIGluY2x1ZGU6XG4gICAqIC0gXCJpbnNldFwiOiBMaW5lcyBhcmUgaW5zZXQgZnJvbSB0aGUgZWRnZXNcbiAgICogLSBcImZ1bGxcIjogTGluZXMgZXh0ZW5kIHRoZSBmdWxsIHdpZHRoXG4gICAqIC0gXCJub25lXCI6IE5vIGRpdmlkaW5nIGxpbmVzXG4gICAqXG4gICAqIEB0eXBlIHtcImluc2V0XCIgfCBcImZ1bGxcIiB8IFwibm9uZVwifVxuICAgKiBAZGVmYXVsdCBcImZ1bGxcIlxuICAgKiBAbWVtYmVyT2YgTGlzdENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgbGluZXM6IFwiaW5zZXRcIiB8IFwiZnVsbFwiIHwgXCJub25lXCIgPSBcImZ1bGxcIjtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENvbnRyb2xzIHdoZXRoZXIgdGhlIGxpc3QgaGFzIGluc2V0IHN0eWxpbmcuXG4gICAqIEBzdW1tYXJ5IFdoZW4gc2V0IHRvIHRydWUsIHRoZSBsaXN0IHdpbGwgaGF2ZSBpbnNldCBzdHlsaW5nIHdpdGggcm91bmRlZCBjb3JuZXJzXG4gICAqIGFuZCBtYXJnaW4gYXJvdW5kIHRoZSBlZGdlcy4gVGhpcyBjcmVhdGVzIGEgY2FyZC1saWtlIGFwcGVhcmFuY2UgZm9yIHRoZSBsaXN0LlxuICAgKlxuICAgKiBAdHlwZSB7U3RyaW5nT3JCb29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAbWVtYmVyT2YgTGlzdENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgaW5zZXQ6IFN0cmluZ09yQm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhlIHRocmVzaG9sZCBmb3IgdHJpZ2dlcmluZyBpbmZpbml0ZSBzY3JvbGwgbG9hZGluZy5cbiAgICogQHN1bW1hcnkgU3BlY2lmaWVzIGhvdyBjbG9zZSB0byB0aGUgYm90dG9tIG9mIHRoZSBsaXN0IHRoZSB1c2VyIG11c3Qgc2Nyb2xsXG4gICAqIGJlZm9yZSB0aGUgY29tcG9uZW50IHRyaWdnZXJzIGxvYWRpbmcgb2YgYWRkaXRpb25hbCBkYXRhLiBUaGlzIGlzIGV4cHJlc3NlZFxuICAgKiBhcyBhIHBlcmNlbnRhZ2Ugb2YgdGhlIGxpc3QgaGVpZ2h0LlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCBcIjE1JVwiXG4gICAqIEBtZW1iZXJPZiBMaXN0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBzY3JvbGxUaHJlc2hvbGQ6IHN0cmluZyA9IFwiMTUlXCI7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGUgcG9zaXRpb24gd2hlcmUgbmV3IGl0ZW1zIGFyZSBhZGRlZCBkdXJpbmcgaW5maW5pdGUgc2Nyb2xsaW5nLlxuICAgKiBAc3VtbWFyeSBEZXRlcm1pbmVzIHdoZXRoZXIgbmV3IGl0ZW1zIGFyZSBhZGRlZCB0byB0aGUgdG9wIG9yIGJvdHRvbSBvZiB0aGUgbGlzdFxuICAgKiB3aGVuIGxvYWRpbmcgbW9yZSBkYXRhIHRocm91Z2ggaW5maW5pdGUgc2Nyb2xsaW5nLlxuICAgKlxuICAgKiBAdHlwZSB7XCJib3R0b21cIiB8IFwidG9wXCJ9XG4gICAqIEBkZWZhdWx0IFwiYm90dG9tXCJcbiAgICogQG1lbWJlck9mIExpc3RDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNjcm9sbFBvc2l0aW9uOiBcImJvdHRvbVwiIHwgXCJ0b3BcIiA9IFwiYm90dG9tXCI7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDdXN0b20gdGV4dCB0byBkaXNwbGF5IGR1cmluZyBsb2FkaW5nIG9wZXJhdGlvbnMuXG4gICAqIEBzdW1tYXJ5IFNwZWNpZmllcyB0aGUgdGV4dCBzaG93biBpbiB0aGUgbG9hZGluZyBpbmRpY2F0b3Igd2hlbiB0aGUgY29tcG9uZW50XG4gICAqIGlzIGZldGNoaW5nIGRhdGEuIElmIG5vdCBwcm92aWRlZCwgYSBkZWZhdWx0IGxvYWRpbmcgbWVzc2FnZSB3aWxsIGJlIHVzZWQuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmcgfCB1bmRlZmluZWR9XG4gICAqIEBtZW1iZXJPZiBMaXN0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBsb2FkaW5nVGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENvbnRyb2xzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBwdWxsLXRvLXJlZnJlc2ggZmVhdHVyZS5cbiAgICogQHN1bW1hcnkgV2hlbiBzZXQgdG8gdHJ1ZSwgZW5hYmxlcyB0aGUgcHVsbC10by1yZWZyZXNoIGZ1bmN0aW9uYWxpdHkgdGhhdCBhbGxvd3NcbiAgICogdXNlcnMgdG8gcmVmcmVzaCB0aGUgbGlzdCBkYXRhIGJ5IHB1bGxpbmcgZG93biBmcm9tIHRoZSB0b3Agb2YgdGhlIGxpc3QuXG4gICAqXG4gICAqIEB0eXBlIHtTdHJpbmdPckJvb2xlYW59XG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICogQG1lbWJlck9mIExpc3RDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNob3dSZWZyZXNoZXI6IFN0cmluZ09yQm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGUgdHlwZSBvZiBzcGlubmVyIHRvIGRpc3BsYXkgZHVyaW5nIGxvYWRpbmcgb3BlcmF0aW9ucy5cbiAgICogQHN1bW1hcnkgU3BlY2lmaWVzIHRoZSB2aXN1YWwgc3R5bGUgb2YgdGhlIGxvYWRpbmcgc3Bpbm5lciBzaG93biBkdXJpbmcgZGF0YVxuICAgKiBmZXRjaGluZyBvcGVyYXRpb25zLiBVc2VzIElvbmljJ3MgcHJlZGVmaW5lZCBzcGlubmVyIHR5cGVzLlxuICAgKlxuICAgKiBAdHlwZSB7U3Bpbm5lclR5cGVzfVxuICAgKiBAZGVmYXVsdCBcImNpcmN1bGFyXCJcbiAgICogQG1lbWJlck9mIExpc3RDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGxvYWRpbmdTcGlubmVyOiBTcGlubmVyVHlwZXMgPSBcImNpcmN1bGFyXCI7XG5cbiAgLy8gLyoqXG4gIC8vICAqIEBkZXNjcmlwdGlvbiBRdWVyeSBwYXJhbWV0ZXJzIGZvciBkYXRhIGZldGNoaW5nLlxuICAvLyAgKiBAc3VtbWFyeSBTcGVjaWZpZXMgYWRkaXRpb25hbCBxdWVyeSBwYXJhbWV0ZXJzIHRvIHVzZSB3aGVuIGZldGNoaW5nIGRhdGEgZnJvbVxuICAvLyAgKiB0aGUgc291cmNlLiBUaGlzIGNhbiBiZSBwcm92aWRlZCBhcyBhIHN0cmluZyAoSlNPTikgb3IgYSBkaXJlY3Qgb2JqZWN0LlxuICAvLyAgKlxuICAvLyAgKiBAdHlwZSB7c3RyaW5nIHwgS2V5VmFsdWUgfCB1bmRlZmluZWR9XG4gIC8vICAqIEBtZW1iZXJPZiBMaXN0Q29tcG9uZW50XG4gIC8vICAqL1xuICAvLyBASW5wdXQoKVxuICAvLyBxdWVyeT86IHN0cmluZyB8IEtleVZhbHVlO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ29udHJvbHMgd2hldGhlciB0aGUgZmlsdGVyaW5nIGZ1bmN0aW9uYWxpdHkgaXMgZW5hYmxlZC5cbiAgICogQHN1bW1hcnkgV2hlbiBzZXQgdG8gdHJ1ZSwgZW5hYmxlcyB0aGUgZmlsdGVyIGNvbXBvbmVudCB0aGF0IGFsbG93cyB1c2VycyB0byBjcmVhdGVcbiAgICogY29tcGxleCBzZWFyY2ggY3JpdGVyaWEgd2l0aCBtdWx0aXBsZSBmaWVsZCBmaWx0ZXJzLCBjb25kaXRpb25zLCBhbmQgdmFsdWVzLlxuICAgKiBXaGVuIGZhbHNlLCBkaXNhYmxlcyB0aGUgZmlsdGVyIGludGVyZmFjZSBlbnRpcmVseS5cbiAgICpcbiAgICogQHR5cGUge1N0cmluZ09yQm9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKiBAbWVtYmVyT2YgTGlzdENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgZW5hYmxlRmlsdGVyOiBTdHJpbmdPckJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gU29ydGluZyBwYXJhbWV0ZXJzIGZvciBkYXRhIGZldGNoaW5nLlxuICAgKiBAc3VtbWFyeSBTcGVjaWZpZXMgaG93IHRoZSBmZXRjaGVkIGRhdGEgc2hvdWxkIGJlIHNvcnRlZC4gVGhpcyBjYW4gYmUgcHJvdmlkZWRcbiAgICogYXMgYSBzdHJpbmcgKGZpZWxkIG5hbWUgd2l0aCBvcHRpb25hbCBkaXJlY3Rpb24pIG9yIGEgZGlyZWN0IG9iamVjdC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZyB8IEtleVZhbHVlIHwgdW5kZWZpbmVkfVxuICAgKiBAbWVtYmVyT2YgTGlzdENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgc29ydERpcmVjdGlvbjogT3JkZXJEaXJlY3Rpb24gPSBPcmRlckRpcmVjdGlvbi5EU0M7XG5cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFNvcnRpbmcgcGFyYW1ldGVycyBmb3IgZGF0YSBmZXRjaGluZy5cbiAgICogQHN1bW1hcnkgU3BlY2lmaWVzIGhvdyB0aGUgZmV0Y2hlZCBkYXRhIHNob3VsZCBiZSBzb3J0ZWQuIFRoaXMgY2FuIGJlIHByb3ZpZGVkXG4gICAqIGFzIGEgc3RyaW5nIChmaWVsZCBuYW1lIHdpdGggb3B0aW9uYWwgZGlyZWN0aW9uKSBvciBhIGRpcmVjdCBvYmplY3QuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmcgfCBLZXlWYWx1ZSB8IHVuZGVmaW5lZH1cbiAgICogQG1lbWJlck9mIExpc3RDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNvcnRCeSE6IHN0cmluZztcblxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ29udHJvbHMgd2hldGhlciBzb3J0aW5nIGZ1bmN0aW9uYWxpdHkgaXMgZGlzYWJsZWQuXG4gICAqIEBzdW1tYXJ5IFdoZW4gc2V0IHRvIHRydWUsIGRpc2FibGVzIHRoZSBzb3J0IGNvbnRyb2xzIGFuZCBwcmV2ZW50cyB1c2VycyBmcm9tXG4gICAqIGNoYW5naW5nIHRoZSBzb3J0IG9yZGVyIG9yIGZpZWxkLiBUaGUgbGlzdCB3aWxsIG1haW50YWluIGl0cyBkZWZhdWx0IG9yXG4gICAqIHByb2dyYW1tYXRpY2FsbHkgc2V0IHNvcnQgY29uZmlndXJhdGlvbiB3aXRob3V0IHVzZXIgaW50ZXJhY3Rpb24uXG4gICAqXG4gICAqIEB0eXBlIHtTdHJpbmdPckJvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJPZiBMaXN0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBkaXNhYmxlU29ydDogU3RyaW5nT3JCb29sZWFuID0gZmFsc2U7XG5cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEljb24gdG8gZGlzcGxheSB3aGVuIHRoZSBsaXN0IGlzIGVtcHR5LlxuICAgKiBAc3VtbWFyeSBTcGVjaWZpZXMgdGhlIGljb24gc2hvd24gaW4gdGhlIGVtcHR5IHN0YXRlIHdoZW4gbm8gZGF0YSBpcyBhdmFpbGFibGUuXG4gICAqIFRoaXMgY2FuIGJlIGFueSBpY29uIG5hbWUgc3VwcG9ydGVkIGJ5IHRoZSBhcHBsaWNhdGlvbidzIGljb24gc3lzdGVtLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nIHwgdW5kZWZpbmVkfVxuICAgKiBAZGVmYXVsdCAndGktZGF0YWJhc2UtZXhjbGFtYXRpb24nXG4gICAqIEBtZW1iZXJPZiBMaXN0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBlbXB0eUljb24/OiBzdHJpbmcgPSAndGktZGF0YWJhc2UtZXhjbGFtYXRpb24nO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ29uZmlndXJhdGlvbiBmb3IgdGhlIGVtcHR5IHN0YXRlIGRpc3BsYXkuXG4gICAqIEBzdW1tYXJ5IEN1c3RvbWl6ZXMgaG93IHRoZSBlbXB0eSBzdGF0ZSBpcyBkaXNwbGF5ZWQgd2hlbiBubyBkYXRhIGlzIGF2YWlsYWJsZS5cbiAgICogVGhpcyBpbmNsdWRlcyB0aGUgdGl0bGUsIHN1YnRpdGxlLCBidXR0b24gdGV4dCwgaWNvbiwgYW5kIG5hdmlnYXRpb24gbGluay5cbiAgICpcbiAgICogQHR5cGUge1BhcnRpYWw8SUxpc3RFbXB0eVJlc3VsdD59XG4gICAqIEBkZWZhdWx0IHtcbiAgICogICB0aXRsZTogJ2VtcHR5LnRpdGxlJyxcbiAgICogICBzdWJ0aXRsZTogJ2VtcHR5LnN1YnRpdGxlJyxcbiAgICogICBzaG93QnV0dG9uOiBmYWxzZSxcbiAgICogICBpY29uOiAnYWxlcnQtY2lyY2xlLW91dGxpbmUnLFxuICAgKiAgIGJ1dHRvblRleHQ6ICdsb2NhbGUuZW1wdHkuYnV0dG9uJyxcbiAgICogICBsaW5rOiAnJ1xuICAgKiB9XG4gICAqIEBtZW1iZXJPZiBMaXN0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBlbXB0eTogUGFydGlhbDxJTGlzdEVtcHR5UmVzdWx0PiA9IHtcbiAgICB0aXRsZTogJ2VtcHR5LnRpdGxlJyxcbiAgICBzdWJ0aXRsZTogJ2VtcHR5LnN1YnRpdGxlJyxcbiAgICBzaG93QnV0dG9uOiBmYWxzZSxcbiAgICBpY29uOiAnYWxlcnQtY2lyY2xlLW91dGxpbmUnLFxuICAgIGJ1dHRvblRleHQ6ICdsb2NhbGUuZW1wdHkuYnV0dG9uJyxcbiAgICBsaW5rOiAnJ1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGUgY3VycmVudCBwYWdlIG51bWJlciBpbiBwYWdpbmF0ZWQgbW9kZS5cbiAgICogQHN1bW1hcnkgVHJhY2tzIHdoaWNoIHBhZ2UgaXMgY3VycmVudGx5IGJlaW5nIGRpc3BsYXllZCB3aGVuIHRoZSBjb21wb25lbnRcbiAgICogaXMgaW4gcGFnaW5hdGVkIG1vZGUuIFRoaXMgaXMgdXNlZCBmb3IgcGFnaW5hdGlvbiBjb250cm9scyBhbmQgZGF0YSBmZXRjaGluZy5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlZmF1bHQgMVxuICAgKiBAbWVtYmVyT2YgTGlzdENvbXBvbmVudFxuICAgKi9cbiAgcGFnZTogbnVtYmVyID0gMTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFRoZSB0b3RhbCBudW1iZXIgb2YgcGFnZXMgYXZhaWxhYmxlLlxuICAgKiBAc3VtbWFyeSBTdG9yZXMgdGhlIGNhbGN1bGF0ZWQgdG90YWwgbnVtYmVyIG9mIHBhZ2VzIGJhc2VkIG9uIHRoZSBkYXRhIHNpemVcbiAgICogYW5kIGxpbWl0LiBUaGlzIGlzIHVzZWQgZm9yIHBhZ2luYXRpb24gY29udHJvbHMgYW5kIGJvdW5kYXJ5IGNoZWNraW5nLlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAbWVtYmVyT2YgTGlzdENvbXBvbmVudFxuICAgKi9cbiAgcGFnZXMhOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBJbmRpY2F0ZXMgd2hldGhlciBhIHJlZnJlc2ggb3BlcmF0aW9uIGlzIGluIHByb2dyZXNzLlxuICAgKiBAc3VtbWFyeSBXaGVuIHRydWUsIHRoZSBjb21wb25lbnQgaXMgY3VycmVudGx5IGZldGNoaW5nIG5ldyBkYXRhLiBUaGlzIGlzIHVzZWRcbiAgICogdG8gY29udHJvbCBsb2FkaW5nIGluZGljYXRvcnMgYW5kIHByZXZlbnQgZHVwbGljYXRlIHJlZnJlc2ggb3BlcmF0aW9ucyBmcm9tXG4gICAqIGJlaW5nIHRyaWdnZXJlZCBzaW11bHRhbmVvdXNseS5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJPZiBMaXN0Q29tcG9uZW50XG4gICAqL1xuICByZWZyZXNoaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBBcnJheSB1c2VkIGZvciByZW5kZXJpbmcgc2tlbGV0b24gbG9hZGluZyBwbGFjZWhvbGRlcnMuXG4gICAqIEBzdW1tYXJ5IENvbnRhaW5zIHBsYWNlaG9sZGVyIGl0ZW1zIHRoYXQgYXJlIGRpc3BsYXllZCBkdXJpbmcgZGF0YSBsb2FkaW5nLlxuICAgKiBUaGUgbGVuZ3RoIG9mIHRoaXMgYXJyYXkgZGV0ZXJtaW5lcyBob3cgbWFueSBza2VsZXRvbiBpdGVtcyBhcmUgc2hvd24uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmdbXX1cbiAgICogQGRlZmF1bHQgbmV3IEFycmF5KDIpXG4gICAqIEBtZW1iZXJPZiBMaXN0Q29tcG9uZW50XG4gICAqL1xuICBza2VsZXRvbkRhdGE6IHN0cmluZ1tdID0gbmV3IEFycmF5KDIpO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhlIHByb2Nlc3NlZCBsaXN0IGl0ZW1zIHJlYWR5IGZvciBkaXNwbGF5LlxuICAgKiBAc3VtbWFyeSBTdG9yZXMgdGhlIGN1cnJlbnQgc2V0IG9mIGl0ZW1zIGJlaW5nIGRpc3BsYXllZCBpbiB0aGUgbGlzdCBhZnRlclxuICAgKiBwcm9jZXNzaW5nIGZyb20gdGhlIHJhdyBkYXRhIHNvdXJjZS4gVGhpcyBtYXkgYmUgYSBzdWJzZXQgb2YgdGhlIGZ1bGwgZGF0YVxuICAgKiB3aGVuIHVzaW5nIHBhZ2luYXRpb24gb3IgaW5maW5pdGUgc2Nyb2xsaW5nLlxuICAgKlxuICAgKiBAdHlwZSB7S2V5VmFsdWVbXX1cbiAgICogQG1lbWJlck9mIExpc3RDb21wb25lbnRcbiAgICovXG4gIGl0ZW1zITogS2V5VmFsdWVbXTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFRoZSBjdXJyZW50IHNlYXJjaCBxdWVyeSB2YWx1ZS5cbiAgICogQHN1bW1hcnkgU3RvcmVzIHRoZSB0ZXh0IGVudGVyZWQgaW4gdGhlIHNlYXJjaCBiYXIuIFRoaXMgaXMgdXNlZCB0byBmaWx0ZXJcbiAgICogdGhlIGxpc3QgZGF0YSBvciB0byBzZW5kIGFzIGEgc2VhcmNoIHBhcmFtZXRlciB3aGVuIGZldGNoaW5nIG5ldyBkYXRhLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nIHwgdW5kZWZpbmVkfVxuICAgKiBAbWVtYmVyT2YgTGlzdENvbXBvbmVudFxuICAgKi9cbiAgc2VhcmNoVmFsdWU/OiBzdHJpbmcgfCBJRmlsdGVyUXVlcnkgfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBBIHBhZ2luYXRvciBvYmplY3QgZm9yIGhhbmRsaW5nIHBhZ2luYXRpb24gb3BlcmF0aW9ucy5cbiAgICogQHN1bW1hcnkgUHJvdmlkZXMgYSBwYWdpbmF0b3Igb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmV0cmlldmUgYW5kIG5hdmlnYXRlXG4gICAqIHRocm91Z2ggZGF0YSBpbiBjaHVua3MsIHJlZHVjaW5nIG1lbW9yeSB1c2FnZSBhbmQgaW1wcm92aW5nIHBlcmZvcm1hbmNlLlxuICAgKlxuICAgKiBUaGUgcGFnaW5hdG9yIG9iamVjdCBpcyBpbml0aWFsaXplZCBpbiB0aGUgYG5nT25Jbml0YCBsaWZlY3ljbGUgaG9vayBhbmQgaXNcbiAgICogdXNlZCB0byBmZXRjaCBhbmQgZGlzcGxheSBkYXRhIGluIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudC4gSXQgaXMgYW4gaW5zdGFuY2VcbiAgICogb2YgdGhlIGBQYWdpbmF0b3JgIGNsYXNzIGZyb20gdGhlIGBAZGVjYWYtdHMvY29yZWAgcGFja2FnZSwgd2hpY2ggcHJvdmlkZXNcbiAgICogbWV0aG9kcyBmb3IgcXVlcnlpbmcgYW5kIG1hbmlwdWxhdGluZyBwYWdpbmF0ZWQgZGF0YS5cbiAgICpcbiAgICogQHR5cGUge1BhZ2luYXRvcjxNb2RlbD59XG4gICAqIEBtZW1iZXJPZiBQYWdpbmF0aW9uQ29tcG9uZW50XG4gICAqL1xuICBwYWdpbmF0b3IhOiBQYWdpbmF0b3I8TW9kZWw+IHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhlIGxhc3QgcGFnZSBudW1iZXIgdGhhdCB3YXMgZGlzcGxheWVkLlxuICAgKiBAc3VtbWFyeSBLZWVwcyB0cmFjayBvZiB0aGUgcHJldmlvdXNseSBkaXNwbGF5ZWQgcGFnZSBudW1iZXIsIHdoaWNoIGlzIHVzZWZ1bFxuICAgKiBmb3IgaGFuZGxpbmcgbmF2aWdhdGlvbiBhbmQgc2VhcmNoIG9wZXJhdGlvbnMgaW4gcGFnaW5hdGVkIG1vZGUuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDFcbiAgICogQG1lbWJlck9mIExpc3RDb21wb25lbnRcbiAgICovXG4gIGxhc3RQYWdlOiBudW1iZXIgPSAxXG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBFdmVudCBlbWl0dGVyIGZvciByZWZyZXNoIG9wZXJhdGlvbnMuXG4gICAqIEBzdW1tYXJ5IEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIGxpc3QgZGF0YSBpcyByZWZyZXNoZWQsIGVpdGhlciB0aHJvdWdoIHB1bGwtdG8tcmVmcmVzaFxuICAgKiBvciBwcm9ncmFtbWF0aWMgcmVmcmVzaC4gVGhlIGV2ZW50IGluY2x1ZGVzIHRoZSByZWZyZXNoZWQgZGF0YSBhbmQgY29tcG9uZW50IGluZm9ybWF0aW9uLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPEJhc2VDdXN0b21FdmVudD59XG4gICAqIEBtZW1iZXJPZiBMaXN0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVmcmVzaEV2ZW50OiBFdmVudEVtaXR0ZXI8QmFzZUN1c3RvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8QmFzZUN1c3RvbUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gRXZlbnQgZW1pdHRlciBmb3IgaXRlbSBjbGljayBpbnRlcmFjdGlvbnMuXG4gICAqIEBzdW1tYXJ5IEVtaXRzIGFuIGV2ZW50IHdoZW4gYSBsaXN0IGl0ZW0gaXMgY2xpY2tlZC4gVGhlIGV2ZW50IGluY2x1ZGVzIHRoZSBkYXRhXG4gICAqIG9mIHRoZSBjbGlja2VkIGl0ZW0sIGFsbG93aW5nIHBhcmVudCBjb21wb25lbnRzIHRvIHJlc3BvbmQgdG8gdGhlIGludGVyYWN0aW9uLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPEtleVZhbHVlPn1cbiAgICogQG1lbWJlck9mIExpc3RDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBjbGlja0V2ZW50OiAgRXZlbnRFbWl0dGVyPExpc3RJdGVtQ3VzdG9tRXZlbnR8UmVuZGVyZXJDdXN0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPExpc3RJdGVtQ3VzdG9tRXZlbnR8UmVuZGVyZXJDdXN0b21FdmVudD4oKTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFN1YmplY3QgZm9yIGRlYm91bmNpbmcgY2xpY2sgZXZlbnRzLlxuICAgKiBAc3VtbWFyeSBVc2VzIFJ4SlMgU3ViamVjdCB0byBjb2xsZWN0IGNsaWNrIGV2ZW50cyBhbmQgZW1pdCB0aGVtIGFmdGVyIGEgZGVib3VuY2VcbiAgICogcGVyaW9kLiBUaGlzIHByZXZlbnRzIG11bHRpcGxlIHJhcGlkIGNsaWNrcyBmcm9tIHRyaWdnZXJpbmcgbXVsdGlwbGUgZXZlbnRzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7U3ViamVjdDxDdXN0b21FdmVudCB8IExpc3RJdGVtQ3VzdG9tRXZlbnQgfCBSZW5kZXJlckN1c3RvbUV2ZW50Pn1cbiAgICogQG1lbWJlck9mIExpc3RDb21wb25lbnRcbiAgICovXG4gIHByaXZhdGUgY2xpY2tJdGVtU3ViamVjdDogU3ViamVjdDxDdXN0b21FdmVudCB8IExpc3RJdGVtQ3VzdG9tRXZlbnQgfCBSZW5kZXJlckN1c3RvbUV2ZW50PiA9IG5ldyBTdWJqZWN0PEN1c3RvbUV2ZW50IHwgTGlzdEl0ZW1DdXN0b21FdmVudCB8IFJlbmRlcmVyQ3VzdG9tRXZlbnQ+KCk7XG5cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFN1YmplY3QgZm9yIGRlYm91bmNpbmcgcmVwb3NpdG9yeSBvYnNlcnZhdGlvbiBldmVudHMuXG4gICAqIEBzdW1tYXJ5IFJ4SlMgU3ViamVjdCB0aGF0IGNvbGxlY3RzIHJlcG9zaXRvcnkgY2hhbmdlIGV2ZW50cyBhbmQgZW1pdHMgdGhlbSBhZnRlclxuICAgKiBhIGRlYm91bmNlIHBlcmlvZC4gVGhpcyBwcmV2ZW50cyBtdWx0aXBsZSByYXBpZCByZXBvc2l0b3J5IGNoYW5nZXMgZnJvbSB0cmlnZ2VyaW5nXG4gICAqIG11bHRpcGxlIGxpc3QgcmVmcmVzaCBvcGVyYXRpb25zLCBpbXByb3ZpbmcgcGVyZm9ybWFuY2UgYW5kIHVzZXIgZXhwZXJpZW5jZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge1N1YmplY3Q8YW55Pn1cbiAgICogQG1lbWJlck9mIExpc3RDb21wb25lbnRcbiAgICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIHByaXZhdGUgb2JzZXJ2ZXJTdWJqZXQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIE9ic2VydmVyIG9iamVjdCBmb3IgcmVwb3NpdG9yeSBjaGFuZ2Ugbm90aWZpY2F0aW9ucy5cbiAgICogQHN1bW1hcnkgSW1wbGVtZW50cyB0aGUgT2JzZXJ2ZXIgaW50ZXJmYWNlIHRvIHJlY2VpdmUgbm90aWZpY2F0aW9ucyB3aGVuIHRoZVxuICAgKiB1bmRlcmx5aW5nIGRhdGEgcmVwb3NpdG9yeSBjaGFuZ2VzLiBUaGlzIGVuYWJsZXMgYXV0b21hdGljIGxpc3QgdXBkYXRlcyB3aGVuXG4gICAqIGRhdGEgaXMgY3JlYXRlZCwgdXBkYXRlZCwgb3IgZGVsZXRlZCB0aHJvdWdoIHRoZSByZXBvc2l0b3J5LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7T2JzZXJ2ZXJ9XG4gICAqIEBtZW1iZXJPZiBMaXN0Q29tcG9uZW50XG4gICAqL1xuICBwcml2YXRlIG9ic2VydmVyOiBPYnNlcnZlciA9IHsgcmVmcmVzaDogYXN5bmMgKC4uLiBhcmdzOiB1bmtub3duW10pOiBQcm9taXNlPHZvaWQ+ID0+IHRoaXMub2JzZXJ2ZVJlcG9zaXRvcnkoLi4uYXJncyl9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBMaXN0IG9mIGF2YWlsYWJsZSBpbmRleGVzIGZvciBkYXRhIHF1ZXJ5aW5nIGFuZCBmaWx0ZXJpbmcuXG4gICAqIEBzdW1tYXJ5IFByb3ZpZGVzIGEgbGlzdCBvZiBpbmRleCBuYW1lcyB0aGF0IGNhbiBiZSB1c2VkIHRvIG9wdGltaXplIGRhdGEgcXVlcnlpbmcgYW5kIGZpbHRlcmluZ1xuICAgKiBvcGVyYXRpb25zLCBlc3BlY2lhbGx5IGluIHNjZW5hcmlvcyB3aXRoIGxhcmdlIGRhdGFzZXRzLlxuICAgKlxuICAgKiBJbmRleGVzIGNhbiBzaWduaWZpY2FudGx5IGltcHJvdmUgdGhlIHBlcmZvcm1hbmNlIG9mIGRhdGEgcmV0cmlldmFsIGJ5IGFsbG93aW5nIHRoZSBkYXRhYmFzZVxuICAgKiB0byBxdWlja2x5IGxvY2F0ZSBhbmQgcmV0cmlldmUgcmVsZXZhbnQgZGF0YSBiYXNlZCBvbiBpbmRleGVkIGZpZWxkcy5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ1tdfVxuICAgKiBAZGVmYXVsdCBbXVxuICAgKiBAbWVtYmVyT2YgTGlzdENvbXBvbmVudFxuICAgKi9cbiAgaW5kZXhlcyE6IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gSW5pdGlhbGl6ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIExpc3RDb21wb25lbnQuXG4gICAqIEBzdW1tYXJ5IENyZWF0ZXMgYSBuZXcgTGlzdENvbXBvbmVudCBhbmQgc2V0cyB1cCB0aGUgYmFzZSBjb21wb25lbnQgd2l0aCB0aGUgYXBwcm9wcmlhdGVcbiAgICogY29tcG9uZW50IG5hbWUuIFRoaXMgY29uc3RydWN0b3IgaXMgY2FsbGVkIHdoZW4gQW5ndWxhciBpbnN0YW50aWF0ZXMgdGhlIGNvbXBvbmVudCBhbmRcbiAgICogYmVmb3JlIGFueSBpbnB1dCBwcm9wZXJ0aWVzIGFyZSBzZXQuIEl0IHBhc3NlcyB0aGUgY29tcG9uZW50IG5hbWUgdG8gdGhlIHBhcmVudCBjbGFzc1xuICAgKiBjb25zdHJ1Y3RvciB0byBlbmFibGUgcHJvcGVyIGxvY2FsaXphdGlvbiBhbmQgY29tcG9uZW50IGlkZW50aWZpY2F0aW9uLlxuICAgKlxuICAgKiBUaGUgY29uc3RydWN0b3IgaXMgaW50ZW50aW9uYWxseSBtaW5pbWFsLCB3aXRoIG1vc3QgaW5pdGlhbGl6YXRpb24gbG9naWMgZGVmZXJyZWQgdG9cbiAgICogdGhlIG5nT25Jbml0IGxpZmVjeWNsZSBob29rLiBUaGlzIGZvbGxvd3MgQW5ndWxhciBiZXN0IHByYWN0aWNlcyBieSBrZWVwaW5nIHRoZSBjb25zdHJ1Y3RvclxuICAgKiBmb2N1c2VkIG9uIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGFuZCBiYXNpYyBzZXR1cCwgd2hpbGUgY29tcGxleCBpbml0aWFsaXphdGlvbiB0aGF0IGRlcGVuZHNcbiAgICogb24gaW5wdXQgcHJvcGVydGllcyBpcyBoYW5kbGVkIGluIG5nT25Jbml0LlxuICAgKlxuICAgKiBAbWVtYmVyT2YgTGlzdENvbXBvbmVudFxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJMaXN0Q29tcG9uZW50XCIpO1xuICB9XG5cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEluaXRpYWxpemVzIHRoZSBjb21wb25lbnQgYWZ0ZXIgQW5ndWxhciBzZXRzIHRoZSBpbnB1dCBwcm9wZXJ0aWVzLlxuICAgKiBAc3VtbWFyeSBTZXRzIHVwIHRoZSBjb21wb25lbnQgYnkgaW5pdGlhbGl6aW5nIGV2ZW50IHN1YnNjcmlwdGlvbnMsIHByb2Nlc3NpbmcgYm9vbGVhblxuICAgKiBpbnB1dHMsIGFuZCBsb2FkaW5nIHRoZSBpbml0aWFsIGRhdGEuIFRoaXMgbWV0aG9kIHByZXBhcmVzIHRoZSBjb21wb25lbnQgZm9yIHVzZXJcbiAgICogaW50ZXJhY3Rpb24gYnkgZW5zdXJpbmcgYWxsIHByb3BlcnRpZXMgYXJlIHByb3Blcmx5IGluaXRpYWxpemVkIGFuZCBkYXRhIGlzIGxvYWRlZC5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqXG4gICAqIEBtZXJtYWlkXG4gICAqIHNlcXVlbmNlRGlhZ3JhbVxuICAgKiAgIHBhcnRpY2lwYW50IEEgYXMgQW5ndWxhciBMaWZlY3ljbGVcbiAgICogICBwYXJ0aWNpcGFudCBMIGFzIExpc3RDb21wb25lbnRcbiAgICogICBwYXJ0aWNpcGFudCBEIGFzIERhdGEgU291cmNlXG4gICAqXG4gICAqICAgQS0+Pkw6IG5nT25Jbml0KClcbiAgICogICBMLT4+TDogU2V0IHVwIGNsaWNrIGV2ZW50IGRlYm91bmNpbmdcbiAgICogICBMLT4+TDogUHJvY2VzcyBib29sZWFuIGlucHV0c1xuICAgKiAgIEwtPj5MOiBDb25maWd1cmUgY29tcG9uZW50IGJhc2VkIG9uIGlucHV0c1xuICAgKiAgIEwtPj5MOiByZWZyZXNoKClcbiAgICogICBMLT4+RDogUmVxdWVzdCBpbml0aWFsIGRhdGFcbiAgICogICBELS0+Pkw6IFJldHVybiBkYXRhXG4gICAqICAgTC0+Pkw6IFByb2Nlc3MgYW5kIGRpc3BsYXkgZGF0YVxuICAgKiAgIEwtPj5MOiBDb25maWd1cmUgZW1wdHkgc3RhdGUgaWYgbmVlZGVkXG4gICAqICAgTC0+Pkw6IGluaXRpYWxpemUoKVxuICAgKlxuICAgKiBAbWVtYmVyT2YgTGlzdENvbXBvbmVudFxuICAgKi9cbiAgYXN5bmMgbmdPbkluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5jbGlja0l0ZW1TdWJqZWN0LnBpcGUoZGVib3VuY2VUaW1lKDEwMCkpLnN1YnNjcmliZShldmVudCA9PiB0aGlzLmNsaWNrRXZlbnRFbWl0KGV2ZW50IGFzIExpc3RJdGVtQ3VzdG9tRXZlbnQgfCBSZW5kZXJlckN1c3RvbUV2ZW50KSk7XG4gICAgdGhpcy5vYnNlcnZlclN1YmpldC5waXBlKGRlYm91bmNlVGltZSgxMDApKS5zdWJzY3JpYmUoYXJncyA9PiB0aGlzLmhhbmRsZU9ic2VydmVFdmVudChhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKSk7XG4gICAgdGhpcy5lbmFibGVGaWx0ZXIgPSBzdHJpbmdUb0Jvb2xlYW4odGhpcy5lbmFibGVGaWx0ZXIpO1xuICAgIHRoaXMubGltaXQgPSBOdW1iZXIodGhpcy5saW1pdCk7XG4gICAgdGhpcy5zdGFydCA9IE51bWJlcih0aGlzLnN0YXJ0KTtcbiAgICB0aGlzLmluc2V0ID0gc3RyaW5nVG9Cb29sZWFuKHRoaXMuaW5zZXQpO1xuICAgIHRoaXMuc2hvd1JlZnJlc2hlciA9IHN0cmluZ1RvQm9vbGVhbih0aGlzLnNob3dSZWZyZXNoZXIpO1xuICAgIHRoaXMubG9hZE1vcmVEYXRhID0gc3RyaW5nVG9Cb29sZWFuKHRoaXMubG9hZE1vcmVEYXRhKTtcbiAgICB0aGlzLnNob3dTZWFyY2hiYXIgPSBzdHJpbmdUb0Jvb2xlYW4odGhpcy5zaG93U2VhcmNoYmFyKTtcbiAgICB0aGlzLmRpc2FibGVTb3J0ID0gc3RyaW5nVG9Cb29sZWFuKHRoaXMuZGlzYWJsZVNvcnQpO1xuICAgIGlmKHR5cGVvZiB0aGlzLml0ZW0/LlsndGFnJ10gPT09ICdib29sZWFuJyAmJiB0aGlzLml0ZW0/LlsndGFnJ10gPT09IHRydWUpXG4gICAgICB0aGlzLml0ZW1bJ3RhZyddID0gQ29tcG9uZW50c1RhZ05hbWVzLkxJU1RfSVRFTSBhcyBzdHJpbmc7XG5cbiAgICBhd2FpdCB0aGlzLnJlZnJlc2goKTtcblxuICAgIGlmKHRoaXMub3BlcmF0aW9ucy5pbmNsdWRlcyhPcGVyYXRpb25LZXlzLkNSRUFURSkgJiYgdGhpcy5yb3V0ZSlcbiAgICAgIHRoaXMuZW1wdHkubGluayA9IGAke3RoaXMucm91dGV9LyR7T3BlcmF0aW9uS2V5cy5DUkVBVEV9YDtcblxuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuXG4gICAgaWYodGhpcy5tb2RlbCBpbnN0YW5jZW9mIE1vZGVsICYmIHRoaXMuX3JlcG9zaXRvcnkpXG4gICAgICB0aGlzLl9yZXBvc2l0b3J5Lm9ic2VydmUodGhpcy5vYnNlcnZlcik7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENsZWFucyB1cCByZXNvdXJjZXMgd2hlbiB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZC5cbiAgICogQHN1bW1hcnkgUGVyZm9ybXMgY2xlYW51cCBvcGVyYXRpb25zIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBiZWluZyByZW1vdmVkIGZyb20gdGhlIERPTS5cbiAgICogVGhpcyBpbmNsdWRlcyBjbGVhcmluZyByZWZlcmVuY2VzIHRvIG1vZGVscyBhbmQgZGF0YSB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy5cbiAgICpcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqIEBtZW1iZXJPZiBMaXN0Q29tcG9uZW50XG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZih0aGlzLl9yZXBvc2l0b3J5KVxuICAgICAgdGhpcy5fcmVwb3NpdG9yeS51bk9ic2VydmUodGhpcy5vYnNlcnZlcik7XG4gICAgdGhpcy5kYXRhID0gIHRoaXMubW9kZWwgPSB0aGlzLl9yZXBvc2l0b3J5ID0gdGhpcy5wYWdpbmF0b3IgPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEhhbmRsZXMgcmVwb3NpdG9yeSBvYnNlcnZhdGlvbiBldmVudHMgd2l0aCBkZWJvdW5jaW5nLlxuICAgKiBAc3VtbWFyeSBQcm9jZXNzZXMgcmVwb3NpdG9yeSBjaGFuZ2Ugbm90aWZpY2F0aW9ucyBhbmQgcm91dGVzIHRoZW0gYXBwcm9wcmlhdGVseS5cbiAgICogRm9yIENSRUFURSBldmVudHMgd2l0aCBhIFVJRCwgaGFuZGxlcyB0aGVtIGltbWVkaWF0ZWx5LiBGb3Igb3RoZXIgZXZlbnRzLFxuICAgKiBwYXNzZXMgdGhlbSB0byB0aGUgZGVib3VuY2VkIG9ic2VydmVyIHN1YmplY3QgdG8gcHJldmVudCBleGNlc3NpdmUgdXBkYXRlcy5cbiAgICpcbiAgICogQHBhcmFtIHsuLi51bmtub3duW119IGFyZ3MgLSBUaGUgcmVwb3NpdG9yeSBldmVudCBhcmd1bWVudHMgaW5jbHVkaW5nIHRhYmxlLCBldmVudCB0eXBlLCBhbmQgVUlEXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKiBAbWVtYmVyT2YgTGlzdENvbXBvbmVudFxuICAgKi9cbiAgYXN5bmMgb2JzZXJ2ZVJlcG9zaXRvcnkoLi4uYXJnczogdW5rbm93bltdKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgW3RhYmxlLCBldmVudCwgdWlkXSA9IGFyZ3M7XG4gICAgaWYoZXZlbnQgPT09IE9wZXJhdGlvbktleXMuQ1JFQVRFICYmICEhdWlkKVxuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlT2JzZXJ2ZUV2ZW50KHRhYmxlIGFzIHN0cmluZywgZXZlbnQsIHVpZCBhcyBzdHJpbmcgfCBudW1iZXIpO1xuICAgIHJldHVybiB0aGlzLm9ic2VydmVyU3ViamV0Lm5leHQoYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEhhbmRsZXMgc3BlY2lmaWMgcmVwb3NpdG9yeSBldmVudHMgYW5kIHVwZGF0ZXMgdGhlIGxpc3QgYWNjb3JkaW5nbHkuXG4gICAqIEBzdW1tYXJ5IFByb2Nlc3NlcyByZXBvc2l0b3J5IGNoYW5nZSBldmVudHMgKENSRUFURSwgVVBEQVRFLCBERUxFVEUpIGFuZCBwZXJmb3Jtc1xuICAgKiB0aGUgYXBwcm9wcmlhdGUgbGlzdCBvcGVyYXRpb25zLiBUaGlzIGluY2x1ZGVzIGFkZGluZyBuZXcgaXRlbXMsIHVwZGF0aW5nIGV4aXN0aW5nXG4gICAqIG9uZXMsIG9yIHJlbW92aW5nIGRlbGV0ZWQgaXRlbXMgZnJvbSB0aGUgbGlzdCBkaXNwbGF5LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGFibGUgLSBUaGUgdGFibGUvbW9kZWwgbmFtZSB0aGF0IGNoYW5nZWRcbiAgICogQHBhcmFtIHtPcGVyYXRpb25LZXlzfSBldmVudCAtIFRoZSB0eXBlIG9mIG9wZXJhdGlvbiAoQ1JFQVRFLCBVUERBVEUsIERFTEVURSlcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHVpZCAtIFRoZSB1bmlxdWUgaWRlbnRpZmllciBvZiB0aGUgYWZmZWN0ZWQgaXRlbVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICogQG1lbWJlck9mIExpc3RDb21wb25lbnRcbiAgICovXG4gIGFzeW5jIGhhbmRsZU9ic2VydmVFdmVudCh0YWJsZTogc3RyaW5nLCBldmVudDogT3BlcmF0aW9uS2V5cywgdWlkOiBzdHJpbmcgfCBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZihldmVudCA9PT0gT3BlcmF0aW9uS2V5cy5DUkVBVEUpIHtcbiAgICAgIGlmKHVpZCkge1xuICAgICAgICBhd2FpdCB0aGlzLmhhbmRsZUNyZWF0ZSh1aWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgdGhpcy5yZWZyZXNoKHRydWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZihldmVudCA9PT0gT3BlcmF0aW9uS2V5cy5VUERBVEUpXG4gICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlVXBkYXRlKHVpZCk7XG4gICAgICBpZihldmVudCA9PT0gT3BlcmF0aW9uS2V5cy5ERUxFVEUpXG4gICAgICAgIHRoaXMuaGFuZGxlRGVsZXRlKHVpZCk7XG4gICAgICB0aGlzLnJlZnJlc2hFdmVudEVtaXQoKTtcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gRnVuY3Rpb24gZm9yIHRyYWNraW5nIGl0ZW1zIGluIHRoZSBsaXN0LlxuICAgKiBAc3VtbWFyeSBQcm92aWRlcyBhIHRyYWNraW5nIGZ1bmN0aW9uIGZvciB0aGUgYCpuZ0ZvcmAgZGlyZWN0aXZlIGluIHRoZSBjb21wb25lbnQgdGVtcGxhdGUuXG4gICAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBpZGVudGlmeSBhbmQgY29udHJvbCB0aGUgcmVuZGVyaW5nIG9mIGl0ZW1zIGluIHRoZSBsaXN0LFxuICAgKiBwcmV2ZW50aW5nIGR1cGxpY2F0ZSBvciB1bm5lY2Vzc2FyeSByZW5kZXJpbmcuXG4gICAqXG4gICAqIFRoZSBgdHJhY2tJdGVtRm5gIGZ1bmN0aW9uIHRha2VzIHR3byBwYXJhbWV0ZXJzOiBgaW5kZXhgICh0aGUgaW5kZXggb2YgdGhlIGl0ZW0gaW4gdGhlIGxpc3QpXG4gICAqIGFuZCBgaXRlbWAgKHRoZSBhY3R1YWwgaXRlbSBmcm9tIHRoZSBsaXN0KS4gSXQgcmV0dXJucyB0aGUgdHJhY2tpbmcga2V5LCB3aGljaCBpbiB0aGlzIGNhc2VcbiAgICogaXMgdGhlIHVuaW9uIG9mIHRoZSBgdWlkYCBvZiB0aGUgaXRlbSB3aXRoIHRoZSBtb2RlbCBuYW1lLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gaW4gdGhlIGxpc3QuXG5cbiAgICogQHBhcmFtIHtLZXlWYWx1ZSB8IHN0cmluZyB8IG51bWJlcn0gaXRlbSAtIFRoZSBhY3R1YWwgaXRlbSBmcm9tIHRoZSBsaXN0LlxuICAgKiBAcmV0dXJucyB7c3RyaW5nIHwgbnVtYmVyfSBUaGUgdHJhY2tpbmcga2V5IGZvciB0aGUgaXRlbS5cbiAgICogQG1lbWJlck9mIExpc3RDb21wb25lbnRcbiAgICovXG4gIG92ZXJyaWRlIHRyYWNrSXRlbUZuKGluZGV4OiBudW1iZXIsIGl0ZW06IEtleVZhbHVlIHwgc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gYCR7IChpdGVtIGFzIEtleVZhbHVlKT8uWyd1aWQnXSB8fCAoaXRlbSBhcyBLZXlWYWx1ZSk/Llt0aGlzLnBrXX0tJHtpbmRleH1gO1xuICB9XG5cblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgY3JlYXRlIGV2ZW50IGZyb20gdGhlIHJlcG9zaXRvcnkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSB1aWQgLSBUaGUgSUQgb2YgdGhlIGl0ZW0gdG8gY3JlYXRlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgaXRlbSBpcyBjcmVhdGVkIGFuZCBhZGRlZCB0byB0aGUgbGlzdC5cbiAgICovXG4gIGFzeW5jIGhhbmRsZUNyZWF0ZSh1aWQ6IHN0cmluZyB8IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3JlcG9zaXRvcnk/LnJlYWQodWlkKTtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5tYXBSZXN1bHRzKFtyZXN1bHQgYXMgS2V5VmFsdWVdKVswXTtcbiAgICB0aGlzLml0ZW1zID0gdGhpcy5kYXRhID0gW2l0ZW0sIC4uLnRoaXMuaXRlbXMgfHwgW11dO1xuICB9XG5cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEhhbmRsZXMgdGhlIHVwZGF0ZSBldmVudCBmcm9tIHRoZSByZXBvc2l0b3J5LlxuICAgKiBAc3VtbWFyeSBVcGRhdGVzIHRoZSBsaXN0IGl0ZW0gd2l0aCB0aGUgc3BlY2lmaWVkIElEIGJhc2VkIG9uIHRoZSBuZXcgZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHVpZCAtIFRoZSBJRCBvZiB0aGUgaXRlbSB0byB1cGRhdGVcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJPZiBMaXN0Q29tcG9uZW50XG4gICAqL1xuICBhc3luYyBoYW5kbGVVcGRhdGUodWlkOiBzdHJpbmcgfCBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBpdGVtOiBLZXlWYWx1ZSA9IHRoaXMuaXRlbU1hcHBlcihhd2FpdCB0aGlzLl9yZXBvc2l0b3J5Py5yZWFkKHVpZCkgfHwge30sIHRoaXMubWFwcGVyKTtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICBmb3IoY29uc3Qga2V5IGluIHRoaXMuaXRlbXMgYXMgS2V5VmFsdWVbXSkge1xuICAgICAgICBjb25zdCBjaGlsZCA9IHRoaXMuaXRlbXNba2V5XSBhcyBLZXlWYWx1ZTtcbiAgICAgICAgaWYoY2hpbGRbJ3VpZCddID09PSBpdGVtWyd1aWQnXSkge1xuICAgICAgICAgIHRoaXMuaXRlbXNba2V5XSA9IE9iamVjdC5hc3NpZ24oe30sIGNoaWxkLCBpdGVtKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZGF0YSA9IFsgLi4udGhpcy5pdGVtc107XG4gICAgfSwgMCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYW4gaXRlbSBmcm9tIHRoZSBsaXN0IGJ5IElELlxuICAgKiBAc3VtbWFyeSBGaWx0ZXJzIG91dCBhbiBpdGVtIHdpdGggdGhlIHNwZWNpZmllZCBJRCBmcm9tIHRoZSBkYXRhIGFycmF5IGFuZFxuICAgKiByZWZyZXNoZXMgdGhlIGxpc3QgZGlzcGxheS4gVGhpcyBpcyB0eXBpY2FsbHkgdXNlZCBhZnRlciBhIGRlbGV0ZSBvcGVyYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1aWQgLSBUaGUgSUQgb2YgdGhlIGl0ZW0gdG8gZGVsZXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwayAtIFRoZSBwcmltYXJ5IGtleSBmaWVsZCBuYW1lXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKlxuICAgKiBAbWVtYmVyT2YgTGlzdENvbXBvbmVudFxuICAgKi9cbiAgaGFuZGxlRGVsZXRlKHVpZDogc3RyaW5nIHwgbnVtYmVyLCBwaz86IHN0cmluZyk6IHZvaWQgIHtcbiAgICBpZighcGspXG4gICAgICBwayA9IHRoaXMucGs7XG4gICAgdGhpcy5pdGVtcyA9IHRoaXMuZGF0YT8uZmlsdGVyKChpdGVtOiBLZXlWYWx1ZSkgPT4gaXRlbVsndWlkJ10gIT09IHVpZCkgfHwgW107XG4gIH1cblxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gSGFuZGxlcyBjbGljayBldmVudHMgZnJvbSBsaXN0IGl0ZW1zLlxuICAgKiBAc3VtbWFyeSBMaXN0ZW5zIGZvciBnbG9iYWwgTGlzdEl0ZW1DbGlja0V2ZW50IGV2ZW50cyBhbmQgcGFzc2VzIHRoZW0gdG8gdGhlXG4gICAqIGRlYm91bmNlZCBjbGljayBzdWJqZWN0LiBUaGlzIGFsbG93cyB0aGUgY29tcG9uZW50IHRvIHJlc3BvbmQgdG8gY2xpY2tzIG9uXG4gICAqIGxpc3QgaXRlbXMgcmVnYXJkbGVzcyBvZiB3aGVyZSB0aGV5IG9yaWdpbmF0ZSBmcm9tLlxuICAgKlxuICAgKiBAcGFyYW0ge0xpc3RJdGVtQ3VzdG9tRXZlbnQgfCBSZW5kZXJlckN1c3RvbUV2ZW50fSBldmVudCAtIFRoZSBjbGljayBldmVudFxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICpcbiAgICogQG1lbWJlck9mIExpc3RDb21wb25lbnRcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpMaXN0SXRlbUNsaWNrRXZlbnQnLCBbJyRldmVudCddKVxuICBoYW5kbGVDbGljayhldmVudDogTGlzdEl0ZW1DdXN0b21FdmVudCB8IFJlbmRlcmVyQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmNsaWNrSXRlbVN1YmplY3QubmV4dChldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEhhbmRsZXMgc2VhcmNoIGV2ZW50cyBmcm9tIHRoZSBzZWFyY2ggYmFyLlxuICAgKiBAc3VtbWFyeSBQcm9jZXNzZXMgc2VhcmNoIHF1ZXJpZXMgZnJvbSB0aGUgc2VhcmNoIGJhciBjb21wb25lbnQsIHVwZGF0aW5nIHRoZVxuICAgKiBkaXNwbGF5ZWQgZGF0YSBiYXNlZCBvbiB0aGUgc2VhcmNoIHRlcm0uIFRoZSBiZWhhdmlvciBkaWZmZXJzIGJldHdlZW4gaW5maW5pdGVcbiAgICogYW5kIHBhZ2luYXRlZCBtb2RlcyB0byBwcm92aWRlIHRoZSBiZXN0IHVzZXIgZXhwZXJpZW5jZSBmb3IgZWFjaCBtb2RlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZyB8IHVuZGVmaW5lZH0gdmFsdWUgLSBUaGUgc2VhcmNoIHRlcm0gb3IgdW5kZWZpbmVkIHRvIGNsZWFyIHNlYXJjaFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICpcbiAgICogQG1lcm1haWRcbiAgICogZmxvd2NoYXJ0IFREXG4gICAqICAgQVtTZWFyY2ggRXZlbnRdIC0tPiBCe1R5cGUgaXMgSW5maW5pdGU/fVxuICAgKiAgIEIgLS0+fFllc3wgQ1tEaXNhYmxlIGxvYWRNb3JlRGF0YV1cbiAgICogICBCIC0tPnxOb3wgRFtFbmFibGUgbG9hZE1vcmVEYXRhXVxuICAgKiAgIEMgLS0+IEV7U2VhcmNoIHZhbHVlIHVuZGVmaW5lZD99XG4gICAqICAgRSAtLT58WWVzfCBGW0VuYWJsZSBsb2FkTW9yZURhdGFdXG4gICAqICAgRSAtLT58Tm98IEdbU3RvcmUgc2VhcmNoIHZhbHVlXVxuICAgKiAgIEQgLS0+IEdcbiAgICogICBGIC0tPiBIW1Jlc2V0IHBhZ2UgdG8gMV1cbiAgICogICBHIC0tPiBJW1JlZnJlc2ggZGF0YV1cbiAgICogICBIIC0tPiBJXG4gICAqXG4gICAqIEBtZW1iZXJPZiBMaXN0Q29tcG9uZW50XG4gICAqL1xuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6c2VhcmNoYmFyRXZlbnQnLCBbJyRldmVudCddKVxuICBhc3luYyBoYW5kbGVTZWFyY2godmFsdWU6IHN0cmluZyB8IElGaWx0ZXJRdWVyeSB8IHVuZGVmaW5lZCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmKHRoaXMudHlwZSA9PT0gTGlzdENvbXBvbmVudHNUeXBlcy5JTkZJTklURSkge1xuICAgICAgdGhpcy5sb2FkTW9yZURhdGEgPSBmYWxzZTtcbiAgICAgIGlmKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5sb2FkTW9yZURhdGEgPSB0cnVlO1xuICAgICAgICB0aGlzLnBhZ2UgPSAxO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHZhbHVlO1xuICAgICAgYXdhaXQgdGhpcy5yZWZyZXNoKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvYWRNb3JlRGF0YSA9IHRydWU7XG4gICAgICB0aGlzLnNlYXJjaFZhbHVlID0gdmFsdWU7XG4gICAgICBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLmxhc3RQYWdlO1xuICAgICAgYXdhaXQgdGhpcy5yZWZyZXNoKHRydWUpO1xuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBIYW5kbGVzIGZpbHRlciBldmVudHMgZnJvbSB0aGUgZmlsdGVyIGNvbXBvbmVudC5cbiAgICogQHN1bW1hcnkgUHJvY2Vzc2VzIGZpbHRlciBxdWVyaWVzIGZyb20gdGhlIGZpbHRlciBjb21wb25lbnQgYW5kIGFwcGxpZXMgdGhlbVxuICAgKiB0byB0aGUgbGlzdCBkYXRhLiBUaGlzIG1ldGhvZCBhY3RzIGFzIGEgYnJpZGdlIGJldHdlZW4gdGhlIGZpbHRlciBjb21wb25lbnRcbiAgICogYW5kIHRoZSBzZWFyY2ggZnVuY3Rpb25hbGl0eSwgY29udmVydGluZyBmaWx0ZXIgcXVlcmllcyBpbnRvIHNlYXJjaCBvcGVyYXRpb25zLlxuICAgKlxuICAgKiBAcGFyYW0ge0lGaWx0ZXJRdWVyeSB8IHVuZGVmaW5lZH0gdmFsdWUgLSBUaGUgZmlsdGVyIHF1ZXJ5IG9iamVjdCBvciB1bmRlZmluZWQgdG8gY2xlYXIgZmlsdGVyc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICogQG1lbWJlck9mIExpc3RDb21wb25lbnRcbiAgICovXG4gIGFzeW5jIGhhbmRsZUZpbHRlcih2YWx1ZTogSUZpbHRlclF1ZXJ5IHwgdW5kZWZpbmVkKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5oYW5kbGVTZWFyY2godmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIGN1cnJlbnQgc2VhcmNoIGFuZCByZXNldHMgdGhlIGxpc3QuXG4gICAqIEBzdW1tYXJ5IENvbnZlbmllbmNlIG1ldGhvZCB0aGF0IGNsZWFycyB0aGUgc2VhcmNoIGJ5IGNhbGxpbmcgaGFuZGxlU2VhcmNoXG4gICAqIHdpdGggdW5kZWZpbmVkLiBUaGlzIHJlc2V0cyB0aGUgbGlzdCB0byBzaG93IGFsbCBkYXRhIHdpdGhvdXQgZmlsdGVyaW5nLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICogQG1lbWJlck9mIExpc3RDb21wb25lbnRcbiAgICovXG4gIGFzeW5jIGNsZWFyU2VhcmNoKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMuaGFuZGxlU2VhcmNoKHVuZGVmaW5lZCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEVtaXRzIGEgcmVmcmVzaCBldmVudCB3aXRoIHRoZSBjdXJyZW50IGRhdGEuXG4gICAqIEBzdW1tYXJ5IENyZWF0ZXMgYW5kIGVtaXRzIGEgcmVmcmVzaCBldmVudCBjb250YWluaW5nIHRoZSBjdXJyZW50IGxpc3QgZGF0YS5cbiAgICogVGhpcyBub3RpZmllcyBwYXJlbnQgY29tcG9uZW50cyB0aGF0IHRoZSBsaXN0IGRhdGEgaGFzIGJlZW4gcmVmcmVzaGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge0tleVZhbHVlW119IFtkYXRhXSAtIE9wdGlvbmFsIGRhdGEgdG8gaW5jbHVkZSBpbiB0aGUgZXZlbnRcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqXG4gICAqIEBtZW1iZXJPZiBMaXN0Q29tcG9uZW50XG4gICAqL1xuICByZWZyZXNoRXZlbnRFbWl0KGRhdGE/OiBLZXlWYWx1ZVtdKTogdm9pZCB7XG4gICAgaWYoIWRhdGEpXG4gICAgICBkYXRhID0gdGhpcy5pdGVtcztcbiAgICB0aGlzLnNrZWxldG9uRGF0YSA9IG5ldyBBcnJheShkYXRhPy5sZW5ndGggfHwgMik7XG4gICAgdGhpcy5yZWZyZXNoRXZlbnQuZW1pdCh7XG4gICAgICBuYW1lOiBFdmVudENvbnN0YW50cy5SRUZSRVNILFxuICAgICAgZGF0YTogZGF0YSB8fCBbXSxcbiAgICAgIGNvbXBvbmVudDogdGhpcy5jb21wb25lbnROYW1lXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEVtaXRzIGEgY2xpY2sgZXZlbnQgZm9yIGEgbGlzdCBpdGVtLlxuICAgKiBAc3VtbWFyeSBQcm9jZXNzZXMgYW5kIGVtaXRzIGEgY2xpY2sgZXZlbnQgd2hlbiBhIGxpc3QgaXRlbSBpcyBjbGlja2VkLlxuICAgKiBUaGlzIGV4dHJhY3RzIHRoZSByZWxldmFudCBkYXRhIGZyb20gdGhlIGV2ZW50IGFuZCBwYXNzZXMgaXQgdG8gcGFyZW50IGNvbXBvbmVudHMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7TGlzdEl0ZW1DdXN0b21FdmVudCB8IFJlbmRlcmVyQ3VzdG9tRXZlbnR9IGV2ZW50IC0gVGhlIGNsaWNrIGV2ZW50XG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKlxuICAgKiBAbWVtYmVyT2YgTGlzdENvbXBvbmVudFxuICAgKi9cbiAgcHJpdmF0ZSBjbGlja0V2ZW50RW1pdChldmVudDogTGlzdEl0ZW1DdXN0b21FdmVudCB8IFJlbmRlcmVyQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmNsaWNrRXZlbnQuZW1pdChldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFJlZnJlc2hlcyB0aGUgbGlzdCBkYXRhIGZyb20gdGhlIGNvbmZpZ3VyZWQgc291cmNlLlxuICAgKiBAc3VtbWFyeSBUaGlzIG1ldGhvZCBoYW5kbGVzIGJvdGggaW5pdGlhbCBkYXRhIGxvYWRpbmcgYW5kIHN1YnNlcXVlbnQgcmVmcmVzaCBvcGVyYXRpb25zLFxuICAgKiBpbmNsdWRpbmcgcHVsbC10by1yZWZyZXNoIGFuZCBpbmZpbml0ZSBzY3JvbGxpbmcuIEl0IG1hbmFnZXMgdGhlIGRhdGEgZmV0Y2hpbmcgcHJvY2VzcyxcbiAgICogdXBkYXRlcyB0aGUgY29tcG9uZW50J3Mgc3RhdGUsIGFuZCBoYW5kbGVzIHBhZ2luYXRpb24gb3IgaW5maW5pdGUgc2Nyb2xsaW5nIGxvZ2ljIGJhc2VkXG4gICAqIG9uIHRoZSBjb21wb25lbnQncyBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBUaGUgbWV0aG9kIHBlcmZvcm1zIHRoZSBmb2xsb3dpbmcgc3RlcHM6XG4gICAqIDEuIFNldHMgdGhlIHJlZnJlc2hpbmcgZmxhZyB0byBpbmRpY2F0ZSBhIGRhdGEgZmV0Y2ggaXMgaW4gcHJvZ3Jlc3NcbiAgICogMi4gQ2FsY3VsYXRlcyB0aGUgYXBwcm9wcmlhdGUgc3RhcnQgYW5kIGxpbWl0IHZhbHVlcyBiYXNlZCBvbiBwYWdpbmF0aW9uIHNldHRpbmdzXG4gICAqIDMuIEZldGNoZXMgZGF0YSBmcm9tIHRoZSBhcHByb3ByaWF0ZSBzb3VyY2UgKG1vZGVsIG9yIHJlcXVlc3QpXG4gICAqIDQuIFVwZGF0ZXMgdGhlIGNvbXBvbmVudCdzIGRhdGEgYW5kIGVtaXRzIGEgcmVmcmVzaCBldmVudFxuICAgKiA1LiBIYW5kbGVzIHBhZ2luYXRpb24gb3IgaW5maW5pdGUgc2Nyb2xsaW5nIHN0YXRlIHVwZGF0ZXNcbiAgICogNi4gQ29tcGxldGVzIGFueSBwcm92aWRlZCBldmVudCAobGlrZSBJbmZpbml0ZVNjcm9sbEN1c3RvbUV2ZW50KVxuICAgKlxuICAgKiBAcGFyYW0ge0luZmluaXRlU2Nyb2xsQ3VzdG9tRXZlbnQgfCBSZWZyZXNoZXJDdXN0b21FdmVudCB8IGJvb2xlYW59IGV2ZW50IC0gVGhlIGV2ZW50IHRoYXQgdHJpZ2dlcmVkIHRoZSByZWZyZXNoLFxuICAgKiBvciBhIGJvb2xlYW4gZmxhZyBpbmRpY2F0aW5nIGlmIHRoaXMgaXMgYSBmb3JjZWQgcmVmcmVzaFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgcmVmcmVzaCBvcGVyYXRpb24gaXMgY29tcGxldGVcbiAgICpcbiAgICogQG1lcm1haWRcbiAgICogc2VxdWVuY2VEaWFncmFtXG4gICAqICAgcGFydGljaXBhbnQgTCBhcyBMaXN0Q29tcG9uZW50XG4gICAqICAgcGFydGljaXBhbnQgRCBhcyBEYXRhIFNvdXJjZVxuICAgKiAgIHBhcnRpY2lwYW50IEUgYXMgRXZlbnQgU3lzdGVtXG4gICAqXG4gICAqICAgTC0+Pkw6IHJlZnJlc2goZXZlbnQpXG4gICAqICAgTC0+Pkw6IFNldCByZWZyZXNoaW5nIGZsYWdcbiAgICogICBMLT4+TDogQ2FsY3VsYXRlIHN0YXJ0IGFuZCBsaW1pdFxuICAgKiAgIGFsdCBVc2luZyBtb2RlbFxuICAgKiAgICAgTC0+PkQ6IGdldEZyb21Nb2RlbChmb3JjZSwgc3RhcnQsIGxpbWl0KVxuICAgKiAgICAgRC0tPj5MOiBSZXR1cm4gZGF0YVxuICAgKiAgIGVsc2UgVXNpbmcgcmVxdWVzdFxuICAgKiAgICAgTC0+PkQ6IGdldEZyb21SZXF1ZXN0KGZvcmNlLCBzdGFydCwgbGltaXQpXG4gICAqICAgICBELS0+Pkw6IFJldHVybiBkYXRhXG4gICAqICAgZW5kXG4gICAqICAgTC0+PkU6IHJlZnJlc2hFdmVudEVtaXQoKVxuICAgKiAgIGFsdCBJbmZpbml0ZSBzY3JvbGxpbmcgbW9kZVxuICAgKiAgICAgTC0+Pkw6IENoZWNrIGlmIHJlYWNoZWQgbGFzdCBwYWdlXG4gICAqICAgICBhbHQgTGFzdCBwYWdlIHJlYWNoZWRcbiAgICogICAgICAgTC0+Pkw6IENvbXBsZXRlIHNjcm9sbCBldmVudFxuICAgKiAgICAgICBMLT4+TDogRGlzYWJsZSBsb2FkTW9yZURhdGFcbiAgICogICAgIGVsc2UgTW9yZSBwYWdlcyBhdmFpbGFibGVcbiAgICogICAgICAgTC0+Pkw6IEluY3JlbWVudCBwYWdlIG51bWJlclxuICAgKiAgICAgICBMLT4+TDogQ29tcGxldGUgc2Nyb2xsIGV2ZW50IGFmdGVyIGRlbGF5XG4gICAqICAgICBlbmRcbiAgICogICBlbHNlIFBhZ2luYXRlZCBtb2RlXG4gICAqICAgICBMLT4+TDogQ2xlYXIgcmVmcmVzaGluZyBmbGFnIGFmdGVyIGRlbGF5XG4gICAqICAgZW5kXG4gICAqXG4gICAqIEBtZW1iZXJPZiBMaXN0Q29tcG9uZW50XG4gICAqL1xuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6QmFja0J1dHRvbk5hdmlnYXRpb25FbmRFdmVudCcsIFsnJGV2ZW50J10pXG4gIGFzeW5jIHJlZnJlc2goZXZlbnQ6IEluZmluaXRlU2Nyb2xsQ3VzdG9tRXZlbnQgfCBSZWZyZXNoZXJDdXN0b21FdmVudCB8IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vICBpZih0eXBlb2YgZm9yY2UgIT09ICdib29sZWFuJyAmJiBmb3JjZS50eXBlID09PSBFdmVudENvbnN0YW50cy5CQUNLX0JVVFRPTl9OQVZJR0FUSU9OKSB7XG4gICAgLy8gICAgY29uc3Qge3JlZnJlc2h9ID0gKGZvcmNlIGFzIEN1c3RvbUV2ZW50KS5kZXRhaWw7XG4gICAgLy8gICAgaWYoIXJlZnJlc2gpXG4gICAgLy8gICAgICByZXR1cm4gZmFsc2U7XG4gICAgLy8gIH1cblxuICAgIHRoaXMucmVmcmVzaGluZyA9IHRydWU7XG4gICAgY29uc3Qgc3RhcnQ6IG51bWJlciA9IHRoaXMucGFnZSA+IDEgPyAodGhpcy5wYWdlIC0gMSkgKiB0aGlzLmxpbWl0IDogdGhpcy5zdGFydDtcbiAgICBjb25zdCBsaW1pdDogbnVtYmVyID0gKHRoaXMucGFnZSAqICh0aGlzLmxpbWl0ID4gMTIgPyAxMiA6IHRoaXMubGltaXQpKTtcblxuICAgIHRoaXMuZGF0YSA9ICF0aGlzLm1vZGVsID9cbiAgICAgIGF3YWl0IHRoaXMuZ2V0RnJvbVJlcXVlc3QoISFldmVudCwgc3RhcnQsIGxpbWl0KVxuICAgICAgOiBhd2FpdCB0aGlzLmdldEZyb21Nb2RlbCghIWV2ZW50KSBhcyBLZXlWYWx1ZVtdO1xuXG4gICAgdGhpcy5yZWZyZXNoRXZlbnRFbWl0KCk7XG5cbiAgICBpZih0aGlzLnR5cGUgPT09IExpc3RDb21wb25lbnRzVHlwZXMuSU5GSU5JVEUpIHtcbiAgICAgIGlmKHRoaXMucGFnZSA9PT0gdGhpcy5wYWdlcykge1xuICAgICAgICBpZigoZXZlbnQgYXMgSW5maW5pdGVTY3JvbGxDdXN0b21FdmVudCk/LnRhcmdldClcbiAgICAgICAgICAoZXZlbnQgYXMgSW5maW5pdGVTY3JvbGxDdXN0b21FdmVudCkudGFyZ2V0LmNvbXBsZXRlKCk7XG4gICAgICAgIHRoaXMubG9hZE1vcmVEYXRhID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhZ2UgKz0gMTtcbiAgICAgICAgdGhpcy5yZWZyZXNoaW5nID0gZmFsc2U7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYoKGV2ZW50IGFzIEluZmluaXRlU2Nyb2xsQ3VzdG9tRXZlbnQpPy50YXJnZXQgJiYgKGV2ZW50IGFzIEN1c3RvbUV2ZW50KT8udHlwZSAhPT0gRXZlbnRDb25zdGFudHMuQkFDS19CVVRUT05fTkFWSUdBVElPTilcbiAgICAgICAgICAgICAgKGV2ZW50IGFzIEluZmluaXRlU2Nyb2xsQ3VzdG9tRXZlbnQpLnRhcmdldC5jb21wbGV0ZSgpO1xuICAgICAgICB9LCAyMDApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5yZWZyZXNoaW5nID0gZmFsc2U7XG4gICAgICB9LCAyMDApXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gKiBAZGVzY3JpcHRpb24gSGFuZGxlcyBwYWdpbmF0aW9uIGV2ZW50cyBmcm9tIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudC5cbiAqIEBzdW1tYXJ5IFByb2Nlc3NlcyBwYWdpbmF0aW9uIGV2ZW50cyBieSB1cGRhdGluZyB0aGUgY3VycmVudCBwYWdlIG51bWJlciBhbmRcbiAqIHJlZnJlc2hpbmcgdGhlIGxpc3QgZGF0YSB0byBkaXNwbGF5IHRoZSBzZWxlY3RlZCBwYWdlLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWRcbiAqIHdoZW4gYSB1c2VyIGludGVyYWN0cyB3aXRoIHRoZSBwYWdpbmF0aW9uIGNvbnRyb2xzIHRvIG5hdmlnYXRlIGJldHdlZW4gcGFnZXMuXG4gKlxuICogQHBhcmFtIHtQYWdpbmF0aW9uQ3VzdG9tRXZlbnR9IGV2ZW50IC0gVGhlIHBhZ2luYXRpb24gZXZlbnQgY29udGFpbmluZyBwYWdlIGluZm9ybWF0aW9uXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqXG4gKiBAbWVtYmVyT2YgTGlzdENvbXBvbmVudFxuICovXG5oYW5kbGVQYWdpbmF0ZShldmVudDogUGFnaW5hdGlvbkN1c3RvbUV2ZW50KTogdm9pZCB7XG4gIGNvbnN0IHsgcGFnZX0gPSBldmVudC5kYXRhO1xuICB0aGlzLnBhZ2UgPSBwYWdlO1xuICB0aGlzLnJlZnJlc2godHJ1ZSk7XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEhhbmRsZXMgcHVsbC10by1yZWZyZXNoIGV2ZW50cyBmcm9tIHRoZSByZWZyZXNoZXIgY29tcG9uZW50LlxuICogQHN1bW1hcnkgUHJvY2Vzc2VzIHJlZnJlc2ggZXZlbnRzIHRyaWdnZXJlZCBieSB0aGUgdXNlciBwdWxsaW5nIGRvd24gb24gdGhlIGxpc3RcbiAqIG9yIGJ5IHByb2dyYW1tYXRpYyByZWZyZXNoIHJlcXVlc3RzLiBUaGlzIG1ldGhvZCByZWZyZXNoZXMgdGhlIGxpc3QgZGF0YSBhbmRcbiAqIGNvbXBsZXRlcyB0aGUgcmVmcmVzaGVyIGFuaW1hdGlvbiB3aGVuIHRoZSBkYXRhIGlzIGxvYWRlZC5cbiAqXG4gKiBAcGFyYW0ge0luZmluaXRlU2Nyb2xsQ3VzdG9tRXZlbnQgfCBDdXN0b21FdmVudH0gW2V2ZW50XSAtIFRoZSByZWZyZXNoIGV2ZW50XG4gKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgcmVmcmVzaCBvcGVyYXRpb24gaXMgY29tcGxldGVcbiAqXG4gKiBAbWVtYmVyT2YgTGlzdENvbXBvbmVudFxuICovXG5hc3luYyBoYW5kbGVSZWZyZXNoKGV2ZW50PzogSW5maW5pdGVTY3JvbGxDdXN0b21FdmVudCB8IEN1c3RvbUV2ZW50KTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IHRoaXMucmVmcmVzaChldmVudCBhcyBJbmZpbml0ZVNjcm9sbEN1c3RvbUV2ZW50IHx8IHRydWUpO1xuICBpZihldmVudCBpbnN0YW5jZW9mIEN1c3RvbUV2ZW50KVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gQW55IGNhbGxzIHRvIGxvYWQgZGF0YSBnbyBoZXJlXG4gICAgICAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJb25SZWZyZXNoZXJFbGVtZW50KS5jb21wbGV0ZSgpO1xuICAgIH0sIDQwMCk7XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEZpbHRlcnMgZGF0YSBiYXNlZCBvbiBhIHNlYXJjaCBzdHJpbmcuXG4gKiBAc3VtbWFyeSBQcm9jZXNzZXMgdGhlIGN1cnJlbnQgZGF0YSBhcnJheSB0byBmaW5kIGl0ZW1zIHRoYXQgbWF0Y2ggdGhlIHByb3ZpZGVkXG4gKiBzZWFyY2ggc3RyaW5nLiBUaGlzIHVzZXMgdGhlIGFycmF5UXVlcnlCeVN0cmluZyB1dGlsaXR5IHRvIHBlcmZvcm0gdGhlIGZpbHRlcmluZ1xuICogYWNyb3NzIGFsbCBwcm9wZXJ0aWVzIG9mIHRoZSBpdGVtcy5cbiAqXG4gKiBAcGFyYW0ge0tleVZhbHVlW119IHJlc3VsdHMgLSBUaGUgYXJyYXkgb2YgaXRlbXMgdG8gc2VhcmNoIHRocm91Z2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWFyY2ggLSBUaGUgc2VhcmNoIHN0cmluZyB0byBmaWx0ZXIgYnlcbiAqIEByZXR1cm5zIHtLZXlWYWx1ZVtdfSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgZmlsdGVyZWQgYXJyYXkgb2YgaXRlbXNcbiAqXG4gKiBAbWVtYmVyT2YgTGlzdENvbXBvbmVudFxuICovXG4gIHBhcnNlU2VhcmNoUmVzdWx0cyhyZXN1bHRzOiBLZXlWYWx1ZVtdLCBzZWFyY2g6IHN0cmluZyk6IEtleVZhbHVlW10ge1xuICAgIHJldHVybiByZXN1bHRzLmZpbHRlcigoaXRlbTogS2V5VmFsdWUpID0+XG4gICAgICBPYmplY3QudmFsdWVzKGl0ZW0pLnNvbWUodmFsdWUgPT5cbiAgICAgICAgICB2YWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoKHNlYXJjaCBhcyBzdHJpbmcpPy50b0xvd2VyQ2FzZSgpKVxuICAgICAgICApXG4gICAgKTtcbiAgfVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBGZXRjaGVzIGRhdGEgZnJvbSBhIHJlcXVlc3Qgc291cmNlLlxuICogQHN1bW1hcnkgUmV0cmlldmVzIGRhdGEgZnJvbSB0aGUgY29uZmlndXJlZCBzb3VyY2UgZnVuY3Rpb24gb3IgVVJMLCBwcm9jZXNzZXMgaXQsXG4gKiBhbmQgdXBkYXRlcyB0aGUgY29tcG9uZW50J3MgZGF0YSBzdGF0ZS4gVGhpcyBtZXRob2QgaGFuZGxlcyBib3RoIGluaXRpYWwgZGF0YSBsb2FkaW5nXG4gKiBhbmQgc3Vic2VxdWVudCByZWZyZXNoIG9wZXJhdGlvbnMgd2hlbiB1c2luZyBhbiBleHRlcm5hbCBkYXRhIHNvdXJjZSByYXRoZXIgdGhhbiBhIG1vZGVsLlxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZm9yY2UgLSBXaGV0aGVyIHRvIGZvcmNlIGEgcmVmcmVzaCBldmVuIGlmIGRhdGEgYWxyZWFkeSBleGlzdHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCAtIFRoZSBzdGFydGluZyBpbmRleCBmb3IgcGFnaW5hdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IGxpbWl0IC0gVGhlIG1heGltdW0gbnVtYmVyIG9mIGl0ZW1zIHRvIHJldHJpZXZlXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxLZXlWYWx1ZVtdPn0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIGZldGNoZWQgZGF0YVxuICpcbiAqIEBtZW1iZXJPZiBMaXN0Q29tcG9uZW50XG4gKi9cbmFzeW5jIGdldEZyb21SZXF1ZXN0KGZvcmNlOiBib29sZWFuID0gZmFsc2UsIHN0YXJ0OiBudW1iZXIsIGxpbWl0OiBudW1iZXIpOiBQcm9taXNlPEtleVZhbHVlW10+IHtcbiAgbGV0IHJlcXVlc3Q6IEtleVZhbHVlW10gPSBbXTtcbiAgaWYoIXRoaXMuZGF0YT8ubGVuZ3RoIHx8IGZvcmNlIHx8ICh0aGlzLnNlYXJjaFZhbHVlIGFzIHN0cmluZyk/Lmxlbmd0aCB8fCAhISh0aGlzLnNlYXJjaFZhbHVlIGFzIElGaWx0ZXJRdWVyeSkpIHtcbiAgICAvLyAoc2VsZi5kYXRhIGFzIExpc3RJdGVtW10pID0gW107XG4gICAgaWYoISh0aGlzLnNlYXJjaFZhbHVlIGFzIHN0cmluZyk/Lmxlbmd0aCAmJiAhKHRoaXMuc2VhcmNoVmFsdWUgYXMgSUZpbHRlclF1ZXJ5KSkge1xuICAgICAgaWYoIXRoaXMuc291cmNlICYmICF0aGlzLmRhdGE/Lmxlbmd0aCkge1xuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKCdObyBkYXRhIGFuZCBzb3VyY2UgcGFzc2VkIHRvIGluZmluaXRlIGxpc3QnKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLnNvdXJjZSBpbnN0YW5jZW9mIEZ1bmN0aW9uKVxuICAgICAgICByZXF1ZXN0ID0gYXdhaXQgdGhpcy5zb3VyY2UoKTtcblxuICAgICAgaWYoIUFycmF5LmlzQXJyYXkocmVxdWVzdCkpXG4gICAgICAgIHJlcXVlc3QgPSByZXF1ZXN0Py5bJ3Jlc3BvbnNlJ10/LlsnZGF0YSddIHx8IHJlcXVlc3Q/LlsncmVzdWx0cyddIHx8IFtdO1xuICAgICAgdGhpcy5kYXRhID0gWy4uLiBhd2FpdCB0aGlzLnBhcnNlUmVzdWx0KHJlcXVlc3QpXTtcbiAgICAgIGlmKHRoaXMuZGF0YT8ubGVuZ3RoKVxuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy50eXBlID09PSBMaXN0Q29tcG9uZW50c1R5cGVzLklORklOSVRFID9cbiAgICAgICAgICAodGhpcy5pdGVtcyB8fCBbXSkuY29uY2F0KFsuLi50aGlzLmRhdGEuc2xpY2Uoc3RhcnQsIGxpbWl0KV0pIDogWy4uLnJlcXVlc3Quc2xpY2Uoc3RhcnQsIGxpbWl0KSBhcyBLZXlWYWx1ZVtdXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhID0gdGhpcy5wYXJzZVNlYXJjaFJlc3VsdHModGhpcy5kYXRhIGFzIFtdLCB0aGlzLnNlYXJjaFZhbHVlIGFzIHN0cmluZyk7XG4gICAgICB0aGlzLml0ZW1zID0gdGhpcy5kYXRhO1xuICAgIH1cbiAgfVxuXG4gIGlmKHRoaXMubG9hZE1vcmVEYXRhICYmIHRoaXMudHlwZSA9PT0gTGlzdENvbXBvbmVudHNUeXBlcy5QQUdJTkFURUQpXG4gICAgdGhpcy5nZXRNb3JlRGF0YSh0aGlzLmRhdGE/Lmxlbmd0aCB8fCAwKTtcbiAgcmV0dXJuIHRoaXMuZGF0YSB8fCBbXSBhcyBLZXlWYWx1ZVtdO1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBGZXRjaGVzIGRhdGEgZnJvbSBhIG1vZGVsIHNvdXJjZS5cbiAqIEBzdW1tYXJ5IFJldHJpZXZlcyBkYXRhIGZyb20gdGhlIGNvbmZpZ3VyZWQgbW9kZWwgdXNpbmcgaXRzIHBhZ2luYXRpb24gb3IgZmluZCBtZXRob2RzLFxuICogcHJvY2Vzc2VzIGl0LCBhbmQgdXBkYXRlcyB0aGUgY29tcG9uZW50J3MgZGF0YSBzdGF0ZS4gVGhpcyBtZXRob2QgaGFuZGxlcyBib3RoIGluaXRpYWxcbiAqIGRhdGEgbG9hZGluZyBhbmQgc3Vic2VxdWVudCByZWZyZXNoIG9wZXJhdGlvbnMgd2hlbiB1c2luZyBhIG1vZGVsIGFzIHRoZSBkYXRhIHNvdXJjZS5cbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGZvcmNlIC0gV2hldGhlciB0byBmb3JjZSBhIHJlZnJlc2ggZXZlbiBpZiBkYXRhIGFscmVhZHkgZXhpc3RzXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgLSBUaGUgc3RhcnRpbmcgaW5kZXggZm9yIHBhZ2luYXRpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBsaW1pdCAtIFRoZSBtYXhpbXVtIG51bWJlciBvZiBpdGVtcyB0byByZXRyaWV2ZVxuICogQHJldHVybnMge1Byb21pc2U8S2V5VmFsdWVbXT59IEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBmZXRjaGVkIGRhdGFcbiAqXG4gKiBAbWVtYmVyT2YgTGlzdENvbXBvbmVudFxuICovXG5hc3luYyBnZXRGcm9tTW9kZWwoZm9yY2U6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8S2V5VmFsdWVbXT4ge1xuICBsZXQgZGF0YSA9IFsgLi4uIHRoaXMuZGF0YSB8fCBbXV07XG4gIGxldCByZXF1ZXN0OiBLZXlWYWx1ZVtdID0gW107XG5cbiAgLy8gZ2V0dGluZyBtb2RlbCByZXBvc2l0b3J5XG4gIGlmKCF0aGlzLl9yZXBvc2l0b3J5KVxuICAgIHRoaXMuX3JlcG9zaXRvcnkgPSB0aGlzLnJlcG9zaXRvcnk7XG4gIGNvbnN0IHJlcG8gPSB0aGlzLl9yZXBvc2l0b3J5IGFzIERlY2FmUmVwb3NpdG9yeTxNb2RlbD47XG4gIGlmKCF0aGlzLmRhdGE/Lmxlbmd0aCB8fCBmb3JjZSB8fCAodGhpcy5zZWFyY2hWYWx1ZSBhcyBzdHJpbmcpPy5sZW5ndGggfHwgISEodGhpcy5zZWFyY2hWYWx1ZSBhcyBJRmlsdGVyUXVlcnkpKSB7XG4gICAgdHJ5IHtcbiAgICAgaWYoISh0aGlzLnNlYXJjaFZhbHVlIGFzIHN0cmluZyk/Lmxlbmd0aCAmJiAhKHRoaXMuc2VhcmNoVmFsdWUgYXMgSUZpbHRlclF1ZXJ5KSkge1xuICAgICAgICAodGhpcy5kYXRhIGFzIEtleVZhbHVlW10pID0gW107XG4gICAgICAgIC8vIGNvbnN0IHJhd1F1ZXJ5ID0gdGhpcy5wYXJzZVF1ZXJ5KHNlbGYubW9kZWwgYXMgUmVwb3NpdG9yeTxNb2RlbD4sIHN0YXJ0LCBsaW1pdCk7XG4gICAgICAgIC8vIHJlcXVlc3QgPSB0aGlzLnBhcnNlUmVzdWx0KGF3YWl0ICh0aGlzLm1vZGVsIGFzIGFueSk/LnBhZ2luYXRlKHN0YXJ0LCBsaW1pdCkpO1xuICAgICAgICAgIGlmKCF0aGlzLnBhZ2luYXRvcikge1xuICAgICAgICAgICAgdGhpcy5wYWdpbmF0b3IgPSBhd2FpdCByZXBvXG4gICAgICAgICAgICAgIC5zZWxlY3QoKVxuICAgICAgICAgICAgICAub3JkZXJCeShbdGhpcy5wayBhcyBrZXlvZiBNb2RlbCwgdGhpcy5zb3J0RGlyZWN0aW9uXSlcbiAgICAgICAgICAgICAgLnBhZ2luYXRlKHRoaXMubGltaXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXF1ZXN0ID0gYXdhaXQgdGhpcy5wYXJzZVJlc3VsdCh0aGlzLnBhZ2luYXRvcik7XG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGlmKCF0aGlzLmluZGV4ZXMpXG4gICAgICAgICAgdGhpcy5pbmRleGVzID0gKE9iamVjdC52YWx1ZXModGhpcy5tYXBwZXIpIHx8IFt0aGlzLnBrXSk7XG5cbiAgICAgICAgY29uc3QgY29uZGl0aW9uID0gdGhpcy5wYXJzZUNvbmRpdGlvbnModGhpcy5zZWFyY2hWYWx1ZSBhcyBzdHJpbmcgfCBudW1iZXIgfCBJRmlsdGVyUXVlcnkpO1xuICAgICAgICByZXF1ZXN0ID0gYXdhaXQgdGhpcy5wYXJzZVJlc3VsdChhd2FpdCByZXBvLnF1ZXJ5KGNvbmRpdGlvbiwgKHRoaXMuc29ydEJ5IHx8IHRoaXMucGspIGFzIGtleW9mIE1vZGVsLCB0aGlzLnNvcnREaXJlY3Rpb24pKTtcbiAgICAgICAgZGF0YSA9IFtdO1xuICAgICAgfVxuICAgICAgZGF0YSA9IHRoaXMudHlwZSA9PT0gTGlzdENvbXBvbmVudHNUeXBlcy5JTkZJTklURSA/IFsuLi4gKGRhdGEpLmNvbmNhdChyZXF1ZXN0KV0gOiBbLi4ucmVxdWVzdF07XG4gICAgfSBjYXRjaChlcnJvcjogdW5rbm93bikge1xuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoKGVycm9yIGFzIEVycm9yKT8ubWVzc2FnZSB8fCBgVW5hYmxlIHRvIGZpbmQgJHt0aGlzLm1vZGVsfSBvbiByZWdpc3RyeS4gUmV0dXJuIGVtcHR5IGFycmF5IGZyb20gY29tcG9uZW50YCk7XG4gICAgfVxuICB9XG5cbiAgaWYoZGF0YT8ubGVuZ3RoKSB7XG4gICAgaWYodGhpcy5zZWFyY2hWYWx1ZSkge1xuICAgICAgdGhpcy5pdGVtcyA9IFsuLi5kYXRhXTtcbiAgICAgIGlmKHRoaXMuaXRlbXM/Lmxlbmd0aCA8PSB0aGlzLmxpbWl0KVxuICAgICAgICB0aGlzLmxvYWRNb3JlRGF0YSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLml0ZW1zID0gWy4uLmRhdGFdO1xuICAgIH1cbiAgfVxuICBpZih0aGlzLnR5cGUgPT09IExpc3RDb21wb25lbnRzVHlwZXMuUEFHSU5BVEVEICYmIHRoaXMucGFnaW5hdG9yKVxuICAgICAgdGhpcy5nZXRNb3JlRGF0YSh0aGlzLnBhZ2luYXRvci50b3RhbCk7XG4gIHJldHVybiBkYXRhIHx8IFtdIGFzIEtleVZhbHVlW107XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIENvbnZlcnRzIHNlYXJjaCB2YWx1ZXMgb3IgZmlsdGVyIHF1ZXJpZXMgaW50byBkYXRhYmFzZSBjb25kaXRpb25zLlxuICogQHN1bW1hcnkgVHJhbnNmb3JtcyBzZWFyY2ggaW5wdXQgb3IgY29tcGxleCBmaWx0ZXIgcXVlcmllcyBpbnRvIENvbmRpdGlvbiBvYmplY3RzXG4gKiB0aGF0IGNhbiBiZSB1c2VkIGZvciBkYXRhYmFzZSBxdWVyeWluZy4gSGFuZGxlcyBib3RoIHNpbXBsZSBzdHJpbmcvbnVtYmVyIHNlYXJjaGVzXG4gKiBhY3Jvc3MgaW5kZXhlZCBmaWVsZHMgYW5kIGNvbXBsZXggZmlsdGVyIHF1ZXJpZXMgd2l0aCBtdWx0aXBsZSBjcml0ZXJpYS5cbiAqXG4gKiBGb3Igc2ltcGxlIHNlYXJjaGVzIChzdHJpbmcvbnVtYmVyKTpcbiAqIC0gQ3JlYXRlcyBjb25kaXRpb25zIHRoYXQgc2VhcmNoIGFjcm9zcyBhbGwgaW5kZXhlZCBmaWVsZHNcbiAqIC0gVXNlcyBlcXVhbGl0eSBmb3IgbnVtZXJpYyB2YWx1ZXMgYW5kIHJlZ2V4IGZvciBzdHJpbmcgdmFsdWVzXG4gKiAtIENvbWJpbmVzIGNvbmRpdGlvbnMgd2l0aCBPUiBsb2dpYyB0byBzZWFyY2ggbXVsdGlwbGUgZmllbGRzXG4gKlxuICogRm9yIGNvbXBsZXggZmlsdGVyIHF1ZXJpZXM6XG4gKiAtIFByb2Nlc3NlcyBlYWNoIGZpbHRlciBpdGVtIHdpdGggaXRzIHNwZWNpZmljIGNvbmRpdGlvbiB0eXBlXG4gKiAtIFN1cHBvcnRzIEVxdWFsLCBOb3QgRXF1YWwsIENvbnRhaW5zLCBOb3QgQ29udGFpbnMsIEdyZWF0ZXIgVGhhbiwgTGVzcyBUaGFuXG4gKiAtIFVwZGF0ZXMgc29ydCBjb25maWd1cmF0aW9uIGJhc2VkIG9uIHRoZSBmaWx0ZXIgcXVlcnlcbiAqIC0gQ29tYmluZXMgbXVsdGlwbGUgZmlsdGVyIGNvbmRpdGlvbnMgd2l0aCBPUiBsb2dpY1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyIHwgSUZpbHRlclF1ZXJ5fSB2YWx1ZSAtIFRoZSBzZWFyY2ggdmFsdWUgb3IgZmlsdGVyIHF1ZXJ5IG9iamVjdFxuICogQHJldHVybnMge0NvbmRpdGlvbjxNb2RlbD59IEEgQ29uZGl0aW9uIG9iamVjdCBmb3IgZGF0YWJhc2UgcXVlcnlpbmdcbiAqIEBtZW1iZXJPZiBMaXN0Q29tcG9uZW50XG4gKi9cbnBhcnNlQ29uZGl0aW9ucyh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgSUZpbHRlclF1ZXJ5KTogQ29uZGl0aW9uPE1vZGVsPiB7XG4gIGxldCBfY29uZGl0aW9uOiBDb25kaXRpb248TW9kZWw+O1xuICBpZih0eXBlb2YgdmFsdWUgPT09IFByaW1pdGl2ZXMuU1RSSU5HIHx8IHR5cGVvZiB2YWx1ZSA9PT0gUHJpbWl0aXZlcy5OVU1CRVIpIHtcbiAgICBfY29uZGl0aW9uID0gQ29uZGl0aW9uLmF0dHJpYnV0ZTxNb2RlbD4odGhpcy5wayBhcyBrZXlvZiBNb2RlbCkuZXEoIWlzTmFOKHZhbHVlIGFzIG51bWJlcikgPyBOdW1iZXIodmFsdWUpIDogdmFsdWUpO1xuICAgIGZvciAoY29uc3QgaW5kZXggb2YgdGhpcy5pbmRleGVzKSB7XG4gICAgICAgIGlmKGluZGV4ID09PSB0aGlzLnBrKVxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBsZXQgb3JDb25kaXRpb247XG4gICAgICAgIGlmKCFpc05hTih2YWx1ZSBhcyBudW1iZXIpKSB7XG4gICAgICAgICAgb3JDb25kaXRpb24gPSBDb25kaXRpb24uYXR0cmlidXRlPE1vZGVsPihpbmRleCBhcyBrZXlvZiBNb2RlbCkuZXEoTnVtYmVyKHZhbHVlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3JDb25kaXRpb24gPSBDb25kaXRpb24uYXR0cmlidXRlPE1vZGVsPihpbmRleCBhcyBrZXlvZiBNb2RlbCkucmVnZXhwKHZhbHVlIGFzIHN0cmluZyk7XG4gICAgICAgIH1cbiAgICAgICAgX2NvbmRpdGlvbiA9IF9jb25kaXRpb24ub3Iob3JDb25kaXRpb24pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7cXVlcnksIHNvcnR9ID0gdmFsdWUgYXMgSUZpbHRlclF1ZXJ5O1xuICAgIF9jb25kaXRpb24gPSBDb25kaXRpb24uYXR0cmlidXRlPE1vZGVsPih0aGlzLnBrIGFzIGtleW9mIE1vZGVsKS5kaWYoJ251bGwnKTtcblxuICAgIGlmKHF1ZXJ5Py5sZW5ndGgpXG4gICAgICBfY29uZGl0aW9uID0gdW5kZWZpbmVkIGFzIHVua25vd24gYXMgQ29uZGl0aW9uPE1vZGVsPjtcblxuICAgIChxdWVyeSB8fCBbXSkuZm9yRWFjaCgoaXRlbTogSUZpbHRlclF1ZXJ5SXRlbSkgPT4ge1xuICAgICAgY29uc3Qge3ZhbHVlLCBjb25kaXRpb24sIGluZGV4fSA9IGl0ZW07XG4gICAgICBsZXQgdmFsID0gdmFsdWUgYXMgc3RyaW5nIHwgbnVtYmVyO1xuICAgICAgaWYoaW5kZXggPT09IHRoaXMucGsgfHwgIWlzTmFOKHZhbCBhcyBudW1iZXIpKVxuICAgICAgICB2YWwgPSBOdW1iZXIodmFsKTtcbiAgICAgIGxldCBvckNvbmRpdGlvbjtcbiAgICAgIHN3aXRjaCAoY29uZGl0aW9uKSB7XG4gICAgICAgIGNhc2UgXCJFcXVhbFwiOlxuICAgICAgICAgIG9yQ29uZGl0aW9uID0gQ29uZGl0aW9uLmF0dHJpYnV0ZTxNb2RlbD4oaW5kZXggYXMga2V5b2YgTW9kZWwpLmVxKHZhbCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJOb3QgRXF1YWxcIjpcbiAgICAgICAgICBvckNvbmRpdGlvbiA9IENvbmRpdGlvbi5hdHRyaWJ1dGU8TW9kZWw+KGluZGV4IGFzIGtleW9mIE1vZGVsKS5kaWYodmFsKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIk5vdCBDb250YWluc1wiOlxuICAgICAgICAgIG9yQ29uZGl0aW9uID0gIUNvbmRpdGlvbi5hdHRyaWJ1dGU8TW9kZWw+KGluZGV4IGFzIGtleW9mIE1vZGVsKS5yZWdleHAobmV3IFJlZ0V4cChgXig/IS4qJHt2YWx9KS4qJGApKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkNvbnRhaW5zXCI6XG4gICAgICAgICAgb3JDb25kaXRpb24gPSBDb25kaXRpb24uYXR0cmlidXRlPE1vZGVsPihpbmRleCBhcyBrZXlvZiBNb2RlbCkucmVnZXhwKHZhbCBhcyBzdHJpbmcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiR3JlYXRlciBUaGFuXCI6XG4gICAgICAgICAgb3JDb25kaXRpb24gPSBDb25kaXRpb24uYXR0cmlidXRlPE1vZGVsPihpbmRleCBhcyBrZXlvZiBNb2RlbCkuZ3RlKHZhbCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJMZXNzIFRoYW5cIjpcbiAgICAgICAgICBvckNvbmRpdGlvbiA9IENvbmRpdGlvbi5hdHRyaWJ1dGU8TW9kZWw+KGluZGV4IGFzIGtleW9mIE1vZGVsKS5sdGUodmFsKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIF9jb25kaXRpb24gPSAoIV9jb25kaXRpb24gP1xuICAgICAgICBvckNvbmRpdGlvbiA6IF9jb25kaXRpb24uYW5kKG9yQ29uZGl0aW9uIGFzIHVua25vd24gYXMgQ29uZGl0aW9uPE1vZGVsPikpIGFzIENvbmRpdGlvbjxNb2RlbD47XG4gICAgfSk7XG5cbiAgICB0aGlzLnNvcnRCeSA9IHNvcnQ/LnZhbHVlIGFzIGtleW9mIE1vZGVsIHx8IHRoaXMucGs7XG4gICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gc29ydD8uZGlyZWN0aW9uIHx8IHRoaXMuc29ydERpcmVjdGlvbjtcbiAgfVxuICByZXR1cm4gX2NvbmRpdGlvbiBhcyBDb25kaXRpb248TW9kZWw+O1xuXG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFByb2Nlc3NlcyBxdWVyeSByZXN1bHRzIGludG8gYSBzdGFuZGFyZGl6ZWQgZm9ybWF0LlxuICogQHN1bW1hcnkgSGFuZGxlcyBkaWZmZXJlbnQgcmVzdWx0IGZvcm1hdHMgZnJvbSB2YXJpb3VzIGRhdGEgc291cmNlcywgZXh0cmFjdGluZ1xuICogcGFnaW5hdGlvbiBpbmZvcm1hdGlvbiB3aGVuIGF2YWlsYWJsZSBhbmQgYXBwbHlpbmcgYW55IGNvbmZpZ3VyZWQgZGF0YSBtYXBwaW5nLlxuICogVGhpcyBlbnN1cmVzIGNvbnNpc3RlbnQgZGF0YSBzdHJ1Y3R1cmUgcmVnYXJkbGVzcyBvZiB0aGUgc291cmNlLlxuICpcbiAqIEBwcm90ZWN0ZWRcbiAqIEBwYXJhbSB7S2V5VmFsdWVbXSB8IFBhZ2luYXRvcn0gcmVzdWx0IC0gVGhlIHJhdyBxdWVyeSByZXN1bHRcbiAqIEByZXR1cm5zIHtLZXlWYWx1ZVtdfSBUaGUgcHJvY2Vzc2VkIGFycmF5IG9mIGl0ZW1zXG4gKlxuICogQG1lbWJlck9mIExpc3RDb21wb25lbnRcbiAqL1xucHJvdGVjdGVkIGFzeW5jIHBhcnNlUmVzdWx0KHJlc3VsdDogS2V5VmFsdWVbXSB8IFBhZ2luYXRvcjxNb2RlbD4pOiBQcm9taXNlPEtleVZhbHVlW10+IHtcbiAgaWYoIUFycmF5LmlzQXJyYXkocmVzdWx0KSAmJiAoJ3BhZ2UnIGluIHJlc3VsdCAmJiAndG90YWwnIGluIHJlc3VsdCkpIHtcbiAgICBjb25zdCBwYWdpbmF0b3IgPSByZXN1bHQgYXMgUGFnaW5hdG9yPE1vZGVsPjtcbiAgICByZXN1bHQgPSBhd2FpdCBwYWdpbmF0b3IucGFnZSh0aGlzLnBhZ2UpO1xuICAgIC8vIFRPRE86IENoYWdlIGZvciByZXN1bHQudG90YWw7XG4gICAgdGhpcy5nZXRNb3JlRGF0YShwYWdpbmF0b3IudG90YWwpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZ2V0TW9yZURhdGEoKHJlc3VsdCBhcyBLZXlWYWx1ZVtdKT8ubGVuZ3RoIHx8IDApO1xuICB9XG4gIHJldHVybiAoT2JqZWN0LmtleXModGhpcy5tYXBwZXIgfHwge30pLmxlbmd0aCkgP1xuICAgIHRoaXMubWFwUmVzdWx0cyhyZXN1bHQpIDogcmVzdWx0O1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBVcGRhdGVzIHBhZ2luYXRpb24gc3RhdGUgYmFzZWQgb24gZGF0YSBsZW5ndGguXG4gKiBAc3VtbWFyeSBDYWxjdWxhdGVzIHdoZXRoZXIgbW9yZSBkYXRhIGlzIGF2YWlsYWJsZSBhbmQgaG93IG1hbnkgcGFnZXMgZXhpc3RcbiAqIGJhc2VkIG9uIHRoZSB0b3RhbCBudW1iZXIgb2YgaXRlbXMgYW5kIHRoZSBjb25maWd1cmVkIGxpbWl0IHBlciBwYWdlLlxuICogVGhpcyBpbmZvcm1hdGlvbiBpcyB1c2VkIHRvIGNvbnRyb2wgcGFnaW5hdGlvbiBVSSBhbmQgaW5maW5pdGUgc2Nyb2xsaW5nIGJlaGF2aW9yLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggLSBUaGUgdG90YWwgbnVtYmVyIG9mIGl0ZW1zIGF2YWlsYWJsZVxuICogQHJldHVybnMge3ZvaWR9XG4gKlxuICogQG1lbWJlck9mIExpc3RDb21wb25lbnRcbiAqL1xuZ2V0TW9yZURhdGEobGVuZ3RoOiBudW1iZXIpOiB2b2lkIHtcbiAgaWYodGhpcy50eXBlID09PSBMaXN0Q29tcG9uZW50c1R5cGVzLklORklOSVRFKSB7XG4gICAgaWYodGhpcy5wYWdpbmF0b3IpXG4gICAgICBsZW5ndGggPSBsZW5ndGggKiB0aGlzLmxpbWl0O1xuICAgIGlmKGxlbmd0aCA8PSB0aGlzLmxpbWl0KSB7XG4gICAgICB0aGlzLmxvYWRNb3JlRGF0YSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhZ2VzID0gTWF0aC5mbG9vcihsZW5ndGggLyB0aGlzLmxpbWl0KTtcbiAgICAgIGlmKCh0aGlzLnBhZ2VzICogdGhpcy5saW1pdCkgPCBsZW5ndGgpXG4gICAgICAgIHRoaXMucGFnZXMgKz0gMTtcbiAgICAgIGlmKHRoaXMucGFnZXMgPT09IDEpXG4gICAgICAgIHRoaXMubG9hZE1vcmVEYXRhID0gZmFsc2U7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMucGFnZXMgPSBsZW5ndGg7XG4gICAgaWYodGhpcy5wYWdlcyA9PT0gMSlcbiAgICAgIHRoaXMubG9hZE1vcmVEYXRhID0gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gTWFwcyBhIHNpbmdsZSBpdGVtIHVzaW5nIHRoZSBjb25maWd1cmVkIG1hcHBlci5cbiAqIEBzdW1tYXJ5IFRyYW5zZm9ybXMgYSBkYXRhIGl0ZW0gYWNjb3JkaW5nIHRvIHRoZSBtYXBwaW5nIGNvbmZpZ3VyYXRpb24sXG4gKiBleHRyYWN0aW5nIG5lc3RlZCBwcm9wZXJ0aWVzIGFuZCBmb3JtYXR0aW5nIHZhbHVlcyBhcyBuZWVkZWQuIFRoaXMgYWxsb3dzXG4gKiB0aGUgY29tcG9uZW50IHRvIGRpc3BsYXkgZGF0YSBpbiBhIGZvcm1hdCBkaWZmZXJlbnQgZnJvbSBob3cgaXQncyBzdG9yZWQuXG4gKlxuICogQHByb3RlY3RlZFxuICogQHBhcmFtIHtLZXlWYWx1ZX0gaXRlbSAtIFRoZSBpdGVtIHRvIG1hcFxuICogQHBhcmFtIHtLZXlWYWx1ZX0gbWFwcGVyIC0gVGhlIG1hcHBpbmcgY29uZmlndXJhdGlvblxuICogQHBhcmFtIHtLZXlWYWx1ZX0gW3Byb3BzXSAtIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBpbmNsdWRlXG4gKiBAcmV0dXJucyB7S2V5VmFsdWV9IFRoZSBtYXBwZWQgaXRlbVxuICpcbiAqIEBtZW1iZXJPZiBMaXN0Q29tcG9uZW50XG4gKi9cbnByb3RlY3RlZCBpdGVtTWFwcGVyKGl0ZW06IEtleVZhbHVlLCBtYXBwZXI6IEtleVZhbHVlLCBwcm9wcz86IEtleVZhbHVlKTogS2V5VmFsdWUge1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXMobWFwcGVyKS5yZWR1Y2UoKGFjY3VtOiBLZXlWYWx1ZSwgW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgY29uc3QgYXJyYXlWYWx1ZSA9IHZhbHVlLnNwbGl0KCcuJyk7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgYWNjdW1ba2V5XSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoYXJyYXlWYWx1ZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgdmFsdWUgPSBpdGVtPy5bdmFsdWVdIHx8IHZhbHVlO1xuICAgICAgICBpZihpc1ZhbGlkRGF0ZSh2YWx1ZSkpXG4gICAgICAgICAgdmFsdWUgPSBgJHtmb3JtYXREYXRlKHZhbHVlKX1gO1xuICAgICAgICBhY2N1bVtrZXldID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgdmFsO1xuXG4gICAgICAgIGZvciAoY29uc3QgX3ZhbHVlIG9mIGFycmF5VmFsdWUpXG4gICAgICAgICAgdmFsID0gIXZhbFxuICAgICAgICAgICAgPyBpdGVtW192YWx1ZV1cbiAgICAgICAgICAgIDogKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gSlNPTi5wYXJzZSh2YWwpIDogdmFsKVtfdmFsdWVdO1xuXG5cbiAgICAgICAgaWYgKGlzVmFsaWREYXRlKG5ldyBEYXRlKHZhbCkpKVxuICAgICAgICAgIHZhbCA9IGAke2Zvcm1hdERhdGUodmFsKX1gO1xuXG4gICAgICAgIGFjY3VtW2tleV0gPSB2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByb3BzIHx8IHt9LCBhY2N1bSk7XG4gIH0sIHt9KTtcbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gTWFwcyBhbGwgcmVzdWx0IGl0ZW1zIHVzaW5nIHRoZSBjb25maWd1cmVkIG1hcHBlci5cbiAqIEBzdW1tYXJ5IEFwcGxpZXMgdGhlIGl0ZW1NYXBwZXIgdG8gZWFjaCBpdGVtIGluIHRoZSByZXN1bHQgc2V0LCBhZGRpbmdcbiAqIGNvbW1vbiBwcm9wZXJ0aWVzIGxpa2Ugb3BlcmF0aW9ucyBhbmQgcm91dGUgaW5mb3JtYXRpb24uIFRoaXMgdHJhbnNmb3Jtc1xuICogdGhlIHJhdyBkYXRhIGludG8gdGhlIGZvcm1hdCBleHBlY3RlZCBieSB0aGUgbGlzdCBpdGVtIGNvbXBvbmVudHMuXG4gKlxuICogQHBhcmFtIHtLZXlWYWx1ZVtdfSBkYXRhIC0gVGhlIGFycmF5IG9mIGl0ZW1zIHRvIG1hcFxuICogQHJldHVybnMge0tleVZhbHVlW119IFRoZSBhcnJheSBvZiBtYXBwZWQgaXRlbXNcbiAqXG4gKiBAbWVtYmVyT2YgTGlzdENvbXBvbmVudFxuICovXG4gIG1hcFJlc3VsdHMoZGF0YTogS2V5VmFsdWVbXSk6IEtleVZhbHVlW10ge1xuICAgIGlmKCFkYXRhIHx8ICFkYXRhLmxlbmd0aClcbiAgICAgIHJldHVybiBbXTtcbiAgICAvLyBwYXNzaW5nIHVpZCBhcyBwcm9wIHRvIG1hcHBlclxuICAgIHRoaXMubWFwcGVyID0gey4uLiB0aGlzLm1hcHBlciwgLi4uIHt1aWQ6IHRoaXMucGt9fTtcbiAgICBjb25zdCBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgb3BlcmF0aW9uczogdGhpcy5vcGVyYXRpb25zLFxuICAgICAgcm91dGU6IHRoaXMucm91dGUsXG4gICAgICAuLi4gIE9iamVjdC5rZXlzKHRoaXMuaXRlbSkucmVkdWNlKChhY2M6IEtleVZhbHVlLCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICBhY2Nba2V5XSA9IHRoaXMuaXRlbVtrZXldO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pLFxuICAgICAgLy8gLi4uICghdGhpcy5pdGVtLnJlbmRlciA/IHt9IDogIE9iamVjdC5rZXlzKHRoaXMuaXRlbSkucmVkdWNlKChhY2M6IEtleVZhbHVlLCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgLy8gICBhY2Nba2V5XSA9IHRoaXMuaXRlbVtrZXkgYXMga2V5b2YgSUxpc3RJdGVtUHJvcF07XG4gICAgICAvLyAgIHJldHVybiBhY2M7XG4gICAgICAvLyB9LCB7fSkpXG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGEucmVkdWNlKChhY2N1bTogS2V5VmFsdWVbXSwgY3VycikgPT4ge1xuICAgICAgICBhY2N1bS5wdXNoKHsuLi4gdGhpcy5pdGVtTWFwcGVyKGN1cnIsIHRoaXMubWFwcGVyIGFzIEtleVZhbHVlLCBwcm9wcyksIC4uLiB7cGs6IHRoaXMucGt9fSk7XG4gICAgICAgIHJldHVybiBhY2N1bTtcbiAgICB9LCBbXSk7XG4gIH1cbn1cblxuIiwiXG5AaWYoc2hvd1JlZnJlc2hlcikge1xuICA8aW9uLXJlZnJlc2hlciBzbG90PVwiZml4ZWRcIiBbcHVsbEZhY3Rvcl09XCIxXCIgW3B1bGxNaW5dPVwiMTAwXCIgW3B1bGxNYXhdPVwiMjAwXCIgKGlvblJlZnJlc2gpPVwiaGFuZGxlUmVmcmVzaCgkZXZlbnQpXCI+XG4gICAgPGlvbi1yZWZyZXNoZXItY29udGVudCAvPlxuICA8L2lvbi1yZWZyZXNoZXI+XG59XG5cbkBpZihzaG93U2VhcmNoYmFyKSB7XG4gIEBpZihtb2RlbCAmJiBlbmFibGVGaWx0ZXIpIHtcbiAgICA8bmd4LWRlY2FmLWZpbHRlclxuICAgICAgW21vZGVsXT1cIm1vZGVsXCJcbiAgICAgIFtzb3J0RGlyZWN0aW9uXT1cInNvcnREaXJlY3Rpb25cIlxuICAgICAgW2Rpc2FibGVTb3J0XT1cImRpc2FibGVTb3J0XCJcbiAgICAgIChmaWx0ZXJFdmVudCk9XCJoYW5kbGVGaWx0ZXIoJGV2ZW50KVwiXG4gICAgICAoc2VhcmNoRXZlbnQpPVwiaGFuZGxlU2VhcmNoKCRldmVudClcIlxuICAgIC8+XG4gIH0gQGVsc2Uge1xuICAgIDxuZ3gtZGVjYWYtc2VhcmNoYmFyIFtlbWl0RXZlbnRUb1dpbmRvd109XCJmYWxzZVwiIFtkZWJvdW5jZV09XCI1MDBcIiAoc2VhcmNoRXZlbnQpPVwiaGFuZGxlU2VhcmNoKCRldmVudClcIiAvPlxuICB9XG59XG5cbkBpZihkYXRhPy5sZW5ndGgpIHtcbiAgPGlvbi1saXN0IFtpZF09XCJ1aWRcIiBbaW5zZXRdPVwiaW5zZXRcIiBbbGluZXNdPVwibGluZXNcIiAjY29tcG9uZW50PlxuICAgIEBpZihpdGVtPy50YWcpIHtcbiAgICAgIEBmb3IoY2hpbGQgb2YgaXRlbXM7IHRyYWNrIHRyYWNrSXRlbUZuKCRpbmRleCwgY2hpbGQpKSB7XG4gICAgICAgIDxuZ3gtZGVjYWYtY29tcG9uZW50LXJlbmRlcmVyXG4gICAgICAgICAgW3RhZ109XCJpdGVtLnRhZ1wiXG4gICAgICAgICAgKGxpc3RlbkV2ZW50KT1cImhhbmRsZUV2ZW50KCRldmVudClcIlxuICAgICAgICAgIFtnbG9iYWxzXT0ne1xuICAgICAgICAgICAgaXRlbTogY2hpbGQsXG4gICAgICAgICAgICBtYXBwZXI6IG1hcHBlcixcbiAgICAgICAgICAgIHJvdXRlOiByb3V0ZVxuICAgICAgICAgIH0nPlxuICAgICAgICAgIDwvbmd4LWRlY2FmLWNvbXBvbmVudC1yZW5kZXJlcj5cbiAgICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIH1cbiAgPC9pb24tbGlzdD5cblxuICBAaWYobG9hZE1vcmVEYXRhKSB7XG4gICAgQGlmKHBhZ2VzID4gMCAmJiB0eXBlID09PSAncGFnaW5hdGVkJyAmJiAhc2VhcmNoVmFsdWU/Lmxlbmd0aCkge1xuICAgICAgPG5neC1kZWNhZi1wYWdpbmF0aW9uXG4gICAgICAgIFt0b3RhbFBhZ2VzXT1cInBhZ2VzXCJcbiAgICAgICAgW2N1cnJlbnRdPVwicGFnZVwiXG4gICAgICAgIChjbGlja0V2ZW50KT1cImhhbmRsZVBhZ2luYXRlKCRldmVudClcIlxuICAgICAgLz5cblxuICAgIH0gQGVsc2Uge1xuICAgICAgPGlvbi1pbmZpbml0ZS1zY3JvbGxcbiAgICAgICAgW2NsYXNzXT1cInNlYXJjaFZhbHVlPy5sZW5ndGggPyAnZGNmLWhpZGRlbicgOiAnJ1wiXG4gICAgICAgIFtwb3NpdGlvbl09XCJzY3JvbGxQb3NpdGlvblwiXG4gICAgICAgIFt0aHJlc2hvbGRdPVwic2Nyb2xsVGhyZXNob2xkXCJcbiAgICAgICAgKGlvbkluZmluaXRlKT1cImhhbmRsZVJlZnJlc2goJGV2ZW50KVwiPlxuICAgICAgICA8aW9uLWluZmluaXRlLXNjcm9sbC1jb250ZW50IFtsb2FkaW5nU3Bpbm5lcl09XCJsb2FkaW5nU3Bpbm5lclwiIFtsb2FkaW5nVGV4dF09XCJsb2FkaW5nVGV4dFwiIC8+XG4gICAgICA8L2lvbi1pbmZpbml0ZS1zY3JvbGw+XG4gICAgfVxuICB9XG59IEBlbHNlIHtcbiAgQGlmKHJlZnJlc2hpbmcpIHtcbiAgICA8aW9uLWl0ZW0gKm5nRm9yPVwibGV0IHNrbCBvZiBza2VsZXRvbkRhdGFcIj5cbiAgICAgIDxpb24tdGh1bWJuYWlsIHNsb3Q9XCJzdGFydFwiPlxuICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgW2FuaW1hdGVkXT1cInRydWVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgPC9pb24tdGh1bWJuYWlsPlxuICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IFthbmltYXRlZF09XCJ0cnVlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgPGlvbi10ZXh0IGNsYXNzPVwiZGF0ZVwiIHN0eWxlPVwid2lkdGg6IDIwJTtcIj48aW9uLXNrZWxldG9uLXRleHQgW2FuaW1hdGVkXT1cInRydWVcIj48L2lvbi1za2VsZXRvbi10ZXh0PjwvaW9uLXRleHQ+XG4gICAgICA8L2lvbi1sYWJlbD5cbiAgICA8L2lvbi1pdGVtPlxuICB9IEBlbHNlIHtcbiAgICBAaWYoIXNlYXJjaFZhbHVlPy5sZW5ndGgpIHtcbiAgICAgIDxuZ3gtZGVjYWYtZW1wdHktc3RhdGVcbiAgICAgICAgW3RpdGxlXT1cIihsb2NhbGUgKyAnLicrIGVtcHR5LnRpdGxlKSB8IHRyYW5zbGF0ZVwiXG4gICAgICAgIFtzdWJ0aXRsZV09XCIobG9jYWxlICsgJy4nKyBlbXB0eS5zdWJ0aXRsZSkgfCB0cmFuc2xhdGVcIlxuICAgICAgICBbYnV0dG9uVGV4dF09XCJlbXB0eS5zaG93QnV0dG9uID8gKGxvY2FsZSArICcuJysgZW1wdHkuYnV0dG9uIHwgdHJhbnNsYXRlKSA6ICcnXCJcbiAgICAgICAgW2J1dHRvbkxpbmtdPVwiZW1wdHkuc2hvd0J1dHRvbiA/IGVtcHR5LnJvdXRlIDogJydcIlxuICAgICAgLz5cbiAgICB9IEBlbHNlIHtcbiAgICAgIDxuZ3gtZGVjYWYtZW1wdHktc3RhdGVcbiAgICAgICAgaWNvbj1cInNlYXJjaC1vdXRsaW5lXCJcbiAgICAgICAgbmdDbGFzcz1cImVtcHR5LXNlYXJjaFwiXG4gICAgICAgIFt0cmFuc2xhdGFibGVdPVwidHJ1ZVwiXG4gICAgICAgIHRpdGxlPVwic2VhcmNoLnRpdGxlXCJcbiAgICAgICAgc3VidGl0bGU9XCJzZWFyY2guc3VidGl0bGVcIlxuICAgICAgICBbc2VhcmNoVmFsdWVdPVwic2VhcmNoVmFsdWVcIlxuICAgICAgLz5cbiAgICB9XG4gIH1cbn1cblxuIl19