import { FieldProperties } from '@decaf-ts/ui-decorators';
import { FieldUpdateMode } from './types';
import { IComponentConfig } from './interfaces';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { OperationKeys } from '@decaf-ts/db-decorators';
/**
 * @description Service for managing Angular forms and form controls.
 * @summary The NgxFormService provides utility methods for creating, managing, and validating Angular forms and form controls. It includes functionality for registering forms, adding controls, validating fields, and handling form data.
 *
 * @class
 * @param {WeakMap<AbstractControl, FieldProperties>} controls - A WeakMap to store control properties.
 * @param {Map<string, FormGroup>} formRegistry - A Map to store registered forms.
 *
 * @example
 * // Creating a form from components
 * const components = [
 *   { inputs: { name: 'username', type: 'text', required: true } },
 *   { inputs: { name: 'password', type: 'password', minLength: 8 } }
 * ];
 * const form = NgxFormService.createFormFromComponents('loginForm', components, true);
 *
 * // Validating fields
 * NgxFormService.validateFields(form);
 *
 * // Getting form data
 * const formData = NgxFormService.getFormData(form);
 *
 * @mermaid
 * sequenceDiagram
 *   participant C as Component
 *   participant NFS as NgxFormService
 *   participant AF as Angular Forms
 *   C->>NFS: createFormFromComponents()
 *   NFS->>AF: new FormGroup()
 *   NFS->>NFS: addFormControl()
 *   NFS->>AF: addControl()
 *   NFS-->>C: Return FormGroup
 *   C->>NFS: validateFields()
 *   NFS->>AF: markAsTouched(), markAsDirty(), updateValueAndValidity()
 *   C->>NFS: getFormData()
 *   NFS->>AF: Get control values
 *   NFS-->>C: Return form data
 */
