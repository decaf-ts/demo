import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFormElement } from '../../engine/interfaces';
import { CrudFormEvent, FieldUpdateMode, HandlerLike, HTMLFormTarget, RenderedModel } from '../../engine';
import { CrudFormOptions } from './types';
import { CrudOperations, OperationKeys } from '@decaf-ts/db-decorators';
import { Model } from '@decaf-ts/decorator-validation';
import * as i0 from "@angular/core";
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
export declare class CrudFormComponent implements OnInit, IFormElement, OnDestroy, RenderedModel {
    /**
     * @description Repository model for data operations.
     * @summary The data model repository that this component will use for CRUD operations.
     * This provides a connection to the data layer for retrieving and manipulating data.
     *
     * @type {Model| undefined}
     * @memberOf CrudFormComponent
     */
    model: Model | undefined;
    /**
     * @description The primary data model used for CRUD operations.
     * @summary This input provides the main Model instance that the form interacts with for
     * creating, reading, updating, or deleting records. It serves as the source of schema
     * and validation rules for the form fields, and is required for most operations except
     * for certain read or delete scenarios.
     *
     * @type {Model | undefined}
     * @memberOf CrudFormComponent
     */
    modelId: Model | undefined;
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
    updateOn: FieldUpdateMode;
    /**
     * @description Reference to the reactive form DOM element.
     * @summary ViewChild reference that provides direct access to the form's DOM element.
     * This enables programmatic manipulation of the form element and access to native
     * HTML form properties and methods when needed.
     *
     * @type {ElementRef}
     * @memberOf CrudFormComponent
     */
    component: ElementRef;
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
    target: HTMLFormTarget;
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
    method: 'get' | 'post' | 'event';
    /**
     * @description Configuration options for the CRUD form behavior.
     * @summary Contains various configuration settings that control form rendering,
     * validation, and behavior. These options are merged with default settings
     * during component initialization to customize the form's functionality.
     *
     * @type {CrudFormOptions}
     * @memberOf CrudFormComponent
     */
    options: CrudFormOptions;
    /**
     * @description Optional action identifier for form submission context.
     * @summary Specifies a custom action name that will be included in the submit event.
     * If not provided, defaults to the standard submit event constant. Used to
     * distinguish between different types of form submissions within the same component.
     *
     * @type {string | undefined}
     * @memberOf CrudFormComponent
     */
    action?: string;
    /**
     * @description The current CRUD operation being performed.
     * @summary Specifies the type of operation this form is handling (CREATE, READ, UPDATE, DELETE).
     * This is a required input that determines form behavior, validation rules, and available actions.
     * The operation affects form state, button visibility, and submission logic.
     *
     * @type {CrudOperations}
     * @required
     * @memberOf CrudFormComponent
     */
    operation: CrudOperations;
    /**
     * @description Custom event handlers for form actions.
     * @summary A record of event handler functions keyed by event names that can be
     * triggered during form operations. These handlers provide extensibility for
     * custom business logic and can be invoked for various form events and actions.
     *
     * @type {HandlerLike}
     * @memberOf CrudFormComponent
     */
    handlers: HandlerLike;
    /**
     * @description Angular reactive FormGroup for form state management.
     * @summary The FormGroup instance that manages all form controls, validation,
     * and form state. This is the main interface for accessing form values and
     * controlling form behavior. May be undefined for read-only operations.
     *
     * @type {FormGroup | undefined}
     * @memberOf CrudFormComponent
     */
    formGroup: FormGroup | undefined;
    /**
     * @description Path to the parent FormGroup, if nested.
     * @summary Full dot-delimited path of the parent FormGroup. Set only when is part of a nested structure.
     *
     * @type {string}
     * @memberOf CrudFormComponent
     */
    childOf?: string;
    /**
     * @description Unique identifier for the form renderer.
     * @summary A unique string identifier used to register and manage this form
     * instance within the NgxFormService. This ID is also used as the HTML id
     * attribute for the form element, enabling DOM queries and form management.
     *
     * @type {string}
     * @memberOf CrudFormComponent
     */
    rendererId: string;
    /**
     * @description Unique identifier for the current record.
     * @summary A unique identifier for the current record being displayed or manipulated.
     * This is typically used in conjunction with the primary key for operations on specific records.
     *
     * @type {string | number}
     * @memberOf CrudFormComponent
     */
    uid: string;
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
    allowClear: boolean;
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
    protected readonly OperationKeys: typeof OperationKeys;
    /**
     * @description Event emitter for form submission events.
     * @summary Emits CrudFormEvent objects when the form is submitted, providing
     * form data, component information, and any associated handlers to parent
     * components. This enables decoupled handling of form submission logic.
     *
     * @type {EventEmitter<CrudFormEvent>}
     * @memberOf CrudFormComponent
     */
    submitEvent: EventEmitter<CrudFormEvent>;
    /**
     * @description Logger instance for the component.
     * @summary Provides logging capabilities for the component, allowing for consistent
     * and structured logging of information, warnings, and errors. This logger is initialized
     * in the ngOnInit method using the getLogger function from the ForAngularModule.
     *
     * The logger is used throughout the component to record important events, debug information,
     * and potential issues. It helps in monitoring the component's behavior, tracking the flow
     * of operations, and facilitating easier debugging and maintenance.
     *
     * @type {Logger}
     * @private
     * @memberOf CrudFormComponent
     */
    private logger;
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
    private location;
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
    ngOnInit(): Promise<void>;
    /**
     * @description Component cleanup lifecycle method.
     * @summary Performs cleanup operations when the component is destroyed.
     * Unregisters the FormGroup from the NgxFormService to prevent memory leaks
     * and ensure proper resource cleanup.
     *
     * @returns {void}
     * @memberOf CrudFormComponent
     */
    ngOnDestroy(): void;
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
    submit(event: SubmitEvent): Promise<boolean | void>;
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
    handleReset(): void;
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
    handleDelete(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CrudFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CrudFormComponent, "ngx-decaf-crud-form", never, { "model": { "alias": "model"; "required": false; }; "modelId": { "alias": "modelId"; "required": false; }; "updateOn": { "alias": "updateOn"; "required": false; }; "target": { "alias": "target"; "required": false; }; "method": { "alias": "method"; "required": false; }; "options": { "alias": "options"; "required": false; }; "action": { "alias": "action"; "required": false; }; "operation": { "alias": "operation"; "required": true; }; "handlers": { "alias": "handlers"; "required": false; }; "formGroup": { "alias": "formGroup"; "required": false; }; "childOf": { "alias": "childOf"; "required": false; }; "rendererId": { "alias": "rendererId"; "required": false; }; "uid": { "alias": "uid"; "required": false; }; "allowClear": { "alias": "allowClear"; "required": false; }; }, { "submitEvent": "submitEvent"; }, never, ["*"], true, never>;
}
//# sourceMappingURL=crud-form.component.d.ts.map