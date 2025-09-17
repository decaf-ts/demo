import { __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, inject, Input, ViewChild, Renderer2 } from '@angular/core';
import { Dynamic, EventConstants } from '../../engine';
import { OperationKeys } from '@decaf-ts/db-decorators';
import { ForAngularModule } from '../../for-angular.module';
import { CollapsableDirective } from '../../directives/collapsable.directive';
import { IonAccordion, IonAccordionGroup, IonButton, IonItem, IonLabel, IonList, IonReorderGroup, IonReorder } from '@ionic/angular/standalone';
import { cleanSpaces, generateRandomValue, itemMapper, windowEventEmitter } from '../../helpers';
import { FormArray } from '@angular/forms';
import { NgxBaseComponent } from '../../engine';
import { alertCircleOutline, createOutline } from 'ionicons/icons';
import { TranslateService } from '@ngx-translate/core';
import { addIcons } from 'ionicons';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular/standalone";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "@ngx-translate/core";
const _c0 = ["accordionComponent"];
const _c1 = ["*"];
const _forTrack0 = ($index, $item) => $item.index;
const _c2 = (a0, a1) => ({ "open": a0, "hasValidationErrors": a1 });
const _c3 = () => ["create", "update"];
const _c4 = a0 => ({ "not-unique": a0 });
const _c5 = a0 => ({ "updating": a0 });
const _c6 = a0 => ({ value: a0 });
function FieldsetComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8)(1, "ion-button", 12);
    i0.ɵɵlistener("click", function FieldsetComponent_Conditional_11_Template_ion_button_click_1_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.handleRemoveComponent($event)); });
    i0.ɵɵelement(2, "ion-icon", 13);
    i0.ɵɵelementEnd()();
} }
function FieldsetComponent_Conditional_13_For_4_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-reorder", 16);
    i0.ɵɵelement(1, "ion-icon", 19);
    i0.ɵɵelementEnd();
} }
function FieldsetComponent_Conditional_13_For_4_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelement(1, "ion-icon", 20);
    i0.ɵɵelementEnd();
} }
function FieldsetComponent_Conditional_13_For_4_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "br");
    i0.ɵɵelementStart(1, "ion-text", 21);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r5.description);
} }
function FieldsetComponent_Conditional_13_For_4_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-button", 12);
    i0.ɵɵlistener("click", function FieldsetComponent_Conditional_13_For_4_Conditional_6_Template_ion_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r6 = i0.ɵɵnextContext(); const item_r5 = ctx_r6.$implicit; const $index_r8 = ctx_r6.$index; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.handleUpdateItem(item_r5.title, $index_r8)); });
    i0.ɵɵelement(1, "ion-icon", 22);
    i0.ɵɵelementEnd();
} }
function FieldsetComponent_Conditional_13_For_4_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-button", 12);
    i0.ɵɵlistener("click", function FieldsetComponent_Conditional_13_For_4_Conditional_7_Template_ion_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const item_r5 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.handleRemoveItem(item_r5.title)); });
    i0.ɵɵelement(1, "ion-icon", 13);
    i0.ɵɵelementEnd();
} }
function FieldsetComponent_Conditional_13_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-item", 15);
    i0.ɵɵtemplate(1, FieldsetComponent_Conditional_13_For_4_Conditional_1_Template, 2, 0, "ion-reorder", 16)(2, FieldsetComponent_Conditional_13_For_4_Conditional_2_Template, 2, 0, "div", 16);
    i0.ɵɵelementStart(3, "ion-label", 17);
    i0.ɵɵtext(4);
    i0.ɵɵtemplate(5, FieldsetComponent_Conditional_13_For_4_Conditional_5_Template, 3, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, FieldsetComponent_Conditional_13_For_4_Conditional_6_Template, 2, 0, "ion-button", 18)(7, FieldsetComponent_Conditional_13_For_4_Conditional_7_Template, 2, 0, "ion-button", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(10, _c4, item_r5.title === ctx_r2.isUniqueError))("button", false)("ngClass", i0.ɵɵpureFunction1(12, _c5, (ctx_r2.updatingItem == null ? null : ctx_r2.updatingItem[ctx_r2.pk]) === item_r5.title));
    i0.ɵɵadvance();
    i0.ɵɵconditional((ctx_r2.items == null ? null : ctx_r2.items.length) > 1 && !ctx_r2.updatingItem ? 1 : 2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("color", item_r5.title === ctx_r2.isUniqueError && !ctx_r2.updatingItem.title === item_r5.title ? "danger" : "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", item_r5.index, ". ", item_r5.title, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional((item_r5.description == null ? null : item_r5.description.length) > 0 ? 5 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(!ctx_r2.updatingItem || (ctx_r2.updatingItem == null ? null : ctx_r2.updatingItem[ctx_r2.pk]) !== item_r5.title ? 6 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(!ctx_r2.updatingItem ? 7 : -1);
} }
function FieldsetComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-list", 10)(1, "ion-reorder-group", 14, 1);
    i0.ɵɵlistener("ionItemReorder", function FieldsetComponent_Conditional_13_Template_ion_reorder_group_ionItemReorder_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.handleReorderItems($event)); });
    i0.ɵɵrepeaterCreate(3, FieldsetComponent_Conditional_13_For_4_Template, 8, 14, "ion-item", 15, _forTrack0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroup", ctx_r2.formGroup.parent)("disabled", ctx_r2.updatingItem);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r2.items);
} }
function FieldsetComponent_Conditional_15_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23)(1, "div", 27)(2, "div", 28);
    i0.ɵɵelement(3, "ion-icon", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 7)(5, "ion-text", 30);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("style", "max-width: 50px", i0.ɵɵsanitizeStyle);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(7, 2, ctx_r2.locale + ".not_unique", i0.ɵɵpureFunction1(5, _c6, ctx_r2.isUniqueError)));
} }
function FieldsetComponent_Conditional_15_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-button", 31);
    i0.ɵɵlistener("click", function FieldsetComponent_Conditional_15_Conditional_2_Template_ion_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.handleCancelUpdateItem()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.buttonCancelLabel, " ");
} }
function FieldsetComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵtemplate(0, FieldsetComponent_Conditional_15_Conditional_0_Template, 8, 7, "div", 23);
    i0.ɵɵelementStart(1, "div", 11);
    i0.ɵɵtemplate(2, FieldsetComponent_Conditional_15_Conditional_2_Template, 2, 1, "ion-button", 24);
    i0.ɵɵelementStart(3, "ion-button", 25);
    i0.ɵɵlistener("click", function FieldsetComponent_Conditional_15_Template_ion_button_click_3_listener() { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.handleCreateItem()); });
    i0.ɵɵelement(4, "ion-icon", 26);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵconditional(ctx_r2.isUniqueError ? 0 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r2.updatingItem ? 2 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.buttonLabel, " ");
} }
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
let FieldsetComponent = class FieldsetComponent extends NgxBaseComponent {
    /**
     * @description Component constructor that initializes the fieldset with icons and component name.
     * @summary Calls the parent NgxBaseComponent constructor with the component name and
     * required Ionic icons (alertCircleOutline for validation errors and createOutline for add actions).
     * Sets up the foundational component structure and icon registry.
     *
     * @memberOf FieldsetComponent
     */
    constructor() {
        super('FieldsetComponent');
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
        this.name = 'Child';
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
        this.childOf = 'Child';
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
        this.uid = generateRandomValue(12);
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
        this.operation = OperationKeys.READ;
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
        this.target = '_self';
        /**
         * @description Enables multiple item management within the fieldset.
         * @summary Boolean flag that determines if the fieldset supports adding multiple values.
         * When true, displays a reorderable list of items with add/remove functionality.
         *
         * @type {boolean}
         * @default false
         * @memberOf FieldsetComponent
         */
        this.multiple = false;
        /**
         * @description Array of raw values stored in the fieldset.
         * @summary Contains the actual data values that have been added to the fieldset.
         * This is the source of truth for the fieldset's data state.
         *
         * @type {KeyValue[]}
         * @default []
         * @memberOf FieldsetComponent
         */
        this.value = [];
        /**
         * @description Array of formatted items for UI display.
         * @summary Contains the processed items ready for display in the component template.
         * These items are mapped from the raw values using the mapper configuration.
         *
         * @type {IFieldSetItem[]}
         * @default []
         * @memberOf FieldsetComponent
         */
        this.items = [];
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
        this.isOpen = false;
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
        this.isRequired = false;
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
        this.hasValidationErrors = false;
        /**
         * @description Validation error message for duplicate values.
         * @summary Stores the error message when a user attempts to add a duplicate value
         * to the fieldset. Used to display uniqueness validation feedback.
         *
         * @type {string | undefined}
         * @memberOf FieldsetComponent
         */
        this.isUniqueError = undefined;
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
        this.OperationKeys = OperationKeys.CREATE;
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
        this.changeDetectorRef = inject(ChangeDetectorRef);
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
        this.renderer = inject(Renderer2);
        /**
         * @description Translation service for internationalization.
         * @summary Injected service that provides translation capabilities for UI text.
         * Used to translate button labels and validation messages based on the current locale.
         *
         * @private
         * @type {TranslateService}
         * @memberOf FieldsetComponent
         */
        this.translateService = inject(TranslateService);
        addIcons({ alertCircleOutline, createOutline });
    }
    /**
     * @description Component initialization lifecycle method.
     * @summary Initializes the component by setting up repository relationships if a model exists,
     * and configures the initial button label for the add action based on the current locale.
     * This method ensures proper setup of translation services and component state.
     *
     * @returns {void}
     * @memberOf FieldsetComponent
     */
    ngOnInit() {
        if (this.model)
            this._repository = this.repository;
        this.buttonLabel = this.translateService.instant(this.locale + '.add');
        this.buttonCancelLabel = this.translateService.instant(this.locale + '.cancel');
    }
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
    ngAfterViewInit() {
        if (this.operation === OperationKeys.READ || this.operation === OperationKeys.DELETE) {
            this.isOpen = true;
            // hidden remove button
            const accordionElement = this.component?.nativeElement.querySelector('ion-accordion-group');
            if (this.accordionComponent)
                this.renderer.setAttribute(accordionElement, 'value', 'open');
        }
        else {
            const inputs = this.component?.nativeElement.querySelectorAll('[required]');
            this.isRequired = inputs.length > 0;
            if (this.isRequired) {
                this.accordionComponent.value = 'open';
                this.handleAccordionToggle();
            }
        }
        this.changeDetectorRef.detectChanges();
    }
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
    handleRemoveComponent(event) {
        event.stopImmediatePropagation();
        this.component.nativeElement.classList.add('dcf-animation', 'dcf-animation-slide-top-medium', 'dcf-animation-reverse', 'dcf-animation-fast');
        setTimeout(() => {
            // Use Renderer2 to safely remove the element
            const parent = this.renderer.parentNode(this.component.nativeElement);
            if (parent)
                this.renderer.removeChild(parent, this.component.nativeElement);
        }, 150);
    }
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
    async handleCreateItem(event) {
        if (event && event instanceof CustomEvent) {
            event.stopImmediatePropagation();
            const { formGroup, value, isValid } = event.detail;
            this.formGroup = formGroup;
            if (!this.mapper)
                this.mapper = this.getMapper(value);
            if (isValid) {
                this.isUniqueError = undefined;
                this.buttonLabel = this.translateService.instant(this.locale + '.add');
                this.setValue();
            }
            else {
                this.isUniqueError = value?.[this.pk] || undefined;
            }
        }
        else {
            windowEventEmitter(EventConstants.FIELDSET_ADD_GROUP, {
                component: this.component.nativeElement,
                index: this.updatingItem ? this.updatingItem.index : this.value?.length,
                parent: this.childOf,
                operation: !this.updatingItem ? OperationKeys.CREATE : OperationKeys.UPDATE
            });
        }
    }
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
    handleUpdateItem(value, index) {
        const item = this.formGroup.controls.find(control => `${control.get(this.pk)?.value}`.toLowerCase() === cleanSpaces(`${value}`, true));
        if (item) {
            this.buttonLabel = this.translateService.instant(this.locale + '.update');
            this.updatingItem = Object.assign({}, item.value || {}, { index });
            windowEventEmitter(EventConstants.FIELDSET_UPDATE_GROUP, {
                parent: this.childOf,
                component: this.component.nativeElement,
                index: index
            });
        }
    }
    /**
     * @description Cancels the update mode and resets the UI state.
     * @summary Exits the update mode by resetting the button label and clearing the updating item,
     * restoring the component to its default state for adding new items. Notifies parent components
     * that the update operation has been cancelled.
     *
     * @returns {void}
     * @memberOf FieldsetComponent
     */
    handleCancelUpdateItem() {
        this.buttonLabel = this.translateService.instant(this.locale + '.add');
        this.updatingItem = undefined;
        windowEventEmitter(EventConstants.FIELDSET_UPDATE_GROUP, {
            parent: this.childOf,
            component: this.component.nativeElement,
            index: this.value?.length
        });
    }
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
    handleRemoveItem(value, event) {
        if (event && event instanceof CustomEvent) {
            event.stopImmediatePropagation();
            return this.setValue();
        }
        const formArray = this.formGroup;
        const arrayLength = formArray.length;
        for (let index = arrayLength - 1; index >= 0; index--) {
            const group = formArray.at(index);
            if (cleanSpaces(group.get(this.pk)?.value) === cleanSpaces(value)) {
                windowEventEmitter(EventConstants.FIELDSET_REMOVE_GROUP, {
                    parent: this.childOf,
                    component: this.component.nativeElement,
                    index,
                    formGroup: group
                });
            }
        }
    }
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
    handleReorderItems(event) {
        const fromIndex = event.detail.from;
        const toIndex = event.detail.to;
        const items = [...this.items]; // sua estrutura visual
        const formArray = this.formGroup; // FormArray reativo
        if (fromIndex !== toIndex) {
            // Reordenar os dados visuais
            const itemToMove = items.splice(fromIndex, 1)[0];
            items.splice(toIndex, 0, itemToMove);
            items.forEach((item, index) => item['index'] = index + 1);
            // Reordenar os controles do FormArray
            const controlToMove = formArray.at(fromIndex);
            formArray.removeAt(fromIndex);
            formArray.insert(toIndex, controlToMove);
        }
        // Finaliza a operação de reorder do Ionic
        event.detail.complete();
    }
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
    handleAccordionToggle(event) {
        if (event)
            event.stopImmediatePropagation();
        if (!this.hasValidationErrors) {
            this.accordionComponent.value = this.isOpen ? undefined : 'open';
            this.isOpen = !!this.accordionComponent.value;
        }
    }
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
    handleValidationError(event) {
        event.stopImmediatePropagation();
        const { hasErrors } = event.detail;
        this.isOpen = this.hasValidationErrors = hasErrors;
        if (hasErrors)
            this.accordionComponent.value = 'open';
    }
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
    setValue() {
        this.value = this.formGroup.controls.map(({ value }) => value);
        this.items = this.value
            .filter(v => v[this.pk] !== undefined)
            .map((v, index) => {
            return {
                ...itemMapper(Object.assign({}, v), this.mapper),
                index: index + 1
            };
        });
        const inputContainers = this.component.nativeElement.querySelectorAll('.dcf-input-item');
        inputContainers.forEach((container) => {
            const input = container.querySelector('input, ion-input, ion-textarea, textarea');
            if (input)
                input.value = '';
        });
        this.updatingItem = undefined;
    }
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
    getMapper(value) {
        if (!this.pk)
            this.pk = Object.keys(value)[0];
        if (!Object.keys(this.mapper).length)
            this.mapper['title'] = this.pk;
        this.mapper['index'] = "index";
        for (const key in value) {
            if (Object.keys(this.mapper).length >= 2 || Object.keys(this.mapper).length === Object.keys(value).length)
                break;
            if (!this.mapper['title']) {
                this.mapper['title'] = key;
            }
            else {
                this.mapper['description'] = key;
            }
        }
        return this.mapper;
    }
    static { this.ɵfac = function FieldsetComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FieldsetComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FieldsetComponent, selectors: [["ngx-decaf-fieldset"]], viewQuery: function FieldsetComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.accordionComponent = _t.first);
        } }, hostVars: 1, hostBindings: function FieldsetComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("id", ctx.overriode);
        } }, inputs: { name: "name", childOf: "childOf", uid: "uid", customTypes: "customTypes", operation: "operation", formGroup: "formGroup", title: "title", description: "description", target: "target", multiple: "multiple", value: "value", handlers: "handlers" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], ngContentSelectors: _c1, decls: 16, vars: 15, consts: [["component", ""], ["accordionComponent", ""], [3, "fieldsetAddGroupEvent", "fieldsetRemoveGroupEvent"], [3, "validationErrorEvent", "ngClass"], ["value", "open"], ["slot", "header", 3, "click"], [1, "dcf-grid", "dcf-grid-collapse", "dcf-flex", "dcf-flex-middle", "dcf-width-1-1"], [1, "dcf-width-expand"], [1, "dcf-width-auto", "dcf-delete"], ["slot", "content"], [1, "dcf-fields-list"], [1, "dcf-margin-bottom", "dcf-grid", "dcf-grid-collapse", "dcf-flex"], ["fill", "clear", "size", "small", 3, "click"], ["name", "trash-outline", "color", "dark", "slot", "icon-only"], [3, "ionItemReorder", "formGroup", "disabled"], ["lines", "full", 3, "ngClass", "button"], ["slot", "start"], [3, "color"], ["fill", "clear", "size", "small"], ["name", "swap-vertical-outline"], ["size", "small", "name", "swap-vertical-outline", "disabled", "", 1, "dcf-reorder-disabled"], [1, "dcf-subtitle"], ["name", "create-outline", "color", "dark", "slot", "icon-only"], [1, "dcf-not-unique-container", "dcf-animation", "dcf-animation-bottom-small", "dcf-animation-fast"], ["size", "small", "fill", "clear", "color", "danger"], ["size", "small", "fill", "clear", 1, "dcf-button-add", 3, "click"], ["name", "add-outline", "slot", "start"], [1, "dcf-grid", "dcf-grid-collapse", "dcf-width-1-1"], [1, "dcf-auto"], ["name", "alert-circle-outline"], ["color", "danger", 1, "dcf-text-small"], ["size", "small", "fill", "clear", "color", "danger", 3, "click"]], template: function FieldsetComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "fieldset", 2, 0);
            i0.ɵɵlistener("fieldsetAddGroupEvent", function FieldsetComponent_Template_fieldset_fieldsetAddGroupEvent_0_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.handleCreateItem($event)); })("fieldsetRemoveGroupEvent", function FieldsetComponent_Template_fieldset_fieldsetRemoveGroupEvent_0_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.handleRemoveItem(undefined, $event)); });
            i0.ɵɵelementStart(2, "ion-accordion-group", 3, 1);
            i0.ɵɵlistener("validationErrorEvent", function FieldsetComponent_Template_ion_accordion_group_validationErrorEvent_2_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.handleValidationError($event)); });
            i0.ɵɵelementStart(4, "ion-accordion", 4)(5, "ion-item", 5);
            i0.ɵɵlistener("click", function FieldsetComponent_Template_ion_item_click_5_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.handleAccordionToggle($event)); });
            i0.ɵɵelementStart(6, "div", 6)(7, "div", 7)(8, "legend");
            i0.ɵɵtext(9);
            i0.ɵɵpipe(10, "translate");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(11, FieldsetComponent_Conditional_11_Template, 3, 0, "div", 8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 9);
            i0.ɵɵtemplate(13, FieldsetComponent_Conditional_13_Template, 5, 2, "ion-list", 10);
            i0.ɵɵprojection(14);
            i0.ɵɵtemplate(15, FieldsetComponent_Conditional_15_Template, 6, 3, "div", 11);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵclassMap("dcf-fieldset " + ctx.operation);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(10, _c2, ctx.isOpen, ctx.hasValidationErrors));
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 8, ctx.name));
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(!ctx.isRequired && i0.ɵɵpureFunction0(13, _c3).includes(ctx.operation) ? 11 : -1);
            i0.ɵɵadvance();
            i0.ɵɵattribute("aria-hidden", !ctx.isOpen);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.multiple && ctx.items.length ? 13 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.multiple && i0.ɵɵpureFunction0(14, _c3).includes(ctx.operation) ? 15 : -1);
        } }, dependencies: [ForAngularModule, i1.IonText, i1.IonButton, i2.NgClass, i3.NgControlStatusGroup, i3.FormGroupDirective, i4.TranslatePipe, IonAccordionGroup, IonAccordion, IonList, IonItem, IonLabel, IonReorder, IonReorderGroup], styles: ["ion-accordion-group[_ngcontent-%COMP%]   ion-item[slot=header][_ngcontent-%COMP%]   .dcf-delete[_ngcontent-%COMP%]{width:30px}ion-accordion-group[_ngcontent-%COMP%]   ion-item[slot=header][_ngcontent-%COMP%]   .dcf-delete[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{transform:translateY(-2px)}ion-accordion-group[_ngcontent-%COMP%]   ion-item[slot=header][_ngcontent-%COMP%]   .dcf-delete[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.15rem}  ion-accordion ngx-decaf-crud-field:last-child ion-item{--inner-border-width: 0px !important;--border-width: 0px !important}.dcf-fieldset[_ngcontent-%COMP%]{margin-bottom:1.8rem;margin-top:1rem;padding-bottom:0;padding-top:1rem;background:var(--dcf-card-background);border-radius:6px;height:100%}@media (prefers-color-scheme: light){.dcf-fieldset[_ngcontent-%COMP%]{border:1px solid var(--dcf-color-gray-3)}.dcf-fieldset[_ngcontent-%COMP%]   .dcf-button-add[_ngcontent-%COMP%]{color:var(--ion-color-dark)!important}}@media (prefers-color-scheme: dark){.dcf-fieldset[_ngcontent-%COMP%]{border:1px solid var(--dcf-color-step-400)}.dcf-fieldset[_ngcontent-%COMP%]   .dcf-button-add[_ngcontent-%COMP%]{color:var(--ion-color-gray-2)}}.dcf-fieldset.read[_ngcontent-%COMP%], .dcf-fieldset.delete[_ngcontent-%COMP%]{margin-top:1.25rem;padding-bottom:1rem}.dcf-fieldset.read[_ngcontent-%COMP%]   [slot=content][_ngcontent-%COMP%], .dcf-fieldset.delete[_ngcontent-%COMP%]   [slot=content][_ngcontent-%COMP%]{padding-top:0!important}.dcf-fieldset.read[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%], .dcf-fieldset.delete[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]{margin-bottom:0rem!important}@media (prefers-color-scheme: dark){.dcf-fieldset.read[_ngcontent-%COMP%], .dcf-fieldset.delete[_ngcontent-%COMP%]{border:1px solid var(--dcf-color-gray-6)}}.dcf-fieldset[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]{background:var(--dcf-card-background);margin-bottom:1rem}.dcf-fieldset[_ngcontent-%COMP%]   ion-accordion.accordion-collapsing[_ngcontent-%COMP%], .dcf-fieldset[_ngcontent-%COMP%]   ion-accordion.accordion-collapsed[_ngcontent-%COMP%]{margin-bottom:1rem}.dcf-fieldset[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   ion-item[slot=header][_ngcontent-%COMP%]{--border-color: transparent;--border-radius: 6px;--inner-border-width: 0;--padding-start: 12px}.dcf-fieldset[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   ion-item[slot=header][_ngcontent-%COMP%]   legend[_ngcontent-%COMP%]{font-weight:600;font-size:1rem;margin:0}@media (prefers-color-scheme: light){.dcf-fieldset[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   ion-item[slot=header][_ngcontent-%COMP%]   legend[_ngcontent-%COMP%]{color:var(--dcf-color-gray-7)}}.dcf-fieldset[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   [slot=content][_ngcontent-%COMP%]{padding-top:2rem!important;padding-inline:.75rem}.dcf-not-unique-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:1rem;flex:1 1 auto}.dcf-not-unique-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.dcf-not-unique-container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{transform:translatey(2px);margin-right:5px}.dcf-fields-list[_ngcontent-%COMP%]{margin-top:-1rem;margin-bottom:1rem;padding:0!important}.dcf-fields-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--min-height: 50px;--padding-top: .25rem;--padding-bottom: .25rem;--padding-start: .75rem;--padding-end: .75rem;--inner-padding-start: 0px !important;--inner-padding-end: 0px !important;--border-color: var(--dcf-color-gray-2) !important;border:1px solid transparent;box-sizing:border-box}.dcf-fields-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon.dcf-reorder-disabled[_ngcontent-%COMP%]{width:1rem;transform:translatey(2px);color:var(--dcf-color-gray-4)}.dcf-fields-list[_ngcontent-%COMP%]   ion-item.updating[_ngcontent-%COMP%]{--background: rgba(var(--dcf-color-primary-rgb), .1) !important}.dcf-fields-list[_ngcontent-%COMP%]   ion-item.not-unique[_ngcontent-%COMP%]{--background: rgba(var(--dcf-color-danger-rgb), .05) !important}.dcf-fields-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .dcf-subtitle[_ngcontent-%COMP%]{font-size:.8rem;color:var(--dcf-color-gray-7)}"] }); }
};
FieldsetComponent = __decorate([
    Dynamic(),
    __metadata("design:paramtypes", [])
], FieldsetComponent);
export { FieldsetComponent };
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldsetComponent, [{
        type: Component,
        args: [{ standalone: true, selector: 'ngx-decaf-fieldset', schemas: [CUSTOM_ELEMENTS_SCHEMA], imports: [ForAngularModule, IonAccordionGroup, IonAccordion, IonList, IonItem, IonLabel, IonReorder, IonButton, IonReorderGroup, CollapsableDirective], host: { '[attr.id]': 'overriode ' }, template: "\n\n<fieldset\n  (fieldsetAddGroupEvent)=\"handleCreateItem($event)\"\n  (fieldsetRemoveGroupEvent)=\"handleRemoveItem(undefined, $event)\"\n  [class]=\"'dcf-fieldset ' + operation\"\n  #component>\n  <ion-accordion-group [ngClass]=\"{'open': isOpen, 'hasValidationErrors': hasValidationErrors}\"  (validationErrorEvent)=\"handleValidationError($event)\" #accordionComponent>\n    <ion-accordion value=\"open\">\n      <ion-item slot=\"header\" (click)=\"handleAccordionToggle($event)\">\n        <div class=\"dcf-grid dcf-grid-collapse dcf-flex dcf-flex-middle dcf-width-1-1\">\n          <div class=\"dcf-width-expand\">\n            <legend>{{ name | translate }}</legend>\n          </div>\n          @if(!isRequired && ['create', 'update'].includes(operation)) {\n            <div class=\"dcf-width-auto dcf-delete\">\n              <ion-button fill=\"clear\" size=\"small\" (click)=\"handleRemoveComponent($event)\">\n                <ion-icon name=\"trash-outline\" color=\"dark\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </div>\n          }\n        </div>\n      </ion-item>\n      <div slot=\"content\" [attr.aria-hidden]=\"!isOpen\">\n        @if(multiple && items.length) {\n          <ion-list class=\"dcf-fields-list\">\n            <ion-reorder-group [formGroup]=\"formGroup.parent\" [disabled]=\"updatingItem\" (ionItemReorder)=\"handleReorderItems($any($event))\" #accordionComponent>\n              @for(item of items; track item.index) {\n                <ion-item [ngClass]=\"{'not-unique': item.title === isUniqueError}\" lines=\"full\" [button]=\"false\" [ngClass]=\"{'updating': updatingItem?.[pk] === item.title}\">\n                  @if(items?.length > 1 && !updatingItem) {\n                    <ion-reorder slot=\"start\">\n                      <ion-icon name=\"swap-vertical-outline\"></ion-icon>\n                    </ion-reorder>\n                  } @else {\n                    <div slot=\"start\">\n                      <ion-icon class=\"dcf-reorder-disabled\" size=\"small\" name=\"swap-vertical-outline\" disabled></ion-icon>\n                    </div>\n                  }\n                  <ion-label [color]=\"(item.title === isUniqueError && !updatingItem.title === item.title) ? 'danger' : ''\">{{ item.index }}. {{ item.title }}\n                    @if(item.description?.length > 0) {\n                      <br />\n                      <ion-text class=\"dcf-subtitle\">{{item.description}}</ion-text>\n                    }\n                  </ion-label>\n                  @if(!updatingItem || updatingItem?.[pk] !== item.title) {\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"handleUpdateItem(item.title, $index)\">\n                      <ion-icon name=\"create-outline\" color=\"dark\" slot=\"icon-only\"></ion-icon>\n                    </ion-button>\n                  }\n\n                  @if(!updatingItem) {\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"handleRemoveItem(item.title)\">\n                      <ion-icon name=\"trash-outline\" color=\"dark\" slot=\"icon-only\"></ion-icon>\n                    </ion-button>\n                  }\n                </ion-item>\n              }\n            </ion-reorder-group>\n          </ion-list>\n        }\n\n        <ng-content></ng-content>\n\n        @if(multiple && ['create', 'update'].includes(operation)) {\n          @if(isUniqueError) {\n            <div class=\"dcf-not-unique-container dcf-animation dcf-animation-bottom-small dcf-animation-fast\">\n              <div class=\" dcf-grid dcf-grid-collapse dcf-width-1-1 \">\n                <div class=\"dcf-auto\" [attr.style]=\"'max-width: 50px'\">\n                  <ion-icon name=\"alert-circle-outline\"></ion-icon>\n                </div>\n                <div class=\"dcf-width-expand\">\n                  <ion-text color=\"danger\" class=\"dcf-text-small\">{{ locale + '.not_unique' | translate : { value: isUniqueError } }}</ion-text>\n                </div>\n              </div>\n            </div>\n          }\n          <div class=\"dcf-margin-bottom dcf-grid dcf-grid-collapse dcf-flex\">\n            @if(updatingItem) {\n              <ion-button size=\"small\" fill=\"clear\" color=\"danger\" (click)=\"handleCancelUpdateItem()\">\n                {{ buttonCancelLabel }}\n              </ion-button>\n            }\n            <ion-button size=\"small\" fill=\"clear\" class=\"dcf-button-add\" (click)=\"handleCreateItem()\">\n              <ion-icon name=\"add-outline\" slot=\"start\"></ion-icon>\n              {{buttonLabel}}\n            </ion-button>\n\n          </div>\n        }\n\n      </div>\n    </ion-accordion>\n  </ion-accordion-group>\n</fieldset>\n\n", styles: ["ion-accordion-group ion-item[slot=header] .dcf-delete{width:30px}ion-accordion-group ion-item[slot=header] .dcf-delete ion-button{transform:translateY(-2px)}ion-accordion-group ion-item[slot=header] .dcf-delete ion-icon{font-size:1.15rem}::ng-deep ion-accordion ngx-decaf-crud-field:last-child ion-item{--inner-border-width: 0px !important;--border-width: 0px !important}.dcf-fieldset{margin-bottom:1.8rem;margin-top:1rem;padding-bottom:0;padding-top:1rem;background:var(--dcf-card-background);border-radius:6px;height:100%}@media (prefers-color-scheme: light){.dcf-fieldset{border:1px solid var(--dcf-color-gray-3)}.dcf-fieldset .dcf-button-add{color:var(--ion-color-dark)!important}}@media (prefers-color-scheme: dark){.dcf-fieldset{border:1px solid var(--dcf-color-step-400)}.dcf-fieldset .dcf-button-add{color:var(--ion-color-gray-2)}}.dcf-fieldset.read,.dcf-fieldset.delete{margin-top:1.25rem;padding-bottom:1rem}.dcf-fieldset.read [slot=content],.dcf-fieldset.delete [slot=content]{padding-top:0!important}.dcf-fieldset.read ion-accordion,.dcf-fieldset.delete ion-accordion{margin-bottom:0rem!important}@media (prefers-color-scheme: dark){.dcf-fieldset.read,.dcf-fieldset.delete{border:1px solid var(--dcf-color-gray-6)}}.dcf-fieldset ion-accordion{background:var(--dcf-card-background);margin-bottom:1rem}.dcf-fieldset ion-accordion.accordion-collapsing,.dcf-fieldset ion-accordion.accordion-collapsed{margin-bottom:1rem}.dcf-fieldset ion-accordion ion-item[slot=header]{--border-color: transparent;--border-radius: 6px;--inner-border-width: 0;--padding-start: 12px}.dcf-fieldset ion-accordion ion-item[slot=header] legend{font-weight:600;font-size:1rem;margin:0}@media (prefers-color-scheme: light){.dcf-fieldset ion-accordion ion-item[slot=header] legend{color:var(--dcf-color-gray-7)}}.dcf-fieldset ion-accordion [slot=content]{padding-top:2rem!important;padding-inline:.75rem}.dcf-not-unique-container{display:flex;justify-content:center;align-items:center;margin-bottom:1rem;flex:1 1 auto}.dcf-not-unique-container>div{display:flex;justify-content:center;align-items:center}.dcf-not-unique-container ion-icon{transform:translatey(2px);margin-right:5px}.dcf-fields-list{margin-top:-1rem;margin-bottom:1rem;padding:0!important}.dcf-fields-list ion-item{--min-height: 50px;--padding-top: .25rem;--padding-bottom: .25rem;--padding-start: .75rem;--padding-end: .75rem;--inner-padding-start: 0px !important;--inner-padding-end: 0px !important;--border-color: var(--dcf-color-gray-2) !important;border:1px solid transparent;box-sizing:border-box}.dcf-fields-list ion-item ion-icon.dcf-reorder-disabled{width:1rem;transform:translatey(2px);color:var(--dcf-color-gray-4)}.dcf-fields-list ion-item.updating{--background: rgba(var(--dcf-color-primary-rgb), .1) !important}.dcf-fields-list ion-item.not-unique{--background: rgba(var(--dcf-color-danger-rgb), .05) !important}.dcf-fields-list ion-item .dcf-subtitle{font-size:.8rem;color:var(--dcf-color-gray-7)}\n"] }]
    }], () => [], { accordionComponent: [{
            type: ViewChild,
            args: ['accordionComponent', { static: false }]
        }], name: [{
            type: Input
        }], childOf: [{
            type: Input
        }], uid: [{
            type: Input
        }], customTypes: [{
            type: Input
        }], operation: [{
            type: Input
        }], formGroup: [{
            type: Input
        }], title: [{
            type: Input
        }], description: [{
            type: Input
        }], target: [{
            type: Input
        }], multiple: [{
            type: Input
        }], value: [{
            type: Input
        }], handlers: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FieldsetComponent, { className: "FieldsetComponent", filePath: "components/fieldset/fieldset.component.ts", lineNumber: 79 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2ZpZWxkc2V0L2ZpZWxkc2V0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9maWVsZHNldC9maWVsZHNldC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFpQixpQkFBaUIsRUFBRSxTQUFTLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2pKLE9BQU8sRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUF5QyxNQUFNLGNBQWMsQ0FBQztBQUM5RixPQUFPLEVBQWtCLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUEwQixlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEssT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFFLFNBQVMsRUFBMEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFD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dXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgaW5qZWN0LCBJbnB1dCwgVmlld0NoaWxkLCBSZW5kZXJlcjIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHluYW1pYywgRXZlbnRDb25zdGFudHMsIEhhbmRsZXJMaWtlLCBIVE1MRm9ybVRhcmdldCwgS2V5VmFsdWUgfSBmcm9tICcuLi8uLi9lbmdpbmUnO1xuaW1wb3J0IHsgQ3J1ZE9wZXJhdGlvbnMsIE9wZXJhdGlvbktleXMgfSBmcm9tICdAZGVjYWYtdHMvZGItZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBGb3JBbmd1bGFyTW9kdWxlIH0gZnJvbSAnLi4vLi4vZm9yLWFuZ3VsYXIubW9kdWxlJztcbmltcG9ydCB7IENvbGxhcHNhYmxlRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9jb2xsYXBzYWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uQWNjb3JkaW9uLCBJb25BY2NvcmRpb25Hcm91cCwgSW9uQnV0dG9uLCBJb25JdGVtLCBJb25MYWJlbCwgSW9uTGlzdCwgSXRlbVJlb3JkZXJFdmVudERldGFpbCwgSW9uUmVvcmRlckdyb3VwLCBJb25SZW9yZGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvc3RhbmRhbG9uZSc7XG5pbXBvcnQgeyBjbGVhblNwYWNlcywgZ2VuZXJhdGVSYW5kb21WYWx1ZSwgaXRlbU1hcHBlciwgd2luZG93RXZlbnRFbWl0dGVyIH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBGb3JtQXJyYXksIEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ3hCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZW5naW5lJztcbmltcG9ydCB7IGFsZXJ0Q2lyY2xlT3V0bGluZSwgY3JlYXRlT3V0bGluZSB9IGZyb20gJ2lvbmljb25zL2ljb25zJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IElGaWVsZFNldEl0ZW0sIElGaWVsZFNldFZhbGlkYXRpb25FdmVudCB9IGZyb20gJy4uLy4uL2VuZ2luZS9pbnRlcmZhY2VzJztcbmltcG9ydCB7IGFkZEljb25zIH0gZnJvbSAnaW9uaWNvbnMnO1xuXG5cblxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBEeW5hbWljIGZpZWxkc2V0IGNvbXBvbmVudCB3aXRoIGNvbGxhcHNpYmxlIGFjY29yZGlvbiBmdW5jdGlvbmFsaXR5LlxuICogQHN1bW1hcnkgVGhpcyBjb21wb25lbnQgcHJvdmlkZXMgYSBzb3BoaXN0aWNhdGVkIGZpZWxkc2V0IGNvbnRhaW5lciB0aGF0IGF1dG9tYXRpY2FsbHlcbiAqIGFkYXB0cyBpdHMgYmVoYXZpb3IgYmFzZWQgb24gQ1JVRCBvcGVyYXRpb25zLiBJdCBpbnRlZ3JhdGVzIHNlYW1sZXNzbHkgd2l0aCBJb25pYydzXG4gKiBhY2NvcmRpb24gY29tcG9uZW50cyB0byBjcmVhdGUgZXhwYW5kYWJsZS9jb2xsYXBzaWJsZSBzZWN0aW9ucyBmb3Igb3JnYW5pemluZyBmb3JtXG4gKiBjb250ZW50IGFuZCByZWxhdGVkIGluZm9ybWF0aW9uLiBUaGUgY29tcG9uZW50IGludGVsbGlnZW50bHkgZGV0ZXJtaW5lcyBpdHMgaW5pdGlhbFxuICogc3RhdGUgYmFzZWQgb24gdGhlIG9wZXJhdGlvbiB0eXBlLCBvcGVuaW5nIGF1dG9tYXRpY2FsbHkgZm9yIFJFQUQgYW5kIERFTEVURSBvcGVyYXRpb25zXG4gKiB3aGlsZSByZW1haW5pbmcgY2xvc2VkIGZvciBDUkVBVEUgYW5kIFVQREFURSBvcGVyYXRpb25zLlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBodG1sXG4gKiA8IS0tIEJhc2ljIHVzYWdlIHdpdGggYXV0b21hdGljIHN0YXRlIG1hbmFnZW1lbnQgLS0+XG4gKiA8bmd4LWRlY2FmLWZpZWxkc2V0XG4gKiAgIG5hbWU9XCJQZXJzb25hbCBJbmZvcm1hdGlvblwiXG4gKiAgIFtvcGVyYXRpb25dPVwiT3BlcmF0aW9uS2V5cy5SRUFEXCJcbiAqICAgdGFyZ2V0PVwiX3NlbGZcIj5cbiAqICAgPGlvbi1pbnB1dCBsYWJlbD1cIk5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIG5hbWVcIj48L2lvbi1pbnB1dD5cbiAqICAgPGlvbi1pbnB1dCBsYWJlbD1cIkVtYWlsXCIgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiPjwvaW9uLWlucHV0PlxuICogPC9uZ3gtZGVjYWYtZmllbGRzZXQ+XG4gKlxuICogPCEtLSBBZHZhbmNlZCB1c2FnZSB3aXRoIGN1c3RvbSBvcGVyYXRpb24gLS0+XG4gKiA8bmd4LWRlY2FmLWZpZWxkc2V0XG4gKiAgIG5hbWU9XCJDb250YWN0IERldGFpbHNcIlxuICogICBbb3BlcmF0aW9uXT1cImN1cnJlbnRPcGVyYXRpb25cIlxuICogICB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAqICAgPCEtLSBDb21wbGV4IGZvcm0gZmllbGRzIC0tPlxuICogPC9uZ3gtZGVjYWYtZmllbGRzZXQ+XG4gKiBgYGBcbiAqXG4gKiBAbWVybWFpZFxuICogc2VxdWVuY2VEaWFncmFtXG4gKiAgIHBhcnRpY2lwYW50IFUgYXMgVXNlclxuICogICBwYXJ0aWNpcGFudCBGIGFzIEZpZWxkc2V0Q29tcG9uZW50XG4gKiAgIHBhcnRpY2lwYW50IEkgYXMgSW9uaWMgQWNjb3JkaW9uXG4gKiAgIHBhcnRpY2lwYW50IEQgYXMgRE9NXG4gKlxuICogICBGLT4+RjogbmdBZnRlclZpZXdJbml0KClcbiAqICAgYWx0IG9wZXJhdGlvbiBpcyBSRUFEIG9yIERFTEVURVxuICogICAgIEYtPj5GOiBTZXQgaXNPcGVuID0gdHJ1ZVxuICogICAgIEYtPj5EOiBRdWVyeSBhY2NvcmRpb24gZWxlbWVudFxuICogICAgIEYtPj5JOiBTZXQgdmFsdWUgYXR0cmlidXRlIHRvICdvcGVuJ1xuICogICAgIEYtPj5GOiBUcmlnZ2VyIGNoYW5nZSBkZXRlY3Rpb25cbiAqICAgZW5kXG4gKiAgIFUtPj5JOiBDbGljayBhY2NvcmRpb24gaGVhZGVyXG4gKiAgIEktPj5GOiBoYW5kbGVDaGFuZ2UoZXZlbnQpXG4gKiAgIEYtPj5GOiBVcGRhdGUgaXNPcGVuIHN0YXRlXG4gKiAgIEYtPj5JOiBSZWZsZWN0IG5ldyBzdGF0ZVxuICpcbiAqIEBtZW1iZXJPZiBGb3JBbmd1bGFyTW9kdWxlXG4gKi9cbkBEeW5hbWljKClcbkBDb21wb25lbnQoe1xuICBzdGFuZGFsb25lOiB0cnVlLFxuICBzZWxlY3RvcjogJ25neC1kZWNhZi1maWVsZHNldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWVsZHNldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZpZWxkc2V0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXSxcbiAgaW1wb3J0czogW0ZvckFuZ3VsYXJNb2R1bGUsIElvbkFjY29yZGlvbkdyb3VwLCBJb25BY2NvcmRpb24sIElvbkxpc3QsIElvbkl0ZW0sIElvbkxhYmVsLCBJb25SZW9yZGVyLCBJb25CdXR0b24sIElvblJlb3JkZXJHcm91cCwgQ29sbGFwc2FibGVEaXJlY3RpdmVdLFxuICBob3N0OiB7J1thdHRyLmlkXSc6ICdvdmVycmlvZGUgJ30sXG59KVxuZXhwb3J0IGNsYXNzIEZpZWxkc2V0Q29tcG9uZW50IGV4dGVuZHMgTmd4QmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cblxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUmVmZXJlbmNlIHRvIHRoZSBpb24tYWNjb3JkaW9uLWdyb3VwIGNvbXBvbmVudCBmb3IgcHJvZ3JhbW1hdGljIGNvbnRyb2wuXG4gICAqIEBzdW1tYXJ5IFZpZXdDaGlsZCByZWZlcmVuY2UgdGhhdCBwcm92aWRlcyBkaXJlY3QgYWNjZXNzIHRvIHRoZSBJb25pYyBhY2NvcmRpb24gZ3JvdXAgY29tcG9uZW50LlxuICAgKiBUaGlzIGVuYWJsZXMgcHJvZ3JhbW1hdGljIGNvbnRyb2wgb3ZlciB0aGUgYWNjb3JkaW9uJ3MgZXhwYW5kL2NvbGxhcHNlIHN0YXRlLCBhbGxvd2luZ1xuICAgKiB0aGUgY29tcG9uZW50IHRvIG9wZW4vY2xvc2UgdGhlIGFjY29yZGlvbiBiYXNlZCBvbiB2YWxpZGF0aW9uIGVycm9ycywgQ1JVRCBvcGVyYXRpb25zLFxuICAgKiBvciBvdGhlciBidXNpbmVzcyBsb2dpYyByZXF1aXJlbWVudHMuXG4gICAqXG4gICAqIEB0eXBlIHtJb25BY2NvcmRpb25Hcm91cH1cbiAgICogQG1lbWJlck9mIEZpZWxkc2V0Q29tcG9uZW50XG4gICAqL1xuICBAVmlld0NoaWxkKCdhY2NvcmRpb25Db21wb25lbnQnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgYWNjb3JkaW9uQ29tcG9uZW50ITogSW9uQWNjb3JkaW9uR3JvdXA7XG5cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFRoZSBkaXNwbGF5IG5hbWUgb3IgdGl0bGUgb2YgdGhlIGZpZWxkc2V0IHNlY3Rpb24uXG4gICAqIEBzdW1tYXJ5IFNldHMgdGhlIGxlZ2VuZCBvciBoZWFkZXIgdGV4dCB0aGF0IGFwcGVhcnMgaW4gdGhlIGFjY29yZGlvbiBoZWFkZXIuIFRoaXMgdGV4dFxuICAgKiBwcm92aWRlcyBhIGNsZWFyIGxhYmVsIGZvciB0aGUgY29sbGFwc2libGUgc2VjdGlvbiwgaGVscGluZyB1c2VycyB1bmRlcnN0YW5kIHdoYXQgY29udGVudFxuICAgKiBpcyBjb250YWluZWQgd2l0aGluLiBUaGUgbmFtZSBpcyBkaXNwbGF5ZWQgcHJvbWluZW50bHkgYW5kIHNlcnZlcyBhcyB0aGUgY2xpY2thYmxlIGFyZWFcbiAgICogZm9yIGV4cGFuZGluZy9jb2xsYXBzaW5nIHRoZSBmaWVsZHNldC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJ0NoaWxkJ1xuICAgKiBAbWVtYmVyT2YgRmllbGRzZXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZyA9ICdDaGlsZCc7XG5cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFRoZSBwYXJlbnQgY29tcG9uZW50IGlkZW50aWZpZXIgZm9yIGhpZXJhcmNoaWNhbCBmaWVsZHNldCByZWxhdGlvbnNoaXBzLlxuICAgKiBAc3VtbWFyeSBTcGVjaWZpZXMgdGhlIHBhcmVudCBjb21wb25lbnQgbmFtZSB0aGF0IHRoaXMgZmllbGRzZXQgYmVsb25ncyB0byBpbiBhIGhpZXJhcmNoaWNhbFxuICAgKiBmb3JtIHN0cnVjdHVyZS4gVGhpcyBwcm9wZXJ0eSBpcyB1c2VkIGZvciBldmVudCBidWJibGluZyBhbmQgZXN0YWJsaXNoaW5nIHBhcmVudC1jaGlsZFxuICAgKiByZWxhdGlvbnNoaXBzIGJldHdlZW4gZmllbGRzZXRzIGluIGNvbXBsZXggZm9ybXMgd2l0aCBuZXN0ZWQgc3RydWN0dXJlcy5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJ0NoaWxkJ1xuICAgKiBAbWVtYmVyT2YgRmllbGRzZXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGNoaWxkT2Y6IHN0cmluZyA9ICdDaGlsZCc7XG5cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFRoZSBwYXJlbnQgY29tcG9uZW50IGlkZW50aWZpZXIgZm9yIGhpZXJhcmNoaWNhbCBmaWVsZHNldCByZWxhdGlvbnNoaXBzLlxuICAgKiBAc3VtbWFyeSBTcGVjaWZpZXMgdGhlIHBhcmVudCBjb21wb25lbnQgbmFtZSB0aGF0IHRoaXMgZmllbGRzZXQgYmVsb25ncyB0byBpbiBhIGhpZXJhcmNoaWNhbFxuICAgKiBmb3JtIHN0cnVjdHVyZS4gVGhpcyBwcm9wZXJ0eSBpcyB1c2VkIGZvciBldmVudCBidWJibGluZyBhbmQgZXN0YWJsaXNoaW5nIHBhcmVudC1jaGlsZFxuICAgKiByZWxhdGlvbnNoaXBzIGJldHdlZW4gZmllbGRzZXRzIGluIGNvbXBsZXggZm9ybXMgd2l0aCBuZXN0ZWQgc3RydWN0dXJlcy5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJ0NoaWxkJ1xuICAgKiBAbWVtYmVyT2YgRmllbGRzZXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG92ZXJyaWRlIHVpZDogc3RyaW5nID0gZ2VuZXJhdGVSYW5kb21WYWx1ZSgxMik7XG5cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEN1c3RvbSB0eXBlIGRlZmluaXRpb25zIGZvciBzcGVjaWFsaXplZCBmaWVsZHNldCBiZWhhdmlvci5cbiAgICogQHN1bW1hcnkgRGVmaW5lcyBjdXN0b20gZGF0YSB0eXBlcyBvciB2YWxpZGF0aW9uIHJ1bGVzIHRoYXQgc2hvdWxkIGJlIGFwcGxpZWQgdG8gdGhpcyBmaWVsZHNldC5cbiAgICogQ2FuIGJlIGEgc2luZ2xlIHR5cGUgc3RyaW5nIG9yIGFycmF5IG9mIHR5cGVzIHRoYXQgZGV0ZXJtaW5lIGhvdyB0aGUgZmllbGRzZXQgaGFuZGxlc1xuICAgKiBkYXRhIHZhbGlkYXRpb24sIGZvcm1hdHRpbmcsIGFuZCBkaXNwbGF5IGJlaGF2aW9yIGZvciBzcGVjaWFsaXplZCB1c2UgY2FzZXMuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmcgfCBzdHJpbmdbXX1cbiAgICogQG1lbWJlck9mIEZpZWxkc2V0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBjdXN0b21UeXBlcyE6IHN0cmluZyB8IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhlIGN1cnJlbnQgQ1JVRCBvcGVyYXRpb24gY29udGV4dC5cbiAgICogQHN1bW1hcnkgRGV0ZXJtaW5lcyB0aGUgY29tcG9uZW50J3MgaW5pdGlhbCBiZWhhdmlvciBhbmQgc3RhdGUgYmFzZWQgb24gdGhlIGN1cnJlbnQgb3BlcmF0aW9uLlxuICAgKiBUaGlzIGlucHV0IGlzIGNydWNpYWwgZm9yIGF1dG8tc3RhdGUgbWFuYWdlbWVudDogUkVBRCBhbmQgREVMRVRFIG9wZXJhdGlvbnMgYXV0b21hdGljYWxseVxuICAgKiBvcGVuIHRoZSBmaWVsZHNldCB0byBzaG93IGNvbnRlbnQsIHdoaWxlIENSRUFURSBhbmQgVVBEQVRFIG9wZXJhdGlvbnMga2VlcCBpdCBjbG9zZWRcbiAgICogaW5pdGlhbGx5LiBUaGlzIHByb3ZpZGVzIGFuIGludHVpdGl2ZSB1c2VyIGV4cGVyaWVuY2UgYWxpZ25lZCB3aXRoIG9wZXJhdGlvbiBzZW1hbnRpY3MuXG4gICAqXG4gICAqIEB0eXBlIHtPcGVyYXRpb25LZXlzfVxuICAgKiBAZGVmYXVsdCBPcGVyYXRpb25LZXlzLlJFQURcbiAgICogQG1lbWJlck9mIEZpZWxkc2V0Q29tcG9uZW50XG4gICAqL1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFRoZSBDUlVEIG9wZXJhdGlvbiB0eXBlIGZvciB0aGUgY3VycmVudCBmaWVsZHNldCBjb250ZXh0LlxuICAgKiBAc3VtbWFyeSBEZXRlcm1pbmVzIHRoZSBjb21wb25lbnQncyBpbml0aWFsIGJlaGF2aW9yIGFuZCBzdGF0ZSBiYXNlZCBvbiB0aGUgY3VycmVudCBvcGVyYXRpb24uXG4gICAqIFRoaXMgaW5wdXQgaXMgY3J1Y2lhbCBmb3IgYXV0by1zdGF0ZSBtYW5hZ2VtZW50OiBSRUFEIGFuZCBERUxFVEUgb3BlcmF0aW9ucyBhdXRvbWF0aWNhbGx5XG4gICAqIG9wZW4gdGhlIGZpZWxkc2V0IHRvIHNob3cgY29udGVudCwgd2hpbGUgQ1JFQVRFIGFuZCBVUERBVEUgb3BlcmF0aW9ucyBrZWVwIGl0IGNsb3NlZFxuICAgKiBpbml0aWFsbHkuIFRoaXMgcHJvdmlkZXMgYW4gaW50dWl0aXZlIHVzZXIgZXhwZXJpZW5jZSBhbGlnbmVkIHdpdGggb3BlcmF0aW9uIHNlbWFudGljcy5cbiAgICpcbiAgICogQHR5cGUge09wZXJhdGlvbktleXN9XG4gICAqIEBkZWZhdWx0IE9wZXJhdGlvbktleXMuUkVBRFxuICAgKiBAbWVtYmVyT2YgRmllbGRzZXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG9wZXJhdGlvbjogT3BlcmF0aW9uS2V5cyA9IE9wZXJhdGlvbktleXMuUkVBRDtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFJlYWN0aXZlIGZvcm0gZ3JvdXAgYXNzb2NpYXRlZCB3aXRoIHRoaXMgZmllbGRzZXQuXG4gICAqIEBzdW1tYXJ5IFRoZSBGb3JtR3JvdXAgaW5zdGFuY2UgdGhhdCBjb250YWlucyBhbGwgZm9ybSBjb250cm9scyB3aXRoaW4gdGhpcyBmaWVsZHNldC5cbiAgICogVXNlZCBmb3IgZm9ybSB2YWxpZGF0aW9uLCB2YWx1ZSBtYW5hZ2VtZW50LCBhbmQgaW50ZWdyYXRpb24gd2l0aCBBbmd1bGFyJ3MgcmVhY3RpdmUgZm9ybXMuXG4gICAqXG4gICAqIEB0eXBlIHtGb3JtR3JvdXB9XG4gICAqIEBtZW1iZXJPZiBGaWVsZHNldENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgZm9ybUdyb3VwITogIEZvcm1BcnJheTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFByaW1hcnkgdGl0bGUgdGV4dCBmb3IgdGhlIGZpZWxkc2V0IGNvbnRlbnQuXG4gICAqIEBzdW1tYXJ5IERpc3BsYXkgdGl0bGUgdXNlZCBmb3IgZmllbGRzZXQgaWRlbnRpZmljYXRpb24gYW5kIGNvbnRlbnQgb3JnYW5pemF0aW9uLlxuICAgKiBQcm92aWRlcyBzZW1hbnRpYyBtZWFuaW5nIHRvIHRoZSBncm91cGVkIGZvcm0gZmllbGRzLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyT2YgRmllbGRzZXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHRpdGxlITogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gU2Vjb25kYXJ5IGRlc2NyaXB0aXZlIHRleHQgZm9yIHRoZSBmaWVsZHNldC5cbiAgICogQHN1bW1hcnkgQWRkaXRpb25hbCBpbmZvcm1hdGlvbiB0aGF0IHByb3ZpZGVzIGNvbnRleHQgb3IgaW5zdHJ1Y3Rpb25zXG4gICAqIHJlbGF0ZWQgdG8gdGhlIGZpZWxkc2V0IGNvbnRlbnQgYW5kIHB1cnBvc2UuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJPZiBGaWVsZHNldENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgZGVzY3JpcHRpb24hOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBGb3JtIHRhcmdldCBhdHRyaWJ1dGUgZm9yIG5lc3RlZCBmb3JtIHN1Ym1pc3Npb25zLlxuICAgKiBAc3VtbWFyeSBTcGVjaWZpZXMgd2hlcmUgdG8gZGlzcGxheSB0aGUgcmVzcG9uc2UgYWZ0ZXIgc3VibWl0dGluZyBmb3JtcyBjb250YWluZWQgd2l0aGluXG4gICAqIHRoZSBmaWVsZHNldC4gVGhpcyBhdHRyaWJ1dGUgbWlycm9ycyB0aGUgSFRNTCBmb3JtIHRhcmdldCBiZWhhdmlvciwgYWxsb3dpbmcgY29udHJvbCBvdmVyXG4gICAqIHdoZXRoZXIgZm9ybSBzdWJtaXNzaW9ucyBvcGVuIGluIHRoZSBzYW1lIHdpbmRvdywgbmV3IHdpbmRvdywgb3Igc3BlY2lmaWMgZnJhbWUuIFVzZWZ1bFxuICAgKiBmb3IgY29tcGxleCBmb3JtIHdvcmtmbG93cyBhbmQgbXVsdGktc3RlcCBwcm9jZXNzZXMuXG4gICAqXG4gICAqIEB0eXBlIHtIVE1MRm9ybVRhcmdldH1cbiAgICogQGRlZmF1bHQgJ19zZWxmJ1xuICAgKiBAbWVtYmVyT2YgRmllbGRzZXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHRhcmdldDogSFRNTEZvcm1UYXJnZXQgPSAnX3NlbGYnO1xuXG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBFbmFibGVzIG11bHRpcGxlIGl0ZW0gbWFuYWdlbWVudCB3aXRoaW4gdGhlIGZpZWxkc2V0LlxuICAgKiBAc3VtbWFyeSBCb29sZWFuIGZsYWcgdGhhdCBkZXRlcm1pbmVzIGlmIHRoZSBmaWVsZHNldCBzdXBwb3J0cyBhZGRpbmcgbXVsdGlwbGUgdmFsdWVzLlxuICAgKiBXaGVuIHRydWUsIGRpc3BsYXlzIGEgcmVvcmRlcmFibGUgbGlzdCBvZiBpdGVtcyB3aXRoIGFkZC9yZW1vdmUgZnVuY3Rpb25hbGl0eS5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJPZiBGaWVsZHNldENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEFycmF5IG9mIHJhdyB2YWx1ZXMgc3RvcmVkIGluIHRoZSBmaWVsZHNldC5cbiAgICogQHN1bW1hcnkgQ29udGFpbnMgdGhlIGFjdHVhbCBkYXRhIHZhbHVlcyB0aGF0IGhhdmUgYmVlbiBhZGRlZCB0byB0aGUgZmllbGRzZXQuXG4gICAqIFRoaXMgaXMgdGhlIHNvdXJjZSBvZiB0cnV0aCBmb3IgdGhlIGZpZWxkc2V0J3MgZGF0YSBzdGF0ZS5cbiAgICpcbiAgICogQHR5cGUge0tleVZhbHVlW119XG4gICAqIEBkZWZhdWx0IFtdXG4gICAqIEBtZW1iZXJPZiBGaWVsZHNldENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgdmFsdWU6IEtleVZhbHVlW10gPSBbXTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEV2ZW50IGhhbmRsZXIgZnVuY3Rpb25zIGZvciBjdXN0b20gZmllbGRzZXQgYWN0aW9ucy5cbiAgICogQHN1bW1hcnkgQSByZWNvcmQgb2YgZXZlbnQgaGFuZGxlciBmdW5jdGlvbnMga2V5ZWQgYnkgZXZlbnQgbmFtZXMgdGhhdCBjYW4gYmUgdHJpZ2dlcmVkXG4gICAqIHdpdGhpbiB0aGUgZmllbGRzZXQuIFRoZXNlIGhhbmRsZXJzIHByb3ZpZGUgZXh0ZW5zaWJpbGl0eSBmb3IgY3VzdG9tIGJ1c2luZXNzIGxvZ2ljXG4gICAqIGFuZCBjYW4gYmUgaW52b2tlZCBmb3IgdmFyaW91cyBmaWVsZHNldCBvcGVyYXRpb25zIGFuZCB1c2VyIGludGVyYWN0aW9ucy5cbiAgICpcbiAgICogQHR5cGUge0hhbmRsZXJMaWtlfVxuICAgKiBAbWVtYmVyT2YgRmllbGRzZXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGhhbmRsZXJzITogSGFuZGxlckxpa2U7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBBcnJheSBvZiBmb3JtYXR0ZWQgaXRlbXMgZm9yIFVJIGRpc3BsYXkuXG4gICAqIEBzdW1tYXJ5IENvbnRhaW5zIHRoZSBwcm9jZXNzZWQgaXRlbXMgcmVhZHkgZm9yIGRpc3BsYXkgaW4gdGhlIGNvbXBvbmVudCB0ZW1wbGF0ZS5cbiAgICogVGhlc2UgaXRlbXMgYXJlIG1hcHBlZCBmcm9tIHRoZSByYXcgdmFsdWVzIHVzaW5nIHRoZSBtYXBwZXIgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHR5cGUge0lGaWVsZFNldEl0ZW1bXX1cbiAgICogQGRlZmF1bHQgW11cbiAgICogQG1lbWJlck9mIEZpZWxkc2V0Q29tcG9uZW50XG4gICAqL1xuICBpdGVtczogSUZpZWxkU2V0SXRlbVtdID0gW107XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDdXJyZW50bHkgc2VsZWN0ZWQgaXRlbSBmb3IgdXBkYXRlIG9wZXJhdGlvbnMuXG4gICAqIEBzdW1tYXJ5IEhvbGRzIHRoZSBpdGVtIGJlaW5nIGVkaXRlZCB3aGVuIGluIHVwZGF0ZSBtb2RlLiBVc2VkIHRvIHRyYWNrXG4gICAqIHdoaWNoIGl0ZW0gaXMgYmVpbmcgbW9kaWZpZWQgYW5kIGFwcGx5IGNoYW5nZXMgdG8gdGhlIGNvcnJlY3QgaXRlbS5cbiAgICpcbiAgICogQHR5cGUge0lGaWVsZFNldEl0ZW0gfCB1bmRlZmluZWR9XG4gICAqIEBtZW1iZXJPZiBGaWVsZHNldENvbXBvbmVudFxuICAgKi9cbiAgdXBkYXRpbmdJdGVtITogSUZpZWxkU2V0SXRlbSB8IHVuZGVmaW5lZDtcblxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ3VycmVudCBzdGF0ZSBvZiB0aGUgYWNjb3JkaW9uIChleHBhbmRlZCBvciBjb2xsYXBzZWQpLlxuICAgKiBAc3VtbWFyeSBCb29sZWFuIGZsYWcgdGhhdCB0cmFja3Mgd2hldGhlciB0aGUgZmllbGRzZXQgYWNjb3JkaW9uIGlzIGN1cnJlbnRseSBvcGVuIG9yIGNsb3NlZC5cbiAgICogVGhpcyBwcm9wZXJ0eSBpcyBhdXRvbWF0aWNhbGx5IG1hbmFnZWQgYmFzZWQgb24gdXNlciBpbnRlcmFjdGlvbnMgYW5kIGluaXRpYWwgb3BlcmF0aW9uIHN0YXRlLlxuICAgKiBJdCBzZXJ2ZXMgYXMgdGhlIHNpbmdsZSBzb3VyY2Ugb2YgdHJ1dGggZm9yIHRoZSBjb21wb25lbnQncyB2aXNpYmlsaXR5IHN0YXRlIGFuZCBpcyB1c2VkXG4gICAqIHRvIGNvb3JkaW5hdGUgYmV0d2VlbiB1c2VyIGFjdGlvbnMgYW5kIHByb2dyYW1tYXRpYyBzdGF0ZSBjaGFuZ2VzLiBUaGUgdmFsdWUgaXMgYXV0b21hdGljYWxseVxuICAgKiBzZXQgYmFzZWQgb24gQ1JVRCBvcGVyYXRpb25zIGR1cmluZyBpbml0aWFsaXphdGlvbiBhbmQgdXBkYXRlZCB0aHJvdWdoIHVzZXIgaW50ZXJhY3Rpb25zLlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQG1lbWJlck9mIEZpZWxkc2V0Q29tcG9uZW50XG4gICAqL1xuICBpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEluZGljYXRlcyB3aGV0aGVyIHRoZSBmaWVsZHNldCBjb250YWlucyByZXF1aXJlZCBmb3JtIGZpZWxkcy5cbiAgICogQHN1bW1hcnkgQm9vbGVhbiBmbGFnIHRoYXQgc2lnbmFscyB0aGUgcHJlc2VuY2Ugb2YgbWFuZGF0b3J5IGlucHV0IGZpZWxkcyB3aXRoaW4gdGhlIGZpZWxkc2V0LlxuICAgKiBUaGlzIHByb3BlcnR5IGlzIGF1dG9tYXRpY2FsbHkgc2V0IGJ5IHRoZSBDb2xsYXBzYWJsZURpcmVjdGl2ZSB3aGVuIHJlcXVpcmVkIGZpZWxkcyBhcmUgZGV0ZWN0ZWQsXG4gICAqIGFuZCBjYW4gYmUgdXNlZCB0byBhcHBseSBzcGVjaWFsIHN0eWxpbmcsIHZhbGlkYXRpb24gbG9naWMsIG9yIFVJIGluZGljYXRvcnMgdG8gaGlnaGxpZ2h0XG4gICAqIGZpZWxkc2V0cyB0aGF0IGNvbnRhaW4gbWFuZGF0b3J5IGluZm9ybWF0aW9uLiBJdCBoZWxwcyB3aXRoIGZvcm0gdmFsaWRhdGlvbiBmZWVkYmFjayBhbmRcbiAgICogdXNlciBleHBlcmllbmNlIGJ5IG1ha2luZyByZXF1aXJlZCBzZWN0aW9ucyBtb3JlIHByb21pbmVudC5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJPZiBGaWVsZHNldENvbXBvbmVudFxuICAgKi9cbiAgaXNSZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGZpZWxkc2V0IGNvbnRhaW5zIHZhbGlkYXRpb24gZXJyb3JzLlxuICAgKiBAc3VtbWFyeSBCb29sZWFuIGZsYWcgdGhhdCB0cmFja3MgaWYgYW55IGZvcm0gZmllbGRzIHdpdGhpbiB0aGUgZmllbGRzZXQgaGF2ZSB2YWxpZGF0aW9uIGVycm9ycy5cbiAgICogVGhpcyBwcm9wZXJ0eSBpcyB1c2VkIHRvIGNvbnRyb2wgYWNjb3JkaW9uIGJlaGF2aW9yIHdoZW4gZXJyb3JzIGFyZSBwcmVzZW50LCBwcmV2ZW50aW5nXG4gICAqIHVzZXJzIGZyb20gY29sbGFwc2luZyB0aGUgYWNjb3JkaW9uIHdoZW4gdGhleSBuZWVkIHRvIHNlZSBhbmQgYWRkcmVzcyB2YWxpZGF0aW9uIGlzc3Vlcy5cbiAgICogSXQncyBhdXRvbWF0aWNhbGx5IHVwZGF0ZWQgd2hlbiB2YWxpZGF0aW9uIGVycm9yIGV2ZW50cyBhcmUgcmVjZWl2ZWQgZnJvbSBjaGlsZCBmb3JtIGZpZWxkcy5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJPZiBGaWVsZHNldENvbXBvbmVudFxuICAgKi9cbiAgaGFzVmFsaWRhdGlvbkVycm9yczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlIGZvciBkdXBsaWNhdGUgdmFsdWVzLlxuICAgKiBAc3VtbWFyeSBTdG9yZXMgdGhlIGVycm9yIG1lc3NhZ2Ugd2hlbiBhIHVzZXIgYXR0ZW1wdHMgdG8gYWRkIGEgZHVwbGljYXRlIHZhbHVlXG4gICAqIHRvIHRoZSBmaWVsZHNldC4gVXNlZCB0byBkaXNwbGF5IHVuaXF1ZW5lc3MgdmFsaWRhdGlvbiBmZWVkYmFjay5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZyB8IHVuZGVmaW5lZH1cbiAgICogQG1lbWJlck9mIEZpZWxkc2V0Q29tcG9uZW50XG4gICAqL1xuICBpc1VuaXF1ZUVycm9yOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBSZWZlcmVuY2UgdG8gQ1JVRCBvcGVyYXRpb24gY29uc3RhbnRzIGZvciB0ZW1wbGF0ZSB1c2FnZS5cbiAgICogQHN1bW1hcnkgRXhwb3NlcyB0aGUgT3BlcmF0aW9uS2V5cyBlbnVtIHRvIHRoZSBjb21wb25lbnQgdGVtcGxhdGUsIGVuYWJsaW5nIGNvbmRpdGlvbmFsXG4gICAqIHJlbmRlcmluZyBhbmQgYmVoYXZpb3IgYmFzZWQgb24gb3BlcmF0aW9uIHR5cGVzLiBUaGlzIHByb3RlY3RlZCByZWFkb25seSBwcm9wZXJ0eSBlbnN1cmVzXG4gICAqIHRoYXQgdGVtcGxhdGUgbG9naWMgY2FuIGFjY2VzcyBvcGVyYXRpb24gY29uc3RhbnRzIHdoaWxlIG1haW50YWluaW5nIGVuY2Fwc3VsYXRpb24gYW5kXG4gICAqIHByZXZlbnRpbmcgYWNjaWRlbnRhbCBtb2RpZmljYXRpb24gb2YgdGhlIGVudW0gdmFsdWVzLlxuICAgKlxuICAgKiBAdHlwZSB7Q3J1ZE9wZXJhdGlvbnN9XG4gICAqIEBkZWZhdWx0IE9wZXJhdGlvbktleXMuQ1JFQVRFXG4gICAqIEBtZW1iZXJPZiBGaWVsZHNldENvbXBvbmVudFxuICAgKi9cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IE9wZXJhdGlvbktleXM6IENydWRPcGVyYXRpb25zID0gT3BlcmF0aW9uS2V5cy5DUkVBVEU7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBBbmd1bGFyIGNoYW5nZSBkZXRlY3Rpb24gc2VydmljZS5cbiAgICogQHN1bW1hcnkgSW5qZWN0ZWQgc2VydmljZSB0aGF0IHByb3ZpZGVzIG1hbnVhbCBjb250cm9sIG92ZXIgY2hhbmdlIGRldGVjdGlvbiBjeWNsZXMuXG4gICAqIFRoaXMgaXMgZXNzZW50aWFsIGZvciBlbnN1cmluZyB0aGF0IHByb2dyYW1tYXRpYyBET00gY2hhbmdlcyAobGlrZSBzZXR0aW5nIGFjY29yZGlvblxuICAgKiBhdHRyaWJ1dGVzKSBhcmUgcHJvcGVybHkgcmVmbGVjdGVkIGluIHRoZSBjb21wb25lbnQncyBzdGF0ZSBhbmQgdHJpZ2dlciBhcHByb3ByaWF0ZVxuICAgKiB2aWV3IHVwZGF0ZXMgd2hlbiBtb2RpZmljYXRpb25zIG9jY3VyIG91dHNpZGUgdGhlIG5vcm1hbCBBbmd1bGFyIGNoYW5nZSBkZXRlY3Rpb24gZmxvdy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge0NoYW5nZURldGVjdG9yUmVmfVxuICAgKiBAbWVtYmVyT2YgRmllbGRzZXRDb21wb25lbnRcbiAgICovXG4gIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmID0gaW5qZWN0KENoYW5nZURldGVjdG9yUmVmKTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEFuZ3VsYXIgUmVuZGVyZXIyIHNlcnZpY2UgZm9yIHNhZmUgRE9NIG1hbmlwdWxhdGlvbi5cbiAgICogQHN1bW1hcnkgSW5qZWN0ZWQgc2VydmljZSB0aGF0IHByb3ZpZGVzIGEgc2FmZSwgcGxhdGZvcm0tYWdub3N0aWMgd2F5IHRvIG1hbmlwdWxhdGUgRE9NIGVsZW1lbnRzLlxuICAgKiBUaGlzIHNlcnZpY2UgZW5zdXJlcyBwcm9wZXIgaGFuZGxpbmcgb2YgRE9NIG9wZXJhdGlvbnMgYWNyb3NzIGRpZmZlcmVudCBwbGF0Zm9ybXMgYW5kIGVudmlyb25tZW50cyxcbiAgICogaW5jbHVkaW5nIHNlcnZlci1zaWRlIHJlbmRlcmluZyBhbmQgd2ViIHdvcmtlcnMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtSZW5kZXJlcjJ9XG4gICAqIEBtZW1iZXJPZiBGaWVsZHNldENvbXBvbmVudFxuICAgKi9cbiAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyID0gaW5qZWN0KFJlbmRlcmVyMik7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBUcmFuc2xhdGlvbiBzZXJ2aWNlIGZvciBpbnRlcm5hdGlvbmFsaXphdGlvbi5cbiAgICogQHN1bW1hcnkgSW5qZWN0ZWQgc2VydmljZSB0aGF0IHByb3ZpZGVzIHRyYW5zbGF0aW9uIGNhcGFiaWxpdGllcyBmb3IgVUkgdGV4dC5cbiAgICogVXNlZCB0byB0cmFuc2xhdGUgYnV0dG9uIGxhYmVscyBhbmQgdmFsaWRhdGlvbiBtZXNzYWdlcyBiYXNlZCBvbiB0aGUgY3VycmVudCBsb2NhbGUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtUcmFuc2xhdGVTZXJ2aWNlfVxuICAgKiBAbWVtYmVyT2YgRmllbGRzZXRDb21wb25lbnRcbiAgICovXG4gIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSA9IGluamVjdChUcmFuc2xhdGVTZXJ2aWNlKTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIExvY2FsaXplZCBsYWJlbCB0ZXh0IGZvciBhY3Rpb24gYnV0dG9ucy5cbiAgICogQHN1bW1hcnkgRHluYW1pYyBidXR0b24gbGFiZWwgdGhhdCBjaGFuZ2VzIGJhc2VkIG9uIHRoZSBjdXJyZW50IG9wZXJhdGlvbiBtb2RlLlxuICAgKiBTaG93cyBcIkFkZFwiIGZvciBjcmVhdGUgb3BlcmF0aW9ucyBhbmQgXCJVcGRhdGVcIiBmb3IgZWRpdCBvcGVyYXRpb25zLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyT2YgRmllbGRzZXRDb21wb25lbnRcbiAgICovXG4gIGJ1dHRvbkxhYmVsITogc3RyaW5nO1xuXG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBMb2NhbGl6ZWQgbGFiZWwgdGV4dCBmb3IgYWN0aW9uIGJ1dHRvbnMuXG4gICAqIEBzdW1tYXJ5IER5bmFtaWMgYnV0dG9uIGxhYmVsIHRoYXQgY2hhbmdlcyBiYXNlZCBvbiB0aGUgY3VycmVudCBvcGVyYXRpb24gbW9kZS5cbiAgICogU2hvd3MgXCJDYW5jZWxcIiBmb3IgdXBkYXRlIG9wZXJhdGlvbnNcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlck9mIEZpZWxkc2V0Q29tcG9uZW50XG4gICAqL1xuICBidXR0b25DYW5jZWxMYWJlbCE6IHN0cmluZztcblxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ29tcG9uZW50IGNvbnN0cnVjdG9yIHRoYXQgaW5pdGlhbGl6ZXMgdGhlIGZpZWxkc2V0IHdpdGggaWNvbnMgYW5kIGNvbXBvbmVudCBuYW1lLlxuICAgKiBAc3VtbWFyeSBDYWxscyB0aGUgcGFyZW50IE5neEJhc2VDb21wb25lbnQgY29uc3RydWN0b3Igd2l0aCB0aGUgY29tcG9uZW50IG5hbWUgYW5kXG4gICAqIHJlcXVpcmVkIElvbmljIGljb25zIChhbGVydENpcmNsZU91dGxpbmUgZm9yIHZhbGlkYXRpb24gZXJyb3JzIGFuZCBjcmVhdGVPdXRsaW5lIGZvciBhZGQgYWN0aW9ucykuXG4gICAqIFNldHMgdXAgdGhlIGZvdW5kYXRpb25hbCBjb21wb25lbnQgc3RydWN0dXJlIGFuZCBpY29uIHJlZ2lzdHJ5LlxuICAgKlxuICAgKiBAbWVtYmVyT2YgRmllbGRzZXRDb21wb25lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCdGaWVsZHNldENvbXBvbmVudCcpO1xuICAgIGFkZEljb25zKHsgYWxlcnRDaXJjbGVPdXRsaW5lLCBjcmVhdGVPdXRsaW5lIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDb21wb25lbnQgaW5pdGlhbGl6YXRpb24gbGlmZWN5Y2xlIG1ldGhvZC5cbiAgICogQHN1bW1hcnkgSW5pdGlhbGl6ZXMgdGhlIGNvbXBvbmVudCBieSBzZXR0aW5nIHVwIHJlcG9zaXRvcnkgcmVsYXRpb25zaGlwcyBpZiBhIG1vZGVsIGV4aXN0cyxcbiAgICogYW5kIGNvbmZpZ3VyZXMgdGhlIGluaXRpYWwgYnV0dG9uIGxhYmVsIGZvciB0aGUgYWRkIGFjdGlvbiBiYXNlZCBvbiB0aGUgY3VycmVudCBsb2NhbGUuXG4gICAqIFRoaXMgbWV0aG9kIGVuc3VyZXMgcHJvcGVyIHNldHVwIG9mIHRyYW5zbGF0aW9uIHNlcnZpY2VzIGFuZCBjb21wb25lbnQgc3RhdGUuXG4gICAqXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKiBAbWVtYmVyT2YgRmllbGRzZXRDb21wb25lbnRcbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmKHRoaXMubW9kZWwpXG4gICAgICB0aGlzLl9yZXBvc2l0b3J5ID0gdGhpcy5yZXBvc2l0b3J5O1xuICAgIHRoaXMuYnV0dG9uTGFiZWwgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCh0aGlzLmxvY2FsZSArICcuYWRkJyk7XG4gICAgdGhpcy5idXR0b25DYW5jZWxMYWJlbCA9IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KHRoaXMubG9jYWxlICsgJy5jYW5jZWwnKTtcbiAgfVxuXG4gICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEluaXRpYWxpemVzIHRoZSBjb21wb25lbnQgc3RhdGUgYWZ0ZXIgdmlldyBhbmQgY2hpbGQgY29tcG9uZW50cyBhcmUgcmVuZGVyZWQuXG4gICAqIEBzdW1tYXJ5IFRoaXMgbGlmZWN5Y2xlIGhvb2sgaW1wbGVtZW50cyBpbnRlbGxpZ2VudCBhdXRvLXN0YXRlIG1hbmFnZW1lbnQgYmFzZWQgb24gdGhlIGN1cnJlbnRcbiAgICogQ1JVRCBvcGVyYXRpb24uIEZvciBSRUFEIGFuZCBERUxFVEUgb3BlcmF0aW9ucywgdGhlIGZpZWxkc2V0IGF1dG9tYXRpY2FsbHkgb3BlbnMgdG8gcHJvdmlkZVxuICAgKiBpbW1lZGlhdGUgYWNjZXNzIHRvIGluZm9ybWF0aW9uLCB3aGlsZSBDUkVBVEUgYW5kIFVQREFURSBvcGVyYXRpb25zIGtlZXAgaXQgY2xvc2VkIHRvIG1haW50YWluXG4gICAqIGEgY2xlYW4gaW5pdGlhbCBpbnRlcmZhY2UuIFRoZSBtZXRob2QgZGlyZWN0bHkgbWFuaXB1bGF0ZXMgdGhlIERPTSB0byBlbnN1cmUgcHJvcGVyIGFjY29yZGlvblxuICAgKiBzeW5jaHJvbml6YXRpb24gYW5kIHRyaWdnZXJzIGNoYW5nZSBkZXRlY3Rpb24gdG8gcmVmbGVjdCB0aGUgcHJvZ3JhbW1hdGljIHN0YXRlIGNoYW5nZXMuXG4gICAqXG4gICAqIEBtZXJtYWlkXG4gICAqIHNlcXVlbmNlRGlhZ3JhbVxuICAgKiAgIHBhcnRpY2lwYW50IEEgYXMgQW5ndWxhciBMaWZlY3ljbGVcbiAgICogICBwYXJ0aWNpcGFudCBGIGFzIEZpZWxkc2V0Q29tcG9uZW50XG4gICAqICAgcGFydGljaXBhbnQgRCBhcyBET01cbiAgICogICBwYXJ0aWNpcGFudCBDIGFzIENoYW5nZURldGVjdG9yXG4gICAqXG4gICAqICAgQS0+PkY6IG5nQWZ0ZXJWaWV3SW5pdCgpXG4gICAqICAgYWx0IG9wZXJhdGlvbiBpcyBSRUFEIG9yIERFTEVURVxuICAgKiAgICAgRi0+PkY6IFNldCBpc09wZW4gPSB0cnVlXG4gICAqICAgICBGLT4+RDogUXVlcnkgaW9uLWFjY29yZGlvbi1ncm91cCBlbGVtZW50XG4gICAqICAgICBhbHQgYWNjb3JkaW9uIGVsZW1lbnQgZXhpc3RzXG4gICAqICAgICAgIEYtPj5EOiBTZXQgdmFsdWUgYXR0cmlidXRlIHRvICdvcGVuJ1xuICAgKiAgICAgZW5kXG4gICAqICAgZW5kXG4gICAqICAgRi0+PkM6IGRldGVjdENoYW5nZXMoKVxuICAgKiAgIEMtPj5GOiBVcGRhdGUgdmlldyB3aXRoIG5ldyBzdGF0ZVxuICAgKlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICogQG1lbWJlck9mIEZpZWxkc2V0Q29tcG9uZW50XG4gICAqL1xuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3BlcmF0aW9uID09PSBPcGVyYXRpb25LZXlzLlJFQUQgfHwgdGhpcy5vcGVyYXRpb24gPT09IE9wZXJhdGlvbktleXMuREVMRVRFKSB7XG4gICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgICAvLyBoaWRkZW4gcmVtb3ZlIGJ1dHRvblxuICAgICAgY29uc3QgYWNjb3JkaW9uRWxlbWVudCA9IHRoaXMuY29tcG9uZW50Py5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1hY2NvcmRpb24tZ3JvdXAnKTtcbiAgICAgIGlmKHRoaXMuYWNjb3JkaW9uQ29tcG9uZW50KVxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShhY2NvcmRpb25FbGVtZW50LCAndmFsdWUnLCAnb3BlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbnB1dHMgPSB0aGlzLmNvbXBvbmVudD8ubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbcmVxdWlyZWRdJyk7XG4gICAgICB0aGlzLmlzUmVxdWlyZWQgPSBpbnB1dHMubGVuZ3RoID4gMDtcbiAgICAgIGlmKHRoaXMuaXNSZXF1aXJlZCkge1xuICAgICAgICB0aGlzLmFjY29yZGlvbkNvbXBvbmVudC52YWx1ZSA9ICdvcGVuJztcbiAgICAgICAgdGhpcy5oYW5kbGVBY2NvcmRpb25Ub2dnbGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEhhbmRsZXMgcmVtb3ZhbCBvZiB0aGUgZmllbGRzZXQgd2l0aCBzbGlkZSBhbmltYXRpb24uXG4gICAqIEBzdW1tYXJ5IEluaXRpYXRlcyB0aGUgcmVtb3ZhbCBwcm9jZXNzIGZvciB0aGUgZmllbGRzZXQgd2l0aCBhIHNtb290aCBzbGlkZS11cCBhbmltYXRpb24uXG4gICAqIFRoZSBtZXRob2QgYXBwbGllcyBDU1MgY2xhc3NlcyBmb3IgdGhlIHNsaWRlIGFuaW1hdGlvbiBhbmQgdGhlbiBzYWZlbHkgcmVtb3ZlcyB0aGVcbiAgICogZWxlbWVudCBmcm9tIHRoZSBET00gdXNpbmcgUmVuZGVyZXIyLiBUaGlzIHByb3ZpZGVzIGEgcG9saXNoZWQgdXNlciBleHBlcmllbmNlXG4gICAqIHdoZW4gcmVtb3ZpbmcgZmllbGRzZXQgaW5zdGFuY2VzIGZyb20gZHluYW1pYyBmb3Jtcy5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBET00gZXZlbnQgZnJvbSB0aGUgcmVtb3ZlIGJ1dHRvbiBjbGlja1xuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICogQG1lbWJlck9mIEZpZWxkc2V0Q29tcG9uZW50XG4gICAqL1xuICBoYW5kbGVSZW1vdmVDb21wb25lbnQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5jb21wb25lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkY2YtYW5pbWF0aW9uJywgJ2RjZi1hbmltYXRpb24tc2xpZGUtdG9wLW1lZGl1bScsICdkY2YtYW5pbWF0aW9uLXJldmVyc2UnLCAnZGNmLWFuaW1hdGlvbi1mYXN0Jyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBVc2UgUmVuZGVyZXIyIHRvIHNhZmVseSByZW1vdmUgdGhlIGVsZW1lbnRcbiAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmNvbXBvbmVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIGlmIChwYXJlbnQpXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQocGFyZW50LCB0aGlzLmNvbXBvbmVudC5uYXRpdmVFbGVtZW50KTtcbiAgICB9LCAxNTApO1xuICB9XG5cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEhhbmRsZXMgY3JlYXRpbmcgbmV3IGl0ZW1zIG9yIHRyaWdnZXJpbmcgZ3JvdXAgYWRkaXRpb24gZXZlbnRzLlxuICAgKiBAc3VtbWFyeSBQcm9jZXNzZXMgZm9ybSB2YWxpZGF0aW9uIGV2ZW50cyBmb3IgaXRlbSBjcmVhdGlvbiBvciBlbWl0cyBldmVudHMgdG8gdHJpZ2dlclxuICAgKiB0aGUgYWRkaXRpb24gb2YgbmV3IGZpZWxkc2V0IGdyb3Vwcy4gV2hlbiBjYWxsZWQgd2l0aCB2YWxpZGF0aW9uIGV2ZW50IGRhdGEsIGl0IHZhbGlkYXRlc1xuICAgKiB1bmlxdWVuZXNzIGFuZCBhZGRzIHRoZSBpdGVtIHRvIHRoZSBmaWVsZHNldC4gV2hlbiBjYWxsZWQgd2l0aG91dCBwYXJhbWV0ZXJzLCBpdCB0cmlnZ2Vyc1xuICAgKiBhIGdyb3VwIGFkZGl0aW9uIGV2ZW50IGZvciBwYXJlbnQgY29tcG9uZW50cyB0byBoYW5kbGUuXG4gICAqXG4gICAqIEBwYXJhbSB7Q3VzdG9tRXZlbnQ8SUZpZWxkU2V0VmFsaWRhdGlvbkV2ZW50Pn0gW2V2ZW50XSAtIE9wdGlvbmFsIHZhbGlkYXRpb24gZXZlbnQgY29udGFpbmluZyBmb3JtIGRhdGFcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqIEBtZW1iZXJPZiBGaWVsZHNldENvbXBvbmVudFxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGB0eXBlc2NyaXB0XG4gICAqIC8vIENhbGxlZCBmcm9tIGZvcm0gdmFsaWRhdGlvblxuICAgKiBoYW5kbGVDcmVhdGVJdGVtKHZhbGlkYXRpb25FdmVudCk7XG4gICAqXG4gICAqIC8vIENhbGxlZCB0byB0cmlnZ2VyIGdyb3VwIGFkZGl0aW9uXG4gICAqIGhhbmRsZUNyZWF0ZUl0ZW0oKTtcbiAgICogYGBgXG4gICAqL1xuICBhc3luYyBoYW5kbGVDcmVhdGVJdGVtKGV2ZW50PzogQ3VzdG9tRXZlbnQ8SUZpZWxkU2V0VmFsaWRhdGlvbkV2ZW50Pik6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmKGV2ZW50ICYmIGV2ZW50IGluc3RhbmNlb2YgQ3VzdG9tRXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3Qge2Zvcm1Hcm91cCwgdmFsdWUsIGlzVmFsaWR9ID0gZXZlbnQuZGV0YWlsO1xuICAgICAgdGhpcy5mb3JtR3JvdXAgPSBmb3JtR3JvdXAgYXMgRm9ybUFycmF5O1xuICAgICAgaWYoIXRoaXMubWFwcGVyKVxuICAgICAgICB0aGlzLm1hcHBlciA9IHRoaXMuZ2V0TWFwcGVyKHZhbHVlIGFzIEtleVZhbHVlKTtcbiAgICAgIGlmKGlzVmFsaWQgKXtcbiAgICAgICAgICB0aGlzLmlzVW5pcXVlRXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgdGhpcy5idXR0b25MYWJlbCA9IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KHRoaXMubG9jYWxlICsgJy5hZGQnKTtcbiAgICAgICAgICB0aGlzLnNldFZhbHVlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgIHRoaXMuaXNVbmlxdWVFcnJvciA9ICh2YWx1ZSBhcyBLZXlWYWx1ZSk/Llt0aGlzLnBrXSB8fCB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvd0V2ZW50RW1pdHRlcihFdmVudENvbnN0YW50cy5GSUVMRFNFVF9BRERfR1JPVVAsIHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLmNvbXBvbmVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICBpbmRleDogdGhpcy51cGRhdGluZ0l0ZW0gPyB0aGlzLnVwZGF0aW5nSXRlbS5pbmRleCA6IHRoaXMudmFsdWU/Lmxlbmd0aCxcbiAgICAgICAgcGFyZW50OiB0aGlzLmNoaWxkT2YsXG4gICAgICAgIG9wZXJhdGlvbjogIXRoaXMudXBkYXRpbmdJdGVtID8gT3BlcmF0aW9uS2V5cy5DUkVBVEUgOiBPcGVyYXRpb25LZXlzLlVQREFURVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEhhbmRsZXMgaXRlbSB1cGRhdGUgb3BlcmF0aW9ucyB3aXRoIGZvcm0gc3RhdGUgbWFuYWdlbWVudC5cbiAgICogQHN1bW1hcnkgTG9jYXRlcyBhbiBpdGVtIGluIHRoZSBmb3JtIGFycmF5IGZvciBlZGl0aW5nIGFuZCBwcmVwYXJlcyB0aGUgY29tcG9uZW50XG4gICAqIGZvciB1cGRhdGUgbW9kZS4gVXBkYXRlcyB0aGUgYnV0dG9uIGxhYmVsIHRvIHJlZmxlY3QgdGhlIGVkaXQgc3RhdGUgYW5kIHN0b3Jlc1xuICAgKiB0aGUgaXRlbSBiZWluZyB1cGRhdGVkLiBUcmlnZ2VycyBhIHdpbmRvdyBldmVudCB0byBub3RpZnkgcGFyZW50IGNvbXBvbmVudHMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSB2YWx1ZSAtIFRoZSBpZGVudGlmaWVyIHZhbHVlIG9mIHRoZSBpdGVtIHRvIHVwZGF0ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBUaGUgYXJyYXkgaW5kZXggcG9zaXRpb24gb2YgdGhlIGl0ZW1cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqIEBtZW1iZXJPZiBGaWVsZHNldENvbXBvbmVudFxuICAgKi9cbiAgaGFuZGxlVXBkYXRlSXRlbSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLmZpbmQoY29udHJvbCA9PiBgJHtjb250cm9sLmdldCh0aGlzLnBrKT8udmFsdWV9YC50b0xvd2VyQ2FzZSgpID09PSBjbGVhblNwYWNlcyhgJHt2YWx1ZX1gLCB0cnVlKSkgYXMgRm9ybUNvbnRyb2w7XG4gICAgaWYoaXRlbSkge1xuICAgICAgdGhpcy5idXR0b25MYWJlbCA9IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KHRoaXMubG9jYWxlICsgJy51cGRhdGUnKTtcbiAgICAgIHRoaXMudXBkYXRpbmdJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgaXRlbS52YWx1ZSB8fCB7fSwge2luZGV4fSk7XG4gICAgICB3aW5kb3dFdmVudEVtaXR0ZXIoRXZlbnRDb25zdGFudHMuRklFTERTRVRfVVBEQVRFX0dST1VQLCB7XG4gICAgICAgIHBhcmVudDogdGhpcy5jaGlsZE9mLFxuICAgICAgICBjb21wb25lbnQ6IHRoaXMuY29tcG9uZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDYW5jZWxzIHRoZSB1cGRhdGUgbW9kZSBhbmQgcmVzZXRzIHRoZSBVSSBzdGF0ZS5cbiAgICogQHN1bW1hcnkgRXhpdHMgdGhlIHVwZGF0ZSBtb2RlIGJ5IHJlc2V0dGluZyB0aGUgYnV0dG9uIGxhYmVsIGFuZCBjbGVhcmluZyB0aGUgdXBkYXRpbmcgaXRlbSxcbiAgICogcmVzdG9yaW5nIHRoZSBjb21wb25lbnQgdG8gaXRzIGRlZmF1bHQgc3RhdGUgZm9yIGFkZGluZyBuZXcgaXRlbXMuIE5vdGlmaWVzIHBhcmVudCBjb21wb25lbnRzXG4gICAqIHRoYXQgdGhlIHVwZGF0ZSBvcGVyYXRpb24gaGFzIGJlZW4gY2FuY2VsbGVkLlxuICAgKlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICogQG1lbWJlck9mIEZpZWxkc2V0Q29tcG9uZW50XG4gICAqL1xuICBoYW5kbGVDYW5jZWxVcGRhdGVJdGVtKCk6IHZvaWQge1xuICAgIHRoaXMuYnV0dG9uTGFiZWwgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCh0aGlzLmxvY2FsZSArICcuYWRkJyk7XG4gICAgdGhpcy51cGRhdGluZ0l0ZW0gPSB1bmRlZmluZWQ7XG4gICAgd2luZG93RXZlbnRFbWl0dGVyKEV2ZW50Q29uc3RhbnRzLkZJRUxEU0VUX1VQREFURV9HUk9VUCwge1xuICAgICAgcGFyZW50OiB0aGlzLmNoaWxkT2YsXG4gICAgICBjb21wb25lbnQ6IHRoaXMuY29tcG9uZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICBpbmRleDogdGhpcy52YWx1ZT8ubGVuZ3RoXG4gICAgfSk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gSGFuZGxlcyBpdGVtIHJlbW92YWwgb3BlcmF0aW9ucyB3aXRoIGZvcm0gYXJyYXkgbWFuYWdlbWVudC5cbiAgICogQHN1bW1hcnkgUHJvY2Vzc2VzIGl0ZW0gcmVtb3ZhbCBieSBlaXRoZXIgaGFuZGxpbmcgdmFsaWRhdGlvbiBldmVudHMgb3IgcmVtb3Zpbmcgc3BlY2lmaWNcbiAgICogaXRlbXMgZnJvbSB0aGUgZm9ybSBhcnJheS4gV2hlbiBjYWxsZWQgd2l0aCBhIHZhbGlkYXRpb24gZXZlbnQsIGl0IHRyaWdnZXJzIHZhbHVlIHVwZGF0ZXMuXG4gICAqIFdoZW4gY2FsbGVkIHdpdGggYW4gaWRlbnRpZmllciwgaXQgbG9jYXRlcyBhbmQgcmVtb3ZlcyB0aGUgbWF0Y2hpbmcgaXRlbSBmcm9tIHRoZSBmb3JtIGFycmF5LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZyB8IHVuZGVmaW5lZH0gdmFsdWUgLSBUaGUgaWRlbnRpZmllciBvZiB0aGUgaXRlbSB0byByZW1vdmVcbiAgICogQHBhcmFtIHtDdXN0b21FdmVudH0gW2V2ZW50XSAtIE9wdGlvbmFsIHZhbGlkYXRpb24gZXZlbnQgZm9yIGZvcm0gdXBkYXRlc1xuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICogQG1lbWJlck9mIEZpZWxkc2V0Q29tcG9uZW50XG4gICAqL1xuICBoYW5kbGVSZW1vdmVJdGVtKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQsIGV2ZW50PzogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICBpZihldmVudCAmJiBldmVudCBpbnN0YW5jZW9mIEN1c3RvbUV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIHJldHVybiB0aGlzLnNldFZhbHVlKCk7XG4gICAgfVxuICAgIGNvbnN0IGZvcm1BcnJheSA9IHRoaXMuZm9ybUdyb3VwIGFzIEZvcm1BcnJheTtcbiAgICBjb25zdCBhcnJheUxlbmd0aCA9IGZvcm1BcnJheS5sZW5ndGg7XG4gICAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gZm9ybUFycmF5LmF0KGluZGV4KSBhcyBGb3JtR3JvdXA7XG4gICAgICBpZiAoY2xlYW5TcGFjZXMoZ3JvdXAuZ2V0KHRoaXMucGspPy52YWx1ZSkgPT09IGNsZWFuU3BhY2VzKHZhbHVlIGFzIHN0cmluZykpIHtcbiAgICAgICAgd2luZG93RXZlbnRFbWl0dGVyKEV2ZW50Q29uc3RhbnRzLkZJRUxEU0VUX1JFTU9WRV9HUk9VUCwge1xuICAgICAgICAgIHBhcmVudDogdGhpcy5jaGlsZE9mLFxuICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5jb21wb25lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBmb3JtR3JvdXA6IGdyb3VwXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBIYW5kbGVzIHJlb3JkZXJpbmcgb2YgaXRlbXMgd2l0aGluIHRoZSBmaWVsZHNldCBsaXN0LlxuICAgKiBAc3VtbWFyeSBQcm9jZXNzZXMgZHJhZy1hbmQtZHJvcCByZW9yZGVyIGV2ZW50cyBmcm9tIHRoZSBpb24tcmVvcmRlci1ncm91cCBjb21wb25lbnQuXG4gICAqIFVwZGF0ZXMgYm90aCB0aGUgZGlzcGxheSBpdGVtcyBhcnJheSBhbmQgdGhlIHVuZGVybHlpbmcgdmFsdWUgYXJyYXkgdG8gbWFpbnRhaW5cbiAgICogY29uc2lzdGVuY3kgYmV0d2VlbiBVSSBzdGF0ZSBhbmQgZGF0YSBzdGF0ZS4gUHJlc2VydmVzIGl0ZW0gaW5kaWNlcyBhZnRlciByZW9yZGVyaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge0N1c3RvbUV2ZW50PEl0ZW1SZW9yZGVyRXZlbnREZXRhaWw+fSBldmVudCAtIElvbmljIHJlb3JkZXIgZXZlbnQgY29udGFpbmluZyBzb3VyY2UgYW5kIHRhcmdldCBpbmRpY2VzXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKiBAbWVtYmVyT2YgRmllbGRzZXRDb21wb25lbnRcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgaHRtbFxuICAgKiA8aW9uLXJlb3JkZXItZ3JvdXAgKGlvbkl0ZW1SZW9yZGVyKT1cImhhbmRsZVJlb3JkZXIoJGV2ZW50KVwiPlxuICAgKiAgIDwhLS0gUmVvcmRlcmFibGUgaXRlbXMgLS0+XG4gICAqIDwvaW9uLXJlb3JkZXItZ3JvdXA+XG4gICAqIGBgYFxuICAgKi9cbiAgaGFuZGxlUmVvcmRlckl0ZW1zKGV2ZW50OiBDdXN0b21FdmVudDxJdGVtUmVvcmRlckV2ZW50RGV0YWlsPik6IHZvaWQge1xuICAgY29uc3QgZnJvbUluZGV4ID0gZXZlbnQuZGV0YWlsLmZyb207XG4gICAgY29uc3QgdG9JbmRleCA9IGV2ZW50LmRldGFpbC50bztcblxuICAgIGNvbnN0IGl0ZW1zID0gWy4uLnRoaXMuaXRlbXNdOyAvLyBzdWEgZXN0cnV0dXJhIHZpc3VhbFxuICAgIGNvbnN0IGZvcm1BcnJheSA9IHRoaXMuZm9ybUdyb3VwIGFzIEZvcm1BcnJheTsgLy8gRm9ybUFycmF5IHJlYXRpdm9cblxuICAgIGlmIChmcm9tSW5kZXggIT09IHRvSW5kZXgpIHtcbiAgICAgIC8vIFJlb3JkZW5hciBvcyBkYWRvcyB2aXN1YWlzXG4gICAgICBjb25zdCBpdGVtVG9Nb3ZlID0gaXRlbXMuc3BsaWNlKGZyb21JbmRleCwgMSlbMF07XG4gICAgICBpdGVtcy5zcGxpY2UodG9JbmRleCwgMCwgaXRlbVRvTW92ZSk7XG4gICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4gaXRlbVsnaW5kZXgnXSA9IGluZGV4ICsgMSk7XG5cbiAgICAgIC8vIFJlb3JkZW5hciBvcyBjb250cm9sZXMgZG8gRm9ybUFycmF5XG4gICAgICBjb25zdCBjb250cm9sVG9Nb3ZlID0gZm9ybUFycmF5LmF0KGZyb21JbmRleCk7XG4gICAgICBmb3JtQXJyYXkucmVtb3ZlQXQoZnJvbUluZGV4KTtcbiAgICAgIGZvcm1BcnJheS5pbnNlcnQodG9JbmRleCwgY29udHJvbFRvTW92ZSk7XG4gICAgfVxuICAgIC8vIEZpbmFsaXphIGEgb3BlcmHDp8OjbyBkZSByZW9yZGVyIGRvIElvbmljXG4gICAgZXZlbnQuZGV0YWlsLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEhhbmRsZXMgYWNjb3JkaW9uIHN0YXRlIGNoYW5nZSBldmVudHMgZnJvbSB1c2VyIGludGVyYWN0aW9ucy5cbiAgICogQHN1bW1hcnkgUHJvY2Vzc2VzIEN1c3RvbUV2ZW50IG9iamVjdHMgdHJpZ2dlcmVkIHdoZW4gdXNlcnMgZXhwYW5kIG9yIGNvbGxhcHNlIHRoZSBhY2NvcmRpb24uXG4gICAqIFRoaXMgbWV0aG9kIGV4dHJhY3RzIHRoZSBuZXcgc3RhdGUgZnJvbSB0aGUgZXZlbnQgZGV0YWlscyBhbmQgdXBkYXRlcyB0aGUgY29tcG9uZW50J3NcbiAgICogaW50ZXJuYWwgc3RhdGUgYWNjb3JkaW5nbHkuIEl0IHNwZWNpZmljYWxseSBsaXN0ZW5zIGZvciBJT04tQUNDT1JESU9OLUdST1VQIGV2ZW50cyB0b1xuICAgKiBlbnN1cmUgcHJvcGVyIGV2ZW50IHNvdXJjZSB2YWxpZGF0aW9uIGFuZCBwcmV2ZW50IGhhbmRsaW5nIG9mIHVucmVsYXRlZCBldmVudHMuXG4gICAqXG4gICAqIEBwYXJhbSB7Q3VzdG9tRXZlbnR9IGV2ZW50IC0gVGhlIGV2ZW50IG9iamVjdCBjb250YWluaW5nIGFjY29yZGlvbiBzdGF0ZSBjaGFuZ2UgZGV0YWlsc1xuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICpcbiAgICogQG1lcm1haWRcbiAgICogc2VxdWVuY2VEaWFncmFtXG4gICAqICAgcGFydGljaXBhbnQgVSBhcyBVc2VyXG4gICAqICAgcGFydGljaXBhbnQgSSBhcyBJb24tQWNjb3JkaW9uXG4gICAqICAgcGFydGljaXBhbnQgRiBhcyBGaWVsZHNldENvbXBvbmVudFxuICAgKlxuICAgKiAgIFUtPj5JOiBDbGljayBhY2NvcmRpb24gaGVhZGVyXG4gICAqICAgSS0+PkY6IGhhbmRsZUNoYW5nZShDdXN0b21FdmVudClcbiAgICogICBGLT4+RjogRXh0cmFjdCB0YXJnZXQgYW5kIGRldGFpbCBmcm9tIGV2ZW50XG4gICAqICAgRi0+PkY6IFZhbGlkYXRlIHRhcmdldCBpcyBJT04tQUNDT1JESU9OLUdST1VQXG4gICAqICAgYWx0IHZhbGlkIHRhcmdldFxuICAgKiAgICAgRi0+PkY6IFVwZGF0ZSBpc09wZW4gPSAhIXZhbHVlXG4gICAqICAgZW5kXG4gICAqICAgRi0+Pkk6IFJlZmxlY3QgdXBkYXRlZCBzdGF0ZVxuICAgKlxuICAgKiBAbWVtYmVyT2YgRmllbGRzZXRDb21wb25lbnRcbiAgICovXG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBIYW5kbGVzIGFjY29yZGlvbiB0b2dnbGUgZnVuY3Rpb25hbGl0eSB3aXRoIHZhbGlkYXRpb24gZXJyb3IgY29uc2lkZXJhdGlvbi5cbiAgICogQHN1bW1hcnkgTWFuYWdlcyB0aGUgZXhwYW5kL2NvbGxhcHNlIHN0YXRlIG9mIHRoZSBhY2NvcmRpb24gd2hpbGUgcmVzcGVjdGluZyB2YWxpZGF0aW9uIGVycm9yIHN0YXRlcy5cbiAgICogV2hlbiB2YWxpZGF0aW9uIGVycm9ycyBhcmUgcHJlc2VudCwgdGhlIGFjY29yZGlvbiBjYW5ub3QgYmUgY29sbGFwc2VkIHRvIGVuc3VyZSB1c2VycyBjYW4gc2VlXG4gICAqIGFuZCBhZGRyZXNzIHRoZSBlcnJvcnMuIFdoZW4gbm8gZXJyb3JzIGV4aXN0LCB1c2VycyBjYW4gZnJlZWx5IHRvZ2dsZSB0aGUgYWNjb3JkaW9uIHN0YXRlLlxuICAgKiBUaGlzIG1ldGhvZCBhbHNvIHN0b3BzIGV2ZW50IHByb3BhZ2F0aW9uIHRvIHByZXZlbnQgdW53YW50ZWQgc2lkZSBlZmZlY3RzLlxuICAgKlxuICAgKiBAcGFyYW0ge0N1c3RvbUV2ZW50fSBbZXZlbnRdIC0gT3B0aW9uYWwgZXZlbnQgb2JqZWN0IGZyb20gdXNlciBpbnRlcmFjdGlvblxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICogQG1lbWJlck9mIEZpZWxkc2V0Q29tcG9uZW50XG4gICAqL1xuICBoYW5kbGVBY2NvcmRpb25Ub2dnbGUoZXZlbnQ/OiBDdXN0b21FdmVudCk6IHZvaWQge1xuICAgIGlmKGV2ZW50KVxuICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgaWYoIXRoaXMuaGFzVmFsaWRhdGlvbkVycm9ycykge1xuICAgICAgdGhpcy5hY2NvcmRpb25Db21wb25lbnQudmFsdWUgPSB0aGlzLmlzT3BlbiA/IHVuZGVmaW5lZCA6ICdvcGVuJztcbiAgICAgIHRoaXMuaXNPcGVuID0gISF0aGlzLmFjY29yZGlvbkNvbXBvbmVudC52YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEhhbmRsZXMgdmFsaWRhdGlvbiBlcnJvciBldmVudHMgZnJvbSBjaGlsZCBmb3JtIGZpZWxkcy5cbiAgICogQHN1bW1hcnkgUHJvY2Vzc2VzIHZhbGlkYXRpb24gZXJyb3IgZXZlbnRzIGRpc3BhdGNoZWQgYnkgZm9ybSBmaWVsZHMgd2l0aGluIHRoZSBmaWVsZHNldC5cbiAgICogV2hlbiBlcnJvcnMgYXJlIGRldGVjdGVkLCB0aGUgYWNjb3JkaW9uIGlzIGZvcmNlZCBvcGVuIGFuZCBwcmV2ZW50ZWQgZnJvbSBjb2xsYXBzaW5nXG4gICAqIHRvIGVuc3VyZSB1c2VycyBjYW4gc2VlIHRoZSB2YWxpZGF0aW9uIG1lc3NhZ2VzLiBUaGlzIG1ldGhvZCB1cGRhdGVzIHRoZSBjb21wb25lbnQnc1xuICAgKiBlcnJvciBzdGF0ZSBhbmQgYWNjb3JkaW9uIHZpc2liaWxpdHkgYWNjb3JkaW5nbHkuXG4gICAqXG4gICAqIEBwYXJhbSB7Q3VzdG9tRXZlbnR9IGV2ZW50IC0gQ3VzdG9tIGV2ZW50IGNvbnRhaW5pbmcgdmFsaWRhdGlvbiBlcnJvciBkZXRhaWxzXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKiBAbWVtYmVyT2YgRmllbGRzZXRDb21wb25lbnRcbiAgICovXG4gIGhhbmRsZVZhbGlkYXRpb25FcnJvcihldmVudDogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCB7aGFzRXJyb3JzfSA9IGV2ZW50LmRldGFpbDtcbiAgICB0aGlzLmlzT3BlbiA9IHRoaXMuaGFzVmFsaWRhdGlvbkVycm9ycyA9IGhhc0Vycm9ycztcbiAgICBpZihoYXNFcnJvcnMpXG4gICAgICB0aGlzLmFjY29yZGlvbkNvbXBvbmVudC52YWx1ZSA9ICdvcGVuJztcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBQcm9jZXNzZXMgYW5kIHN0b3JlcyBhIG5ldyBvciB1cGRhdGVkIHZhbHVlIGluIHRoZSBmaWVsZHNldC5cbiAgICogQHN1bW1hcnkgSGFuZGxlcyBib3RoIGNyZWF0ZSBhbmQgdXBkYXRlIG9wZXJhdGlvbnMgZm9yIGZpZWxkc2V0IGl0ZW1zLiBQYXJzZXMgYW5kIGNsZWFuc1xuICAgKiB0aGUgaW5wdXQgdmFsdWUsIGRldGVybWluZXMgdGhlIG9wZXJhdGlvbiB0eXBlIGJhc2VkIG9uIHRoZSB1cGRhdGluZyBzdGF0ZSwgYW5kIGVpdGhlclxuICAgKiBhZGRzIGEgbmV3IGl0ZW0gb3IgdXBkYXRlcyBhbiBleGlzdGluZyBvbmUuIE1haW50YWlucyBkYXRhIGludGVncml0eSBhbmQgVUkgY29uc2lzdGVuY3kuXG4gICAqXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyT2YgRmllbGRzZXRDb21wb25lbnRcbiAgICovXG4gIHByaXZhdGUgc2V0VmFsdWUoKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9ICh0aGlzLmZvcm1Hcm91cCBhcyBGb3JtQXJyYXkpLmNvbnRyb2xzLm1hcCgoe3ZhbHVlfSkgPT4gdmFsdWUpO1xuICAgIHRoaXMuaXRlbXMgPSB0aGlzLnZhbHVlXG4gICAgLmZpbHRlcih2ID0+IHZbdGhpcy5wa10gIT09IHVuZGVmaW5lZClcbiAgICAubWFwKCh2LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uaXRlbU1hcHBlcihPYmplY3QuYXNzaWduKHt9LCB2KSwgdGhpcy5tYXBwZXIpLFxuICAgICAgICBpbmRleDogaW5kZXggKyAxXG4gICAgICB9IGFzIElGaWVsZFNldEl0ZW07XG4gICAgfSk7XG4gICAgY29uc3QgaW5wdXRDb250YWluZXJzID0gdGhpcy5jb21wb25lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGNmLWlucHV0LWl0ZW0nKTtcbiAgICBpbnB1dENvbnRhaW5lcnMuZm9yRWFjaCgoY29udGFpbmVyOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXQsIGlvbi1pbnB1dCwgaW9uLXRleHRhcmVhLCB0ZXh0YXJlYScpIGFzIEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsO1xuICAgICAgaWYoaW5wdXQpXG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgfSlcbiAgICB0aGlzLnVwZGF0aW5nSXRlbSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQXV0b21hdGljYWxseSBjb25maWd1cmVzIHRoZSBmaWVsZCBtYXBwaW5nIGJhc2VkIG9uIHRoZSB2YWx1ZSBzdHJ1Y3R1cmUuXG4gICAqIEBzdW1tYXJ5IEFuYWx5emVzIHRoZSBwcm92aWRlZCB2YWx1ZSBvYmplY3QgdG8gYXV0b21hdGljYWxseSBkZXRlcm1pbmUgdGhlIHByaW1hcnkga2V5XG4gICAqIGFuZCBjcmVhdGUgYXBwcm9wcmlhdGUgZmllbGQgbWFwcGluZ3MgZm9yIGRpc3BsYXkgcHVycG9zZXMuIFNldHMgdXAgdGhlIG1hcHBlciBvYmplY3RcbiAgICogd2l0aCB0aXRsZSwgZGVzY3JpcHRpb24sIGFuZCBpbmRleCBmaWVsZHMgYmFzZWQgb24gdGhlIGF2YWlsYWJsZSBkYXRhIHN0cnVjdHVyZS5cbiAgICpcbiAgICogQHBhcmFtIHtLZXlWYWx1ZX0gdmFsdWUgLSBTYW1wbGUgdmFsdWUgb2JqZWN0IHVzZWQgdG8gZGV0ZXJtaW5lIGZpZWxkIG1hcHBpbmdzXG4gICAqIEByZXR1cm5zIHtLZXlWYWx1ZX0gVGhlIGNvbmZpZ3VyZWQgbWFwcGVyIG9iamVjdFxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyT2YgRmllbGRzZXRDb21wb25lbnRcbiAgICovXG4gIHByaXZhdGUgZ2V0TWFwcGVyKHZhbHVlOiBLZXlWYWx1ZSk6IEtleVZhbHVlIHtcbiAgICBpZighdGhpcy5waylcbiAgICAgIHRoaXMucGsgPSBPYmplY3Qua2V5cyh2YWx1ZSlbMF07XG4gICAgaWYoIU9iamVjdC5rZXlzKHRoaXMubWFwcGVyKS5sZW5ndGgpXG4gICAgICB0aGlzLm1hcHBlclsndGl0bGUnXSA9IHRoaXMucGs7XG4gICAgdGhpcy5tYXBwZXJbJ2luZGV4J10gPSBcImluZGV4XCI7XG4gICAgZm9yKGNvbnN0IGtleSBpbiB2YWx1ZSkge1xuICAgICAgaWYoT2JqZWN0LmtleXModGhpcy5tYXBwZXIpLmxlbmd0aCA+PSAyIHx8IE9iamVjdC5rZXlzKHRoaXMubWFwcGVyKS5sZW5ndGggPT09IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGgpXG4gICAgICAgIGJyZWFrO1xuICAgICAgaWYoIXRoaXMubWFwcGVyWyd0aXRsZSddKSB7XG4gICAgICAgIHRoaXMubWFwcGVyWyd0aXRsZSddID0ga2V5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tYXBwZXJbJ2Rlc2NyaXB0aW9uJ10gPSBrZXk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1hcHBlcjtcbiAgfVxufVxuIiwiXG5cbjxmaWVsZHNldFxuICAoZmllbGRzZXRBZGRHcm91cEV2ZW50KT1cImhhbmRsZUNyZWF0ZUl0ZW0oJGV2ZW50KVwiXG4gIChmaWVsZHNldFJlbW92ZUdyb3VwRXZlbnQpPVwiaGFuZGxlUmVtb3ZlSXRlbSh1bmRlZmluZWQsICRldmVudClcIlxuICBbY2xhc3NdPVwiJ2RjZi1maWVsZHNldCAnICsgb3BlcmF0aW9uXCJcbiAgI2NvbXBvbmVudD5cbiAgPGlvbi1hY2NvcmRpb24tZ3JvdXAgW25nQ2xhc3NdPVwieydvcGVuJzogaXNPcGVuLCAnaGFzVmFsaWRhdGlvbkVycm9ycyc6IGhhc1ZhbGlkYXRpb25FcnJvcnN9XCIgICh2YWxpZGF0aW9uRXJyb3JFdmVudCk9XCJoYW5kbGVWYWxpZGF0aW9uRXJyb3IoJGV2ZW50KVwiICNhY2NvcmRpb25Db21wb25lbnQ+XG4gICAgPGlvbi1hY2NvcmRpb24gdmFsdWU9XCJvcGVuXCI+XG4gICAgICA8aW9uLWl0ZW0gc2xvdD1cImhlYWRlclwiIChjbGljayk9XCJoYW5kbGVBY2NvcmRpb25Ub2dnbGUoJGV2ZW50KVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGNmLWdyaWQgZGNmLWdyaWQtY29sbGFwc2UgZGNmLWZsZXggZGNmLWZsZXgtbWlkZGxlIGRjZi13aWR0aC0xLTFcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGNmLXdpZHRoLWV4cGFuZFwiPlxuICAgICAgICAgICAgPGxlZ2VuZD57eyBuYW1lIHwgdHJhbnNsYXRlIH19PC9sZWdlbmQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgQGlmKCFpc1JlcXVpcmVkICYmIFsnY3JlYXRlJywgJ3VwZGF0ZSddLmluY2x1ZGVzKG9wZXJhdGlvbikpIHtcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkY2Ytd2lkdGgtYXV0byBkY2YtZGVsZXRlXCI+XG4gICAgICAgICAgICAgIDxpb24tYnV0dG9uIGZpbGw9XCJjbGVhclwiIHNpemU9XCJzbWFsbFwiIChjbGljayk9XCJoYW5kbGVSZW1vdmVDb21wb25lbnQoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwidHJhc2gtb3V0bGluZVwiIGNvbG9yPVwiZGFya1wiIHNsb3Q9XCJpY29uLW9ubHlcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9pb24taXRlbT5cbiAgICAgIDxkaXYgc2xvdD1cImNvbnRlbnRcIiBbYXR0ci5hcmlhLWhpZGRlbl09XCIhaXNPcGVuXCI+XG4gICAgICAgIEBpZihtdWx0aXBsZSAmJiBpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICA8aW9uLWxpc3QgY2xhc3M9XCJkY2YtZmllbGRzLWxpc3RcIj5cbiAgICAgICAgICAgIDxpb24tcmVvcmRlci1ncm91cCBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cC5wYXJlbnRcIiBbZGlzYWJsZWRdPVwidXBkYXRpbmdJdGVtXCIgKGlvbkl0ZW1SZW9yZGVyKT1cImhhbmRsZVJlb3JkZXJJdGVtcygkYW55KCRldmVudCkpXCIgI2FjY29yZGlvbkNvbXBvbmVudD5cbiAgICAgICAgICAgICAgQGZvcihpdGVtIG9mIGl0ZW1zOyB0cmFjayBpdGVtLmluZGV4KSB7XG4gICAgICAgICAgICAgICAgPGlvbi1pdGVtIFtuZ0NsYXNzXT1cInsnbm90LXVuaXF1ZSc6IGl0ZW0udGl0bGUgPT09IGlzVW5pcXVlRXJyb3J9XCIgbGluZXM9XCJmdWxsXCIgW2J1dHRvbl09XCJmYWxzZVwiIFtuZ0NsYXNzXT1cInsndXBkYXRpbmcnOiB1cGRhdGluZ0l0ZW0/Lltwa10gPT09IGl0ZW0udGl0bGV9XCI+XG4gICAgICAgICAgICAgICAgICBAaWYoaXRlbXM/Lmxlbmd0aCA+IDEgJiYgIXVwZGF0aW5nSXRlbSkge1xuICAgICAgICAgICAgICAgICAgICA8aW9uLXJlb3JkZXIgc2xvdD1cInN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJzd2FwLXZlcnRpY2FsLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L2lvbi1yZW9yZGVyPlxuICAgICAgICAgICAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cInN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIGNsYXNzPVwiZGNmLXJlb3JkZXItZGlzYWJsZWRcIiBzaXplPVwic21hbGxcIiBuYW1lPVwic3dhcC12ZXJ0aWNhbC1vdXRsaW5lXCIgZGlzYWJsZWQ+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8aW9uLWxhYmVsIFtjb2xvcl09XCIoaXRlbS50aXRsZSA9PT0gaXNVbmlxdWVFcnJvciAmJiAhdXBkYXRpbmdJdGVtLnRpdGxlID09PSBpdGVtLnRpdGxlKSA/ICdkYW5nZXInIDogJydcIj57eyBpdGVtLmluZGV4IH19LiB7eyBpdGVtLnRpdGxlIH19XG4gICAgICAgICAgICAgICAgICAgIEBpZihpdGVtLmRlc2NyaXB0aW9uPy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGlvbi10ZXh0IGNsYXNzPVwiZGNmLXN1YnRpdGxlXCI+e3tpdGVtLmRlc2NyaXB0aW9ufX08L2lvbi10ZXh0PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIEBpZighdXBkYXRpbmdJdGVtIHx8IHVwZGF0aW5nSXRlbT8uW3BrXSAhPT0gaXRlbS50aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICA8aW9uLWJ1dHRvbiBmaWxsPVwiY2xlYXJcIiBzaXplPVwic21hbGxcIiAoY2xpY2spPVwiaGFuZGxlVXBkYXRlSXRlbShpdGVtLnRpdGxlLCAkaW5kZXgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJjcmVhdGUtb3V0bGluZVwiIGNvbG9yPVwiZGFya1wiIHNsb3Q9XCJpY29uLW9ubHlcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIEBpZighdXBkYXRpbmdJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIDxpb24tYnV0dG9uIGZpbGw9XCJjbGVhclwiIHNpemU9XCJzbWFsbFwiIChjbGljayk9XCJoYW5kbGVSZW1vdmVJdGVtKGl0ZW0udGl0bGUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJ0cmFzaC1vdXRsaW5lXCIgY29sb3I9XCJkYXJrXCIgc2xvdD1cImljb24tb25seVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2lvbi1yZW9yZGVyLWdyb3VwPlxuICAgICAgICAgIDwvaW9uLWxpc3Q+XG4gICAgICAgIH1cblxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5cbiAgICAgICAgQGlmKG11bHRpcGxlICYmIFsnY3JlYXRlJywgJ3VwZGF0ZSddLmluY2x1ZGVzKG9wZXJhdGlvbikpIHtcbiAgICAgICAgICBAaWYoaXNVbmlxdWVFcnJvcikge1xuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRjZi1ub3QtdW5pcXVlLWNvbnRhaW5lciBkY2YtYW5pbWF0aW9uIGRjZi1hbmltYXRpb24tYm90dG9tLXNtYWxsIGRjZi1hbmltYXRpb24tZmFzdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiIGRjZi1ncmlkIGRjZi1ncmlkLWNvbGxhcHNlIGRjZi13aWR0aC0xLTEgXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRjZi1hdXRvXCIgW2F0dHIuc3R5bGVdPVwiJ21heC13aWR0aDogNTBweCdcIj5cbiAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiYWxlcnQtY2lyY2xlLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkY2Ytd2lkdGgtZXhwYW5kXCI+XG4gICAgICAgICAgICAgICAgICA8aW9uLXRleHQgY29sb3I9XCJkYW5nZXJcIiBjbGFzcz1cImRjZi10ZXh0LXNtYWxsXCI+e3sgbG9jYWxlICsgJy5ub3RfdW5pcXVlJyB8IHRyYW5zbGF0ZSA6IHsgdmFsdWU6IGlzVW5pcXVlRXJyb3IgfSB9fTwvaW9uLXRleHQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkY2YtbWFyZ2luLWJvdHRvbSBkY2YtZ3JpZCBkY2YtZ3JpZC1jb2xsYXBzZSBkY2YtZmxleFwiPlxuICAgICAgICAgICAgQGlmKHVwZGF0aW5nSXRlbSkge1xuICAgICAgICAgICAgICA8aW9uLWJ1dHRvbiBzaXplPVwic21hbGxcIiBmaWxsPVwiY2xlYXJcIiBjb2xvcj1cImRhbmdlclwiIChjbGljayk9XCJoYW5kbGVDYW5jZWxVcGRhdGVJdGVtKClcIj5cbiAgICAgICAgICAgICAgICB7eyBidXR0b25DYW5jZWxMYWJlbCB9fVxuICAgICAgICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8aW9uLWJ1dHRvbiBzaXplPVwic21hbGxcIiBmaWxsPVwiY2xlYXJcIiBjbGFzcz1cImRjZi1idXR0b24tYWRkXCIgKGNsaWNrKT1cImhhbmRsZUNyZWF0ZUl0ZW0oKVwiPlxuICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImFkZC1vdXRsaW5lXCIgc2xvdD1cInN0YXJ0XCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAge3tidXR0b25MYWJlbH19XG4gICAgICAgICAgICA8L2lvbi1idXR0b24+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2lvbi1hY2NvcmRpb24+XG4gIDwvaW9uLWFjY29yZGlvbi1ncm91cD5cbjwvZmllbGRzZXQ+XG5cbiJdfQ==