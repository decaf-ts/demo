import { AfterViewInit, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AutocompleteTypes, SelectInterface } from '@ionic/core';
import { CrudOperations } from '@decaf-ts/db-decorators';
import { NgxCrudFormField } from '../../engine/NgxCrudFormField';
import { CrudFieldOption, FieldUpdateMode, PossibleInputTypes, StringOrBoolean } from '../../engine/types';
import * as i0 from "@angular/core";
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
export declare class CrudFieldComponent extends NgxCrudFormField implements OnInit, OnDestroy, AfterViewInit {
    /**
     * @description The CRUD operation being performed.
     * @summary Specifies which CRUD operation (Create, Read, Update, Delete) the field is being used for.
     * This affects how the field behaves and is rendered. For example, fields might be read-only in
     * 'read' mode but editable in 'create' or 'update' modes.
     *
     * @type {CrudOperations}
     * @memberOf CrudFieldComponent
     */
    operation: CrudOperations;
    /**
     * @summary  The flat field name used as the form control identifier in immediate parent FormGroup.
     * @description
     * Specifies the name of the field, which is used as the FormControl identifier in immediate parent FormGroup.
     * This value must be unique within the immediate parent FormGroup context and should not contain dots or nesting.
     *
     * @type {string}
     * @memberOf CrudFieldComponent
     */
    name: string;
    /**
     * @summary The full field path used for form control resolution.
     * @description Specifies the hierarchical path of the field, used to resolve its location within the parent FormGroup (or nested FormGroups).
     * It is used as the identifier in the rendered HTML, and may include nesting (e.g., 'address.billing.street') and
     * should match the structure of the data model
     *
     * @type {string}
     * @memberOf CrudFieldComponent
     */
    path: string;
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
    childOf: string;
    /**
     * @description The input type of the field.
     * @summary Defines the type of input to render, such as text, number, date, select, etc.
     * This determines which Ionic form component will be used to render the field and how
     * the data will be formatted and validated.
     *
     * @type {PossibleInputTypes}
     * @memberOf CrudFieldComponent
     */
    type: PossibleInputTypes;
    /**
     * @description The initial value of the field.
     * @summary Sets the initial value of the form field. This can be a string, number, or Date
     * depending on the field type. For select fields, this should match one of the option values.
     *
     * @type {string | number | Date}
     * @default ''
     * @memberOf CrudFieldComponent
     */
    value: string | number | Date;
    /**
     * @description Whether the field is disabled.
     * @summary When true, the field will be rendered in a disabled state, preventing user interaction.
     * Disabled fields are still included in the form model but cannot be edited by the user.
     *
     * @type {boolean}
     * @memberOf CrudFieldComponent
     */
    disabled?: boolean;
    /**
     * @description The display label for the field.
     * @summary The text label displayed alongside the field to identify it to the user.
     * This label can be translated if the translatable property is set to true.
     *
     * @type {string}
     * @memberOf CrudFieldComponent
     */
    label: string;
    /**
     * @description Placeholder text when field is empty.
     * @summary Text that appears in the input when it has no value. This provides a hint to the user
     * about what kind of data is expected. The placeholder disappears when the user starts typing.
     *
     * @type {string}
     * @memberOf CrudFieldComponent
     */
    placeholder: string;
    /**
     * @description Format pattern for the field value.
     * @summary Specifies a format pattern for the field value, which can be used for date formatting,
     * number formatting, or other type-specific formatting requirements.
     *
     * @type {string}
     * @memberOf CrudFieldComponent
     */
    format?: string;
    /**
     * @description Whether the field should be hidden.
     * @summary When true, the field will not be visible in the UI but will still be part of the form model.
     * This is useful for fields that need to be included in form submission but should not be displayed to the user.
     *
     * @type {boolean}
     * @memberOf CrudFieldComponent
     */
    hidden?: boolean;
    /**
     * @description Maximum allowed value for the field.
     * @summary For number inputs, this sets the maximum allowed numeric value.
     * For date inputs, this sets the latest allowed date.
     *
     * @type {number | Date}
     * @memberOf CrudFieldComponent
     */
    max?: number | Date;
    /**
     * @description Maximum allowed length for text input.
     * @summary For text inputs, this sets the maximum number of characters allowed.
     * This is used for validation and may also be used to limit input in the UI.
     *
     * @type {number}
     * @memberOf CrudFieldComponent
     */
    maxlength?: number;
    /**
     * @description Minimum allowed value for the field.
     * @summary For number inputs, this sets the minimum allowed numeric value.
     * For date inputs, this sets the earliest allowed date.
     *
     * @type {number | Date}
     * @memberOf CrudFieldComponent
     */
    min?: number | Date;
    /**
     * @description Minimum allowed length for text input.
     * @summary For text inputs, this sets the minimum number of characters required.
     * This is used for validation to ensure the input meets a minimum length requirement.
     *
     * @type {number}
     * @memberOf CrudFieldComponent
     */
    minlength?: number;
    /**
     * @description Validation pattern for text input.
     * @summary A regular expression pattern used to validate text input.
     * The input value must match this pattern to be considered valid.
     *
     * @type {string}
     * @memberOf CrudFieldComponent
     */
    pattern?: string;
    /**
     * @description Whether the field is read-only.
     * @summary When true, the field will be rendered in a read-only state. Unlike disabled fields,
     * read-only fields are still focusable but cannot be modified by the user.
     *
     * @type {boolean}
     * @memberOf CrudFieldComponent
     */
    readonly?: boolean;
    /**
     * @description Whether the field is required.
     * @summary When true, the field must have a value for the form to be valid.
     * Required fields are typically marked with an indicator in the UI.
     *
     * @type {boolean}
     * @memberOf CrudFieldComponent
     */
    required?: boolean;
    /**
     * @description Step value for number inputs.
     * @summary For number inputs, this sets the increment/decrement step when using
     * the up/down arrows or when using a range slider.
     *
     * @type {number}
     * @memberOf CrudFieldComponent
     */
    step?: number;
    /**
     * @description Field name for equality validation comparison.
     * @summary Specifies another field name that this field's value must be equal to for validation.
     * This is commonly used for password confirmation fields or other scenarios where
     * two fields must contain the same value.
     *
     * @type {string | undefined}
     * @memberOf CrudFieldComponent
     */
    equals?: string;
    /**
     * @description Field name for inequality validation comparison.
     * @summary Specifies another field name that this field's value must be different from for validation.
     * This is used to ensure that two fields do not contain the same value, which might be
     * required for certain business rules or security constraints.
     *
     * @type {string | undefined}
     * @memberOf CrudFieldComponent
     */
    different?: string;
    /**
     * @description Field name for less-than validation comparison.
     * @summary Specifies another field name that this field's value must be less than for validation.
     * This is commonly used for date ranges, numeric ranges, or other scenarios where
     * one field must have a smaller value than another.
     *
     * @type {string | undefined}
     * @memberOf CrudFieldComponent
     */
    lessThan?: string;
    /**
     * @description Field name for less-than-or-equal validation comparison.
     * @summary Specifies another field name that this field's value must be less than or equal to
     * for validation. This provides inclusive upper bound validation for numeric or date comparisons.
     *
     * @type {string | undefined}
     * @memberOf CrudFieldComponent
     */
    lessThanOrEqual?: string;
    /**
     * @description Field name for greater-than validation comparison.
     * @summary Specifies another field name that this field's value must be greater than for validation.
     * This is commonly used for date ranges, numeric ranges, or other scenarios where
     * one field must have a larger value than another.
     *
     * @type {string | undefined}
     * @memberOf CrudFieldComponent
     */
    greaterThan?: string;
    /**
     * @description Field name for greater-than-or-equal validation comparison.
     * @summary Specifies another field name that this field's value must be greater than or equal to
     * for validation. This provides inclusive lower bound validation for numeric or date comparisons.
     *
     * @type {string | undefined}
     * @memberOf CrudFieldComponent
     */
    greaterThanOrEqual?: string;
    /**
     * @description Number of columns for textarea inputs.
     * @summary For textarea inputs, this sets the visible width of the text area in average character widths.
     * This is used alongside rows to define the dimensions of the textarea.
     *
     * @type {number}
     * @memberOf CrudFieldComponent
     */
    cols?: number;
    /**
     * @description Number of rows for textarea inputs.
     * @summary For textarea inputs, this sets the visible height of the text area in lines of text.
     * This is used alongside cols to define the dimensions of the textarea.
     *
     * @type {number}
     * @memberOf CrudFieldComponent
     */
    rows?: number;
    /**
     * @description Alignment of the field content.
     * @summary Controls the horizontal alignment of the field content.
     * This affects how the content is positioned within the field container.
     *
     * @type {'start' | 'center'}
     * @memberOf CrudFieldComponent
     */
    alignment?: 'start' | 'center';
    /**
     * @description Initial checked state for checkbox or toggle inputs.
     * @summary For checkbox or toggle inputs, this sets the initial checked state.
     * When true, the checkbox or toggle will be initially checked.
     *
     * @type {boolean}
     * @memberOf CrudFieldComponent
     */
    checked?: boolean;
    /**
     * @description Justification of items within the field.
     * @summary Controls how items are justified within the field container.
     * This is particularly useful for fields with multiple elements, such as radio groups.
     *
     * @type {'start' | 'end' | 'space-between'}
     * @memberOf CrudFieldComponent
     */
    justify?: 'start' | 'end' | 'space-between';
    /**
     * @description Text for the cancel button in select inputs.
     * @summary For select inputs with a cancel button, this sets the text displayed on the cancel button.
     * This is typically used in select dialogs to provide a way for users to dismiss the selection without making a change.
     *
     * @type {string}
     * @memberOf CrudFieldComponent
     */
    cancelText?: string;
    /**
     * @description Interface style for select inputs.
     * @summary Specifies the interface style for select inputs, such as 'alert', 'action-sheet', or 'popover'.
     * This determines how the select options are presented to the user.
     *
     * @type {SelectInterface}
     * @memberOf CrudFieldComponent
     */
    interface: SelectInterface;
    /**
     * @description Options for select or radio inputs.
     * @summary Provides the list of options for select or radio inputs. Each option can have a value and a label.
     * This is used to populate the dropdown or radio group with choices.
     *
     * @type {CrudFieldOption[]}
     * @memberOf CrudFieldComponent
     */
    options: CrudFieldOption[];
    /**
     * @description Mode of the field.
     * @summary Specifies the visual mode of the field, such as 'ios' or 'md'.
     * This affects the styling and appearance of the field to match the platform style.
     *
     * @type {'ios' | 'md'}
     * @memberOf CrudFieldComponent
     */
    mode?: 'ios' | 'md';
    /**
     * @description Spellcheck attribute for text inputs.
     * @summary Enables or disables spellchecking for text inputs.
     * When true, the browser will check the spelling of the input text.
     *
     * @type {boolean}
     * @default false
     * @memberOf CrudFieldComponent
     */
    spellcheck: boolean;
    /**
     * @description Input mode for text inputs.
     * @summary Hints at the type of data that might be entered by the user while editing the element.
     * This can affect the virtual keyboard layout on mobile devices.
     *
     * @type {'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'}
     * @default 'none'
     * @memberOf CrudFieldComponent
     */
    inputmode: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
    /**
     * @description Autocomplete behavior for the field.
     * @summary Specifies whether and how the browser should automatically complete the input.
     * This can improve user experience by suggesting previously entered values.
     *
     * @type {AutocompleteTypes}
     * @default 'off'
     * @memberOf CrudFieldComponent
     */
    autocomplete: AutocompleteTypes;
    /**
     * @description Fill style for the field.
     * @summary Determines the fill style of the field, such as 'outline' or 'solid'.
     * This affects the border and background of the field.
     *
     * @type {'outline' | 'solid'}
     * @default 'outline'
     * @memberOf CrudFieldComponent
     */
    fill: 'outline' | 'solid';
    /**
     * @description Placement of the label relative to the field.
     * @summary Specifies where the label should be placed relative to the field.
     * Options include 'start', 'end', 'floating', 'stacked', and 'fixed'.
     *
     * @type {'start' | 'end' | 'floating' | 'stacked' | 'fixed'}
     * @default 'floating'
     * @memberOf CrudFieldComponent
     */
    labelPlacement: 'start' | 'end' | 'floating' | 'stacked' | 'fixed';
    /**
     * @description Update mode for the field.
     * @summary Determines when the field value should be updated in the form model.
     * Options include 'change', 'blur', and 'submit'.
     *
     * @type {FieldUpdateMode}
     * @default 'change'
     * @memberOf CrudFieldComponent
     */
    updateOn: FieldUpdateMode;
    /**
     * @description Reference to the field component.
     * @summary Provides a reference to the field component element, allowing direct access to its properties and methods.
     *
     * @type {ElementRef}
     * @memberOf CrudFieldComponent
     */
    component: ElementRef;
    /**
     * @description Parent form group.
     * @summary References the parent form group to which this field belongs.
     * This is necessary for integrating the field with Angular's reactive forms.
     *
     * @type {FormGroup}
     * @memberOf CrudFieldComponent
     */
    formGroup: FormGroup | undefined;
    /**
     * @description Angular FormControl instance for this field.
     * @summary The specific FormControl instance that manages this field's state, validation,
     * and value. This provides direct access to Angular's reactive forms functionality
     * for this individual field within the broader form structure.
     *
     * @type {FormControl}
     * @memberOf CrudFieldComponent
     */
    formControl: FormControl;
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
    multiple: boolean;
    /**
     * @description Unique identifier for the current record.
     * @summary A unique identifier for the current record being displayed or manipulated.
     * This is typically used in conjunction with the primary key for operations on specific records.
     *
     * @type {string | number}
     */
    uid: string;
    /**
     * @description Translatability of field labels.
     * @summary Indicates whether the field labels should be translated based on the current language settings.
     * This is useful for applications supporting multiple languages.
     *
     * @type {StringOrBoolean}
     * @default true
     * @memberOf CrudFieldComponent
     */
    translatable: StringOrBoolean;
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
    activeFormGroup: number;
    /**
     * @description FormArray containing multiple form groups for this field.
     * @summary When this field is part of a multi-entry structure, this FormArray
     * contains all the form groups. This enables management of multiple instances
     * of the same field structure within a single form.
     *
     * @type {FormArray}
     * @memberOf CrudFieldComponent
     */
    formGroupArray: FormArray;
    /**
     * @description Primary key field name for uniqueness validation.
     * @summary Specifies the field name that serves as the primary key for uniqueness
     * validation within form arrays. This is used to prevent duplicate entries
     * and ensure data integrity in multi-entry forms.
     *
     * @type {string}
     * @memberOf CrudFieldComponent
     */
    pk: string;
    /**
     * @description Gets the currently active form group based on context.
     * @summary Returns the appropriate FormGroup based on whether this field supports
     * multiple values. For single-value fields, returns the main form group.
     * For multi-value fields, returns the form group at the active index from the parent FormArray.
     *
     * @returns {FormGroup} The currently active FormGroup for this field
     * @memberOf CrudFieldComponent
     */
    get getActiveFormGroup(): FormGroup;
    /**
     * Returns a list of options for select or radio inputs, with their `text` property
     * localized if it does not already include the word 'options'. The localization key
     * is generated from the component's label, replacing 'label' with 'options'.
     *
     * @returns {CrudFieldOption[]} The array of parsed and localized options.
     * @memberOf CrudFieldComponent
     */
    get parsedOptions(): CrudFieldOption[];
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
    ngOnInit(): void;
    /**
     * @description Component after view initialization lifecycle method.
     * @summary Calls the parent afterViewInit method for READ and DELETE operations.
     * This ensures proper initialization of read-only fields that don't require
     * form functionality but still need view setup.
     *
     * @returns {void}
     * @memberOf CrudFieldComponent
     */
    ngAfterViewInit(): void;
    /**
     * @description Component cleanup lifecycle method.
     * @summary Performs cleanup operations for READ and DELETE operations by calling
     * the parent onDestroy method. This ensures proper resource cleanup for
     * read-only field components.
     *
     * @returns {void}
     * @memberOf CrudFieldComponent
     */
    ngOnDestroy(): void;
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
    handleFieldsetCreateGroupEvent(event: CustomEvent): void;
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
    handleFieldsetUpdateGroupEvent(event: CustomEvent): void;
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
    handleFieldsetRemoveGroupEvent(event: CustomEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CrudFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CrudFieldComponent, "ngx-decaf-crud-field", never, { "operation": { "alias": "operation"; "required": true; }; "name": { "alias": "name"; "required": true; }; "path": { "alias": "path"; "required": true; }; "childOf": { "alias": "childOf"; "required": false; }; "type": { "alias": "type"; "required": true; }; "value": { "alias": "value"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "label": { "alias": "label"; "required": true; }; "placeholder": { "alias": "placeholder"; "required": false; }; "format": { "alias": "format"; "required": false; }; "hidden": { "alias": "hidden"; "required": false; }; "max": { "alias": "max"; "required": false; }; "maxlength": { "alias": "maxlength"; "required": false; }; "min": { "alias": "min"; "required": false; }; "minlength": { "alias": "minlength"; "required": false; }; "pattern": { "alias": "pattern"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "required": { "alias": "required"; "required": false; }; "step": { "alias": "step"; "required": false; }; "equals": { "alias": "equals"; "required": false; }; "different": { "alias": "different"; "required": false; }; "lessThan": { "alias": "lessThan"; "required": false; }; "lessThanOrEqual": { "alias": "lessThanOrEqual"; "required": false; }; "greaterThan": { "alias": "greaterThan"; "required": false; }; "greaterThanOrEqual": { "alias": "greaterThanOrEqual"; "required": false; }; "cols": { "alias": "cols"; "required": false; }; "rows": { "alias": "rows"; "required": false; }; "alignment": { "alias": "alignment"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "justify": { "alias": "justify"; "required": false; }; "cancelText": { "alias": "cancelText"; "required": false; }; "interface": { "alias": "interface"; "required": false; }; "options": { "alias": "options"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "spellcheck": { "alias": "spellcheck"; "required": false; }; "inputmode": { "alias": "inputmode"; "required": false; }; "autocomplete": { "alias": "autocomplete"; "required": false; }; "fill": { "alias": "fill"; "required": false; }; "labelPlacement": { "alias": "labelPlacement"; "required": false; }; "updateOn": { "alias": "updateOn"; "required": false; }; "formGroup": { "alias": "formGroup"; "required": false; }; "formControl": { "alias": "formControl"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "uid": { "alias": "uid"; "required": false; }; "translatable": { "alias": "translatable"; "required": false; }; "activeFormGroup": { "alias": "activeFormGroup"; "required": false; }; "pk": { "alias": "pk"; "required": false; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=crud-field.component.d.ts.map