import { escapeHtml, HTML5CheckTypes, HTML5InputTypes, parseToNumber } from '@decaf-ts/ui-decorators';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { isValidDate, ModelKeys, parseDate, Primitives, Validation } from '@decaf-ts/decorator-validation';
import { ValidatorFactory } from './ValidatorFactory';
import { cleanSpaces } from '../helpers';
import { OperationKeys } from '@decaf-ts/db-decorators';
import { AngularEngineKeys, BaseComponentProps } from '../engine/constants';
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
export class NgxFormService {
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
    static { this.controls = new WeakMap(); }
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
    static { this.formRegistry = new Map(); }
    /**
     * @description Adds a form to the registry.
     * @summary Registers a FormGroup with a unique identifier. Throws an error if the identifier is already in use.
     * @param {string} formId - The unique identifier for the form.
     * @param {FormGroup} formGroup - The FormGroup to be registered.
     * @throws {Error} If a FormGroup with the given id is already registered.
     */
    static addRegistry(formId, formGroup) {
        if (this.formRegistry.has(formId))
            throw new Error(`A FormGroup with id '${formId}' is already registered.`);
        this.formRegistry.set(formId, formGroup);
    }
    /**
     * @description Removes a form from the registry.
     * @summary Deletes a FormGroup from the registry using its unique identifier.
     * @param {string} formId - The unique identifier of the form to be removed.
     */
    static removeRegistry(formId) {
        this.formRegistry.delete(formId);
    }
    /**
     * @description Resolves the parent group and control name from a path.
     * @summary Traverses the form group structure to find the parent group and control name for a given path.
     * @param {FormGroup} formGroup - The root FormGroup.
     * @param {string} path - The path to the control.
     * @return {FormParentGroup} A tuple containing the parent FormGroup and the control name.
     */
    static resolveParentGroup(formGroup, path, componentProps, parentProps) {
        const isMultiple = parentProps?.['multiple'] || parentProps?.['type'] === 'Array' || false;
        const parts = path.split('.');
        const controlName = parts.pop();
        const { childOf } = componentProps;
        let currentGroup = formGroup;
        function setArrayComponentProps(formGroupArray) {
            const props = formGroupArray[AngularEngineKeys.FORM_GROUP_COMPONENT_PROPS] || {};
            if (!props[ModelKeys.MODEL][controlName])
                props[ModelKeys.MODEL] = Object.assign({}, props[ModelKeys.MODEL], { [controlName]: { ...componentProps } });
        }
        for (const part of parts) {
            if (!currentGroup.get(part)) {
                const partFormGroup = (isMultiple && part === childOf) ? new FormArray([new FormGroup({})]) : new FormGroup({});
                partFormGroup[AngularEngineKeys.FORM_GROUP_COMPONENT_PROPS] = {
                    childOf: childOf || '',
                    isMultiple: isMultiple,
                    name: part,
                    pk: componentProps?.['pk'] || parentProps?.['pk'] || '',
                    [ModelKeys.MODEL]: {},
                };
                if (currentGroup instanceof FormArray) {
                    currentGroup.push(partFormGroup);
                }
                else {
                    for (const control of Object.values(partFormGroup.controls)) {
                        if (control instanceof FormControl)
                            this.register(control, componentProps);
                    }
                    if (partFormGroup instanceof AbstractControl)
                        this.register(partFormGroup, componentProps);
                    currentGroup.addControl(part, partFormGroup);
                }
            }
            if (childOf && currentGroup instanceof FormArray)
                setArrayComponentProps(currentGroup);
            currentGroup = currentGroup.get(part);
        }
        return [currentGroup, controlName];
    }
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
    static getComponentPropsFromGroupArray(formGroup, key, groupArrayName) {
        if (!(formGroup instanceof FormArray) && typeof groupArrayName === Primitives.STRING)
            formGroup = formGroup.root.get(groupArrayName) || {};
        const props = formGroup?.[AngularEngineKeys.FORM_GROUP_COMPONENT_PROPS] || {};
        return (!key ? props : props?.[key]) || {};
    }
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
    static addGroupToParent(formGroup, parentName, index = 1) {
        const componentProps = this.getComponentPropsFromGroupArray(formGroup, ModelKeys.MODEL, parentName);
        Object.entries(componentProps).forEach(([, value]) => {
            return this.addFormControl(formGroup, value, { multiple: true }, index);
        });
        return this.getGroupFromParent(formGroup, parentName, index);
    }
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
    static getGroupFromParent(formGroup, parentName, index = 1) {
        const childGroup = (formGroup.get(parentName) || formGroup).at(index);
        if (childGroup instanceof FormGroup)
            return childGroup;
        return this.addGroupToParent(formGroup, parentName, index);
    }
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
    static isUniqueOnGroup(formGroup, index, operation = OperationKeys.CREATE) {
        const formGroupArray = formGroup.parent;
        const pk = this.getComponentPropsFromGroupArray(formGroupArray, BaseComponentProps.PK);
        const controlName = Object.keys(formGroup.controls)[0];
        // only check for unique if is the pk control
        if (controlName !== pk)
            return true;
        const controlValue = cleanSpaces(`${formGroup.get(pk)?.value}`, true);
        if (operation === OperationKeys.CREATE)
            return !formGroupArray.controls.some((group, i) => i !== index && cleanSpaces(`${group.get(pk)?.value}`, true) === controlValue);
        return !formGroupArray.controls.some((group, i) => {
            const value = cleanSpaces(`${group.get(pk)?.value}`, true);
            return i !== index && controlValue === value;
        });
    }
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
    static enableAllGroupControls(formGroup) {
        Object.keys(formGroup.controls).forEach(key => {
            const control = formGroup.get(key);
            if (control instanceof FormArray) {
                control.controls.forEach(child => {
                    if (child instanceof FormGroup) {
                        child.enable({ emitEvent: false });
                        child.updateValueAndValidity({ emitEvent: true });
                    }
                });
            }
        });
    }
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
    static addFormControl(formGroup, componentProps, parentProps = {}, index = 0) {
        const isMultiple = parentProps?.['multiple'] || parentProps?.['type'] === 'Array' || false;
        const { name, childOf, } = componentProps;
        if (isMultiple)
            componentProps['pk'] = componentProps['pk'] || parentProps?.['pk'] || '';
        const fullPath = childOf ? isMultiple ? `${childOf}.${index}.${name}` : `${childOf}.${name}` : name;
        const [parentGroup, controlName] = this.resolveParentGroup(formGroup, fullPath, componentProps, parentProps);
        if (!parentGroup.get(controlName)) {
            const control = NgxFormService.fromProps(componentProps, componentProps.updateMode || 'change');
            NgxFormService.register(control, componentProps);
            parentGroup.addControl(controlName, control);
        }
        componentProps['formGroup'] = parentGroup;
        componentProps['formControl'] = parentGroup.get(controlName);
        componentProps['multiple'] = isMultiple;
    }
    /**
     * @description Retrieves a control from a registered form.
     * @summary Finds and returns an AbstractControl from a registered form using the form id and optional path.
     * @param {string} formId - The unique identifier of the form.
     * @param {string} [path] - The path to the control within the form.
     * @return {AbstractControl} The requested AbstractControl.
     * @throws {Error} If the form is not found in the registry or the control is not found in the form.
     */
    static getControlFromForm(formId, path) {
        const form = this.formRegistry.get(formId);
        if (!form)
            throw new Error(`Form with id '${formId}' not found in the registry.`);
        if (!path)
            return form;
        const control = form.get(path);
        if (!control)
            throw new Error(`Control with path '${path}' not found in form '${formId}'.`);
        return control;
    }
    /**
     * @description Creates a form from component configurations.
     * @summary Generates a FormGroup based on an array of component configurations and optionally registers it.
     * @param {string} id - The unique identifier for the form.
     * @param {IComponentConfig[]} components - An array of component configurations.
     * @param {boolean} [registry=false] - Whether to register the created form.
     * @return {FormGroup} The created FormGroup.
     */
    static createFormFromComponents(id, components, registry = false) {
        const form = new FormGroup({});
        components.forEach(component => {
            this.addFormControl(form, component.inputs);
        });
        if (registry)
            this.addRegistry(id, form);
        return form;
    }
    /**
     * @description Adds a control to a form based on component properties.
     * @summary Creates and adds a form control to a form (existing or new) based on the provided component properties.
     * @param {string} id - The unique identifier of the form.
     * @param {FieldProperties} componentProperties - The properties of the component to create the control from.
     * @return {AbstractControl} The form or created control.
     */
    static addControlFromProps(id, componentProperties, parentProps) {
        const form = this.formRegistry.get(id) ?? new FormGroup({});
        if (!this.formRegistry.has(id))
            this.addRegistry(id, form);
        if (componentProperties.path)
            this.addFormControl(form, componentProperties, parentProps);
        return form;
    }
    /**
     * @description Retrieves form data from a FormGroup.
     * @summary Extracts and processes the data from a FormGroup, handling different input types and nested form groups.
     * @param {FormGroup} formGroup - The FormGroup to extract data from.
     * @return {Record<string, unknown>} An object containing the form data.
     */
    static getFormData(formGroup) {
        const data = {};
        for (const key in formGroup.controls) {
            const control = formGroup.controls[key];
            const parentProps = NgxFormService.getPropsFromControl(formGroup);
            if (!(control instanceof FormControl)) {
                const value = NgxFormService.getFormData(control);
                const isValid = control.valid;
                if (parentProps.multiple) {
                    if (isValid) {
                        data[key] = value;
                    }
                    else {
                        this.reset(control);
                    }
                    continue;
                }
                data[key] = value;
                continue;
            }
            const props = NgxFormService.getPropsFromControl(control);
            let value = control.value;
            if (!HTML5CheckTypes.includes(props['type'])) {
                switch (props['type']) {
                    case HTML5InputTypes.NUMBER:
                        value = parseToNumber(value);
                        break;
                    case HTML5InputTypes.DATE:
                    case HTML5InputTypes.DATETIME_LOCAL:
                        value = new Date(value);
                        break;
                    default:
                        value = escapeHtml(value);
                }
            }
            data[key] = value;
        }
        NgxFormService.enableAllGroupControls(formGroup);
        return data;
    }
    /**
     * @description Validates fields in a form control or form group.
     * @summary Recursively validates all fields in a form control or form group, marking them as touched and dirty.
     * @param {AbstractControl} control - The control or form group to validate.
     * @param {string} [path] - The path to the control within the form.
     * @return {boolean} True if all fields are valid, false otherwise.
     * @throws {Error} If no control is found at the specified path or if the control type is unknown.
     */
    static validateFields(control, pk, path) {
        control = path ? control.get(path) : control;
        if (!control)
            throw new Error(`No control found at path: ${path || 'root'}.`);
        const isAllowed = [FormArray, FormGroup, FormControl].some(type => control instanceof type);
        if (!isAllowed)
            throw new Error(`Unknown control type at: ${path || 'root'}`);
        control.markAsTouched();
        control.markAsDirty();
        control.updateValueAndValidity({ emitEvent: true });
        if (control instanceof FormGroup) {
            Object.values(control.controls).forEach(childControl => {
                this.validateFields(childControl);
            });
        }
        if (control instanceof FormArray) {
            const totalGroups = control.length;
            const hasValid = control.controls.some(control => control.valid);
            if (totalGroups > 1 && hasValid) {
                for (let i = control.length - 1; i >= 0; i--) {
                    const childControl = control.at(i);
                    // disable no valid groups on array
                    if (!childControl.valid) {
                        childControl.parent.setErrors(null);
                        childControl.parent.updateValueAndValidity({ emitEvent: true });
                        childControl.disable();
                    }
                    else {
                        this.validateFields(childControl);
                    }
                }
            }
            else {
                Object.values(control.controls).forEach(childControl => {
                    this.validateFields(childControl);
                });
            }
        }
        return control.valid;
    }
    /**
     * @description Generates validators from component properties.
     * @summary Creates an array of ValidatorFn based on the supported validation keys in the component properties.
     * @param {FieldProperties} props - The component properties.
     * @return {ValidatorFn[]} An array of validator functions.
     */
    static validatorsFromProps(props) {
        const supportedValidationKeys = Validation.keys();
        return Object.keys(props)
            .filter((k) => supportedValidationKeys.includes(k))
            .map((k) => {
            return ValidatorFactory.spawn(props, k);
        });
    }
    /**
     * @description Creates a FormControl from component properties.
     * @summary Generates a FormControl with validators based on the provided component properties.
     * @param {FieldProperties} props - The component properties.
     * @param {FieldUpdateMode} [updateMode='change'] - The update mode for the control.
     * @return {FormControl} The created FormControl.
     */
    static fromProps(props, updateMode = 'change') {
        const validators = this.validatorsFromProps(props);
        const composed = validators.length ? Validators.compose(validators) : null;
        return new FormControl({
            value: props.value && props.type !== HTML5InputTypes.CHECKBOX
                ? props.type === HTML5InputTypes.DATE
                    ? !isValidDate(parseDate(props.format, props.value))
                        ? undefined : props.value :
                    props.value : undefined,
            disabled: props.disabled,
        }, {
            validators: composed,
            updateOn: updateMode,
        });
    }
    /**
     * @description Retrieves properties from a FormControl.
     * @summary Gets the FieldProperties associated with a FormControl from the internal WeakMap.
     * @param {FormControl} control - The FormControl to get properties for.
     * @return {FieldProperties} The properties associated with the control.
     */
    static getPropsFromControl(control) {
        return this.controls.get(control) || {};
    }
    /**
     * @description Finds a parent element with a specific tag.
     * @summary Traverses up the DOM tree to find the nearest parent element with the specified tag.
     * @param {HTMLElement} el - The starting element.
     * @param {string} tag - The tag name to search for.
     * @return {HTMLElement} The found parent element.
     * @throws {Error} If no parent with the specified tag is found.
     */
    static getParentEl(el, tag) {
        let parent;
        while ((parent = el.parentElement) !== null) {
            if (parent.tagName.toLowerCase() === tag.toLowerCase()) {
                return parent;
            }
            el = parent;
        }
        throw new Error(`No parent with the tag ${tag} was found for provided element`);
    }
    /**
     * @description Registers a control with its properties.
     * @summary Associates a control with its properties in the internal WeakMap.
     * @param {AbstractControl} control - The control to register.
     * @param {FieldProperties} props - The properties to associate with the control.
     */
    static register(control, props) {
        this.controls.set(control, props);
    }
    /**
     * @description Unregisters a control.
     * @summary Removes a control and its associated properties from the internal WeakMap.
     * @param {AbstractControl} control - The control to unregister.
     * @return {boolean} True if the control was successfully unregistered, false otherwise.
     */
    static unregister(control) {
        return this.controls.delete(control);
    }
    /**
     * @description Resets a form group.
     * @summary Recursively resets all controls in a form group, clearing values, errors, and marking them as pristine and untouched.
     * @param {FormGroup} formGroup - The form group to reset.
     */
    static reset(formGroup) {
        if (formGroup instanceof FormControl) {
            const control = formGroup;
            const { type } = NgxFormService.getPropsFromControl(control);
            if (!HTML5CheckTypes.includes(type))
                control.setValue("");
            control.markAsPristine();
            control.markAsUntouched();
            control.setErrors(null);
            control.updateValueAndValidity();
        }
        else {
            for (const key in formGroup.controls) {
                const control = formGroup.controls[key];
                NgxFormService.reset(control);
                continue;
            }
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmd4Rm9ybVNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2VuZ2luZS9OZ3hGb3JtU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFtQixlQUFlLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBR3ZILE9BQU8sRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQWUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0csT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUc1RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFDRztBQUNILE1BQU0sT0FBTyxjQUFjO0lBQ3pCOzs7Ozs7Ozs7T0FTRzthQUNZLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBb0MsQ0FBQztJQUUxRTs7Ozs7Ozs7O09BU0c7YUFDWSxpQkFBWSxHQUFHLElBQUksR0FBRyxFQUFxQixDQUFDO0lBQzNEOzs7Ozs7T0FNRztJQUNILE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBYyxFQUFFLFNBQW9CO1FBQ3JELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQy9CLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLE1BQU0sMEJBQTBCLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQWM7UUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxTQUFvQixFQUFFLElBQVksRUFBRSxjQUErQixFQUFFLFdBQXFCO1FBQzFILE1BQU0sVUFBVSxHQUFHLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLE9BQU8sSUFBSSxLQUFLLENBQUM7UUFDM0YsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFZLENBQUM7UUFDMUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxHQUFHLGNBQWMsQ0FBQTtRQUNoQyxJQUFJLFlBQVksR0FBRyxTQUFTLENBQUM7UUFFN0IsU0FBUyxzQkFBc0IsQ0FBQyxjQUF5QjtZQUN2RCxNQUFNLEtBQUssR0FBSSxjQUEyQixDQUFDLGlCQUFpQixDQUFDLDBCQUEwQixDQUFDLElBQUksRUFBRSxDQUFDO1lBQzdGLElBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQztnQkFDckMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFDLEdBQUcsY0FBYyxFQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQy9HLENBQUM7UUFFRCxLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQzVCLE1BQU0sYUFBYSxHQUFHLENBQUMsVUFBVSxJQUFJLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMvRyxhQUEwQixDQUFDLGlCQUFpQixDQUFDLDBCQUEwQixDQUFDLEdBQUc7b0JBQzFFLE9BQU8sRUFBRSxPQUFPLElBQUksRUFBRTtvQkFDdEIsVUFBVSxFQUFFLFVBQVU7b0JBQ3RCLElBQUksRUFBRSxJQUFJO29CQUNWLEVBQUUsRUFBRSxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUN2RCxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFO2lCQUMwQixDQUFDO2dCQUVsRCxJQUFHLFlBQVksWUFBWSxTQUFTLEVBQUUsQ0FBQztvQkFDcEMsWUFBMEIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ2xELENBQUM7cUJBQU0sQ0FBQztvQkFFTixLQUFJLE1BQU0sT0FBTyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7d0JBQzNELElBQUcsT0FBTyxZQUFZLFdBQVc7NEJBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBMEIsRUFBRSxjQUFjLENBQUMsQ0FBQztvQkFDOUQsQ0FBQztvQkFFRCxJQUFHLGFBQWEsWUFBWSxlQUFlO3dCQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWdDLEVBQUUsY0FBYyxDQUFDLENBQUM7b0JBRWxFLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDO1lBQ0gsQ0FBQztZQUNELElBQUcsT0FBTyxJQUFJLFlBQVksWUFBWSxTQUFTO2dCQUM3QyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUV2QyxZQUFZLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQWMsQ0FBQztRQUNyRCxDQUFDO1FBQ0QsT0FBTyxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7OztPQVlHO0lBQ0gsTUFBTSxDQUFDLCtCQUErQixDQUFDLFNBQWdDLEVBQUUsR0FBWSxFQUFFLGNBQW1DO1FBQ3hILElBQUcsQ0FBQyxDQUFDLFNBQVMsWUFBWSxTQUFTLENBQUMsSUFBSSxPQUFPLGNBQWMsS0FBSyxVQUFVLENBQUMsTUFBTTtZQUNqRixTQUFTLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBd0IsQ0FBYyxJQUFJLEVBQUUsQ0FBQztRQUM5RSxNQUFNLEtBQUssR0FBSSxTQUFzQixFQUFFLENBQUMsaUJBQWlCLENBQUMsMEJBQTBCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUYsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7OztPQWFHO0lBQ0gsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQW9CLEVBQUUsVUFBa0IsRUFBRSxRQUFnQixDQUFDO1FBQ2pGLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNwRyxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQTBCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRTtZQUMvRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7T0FZRztJQUNILE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxTQUFvQixFQUFFLFVBQWtCLEVBQUUsUUFBZ0IsQ0FBQztRQUNuRixNQUFNLFVBQVUsR0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksU0FBUyxDQUFlLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JGLElBQUcsVUFBVSxZQUFZLFNBQVM7WUFDaEMsT0FBTyxVQUFVLENBQUM7UUFDcEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7OztPQVlHO0lBQ0gsTUFBTSxDQUFDLGVBQWUsQ0FBQyxTQUFvQixFQUFFLEtBQWEsRUFBRSxZQUEyQixhQUFhLENBQUMsTUFBTTtRQUN6RyxNQUFNLGNBQWMsR0FBRyxTQUFTLENBQUMsTUFBbUIsQ0FBQztRQUNyRCxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsK0JBQStCLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLEVBQVksQ0FBVyxDQUFDO1FBQzNHLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXZELDZDQUE2QztRQUM3QyxJQUFHLFdBQVcsS0FBSyxFQUFFO1lBQ25CLE9BQU8sSUFBSSxDQUFDO1FBQ2QsTUFBTSxZQUFZLEdBQUcsV0FBVyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RSxJQUFHLFNBQVMsS0FBSyxhQUFhLENBQUMsTUFBTTtZQUNuQyxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLFdBQVcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssWUFBWSxDQUFDLENBQUM7UUFFbkksT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hELE1BQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDM0QsT0FBTyxDQUFDLEtBQUssS0FBSyxJQUFJLFlBQVksS0FBSyxLQUFLLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7T0FVRztJQUNILE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxTQUFnQztRQUM1RCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDNUMsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQyxJQUFJLE9BQU8sWUFBWSxTQUFTLEVBQUUsQ0FBQztnQkFDakMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQy9CLElBQUksS0FBSyxZQUFZLFNBQVMsRUFBRSxDQUFDO3dCQUMvQixLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7d0JBQ25DLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO29CQUNwRCxDQUFDO2dCQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7T0FlRztJQUNLLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBb0IsRUFBRSxjQUErQixFQUFFLGNBQXdCLEVBQUUsRUFBRSxRQUFnQixDQUFDO1FBRWhJLE1BQU0sVUFBVSxHQUFHLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLE9BQU8sSUFBSSxLQUFLLENBQUM7UUFDM0YsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEdBQUcsR0FBRyxjQUFjLENBQUM7UUFDMUMsSUFBRyxVQUFVO1lBQ1gsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0UsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNwRyxNQUFNLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUU3RyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO1lBQ2xDLE1BQU0sT0FBTyxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQ3RDLGNBQWMsRUFDZCxjQUFjLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FDdEMsQ0FBQztZQUNGLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQ2pELFdBQVcsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUFFRCxjQUFjLENBQUMsV0FBVyxDQUFDLEdBQUcsV0FBVyxDQUFDO1FBQzFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBZ0IsQ0FBQztRQUM1RSxjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsVUFBVSxDQUFBO0lBRXpDLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsTUFBTSxDQUFDLGtCQUFrQixDQUFDLE1BQWMsRUFBRSxJQUFhO1FBQ3JELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJO1lBQ1AsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsTUFBTSw4QkFBOEIsQ0FBQyxDQUFDO1FBRXpFLElBQUksQ0FBQyxJQUFJO1lBQ1AsT0FBTyxJQUFJLENBQUM7UUFFZCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPO1lBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsSUFBSSx3QkFBd0IsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUNoRixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxFQUFVLEVBQUUsVUFBOEIsRUFBRSxXQUFvQixLQUFLO1FBQ25HLE1BQU0sSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxRQUFRO1lBQ1YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFN0IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEVBQVUsRUFBRSxtQkFBb0MsRUFBRSxXQUE2QjtRQUN4RyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTdCLElBQUksbUJBQW1CLENBQUMsSUFBSTtZQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUU5RCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBb0I7UUFDckMsTUFBTSxJQUFJLEdBQTRCLEVBQUUsQ0FBQztRQUN6QyxLQUFLLE1BQU0sR0FBRyxJQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyQyxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFrQyxDQUFDLENBQUM7WUFDM0YsSUFBSSxDQUFDLENBQUMsT0FBTyxZQUFZLFdBQVcsQ0FBQyxFQUFFLENBQUM7Z0JBQ3RDLE1BQU0sS0FBSyxHQUFHLGNBQWMsQ0FBQyxXQUFXLENBQUMsT0FBb0IsQ0FBQyxDQUFDO2dCQUMvRCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUM5QixJQUFHLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDdEIsSUFBRyxPQUFPLEVBQUUsQ0FBQzt3QkFDVixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO29CQUNyQixDQUFDO3lCQUFNLENBQUM7d0JBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFzQixDQUFDLENBQUM7b0JBQ3JDLENBQUM7b0JBRUQsU0FBUztnQkFDYixDQUFDO2dCQUNELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQ2xCLFNBQVM7WUFDWCxDQUFDO1lBRUQsTUFBTSxLQUFLLEdBQUcsY0FBYyxDQUFDLG1CQUFtQixDQUFDLE9BQWtDLENBQUMsQ0FBQztZQUNyRixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQzdDLFFBQVEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7b0JBQ3RCLEtBQUssZUFBZSxDQUFDLE1BQU07d0JBQ3pCLEtBQUssR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzdCLE1BQU07b0JBQ1IsS0FBSyxlQUFlLENBQUMsSUFBSSxDQUFDO29CQUMxQixLQUFLLGVBQWUsQ0FBQyxjQUFjO3dCQUNqQyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3hCLE1BQU07b0JBQ1I7d0JBQ0UsS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztZQUNILENBQUM7WUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLENBQUM7UUFDRCxjQUFjLENBQUMsc0JBQXNCLENBQUMsU0FBc0IsQ0FBQyxDQUFDO1FBQzlELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQXdCLEVBQUUsRUFBVyxFQUFHLElBQWE7UUFDekUsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQW9CLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUNoRSxJQUFJLENBQUMsT0FBTztZQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLElBQUksSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRWxFLE1BQU0sU0FBUyxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLFlBQVksSUFBSSxDQUFDLENBQUM7UUFDNUYsSUFBSSxDQUFDLFNBQVM7WUFDWixNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixJQUFJLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQztRQUVoRSxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEIsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRXBELElBQUksT0FBTyxZQUFZLFNBQVMsRUFBRSxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDckQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCxJQUFJLE9BQU8sWUFBWSxTQUFTLEVBQUUsQ0FBQztZQUNqQyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ25DLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pFLElBQUcsV0FBVyxHQUFHLENBQUMsSUFBSSxRQUFRLEVBQUUsQ0FBQztnQkFDOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQzlDLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25DLG1DQUFtQztvQkFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDdkIsWUFBWSxDQUFDLE1BQW9CLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNqRCxZQUFZLENBQUMsTUFBb0IsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO3dCQUNoRixZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ3pCLENBQUM7eUJBQU0sQ0FBQzt3QkFDTixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUNwQyxDQUFDO2dCQUNILENBQUM7WUFDSCxDQUFDO2lCQUFNLENBQUM7Z0JBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFO29CQUNyRCxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNwQyxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7UUFDSCxDQUFDO1FBRUQsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxLQUFzQjtRQUN2RCxNQUFNLHVCQUF1QixHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ3RCLE1BQU0sQ0FBQyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFELEdBQUcsQ0FBQyxDQUFDLENBQVMsRUFBRSxFQUFFO1lBQ2pCLE9BQU8sZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQXNCLEVBQUUsYUFBOEIsUUFBUTtRQUM3RSxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkQsTUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzNFLE9BQU8sSUFBSSxXQUFXLENBQ3BCO1lBQ0UsS0FBSyxFQUNILEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxlQUFlLENBQUMsUUFBUTtnQkFDcEQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLElBQUk7b0JBQ25DLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQWdCLEVBQUUsS0FBSyxDQUFDLEtBQWUsQ0FBQyxDQUFDO3dCQUN0RSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzVCLEtBQUssQ0FBQyxLQUFpQixDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQzFDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtTQUN6QixFQUNEO1lBQ0UsVUFBVSxFQUFFLFFBQVE7WUFDcEIsUUFBUSxFQUFFLFVBQVU7U0FDckIsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE9BQTRDO1FBQ3JFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBcUIsQ0FBQztJQUM3RCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBZSxFQUFFLEdBQVc7UUFDN0MsSUFBSSxNQUEwQixDQUFDO1FBQy9CLE9BQU8sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQzVDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztnQkFDdkQsT0FBTyxNQUFNLENBQUM7WUFDaEIsQ0FBQztZQUNELEVBQUUsR0FBRyxNQUFNLENBQUM7UUFDZCxDQUFDO1FBQ0QsTUFBTSxJQUFJLEtBQUssQ0FDYiwwQkFBMEIsR0FBRyxpQ0FBaUMsQ0FDL0QsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBd0IsRUFBRSxLQUFzQjtRQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUF3QjtRQUN4QyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFrQztRQUM3QyxJQUFHLFNBQVMsWUFBWSxXQUFXLEVBQUUsQ0FBQztZQUNwQyxNQUFNLE9BQU8sR0FBRyxTQUF3QixDQUFDO1lBQ3pDLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxjQUFjLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUNqQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN6QixPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDMUIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUNuQyxDQUFDO2FBQU0sQ0FBQztZQUNOLEtBQUssTUFBTSxHQUFHLElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNyQyxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QyxjQUFjLENBQUMsS0FBSyxDQUFDLE9BQXNCLENBQUMsQ0FBQztnQkFDN0MsU0FBUztZQUNYLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVzY2FwZUh0bWwsIEZpZWxkUHJvcGVydGllcywgSFRNTDVDaGVja1R5cGVzLCBIVE1MNUlucHV0VHlwZXMsIHBhcnNlVG9OdW1iZXIgfSBmcm9tICdAZGVjYWYtdHMvdWktZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBGaWVsZFVwZGF0ZU1vZGUsIEZvcm1QYXJlbnRHcm91cCwgS2V5VmFsdWUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IElDb21wb25lbnRDb25maWcsIElDb21wb25lbnRJbnB1dCB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1BcnJheSwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9yRm4sIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBpc1ZhbGlkRGF0ZSwgTW9kZWxLZXlzLCBwYXJzZURhdGUsIFByaW1pdGl2ZXMsIFZhbGlkYXRpb24gfSBmcm9tICdAZGVjYWYtdHMvZGVjb3JhdG9yLXZhbGlkYXRpb24nO1xuaW1wb3J0IHsgVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4vVmFsaWRhdG9yRmFjdG9yeSc7XG5pbXBvcnQgeyBjbGVhblNwYWNlcyB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgT3BlcmF0aW9uS2V5cyB9IGZyb20gJ0BkZWNhZi10cy9kYi1kZWNvcmF0b3JzJztcbmltcG9ydCB7IEFuZ3VsYXJFbmdpbmVLZXlzLCBCYXNlQ29tcG9uZW50UHJvcHMgfSBmcm9tICcuLi9lbmdpbmUvY29uc3RhbnRzJztcblxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBTZXJ2aWNlIGZvciBtYW5hZ2luZyBBbmd1bGFyIGZvcm1zIGFuZCBmb3JtIGNvbnRyb2xzLlxuICogQHN1bW1hcnkgVGhlIE5neEZvcm1TZXJ2aWNlIHByb3ZpZGVzIHV0aWxpdHkgbWV0aG9kcyBmb3IgY3JlYXRpbmcsIG1hbmFnaW5nLCBhbmQgdmFsaWRhdGluZyBBbmd1bGFyIGZvcm1zIGFuZCBmb3JtIGNvbnRyb2xzLiBJdCBpbmNsdWRlcyBmdW5jdGlvbmFsaXR5IGZvciByZWdpc3RlcmluZyBmb3JtcywgYWRkaW5nIGNvbnRyb2xzLCB2YWxpZGF0aW5nIGZpZWxkcywgYW5kIGhhbmRsaW5nIGZvcm0gZGF0YS5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7V2Vha01hcDxBYnN0cmFjdENvbnRyb2wsIEZpZWxkUHJvcGVydGllcz59IGNvbnRyb2xzIC0gQSBXZWFrTWFwIHRvIHN0b3JlIGNvbnRyb2wgcHJvcGVydGllcy5cbiAqIEBwYXJhbSB7TWFwPHN0cmluZywgRm9ybUdyb3VwPn0gZm9ybVJlZ2lzdHJ5IC0gQSBNYXAgdG8gc3RvcmUgcmVnaXN0ZXJlZCBmb3Jtcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ3JlYXRpbmcgYSBmb3JtIGZyb20gY29tcG9uZW50c1xuICogY29uc3QgY29tcG9uZW50cyA9IFtcbiAqICAgeyBpbnB1dHM6IHsgbmFtZTogJ3VzZXJuYW1lJywgdHlwZTogJ3RleHQnLCByZXF1aXJlZDogdHJ1ZSB9IH0sXG4gKiAgIHsgaW5wdXRzOiB7IG5hbWU6ICdwYXNzd29yZCcsIHR5cGU6ICdwYXNzd29yZCcsIG1pbkxlbmd0aDogOCB9IH1cbiAqIF07XG4gKiBjb25zdCBmb3JtID0gTmd4Rm9ybVNlcnZpY2UuY3JlYXRlRm9ybUZyb21Db21wb25lbnRzKCdsb2dpbkZvcm0nLCBjb21wb25lbnRzLCB0cnVlKTtcbiAqXG4gKiAvLyBWYWxpZGF0aW5nIGZpZWxkc1xuICogTmd4Rm9ybVNlcnZpY2UudmFsaWRhdGVGaWVsZHMoZm9ybSk7XG4gKlxuICogLy8gR2V0dGluZyBmb3JtIGRhdGFcbiAqIGNvbnN0IGZvcm1EYXRhID0gTmd4Rm9ybVNlcnZpY2UuZ2V0Rm9ybURhdGEoZm9ybSk7XG4gKlxuICogQG1lcm1haWRcbiAqIHNlcXVlbmNlRGlhZ3JhbVxuICogICBwYXJ0aWNpcGFudCBDIGFzIENvbXBvbmVudFxuICogICBwYXJ0aWNpcGFudCBORlMgYXMgTmd4Rm9ybVNlcnZpY2VcbiAqICAgcGFydGljaXBhbnQgQUYgYXMgQW5ndWxhciBGb3Jtc1xuICogICBDLT4+TkZTOiBjcmVhdGVGb3JtRnJvbUNvbXBvbmVudHMoKVxuICogICBORlMtPj5BRjogbmV3IEZvcm1Hcm91cCgpXG4gKiAgIE5GUy0+Pk5GUzogYWRkRm9ybUNvbnRyb2woKVxuICogICBORlMtPj5BRjogYWRkQ29udHJvbCgpXG4gKiAgIE5GUy0tPj5DOiBSZXR1cm4gRm9ybUdyb3VwXG4gKiAgIEMtPj5ORlM6IHZhbGlkYXRlRmllbGRzKClcbiAqICAgTkZTLT4+QUY6IG1hcmtBc1RvdWNoZWQoKSwgbWFya0FzRGlydHkoKSwgdXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpXG4gKiAgIEMtPj5ORlM6IGdldEZvcm1EYXRhKClcbiAqICAgTkZTLT4+QUY6IEdldCBjb250cm9sIHZhbHVlc1xuICogICBORlMtLT4+QzogUmV0dXJuIGZvcm0gZGF0YVxuICovXG5leHBvcnQgY2xhc3MgTmd4Rm9ybVNlcnZpY2Uge1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFdlYWtNYXAgdGhhdCBzdG9yZXMgY29udHJvbCBwcm9wZXJ0aWVzIGZvciBmb3JtIGNvbnRyb2xzLlxuICAgKiBAc3VtbWFyeSBBIFdlYWtNYXAgdGhhdCBhc3NvY2lhdGVzIEFic3RyYWN0Q29udHJvbCBpbnN0YW5jZXMgd2l0aCB0aGVpciBjb3JyZXNwb25kaW5nIEZpZWxkUHJvcGVydGllcy5cbiAgICogVGhpcyBhbGxvd3MgdGhlIHNlcnZpY2UgdG8gdHJhY2sgbWV0YWRhdGEgZm9yIGZvcm0gY29udHJvbHMgd2l0aG91dCBjcmVhdGluZyBtZW1vcnkgbGVha3MuXG4gICAqXG4gICAqIEB0eXBlIHtXZWFrTWFwPEFic3RyYWN0Q29udHJvbCwgRmllbGRQcm9wZXJ0aWVzPn1cbiAgICogQHByaXZhdGVcbiAgICogQHN0YXRpY1xuICAgKiBAbWVtYmVyT2YgTmd4Rm9ybVNlcnZpY2VcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIGNvbnRyb2xzID0gbmV3IFdlYWtNYXA8QWJzdHJhY3RDb250cm9sLCBGaWVsZFByb3BlcnRpZXM+KCk7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBSZWdpc3RyeSBvZiBmb3JtIGdyb3VwcyBpbmRleGVkIGJ5IHRoZWlyIHVuaXF1ZSBpZGVudGlmaWVycy5cbiAgICogQHN1bW1hcnkgQSBNYXAgdGhhdCBzdG9yZXMgRm9ybUdyb3VwIGluc3RhbmNlcyB3aXRoIHRoZWlyIHVuaXF1ZSBzdHJpbmcgaWRlbnRpZmllcnMuXG4gICAqIFRoaXMgYWxsb3dzIGdsb2JhbCBhY2Nlc3MgdG8gcmVnaXN0ZXJlZCBmb3JtcyB0aHJvdWdob3V0IHRoZSBhcHBsaWNhdGlvbi5cbiAgICpcbiAgICogQHR5cGUge01hcDxzdHJpbmcsIEZvcm1Hcm91cD59XG4gICAqIEBwcml2YXRlXG4gICAqIEBzdGF0aWNcbiAgICogQG1lbWJlck9mIE5neEZvcm1TZXJ2aWNlXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBmb3JtUmVnaXN0cnkgPSBuZXcgTWFwPHN0cmluZywgRm9ybUdyb3VwPigpO1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEFkZHMgYSBmb3JtIHRvIHRoZSByZWdpc3RyeS5cbiAgICogQHN1bW1hcnkgUmVnaXN0ZXJzIGEgRm9ybUdyb3VwIHdpdGggYSB1bmlxdWUgaWRlbnRpZmllci4gVGhyb3dzIGFuIGVycm9yIGlmIHRoZSBpZGVudGlmaWVyIGlzIGFscmVhZHkgaW4gdXNlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybUlkIC0gVGhlIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgZm9ybS5cbiAgICogQHBhcmFtIHtGb3JtR3JvdXB9IGZvcm1Hcm91cCAtIFRoZSBGb3JtR3JvdXAgdG8gYmUgcmVnaXN0ZXJlZC5cbiAgICogQHRocm93cyB7RXJyb3J9IElmIGEgRm9ybUdyb3VwIHdpdGggdGhlIGdpdmVuIGlkIGlzIGFscmVhZHkgcmVnaXN0ZXJlZC5cbiAgICovXG4gIHN0YXRpYyBhZGRSZWdpc3RyeShmb3JtSWQ6IHN0cmluZywgZm9ybUdyb3VwOiBGb3JtR3JvdXApOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mb3JtUmVnaXN0cnkuaGFzKGZvcm1JZCkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEEgRm9ybUdyb3VwIHdpdGggaWQgJyR7Zm9ybUlkfScgaXMgYWxyZWFkeSByZWdpc3RlcmVkLmApO1xuICAgIHRoaXMuZm9ybVJlZ2lzdHJ5LnNldChmb3JtSWQsIGZvcm1Hcm91cCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFJlbW92ZXMgYSBmb3JtIGZyb20gdGhlIHJlZ2lzdHJ5LlxuICAgKiBAc3VtbWFyeSBEZWxldGVzIGEgRm9ybUdyb3VwIGZyb20gdGhlIHJlZ2lzdHJ5IHVzaW5nIGl0cyB1bmlxdWUgaWRlbnRpZmllci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGZvcm1JZCAtIFRoZSB1bmlxdWUgaWRlbnRpZmllciBvZiB0aGUgZm9ybSB0byBiZSByZW1vdmVkLlxuICAgKi9cbiAgc3RhdGljIHJlbW92ZVJlZ2lzdHJ5KGZvcm1JZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtUmVnaXN0cnkuZGVsZXRlKGZvcm1JZCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFJlc29sdmVzIHRoZSBwYXJlbnQgZ3JvdXAgYW5kIGNvbnRyb2wgbmFtZSBmcm9tIGEgcGF0aC5cbiAgICogQHN1bW1hcnkgVHJhdmVyc2VzIHRoZSBmb3JtIGdyb3VwIHN0cnVjdHVyZSB0byBmaW5kIHRoZSBwYXJlbnQgZ3JvdXAgYW5kIGNvbnRyb2wgbmFtZSBmb3IgYSBnaXZlbiBwYXRoLlxuICAgKiBAcGFyYW0ge0Zvcm1Hcm91cH0gZm9ybUdyb3VwIC0gVGhlIHJvb3QgRm9ybUdyb3VwLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIFRoZSBwYXRoIHRvIHRoZSBjb250cm9sLlxuICAgKiBAcmV0dXJuIHtGb3JtUGFyZW50R3JvdXB9IEEgdHVwbGUgY29udGFpbmluZyB0aGUgcGFyZW50IEZvcm1Hcm91cCBhbmQgdGhlIGNvbnRyb2wgbmFtZS5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIHJlc29sdmVQYXJlbnRHcm91cChmb3JtR3JvdXA6IEZvcm1Hcm91cCwgcGF0aDogc3RyaW5nLCBjb21wb25lbnRQcm9wczogSUNvbXBvbmVudElucHV0LCBwYXJlbnRQcm9wczogS2V5VmFsdWUpOiBGb3JtUGFyZW50R3JvdXAge1xuICAgIGNvbnN0IGlzTXVsdGlwbGUgPSBwYXJlbnRQcm9wcz8uWydtdWx0aXBsZSddIHx8IHBhcmVudFByb3BzPy5bJ3R5cGUnXSA9PT0gJ0FycmF5JyB8fCBmYWxzZTtcbiAgICBjb25zdCBwYXJ0cyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgICBjb25zdCBjb250cm9sTmFtZSA9IHBhcnRzLnBvcCgpIGFzIHN0cmluZztcbiAgICBjb25zdCB7Y2hpbGRPZn0gPSBjb21wb25lbnRQcm9wc1xuICAgIGxldCBjdXJyZW50R3JvdXAgPSBmb3JtR3JvdXA7XG5cbiAgICBmdW5jdGlvbiBzZXRBcnJheUNvbXBvbmVudFByb3BzKGZvcm1Hcm91cEFycmF5OiBGb3JtQXJyYXkpIHtcbiAgICAgIGNvbnN0IHByb3BzID0gKGZvcm1Hcm91cEFycmF5IGFzIEtleVZhbHVlKVtBbmd1bGFyRW5naW5lS2V5cy5GT1JNX0dST1VQX0NPTVBPTkVOVF9QUk9QU10gfHwge307XG4gICAgICAgIGlmKCFwcm9wc1tNb2RlbEtleXMuTU9ERUxdW2NvbnRyb2xOYW1lXSlcbiAgICAgICAgICBwcm9wc1tNb2RlbEtleXMuTU9ERUxdID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHNbTW9kZWxLZXlzLk1PREVMXSwge1tjb250cm9sTmFtZV06IHsuLi5jb21wb25lbnRQcm9wc319KTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHBhcnQgb2YgcGFydHMpIHtcbiAgICAgIGlmICghY3VycmVudEdyb3VwLmdldChwYXJ0KSkge1xuICAgICAgICBjb25zdCBwYXJ0Rm9ybUdyb3VwID0gKGlzTXVsdGlwbGUgJiYgcGFydCA9PT0gY2hpbGRPZikgPyBuZXcgRm9ybUFycmF5KFtuZXcgRm9ybUdyb3VwKHt9KV0pIDogbmV3IEZvcm1Hcm91cCh7fSk7XG4gICAgICAgIChwYXJ0Rm9ybUdyb3VwIGFzIEtleVZhbHVlKVtBbmd1bGFyRW5naW5lS2V5cy5GT1JNX0dST1VQX0NPTVBPTkVOVF9QUk9QU10gPSB7XG4gICAgICAgICAgY2hpbGRPZjogY2hpbGRPZiB8fCAnJyxcbiAgICAgICAgICBpc011bHRpcGxlOiBpc011bHRpcGxlLFxuICAgICAgICAgIG5hbWU6IHBhcnQsXG4gICAgICAgICAgcGs6IGNvbXBvbmVudFByb3BzPy5bJ3BrJ10gfHwgcGFyZW50UHJvcHM/LlsncGsnXSB8fCAnJyxcbiAgICAgICAgICBbTW9kZWxLZXlzLk1PREVMXToge30sXG4gICAgICAgIH0gYXMgUGFydGlhbDxGaWVsZFByb3BlcnRpZXM+ICYge21vZGVsOiBLZXlWYWx1ZX07XG5cbiAgICAgICAgaWYoY3VycmVudEdyb3VwIGluc3RhbmNlb2YgRm9ybUFycmF5KSB7XG4gICAgICAgICAgKGN1cnJlbnRHcm91cCBhcyBGb3JtQXJyYXkpLnB1c2gocGFydEZvcm1Hcm91cCk7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICBmb3IoY29uc3QgY29udHJvbCBvZiBPYmplY3QudmFsdWVzKHBhcnRGb3JtR3JvdXAuY29udHJvbHMpKSB7XG4gICAgICAgICAgICBpZihjb250cm9sIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wpXG4gICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoY29udHJvbCBhcyBBYnN0cmFjdENvbnRyb2wsIGNvbXBvbmVudFByb3BzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZihwYXJ0Rm9ybUdyb3VwIGluc3RhbmNlb2YgQWJzdHJhY3RDb250cm9sKVxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcihwYXJ0Rm9ybUdyb3VwIGFzIEFic3RyYWN0Q29udHJvbCwgY29tcG9uZW50UHJvcHMpO1xuXG4gICAgICAgICAgY3VycmVudEdyb3VwLmFkZENvbnRyb2wocGFydCwgcGFydEZvcm1Hcm91cCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKGNoaWxkT2YgJiYgY3VycmVudEdyb3VwIGluc3RhbmNlb2YgRm9ybUFycmF5KVxuICAgICAgICBzZXRBcnJheUNvbXBvbmVudFByb3BzKGN1cnJlbnRHcm91cCk7XG5cbiAgICAgIGN1cnJlbnRHcm91cCA9IGN1cnJlbnRHcm91cC5nZXQocGFydCkgYXMgRm9ybUdyb3VwO1xuICAgIH1cbiAgICByZXR1cm4gW2N1cnJlbnRHcm91cCwgY29udHJvbE5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBSZXRyaWV2ZXMgY29tcG9uZW50IHByb3BlcnRpZXMgZnJvbSBhIEZvcm1Hcm91cCBvciBGb3JtQXJyYXkuXG4gICAqIEBzdW1tYXJ5IEV4dHJhY3RzIGNvbXBvbmVudCBwcm9wZXJ0aWVzIHN0b3JlZCBpbiB0aGUgZm9ybSBncm91cCBtZXRhZGF0YS4gSWYgYSBGb3JtR3JvdXAgaXMgcHJvdmlkZWRcbiAgICogYW5kIGdyb3VwQXJyYXlOYW1lIGlzIHNwZWNpZmllZCwgaXQgd2lsbCBsb29rIGZvciB0aGUgRm9ybUFycmF5IHdpdGhpbiB0aGUgZm9ybSBzdHJ1Y3R1cmUuXG4gICAqXG4gICAqIEBwYXJhbSB7Rm9ybUdyb3VwIHwgRm9ybUFycmF5fSBmb3JtR3JvdXAgLSBUaGUgZm9ybSBncm91cCBvciBmb3JtIGFycmF5IHRvIGV4dHJhY3QgcHJvcGVydGllcyBmcm9tXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBba2V5XSAtIE9wdGlvbmFsIGtleSB0byByZXRyaWV2ZSBhIHNwZWNpZmljIHByb3BlcnR5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZ3JvdXBBcnJheU5hbWVdIC0gT3B0aW9uYWwgbmFtZSBvZiB0aGUgZ3JvdXAgYXJyYXkgaWYgZm9ybUdyb3VwIGlzIG5vdCBhIEZvcm1BcnJheVxuICAgKiBAcmV0dXJuIHtQYXJ0aWFsPEZpZWxkUHJvcGVydGllcz59IFRoZSBjb21wb25lbnQgcHJvcGVydGllcyBvciBhIHNwZWNpZmljIHByb3BlcnR5IGlmIGtleSBpcyBwcm92aWRlZFxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJPZiBOZ3hGb3JtU2VydmljZVxuICAgKi9cbiAgc3RhdGljIGdldENvbXBvbmVudFByb3BzRnJvbUdyb3VwQXJyYXkoZm9ybUdyb3VwOiBGb3JtR3JvdXAgfCBGb3JtQXJyYXksIGtleT86IHN0cmluZywgZ3JvdXBBcnJheU5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQpOiBQYXJ0aWFsPEZpZWxkUHJvcGVydGllcz4ge1xuICAgIGlmKCEoZm9ybUdyb3VwIGluc3RhbmNlb2YgRm9ybUFycmF5KSAmJiB0eXBlb2YgZ3JvdXBBcnJheU5hbWUgPT09IFByaW1pdGl2ZXMuU1RSSU5HKVxuICAgICAgZm9ybUdyb3VwID0gZm9ybUdyb3VwLnJvb3QuZ2V0KGdyb3VwQXJyYXlOYW1lIGFzIHN0cmluZykgYXMgRm9ybUFycmF5IHx8IHt9O1xuICAgIGNvbnN0IHByb3BzID0gKGZvcm1Hcm91cCBhcyBLZXlWYWx1ZSk/LltBbmd1bGFyRW5naW5lS2V5cy5GT1JNX0dST1VQX0NPTVBPTkVOVF9QUk9QU10gfHwge307XG4gICAgcmV0dXJuICgha2V5ID8gcHJvcHMgOiBwcm9wcz8uW2tleV0pIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBBZGRzIGEgbmV3IGdyb3VwIHRvIGEgcGFyZW50IEZvcm1BcnJheS5cbiAgICogQHN1bW1hcnkgQ3JlYXRlcyBhbmQgYWRkcyBhIG5ldyBGb3JtR3JvdXAgdG8gdGhlIHNwZWNpZmllZCBwYXJlbnQgRm9ybUFycmF5IGJhc2VkIG9uIHRoZVxuICAgKiBjb21wb25lbnQgcHJvcGVydGllcyBzdG9yZWQgaW4gdGhlIHBhcmVudCdzIG1ldGFkYXRhLiBUaGlzIGlzIHVzZWQgZm9yIGR5bmFtaWMgZm9ybSBhcnJheXNcbiAgICogd2hlcmUgbmV3IGdyb3VwcyBuZWVkIHRvIGJlIGFkZGVkIGF0IHJ1bnRpbWUuXG4gICAqXG4gICAqIEBwYXJhbSB7Rm9ybUdyb3VwfSBmb3JtR3JvdXAgLSBUaGUgcm9vdCBmb3JtIGdyb3VwIGNvbnRhaW5pbmcgdGhlIHBhcmVudCBGb3JtQXJyYXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmVudE5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgcGFyZW50IEZvcm1BcnJheSB0byBhZGQgdGhlIGdyb3VwIHRvXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZXg9MV0gLSBUaGUgaW5kZXggcG9zaXRpb24gd2hlcmUgdGhlIG5ldyBncm91cCBzaG91bGQgYmUgYWRkZWRcbiAgICogQHJldHVybiB7Rm9ybUdyb3VwfSBUaGUgbmV3bHkgY3JlYXRlZCBhbmQgYWRkZWQgRm9ybUdyb3VwXG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICogQG1lbWJlck9mIE5neEZvcm1TZXJ2aWNlXG4gICAqL1xuICBzdGF0aWMgYWRkR3JvdXBUb1BhcmVudChmb3JtR3JvdXA6IEZvcm1Hcm91cCwgcGFyZW50TmFtZTogc3RyaW5nLCBpbmRleDogbnVtYmVyID0gMSk6IEZvcm1Hcm91cCB7XG4gICAgY29uc3QgY29tcG9uZW50UHJvcHMgPSB0aGlzLmdldENvbXBvbmVudFByb3BzRnJvbUdyb3VwQXJyYXkoZm9ybUdyb3VwLCBNb2RlbEtleXMuTU9ERUwsIHBhcmVudE5hbWUpO1xuICAgIE9iamVjdC5lbnRyaWVzKGNvbXBvbmVudFByb3BzIGFzIEtleVZhbHVlKS5mb3JFYWNoKChbLCB2YWx1ZV0pID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEZvcm1Db250cm9sKGZvcm1Hcm91cCwgdmFsdWUsIHttdWx0aXBsZTogdHJ1ZX0sIGluZGV4KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmdldEdyb3VwRnJvbVBhcmVudChmb3JtR3JvdXAsIHBhcmVudE5hbWUsIGluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUmV0cmlldmVzIGEgRm9ybUdyb3VwIGZyb20gYSBwYXJlbnQgRm9ybUFycmF5IGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAqIEBzdW1tYXJ5IEdldHMgYSBGb3JtR3JvdXAgZnJvbSB0aGUgc3BlY2lmaWVkIHBhcmVudCBGb3JtQXJyYXkuIElmIHRoZSBncm91cCBkb2Vzbid0IGV4aXN0XG4gICAqIGF0IHRoZSBnaXZlbiBpbmRleCwgaXQgd2lsbCBjcmVhdGUgYSBuZXcgb25lIHVzaW5nIGFkZEdyb3VwVG9QYXJlbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7Rm9ybUdyb3VwfSBmb3JtR3JvdXAgLSBUaGUgcm9vdCBmb3JtIGdyb3VwIGNvbnRhaW5pbmcgdGhlIHBhcmVudCBGb3JtQXJyYXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmVudE5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgcGFyZW50IEZvcm1BcnJheSB0byByZXRyaWV2ZSB0aGUgZ3JvdXAgZnJvbVxuICAgKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PTFdIC0gVGhlIGluZGV4IG9mIHRoZSBncm91cCB0byByZXRyaWV2ZVxuICAgKiBAcmV0dXJuIHtGb3JtR3JvdXB9IFRoZSBGb3JtR3JvdXAgYXQgdGhlIHNwZWNpZmllZCBpbmRleFxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJPZiBOZ3hGb3JtU2VydmljZVxuICAgKi9cbiAgc3RhdGljIGdldEdyb3VwRnJvbVBhcmVudChmb3JtR3JvdXA6IEZvcm1Hcm91cCwgcGFyZW50TmFtZTogc3RyaW5nLCBpbmRleDogbnVtYmVyID0gMSk6IEZvcm1Hcm91cCB7XG4gICAgY29uc3QgY2hpbGRHcm91cCA9ICgoZm9ybUdyb3VwLmdldChwYXJlbnROYW1lKSB8fCBmb3JtR3JvdXApIGFzIEZvcm1BcnJheSkuYXQoaW5kZXgpO1xuICAgIGlmKGNoaWxkR3JvdXAgaW5zdGFuY2VvZiBGb3JtR3JvdXApXG4gICAgICByZXR1cm4gY2hpbGRHcm91cDtcbiAgICByZXR1cm4gdGhpcy5hZGRHcm91cFRvUGFyZW50KGZvcm1Hcm91cCwgcGFyZW50TmFtZSwgaW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDaGVja3MgaWYgYSB2YWx1ZSBpcyB1bmlxdWUgd2l0aGluIGEgRm9ybUFycmF5IGdyb3VwLlxuICAgKiBAc3VtbWFyeSBWYWxpZGF0ZXMgdGhhdCB0aGUgcHJpbWFyeSBrZXkgdmFsdWUgaW4gYSBGb3JtR3JvdXAgaXMgdW5pcXVlIGFtb25nIGFsbCBncm91cHNcbiAgICogaW4gdGhlIHBhcmVudCBGb3JtQXJyYXkuIFRoZSB1bmlxdWVuZXNzIGNoZWNrIGJlaGF2aW9yIGRpZmZlcnMgYmFzZWQgb24gdGhlIG9wZXJhdGlvbiB0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0ge0Zvcm1Hcm91cH0gZm9ybUdyb3VwIC0gVGhlIEZvcm1Hcm91cCB0byBjaGVjayBmb3IgdW5pcXVlbmVzc1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIGN1cnJlbnQgZ3JvdXAgd2l0aGluIHRoZSBGb3JtQXJyYXlcbiAgICogQHBhcmFtIHtPcGVyYXRpb25LZXlzfSBbb3BlcmF0aW9uPU9wZXJhdGlvbktleXMuQ1JFQVRFXSAtIFRoZSB0eXBlIG9mIG9wZXJhdGlvbiBiZWluZyBwZXJmb3JtZWRcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5pcXVlLCBmYWxzZSBvdGhlcndpc2VcbiAgICpcbiAgICogQHN0YXRpY1xuICAgKiBAbWVtYmVyT2YgTmd4Rm9ybVNlcnZpY2VcbiAgICovXG4gIHN0YXRpYyBpc1VuaXF1ZU9uR3JvdXAoZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGluZGV4OiBudW1iZXIsIG9wZXJhdGlvbjogT3BlcmF0aW9uS2V5cyA9IE9wZXJhdGlvbktleXMuQ1JFQVRFKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZm9ybUdyb3VwQXJyYXkgPSBmb3JtR3JvdXAucGFyZW50IGFzIEZvcm1BcnJheTtcbiAgICBjb25zdCBwayA9IHRoaXMuZ2V0Q29tcG9uZW50UHJvcHNGcm9tR3JvdXBBcnJheShmb3JtR3JvdXBBcnJheSwgQmFzZUNvbXBvbmVudFByb3BzLlBLIGFzIHN0cmluZykgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGNvbnRyb2xOYW1lID0gT2JqZWN0LmtleXMoZm9ybUdyb3VwLmNvbnRyb2xzKVswXTtcblxuICAgIC8vIG9ubHkgY2hlY2sgZm9yIHVuaXF1ZSBpZiBpcyB0aGUgcGsgY29udHJvbFxuICAgIGlmKGNvbnRyb2xOYW1lICE9PSBwaylcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGNvbnN0IGNvbnRyb2xWYWx1ZSA9IGNsZWFuU3BhY2VzKGAke2Zvcm1Hcm91cC5nZXQocGspPy52YWx1ZX1gLCB0cnVlKTtcbiAgICBpZihvcGVyYXRpb24gPT09IE9wZXJhdGlvbktleXMuQ1JFQVRFKVxuICAgICAgcmV0dXJuICFmb3JtR3JvdXBBcnJheS5jb250cm9scy5zb21lKChncm91cCwgaSkgPT4gaSAhPT0gaW5kZXggJiYgY2xlYW5TcGFjZXMoYCR7Z3JvdXAuZ2V0KHBrKT8udmFsdWV9YCwgdHJ1ZSkgPT09IGNvbnRyb2xWYWx1ZSk7XG5cbiAgICByZXR1cm4gIWZvcm1Hcm91cEFycmF5LmNvbnRyb2xzLnNvbWUoKGdyb3VwLCBpKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGNsZWFuU3BhY2VzKGAke2dyb3VwLmdldChwayk/LnZhbHVlfWAsIHRydWUpO1xuICAgICAgcmV0dXJuIGkgIT09IGluZGV4ICYmIGNvbnRyb2xWYWx1ZSA9PT0gdmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEVuYWJsZXMgYWxsIGNvbnRyb2xzIHdpdGhpbiBhIEZvcm1Hcm91cCBvciBGb3JtQXJyYXkuXG4gICAqIEBzdW1tYXJ5IFJlY3Vyc2l2ZWx5IGVuYWJsZXMgYWxsIGZvcm0gY29udHJvbHMgd2l0aGluIHRoZSBwcm92aWRlZCBGb3JtR3JvdXAgb3IgRm9ybUFycmF5LlxuICAgKiBUaGlzIGlzIHVzZWZ1bCBmb3IgbWFraW5nIGFsbCBjb250cm9scyBpbnRlcmFjdGl2ZSBhZnRlciB0aGV5IGhhdmUgYmVlbiBkaXNhYmxlZC5cbiAgICpcbiAgICogQHBhcmFtIHtGb3JtQXJyYXkgfCBGb3JtR3JvdXB9IGZvcm1Hcm91cCAtIFRoZSBGb3JtR3JvdXAgb3IgRm9ybUFycmF5IHRvIGVuYWJsZSBhbGwgY29udHJvbHMgZm9yXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICogQG1lbWJlck9mIE5neEZvcm1TZXJ2aWNlXG4gICAqL1xuICBzdGF0aWMgZW5hYmxlQWxsR3JvdXBDb250cm9scyhmb3JtR3JvdXA6IEZvcm1BcnJheSB8IEZvcm1Hcm91cCk6IHZvaWQge1xuICAgIE9iamVjdC5rZXlzKGZvcm1Hcm91cC5jb250cm9scykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3QgY29udHJvbCA9IGZvcm1Hcm91cC5nZXQoa2V5KTtcbiAgICAgIGlmIChjb250cm9sIGluc3RhbmNlb2YgRm9ybUFycmF5KSB7XG4gICAgICAgIGNvbnRyb2wuY29udHJvbHMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgRm9ybUdyb3VwKSB7XG4gICAgICAgICAgICBjaGlsZC5lbmFibGUoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgY2hpbGQudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogdHJ1ZSB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBBZGRzIGEgZm9ybSBjb250cm9sIHRvIGEgZm9ybSBncm91cCBiYXNlZCBvbiBjb21wb25lbnQgcHJvcGVydGllcy5cbiAgICogQHN1bW1hcnkgQ3JlYXRlcyBhbmQgY29uZmlndXJlcyBhIEZvcm1Db250cm9sIHdpdGhpbiB0aGUgc3BlY2lmaWVkIEZvcm1Hcm91cCB1c2luZyB0aGUgcHJvdmlkZWRcbiAgICogY29tcG9uZW50IHByb3BlcnRpZXMuIEhhbmRsZXMgbmVzdGVkIHBhdGhzLCBtdWx0aXBsZSBjb250cm9scyAoRm9ybUFycmF5cyksIGFuZCBjb250cm9sIHJlZ2lzdHJhdGlvbi5cbiAgICogVGhpcyBtZXRob2Qgc3VwcG9ydHMgY29tcGxleCBmb3JtIHN0cnVjdHVyZXMgd2l0aCBuZXN0ZWQgZ3JvdXBzIGFuZCBhcnJheXMuXG4gICAqXG4gICAqIEBwYXJhbSB7Rm9ybUdyb3VwfSBmb3JtR3JvdXAgLSBUaGUgZm9ybSBncm91cCB0byBhZGQgdGhlIGNvbnRyb2wgdG9cbiAgICogQHBhcmFtIHtJQ29tcG9uZW50SW5wdXR9IGNvbXBvbmVudFByb3BzIC0gVGhlIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGRlZmluaW5nIHRoZSBjb250cm9sIGNvbmZpZ3VyYXRpb25cbiAgICogQHBhcmFtIHtLZXlWYWx1ZX0gW3BhcmVudFByb3BzPXt9XSAtIFByb3BlcnRpZXMgZnJvbSB0aGUgcGFyZW50IGNvbXBvbmVudCBmb3IgY29udGV4dFxuICAgKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PTBdIC0gVGhlIGluZGV4IGZvciBtdWx0aXBsZSBjb250cm9scyBpbiBGb3JtQXJyYXlzXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBzdGF0aWNcbiAgICogQG1lbWJlck9mIE5neEZvcm1TZXJ2aWNlXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBhZGRGb3JtQ29udHJvbChmb3JtR3JvdXA6IEZvcm1Hcm91cCwgY29tcG9uZW50UHJvcHM6IElDb21wb25lbnRJbnB1dCwgcGFyZW50UHJvcHM6IEtleVZhbHVlID0ge30sIGluZGV4OiBudW1iZXIgPSAwKTogdm9pZCB7XG5cbiAgICBjb25zdCBpc011bHRpcGxlID0gcGFyZW50UHJvcHM/LlsnbXVsdGlwbGUnXSB8fCBwYXJlbnRQcm9wcz8uWyd0eXBlJ10gPT09ICdBcnJheScgfHwgZmFsc2U7XG4gICAgY29uc3QgeyBuYW1lLCBjaGlsZE9mLCB9ID0gY29tcG9uZW50UHJvcHM7XG4gICAgaWYoaXNNdWx0aXBsZSlcbiAgICAgIGNvbXBvbmVudFByb3BzWydwayddID0gY29tcG9uZW50UHJvcHNbJ3BrJ10gfHwgcGFyZW50UHJvcHM/LlsncGsnXSB8fCAnJztcbiAgICBjb25zdCBmdWxsUGF0aCA9IGNoaWxkT2YgPyBpc011bHRpcGxlID8gYCR7Y2hpbGRPZn0uJHtpbmRleH0uJHtuYW1lfWAgOiBgJHtjaGlsZE9mfS4ke25hbWV9YCA6IG5hbWU7XG4gICAgY29uc3QgW3BhcmVudEdyb3VwLCBjb250cm9sTmFtZV0gPSB0aGlzLnJlc29sdmVQYXJlbnRHcm91cChmb3JtR3JvdXAsIGZ1bGxQYXRoLCBjb21wb25lbnRQcm9wcywgcGFyZW50UHJvcHMpO1xuXG4gICAgaWYgKCFwYXJlbnRHcm91cC5nZXQoY29udHJvbE5hbWUpKSB7XG4gICAgICBjb25zdCBjb250cm9sID0gTmd4Rm9ybVNlcnZpY2UuZnJvbVByb3BzKFxuICAgICAgICBjb21wb25lbnRQcm9wcyxcbiAgICAgICAgY29tcG9uZW50UHJvcHMudXBkYXRlTW9kZSB8fCAnY2hhbmdlJyxcbiAgICAgICk7XG4gICAgICBOZ3hGb3JtU2VydmljZS5yZWdpc3Rlcihjb250cm9sLCBjb21wb25lbnRQcm9wcyk7XG4gICAgICBwYXJlbnRHcm91cC5hZGRDb250cm9sKGNvbnRyb2xOYW1lLCBjb250cm9sKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRQcm9wc1snZm9ybUdyb3VwJ10gPSBwYXJlbnRHcm91cDtcbiAgICBjb21wb25lbnRQcm9wc1snZm9ybUNvbnRyb2wnXSA9IHBhcmVudEdyb3VwLmdldChjb250cm9sTmFtZSkgYXMgRm9ybUNvbnRyb2w7XG4gICAgY29tcG9uZW50UHJvcHNbJ211bHRpcGxlJ10gPSBpc011bHRpcGxlXG5cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUmV0cmlldmVzIGEgY29udHJvbCBmcm9tIGEgcmVnaXN0ZXJlZCBmb3JtLlxuICAgKiBAc3VtbWFyeSBGaW5kcyBhbmQgcmV0dXJucyBhbiBBYnN0cmFjdENvbnRyb2wgZnJvbSBhIHJlZ2lzdGVyZWQgZm9ybSB1c2luZyB0aGUgZm9ybSBpZCBhbmQgb3B0aW9uYWwgcGF0aC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGZvcm1JZCAtIFRoZSB1bmlxdWUgaWRlbnRpZmllciBvZiB0aGUgZm9ybS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtwYXRoXSAtIFRoZSBwYXRoIHRvIHRoZSBjb250cm9sIHdpdGhpbiB0aGUgZm9ybS5cbiAgICogQHJldHVybiB7QWJzdHJhY3RDb250cm9sfSBUaGUgcmVxdWVzdGVkIEFic3RyYWN0Q29udHJvbC5cbiAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBmb3JtIGlzIG5vdCBmb3VuZCBpbiB0aGUgcmVnaXN0cnkgb3IgdGhlIGNvbnRyb2wgaXMgbm90IGZvdW5kIGluIHRoZSBmb3JtLlxuICAgKi9cbiAgc3RhdGljIGdldENvbnRyb2xGcm9tRm9ybShmb3JtSWQ6IHN0cmluZywgcGF0aD86IHN0cmluZyk6IEFic3RyYWN0Q29udHJvbCB7XG4gICAgY29uc3QgZm9ybSA9IHRoaXMuZm9ybVJlZ2lzdHJ5LmdldChmb3JtSWQpO1xuICAgIGlmICghZm9ybSlcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRm9ybSB3aXRoIGlkICcke2Zvcm1JZH0nIG5vdCBmb3VuZCBpbiB0aGUgcmVnaXN0cnkuYCk7XG5cbiAgICBpZiAoIXBhdGgpXG4gICAgICByZXR1cm4gZm9ybTtcblxuICAgIGNvbnN0IGNvbnRyb2wgPSBmb3JtLmdldChwYXRoKTtcbiAgICBpZiAoIWNvbnRyb2wpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENvbnRyb2wgd2l0aCBwYXRoICcke3BhdGh9JyBub3QgZm91bmQgaW4gZm9ybSAnJHtmb3JtSWR9Jy5gKTtcbiAgICByZXR1cm4gY29udHJvbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyBhIGZvcm0gZnJvbSBjb21wb25lbnQgY29uZmlndXJhdGlvbnMuXG4gICAqIEBzdW1tYXJ5IEdlbmVyYXRlcyBhIEZvcm1Hcm91cCBiYXNlZCBvbiBhbiBhcnJheSBvZiBjb21wb25lbnQgY29uZmlndXJhdGlvbnMgYW5kIG9wdGlvbmFsbHkgcmVnaXN0ZXJzIGl0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBUaGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBmb3JtLlxuICAgKiBAcGFyYW0ge0lDb21wb25lbnRDb25maWdbXX0gY29tcG9uZW50cyAtIEFuIGFycmF5IG9mIGNvbXBvbmVudCBjb25maWd1cmF0aW9ucy5cbiAgICogQHBhcmFtIHtib29sZWFufSBbcmVnaXN0cnk9ZmFsc2VdIC0gV2hldGhlciB0byByZWdpc3RlciB0aGUgY3JlYXRlZCBmb3JtLlxuICAgKiBAcmV0dXJuIHtGb3JtR3JvdXB9IFRoZSBjcmVhdGVkIEZvcm1Hcm91cC5cbiAgICovXG4gIHN0YXRpYyBjcmVhdGVGb3JtRnJvbUNvbXBvbmVudHMoaWQ6IHN0cmluZywgY29tcG9uZW50czogSUNvbXBvbmVudENvbmZpZ1tdLCByZWdpc3RyeTogYm9vbGVhbiA9IGZhbHNlKTogRm9ybUdyb3VwIHtcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1Hcm91cCh7fSk7XG4gICAgY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICB0aGlzLmFkZEZvcm1Db250cm9sKGZvcm0sIGNvbXBvbmVudC5pbnB1dHMpO1xuICAgIH0pO1xuXG4gICAgaWYgKHJlZ2lzdHJ5KVxuICAgICAgdGhpcy5hZGRSZWdpc3RyeShpZCwgZm9ybSk7XG5cbiAgICByZXR1cm4gZm9ybTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQWRkcyBhIGNvbnRyb2wgdG8gYSBmb3JtIGJhc2VkIG9uIGNvbXBvbmVudCBwcm9wZXJ0aWVzLlxuICAgKiBAc3VtbWFyeSBDcmVhdGVzIGFuZCBhZGRzIGEgZm9ybSBjb250cm9sIHRvIGEgZm9ybSAoZXhpc3Rpbmcgb3IgbmV3KSBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgY29tcG9uZW50IHByb3BlcnRpZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIFRoZSB1bmlxdWUgaWRlbnRpZmllciBvZiB0aGUgZm9ybS5cbiAgICogQHBhcmFtIHtGaWVsZFByb3BlcnRpZXN9IGNvbXBvbmVudFByb3BlcnRpZXMgLSBUaGUgcHJvcGVydGllcyBvZiB0aGUgY29tcG9uZW50IHRvIGNyZWF0ZSB0aGUgY29udHJvbCBmcm9tLlxuICAgKiBAcmV0dXJuIHtBYnN0cmFjdENvbnRyb2x9IFRoZSBmb3JtIG9yIGNyZWF0ZWQgY29udHJvbC5cbiAgICovXG4gIHN0YXRpYyBhZGRDb250cm9sRnJvbVByb3BzKGlkOiBzdHJpbmcsIGNvbXBvbmVudFByb3BlcnRpZXM6IEZpZWxkUHJvcGVydGllcywgcGFyZW50UHJvcHM/OiBGaWVsZFByb3BlcnRpZXMpOiBBYnN0cmFjdENvbnRyb2wge1xuICAgIGNvbnN0IGZvcm0gPSB0aGlzLmZvcm1SZWdpc3RyeS5nZXQoaWQpID8/IG5ldyBGb3JtR3JvdXAoe30pO1xuICAgIGlmICghdGhpcy5mb3JtUmVnaXN0cnkuaGFzKGlkKSlcbiAgICAgIHRoaXMuYWRkUmVnaXN0cnkoaWQsIGZvcm0pO1xuXG4gICAgaWYgKGNvbXBvbmVudFByb3BlcnRpZXMucGF0aClcbiAgICAgIHRoaXMuYWRkRm9ybUNvbnRyb2woZm9ybSwgY29tcG9uZW50UHJvcGVydGllcywgcGFyZW50UHJvcHMpO1xuXG4gICAgcmV0dXJuIGZvcm07XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFJldHJpZXZlcyBmb3JtIGRhdGEgZnJvbSBhIEZvcm1Hcm91cC5cbiAgICogQHN1bW1hcnkgRXh0cmFjdHMgYW5kIHByb2Nlc3NlcyB0aGUgZGF0YSBmcm9tIGEgRm9ybUdyb3VwLCBoYW5kbGluZyBkaWZmZXJlbnQgaW5wdXQgdHlwZXMgYW5kIG5lc3RlZCBmb3JtIGdyb3Vwcy5cbiAgICogQHBhcmFtIHtGb3JtR3JvdXB9IGZvcm1Hcm91cCAtIFRoZSBGb3JtR3JvdXAgdG8gZXh0cmFjdCBkYXRhIGZyb20uXG4gICAqIEByZXR1cm4ge1JlY29yZDxzdHJpbmcsIHVua25vd24+fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgZm9ybSBkYXRhLlxuICAgKi9cbiAgc3RhdGljIGdldEZvcm1EYXRhKGZvcm1Hcm91cDogRm9ybUdyb3VwKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4ge1xuICAgIGNvbnN0IGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZm9ybUdyb3VwLmNvbnRyb2xzKSB7XG4gICAgICBjb25zdCBjb250cm9sID0gZm9ybUdyb3VwLmNvbnRyb2xzW2tleV07XG4gICAgICBjb25zdCBwYXJlbnRQcm9wcyA9IE5neEZvcm1TZXJ2aWNlLmdldFByb3BzRnJvbUNvbnRyb2woZm9ybUdyb3VwIGFzIEZvcm1Hcm91cCB8IEZvcm1BcnJheSk7XG4gICAgICBpZiAoIShjb250cm9sIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wpKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gTmd4Rm9ybVNlcnZpY2UuZ2V0Rm9ybURhdGEoY29udHJvbCBhcyBGb3JtR3JvdXApO1xuICAgICAgICBjb25zdCBpc1ZhbGlkID0gY29udHJvbC52YWxpZDtcbiAgICAgICAgaWYocGFyZW50UHJvcHMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIGlmKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgIGRhdGFba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5yZXNldChjb250cm9sIGFzIEZvcm1Db250cm9sKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtrZXldID0gdmFsdWU7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IE5neEZvcm1TZXJ2aWNlLmdldFByb3BzRnJvbUNvbnRyb2woY29udHJvbCBhcyBGb3JtQ29udHJvbCB8IEZvcm1BcnJheSk7XG4gICAgICBsZXQgdmFsdWUgPSBjb250cm9sLnZhbHVlO1xuICAgICAgaWYgKCFIVE1MNUNoZWNrVHlwZXMuaW5jbHVkZXMocHJvcHNbJ3R5cGUnXSkpIHtcbiAgICAgICAgc3dpdGNoIChwcm9wc1sndHlwZSddKSB7XG4gICAgICAgICAgY2FzZSBIVE1MNUlucHV0VHlwZXMuTlVNQkVSOlxuICAgICAgICAgICAgdmFsdWUgPSBwYXJzZVRvTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgSFRNTDVJbnB1dFR5cGVzLkRBVEU6XG4gICAgICAgICAgY2FzZSBIVE1MNUlucHV0VHlwZXMuREFURVRJTUVfTE9DQUw6XG4gICAgICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YWx1ZSA9IGVzY2FwZUh0bWwodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkYXRhW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgTmd4Rm9ybVNlcnZpY2UuZW5hYmxlQWxsR3JvdXBDb250cm9scyhmb3JtR3JvdXAgYXMgRm9ybUdyb3VwKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVmFsaWRhdGVzIGZpZWxkcyBpbiBhIGZvcm0gY29udHJvbCBvciBmb3JtIGdyb3VwLlxuICAgKiBAc3VtbWFyeSBSZWN1cnNpdmVseSB2YWxpZGF0ZXMgYWxsIGZpZWxkcyBpbiBhIGZvcm0gY29udHJvbCBvciBmb3JtIGdyb3VwLCBtYXJraW5nIHRoZW0gYXMgdG91Y2hlZCBhbmQgZGlydHkuXG4gICAqIEBwYXJhbSB7QWJzdHJhY3RDb250cm9sfSBjb250cm9sIC0gVGhlIGNvbnRyb2wgb3IgZm9ybSBncm91cCB0byB2YWxpZGF0ZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtwYXRoXSAtIFRoZSBwYXRoIHRvIHRoZSBjb250cm9sIHdpdGhpbiB0aGUgZm9ybS5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBhbGwgZmllbGRzIGFyZSB2YWxpZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgbm8gY29udHJvbCBpcyBmb3VuZCBhdCB0aGUgc3BlY2lmaWVkIHBhdGggb3IgaWYgdGhlIGNvbnRyb2wgdHlwZSBpcyB1bmtub3duLlxuICAgKi9cbiAgc3RhdGljIHZhbGlkYXRlRmllbGRzKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgcGs/OiBzdHJpbmcsICBwYXRoPzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29udHJvbCA9IHBhdGggPyBjb250cm9sLmdldChwYXRoKSBhcyBBYnN0cmFjdENvbnRyb2wgOiBjb250cm9sO1xuICAgIGlmICghY29udHJvbClcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gY29udHJvbCBmb3VuZCBhdCBwYXRoOiAke3BhdGggfHwgJ3Jvb3QnfS5gKTtcblxuICAgIGNvbnN0IGlzQWxsb3dlZCA9IFtGb3JtQXJyYXksIEZvcm1Hcm91cCwgRm9ybUNvbnRyb2xdLnNvbWUodHlwZSA9PiBjb250cm9sIGluc3RhbmNlb2YgdHlwZSk7XG4gICAgaWYgKCFpc0FsbG93ZWQpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gY29udHJvbCB0eXBlIGF0OiAke3BhdGggfHwgJ3Jvb3QnfWApO1xuXG4gICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogdHJ1ZSB9KTtcblxuICAgIGlmIChjb250cm9sIGluc3RhbmNlb2YgRm9ybUdyb3VwKSB7XG4gICAgICBPYmplY3QudmFsdWVzKGNvbnRyb2wuY29udHJvbHMpLmZvckVhY2goY2hpbGRDb250cm9sID0+IHtcbiAgICAgICAgdGhpcy52YWxpZGF0ZUZpZWxkcyhjaGlsZENvbnRyb2wpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQXJyYXkpIHtcbiAgICAgIGNvbnN0IHRvdGFsR3JvdXBzID0gY29udHJvbC5sZW5ndGg7XG4gICAgICBjb25zdCBoYXNWYWxpZCA9IGNvbnRyb2wuY29udHJvbHMuc29tZShjb250cm9sID0+IGNvbnRyb2wudmFsaWQpO1xuICAgICAgaWYodG90YWxHcm91cHMgPiAxICYmIGhhc1ZhbGlkKSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gY29udHJvbC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGNvbnN0IGNoaWxkQ29udHJvbCA9IGNvbnRyb2wuYXQoaSk7XG4gICAgICAgICAgLy8gZGlzYWJsZSBubyB2YWxpZCBncm91cHMgb24gYXJyYXlcbiAgICAgICAgICBpZiAoIWNoaWxkQ29udHJvbC52YWxpZCkge1xuICAgICAgICAgICAgKGNoaWxkQ29udHJvbC5wYXJlbnQgYXMgRm9ybUdyb3VwKS5zZXRFcnJvcnMobnVsbCk7XG4gICAgICAgICAgICAgKGNoaWxkQ29udHJvbC5wYXJlbnQgYXMgRm9ybUdyb3VwKS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiB0cnVlIH0pO1xuICAgICAgICAgICAgY2hpbGRDb250cm9sLmRpc2FibGUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUZpZWxkcyhjaGlsZENvbnRyb2wpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhjb250cm9sLmNvbnRyb2xzKS5mb3JFYWNoKGNoaWxkQ29udHJvbCA9PiB7XG4gICAgICAgICAgdGhpcy52YWxpZGF0ZUZpZWxkcyhjaGlsZENvbnRyb2wpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbC52YWxpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gR2VuZXJhdGVzIHZhbGlkYXRvcnMgZnJvbSBjb21wb25lbnQgcHJvcGVydGllcy5cbiAgICogQHN1bW1hcnkgQ3JlYXRlcyBhbiBhcnJheSBvZiBWYWxpZGF0b3JGbiBiYXNlZCBvbiB0aGUgc3VwcG9ydGVkIHZhbGlkYXRpb24ga2V5cyBpbiB0aGUgY29tcG9uZW50IHByb3BlcnRpZXMuXG4gICAqIEBwYXJhbSB7RmllbGRQcm9wZXJ0aWVzfSBwcm9wcyAtIFRoZSBjb21wb25lbnQgcHJvcGVydGllcy5cbiAgICogQHJldHVybiB7VmFsaWRhdG9yRm5bXX0gQW4gYXJyYXkgb2YgdmFsaWRhdG9yIGZ1bmN0aW9ucy5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIHZhbGlkYXRvcnNGcm9tUHJvcHMocHJvcHM6IEZpZWxkUHJvcGVydGllcyk6IFZhbGlkYXRvckZuW10ge1xuICAgIGNvbnN0IHN1cHBvcnRlZFZhbGlkYXRpb25LZXlzID0gVmFsaWRhdGlvbi5rZXlzKCk7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHByb3BzKVxuICAgICAgLmZpbHRlcigoazogc3RyaW5nKSA9PiBzdXBwb3J0ZWRWYWxpZGF0aW9uS2V5cy5pbmNsdWRlcyhrKSlcbiAgICAgIC5tYXAoKGs6IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4gVmFsaWRhdG9yRmFjdG9yeS5zcGF3bihwcm9wcywgayk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyBhIEZvcm1Db250cm9sIGZyb20gY29tcG9uZW50IHByb3BlcnRpZXMuXG4gICAqIEBzdW1tYXJ5IEdlbmVyYXRlcyBhIEZvcm1Db250cm9sIHdpdGggdmFsaWRhdG9ycyBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgY29tcG9uZW50IHByb3BlcnRpZXMuXG4gICAqIEBwYXJhbSB7RmllbGRQcm9wZXJ0aWVzfSBwcm9wcyAtIFRoZSBjb21wb25lbnQgcHJvcGVydGllcy5cbiAgICogQHBhcmFtIHtGaWVsZFVwZGF0ZU1vZGV9IFt1cGRhdGVNb2RlPSdjaGFuZ2UnXSAtIFRoZSB1cGRhdGUgbW9kZSBmb3IgdGhlIGNvbnRyb2wuXG4gICAqIEByZXR1cm4ge0Zvcm1Db250cm9sfSBUaGUgY3JlYXRlZCBGb3JtQ29udHJvbC5cbiAgICovXG4gIHN0YXRpYyBmcm9tUHJvcHMocHJvcHM6IEZpZWxkUHJvcGVydGllcywgdXBkYXRlTW9kZTogRmllbGRVcGRhdGVNb2RlID0gJ2NoYW5nZScpOiBGb3JtQ29udHJvbCB7XG4gICAgY29uc3QgdmFsaWRhdG9ycyA9IHRoaXMudmFsaWRhdG9yc0Zyb21Qcm9wcyhwcm9wcyk7XG4gICAgY29uc3QgY29tcG9zZWQgPSB2YWxpZGF0b3JzLmxlbmd0aCA/IFZhbGlkYXRvcnMuY29tcG9zZSh2YWxpZGF0b3JzKSA6IG51bGw7XG4gICAgcmV0dXJuIG5ldyBGb3JtQ29udHJvbChcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6XG4gICAgICAgICAgcHJvcHMudmFsdWUgJiYgcHJvcHMudHlwZSAhPT0gSFRNTDVJbnB1dFR5cGVzLkNIRUNLQk9YXG4gICAgICAgICAgICA/IHByb3BzLnR5cGUgPT09IEhUTUw1SW5wdXRUeXBlcy5EQVRFXG4gICAgICAgICAgICAgID8gIWlzVmFsaWREYXRlKHBhcnNlRGF0ZShwcm9wcy5mb3JtYXQgYXMgc3RyaW5nLCBwcm9wcy52YWx1ZSBhcyBzdHJpbmcpKVxuICAgICAgICAgICAgICAgID8gdW5kZWZpbmVkIDogcHJvcHMudmFsdWUgOlxuICAgICAgICAgICAgICAocHJvcHMudmFsdWUgYXMgdW5rbm93bikgOiB1bmRlZmluZWQsXG4gICAgICAgIGRpc2FibGVkOiBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbGlkYXRvcnM6IGNvbXBvc2VkLFxuICAgICAgICB1cGRhdGVPbjogdXBkYXRlTW9kZSxcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUmV0cmlldmVzIHByb3BlcnRpZXMgZnJvbSBhIEZvcm1Db250cm9sLlxuICAgKiBAc3VtbWFyeSBHZXRzIHRoZSBGaWVsZFByb3BlcnRpZXMgYXNzb2NpYXRlZCB3aXRoIGEgRm9ybUNvbnRyb2wgZnJvbSB0aGUgaW50ZXJuYWwgV2Vha01hcC5cbiAgICogQHBhcmFtIHtGb3JtQ29udHJvbH0gY29udHJvbCAtIFRoZSBGb3JtQ29udHJvbCB0byBnZXQgcHJvcGVydGllcyBmb3IuXG4gICAqIEByZXR1cm4ge0ZpZWxkUHJvcGVydGllc30gVGhlIHByb3BlcnRpZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb250cm9sLlxuICAgKi9cbiAgc3RhdGljIGdldFByb3BzRnJvbUNvbnRyb2woY29udHJvbDogRm9ybUNvbnRyb2wgfCBGb3JtQXJyYXkgfCBGb3JtR3JvdXApOiBGaWVsZFByb3BlcnRpZXMge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2xzLmdldChjb250cm9sKSB8fCB7fSBhcyBGaWVsZFByb3BlcnRpZXM7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEZpbmRzIGEgcGFyZW50IGVsZW1lbnQgd2l0aCBhIHNwZWNpZmljIHRhZy5cbiAgICogQHN1bW1hcnkgVHJhdmVyc2VzIHVwIHRoZSBET00gdHJlZSB0byBmaW5kIHRoZSBuZWFyZXN0IHBhcmVudCBlbGVtZW50IHdpdGggdGhlIHNwZWNpZmllZCB0YWcuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIC0gVGhlIHN0YXJ0aW5nIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgLSBUaGUgdGFnIG5hbWUgdG8gc2VhcmNoIGZvci5cbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRoZSBmb3VuZCBwYXJlbnQgZWxlbWVudC5cbiAgICogQHRocm93cyB7RXJyb3J9IElmIG5vIHBhcmVudCB3aXRoIHRoZSBzcGVjaWZpZWQgdGFnIGlzIGZvdW5kLlxuICAgKi9cbiAgc3RhdGljIGdldFBhcmVudEVsKGVsOiBIVE1MRWxlbWVudCwgdGFnOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgbGV0IHBhcmVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIHdoaWxlICgocGFyZW50ID0gZWwucGFyZW50RWxlbWVudCkgIT09IG51bGwpIHtcbiAgICAgIGlmIChwYXJlbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSB0YWcudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgICAgfVxuICAgICAgZWwgPSBwYXJlbnQ7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBObyBwYXJlbnQgd2l0aCB0aGUgdGFnICR7dGFnfSB3YXMgZm91bmQgZm9yIHByb3ZpZGVkIGVsZW1lbnRgLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFJlZ2lzdGVycyBhIGNvbnRyb2wgd2l0aCBpdHMgcHJvcGVydGllcy5cbiAgICogQHN1bW1hcnkgQXNzb2NpYXRlcyBhIGNvbnRyb2wgd2l0aCBpdHMgcHJvcGVydGllcyBpbiB0aGUgaW50ZXJuYWwgV2Vha01hcC5cbiAgICogQHBhcmFtIHtBYnN0cmFjdENvbnRyb2x9IGNvbnRyb2wgLSBUaGUgY29udHJvbCB0byByZWdpc3Rlci5cbiAgICogQHBhcmFtIHtGaWVsZFByb3BlcnRpZXN9IHByb3BzIC0gVGhlIHByb3BlcnRpZXMgdG8gYXNzb2NpYXRlIHdpdGggdGhlIGNvbnRyb2wuXG4gICAqL1xuICBzdGF0aWMgcmVnaXN0ZXIoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBwcm9wczogRmllbGRQcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5jb250cm9scy5zZXQoY29udHJvbCwgcHJvcHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBVbnJlZ2lzdGVycyBhIGNvbnRyb2wuXG4gICAqIEBzdW1tYXJ5IFJlbW92ZXMgYSBjb250cm9sIGFuZCBpdHMgYXNzb2NpYXRlZCBwcm9wZXJ0aWVzIGZyb20gdGhlIGludGVybmFsIFdlYWtNYXAuXG4gICAqIEBwYXJhbSB7QWJzdHJhY3RDb250cm9sfSBjb250cm9sIC0gVGhlIGNvbnRyb2wgdG8gdW5yZWdpc3Rlci5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgY29udHJvbCB3YXMgc3VjY2Vzc2Z1bGx5IHVucmVnaXN0ZXJlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKi9cbiAgc3RhdGljIHVucmVnaXN0ZXIoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbHMuZGVsZXRlKGNvbnRyb2wpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBSZXNldHMgYSBmb3JtIGdyb3VwLlxuICAgKiBAc3VtbWFyeSBSZWN1cnNpdmVseSByZXNldHMgYWxsIGNvbnRyb2xzIGluIGEgZm9ybSBncm91cCwgY2xlYXJpbmcgdmFsdWVzLCBlcnJvcnMsIGFuZCBtYXJraW5nIHRoZW0gYXMgcHJpc3RpbmUgYW5kIHVudG91Y2hlZC5cbiAgICogQHBhcmFtIHtGb3JtR3JvdXB9IGZvcm1Hcm91cCAtIFRoZSBmb3JtIGdyb3VwIHRvIHJlc2V0LlxuICAgKi9cbiAgc3RhdGljIHJlc2V0KGZvcm1Hcm91cDogRm9ybUdyb3VwIHwgRm9ybUNvbnRyb2wpOiB2b2lkIHtcbiAgICBpZihmb3JtR3JvdXAgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCkge1xuICAgICAgY29uc3QgY29udHJvbCA9IGZvcm1Hcm91cCBhcyBGb3JtQ29udHJvbDtcbiAgICAgIGNvbnN0IHsgdHlwZSB9ID0gTmd4Rm9ybVNlcnZpY2UuZ2V0UHJvcHNGcm9tQ29udHJvbChjb250cm9sKTtcbiAgICAgIGlmICghSFRNTDVDaGVja1R5cGVzLmluY2x1ZGVzKHR5cGUpKVxuICAgICAgICBjb250cm9sLnNldFZhbHVlKFwiXCIpO1xuICAgICAgY29udHJvbC5tYXJrQXNQcmlzdGluZSgpO1xuICAgICAgY29udHJvbC5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgICAgIGNvbnRyb2wuc2V0RXJyb3JzKG51bGwpO1xuICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGZvcm1Hcm91cC5jb250cm9scykge1xuICAgICAgICBjb25zdCBjb250cm9sID0gZm9ybUdyb3VwLmNvbnRyb2xzW2tleV07XG4gICAgICAgIE5neEZvcm1TZXJ2aWNlLnJlc2V0KGNvbnRyb2wgYXMgRm9ybUNvbnRyb2wpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==