import { AfterViewInit, OnInit } from '@angular/core';
import { HandlerLike, HTMLFormTarget, KeyValue } from '../../engine';
import { CrudOperations, OperationKeys } from '@decaf-ts/db-decorators';
import { IonAccordionGroup, ItemReorderEventDetail } from '@ionic/angular/standalone';
import { FormArray } from '@angular/forms';
import { NgxBaseComponent } from '../../engine';
import { IFieldSetItem, IFieldSetValidationEvent } from '../../engine/interfaces';
import * as i0 from "@angular/core";
/**
 * @description Dynamic fieldset component with collapsible accordion functionality.
 * @summary This component provides a sophisticated fieldset container that automatically
 * adapts its behavior based on CRUD operations. It integrates seamlessly with Ionic's
 * accordion components to create expandable/collapsible sections for organizing form
 * content and related information. The component intelligently determines its initial
 * state based on the operation type, opening automatically for READ and DELETE operations
 * while remaining closed for CREATE and UPDATE operations.
 *
 * @example
 * ```html
 * <!-- Basic usage with automatic state management -->
 * <ngx-decaf-fieldset
 *   name="Personal Information"
 *   [operation]="OperationKeys.READ"
 *   target="_self">
 *   <ion-input label="Name" placeholder="Enter name"></ion-input>
 *   <ion-input label="Email" type="email" placeholder="Enter email"></ion-input>
 * </ngx-decaf-fieldset>
 *
 * <!-- Advanced usage with custom operation -->
 * <ngx-decaf-fieldset
 *   name="Contact Details"
 *   [operation]="currentOperation"
 *   target="_blank">
 *   <!-- Complex form fields -->
 * </ngx-decaf-fieldset>
 * ```
 *
 * @mermaid
 * sequenceDiagram
 *   participant U as User
 *   participant F as FieldsetComponent
 *   participant I as Ionic Accordion
 *   participant D as DOM
 *
 *   F->>F: ngAfterViewInit()
 *   alt operation is READ or DELETE
 *     F->>F: Set isOpen = true
 *     F->>D: Query accordion element
 *     F->>I: Set value attribute to 'open'
 *     F->>F: Trigger change detection
 *   end
 *   U->>I: Click accordion header
 *   I->>F: handleChange(event)
 *   F->>F: Update isOpen state
 *   F->>I: Reflect new state
 *
 * @memberOf ForAngularModule
 */
