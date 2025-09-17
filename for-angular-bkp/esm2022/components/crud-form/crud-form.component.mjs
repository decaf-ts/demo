import { __decorate } from "tslib";
import { Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild, } from '@angular/core';
import { Location } from '@angular/common';
import { NgxFormService } from '../../engine/NgxFormService';
import { Dynamic, EventConstants } from '../../engine';
import { OperationKeys } from '@decaf-ts/db-decorators';
import { DefaultFormReactiveOptions } from './constants';
import { ForAngularModule, getLogger } from '../../for-angular.module';
import { IonIcon } from '@ionic/angular/standalone';
import { generateRandomValue } from '../../helpers';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular/standalone";
import * as i2 from "@angular/forms";
const _c0 = ["reactiveForm"];
const _c1 = ["*"];
const _c2 = (a0, a1, a2) => [a0, a1, a2];
function CrudFormComponent_Conditional_0_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-icon", 6);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("slot", ctx_r1.options.buttons.submit.iconSlot)("name", ctx_r1.options.buttons.submit.icon);
} }
function CrudFormComponent_Conditional_0_Conditional_8_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-icon", 6);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("slot", ctx_r1.options.buttons.clear == null ? null : ctx_r1.options.buttons.clear.iconSlot)("name", ctx_r1.options.buttons.clear == null ? null : ctx_r1.options.buttons.clear.icon);
} }
function CrudFormComponent_Conditional_0_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "ion-button", 7);
    i0.ɵɵlistener("click", function CrudFormComponent_Conditional_0_Conditional_8_Template_ion_button_click_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.handleReset()); });
    i0.ɵɵtemplate(2, CrudFormComponent_Conditional_0_Conditional_8_Conditional_2_Template, 1, 2, "ion-icon", 6);
    i0.ɵɵtext(3, " Back ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional((ctx_r1.options.buttons.clear == null ? null : ctx_r1.options.buttons.clear.icon) ? 2 : -1);
} }
function CrudFormComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 3, 0);
    i0.ɵɵlistener("submit", function CrudFormComponent_Conditional_0_Template_form_submit_0_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submit($event)); });
    i0.ɵɵprojection(2, 0, ["#formContent", ""]);
    i0.ɵɵelementStart(3, "div", 4)(4, "div")(5, "ion-button", 5);
    i0.ɵɵtemplate(6, CrudFormComponent_Conditional_0_Conditional_6_Template, 1, 2, "ion-icon", 6);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(8, CrudFormComponent_Conditional_0_Conditional_8_Template, 4, 1, "div");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", ctx_r1.rendererId)("formGroup", ctx_r1.formGroup)("target", ctx_r1.target);
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(ctx_r1.options.buttons.submit.icon ? 6 : -1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.action ? ctx_r1.action : ctx_r1.options.buttons.submit.text, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(!ctx_r1.action ? 8 : -1);
} }
function CrudFormComponent_Conditional_1_Conditional_1_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-icon", 6);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("slot", ctx_r1.options.buttons.submit.iconSlot)("name", ctx_r1.options.buttons.submit.icon);
} }
function CrudFormComponent_Conditional_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "ion-button", 9);
    i0.ɵɵlistener("click", function CrudFormComponent_Conditional_1_Conditional_1_Template_ion_button_click_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.handleDelete()); });
    i0.ɵɵtemplate(2, CrudFormComponent_Conditional_1_Conditional_1_Conditional_2_Template, 1, 2, "ion-icon", 6);
    i0.ɵɵtext(3, " Delete ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.options.buttons.submit.icon ? 2 : -1);
} }
function CrudFormComponent_Conditional_1_Conditional_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-icon", 6);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("slot", ctx_r1.options.buttons.submit.iconSlot)("name", ctx_r1.options.buttons.submit.icon);
} }
function CrudFormComponent_Conditional_1_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "ion-button", 5);
    i0.ɵɵtemplate(2, CrudFormComponent_Conditional_1_Conditional_2_Conditional_2_Template, 1, 2, "ion-icon", 6);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.options.buttons.submit.icon ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.options.buttons.submit.text, " ");
} }
function CrudFormComponent_Conditional_1_Conditional_3_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-icon", 6);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("slot", ctx_r1.options.buttons.clear == null ? null : ctx_r1.options.buttons.clear.iconSlot)("name", ctx_r1.options.buttons.clear == null ? null : ctx_r1.options.buttons.clear.icon);
} }
function CrudFormComponent_Conditional_1_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "ion-button", 7);
    i0.ɵɵlistener("click", function CrudFormComponent_Conditional_1_Conditional_3_Template_ion_button_click_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.handleReset()); });
    i0.ɵɵtemplate(2, CrudFormComponent_Conditional_1_Conditional_3_Conditional_2_Template, 1, 2, "ion-icon", 6);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional((ctx_r1.options.buttons.clear == null ? null : ctx_r1.options.buttons.clear.icon) ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpureFunction3(2, _c2, ctx_r1.OperationKeys.DELETE, ctx_r1.OperationKeys.READ, ctx_r1.OperationKeys.UPDATE).includes(ctx_r1.operation) ? "Back" : ctx_r1.options.buttons.clear == null ? null : ctx_r1.options.buttons.clear.text, " ");
} }
function CrudFormComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, CrudFormComponent_Conditional_1_Conditional_1_Template, 4, 1, "div")(2, CrudFormComponent_Conditional_1_Conditional_2_Template, 4, 2, "div")(3, CrudFormComponent_Conditional_1_Conditional_3_Template, 4, 6, "div");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMap("dcf-buttons-container dcf-grid dcf-grid-collapse dcf-flex dcf-flex-left " + ctx_r1.operation);
    i0.ɵɵproperty("id", ctx_r1.uid);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.operation === ctx_r1.OperationKeys.READ && ctx_r1.modelId ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.operation === ctx_r1.OperationKeys.CREATE || ctx_r1.operation === ctx_r1.OperationKeys.UPDATE ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.options.buttons.clear ? 3 : -1);
} }
/**
 * @component CrudFormComponent
 * @example <ngx-decaf-crud-form
 *   action="create"
 *   operation="create"
 *   formGroup="formGroup"
 *   rendererId="rendererId"
 *   submitEvent="submitEvent"
 *   target="_self"
 *   method="event">
 * </ngx-decaf-crud-form>
 *
 * @param {string} action - The action to be performed (create, read, update, delete)
 * @param {CrudOperations} operation - The CRUD operation being performed (create, read, update, delete)
 * @param {FormGroup} formGroup - The form group
 * @param {string} rendererId - The renderer id
 * @param {SubmitEvent} submitEvent - The submit event
 * @param {string} target - The target
 * @param {string} method - The method
 */
