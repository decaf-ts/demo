import { CrudOperationKeys, FieldProperties } from '@decaf-ts/ui-decorators';
import { PossibleInputTypes } from './types';
import { CrudOperations } from '@decaf-ts/db-decorators';
import { ControlValueAccessor, FormControl, FormGroup } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
/**
 * @class NgxCrudFormField
 * @implements {FieldProperties}
 * @implements {ControlValueAccessor}
 * @summary Abstract class representing a CRUD form field for Angular applications
 * @description This class provides the base implementation for CRUD form fields in Angular,
 * implementing both CrudFormField and ControlValueAccessor interfaces.
 */
export declare abstract class NgxCrudFormField implements ControlValueAccessor, FieldProperties {
    /**
     * @summary Reference to the component's element
     * @description ElementRef representing the component's native element
     */
    component: ElementRef;
    /**
     * @summary Current CRUD operation
     * @description Represents the current CRUD operation being performed
     */
    operation: CrudOperations;
    /**
     * @summary Form group for the field
     * @description Angular FormGroup instance for the field
     */
    formGroup: FormGroup | undefined;
    formControl: FormControl;
    name: string;
    path: string;
    childOf?: string;
    type: PossibleInputTypes;
    disabled?: boolean;
    uid?: string;
    format?: string;
    hidden?: boolean | CrudOperationKeys[];
    max?: number | Date;
    maxlength?: number;
    min?: number | Date;
    minlength?: number;
    pattern?: string | undefined;
    readonly?: boolean;
    required?: boolean;
    step?: number;
    equals?: string;
    different?: string;
    lessThan?: string;
    lessThanOrEqual?: string;
    greaterThan?: string;
    greaterThanOrEqual?: string;
    value: string | number | Date;
    multiple: boolean;
    protected translateService: TranslateService;
    private validationErrorEventDispateched;
    /**
     * @summary Parent HTML element
     * @description Reference to the parent HTML element of the field
     */
    protected parent?: HTMLElement;
    /**
     * @summary String formatting function
     * @description Provides access to the sf function for error message formatting
     * @prop {function(string, ...string): string} sf - String formatting function
     */
    sf: typeof import("@decaf-ts/decorator-validation").stringFormat;
    /**
     * @summary Change callback function
     * @description Function called when the field value changes
     * @property {function(): unknown} onChange - onChange event handler
     */
    onChange: () => unknown;
    /**
     * @summary Touch callback function
     * @description Function called when the field is touched
     * @property {function(): unknown} onTouch - onTouch event handler
     */
    onTouch: () => unknown;
    /**
     * @summary Write value to the field
     * @description Sets the value of the field
     * @param {string} obj - The value to be set
     */
    writeValue(obj: string): void;
    /**
     * @summary Register change callback
     * @description Registers a function to be called when the field value changes
     * @param {function(): unknown} fn - The function to be called on change
     */
    registerOnChange(fn: () => unknown): void;
    /**
     * @summary Register touch callback
     * @description Registers a function to be called when the field is touched
     * @param {function(): unknown} fn - The function to be called on touch
     */
    registerOnTouched(fn: () => unknown): void;
    /**
     * @summary Set disabled state
     * @description Sets the disabled state of the field
     * @param {boolean} isDisabled - Whether the field should be disabled
     */
    setDisabledState?(isDisabled: boolean): void;
    /**
     * @summary After view initialization logic
     * @description Performs necessary setup after the view has been initialized
     * @returns {HTMLElement} The parent element of the field
     */
    afterViewInit(): HTMLElement;
    /**
     * @summary Cleanup on component destruction
     * @description Unregisters the field when the component is destroyed
     */
    onDestroy(): void;
    /**
     * @summary Get field errors
     * @description Retrieves all errors associated with the field
     * @returns {string|void} An array of error objects
     */
    getErrors(parent: HTMLElement): string | void;
}
//# sourceMappingURL=NgxCrudFormField.d.ts.map