export declare class FieldsetComponent extends NgxBaseComponent implements OnInit, AfterViewInit {
    /**
     * @description Reference to the ion-accordion-group component for programmatic control.
     * @summary ViewChild reference that provides direct access to the Ionic accordion group component.
     * This enables programmatic control over the accordion's expand/collapse state, allowing
     * the component to open/close the accordion based on validation errors, CRUD operations,
     * or other business logic requirements.
     *
     * @type {IonAccordionGroup}
     * @memberOf FieldsetComponent
     */
    accordionComponent: IonAccordionGroup;
    /**
     * @description The display name or title of the fieldset section.
     * @summary Sets the legend or header text that appears in the accordion header. This text
     * provides a clear label for the collapsible section, helping users understand what content
     * is contained within. The name is displayed prominently and serves as the clickable area
     * for expanding/collapsing the fieldset.
     *
     * @type {string}
     * @default 'Child'
     * @memberOf FieldsetComponent
     */
    name: string;
    /**
     * @description The parent component identifier for hierarchical fieldset relationships.
     * @summary Specifies the parent component name that this fieldset belongs to in a hierarchical
     * form structure. This property is used for event bubbling and establishing parent-child
     * relationships between fieldsets in complex forms with nested structures.
     *
     * @type {string}
     * @default 'Child'
     * @memberOf FieldsetComponent
     */
    childOf: string;
    /**
     * @description The parent component identifier for hierarchical fieldset relationships.
     * @summary Specifies the parent component name that this fieldset belongs to in a hierarchical
     * form structure. This property is used for event bubbling and establishing parent-child
     * relationships between fieldsets in complex forms with nested structures.
     *
     * @type {string}
     * @default 'Child'
     * @memberOf FieldsetComponent
     */
    uid: string;
    /**
     * @description Custom type definitions for specialized fieldset behavior.
     * @summary Defines custom data types or validation rules that should be applied to this fieldset.
     * Can be a single type string or array of types that determine how the fieldset handles
     * data validation, formatting, and display behavior for specialized use cases.
     *
     * @type {string | string[]}
     * @memberOf FieldsetComponent
     */
    customTypes: string | string[];
    /**
     * @description The current CRUD operation context.
     * @summary Determines the component's initial behavior and state based on the current operation.
     * This input is crucial for auto-state management: READ and DELETE operations automatically
     * open the fieldset to show content, while CREATE and UPDATE operations keep it closed
     * initially. This provides an intuitive user experience aligned with operation semantics.
     *
     * @type {OperationKeys}
     * @default OperationKeys.READ
     * @memberOf FieldsetComponent
     */
    /**
     * @description The CRUD operation type for the current fieldset context.
     * @summary Determines the component's initial behavior and state based on the current operation.
     * This input is crucial for auto-state management: READ and DELETE operations automatically
     * open the fieldset to show content, while CREATE and UPDATE operations keep it closed
     * initially. This provides an intuitive user experience aligned with operation semantics.
     *
     * @type {OperationKeys}
     * @default OperationKeys.READ
     * @memberOf FieldsetComponent
     */
    operation: OperationKeys;
    /**
     * @description Reactive form group associated with this fieldset.
     * @summary The FormGroup instance that contains all form controls within this fieldset.
     * Used for form validation, value management, and integration with Angular's reactive forms.
     *
     * @type {FormGroup}
     * @memberOf FieldsetComponent
     */
    formGroup: FormArray;
    /**
     * @description Primary title text for the fieldset content.
     * @summary Display title used for fieldset identification and content organization.
     * Provides semantic meaning to the grouped form fields.
     *
     * @type {string}
     * @memberOf FieldsetComponent
     */
    title: string;
    /**
     * @description Secondary descriptive text for the fieldset.
     * @summary Additional information that provides context or instructions
     * related to the fieldset content and purpose.
     *
     * @type {string}
     * @memberOf FieldsetComponent
     */
    description: string;
    /**
     * @description Form target attribute for nested form submissions.
     * @summary Specifies where to display the response after submitting forms contained within
     * the fieldset. This attribute mirrors the HTML form target behavior, allowing control over
     * whether form submissions open in the same window, new window, or specific frame. Useful
     * for complex form workflows and multi-step processes.
     *
     * @type {HTMLFormTarget}
     * @default '_self'
     * @memberOf FieldsetComponent
     */
    target: HTMLFormTarget;
    /**
     * @description Enables multiple item management within the fieldset.
     * @summary Boolean flag that determines if the fieldset supports adding multiple values.
     * When true, displays a reorderable list of items with add/remove functionality.
     *
     * @type {boolean}
     * @default false
     * @memberOf FieldsetComponent
     */
    multiple: boolean;
    /**
     * @description Array of raw values stored in the fieldset.
     * @summary Contains the actual data values that have been added to the fieldset.
     * This is the source of truth for the fieldset's data state.
     *
     * @type {KeyValue[]}
     * @default []
     * @memberOf FieldsetComponent
     */
    value: KeyValue[];
    /**
     * @description Event handler functions for custom fieldset actions.
     * @summary A record of event handler functions keyed by event names that can be triggered
     * within the fieldset. These handlers provide extensibility for custom business logic
     * and can be invoked for various fieldset operations and user interactions.
     *
     * @type {HandlerLike}
     * @memberOf FieldsetComponent
     */
    handlers: HandlerLike;
    /**
     * @description Array of formatted items for UI display.
     * @summary Contains the processed items ready for display in the component template.
     * These items are mapped from the raw values using the mapper configuration.
     *
     * @type {IFieldSetItem[]}
     * @default []
     * @memberOf FieldsetComponent
     */
    items: IFieldSetItem[];
    /**
     * @description Currently selected item for update operations.
     * @summary Holds the item being edited when in update mode. Used to track
     * which item is being modified and apply changes to the correct item.
     *
     * @type {IFieldSetItem | undefined}
     * @memberOf FieldsetComponent
     */
    updatingItem: IFieldSetItem | undefined;
    /**
     * @description Current state of the accordion (expanded or collapsed).
     * @summary Boolean flag that tracks whether the fieldset accordion is currently open or closed.
     * This property is automatically managed based on user interactions and initial operation state.
     * It serves as the single source of truth for the component's visibility state and is used
     * to coordinate between user actions and programmatic state changes. The value is automatically
     * set based on CRUD operations during initialization and updated through user interactions.
     *
     * @type {boolean}
     * @default false
     * @memberOf FieldsetComponent
     */
    isOpen: boolean;
    /**
     * @description Indicates whether the fieldset contains required form fields.
     * @summary Boolean flag that signals the presence of mandatory input fields within the fieldset.
     * This property is automatically set by the CollapsableDirective when required fields are detected,
     * and can be used to apply special styling, validation logic, or UI indicators to highlight
     * fieldsets that contain mandatory information. It helps with form validation feedback and
     * user experience by making required sections more prominent.
     *
     * @type {boolean}
     * @default false
     * @memberOf FieldsetComponent
     */
    isRequired: boolean;
    /**
     * @description Indicates whether the fieldset contains validation errors.
     * @summary Boolean flag that tracks if any form fields within the fieldset have validation errors.
     * This property is used to control accordion behavior when errors are present, preventing
     * users from collapsing the accordion when they need to see and address validation issues.
     * It's automatically updated when validation error events are received from child form fields.
     *
     * @type {boolean}
     * @default false
     * @memberOf FieldsetComponent
     */
    hasValidationErrors: boolean;
    /**
     * @description Validation error message for duplicate values.
     * @summary Stores the error message when a user attempts to add a duplicate value
     * to the fieldset. Used to display uniqueness validation feedback.
     *
     * @type {string | undefined}
     * @memberOf FieldsetComponent
     */
    isUniqueError: string | undefined;
    /**
     * @description Reference to CRUD operation constants for template usage.
     * @summary Exposes the OperationKeys enum to the component template, enabling conditional
     * rendering and behavior based on operation types. This protected readonly property ensures
     * that template logic can access operation constants while maintaining encapsulation and
     * preventing accidental modification of the enum values.
     *
     * @type {CrudOperations}
     * @default OperationKeys.CREATE
     * @memberOf FieldsetComponent
     */
    protected readonly OperationKeys: CrudOperations;
    /**
     * @description Angular change detection service.
     * @summary Injected service that provides manual control over change detection cycles.
     * This is essential for ensuring that programmatic DOM changes (like setting accordion
     * attributes) are properly reflected in the component's state and trigger appropriate
     * view updates when modifications occur outside the normal Angular change detection flow.
     *
     * @private
     * @type {ChangeDetectorRef}
     * @memberOf FieldsetComponent
     */
    private changeDetectorRef;
    /**
     * @description Angular Renderer2 service for safe DOM manipulation.
     * @summary Injected service that provides a safe, platform-agnostic way to manipulate DOM elements.
     * This service ensures proper handling of DOM operations across different platforms and environments,
     * including server-side rendering and web workers.
     *
     * @private
     * @type {Renderer2}
     * @memberOf FieldsetComponent
     */
    private renderer;
    /**
     * @description Translation service for internationalization.
     * @summary Injected service that provides translation capabilities for UI text.
     * Used to translate button labels and validation messages based on the current locale.
     *
     * @private
     * @type {TranslateService}
     * @memberOf FieldsetComponent
     */
    private translateService;
    /**
     * @description Localized label text for action buttons.
     * @summary Dynamic button label that changes based on the current operation mode.
     * Shows "Add" for create operations and "Update" for edit operations.
     *
     * @type {string}
     * @memberOf FieldsetComponent
     */
    buttonLabel: string;
    /**
     * @description Localized label text for action buttons.
     * @summary Dynamic button label that changes based on the current operation mode.
     * Shows "Cancel" for update operations
     *
     * @type {string}
     * @memberOf FieldsetComponent
     */
    buttonCancelLabel: string;
    /**
     * @description Component constructor that initializes the fieldset with icons and component name.
     * @summary Calls the parent NgxBaseComponent constructor with the component name and
     * required Ionic icons (alertCircleOutline for validation errors and createOutline for add actions).
     * Sets up the foundational component structure and icon registry.
     *
     * @memberOf FieldsetComponent
     */
    constructor();
    /**
     * @description Component initialization lifecycle method.
     * @summary Initializes the component by setting up repository relationships if a model exists,
     * and configures the initial button label for the add action based on the current locale.
     * This method ensures proper setup of translation services and component state.
     *
     * @returns {void}
     * @memberOf FieldsetComponent
     */
    ngOnInit(): void;
    /**
    * @description Initializes the component state after view and child components are rendered.
    * @summary This lifecycle hook implements intelligent auto-state management based on the current
    * CRUD operation. For READ and DELETE operations, the fieldset automatically opens to provide
    * immediate access to information, while CREATE and UPDATE operations keep it closed to maintain
    * a clean initial interface. The method directly manipulates the DOM to ensure proper accordion
    * synchronization and triggers change detection to reflect the programmatic state changes.
    *
    * @mermaid
    * sequenceDiagram
    *   participant A as Angular Lifecycle
    *   participant F as FieldsetComponent
    *   participant D as DOM
    *   participant C as ChangeDetector
    *
    *   A->>F: ngAfterViewInit()
    *   alt operation is READ or DELETE
    *     F->>F: Set isOpen = true
    *     F->>D: Query ion-accordion-group element
    *     alt accordion element exists
    *       F->>D: Set value attribute to 'open'
    *     end
    *   end
    *   F->>C: detectChanges()
    *   C->>F: Update view with new state
    *
    * @returns {void}
    * @memberOf FieldsetComponent
    */
    ngAfterViewInit(): void;
    /**
     * @description Handles removal of the fieldset with slide animation.
     * @summary Initiates the removal process for the fieldset with a smooth slide-up animation.
     * The method applies CSS classes for the slide animation and then safely removes the
     * element from the DOM using Renderer2. This provides a polished user experience
     * when removing fieldset instances from dynamic forms.
     *
     * @param {Event} event - DOM event from the remove button click
     * @returns {void}
     * @memberOf FieldsetComponent
     */
    handleRemoveComponent(event: Event): void;
    /**
     * @description Handles creating new items or triggering group addition events.
     * @summary Processes form validation events for item creation or emits events to trigger
     * the addition of new fieldset groups. When called with validation event data, it validates
     * uniqueness and adds the item to the fieldset. When called without parameters, it triggers
     * a group addition event for parent components to handle.
     *
     * @param {CustomEvent<IFieldSetValidationEvent>} [event] - Optional validation event containing form data
     * @returns {Promise<void>}
     * @memberOf FieldsetComponent
     *
     * @example
     * ```typescript
     * // Called from form validation
     * handleCreateItem(validationEvent);
     *
     * // Called to trigger group addition
     * handleCreateItem();
     * ```
     */
    handleCreateItem(event?: CustomEvent<IFieldSetValidationEvent>): Promise<void>;
    /**
     * @description Handles item update operations with form state management.
     * @summary Locates an item in the form array for editing and prepares the component
     * for update mode. Updates the button label to reflect the edit state and stores
     * the item being updated. Triggers a window event to notify parent components.
     *
     * @param {string | number} value - The identifier value of the item to update
     * @param {number} index - The array index position of the item
     * @returns {void}
     * @memberOf FieldsetComponent
     */
    handleUpdateItem(value: string | number, index: number): void;
    /**
     * @description Cancels the update mode and resets the UI state.
     * @summary Exits the update mode by resetting the button label and clearing the updating item,
     * restoring the component to its default state for adding new items. Notifies parent components
     * that the update operation has been cancelled.
     *
     * @returns {void}
     * @memberOf FieldsetComponent
     */
    handleCancelUpdateItem(): void;
    /**
     * @description Handles item removal operations with form array management.
     * @summary Processes item removal by either handling validation events or removing specific
     * items from the form array. When called with a validation event, it triggers value updates.
     * When called with an identifier, it locates and removes the matching item from the form array.
     *
     * @param {string | undefined} value - The identifier of the item to remove
     * @param {CustomEvent} [event] - Optional validation event for form updates
     * @returns {void}
     * @memberOf FieldsetComponent
     */
    handleRemoveItem(value: string | undefined, event?: CustomEvent): void;
    /**
     * @description Handles reordering of items within the fieldset list.
     * @summary Processes drag-and-drop reorder events from the ion-reorder-group component.
     * Updates both the display items array and the underlying value array to maintain
     * consistency between UI state and data state. Preserves item indices after reordering.
     *
     * @param {CustomEvent<ItemReorderEventDetail>} event - Ionic reorder event containing source and target indices
     * @returns {void}
     * @memberOf FieldsetComponent
     *
     * @example
     * ```html
     * <ion-reorder-group (ionItemReorder)="handleReorder($event)">
     *   <!-- Reorderable items -->
     * </ion-reorder-group>
     * ```
     */
    handleReorderItems(event: CustomEvent<ItemReorderEventDetail>): void;
    /**
     * @description Handles accordion state change events from user interactions.
     * @summary Processes CustomEvent objects triggered when users expand or collapse the accordion.
     * This method extracts the new state from the event details and updates the component's
     * internal state accordingly. It specifically listens for ION-ACCORDION-GROUP events to
     * ensure proper event source validation and prevent handling of unrelated events.
     *
     * @param {CustomEvent} event - The event object containing accordion state change details
     * @returns {void}
     *
     * @mermaid
     * sequenceDiagram
     *   participant U as User
     *   participant I as Ion-Accordion
     *   participant F as FieldsetComponent
     *
     *   U->>I: Click accordion header
     *   I->>F: handleChange(CustomEvent)
     *   F->>F: Extract target and detail from event
     *   F->>F: Validate target is ION-ACCORDION-GROUP
     *   alt valid target
     *     F->>F: Update isOpen = !!value
     *   end
     *   F->>I: Reflect updated state
     *
     * @memberOf FieldsetComponent
     */
    /**
     * @description Handles accordion toggle functionality with validation error consideration.
     * @summary Manages the expand/collapse state of the accordion while respecting validation error states.
     * When validation errors are present, the accordion cannot be collapsed to ensure users can see
     * and address the errors. When no errors exist, users can freely toggle the accordion state.
     * This method also stops event propagation to prevent unwanted side effects.
     *
     * @param {CustomEvent} [event] - Optional event object from user interaction
     * @returns {void}
     * @memberOf FieldsetComponent
     */
    handleAccordionToggle(event?: CustomEvent): void;
    /**
     * @description Handles validation error events from child form fields.
     * @summary Processes validation error events dispatched by form fields within the fieldset.
     * When errors are detected, the accordion is forced open and prevented from collapsing
     * to ensure users can see the validation messages. This method updates the component's
     * error state and accordion visibility accordingly.
     *
     * @param {CustomEvent} event - Custom event containing validation error details
     * @returns {void}
     * @memberOf FieldsetComponent
     */
    handleValidationError(event: CustomEvent): void;
    /**
     * @description Processes and stores a new or updated value in the fieldset.
     * @summary Handles both create and update operations for fieldset items. Parses and cleans
     * the input value, determines the operation type based on the updating state, and either
     * adds a new item or updates an existing one. Maintains data integrity and UI consistency.
     *
     * @returns {void}
     * @private
     * @memberOf FieldsetComponent
     */
    private setValue;
    /**
     * @description Automatically configures the field mapping based on the value structure.
     * @summary Analyzes the provided value object to automatically determine the primary key
     * and create appropriate field mappings for display purposes. Sets up the mapper object
     * with title, description, and index fields based on the available data structure.
     *
     * @param {KeyValue} value - Sample value object used to determine field mappings
     * @returns {KeyValue} The configured mapper object
     * @private
     * @memberOf FieldsetComponent
     */
    private getMapper;
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldsetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FieldsetComponent, "ngx-decaf-fieldset", never, { "name": { "alias": "name"; "required": false; }; "childOf": { "alias": "childOf"; "required": false; }; "uid": { "alias": "uid"; "required": false; }; "customTypes": { "alias": "customTypes"; "required": false; }; "operation": { "alias": "operation"; "required": false; }; "formGroup": { "alias": "formGroup"; "required": false; }; "title": { "alias": "title"; "required": false; }; "description": { "alias": "description"; "required": false; }; "target": { "alias": "target"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "value": { "alias": "value"; "required": false; }; "handlers": { "alias": "handlers"; "required": false; }; }, {}, never, ["*"], true, never>;
}
//# sourceMappingURL=fieldset.component.d.ts.map