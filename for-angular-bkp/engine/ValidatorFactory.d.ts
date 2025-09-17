import { AbstractControl, ValidatorFn } from '@angular/forms';
import { PathProxy } from '@decaf-ts/decorator-validation';
import { FieldProperties } from '@decaf-ts/ui-decorators';
export declare class ValidatorFactory {
    static spawn(fieldProps: FieldProperties, key: string): ValidatorFn;
    /**
     * @summary Creates a proxy wrapper for an Angular AbstractControl to assist with custom validation logic.
     * @description Returns a structured proxy object that simulates a hierarchical tree of form values.
     * Enables Validators handling method to access parent and child properties using consistent dot-notation in Angular forms.
     *
     * @param {AbstractControl} control - The control to wrap in a proxy.
     * @returns {PathProxy<unknown>} A proxy object exposing form values and enabling recursive parent access.
     */
    static createProxy(control: AbstractControl): PathProxy<unknown>;
}
//# sourceMappingURL=ValidatorFactory.d.ts.map