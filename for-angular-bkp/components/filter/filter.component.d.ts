import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { NgxBaseComponent } from '../../engine/NgxBaseComponent';
import { IFilterQuery, IFilterQueryItem } from '../../engine';
import { Subscription } from 'rxjs';
import { OrderDirection } from '@decaf-ts/core';
import * as i0 from "@angular/core";
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
export declare class FilterComponent extends NgxBaseComponent implements OnInit, OnDestroy {
    /**
     * @description Reference to the dropdown options container element.
     * @summary ViewChild reference used to access and manipulate the dropdown options element
     * for highlighting filtered items and managing visual feedback during option selection.
     * This element contains the filterable suggestions that users can interact with.
     *
     * @type {ElementRef}
     * @memberOf FilterComponent
     */
    optionsFilterElement: ElementRef;
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
    indexes: string[];
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
    conditions: string[];
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
    sortBy: string[];
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
    disableSort: boolean;
    /**
     * @description Current window width for responsive behavior.
     * @summary Stores the current browser window width in pixels. This value is updated
     * on window resize events to enable responsive filtering behavior and layout adjustments
     * based on available screen space.
     *
     * @type {number}
     * @memberOf FilterComponent
     */
    windowWidth: number;
    /**
     * @description Available options for the current filter step.
     * @summary Contains the list of options available for selection in the current step.
     * This array changes dynamically based on the current step: indexes → conditions → empty for value input.
     *
     * @type {string[]}
     * @default []
     * @memberOf FilterComponent
     */
    options: string[];
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
    filteredOptions: string[];
    /**
     * @description Complete filter objects created by the user.
     * @summary Array of complete filter objects, each containing index, condition, and value properties.
     * These represent the active filters that can be applied to data operations.
     *
     * @type {KeyValue[]}
     * @default []
     * @memberOf FilterComponent
     */
    filterValue: IFilterQueryItem[];
    /**
     * @description Current filter being constructed.
     * @summary Temporary object that accumulates filter properties (index, condition, value)
     * during the three-step filter creation process. Gets added to filterValue when complete.
     *
     * @type {KeyValue}
     * @default {}
     * @memberOf FilterComponent
     */
    lastFilter: IFilterQueryItem;
    /**
     * @description Current step in the filter creation process.
     * @summary Tracks the current step of filter creation: 1 = index selection, 2 = condition selection,
     * 3 = value input. Automatically resets to 1 after completing a filter.
     *
     * @type {number}
     * @default 1
     * @memberOf FilterComponent
     */
    step: number;
    /**
     * @description Controls dropdown visibility state.
     * @summary Boolean flag that determines whether the options dropdown is currently visible.
     * Used to manage the dropdown's open/close state and coordinate with focus/blur events.
     *
     * @type {boolean}
     * @default false
     * @memberOf FilterComponent
     */
    dropdownOpen: boolean;
    /**
     * @description Current input field value.
     * @summary Stores the current text input value that the user is typing. This value is
     * bound to the input field and is cleared after each successful filter step completion.
     *
     * @type {string}
     * @default ''
     * @memberOf FilterComponent
     */
    value: string;
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
    sortValue: string;
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
    sortDirection: OrderDirection;
    /**
     * @description Subscription for window resize events.
     * @summary RxJS subscription that listens for window resize events with debouncing
     * to update the windowWidth property. This enables responsive behavior and prevents
     * excessive updates during resize operations.
     *
     * @type {Subscription}
     * @memberOf FilterComponent
     */
    windowResizeSubscription: Subscription;
    /**
     * @description Browsing mode (dark or light).
     * @summary Indicates whether the dark mode theme is currently enabled.
     * Defaults to `false`.
     *
     * @type {boolean}
     * @memberOf FilterComponent
     */
    isDarkMode: boolean;
    /**
     * @description Event emitter for filter changes.
     * @summary Emits filter events when the user creates, modifies, or clears filters.
     * The emitted value contains an array of complete filter objects or undefined when
     * filters are cleared. Parent components listen to this event to update their data display.
     *
     * @type {EventEmitter<KeyValue[] | undefined>}
     * @memberOf FilterComponent
     */
    filterEvent: EventEmitter<IFilterQuery | undefined>;
    /**
     * @description Event emitter for search events.
     * @summary Emits search events when the user interacts with the searchbar.
     * @type {EventEmitter<string>}
     * @memberOf FilterComponent
     */
    searchEvent: EventEmitter<string>;
    /**
     * @description Constructor for FilterComponent.
     * @summary Initializes a new instance of the FilterComponent.
     * Calls the parent constructor with the component name to establish base locale string generation
     * and internationalization support.
     *
     * @memberOf FilterComponent
     */
    constructor();
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
    ngOnInit(): Promise<void>;
    /**
     * @description Retrieves and configures available indexes for filtering and sorting.
     * @summary Extracts field indexes from the model if available and merges them with
     * sorting options when sorting is enabled. This method sets up the available field
     * options for both filtering and sorting operations based on the model structure.
     *
     * @returns {void}
     * @memberOf FilterComponent
     */
    getIndexes(): void;
    /**
     * @description Cleanup method called when the component is destroyed.
     * @summary Unsubscribes from window resize events to prevent memory leaks.
     * This is essential for proper cleanup of RxJS subscriptions when the component
     * is removed from the DOM.
     *
     * @returns {void}
     * @memberOf FilterComponent
     */
    ngOnDestroy(): void;
    /**
     * @description Handles input events from the text field.
     * @summary Processes user input and filters the available options based on the typed value.
     * This method provides real-time filtering of suggestions as the user types in the input field.
     *
     * @param {InputEvent} event - The input event containing the new value
     * @returns {void}
     * @memberOf FilterComponent
     */
    handleInput(event: InputEvent): void;
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
    handleFocus(options?: string[]): void;
    /**
     * @description Handles blur events on the input field with delayed closing.
     * @summary Manages the dropdown closing behavior with a delay to allow for option selection.
     * Uses a two-phase approach to prevent premature closing when users click on dropdown options.
     *
     * @param {boolean} close - Internal flag to control the closing phase
     * @returns {void}
     * @memberOf FilterComponent
     */
    handleBlur(close?: boolean): void;
    /**
     * @description Determines the appropriate options based on the current filter step.
     * @summary Returns the contextually relevant options for the current step in the filter creation process.
     * Step 1 shows indexes, Step 2 shows conditions, Step 3 shows no options (value input).
     *
     * @returns {string[]} Array of options appropriate for the current step
     * @memberOf FilterComponent
     */
    getOptions(): string[];
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
    addFilter(value: string, event?: CustomEvent): void;
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
    selectOption(value: string): void;
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
    allowClear(option: string): boolean;
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
    removeFilter(filter: string): void;
    /**
     * @description Resets the component to its initial state.
     * @summary Clears all filter data, options, and resets the step counter to 1.
     * This method provides a clean slate for new filter creation without emitting events.
     *
     * @returns {void}
     * @memberOf FilterComponent
     */
    reset(): void;
    /**
     * @description Clears all filters and notifies parent components.
     * @summary Resets the component state and emits undefined to notify parent components
     * that all filters have been cleared. This triggers any connected data refresh logic.
     *
     * @param {string} value - Optional parameter (currently unused)
     * @returns {void}
     * @memberOf FilterComponent
     */
    clear(value?: string): void;
    /**
     * @description Submits the current filter collection to parent components.
     * @summary Emits the current filter array to parent components when filters are ready
     * to be applied. Only emits if there are active filters. Clears options after submission.
     *
     * @returns {void}
     * @memberOf FilterComponent
     */
    submit(): void;
    /**
     * @description Toggles the sort direction between ascending and descending.
     * @summary Handles sort direction changes by toggling between ASC and DSC values.
     * When the direction changes, automatically triggers a submit to apply the new
     * sorting configuration to the filtered results.
     *
     * @returns {void}
     * @memberOf FilterComponent
     */
    handleSortDirectionChange(): void;
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
    handleSortChange(event: CustomEvent): void;
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
    filterOptions(value: string | null | undefined): string[];
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
    handleSearch(value: string | undefined): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterComponent, "ngx-decaf-filter", never, { "indexes": { "alias": "indexes"; "required": false; }; "conditions": { "alias": "conditions"; "required": false; }; "sortBy": { "alias": "sortBy"; "required": false; }; "disableSort": { "alias": "disableSort"; "required": false; }; }, { "filterEvent": "filterEvent"; "searchEvent": "searchEvent"; }, never, never, true, never>;
}
//# sourceMappingURL=filter.component.d.ts.map