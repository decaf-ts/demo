import { __decorate } from "tslib";
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostListener, Input, ViewChild, } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OperationKeys } from '@decaf-ts/db-decorators';
import { NgxCrudFormField } from '../../engine/NgxCrudFormField';
import { Dynamic } from '../../engine/decorators';
import { ForAngularModule } from '../../for-angular.module';
import { IonCheckbox, IonIcon, IonInput, IonItem, IonLabel, IonRadio, IonRadioGroup, IonSelect, IonSelectOption, IonText, IonTextarea, } from '@ionic/angular/standalone';
import { HTML5InputTypes } from '@decaf-ts/ui-decorators';
import { addIcons } from 'ionicons';
import { chevronDownOutline, chevronUpOutline } from 'ionicons/icons';
import { generateRandomValue } from '../../helpers';
import { NgxFormService } from '../../engine/NgxFormService';
import { EventConstants } from '../../engine/constants';
import { getLocaleContextByKey } from '../../i18n/Loader';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular/standalone";
import * as i2 from "@angular/forms";
import * as i3 from "@ngx-translate/core";
const _c0 = ["component"];
const _forTrack0 = ($index, $item) => $item.value;
function CrudFieldComponent_Conditional_0_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-text", 4);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", ctx_r0.type === "password" ? "********" : ctx_r0.value, i0.ɵɵsanitizeHtml);
} }
function CrudFieldComponent_Conditional_0_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "br");
} }
function CrudFieldComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, null, 0);
    i0.ɵɵelementStart(2, "div")(3, "ion-item")(4, "ion-label");
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelement(7, "br");
    i0.ɵɵtemplate(8, CrudFieldComponent_Conditional_0_Conditional_8_Template, 1, 1, "ion-text", 4)(9, CrudFieldComponent_Conditional_0_Conditional_9_Template, 1, 0, "br");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap("dcf-input-item " + ctx_r0.operation);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 4, ctx_r0.label), "");
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r0.value ? 8 : 9);
} }
function CrudFieldComponent_Conditional_1_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-textarea", 6, 0);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵpipe(3, "translate");
} if (rf & 2) {
    i0.ɵɵnextContext();
    const container_r3 = i0.ɵɵreference(2);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("mode", ctx_r0.mode)("hidden", ctx_r0.hidden)("autoGrow", true)("required", ctx_r0.required !== undefined ? ctx_r0.required : null)("minlength", ctx_r0.minlength !== undefined ? ctx_r0.minlength : null)("maxlength", ctx_r0.maxlength !== undefined ? ctx_r0.maxlength : null)("readonly", ctx_r0.readonly !== undefined ? ctx_r0.readonly : null)("inputmode", ctx_r0.inputmode)("spellcheck", ctx_r0.spellcheck)("rows", ctx_r0.rows)("labelPlacement", ctx_r0.labelPlacement)("value", ctx_r0.value)("fill", ctx_r0.fill)("errorText", ctx_r0.getErrors(container_r3))("placeholder", ctx_r0.translatable ? i0.ɵɵpipeBind1(2, 17, ctx_r0.placeholder) : ctx_r0.placeholder)("formControlName", ctx_r0.name)("label", ctx_r0.translatable ? i0.ɵɵpipeBind1(3, 19, ctx_r0.label) : ctx_r0.label);
} }
function CrudFieldComponent_Conditional_1_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-item")(1, "ion-checkbox", 10, 2);
    i0.ɵɵlistener("ionChange", function CrudFieldComponent_Conditional_1_Conditional_4_Template_ion_checkbox_ionChange_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.checked = !ctx_r0.checked); });
    i0.ɵɵelement(4, "span", 4);
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const container_r3 = i0.ɵɵreference(2);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("mode", ctx_r0.mode)("errorText", ctx_r0.getErrors(container_r3))("hidden", ctx_r0.hidden)("labelPlacement", ctx_r0.labelPlacement)("justify", ctx_r0.justify)("value", ctx_r0.value)("checked", ctx_r0.checked)("readonly", ctx_r0.readonly)("formControlName", ctx_r0.name);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 10, ctx_r0.label), i0.ɵɵsanitizeHtml);
} }
function CrudFieldComponent_Conditional_1_Conditional_5_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-item")(1, "ion-radio", 12);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    i0.ɵɵnextContext(2);
    const container_r3 = i0.ɵɵreference(2);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("errorText", ctx_r0.getErrors(container_r3))("mode", ctx_r0.mode)("hidden", ctx_r0.hidden)("labelPlacement", ctx_r0.labelPlacement)("alignment", ctx_r0.alignment)("justify", ctx_r0.justify)("readonly", ctx_r0.readonly)("value", option_r5.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.translatable ? i0.ɵɵpipeBind1(3, 9, option_r5 == null ? null : option_r5.text) : option_r5 == null ? null : option_r5.text);
} }
function CrudFieldComponent_Conditional_1_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-radio-group", 7, 0)(2, "label", 11);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(5, CrudFieldComponent_Conditional_1_Conditional_5_For_6_Template, 4, 11, "ion-item", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("formControlName", ctx_r0.name)("value", ctx_r0.value);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("for", ctx_r0.path);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 4, ctx_r0.label));
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.options);
} }
function CrudFieldComponent_Conditional_1_Conditional_6_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-select-option", 13);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r6.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, option_r6.text), " ");
} }
function CrudFieldComponent_Conditional_1_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-select", 8, 0);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵrepeaterCreate(4, CrudFieldComponent_Conditional_1_Conditional_6_For_5_Template, 3, 4, "ion-select-option", 13, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const container_r3 = i0.ɵɵreference(2);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("mode", ctx_r0.mode)("hidden", ctx_r0.hidden)("labelPlacement", ctx_r0.labelPlacement)("label", ctx_r0.translatable ? i0.ɵɵpipeBind1(2, 10, ctx_r0.label) : ctx_r0.label)("value", ctx_r0.value)("fill", ctx_r0.fill)("placeholder", ctx_r0.translatable ? i0.ɵɵpipeBind1(3, 12, ctx_r0.placeholder) : ctx_r0.placeholder)("formControlName", ctx_r0.name)("errorText", ctx_r0.getErrors(container_r3))("interface", ctx_r0.interface);
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r0.options);
} }
function CrudFieldComponent_Conditional_1_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-input", 9, 0);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵpipe(3, "translate");
} if (rf & 2) {
    i0.ɵɵnextContext();
    const container_r3 = i0.ɵɵreference(2);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("type", ctx_r0.type)("mode", ctx_r0.mode)("hidden", ctx_r0.hidden)("inputmode", ctx_r0.inputmode)("labelPlacement", ctx_r0.labelPlacement)("required", ctx_r0.required !== undefined ? ctx_r0.required : false)("minlength", ctx_r0.minlength !== undefined ? ctx_r0.minlength : null)("maxlength", ctx_r0.maxlength !== undefined ? ctx_r0.maxlength : null)("readonly", ctx_r0.readonly !== undefined ? ctx_r0.readonly : null)("max", ctx_r0.max !== undefined ? ctx_r0.max : null)("min", ctx_r0.min !== undefined ? ctx_r0.min : null)("pattern", ctx_r0.pattern !== undefined ? ctx_r0.pattern : null)("step", ctx_r0.step !== undefined ? ctx_r0.step : null)("fill", ctx_r0.fill)("placeholder", ctx_r0.translatable ? i0.ɵɵpipeBind1(2, 18, ctx_r0.placeholder) : ctx_r0.placeholder)("formControlName", ctx_r0.name)("errorText", ctx_r0.getErrors(container_r3))("label", ctx_r0.translatable ? i0.ɵɵpipeBind1(3, 20, ctx_r0.label) : ctx_r0.label);
} }
function CrudFieldComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0, 3);
    i0.ɵɵelementStart(1, "div", 5, 1);
    i0.ɵɵlistener("createGroupEvent", function CrudFieldComponent_Conditional_1_Template_div_createGroupEvent_1_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.multiple ? ctx_r0.handleFieldsetCreateGroupEvent($event) : ""); });
    i0.ɵɵtemplate(3, CrudFieldComponent_Conditional_1_Conditional_3_Template, 4, 21, "ion-textarea", 6)(4, CrudFieldComponent_Conditional_1_Conditional_4_Template, 6, 12, "ion-item")(5, CrudFieldComponent_Conditional_1_Conditional_5_Template, 7, 6, "ion-radio-group", 7)(6, CrudFieldComponent_Conditional_1_Conditional_6_Template, 6, 14, "ion-select", 8)(7, CrudFieldComponent_Conditional_1_Conditional_7_Template, 4, 22, "ion-input", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r0.getActiveFormGroup);
    i0.ɵɵadvance();
    i0.ɵɵclassMap("dcf-input-item " + (ctx_r0.operation || "create"));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.type === "textarea" ? 3 : ctx_r0.type === "checkbox" ? 4 : ctx_r0.type === "radio" ? 5 : ctx_r0.type === "select" ? 6 : 7);
} }
/**
 * @description A dynamic form field component for CRUD operations.
 * @summary The CrudFieldComponent is a versatile form field component that adapts to different
 * input types and CRUD operations. It extends NgxCrudFormField to inherit form handling capabilities
 * and implements lifecycle hooks to properly initialize, render, and clean up. This component
 * supports various input types (text, number, date, select, etc.), validation rules, and styling
 * options, making it suitable for building dynamic forms for create, read, update, and delete
 * operations.
 *
 * @param {CrudOperations} operation - The CRUD operation being performed (create, read, update, delete)
 * @param {string} name - The field name, used as form control identifier
 * @param {PossibleInputTypes} type - The input type (text, number, date, select, etc.)
 * @param {string|number|Date} value - The initial value of the field
 * @param {boolean} disabled - Whether the field is disabled
 * @param {string} label - The display label for the field
 * @param {string} placeholder - Placeholder text when field is empty
 * @param {string} format - Format pattern for the field value
 * @param {boolean} hidden - Whether the field should be hidden
 * @param {number|Date} max - Maximum allowed value
 * @param {number} maxlength - Maximum allowed length
 * @param {number|Date} min - Minimum allowed value
 * @param {number} minlength - Minimum allowed length
 * @param {string} pattern - Validation pattern
 * @param {boolean} readonly - Whether the field is read-only
 * @param {boolean} required - Whether the field is required
 * @param {number} step - Step value for number inputs
 * @param {FormGroup} formGroup - The parent form group
 * @param {StringOrBoolean} translatable - Whether field labels should be translated
 *
 * @component CrudFieldComponent
 * @example
 * <ngx-decaf-crud-field
 *   operation="create"
 *   name="firstName"
 *   type="text"
 *   label="<NAME>"
 *   placeholder="<NAME>"
 *   [value]="model.firstName"
 *   [disabled]="model.readOnly">
 *
 *
 * @memberOf module:for-angular
 */
