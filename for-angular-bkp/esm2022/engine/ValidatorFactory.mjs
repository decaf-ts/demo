import { FormControl, FormGroup } from '@angular/forms';
import { ComparisonValidationKeys, DEFAULT_PATTERNS, PathProxyEngine, Validation, ValidationKeys, } from '@decaf-ts/decorator-validation';
import { HTML5InputTypes, parseValueByType } from '@decaf-ts/ui-decorators';
import { AngularEngineKeys } from './constants';
import { NgxRenderingEngine } from './NgxRenderingEngine';
/**
 *
 * Resolves the correct validator key and its associated properties based on the input key and type.
 *
 * When the validation key is TYPE, it's necessary to resolve the actual validator based on the
 * field's type (e.g., 'password', 'email', 'url') instead of using the generic getValidator("type") logic.
 * This allows directly invoking specific validators like getValidator('password'), ensuring the correct
 * behavior for type-based validation.
 *
 * @param key - The validation key (e.g., 'type', 'required', etc.).
 * @param value - The value that needs be provided to the validator.
 * @param type - The field's declared type.
 * @returns An object containing the resolved validator key and its corresponding props.
 */
const resolveValidatorKeyProps = (key, value, type) => {
    const patternValidators = {
        [ValidationKeys.PASSWORD]: DEFAULT_PATTERNS.PASSWORD.CHAR8_ONE_OF_EACH,
        [ValidationKeys.EMAIL]: DEFAULT_PATTERNS.EMAIL,
        [ValidationKeys.URL]: DEFAULT_PATTERNS.URL,
    };
    const isTypeBased = key === ValidationKeys.TYPE && Object.keys(patternValidators).includes(type);
    const validatorKey = isTypeBased ? type : key;
    const props = {
        // [validatorKey]: (!isTypeBased && key === 'type') ? parseType(type) : value,
        [validatorKey]: (!isTypeBased && validatorKey === ValidationKeys.TYPE) ? NgxRenderingEngine.get().translate(value, false) : value,
        // Email, Password, and URL are validated using the "pattern" key
        ...(isTypeBased && { [ValidationKeys.PATTERN]: patternValidators[type] }),
    };
    return { validatorKey, props };
};
export class ValidatorFactory {
    static spawn(fieldProps, key) {
        if (!Validation.keys().includes(key))
            throw new Error('Unsupported custom validation');
        const validatorFn = (control) => {
            const { name, type } = fieldProps;
            const { validatorKey, props } = resolveValidatorKeyProps(key, fieldProps[key], type);
            const validator = Validation.get(validatorKey);
            // parseValueByType does not support undefined values
            const value = typeof control.value !== 'undefined'
                ? parseValueByType(type, type === HTML5InputTypes.CHECKBOX ? name : control.value, fieldProps)
                : undefined;
            // Create a proxy to enable access to parent and child values
            let proxy = ValidatorFactory.createProxy({});
            if (Object.values(ComparisonValidationKeys).includes(key)) {
                const parent = control instanceof FormGroup ? control : control[AngularEngineKeys.PARENT];
                proxy = ValidatorFactory.createProxy(parent);
            }
            let errs;
            try {
                if (!props['types'] && !props['customTypes'])
                    props['types'] = props['type'];
                errs = validator.hasErrors(value, props, proxy);
            }
            catch (e) {
                errs = `${key} validator failed to validate: ${e}`;
                console.warn(errs);
            }
            return errs ? { [validatorKey]: true } : null;
        };
        Object.defineProperty(validatorFn, 'name', {
            value: `${key}Validator`,
        });
        return validatorFn;
    }
    /**
     * @summary Creates a proxy wrapper for an Angular AbstractControl to assist with custom validation logic.
     * @description Returns a structured proxy object that simulates a hierarchical tree of form values.
     * Enables Validators handling method to access parent and child properties using consistent dot-notation in Angular forms.
     *
     * @param {AbstractControl} control - The control to wrap in a proxy.
     * @returns {PathProxy<unknown>} A proxy object exposing form values and enabling recursive parent access.
     */
    static createProxy(control) {
        return PathProxyEngine.create(control, {
            getValue(target, prop) {
                if (target instanceof FormControl)
                    return target.value;
                if (target instanceof FormGroup) {
                    const control = target.controls[prop];
                    return control instanceof FormControl ? control.value : control;
                }
                // const value = target[prop];
                // if (value instanceof FormControl)
                //   return value.value;
                //
                // if (value instanceof FormGroup) {
                //   const control = value.controls[prop];
                //   return control instanceof FormControl ? control.value : control;
                // }
                return target?.[prop];
            },
            getParent: function (target) {
                return target?.['_parent'];
            },
            ignoreUndefined: true,
            ignoreNull: true,
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdG9yRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZW5naW5lL1ZhbGlkYXRvckZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFtQixXQUFXLEVBQUUsU0FBUyxFQUFpQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3hHLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsZ0JBQWdCLEVBRWhCLGVBQWUsRUFDZixVQUFVLEVBQ1YsY0FBYyxHQUVmLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEMsT0FBTyxFQUFtQixlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFLMUQ7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUNILE1BQU0sd0JBQXdCLEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBYyxFQUFFLElBQVksRUFHekUsRUFBRTtJQUNGLE1BQU0saUJBQWlCLEdBQTRCO1FBQ2pELENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxpQkFBaUI7UUFDdEUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsS0FBSztRQUM5QyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHO0tBQzNDLENBQUM7SUFDRixNQUFNLFdBQVcsR0FBRyxHQUFHLEtBQUssY0FBYyxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pHLE1BQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENB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QUFJLENBQUM7UUFDaEQsQ0FBQyxDQUFDO1FBRUYsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFO1lBQ3pDLEtBQUssRUFBRSxHQUFHLEdBQUcsV0FBVztTQUN6QixDQUFDLENBQUM7UUFFSCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBd0I7UUFDekMsT0FBTyxlQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNyQyxRQUFRLENBQUMsTUFBdUIsRUFBRSxJQUFZO2dCQUM1QyxJQUFJLE1BQU0sWUFBWSxXQUFXO29CQUMvQixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBRXRCLElBQUksTUFBTSxZQUFZLFNBQVMsRUFBRSxDQUFDO29CQUNoQyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN0QyxPQUFPLE9BQU8sWUFBWSxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztnQkFDbEUsQ0FBQztnQkFFRCw4QkFBOEI7Z0JBQzlCLG9DQUFvQztnQkFDcEMsd0JBQXdCO2dCQUN4QixFQUFFO2dCQUNGLG9DQUFvQztnQkFDcEMsMENBQTBDO2dCQUMxQyxxRUFBcUU7Z0JBQ3JFLElBQUk7Z0JBRUosT0FBUSxNQUFtQixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsQ0FBQztZQUNELFNBQVMsRUFBRSxVQUFTLE1BQXVCO2dCQUN6QyxPQUFPLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzdCLENBQUM7WUFDRCxlQUFlLEVBQUUsSUFBSTtZQUNyQixVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQ29tcGFyaXNvblZhbGlkYXRpb25LZXlzLFxuICBERUZBVUxUX1BBVFRFUk5TLFxuICBQYXRoUHJveHksXG4gIFBhdGhQcm94eUVuZ2luZSxcbiAgVmFsaWRhdGlvbixcbiAgVmFsaWRhdGlvbktleXMsXG4gIFZhbGlkYXRvcixcbn0gZnJvbSAnQGRlY2FmLXRzL2RlY29yYXRvci12YWxpZGF0aW9uJztcbmltcG9ydCB7IEZpZWxkUHJvcGVydGllcywgSFRNTDVJbnB1dFR5cGVzLCBwYXJzZVZhbHVlQnlUeXBlIH0gZnJvbSAnQGRlY2FmLXRzL3VpLWRlY29yYXRvcnMnO1xuaW1wb3J0IHsgQW5ndWxhckVuZ2luZUtleXMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBLZXlWYWx1ZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgTmd4UmVuZGVyaW5nRW5naW5lIH0gZnJvbSAnLi9OZ3hSZW5kZXJpbmdFbmdpbmUnO1xuXG5cbnR5cGUgQ29tcGFyaXNvblZhbGlkYXRpb25LZXkgPSB0eXBlb2YgQ29tcGFyaXNvblZhbGlkYXRpb25LZXlzW2tleW9mIHR5cGVvZiBDb21wYXJpc29uVmFsaWRhdGlvbktleXNdO1xuXG4vKipcbiAqXG4gKiBSZXNvbHZlcyB0aGUgY29ycmVjdCB2YWxpZGF0b3Iga2V5IGFuZCBpdHMgYXNzb2NpYXRlZCBwcm9wZXJ0aWVzIGJhc2VkIG9uIHRoZSBpbnB1dCBrZXkgYW5kIHR5cGUuXG4gKlxuICogV2hlbiB0aGUgdmFsaWRhdGlvbiBrZXkgaXMgVFlQRSwgaXQncyBuZWNlc3NhcnkgdG8gcmVzb2x2ZSB0aGUgYWN0dWFsIHZhbGlkYXRvciBiYXNlZCBvbiB0aGVcbiAqIGZpZWxkJ3MgdHlwZSAoZS5nLiwgJ3Bhc3N3b3JkJywgJ2VtYWlsJywgJ3VybCcpIGluc3RlYWQgb2YgdXNpbmcgdGhlIGdlbmVyaWMgZ2V0VmFsaWRhdG9yKFwidHlwZVwiKSBsb2dpYy5cbiAqIFRoaXMgYWxsb3dzIGRpcmVjdGx5IGludm9raW5nIHNwZWNpZmljIHZhbGlkYXRvcnMgbGlrZSBnZXRWYWxpZGF0b3IoJ3Bhc3N3b3JkJyksIGVuc3VyaW5nIHRoZSBjb3JyZWN0XG4gKiBiZWhhdmlvciBmb3IgdHlwZS1iYXNlZCB2YWxpZGF0aW9uLlxuICpcbiAqIEBwYXJhbSBrZXkgLSBUaGUgdmFsaWRhdGlvbiBrZXkgKGUuZy4sICd0eXBlJywgJ3JlcXVpcmVkJywgZXRjLikuXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdGhhdCBuZWVkcyBiZSBwcm92aWRlZCB0byB0aGUgdmFsaWRhdG9yLlxuICogQHBhcmFtIHR5cGUgLSBUaGUgZmllbGQncyBkZWNsYXJlZCB0eXBlLlxuICogQHJldHVybnMgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHJlc29sdmVkIHZhbGlkYXRvciBrZXkgYW5kIGl0cyBjb3JyZXNwb25kaW5nIHByb3BzLlxuICovXG5jb25zdCByZXNvbHZlVmFsaWRhdG9yS2V5UHJvcHMgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiB1bmtub3duLCB0eXBlOiBzdHJpbmcpOiB7XG4gIHZhbGlkYXRvcktleTogc3RyaW5nO1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG59ID0+IHtcbiAgY29uc3QgcGF0dGVyblZhbGlkYXRvcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge1xuICAgIFtWYWxpZGF0aW9uS2V5cy5QQVNTV09SRF06IERFRkFVTFRfUEFUVEVSTlMuUEFTU1dPUkQuQ0hBUjhfT05FX09GX0VBQ0gsXG4gICAgW1ZhbGlkYXRpb25LZXlzLkVNQUlMXTogREVGQVVMVF9QQVRURVJOUy5FTUFJTCxcbiAgICBbVmFsaWRhdGlvbktleXMuVVJMXTogREVGQVVMVF9QQVRURVJOUy5VUkwsXG4gIH07XG4gIGNvbnN0IGlzVHlwZUJhc2VkID0ga2V5ID09PSBWYWxpZGF0aW9uS2V5cy5UWVBFICYmIE9iamVjdC5rZXlzKHBhdHRlcm5WYWxpZGF0b3JzKS5pbmNsdWRlcyh0eXBlKTtcbiAgY29uc3QgdmFsaWRhdG9yS2V5ID0gaXNUeXBlQmFzZWQgPyB0eXBlIDoga2V5O1xuICBjb25zdCBwcm9wczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7XG4gICAgLy8gW3ZhbGlkYXRvcktleV06ICghaXNUeXBlQmFzZWQgJiYga2V5ID09PSAndHlwZScpID8gcGFyc2VUeXBlKHR5cGUpIDogdmFsdWUsXG4gICAgW3ZhbGlkYXRvcktleV06ICghaXNUeXBlQmFzZWQgJiYgdmFsaWRhdG9yS2V5ID09PSBWYWxpZGF0aW9uS2V5cy5UWVBFKSA/IE5neFJlbmRlcmluZ0VuZ2luZS5nZXQoKS50cmFuc2xhdGUodmFsdWUgYXMgc3RyaW5nLCBmYWxzZSkgOiB2YWx1ZSxcbiAgICAvLyBFbWFpbCwgUGFzc3dvcmQsIGFuZCBVUkwgYXJlIHZhbGlkYXRlZCB1c2luZyB0aGUgXCJwYXR0ZXJuXCIga2V5XG4gICAgLi4uKGlzVHlwZUJhc2VkICYmIHsgW1ZhbGlkYXRpb25LZXlzLlBBVFRFUk5dIDogcGF0dGVyblZhbGlkYXRvcnNbdHlwZV0gfSksXG4gIH07XG5cbiAgcmV0dXJuIHsgdmFsaWRhdG9yS2V5LCBwcm9wcyB9O1xufTtcblxuXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yRmFjdG9yeSB7XG4gIHN0YXRpYyBzcGF3bihmaWVsZFByb3BzOiBGaWVsZFByb3BlcnRpZXMsIGtleTogc3RyaW5nKTogVmFsaWRhdG9yRm4ge1xuICAgIGlmICghVmFsaWRhdGlvbi5rZXlzKCkuaW5jbHVkZXMoa2V5KSlcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgY3VzdG9tIHZhbGlkYXRpb24nKTtcblxuICAgIGNvbnN0IHZhbGlkYXRvckZuOiBWYWxpZGF0b3JGbiA9IChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgICBjb25zdCB7IG5hbWUsIHR5cGUgfSA9IGZpZWxkUHJvcHM7XG4gICAgICBjb25zdCB7IHZhbGlkYXRvcktleSwgcHJvcHMgfSA9IHJlc29sdmVWYWxpZGF0b3JLZXlQcm9wcyhrZXksIGZpZWxkUHJvcHNba2V5IGFzIGtleW9mIEZpZWxkUHJvcGVydGllc10sIHR5cGUpO1xuICAgICAgY29uc3QgdmFsaWRhdG9yID0gVmFsaWRhdGlvbi5nZXQodmFsaWRhdG9yS2V5KSBhcyBWYWxpZGF0b3I7XG5cbiAgICAgIC8vIHBhcnNlVmFsdWVCeVR5cGUgZG9lcyBub3Qgc3VwcG9ydCB1bmRlZmluZWQgdmFsdWVzXG4gICAgICBjb25zdCB2YWx1ZSA9IHR5cGVvZiBjb250cm9sLnZhbHVlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHBhcnNlVmFsdWVCeVR5cGUodHlwZSwgdHlwZSA9PT0gSFRNTDVJbnB1dFR5cGVzLkNIRUNLQk9YID8gbmFtZSA6IGNvbnRyb2wudmFsdWUsIGZpZWxkUHJvcHMpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgICAvLyBDcmVhdGUgYSBwcm94eSB0byBlbmFibGUgYWNjZXNzIHRvIHBhcmVudCBhbmQgY2hpbGQgdmFsdWVzXG4gICAgICBsZXQgcHJveHk6IFBhdGhQcm94eTx1bmtub3duPiA9IFZhbGlkYXRvckZhY3RvcnkuY3JlYXRlUHJveHkoe30gYXMgQWJzdHJhY3RDb250cm9sKTtcbiAgICAgIGlmIChPYmplY3QudmFsdWVzKENvbXBhcmlzb25WYWxpZGF0aW9uS2V5cykuaW5jbHVkZXMoa2V5IGFzIENvbXBhcmlzb25WYWxpZGF0aW9uS2V5KSkge1xuICAgICAgICBjb25zdCBwYXJlbnQ6IEZvcm1Hcm91cCA9IGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtR3JvdXAgPyBjb250cm9sIDogKGNvbnRyb2wgYXMgS2V5VmFsdWUpW0FuZ3VsYXJFbmdpbmVLZXlzLlBBUkVOVF07XG4gICAgICAgIHByb3h5ID0gVmFsaWRhdG9yRmFjdG9yeS5jcmVhdGVQcm94eShwYXJlbnQpIGFzIFBhdGhQcm94eTx1bmtub3duPjtcbiAgICAgIH1cblxuICAgICAgbGV0IGVycnM6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKCFwcm9wc1sndHlwZXMnXSAmJiAhcHJvcHNbJ2N1c3RvbVR5cGVzJ10pXG4gICAgICAgICAgcHJvcHNbJ3R5cGVzJ10gPSBwcm9wc1sndHlwZSddO1xuICAgICAgICBlcnJzID0gdmFsaWRhdG9yLmhhc0Vycm9ycyh2YWx1ZSwgcHJvcHMsIHByb3h5KTtcbiAgICAgIH0gY2F0Y2ggKGU6IHVua25vd24pIHtcbiAgICAgICAgZXJycyA9IGAke2tleX0gdmFsaWRhdG9yIGZhaWxlZCB0byB2YWxpZGF0ZTogJHtlfWA7XG4gICAgICAgIGNvbnNvbGUud2FybihlcnJzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVycnMgPyB7IFt2YWxpZGF0b3JLZXldOiB0cnVlIH0gOiBudWxsO1xuICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdG9yRm4sICduYW1lJywge1xuICAgICAgdmFsdWU6IGAke2tleX1WYWxpZGF0b3JgLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhbGlkYXRvckZuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IENyZWF0ZXMgYSBwcm94eSB3cmFwcGVyIGZvciBhbiBBbmd1bGFyIEFic3RyYWN0Q29udHJvbCB0byBhc3Npc3Qgd2l0aCBjdXN0b20gdmFsaWRhdGlvbiBsb2dpYy5cbiAgICogQGRlc2NyaXB0aW9uIFJldHVybnMgYSBzdHJ1Y3R1cmVkIHByb3h5IG9iamVjdCB0aGF0IHNpbXVsYXRlcyBhIGhpZXJhcmNoaWNhbCB0cmVlIG9mIGZvcm0gdmFsdWVzLlxuICAgKiBFbmFibGVzIFZhbGlkYXRvcnMgaGFuZGxpbmcgbWV0aG9kIHRvIGFjY2VzcyBwYXJlbnQgYW5kIGNoaWxkIHByb3BlcnRpZXMgdXNpbmcgY29uc2lzdGVudCBkb3Qtbm90YXRpb24gaW4gQW5ndWxhciBmb3Jtcy5cbiAgICpcbiAgICogQHBhcmFtIHtBYnN0cmFjdENvbnRyb2x9IGNvbnRyb2wgLSBUaGUgY29udHJvbCB0byB3cmFwIGluIGEgcHJveHkuXG4gICAqIEByZXR1cm5zIHtQYXRoUHJveHk8dW5rbm93bj59IEEgcHJveHkgb2JqZWN0IGV4cG9zaW5nIGZvcm0gdmFsdWVzIGFuZCBlbmFibGluZyByZWN1cnNpdmUgcGFyZW50IGFjY2Vzcy5cbiAgICovXG4gIHN0YXRpYyBjcmVhdGVQcm94eShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBQYXRoUHJveHk8dW5rbm93bj4ge1xuICAgIHJldHVybiBQYXRoUHJveHlFbmdpbmUuY3JlYXRlKGNvbnRyb2wsIHtcbiAgICAgIGdldFZhbHVlKHRhcmdldDogQWJzdHJhY3RDb250cm9sLCBwcm9wOiBzdHJpbmcpOiB1bmtub3duIHtcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEZvcm1Db250cm9sKVxuICAgICAgICAgIHJldHVybiB0YXJnZXQudmFsdWU7XG5cbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEZvcm1Hcm91cCkge1xuICAgICAgICAgIGNvbnN0IGNvbnRyb2wgPSB0YXJnZXQuY29udHJvbHNbcHJvcF07XG4gICAgICAgICAgcmV0dXJuIGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCA/IGNvbnRyb2wudmFsdWUgOiBjb250cm9sO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc3QgdmFsdWUgPSB0YXJnZXRbcHJvcF07XG4gICAgICAgIC8vIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEZvcm1Db250cm9sKVxuICAgICAgICAvLyAgIHJldHVybiB2YWx1ZS52YWx1ZTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gaWYgKHZhbHVlIGluc3RhbmNlb2YgRm9ybUdyb3VwKSB7XG4gICAgICAgIC8vICAgY29uc3QgY29udHJvbCA9IHZhbHVlLmNvbnRyb2xzW3Byb3BdO1xuICAgICAgICAvLyAgIHJldHVybiBjb250cm9sIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wgPyBjb250cm9sLnZhbHVlIDogY29udHJvbDtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIHJldHVybiAodGFyZ2V0IGFzIEtleVZhbHVlKT8uW3Byb3BdO1xuICAgICAgfSxcbiAgICAgIGdldFBhcmVudDogZnVuY3Rpb24odGFyZ2V0OiBBYnN0cmFjdENvbnRyb2wpICB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ/LlsnX3BhcmVudCddO1xuICAgICAgfSxcbiAgICAgIGlnbm9yZVVuZGVmaW5lZDogdHJ1ZSxcbiAgICAgIGlnbm9yZU51bGw6IHRydWUsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==