import { OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { InfiniteScrollCustomEvent, RefresherCustomEvent, SpinnerTypes } from '@ionic/angular';
import { OperationKeys } from '@decaf-ts/db-decorators';
import { Model } from '@decaf-ts/decorator-validation';
import { Condition, OrderDirection, Paginator } from '@decaf-ts/core';
import { BaseCustomEvent, RendererCustomEvent, StringOrBoolean, KeyValue, ListItemCustomEvent } from '../../engine';
import { NgxBaseComponent } from '../../engine/NgxBaseComponent';
import { PaginationCustomEvent } from '../pagination/constants';
import { IListEmptyResult, ListComponentsTypes } from './constants';
import { FunctionLike, IFilterQuery } from '../../engine';
import * as i0 from "@angular/core";
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
export declare class ListComponent extends NgxBaseComponent implements OnInit, OnDestroy {
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
    type: ListComponentsTypes;
    /**
     * @description Controls whether the component uses translation services.
     * @summary When set to true, the component will attempt to use translation services
     * for any text content. This allows for internationalization of the list component.
     *
     * @type {StringOrBoolean}
     * @default true
     * @memberOf ListComponent
     */
    translatable: StringOrBoolean;
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
    showSearchbar: StringOrBoolean;
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
    data?: KeyValue[] | undefined;
    /**
     * @description The data source for the list component.
     * @summary Specifies where the list should fetch its data from. This can be either:
     * - A string URL or endpoint identifier
     * - A function that returns data when called
     * The component will call this source when it needs to load or refresh data.
     *
     * @type {string | FunctionLike}
     * @required
     * @memberOf ListComponent
     */
    source: string | FunctionLike;
    /**
     * @description The starting index for data fetching.
     * @summary Specifies the index from which to start fetching data. This is used
     * for pagination and infinite scrolling to determine which subset of data to load.
     *
     * @type {number}
     * @default 0
     * @memberOf ListComponent
     */
    start: number;
    /**
     * @description The number of items to fetch per page or load operation.
     * @summary Determines how many items are loaded at once during pagination or
     * infinite scrolling. This affects the size of data chunks requested from the source.
     *
     * @type {number}
     * @default 10
     * @memberOf ListComponent
     */
    limit: number;
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
    loadMoreData: StringOrBoolean;
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
    lines: "inset" | "full" | "none";
    /**
     * @description Controls whether the list has inset styling.
     * @summary When set to true, the list will have inset styling with rounded corners
     * and margin around the edges. This creates a card-like appearance for the list.
     *
     * @type {StringOrBoolean}
     * @default false
     * @memberOf ListComponent
     */
    inset: StringOrBoolean;
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
    scrollThreshold: string;
    /**
     * @description The position where new items are added during infinite scrolling.
     * @summary Determines whether new items are added to the top or bottom of the list
     * when loading more data through infinite scrolling.
     *
     * @type {"bottom" | "top"}
     * @default "bottom"
     * @memberOf ListComponent
     */
    scrollPosition: "bottom" | "top";
    /**
     * @description Custom text to display during loading operations.
     * @summary Specifies the text shown in the loading indicator when the component
     * is fetching data. If not provided, a default loading message will be used.
     *
     * @type {string | undefined}
     * @memberOf ListComponent
     */
    loadingText?: string;
    /**
     * @description Controls the visibility of the pull-to-refresh feature.
     * @summary When set to true, enables the pull-to-refresh functionality that allows
     * users to refresh the list data by pulling down from the top of the list.
     *
     * @type {StringOrBoolean}
     * @default true
     * @memberOf ListComponent
     */
    showRefresher: StringOrBoolean;
    /**
     * @description The type of spinner to display during loading operations.
     * @summary Specifies the visual style of the loading spinner shown during data
     * fetching operations. Uses Ionic's predefined spinner types.
     *
     * @type {SpinnerTypes}
     * @default "circular"
     * @memberOf ListComponent
     */
    loadingSpinner: SpinnerTypes;
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
    enableFilter: StringOrBoolean;
    /**
     * @description Sorting parameters for data fetching.
     * @summary Specifies how the fetched data should be sorted. This can be provided
     * as a string (field name with optional direction) or a direct object.
     *
     * @type {string | KeyValue | undefined}
     * @memberOf ListComponent
     */
    sortDirection: OrderDirection;
    /**
     * @description Sorting parameters for data fetching.
     * @summary Specifies how the fetched data should be sorted. This can be provided
     * as a string (field name with optional direction) or a direct object.
     *
     * @type {string | KeyValue | undefined}
     * @memberOf ListComponent
     */
    sortBy: string;
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
    disableSort: StringOrBoolean;
    /**
     * @description Icon to display when the list is empty.
     * @summary Specifies the icon shown in the empty state when no data is available.
     * This can be any icon name supported by the application's icon system.
     *
     * @type {string | undefined}
     * @default 'ti-database-exclamation'
     * @memberOf ListComponent
     */
    emptyIcon?: string;
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
    empty: Partial<IListEmptyResult>;
    /**
     * @description The current page number in paginated mode.
     * @summary Tracks which page is currently being displayed when the component
     * is in paginated mode. This is used for pagination controls and data fetching.
     *
     * @type {number}
     * @default 1
     * @memberOf ListComponent
     */
    page: number;
    /**
     * @description The total number of pages available.
     * @summary Stores the calculated total number of pages based on the data size
     * and limit. This is used for pagination controls and boundary checking.
     *
     * @type {number}
     * @memberOf ListComponent
     */
    pages: number;
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
    refreshing: boolean;
    /**
     * @description Array used for rendering skeleton loading placeholders.
     * @summary Contains placeholder items that are displayed during data loading.
     * The length of this array determines how many skeleton items are shown.
     *
     * @type {string[]}
     * @default new Array(2)
     * @memberOf ListComponent
     */
    skeletonData: string[];
    /**
     * @description The processed list items ready for display.
     * @summary Stores the current set of items being displayed in the list after
     * processing from the raw data source. This may be a subset of the full data
     * when using pagination or infinite scrolling.
     *
     * @type {KeyValue[]}
     * @memberOf ListComponent
     */
    items: KeyValue[];
    /**
     * @description The current search query value.
     * @summary Stores the text entered in the search bar. This is used to filter
     * the list data or to send as a search parameter when fetching new data.
     *
     * @type {string | undefined}
     * @memberOf ListComponent
     */
    searchValue?: string | IFilterQuery | undefined;
    /**
     * @description A paginator object for handling pagination operations.
     * @summary Provides a paginator object that can be used to retrieve and navigate
     * through data in chunks, reducing memory usage and improving performance.
     *
     * The paginator object is initialized in the `ngOnInit` lifecycle hook and is
     * used to fetch and display data in the pagination component. It is an instance
     * of the `Paginator` class from the `@decaf-ts/core` package, which provides
     * methods for querying and manipulating paginated data.
     *
     * @type {Paginator<Model>}
     * @memberOf PaginationComponent
     */
    paginator: Paginator<Model> | undefined;
    /**
     * @description The last page number that was displayed.
     * @summary Keeps track of the previously displayed page number, which is useful
     * for handling navigation and search operations in paginated mode.
     *
     * @type {number}
     * @default 1
     * @memberOf ListComponent
     */
    lastPage: number;
    /**
     * @description Event emitter for refresh operations.
     * @summary Emits an event when the list data is refreshed, either through pull-to-refresh
     * or programmatic refresh. The event includes the refreshed data and component information.
     *
     * @type {EventEmitter<BaseCustomEvent>}
     * @memberOf ListComponent
     */
    refreshEvent: EventEmitter<BaseCustomEvent>;
    /**
     * @description Event emitter for item click interactions.
     * @summary Emits an event when a list item is clicked. The event includes the data
     * of the clicked item, allowing parent components to respond to the interaction.
     *
     * @type {EventEmitter<KeyValue>}
     * @memberOf ListComponent
     */
    clickEvent: EventEmitter<ListItemCustomEvent | RendererCustomEvent>;
    /**
     * @description Subject for debouncing click events.
     * @summary Uses RxJS Subject to collect click events and emit them after a debounce
     * period. This prevents multiple rapid clicks from triggering multiple events.
     *
     * @private
     * @type {Subject<CustomEvent | ListItemCustomEvent | RendererCustomEvent>}
     * @memberOf ListComponent
     */
    private clickItemSubject;
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
    private observerSubjet;
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
    private observer;
    /**
     * @description List of available indexes for data querying and filtering.
     * @summary Provides a list of index names that can be used to optimize data querying and filtering
     * operations, especially in scenarios with large datasets.
     *
     * Indexes can significantly improve the performance of data retrieval by allowing the database
     * to quickly locate and retrieve relevant data based on indexed fields.
     *
     * @type {string[]}
     * @default []
     * @memberOf ListComponent
     */
    indexes: string[];
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
    constructor();
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
    ngOnInit(): Promise<void>;
    /**
     * @description Cleans up resources when the component is destroyed.
     * @summary Performs cleanup operations when the component is being removed from the DOM.
     * This includes clearing references to models and data to prevent memory leaks.
     *
     * @returns {void}
     * @memberOf ListComponent
     */
    ngOnDestroy(): void;
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
    observeRepository(...args: unknown[]): Promise<void>;
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
    handleObserveEvent(table: string, event: OperationKeys, uid: string | number): Promise<void>;
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
    trackItemFn(index: number, item: KeyValue | string | number): string | number;
    /**
     * Handles the create event from the repository.
     *
     * @param {string | number} uid - The ID of the item to create.
     * @returns {Promise<void>} A promise that resolves when the item is created and added to the list.
     */
    handleCreate(uid: string | number): Promise<void>;
    /**
     * @description Handles the update event from the repository.
     * @summary Updates the list item with the specified ID based on the new data.
     *
     * @param {string | number} uid - The ID of the item to update
     * @returns {Promise<void>}
     * @private
     * @memberOf ListComponent
     */
    handleUpdate(uid: string | number): Promise<void>;
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
    handleDelete(uid: string | number, pk?: string): void;
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
    handleClick(event: ListItemCustomEvent | RendererCustomEvent): void;
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
    handleSearch(value: string | IFilterQuery | undefined): Promise<void>;
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
    handleFilter(value: IFilterQuery | undefined): Promise<void>;
    /**
     * @description Clears the current search and resets the list.
     * @summary Convenience method that clears the search by calling handleSearch
     * with undefined. This resets the list to show all data without filtering.
     *
     * @returns {Promise<void>}
     * @memberOf ListComponent
     */
    clearSearch(): Promise<void>;
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
    refreshEventEmit(data?: KeyValue[]): void;
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
    private clickEventEmit;
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
    refresh(event?: InfiniteScrollCustomEvent | RefresherCustomEvent | boolean): Promise<void>;
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
    handlePaginate(event: PaginationCustomEvent): void;
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
    handleRefresh(event?: InfiniteScrollCustomEvent | CustomEvent): Promise<void>;
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
    parseSearchResults(results: KeyValue[], search: string): KeyValue[];
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
    getFromRequest(force: boolean | undefined, start: number, limit: number): Promise<KeyValue[]>;
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
    getFromModel(force?: boolean): Promise<KeyValue[]>;
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
    parseConditions(value: string | number | IFilterQuery): Condition<Model>;
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
    protected parseResult(result: KeyValue[] | Paginator<Model>): Promise<KeyValue[]>;
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
    getMoreData(length: number): void;
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
    protected itemMapper(item: KeyValue, mapper: KeyValue, props?: KeyValue): KeyValue;
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
    mapResults(data: KeyValue[]): KeyValue[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListComponent, "ngx-decaf-list", never, { "type": { "alias": "type"; "required": false; }; "translatable": { "alias": "translatable"; "required": false; }; "showSearchbar": { "alias": "showSearchbar"; "required": false; }; "data": { "alias": "data"; "required": false; }; "source": { "alias": "source"; "required": false; }; "start": { "alias": "start"; "required": false; }; "limit": { "alias": "limit"; "required": false; }; "loadMoreData": { "alias": "loadMoreData"; "required": false; }; "lines": { "alias": "lines"; "required": false; }; "inset": { "alias": "inset"; "required": false; }; "scrollThreshold": { "alias": "scrollThreshold"; "required": false; }; "scrollPosition": { "alias": "scrollPosition"; "required": false; }; "loadingText": { "alias": "loadingText"; "required": false; }; "showRefresher": { "alias": "showRefresher"; "required": false; }; "loadingSpinner": { "alias": "loadingSpinner"; "required": false; }; "enableFilter": { "alias": "enableFilter"; "required": false; }; "sortDirection": { "alias": "sortDirection"; "required": false; }; "sortBy": { "alias": "sortBy"; "required": false; }; "disableSort": { "alias": "disableSort"; "required": false; }; "emptyIcon": { "alias": "emptyIcon"; "required": false; }; "empty": { "alias": "empty"; "required": false; }; }, { "refreshEvent": "refreshEvent"; "clickEvent": "clickEvent"; }, never, ["*"], true, never>;
}
//# sourceMappingURL=list.component.d.ts.map