export declare class NgxFormService {
    /**
     * @description WeakMap that stores control properties for form controls.
     * @summary A WeakMap that associates AbstractControl instances with their corresponding FieldProperties.
     * This allows the service to track metadata for form controls without creating memory leaks.
     *
     * @type {WeakMap<AbstractControl, FieldProperties>}
     * @private
     * @static
     * @memberOf NgxFormService
     */
    private static controls;
    /**
     * @description Registry of form groups indexed by their unique identifiers.
     * @summary A Map that stores FormGroup instances with their unique string identifiers.
     * This allows global access to registered forms throughout the application.
     *
     * @type {Map<string, FormGroup>}
     * @private
     * @static
     * @memberOf NgxFormService
     */
    private static formRegistry;
    /**
     * @description Adds a form to the registry.
     * @summary Registers a FormGroup with a unique identifier. Throws an error if the identifier is already in use.
     * @param {string} formId - The unique identifier for the form.
     * @param {FormGroup} formGroup - The FormGroup to be registered.
     * @throws {Error} If a FormGroup with the given id is already registered.
     */
    static addRegistry(formId: string, formGroup: FormGroup): void;
    /**
     * @description Removes a form from the registry.
     * @summary Deletes a FormGroup from the registry using its unique identifier.
     * @param {string} formId - The unique identifier of the form to be removed.
     */
    static removeRegistry(formId: string): void;
    /**
     * @description Resolves the parent group and control name from a path.
     * @summary Traverses the form group structure to find the parent group and control name for a given path.
     * @param {FormGroup} formGroup - The root FormGroup.
     * @param {string} path - The path to the control.
     * @return {FormParentGroup} A tuple containing the parent FormGroup and the control name.
     */
    private static resolveParentGroup;
    /**
     * @description Retrieves component properties from a FormGroup or FormArray.
     * @summary Extracts component properties stored in the form group metadata. If a FormGroup is provided
     * and groupArrayName is specified, it will look for the FormArray within the form structure.
     *
     * @param {FormGroup | FormArray} formGroup - The form group or form array to extract properties from
     * @param {string} [key] - Optional key to retrieve a specific property
     * @param {string} [groupArrayName] - Optional name of the group array if formGroup is not a FormArray
     * @return {Partial<FieldProperties>} The component properties or a specific property if key is provided
     *
     * @static
     * @memberOf NgxFormService
     */
    static getComponentPropsFromGroupArray(formGroup: FormGroup | FormArray, key?: string, groupArrayName?: string | undefined): Partial<FieldProperties>;
    /**
     * @description Adds a new group to a parent FormArray.
     * @summary Creates and adds a new FormGroup to the specified parent FormArray based on the
     * component properties stored in the parent's metadata. This is used for dynamic form arrays
     * where new groups need to be added at runtime.
     *
     * @param {FormGroup} formGroup - The root form group containing the parent FormArray
     * @param {string} parentName - The name of the parent FormArray to add the group to
     * @param {number} [index=1] - The index position where the new group should be added
     * @return {FormGroup} The newly created and added FormGroup
     *
     * @static
     * @memberOf NgxFormService
     */
    static addGroupToParent(formGroup: FormGroup, parentName: string, index?: number): FormGroup;
    /**
     * @description Retrieves a FormGroup from a parent FormArray at the specified index.
     * @summary Gets a FormGroup from the specified parent FormArray. If the group doesn't exist
     * at the given index, it will create a new one using addGroupToParent.
     *
     * @param {FormGroup} formGroup - The root form group containing the parent FormArray
     * @param {string} parentName - The name of the parent FormArray to retrieve the group from
     * @param {number} [index=1] - The index of the group to retrieve
     * @return {FormGroup} The FormGroup at the specified index
     *
     * @static
     * @memberOf NgxFormService
     */
    static getGroupFromParent(formGroup: FormGroup, parentName: string, index?: number): FormGroup;
    /**
     * @description Checks if a value is unique within a FormArray group.
     * @summary Validates that the primary key value in a FormGroup is unique among all groups
     * in the parent FormArray. The uniqueness check behavior differs based on the operation type.
     *
     * @param {FormGroup} formGroup - The FormGroup to check for uniqueness
     * @param {number} index - The index of the current group within the FormArray
     * @param {OperationKeys} [operation=OperationKeys.CREATE] - The type of operation being performed
     * @return {boolean} True if the value is unique, false otherwise
     *
     * @static
     * @memberOf NgxFormService
     */
    static isUniqueOnGroup(formGroup: FormGroup, index: number, operation?: OperationKeys): boolean;
    /**
     * @description Enables all controls within a FormGroup or FormArray.
     * @summary Recursively enables all form controls within the provided FormGroup or FormArray.
     * This is useful for making all controls interactive after they have been disabled.
     *
     * @param {FormArray | FormGroup} formGroup - The FormGroup or FormArray to enable all controls for
     * @return {void}
     *
     * @static
     * @memberOf NgxFormService
     */
    static enableAllGroupControls(formGroup: FormArray | FormGroup): void;
    /**
     * @description Adds a form control to a form group based on component properties.
     * @summary Creates and configures a FormControl within the specified FormGroup using the provided
     * component properties. Handles nested paths, multiple controls (FormArrays), and control registration.
     * This method supports complex form structures with nested groups and arrays.
     *
     * @param {FormGroup} formGroup - The form group to add the control to
     * @param {IComponentInput} componentProps - The component properties defining the control configuration
     * @param {KeyValue} [parentProps={}] - Properties from the parent component for context
     * @param {number} [index=0] - The index for multiple controls in FormArrays
     * @return {void}
     *
     * @private
     * @static
     * @memberOf NgxFormService
     */
    private static addFormControl;
    /**
     * @description Retrieves a control from a registered form.
     * @summary Finds and returns an AbstractControl from a registered form using the form id and optional path.
     * @param {string} formId - The unique identifier of the form.
     * @param {string} [path] - The path to the control within the form.
     * @return {AbstractControl} The requested AbstractControl.
     * @throws {Error} If the form is not found in the registry or the control is not found in the form.
     */
    static getControlFromForm(formId: string, path?: string): AbstractControl;
    /**
     * @description Creates a form from component configurations.
     * @summary Generates a FormGroup based on an array of component configurations and optionally registers it.
     * @param {string} id - The unique identifier for the form.
     * @param {IComponentConfig[]} components - An array of component configurations.
     * @param {boolean} [registry=false] - Whether to register the created form.
     * @return {FormGroup} The created FormGroup.
     */
    static createFormFromComponents(id: string, components: IComponentConfig[], registry?: boolean): FormGroup;
    /**
     * @description Adds a control to a form based on component properties.
     * @summary Creates and adds a form control to a form (existing or new) based on the provided component properties.
     * @param {string} id - The unique identifier of the form.
     * @param {FieldProperties} componentProperties - The properties of the component to create the control from.
     * @return {AbstractControl} The form or created control.
     */
    static addControlFromProps(id: string, componentProperties: FieldProperties, parentProps?: FieldProperties): AbstractControl;
    /**
     * @description Retrieves form data from a FormGroup.
     * @summary Extracts and processes the data from a FormGroup, handling different input types and nested form groups.
     * @param {FormGroup} formGroup - The FormGroup to extract data from.
     * @return {Record<string, unknown>} An object containing the form data.
     */
    static getFormData(formGroup: FormGroup): Record<string, unknown>;
    /**
     * @description Validates fields in a form control or form group.
     * @summary Recursively validates all fields in a form control or form group, marking them as touched and dirty.
     * @param {AbstractControl} control - The control or form group to validate.
     * @param {string} [path] - The path to the control within the form.
     * @return {boolean} True if all fields are valid, false otherwise.
     * @throws {Error} If no control is found at the specified path or if the control type is unknown.
     */
    static validateFields(control: AbstractControl, pk?: string, path?: string): boolean;
    /**
     * @description Generates validators from component properties.
     * @summary Creates an array of ValidatorFn based on the supported validation keys in the component properties.
     * @param {FieldProperties} props - The component properties.
     * @return {ValidatorFn[]} An array of validator functions.
     */
    private static validatorsFromProps;
    /**
     * @description Creates a FormControl from component properties.
     * @summary Generates a FormControl with validators based on the provided component properties.
     * @param {FieldProperties} props - The component properties.
     * @param {FieldUpdateMode} [updateMode='change'] - The update mode for the control.
     * @return {FormControl} The created FormControl.
     */
    static fromProps(props: FieldProperties, updateMode?: FieldUpdateMode): FormControl;
    /**
     * @description Retrieves properties from a FormControl.
     * @summary Gets the FieldProperties associated with a FormControl from the internal WeakMap.
     * @param {FormControl} control - The FormControl to get properties for.
     * @return {FieldProperties} The properties associated with the control.
     */
    static getPropsFromControl(control: FormControl | FormArray | FormGroup): FieldProperties;
    /**
     * @description Finds a parent element with a specific tag.
     * @summary Traverses up the DOM tree to find the nearest parent element with the specified tag.
     * @param {HTMLElement} el - The starting element.
     * @param {string} tag - The tag name to search for.
     * @return {HTMLElement} The found parent element.
     * @throws {Error} If no parent with the specified tag is found.
     */
    static getParentEl(el: HTMLElement, tag: string): HTMLElement;
    /**
     * @description Registers a control with its properties.
     * @summary Associates a control with its properties in the internal WeakMap.
     * @param {AbstractControl} control - The control to register.
     * @param {FieldProperties} props - The properties to associate with the control.
     */
    static register(control: AbstractControl, props: FieldProperties): void;
    /**
     * @description Unregisters a control.
     * @summary Removes a control and its associated properties from the internal WeakMap.
     * @param {AbstractControl} control - The control to unregister.
     * @return {boolean} True if the control was successfully unregistered, false otherwise.
     */
    static unregister(control: AbstractControl): boolean;
    /**
     * @description Resets a form group.
     * @summary Recursively resets all controls in a form group, clearing values, errors, and marking them as pristine and untouched.
     * @param {FormGroup} formGroup - The form group to reset.
     */
    static reset(formGroup: FormGroup | FormControl): void;
}
//# sourceMappingURL=NgxFormService.d.ts.map