let CrudFormComponent = class CrudFormComponent {
    constructor() {
        /**
         * @description Field update trigger mode for form validation.
         * @summary Determines when form field validation should be triggered. Options include
         * 'change', 'blur', or 'submit'. This affects the user experience by controlling
         * when validation feedback is shown to the user during form interaction.
         *
         * @type {FieldUpdateMode}
         * @default 'change'
         * @memberOf CrudFormComponent
         */
        this.updateOn = 'change';
        /**
         * @description Form submission target specification.
         * @summary Specifies where to display the response after form submission, similar
         * to the HTML form target attribute. Options include '_self', '_blank', '_parent',
         * '_top', or a named frame. Controls the browser behavior for form responses.
         *
         * @type {HTMLFormTarget}
         * @default '_self'
         * @memberOf CrudFormComponent
         */
        this.target = '_self';
        /**
         * @description HTTP method or submission strategy for the form.
         * @summary Defines how the form should be submitted. 'get' and 'post' correspond
         * to standard HTTP methods for traditional form submission, while 'event' uses
         * Angular event-driven submission for single-page application workflows.
         *
         * @type {'get' | 'post' | 'event'}
         * @default 'event'
         * @memberOf CrudFormComponent
         */
        this.method = 'event';
        /**
         * @description Unique identifier for the current record.
         * @summary A unique identifier for the current record being displayed or manipulated.
         * This is typically used in conjunction with the primary key for operations on specific records.
         *
         * @type {string | number}
         * @memberOf CrudFormComponent
         */
        this.uid = generateRandomValue(12);
        /**
         * @description Unique identifier for the current record instance.
         * @summary This property holds a unique string value that identifies the specific record being managed by the form.
         * It is automatically generated if not provided, ensuring each form instance has a distinct identifier.
         * The uid is used for tracking, referencing, and emitting events related to the current record, and may be used
         * in conjunction with the primary key for CRUD operations.
         *
         * @type {string}
         * @default Randomly generated 12-character string
         * @memberOf CrudFormComponent
         */
        this.allowClear = true;
        /**
         * @description Reference to CRUD operation constants for template usage.
         * @summary Exposes the OperationKeys enum to the component template, enabling
         * conditional rendering and behavior based on operation types. This protected
         * readonly property ensures that template logic can access operation constants
         * while maintaining encapsulation and preventing accidental modification.
         *
         * @protected
         * @readonly
         * @memberOf CrudFormComponent
         */
        this.OperationKeys = OperationKeys;
        /**
         * @description Event emitter for form submission events.
         * @summary Emits CrudFormEvent objects when the form is submitted, providing
         * form data, component information, and any associated handlers to parent
         * components. This enables decoupled handling of form submission logic.
         *
         * @type {EventEmitter<CrudFormEvent>}
         * @memberOf CrudFormComponent
         */
        this.submitEvent = new EventEmitter();
        /**
         * @description Angular Location service.
         * @summary Injected service that provides access to the browser's URL and history.
         * This service is used for interacting with the browser's history API, allowing
         * for back navigation and URL manipulation outside of Angular's router.
         *
         * @private
         * @type {Location}
         * @memberOf CrudFormComponent
         */
        this.location = inject(Location);
    }
    // ngAfterViewInit() {
    // if (![OperationKeys.READ, OperationKeys.DELETE].includes(this.operation))
    //   NgxFormService.formAfterViewInit(this, this.rendererId);
    // }
    /**
     * @description Component initialization lifecycle method.
     * @summary Initializes the component by setting up the logger, configuring form state
     * based on the operation type, and merging configuration options. For READ and DELETE
     * operations, the formGroup is set to undefined since these operations don't require
     * form input. Configuration options are merged with default settings.
     *
     * @returns {Promise<void>}
     * @memberOf CrudFormComponent
     */
    async ngOnInit() {
        if (!this.logger)
            this.logger = getLogger(this);
        if (this.operation === OperationKeys.READ || this.operation === OperationKeys.DELETE)
            this.formGroup = undefined;
        this.options = Object.assign({}, DefaultFormReactiveOptions, this.options || {});
    }
    /**
     * @description Component cleanup lifecycle method.
     * @summary Performs cleanup operations when the component is destroyed.
     * Unregisters the FormGroup from the NgxFormService to prevent memory leaks
     * and ensure proper resource cleanup.
     *
     * @returns {void}
     * @memberOf CrudFormComponent
     */
    ngOnDestroy() {
        if (this.formGroup)
            NgxFormService.unregister(this.formGroup);
    }
    /**
     * @description Handles form submission with validation and event emission.
     * @summary Processes form submission by first preventing default browser behavior,
     * then validating all form fields using NgxFormService. If validation passes,
     * extracts form data and emits a submitEvent with the data, component information,
     * and any associated handlers. Returns false if validation fails.
     *
     * @param {SubmitEvent} event - The browser's native form submit event
     * @returns {Promise<boolean | void>} Returns false if validation fails, void if successful
     * @memberOf CrudFormComponent
     */
    async submit(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (!NgxFormService.validateFields(this.formGroup))
            return false;
        const data = NgxFormService.getFormData(this.formGroup);
        this.submitEvent.emit({
            data,
            component: 'CrudFormComponent',
            name: this.action || EventConstants.SUBMIT,
            handlers: this.handlers,
        });
    }
    /**
     * @description Handles form reset or navigation back functionality.
     * @summary Provides different reset behavior based on the current operation.
     * For CREATE and UPDATE operations, resets the form to its initial state.
     * For READ and DELETE operations, navigates back in the browser history
     * since these operations don't have modifiable form data to reset.
     *
     * @returns {void}
     * @memberOf CrudFormComponent
     */
    handleReset() {
        if (![OperationKeys.DELETE, OperationKeys.READ].includes(this.operation) && this.allowClear)
            return NgxFormService.reset(this.formGroup);
        this.location.back();
    }
    /**
     * @description Handles delete operations by emitting delete events.
     * @summary Processes delete requests by emitting a submit event with the
     * record's unique identifier as data. This allows parent components to
     * handle the actual deletion logic while maintaining separation of concerns.
     * The event includes the uid and standard component identification.
     *
     * @returns {void}
     * @memberOf CrudFormComponent
     */
    handleDelete() {
        this.submitEvent.emit({
            data: this.modelId,
            component: 'CrudFormComponent',
            name: EventConstants.SUBMIT,
        });
    }
    static { this.ɵfac = function CrudFormComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CrudFormComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CrudFormComponent, selectors: [["ngx-decaf-crud-form"]], viewQuery: function CrudFormComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.component = _t.first);
        } }, hostVars: 1, hostBindings: function CrudFormComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("id", ctx.uid);
        } }, inputs: { model: "model", modelId: "modelId", updateOn: "updateOn", target: "target", method: "method", options: "options", action: "action", operation: "operation", handlers: "handlers", formGroup: "formGroup", childOf: "childOf", rendererId: "rendererId", uid: "uid", allowClear: "allowClear" }, outputs: { submitEvent: "submitEvent" }, standalone: true, features: [i0.ɵɵStandaloneFeature], ngContentSelectors: _c1, decls: 2, vars: 1, consts: [["reactiveForm", ""], ["novalidate", "", 3, "id", "formGroup", "target"], [3, "class", "id"], ["novalidate", "", 3, "submit", "id", "formGroup", "target"], [1, "dcf-buttons-container", "dcf-grid", "dcf-grid-collapse", "dcf-flex", "dcf-flex-left"], ["type", "submit"], ["aria-hidden", "true", 3, "slot", "name"], ["fill", "clear", 3, "click"], [3, "id"], ["color", "danger", "type", "button", 3, "click"]], template: function CrudFormComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, CrudFormComponent_Conditional_0_Template, 9, 6, "form", 1)(1, CrudFormComponent_Conditional_1_Template, 4, 6, "div", 2);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.operation !== "read" && ctx.operation !== "delete" ? 0 : 1);
        } }, dependencies: [ForAngularModule, i1.IonButton, i2.ɵNgNoValidate, i2.NgControlStatusGroup, i2.FormGroupDirective, IonIcon], styles: [".dcf-buttons-container[_ngcontent-%COMP%]{margin-top:1.8rem;margin-bottom:0}@media (min-width: 991px){.dcf-buttons-container.dcf-flex[_ngcontent-%COMP%]{flex-direction:row-reverse}}@media (max-width: 990px){.dcf-buttons-container.dcf-flex[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%}.dcf-buttons-container.dcf-flex[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:100%;margin-bottom:1rem}}form[_ngcontent-%COMP%]{padding:2rem 1rem}"] }); }
};
CrudFormComponent = __decorate([
    Dynamic()
], CrudFormComponent);
export { CrudFormComponent };
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CrudFormComponent, [{
        type: Component,
        args: [{ standalone: true, selector: 'ngx-decaf-crud-form', imports: [ForAngularModule, IonIcon], host: { '[attr.id]': 'uid' }, template: "@if(operation !== 'read' && operation !== 'delete') {\n  <form #reactiveForm [id]=\"rendererId\" [formGroup]=\"formGroup\" (submit)=\"submit($event)\" novalidate [target]=\"target\">\n    <ng-content #formContent></ng-content>\n    <div class=\"dcf-buttons-container dcf-grid dcf-grid-collapse dcf-flex dcf-flex-left\">\n      <div>\n        <ion-button\n          type=\"submit\">\n          @if(options.buttons.submit.icon) {\n            <ion-icon aria-hidden=\"true\" [slot]=\"options.buttons.submit.iconSlot\" [name]=\"options.buttons.submit.icon\"></ion-icon>\n          }\n          {{ action ? action : options.buttons.submit.text}}\n        </ion-button>\n      </div>\n      @if(!action) {\n        <div>\n          <ion-button fill=\"clear\" (click)=\"handleReset()\">\n            @if(options.buttons.clear?.icon) {\n              <ion-icon  aria-hidden=\"true\" [slot]=\"options.buttons.clear?.iconSlot\" [name]=\"options.buttons.clear?.icon\"></ion-icon>\n            }\n            Back\n          </ion-button>\n        </div>\n      }\n    </div>\n  </form>\n} @else {\n  <div [class]=\"'dcf-buttons-container dcf-grid dcf-grid-collapse dcf-flex dcf-flex-left ' + operation\" [id]=\"uid\">\n    @if(operation === OperationKeys.READ && modelId) {\n      <div>\n        <ion-button\n          (click)=\"handleDelete()\"\n          color=\"danger\"\n          type=\"button\">\n          @if(options.buttons.submit.icon) {\n            <ion-icon aria-hidden=\"true\" [slot]=\"options.buttons.submit.iconSlot\" [name]=\"options.buttons.submit.icon\"></ion-icon>\n          }\n          Delete\n        </ion-button>\n      </div>\n\n    }\n    @if(operation === OperationKeys.CREATE || operation === OperationKeys.UPDATE) {\n\n      <div>\n        <ion-button\n          type=\"submit\">\n          @if(options.buttons.submit.icon) {\n            <ion-icon aria-hidden=\"true\" [slot]=\"options.buttons.submit.iconSlot\" [name]=\"options.buttons.submit.icon\"></ion-icon>\n          }\n          {{options.buttons.submit.text}}\n        </ion-button>\n      </div>\n    }\n\n    @if(options.buttons.clear) {\n      <div>\n       <ion-button fill=\"clear\" (click)=\"handleReset()\">\n          @if(options.buttons.clear?.icon) {\n            <ion-icon  aria-hidden=\"true\" [slot]=\"options.buttons.clear?.iconSlot\" [name]=\"options.buttons.clear?.icon\"></ion-icon>\n          }\n          {{ [OperationKeys.DELETE, OperationKeys.READ, OperationKeys.UPDATE].includes(operation) ? 'Back' : options.buttons.clear?.text}}\n        </ion-button>\n      </div>\n\n    }\n  </div>\n}\n\n", styles: [".dcf-buttons-container{margin-top:1.8rem;margin-bottom:0}@media (min-width: 991px){.dcf-buttons-container.dcf-flex{flex-direction:row-reverse}}@media (max-width: 990px){.dcf-buttons-container.dcf-flex div{width:100%}.dcf-buttons-container.dcf-flex ion-button{width:100%;margin-bottom:1rem}}form{padding:2rem 1rem}\n"] }]
    }], null, { model: [{
            type: Input
        }], modelId: [{
            type: Input
        }], updateOn: [{
            type: Input
        }], component: [{
            type: ViewChild,
            args: ['reactiveForm', { static: false, read: ElementRef }]
        }], target: [{
            type: Input
        }], method: [{
            type: Input
        }], options: [{
            type: Input
        }], action: [{
            type: Input
        }], operation: [{
            type: Input,
            args: [{ required: true }]
        }], handlers: [{
            type: Input
        }], formGroup: [{
            type: Input
        }], childOf: [{
            type: Input
        }], rendererId: [{
            type: Input
        }], uid: [{
            type: Input
        }], allowClear: [{
            type: Input
        }], submitEvent: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CrudFormComponent, { className: "CrudFormComponent", filePath: "components/crud-form/crud-form.component.ts", lineNumber: 109 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J1ZC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9jcnVkLWZvcm0vY3J1ZC1mb3JtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9jcnVkLWZvcm0vY3J1ZC1mb3JtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUczQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFpQixPQUFPLEVBQUUsY0FBYyxFQUErRCxNQUFNLGNBQWMsQ0FBQztBQUVuSSxPQUFPLEVBQWtCLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBR3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7SUNmeEMsOEJBQXNIOzs7SUFBaEQsQUFBekMsNkRBQXdDLDRDQUFxQzs7O0lBU3hHLDhCQUF1SDs7O0lBQWhELEFBQXpDLDBHQUF3Qyx5RkFBcUM7Ozs7SUFGL0csQUFERiwyQkFBSyxvQkFDOEM7SUFBeEIsd01BQVMsb0JBQWEsS0FBQztJQUM5QywyR0FBa0M7SUFHbEMsc0JBQ0Y7SUFDRixBQURFLGlCQUFhLEVBQ1Q7OztJQUxGLGVB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QUUsSUFBSSxDQUFDLE9BQU87WUFDbEIsU0FBUyxFQUFFLG1CQUFtQjtZQUM5QixJQUFJLEVBQUUsY0FBYyxDQUFDLE1BQU07U0FDNUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztrSEFuVlUsaUJBQWlCO29FQUFqQixpQkFBaUI7bUNBaURzQixVQUFVOzs7Ozs7OztZQ3BJNUQsQUF6QkYsMkVBQXFELDZEQXlCNUM7O1lBekJULGdGQWtFQzs0QkRkVyxnQkFBZ0Isa0ZBQUUsT0FBTzs7QUF3RHhCLGlCQUFpQjtJQTlEN0IsT0FBTyxFQUFFO0dBOERHLGlCQUFpQixDQXFWN0I7O2lGQXJWWSxpQkFBaUI7Y0E3RDdCLFNBQVM7NkJBQ0ksSUFBSSxZQUNOLHFCQUFxQixXQUd0QixDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxRQUM5QixFQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUM7Z0JBa0UxQixLQUFLO2tCQURKLEtBQUs7WUFlTixPQUFPO2tCQUROLEtBQUs7WUFjTixRQUFRO2tCQURQLEtBQUs7WUFhTixTQUFTO2tCQURSLFNBQVM7bUJBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBYzlELE1BQU07a0JBREwsS0FBSztZQWNOLE1BQU07a0JBREwsS0FBSztZQWFOLE9BQU87a0JBRE4sS0FBSztZQWFOLE1BQU07a0JBREwsS0FBSztZQWNOLFNBQVM7a0JBRFIsS0FBSzttQkFBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7WUFhekIsUUFBUTtrQkFEUCxLQUFLO1lBYU4sU0FBUztrQkFEUixLQUFLO1lBV04sT0FBTztrQkFETixLQUFLO1lBYU4sVUFBVTtrQkFEVCxLQUFLO1lBWU4sR0FBRztrQkFERixLQUFLO1lBZ0JOLFVBQVU7a0JBRFQsS0FBSztZQTJCTixXQUFXO2tCQURWLE1BQU07O2tGQWxOSSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgaW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElGb3JtRWxlbWVudCB9IGZyb20gJy4uLy4uL2VuZ2luZS9pbnRlcmZhY2VzJztcbmltcG9ydCB7IE5neEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZW5naW5lL05neEZvcm1TZXJ2aWNlJztcbmltcG9ydCB7IENydWRGb3JtRXZlbnQsIER5bmFtaWMsIEV2ZW50Q29uc3RhbnRzLCBGaWVsZFVwZGF0ZU1vZGUsIEhhbmRsZXJMaWtlLCBIVE1MRm9ybVRhcmdldCwgUmVuZGVyZWRNb2RlbCB9IGZyb20gJy4uLy4uL2VuZ2luZSc7XG5pbXBvcnQgeyBDcnVkRm9ybU9wdGlvbnMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IENydWRPcGVyYXRpb25zLCBPcGVyYXRpb25LZXlzIH0gZnJvbSAnQGRlY2FmLXRzL2RiLWRlY29yYXRvcnMnO1xuaW1wb3J0IHsgRGVmYXVsdEZvcm1SZWFjdGl2ZU9wdGlvbnMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBGb3JBbmd1bGFyTW9kdWxlLCBnZXRMb2dnZXIgfSBmcm9tICcuLi8uLi9mb3ItYW5ndWxhci5tb2R1bGUnO1xuaW1wb3J0IHsgSW9uSWNvbiB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyL3N0YW5kYWxvbmUnO1xuaW1wb3J0IHsgTW9kZWwgfSBmcm9tICdAZGVjYWYtdHMvZGVjb3JhdG9yLXZhbGlkYXRpb24nO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnQGRlY2FmLXRzL2xvZ2dpbmcnO1xuaW1wb3J0IHsgZ2VuZXJhdGVSYW5kb21WYWx1ZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG5cbi8qKlxuICogQGNvbXBvbmVudCBDcnVkRm9ybUNvbXBvbmVudFxuICogQGV4YW1wbGUgPG5neC1kZWNhZi1jcnVkLWZvcm1cbiAqICAgYWN0aW9uPVwiY3JlYXRlXCJcbiAqICAgb3BlcmF0aW9uPVwiY3JlYXRlXCJcbiAqICAgZm9ybUdyb3VwPVwiZm9ybUdyb3VwXCJcbiAqICAgcmVuZGVyZXJJZD1cInJlbmRlcmVySWRcIlxuICogICBzdWJtaXRFdmVudD1cInN1Ym1pdEV2ZW50XCJcbiAqICAgdGFyZ2V0PVwiX3NlbGZcIlxuICogICBtZXRob2Q9XCJldmVudFwiPlxuICogPC9uZ3gtZGVjYWYtY3J1ZC1mb3JtPlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gLSBUaGUgYWN0aW9uIHRvIGJlIHBlcmZvcm1lZCAoY3JlYXRlLCByZWFkLCB1cGRhdGUsIGRlbGV0ZSlcbiAqIEBwYXJhbSB7Q3J1ZE9wZXJhdGlvbnN9IG9wZXJhdGlvbiAtIFRoZSBDUlVEIG9wZXJhdGlvbiBiZWluZyBwZXJmb3JtZWQgKGNyZWF0ZSwgcmVhZCwgdXBkYXRlLCBkZWxldGUpXG4gKiBAcGFyYW0ge0Zvcm1Hcm91cH0gZm9ybUdyb3VwIC0gVGhlIGZvcm0gZ3JvdXBcbiAqIEBwYXJhbSB7c3RyaW5nfSByZW5kZXJlcklkIC0gVGhlIHJlbmRlcmVyIGlkXG4gKiBAcGFyYW0ge1N1Ym1pdEV2ZW50fSBzdWJtaXRFdmVudCAtIFRoZSBzdWJtaXQgZXZlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YXJnZXQgLSBUaGUgdGFyZ2V0XG4gKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIC0gVGhlIG1ldGhvZFxuICovXG5ARHluYW1pYygpXG5AQ29tcG9uZW50KHtcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgc2VsZWN0b3I6ICduZ3gtZGVjYWYtY3J1ZC1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NydWQtZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NydWQtZm9ybS5jb21wb25lbnQuc2NzcyddLFxuICBpbXBvcnRzOiBbRm9yQW5ndWxhck1vZHVsZSwgSW9uSWNvbl0sXG4gIGhvc3Q6IHsnW2F0dHIuaWRdJzogJ3VpZCd9LFxufSlcbi8qKlxuICogQGNsYXNzIENydWRGb3JtQ29tcG9uZW50XG4gKiBAaW1wbGVtZW50cyBPbkluaXQsIElGb3JtRWxlbWVudCwgT25EZXN0cm95LCBSZW5kZXJlZE1vZGVsXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgYENydWRGb3JtQ29tcG9uZW50YCBpcyBhbiBBbmd1bGFyIGNvbXBvbmVudCBkZXNpZ25lZCB0byBwcm92aWRlIGEgZmxleGlibGUgYW5kIGV4dGVuc2libGUgZm9ybSBpbnRlcmZhY2UgZm9yIHBlcmZvcm1pbmcgQ1JVRCAoQ3JlYXRlLCBSZWFkLCBVcGRhdGUsIERlbGV0ZSkgb3BlcmF0aW9ucyBvbiBhIGRhdGEgbW9kZWwuIEl0IGludGVncmF0ZXMgd2l0aCBBbmd1bGFyJ3MgcmVhY3RpdmUgZm9ybXMgYW5kIHN1cHBvcnRzIGFkdmFuY2VkIGNvbmZpZ3VyYXRpb24sIHZhbGlkYXRpb24sIGFuZCBldmVudCBoYW5kbGluZyBmb3IgYSB3aWRlIHJhbmdlIG9mIHVzZSBjYXNlcy5cbiAqXG4gKiBAc3VtbWFyeVxuICogLSBTdXBwb3J0cyBkeW5hbWljIGZvcm0gcmVuZGVyaW5nIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBkYXRhIG1vZGVsIGFuZCBvcGVyYXRpb24gdHlwZS5cbiAqIC0gSGFuZGxlcyBmb3JtIHZhbGlkYXRpb24sIHN1Ym1pc3Npb24sIGFuZCByZXNldCBsb2dpYyB3aXRoIGN1c3RvbWl6YWJsZSBiZWhhdmlvci5cbiAqIC0gRW1pdHMgc3RydWN0dXJlZCBldmVudHMgZm9yIGZvcm0gYWN0aW9ucywgZW5hYmxpbmcgZGVjb3VwbGVkIGJ1c2luZXNzIGxvZ2ljLlxuICogLSBJbnRlZ3JhdGVzIHdpdGggZXh0ZXJuYWwgc2VydmljZXMgZm9yIGxvZ2dpbmcsIGZvcm0gbWFuYWdlbWVudCwgYW5kIG5hdmlnYXRpb24uXG4gKiAtIFByb3ZpZGVzIGV4dGVuc2l2ZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIGZvcm0gYXBwZWFyYW5jZSBhbmQgYmVoYXZpb3IuXG4gKlxuICogQGlucHV0c1xuICogLSBgbW9kZWxgOiBUaGUgcmVwb3NpdG9yeSBtb2RlbCBmb3IgZGF0YSBvcGVyYXRpb25zLlxuICogLSBgbW9kZWxJZGA6IFRoZSBwcmltYXJ5IGRhdGEgbW9kZWwgaW5zdGFuY2UgZm9yIENSVUQgb3BlcmF0aW9ucy5cbiAqIC0gYHVwZGF0ZU9uYDogRGV0ZXJtaW5lcyB3aGVuIGZvcm0gZmllbGQgdmFsaWRhdGlvbiBpcyB0cmlnZ2VyZWQgKGBjaGFuZ2VgLCBgYmx1cmAsIG9yIGBzdWJtaXRgKS5cbiAqIC0gYGNvbXBvbmVudGA6IFJlZmVyZW5jZSB0byB0aGUgcmVhY3RpdmUgZm9ybSBET00gZWxlbWVudC5cbiAqIC0gYHRhcmdldGA6IFNwZWNpZmllcyB0aGUgZm9ybSBzdWJtaXNzaW9uIHRhcmdldCAoZS5nLiwgYF9zZWxmYCwgYF9ibGFua2ApLlxuICogLSBgbWV0aG9kYDogRGVmaW5lcyB0aGUgZm9ybSBzdWJtaXNzaW9uIHN0cmF0ZWd5IChgZ2V0YCwgYHBvc3RgLCBvciBgZXZlbnRgKS5cbiAqIC0gYG9wdGlvbnNgOiBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIGZvcm0gYmVoYXZpb3IgYW5kIHJlbmRlcmluZy5cbiAqIC0gYGFjdGlvbmA6IE9wdGlvbmFsIGN1c3RvbSBhY3Rpb24gaWRlbnRpZmllciBmb3Igc3VibWlzc2lvbiBjb250ZXh0LlxuICogLSBgb3BlcmF0aW9uYDogVGhlIGN1cnJlbnQgQ1JVRCBvcGVyYXRpb24gYmVpbmcgcGVyZm9ybWVkIChyZXF1aXJlZCkuXG4gKiAtIGBoYW5kbGVyc2A6IEN1c3RvbSBldmVudCBoYW5kbGVycyBmb3IgZm9ybSBhY3Rpb25zLlxuICogLSBgZm9ybUdyb3VwYDogQW5ndWxhciBGb3JtR3JvdXAgZm9yIGZvcm0gc3RhdGUgbWFuYWdlbWVudC5cbiAqIC0gYGNoaWxkT2ZgOiBQYXRoIHRvIHRoZSBwYXJlbnQgRm9ybUdyb3VwIGlmIG5lc3RlZC5cbiAqIC0gYHJlbmRlcmVySWRgOiBVbmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGZvcm0gcmVuZGVyZXIuXG4gKiAtIGB1aWRgOiBVbmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGN1cnJlbnQgcmVjb3JkLlxuICogLSBgYWxsb3dDbGVhcmA6IEVuYWJsZXMgb3IgZGlzYWJsZXMgZm9ybSBjbGVhcmluZyBmdW5jdGlvbmFsaXR5LlxuICpcbiAqIEBvdXRwdXRzXG4gKiAtIGBzdWJtaXRFdmVudGA6IEVtaXRzIGBDcnVkRm9ybUV2ZW50YCBvYmplY3RzIG9uIGZvcm0gc3VibWlzc2lvbi5cbiAqXG4gKiBAcHJvdGVjdGVkXG4gKiAtIGBPcGVyYXRpb25LZXlzYDogUmVmZXJlbmNlIHRvIENSVUQgb3BlcmF0aW9uIGNvbnN0YW50cyBmb3IgdGVtcGxhdGUgdXNhZ2UuXG4gKlxuICogQHByaXZhdGVcbiAqIC0gYGxvZ2dlcmA6IExvZ2dlciBpbnN0YW5jZSBmb3Igc3RydWN0dXJlZCBsb2dnaW5nLlxuICogLSBgbG9jYXRpb25gOiBBbmd1bGFyIExvY2F0aW9uIHNlcnZpY2UgZm9yIG5hdmlnYXRpb24uXG4gKlxuICogQGxpZmVjeWNsZVxuICogLSBgbmdPbkluaXRgOiBJbml0aWFsaXplcyB0aGUgY29tcG9uZW50LCBjb25maWd1cmVzIGxvZ2dlciwgbWVyZ2VzIG9wdGlvbnMsIGFuZCBzZXRzIGZvcm0gc3RhdGUgYmFzZWQgb24gb3BlcmF0aW9uLlxuICogLSBgbmdPbkRlc3Ryb3lgOiBDbGVhbnMgdXAgcmVzb3VyY2VzIGFuZCB1bnJlZ2lzdGVycyB0aGUgRm9ybUdyb3VwLlxuICpcbiAqIEBtZXRob2RzXG4gKiAtIGBzdWJtaXQoZXZlbnQ6IFN1Ym1pdEV2ZW50KWA6IEhhbmRsZXMgZm9ybSBzdWJtaXNzaW9uLCB2YWxpZGF0aW9uLCBhbmQgZXZlbnQgZW1pc3Npb24uXG4gKiAtIGBoYW5kbGVSZXNldCgpYDogUmVzZXRzIHRoZSBmb3JtIG9yIG5hdmlnYXRlcyBiYWNrIGJhc2VkIG9uIHRoZSBvcGVyYXRpb24uXG4gKiAtIGBoYW5kbGVEZWxldGUoKWA6IEVtaXRzIGEgZGVsZXRlIGV2ZW50IGZvciB0aGUgY3VycmVudCByZWNvcmQuXG4gKlxuICogQHVzYWdlXG4gKiBVc2UgdGhpcyBjb21wb25lbnQgd2l0aGluIEFuZ3VsYXIgdGVtcGxhdGVzIHRvIHByb3ZpZGUgYSByb2J1c3QgQ1JVRCBmb3JtIGludGVyZmFjZS4gQ29uZmlndXJlIGlucHV0cyB0byBtYXRjaCB5b3VyIGRhdGEgbW9kZWwgYW5kIGRlc2lyZWQgYmVoYXZpb3IsIGFuZCBoYW5kbGUgb3V0cHV0IGV2ZW50cyB0byBpbXBsZW1lbnQgY3VzdG9tIGJ1c2luZXNzIGxvZ2ljLlxuICovXG5leHBvcnQgY2xhc3MgQ3J1ZEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElGb3JtRWxlbWVudCwgT25EZXN0cm95LCBSZW5kZXJlZE1vZGVsIHtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFJlcG9zaXRvcnkgbW9kZWwgZm9yIGRhdGEgb3BlcmF0aW9ucy5cbiAgICogQHN1bW1hcnkgVGhlIGRhdGEgbW9kZWwgcmVwb3NpdG9yeSB0aGF0IHRoaXMgY29tcG9uZW50IHdpbGwgdXNlIGZvciBDUlVEIG9wZXJhdGlvbnMuXG4gICAqIFRoaXMgcHJvdmlkZXMgYSBjb25uZWN0aW9uIHRvIHRoZSBkYXRhIGxheWVyIGZvciByZXRyaWV2aW5nIGFuZCBtYW5pcHVsYXRpbmcgZGF0YS5cbiAgICpcbiAgICogQHR5cGUge01vZGVsfCB1bmRlZmluZWR9XG4gICAqIEBtZW1iZXJPZiBDcnVkRm9ybUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgbW9kZWwhOiBNb2RlbCB8IHVuZGVmaW5lZDtcblxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhlIHByaW1hcnkgZGF0YSBtb2RlbCB1c2VkIGZvciBDUlVEIG9wZXJhdGlvbnMuXG4gICAqIEBzdW1tYXJ5IFRoaXMgaW5wdXQgcHJvdmlkZXMgdGhlIG1haW4gTW9kZWwgaW5zdGFuY2UgdGhhdCB0aGUgZm9ybSBpbnRlcmFjdHMgd2l0aCBmb3JcbiAgICogY3JlYXRpbmcsIHJlYWRpbmcsIHVwZGF0aW5nLCBvciBkZWxldGluZyByZWNvcmRzLiBJdCBzZXJ2ZXMgYXMgdGhlIHNvdXJjZSBvZiBzY2hlbWFcbiAgICogYW5kIHZhbGlkYXRpb24gcnVsZXMgZm9yIHRoZSBmb3JtIGZpZWxkcywgYW5kIGlzIHJlcXVpcmVkIGZvciBtb3N0IG9wZXJhdGlvbnMgZXhjZXB0XG4gICAqIGZvciBjZXJ0YWluIHJlYWQgb3IgZGVsZXRlIHNjZW5hcmlvcy5cbiAgICpcbiAgICogQHR5cGUge01vZGVsIHwgdW5kZWZpbmVkfVxuICAgKiBAbWVtYmVyT2YgQ3J1ZEZvcm1Db21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1vZGVsSWQhOiBNb2RlbCB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEZpZWxkIHVwZGF0ZSB0cmlnZ2VyIG1vZGUgZm9yIGZvcm0gdmFsaWRhdGlvbi5cbiAgICogQHN1bW1hcnkgRGV0ZXJtaW5lcyB3aGVuIGZvcm0gZmllbGQgdmFsaWRhdGlvbiBzaG91bGQgYmUgdHJpZ2dlcmVkLiBPcHRpb25zIGluY2x1ZGVcbiAgICogJ2NoYW5nZScsICdibHVyJywgb3IgJ3N1Ym1pdCcuIFRoaXMgYWZmZWN0cyB0aGUgdXNlciBleHBlcmllbmNlIGJ5IGNvbnRyb2xsaW5nXG4gICAqIHdoZW4gdmFsaWRhdGlvbiBmZWVkYmFjayBpcyBzaG93biB0byB0aGUgdXNlciBkdXJpbmcgZm9ybSBpbnRlcmFjdGlvbi5cbiAgICpcbiAgICogQHR5cGUge0ZpZWxkVXBkYXRlTW9kZX1cbiAgICogQGRlZmF1bHQgJ2NoYW5nZSdcbiAgICogQG1lbWJlck9mIENydWRGb3JtQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICB1cGRhdGVPbjogRmllbGRVcGRhdGVNb2RlID0gJ2NoYW5nZSc7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBSZWZlcmVuY2UgdG8gdGhlIHJlYWN0aXZlIGZvcm0gRE9NIGVsZW1lbnQuXG4gICAqIEBzdW1tYXJ5IFZpZXdDaGlsZCByZWZlcmVuY2UgdGhhdCBwcm92aWRlcyBkaXJlY3QgYWNjZXNzIHRvIHRoZSBmb3JtJ3MgRE9NIGVsZW1lbnQuXG4gICAqIFRoaXMgZW5hYmxlcyBwcm9ncmFtbWF0aWMgbWFuaXB1bGF0aW9uIG9mIHRoZSBmb3JtIGVsZW1lbnQgYW5kIGFjY2VzcyB0byBuYXRpdmVcbiAgICogSFRNTCBmb3JtIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgd2hlbiBuZWVkZWQuXG4gICAqXG4gICAqIEB0eXBlIHtFbGVtZW50UmVmfVxuICAgKiBAbWVtYmVyT2YgQ3J1ZEZvcm1Db21wb25lbnRcbiAgICovXG4gIEBWaWV3Q2hpbGQoJ3JlYWN0aXZlRm9ybScsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogRWxlbWVudFJlZiB9KVxuICBjb21wb25lbnQhOiBFbGVtZW50UmVmO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gRm9ybSBzdWJtaXNzaW9uIHRhcmdldCBzcGVjaWZpY2F0aW9uLlxuICAgKiBAc3VtbWFyeSBTcGVjaWZpZXMgd2hlcmUgdG8gZGlzcGxheSB0aGUgcmVzcG9uc2UgYWZ0ZXIgZm9ybSBzdWJtaXNzaW9uLCBzaW1pbGFyXG4gICAqIHRvIHRoZSBIVE1MIGZvcm0gdGFyZ2V0IGF0dHJpYnV0ZS4gT3B0aW9ucyBpbmNsdWRlICdfc2VsZicsICdfYmxhbmsnLCAnX3BhcmVudCcsXG4gICAqICdfdG9wJywgb3IgYSBuYW1lZCBmcmFtZS4gQ29udHJvbHMgdGhlIGJyb3dzZXIgYmVoYXZpb3IgZm9yIGZvcm0gcmVzcG9uc2VzLlxuICAgKlxuICAgKiBAdHlwZSB7SFRNTEZvcm1UYXJnZXR9XG4gICAqIEBkZWZhdWx0ICdfc2VsZidcbiAgICogQG1lbWJlck9mIENydWRGb3JtQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICB0YXJnZXQ6IEhUTUxGb3JtVGFyZ2V0ID0gJ19zZWxmJztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEhUVFAgbWV0aG9kIG9yIHN1Ym1pc3Npb24gc3RyYXRlZ3kgZm9yIHRoZSBmb3JtLlxuICAgKiBAc3VtbWFyeSBEZWZpbmVzIGhvdyB0aGUgZm9ybSBzaG91bGQgYmUgc3VibWl0dGVkLiAnZ2V0JyBhbmQgJ3Bvc3QnIGNvcnJlc3BvbmRcbiAgICogdG8gc3RhbmRhcmQgSFRUUCBtZXRob2RzIGZvciB0cmFkaXRpb25hbCBmb3JtIHN1Ym1pc3Npb24sIHdoaWxlICdldmVudCcgdXNlc1xuICAgKiBBbmd1bGFyIGV2ZW50LWRyaXZlbiBzdWJtaXNzaW9uIGZvciBzaW5nbGUtcGFnZSBhcHBsaWNhdGlvbiB3b3JrZmxvd3MuXG4gICAqXG4gICAqIEB0eXBlIHsnZ2V0JyB8ICdwb3N0JyB8ICdldmVudCd9XG4gICAqIEBkZWZhdWx0ICdldmVudCdcbiAgICogQG1lbWJlck9mIENydWRGb3JtQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBtZXRob2Q6ICdnZXQnIHwgJ3Bvc3QnIHwgJ2V2ZW50JyA9ICdldmVudCc7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBDUlVEIGZvcm0gYmVoYXZpb3IuXG4gICAqIEBzdW1tYXJ5IENvbnRhaW5zIHZhcmlvdXMgY29uZmlndXJhdGlvbiBzZXR0aW5ncyB0aGF0IGNvbnRyb2wgZm9ybSByZW5kZXJpbmcsXG4gICAqIHZhbGlkYXRpb24sIGFuZCBiZWhhdmlvci4gVGhlc2Ugb3B0aW9ucyBhcmUgbWVyZ2VkIHdpdGggZGVmYXVsdCBzZXR0aW5nc1xuICAgKiBkdXJpbmcgY29tcG9uZW50IGluaXRpYWxpemF0aW9uIHRvIGN1c3RvbWl6ZSB0aGUgZm9ybSdzIGZ1bmN0aW9uYWxpdHkuXG4gICAqXG4gICAqIEB0eXBlIHtDcnVkRm9ybU9wdGlvbnN9XG4gICAqIEBtZW1iZXJPZiBDcnVkRm9ybUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgb3B0aW9ucyE6IENydWRGb3JtT3B0aW9ucztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIE9wdGlvbmFsIGFjdGlvbiBpZGVudGlmaWVyIGZvciBmb3JtIHN1Ym1pc3Npb24gY29udGV4dC5cbiAgICogQHN1bW1hcnkgU3BlY2lmaWVzIGEgY3VzdG9tIGFjdGlvbiBuYW1lIHRoYXQgd2lsbCBiZSBpbmNsdWRlZCBpbiB0aGUgc3VibWl0IGV2ZW50LlxuICAgKiBJZiBub3QgcHJvdmlkZWQsIGRlZmF1bHRzIHRvIHRoZSBzdGFuZGFyZCBzdWJtaXQgZXZlbnQgY29uc3RhbnQuIFVzZWQgdG9cbiAgICogZGlzdGluZ3Vpc2ggYmV0d2VlbiBkaWZmZXJlbnQgdHlwZXMgb2YgZm9ybSBzdWJtaXNzaW9ucyB3aXRoaW4gdGhlIHNhbWUgY29tcG9uZW50LlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nIHwgdW5kZWZpbmVkfVxuICAgKiBAbWVtYmVyT2YgQ3J1ZEZvcm1Db21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGFjdGlvbj86IHN0cmluZztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFRoZSBjdXJyZW50IENSVUQgb3BlcmF0aW9uIGJlaW5nIHBlcmZvcm1lZC5cbiAgICogQHN1bW1hcnkgU3BlY2lmaWVzIHRoZSB0eXBlIG9mIG9wZXJhdGlvbiB0aGlzIGZvcm0gaXMgaGFuZGxpbmcgKENSRUFURSwgUkVBRCwgVVBEQVRFLCBERUxFVEUpLlxuICAgKiBUaGlzIGlzIGEgcmVxdWlyZWQgaW5wdXQgdGhhdCBkZXRlcm1pbmVzIGZvcm0gYmVoYXZpb3IsIHZhbGlkYXRpb24gcnVsZXMsIGFuZCBhdmFpbGFibGUgYWN0aW9ucy5cbiAgICogVGhlIG9wZXJhdGlvbiBhZmZlY3RzIGZvcm0gc3RhdGUsIGJ1dHRvbiB2aXNpYmlsaXR5LCBhbmQgc3VibWlzc2lvbiBsb2dpYy5cbiAgICpcbiAgICogQHR5cGUge0NydWRPcGVyYXRpb25zfVxuICAgKiBAcmVxdWlyZWRcbiAgICogQG1lbWJlck9mIENydWRGb3JtQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoeyByZXF1aXJlZDogdHJ1ZSB9KVxuICBvcGVyYXRpb24hOiBDcnVkT3BlcmF0aW9ucztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEN1c3RvbSBldmVudCBoYW5kbGVycyBmb3IgZm9ybSBhY3Rpb25zLlxuICAgKiBAc3VtbWFyeSBBIHJlY29yZCBvZiBldmVudCBoYW5kbGVyIGZ1bmN0aW9ucyBrZXllZCBieSBldmVudCBuYW1lcyB0aGF0IGNhbiBiZVxuICAgKiB0cmlnZ2VyZWQgZHVyaW5nIGZvcm0gb3BlcmF0aW9ucy4gVGhlc2UgaGFuZGxlcnMgcHJvdmlkZSBleHRlbnNpYmlsaXR5IGZvclxuICAgKiBjdXN0b20gYnVzaW5lc3MgbG9naWMgYW5kIGNhbiBiZSBpbnZva2VkIGZvciB2YXJpb3VzIGZvcm0gZXZlbnRzIGFuZCBhY3Rpb25zLlxuICAgKlxuICAgKiBAdHlwZSB7SGFuZGxlckxpa2V9XG4gICAqIEBtZW1iZXJPZiBDcnVkRm9ybUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgaGFuZGxlcnMhOiBIYW5kbGVyTGlrZTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEFuZ3VsYXIgcmVhY3RpdmUgRm9ybUdyb3VwIGZvciBmb3JtIHN0YXRlIG1hbmFnZW1lbnQuXG4gICAqIEBzdW1tYXJ5IFRoZSBGb3JtR3JvdXAgaW5zdGFuY2UgdGhhdCBtYW5hZ2VzIGFsbCBmb3JtIGNvbnRyb2xzLCB2YWxpZGF0aW9uLFxuICAgKiBhbmQgZm9ybSBzdGF0ZS4gVGhpcyBpcyB0aGUgbWFpbiBpbnRlcmZhY2UgZm9yIGFjY2Vzc2luZyBmb3JtIHZhbHVlcyBhbmRcbiAgICogY29udHJvbGxpbmcgZm9ybSBiZWhhdmlvci4gTWF5IGJlIHVuZGVmaW5lZCBmb3IgcmVhZC1vbmx5IG9wZXJhdGlvbnMuXG4gICAqXG4gICAqIEB0eXBlIHtGb3JtR3JvdXAgfCB1bmRlZmluZWR9XG4gICAqIEBtZW1iZXJPZiBDcnVkRm9ybUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgZm9ybUdyb3VwITogRm9ybUdyb3VwIHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUGF0aCB0byB0aGUgcGFyZW50IEZvcm1Hcm91cCwgaWYgbmVzdGVkLlxuICAgKiBAc3VtbWFyeSBGdWxsIGRvdC1kZWxpbWl0ZWQgcGF0aCBvZiB0aGUgcGFyZW50IEZvcm1Hcm91cC4gU2V0IG9ubHkgd2hlbiBpcyBwYXJ0IG9mIGEgbmVzdGVkIHN0cnVjdHVyZS5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlck9mIENydWRGb3JtQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBjaGlsZE9mPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBmb3JtIHJlbmRlcmVyLlxuICAgKiBAc3VtbWFyeSBBIHVuaXF1ZSBzdHJpbmcgaWRlbnRpZmllciB1c2VkIHRvIHJlZ2lzdGVyIGFuZCBtYW5hZ2UgdGhpcyBmb3JtXG4gICAqIGluc3RhbmNlIHdpdGhpbiB0aGUgTmd4Rm9ybVNlcnZpY2UuIFRoaXMgSUQgaXMgYWxzbyB1c2VkIGFzIHRoZSBIVE1MIGlkXG4gICAqIGF0dHJpYnV0ZSBmb3IgdGhlIGZvcm0gZWxlbWVudCwgZW5hYmxpbmcgRE9NIHF1ZXJpZXMgYW5kIGZvcm0gbWFuYWdlbWVudC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlck9mIENydWRGb3JtQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICByZW5kZXJlcklkITogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBjdXJyZW50IHJlY29yZC5cbiAgICogQHN1bW1hcnkgQSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGN1cnJlbnQgcmVjb3JkIGJlaW5nIGRpc3BsYXllZCBvciBtYW5pcHVsYXRlZC5cbiAgICogVGhpcyBpcyB0eXBpY2FsbHkgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBwcmltYXJ5IGtleSBmb3Igb3BlcmF0aW9ucyBvbiBzcGVjaWZpYyByZWNvcmRzLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAbWVtYmVyT2YgQ3J1ZEZvcm1Db21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHVpZDogc3RyaW5nID0gZ2VuZXJhdGVSYW5kb21WYWx1ZSgxMik7XG5cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgY3VycmVudCByZWNvcmQgaW5zdGFuY2UuXG4gICAqIEBzdW1tYXJ5IFRoaXMgcHJvcGVydHkgaG9sZHMgYSB1bmlxdWUgc3RyaW5nIHZhbHVlIHRoYXQgaWRlbnRpZmllcyB0aGUgc3BlY2lmaWMgcmVjb3JkIGJlaW5nIG1hbmFnZWQgYnkgdGhlIGZvcm0uXG4gICAqIEl0IGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGlmIG5vdCBwcm92aWRlZCwgZW5zdXJpbmcgZWFjaCBmb3JtIGluc3RhbmNlIGhhcyBhIGRpc3RpbmN0IGlkZW50aWZpZXIuXG4gICAqIFRoZSB1aWQgaXMgdXNlZCBmb3IgdHJhY2tpbmcsIHJlZmVyZW5jaW5nLCBhbmQgZW1pdHRpbmcgZXZlbnRzIHJlbGF0ZWQgdG8gdGhlIGN1cnJlbnQgcmVjb3JkLCBhbmQgbWF5IGJlIHVzZWRcbiAgICogaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgcHJpbWFyeSBrZXkgZm9yIENSVUQgb3BlcmF0aW9ucy5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgUmFuZG9tbHkgZ2VuZXJhdGVkIDEyLWNoYXJhY3RlciBzdHJpbmdcbiAgICogQG1lbWJlck9mIENydWRGb3JtQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBhbGxvd0NsZWFyOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFJlZmVyZW5jZSB0byBDUlVEIG9wZXJhdGlvbiBjb25zdGFudHMgZm9yIHRlbXBsYXRlIHVzYWdlLlxuICAgKiBAc3VtbWFyeSBFeHBvc2VzIHRoZSBPcGVyYXRpb25LZXlzIGVudW0gdG8gdGhlIGNvbXBvbmVudCB0ZW1wbGF0ZSwgZW5hYmxpbmdcbiAgICogY29uZGl0aW9uYWwgcmVuZGVyaW5nIGFuZCBiZWhhdmlvciBiYXNlZCBvbiBvcGVyYXRpb24gdHlwZXMuIFRoaXMgcHJvdGVjdGVkXG4gICAqIHJlYWRvbmx5IHByb3BlcnR5IGVuc3VyZXMgdGhhdCB0ZW1wbGF0ZSBsb2dpYyBjYW4gYWNjZXNzIG9wZXJhdGlvbiBjb25zdGFudHNcbiAgICogd2hpbGUgbWFpbnRhaW5pbmcgZW5jYXBzdWxhdGlvbiBhbmQgcHJldmVudGluZyBhY2NpZGVudGFsIG1vZGlmaWNhdGlvbi5cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmVhZG9ubHlcbiAgICogQG1lbWJlck9mIENydWRGb3JtQ29tcG9uZW50XG4gICAqL1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgT3BlcmF0aW9uS2V5cyA9IE9wZXJhdGlvbktleXM7XG5cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEV2ZW50IGVtaXR0ZXIgZm9yIGZvcm0gc3VibWlzc2lvbiBldmVudHMuXG4gICAqIEBzdW1tYXJ5IEVtaXRzIENydWRGb3JtRXZlbnQgb2JqZWN0cyB3aGVuIHRoZSBmb3JtIGlzIHN1Ym1pdHRlZCwgcHJvdmlkaW5nXG4gICAqIGZvcm0gZGF0YSwgY29tcG9uZW50IGluZm9ybWF0aW9uLCBhbmQgYW55IGFzc29jaWF0ZWQgaGFuZGxlcnMgdG8gcGFyZW50XG4gICAqIGNvbXBvbmVudHMuIFRoaXMgZW5hYmxlcyBkZWNvdXBsZWQgaGFuZGxpbmcgb2YgZm9ybSBzdWJtaXNzaW9uIGxvZ2ljLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPENydWRGb3JtRXZlbnQ+fVxuICAgKiBAbWVtYmVyT2YgQ3J1ZEZvcm1Db21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBzdWJtaXRFdmVudDogRXZlbnRFbWl0dGVyPENydWRGb3JtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxDcnVkRm9ybUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gTG9nZ2VyIGluc3RhbmNlIGZvciB0aGUgY29tcG9uZW50LlxuICAgKiBAc3VtbWFyeSBQcm92aWRlcyBsb2dnaW5nIGNhcGFiaWxpdGllcyBmb3IgdGhlIGNvbXBvbmVudCwgYWxsb3dpbmcgZm9yIGNvbnNpc3RlbnRcbiAgICogYW5kIHN0cnVjdHVyZWQgbG9nZ2luZyBvZiBpbmZvcm1hdGlvbiwgd2FybmluZ3MsIGFuZCBlcnJvcnMuIFRoaXMgbG9nZ2VyIGlzIGluaXRpYWxpemVkXG4gICAqIGluIHRoZSBuZ09uSW5pdCBtZXRob2QgdXNpbmcgdGhlIGdldExvZ2dlciBmdW5jdGlvbiBmcm9tIHRoZSBGb3JBbmd1bGFyTW9kdWxlLlxuICAgKlxuICAgKiBUaGUgbG9nZ2VyIGlzIHVzZWQgdGhyb3VnaG91dCB0aGUgY29tcG9uZW50IHRvIHJlY29yZCBpbXBvcnRhbnQgZXZlbnRzLCBkZWJ1ZyBpbmZvcm1hdGlvbixcbiAgICogYW5kIHBvdGVudGlhbCBpc3N1ZXMuIEl0IGhlbHBzIGluIG1vbml0b3JpbmcgdGhlIGNvbXBvbmVudCdzIGJlaGF2aW9yLCB0cmFja2luZyB0aGUgZmxvd1xuICAgKiBvZiBvcGVyYXRpb25zLCBhbmQgZmFjaWxpdGF0aW5nIGVhc2llciBkZWJ1Z2dpbmcgYW5kIG1haW50ZW5hbmNlLlxuICAgKlxuICAgKiBAdHlwZSB7TG9nZ2VyfVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyT2YgQ3J1ZEZvcm1Db21wb25lbnRcbiAgICovXG4gIHByaXZhdGUgbG9nZ2VyITogTG9nZ2VyO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQW5ndWxhciBMb2NhdGlvbiBzZXJ2aWNlLlxuICAgKiBAc3VtbWFyeSBJbmplY3RlZCBzZXJ2aWNlIHRoYXQgcHJvdmlkZXMgYWNjZXNzIHRvIHRoZSBicm93c2VyJ3MgVVJMIGFuZCBoaXN0b3J5LlxuICAgKiBUaGlzIHNlcnZpY2UgaXMgdXNlZCBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgYnJvd3NlcidzIGhpc3RvcnkgQVBJLCBhbGxvd2luZ1xuICAgKiBmb3IgYmFjayBuYXZpZ2F0aW9uIGFuZCBVUkwgbWFuaXB1bGF0aW9uIG91dHNpZGUgb2YgQW5ndWxhcidzIHJvdXRlci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge0xvY2F0aW9ufVxuICAgKiBAbWVtYmVyT2YgQ3J1ZEZvcm1Db21wb25lbnRcbiAgICovXG4gIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uID0gaW5qZWN0KExvY2F0aW9uKTtcblxuICAvLyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gaWYgKCFbT3BlcmF0aW9uS2V5cy5SRUFELCBPcGVyYXRpb25LZXlzLkRFTEVURV0uaW5jbHVkZXModGhpcy5vcGVyYXRpb24pKVxuICAgIC8vICAgTmd4Rm9ybVNlcnZpY2UuZm9ybUFmdGVyVmlld0luaXQodGhpcywgdGhpcy5yZW5kZXJlcklkKTtcbiAgLy8gfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ29tcG9uZW50IGluaXRpYWxpemF0aW9uIGxpZmVjeWNsZSBtZXRob2QuXG4gICAqIEBzdW1tYXJ5IEluaXRpYWxpemVzIHRoZSBjb21wb25lbnQgYnkgc2V0dGluZyB1cCB0aGUgbG9nZ2VyLCBjb25maWd1cmluZyBmb3JtIHN0YXRlXG4gICAqIGJhc2VkIG9uIHRoZSBvcGVyYXRpb24gdHlwZSwgYW5kIG1lcmdpbmcgY29uZmlndXJhdGlvbiBvcHRpb25zLiBGb3IgUkVBRCBhbmQgREVMRVRFXG4gICAqIG9wZXJhdGlvbnMsIHRoZSBmb3JtR3JvdXAgaXMgc2V0IHRvIHVuZGVmaW5lZCBzaW5jZSB0aGVzZSBvcGVyYXRpb25zIGRvbid0IHJlcXVpcmVcbiAgICogZm9ybSBpbnB1dC4gQ29uZmlndXJhdGlvbiBvcHRpb25zIGFyZSBtZXJnZWQgd2l0aCBkZWZhdWx0IHNldHRpbmdzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICogQG1lbWJlck9mIENydWRGb3JtQ29tcG9uZW50XG4gICAqL1xuICBhc3luYyBuZ09uSW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIXRoaXMubG9nZ2VyKVxuICAgICAgdGhpcy5sb2dnZXIgPSBnZXRMb2dnZXIodGhpcyk7XG4gICAgaWYgKHRoaXMub3BlcmF0aW9uID09PSBPcGVyYXRpb25LZXlzLlJFQUQgfHwgdGhpcy5vcGVyYXRpb24gPT09IE9wZXJhdGlvbktleXMuREVMRVRFKVxuICAgICAgdGhpcy5mb3JtR3JvdXAgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgRGVmYXVsdEZvcm1SZWFjdGl2ZU9wdGlvbnMsXG4gICAgICB0aGlzLm9wdGlvbnMgfHwge30sXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ29tcG9uZW50IGNsZWFudXAgbGlmZWN5Y2xlIG1ldGhvZC5cbiAgICogQHN1bW1hcnkgUGVyZm9ybXMgY2xlYW51cCBvcGVyYXRpb25zIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXG4gICAqIFVucmVnaXN0ZXJzIHRoZSBGb3JtR3JvdXAgZnJvbSB0aGUgTmd4Rm9ybVNlcnZpY2UgdG8gcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICogYW5kIGVuc3VyZSBwcm9wZXIgcmVzb3VyY2UgY2xlYW51cC5cbiAgICpcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqIEBtZW1iZXJPZiBDcnVkRm9ybUNvbXBvbmVudFxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwKVxuICAgICAgTmd4Rm9ybVNlcnZpY2UudW5yZWdpc3Rlcih0aGlzLmZvcm1Hcm91cCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEhhbmRsZXMgZm9ybSBzdWJtaXNzaW9uIHdpdGggdmFsaWRhdGlvbiBhbmQgZXZlbnQgZW1pc3Npb24uXG4gICAqIEBzdW1tYXJ5IFByb2Nlc3NlcyBmb3JtIHN1Ym1pc3Npb24gYnkgZmlyc3QgcHJldmVudGluZyBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3IsXG4gICAqIHRoZW4gdmFsaWRhdGluZyBhbGwgZm9ybSBmaWVsZHMgdXNpbmcgTmd4Rm9ybVNlcnZpY2UuIElmIHZhbGlkYXRpb24gcGFzc2VzLFxuICAgKiBleHRyYWN0cyBmb3JtIGRhdGEgYW5kIGVtaXRzIGEgc3VibWl0RXZlbnQgd2l0aCB0aGUgZGF0YSwgY29tcG9uZW50IGluZm9ybWF0aW9uLFxuICAgKiBhbmQgYW55IGFzc29jaWF0ZWQgaGFuZGxlcnMuIFJldHVybnMgZmFsc2UgaWYgdmFsaWRhdGlvbiBmYWlscy5cbiAgICpcbiAgICogQHBhcmFtIHtTdWJtaXRFdmVudH0gZXZlbnQgLSBUaGUgYnJvd3NlcidzIG5hdGl2ZSBmb3JtIHN1Ym1pdCBldmVudFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuIHwgdm9pZD59IFJldHVybnMgZmFsc2UgaWYgdmFsaWRhdGlvbiBmYWlscywgdm9pZCBpZiBzdWNjZXNzZnVsXG4gICAqIEBtZW1iZXJPZiBDcnVkRm9ybUNvbXBvbmVudFxuICAgKi9cbiAgYXN5bmMgc3VibWl0KGV2ZW50OiBTdWJtaXRFdmVudCk6IFByb21pc2U8Ym9vbGVhbiB8IHZvaWQ+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGlmICghTmd4Rm9ybVNlcnZpY2UudmFsaWRhdGVGaWVsZHModGhpcy5mb3JtR3JvdXAgYXMgRm9ybUdyb3VwKSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBkYXRhID0gTmd4Rm9ybVNlcnZpY2UuZ2V0Rm9ybURhdGEodGhpcy5mb3JtR3JvdXAgYXMgRm9ybUdyb3VwKTtcbiAgICB0aGlzLnN1Ym1pdEV2ZW50LmVtaXQoe1xuICAgICAgZGF0YSxcbiAgICAgIGNvbXBvbmVudDogJ0NydWRGb3JtQ29tcG9uZW50JyxcbiAgICAgIG5hbWU6IHRoaXMuYWN0aW9uIHx8IEV2ZW50Q29uc3RhbnRzLlNVQk1JVCxcbiAgICAgIGhhbmRsZXJzOiB0aGlzLmhhbmRsZXJzLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBIYW5kbGVzIGZvcm0gcmVzZXQgb3IgbmF2aWdhdGlvbiBiYWNrIGZ1bmN0aW9uYWxpdHkuXG4gICAqIEBzdW1tYXJ5IFByb3ZpZGVzIGRpZmZlcmVudCByZXNldCBiZWhhdmlvciBiYXNlZCBvbiB0aGUgY3VycmVudCBvcGVyYXRpb24uXG4gICAqIEZvciBDUkVBVEUgYW5kIFVQREFURSBvcGVyYXRpb25zLCByZXNldHMgdGhlIGZvcm0gdG8gaXRzIGluaXRpYWwgc3RhdGUuXG4gICAqIEZvciBSRUFEIGFuZCBERUxFVEUgb3BlcmF0aW9ucywgbmF2aWdhdGVzIGJhY2sgaW4gdGhlIGJyb3dzZXIgaGlzdG9yeVxuICAgKiBzaW5jZSB0aGVzZSBvcGVyYXRpb25zIGRvbid0IGhhdmUgbW9kaWZpYWJsZSBmb3JtIGRhdGEgdG8gcmVzZXQuXG4gICAqXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKiBAbWVtYmVyT2YgQ3J1ZEZvcm1Db21wb25lbnRcbiAgICovXG4gIGhhbmRsZVJlc2V0KCk6IHZvaWQge1xuICAgIGlmKCFbT3BlcmF0aW9uS2V5cy5ERUxFVEUsIE9wZXJhdGlvbktleXMuUkVBRF0uaW5jbHVkZXModGhpcy5vcGVyYXRpb24pICYmIHRoaXMuYWxsb3dDbGVhcilcbiAgICAgIHJldHVybiBOZ3hGb3JtU2VydmljZS5yZXNldCh0aGlzLmZvcm1Hcm91cCBhcyBGb3JtR3JvdXApO1xuICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBIYW5kbGVzIGRlbGV0ZSBvcGVyYXRpb25zIGJ5IGVtaXR0aW5nIGRlbGV0ZSBldmVudHMuXG4gICAqIEBzdW1tYXJ5IFByb2Nlc3NlcyBkZWxldGUgcmVxdWVzdHMgYnkgZW1pdHRpbmcgYSBzdWJtaXQgZXZlbnQgd2l0aCB0aGVcbiAgICogcmVjb3JkJ3MgdW5pcXVlIGlkZW50aWZpZXIgYXMgZGF0YS4gVGhpcyBhbGxvd3MgcGFyZW50IGNvbXBvbmVudHMgdG9cbiAgICogaGFuZGxlIHRoZSBhY3R1YWwgZGVsZXRpb24gbG9naWMgd2hpbGUgbWFpbnRhaW5pbmcgc2VwYXJhdGlvbiBvZiBjb25jZXJucy5cbiAgICogVGhlIGV2ZW50IGluY2x1ZGVzIHRoZSB1aWQgYW5kIHN0YW5kYXJkIGNvbXBvbmVudCBpZGVudGlmaWNhdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqIEBtZW1iZXJPZiBDcnVkRm9ybUNvbXBvbmVudFxuICAgKi9cbiAgaGFuZGxlRGVsZXRlKCk6IHZvaWQge1xuICAgIHRoaXMuc3VibWl0RXZlbnQuZW1pdCh7XG4gICAgICBkYXRhOiB0aGlzLm1vZGVsSWQsXG4gICAgICBjb21wb25lbnQ6ICdDcnVkRm9ybUNvbXBvbmVudCcsXG4gICAgICBuYW1lOiBFdmVudENvbnN0YW50cy5TVUJNSVQsXG4gICAgfSk7XG4gIH1cblxufVxuIiwiQGlmKG9wZXJhdGlvbiAhPT0gJ3JlYWQnICYmIG9wZXJhdGlvbiAhPT0gJ2RlbGV0ZScpIHtcbiAgPGZvcm0gI3JlYWN0aXZlRm9ybSBbaWRdPVwicmVuZGVyZXJJZFwiIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgKHN1Ym1pdCk9XCJzdWJtaXQoJGV2ZW50KVwiIG5vdmFsaWRhdGUgW3RhcmdldF09XCJ0YXJnZXRcIj5cbiAgICA8bmctY29udGVudCAjZm9ybUNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDxkaXYgY2xhc3M9XCJkY2YtYnV0dG9ucy1jb250YWluZXIgZGNmLWdyaWQgZGNmLWdyaWQtY29sbGFwc2UgZGNmLWZsZXggZGNmLWZsZXgtbGVmdFwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlvbi1idXR0b25cbiAgICAgICAgICB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgQGlmKG9wdGlvbnMuYnV0dG9ucy5zdWJtaXQuaWNvbikge1xuICAgICAgICAgICAgPGlvbi1pY29uIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIFtzbG90XT1cIm9wdGlvbnMuYnV0dG9ucy5zdWJtaXQuaWNvblNsb3RcIiBbbmFtZV09XCJvcHRpb25zLmJ1dHRvbnMuc3VibWl0Lmljb25cIj48L2lvbi1pY29uPlxuICAgICAgICAgIH1cbiAgICAgICAgICB7eyBhY3Rpb24gPyBhY3Rpb24gOiBvcHRpb25zLmJ1dHRvbnMuc3VibWl0LnRleHR9fVxuICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIEBpZighYWN0aW9uKSB7XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlvbi1idXR0b24gZmlsbD1cImNsZWFyXCIgKGNsaWNrKT1cImhhbmRsZVJlc2V0KClcIj5cbiAgICAgICAgICAgIEBpZihvcHRpb25zLmJ1dHRvbnMuY2xlYXI/Lmljb24pIHtcbiAgICAgICAgICAgICAgPGlvbi1pY29uICBhcmlhLWhpZGRlbj1cInRydWVcIiBbc2xvdF09XCJvcHRpb25zLmJ1dHRvbnMuY2xlYXI/Lmljb25TbG90XCIgW25hbWVdPVwib3B0aW9ucy5idXR0b25zLmNsZWFyPy5pY29uXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEJhY2tcbiAgICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvZGl2PlxuICA8L2Zvcm0+XG59IEBlbHNlIHtcbiAgPGRpdiBbY2xhc3NdPVwiJ2RjZi1idXR0b25zLWNvbnRhaW5lciBkY2YtZ3JpZCBkY2YtZ3JpZC1jb2xsYXBzZSBkY2YtZmxleCBkY2YtZmxleC1sZWZ0ICcgKyBvcGVyYXRpb25cIiBbaWRdPVwidWlkXCI+XG4gICAgQGlmKG9wZXJhdGlvbiA9PT0gT3BlcmF0aW9uS2V5cy5SRUFEICYmIG1vZGVsSWQpIHtcbiAgICAgIDxkaXY+XG4gICAgICAgIDxpb24tYnV0dG9uXG4gICAgICAgICAgKGNsaWNrKT1cImhhbmRsZURlbGV0ZSgpXCJcbiAgICAgICAgICBjb2xvcj1cImRhbmdlclwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgIEBpZihvcHRpb25zLmJ1dHRvbnMuc3VibWl0Lmljb24pIHtcbiAgICAgICAgICAgIDxpb24taWNvbiBhcmlhLWhpZGRlbj1cInRydWVcIiBbc2xvdF09XCJvcHRpb25zLmJ1dHRvbnMuc3VibWl0Lmljb25TbG90XCIgW25hbWVdPVwib3B0aW9ucy5idXR0b25zLnN1Ym1pdC5pY29uXCI+PC9pb24taWNvbj5cbiAgICAgICAgICB9XG4gICAgICAgICAgRGVsZXRlXG4gICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgfVxuICAgIEBpZihvcGVyYXRpb24gPT09IE9wZXJhdGlvbktleXMuQ1JFQVRFIHx8IG9wZXJhdGlvbiA9PT0gT3BlcmF0aW9uS2V5cy5VUERBVEUpIHtcblxuICAgICAgPGRpdj5cbiAgICAgICAgPGlvbi1idXR0b25cbiAgICAgICAgICB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgQGlmKG9wdGlvbnMuYnV0dG9ucy5zdWJtaXQuaWNvbikge1xuICAgICAgICAgICAgPGlvbi1pY29uIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIFtzbG90XT1cIm9wdGlvbnMuYnV0dG9ucy5zdWJtaXQuaWNvblNsb3RcIiBbbmFtZV09XCJvcHRpb25zLmJ1dHRvbnMuc3VibWl0Lmljb25cIj48L2lvbi1pY29uPlxuICAgICAgICAgIH1cbiAgICAgICAgICB7e29wdGlvbnMuYnV0dG9ucy5zdWJtaXQudGV4dH19XG4gICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIH1cblxuICAgIEBpZihvcHRpb25zLmJ1dHRvbnMuY2xlYXIpIHtcbiAgICAgIDxkaXY+XG4gICAgICAgPGlvbi1idXR0b24gZmlsbD1cImNsZWFyXCIgKGNsaWNrKT1cImhhbmRsZVJlc2V0KClcIj5cbiAgICAgICAgICBAaWYob3B0aW9ucy5idXR0b25zLmNsZWFyPy5pY29uKSB7XG4gICAgICAgICAgICA8aW9uLWljb24gIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIFtzbG90XT1cIm9wdGlvbnMuYnV0dG9ucy5jbGVhcj8uaWNvblNsb3RcIiBbbmFtZV09XCJvcHRpb25zLmJ1dHRvbnMuY2xlYXI/Lmljb25cIj48L2lvbi1pY29uPlxuICAgICAgICAgIH1cbiAgICAgICAgICB7eyBbT3BlcmF0aW9uS2V5cy5ERUxFVEUsIE9wZXJhdGlvbktleXMuUkVBRCwgT3BlcmF0aW9uS2V5cy5VUERBVEVdLmluY2x1ZGVzKG9wZXJhdGlvbikgPyAnQmFjaycgOiBvcHRpb25zLmJ1dHRvbnMuY2xlYXI/LnRleHR9fVxuICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgIH1cbiAgPC9kaXY+XG59XG5cbiJdfQ==