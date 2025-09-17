import { RenderingError } from '@decaf-ts/ui-decorators';
import { InternalError, OperationKeys } from '@decaf-ts/db-decorators';
import { inject } from '@angular/core';
import { NgxFormService } from './NgxFormService';
import { sf } from '@decaf-ts/decorator-validation';
import { TranslateService } from '@ngx-translate/core';
import { EventConstants } from './constants';
/**
 * @class NgxCrudFormField
 * @implements {FieldProperties}
 * @implements {ControlValueAccessor}
 * @summary Abstract class representing a CRUD form field for Angular applications
 * @description This class provides the base implementation for CRUD form fields in Angular,
 * implementing both CrudFormField and ControlValueAccessor interfaces.
 */
export class NgxCrudFormField {
    constructor() {
        this.translateService = inject(TranslateService);
        this.validationErrorEventDispateched = false;
        // protected constructor() {}
        /**
         * @summary String formatting function
         * @description Provides access to the sf function for error message formatting
         * @prop {function(string, ...string): string} sf - String formatting function
         */
        this.sf = sf;
        /**
         * @summary Change callback function
         * @description Function called when the field value changes
         * @property {function(): unknown} onChange - onChange event handler
         */
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        this.onChange = () => { };
        /**
         * @summary Touch callback function
         * @description Function called when the field is touched
         * @property {function(): unknown} onTouch - onTouch event handler
         */
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        this.onTouch = () => { };
    }
    /**
     * @summary Write value to the field
     * @description Sets the value of the field
     * @param {string} obj - The value to be set
     */
    writeValue(obj) {
        this.value = obj;
    }
    /**
     * @summary Register change callback
     * @description Registers a function to be called when the field value changes
     * @param {function(): unknown} fn - The function to be called on change
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @summary Register touch callback
     * @description Registers a function to be called when the field is touched
     * @param {function(): unknown} fn - The function to be called on touch
     */
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    /**
     * @summary Set disabled state
     * @description Sets the disabled state of the field
     * @param {boolean} isDisabled - Whether the field should be disabled
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * @summary After view initialization logic
     * @description Performs necessary setup after the view has been initialized
     * @returns {HTMLElement} The parent element of the field
     */
    afterViewInit() {
        let parent;
        switch (this.operation) {
            case OperationKeys.READ:
            case OperationKeys.DELETE:
                return this.component.nativeElement.parentElement;
            case OperationKeys.CREATE:
            case OperationKeys.UPDATE:
                try {
                    parent = NgxFormService.getParentEl(this.component.nativeElement, 'div');
                }
                catch (e) {
                    throw new RenderingError(`Unable to retrieve parent form element for the ${this.operation}: ${e instanceof Error ? e.message : e}`);
                }
                // NgxFormService.register(parent.id, this.formGroup, this as AngularFieldDefinition);
                return parent;
            default:
                throw new InternalError(`Invalid operation: ${this.operation}`);
        }
    }
    /**
     * @summary Cleanup on component destruction
     * @description Unregisters the field when the component is destroyed
     */
    onDestroy() {
        if (this.formGroup)
            NgxFormService.unregister(this.formGroup);
    }
    /**
     * @summary Get field errors
     * @description Retrieves all errors associated with the field
     * @returns {string|void} An array of error objects
     */
    getErrors(parent) {
        const formControl = this.formControl;
        const accordionComponent = parent.closest('ngx-decaf-fieldset')?.querySelector('ion-accordion-group');
        if ((!formControl.pristine || formControl.touched) && !formControl.valid) {
            const errors = Object.keys(formControl.errors ?? {}).map(key => ({
                key: key,
                message: key,
            }));
            if (errors.length) {
                if (accordionComponent && !this.validationErrorEventDispateched) {
                    const validationErrorEvent = new CustomEvent(EventConstants.VALIDATION_ERROR, {
                        detail: { fieldName: this.name, hasErrors: true },
                        bubbles: true
                    });
                    accordionComponent.dispatchEvent(validationErrorEvent);
                    this.validationErrorEventDispateched = true;
                }
            }
            for (const error of errors)
                return `* ${this.sf(this.translateService.instant(`errors.${error?.['message']}`), this[error?.['key']] ?? "")}`;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmd4Q3J1ZEZvcm1GaWVsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZW5naW5lL05neENydWRGb3JtRmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFzQyxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU3RixPQUFPLEVBQWtCLGFBQWEsRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RixPQUFPLEVBQWMsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU3Qzs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxPQUFnQixnQkFBZ0I7SUFBdEM7UUF3RFkscUJBQWdCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFOUMsb0NBQStCLEdBQVksS0FBSyxDQUFDO1FBUXpELDZCQUE2QjtRQUU3Qjs7OztXQUlHO1FBQ0gsT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUVSOzs7O1dBSUc7UUFDSCxnRUFBZ0U7UUFDaEUsYUFBUSxHQUFrQixHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFFbkM7Ozs7V0FJRztRQUNILGdFQUFnRTtRQUNoRSxZQUFPLEdBQWtCLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztJQW1HcEMsQ0FBQztJQWpHQzs7OztPQUlHO0lBQ0gsVUFBVSxDQUFDLEdBQVc7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxnQkFBZ0IsQ0FBQyxFQUFpQjtRQUNoQyxJQUFJLENB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QUFPLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFVBQVUsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFHLElBQWlCLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ25JLENBQUM7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDcnVkT3BlcmF0aW9uS2V5cywgRmllbGRQcm9wZXJ0aWVzLCBSZW5kZXJpbmdFcnJvciB9IGZyb20gJ0BkZWNhZi10cy91aS1kZWNvcmF0b3JzJztcbmltcG9ydCB7IEtleVZhbHVlLCBQb3NzaWJsZUlucHV0VHlwZXMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IENydWRPcGVyYXRpb25zLCBJbnRlcm5hbEVycm9yLCBPcGVyYXRpb25LZXlzIH0gZnJvbSAnQGRlY2FmLXRzL2RiLWRlY29yYXRvcnMnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBFbGVtZW50UmVmLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi9OZ3hGb3JtU2VydmljZSc7XG5pbXBvcnQgeyBzZiB9IGZyb20gJ0BkZWNhZi10cy9kZWNvcmF0b3ItdmFsaWRhdGlvbic7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBFdmVudENvbnN0YW50cyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBAY2xhc3MgTmd4Q3J1ZEZvcm1GaWVsZFxuICogQGltcGxlbWVudHMge0ZpZWxkUHJvcGVydGllc31cbiAqIEBpbXBsZW1lbnRzIHtDb250cm9sVmFsdWVBY2Nlc3Nvcn1cbiAqIEBzdW1tYXJ5IEFic3RyYWN0IGNsYXNzIHJlcHJlc2VudGluZyBhIENSVUQgZm9ybSBmaWVsZCBmb3IgQW5ndWxhciBhcHBsaWNhdGlvbnNcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIGNsYXNzIHByb3ZpZGVzIHRoZSBiYXNlIGltcGxlbWVudGF0aW9uIGZvciBDUlVEIGZvcm0gZmllbGRzIGluIEFuZ3VsYXIsXG4gKiBpbXBsZW1lbnRpbmcgYm90aCBDcnVkRm9ybUZpZWxkIGFuZCBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VzLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmd4Q3J1ZEZvcm1GaWVsZCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGaWVsZFByb3BlcnRpZXMge1xuICAvKipcbiAgICogQHN1bW1hcnkgUmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQncyBlbGVtZW50XG4gICAqIEBkZXNjcmlwdGlvbiBFbGVtZW50UmVmIHJlcHJlc2VudGluZyB0aGUgY29tcG9uZW50J3MgbmF0aXZlIGVsZW1lbnRcbiAgICovXG4gIGNvbXBvbmVudCE6IEVsZW1lbnRSZWY7XG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IEN1cnJlbnQgQ1JVRCBvcGVyYXRpb25cbiAgICogQGRlc2NyaXB0aW9uIFJlcHJlc2VudHMgdGhlIGN1cnJlbnQgQ1JVRCBvcGVyYXRpb24gYmVpbmcgcGVyZm9ybWVkXG4gICAqL1xuICBvcGVyYXRpb24hOiBDcnVkT3BlcmF0aW9ucztcblxuICAvKipcbiAgICogQHN1bW1hcnkgRm9ybSBncm91cCBmb3IgdGhlIGZpZWxkXG4gICAqIEBkZXNjcmlwdGlvbiBBbmd1bGFyIEZvcm1Hcm91cCBpbnN0YW5jZSBmb3IgdGhlIGZpZWxkXG4gICAqL1xuICBmb3JtR3JvdXAhOiBGb3JtR3JvdXAgfCB1bmRlZmluZWQ7XG5cbiAgZm9ybUNvbnRyb2whOiBGb3JtQ29udHJvbDtcblxuICBuYW1lITogc3RyaW5nO1xuXG4gIHBhdGghOiBzdHJpbmc7XG5cbiAgY2hpbGRPZj86IHN0cmluZztcblxuICB0eXBlITogUG9zc2libGVJbnB1dFR5cGVzO1xuXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcblxuICB1aWQ/OiBzdHJpbmc7XG5cbiAgLy8gVmFsaWRhdGlvblxuXG4gIGZvcm1hdD86IHN0cmluZztcbiAgaGlkZGVuPzogYm9vbGVhbiB8IENydWRPcGVyYXRpb25LZXlzW107XG4gIG1heD86IG51bWJlciB8IERhdGU7XG4gIG1heGxlbmd0aD86IG51bWJlcjtcbiAgbWluPzogbnVtYmVyIHwgRGF0ZTtcbiAgbWlubGVuZ3RoPzogbnVtYmVyO1xuICBwYXR0ZXJuPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICByZWFkb25seT86IGJvb2xlYW47XG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgc3RlcD86IG51bWJlcjtcbiAgZXF1YWxzPzogc3RyaW5nO1xuICBkaWZmZXJlbnQ/OiBzdHJpbmc7XG4gIGxlc3NUaGFuPzogc3RyaW5nO1xuICBsZXNzVGhhbk9yRXF1YWw/OiBzdHJpbmc7XG4gIGdyZWF0ZXJUaGFuPzogc3RyaW5nO1xuICBncmVhdGVyVGhhbk9yRXF1YWw/OiBzdHJpbmc7XG5cbiAgdmFsdWUhOiBzdHJpbmcgfCBudW1iZXIgfCBEYXRlO1xuXG4gIG11bHRpcGxlITogYm9vbGVhbjtcblxuICBwcm90ZWN0ZWQgdHJhbnNsYXRlU2VydmljZSA9IGluamVjdChUcmFuc2xhdGVTZXJ2aWNlKTtcblxuICBwcml2YXRlIHZhbGlkYXRpb25FcnJvckV2ZW50RGlzcGF0ZWNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQHN1bW1hcnkgUGFyZW50IEhUTUwgZWxlbWVudFxuICAgKiBAZGVzY3JpcHRpb24gUmVmZXJlbmNlIHRvIHRoZSBwYXJlbnQgSFRNTCBlbGVtZW50IG9mIHRoZSBmaWVsZFxuICAgKi9cbiAgcHJvdGVjdGVkIHBhcmVudD86IEhUTUxFbGVtZW50O1xuXG4gIC8vIHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IFN0cmluZyBmb3JtYXR0aW5nIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvbiBQcm92aWRlcyBhY2Nlc3MgdG8gdGhlIHNmIGZ1bmN0aW9uIGZvciBlcnJvciBtZXNzYWdlIGZvcm1hdHRpbmdcbiAgICogQHByb3Age2Z1bmN0aW9uKHN0cmluZywgLi4uc3RyaW5nKTogc3RyaW5nfSBzZiAtIFN0cmluZyBmb3JtYXR0aW5nIGZ1bmN0aW9uXG4gICAqL1xuICBzZiA9IHNmO1xuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBDaGFuZ2UgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBmaWVsZCB2YWx1ZSBjaGFuZ2VzXG4gICAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb24oKTogdW5rbm93bn0gb25DaGFuZ2UgLSBvbkNoYW5nZSBldmVudCBoYW5kbGVyXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uXG4gIG9uQ2hhbmdlOiAoKSA9PiB1bmtub3duID0gKCkgPT4ge307XG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IFRvdWNoIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvbiBGdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgZmllbGQgaXMgdG91Y2hlZFxuICAgKiBAcHJvcGVydHkge2Z1bmN0aW9uKCk6IHVua25vd259IG9uVG91Y2ggLSBvblRvdWNoIGV2ZW50IGhhbmRsZXJcbiAgICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb25cbiAgb25Ub3VjaDogKCkgPT4gdW5rbm93biA9ICgpID0+IHt9O1xuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBXcml0ZSB2YWx1ZSB0byB0aGUgZmllbGRcbiAgICogQGRlc2NyaXB0aW9uIFNldHMgdGhlIHZhbHVlIG9mIHRoZSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gb2JqIC0gVGhlIHZhbHVlIHRvIGJlIHNldFxuICAgKi9cbiAgd3JpdGVWYWx1ZShvYmo6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSBvYmo7XG4gIH1cblxuICAvKipcbiAgICogQHN1bW1hcnkgUmVnaXN0ZXIgY2hhbmdlIGNhbGxiYWNrXG4gICAqIEBkZXNjcmlwdGlvbiBSZWdpc3RlcnMgYSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB0aGUgZmllbGQgdmFsdWUgY2hhbmdlc1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCk6IHVua25vd259IGZuIC0gVGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBjaGFuZ2VcbiAgICovXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHVua25vd24pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICAvKipcbiAgICogQHN1bW1hcnkgUmVnaXN0ZXIgdG91Y2ggY2FsbGJhY2tcbiAgICogQGRlc2NyaXB0aW9uIFJlZ2lzdGVycyBhIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBmaWVsZCBpcyB0b3VjaGVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oKTogdW5rbm93bn0gZm4gLSBUaGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIHRvdWNoXG4gICAqL1xuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdW5rbm93bik6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaCA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IFNldCBkaXNhYmxlZCBzdGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgZGlzYWJsZWQgc3RhdGUgb2YgdGhlIGZpZWxkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNEaXNhYmxlZCAtIFdoZXRoZXIgdGhlIGZpZWxkIHNob3VsZCBiZSBkaXNhYmxlZFxuICAgKi9cbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IEFmdGVyIHZpZXcgaW5pdGlhbGl6YXRpb24gbG9naWNcbiAgICogQGRlc2NyaXB0aW9uIFBlcmZvcm1zIG5lY2Vzc2FyeSBzZXR1cCBhZnRlciB0aGUgdmlldyBoYXMgYmVlbiBpbml0aWFsaXplZFxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IFRoZSBwYXJlbnQgZWxlbWVudCBvZiB0aGUgZmllbGRcbiAgICovXG4gIGFmdGVyVmlld0luaXQoKTogSFRNTEVsZW1lbnQge1xuICAgIGxldCBwYXJlbnQ6IEhUTUxFbGVtZW50O1xuICAgIHN3aXRjaCAodGhpcy5vcGVyYXRpb24pIHtcbiAgICAgIGNhc2UgT3BlcmF0aW9uS2V5cy5SRUFEOlxuICAgICAgY2FzZSBPcGVyYXRpb25LZXlzLkRFTEVURTpcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgIGNhc2UgT3BlcmF0aW9uS2V5cy5DUkVBVEU6XG4gICAgICBjYXNlIE9wZXJhdGlvbktleXMuVVBEQVRFOlxuICAgICAgICB0cnkge1xuICAgICAgICAgIHBhcmVudCA9IE5neEZvcm1TZXJ2aWNlLmdldFBhcmVudEVsKHRoaXMuY29tcG9uZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXYnKTtcbiAgICAgICAgfSBjYXRjaCAoZTogdW5rbm93bikge1xuICAgICAgICAgIHRocm93IG5ldyBSZW5kZXJpbmdFcnJvcihgVW5hYmxlIHRvIHJldHJpZXZlIHBhcmVudCBmb3JtIGVsZW1lbnQgZm9yIHRoZSAke3RoaXMub3BlcmF0aW9ufTogJHtlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiBlfWApO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5neEZvcm1TZXJ2aWNlLnJlZ2lzdGVyKHBhcmVudC5pZCwgdGhpcy5mb3JtR3JvdXAsIHRoaXMgYXMgQW5ndWxhckZpZWxkRGVmaW5pdGlvbik7XG4gICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgSW50ZXJuYWxFcnJvcihgSW52YWxpZCBvcGVyYXRpb246ICR7dGhpcy5vcGVyYXRpb259YCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IENsZWFudXAgb24gY29tcG9uZW50IGRlc3RydWN0aW9uXG4gICAqIEBkZXNjcmlwdGlvbiBVbnJlZ2lzdGVycyB0aGUgZmllbGQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZFxuICAgKi9cbiAgb25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmKHRoaXMuZm9ybUdyb3VwKVxuICAgICAgTmd4Rm9ybVNlcnZpY2UudW5yZWdpc3Rlcih0aGlzLmZvcm1Hcm91cCk7XG4gIH1cblxuICAvKipcbiAgICogQHN1bW1hcnkgR2V0IGZpZWxkIGVycm9yc1xuICAgKiBAZGVzY3JpcHRpb24gUmV0cmlldmVzIGFsbCBlcnJvcnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBmaWVsZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfHZvaWR9IEFuIGFycmF5IG9mIGVycm9yIG9iamVjdHNcbiAgICovXG4gIGdldEVycm9ycyhwYXJlbnQ6IEhUTUxFbGVtZW50KTogc3RyaW5nIHwgdm9pZCB7XG4gICAgY29uc3QgZm9ybUNvbnRyb2wgPSB0aGlzLmZvcm1Db250cm9sO1xuICAgIGNvbnN0IGFjY29yZGlvbkNvbXBvbmVudCA9IHBhcmVudC5jbG9zZXN0KCduZ3gtZGVjYWYtZmllbGRzZXQnKT8ucXVlcnlTZWxlY3RvcignaW9uLWFjY29yZGlvbi1ncm91cCcpO1xuICAgIGlmKCghZm9ybUNvbnRyb2wucHJpc3RpbmUgfHwgZm9ybUNvbnRyb2wudG91Y2hlZCkgJiYgIWZvcm1Db250cm9sLnZhbGlkKSB7XG4gICAgICBjb25zdCBlcnJvcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5bXSA9IE9iamVjdC5rZXlzKGZvcm1Db250cm9sLmVycm9ycyA/PyB7fSkubWFwKGtleSA9PiAoe1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgbWVzc2FnZToga2V5LFxuICAgICAgfSkpO1xuICAgICAgaWYoZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICBpZihhY2NvcmRpb25Db21wb25lbnQgJiYgIXRoaXMudmFsaWRhdGlvbkVycm9yRXZlbnREaXNwYXRlY2hlZCkge1xuICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb25FcnJvckV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KEV2ZW50Q29uc3RhbnRzLlZBTElEQVRJT05fRVJST1IsIHtcbiAgICAgICAgICAgIGRldGFpbDoge2ZpZWxkTmFtZTogdGhpcy5uYW1lLCBoYXNFcnJvcnM6IHRydWV9LFxuICAgICAgICAgICAgYnViYmxlczogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGFjY29yZGlvbkNvbXBvbmVudC5kaXNwYXRjaEV2ZW50KHZhbGlkYXRpb25FcnJvckV2ZW50KTtcbiAgICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvckV2ZW50RGlzcGF0ZWNoZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IoY29uc3QgZXJyb3Igb2YgZXJyb3JzKVxuICAgICAgICByZXR1cm4gYCogJHt0aGlzLnNmKHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KGBlcnJvcnMuJHtlcnJvcj8uWydtZXNzYWdlJ119YCksICh0aGlzIGFzIEtleVZhbHVlKVtlcnJvcj8uWydrZXknXV0gPz8gXCJcIil9YDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==