let CrudFieldComponent = class CrudFieldComponent extends NgxCrudFormField {
    constructor() {
        super(...arguments);
        /**
         * @description The parent field path, if this field is nested.
         * @summary Specifies the full dot-delimited path of the parent field. This is only set when the field is nested.
         *
         * @type {string}
         * @memberOf CrudFieldComponent
         */
        /**
         * @description The parent field path for nested field structures.
         * @summary Specifies the full dot-delimited path of the parent field when this field
         * is part of a nested structure. This is used for hierarchical form organization
         * and proper form control resolution in complex form structures.
         *
         * @type {string}
         * @default ''
         * @memberOf CrudFieldComponent
         */
        this.childOf = '';
        /**
         * @description The initial value of the field.
         * @summary Sets the initial value of the form field. This can be a string, number, or Date
         * depending on the field type. For select fields, this should match one of the option values.
         *
         * @type {string | number | Date}
         * @default ''
         * @memberOf CrudFieldComponent
         */
        this.value = '';
        /**
         * @description Interface style for select inputs.
         * @summary Specifies the interface style for select inputs, such as 'alert', 'action-sheet', or 'popover'.
         * This determines how the select options are presented to the user.
         *
         * @type {SelectInterface}
         * @memberOf CrudFieldComponent
         */
        this.interface = 'popover';
        /**
         * @description Spellcheck attribute for text inputs.
         * @summary Enables or disables spellchecking for text inputs.
         * When true, the browser will check the spelling of the input text.
         *
         * @type {boolean}
         * @default false
         * @memberOf CrudFieldComponent
         */
        this.spellcheck = false;
        /**
         * @description Input mode for text inputs.
         * @summary Hints at the type of data that might be entered by the user while editing the element.
         * This can affect the virtual keyboard layout on mobile devices.
         *
         * @type {'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'}
         * @default 'none'
         * @memberOf CrudFieldComponent
         */
        this.inputmode = 'none';
        /**
         * @description Autocomplete behavior for the field.
         * @summary Specifies whether and how the browser should automatically complete the input.
         * This can improve user experience by suggesting previously entered values.
         *
         * @type {AutocompleteTypes}
         * @default 'off'
         * @memberOf CrudFieldComponent
         */
        this.autocomplete = 'off';
        /**
         * @description Fill style for the field.
         * @summary Determines the fill style of the field, such as 'outline' or 'solid'.
         * This affects the border and background of the field.
         *
         * @type {'outline' | 'solid'}
         * @default 'outline'
         * @memberOf CrudFieldComponent
         */
        this.fill = 'outline';
        /**
         * @description Placement of the label relative to the field.
         * @summary Specifies where the label should be placed relative to the field.
         * Options include 'start', 'end', 'floating', 'stacked', and 'fixed'.
         *
         * @type {'start' | 'end' | 'floating' | 'stacked' | 'fixed'}
         * @default 'floating'
         * @memberOf CrudFieldComponent
         */
        this.labelPlacement = 'floating';
        /**
         * @description Update mode for the field.
         * @summary Determines when the field value should be updated in the form model.
         * Options include 'change', 'blur', and 'submit'.
         *
         * @type {FieldUpdateMode}
         * @default 'change'
         * @memberOf CrudFieldComponent
         */
        this.updateOn = 'change';
        /**
         * @description Indicates if this field supports multiple values.
         * @summary When true, this field can handle multiple values, typically used in
         * multi-select scenarios or when the field is part of a form array structure
         * that allows multiple entries of the same field type.
         *
         * @type {boolean}
         * @default false
         * @memberOf CrudFieldComponent
         */
        this.multiple = false;
        /**
         * @description Unique identifier for the current record.
         * @summary A unique identifier for the current record being displayed or manipulated.
         * This is typically used in conjunction with the primary key for operations on specific records.
         *
         * @type {string | number}
         */
        this.uid = generateRandomValue(12);
        /**
         * @description Translatability of field labels.
         * @summary Indicates whether the field labels should be translated based on the current language settings.
         * This is useful for applications supporting multiple languages.
         *
         * @type {StringOrBoolean}
         * @default true
         * @memberOf CrudFieldComponent
         */
        this.translatable = true;
        /**
         * @description Index of the currently active form group in a form array.
         * @summary When working with multiple form groups (form arrays), this indicates
         * which form group is currently active or being edited. This is used to manage
         * focus and data binding in multi-entry scenarios.
         *
         * @type {number}
         * @default 0
         * @memberOf CrudFieldComponent
         */
        this.activeFormGroup = 0;
    }
    /**
     * @description Gets the currently active form group based on context.
     * @summary Returns the appropriate FormGroup based on whether this field supports
     * multiple values. For single-value fields, returns the main form group.
     * For multi-value fields, returns the form group at the active index from the parent FormArray.
     *
     * @returns {FormGroup} The currently active FormGroup for this field
     * @memberOf CrudFieldComponent
     */
    get getActiveFormGroup() {
        const formGroup = this.formGroup;
        return this.multiple
            ? formGroup.parent?.at(this.activeFormGroup)
            : formGroup;
    }
    /**
     * Returns a list of options for select or radio inputs, with their `text` property
     * localized if it does not already include the word 'options'. The localization key
     * is generated from the component's label, replacing 'label' with 'options'.
     *
     * @returns {CrudFieldOption[]} The array of parsed and localized options.
     * @memberOf CrudFieldComponent
     */
    get parsedOptions() {
        return this.options.map((option) => {
            return {
                ...option,
                text: !option.text.includes('options') ?
                    getLocaleContextByKey(`${this.label.toLowerCase().replace('label', 'options')}`, option.text) : option.text
            };
        });
    }
    /**
     * @description Component initialization lifecycle method.
     * @summary Initializes the field component based on the operation type and field configuration.
     * For READ and DELETE operations, removes the form group to make fields read-only.
     * For other operations, sets up icons, configures multi-value support if needed,
     * and sets default values for radio buttons if no value is provided.
     *
     * @returns {void}
     * @memberOf CrudFieldComponent
     */
    ngOnInit() {
        if (this.options?.length)
            this.options = this.parsedOptions;
        if ([OperationKeys.READ, OperationKeys.DELETE].includes(this.operation)) {
            this.formGroup = undefined;
        }
        else {
            addIcons({ chevronDownOutline, chevronUpOutline });
            if (this.multiple) {
                this.formGroup = this.getActiveFormGroup;
                this.formGroupArray = this.formGroup.parent;
            }
            if (this.type === HTML5InputTypes.RADIO && !this.value)
                this.formGroup?.get(this.name)?.setValue(this.options[0].value); // TODO: migrate to RenderingEngine
        }
    }
    /**
     * @description Component after view initialization lifecycle method.
     * @summary Calls the parent afterViewInit method for READ and DELETE operations.
     * This ensures proper initialization of read-only fields that don't require
     * form functionality but still need view setup.
     *
     * @returns {void}
     * @memberOf CrudFieldComponent
     */
    ngAfterViewInit() {
        if ([OperationKeys.READ, OperationKeys.DELETE].includes(this.operation))
            super.afterViewInit();
    }
    /**
     * @description Component cleanup lifecycle method.
     * @summary Performs cleanup operations for READ and DELETE operations by calling
     * the parent onDestroy method. This ensures proper resource cleanup for
     * read-only field components.
     *
     * @returns {void}
     * @memberOf CrudFieldComponent
     */
    ngOnDestroy() {
        if ([OperationKeys.READ, OperationKeys.DELETE].includes(this.operation))
            this.onDestroy();
    }
    /**
     * @description Handles fieldset group creation events from parent fieldsets.
     * @summary Processes events triggered when a new group needs to be added to a fieldset.
     * Validates the current form group, checks for uniqueness if applicable, and either
     * creates a new group or provides validation feedback. Updates the active form group
     * and resets the field for new input after successful creation.
     *
     * @param {CustomEvent} event - The fieldset create group event containing group details
     * @returns {void}
     * @memberOf CrudFieldComponent
     */
    handleFieldsetCreateGroupEvent(event) {
        event.stopImmediatePropagation();
        const { parent, component, index, operation } = event.detail;
        const formGroup = this.formGroup;
        const parentFormGroup = this.formGroup?.parent;
        const isValid = NgxFormService.validateFields(formGroup);
        const indexToCheck = operation === OperationKeys.CREATE ?
            index === 0 ? index : parentFormGroup.length - 1 : index;
        const isUnique = NgxFormService.isUniqueOnGroup(formGroup, indexToCheck, operation || OperationKeys.CREATE);
        event = new CustomEvent(EventConstants.FIELDSET_ADD_GROUP, {
            detail: { isValid: isValid && isUnique, value: formGroup.value, formGroup: parentFormGroup, formService: NgxFormService },
        });
        component.dispatchEvent(event);
        if (isValid && isUnique) {
            const newIndex = parentFormGroup.length;
            if (operation === OperationKeys.CREATE) {
                NgxFormService.addGroupToParent(parentFormGroup?.parent, parent, newIndex);
                this.activeFormGroup = newIndex;
            }
            else {
                this.activeFormGroup = newIndex - 1;
            }
            this.formGroup = this.getActiveFormGroup;
            // NgxFormService.reset(this.formGroup as FormGroup);
            this.formControl = this.formGroup.get(this.name);
            // NgxFormService.reset(this.formControl);
            // this.component.nativeElement.setFocus();
        }
        else {
            if (isUnique)
                this.component.nativeElement.setFocus();
        }
    }
    /**
     * @description Handles fieldset group update events from parent fieldsets.
     * @summary Processes events triggered when an existing group needs to be updated.
     * Updates the active form group index and refreshes the form group and form control
     * references to point to the group being edited.
     *
     * @param {CustomEvent} event - The fieldset update group event containing update details
     * @returns {void}
     * @memberOf CrudFieldComponent
     */
    handleFieldsetUpdateGroupEvent(event) {
        const { index } = event.detail;
        this.activeFormGroup = index;
        this.formGroup = this.getActiveFormGroup;
        this.formControl = this.formGroup.get(this.name);
        this.value = this.formControl.value;
    }
    /**
     * @description Handles fieldset group removal events from parent fieldsets.
     * @summary Processes events triggered when a group needs to be removed from a fieldset.
     * Removes the specified group from the form array, updates the active form group index,
     * and refreshes the form references. Dispatches a confirmation event back to the component.
     *
     * @param {CustomEvent} event - The fieldset remove group event containing removal details
     * @returns {void}
     * @memberOf CrudFieldComponent
     */
    handleFieldsetRemoveGroupEvent(event) {
        const { component, index } = event.detail;
        const formArray = this.formGroup?.parent;
        formArray.removeAt(index);
        this.activeFormGroup = formArray.length === 1 ? 0 : formArray.length - 1;
        this.formGroup = this.getActiveFormGroup;
        this.formControl = this.formGroup.get(this.name);
        this.formGroupArray = formArray;
        event = new CustomEvent(EventConstants.FIELDSET_REMOVE_GROUP, {
            detail: { value: true },
        });
        component.dispatchEvent(event);
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵCrudFieldComponent_BaseFactory; return function CrudFieldComponent_Factory(__ngFactoryType__) { return (ɵCrudFieldComponent_BaseFactory || (ɵCrudFieldComponent_BaseFactory = i0.ɵɵgetInheritedFactory(CrudFieldComponent)))(__ngFactoryType__ || CrudFieldComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CrudFieldComponent, selectors: [["ngx-decaf-crud-field"]], viewQuery: function CrudFieldComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.component = _t.first);
        } }, hostVars: 1, hostBindings: function CrudFieldComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("fieldsetAddGroupEvent", function CrudFieldComponent_fieldsetAddGroupEvent_HostBindingHandler($event) { return ctx.handleFieldsetCreateGroupEvent($event); }, false, i0.ɵɵresolveWindow)("fieldsetUpdateGroupEvent", function CrudFieldComponent_fieldsetUpdateGroupEvent_HostBindingHandler($event) { return ctx.handleFieldsetUpdateGroupEvent($event); }, false, i0.ɵɵresolveWindow)("fieldsetRemoveGroupEvent", function CrudFieldComponent_fieldsetRemoveGroupEvent_HostBindingHandler($event) { return ctx.handleFieldsetRemoveGroupEvent($event); }, false, i0.ɵɵresolveWindow);
        } if (rf & 2) {
            i0.ɵɵattribute("id", ctx.uid);
        } }, inputs: { operation: "operation", name: "name", path: "path", childOf: "childOf", type: "type", value: "value", disabled: "disabled", label: "label", placeholder: "placeholder", format: "format", hidden: "hidden", max: "max", maxlength: "maxlength", min: "min", minlength: "minlength", pattern: "pattern", readonly: "readonly", required: "required", step: "step", equals: "equals", different: "different", lessThan: "lessThan", lessThanOrEqual: "lessThanOrEqual", greaterThan: "greaterThan", greaterThanOrEqual: "greaterThanOrEqual", cols: "cols", rows: "rows", alignment: "alignment", checked: "checked", justify: "justify", cancelText: "cancelText", interface: "interface", options: "options", mode: "mode", spellcheck: "spellcheck", inputmode: "inputmode", autocomplete: "autocomplete", fill: "fill", labelPlacement: "labelPlacement", updateOn: "updateOn", formGroup: "formGroup", formControl: "formControl", multiple: "multiple", uid: "uid", translatable: "translatable", activeFormGroup: "activeFormGroup", pk: "pk" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 2, vars: 1, consts: [["component", ""], ["container", ""], ["checkboxElement", "", "component", ""], [3, "formGroup"], [3, "innerHTML"], [3, "createGroupEvent"], [3, "mode", "hidden", "autoGrow", "required", "minlength", "maxlength", "readonly", "inputmode", "spellcheck", "rows", "labelPlacement", "value", "fill", "errorText", "placeholder", "formControlName", "label"], [3, "formControlName", "value"], ["toggleIcon", "chevron-down-outline", "expandedIcon", "chevron-up-outline", 3, "mode", "hidden", "labelPlacement", "label", "value", "fill", "placeholder", "formControlName", "errorText", "interface"], [3, "type", "mode", "hidden", "inputmode", "labelPlacement", "required", "minlength", "maxlength", "readonly", "max", "min", "pattern", "step", "fill", "placeholder", "formControlName", "errorText", "label"], [3, "ionChange", "mode", "errorText", "hidden", "labelPlacement", "justify", "value", "checked", "readonly", "formControlName"], [1, "dcf-radio-group-label", 3, "for"], [3, "errorText", "mode", "hidden", "labelPlacement", "alignment", "justify", "readonly", "value"], [3, "value"]], template: function CrudFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CrudFieldComponent_Conditional_0_Template, 10, 6, "ng-container")(1, CrudFieldComponent_Conditional_1_Template, 8, 4, "ng-container", 3);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.operation === "read" || ctx.operation === "delete" ? 0 : 1);
        } }, dependencies: [ForAngularModule, i1.IonText, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.PatternValidator, i2.FormGroupDirective, i2.FormControlName, i3.TranslatePipe, IonInput,
            IonItem,
            IonCheckbox,
            IonRadioGroup,
            IonRadio,
            IonSelect,
            IonSelectOption,
            IonLabel,
            IonTextarea], styles: [".dcf-input-item.create[_ngcontent-%COMP%], .dcf-input-item.update[_ngcontent-%COMP%]{margin-bottom:1.8rem;margin-top:0!important}.dcf-input-item.create.checkbox[_ngcontent-%COMP%] + .checkbox[_ngcontent-%COMP%], .dcf-input-item.update.checkbox[_ngcontent-%COMP%] + .checkbox[_ngcontent-%COMP%]{margin-top:-.25rem!important}.dcf-input-item.create[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%], .dcf-input-item.update[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--border-color: transparent}.dcf-input-item.create[_ngcontent-%COMP%]   ion-item.dcf-text-wrap[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .dcf-input-item.update[_ngcontent-%COMP%]   ion-item.dcf-text-wrap[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{white-space:wrap!important;word-break:break-all!important}.dcf-input-item.read[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], .dcf-input-item.delete[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-weight:600}@media (prefers-color-scheme: light){.dcf-input-item.read[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], .dcf-input-item.delete[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--dcf-color-gray-7)}}.dcf-input-item.read[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%], .dcf-input-item.delete[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{display:block;margin-top:.5rem!important}.dcf-input-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-end: 0rem;--padding-start: 0px !important;--padding-top: 0px !important;--background: transparent;--background-hover-opacity: .1;--background-activated-opacity: .15;--background-focused-opacity: .15}@media (prefers-color-scheme: dark){.dcf-input-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--border-color: var(--dcf-color-gray-6)}}@media (prefers-color-scheme: light){.dcf-input-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background-hover: var(--dcf-color-primary);--background-focused: var(--dcf-color-primary);--border-color: var(--dcf-color-gray-2)}}.dcf-input-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dcf-input-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-weight:400!important;font-size:.925rem;min-height:.5rem!important}.dcf-input-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.dcf-display-block), .dcf-input-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]:not(.dcf-display-block){display:inline-block}.dcf-input-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   span.dcf-display-block[_ngcontent-%COMP%], .dcf-input-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-text.dcf-display-block[_ngcontent-%COMP%]{display:block!important}ion-textarea[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{scrollbar-width:thin!important;margin-bottom:.5rem!important}ion-select.dcf-select-label-placement-floating[_ngcontent-%COMP%]::part(label){line-height:1.2rem!important}.dcf-proccessing[_ngcontent-%COMP%], .dcf-proccessing[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{pointer-events:none;touch-action:none;cursor:text}ion-checkbox[_ngcontent-%COMP%]{--size: 1.5rem;--checkbox-background-checked: var(--dcf-color-primary);--checkmark-width: 2px}ion-item[_ngcontent-%COMP%]{--inner-padding-start: .75rem}ion-checkbox[_ngcontent-%COMP%]::part(container){border-radius:50%;padding:3px}@media (prefers-color-scheme: light){ion-checkbox[_ngcontent-%COMP%]::part(container){border:2px solid var(--dcf-color-primary)}}ion-item[_ngcontent-%COMP%]   .dcf-radio-group-label[_ngcontent-%COMP%], ion-radio-group[_ngcontent-%COMP%]   .dcf-radio-group-label[_ngcontent-%COMP%]{font-weight:600}ion-item[_ngcontent-%COMP%]   .dcf-radio-group-label[_ngcontent-%COMP%] ~ ion-item[_ngcontent-%COMP%], ion-radio-group[_ngcontent-%COMP%]   .dcf-radio-group-label[_ngcontent-%COMP%] ~ ion-item[_ngcontent-%COMP%]{margin-top:.5rem;--inner-padding-start: .75rem}ion-item[_ngcontent-%COMP%] + .dcf-helper[_ngcontent-%COMP%], ion-radio-group[_ngcontent-%COMP%] + .dcf-helper[_ngcontent-%COMP%]{padding-left:.75rem;position:relative}.dcf-error[_ngcontent-%COMP%]{position:absolute;color:var(--dcf-color-danger)!important;font-size:.8rem!important;font-weight:600!important;line-height:1.1rem;box-sizing:border-box;z-index:9999;margin-top:0;animation-duration:.1s;animation-timing-function:ease-out;animation-fill-mode:both;animation-name:_ngcontent-%COMP%_fadeTopSmallAnimation;display:flex;align-items:flex-start;gap:.25rem}.dcf-error[_ngcontent-%COMP%]   .ti[_ngcontent-%COMP%], .dcf-error[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{position:relative;top:2px!important;min-width:20px;font-size:1rem!important;text-align:left}.dcf-helper[_ngcontent-%COMP%]{font-size:.875rem!important;font-weight:500;margin-top:.25rem;margin-bottom:-.75rem}.dcf-helper.dcf-has-action[_ngcontent-%COMP%]{cursor:pointer;color:var(--dcf-color-gray-7)!important;text-decoration:underline}.dcf-error[_ngcontent-%COMP%] + .dcf-helper[_ngcontent-%COMP%]{padding-top:1rem}@keyframes _ngcontent-%COMP%_fadeTopSmallAnimation{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_fadeBottomSmallAnimation{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_fadeTopMediumAnimation{0%{opacity:0;transform:translateY(-50px)}to{opacity:1;transform:translateY(0)}}  ion-textarea{min-height:80px!important;scrollbar-color:#888 #f0f0f0;scrollbar-width:thin}"] }); }
};
CrudFieldComponent = __decorate([
    Dynamic()
], CrudFieldComponent);
export { CrudFieldComponent };
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CrudFieldComponent, [{
        type: Component,
        args: [{ standalone: true, imports: [
                    ForAngularModule,
                    IonInput,
                    IonItem,
                    IonCheckbox,
                    IonRadioGroup,
                    IonRadio,
                    IonSelect,
                    IonSelectOption,
                    IonLabel,
                    IonText,
                    IonTextarea,
                    IonIcon
                ], selector: 'ngx-decaf-crud-field', schemas: [CUSTOM_ELEMENTS_SCHEMA], host: { '[attr.id]': 'uid' }, template: "@if(operation === 'read' || operation === 'delete') {\n  <ng-container #component>\n    <div [class]=\"'dcf-input-item ' + operation\">\n      <ion-item>\n        <ion-label>\n          {{ label | translate }}<br />\n          @if(value) {\n            <ion-text  [innerHTML]=\"type === 'password' ? '********' : value\"></ion-text>\n          } @else {\n            <br />\n          }\n        </ion-label>\n      </ion-item>\n    </div>\n  </ng-container>\n} @else {\n  <ng-container [formGroup]=\"getActiveFormGroup\">\n    <div #container [class]=\"'dcf-input-item ' + (operation || 'create')\" (createGroupEvent)=\"multiple ? handleFieldsetCreateGroupEvent($event) : ''\">\n        @if(type === 'textarea') {\n          <ion-textarea\n            [mode]=\"mode\"\n            [hidden]=\"hidden\"\n            [autoGrow]=\"true\"\n            [required]=\"required !== undefined ? required : null\"\n            [minlength]=\"minlength !== undefined ? minlength : null\"\n            [maxlength]=\"maxlength !== undefined ? maxlength : null\"\n            [readonly]=\"readonly !== undefined ? readonly : null\"\n            [inputmode]=\"inputmode\"\n            [spellcheck]=\"spellcheck\"\n            [rows]=\"rows\"\n            [labelPlacement]=\"labelPlacement\"\n            [value]=\"value\"\n            [fill]=\"fill\"\n            [errorText]=\"getErrors(container)\"\n            [placeholder]=\"translatable ? (placeholder | translate) : placeholder\"\n            [formControlName]=\"name\"\n            [label]=\"translatable ? (label | translate) : label\"\n           #component>\n          </ion-textarea>\n        }\n        @else if(type === 'checkbox') {\n          <ion-item>\n            <ion-checkbox\n              #checkboxElement\n\n              [mode]=\"mode\"\n              [errorText]=\"getErrors(container)\"\n              [hidden]=\"hidden\"\n              [labelPlacement]=\"labelPlacement\"\n              [justify]=\"justify\"\n              [value]=\"value\"\n              [checked]=\"checked\"\n              [readonly]=\"readonly\"\n              (ionChange)=\"checked = !checked\"\n              [formControlName]=\"name\"\n             #component>\n              <span [innerHTML]=\"label | translate\"></span>\n            </ion-checkbox>\n          </ion-item>\n        }\n        @else if(type === 'radio') {\n          <ion-radio-group [formControlName]=\"name\" [value]=\"value\" #component>\n            <label class=\"dcf-radio-group-label\" [for]=\"path\">{{label | translate}}</label>\n            @for(option of options; track option) {\n              <ion-item>\n                <ion-radio\n                  [errorText]=\"getErrors(container)\"\n                  [mode]=\"mode\"\n                  [hidden]=\"hidden\"\n                  [labelPlacement]=\"labelPlacement\"\n                  [alignment]=\"alignment\"\n                  [justify]=\"justify\"\n                  [readonly]=\"readonly\"\n                  [value]=\"option.value\"\n                >{{ translatable ?  (option?.text | translate) : option?.text }}</ion-radio>\n              </ion-item>\n            }\n          </ion-radio-group>\n        }\n        @else if(type === 'select') {\n            <ion-select\n              toggleIcon=\"chevron-down-outline\"\n              expandedIcon=\"chevron-up-outline\"\n\n              [mode]=\"mode\"\n              [hidden]=\"hidden\"\n              [labelPlacement]=\"labelPlacement\"\n              [label]=\"translatable ? (label | translate) : label\"\n              [value]=\"value\"\n              [fill]=\"fill\"\n              [placeholder]=\"translatable ? (placeholder | translate) : placeholder\"\n              [formControlName]=\"name\"\n              [errorText]=\"getErrors(container)\"\n              [interface]=\"interface\"  #component>\n              @for(option of options; track option.value) {\n                <ion-select-option [value]=\"option.value\">\n                  {{ option.text | translate }}\n                </ion-select-option>\n              }\n            </ion-select>\n        }\n        @else {\n          <ion-input\n            [type]=\"type\"\n            [mode]=\"mode\"\n            [hidden]=\"hidden\"\n            [inputmode]=\"inputmode\"\n            [labelPlacement]=\"labelPlacement\"\n            [required]=\"required !== undefined ? required : false\"\n            [minlength]=\"minlength !== undefined ? minlength : null\"\n            [maxlength]=\"maxlength !== undefined ? maxlength : null\"\n            [readonly]=\"readonly !== undefined ? readonly : null\"\n            [max]=\"max !== undefined ? max : null\"\n            [min]=\"min !== undefined ? min : null\"\n            [pattern]=\"pattern !== undefined ? pattern : null\"\n            [step]=\"step !== undefined ? step : null\"\n            [fill]=\"fill\"\n            [placeholder]=\"translatable ? (placeholder | translate) : placeholder\"\n            [formControlName]=\"name\"\n            [errorText]=\"getErrors(container)\"\n            [label]=\"translatable ? (label | translate) : label\" #component />\n        }\n    </div>\n  </ng-container>\n}\n\n", styles: [".dcf-input-item.create,.dcf-input-item.update{margin-bottom:1.8rem;margin-top:0!important}.dcf-input-item.create.checkbox+.checkbox,.dcf-input-item.update.checkbox+.checkbox{margin-top:-.25rem!important}.dcf-input-item.create ion-item,.dcf-input-item.update ion-item{--border-color: transparent}.dcf-input-item.create ion-item.dcf-text-wrap ion-label>*,.dcf-input-item.update ion-item.dcf-text-wrap ion-label>*{white-space:wrap!important;word-break:break-all!important}.dcf-input-item.read ion-label,.dcf-input-item.delete ion-label{font-weight:600}@media (prefers-color-scheme: light){.dcf-input-item.read ion-label,.dcf-input-item.delete ion-label{color:var(--dcf-color-gray-7)}}.dcf-input-item.read ion-text,.dcf-input-item.delete ion-text{display:block;margin-top:.5rem!important}.dcf-input-item ion-item{--padding-end: 0rem;--padding-start: 0px !important;--padding-top: 0px !important;--background: transparent;--background-hover-opacity: .1;--background-activated-opacity: .15;--background-focused-opacity: .15}@media (prefers-color-scheme: dark){.dcf-input-item ion-item{--border-color: var(--dcf-color-gray-6)}}@media (prefers-color-scheme: light){.dcf-input-item ion-item{--background-hover: var(--dcf-color-primary);--background-focused: var(--dcf-color-primary);--border-color: var(--dcf-color-gray-2)}}.dcf-input-item ion-item span,.dcf-input-item ion-item ion-text{font-weight:400!important;font-size:.925rem;min-height:.5rem!important}.dcf-input-item ion-item span:not(.dcf-display-block),.dcf-input-item ion-item ion-text:not(.dcf-display-block){display:inline-block}.dcf-input-item ion-item span.dcf-display-block,.dcf-input-item ion-item ion-text.dcf-display-block{display:block!important}ion-textarea textarea{scrollbar-width:thin!important;margin-bottom:.5rem!important}ion-select.dcf-select-label-placement-floating::part(label){line-height:1.2rem!important}.dcf-proccessing,.dcf-proccessing *{pointer-events:none;touch-action:none;cursor:text}ion-checkbox{--size: 1.5rem;--checkbox-background-checked: var(--dcf-color-primary);--checkmark-width: 2px}ion-item{--inner-padding-start: .75rem}ion-checkbox::part(container){border-radius:50%;padding:3px}@media (prefers-color-scheme: light){ion-checkbox::part(container){border:2px solid var(--dcf-color-primary)}}ion-item .dcf-radio-group-label,ion-radio-group .dcf-radio-group-label{font-weight:600}ion-item .dcf-radio-group-label~ion-item,ion-radio-group .dcf-radio-group-label~ion-item{margin-top:.5rem;--inner-padding-start: .75rem}ion-item+.dcf-helper,ion-radio-group+.dcf-helper{padding-left:.75rem;position:relative}.dcf-error{position:absolute;color:var(--dcf-color-danger)!important;font-size:.8rem!important;font-weight:600!important;line-height:1.1rem;box-sizing:border-box;z-index:9999;margin-top:0;animation-duration:.1s;animation-timing-function:ease-out;animation-fill-mode:both;animation-name:fadeTopSmallAnimation;display:flex;align-items:flex-start;gap:.25rem}.dcf-error .ti,.dcf-error ion-icon{position:relative;top:2px!important;min-width:20px;font-size:1rem!important;text-align:left}.dcf-helper{font-size:.875rem!important;font-weight:500;margin-top:.25rem;margin-bottom:-.75rem}.dcf-helper.dcf-has-action{cursor:pointer;color:var(--dcf-color-gray-7)!important;text-decoration:underline}.dcf-error+.dcf-helper{padding-top:1rem}@keyframes fadeTopSmallAnimation{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeBottomSmallAnimation{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeTopMediumAnimation{0%{opacity:0;transform:translateY(-50px)}to{opacity:1;transform:translateY(0)}}::ng-deep ion-textarea{min-height:80px!important;scrollbar-color:#888 #f0f0f0;scrollbar-width:thin}\n"] }]
    }], null, { operation: [{
            type: Input,
            args: [{ required: true }]
        }], name: [{
            type: Input,
            args: [{ required: true }]
        }], path: [{
            type: Input,
            args: [{ required: true }]
        }], childOf: [{
            type: Input
        }], type: [{
            type: Input,
            args: [{ required: true }]
        }], value: [{
            type: Input
        }], disabled: [{
            type: Input
        }], label: [{
            type: Input,
            args: [{ required: true }]
        }], placeholder: [{
            type: Input
        }], format: [{
            type: Input
        }], hidden: [{
            type: Input
        }], max: [{
            type: Input
        }], maxlength: [{
            type: Input
        }], min: [{
            type: Input
        }], minlength: [{
            type: Input
        }], pattern: [{
            type: Input
        }], readonly: [{
            type: Input
        }], required: [{
            type: Input
        }], step: [{
            type: Input
        }], equals: [{
            type: Input
        }], different: [{
            type: Input
        }], lessThan: [{
            type: Input
        }], lessThanOrEqual: [{
            type: Input
        }], greaterThan: [{
            type: Input
        }], greaterThanOrEqual: [{
            type: Input
        }], cols: [{
            type: Input
        }], rows: [{
            type: Input
        }], alignment: [{
            type: Input
        }], checked: [{
            type: Input
        }], justify: [{
            type: Input
        }], cancelText: [{
            type: Input
        }], interface: [{
            type: Input
        }], options: [{
            type: Input
        }], mode: [{
            type: Input
        }], spellcheck: [{
            type: Input
        }], inputmode: [{
            type: Input
        }], autocomplete: [{
            type: Input
        }], fill: [{
            type: Input
        }], labelPlacement: [{
            type: Input
        }], updateOn: [{
            type: Input
        }], component: [{
            type: ViewChild,
            args: ['component', { read: ElementRef }]
        }], formGroup: [{
            type: Input
        }], formControl: [{
            type: Input
        }], multiple: [{
            type: Input
        }], uid: [{
            type: Input
        }], translatable: [{
            type: Input
        }], activeFormGroup: [{
            type: Input
        }], pk: [{
            type: Input
        }], handleFieldsetCreateGroupEvent: [{
            type: HostListener,
            args: ['window:fieldsetAddGroupEvent', ['$event']]
        }], handleFieldsetUpdateGroupEvent: [{
            type: HostListener,
            args: ['window:fieldsetUpdateGroupEvent', ['$event']]
        }], handleFieldsetRemoveGroupEvent: [{
            type: HostListener,
            args: ['window:fieldsetRemoveGroupEvent', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CrudFieldComponent, { className: "CrudFieldComponent", filePath: "components/crud-field/crud-field.component.ts", lineNumber: 106 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J1ZC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvY3J1ZC1maWVsZC9jcnVkLWZpZWxkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9jcnVkLWZpZWxkL2NydWQtZmllbGQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1Qsc0JBQXNCLEVBQ3RCLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWEsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkUsT0FBTyxFQUFrQixhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUNMLFdBQVcsRUFDWCxPQUFPLEVBQ1AsUUFBUSxFQUNSLE9BQU8sRUFDUCxRQUFRLEVBQ1IsUUFBUSxFQUNSLGFBQWEsRUFDYixTQUFTLEVBQ1QsZUFBZSxFQUNmLE9BQU8sRUFDUCxXQUFXLEdBQ1osTUFBTSwyQkFBMkIsQ0FBQztBQUNuQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNwQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNB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LFFBQVE7a0JBRFAsS0FBSztZQVdHLFNBQVM7a0JBRGpCLFNBQVM7bUJBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQVluQyxTQUFTO2tCQURqQixLQUFLO1lBY0csV0FBVztrQkFEbkIsS0FBSztZQWNHLFFBQVE7a0JBRGhCLEtBQUs7WUFXRyxHQUFHO2tCQURYLEtBQUs7WUFjTixZQUFZO2tCQURYLEtBQUs7WUFnQk4sZUFBZTtrQkFEZCxLQUFLO1lBd0JOLEVBQUU7a0JBREQsS0FBSztZQTBHTiw4QkFBOEI7a0JBRDdCLFlBQVk7bUJBQUMsOEJBQThCLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFnRHhELDhCQUE4QjtrQkFEN0IsWUFBWTttQkFBQyxpQ0FBaUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQXFCM0QsOEJBQThCO2tCQUQ3QixZQUFZO21CQUFDLGlDQUFpQyxFQUFFLENBQUMsUUFBUSxDQUFDOztrRkFqdkJoRCxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUFycmF5LCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQXV0b2NvbXBsZXRlVHlwZXMsIFNlbGVjdEludGVyZmFjZSB9IGZyb20gJ0Bpb25pYy9jb3JlJztcbmltcG9ydCB7IENydWRPcGVyYXRpb25zLCBPcGVyYXRpb25LZXlzIH0gZnJvbSAnQGRlY2FmLXRzL2RiLWRlY29yYXRvcnMnO1xuaW1wb3J0IHsgTmd4Q3J1ZEZvcm1GaWVsZCB9IGZyb20gJy4uLy4uL2VuZ2luZS9OZ3hDcnVkRm9ybUZpZWxkJztcbmltcG9ydCB7IER5bmFtaWMgfSBmcm9tICcuLi8uLi9lbmdpbmUvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBDcnVkRmllbGRPcHRpb24sIEZpZWxkVXBkYXRlTW9kZSwgUG9zc2libGVJbnB1dFR5cGVzLCBTdHJpbmdPckJvb2xlYW4gfSBmcm9tICcuLi8uLi9lbmdpbmUvdHlwZXMnO1xuaW1wb3J0IHsgRm9yQW5ndWxhck1vZHVsZSB9IGZyb20gJy4uLy4uL2Zvci1hbmd1bGFyLm1vZHVsZSc7XG5pbXBvcnQge1xuICBJb25DaGVja2JveCxcbiAgSW9uSWNvbixcbiAgSW9uSW5wdXQsXG4gIElvbkl0ZW0sXG4gIElvbkxhYmVsLFxuICBJb25SYWRpbyxcbiAgSW9uUmFkaW9Hcm91cCxcbiAgSW9uU2VsZWN0LFxuICBJb25TZWxlY3RPcHRpb24sXG4gIElvblRleHQsXG4gIElvblRleHRhcmVhLFxufSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJztcbmltcG9ydCB7IEhUTUw1SW5wdXRUeXBlcyB9IGZyb20gJ0BkZWNhZi10cy91aS1kZWNvcmF0b3JzJztcbmltcG9ydCB7IGFkZEljb25zIH0gZnJvbSAnaW9uaWNvbnMnO1xuaW1wb3J0IHsgY2hldnJvbkRvd25PdXRsaW5lLCBjaGV2cm9uVXBPdXRsaW5lIH0gZnJvbSAnaW9uaWNvbnMvaWNvbnMnO1xuaW1wb3J0IHsgZ2VuZXJhdGVSYW5kb21WYWx1ZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgTmd4Rm9ybVNlcnZpY2UgfSBmcm9tICcuLi8uLi9lbmdpbmUvTmd4Rm9ybVNlcnZpY2UnO1xuaW1wb3J0IHsgRXZlbnRDb25zdGFudHMgfSBmcm9tICcuLi8uLi9lbmdpbmUvY29uc3RhbnRzJztcbmltcG9ydCB7IGdldExvY2FsZUNvbnRleHRCeUtleSB9IGZyb20gJy4uLy4uL2kxOG4vTG9hZGVyJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQSBkeW5hbWljIGZvcm0gZmllbGQgY29tcG9uZW50IGZvciBDUlVEIG9wZXJhdGlvbnMuXG4gKiBAc3VtbWFyeSBUaGUgQ3J1ZEZpZWxkQ29tcG9uZW50IGlzIGEgdmVyc2F0aWxlIGZvcm0gZmllbGQgY29tcG9uZW50IHRoYXQgYWRhcHRzIHRvIGRpZmZlcmVudFxuICogaW5wdXQgdHlwZXMgYW5kIENSVUQgb3BlcmF0aW9ucy4gSXQgZXh0ZW5kcyBOZ3hDcnVkRm9ybUZpZWxkIHRvIGluaGVyaXQgZm9ybSBoYW5kbGluZyBjYXBhYmlsaXRpZXNcbiAqIGFuZCBpbXBsZW1lbnRzIGxpZmVjeWNsZSBob29rcyB0byBwcm9wZXJseSBpbml0aWFsaXplLCByZW5kZXIsIGFuZCBjbGVhbiB1cC4gVGhpcyBjb21wb25lbnRcbiAqIHN1cHBvcnRzIHZhcmlvdXMgaW5wdXQgdHlwZXMgKHRleHQsIG51bWJlciwgZGF0ZSwgc2VsZWN0LCBldGMuKSwgdmFsaWRhdGlvbiBydWxlcywgYW5kIHN0eWxpbmdcbiAqIG9wdGlvbnMsIG1ha2luZyBpdCBzdWl0YWJsZSBmb3IgYnVpbGRpbmcgZHluYW1pYyBmb3JtcyBmb3IgY3JlYXRlLCByZWFkLCB1cGRhdGUsIGFuZCBkZWxldGVcbiAqIG9wZXJhdGlvbnMuXG4gKlxuICogQHBhcmFtIHtDcnVkT3BlcmF0aW9uc30gb3BlcmF0aW9uIC0gVGhlIENSVUQgb3BlcmF0aW9uIGJlaW5nIHBlcmZvcm1lZCAoY3JlYXRlLCByZWFkLCB1cGRhdGUsIGRlbGV0ZSlcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIGZpZWxkIG5hbWUsIHVzZWQgYXMgZm9ybSBjb250cm9sIGlkZW50aWZpZXJcbiAqIEBwYXJhbSB7UG9zc2libGVJbnB1dFR5cGVzfSB0eXBlIC0gVGhlIGlucHV0IHR5cGUgKHRleHQsIG51bWJlciwgZGF0ZSwgc2VsZWN0LCBldGMuKVxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfERhdGV9IHZhbHVlIC0gVGhlIGluaXRpYWwgdmFsdWUgb2YgdGhlIGZpZWxkXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGRpc2FibGVkIC0gV2hldGhlciB0aGUgZmllbGQgaXMgZGlzYWJsZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCAtIFRoZSBkaXNwbGF5IGxhYmVsIGZvciB0aGUgZmllbGRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwbGFjZWhvbGRlciAtIFBsYWNlaG9sZGVyIHRleHQgd2hlbiBmaWVsZCBpcyBlbXB0eVxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdCAtIEZvcm1hdCBwYXR0ZXJuIGZvciB0aGUgZmllbGQgdmFsdWVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaGlkZGVuIC0gV2hldGhlciB0aGUgZmllbGQgc2hvdWxkIGJlIGhpZGRlblxuICogQHBhcmFtIHtudW1iZXJ8RGF0ZX0gbWF4IC0gTWF4aW11bSBhbGxvd2VkIHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4bGVuZ3RoIC0gTWF4aW11bSBhbGxvd2VkIGxlbmd0aFxuICogQHBhcmFtIHtudW1iZXJ8RGF0ZX0gbWluIC0gTWluaW11bSBhbGxvd2VkIHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gbWlubGVuZ3RoIC0gTWluaW11bSBhbGxvd2VkIGxlbmd0aFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm4gLSBWYWxpZGF0aW9uIHBhdHRlcm5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVhZG9ubHkgLSBXaGV0aGVyIHRoZSBmaWVsZCBpcyByZWFkLW9ubHlcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVxdWlyZWQgLSBXaGV0aGVyIHRoZSBmaWVsZCBpcyByZXF1aXJlZFxuICogQHBhcmFtIHtudW1iZXJ9IHN0ZXAgLSBTdGVwIHZhbHVlIGZvciBudW1iZXIgaW5wdXRzXG4gKiBAcGFyYW0ge0Zvcm1Hcm91cH0gZm9ybUdyb3VwIC0gVGhlIHBhcmVudCBmb3JtIGdyb3VwXG4gKiBAcGFyYW0ge1N0cmluZ09yQm9vbGVhbn0gdHJhbnNsYXRhYmxlIC0gV2hldGhlciBmaWVsZCBsYWJlbHMgc2hvdWxkIGJlIHRyYW5zbGF0ZWRcbiAqXG4gKiBAY29tcG9uZW50IENydWRGaWVsZENvbXBvbmVudFxuICogQGV4YW1wbGVcbiAqIDxuZ3gtZGVjYWYtY3J1ZC1maWVsZFxuICogICBvcGVyYXRpb249XCJjcmVhdGVcIlxuICogICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAqICAgdHlwZT1cInRleHRcIlxuICogICBsYWJlbD1cIjxOQU1FPlwiXG4gKiAgIHBsYWNlaG9sZGVyPVwiPE5BTUU+XCJcbiAqICAgW3ZhbHVlXT1cIm1vZGVsLmZpcnN0TmFtZVwiXG4gKiAgIFtkaXNhYmxlZF09XCJtb2RlbC5yZWFkT25seVwiPlxuICpcbiAqXG4gKiBAbWVtYmVyT2YgbW9kdWxlOmZvci1hbmd1bGFyXG4gKi9cbkBEeW5hbWljKClcbkBDb21wb25lbnQoe1xuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgRm9yQW5ndWxhck1vZHVsZSxcbiAgICBJb25JbnB1dCxcbiAgICBJb25JdGVtLFxuICAgIElvbkNoZWNrYm94LFxuICAgIElvblJhZGlvR3JvdXAsXG4gICAgSW9uUmFkaW8sXG4gICAgSW9uU2VsZWN0LFxuICAgIElvblNlbGVjdE9wdGlvbixcbiAgICBJb25MYWJlbCxcbiAgICBJb25UZXh0LFxuICAgIElvblRleHRhcmVhLFxuICAgIElvbkljb25cbiAgXSxcbiAgc2VsZWN0b3I6ICduZ3gtZGVjYWYtY3J1ZC1maWVsZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jcnVkLWZpZWxkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2NydWQtZmllbGQuY29tcG9uZW50LnNjc3MnLFxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV0sXG4gIGhvc3Q6IHsnW2F0dHIuaWRdJzogJ3VpZCd9LFxufSlcbmV4cG9ydCBjbGFzcyBDcnVkRmllbGRDb21wb25lbnQgZXh0ZW5kcyBOZ3hDcnVkRm9ybUZpZWxkIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhlIENSVUQgb3BlcmF0aW9uIGJlaW5nIHBlcmZvcm1lZC5cbiAgICogQHN1bW1hcnkgU3BlY2lmaWVzIHdoaWNoIENSVUQgb3BlcmF0aW9uIChDcmVhdGUsIFJlYWQsIFVwZGF0ZSwgRGVsZXRlKSB0aGUgZmllbGQgaXMgYmVpbmcgdXNlZCBmb3IuXG4gICAqIFRoaXMgYWZmZWN0cyBob3cgdGhlIGZpZWxkIGJlaGF2ZXMgYW5kIGlzIHJlbmRlcmVkLiBGb3IgZXhhbXBsZSwgZmllbGRzIG1pZ2h0IGJlIHJlYWQtb25seSBpblxuICAgKiAncmVhZCcgbW9kZSBidXQgZWRpdGFibGUgaW4gJ2NyZWF0ZScgb3IgJ3VwZGF0ZScgbW9kZXMuXG4gICAqXG4gICAqIEB0eXBlIHtDcnVkT3BlcmF0aW9uc31cbiAgICogQG1lbWJlck9mIENydWRGaWVsZENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgb3ZlcnJpZGUgb3BlcmF0aW9uITogQ3J1ZE9wZXJhdGlvbnM7XG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5ICBUaGUgZmxhdCBmaWVsZCBuYW1lIHVzZWQgYXMgdGhlIGZvcm0gY29udHJvbCBpZGVudGlmaWVyIGluIGltbWVkaWF0ZSBwYXJlbnQgRm9ybUdyb3VwLlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogU3BlY2lmaWVzIHRoZSBuYW1lIG9mIHRoZSBmaWVsZCwgd2hpY2ggaXMgdXNlZCBhcyB0aGUgRm9ybUNvbnRyb2wgaWRlbnRpZmllciBpbiBpbW1lZGlhdGUgcGFyZW50IEZvcm1Hcm91cC5cbiAgICogVGhpcyB2YWx1ZSBtdXN0IGJlIHVuaXF1ZSB3aXRoaW4gdGhlIGltbWVkaWF0ZSBwYXJlbnQgRm9ybUdyb3VwIGNvbnRleHQgYW5kIHNob3VsZCBub3QgY29udGFpbiBkb3RzIG9yIG5lc3RpbmcuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJPZiBDcnVkRmllbGRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCh7IHJlcXVpcmVkOiB0cnVlIH0pXG4gIG92ZXJyaWRlIG5hbWUhOiBzdHJpbmc7XG5cblxuICAvKipcbiAgICogQHN1bW1hcnkgVGhlIGZ1bGwgZmllbGQgcGF0aCB1c2VkIGZvciBmb3JtIGNvbnRyb2wgcmVzb2x1dGlvbi5cbiAgICogQGRlc2NyaXB0aW9uIFNwZWNpZmllcyB0aGUgaGllcmFyY2hpY2FsIHBhdGggb2YgdGhlIGZpZWxkLCB1c2VkIHRvIHJlc29sdmUgaXRzIGxvY2F0aW9uIHdpdGhpbiB0aGUgcGFyZW50IEZvcm1Hcm91cCAob3IgbmVzdGVkIEZvcm1Hcm91cHMpLlxuICAgKiBJdCBpcyB1c2VkIGFzIHRoZSBpZGVudGlmaWVyIGluIHRoZSByZW5kZXJlZCBIVE1MLCBhbmQgbWF5IGluY2x1ZGUgbmVzdGluZyAoZS5nLiwgJ2FkZHJlc3MuYmlsbGluZy5zdHJlZXQnKSBhbmRcbiAgICogc2hvdWxkIG1hdGNoIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIGRhdGEgbW9kZWxcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlck9mIENydWRGaWVsZENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgb3ZlcnJpZGUgcGF0aCE6IHN0cmluZztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFRoZSBwYXJlbnQgZmllbGQgcGF0aCwgaWYgdGhpcyBmaWVsZCBpcyBuZXN0ZWQuXG4gICAqIEBzdW1tYXJ5IFNwZWNpZmllcyB0aGUgZnVsbCBkb3QtZGVsaW1pdGVkIHBhdGggb2YgdGhlIHBhcmVudCBmaWVsZC4gVGhpcyBpcyBvbmx5IHNldCB3aGVuIHRoZSBmaWVsZCBpcyBuZXN0ZWQuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJPZiBDcnVkRmllbGRDb21wb25lbnRcbiAgICovXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhlIHBhcmVudCBmaWVsZCBwYXRoIGZvciBuZXN0ZWQgZmllbGQgc3RydWN0dXJlcy5cbiAgICogQHN1bW1hcnkgU3BlY2lmaWVzIHRoZSBmdWxsIGRvdC1kZWxpbWl0ZWQgcGF0aCBvZiB0aGUgcGFyZW50IGZpZWxkIHdoZW4gdGhpcyBmaWVsZFxuICAgKiBpcyBwYXJ0IG9mIGEgbmVzdGVkIHN0cnVjdHVyZS4gVGhpcyBpcyB1c2VkIGZvciBoaWVyYXJjaGljYWwgZm9ybSBvcmdhbml6YXRpb25cbiAgICogYW5kIHByb3BlciBmb3JtIGNvbnRyb2wgcmVzb2x1dGlvbiBpbiBjb21wbGV4IGZvcm0gc3RydWN0dXJlcy5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJydcbiAgICogQG1lbWJlck9mIENydWRGaWVsZENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgb3ZlcnJpZGUgY2hpbGRPZjogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGUgaW5wdXQgdHlwZSBvZiB0aGUgZmllbGQuXG4gICAqIEBzdW1tYXJ5IERlZmluZXMgdGhlIHR5cGUgb2YgaW5wdXQgdG8gcmVuZGVyLCBzdWNoIGFzIHRleHQsIG51bWJlciwgZGF0ZSwgc2VsZWN0LCBldGMuXG4gICAqIFRoaXMgZGV0ZXJtaW5lcyB3aGljaCBJb25pYyBmb3JtIGNvbXBvbmVudCB3aWxsIGJlIHVzZWQgdG8gcmVuZGVyIHRoZSBmaWVsZCBhbmQgaG93XG4gICAqIHRoZSBkYXRhIHdpbGwgYmUgZm9ybWF0dGVkIGFuZCB2YWxpZGF0ZWQuXG4gICAqXG4gICAqIEB0eXBlIHtQb3NzaWJsZUlucHV0VHlwZXN9XG4gICAqIEBtZW1iZXJPZiBDcnVkRmllbGRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCh7IHJlcXVpcmVkOiB0cnVlIH0pXG4gIG92ZXJyaWRlIHR5cGUhOiBQb3NzaWJsZUlucHV0VHlwZXM7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGUgaW5pdGlhbCB2YWx1ZSBvZiB0aGUgZmllbGQuXG4gICAqIEBzdW1tYXJ5IFNldHMgdGhlIGluaXRpYWwgdmFsdWUgb2YgdGhlIGZvcm0gZmllbGQuIFRoaXMgY2FuIGJlIGEgc3RyaW5nLCBudW1iZXIsIG9yIERhdGVcbiAgICogZGVwZW5kaW5nIG9uIHRoZSBmaWVsZCB0eXBlLiBGb3Igc2VsZWN0IGZpZWxkcywgdGhpcyBzaG91bGQgbWF0Y2ggb25lIG9mIHRoZSBvcHRpb24gdmFsdWVzLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nIHwgbnVtYmVyIHwgRGF0ZX1cbiAgICogQGRlZmF1bHQgJydcbiAgICogQG1lbWJlck9mIENydWRGaWVsZENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgb3ZlcnJpZGUgdmFsdWU6IHN0cmluZyB8IG51bWJlciB8IERhdGUgPSAnJztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFdoZXRoZXIgdGhlIGZpZWxkIGlzIGRpc2FibGVkLlxuICAgKiBAc3VtbWFyeSBXaGVuIHRydWUsIHRoZSBmaWVsZCB3aWxsIGJlIHJlbmRlcmVkIGluIGEgZGlzYWJsZWQgc3RhdGUsIHByZXZlbnRpbmcgdXNlciBpbnRlcmFjdGlvbi5cbiAgICogRGlzYWJsZWQgZmllbGRzIGFyZSBzdGlsbCBpbmNsdWRlZCBpbiB0aGUgZm9ybSBtb2RlbCBidXQgY2Fubm90IGJlIGVkaXRlZCBieSB0aGUgdXNlci5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBtZW1iZXJPZiBDcnVkRmllbGRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG92ZXJyaWRlIGRpc2FibGVkPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFRoZSBkaXNwbGF5IGxhYmVsIGZvciB0aGUgZmllbGQuXG4gICAqIEBzdW1tYXJ5IFRoZSB0ZXh0IGxhYmVsIGRpc3BsYXllZCBhbG9uZ3NpZGUgdGhlIGZpZWxkIHRvIGlkZW50aWZ5IGl0IHRvIHRoZSB1c2VyLlxuICAgKiBUaGlzIGxhYmVsIGNhbiBiZSB0cmFuc2xhdGVkIGlmIHRoZSB0cmFuc2xhdGFibGUgcHJvcGVydHkgaXMgc2V0IHRvIHRydWUuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJPZiBDcnVkRmllbGRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCh7IHJlcXVpcmVkOiB0cnVlIH0pXG4gIGxhYmVsITogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUGxhY2Vob2xkZXIgdGV4dCB3aGVuIGZpZWxkIGlzIGVtcHR5LlxuICAgKiBAc3VtbWFyeSBUZXh0IHRoYXQgYXBwZWFycyBpbiB0aGUgaW5wdXQgd2hlbiBpdCBoYXMgbm8gdmFsdWUuIFRoaXMgcHJvdmlkZXMgYSBoaW50IHRvIHRoZSB1c2VyXG4gICAqIGFib3V0IHdoYXQga2luZCBvZiBkYXRhIGlzIGV4cGVjdGVkLiBUaGUgcGxhY2Vob2xkZXIgZGlzYXBwZWFycyB3aGVuIHRoZSB1c2VyIHN0YXJ0cyB0eXBpbmcuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJPZiBDcnVkRmllbGRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHBsYWNlaG9sZGVyITogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gRm9ybWF0IHBhdHRlcm4gZm9yIHRoZSBmaWVsZCB2YWx1ZS5cbiAgICogQHN1bW1hcnkgU3BlY2lmaWVzIGEgZm9ybWF0IHBhdHRlcm4gZm9yIHRoZSBmaWVsZCB2YWx1ZSwgd2hpY2ggY2FuIGJlIHVzZWQgZm9yIGRhdGUgZm9ybWF0dGluZyxcbiAgICogbnVtYmVyIGZvcm1hdHRpbmcsIG9yIG90aGVyIHR5cGUtc3BlY2lmaWMgZm9ybWF0dGluZyByZXF1aXJlbWVudHMuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJPZiBDcnVkRmllbGRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG92ZXJyaWRlIGZvcm1hdD86IHN0cmluZztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFdoZXRoZXIgdGhlIGZpZWxkIHNob3VsZCBiZSBoaWRkZW4uXG4gICAqIEBzdW1tYXJ5IFdoZW4gdHJ1ZSwgdGhlIGZpZWxkIHdpbGwgbm90IGJlIHZpc2libGUgaW4gdGhlIFVJIGJ1dCB3aWxsIHN0aWxsIGJlIHBhcnQgb2YgdGhlIGZvcm0gbW9kZWwuXG4gICAqIFRoaXMgaXMgdXNlZnVsIGZvciBmaWVsZHMgdGhhdCBuZWVkIHRvIGJlIGluY2x1ZGVkIGluIGZvcm0gc3VibWlzc2lvbiBidXQgc2hvdWxkIG5vdCBiZSBkaXNwbGF5ZWQgdG8gdGhlIHVzZXIuXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyT2YgQ3J1ZEZpZWxkQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBvdmVycmlkZSBoaWRkZW4/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gTWF4aW11bSBhbGxvd2VkIHZhbHVlIGZvciB0aGUgZmllbGQuXG4gICAqIEBzdW1tYXJ5IEZvciBudW1iZXIgaW5wdXRzLCB0aGlzIHNldHMgdGhlIG1heGltdW0gYWxsb3dlZCBudW1lcmljIHZhbHVlLlxuICAgKiBGb3IgZGF0ZSBpbnB1dHMsIHRoaXMgc2V0cyB0aGUgbGF0ZXN0IGFsbG93ZWQgZGF0ZS5cbiAgICpcbiAgICogQHR5cGUge251bWJlciB8IERhdGV9XG4gICAqIEBtZW1iZXJPZiBDcnVkRmllbGRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG92ZXJyaWRlIG1heD86IG51bWJlciB8IERhdGU7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBNYXhpbXVtIGFsbG93ZWQgbGVuZ3RoIGZvciB0ZXh0IGlucHV0LlxuICAgKiBAc3VtbWFyeSBGb3IgdGV4dCBpbnB1dHMsIHRoaXMgc2V0cyB0aGUgbWF4aW11bSBudW1iZXIgb2YgY2hhcmFjdGVycyBhbGxvd2VkLlxuICAgKiBUaGlzIGlzIHVzZWQgZm9yIHZhbGlkYXRpb24gYW5kIG1heSBhbHNvIGJlIHVzZWQgdG8gbGltaXQgaW5wdXQgaW4gdGhlIFVJLlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAbWVtYmVyT2YgQ3J1ZEZpZWxkQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBvdmVycmlkZSBtYXhsZW5ndGg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBNaW5pbXVtIGFsbG93ZWQgdmFsdWUgZm9yIHRoZSBmaWVsZC5cbiAgICogQHN1bW1hcnkgRm9yIG51bWJlciBpbnB1dHMsIHRoaXMgc2V0cyB0aGUgbWluaW11bSBhbGxvd2VkIG51bWVyaWMgdmFsdWUuXG4gICAqIEZvciBkYXRlIGlucHV0cywgdGhpcyBzZXRzIHRoZSBlYXJsaWVzdCBhbGxvd2VkIGRhdGUuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXIgfCBEYXRlfVxuICAgKiBAbWVtYmVyT2YgQ3J1ZEZpZWxkQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBvdmVycmlkZSBtaW4/OiBudW1iZXIgfCBEYXRlO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gTWluaW11bSBhbGxvd2VkIGxlbmd0aCBmb3IgdGV4dCBpbnB1dC5cbiAgICogQHN1bW1hcnkgRm9yIHRleHQgaW5wdXRzLCB0aGlzIHNldHMgdGhlIG1pbmltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgcmVxdWlyZWQuXG4gICAqIFRoaXMgaXMgdXNlZCBmb3IgdmFsaWRhdGlvbiB0byBlbnN1cmUgdGhlIGlucHV0IG1lZXRzIGEgbWluaW11bSBsZW5ndGggcmVxdWlyZW1lbnQuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBtZW1iZXJPZiBDcnVkRmllbGRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG92ZXJyaWRlIG1pbmxlbmd0aD86IG51bWJlcjtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFZhbGlkYXRpb24gcGF0dGVybiBmb3IgdGV4dCBpbnB1dC5cbiAgICogQHN1bW1hcnkgQSByZWd1bGFyIGV4cHJlc3Npb24gcGF0dGVybiB1c2VkIHRvIHZhbGlkYXRlIHRleHQgaW5wdXQuXG4gICAqIFRoZSBpbnB1dCB2YWx1ZSBtdXN0IG1hdGNoIHRoaXMgcGF0dGVybiB0byBiZSBjb25zaWRlcmVkIHZhbGlkLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyT2YgQ3J1ZEZpZWxkQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBvdmVycmlkZSBwYXR0ZXJuPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gV2hldGhlciB0aGUgZmllbGQgaXMgcmVhZC1vbmx5LlxuICAgKiBAc3VtbWFyeSBXaGVuIHRydWUsIHRoZSBmaWVsZCB3aWxsIGJlIHJlbmRlcmVkIGluIGEgcmVhZC1vbmx5IHN0YXRlLiBVbmxpa2UgZGlzYWJsZWQgZmllbGRzLFxuICAgKiByZWFkLW9ubHkgZmllbGRzIGFyZSBzdGlsbCBmb2N1c2FibGUgYnV0IGNhbm5vdCBiZSBtb2RpZmllZCBieSB0aGUgdXNlci5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBtZW1iZXJPZiBDcnVkRmllbGRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG92ZXJyaWRlIHJlYWRvbmx5PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFdoZXRoZXIgdGhlIGZpZWxkIGlzIHJlcXVpcmVkLlxuICAgKiBAc3VtbWFyeSBXaGVuIHRydWUsIHRoZSBmaWVsZCBtdXN0IGhhdmUgYSB2YWx1ZSBmb3IgdGhlIGZvcm0gdG8gYmUgdmFsaWQuXG4gICAqIFJlcXVpcmVkIGZpZWxkcyBhcmUgdHlwaWNhbGx5IG1hcmtlZCB3aXRoIGFuIGluZGljYXRvciBpbiB0aGUgVUkuXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyT2YgQ3J1ZEZpZWxkQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBvdmVycmlkZSByZXF1aXJlZD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBTdGVwIHZhbHVlIGZvciBudW1iZXIgaW5wdXRzLlxuICAgKiBAc3VtbWFyeSBGb3IgbnVtYmVyIGlucHV0cywgdGhpcyBzZXRzIHRoZSBpbmNyZW1lbnQvZGVjcmVtZW50IHN0ZXAgd2hlbiB1c2luZ1xuICAgKiB0aGUgdXAvZG93biBhcnJvd3Mgb3Igd2hlbiB1c2luZyBhIHJhbmdlIHNsaWRlci5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQG1lbWJlck9mIENydWRGaWVsZENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgb3ZlcnJpZGUgc3RlcD86IG51bWJlcjtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEZpZWxkIG5hbWUgZm9yIGVxdWFsaXR5IHZhbGlkYXRpb24gY29tcGFyaXNvbi5cbiAgICogQHN1bW1hcnkgU3BlY2lmaWVzIGFub3RoZXIgZmllbGQgbmFtZSB0aGF0IHRoaXMgZmllbGQncyB2YWx1ZSBtdXN0IGJlIGVxdWFsIHRvIGZvciB2YWxpZGF0aW9uLlxuICAgKiBUaGlzIGlzIGNvbW1vbmx5IHVzZWQgZm9yIHBhc3N3b3JkIGNvbmZpcm1hdGlvbiBmaWVsZHMgb3Igb3RoZXIgc2NlbmFyaW9zIHdoZXJlXG4gICAqIHR3byBmaWVsZHMgbXVzdCBjb250YWluIHRoZSBzYW1lIHZhbHVlLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nIHwgdW5kZWZpbmVkfVxuICAgKiBAbWVtYmVyT2YgQ3J1ZEZpZWxkQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBvdmVycmlkZSBlcXVhbHM/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBGaWVsZCBuYW1lIGZvciBpbmVxdWFsaXR5IHZhbGlkYXRpb24gY29tcGFyaXNvbi5cbiAgICogQHN1bW1hcnkgU3BlY2lmaWVzIGFub3RoZXIgZmllbGQgbmFtZSB0aGF0IHRoaXMgZmllbGQncyB2YWx1ZSBtdXN0IGJlIGRpZmZlcmVudCBmcm9tIGZvciB2YWxpZGF0aW9uLlxuICAgKiBUaGlzIGlzIHVzZWQgdG8gZW5zdXJlIHRoYXQgdHdvIGZpZWxkcyBkbyBub3QgY29udGFpbiB0aGUgc2FtZSB2YWx1ZSwgd2hpY2ggbWlnaHQgYmVcbiAgICogcmVxdWlyZWQgZm9yIGNlcnRhaW4gYnVzaW5lc3MgcnVsZXMgb3Igc2VjdXJpdHkgY29uc3RyYWludHMuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmcgfCB1bmRlZmluZWR9XG4gICAqIEBtZW1iZXJPZiBDcnVkRmllbGRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG92ZXJyaWRlIGRpZmZlcmVudD86IHN0cmluZztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEZpZWxkIG5hbWUgZm9yIGxlc3MtdGhhbiB2YWxpZGF0aW9uIGNvbXBhcmlzb24uXG4gICAqIEBzdW1tYXJ5IFNwZWNpZmllcyBhbm90aGVyIGZpZWxkIG5hbWUgdGhhdCB0aGlzIGZpZWxkJ3MgdmFsdWUgbXVzdCBiZSBsZXNzIHRoYW4gZm9yIHZhbGlkYXRpb24uXG4gICAqIFRoaXMgaXMgY29tbW9ubHkgdXNlZCBmb3IgZGF0ZSByYW5nZXMsIG51bWVyaWMgcmFuZ2VzLCBvciBvdGhlciBzY2VuYXJpb3Mgd2hlcmVcbiAgICogb25lIGZpZWxkIG11c3QgaGF2ZSBhIHNtYWxsZXIgdmFsdWUgdGhhbiBhbm90aGVyLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nIHwgdW5kZWZpbmVkfVxuICAgKiBAbWVtYmVyT2YgQ3J1ZEZpZWxkQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBvdmVycmlkZSBsZXNzVGhhbj86IHN0cmluZztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEZpZWxkIG5hbWUgZm9yIGxlc3MtdGhhbi1vci1lcXVhbCB2YWxpZGF0aW9uIGNvbXBhcmlzb24uXG4gICAqIEBzdW1tYXJ5IFNwZWNpZmllcyBhbm90aGVyIGZpZWxkIG5hbWUgdGhhdCB0aGlzIGZpZWxkJ3MgdmFsdWUgbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG9cbiAgICogZm9yIHZhbGlkYXRpb24uIFRoaXMgcHJvdmlkZXMgaW5jbHVzaXZlIHVwcGVyIGJvdW5kIHZhbGlkYXRpb24gZm9yIG51bWVyaWMgb3IgZGF0ZSBjb21wYXJpc29ucy5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZyB8IHVuZGVmaW5lZH1cbiAgICogQG1lbWJlck9mIENydWRGaWVsZENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgb3ZlcnJpZGUgbGVzc1RoYW5PckVxdWFsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gRmllbGQgbmFtZSBmb3IgZ3JlYXRlci10aGFuIHZhbGlkYXRpb24gY29tcGFyaXNvbi5cbiAgICogQHN1bW1hcnkgU3BlY2lmaWVzIGFub3RoZXIgZmllbGQgbmFtZSB0aGF0IHRoaXMgZmllbGQncyB2YWx1ZSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBmb3IgdmFsaWRhdGlvbi5cbiAgICogVGhpcyBpcyBjb21tb25seSB1c2VkIGZvciBkYXRlIHJhbmdlcywgbnVtZXJpYyByYW5nZXMsIG9yIG90aGVyIHNjZW5hcmlvcyB3aGVyZVxuICAgKiBvbmUgZmllbGQgbXVzdCBoYXZlIGEgbGFyZ2VyIHZhbHVlIHRoYW4gYW5vdGhlci5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZyB8IHVuZGVmaW5lZH1cbiAgICogQG1lbWJlck9mIENydWRGaWVsZENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgb3ZlcnJpZGUgZ3JlYXRlclRoYW4/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBGaWVsZCBuYW1lIGZvciBncmVhdGVyLXRoYW4tb3ItZXF1YWwgdmFsaWRhdGlvbiBjb21wYXJpc29uLlxuICAgKiBAc3VtbWFyeSBTcGVjaWZpZXMgYW5vdGhlciBmaWVsZCBuYW1lIHRoYXQgdGhpcyBmaWVsZCdzIHZhbHVlIG11c3QgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvXG4gICAqIGZvciB2YWxpZGF0aW9uLiBUaGlzIHByb3ZpZGVzIGluY2x1c2l2ZSBsb3dlciBib3VuZCB2YWxpZGF0aW9uIGZvciBudW1lcmljIG9yIGRhdGUgY29tcGFyaXNvbnMuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmcgfCB1bmRlZmluZWR9XG4gICAqIEBtZW1iZXJPZiBDcnVkRmllbGRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG92ZXJyaWRlIGdyZWF0ZXJUaGFuT3JFcXVhbD86IHN0cmluZztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIE51bWJlciBvZiBjb2x1bW5zIGZvciB0ZXh0YXJlYSBpbnB1dHMuXG4gICAqIEBzdW1tYXJ5IEZvciB0ZXh0YXJlYSBpbnB1dHMsIHRoaXMgc2V0cyB0aGUgdmlzaWJsZSB3aWR0aCBvZiB0aGUgdGV4dCBhcmVhIGluIGF2ZXJhZ2UgY2hhcmFjdGVyIHdpZHRocy5cbiAgICogVGhpcyBpcyB1c2VkIGFsb25nc2lkZSByb3dzIHRvIGRlZmluZSB0aGUgZGltZW5zaW9ucyBvZiB0aGUgdGV4dGFyZWEuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBtZW1iZXJPZiBDcnVkRmllbGRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGNvbHM/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBOdW1iZXIgb2Ygcm93cyBmb3IgdGV4dGFyZWEgaW5wdXRzLlxuICAgKiBAc3VtbWFyeSBGb3IgdGV4dGFyZWEgaW5wdXRzLCB0aGlzIHNldHMgdGhlIHZpc2libGUgaGVpZ2h0IG9mIHRoZSB0ZXh0IGFyZWEgaW4gbGluZXMgb2YgdGV4dC5cbiAgICogVGhpcyBpcyB1c2VkIGFsb25nc2lkZSBjb2xzIHRvIGRlZmluZSB0aGUgZGltZW5zaW9ucyBvZiB0aGUgdGV4dGFyZWEuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBtZW1iZXJPZiBDcnVkRmllbGRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHJvd3M/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBBbGlnbm1lbnQgb2YgdGhlIGZpZWxkIGNvbnRlbnQuXG4gICAqIEBzdW1tYXJ5IENvbnRyb2xzIHRoZSBob3Jpem9udGFsIGFsaWdubWVudCBvZiB0aGUgZmllbGQgY29udGVudC5cbiAgICogVGhpcyBhZmZlY3RzIGhvdyB0aGUgY29udGVudCBpcyBwb3NpdGlvbmVkIHdpdGhpbiB0aGUgZmllbGQgY29udGFpbmVyLlxuICAgKlxuICAgKiBAdHlwZSB7J3N0YXJ0JyB8ICdjZW50ZXInfVxuICAgKiBAbWVtYmVyT2YgQ3J1ZEZpZWxkQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBhbGlnbm1lbnQ/OiAnc3RhcnQnIHwgJ2NlbnRlcic7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBJbml0aWFsIGNoZWNrZWQgc3RhdGUgZm9yIGNoZWNrYm94IG9yIHRvZ2dsZSBpbnB1dHMuXG4gICAqIEBzdW1tYXJ5IEZvciBjaGVja2JveCBvciB0b2dnbGUgaW5wdXRzLCB0aGlzIHNldHMgdGhlIGluaXRpYWwgY2hlY2tlZCBzdGF0ZS5cbiAgICogV2hlbiB0cnVlLCB0aGUgY2hlY2tib3ggb3IgdG9nZ2xlIHdpbGwgYmUgaW5pdGlhbGx5IGNoZWNrZWQuXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyT2YgQ3J1ZEZpZWxkQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBjaGVja2VkPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEp1c3RpZmljYXRpb24gb2YgaXRlbXMgd2l0aGluIHRoZSBmaWVsZC5cbiAgICogQHN1bW1hcnkgQ29udHJvbHMgaG93IGl0ZW1zIGFyZSBqdXN0aWZpZWQgd2l0aGluIHRoZSBmaWVsZCBjb250YWluZXIuXG4gICAqIFRoaXMgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3IgZmllbGRzIHdpdGggbXVsdGlwbGUgZWxlbWVudHMsIHN1Y2ggYXMgcmFkaW8gZ3JvdXBzLlxuICAgKlxuICAgKiBAdHlwZSB7J3N0YXJ0JyB8ICdlbmQnIHwgJ3NwYWNlLWJldHdlZW4nfVxuICAgKiBAbWVtYmVyT2YgQ3J1ZEZpZWxkQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBqdXN0aWZ5PzogJ3N0YXJ0JyB8ICdlbmQnIHwgJ3NwYWNlLWJldHdlZW4nO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGV4dCBmb3IgdGhlIGNhbmNlbCBidXR0b24gaW4gc2VsZWN0IGlucHV0cy5cbiAgICogQHN1bW1hcnkgRm9yIHNlbGVjdCBpbnB1dHMgd2l0aCBhIGNhbmNlbCBidXR0b24sIHRoaXMgc2V0cyB0aGUgdGV4dCBkaXNwbGF5ZWQgb24gdGhlIGNhbmNlbCBidXR0b24uXG4gICAqIFRoaXMgaXMgdHlwaWNhbGx5IHVzZWQgaW4gc2VsZWN0IGRpYWxvZ3MgdG8gcHJvdmlkZSBhIHdheSBmb3IgdXNlcnMgdG8gZGlzbWlzcyB0aGUgc2VsZWN0aW9uIHdpdGhvdXQgbWFraW5nIGEgY2hhbmdlLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyT2YgQ3J1ZEZpZWxkQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBjYW5jZWxUZXh0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gSW50ZXJmYWNlIHN0eWxlIGZvciBzZWxlY3QgaW5wdXRzLlxuICAgKiBAc3VtbWFyeSBTcGVjaWZpZXMgdGhlIGludGVyZmFjZSBzdHlsZSBmb3Igc2VsZWN0IGlucHV0cywgc3VjaCBhcyAnYWxlcnQnLCAnYWN0aW9uLXNoZWV0Jywgb3IgJ3BvcG92ZXInLlxuICAgKiBUaGlzIGRldGVybWluZXMgaG93IHRoZSBzZWxlY3Qgb3B0aW9ucyBhcmUgcHJlc2VudGVkIHRvIHRoZSB1c2VyLlxuICAgKlxuICAgKiBAdHlwZSB7U2VsZWN0SW50ZXJmYWNlfVxuICAgKiBAbWVtYmVyT2YgQ3J1ZEZpZWxkQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBpbnRlcmZhY2U6IFNlbGVjdEludGVyZmFjZSA9ICdwb3BvdmVyJztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIE9wdGlvbnMgZm9yIHNlbGVjdCBvciByYWRpbyBpbnB1dHMuXG4gICAqIEBzdW1tYXJ5IFByb3ZpZGVzIHRoZSBsaXN0IG9mIG9wdGlvbnMgZm9yIHNlbGVjdCBvciByYWRpbyBpbnB1dHMuIEVhY2ggb3B0aW9uIGNhbiBoYXZlIGEgdmFsdWUgYW5kIGEgbGFiZWwuXG4gICAqIFRoaXMgaXMgdXNlZCB0byBwb3B1bGF0ZSB0aGUgZHJvcGRvd24gb3IgcmFkaW8gZ3JvdXAgd2l0aCBjaG9pY2VzLlxuICAgKlxuICAgKiBAdHlwZSB7Q3J1ZEZpZWxkT3B0aW9uW119XG4gICAqIEBtZW1iZXJPZiBDcnVkRmllbGRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG9wdGlvbnMhOiBDcnVkRmllbGRPcHRpb25bXTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIE1vZGUgb2YgdGhlIGZpZWxkLlxuICAgKiBAc3VtbWFyeSBTcGVjaWZpZXMgdGhlIHZpc3VhbCBtb2RlIG9mIHRoZSBmaWVsZCwgc3VjaCBhcyAnaW9zJyBvciAnbWQnLlxuICAgKiBUaGlzIGFmZmVjdHMgdGhlIHN0eWxpbmcgYW5kIGFwcGVhcmFuY2Ugb2YgdGhlIGZpZWxkIHRvIG1hdGNoIHRoZSBwbGF0Zm9ybSBzdHlsZS5cbiAgICpcbiAgICogQHR5cGUgeydpb3MnIHwgJ21kJ31cbiAgICogQG1lbWJlck9mIENydWRGaWVsZENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgbW9kZT86ICdpb3MnIHwgJ21kJztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFNwZWxsY2hlY2sgYXR0cmlidXRlIGZvciB0ZXh0IGlucHV0cy5cbiAgICogQHN1bW1hcnkgRW5hYmxlcyBvciBkaXNhYmxlcyBzcGVsbGNoZWNraW5nIGZvciB0ZXh0IGlucHV0cy5cbiAgICogV2hlbiB0cnVlLCB0aGUgYnJvd3NlciB3aWxsIGNoZWNrIHRoZSBzcGVsbGluZyBvZiB0aGUgaW5wdXQgdGV4dC5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJPZiBDcnVkRmllbGRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNwZWxsY2hlY2s6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIElucHV0IG1vZGUgZm9yIHRleHQgaW5wdXRzLlxuICAgKiBAc3VtbWFyeSBIaW50cyBhdCB0aGUgdHlwZSBvZiBkYXRhIHRoYXQgbWlnaHQgYmUgZW50ZXJlZCBieSB0aGUgdXNlciB3aGlsZSBlZGl0aW5nIHRoZSBlbGVtZW50LlxuICAgKiBUaGlzIGNhbiBhZmZlY3QgdGhlIHZpcnR1YWwga2V5Ym9hcmQgbGF5b3V0IG9uIG1vYmlsZSBkZXZpY2VzLlxuICAgKlxuICAgKiBAdHlwZSB7J25vbmUnIHwgJ3RleHQnIHwgJ3RlbCcgfCAndXJsJyB8ICdlbWFpbCcgfCAnbnVtZXJpYycgfCAnZGVjaW1hbCcgfCAnc2VhcmNoJ31cbiAgICogQGRlZmF1bHQgJ25vbmUnXG4gICAqIEBtZW1iZXJPZiBDcnVkRmllbGRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGlucHV0bW9kZTpcbiAgICB8ICdub25lJ1xuICAgIHwgJ3RleHQnXG4gICAgfCAndGVsJ1xuICAgIHwgJ3VybCdcbiAgICB8ICdlbWFpbCdcbiAgICB8ICdudW1lcmljJ1xuICAgIHwgJ2RlY2ltYWwnXG4gICAgfCAnc2VhcmNoJyA9ICdub25lJztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEF1dG9jb21wbGV0ZSBiZWhhdmlvciBmb3IgdGhlIGZpZWxkLlxuICAgKiBAc3VtbWFyeSBTcGVjaWZpZXMgd2hldGhlciBhbmQgaG93IHRoZSBicm93c2VyIHNob3VsZCBhdXRvbWF0aWNhbGx5IGNvbXBsZXRlIHRoZSBpbnB1dC5cbiAgICogVGhpcyBjYW4gaW1wcm92ZSB1c2VyIGV4cGVyaWVuY2UgYnkgc3VnZ2VzdGluZyBwcmV2aW91c2x5IGVudGVyZWQgdmFsdWVzLlxuICAgKlxuICAgKiBAdHlwZSB7QXV0b2NvbXBsZXRlVHlwZXN9XG4gICAqIEBkZWZhdWx0ICdvZmYnXG4gICAqIEBtZW1iZXJPZiBDcnVkRmllbGRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGF1dG9jb21wbGV0ZTogQXV0b2NvbXBsZXRlVHlwZXMgPSAnb2ZmJztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEZpbGwgc3R5bGUgZm9yIHRoZSBmaWVsZC5cbiAgICogQHN1bW1hcnkgRGV0ZXJtaW5lcyB0aGUgZmlsbCBzdHlsZSBvZiB0aGUgZmllbGQsIHN1Y2ggYXMgJ291dGxpbmUnIG9yICdzb2xpZCcuXG4gICAqIFRoaXMgYWZmZWN0cyB0aGUgYm9yZGVyIGFuZCBiYWNrZ3JvdW5kIG9mIHRoZSBmaWVsZC5cbiAgICpcbiAgICogQHR5cGUgeydvdXRsaW5lJyB8ICdzb2xpZCd9XG4gICAqIEBkZWZhdWx0ICdvdXRsaW5lJ1xuICAgKiBAbWVtYmVyT2YgQ3J1ZEZpZWxkQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBmaWxsOiAnb3V0bGluZScgfCAnc29saWQnID0gJ291dGxpbmUnO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUGxhY2VtZW50IG9mIHRoZSBsYWJlbCByZWxhdGl2ZSB0byB0aGUgZmllbGQuXG4gICAqIEBzdW1tYXJ5IFNwZWNpZmllcyB3aGVyZSB0aGUgbGFiZWwgc2hvdWxkIGJlIHBsYWNlZCByZWxhdGl2ZSB0byB0aGUgZmllbGQuXG4gICAqIE9wdGlvbnMgaW5jbHVkZSAnc3RhcnQnLCAnZW5kJywgJ2Zsb2F0aW5nJywgJ3N0YWNrZWQnLCBhbmQgJ2ZpeGVkJy5cbiAgICpcbiAgICogQHR5cGUgeydzdGFydCcgfCAnZW5kJyB8ICdmbG9hdGluZycgfCAnc3RhY2tlZCcgfCAnZml4ZWQnfVxuICAgKiBAZGVmYXVsdCAnZmxvYXRpbmcnXG4gICAqIEBtZW1iZXJPZiBDcnVkRmllbGRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGxhYmVsUGxhY2VtZW50OiAnc3RhcnQnIHwgJ2VuZCcgfCAnZmxvYXRpbmcnIHwgJ3N0YWNrZWQnIHwgJ2ZpeGVkJyA9XG4gICAgJ2Zsb2F0aW5nJztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFVwZGF0ZSBtb2RlIGZvciB0aGUgZmllbGQuXG4gICAqIEBzdW1tYXJ5IERldGVybWluZXMgd2hlbiB0aGUgZmllbGQgdmFsdWUgc2hvdWxkIGJlIHVwZGF0ZWQgaW4gdGhlIGZvcm0gbW9kZWwuXG4gICAqIE9wdGlvbnMgaW5jbHVkZSAnY2hhbmdlJywgJ2JsdXInLCBhbmQgJ3N1Ym1pdCcuXG4gICAqXG4gICAqIEB0eXBlIHtGaWVsZFVwZGF0ZU1vZGV9XG4gICAqIEBkZWZhdWx0ICdjaGFuZ2UnXG4gICAqIEBtZW1iZXJPZiBDcnVkRmllbGRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHVwZGF0ZU9uOiBGaWVsZFVwZGF0ZU1vZGUgPSAnY2hhbmdlJztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFJlZmVyZW5jZSB0byB0aGUgZmllbGQgY29tcG9uZW50LlxuICAgKiBAc3VtbWFyeSBQcm92aWRlcyBhIHJlZmVyZW5jZSB0byB0aGUgZmllbGQgY29tcG9uZW50IGVsZW1lbnQsIGFsbG93aW5nIGRpcmVjdCBhY2Nlc3MgdG8gaXRzIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMuXG4gICAqXG4gICAqIEB0eXBlIHtFbGVtZW50UmVmfVxuICAgKiBAbWVtYmVyT2YgQ3J1ZEZpZWxkQ29tcG9uZW50XG4gICAqL1xuICBAVmlld0NoaWxkKCdjb21wb25lbnQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgb3ZlcnJpZGUgY29tcG9uZW50ITogRWxlbWVudFJlZjtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFBhcmVudCBmb3JtIGdyb3VwLlxuICAgKiBAc3VtbWFyeSBSZWZlcmVuY2VzIHRoZSBwYXJlbnQgZm9ybSBncm91cCB0byB3aGljaCB0aGlzIGZpZWxkIGJlbG9uZ3MuXG4gICAqIFRoaXMgaXMgbmVjZXNzYXJ5IGZvciBpbnRlZ3JhdGluZyB0aGUgZmllbGQgd2l0aCBBbmd1bGFyJ3MgcmVhY3RpdmUgZm9ybXMuXG4gICAqXG4gICAqIEB0eXBlIHtGb3JtR3JvdXB9XG4gICAqIEBtZW1iZXJPZiBDcnVkRmllbGRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG92ZXJyaWRlIGZvcm1Hcm91cDogRm9ybUdyb3VwIHwgdW5kZWZpbmVkO1xuXG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBBbmd1bGFyIEZvcm1Db250cm9sIGluc3RhbmNlIGZvciB0aGlzIGZpZWxkLlxuICAgKiBAc3VtbWFyeSBUaGUgc3BlY2lmaWMgRm9ybUNvbnRyb2wgaW5zdGFuY2UgdGhhdCBtYW5hZ2VzIHRoaXMgZmllbGQncyBzdGF0ZSwgdmFsaWRhdGlvbixcbiAgICogYW5kIHZhbHVlLiBUaGlzIHByb3ZpZGVzIGRpcmVjdCBhY2Nlc3MgdG8gQW5ndWxhcidzIHJlYWN0aXZlIGZvcm1zIGZ1bmN0aW9uYWxpdHlcbiAgICogZm9yIHRoaXMgaW5kaXZpZHVhbCBmaWVsZCB3aXRoaW4gdGhlIGJyb2FkZXIgZm9ybSBzdHJ1Y3R1cmUuXG4gICAqXG4gICAqIEB0eXBlIHtGb3JtQ29udHJvbH1cbiAgICogQG1lbWJlck9mIENydWRGaWVsZENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgb3ZlcnJpZGUgZm9ybUNvbnRyb2whOiBGb3JtQ29udHJvbDtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEluZGljYXRlcyBpZiB0aGlzIGZpZWxkIHN1cHBvcnRzIG11bHRpcGxlIHZhbHVlcy5cbiAgICogQHN1bW1hcnkgV2hlbiB0cnVlLCB0aGlzIGZpZWxkIGNhbiBoYW5kbGUgbXVsdGlwbGUgdmFsdWVzLCB0eXBpY2FsbHkgdXNlZCBpblxuICAgKiBtdWx0aS1zZWxlY3Qgc2NlbmFyaW9zIG9yIHdoZW4gdGhlIGZpZWxkIGlzIHBhcnQgb2YgYSBmb3JtIGFycmF5IHN0cnVjdHVyZVxuICAgKiB0aGF0IGFsbG93cyBtdWx0aXBsZSBlbnRyaWVzIG9mIHRoZSBzYW1lIGZpZWxkIHR5cGUuXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAbWVtYmVyT2YgQ3J1ZEZpZWxkQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBvdmVycmlkZSBtdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBjdXJyZW50IHJlY29yZC5cbiAgICogQHN1bW1hcnkgQSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGN1cnJlbnQgcmVjb3JkIGJlaW5nIGRpc3BsYXllZCBvciBtYW5pcHVsYXRlZC5cbiAgICogVGhpcyBpcyB0eXBpY2FsbHkgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBwcmltYXJ5IGtleSBmb3Igb3BlcmF0aW9ucyBvbiBzcGVjaWZpYyByZWNvcmRzLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKi9cbiAgQElucHV0KClcbiAgb3ZlcnJpZGUgdWlkOiBzdHJpbmcgPSBnZW5lcmF0ZVJhbmRvbVZhbHVlKDEyKTtcblxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVHJhbnNsYXRhYmlsaXR5IG9mIGZpZWxkIGxhYmVscy5cbiAgICogQHN1bW1hcnkgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGZpZWxkIGxhYmVscyBzaG91bGQgYmUgdHJhbnNsYXRlZCBiYXNlZCBvbiB0aGUgY3VycmVudCBsYW5ndWFnZSBzZXR0aW5ncy5cbiAgICogVGhpcyBpcyB1c2VmdWwgZm9yIGFwcGxpY2F0aW9ucyBzdXBwb3J0aW5nIG11bHRpcGxlIGxhbmd1YWdlcy5cbiAgICpcbiAgICogQHR5cGUge1N0cmluZ09yQm9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKiBAbWVtYmVyT2YgQ3J1ZEZpZWxkQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICB0cmFuc2xhdGFibGU6IFN0cmluZ09yQm9vbGVhbiA9IHRydWU7XG5cblxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gSW5kZXggb2YgdGhlIGN1cnJlbnRseSBhY3RpdmUgZm9ybSBncm91cCBpbiBhIGZvcm0gYXJyYXkuXG4gICAqIEBzdW1tYXJ5IFdoZW4gd29ya2luZyB3aXRoIG11bHRpcGxlIGZvcm0gZ3JvdXBzIChmb3JtIGFycmF5cyksIHRoaXMgaW5kaWNhdGVzXG4gICAqIHdoaWNoIGZvcm0gZ3JvdXAgaXMgY3VycmVudGx5IGFjdGl2ZSBvciBiZWluZyBlZGl0ZWQuIFRoaXMgaXMgdXNlZCB0byBtYW5hZ2VcbiAgICogZm9jdXMgYW5kIGRhdGEgYmluZGluZyBpbiBtdWx0aS1lbnRyeSBzY2VuYXJpb3MuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDBcbiAgICogQG1lbWJlck9mIENydWRGaWVsZENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgYWN0aXZlRm9ybUdyb3VwOiBudW1iZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gRm9ybUFycmF5IGNvbnRhaW5pbmcgbXVsdGlwbGUgZm9ybSBncm91cHMgZm9yIHRoaXMgZmllbGQuXG4gICAqIEBzdW1tYXJ5IFdoZW4gdGhpcyBmaWVsZCBpcyBwYXJ0IG9mIGEgbXVsdGktZW50cnkgc3RydWN0dXJlLCB0aGlzIEZvcm1BcnJheVxuICAgKiBjb250YWlucyBhbGwgdGhlIGZvcm0gZ3JvdXBzLiBUaGlzIGVuYWJsZXMgbWFuYWdlbWVudCBvZiBtdWx0aXBsZSBpbnN0YW5jZXNcbiAgICogb2YgdGhlIHNhbWUgZmllbGQgc3RydWN0dXJlIHdpdGhpbiBhIHNpbmdsZSBmb3JtLlxuICAgKlxuICAgKiBAdHlwZSB7Rm9ybUFycmF5fVxuICAgKiBAbWVtYmVyT2YgQ3J1ZEZpZWxkQ29tcG9uZW50XG4gICAqL1xuICBmb3JtR3JvdXBBcnJheSE6IEZvcm1BcnJheTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFByaW1hcnkga2V5IGZpZWxkIG5hbWUgZm9yIHVuaXF1ZW5lc3MgdmFsaWRhdGlvbi5cbiAgICogQHN1bW1hcnkgU3BlY2lmaWVzIHRoZSBmaWVsZCBuYW1lIHRoYXQgc2VydmVzIGFzIHRoZSBwcmltYXJ5IGtleSBmb3IgdW5pcXVlbmVzc1xuICAgKiB2YWxpZGF0aW9uIHdpdGhpbiBmb3JtIGFycmF5cy4gVGhpcyBpcyB1c2VkIHRvIHByZXZlbnQgZHVwbGljYXRlIGVudHJpZXNcbiAgICogYW5kIGVuc3VyZSBkYXRhIGludGVncml0eSBpbiBtdWx0aS1lbnRyeSBmb3Jtcy5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlck9mIENydWRGaWVsZENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgcGshOiBzdHJpbmc7XG5cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEdldHMgdGhlIGN1cnJlbnRseSBhY3RpdmUgZm9ybSBncm91cCBiYXNlZCBvbiBjb250ZXh0LlxuICAgKiBAc3VtbWFyeSBSZXR1cm5zIHRoZSBhcHByb3ByaWF0ZSBGb3JtR3JvdXAgYmFzZWQgb24gd2hldGhlciB0aGlzIGZpZWxkIHN1cHBvcnRzXG4gICAqIG11bHRpcGxlIHZhbHVlcy4gRm9yIHNpbmdsZS12YWx1ZSBmaWVsZHMsIHJldHVybnMgdGhlIG1haW4gZm9ybSBncm91cC5cbiAgICogRm9yIG11bHRpLXZhbHVlIGZpZWxkcywgcmV0dXJucyB0aGUgZm9ybSBncm91cCBhdCB0aGUgYWN0aXZlIGluZGV4IGZyb20gdGhlIHBhcmVudCBGb3JtQXJyYXkuXG4gICAqXG4gICAqIEByZXR1cm5zIHtGb3JtR3JvdXB9IFRoZSBjdXJyZW50bHkgYWN0aXZlIEZvcm1Hcm91cCBmb3IgdGhpcyBmaWVsZFxuICAgKiBAbWVtYmVyT2YgQ3J1ZEZpZWxkQ29tcG9uZW50XG4gICAqL1xuICBnZXQgZ2V0QWN0aXZlRm9ybUdyb3VwKCk6IEZvcm1Hcm91cCB7XG4gICAgY29uc3QgZm9ybUdyb3VwID0gdGhpcy5mb3JtR3JvdXAgYXMgRm9ybUdyb3VwO1xuICAgIHJldHVybiB0aGlzLm11bHRpcGxlXG4gICAgICA/ICgoZm9ybUdyb3VwLnBhcmVudCBhcyBGb3JtQXJyYXkpPy5hdCh0aGlzLmFjdGl2ZUZvcm1Hcm91cCkgYXMgRm9ybUdyb3VwKVxuICAgICAgOiBmb3JtR3JvdXA7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBvcHRpb25zIGZvciBzZWxlY3Qgb3IgcmFkaW8gaW5wdXRzLCB3aXRoIHRoZWlyIGB0ZXh0YCBwcm9wZXJ0eVxuICAgKiBsb2NhbGl6ZWQgaWYgaXQgZG9lcyBub3QgYWxyZWFkeSBpbmNsdWRlIHRoZSB3b3JkICdvcHRpb25zJy4gVGhlIGxvY2FsaXphdGlvbiBrZXlcbiAgICogaXMgZ2VuZXJhdGVkIGZyb20gdGhlIGNvbXBvbmVudCdzIGxhYmVsLCByZXBsYWNpbmcgJ2xhYmVsJyB3aXRoICdvcHRpb25zJy5cbiAgICpcbiAgICogQHJldHVybnMge0NydWRGaWVsZE9wdGlvbltdfSBUaGUgYXJyYXkgb2YgcGFyc2VkIGFuZCBsb2NhbGl6ZWQgb3B0aW9ucy5cbiAgICogQG1lbWJlck9mIENydWRGaWVsZENvbXBvbmVudFxuICAgKi9cbiAgZ2V0IHBhcnNlZE9wdGlvbnMoKTogQ3J1ZEZpZWxkT3B0aW9uW10ge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMubWFwKChvcHRpb24pID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm9wdGlvbixcbiAgICAgICAgdGV4dDogIW9wdGlvbi50ZXh0LmluY2x1ZGVzKCdvcHRpb25zJykgP1xuICAgICAgICAgIGdldExvY2FsZUNvbnRleHRCeUtleShgJHt0aGlzLmxhYmVsLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgnbGFiZWwnLCAnb3B0aW9ucycpfWAsIG9wdGlvbi50ZXh0KSA6IG9wdGlvbi50ZXh0XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDb21wb25lbnQgaW5pdGlhbGl6YXRpb24gbGlmZWN5Y2xlIG1ldGhvZC5cbiAgICogQHN1bW1hcnkgSW5pdGlhbGl6ZXMgdGhlIGZpZWxkIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgb3BlcmF0aW9uIHR5cGUgYW5kIGZpZWxkIGNvbmZpZ3VyYXRpb24uXG4gICAqIEZvciBSRUFEIGFuZCBERUxFVEUgb3BlcmF0aW9ucywgcmVtb3ZlcyB0aGUgZm9ybSBncm91cCB0byBtYWtlIGZpZWxkcyByZWFkLW9ubHkuXG4gICAqIEZvciBvdGhlciBvcGVyYXRpb25zLCBzZXRzIHVwIGljb25zLCBjb25maWd1cmVzIG11bHRpLXZhbHVlIHN1cHBvcnQgaWYgbmVlZGVkLFxuICAgKiBhbmQgc2V0cyBkZWZhdWx0IHZhbHVlcyBmb3IgcmFkaW8gYnV0dG9ucyBpZiBubyB2YWx1ZSBpcyBwcm92aWRlZC5cbiAgICpcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqIEBtZW1iZXJPZiBDcnVkRmllbGRDb21wb25lbnRcbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmKHRoaXMub3B0aW9ucz8ubGVuZ3RoKVxuICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5wYXJzZWRPcHRpb25zO1xuICAgIGlmIChbT3BlcmF0aW9uS2V5cy5SRUFELCBPcGVyYXRpb25LZXlzLkRFTEVURV0uaW5jbHVkZXModGhpcy5vcGVyYXRpb24pKSB7XG4gICAgICB0aGlzLmZvcm1Hcm91cCA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkSWNvbnMoe2NoZXZyb25Eb3duT3V0bGluZSwgY2hldnJvblVwT3V0bGluZX0pXG4gICAgICBpZih0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwID0gdGhpcy5nZXRBY3RpdmVGb3JtR3JvdXAgYXMgRm9ybUdyb3VwO1xuICAgICAgICB0aGlzLmZvcm1Hcm91cEFycmF5ID0gdGhpcy5mb3JtR3JvdXAucGFyZW50IGFzIEZvcm1BcnJheTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnR5cGUgPT09IEhUTUw1SW5wdXRUeXBlcy5SQURJTyAmJiAhdGhpcy52YWx1ZSlcbiAgICAgICAgdGhpcy5mb3JtR3JvdXA/LmdldCh0aGlzLm5hbWUpPy5zZXRWYWx1ZSh0aGlzLm9wdGlvbnNbMF0udmFsdWUpOyAvLyBUT0RPOiBtaWdyYXRlIHRvIFJlbmRlcmluZ0VuZ2luZVxuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDb21wb25lbnQgYWZ0ZXIgdmlldyBpbml0aWFsaXphdGlvbiBsaWZlY3ljbGUgbWV0aG9kLlxuICAgKiBAc3VtbWFyeSBDYWxscyB0aGUgcGFyZW50IGFmdGVyVmlld0luaXQgbWV0aG9kIGZvciBSRUFEIGFuZCBERUxFVEUgb3BlcmF0aW9ucy5cbiAgICogVGhpcyBlbnN1cmVzIHByb3BlciBpbml0aWFsaXphdGlvbiBvZiByZWFkLW9ubHkgZmllbGRzIHRoYXQgZG9uJ3QgcmVxdWlyZVxuICAgKiBmb3JtIGZ1bmN0aW9uYWxpdHkgYnV0IHN0aWxsIG5lZWQgdmlldyBzZXR1cC5cbiAgICpcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqIEBtZW1iZXJPZiBDcnVkRmllbGRDb21wb25lbnRcbiAgICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoW09wZXJhdGlvbktleXMuUkVBRCwgT3BlcmF0aW9uS2V5cy5ERUxFVEVdLmluY2x1ZGVzKHRoaXMub3BlcmF0aW9uKSlcbiAgICAgIHN1cGVyLmFmdGVyVmlld0luaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ29tcG9uZW50IGNsZWFudXAgbGlmZWN5Y2xlIG1ldGhvZC5cbiAgICogQHN1bW1hcnkgUGVyZm9ybXMgY2xlYW51cCBvcGVyYXRpb25zIGZvciBSRUFEIGFuZCBERUxFVEUgb3BlcmF0aW9ucyBieSBjYWxsaW5nXG4gICAqIHRoZSBwYXJlbnQgb25EZXN0cm95IG1ldGhvZC4gVGhpcyBlbnN1cmVzIHByb3BlciByZXNvdXJjZSBjbGVhbnVwIGZvclxuICAgKiByZWFkLW9ubHkgZmllbGQgY29tcG9uZW50cy5cbiAgICpcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqIEBtZW1iZXJPZiBDcnVkRmllbGRDb21wb25lbnRcbiAgICovXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmIChbT3BlcmF0aW9uS2V5cy5SRUFELCBPcGVyYXRpb25LZXlzLkRFTEVURV0uaW5jbHVkZXModGhpcy5vcGVyYXRpb24pKVxuICAgICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gSGFuZGxlcyBmaWVsZHNldCBncm91cCBjcmVhdGlvbiBldmVudHMgZnJvbSBwYXJlbnQgZmllbGRzZXRzLlxuICAgKiBAc3VtbWFyeSBQcm9jZXNzZXMgZXZlbnRzIHRyaWdnZXJlZCB3aGVuIGEgbmV3IGdyb3VwIG5lZWRzIHRvIGJlIGFkZGVkIHRvIGEgZmllbGRzZXQuXG4gICAqIFZhbGlkYXRlcyB0aGUgY3VycmVudCBmb3JtIGdyb3VwLCBjaGVja3MgZm9yIHVuaXF1ZW5lc3MgaWYgYXBwbGljYWJsZSwgYW5kIGVpdGhlclxuICAgKiBjcmVhdGVzIGEgbmV3IGdyb3VwIG9yIHByb3ZpZGVzIHZhbGlkYXRpb24gZmVlZGJhY2suIFVwZGF0ZXMgdGhlIGFjdGl2ZSBmb3JtIGdyb3VwXG4gICAqIGFuZCByZXNldHMgdGhlIGZpZWxkIGZvciBuZXcgaW5wdXQgYWZ0ZXIgc3VjY2Vzc2Z1bCBjcmVhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtDdXN0b21FdmVudH0gZXZlbnQgLSBUaGUgZmllbGRzZXQgY3JlYXRlIGdyb3VwIGV2ZW50IGNvbnRhaW5pbmcgZ3JvdXAgZGV0YWlsc1xuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICogQG1lbWJlck9mIENydWRGaWVsZENvbXBvbmVudFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmZpZWxkc2V0QWRkR3JvdXBFdmVudCcsIFsnJGV2ZW50J10pXG4gIGhhbmRsZUZpZWxkc2V0Q3JlYXRlR3JvdXBFdmVudChldmVudDogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCB7IHBhcmVudCwgY29tcG9uZW50LCBpbmRleCwgb3BlcmF0aW9uIH0gPSBldmVudC5kZXRhaWw7XG4gICAgY29uc3QgZm9ybUdyb3VwID0gdGhpcy5mb3JtR3JvdXAgYXMgRm9ybUdyb3VwO1xuICAgIGNvbnN0IHBhcmVudEZvcm1Hcm91cCA9IHRoaXMuZm9ybUdyb3VwPy5wYXJlbnQgYXMgRm9ybUFycmF5O1xuICAgIGNvbnN0IGlzVmFsaWQgPSBOZ3hGb3JtU2VydmljZS52YWxpZGF0ZUZpZWxkcyhmb3JtR3JvdXAgYXMgRm9ybUdyb3VwKTtcbiAgICBjb25zdCBpbmRleFRvQ2hlY2sgPSBvcGVyYXRpb24gPT09IE9wZXJhdGlvbktleXMuQ1JFQVRFID9cbiAgICAgIGluZGV4ID09PSAwID8gaW5kZXggOiBwYXJlbnRGb3JtR3JvdXAubGVuZ3RoIC0gMSA6IGluZGV4O1xuXG4gICAgY29uc3QgaXNVbmlxdWUgPSBOZ3hGb3JtU2VydmljZS5pc1VuaXF1ZU9uR3JvdXAoZm9ybUdyb3VwLCBpbmRleFRvQ2hlY2ssIG9wZXJhdGlvbiB8fCBPcGVyYXRpb25LZXlzLkNSRUFURSk7XG4gICAgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoRXZlbnRDb25zdGFudHMuRklFTERTRVRfQUREX0dST1VQLCB7XG4gICAgICBkZXRhaWw6IHtpc1ZhbGlkOiBpc1ZhbGlkICYmIGlzVW5pcXVlLCB2YWx1ZTogZm9ybUdyb3VwLnZhbHVlLCBmb3JtR3JvdXA6IHBhcmVudEZvcm1Hcm91cCwgZm9ybVNlcnZpY2U6IE5neEZvcm1TZXJ2aWNlfSxcbiAgICB9KTtcbiAgICBjb21wb25lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cbiAgICBpZihpc1ZhbGlkICYmIGlzVW5pcXVlKSB7XG4gICAgICBjb25zdCBuZXdJbmRleCA9IHBhcmVudEZvcm1Hcm91cC5sZW5ndGg7XG5cbiAgICAgIGlmKG9wZXJhdGlvbiA9PT0gT3BlcmF0aW9uS2V5cy5DUkVBVEUpIHtcbiAgICAgICAgTmd4Rm9ybVNlcnZpY2UuYWRkR3JvdXBUb1BhcmVudChwYXJlbnRGb3JtR3JvdXA/LnBhcmVudCBhcyBGb3JtR3JvdXAsIHBhcmVudCwgbmV3SW5kZXgpO1xuICAgICAgICB0aGlzLmFjdGl2ZUZvcm1Hcm91cCA9IG5ld0luZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hY3RpdmVGb3JtR3JvdXAgPSBuZXdJbmRleCAtIDE7XG4gICAgICB9XG4gICAgICB0aGlzLmZvcm1Hcm91cCA9IHRoaXMuZ2V0QWN0aXZlRm9ybUdyb3VwO1xuICAgICAgLy8gTmd4Rm9ybVNlcnZpY2UucmVzZXQodGhpcy5mb3JtR3JvdXAgYXMgRm9ybUdyb3VwKTtcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wgPSAodGhpcy5mb3JtR3JvdXAgYXMgRm9ybUdyb3VwKS5nZXQodGhpcy5uYW1lKSBhcyBGb3JtQ29udHJvbDtcbiAgICAgIC8vIE5neEZvcm1TZXJ2aWNlLnJlc2V0KHRoaXMuZm9ybUNvbnRyb2wpO1xuICAgICAgLy8gdGhpcy5jb21wb25lbnQubmF0aXZlRWxlbWVudC5zZXRGb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihpc1VuaXF1ZSlcbiAgICAgICAgdGhpcy5jb21wb25lbnQubmF0aXZlRWxlbWVudC5zZXRGb2N1cygpO1xuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBIYW5kbGVzIGZpZWxkc2V0IGdyb3VwIHVwZGF0ZSBldmVudHMgZnJvbSBwYXJlbnQgZmllbGRzZXRzLlxuICAgKiBAc3VtbWFyeSBQcm9jZXNzZXMgZXZlbnRzIHRyaWdnZXJlZCB3aGVuIGFuIGV4aXN0aW5nIGdyb3VwIG5lZWRzIHRvIGJlIHVwZGF0ZWQuXG4gICAqIFVwZGF0ZXMgdGhlIGFjdGl2ZSBmb3JtIGdyb3VwIGluZGV4IGFuZCByZWZyZXNoZXMgdGhlIGZvcm0gZ3JvdXAgYW5kIGZvcm0gY29udHJvbFxuICAgKiByZWZlcmVuY2VzIHRvIHBvaW50IHRvIHRoZSBncm91cCBiZWluZyBlZGl0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7Q3VzdG9tRXZlbnR9IGV2ZW50IC0gVGhlIGZpZWxkc2V0IHVwZGF0ZSBncm91cCBldmVudCBjb250YWluaW5nIHVwZGF0ZSBkZXRhaWxzXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKiBAbWVtYmVyT2YgQ3J1ZEZpZWxkQ29tcG9uZW50XG4gICAqL1xuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6ZmllbGRzZXRVcGRhdGVHcm91cEV2ZW50JywgWyckZXZlbnQnXSlcbiAgaGFuZGxlRmllbGRzZXRVcGRhdGVHcm91cEV2ZW50KGV2ZW50OiBDdXN0b21FdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHtpbmRleH0gPSBldmVudC5kZXRhaWw7XG4gICAgdGhpcy5hY3RpdmVGb3JtR3JvdXAgPSBpbmRleDtcbiAgICB0aGlzLmZvcm1Hcm91cCA9IHRoaXMuZ2V0QWN0aXZlRm9ybUdyb3VwO1xuICAgIHRoaXMuZm9ybUNvbnRyb2wgPSB0aGlzLmZvcm1Hcm91cC5nZXQodGhpcy5uYW1lKSBhcyBGb3JtQ29udHJvbDtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBIYW5kbGVzIGZpZWxkc2V0IGdyb3VwIHJlbW92YWwgZXZlbnRzIGZyb20gcGFyZW50IGZpZWxkc2V0cy5cbiAgICogQHN1bW1hcnkgUHJvY2Vzc2VzIGV2ZW50cyB0cmlnZ2VyZWQgd2hlbiBhIGdyb3VwIG5lZWRzIHRvIGJlIHJlbW92ZWQgZnJvbSBhIGZpZWxkc2V0LlxuICAgKiBSZW1vdmVzIHRoZSBzcGVjaWZpZWQgZ3JvdXAgZnJvbSB0aGUgZm9ybSBhcnJheSwgdXBkYXRlcyB0aGUgYWN0aXZlIGZvcm0gZ3JvdXAgaW5kZXgsXG4gICAqIGFuZCByZWZyZXNoZXMgdGhlIGZvcm0gcmVmZXJlbmNlcy4gRGlzcGF0Y2hlcyBhIGNvbmZpcm1hdGlvbiBldmVudCBiYWNrIHRvIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7Q3VzdG9tRXZlbnR9IGV2ZW50IC0gVGhlIGZpZWxkc2V0IHJlbW92ZSBncm91cCBldmVudCBjb250YWluaW5nIHJlbW92YWwgZGV0YWlsc1xuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICogQG1lbWJlck9mIENydWRGaWVsZENvbXBvbmVudFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmZpZWxkc2V0UmVtb3ZlR3JvdXBFdmVudCcsIFsnJGV2ZW50J10pXG4gIGhhbmRsZUZpZWxkc2V0UmVtb3ZlR3JvdXBFdmVudChldmVudDogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNvbXBvbmVudCwgaW5kZXggfSA9IGV2ZW50LmRldGFpbDtcbiAgICBjb25zdCBmb3JtQXJyYXkgPSB0aGlzLmZvcm1Hcm91cD8ucGFyZW50IGFzIEZvcm1BcnJheTtcbiAgICBmb3JtQXJyYXkucmVtb3ZlQXQoaW5kZXgpO1xuICAgIHRoaXMuYWN0aXZlRm9ybUdyb3VwID0gZm9ybUFycmF5Lmxlbmd0aCA9PT0gMSA/IDAgOiBmb3JtQXJyYXkubGVuZ3RoIC0gMTtcbiAgICB0aGlzLmZvcm1Hcm91cCA9IHRoaXMuZ2V0QWN0aXZlRm9ybUdyb3VwO1xuICAgIHRoaXMuZm9ybUNvbnRyb2wgPSB0aGlzLmZvcm1Hcm91cC5nZXQodGhpcy5uYW1lKSBhcyBGb3JtQ29udHJvbDtcbiAgICB0aGlzLmZvcm1Hcm91cEFycmF5ID0gZm9ybUFycmF5XG4gICAgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoRXZlbnRDb25zdGFudHMuRklFTERTRVRfUkVNT1ZFX0dST1VQLCB7XG4gICAgICBkZXRhaWw6IHt2YWx1ZTogdHJ1ZX0sXG4gICAgfSk7XG4gICAgY29tcG9uZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9XG59XG4iLCJAaWYob3BlcmF0aW9uID09PSAncmVhZCcgfHwgb3BlcmF0aW9uID09PSAnZGVsZXRlJykge1xuICA8bmctY29udGFpbmVyICNjb21wb25lbnQ+XG4gICAgPGRpdiBbY2xhc3NdPVwiJ2RjZi1pbnB1dC1pdGVtICcgKyBvcGVyYXRpb25cIj5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICB7eyBsYWJlbCB8IHRyYW5zbGF0ZSB9fTxiciAvPlxuICAgICAgICAgIEBpZih2YWx1ZSkge1xuICAgICAgICAgICAgPGlvbi10ZXh0ICBbaW5uZXJIVE1MXT1cInR5cGUgPT09ICdwYXNzd29yZCcgPyAnKioqKioqKionIDogdmFsdWVcIj48L2lvbi10ZXh0PlxuICAgICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgfVxuICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLWl0ZW0+XG4gICAgPC9kaXY+XG4gIDwvbmctY29udGFpbmVyPlxufSBAZWxzZSB7XG4gIDxuZy1jb250YWluZXIgW2Zvcm1Hcm91cF09XCJnZXRBY3RpdmVGb3JtR3JvdXBcIj5cbiAgICA8ZGl2ICNjb250YWluZXIgW2NsYXNzXT1cIidkY2YtaW5wdXQtaXRlbSAnICsgKG9wZXJhdGlvbiB8fCAnY3JlYXRlJylcIiAoY3JlYXRlR3JvdXBFdmVudCk9XCJtdWx0aXBsZSA/IGhhbmRsZUZpZWxkc2V0Q3JlYXRlR3JvdXBFdmVudCgkZXZlbnQpIDogJydcIj5cbiAgICAgICAgQGlmKHR5cGUgPT09ICd0ZXh0YXJlYScpIHtcbiAgICAgICAgICA8aW9uLXRleHRhcmVhXG4gICAgICAgICAgICBbbW9kZV09XCJtb2RlXCJcbiAgICAgICAgICAgIFtoaWRkZW5dPVwiaGlkZGVuXCJcbiAgICAgICAgICAgIFthdXRvR3Jvd109XCJ0cnVlXCJcbiAgICAgICAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZCAhPT0gdW5kZWZpbmVkID8gcmVxdWlyZWQgOiBudWxsXCJcbiAgICAgICAgICAgIFttaW5sZW5ndGhdPVwibWlubGVuZ3RoICE9PSB1bmRlZmluZWQgPyBtaW5sZW5ndGggOiBudWxsXCJcbiAgICAgICAgICAgIFttYXhsZW5ndGhdPVwibWF4bGVuZ3RoICE9PSB1bmRlZmluZWQgPyBtYXhsZW5ndGggOiBudWxsXCJcbiAgICAgICAgICAgIFtyZWFkb25seV09XCJyZWFkb25seSAhPT0gdW5kZWZpbmVkID8gcmVhZG9ubHkgOiBudWxsXCJcbiAgICAgICAgICAgIFtpbnB1dG1vZGVdPVwiaW5wdXRtb2RlXCJcbiAgICAgICAgICAgIFtzcGVsbGNoZWNrXT1cInNwZWxsY2hlY2tcIlxuICAgICAgICAgICAgW3Jvd3NdPVwicm93c1wiXG4gICAgICAgICAgICBbbGFiZWxQbGFjZW1lbnRdPVwibGFiZWxQbGFjZW1lbnRcIlxuICAgICAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcbiAgICAgICAgICAgIFtmaWxsXT1cImZpbGxcIlxuICAgICAgICAgICAgW2Vycm9yVGV4dF09XCJnZXRFcnJvcnMoY29udGFpbmVyKVwiXG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwidHJhbnNsYXRhYmxlID8gKHBsYWNlaG9sZGVyIHwgdHJhbnNsYXRlKSA6IHBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwibmFtZVwiXG4gICAgICAgICAgICBbbGFiZWxdPVwidHJhbnNsYXRhYmxlID8gKGxhYmVsIHwgdHJhbnNsYXRlKSA6IGxhYmVsXCJcbiAgICAgICAgICAgI2NvbXBvbmVudD5cbiAgICAgICAgICA8L2lvbi10ZXh0YXJlYT5cbiAgICAgICAgfVxuICAgICAgICBAZWxzZSBpZih0eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgPGlvbi1pdGVtPlxuICAgICAgICAgICAgPGlvbi1jaGVja2JveFxuICAgICAgICAgICAgICAjY2hlY2tib3hFbGVtZW50XG5cbiAgICAgICAgICAgICAgW21vZGVdPVwibW9kZVwiXG4gICAgICAgICAgICAgIFtlcnJvclRleHRdPVwiZ2V0RXJyb3JzKGNvbnRhaW5lcilcIlxuICAgICAgICAgICAgICBbaGlkZGVuXT1cImhpZGRlblwiXG4gICAgICAgICAgICAgIFtsYWJlbFBsYWNlbWVudF09XCJsYWJlbFBsYWNlbWVudFwiXG4gICAgICAgICAgICAgIFtqdXN0aWZ5XT1cImp1c3RpZnlcIlxuICAgICAgICAgICAgICBbdmFsdWVdPVwidmFsdWVcIlxuICAgICAgICAgICAgICBbY2hlY2tlZF09XCJjaGVja2VkXCJcbiAgICAgICAgICAgICAgW3JlYWRvbmx5XT1cInJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgKGlvbkNoYW5nZSk9XCJjaGVja2VkID0gIWNoZWNrZWRcIlxuICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cIm5hbWVcIlxuICAgICAgICAgICAgICNjb21wb25lbnQ+XG4gICAgICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwibGFiZWwgfCB0cmFuc2xhdGVcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2lvbi1jaGVja2JveD5cbiAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICB9XG4gICAgICAgIEBlbHNlIGlmKHR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICA8aW9uLXJhZGlvLWdyb3VwIFtmb3JtQ29udHJvbE5hbWVdPVwibmFtZVwiIFt2YWx1ZV09XCJ2YWx1ZVwiICNjb21wb25lbnQ+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkY2YtcmFkaW8tZ3JvdXAtbGFiZWxcIiBbZm9yXT1cInBhdGhcIj57e2xhYmVsIHwgdHJhbnNsYXRlfX08L2xhYmVsPlxuICAgICAgICAgICAgQGZvcihvcHRpb24gb2Ygb3B0aW9uczsgdHJhY2sgb3B0aW9uKSB7XG4gICAgICAgICAgICAgIDxpb24taXRlbT5cbiAgICAgICAgICAgICAgICA8aW9uLXJhZGlvXG4gICAgICAgICAgICAgICAgICBbZXJyb3JUZXh0XT1cImdldEVycm9ycyhjb250YWluZXIpXCJcbiAgICAgICAgICAgICAgICAgIFttb2RlXT1cIm1vZGVcIlxuICAgICAgICAgICAgICAgICAgW2hpZGRlbl09XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgW2xhYmVsUGxhY2VtZW50XT1cImxhYmVsUGxhY2VtZW50XCJcbiAgICAgICAgICAgICAgICAgIFthbGlnbm1lbnRdPVwiYWxpZ25tZW50XCJcbiAgICAgICAgICAgICAgICAgIFtqdXN0aWZ5XT1cImp1c3RpZnlcIlxuICAgICAgICAgICAgICAgICAgW3JlYWRvbmx5XT1cInJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIlxuICAgICAgICAgICAgICAgID57eyB0cmFuc2xhdGFibGUgPyAgKG9wdGlvbj8udGV4dCB8IHRyYW5zbGF0ZSkgOiBvcHRpb24/LnRleHQgfX08L2lvbi1yYWRpbz5cbiAgICAgICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2lvbi1yYWRpby1ncm91cD5cbiAgICAgICAgfVxuICAgICAgICBAZWxzZSBpZih0eXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgICAgICAgPGlvbi1zZWxlY3RcbiAgICAgICAgICAgICAgdG9nZ2xlSWNvbj1cImNoZXZyb24tZG93bi1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgZXhwYW5kZWRJY29uPVwiY2hldnJvbi11cC1vdXRsaW5lXCJcblxuICAgICAgICAgICAgICBbbW9kZV09XCJtb2RlXCJcbiAgICAgICAgICAgICAgW2hpZGRlbl09XCJoaWRkZW5cIlxuICAgICAgICAgICAgICBbbGFiZWxQbGFjZW1lbnRdPVwibGFiZWxQbGFjZW1lbnRcIlxuICAgICAgICAgICAgICBbbGFiZWxdPVwidHJhbnNsYXRhYmxlID8gKGxhYmVsIHwgdHJhbnNsYXRlKSA6IGxhYmVsXCJcbiAgICAgICAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgW2ZpbGxdPVwiZmlsbFwiXG4gICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJ0cmFuc2xhdGFibGUgPyAocGxhY2Vob2xkZXIgfCB0cmFuc2xhdGUpIDogcGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cIm5hbWVcIlxuICAgICAgICAgICAgICBbZXJyb3JUZXh0XT1cImdldEVycm9ycyhjb250YWluZXIpXCJcbiAgICAgICAgICAgICAgW2ludGVyZmFjZV09XCJpbnRlcmZhY2VcIiAgI2NvbXBvbmVudD5cbiAgICAgICAgICAgICAgQGZvcihvcHRpb24gb2Ygb3B0aW9uczsgdHJhY2sgb3B0aW9uLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgPGlvbi1zZWxlY3Qtb3B0aW9uIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgIHt7IG9wdGlvbi50ZXh0IHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgICAgICAgPC9pb24tc2VsZWN0LW9wdGlvbj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9pb24tc2VsZWN0PlxuICAgICAgICB9XG4gICAgICAgIEBlbHNlIHtcbiAgICAgICAgICA8aW9uLWlucHV0XG4gICAgICAgICAgICBbdHlwZV09XCJ0eXBlXCJcbiAgICAgICAgICAgIFttb2RlXT1cIm1vZGVcIlxuICAgICAgICAgICAgW2hpZGRlbl09XCJoaWRkZW5cIlxuICAgICAgICAgICAgW2lucHV0bW9kZV09XCJpbnB1dG1vZGVcIlxuICAgICAgICAgICAgW2xhYmVsUGxhY2VtZW50XT1cImxhYmVsUGxhY2VtZW50XCJcbiAgICAgICAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZCAhPT0gdW5kZWZpbmVkID8gcmVxdWlyZWQgOiBmYWxzZVwiXG4gICAgICAgICAgICBbbWlubGVuZ3RoXT1cIm1pbmxlbmd0aCAhPT0gdW5kZWZpbmVkID8gbWlubGVuZ3RoIDogbnVsbFwiXG4gICAgICAgICAgICBbbWF4bGVuZ3RoXT1cIm1heGxlbmd0aCAhPT0gdW5kZWZpbmVkID8gbWF4bGVuZ3RoIDogbnVsbFwiXG4gICAgICAgICAgICBbcmVhZG9ubHldPVwicmVhZG9ubHkgIT09IHVuZGVmaW5lZCA/IHJlYWRvbmx5IDogbnVsbFwiXG4gICAgICAgICAgICBbbWF4XT1cIm1heCAhPT0gdW5kZWZpbmVkID8gbWF4IDogbnVsbFwiXG4gICAgICAgICAgICBbbWluXT1cIm1pbiAhPT0gdW5kZWZpbmVkID8gbWluIDogbnVsbFwiXG4gICAgICAgICAgICBbcGF0dGVybl09XCJwYXR0ZXJuICE9PSB1bmRlZmluZWQgPyBwYXR0ZXJuIDogbnVsbFwiXG4gICAgICAgICAgICBbc3RlcF09XCJzdGVwICE9PSB1bmRlZmluZWQgPyBzdGVwIDogbnVsbFwiXG4gICAgICAgICAgICBbZmlsbF09XCJmaWxsXCJcbiAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJ0cmFuc2xhdGFibGUgPyAocGxhY2Vob2xkZXIgfCB0cmFuc2xhdGUpIDogcGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJuYW1lXCJcbiAgICAgICAgICAgIFtlcnJvclRleHRdPVwiZ2V0RXJyb3JzKGNvbnRhaW5lcilcIlxuICAgICAgICAgICAgW2xhYmVsXT1cInRyYW5zbGF0YWJsZSA/IChsYWJlbCB8IHRyYW5zbGF0ZSkgOiBsYWJlbFwiICNjb21wb25lbnQgLz5cbiAgICAgICAgfVxuICAgIDwvZGl2PlxuICA8L25nLWNvbnRhaW5lcj5cbn1cblxuIl19