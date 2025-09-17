import { UIKeys, parseValueByType, HTML5InputTypes, HTML5CheckTypes, escapeHtml, parseToNumber, RenderingEngine, RenderingError } from '@decaf-ts/ui-decorators';
import * as i0 from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule, isDevMode, reflectComponentType, inject, EnvironmentInjector, EventEmitter, ViewContainerRef, TemplateRef, Component, ViewChild, Input, Output, InjectionToken, ElementRef, HostListener, Inject, Injector, Directive, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { VALIDATION_PARENT_KEY, ValidationKeys, DEFAULT_PATTERNS, Validation, ComparisonValidationKeys, PathProxyEngine, Primitives, ModelKeys, isValidDate as isValidDate$1, parseDate, sf, Model } from '@decaf-ts/decorator-validation';
import { OperationKeys, InternalError } from '@decaf-ts/db-decorators';
import * as i2$1 from '@angular/forms';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormArray, AbstractControl, Validators } from '@angular/forms';
import { InjectableRegistryImp } from '@decaf-ts/injectable-decorators';
import * as i2 from '@angular/common';
import { CommonModule, Location, NgComponentOutlet } from '@angular/common';
import * as i1 from '@ionic/angular/standalone';
import { IonApp, IonRouterOutlet, IonSplitPane, IonImg, IonText, IonTitle, IonButton, IonRouterLink, IonContent, IonInput, IonItem, IonCheckbox, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonLabel, IonTextarea, IonIcon, IonCard, IonCardContent, IonAccordionGroup, IonAccordion, IonList, IonReorder, IonReorderGroup, IonSearchbar, IonChip, IonListHeader, IonItemSliding, IonItemOptions, IonItemOption, IonPopover, IonRefresher, IonThumbnail, IonSkeletonText, IonRefresherContent, IonInfiniteScroll, IonInfiniteScrollContent, IonLoading } from '@ionic/angular/standalone';
import * as i3 from '@ngx-translate/core';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Logging } from '@decaf-ts/logging';
import { __decorate, __metadata } from 'tslib';
import { apply, metadata } from '@decaf-ts/reflection';
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';
import { chevronUpOutline, chevronDownOutline, createOutline, alertCircleOutline, chevronForwardOutline, chevronBackOutline } from 'ionicons/icons';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { forkJoin, fromEvent, debounceTime, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Repository, OrderDirection, Condition } from '@decaf-ts/core';
import { RamAdapter } from '@decaf-ts/core/ram';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

/**
 * @description Angular engine key constants
 * @summary Contains key strings used by the Angular rendering engine for reflection,
 * dynamic component creation, and other engine operations.
 * @typedef {Object} AngularEngineKeys
 * @property {string} REFLECT - Prefix for reflection metadata keys
 * @property {string} DYNAMIC - Key for dynamic component identification
 * @property {string} ANNOTATIONS - Key for component annotations
 * @property {string} ECMP - Key for embedded components
 * @property {string} NG_REFLECT - Prefix for Angular reflection attributes
 * @property {string} RENDERED - Prefix for rendered component markers
 * @property {string} MAPPER - Key for property mappers
 * @property {string} CHILDREN - Key for child components
 * @property {string} LISTABLE - Key for listable components
 * @property {string} RENDER - Key for renderable components
 * @property {string} RENDERED_ID - Template for rendered component IDs
 * @property {string} PARENT - Key for comparison decorators and validators
 * @const AngularEngineKeys
 * @memberOf module:engine
 */
const AngularEngineKeys = {
    REFLECT: `${UIKeys.REFLECT}.angular.`,
    DYNAMIC: 'dynamic-component',
    ANNOTATIONS: '__annotations__',
    ECMP: 'ecmp',
    NG_REFLECT: 'ng-reflect-',
    RENDERED: 'rendered-as-',
    MAPPER: 'mapper',
    CHILDREN: 'children',
    LISTABLE: 'listable',
    RENDER: 'render',
    RENDERED_ID: 'rendered-as-{0}',
    PARENT: '_parent',
    VALIDATION_PARENT_KEY: VALIDATION_PARENT_KEY,
    FORM_GROUP_COMPONENT_PROPS: 'componentProps'
};
/**
 * @description Form validation state constants
 * @summary Contains constants representing the possible validation states of a form.
 * These are used to check and handle form validation throughout the application.
 * @typedef {Object} FormConstants
 * @property {string} VALID - Constant representing a valid form state
 * @property {string} INVALID - Constant representing an invalid form state
 * @const FormConstants
 * @memberOf module:engine
 */
const FormConstants = {
    VALID: 'VALID',
    INVALID: 'INVALID',
};
/**
 * @description Event name constants
 * @summary Enum containing constants for event names used throughout the application.
 * These are used to standardize event naming and handling.
 * @enum {string}
 * @readonly
 * @property {string} BACK_BUTTON_NAVIGATION - Event fired when back button navigation ends
 * @property {string} REFRESH_EVENT - Event fired when a refresh action occurs
 * @property {string} CLICK_EVENT - Event fired when a click action occurs
 * @property {string} SUBMIT_EVENT - Event fired when a form submission occurs
 * @memberOf module:engine
 */
const EventConstants = {
    BACK_BUTTON_NAVIGATION: 'backButtonNavigationEndEvent',
    REFRESH: 'RefreshEvent',
    CLICK: 'ClickEvent',
    SUBMIT: 'SubmitEvent',
    VALIDATION_ERROR: 'validationErrorEvent',
    FIELDSET_ADD_GROUP: 'fieldsetAddGroupEvent',
    FIELDSET_UPDATE_GROUP: 'fieldsetUpdateGroupEvent',
    FIELDSET_REMOVE_GROUP: 'fieldsetRemoveGroupEvent',
    // FIELDSET_GROUP_VALIDATION: 'fieldsetGroupValidationEvent'
};
/**
 * @description Logger level constants
 * @summary Enum defining the logging levels used in the application's logging system.
 * Lower values represent more verbose logging, while higher values represent more critical logs.
 * @enum {number}
 * @readonly
 * @property {number} ALL - Log everything (most verbose)
 * @property {number} DEBUG - Log debug information
 * @property {number} INFO - Log informational messages
 * @property {number} WARN - Log warnings
 * @property {number} ERROR - Log errors
 * @property {number} CRITICAL - Log critical errors (least verbose)
 * @memberOf module:engine
 */
var LoggerLevels;
(function (LoggerLevels) {
    LoggerLevels[LoggerLevels["ALL"] = 0] = "ALL";
    LoggerLevels[LoggerLevels["DEBUG"] = 1] = "DEBUG";
    LoggerLevels[LoggerLevels["INFO"] = 2] = "INFO";
    LoggerLevels[LoggerLevels["WARN"] = 3] = "WARN";
    LoggerLevels[LoggerLevels["ERROR"] = 4] = "ERROR";
    LoggerLevels[LoggerLevels["CRITICAL"] = 5] = "CRITICAL";
})(LoggerLevels || (LoggerLevels = {}));
;
/**
 * @description Route direction constants
 * @summary Enum defining the possible navigation directions in the application.
 * Used for controlling navigation flow and animation directions.
 * @enum {string}
 * @readonly
 * @property {string} BACK - Navigate back to the previous page
 * @property {string} FORWARD - Navigate forward to the next page
 * @property {string} ROOT - Navigate to the root/home page
 * @memberOf module:engine
 */
var RouteDirections;
(function (RouteDirections) {
    RouteDirections["BACK"] = "back";
    RouteDirections["FORWARD"] = "forward";
    RouteDirections["ROOT"] = "root";
})(RouteDirections || (RouteDirections = {}));
/**
 * @description Component tag name constants
 * @summary Enum defining the tag names for custom components used in the application.
 * These tag names are used for component registration and rendering.
 * @enum {string}
 * @readonly
 * @property {string} LIST_ITEM - Tag name for list item component
 * @property {string} LIST_INFINITE - Tag name for infinite scrolling list component
 * @property {string} LIST_PAGINATED - Tag name for paginated list component
 * @memberOf module:engine
 */
var ComponentsTagNames;
(function (ComponentsTagNames) {
    ComponentsTagNames["LIST_ITEM"] = "ngx-decaf-list-item";
    ComponentsTagNames["LIST_INFINITE"] = "ngx-decaf-list-infinite";
    ComponentsTagNames["LIST_PAGINATED"] = "ngx-decaf-list-paginated";
})(ComponentsTagNames || (ComponentsTagNames = {}));
/**
 * @description Base component property name constants
 * @summary Enum defining the standard property names used by base components in the application.
 * These property names are used for consistent property access across components.
 * @enum {string}
 * @readonly
 * @property {string} MODEL - Property name for the component's data model
 * @property {string} LOCALE - Property name for localization settings
 * @property {string} PK - Property name for primary key
 * @property {string} ITEMS - Property name for collection items
 * @property {string} ROUTE - Property name for routing information
 * @property {string} OPERATIONS - Property name for available operations
 * @property {string} UID - Property name for unique identifier
 * @property {string} TRANSLATABLE - Property name for translation flag
 * @property {string} MAPPER - Property name for property mapper
 * @property {string} INITIALIZED - Property name for initialization state
 * @memberOf module:engine
 */
var BaseComponentProps;
(function (BaseComponentProps) {
    BaseComponentProps["MODEL"] = "model";
    BaseComponentProps["LOCALE"] = "locale";
    BaseComponentProps["PK"] = "pk";
    BaseComponentProps["ITEMS"] = "items";
    BaseComponentProps["ROUTE"] = "route";
    BaseComponentProps["OPERATIONS"] = "operations";
    BaseComponentProps["UID"] = "uid";
    BaseComponentProps["TRANSLATABLE"] = "translatable";
    BaseComponentProps["MAPPER"] = "mapper";
    BaseComponentProps["INITIALIZED"] = "initialized";
})(BaseComponentProps || (BaseComponentProps = {}));

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
class ValidatorFactory {
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

const ComponentsAndModules = [
    IonApp,
    IonRouterOutlet,
    IonSplitPane,
    IonImg,
    IonText,
    IonTitle,
    IonButton,
    IonRouterLink,
    IonContent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    TranslatePipe,
];
const log = Logging.for("for-angular");
function getLogger(instance) {
    return log.for(instance);
}
/**
 * @description Main Angular module for the Decaf framework
 * @summary The ForAngularModule provides the core functionality for integrating Decaf with Angular applications.
 * It imports and exports common Angular and Ionic components and modules needed for Decaf applications,
 * including form handling, translation support, and Ionic UI components. This module can be imported
 * directly or via the forRoot() method for proper initialization in the application's root module.
 *
 * @class ForAngularModule
 * @example
 * ```typescript
 * // In your app module:
 * @NgModule({
 *   imports: [
 *     ForAngularModule.forRoot(),
 *     // other imports
 *   ],
 *   // ...
 * })
 * export class AppModule {}
 * ```
 */
class ForAngularModule {
    /**
     * @description Creates a module with providers for root module import
     * @summary This static method provides the proper way to import the ForAngularModule in the application's
     * root module. It returns a ModuleWithProviders object that includes the ForAngularModule itself.
     * Using forRoot() ensures that the module and its providers are properly initialized and only
     * instantiated once in the application.
     *
     * @return {ModuleWithProviders<ForAngularModule>} The module with its providers
     */
    static forRoot() {
        return {
            ngModule: ForAngularModule,
        };
    }
    static { this.ɵfac = function ForAngularModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ForAngularModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ForAngularModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [IonApp,
            IonRouterOutlet,
            IonSplitPane,
            IonImg,
            IonText,
            IonTitle,
            IonButton,
            IonContent,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            TranslateModule,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            TranslateModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ForAngularModule, [{
        type: NgModule,
        args: [{
                imports: ComponentsAndModules,
                declarations: [],
                exports: ComponentsAndModules,
                schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ForAngularModule, { imports: [IonApp,
        IonRouterOutlet,
        IonSplitPane,
        IonImg,
        IonText,
        IonTitle,
        IonButton,
        IonRouterLink,
        IonContent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        TranslatePipe], exports: [IonApp,
        IonRouterOutlet,
        IonSplitPane,
        IonImg,
        IonText,
        IonTitle,
        IonButton,
        IonRouterLink,
        IonContent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        TranslatePipe] }); })();

let injectableRegistry;
/**
 * @description Retrieves the singleton instance of the injectables registry
 * @summary This function implements the singleton pattern for the InjectablesRegistry.
 * It returns the existing registry instance if one exists, or creates a new instance
 * if none exists. The registry is used to store and retrieve injectable dependencies
 * throughout the application.
 *
 * @return {InjectablesRegistry} The singleton injectables registry instance
 *
 * @function getInjectablesRegistry
 * @memberOf module:for-angular
 */
function getInjectablesRegistry() {
    if (!injectableRegistry)
        injectableRegistry = new InjectableRegistryImp();
    return injectableRegistry;
}
/**
 * @description Determines if the application is running in development mode
 * @summary This function checks whether the application is currently running in a development
 * environment. It uses Angular's isDevMode() function and also checks the window context
 * and hostname against the provided context parameter. This is useful for enabling
 * development-specific features or logging.
 *
 * @param {string} [context='localhost'] - The context string to check against the current environment
 * @return {boolean} True if the application is running in development mode, false otherwise
 *
 * @function isDevelopmentMode
 * @memberOf module:for-angular
 */
function isDevelopmentMode(context = 'localhost') {
    if (!context)
        return isDevMode();
    const win = getWindow();
    return (isDevMode() ||
        win?.['env']?.['CONTEXT'].toLowerCase() !== context.toLowerCase() ||
        win?.['location']?.hostname?.includes(context));
}
/**
 * @description Dispatches a custom event to the document window
 * @summary This function creates and dispatches a custom event to the browser window.
 * It's useful for cross-component communication or for triggering application-wide events.
 * The function allows specifying the event name, detail data, and additional event properties.
 *
 * @param {string} name - The name of the custom event to dispatch
 * @param {unknown} detail - The data to include in the event's detail property
 * @param {object} [props] - Optional additional properties for the custom event
 * @return {void}
 *
 * @function windowEventEmitter
 * @memberOf module:for-angular
 */
function windowEventEmitter(name, detail, props) {
    const data = Object.assign({
        bubbles: true,
        composed: true,
        cancelable: false,
        detail: detail,
    }, props || {});
    getWindow().dispatchEvent(new CustomEvent(name, data));
}
/**
 * @description Retrieves a property from the window's document object
 * @summary This function provides a safe way to access properties on the window's document object.
 * It uses the getWindowDocument function to get a reference to the document, then accesses
 * the specified property. This is useful for browser environment interactions that need
 * to access document properties.
 *
 * @param {string} key - The name of the property to retrieve from the document object
 * @return {any} The value of the specified property, or undefined if the document or property doesn't exist
 *
 * @function getOnWindowDocument
 * @memberOf module:for-angular
 */
function getOnWindowDocument(key) {
    const doc = getWindowDocument()?.[key];
    return doc instanceof Document ?
        doc : undefined;
}
/**
 * @description Retrieves the document object from the window
 * @summary This function provides a safe way to access the document object from the window.
 * It uses the getOnWindow function to retrieve the 'document' property from the window object.
 * This is useful for browser environment interactions that need access to the document.
 *
 * @return {Document | undefined} The window's document object, or undefined if it doesn't exist
 *
 * @function getWindowDocument
 * @memberOf module:for-angular
 */
function getWindowDocument() {
    return getOnWindow('document');
}
/**
 * @description Retrieves a property from the window object
 * @summary This function provides a safe way to access properties on the window object.
 * It uses the getWindow function to get a reference to the window, then accesses
 * the specified property. This is useful for browser environment interactions that need
 * to access window properties or APIs.
 *
 * @param {string} key - The name of the property to retrieve from the window object
 * @return {unknown | undefined} The value of the specified property, or undefined if the window or property doesn't exist
 *
 * @function getOnWindow
 * @memberOf module:for-angular
 */
function getOnWindow(key) {
    return getWindow()?.[key];
}
/**
 * @description Sets a property on the window object
 * @summary This function provides a way to set properties on the window object.
 * It uses the getWindow function to get a reference to the window, then sets
 * the specified property to the provided value. This is useful for storing
 * global data or functions that need to be accessible across the application.
 *
 * @param {string} key - The name of the property to set on the window object
 * @param {any} value - The value to assign to the property
 * @return {void}
 *
 * @function setOnWindow
 * @memberOf module:for-angular
 */
function setOnWindow(key, value) {
    getWindow()[key] = value;
}
/**
 * @description Retrieves the global window object
 * @summary This function provides a safe way to access the global window object.
 * It uses globalThis to ensure compatibility across different JavaScript environments.
 * This is the core function used by other window-related utility functions to
 * access the window object.
 *
 * @return {Window} The global window object
 *
 * @function getWindow
 * @memberOf module:for-angular
 */
function getWindow() {
    return globalThis?.['window'];
}
/**
 * @description Retrieves the width of the browser window
 * @summary This function provides a convenient way to get the current width of the browser window.
 * It uses the getOnWindow function to access the 'innerWidth' property of the window object.
 * This is useful for responsive design implementations and viewport-based calculations.
 *
 * @return {number | undefined} The current width of the browser window in pixels
 *
 * @function getWindowWidth
 * @memberOf module:for-angular
 */
function getWindowWidth() {
    return getOnWindow('innerWidth') || 0;
}
/**
 * @description Checks if a value is  not undefined
 * @summary This utility function determines whether a given value is not undefined.
 * It's a simple wrapper that makes code more readable when checking for defined values.
 * The function is particularly useful for checking StringOrBoolean properties that might be undefined.
 *
 * @param {StringOrBoolean | undefined} prop - The property to check
 * @return {boolean} True if the property is not undefined, false otherwise
 *
 * @function isNotUndefined
 * @memberOf module:for-angular
 */
function isNotUndefined(prop) {
    return (prop !== undefined);
}
/**
 * @description Generates a locale string from a class name or instance
 * @summary This utility function converts a class name or instance into a locale string
 * that can be used for internationalization purposes. It handles different input types
 * (string, function, or object) and applies formatting rules to generate a consistent
 * locale identifier. For short names (less than 3 parts), it reverses the dot-separated
 * string. For longer names, it uses the last part as a prefix and joins the rest with
 * underscores.
 *
 * @param {string|FunctionLike|object} instance - The input to generate the locale from (class name, constructor, or instance)
 * @param {string} [suffix] - Optional string to append to the instance name before processing
 * @return {string} A formatted locale string derived from the input
 *
 * @function getLocaleFromClassName
 * @memberOf module:for-angular
 */
function getLocaleFromClassName(instance, suffix) {
    if (typeof instance !== Primitives.STRING)
        instance = instance.name || instance?.constructor?.name;
    let name = instance;
    if (suffix)
        name = `${instance}${suffix.charAt(0).toUpperCase() + suffix.slice(1)}`;
    name = name.replace(/_|-/g, '').replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        if (index > 1)
            word = '.' + word;
        return word.toLowerCase();
    }).split('.');
    if (name.length < 3)
        return name.reverse().join('.');
    const preffix = name[name.length - 1];
    name.pop();
    name = name.join('_');
    return `${preffix}.${name}`;
}
/**
 * @description Retrieves the current locale language
 * @summary This utility function gets the current locale language based on the user's browser settings.
 * It provides a consistent way to access the user's language preference throughout the application.
 * The function returns the browser's navigator.language value, defaulting to 'en' if not available.
 *
 * @return {string} The current locale language (e.g., 'en', 'fr')
 *
 * @function getLocaleLanguage
 * @memberOf module:for-angular
 */
function getLocaleLanguage() {
    const win = getWindow();
    return win.navigator.language || "en";
    // return win?.[WINDOW_KEYS.LANGUAGE_SELECTED] || (win.navigator.language || '').split('-')[0] || "en";
}
/**
 * @description Generates a random string or number of specified length
 * @summary This utility function creates a random string of a specified length.
 * It can generate either alphanumeric strings (including uppercase and lowercase letters)
 * or numeric-only strings. This is useful for creating random IDs, temporary passwords,
 * or other random identifiers throughout the application.
 *
 * @param {number} [length=8] - The length of the random value to generate
 * @param {boolean} [onlyNumbers=false] - Whether to generate only numeric characters
 * @return {string} A randomly generated string of the specified length and character set
 *
 * @function generateRandomValue
 * @memberOf module:for-angular
 */
function generateRandomValue(length = 8, onlyNumbers = false) {
    const chars = onlyNumbers
        ? '0123456789'
        : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++)
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    return result;
}
/**
 * Converts a string representation of a boolean or a boolean value to a boolean type.
 *
 * @export
 * @param {('true' | 'false' | boolean)} prop - The value to convert. Can be the string 'true', 'false', or a boolean.
 * @returns {boolean} The boolean representation of the input value. Returns true if the input is the string 'true' or boolean true, false otherwise.
 */
function stringToBoolean(prop) {
    if (typeof prop === 'string')
        prop = prop.toLowerCase() === 'true' ? true : false;
    return prop;
}
/**
 * Checks if a value is a valid Date object
 *
 * @param {(string | Date | number)} date - The value to check. Can be a Date object, a timestamp number, or a date string
 * @return {boolean} Returns true if the value is a valid Date object (not NaN), otherwise false
 */
function isValidDate(date) {
    try {
        return (date instanceof Date && !isNaN(date)) || (() => {
            const testRegex = new RegExp(/^\d{4}-\d{2}-\d{2}$/).test(date);
            if (typeof date !== Primitives.STRING || !date?.includes('T') && !testRegex)
                return false;
            date = date.split('T')[0];
            if (!new RegExp(/^\d{4}-\d{2}-\d{2}$/).test(date))
                return false;
            return !!(new Date(date));
        })();
    }
    catch (error) {
        getLogger(isValidDate).error(error);
        return false;
    }
}
/**
 * Formats a date into a localized string representation
 *
 * @param {(string | Date | number)} date - The date to format. Can be a Date object, a timestamp number, or a date string
 * @param {string} [locale] - The locale to use for formatting. If not provided, the system's locale will be used
 * @return {(Date | string)} A formatted date string in the format DD/MM/YYYY according to the specified locale,
 *                           or the original input as a string if the date is invalid
 */
function formatDate(date, locale) {
    if (!locale)
        locale = getLocaleLanguage();
    if (typeof date === 'string' || typeof date === 'number')
        date = new Date(typeof date === 'string' ? date.replace(/\//g, '-') : date);
    if (!isValidDate(date))
        return `${date}`;
    const r = date.toLocaleString(locale, {
        year: "numeric",
        day: "2-digit",
        month: '2-digit'
    });
    return r;
}
/**
 * Attempts to parse a date string, Date object, or number into a valid Date object
 *
 * @param {(string | Date | number)} date - The date to parse. Can be a Date object, a timestamp number,
 *                                         or a date string in the format "DD/MM/YYYY HH:MM:SS:MS"
 * @return {(Date | null)} A valid Date object if parsing is successful, or null if the date is invalid
 *                         or doesn't match the expected format
 */
function parseToValidDate(date) {
    if (isValidDate(date))
        return date;
    if (!`${date}`.includes('/'))
        return null;
    const [dateString, timeString] = date.split(' ');
    const [day, month, year] = dateString.split('/').map(Number);
    const [hours, minutes, seconds, milliseconds] = timeString.split(':').map(Number);
    date = new Date(year, month - 1, day, hours, minutes, seconds, milliseconds);
    if (!isValidDate(date)) {
        console.warn('parseToValidDate - Invalid date format', date);
        return null;
    }
    return date;
}
/**
 * Maps an item object using a provided mapper object and optional additional properties.
 *
 * @param {KeyValue} item - The source object to be mapped.
 * @param {KeyValue} mapper - An object that defines the mapping rules. Keys represent the new property names,
 *                            and values represent the path to the corresponding values in the source object.
 * @param {KeyValue} [props] - Optional additional properties to be included in the mapped object.
 * @returns {KeyValue} A new object with properties mapped according to the mapper object and including any additional properties.
 */
function itemMapper(item, mapper, props) {
    return Object.entries(mapper).reduce((accum, [key, value]) => {
        const arrayValue = value.split('.');
        if (!value) {
            accum[key] = value;
        }
        else {
            if (arrayValue.length === 1) {
                accum[key] = item?.[value] || (value !== key ? value : "");
            }
            else {
                let val;
                for (const _value of arrayValue)
                    val = !val
                        ? item[_value]
                        : (typeof val === 'string' ? JSON.parse(val) : val)[_value];
                if (isValidDate(new Date(val)))
                    val = `${formatDate(val)}`;
                accum[key] = val === null || val === undefined ? value : val;
            }
        }
        return Object.assign({}, props || {}, accum);
    }, {});
}
/**
 * Maps an array of data objects using a provided mapper object.
 *
 * @template T - The type of the resulting mapped items.
 * @param {any[]} data - The array of data objects to be mapped.
 * @param {KeyValue} mapper - An object that defines the mapping rules.
 * @param {KeyValue} [props] - Additional properties to be included in the mapped items.
 *
 * @returns {T[]} - The array of mapped items. If an item in the original array does not have any non-null values after mapping,
 * the original item is returned instead.
 */
function dataMapper(data, mapper, props) {
    if (!data || !data.length)
        return [];
    return data.reduce((accum, curr) => {
        const item = itemMapper(curr, mapper, props);
        const hasValues = [...new Set(Object.values(item))].filter((value) => value).length >
            0;
        accum.push(hasValues ? item : curr);
        return accum;
    }, []);
}
/**
 * @description Removes focus from the currently active DOM element
 * @summary This utility function blurs the currently focused element in the document,
 * effectively removing focus traps that might prevent proper navigation or keyboard
 * interaction. It safely accesses the document's activeElement and calls blur() if
 * an element is currently focused. This is useful for accessibility and user experience
 * improvements, particularly when closing modals or dialogs.
 *
 * @return {void}
 *
 * @function removeFocusTrap
 * @memberOf module:for-angular
 */
function removeFocusTrap() {
    const doc = getWindowDocument();
    if (doc?.activeElement)
        doc.activeElement?.blur();
}
/**
 * @description Cleans and normalizes whitespace in a string value
 * @summary This utility function trims leading and trailing whitespace from a string
 * and replaces multiple consecutive whitespace characters with a single space.
 * Optionally converts the result to lowercase for consistent text processing.
 * This is useful for normalizing user input, search terms, or data sanitization.
 *
 * @param {string} value - The string value to clean and normalize
 * @param {boolean} [lowercase=false] - Whether to convert the result to lowercase
 * @return {string} The cleaned and normalized string
 *
 * @function cleanSpaces
 * @memberOf module:for-angular
 */
function cleanSpaces(value = "", lowercase = false) {
    value = `${value}`.trim().replace(/\s+/g, ' ');
    return lowercase ? value.toLowerCase() : value;
}
/**
 * @description Determines if the user's system is currently in dark mode
 * @summary This function checks the user's color scheme preference using the CSS media query
 * '(prefers-color-scheme: dark)'. It returns a boolean indicating whether the system is
 * currently set to dark mode. This is useful for implementing theme-aware functionality
 * and adjusting UI elements based on the user's preferred color scheme.
 *
 * @return {Promise<boolean>} True if the system is in dark mode, false otherwise
 *
 * @function isDarkMode
 * @memberOf module:for-angular
 */
async function isDarkMode() {
    const { matches } = getWindow().matchMedia('(prefers-color-scheme: dark)');
    return matches;
}

/**
 * @module helpers
 * @description Utility helpers for Angular Decaf applications
 * @summary The helpers module provides a collection of utility functions and types
 * that assist with common tasks in Decaf Angular applications. It includes functions
 * for array manipulation, date formatting, logging, string operations, and various
 * utility functions for working with Angular components and services. These helpers
 * simplify common operations and promote code reuse across the application.
 * Key exports include logging utilities, string manipulation functions, and component
 * utility functions.
 */

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
class NgxFormService {
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
                    ? !isValidDate$1(parseDate(props.format, props.value))
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

/**
 * @description Angular implementation of the RenderingEngine with enhanced features
 * @summary This class extends the base RenderingEngine to provide Angular-specific rendering capabilities
 * with additional features compared to NgxRenderingEngine. It handles the conversion of field definitions
 * to Angular components, manages component registration, and provides utilities for component creation
 * and input handling. This implementation uses Angular's newer component APIs.
 *
 * @template AngularFieldDefinition - Type for Angular-specific field definitions
 * @template AngularDynamicOutput - Type for Angular-specific component output
 *
 * @class NgxRenderingEngine
 * @example
 * ```typescript
 * const engine = NgxRenderingEngine.get();
 * engine.initialize();
 * const output = engine.render(myModel, {}, viewContainerRef, injector, templateRef);
 * ```
 *
 * @mermaid
 * sequenceDiagram
 *   participant Client
 *   participant Engine as NgxRenderingEngine
 *   participant Components as RegisteredComponents
 *
 *   Client->>Engine: get()
 *   Client->>Engine: initialize()
 *   Client->>Engine: render(model, props, vcr, injector, tpl)
 *   Engine->>Engine: toFieldDefinition(model, props)
 *   Engine->>Engine: fromFieldDefinition(fieldDef, vcr, injector, tpl)
 *   Engine->>Components: components(fieldDef.tag)
 *   Components-->>Engine: component constructor
 *   Engine->>Engine: createComponent(component, inputs, metadata, vcr, injector, template)
 *   Engine-->>Client: return AngularDynamicOutput
 */
class NgxRenderingEngine extends RenderingEngine {
    /**
     * @description Current operation context for component visibility control
     * @summary Static property that stores the current operation being performed,
     * which is used to determine component visibility through the 'hidden' property.
     * Components can specify operations where they should be hidden, and this property
     * provides the context for those visibility checks. The value is typically extracted
     * from the global properties during the rendering process.
     *
     * @private
     * @static
     * @type {string | undefined}
     */
    static { this._operation = undefined; }
    /**
     * @description Constructs a new NgxRenderingEngine instance
     * @summary Initializes a new instance of the Angular rendering engine by calling the parent
     * constructor with the 'angular' engine type identifier. This constructor sets up the base
     * rendering engine functionality with Angular-specific configurations and prepares the
     * instance for component registration and rendering operations.
     *
     * @constructor
     */
    constructor() {
        super('angular');
    }
    /**
     * @description Converts a field definition to an Angular component output
     * @summary This private method takes a field definition and creates the corresponding Angular component.
     * It handles component instantiation, input property mapping, and child component rendering.
     * The method validates input properties against the component's metadata and processes
     * child components recursively.
     *
     * @param {FieldDefinition<AngularFieldDefinition>} fieldDef - The field definition to convert
     * @param {ViewContainerRef} vcr - The view container reference for component creation
     * @param {Injector} injector - The Angular injector for dependency injection
     * @param {TemplateRef<any>} tpl - The template reference for content projection
     * @param {string} registryFormId - Form identifier for the component renderer
     * @return {AngularDynamicOutput} The Angular component output with component reference and inputs
     *
     * @mermaid
     * sequenceDiagram
     *   participant Method as fromFieldDefinition
     *   participant Components as NgxRenderingEngine.components
     *   participant Angular as Angular Core
     *   participant Process as processChild
     *
     *   Method->>Components: components(fieldDef.tag)
     *   Components-->>Method: component constructor
     *   Method->>Angular: reflectComponentType(component)
     *   Angular-->>Method: componentMetadata
     *   Method->>Method: Validate input properties
     *   Method->>Method: Create result object
     *   alt Has children
     *     Method->>Process: Process children recursively
     *     Process->>Method: Return processed children
     *     Method->>Angular: Create embedded view
     *     Method->>Method: Create component instance
     *   end
     *   Method-->>Caller: return AngularDynamicOutput
     */
    fromFieldDefinition(fieldDef, vcr, injector, tpl, registryFormId = Date.now().toString(36).toUpperCase()) {
        const cmp = fieldDef?.['component'] || NgxRenderingEngine.components(fieldDef.tag);
        const component = cmp.constructor;
        const componentMetadata = reflectComponentType(component);
        if (!componentMetadata) {
            throw new InternalError(`Metadata for component ${fieldDef.tag} not found.`);
        }
        const { inputs: possibleInputs } = componentMetadata;
        const inputs = { ...fieldDef.props };
        const unmappedKeys = Object.keys(inputs).filter(input => {
            const isMapped = possibleInputs.find(({ propName }) => propName === input);
            if (!isMapped)
                delete inputs[input];
            return !isMapped;
        });
        if (unmappedKeys.length > 0)
            console.warn(`Unmapped input properties for component ${fieldDef.tag}: ${unmappedKeys.join(', ')}`);
        const operation = NgxRenderingEngine._operation;
        const hiddenOn = inputs?.hidden || [];
        if (hiddenOn.includes(operation))
            return { inputs, injector };
        // const hiddenOn = inputs?.hidden || [];
        const result = {
            component,
            inputs,
            injector,
        };
        if (fieldDef.rendererId)
            result.inputs['rendererId'] = fieldDef.rendererId;
        // process children
        if (fieldDef.children?.length) {
            result.children = fieldDef.children.map((child) => {
                if (child?.children?.length) {
                    child.children = child.children.filter(c => {
                        const hiddenOn = c?.props?.hidden || [];
                        if (!hiddenOn.includes(operation))
                            return c;
                    });
                }
                // create a child form and add its controls as properties of child.props
                NgxFormService.addControlFromProps(registryFormId, child.props, inputs);
                return this.fromFieldDefinition(child, vcr, injector, tpl, registryFormId);
            });
        }
        // generating DOM
        vcr.clear();
        const template = vcr.createEmbeddedView(tpl, injector).rootNodes;
        const componentInstance = NgxRenderingEngine.createComponent(component, { ...inputs, model: this._model }, componentMetadata, vcr, injector, template);
        result.instance = NgxRenderingEngine._instance = componentInstance.instance;
        return result;
    }
    /**
     * @description Creates an Angular component instance
     * @summary This static utility method creates an Angular component instance with the specified
     * inputs and template. It uses Angular's component creation API to instantiate the component
     * and then sets the input properties using the provided metadata.
     *
     * @param {Type<unknown>} component - The component type to create
     * @param {KeyValue} [inputs={}] - The input properties to set on the component
     * @param {ComponentMirror<unknown>} metadata - The component metadata for input validation
     * @param {ViewContainerRef} vcr - The view container reference for component creation
     * @param {Injector} injector - The Angular injector for dependency injection
     * @param {Node[]} [template=[]] - The template nodes to project into the component
     * @return {ComponentRef<unknown>} The created component reference
     */
    static createComponent(component, inputs = {}, metadata, vcr, injector, template = []) {
        const componentInstance = vcr.createComponent(component, {
            environmentInjector: injector,
            projectableNodes: [template],
        });
        this.setInputs(componentInstance, inputs, metadata);
        return componentInstance;
    }
    /**
     * @description Extracts decorator metadata from a model
     * @summary This method provides access to the field definition generated from a model's
     * decorators. It's a convenience wrapper around the toFieldDefinition method that
     * converts a model to a field definition based on its decorators and the provided
     * global properties.
     *
     * @param {Model} model - The model to extract decorators from
     * @param {Record<string, unknown>} globalProps - Global properties to include in the field definition
     * @return {FieldDefinition<AngularFieldDefinition>} The field definition generated from the model
     */
    getDecorators(model, globalProps) {
        return this.toFieldDefinition(model, globalProps);
    }
    /**
     * @description Destroys the current engine instance
     * @summary This static method clears the current instance reference, effectively
     * destroying the singleton instance of the rendering engine. This can be used
     * to reset the engine state or to prepare for a new instance creation.
     *
     * @return {Promise<void>} A promise that resolves when the instance is destroyed
     */
    static async destroy() {
        NgxRenderingEngine._instance = undefined;
    }
    /**
     * @description Renders a model into an Angular component output
     * @summary This method takes a model and converts it to an Angular component output.
     * It first stores a reference to the model, then converts it to a field definition
     * using the base RenderingEngine's toFieldDefinition method, and finally converts
     * that field definition to an Angular component output using fromFieldDefinition.
     *
     * @template M - Type extending Model
     * @param {M} model - The model to render
     * @param {Record<string, unknown>} globalProps - Global properties to pass to the component
     * @param {ViewContainerRef} vcr - The view container reference for component creation
     * @param {Injector} injector - The Angular injector for dependency injection
     * @param {TemplateRef<any>} tpl - The template reference for content projection
     * @return {AngularDynamicOutput} The Angular component output with component reference and inputs
     *
     * @mermaid
     * sequenceDiagram
     *   participant Client as Client Code
     *   participant Render as render method
     *   participant ToField as toFieldDefinition
     *   participant FromField as fromFieldDefinition
     *
     *   Client->>Render: render(model, globalProps, vcr, injector, tpl)
     *   Render->>Render: Store model reference
     *   Render->>ToField: toFieldDefinition(model, globalProps)
     *   ToField-->>Render: fieldDef
     *   Render->>FromField: fromFieldDefinition(fieldDef, vcr, injector, tpl)
     *   FromField-->>Render: AngularDynamicOutput
     *   Render-->>Client: return AngularDynamicOutput
     */
    render(model, globalProps, vcr, injector, tpl) {
        let result;
        try {
            this._model = model;
            const formId = Date.now().toString(36).toUpperCase();
            const fieldDef = this.toFieldDefinition(model, globalProps);
            const props = fieldDef.props;
            if (!NgxRenderingEngine._operation)
                NgxRenderingEngine._operation = props?.['operation'] || undefined;
            result = this.fromFieldDefinition(fieldDef, vcr, injector, tpl, formId);
            result.instance['formGroup'] = NgxFormService.getControlFromForm(formId);
            NgxFormService.removeRegistry(formId);
        }
        catch (e) {
            throw new InternalError(`Failed to render Model ${model.constructor.name}: ${e}`);
        }
        return result;
    }
    /**
     * @description Initializes the rendering engine
     * @summary This method initializes the rendering engine. It checks if the engine is already initialized
     * and sets the initialized flag to true. This method is called before the engine is used
     * to ensure it's properly set up for rendering operations.
     *
     * @return {Promise<void>} A promise that resolves when initialization is complete
     */
    async initialize() {
        if (this.initialized)
            return;
        // ValidatableByType[]
        this.initialized = true;
    }
    /**
     * @description Registers a component with the rendering engine
     * @summary This static method registers a component constructor with the rendering engine
     * under a specific name. It initializes the components registry if needed and throws
     * an error if a component is already registered under the same name to prevent
     * accidental overrides.
     *
     * @param {string} name - The name to register the component under
     * @param {Constructor<unknown>} constructor - The component constructor
     * @return {void}
     */
    static registerComponent(name, constructor) {
        if (!this._components)
            this._components = {};
        if (name in this._components)
            throw new InternalError(`Component already registered under ${name}`);
        this._components[name] = {
            constructor: constructor,
        };
    }
    /**
     * @description Retrieves registered components from the rendering engine
     * @summary This static method retrieves either all registered components or a specific component
     * by its selector. When called without a selector, it returns an array of all registered
     * components. When called with a selector, it returns the specific component if found,
     * or throws an error if the component is not registered.
     *
     * @param {string} [selector] - Optional selector to retrieve a specific component
     * @return {Object|Array} Either a specific component or an array of all components
     */
    static components(selector) {
        if (!selector)
            return Object.values(this._components);
        if (!(selector in this._components))
            throw new InternalError(`No Component registered under ${selector}`);
        return this._components[selector];
    }
    /**
     * @description Generates a key for reflection metadata
     * @summary This static method generates a key for reflection metadata by prefixing the input key
     * with the Angular engine's reflection prefix. This is used for storing and retrieving
     * metadata in a namespaced way to avoid conflicts with other metadata.
     *
     * @param {string} key - The base key to prefix
     * @return {string} The prefixed key for reflection metadata
     */
    static key(key) {
        return `${AngularEngineKeys.REFLECT}${key}`;
    }
    /**
     * @description Sets input properties on a component instance
     * @summary This static utility method sets input properties on a component instance
     * based on the provided inputs object and component metadata. It handles both simple
     * values and nested objects, recursively processing object properties. The method
     * validates each input against the component's metadata to ensure only valid inputs
     * are set.
     *
     * @param {ComponentRef<unknown>} component - The component reference to set inputs on
     * @param {KeyValue} inputs - The input properties to set
     * @param {ComponentMirror<unknown>} metadata - The component metadata for input validation
     * @return {void}
     *
     * @mermaid
     * sequenceDiagram
     *   participant Caller
     *   participant SetInputs as setInputs
     *   participant Parse as parseInputValue
     *   participant Component as ComponentRef
     *
     *   Caller->>SetInputs: setInputs(component, inputs, metadata)
     *   SetInputs->>SetInputs: Iterate through inputs
     *   loop For each input
     *     SetInputs->>SetInputs: Check if input exists in metadata
     *     alt Input is 'props'
     *       SetInputs->>Parse: parseInputValue(component, value)
     *       Parse->>Parse: Recursively process nested objects
     *       Parse->>Component: setInput(key, value)
     *     else Input is valid
     *       SetInputs->>Component: setInput(key, value)
     *     end
     *   end
     */
    static setInputs(component, inputs, metadata) {
        function parseInputValue(component, input) {
            Object.keys(input).forEach(key => {
                const value = input[key];
                if (typeof value === 'object' && !!value)
                    return parseInputValue(component, value);
                component.setInput(key, value);
            });
        }
        Object.entries(inputs).forEach(([key, value]) => {
            const prop = metadata.inputs.find((item) => item.propName === key);
            if (prop) {
                if (key === 'props')
                    parseInputValue(component, value);
                // if(key === 'locale' && !value)
                //   value = getLocaleFromClassName(this._componentName);
                component.setInput(key, value);
            }
        });
    }
}

const _c0$a = ["componentViewContainer"];
const _c1$7 = ["inner"];
function ComponentRendererComponent_ng_template_1_Template(rf, ctx) { }
function ComponentRendererComponent_ng_template_3_Conditional_0_For_1_Conditional_0_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ComponentRendererComponent_ng_template_3_Conditional_0_For_1_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ComponentRendererComponent_ng_template_3_Conditional_0_For_1_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 4);
} if (rf & 2) {
    const child_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngComponentOutlet", child_r1.component)("ngComponentOutletInjector", child_r1.injector)("ngComponentOutletInputs", child_r1.inputs)("ngComponentOutletContent", child_r1.content);
} }
function ComponentRendererComponent_ng_template_3_Conditional_0_For_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-decaf-component-renderer", 3);
} if (rf & 2) {
    const child_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("parent", child_r1);
} }
function ComponentRendererComponent_ng_template_3_Conditional_0_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ComponentRendererComponent_ng_template_3_Conditional_0_For_1_Conditional_0_Template, 1, 4, "ng-container")(1, ComponentRendererComponent_ng_template_3_Conditional_0_For_1_Conditional_1_Template, 1, 1, "ngx-decaf-component-renderer", 3);
} if (rf & 2) {
    const child_r1 = ctx.$implicit;
    i0.ɵɵconditional(!(child_r1.children == null ? null : child_r1.children.length) ? 0 : 1);
} }
function ComponentRendererComponent_ng_template_3_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, ComponentRendererComponent_ng_template_3_Conditional_0_For_1_Template, 2, 1, null, null, i0.ɵɵrepeaterTrackByIdentity);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵrepeater(ctx_r1.parent.children);
} }
function ComponentRendererComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ComponentRendererComponent_ng_template_3_Conditional_0_Template, 2, 0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵconditional((ctx_r1.parent == null ? null : ctx_r1.parent.children == null ? null : ctx_r1.parent.children.length) ? 0 : -1);
} }
/**
 * @description Dynamic component renderer for Decaf Angular applications.
 * @summary This component provides a flexible way to dynamically render Angular components
 * at runtime based on a tag name. It handles the creation, property binding, and event
 * subscription for dynamically loaded components. This is particularly useful for
 * building configurable UIs where components need to be determined at runtime.
 *
 * @component {ComponentRendererComponent}
 * @example
 * <ngx-decaf-component-renderer
 *   [tag]="tag"
 *   [globals]="globals"
 *   (listenEvent)="listenEvent($event)">
 * </ngx-decaf-component-renderer>
 *
 * @mermaid
 * classDiagram
 *   class ComponentRendererComponent {
 *     +ViewContainerRef vcr
 *     +string tag
 *     +Record~string, unknown~ globals
 *     +EnvironmentInjector injector
 *     +ComponentRef~unknown~ component
 *     +EventEmitter~RendererCustomEvent~ listenEvent
 *     +ngOnInit()
 *     +ngOnDestroy()
 *     +ngOnChanges(changes)
 *     -createComponent(tag, globals)
 *     -subscribeEvents()
 *     -unsubscribeEvents()
 *   }
 *   ComponentRendererComponent --|> OnInit
 *   ComponentRendererComponent --|> OnChanges
 *   ComponentRendererComponent --|> OnDestroy
 *
 * @implements {OnInit}
 * @implements {OnChanges}
 * @implements {OnDestroy}
 */
class ComponentRendererComponent {
    /**
     * @description Creates an instance of ComponentRendererComponent.
     * @summary Initializes a new ComponentRendererComponent. This component doesn't require
     * any dependencies to be injected in its constructor as it uses the inject function to
     * obtain the EnvironmentInjector.
     *
     * @memberOf ComponentRendererComponent
     */
    constructor() {
        /**
         * @description Global properties to pass to the rendered component.
         * @summary This input property allows passing a set of properties to the dynamically
         * rendered component. These properties will be mapped to the component's inputs if they
         * match. Properties that don't match any input on the target component will be filtered out
         * with a warning.
         *
         * @type {Record<string, unknown>}
         * @default {}
         * @memberOf ComponentRendererComponent
         */
        this.globals = {};
        /**
         * @description Injector used for dependency injection in the dynamic component.
         * @summary This injector is used when creating the dynamic component to provide it with
         * access to the application's dependency injection system. It ensures that the dynamically
         * created component can access the same services and dependencies as statically created
         * components.
         *
         * @type {EnvironmentInjector}
         * @memberOf ComponentRendererComponent
         */
        this.injector = inject(EnvironmentInjector);
        /**
         * @description Event emitter for events from the rendered component.
         * @summary This output property emits events that originate from the dynamically rendered
         * component. It allows the parent component to listen for and respond to events from the
         * dynamic component, creating a communication channel between the parent and the dynamically
         * rendered child.
         *
         * @type {EventEmitter<RendererCustomEvent>}
         * @memberOf ComponentRendererComponent
         */
        this.listenEvent = new EventEmitter();
        this.parent = undefined;
        this.uid = generateRandomValue(12);
        this.logger = getLogger(this);
    }
    /**
     * @description Initializes the component after Angular first displays the data-bound properties.
     * @summary Sets up the component by creating the dynamic component specified by the tag input.
     * This method is called once when the component is initialized and triggers the dynamic
     * component creation process with the provided tag name and global properties.
     *
     * @mermaid
     * sequenceDiagram
     *   participant A as Angular Lifecycle
     *   participant C as ComponentRendererComponent
     *   participant R as NgxRenderingEngine
     *
     *   A->>C: ngOnInit()
     *   C->>C: createComponent(tag, globals)
     *   C->>R: components(tag)
     *   R-->>C: Return component constructor
     *   C->>C: Process component inputs
     *   C->>C: Create component instance
     *   C->>C: subscribeEvents()
     *
     * @return {void}
     * @memberOf ComponentRendererComponent
     */
    ngOnInit() {
        if (!this.parent) {
            this.createComponent(this.tag, this.globals);
        }
        else {
            this.createParentComponent();
        }
    }
    /**
     * @description Cleans up resources when the component is destroyed.
     * @summary Performs cleanup operations when the component is being destroyed by Angular.
     * This includes unsubscribing from all event emitters of the dynamic component and
     * destroying the rendering engine instance to prevent memory leaks.
     *
     * @mermaid
     * sequenceDiagram
     *   participant A as Angular Lifecycle
     *   participant C as ComponentRendererComponent
     *   participant R as NgxRenderingEngine
     *
     *   A->>C: ngOnDestroy()
     *   alt component exists
     *     C->>C: unsubscribeEvents()
     *     C->>R: destroy()
     *   end
     *
     * @return {Promise<void>} A promise that resolves when cleanup is complete
     * @memberOf ComponentRendererComponent
     */
    async ngOnDestroy() {
        if (this.component) {
            this.unsubscribeEvents();
            NgxRenderingEngine.destroy();
        }
    }
    /**
     * @description Creates and renders a dynamic component.
     * @summary This method handles the creation of a dynamic component based on the provided tag.
     * It retrieves the component constructor from the rendering engine, processes its inputs,
     * filters out unmapped properties, creates the component instance, and sets up event subscriptions.
     *
     * @param {string} tag - The tag name of the component to create
     * @param {KeyValue} globals - Global properties to pass to the component
     * @return {void}
     *
     * @mermaid
     * sequenceDiagram
     *   participant C as ComponentRendererComponent
     *   participant R as NgxRenderingEngine
     *   participant V as ViewContainerRef
     *
     *   C->>R: components(tag)
     *   R-->>C: Return component constructor
     *   C->>C: reflectComponentType(component)
     *   C->>C: Process input properties
     *   C->>C: Filter unmapped properties
     *   C->>V: clear()
     *   C->>R: createComponent(component, props, metadata, vcr, injector, [])
     *   R-->>C: Return component reference
     *   C->>C: subscribeEvents()
     *
     * @private
     * @memberOf ComponentRendererComponent
     */
    createComponent(tag, globals = {}) {
        const component = NgxRenderingEngine.components(tag)
            ?.constructor;
        const metadata = reflectComponentType(component);
        const componentInputs = metadata.inputs;
        const props = globals?.['item'] || globals?.['props'] || {};
        if (props?.['tag'])
            delete props['tag'];
        const inputKeys = Object.keys(props);
        const unmappedKeys = [];
        for (const input of inputKeys) {
            if (!inputKeys.length)
                break;
            const prop = componentInputs.find((item) => item.propName === input);
            if (!prop) {
                delete props[input];
                unmappedKeys.push(input);
            }
        }
        this.vcr.clear();
        this.component = NgxRenderingEngine.createComponent(component, props, metadata, this.vcr, this.injector, []);
        this.subscribeEvents();
    }
    createParentComponent() {
        const { component, inputs } = this.parent;
        const metadata = reflectComponentType(component);
        const template = this.vcr.createEmbeddedView(this.inner, this.injector).rootNodes;
        this.component = NgxRenderingEngine.createComponent(component, inputs, metadata, this.vcr, this.injector, template);
        this.subscribeEvents();
    }
    /**
     * @description Subscribes to events emitted by the dynamic component.
     * @summary This method sets up subscriptions to all EventEmitter properties of the
     * dynamically created component. When an event is emitted by the dynamic component,
     * it is captured and re-emitted through the listenEvent output property with additional
     * metadata about the event source.
     *
     * @mermaid
     * sequenceDiagram
     *   participant C as ComponentRendererComponent
     *   participant D as Dynamic Component
     *   participant P as Parent Component
     *
     *   C->>C: subscribeEvents()
     *   C->>D: Get instance properties
     *   loop For each property
     *     C->>C: Check if property is EventEmitter
     *     alt is EventEmitter
     *       C->>D: Subscribe to event
     *       D-->>C: Event emitted
     *       C->>P: Re-emit event with metadata
     *     end
     *   end
     *
     * @private
     * @return {void}
     * @memberOf ComponentRendererComponent
     */
    subscribeEvents() {
        if (this.component) {
            const instance = this.component?.instance;
            const componentKeys = Object.keys(instance);
            for (const key of componentKeys) {
                const value = instance[key];
                if (value instanceof EventEmitter)
                    instance[key].subscribe((event) => {
                        this.listenEvent.emit({
                            name: key,
                            ...event,
                        });
                    });
            }
        }
    }
    /**
     * @description Unsubscribes from all events of the dynamic component.
     * @summary This method cleans up event subscriptions when the component is being destroyed.
     * It iterates through all properties of the dynamic component instance and unsubscribes
     * from any EventEmitter properties to prevent memory leaks and unexpected behavior after
     * the component is destroyed.
     *
     * @mermaid
     * sequenceDiagram
     *   participant C as ComponentRendererComponent
     *   participant D as Dynamic Component
     *
     *   C->>C: unsubscribeEvents()
     *   C->>D: Get instance properties
     *   loop For each property
     *     C->>C: Check if property is EventEmitter
     *     alt is EventEmitter
     *       C->>D: Unsubscribe from event
     *     end
     *   end
     *
     * @private
     * @return {void}
     * @memberOf ComponentRendererComponent
     */
    unsubscribeEvents() {
        if (this.component) {
            const instance = this.component?.instance;
            const componentKeys = Object.keys(instance);
            for (const key of componentKeys) {
                const value = instance[key];
                if (value instanceof EventEmitter)
                    instance[key].unsubscribe();
            }
        }
    }
    static { this.ɵfac = function ComponentRendererComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ComponentRendererComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ComponentRendererComponent, selectors: [["ngx-decaf-component-renderer"]], viewQuery: function ComponentRendererComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$a, 7, ViewContainerRef);
            i0.ɵɵviewQuery(_c1$7, 7, TemplateRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.vcr = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inner = _t.first);
        } }, hostVars: 1, hostBindings: function ComponentRendererComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("id", ctx.rendererId);
        } }, inputs: { tag: "tag", globals: "globals", model: "model", parent: "parent" }, outputs: { listenEvent: "listenEvent" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 5, vars: 1, consts: [["componentViewContainer", ""], ["inner", ""], [3, "id"], [3, "parent"], [4, "ngComponentOutlet", "ngComponentOutletInjector", "ngComponentOutletInputs", "ngComponentOutletContent"]], template: function ComponentRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 2);
            i0.ɵɵtemplate(1, ComponentRendererComponent_ng_template_1_Template, 0, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(3, ComponentRendererComponent_ng_template_3_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("id", ctx.uid);
        } }, dependencies: [ComponentRendererComponent, ForAngularModule, i2.NgComponentOutlet] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ComponentRendererComponent, [{
        type: Component,
        args: [{ selector: 'ngx-decaf-component-renderer', imports: [ForAngularModule], standalone: true, host: { '[attr.id]': 'rendererId' }, template: "<!-- Keep to avoid id conflicts -->\n<div [id]=\"uid\"></div>\n\n<ng-template #componentViewContainer></ng-template>\n<ng-template #inner>\n  @if(parent?.children?.length) {\n    @for(child of parent.children; track child) {\n        @if(!child.children?.length) {\n          <ng-container\n                *ngComponentOutlet=\"\n                  child.component;\n                  injector: child.injector;\n                  inputs: child.inputs;\n                  content:child.content;\n                \"\n          />\n        } @else {\n          <ngx-decaf-component-renderer [parent]=\"child\"> </ngx-decaf-component-renderer>\n        }\n    }\n  }\n</ng-template>\n\n\n\n" }]
    }], () => [], { vcr: [{
            type: ViewChild,
            args: ['componentViewContainer', { static: true, read: ViewContainerRef }]
        }], tag: [{
            type: Input,
            args: [{ required: true }]
        }], globals: [{
            type: Input
        }], listenEvent: [{
            type: Output
        }], model: [{
            type: Input
        }], parent: [{
            type: Input
        }], inner: [{
            type: ViewChild,
            args: ['inner', { read: TemplateRef, static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ComponentRendererComponent, { className: "ComponentRendererComponent", filePath: "components/component-renderer/component-renderer.component.ts", lineNumber: 73 }); })();

/**
 * @class NgxCrudFormField
 * @implements {FieldProperties}
 * @implements {ControlValueAccessor}
 * @summary Abstract class representing a CRUD form field for Angular applications
 * @description This class provides the base implementation for CRUD form fields in Angular,
 * implementing both CrudFormField and ControlValueAccessor interfaces.
 */
class NgxCrudFormField {
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

/**
 * @description Marks an Angular component as dynamically loadable
 * @summary Decorator that registers an Angular component with the NgxRenderingEngine for dynamic loading.
 * This decorator must be applied before the @Component decorator to properly extract component metadata.
 * It adds metadata to the component class and registers it with the rendering engine using its selector.
 * @function Dynamic
 * @return {Function} A decorator function that can be applied to Angular component classes
 * @mermaid
 * sequenceDiagram
 *   participant C as Component Class
 *   participant D as Dynamic Decorator
 *   participant R as NgxRenderingEngine
 *   participant M as Angular Metadata
 *   C->>D: Apply decorator
 *   D->>M: reflectComponentType()
 *   M-->>D: Return component metadata
 *   alt No metadata found
 *     D->>D: Throw InternalError
 *   else Metadata found
 *     D->>R: registerComponent(selector, constructor)
 *     D->>C: Apply metadata
 *   end
 * @category Decorators
 */
function Dynamic() {
    return apply((original) => {
        const metadata = reflectComponentType(original);
        if (!metadata)
            throw new InternalError(`Could not find Component metadata. @Dynamic decorator must come above @Component`);
        NgxRenderingEngine.registerComponent(metadata.selector, original);
    }, metadata(NgxRenderingEngine.key(AngularEngineKeys.DYNAMIC), true));
}

class I18nLoader {
    static loadFromHttp(http) {
        function getSuffix() {
            const today = new Date();
            return `.json?version=${today.getFullYear()}${today.getMonth()}${today.getDay()}`;
        }
        return new (class extends TranslateHttpLoader {
            getTranslation(lang) {
                const res = super.getTranslation(lang);
                return res;
            }
        })(http, './assets/i18n/', getSuffix());
    }
}
function getLocaleContext(clazz, suffix) {
    return getLocaleFromClassName(clazz, suffix);
}
/**
 * @description Generates a localized string by combining locale and phrase
 * @summary This utility function creates a properly formatted locale string by combining
 * a locale identifier with a phrase. It handles edge cases such as empty phrases,
 * missing locales, and phrases that already include the locale prefix. This function
 * is useful for ensuring consistent formatting of localized strings throughout the application.
 *
 * @param {string} locale - The locale identifier (e.g., 'en', 'fr')
 * @param {string | undefined} phrase - The phrase to localize
 * @return {string} The formatted locale string, or empty string if phrase is undefined
 *
 * @function generateLocaleFromString
 * @memberOf module:for-angular
 */
function getLocaleContextByKey(locale, phrase) {
    if (!phrase)
        return locale;
    if (!locale || phrase.includes(`${locale}.`))
        return phrase;
    const parts = phrase.split(' ');
    return `${locale}.${cleanSpaces(parts.join('.'), true)}`;
}
const I18N_CONFIG_TOKEN = new InjectionToken('I18N_CONFIG_TOKEN');
function I18nLoaderFactory(http) {
    const { resources, versionedSuffix } = inject(I18N_CONFIG_TOKEN, { optional: true }) ?? getI18nLoaderFactoryProviderConfig().useValue;
    return new MultiI18nLoader(http, resources, versionedSuffix);
}
function getI18nLoaderFactoryProviderConfig(resources = [], versionedSuffix = false) {
    if (!Array.isArray(resources))
        resources = [resources];
    return {
        provide: I18N_CONFIG_TOKEN,
        useValue: { resources: [
                { prefix: './assets/i18n/', suffix: '.json' },
                ...resources
            ], versionedSuffix }
    };
}
class MultiI18nLoader {
    constructor(http, resources = [], versionedSuffix = false) {
        this.http = http;
        this.resources = resources;
        this.versionedSuffix = versionedSuffix;
    }
    getSuffix(suffix) {
        if (!this.versionedSuffix)
            return suffix;
        const today = new Date();
        return `${suffix}?version=${today.getFullYear()}${today.getMonth()}${today.getDay()}`;
    }
    getTranslation(lang) {
        const requests = this.resources.map(config => this.http.get(`${config.prefix}${lang}${this.getSuffix(config.suffix)}`));
        return forkJoin(requests).pipe(map(responseArray => {
            return responseArray.reduce((acc, current) => {
                return { ...acc, ...current };
            }, {});
        }));
    }
}

const _c0$9 = ["component"];
const _forTrack0$3 = ($index, $item) => $item.value;
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
    i0.ɵɵrepeaterCreate(4, CrudFieldComponent_Conditional_1_Conditional_6_For_5_Template, 3, 4, "ion-select-option", 13, _forTrack0$3);
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
            i0.ɵɵviewQuery(_c0$9, 5, ElementRef);
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
        } }, dependencies: [ForAngularModule, i1.IonText, i2$1.NgControlStatus, i2$1.NgControlStatusGroup, i2$1.RequiredValidator, i2$1.MinLengthValidator, i2$1.MaxLengthValidator, i2$1.PatternValidator, i2$1.FormGroupDirective, i2$1.FormControlName, i3.TranslatePipe, IonInput,
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

;
;

/**
 * @description Abstract base class for dynamic Angular modules
 * @summary The DynamicModule serves as a base class for Angular modules that need to be
 * dynamically loaded or configured at runtime. It provides a common type for the rendering
 * engine to identify and work with dynamic modules.
 * @class DynamicModule
 * @example
 * ```typescript
 * @NgModule({
 *   declarations: [MyComponent],
 *   imports: [CommonModule]
 * })
 * export class MyDynamicModule extends DynamicModule {}
 * ```
 */
class DynamicModule {
}

const _c0$8 = ["component"];
/**
 * @description Base component class that provides common functionality for all Decaf components.
 * @summary The NgxBaseComponent serves as the foundation for all Decaf UI components, providing
 * shared functionality for localization, element references, and styling. This abstract class
 * implements common properties and methods that are used across the component library, ensuring
 * consistent behavior and reducing code duplication. Components that extend this class inherit
 * its capabilities for handling translations, accessing DOM elements, and applying custom styling.
 *
 * @template M - The model type that this component works with
 * @param {string} instance - The component instance token used for identification
 * @param {string} locale - The locale to be used for translations
 * @param {StringOrBoolean} translatable - Whether the component should be translated
 * @param {string} className - Additional CSS classes to apply to the component
 * @param {"ios" | "md" | undefined} mode - Component platform style
 *
 * @component NgxBaseComponent
 * @example
 * ```typescript
 * @Component({
 *   selector: 'app-my-component',
 *   templateUrl: './my-component.component.html',
 *   styleUrls: ['./my-component.component.scss']
 * })
 * export class MyComponent extends NgxBaseComponent {
 *   constructor(@Inject('instanceToken') instance: string) {
 *     super(instance);
 *   }
 *
 *   ngOnInit() {
 *     this.initialize();
 *     // Component-specific initialization
 *   }
 * }
 * ```
 * @mermaid
 * sequenceDiagram
 *   participant App as Application
 *   participant Comp as Component
 *   participant Base as NgxBaseComponent
 *   participant Engine as NgxRenderingEngine
 *
 *   App->>Comp: Create component
 *   Comp->>Base: super(instance)
 *   Base->>Base: Set componentName & componentLocale
 *
 *   App->>Comp: Set @Input properties
 *   Comp->>Base: ngOnChanges(changes)
 *
 *   alt model changed
 *     Base->>Base: getModel(model)
 *     Base->>Engine: getDecorators(model, {})
 *     Engine-->>Base: Return decorator metadata
 *     Base->>Base: Configure mapper and item
 *     Base->>Base: getLocale(translatable)
 *   else locale/translatable changed
 *     Base->>Base: getLocale(translatable)
 *   end
 *
 *   App->>Comp: ngOnInit()
 *   Comp->>Base: initialize()
 *   Base->>Base: Set initialized flag
 */
class NgxBaseComponent {
    /**
     * @description Creates an instance of NgxBaseComponent.
     * @summary Initializes a new instance of the base component with the provided instance token.
     * This constructor sets up the fundamental properties required by all Decaf components,
     * including the component name, locale settings, and logging capabilities. The instance
     * token is used for component identification and locale derivation.
     *
     * The constructor performs the following initialization steps:
     * 1. Sets the componentName from the provided instance token
     * 2. Derives the componentLocale from the class name using utility functions
     * 3. Initializes the logger instance for the component
     *
     * @param {string} instance - The component instance token used for identification
     *
     * @mermaid
     * sequenceDiagram
     *   participant A as Angular
     *   participant C as Component
     *   participant B as NgxBaseComponent
     *   participant U as Utils
     *   participant L as Logger
     *
     *   A->>C: new Component(instance)
     *   C->>B: super(instance)
     *   B->>B: Set componentName = instance
     *   B->>U: getLocaleContext(instance)
     *   U-->>B: Return derived locale
     *   B->>B: Set componentLocale
     *   B->>L: getLogger(this)
     *   L-->>B: Return logger instance
     *   B->>B: Set logger
     *
     * @memberOf NgxBaseComponent
     */
    // eslint-disable-next-line @angular-eslint/prefer-inject
    constructor(instance) {
        this.instance = instance;
        /**
         * @description Dynamic properties configuration object.
         * @summary Contains key-value pairs of dynamic properties that can be applied to the component
         * at runtime. This flexible configuration object allows for dynamic property assignment without
         * requiring explicit input bindings for every possible configuration option. Properties from
         * this object are parsed and applied to the component instance through the parseProps method,
         * enabling customizable component behavior based on external configuration.
         *
         * @type {Record<string, unknown>}
         * @default {}
         * @memberOf NgxBaseComponent
         */
        this.props = {};
        /**
         * @description Configuration for list item rendering
         * @summary Defines how list items should be rendered in the component.
         * This property holds a configuration object that specifies the tag name
         * and other properties needed to render list items correctly. The tag property
         * identifies which component should be used to render each item in a list.
         * Additional properties can be included to customize the rendering behavior.
         *
         * @type {Record<string, unknown>}
         * @default {tag: ""}
         * @memberOf NgxBaseComponent
         */
        this.item = { tag: '' };
        /**
         * @description Available CRUD operations for this component.
         * @summary Defines which CRUD operations (Create, Read, Update, Delete) are available
         * for this component. This affects which operations can be performed on the data.
         *
         * @default [OperationKeys.READ]
         * @memberOf NgxBaseComponent
         */
        this.operations = [OperationKeys.READ];
        /**
         * @description Field mapping configuration.
         * @summary Defines how fields from the data model should be mapped to properties used by the component.
         * This allows for flexible data binding between the model and the component's display logic.
         *
         * @type {Record<string, string>}
         * @memberOf NgxBaseComponent
         */
        this.mapper = {};
        /**
         * @description Determines if the component should be translated.
         * @summary Controls whether the component's text content should be processed for translation.
         * When true, the component will attempt to translate text using the specified locale.
         * When false, text is displayed as-is without translation. This property accepts either
         * a boolean value or a string that can be converted to a boolean (e.g., 'true', 'false', '1', '0').
         *
         * @type {StringOrBoolean}
         * @default false
         * @memberOf NgxBaseComponent
         */
        this.translatable = true;
        /**
         * @description Additional CSS class names to apply to the component.
         * @summary Allows custom CSS classes to be added to the component's root element.
         * These classes are appended to any automatically generated classes based on other
         * component properties. Multiple classes can be provided as a space-separated string.
         * This provides a way to customize the component's appearance beyond the built-in styling options.
         *
         * @type {string}
         * @default ""
         * @memberOf NgxBaseComponent
         */
        this.className = '';
        /**
         * @description Component platform style.
         * @summary Controls the visual appearance of the component based on platform design guidelines.
         * The 'ios' mode follows iOS design patterns, while 'md' (Material Design) follows Android/Google
         * design patterns. This property affects various visual aspects such as animations, form elements,
         * and icons. Setting this property allows components to maintain platform-specific styling
         * for a more native look and feel.
         *
         * @type {("ios" | "md" | undefined)}
         * @default "md"
         * @memberOf NgxBaseComponent
         */
        this.mode = 'md';
        /**
         * @description Controls whether child components should be rendered
         * @summary Determines if child components should be rendered by the component.
         * This can be set to a boolean value or a string that can be converted to a boolean.
         * When true, child components defined in the model will be rendered. When false,
         * child components will be skipped. This provides control over the rendering depth.
         *
         * @type {string | StringOrBoolean}
         * @default true
         * @memberOf NgxBaseComponent
         */
        this.renderChild = true;
        /**
         * @description Flag indicating if the component has been initialized
         * @summary Tracks whether the component has completed its initialization process.
         * This flag is used to prevent duplicate initialization and to determine if
         * certain operations that require initialization can be performed.
         *
         * @type {boolean}
         * @default false
         */
        this.initialized = false;
        /**
         * @description Event emitter for custom renderer events.
         * @summary Emits custom events that occur within child components or the layout itself.
         * This allows parent components to listen for and respond to user interactions or
         * state changes within the grid layout. Events are passed up the component hierarchy
         * to enable coordinated behavior across the application.
         *
         * @type {EventEmitter<RendererCustomEvent>}
         * @memberOf NgxBaseComponent
         */
        this.listenEvent = new EventEmitter();
        /**
         * @description Reference to the rendering engine instance
         * @summary Provides access to the NgxRenderingEngine singleton instance,
         * which handles the rendering of components based on model definitions.
         * This engine is used to extract decorator metadata and render child components.
         *
         * @type {NgxRenderingEngine}
         */
        this.renderingEngine = NgxRenderingEngine.get();
        this.componentName = instance;
        this.componentLocale = getLocaleContext(instance);
        this.logger = getLogger(this);
        this.getLocale(this.translatable);
        this.uid = generateRandomValue(12);
    }
    /**
     * @description Getter for the repository instance.
     * @summary Provides a connection to the data layer for retrieving and manipulating data.
     * This method initializes the `_repository` property if it is not already set, ensuring
     * that a single instance of the repository is used throughout the component.
     *
     * The repository is used to perform CRUD operations on the data model, such as fetching data,
     * creating new items, updating existing items, and deleting items. It also provides methods
     * for querying and filtering data based on specific criteria.
     *
     * @returns {DecafRepository<Model>} The initialized repository instance.
     * @private
     * @memberOf NgxBaseComponent
     */
    get repository() {
        try {
            if (!this._repository) {
                const modelName = this.model.constructor.name;
                const constructor = Model.get(modelName);
                if (!constructor)
                    throw new InternalError('Cannot find model. was it registered with @model?');
                let dbAdapterFlavour = getOnWindow('dbAdapterFlavour');
                if (!dbAdapterFlavour && isDevelopmentMode()) {
                    const adapter = new RamAdapter({ user: 'user' });
                    dbAdapterFlavour = adapter.flavour;
                }
                this._repository = Repository.forModel(constructor, dbAdapterFlavour);
                this.model = new constructor();
                if (this.model && !this.pk)
                    this.pk =
                        this._repository.pk || 'id';
            }
        }
        catch (error) {
            throw new InternalError(error?.message || error);
        }
        return this._repository;
    }
    /**
     * @description Handles changes to component inputs
     * @summary This Angular lifecycle hook is called when input properties change.
     * It responds to changes in the model, locale, or translatable properties by
     * updating the component's internal state accordingly. When the model changes,
     * it calls getModel to process the new model and getLocale to update the locale.
     * When locale or translatable properties change, it calls getLocale to update
     * the translation settings.
     *
     * @param {SimpleChanges} changes - Object containing changed properties
     * @return {void}
     */
    ngOnChanges(changes) {
        if (changes[BaseComponentProps.MODEL]) {
            const { currentValue } = changes[BaseComponentProps.MODEL];
            if (currentValue)
                this.getModel(currentValue);
            this.getLocale(this.translatable);
        }
        if (changes[BaseComponentProps.INITIALIZED] ||
            changes[BaseComponentProps.LOCALE] ||
            changes[BaseComponentProps.TRANSLATABLE])
            this.getLocale(this.translatable);
    }
    /**
     * @description Gets the appropriate locale string based on the translatable flag and available locales.
     * @summary Determines which locale string to use for translation based on the translatable flag
     * and available locale settings. This method first converts the translatable parameter to a boolean
     * using the stringToBoolean utility function. If translatable is false, it returns an empty string,
     * indicating no translation should be performed. If translatable is true, it checks for an explicitly
     * provided locale via the locale property. If no explicit locale is available, it falls back to the
     * componentLocale derived from the component's class name.
     *
     * @param {StringOrBoolean} translatable - Whether the component should be translated
     * @return {string} The locale string to use for translation, or empty string if not translatable
     *
     * @mermaid
     * sequenceDiagram
     *   participant C as Component
     *   participant N as NgxBaseComponent
     *   participant S as StringUtils
     *
     *   C->>N: getLocale(translatable)
     *   N->>S: stringToBoolean(translatable)
     *   S-->>N: Return boolean value
     *   N->>N: Store in this.translatable
     *   alt translatable is false
     *     N-->>C: Return empty string
     *   else translatable is true
     *     alt this.locale is defined
     *       N-->>C: Return this.locale
     *     else this.locale is not defined
     *       N-->>C: Return this.componentLocale
     *     end
     *   end
     */
    getLocale(translatable) {
        this.translatable = stringToBoolean(translatable);
        if (!this.translatable)
            return '';
        if (!this.locale)
            this.locale = this.componentLocale;
        return this.locale;
    }
    /**
     * @description Gets the route for the component
     * @summary Retrieves the route path for the component, generating one based on the model
     * if no route is explicitly set. This method checks if a route is already defined, and if not,
     * it creates a default route based on the model's constructor name. The generated route follows
     * the pattern '/model/{ModelName}'. This is useful for automatic routing in CRUD operations.
     *
     * @return {string} The route path for the component, or empty string if no route is available
     */
    getRoute() {
        if (!this.route && this.model instanceof Model)
            this.route = `/model/${this.model?.constructor.name}`;
        return this.route || '';
    }
    /**
     * @description Resolves and sets the component's model
     * @summary Processes the provided model parameter, which can be either a Model instance
     * or a string identifier. If a string is provided, it attempts to resolve the actual model
     * from the injectables registry. After resolving the model, it calls setModelDefinitions
     * to configure the component based on the model's metadata.
     *
     * @param {string | Model} model - The model instance or identifier string
     * @return {void}
     */
    getModel(model) {
        if (!(model instanceof Model))
            this.model = getInjectablesRegistry().get(model);
        this.setModelDefinitions(this.model);
    }
    /**
     * @description Configures component properties based on model metadata
     * @summary Extracts and applies configuration from the model's decorators to set up
     * the component. This method uses the rendering engine to retrieve decorator metadata
     * from the model, then configures the component's mapper and item properties accordingly.
     * It ensures the route is properly set and merges various properties from the model's
     * metadata into the component's configuration.
     *
     * @param {Model} model - The model to extract configuration from
     * @return {void}
     */
    setModelDefinitions(model) {
        if (model instanceof Model) {
            this.getRoute();
            this.model = model;
            const field = this.renderingEngine.getDecorators(this.model, {});
            const { props, item, children } = field;
            this.props = Object.assign(props || {}, { children: children || [] });
            if (item?.props?.['mapper'])
                this.mapper = item?.props['mapper'] || {};
            this.item = {
                tag: item?.tag || '',
                ...item?.props,
                ...(this.mapper ? { mapper: this.mapper } : {}),
                ...{ route: item?.props?.['route'] || this.route },
            };
        }
    }
    /**
     * @description Initializes the component
     * @summary Performs one-time initialization of the component. This method checks if
     * the component has already been initialized to prevent duplicate initialization.
     * When called for the first time, it sets the initialized flag to true and logs
     * an initialization message with the component name. This method is typically called
     * during the component's lifecycle setup.
     */
    initialize() {
        this.initialized = true;
    }
    /**
     * @description Handles custom events from child components.
     * @summary Receives events from child renderer components and forwards them to parent
     * components through the listenEvent output. This creates an event propagation chain
     * that allows events to bubble up through the component hierarchy, enabling coordinated
     * responses to user interactions across the layout structure.
     *
     * @param {RendererCustomEvent} event - The custom event from a child component
     * @return {void}
     *
     * @mermaid
     * sequenceDiagram
     *   participant C as Child Component
     *   participant L as NgxBaseComponent
     *   participant P as Parent Component
     *
     *   C->>L: Emit RendererCustomEvent
     *   L->>L: handleEvent(event)
     *   L->>P: listenEvent.emit(event)
     *   Note over P: Handle event in parent
     *
     * @memberOf NgxBaseComponent
     */
    handleEvent(event) {
        this.listenEvent.emit(event);
    }
    /**
     * @description Tracks items in ngFor loops for optimal change detection.
     * @summary Provides a tracking function for Angular's *ngFor directive to optimize rendering
     * performance. This method generates unique identifiers for list items based on their index
     * and content, allowing Angular to efficiently track changes and minimize DOM manipulations
     * during list updates. The tracking function is essential for maintaining component state
     * and preventing unnecessary re-rendering of unchanged items.
     *
     * @param {number} index - The index of the item in the list
     * @param {KeyValue | string | number} item - The item data to track
     * @returns {string | number} A unique identifier for the item
     * @memberOf NgxBaseComponent
     */
    trackItemFn(index, item) {
        return `${index}-${item}`;
    }
    /**
     * @description Parses and applies properties from the props object to the component instance.
     * @summary This method iterates through the properties of the provided instance object
     * and applies any matching properties from the component's props configuration to the
     * component instance. This allows for dynamic property assignment based on configuration
     * stored in the props object, enabling flexible component customization without requiring
     * explicit property binding for every possible configuration option.
     *
     * The method performs a safe property assignment by checking if each key from the instance
     * exists in the props object before applying it. This prevents accidental property
     * overwriting and ensures only intended properties are modified.
     *
     * @param {KeyValue} instance - The component instance object to process
     * @return {void}
     *
     * @mermaid
     * sequenceDiagram
     *   participant C as Component
     *   participant B as NgxBaseComponent
     *   participant P as Props Object
     *
     *   C->>B: parseProps(instance)
     *   B->>B: Get Object.keys(instance)
     *   loop For each key in instance
     *     B->>P: Check if key exists in this.props
     *     alt Key exists in props
     *       B->>B: Set this[key] = this.props[key]
     *     else Key not in props
     *       Note over B: Skip this key
     *     end
     *   end
     *
     * @protected
     * @memberOf NgxBaseComponent
     */
    parseProps(instance) {
        Object.keys(instance).forEach((key) => {
            if (Object.keys(this.props).includes(key))
                this[key] = this.props[key];
        });
    }
    static { this.ɵfac = function NgxBaseComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NgxBaseComponent)(i0.ɵɵdirectiveInject('instanceToken')); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxBaseComponent, selectors: [["ng-component"]], viewQuery: function NgxBaseComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$8, 7, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.component = _t.first);
        } }, hostVars: 1, hostBindings: function NgxBaseComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("id", ctx.uid);
        } }, inputs: { rendererId: "rendererId", model: "model", props: "props", item: "item", pk: "pk", route: "route", operations: "operations", uid: "uid", mapper: "mapper", locale: "locale", translatable: "translatable", className: "className", mode: "mode", renderChild: "renderChild" }, outputs: { listenEvent: "listenEvent" }, standalone: true, features: [i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 0, template: function NgxBaseComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div");
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxBaseComponent, [{
        type: Component,
        args: [{
                standalone: true,
                template: '<div></div>',
                host: { '[attr.id]': 'uid' },
            }]
    }], () => [{ type: undefined, decorators: [{
                type: Inject,
                args: ['instanceToken']
            }] }], { component: [{
            type: ViewChild,
            args: ['component', { read: ElementRef, static: true }]
        }], rendererId: [{
            type: Input
        }], model: [{
            type: Input
        }], props: [{
            type: Input
        }], item: [{
            type: Input
        }], pk: [{
            type: Input
        }], route: [{
            type: Input
        }], operations: [{
            type: Input
        }], uid: [{
            type: Input
        }], mapper: [{
            type: Input
        }], locale: [{
            type: Input
        }], translatable: [{
            type: Input
        }], className: [{
            type: Input
        }], mode: [{
            type: Input
        }], renderChild: [{
            type: Input
        }], listenEvent: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NgxBaseComponent, { className: "NgxBaseComponent", filePath: "engine/NgxBaseComponent.ts", lineNumber: 102 }); })();

/**
 * @module engine
 * @description Angular rendering engine for Decaf applications
 * @summary The engine module provides core functionality for rendering Angular components
 * in Decaf applications. It includes constants, decorators, rendering engines, and utility types
 * that enable dynamic component creation, property mapping, and component lifecycle management.
 * Key exports include {@link NgxRenderingEngine}, {@link DynamicModule}, and various decorators
 * for component configuration.
 */

const CssClasses = {
    BUTTONS_CONTAINER: 'buttons-container',
};
const DefaultFormReactiveOptions = {
    buttons: {
        submit: {
            text: 'Submit',
        },
        clear: {
            text: 'Clear',
        },
    },
};

const _c0$7 = ["reactiveForm"];
const _c1$6 = ["*"];
const _c2$3 = (a0, a1, a2) => [a0, a1, a2];
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
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpureFunction3(2, _c2$3, ctx_r1.OperationKeys.DELETE, ctx_r1.OperationKeys.READ, ctx_r1.OperationKeys.UPDATE).includes(ctx_r1.operation) ? "Back" : ctx_r1.options.buttons.clear == null ? null : ctx_r1.options.buttons.clear.text, " ");
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
            i0.ɵɵviewQuery(_c0$7, 5, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.component = _t.first);
        } }, hostVars: 1, hostBindings: function CrudFormComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("id", ctx.uid);
        } }, inputs: { model: "model", modelId: "modelId", updateOn: "updateOn", target: "target", method: "method", options: "options", action: "action", operation: "operation", handlers: "handlers", formGroup: "formGroup", childOf: "childOf", rendererId: "rendererId", uid: "uid", allowClear: "allowClear" }, outputs: { submitEvent: "submitEvent" }, standalone: true, features: [i0.ɵɵStandaloneFeature], ngContentSelectors: _c1$6, decls: 2, vars: 1, consts: [["reactiveForm", ""], ["novalidate", "", 3, "id", "formGroup", "target"], [3, "class", "id"], ["novalidate", "", 3, "submit", "id", "formGroup", "target"], [1, "dcf-buttons-container", "dcf-grid", "dcf-grid-collapse", "dcf-flex", "dcf-flex-left"], ["type", "submit"], ["aria-hidden", "true", 3, "slot", "name"], ["fill", "clear", 3, "click"], [3, "id"], ["color", "danger", "type", "button", 3, "click"]], template: function CrudFormComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, CrudFormComponent_Conditional_0_Template, 9, 6, "form", 1)(1, CrudFormComponent_Conditional_1_Template, 4, 6, "div", 2);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.operation !== "read" && ctx.operation !== "delete" ? 0 : 1);
        } }, dependencies: [ForAngularModule, i1.IonButton, i2$1.ɵNgNoValidate, i2$1.NgControlStatusGroup, i2$1.FormGroupDirective, IonIcon], styles: [".dcf-buttons-container[_ngcontent-%COMP%]{margin-top:1.8rem;margin-bottom:0}@media (min-width: 991px){.dcf-buttons-container.dcf-flex[_ngcontent-%COMP%]{flex-direction:row-reverse}}@media (max-width: 990px){.dcf-buttons-container.dcf-flex[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%}.dcf-buttons-container.dcf-flex[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:100%;margin-bottom:1rem}}form[_ngcontent-%COMP%]{padding:2rem 1rem}"] }); }
};
CrudFormComponent = __decorate([
    Dynamic()
], CrudFormComponent);
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

function EmptyStateComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelement(1, "ion-icon", 3);
    i0.ɵɵelementEnd();
} }
function EmptyStateComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "h5", 4);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r0.titleColor);
    i0.ɵɵproperty("innerHTML", ctx_r0.title, i0.ɵɵsanitizeHtml);
} }
function EmptyStateComponent_Conditional_4_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p", 4);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r0.subtitleColor);
    i0.ɵɵproperty("innerHTML", ctx_r0.subtitle, i0.ɵɵsanitizeHtml);
} }
function EmptyStateComponent_Conditional_4_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p", 4);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r0.subtitleColor);
    i0.ɵɵproperty("innerHTML", ctx_r0.searchSubtitle, i0.ɵɵsanitizeHtml);
} }
function EmptyStateComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, EmptyStateComponent_Conditional_4_Conditional_0_Template, 1, 3, "p", 2)(1, EmptyStateComponent_Conditional_4_Conditional_1_Template, 1, 3, "p", 2);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵconditional(!ctx_r0.searchValue ? 0 : 1);
} }
function EmptyStateComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "ion-button", 5);
    i0.ɵɵlistener("click", function EmptyStateComponent_Conditional_5_Template_ion_button_click_1_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.handleClick()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("size", ctx_r0.buttonSize)("fill", ctx_r0.buttonFill)("color", ctx_r0.buttonColor);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.buttonText, " ");
} }
/**
 * @description Component for displaying empty state messages with optional actions.
 * @summary This component provides a standardized way to display empty state messages
 * when no data is available or when a user needs to take an action to populate content.
 * It includes customizable title, subtitle, icon, and action button elements that can be
 * styled and configured through input properties. The component supports localization
 * and can trigger navigation or custom actions when the button is clicked.
 *
 * @mermaid
 * classDiagram
 *   class EmptyStateComponent {
 *     +string title
 *     +string titleColor
 *     +string subtitle
 *     +string subtitleColor
 *     +StringOrBoolean showIcon
 *     +string icon
 *     +string iconSize
 *     +string iconColor
 *     +string|Function buttonLink
 *     +string buttonText
 *     +string buttonFill
 *     +string buttonColor
 *     +string buttonSize
 *     +string searchValue
 *     -Router Router
 *     +ngOnInit()
 *     +handleClick()
 *   }
 *   EmptyStateComponent --|> NgxBaseComponent
 *   EmptyStateComponent --|> OnInit
 *
 * @extends {NgxBaseComponent}
 * @implements {OnInit}
 */
let EmptyStateComponent = class EmptyStateComponent extends NgxBaseComponent {
    /**
     * @description Creates an instance of EmptyStateComponent.
     * @summary Initializes a new EmptyStateComponent by calling the parent class constructor
     * with the component name for logging and identification purposes. This component provides
     * a standardized way to display empty state messages with optional icons and action buttons.
     *
     * @memberOf EmptyStateComponent
     */
    constructor() {
        super("EmptyStateComponent");
        /**
         * @description The main title displayed in the empty state.
         * @summary Specifies the primary message to show in the empty state component.
         * This text is typically used to inform the user about why they're seeing an empty view.
         * If translatable is true, this will be processed through the localization system.
         *
         * @type {string}
         * @default "title"
         * @memberOf EmptyStateComponent
         */
        this.title = "title";
        /**
         * @description The color of the title text.
         * @summary Specifies the color for the title text using the application's color system.
         * The value should correspond to a color variable defined in the application's theme.
         * The component will automatically prefix this with "color-" to create the CSS class.
         *
         * @type {string}
         * @default 'gray-6'
         * @memberOf EmptyStateComponent
         */
        this.titleColor = 'gray-6';
        /**
         * @description The secondary message displayed in the empty state.
         * @summary Provides additional context or instructions below the main title.
         * This text is typically used to guide the user on what actions they can take.
         * If translatable is true, this will be processed through the localization system.
         *
         * @type {string | undefined}
         * @memberOf EmptyStateComponent
         */
        this.subtitle = "";
        /**
         * @description The color of the subtitle text.
         * @summary Specifies the color for the subtitle text using the application's color system.
         * The value should correspond to a color variable defined in the application's theme.
         * The component will automatically prefix this with "color-" to create the CSS class.
         *
         * @type {string}
         * @default 'gray-4'
         * @memberOf EmptyStateComponent
         */
        this.subtitleColor = 'gray-4';
        /**
         * @description Controls whether the icon is displayed.
         * @summary Determines if the visual icon should be shown in the empty state.
         * This can be provided as a boolean or a string that will be converted to a boolean.
         * Icons help visually communicate the empty state context to users.
         *
         * @type {StringOrBoolean}
         * @default true
         * @memberOf EmptyStateComponent
         */
        this.showIcon = true;
        /**
         * @description The name of the icon to display.
         * @summary Specifies which icon to show when showIcon is true.
         * The component uses the icon system defined in the application,
         * and this value should correspond to an available icon name.
         *
         * @type {string}
         * @default "ti-info-square-rounded"
         * @memberOf EmptyStateComponent
         */
        this.icon = "ti-info-square-rounded";
        /**
         * @description The size of the displayed icon.
         * @summary Controls the size of the icon shown in the empty state.
         * Can be either 'large' or 'small' to accommodate different layout needs.
         *
         * @type {'large' | 'small' | undefined}
         * @default 'large'
         * @memberOf EmptyStateComponent
         */
        this.iconSize = 'large';
        /**
         * @description The color of the displayed icon.
         * @summary Specifies the color for the icon using Ionic's predefined color system.
         * This allows the icon to match the application's color scheme.
         *
         * @type {PredefinedColors | undefined}
         * @default 'medium'
         * @memberOf EmptyStateComponent
         */
        this.iconColor = 'medium';
        /**
         * @description The fill style of the action button.
         * @summary Controls the visual style of the button using Ionic's button fill options.
         * 'solid' creates a button with a solid background, 'outline' creates a button with
         * just a border, and 'clear' creates a button with no background or border.
         *
         * @type {'clear' | 'solid' | 'outline'}
         * @default 'solid'
         * @memberOf EmptyStateComponent
         */
        this.buttonFill = 'solid';
        /**
         * @description The color of the action button.
         * @summary Specifies the color for the button using Ionic's color system.
         * This allows the button to match the application's color scheme.
         *
         * @type {string}
         * @default 'primary'
         * @memberOf EmptyStateComponent
         */
        this.buttonColor = 'primary';
        /**
         * @description The size of the action button.
         * @summary Controls the size of the button shown in the empty state.
         * Can be 'large', 'small', or 'default' to accommodate different layout needs.
         *
         * @type {'large' | 'small' | 'default'}
         * @default 'default'
         * @memberOf EmptyStateComponent
         */
        this.buttonSize = 'default';
        /**
         * @description Service for handling navigation operations.
         * @summary Injected service that provides methods for navigating between routes.
         * This service is used when the buttonLink is a string URL to navigate to that location.
         *
         * @private
         * @type {Router}
         * @memberOf EmptyStateComponent
         */
        this.router = inject(Router);
        this.sanitizer = inject(DomSanitizer);
        this.translate = inject(TranslateService);
        addIcons(allIcons);
    }
    /**
     * @description Initializes the component after Angular first displays the data-bound properties.
     * @summary Sets up the component by processing boolean inputs, applying localization to text
     * elements if translation is enabled, and formatting CSS classes for title and subtitle colors.
     * This method prepares the component for user interaction by ensuring all properties are
     * properly initialized and localized.
     *
     * @mermaid
     * sequenceDiagram
     *   participant A as Angular Lifecycle
     *   participant E as EmptyStateComponent
     *
     *   A->>E: ngOnInit()
     *   E->>E: Process translatable flag
     *   E->>E: Process showIcon flag
     *   E->>E: Get locale settings
     *   alt translatable is true
     *     E->>E: Localize title
     *     E->>E: Localize subtitle
     *     E->>E: Localize buttonText
     *   end
     *   E->>E: Format title CSS class
     *   E->>E: Format subtitle CSS class
     *
     * @return {Promise<void>}
     * @memberOf EmptyStateComponent
     */
    async ngOnInit() {
        this.parseProps(this);
        this.translatable = stringToBoolean(this.translatable);
        this.showIcon = stringToBoolean(this.showIcon);
        this.locale = this.getLocale(this.translatable);
        // if(this.translatable) {
        //   this.title = generateLocaleFromString(this.locale, this.title);
        //   this.subtitle = generateLocaleFromString(this.locale, this.subtitle);
        //   this.buttonText = generateLocaleFromString(this.locale, this.buttonText);
        // }
        this.titleColor = `dcf-title color-${this.titleColor}`;
        this.subtitleColor = `dcf-subtitle color-${this.titleColor}`;
        if (this.searchValue && this.translatable)
            this.searchSubtitle = await this.getSearchSubtitle(this.subtitle);
    }
    /**
     * @description Handles click events on the action button.
     * @summary This method is triggered when the user clicks the action button in the empty state
     * component. It supports three navigation patterns: 1) no action when buttonLink is not provided,
     * 2) custom function execution when buttonLink is a function, and 3) navigation to a specific URL
     * when buttonLink is a string. This flexibility allows the empty state to trigger various actions
     * based on the context in which it's used.
     *
     * @mermaid
     * sequenceDiagram
     *   participant U as User
     *   participant E as EmptyStateComponent
     *   participant N as Router
     *
     *   U->>E: Click action button
     *   E->>E: handleClick()
     *   alt buttonLink is not provided
     *     E-->>U: Return false (no action)
     *   else buttonLink is a function
     *     E->>E: Execute buttonLink function
     *     E-->>U: Return function result
     *   else buttonLink is a URL string
     *     E->>N: navigateForward(buttonLink)
     *     N-->>E: Return navigation result
     *     E-->>U: Return navigation result
     *   end
     *
     * @return {boolean | void | Promise<boolean>}
     *   - false if no action is taken
     *   - The result of the buttonLink function if it's a function
     *   - A Promise resolving to the navigation result if buttonLink is a URL
     * @memberOf EmptyStateComponent
     */
    handleClick() {
        const fn = this.buttonLink;
        if (!fn)
            return false;
        if (fn instanceof Function)
            return fn();
        this.router.navigate([fn]);
    }
    /**
      * @description Generates a localized and sanitized subtitle for search results.
      * @summary This method takes a content string, typically the subtitle, and processes it
      * through the translation service. It replaces a placeholder ('value0') with the actual
      * search value, then sanitizes the result to safely use as HTML. This is particularly
      * useful for displaying dynamic, localized messages in the empty state when a search
      * yields no results.
      *
      * @param {string} content - The content string to be translated and processed
      * @return {Promise<SafeHtml>} A promise that resolves to a sanitized HTML string
      *
      * @mermaid
      * sequenceDiagram
      *   participant E as EmptyStateComponent
      *   participant T as TranslateService
      *   participant S as DomSanitizer
      *
      *   E->>T: instant(content, {'value0': searchValue})
      *   T-->>E: Return translated string
      *   E->>S: bypassSecurityTrustHtml(translatedString)
      *   S-->>E: Return sanitized SafeHtml
      *
      * @memberOf EmptyStateComponent
      */
    async getSearchSubtitle(content) {
        const result = await this.translate.instant(content, { 'value0': this.searchValue });
        return this.sanitizer.bypassSecurityTrustHtml(result);
    }
    static { this.ɵfac = function EmptyStateComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EmptyStateComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EmptyStateComponent, selectors: [["ngx-decaf-empty-state"]], inputs: { title: "title", titleColor: "titleColor", subtitle: "subtitle", subtitleColor: "subtitleColor", showIcon: "showIcon", icon: "icon", iconSize: "iconSize", iconColor: "iconColor", buttonLink: "buttonLink", buttonText: "buttonText", buttonFill: "buttonFill", buttonColor: "buttonColor", buttonSize: "buttonSize", searchValue: "searchValue" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 6, vars: 6, consts: [[3, "id", "ngClass"], [1, "dcf-icon-container"], [3, "class", "innerHTML"], ["name", "alert-circle-outline", "size", "large", "color", "danger"], [3, "innerHTML"], [3, "click", "size", "fill", "color"]], template: function EmptyStateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ion-card", 0)(1, "ion-card-content");
            i0.ɵɵtemplate(2, EmptyStateComponent_Conditional_2_Template, 2, 0, "div", 1)(3, EmptyStateComponent_Conditional_3_Template, 1, 3, "h5", 2)(4, EmptyStateComponent_Conditional_4_Template, 2, 1)(5, EmptyStateComponent_Conditional_5_Template, 3, 4, "div");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("id", ctx.uid)("ngClass", ctx.className);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.icon && ctx.showIcon ? 2 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.title ? 3 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.subtitle ? 4 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.buttonLink && ctx.buttonText ? 5 : -1);
        } }, dependencies: [ForAngularModule, i1.IonButton, i2.NgClass, IonCard,
            IonCardContent,
            IonIcon], styles: ["ion-card[_ngcontent-%COMP%]{text-align:center}ion-card[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-top:.75rem}ion-card[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:2.5rem}ion-card[_ngcontent-%COMP%]   .dcf-icon-container[_ngcontent-%COMP%]{transform:scale(1.25);opacity:.75;margin-top:1.25rem!important;margin-bottom:.5rem!important}ion-card[_ngcontent-%COMP%]   .dcf-ititle[_ngcontent-%COMP%]{font-weight:600!important;color:var(--dcf-color-gray-6)!important}ion-card[_ngcontent-%COMP%]   .dcf-isubtitle[_ngcontent-%COMP%]{font-weight:500!important}"] }); }
};
EmptyStateComponent = __decorate([
    Dynamic(),
    __metadata("design:paramtypes", [])
], EmptyStateComponent);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmptyStateComponent, [{
        type: Component,
        args: [{ selector: 'ngx-decaf-empty-state', standalone: true, imports: [
                    ForAngularModule,
                    IonCard,
                    IonCardContent,
                    IonTitle,
                    IonIcon
                ], template: "\n<ion-card [id]=\"uid\" [ngClass]=\"className\">\n  <ion-card-content>\n    @if(icon && showIcon) {\n      <div class=\"dcf-icon-container\">\n        <ion-icon\n          name=\"alert-circle-outline\"\n          size=\"large\"\n          color=\"danger\"\n          />\n      </div>\n    }\n    @if(title) {\n      <h5 [class]=\"titleColor\" [innerHTML]=\"title\"></h5>\n    }\n    @if(subtitle) {\n      @if(!searchValue) {\n        <p [class]=\"subtitleColor\" [innerHTML]=\"subtitle\"></p>\n      } @else {\n        <p [class]=\"subtitleColor\" [innerHTML]=\"searchSubtitle\"></p>\n      }\n    }\n    @if(buttonLink && buttonText) {\n      <div>\n        <ion-button\n          [size]=\"buttonSize\"\n          [fill]=\"buttonFill\"\n          [color]=\"buttonColor\"\n          (click)=\"handleClick()\">\n          {{  buttonText }}\n        </ion-button>\n      </div>\n    }\n  </ion-card-content>\n</ion-card>\n", styles: ["ion-card{text-align:center}ion-card ion-button{margin-top:.75rem}ion-card ion-icon{font-size:2.5rem}ion-card .dcf-icon-container{transform:scale(1.25);opacity:.75;margin-top:1.25rem!important;margin-bottom:.5rem!important}ion-card .dcf-ititle{font-weight:600!important;color:var(--dcf-color-gray-6)!important}ion-card .dcf-isubtitle{font-weight:500!important}\n"] }]
    }], () => [], { title: [{
            type: Input
        }], titleColor: [{
            type: Input
        }], subtitle: [{
            type: Input
        }], subtitleColor: [{
            type: Input
        }], showIcon: [{
            type: Input
        }], icon: [{
            type: Input
        }], iconSize: [{
            type: Input
        }], iconColor: [{
            type: Input
        }], buttonLink: [{
            type: Input
        }], buttonText: [{
            type: Input
        }], buttonFill: [{
            type: Input
        }], buttonColor: [{
            type: Input
        }], buttonSize: [{
            type: Input
        }], searchValue: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EmptyStateComponent, { className: "EmptyStateComponent", filePath: "components/empty-state/empty-state.component.ts", lineNumber: 71 }); })();

class CollapsableDirective {
    constructor() {
        this.element = inject(ElementRef);
        this.injector = inject(Injector);
    }
    // constructor() {}
    ngOnInit() {
        const element = this.element?.nativeElement;
        if (element) {
            const requiredFields = element.querySelectorAll('[required]');
            if (requiredFields.length) {
                const accordion = element?.closest('ion-accordion-group');
                accordion.setAttribute('value', 'open');
            }
        }
    }
    static { this.ɵfac = function CollapsableDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CollapsableDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CollapsableDirective, selectors: [["", "decafCollapsable", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollapsableDirective, [{
        type: Directive,
        args: [{
                selector: '[decafCollapsable]',
                standalone: true
            }]
    }], null, null); })();

const _c0$6 = ["accordionComponent"];
const _c1$5 = ["*"];
const _forTrack0$2 = ($index, $item) => $item.index;
const _c2$2 = (a0, a1) => ({ "open": a0, "hasValidationErrors": a1 });
const _c3$1 = () => ["create", "update"];
const _c4 = a0 => ({ "not-unique": a0 });
const _c5 = a0 => ({ "updating": a0 });
const _c6 = a0 => ({ value: a0 });
function FieldsetComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8)(1, "ion-button", 12);
    i0.ɵɵlistener("click", function FieldsetComponent_Conditional_11_Template_ion_button_click_1_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.handleRemoveComponent($event)); });
    i0.ɵɵelement(2, "ion-icon", 13);
    i0.ɵɵelementEnd()();
} }
function FieldsetComponent_Conditional_13_For_4_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-reorder", 16);
    i0.ɵɵelement(1, "ion-icon", 19);
    i0.ɵɵelementEnd();
} }
function FieldsetComponent_Conditional_13_For_4_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelement(1, "ion-icon", 20);
    i0.ɵɵelementEnd();
} }
function FieldsetComponent_Conditional_13_For_4_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "br");
    i0.ɵɵelementStart(1, "ion-text", 21);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r5.description);
} }
function FieldsetComponent_Conditional_13_For_4_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-button", 12);
    i0.ɵɵlistener("click", function FieldsetComponent_Conditional_13_For_4_Conditional_6_Template_ion_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r6 = i0.ɵɵnextContext(); const item_r5 = ctx_r6.$implicit; const $index_r8 = ctx_r6.$index; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.handleUpdateItem(item_r5.title, $index_r8)); });
    i0.ɵɵelement(1, "ion-icon", 22);
    i0.ɵɵelementEnd();
} }
function FieldsetComponent_Conditional_13_For_4_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-button", 12);
    i0.ɵɵlistener("click", function FieldsetComponent_Conditional_13_For_4_Conditional_7_Template_ion_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const item_r5 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.handleRemoveItem(item_r5.title)); });
    i0.ɵɵelement(1, "ion-icon", 13);
    i0.ɵɵelementEnd();
} }
function FieldsetComponent_Conditional_13_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-item", 15);
    i0.ɵɵtemplate(1, FieldsetComponent_Conditional_13_For_4_Conditional_1_Template, 2, 0, "ion-reorder", 16)(2, FieldsetComponent_Conditional_13_For_4_Conditional_2_Template, 2, 0, "div", 16);
    i0.ɵɵelementStart(3, "ion-label", 17);
    i0.ɵɵtext(4);
    i0.ɵɵtemplate(5, FieldsetComponent_Conditional_13_For_4_Conditional_5_Template, 3, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, FieldsetComponent_Conditional_13_For_4_Conditional_6_Template, 2, 0, "ion-button", 18)(7, FieldsetComponent_Conditional_13_For_4_Conditional_7_Template, 2, 0, "ion-button", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(10, _c4, item_r5.title === ctx_r2.isUniqueError))("button", false)("ngClass", i0.ɵɵpureFunction1(12, _c5, (ctx_r2.updatingItem == null ? null : ctx_r2.updatingItem[ctx_r2.pk]) === item_r5.title));
    i0.ɵɵadvance();
    i0.ɵɵconditional((ctx_r2.items == null ? null : ctx_r2.items.length) > 1 && !ctx_r2.updatingItem ? 1 : 2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("color", item_r5.title === ctx_r2.isUniqueError && !ctx_r2.updatingItem.title === item_r5.title ? "danger" : "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", item_r5.index, ". ", item_r5.title, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional((item_r5.description == null ? null : item_r5.description.length) > 0 ? 5 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(!ctx_r2.updatingItem || (ctx_r2.updatingItem == null ? null : ctx_r2.updatingItem[ctx_r2.pk]) !== item_r5.title ? 6 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(!ctx_r2.updatingItem ? 7 : -1);
} }
function FieldsetComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-list", 10)(1, "ion-reorder-group", 14, 1);
    i0.ɵɵlistener("ionItemReorder", function FieldsetComponent_Conditional_13_Template_ion_reorder_group_ionItemReorder_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.handleReorderItems($event)); });
    i0.ɵɵrepeaterCreate(3, FieldsetComponent_Conditional_13_For_4_Template, 8, 14, "ion-item", 15, _forTrack0$2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroup", ctx_r2.formGroup.parent)("disabled", ctx_r2.updatingItem);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r2.items);
} }
function FieldsetComponent_Conditional_15_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23)(1, "div", 27)(2, "div", 28);
    i0.ɵɵelement(3, "ion-icon", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 7)(5, "ion-text", 30);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("style", "max-width: 50px", i0.ɵɵsanitizeStyle);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(7, 2, ctx_r2.locale + ".not_unique", i0.ɵɵpureFunction1(5, _c6, ctx_r2.isUniqueError)));
} }
function FieldsetComponent_Conditional_15_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-button", 31);
    i0.ɵɵlistener("click", function FieldsetComponent_Conditional_15_Conditional_2_Template_ion_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.handleCancelUpdateItem()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.buttonCancelLabel, " ");
} }
function FieldsetComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵtemplate(0, FieldsetComponent_Conditional_15_Conditional_0_Template, 8, 7, "div", 23);
    i0.ɵɵelementStart(1, "div", 11);
    i0.ɵɵtemplate(2, FieldsetComponent_Conditional_15_Conditional_2_Template, 2, 1, "ion-button", 24);
    i0.ɵɵelementStart(3, "ion-button", 25);
    i0.ɵɵlistener("click", function FieldsetComponent_Conditional_15_Template_ion_button_click_3_listener() { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.handleCreateItem()); });
    i0.ɵɵelement(4, "ion-icon", 26);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵconditional(ctx_r2.isUniqueError ? 0 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r2.updatingItem ? 2 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.buttonLabel, " ");
} }
/**
 * @description Dynamic fieldset component with collapsible accordion functionality.
 * @summary This component provides a sophisticated fieldset container that automatically
 * adapts its behavior based on CRUD operations. It integrates seamlessly with Ionic's
 * accordion components to create expandable/collapsible sections for organizing form
 * content and related information. The component intelligently determines its initial
 * state based on the operation type, opening automatically for READ and DELETE operations
 * while remaining closed for CREATE and UPDATE operations.
 *
 * @example
 * ```html
 * <!-- Basic usage with automatic state management -->
 * <ngx-decaf-fieldset
 *   name="Personal Information"
 *   [operation]="OperationKeys.READ"
 *   target="_self">
 *   <ion-input label="Name" placeholder="Enter name"></ion-input>
 *   <ion-input label="Email" type="email" placeholder="Enter email"></ion-input>
 * </ngx-decaf-fieldset>
 *
 * <!-- Advanced usage with custom operation -->
 * <ngx-decaf-fieldset
 *   name="Contact Details"
 *   [operation]="currentOperation"
 *   target="_blank">
 *   <!-- Complex form fields -->
 * </ngx-decaf-fieldset>
 * ```
 *
 * @mermaid
 * sequenceDiagram
 *   participant U as User
 *   participant F as FieldsetComponent
 *   participant I as Ionic Accordion
 *   participant D as DOM
 *
 *   F->>F: ngAfterViewInit()
 *   alt operation is READ or DELETE
 *     F->>F: Set isOpen = true
 *     F->>D: Query accordion element
 *     F->>I: Set value attribute to 'open'
 *     F->>F: Trigger change detection
 *   end
 *   U->>I: Click accordion header
 *   I->>F: handleChange(event)
 *   F->>F: Update isOpen state
 *   F->>I: Reflect new state
 *
 * @memberOf ForAngularModule
 */
let FieldsetComponent = class FieldsetComponent extends NgxBaseComponent {
    /**
     * @description Component constructor that initializes the fieldset with icons and component name.
     * @summary Calls the parent NgxBaseComponent constructor with the component name and
     * required Ionic icons (alertCircleOutline for validation errors and createOutline for add actions).
     * Sets up the foundational component structure and icon registry.
     *
     * @memberOf FieldsetComponent
     */
    constructor() {
        super('FieldsetComponent');
        /**
         * @description The display name or title of the fieldset section.
         * @summary Sets the legend or header text that appears in the accordion header. This text
         * provides a clear label for the collapsible section, helping users understand what content
         * is contained within. The name is displayed prominently and serves as the clickable area
         * for expanding/collapsing the fieldset.
         *
         * @type {string}
         * @default 'Child'
         * @memberOf FieldsetComponent
         */
        this.name = 'Child';
        /**
         * @description The parent component identifier for hierarchical fieldset relationships.
         * @summary Specifies the parent component name that this fieldset belongs to in a hierarchical
         * form structure. This property is used for event bubbling and establishing parent-child
         * relationships between fieldsets in complex forms with nested structures.
         *
         * @type {string}
         * @default 'Child'
         * @memberOf FieldsetComponent
         */
        this.childOf = 'Child';
        /**
         * @description The parent component identifier for hierarchical fieldset relationships.
         * @summary Specifies the parent component name that this fieldset belongs to in a hierarchical
         * form structure. This property is used for event bubbling and establishing parent-child
         * relationships between fieldsets in complex forms with nested structures.
         *
         * @type {string}
         * @default 'Child'
         * @memberOf FieldsetComponent
         */
        this.uid = generateRandomValue(12);
        /**
         * @description The current CRUD operation context.
         * @summary Determines the component's initial behavior and state based on the current operation.
         * This input is crucial for auto-state management: READ and DELETE operations automatically
         * open the fieldset to show content, while CREATE and UPDATE operations keep it closed
         * initially. This provides an intuitive user experience aligned with operation semantics.
         *
         * @type {OperationKeys}
         * @default OperationKeys.READ
         * @memberOf FieldsetComponent
         */
        /**
         * @description The CRUD operation type for the current fieldset context.
         * @summary Determines the component's initial behavior and state based on the current operation.
         * This input is crucial for auto-state management: READ and DELETE operations automatically
         * open the fieldset to show content, while CREATE and UPDATE operations keep it closed
         * initially. This provides an intuitive user experience aligned with operation semantics.
         *
         * @type {OperationKeys}
         * @default OperationKeys.READ
         * @memberOf FieldsetComponent
         */
        this.operation = OperationKeys.READ;
        /**
         * @description Form target attribute for nested form submissions.
         * @summary Specifies where to display the response after submitting forms contained within
         * the fieldset. This attribute mirrors the HTML form target behavior, allowing control over
         * whether form submissions open in the same window, new window, or specific frame. Useful
         * for complex form workflows and multi-step processes.
         *
         * @type {HTMLFormTarget}
         * @default '_self'
         * @memberOf FieldsetComponent
         */
        this.target = '_self';
        /**
         * @description Enables multiple item management within the fieldset.
         * @summary Boolean flag that determines if the fieldset supports adding multiple values.
         * When true, displays a reorderable list of items with add/remove functionality.
         *
         * @type {boolean}
         * @default false
         * @memberOf FieldsetComponent
         */
        this.multiple = false;
        /**
         * @description Array of raw values stored in the fieldset.
         * @summary Contains the actual data values that have been added to the fieldset.
         * This is the source of truth for the fieldset's data state.
         *
         * @type {KeyValue[]}
         * @default []
         * @memberOf FieldsetComponent
         */
        this.value = [];
        /**
         * @description Array of formatted items for UI display.
         * @summary Contains the processed items ready for display in the component template.
         * These items are mapped from the raw values using the mapper configuration.
         *
         * @type {IFieldSetItem[]}
         * @default []
         * @memberOf FieldsetComponent
         */
        this.items = [];
        /**
         * @description Current state of the accordion (expanded or collapsed).
         * @summary Boolean flag that tracks whether the fieldset accordion is currently open or closed.
         * This property is automatically managed based on user interactions and initial operation state.
         * It serves as the single source of truth for the component's visibility state and is used
         * to coordinate between user actions and programmatic state changes. The value is automatically
         * set based on CRUD operations during initialization and updated through user interactions.
         *
         * @type {boolean}
         * @default false
         * @memberOf FieldsetComponent
         */
        this.isOpen = false;
        /**
         * @description Indicates whether the fieldset contains required form fields.
         * @summary Boolean flag that signals the presence of mandatory input fields within the fieldset.
         * This property is automatically set by the CollapsableDirective when required fields are detected,
         * and can be used to apply special styling, validation logic, or UI indicators to highlight
         * fieldsets that contain mandatory information. It helps with form validation feedback and
         * user experience by making required sections more prominent.
         *
         * @type {boolean}
         * @default false
         * @memberOf FieldsetComponent
         */
        this.isRequired = false;
        /**
         * @description Indicates whether the fieldset contains validation errors.
         * @summary Boolean flag that tracks if any form fields within the fieldset have validation errors.
         * This property is used to control accordion behavior when errors are present, preventing
         * users from collapsing the accordion when they need to see and address validation issues.
         * It's automatically updated when validation error events are received from child form fields.
         *
         * @type {boolean}
         * @default false
         * @memberOf FieldsetComponent
         */
        this.hasValidationErrors = false;
        /**
         * @description Validation error message for duplicate values.
         * @summary Stores the error message when a user attempts to add a duplicate value
         * to the fieldset. Used to display uniqueness validation feedback.
         *
         * @type {string | undefined}
         * @memberOf FieldsetComponent
         */
        this.isUniqueError = undefined;
        /**
         * @description Reference to CRUD operation constants for template usage.
         * @summary Exposes the OperationKeys enum to the component template, enabling conditional
         * rendering and behavior based on operation types. This protected readonly property ensures
         * that template logic can access operation constants while maintaining encapsulation and
         * preventing accidental modification of the enum values.
         *
         * @type {CrudOperations}
         * @default OperationKeys.CREATE
         * @memberOf FieldsetComponent
         */
        this.OperationKeys = OperationKeys.CREATE;
        /**
         * @description Angular change detection service.
         * @summary Injected service that provides manual control over change detection cycles.
         * This is essential for ensuring that programmatic DOM changes (like setting accordion
         * attributes) are properly reflected in the component's state and trigger appropriate
         * view updates when modifications occur outside the normal Angular change detection flow.
         *
         * @private
         * @type {ChangeDetectorRef}
         * @memberOf FieldsetComponent
         */
        this.changeDetectorRef = inject(ChangeDetectorRef);
        /**
         * @description Angular Renderer2 service for safe DOM manipulation.
         * @summary Injected service that provides a safe, platform-agnostic way to manipulate DOM elements.
         * This service ensures proper handling of DOM operations across different platforms and environments,
         * including server-side rendering and web workers.
         *
         * @private
         * @type {Renderer2}
         * @memberOf FieldsetComponent
         */
        this.renderer = inject(Renderer2);
        /**
         * @description Translation service for internationalization.
         * @summary Injected service that provides translation capabilities for UI text.
         * Used to translate button labels and validation messages based on the current locale.
         *
         * @private
         * @type {TranslateService}
         * @memberOf FieldsetComponent
         */
        this.translateService = inject(TranslateService);
        addIcons({ alertCircleOutline, createOutline });
    }
    /**
     * @description Component initialization lifecycle method.
     * @summary Initializes the component by setting up repository relationships if a model exists,
     * and configures the initial button label for the add action based on the current locale.
     * This method ensures proper setup of translation services and component state.
     *
     * @returns {void}
     * @memberOf FieldsetComponent
     */
    ngOnInit() {
        if (this.model)
            this._repository = this.repository;
        this.buttonLabel = this.translateService.instant(this.locale + '.add');
        this.buttonCancelLabel = this.translateService.instant(this.locale + '.cancel');
    }
    /**
    * @description Initializes the component state after view and child components are rendered.
    * @summary This lifecycle hook implements intelligent auto-state management based on the current
    * CRUD operation. For READ and DELETE operations, the fieldset automatically opens to provide
    * immediate access to information, while CREATE and UPDATE operations keep it closed to maintain
    * a clean initial interface. The method directly manipulates the DOM to ensure proper accordion
    * synchronization and triggers change detection to reflect the programmatic state changes.
    *
    * @mermaid
    * sequenceDiagram
    *   participant A as Angular Lifecycle
    *   participant F as FieldsetComponent
    *   participant D as DOM
    *   participant C as ChangeDetector
    *
    *   A->>F: ngAfterViewInit()
    *   alt operation is READ or DELETE
    *     F->>F: Set isOpen = true
    *     F->>D: Query ion-accordion-group element
    *     alt accordion element exists
    *       F->>D: Set value attribute to 'open'
    *     end
    *   end
    *   F->>C: detectChanges()
    *   C->>F: Update view with new state
    *
    * @returns {void}
    * @memberOf FieldsetComponent
    */
    ngAfterViewInit() {
        if (this.operation === OperationKeys.READ || this.operation === OperationKeys.DELETE) {
            this.isOpen = true;
            // hidden remove button
            const accordionElement = this.component?.nativeElement.querySelector('ion-accordion-group');
            if (this.accordionComponent)
                this.renderer.setAttribute(accordionElement, 'value', 'open');
        }
        else {
            const inputs = this.component?.nativeElement.querySelectorAll('[required]');
            this.isRequired = inputs.length > 0;
            if (this.isRequired) {
                this.accordionComponent.value = 'open';
                this.handleAccordionToggle();
            }
        }
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @description Handles removal of the fieldset with slide animation.
     * @summary Initiates the removal process for the fieldset with a smooth slide-up animation.
     * The method applies CSS classes for the slide animation and then safely removes the
     * element from the DOM using Renderer2. This provides a polished user experience
     * when removing fieldset instances from dynamic forms.
     *
     * @param {Event} event - DOM event from the remove button click
     * @returns {void}
     * @memberOf FieldsetComponent
     */
    handleRemoveComponent(event) {
        event.stopImmediatePropagation();
        this.component.nativeElement.classList.add('dcf-animation', 'dcf-animation-slide-top-medium', 'dcf-animation-reverse', 'dcf-animation-fast');
        setTimeout(() => {
            // Use Renderer2 to safely remove the element
            const parent = this.renderer.parentNode(this.component.nativeElement);
            if (parent)
                this.renderer.removeChild(parent, this.component.nativeElement);
        }, 150);
    }
    /**
     * @description Handles creating new items or triggering group addition events.
     * @summary Processes form validation events for item creation or emits events to trigger
     * the addition of new fieldset groups. When called with validation event data, it validates
     * uniqueness and adds the item to the fieldset. When called without parameters, it triggers
     * a group addition event for parent components to handle.
     *
     * @param {CustomEvent<IFieldSetValidationEvent>} [event] - Optional validation event containing form data
     * @returns {Promise<void>}
     * @memberOf FieldsetComponent
     *
     * @example
     * ```typescript
     * // Called from form validation
     * handleCreateItem(validationEvent);
     *
     * // Called to trigger group addition
     * handleCreateItem();
     * ```
     */
    async handleCreateItem(event) {
        if (event && event instanceof CustomEvent) {
            event.stopImmediatePropagation();
            const { formGroup, value, isValid } = event.detail;
            this.formGroup = formGroup;
            if (!this.mapper)
                this.mapper = this.getMapper(value);
            if (isValid) {
                this.isUniqueError = undefined;
                this.buttonLabel = this.translateService.instant(this.locale + '.add');
                this.setValue();
            }
            else {
                this.isUniqueError = value?.[this.pk] || undefined;
            }
        }
        else {
            windowEventEmitter(EventConstants.FIELDSET_ADD_GROUP, {
                component: this.component.nativeElement,
                index: this.updatingItem ? this.updatingItem.index : this.value?.length,
                parent: this.childOf,
                operation: !this.updatingItem ? OperationKeys.CREATE : OperationKeys.UPDATE
            });
        }
    }
    /**
     * @description Handles item update operations with form state management.
     * @summary Locates an item in the form array for editing and prepares the component
     * for update mode. Updates the button label to reflect the edit state and stores
     * the item being updated. Triggers a window event to notify parent components.
     *
     * @param {string | number} value - The identifier value of the item to update
     * @param {number} index - The array index position of the item
     * @returns {void}
     * @memberOf FieldsetComponent
     */
    handleUpdateItem(value, index) {
        const item = this.formGroup.controls.find(control => `${control.get(this.pk)?.value}`.toLowerCase() === cleanSpaces(`${value}`, true));
        if (item) {
            this.buttonLabel = this.translateService.instant(this.locale + '.update');
            this.updatingItem = Object.assign({}, item.value || {}, { index });
            windowEventEmitter(EventConstants.FIELDSET_UPDATE_GROUP, {
                parent: this.childOf,
                component: this.component.nativeElement,
                index: index
            });
        }
    }
    /**
     * @description Cancels the update mode and resets the UI state.
     * @summary Exits the update mode by resetting the button label and clearing the updating item,
     * restoring the component to its default state for adding new items. Notifies parent components
     * that the update operation has been cancelled.
     *
     * @returns {void}
     * @memberOf FieldsetComponent
     */
    handleCancelUpdateItem() {
        this.buttonLabel = this.translateService.instant(this.locale + '.add');
        this.updatingItem = undefined;
        windowEventEmitter(EventConstants.FIELDSET_UPDATE_GROUP, {
            parent: this.childOf,
            component: this.component.nativeElement,
            index: this.value?.length
        });
    }
    /**
     * @description Handles item removal operations with form array management.
     * @summary Processes item removal by either handling validation events or removing specific
     * items from the form array. When called with a validation event, it triggers value updates.
     * When called with an identifier, it locates and removes the matching item from the form array.
     *
     * @param {string | undefined} value - The identifier of the item to remove
     * @param {CustomEvent} [event] - Optional validation event for form updates
     * @returns {void}
     * @memberOf FieldsetComponent
     */
    handleRemoveItem(value, event) {
        if (event && event instanceof CustomEvent) {
            event.stopImmediatePropagation();
            return this.setValue();
        }
        const formArray = this.formGroup;
        const arrayLength = formArray.length;
        for (let index = arrayLength - 1; index >= 0; index--) {
            const group = formArray.at(index);
            if (cleanSpaces(group.get(this.pk)?.value) === cleanSpaces(value)) {
                windowEventEmitter(EventConstants.FIELDSET_REMOVE_GROUP, {
                    parent: this.childOf,
                    component: this.component.nativeElement,
                    index,
                    formGroup: group
                });
            }
        }
    }
    /**
     * @description Handles reordering of items within the fieldset list.
     * @summary Processes drag-and-drop reorder events from the ion-reorder-group component.
     * Updates both the display items array and the underlying value array to maintain
     * consistency between UI state and data state. Preserves item indices after reordering.
     *
     * @param {CustomEvent<ItemReorderEventDetail>} event - Ionic reorder event containing source and target indices
     * @returns {void}
     * @memberOf FieldsetComponent
     *
     * @example
     * ```html
     * <ion-reorder-group (ionItemReorder)="handleReorder($event)">
     *   <!-- Reorderable items -->
     * </ion-reorder-group>
     * ```
     */
    handleReorderItems(event) {
        const fromIndex = event.detail.from;
        const toIndex = event.detail.to;
        const items = [...this.items]; // sua estrutura visual
        const formArray = this.formGroup; // FormArray reativo
        if (fromIndex !== toIndex) {
            // Reordenar os dados visuais
            const itemToMove = items.splice(fromIndex, 1)[0];
            items.splice(toIndex, 0, itemToMove);
            items.forEach((item, index) => item['index'] = index + 1);
            // Reordenar os controles do FormArray
            const controlToMove = formArray.at(fromIndex);
            formArray.removeAt(fromIndex);
            formArray.insert(toIndex, controlToMove);
        }
        // Finaliza a operação de reorder do Ionic
        event.detail.complete();
    }
    /**
     * @description Handles accordion state change events from user interactions.
     * @summary Processes CustomEvent objects triggered when users expand or collapse the accordion.
     * This method extracts the new state from the event details and updates the component's
     * internal state accordingly. It specifically listens for ION-ACCORDION-GROUP events to
     * ensure proper event source validation and prevent handling of unrelated events.
     *
     * @param {CustomEvent} event - The event object containing accordion state change details
     * @returns {void}
     *
     * @mermaid
     * sequenceDiagram
     *   participant U as User
     *   participant I as Ion-Accordion
     *   participant F as FieldsetComponent
     *
     *   U->>I: Click accordion header
     *   I->>F: handleChange(CustomEvent)
     *   F->>F: Extract target and detail from event
     *   F->>F: Validate target is ION-ACCORDION-GROUP
     *   alt valid target
     *     F->>F: Update isOpen = !!value
     *   end
     *   F->>I: Reflect updated state
     *
     * @memberOf FieldsetComponent
     */
    /**
     * @description Handles accordion toggle functionality with validation error consideration.
     * @summary Manages the expand/collapse state of the accordion while respecting validation error states.
     * When validation errors are present, the accordion cannot be collapsed to ensure users can see
     * and address the errors. When no errors exist, users can freely toggle the accordion state.
     * This method also stops event propagation to prevent unwanted side effects.
     *
     * @param {CustomEvent} [event] - Optional event object from user interaction
     * @returns {void}
     * @memberOf FieldsetComponent
     */
    handleAccordionToggle(event) {
        if (event)
            event.stopImmediatePropagation();
        if (!this.hasValidationErrors) {
            this.accordionComponent.value = this.isOpen ? undefined : 'open';
            this.isOpen = !!this.accordionComponent.value;
        }
    }
    /**
     * @description Handles validation error events from child form fields.
     * @summary Processes validation error events dispatched by form fields within the fieldset.
     * When errors are detected, the accordion is forced open and prevented from collapsing
     * to ensure users can see the validation messages. This method updates the component's
     * error state and accordion visibility accordingly.
     *
     * @param {CustomEvent} event - Custom event containing validation error details
     * @returns {void}
     * @memberOf FieldsetComponent
     */
    handleValidationError(event) {
        event.stopImmediatePropagation();
        const { hasErrors } = event.detail;
        this.isOpen = this.hasValidationErrors = hasErrors;
        if (hasErrors)
            this.accordionComponent.value = 'open';
    }
    /**
     * @description Processes and stores a new or updated value in the fieldset.
     * @summary Handles both create and update operations for fieldset items. Parses and cleans
     * the input value, determines the operation type based on the updating state, and either
     * adds a new item or updates an existing one. Maintains data integrity and UI consistency.
     *
     * @returns {void}
     * @private
     * @memberOf FieldsetComponent
     */
    setValue() {
        this.value = this.formGroup.controls.map(({ value }) => value);
        this.items = this.value
            .filter(v => v[this.pk] !== undefined)
            .map((v, index) => {
            return {
                ...itemMapper(Object.assign({}, v), this.mapper),
                index: index + 1
            };
        });
        const inputContainers = this.component.nativeElement.querySelectorAll('.dcf-input-item');
        inputContainers.forEach((container) => {
            const input = container.querySelector('input, ion-input, ion-textarea, textarea');
            if (input)
                input.value = '';
        });
        this.updatingItem = undefined;
    }
    /**
     * @description Automatically configures the field mapping based on the value structure.
     * @summary Analyzes the provided value object to automatically determine the primary key
     * and create appropriate field mappings for display purposes. Sets up the mapper object
     * with title, description, and index fields based on the available data structure.
     *
     * @param {KeyValue} value - Sample value object used to determine field mappings
     * @returns {KeyValue} The configured mapper object
     * @private
     * @memberOf FieldsetComponent
     */
    getMapper(value) {
        if (!this.pk)
            this.pk = Object.keys(value)[0];
        if (!Object.keys(this.mapper).length)
            this.mapper['title'] = this.pk;
        this.mapper['index'] = "index";
        for (const key in value) {
            if (Object.keys(this.mapper).length >= 2 || Object.keys(this.mapper).length === Object.keys(value).length)
                break;
            if (!this.mapper['title']) {
                this.mapper['title'] = key;
            }
            else {
                this.mapper['description'] = key;
            }
        }
        return this.mapper;
    }
    static { this.ɵfac = function FieldsetComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FieldsetComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FieldsetComponent, selectors: [["ngx-decaf-fieldset"]], viewQuery: function FieldsetComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$6, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.accordionComponent = _t.first);
        } }, hostVars: 1, hostBindings: function FieldsetComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("id", ctx.overriode);
        } }, inputs: { name: "name", childOf: "childOf", uid: "uid", customTypes: "customTypes", operation: "operation", formGroup: "formGroup", title: "title", description: "description", target: "target", multiple: "multiple", value: "value", handlers: "handlers" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], ngContentSelectors: _c1$5, decls: 16, vars: 15, consts: [["component", ""], ["accordionComponent", ""], [3, "fieldsetAddGroupEvent", "fieldsetRemoveGroupEvent"], [3, "validationErrorEvent", "ngClass"], ["value", "open"], ["slot", "header", 3, "click"], [1, "dcf-grid", "dcf-grid-collapse", "dcf-flex", "dcf-flex-middle", "dcf-width-1-1"], [1, "dcf-width-expand"], [1, "dcf-width-auto", "dcf-delete"], ["slot", "content"], [1, "dcf-fields-list"], [1, "dcf-margin-bottom", "dcf-grid", "dcf-grid-collapse", "dcf-flex"], ["fill", "clear", "size", "small", 3, "click"], ["name", "trash-outline", "color", "dark", "slot", "icon-only"], [3, "ionItemReorder", "formGroup", "disabled"], ["lines", "full", 3, "ngClass", "button"], ["slot", "start"], [3, "color"], ["fill", "clear", "size", "small"], ["name", "swap-vertical-outline"], ["size", "small", "name", "swap-vertical-outline", "disabled", "", 1, "dcf-reorder-disabled"], [1, "dcf-subtitle"], ["name", "create-outline", "color", "dark", "slot", "icon-only"], [1, "dcf-not-unique-container", "dcf-animation", "dcf-animation-bottom-small", "dcf-animation-fast"], ["size", "small", "fill", "clear", "color", "danger"], ["size", "small", "fill", "clear", 1, "dcf-button-add", 3, "click"], ["name", "add-outline", "slot", "start"], [1, "dcf-grid", "dcf-grid-collapse", "dcf-width-1-1"], [1, "dcf-auto"], ["name", "alert-circle-outline"], ["color", "danger", 1, "dcf-text-small"], ["size", "small", "fill", "clear", "color", "danger", 3, "click"]], template: function FieldsetComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "fieldset", 2, 0);
            i0.ɵɵlistener("fieldsetAddGroupEvent", function FieldsetComponent_Template_fieldset_fieldsetAddGroupEvent_0_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.handleCreateItem($event)); })("fieldsetRemoveGroupEvent", function FieldsetComponent_Template_fieldset_fieldsetRemoveGroupEvent_0_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.handleRemoveItem(undefined, $event)); });
            i0.ɵɵelementStart(2, "ion-accordion-group", 3, 1);
            i0.ɵɵlistener("validationErrorEvent", function FieldsetComponent_Template_ion_accordion_group_validationErrorEvent_2_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.handleValidationError($event)); });
            i0.ɵɵelementStart(4, "ion-accordion", 4)(5, "ion-item", 5);
            i0.ɵɵlistener("click", function FieldsetComponent_Template_ion_item_click_5_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.handleAccordionToggle($event)); });
            i0.ɵɵelementStart(6, "div", 6)(7, "div", 7)(8, "legend");
            i0.ɵɵtext(9);
            i0.ɵɵpipe(10, "translate");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(11, FieldsetComponent_Conditional_11_Template, 3, 0, "div", 8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 9);
            i0.ɵɵtemplate(13, FieldsetComponent_Conditional_13_Template, 5, 2, "ion-list", 10);
            i0.ɵɵprojection(14);
            i0.ɵɵtemplate(15, FieldsetComponent_Conditional_15_Template, 6, 3, "div", 11);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵclassMap("dcf-fieldset " + ctx.operation);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(10, _c2$2, ctx.isOpen, ctx.hasValidationErrors));
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 8, ctx.name));
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(!ctx.isRequired && i0.ɵɵpureFunction0(13, _c3$1).includes(ctx.operation) ? 11 : -1);
            i0.ɵɵadvance();
            i0.ɵɵattribute("aria-hidden", !ctx.isOpen);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.multiple && ctx.items.length ? 13 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.multiple && i0.ɵɵpureFunction0(14, _c3$1).includes(ctx.operation) ? 15 : -1);
        } }, dependencies: [ForAngularModule, i1.IonText, i1.IonButton, i2.NgClass, i2$1.NgControlStatusGroup, i2$1.FormGroupDirective, i3.TranslatePipe, IonAccordionGroup, IonAccordion, IonList, IonItem, IonLabel, IonReorder, IonReorderGroup], styles: ["ion-accordion-group[_ngcontent-%COMP%]   ion-item[slot=header][_ngcontent-%COMP%]   .dcf-delete[_ngcontent-%COMP%]{width:30px}ion-accordion-group[_ngcontent-%COMP%]   ion-item[slot=header][_ngcontent-%COMP%]   .dcf-delete[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{transform:translateY(-2px)}ion-accordion-group[_ngcontent-%COMP%]   ion-item[slot=header][_ngcontent-%COMP%]   .dcf-delete[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.15rem}  ion-accordion ngx-decaf-crud-field:last-child ion-item{--inner-border-width: 0px !important;--border-width: 0px !important}.dcf-fieldset[_ngcontent-%COMP%]{margin-bottom:1.8rem;margin-top:1rem;padding-bottom:0;padding-top:1rem;background:var(--dcf-card-background);border-radius:6px;height:100%}@media (prefers-color-scheme: light){.dcf-fieldset[_ngcontent-%COMP%]{border:1px solid var(--dcf-color-gray-3)}.dcf-fieldset[_ngcontent-%COMP%]   .dcf-button-add[_ngcontent-%COMP%]{color:var(--ion-color-dark)!important}}@media (prefers-color-scheme: dark){.dcf-fieldset[_ngcontent-%COMP%]{border:1px solid var(--dcf-color-step-400)}.dcf-fieldset[_ngcontent-%COMP%]   .dcf-button-add[_ngcontent-%COMP%]{color:var(--ion-color-gray-2)}}.dcf-fieldset.read[_ngcontent-%COMP%], .dcf-fieldset.delete[_ngcontent-%COMP%]{margin-top:1.25rem;padding-bottom:1rem}.dcf-fieldset.read[_ngcontent-%COMP%]   [slot=content][_ngcontent-%COMP%], .dcf-fieldset.delete[_ngcontent-%COMP%]   [slot=content][_ngcontent-%COMP%]{padding-top:0!important}.dcf-fieldset.read[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%], .dcf-fieldset.delete[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]{margin-bottom:0rem!important}@media (prefers-color-scheme: dark){.dcf-fieldset.read[_ngcontent-%COMP%], .dcf-fieldset.delete[_ngcontent-%COMP%]{border:1px solid var(--dcf-color-gray-6)}}.dcf-fieldset[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]{background:var(--dcf-card-background);margin-bottom:1rem}.dcf-fieldset[_ngcontent-%COMP%]   ion-accordion.accordion-collapsing[_ngcontent-%COMP%], .dcf-fieldset[_ngcontent-%COMP%]   ion-accordion.accordion-collapsed[_ngcontent-%COMP%]{margin-bottom:1rem}.dcf-fieldset[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   ion-item[slot=header][_ngcontent-%COMP%]{--border-color: transparent;--border-radius: 6px;--inner-border-width: 0;--padding-start: 12px}.dcf-fieldset[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   ion-item[slot=header][_ngcontent-%COMP%]   legend[_ngcontent-%COMP%]{font-weight:600;font-size:1rem;margin:0}@media (prefers-color-scheme: light){.dcf-fieldset[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   ion-item[slot=header][_ngcontent-%COMP%]   legend[_ngcontent-%COMP%]{color:var(--dcf-color-gray-7)}}.dcf-fieldset[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   [slot=content][_ngcontent-%COMP%]{padding-top:2rem!important;padding-inline:.75rem}.dcf-not-unique-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:1rem;flex:1 1 auto}.dcf-not-unique-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.dcf-not-unique-container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{transform:translatey(2px);margin-right:5px}.dcf-fields-list[_ngcontent-%COMP%]{margin-top:-1rem;margin-bottom:1rem;padding:0!important}.dcf-fields-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--min-height: 50px;--padding-top: .25rem;--padding-bottom: .25rem;--padding-start: .75rem;--padding-end: .75rem;--inner-padding-start: 0px !important;--inner-padding-end: 0px !important;--border-color: var(--dcf-color-gray-2) !important;border:1px solid transparent;box-sizing:border-box}.dcf-fields-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon.dcf-reorder-disabled[_ngcontent-%COMP%]{width:1rem;transform:translatey(2px);color:var(--dcf-color-gray-4)}.dcf-fields-list[_ngcontent-%COMP%]   ion-item.updating[_ngcontent-%COMP%]{--background: rgba(var(--dcf-color-primary-rgb), .1) !important}.dcf-fields-list[_ngcontent-%COMP%]   ion-item.not-unique[_ngcontent-%COMP%]{--background: rgba(var(--dcf-color-danger-rgb), .05) !important}.dcf-fields-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .dcf-subtitle[_ngcontent-%COMP%]{font-size:.8rem;color:var(--dcf-color-gray-7)}"] }); }
};
FieldsetComponent = __decorate([
    Dynamic(),
    __metadata("design:paramtypes", [])
], FieldsetComponent);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldsetComponent, [{
        type: Component,
        args: [{ standalone: true, selector: 'ngx-decaf-fieldset', schemas: [CUSTOM_ELEMENTS_SCHEMA], imports: [ForAngularModule, IonAccordionGroup, IonAccordion, IonList, IonItem, IonLabel, IonReorder, IonButton, IonReorderGroup, CollapsableDirective], host: { '[attr.id]': 'overriode ' }, template: "\n\n<fieldset\n  (fieldsetAddGroupEvent)=\"handleCreateItem($event)\"\n  (fieldsetRemoveGroupEvent)=\"handleRemoveItem(undefined, $event)\"\n  [class]=\"'dcf-fieldset ' + operation\"\n  #component>\n  <ion-accordion-group [ngClass]=\"{'open': isOpen, 'hasValidationErrors': hasValidationErrors}\"  (validationErrorEvent)=\"handleValidationError($event)\" #accordionComponent>\n    <ion-accordion value=\"open\">\n      <ion-item slot=\"header\" (click)=\"handleAccordionToggle($event)\">\n        <div class=\"dcf-grid dcf-grid-collapse dcf-flex dcf-flex-middle dcf-width-1-1\">\n          <div class=\"dcf-width-expand\">\n            <legend>{{ name | translate }}</legend>\n          </div>\n          @if(!isRequired && ['create', 'update'].includes(operation)) {\n            <div class=\"dcf-width-auto dcf-delete\">\n              <ion-button fill=\"clear\" size=\"small\" (click)=\"handleRemoveComponent($event)\">\n                <ion-icon name=\"trash-outline\" color=\"dark\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </div>\n          }\n        </div>\n      </ion-item>\n      <div slot=\"content\" [attr.aria-hidden]=\"!isOpen\">\n        @if(multiple && items.length) {\n          <ion-list class=\"dcf-fields-list\">\n            <ion-reorder-group [formGroup]=\"formGroup.parent\" [disabled]=\"updatingItem\" (ionItemReorder)=\"handleReorderItems($any($event))\" #accordionComponent>\n              @for(item of items; track item.index) {\n                <ion-item [ngClass]=\"{'not-unique': item.title === isUniqueError}\" lines=\"full\" [button]=\"false\" [ngClass]=\"{'updating': updatingItem?.[pk] === item.title}\">\n                  @if(items?.length > 1 && !updatingItem) {\n                    <ion-reorder slot=\"start\">\n                      <ion-icon name=\"swap-vertical-outline\"></ion-icon>\n                    </ion-reorder>\n                  } @else {\n                    <div slot=\"start\">\n                      <ion-icon class=\"dcf-reorder-disabled\" size=\"small\" name=\"swap-vertical-outline\" disabled></ion-icon>\n                    </div>\n                  }\n                  <ion-label [color]=\"(item.title === isUniqueError && !updatingItem.title === item.title) ? 'danger' : ''\">{{ item.index }}. {{ item.title }}\n                    @if(item.description?.length > 0) {\n                      <br />\n                      <ion-text class=\"dcf-subtitle\">{{item.description}}</ion-text>\n                    }\n                  </ion-label>\n                  @if(!updatingItem || updatingItem?.[pk] !== item.title) {\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"handleUpdateItem(item.title, $index)\">\n                      <ion-icon name=\"create-outline\" color=\"dark\" slot=\"icon-only\"></ion-icon>\n                    </ion-button>\n                  }\n\n                  @if(!updatingItem) {\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"handleRemoveItem(item.title)\">\n                      <ion-icon name=\"trash-outline\" color=\"dark\" slot=\"icon-only\"></ion-icon>\n                    </ion-button>\n                  }\n                </ion-item>\n              }\n            </ion-reorder-group>\n          </ion-list>\n        }\n\n        <ng-content></ng-content>\n\n        @if(multiple && ['create', 'update'].includes(operation)) {\n          @if(isUniqueError) {\n            <div class=\"dcf-not-unique-container dcf-animation dcf-animation-bottom-small dcf-animation-fast\">\n              <div class=\" dcf-grid dcf-grid-collapse dcf-width-1-1 \">\n                <div class=\"dcf-auto\" [attr.style]=\"'max-width: 50px'\">\n                  <ion-icon name=\"alert-circle-outline\"></ion-icon>\n                </div>\n                <div class=\"dcf-width-expand\">\n                  <ion-text color=\"danger\" class=\"dcf-text-small\">{{ locale + '.not_unique' | translate : { value: isUniqueError } }}</ion-text>\n                </div>\n              </div>\n            </div>\n          }\n          <div class=\"dcf-margin-bottom dcf-grid dcf-grid-collapse dcf-flex\">\n            @if(updatingItem) {\n              <ion-button size=\"small\" fill=\"clear\" color=\"danger\" (click)=\"handleCancelUpdateItem()\">\n                {{ buttonCancelLabel }}\n              </ion-button>\n            }\n            <ion-button size=\"small\" fill=\"clear\" class=\"dcf-button-add\" (click)=\"handleCreateItem()\">\n              <ion-icon name=\"add-outline\" slot=\"start\"></ion-icon>\n              {{buttonLabel}}\n            </ion-button>\n\n          </div>\n        }\n\n      </div>\n    </ion-accordion>\n  </ion-accordion-group>\n</fieldset>\n\n", styles: ["ion-accordion-group ion-item[slot=header] .dcf-delete{width:30px}ion-accordion-group ion-item[slot=header] .dcf-delete ion-button{transform:translateY(-2px)}ion-accordion-group ion-item[slot=header] .dcf-delete ion-icon{font-size:1.15rem}::ng-deep ion-accordion ngx-decaf-crud-field:last-child ion-item{--inner-border-width: 0px !important;--border-width: 0px !important}.dcf-fieldset{margin-bottom:1.8rem;margin-top:1rem;padding-bottom:0;padding-top:1rem;background:var(--dcf-card-background);border-radius:6px;height:100%}@media (prefers-color-scheme: light){.dcf-fieldset{border:1px solid var(--dcf-color-gray-3)}.dcf-fieldset .dcf-button-add{color:var(--ion-color-dark)!important}}@media (prefers-color-scheme: dark){.dcf-fieldset{border:1px solid var(--dcf-color-step-400)}.dcf-fieldset .dcf-button-add{color:var(--ion-color-gray-2)}}.dcf-fieldset.read,.dcf-fieldset.delete{margin-top:1.25rem;padding-bottom:1rem}.dcf-fieldset.read [slot=content],.dcf-fieldset.delete [slot=content]{padding-top:0!important}.dcf-fieldset.read ion-accordion,.dcf-fieldset.delete ion-accordion{margin-bottom:0rem!important}@media (prefers-color-scheme: dark){.dcf-fieldset.read,.dcf-fieldset.delete{border:1px solid var(--dcf-color-gray-6)}}.dcf-fieldset ion-accordion{background:var(--dcf-card-background);margin-bottom:1rem}.dcf-fieldset ion-accordion.accordion-collapsing,.dcf-fieldset ion-accordion.accordion-collapsed{margin-bottom:1rem}.dcf-fieldset ion-accordion ion-item[slot=header]{--border-color: transparent;--border-radius: 6px;--inner-border-width: 0;--padding-start: 12px}.dcf-fieldset ion-accordion ion-item[slot=header] legend{font-weight:600;font-size:1rem;margin:0}@media (prefers-color-scheme: light){.dcf-fieldset ion-accordion ion-item[slot=header] legend{color:var(--dcf-color-gray-7)}}.dcf-fieldset ion-accordion [slot=content]{padding-top:2rem!important;padding-inline:.75rem}.dcf-not-unique-container{display:flex;justify-content:center;align-items:center;margin-bottom:1rem;flex:1 1 auto}.dcf-not-unique-container>div{display:flex;justify-content:center;align-items:center}.dcf-not-unique-container ion-icon{transform:translatey(2px);margin-right:5px}.dcf-fields-list{margin-top:-1rem;margin-bottom:1rem;padding:0!important}.dcf-fields-list ion-item{--min-height: 50px;--padding-top: .25rem;--padding-bottom: .25rem;--padding-start: .75rem;--padding-end: .75rem;--inner-padding-start: 0px !important;--inner-padding-end: 0px !important;--border-color: var(--dcf-color-gray-2) !important;border:1px solid transparent;box-sizing:border-box}.dcf-fields-list ion-item ion-icon.dcf-reorder-disabled{width:1rem;transform:translatey(2px);color:var(--dcf-color-gray-4)}.dcf-fields-list ion-item.updating{--background: rgba(var(--dcf-color-primary-rgb), .1) !important}.dcf-fields-list ion-item.not-unique{--background: rgba(var(--dcf-color-danger-rgb), .05) !important}.dcf-fields-list ion-item .dcf-subtitle{font-size:.8rem;color:var(--dcf-color-gray-7)}\n"] }]
    }], () => [], { accordionComponent: [{
            type: ViewChild,
            args: ['accordionComponent', { static: false }]
        }], name: [{
            type: Input
        }], childOf: [{
            type: Input
        }], uid: [{
            type: Input
        }], customTypes: [{
            type: Input
        }], operation: [{
            type: Input
        }], formGroup: [{
            type: Input
        }], title: [{
            type: Input
        }], description: [{
            type: Input
        }], target: [{
            type: Input
        }], multiple: [{
            type: Input
        }], value: [{
            type: Input
        }], handlers: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FieldsetComponent, { className: "FieldsetComponent", filePath: "components/fieldset/fieldset.component.ts", lineNumber: 79 }); })();

/**
 * @description Searchbar component for Angular applications.
 * @summary The SearchbarComponent provides a highly customizable search input field with comprehensive
 * options for appearance, behavior, and interaction patterns. It extends NgxBaseComponent to inherit
 * common functionality and implements OnInit for proper lifecycle management. This component features
 * debounced input handling, window event integration, visibility controls, and extensive styling options.
 * It's designed to be flexible and adaptable to different search requirements within modern web applications.
 *
 * @class SearchbarComponent
 * @extends {NgxBaseComponent}
 * @implements {OnInit}
 * @memberOf SearchbarComponent
 */
class SearchbarComponent extends NgxBaseComponent {
    /**
     * @description Creates an instance of SearchbarComponent.
     * @summary Initializes the SearchbarComponent with all necessary dependencies and configurations.
     * During initialization, it adds all available Ionicons to the application's icon registry,
     * ensuring that search and clear icons are available for use throughout the component's lifecycle.
     *
     * @memberOf SearchbarComponent
     */
    constructor() {
        super('SearchbarComponent');
        /**
         * @description The mode of the searchbar.
         * @summary Determines the visual style of the searchbar, either iOS or Material Design.
         * @type {"ios" | "md" | undefined}
         * @default "ios"
         */
        // @Input()
        // override mode: "ios" | "md" | undefined = "md";
        /**
         * @description The autocomplete attribute for the searchbar input.
         * @summary Specifies whether the browser should enable autocomplete for the input field.
         * This controls the browser's built-in autocomplete functionality, helping users by
         * suggesting previously entered values or common inputs. Setting to 'off' disables
         * this feature for privacy or security reasons.
         *
         * @type {AutocompleteTypes | undefined}
         * @default "off"
         * @memberOf SearchbarComponent
         */
        this.autocomplete = "off";
        /**
         * @description The autocorrect attribute for the searchbar input.
         * @summary Controls whether the browser should enable autocorrect functionality for the input field.
         * When enabled, the browser will automatically correct spelling mistakes as the user types.
         * This is typically disabled for search fields to preserve the user's exact search terms.
         *
         * @type {"on" | "off"}
         * @default "off"
         * @memberOf SearchbarComponent
         */
        this.autocorrect = "off";
        /**
         * @description Whether the searchbar should animate.
         * @summary Controls the animation behavior of the searchbar during appearance and disappearance transitions.
         * When enabled, the searchbar will use smooth animations for state changes, providing a more
         * polished user experience. This affects transitions like showing/hiding the component.
         *
         * @type {StringOrBoolean}
         * @default true
         * @memberOf SearchbarComponent
         */
        this.animated = true;
        /**
         * @description The text for the cancel button.
         * @summary Specifies the localized text to be displayed on the cancel button of the searchbar.
         * This text appears when the cancel button is visible and provides users with a clear
         * indication of how to dismiss the search interface. The text can be customized for
         * different languages and cultural contexts.
         *
         * @type {string}
         * @default "Cancel"
         * @memberOf SearchbarComponent
         */
        this.buttonCancelText = "Cancel";
        /**
         * @description The icon to use for the clear button.
         * @summary Specifies the icon to be displayed for the clear button of the searchbar.
         * @type {string | undefined}
         * @default undefined
         * @memberOf SearchbarComponent
         */
        this.clearIcon = undefined;
        /**
         * @description The color of the searchbar.
         * @summary Specifies the color theme to be applied to the searchbar.
         * @type {string | undefined}
         * @default undefined
         * @memberOf SearchbarComponent
         */
        this.color = undefined;
        /**
         * @description The amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
         * @summary Controls the debounce time for the search input to reduce the frequency of event emissions.
         * @type {number}
         * @default 500
         * @memberOf SearchbarComponent
         */
        this.debounce = 500;
        /**
         * @description Whether the searchbar is disabled.
         * @summary Controls whether the searchbar is interactive or not.
         * @type {StringOrBoolean}
         * @default false
         * @memberOf SearchbarComponent
         */
        this.disabled = false;
        /**
         * @description A hint to the browser for which enter key to display.
         * @summary Specifies the type of action that will be performed when the enter key is pressed.
         * @type {"search" | "enter" | "done" | "go" | "next" | "previous" | "send" | undefined}
         * @default "enter"
         * @memberOf SearchbarComponent
         */
        this.enterkeyhint = "enter";
        /**
         * @description The input mode for the searchbar.
         * @summary Specifies the type of data that might be entered by the user while editing the element or its contents.
         * @type {"text" | "search" | "none" | "email" | "tel" | "url" | "numeric" | "decimal" | undefined}
         * @default 'search'
         * @memberOf SearchbarComponent
         */
        this.inputmode = 'search';
        /**
         * @description The placeholder for the searchbar input.
         * @summary Specifies the placeholder text to be displayed in the searchbar when it's empty.
         * @type {string}
         * @default "Search"
         * @memberOf SearchbarComponent
         */
        this.placeholder = "Search";
        /**
         * @description The icon to use for the search button.
         * @summary Specifies the icon to be displayed for the search button of the searchbar.
         * @type {string | undefined}
         * @default "search-outline"
         * @memberOf SearchbarComponent
         */
        this.searchIcon = "search-outline";
        /**
         * @description When to show the cancel button.
         * @summary Controls the visibility of the cancel button in different states of the searchbar.
         * @type {"always" | "focus" | "never"}
         * @default "never"
         * @memberOf SearchbarComponent
         */
        this.showCancelButton = "never";
        /**
         * @description When to show the clear button.
         * @summary Controls the visibility of the clear button in different states of the searchbar.
         * @type {"always" | "focus" | "never"}
         * @default "focus"
         * @memberOf SearchbarComponent
         */
        this.showClearButton = "focus";
        /**
         * @description Whether to enable spellcheck on the searchbar input.
         * @summary Controls whether the browser's spellcheck feature is enabled for the searchbar input.
         * @type {boolean}
         * @default false
         * @memberOf SearchbarComponent
         */
        this.spellcheck = false;
        /**
         * @description The type of input to use for the searchbar.
         * @summary Specifies the type of control to display for the searchbar input.
         * @type {"number" | "text" | "search" | "email" | "password" | "tel" | "url" | undefined}
         * @default "search"
         * @memberOf SearchbarComponent
         */
        this.type = "search";
        /**
         * @description The value of the searchbar input.
         * @summary Specifies the current value of the searchbar input.
         * @type {null | string | undefined}
         * @default ""
         * @memberOf SearchbarComponent
         */
        this.value = "";
        /**
         * @description The keys to use for querying.
         * @summary Specifies the keys to be used when performing a search query.
         * @type {string | string[]}
         * @default "name"
         * @memberOf SearchbarComponent
         */
        this.queryKeys = "name";
        /**
         * @description Whether the searchbar is visible.
         * @summary Controls the visibility of the searchbar component.
         * @type {StringOrBoolean}
         * @default false
         * @memberOf SearchbarComponent
         */
        this.isVisible = false;
        /**
         * @description Whether to wrap the searchbar in a container.
         * @summary Controls whether the searchbar is wrapped in an additional container element.
         * @type {StringOrBoolean}
         * @default false
         * @memberOf SearchbarComponent
         */
        this.wrapper = false;
        /**
         * @description The color of the wrapper.
         * @summary Specifies the color theme to be applied to the wrapper container, if present.
         * @type {PredefinedColors}
         * @default "primary"
         * @memberOf SearchbarComponent
         */
        this.wrapperColor = "primary";
        /**
         * @description Whether to emit events to the window.
         * @summary Controls whether search events should be emitted as window events.
         * @type {StringOrBoolean}
         * @default true
         * @memberOf SearchbarComponent
         */
        this.emitEventToWindow = true;
        /**
         * @description Event emitter for search events.
         * @summary Emits search events when the user interacts with the searchbar, providing a reactive
         * interface for parent components to respond to search actions. This event is triggered by
         * various user interactions including typing, clearing, and explicit search actions.
         *
         * @type {EventEmitter<string>}
         * @memberOf SearchbarComponent
         */
        this.searchEvent = new EventEmitter();
        addIcons(allIcons);
    }
    /**
     * @description Initializes the component after Angular first displays the data-bound properties.
     * @summary Performs essential component initialization by converting string-based boolean inputs
     * to proper boolean values using the stringToBoolean utility. This ensures that all boolean
     * properties work correctly regardless of how they were passed from parent components or templates.
     *
     * @return {void}
     *
     * @mermaid
     * sequenceDiagram
     *   participant A as Angular Lifecycle
     *   participant S as SearchbarComponent
     *   participant U as Utility Functions
     *
     *   A->>S: ngOnInit()
     *   S->>U: stringToBoolean(emitEventToWindow)
     *   U-->>S: boolean value
     *   S->>U: stringToBoolean(wrapper)
     *   U-->>S: boolean value
     *   S->>U: stringToBoolean(isVisible)
     *   U-->>S: boolean value
     *   S->>U: stringToBoolean(disabled)
     *   U-->>S: boolean value
     *   S->>U: stringToBoolean(animated)
     *   U-->>S: boolean value
     *   Note over S: Component ready for interaction
     *
     * @memberOf SearchbarComponent
     */
    ngOnInit() {
        this.emitEventToWindow = stringToBoolean(this.emitEventToWindow);
        this.wrapper = stringToBoolean(this.wrapper);
        this.isVisible = stringToBoolean(this.isVisible);
        this.disabled = stringToBoolean(this.disabled);
        this.animated = stringToBoolean(this.animated);
    }
    /**
     * @description Handles the visibility toggle of the searchbar component.
     * @summary Listens for global window events to toggle the visibility state of the searchbar.
     * When the searchbar becomes visible, it automatically focuses on the input field after a brief
     * delay to ensure smooth animation completion. This provides a seamless user experience for
     * search activation through keyboard shortcuts or programmatic triggers.
     *
     * @param {CustomEvent} event - The custom event triggering the visibility toggle (unused but required by HostListener)
     * @return {void}
     *
     * @mermaid
     * sequenceDiagram
     *   participant W as Window
     *   participant S as SearchbarComponent
     *   participant E as DOM Element
     *
     *   W->>S: toggleSearchbarVisibility event
     *   S->>S: handleToggleVisibility()
     *   S->>S: Toggle isVisible state
     *   alt isVisible is true AND component exists
     *     S->>S: setTimeout(125ms)
     *     S->>E: setFocus() on ion-searchbar
     *   end
     *
     * @memberOf SearchbarComponent
     */
    handleToggleVisibility() {
        this.isVisible = !this.isVisible;
        if (this.isVisible && !!this.component.nativeElement) {
            setTimeout(() => {
                this.component.nativeElement.setFocus();
            }, 125);
        }
    }
    /**
     * @description Triggers a manual search event with the current searchbar value.
     * @summary Retrieves the current value from the searchbar's native element and emits it as a search event.
     * This method provides a programmatic way to trigger search functionality, useful for external
     * components or keyboard shortcuts that need to execute search without user interaction with the searchbar itself.
     *
     * @return {void}
     * @memberOf SearchbarComponent
     */
    search() {
        const element = this.component.nativeElement;
        this.searchEvent.emit(element.value || undefined);
    }
    /**
     * @description Handles value changes in the searchbar input field.
     * @summary Processes change events from the Ionic searchbar component and extracts the new value
     * to emit as a search event. This method is triggered when the user finishes editing the searchbar
     * value, providing a way to react to completed input changes rather than real-time typing.
     *
     * @param {CustomEvent} event - The change event from the Ionic searchbar containing the new value
     * @return {void}
     * @memberOf SearchbarComponent
     */
    handleChange(event) {
        this.emitEvent(event?.detail?.value ?? undefined);
    }
    /**
     * @description Handles clearing of the searchbar input field.
     * @summary Emits an undefined value as a search event when the searchbar is cleared by the user.
     * This method is typically triggered when the user clicks the clear button or uses other
     * clear mechanisms, signaling that the search should be reset or cleared.
     *
     * @return {void}
     * @memberOf SearchbarComponent
     */
    handleClear() {
        this.emitEvent(undefined);
    }
    /**
     * @description Handles real-time input events on the searchbar.
     * @summary Processes input events as the user types, providing immediate feedback for search functionality.
     * This method implements smart clearing behavior - if the input becomes empty, it automatically
     * triggers the clear handler. Otherwise, it emits the current value for real-time search suggestions
     * or filtering. This enables responsive search experiences with debounced event handling.
     *
     * @param {CustomEvent} event - The input event from the Ionic searchbar containing the current value
     * @return {void}
     *
     * @mermaid
     * sequenceDiagram
     *   participant U as User
     *   participant S as SearchbarComponent
     *   participant E as Event System
     *
     *   U->>S: Type in searchbar
     *   S->>S: handleInput(event)
     *   S->>S: Extract value from event
     *   alt value is empty or null
     *     S->>S: handleClear()
     *     S->>E: Emit undefined
     *   else value has content
     *     S->>S: emitEvent(value)
     *     S->>E: Emit search value
     *   end
     *
     * @memberOf SearchbarComponent
     */
    handleInput(event) {
        const value = event?.detail?.value;
        if (!value || !value?.length)
            return this.handleClear();
        this.emitEvent(value);
    }
    /**
     * @description Handles blur events on the searchbar.
     * @summary Currently an empty method, can be implemented for specific blur behavior.
     * @param {CustomEvent} event - The blur event from the searchbar
     * @return {void}
     */
    // handleBlur(event: CustomEvent): void {}
    /**
     * @description Emits search events through multiple channels.
     * @summary Orchestrates the emission of search events both as component output events and optionally
     * as global window events. This dual-channel approach enables both direct parent-child communication
     * and application-wide event broadcasting, supporting flexible integration patterns and loose coupling
     * between components that need to respond to search actions.
     *
     * @param {string | undefined} value - The search value to emit across all configured channels
     * @return {void}
     *
     * @mermaid
     * sequenceDiagram
     *   participant S as SearchbarComponent
     *   participant P as Parent Component
     *   participant W as Window Event System
     *
     *   S->>S: emitEvent(value)
     *   S->>P: searchEvent.emit(value)
     *   alt emitEventToWindow is true
     *     S->>W: windowEventEmitter('searchbarEvent', {value})
     *   end
     *
     * @memberOf SearchbarComponent
     */
    emitEvent(value) {
        this.searchEvent.emit(value);
        if (this.emitEventToWindow)
            windowEventEmitter('searchbarEvent', { value: value });
    }
    /**
     * @description Prevents default behavior of DOM events.
     * @summary Utility method to prevent unwanted default actions on DOM events, such as form submissions
     * or navigation triggers. This is commonly used in event handlers where the default browser behavior
     * would interfere with the component's custom logic or user experience design.
     *
     * @param {Event} event - The DOM event whose default behavior should be prevented
     * @return {void}
     * @memberOf SearchbarComponent
     */
    preventChange(event) {
        event.preventDefault();
    }
    static { this.ɵfac = function SearchbarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SearchbarComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SearchbarComponent, selectors: [["ngx-decaf-searchbar"]], hostBindings: function SearchbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("toggleSearchbarVisibility", function SearchbarComponent_toggleSearchbarVisibility_HostBindingHandler($event) { return ctx.handleToggleVisibility($event); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { autocomplete: "autocomplete", autocorrect: "autocorrect", animated: "animated", buttonCancelText: "buttonCancelText", clearIcon: "clearIcon", color: "color", debounce: "debounce", disabled: "disabled", enterkeyhint: "enterkeyhint", inputmode: "inputmode", placeholder: "placeholder", searchIcon: "searchIcon", showCancelButton: "showCancelButton", showClearButton: "showClearButton", spellcheck: "spellcheck", type: "type", value: "value", queryKeys: "queryKeys", isVisible: "isVisible", wrapper: "wrapper", wrapperColor: "wrapperColor", emitEventToWindow: "emitEventToWindow" }, outputs: { searchEvent: "searchEvent" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 2, vars: 15, consts: [["component", ""], ["ngClass", "dcf-searchbar", "name", "search", "mode", "ios", 3, "keyup.enter", "ionChange", "ionInput", "ionClear", "id", "autocomplete", "showCancelButton", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "placeholder", "searchIcon", "showClearButton", "spellcheck", "type"]], template: function SearchbarComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "ion-searchbar", 1, 0);
            i0.ɵɵlistener("keyup.enter", function SearchbarComponent_Template_ion_searchbar_keyup_enter_0_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.preventChange($event)); })("ionChange", function SearchbarComponent_Template_ion_searchbar_ionChange_0_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.handleChange($event)); })("ionInput", function SearchbarComponent_Template_ion_searchbar_ionInput_0_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.handleInput($event)); })("ionClear", function SearchbarComponent_Template_ion_searchbar_ionClear_0_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.handleClear()); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("id", ctx.uid)("autocomplete", ctx.autocomplete)("showCancelButton", ctx.showCancelButton)("cancelButtonText", ctx.buttonCancelText)("clearIcon", ctx.clearIcon)("color", ctx.color)("debounce", ctx.debounce)("disabled", ctx.disabled)("enterkeyhint", ctx.enterkeyhint)("inputmode", ctx.inputmode)("placeholder", ctx.placeholder)("searchIcon", ctx.searchIcon)("showClearButton", ctx.showClearButton)("spellcheck", ctx.spellcheck)("type", ctx.type);
        } }, dependencies: [ForAngularModule, i2.NgClass, IonSearchbar] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchbarComponent, [{
        type: Component,
        args: [{ selector: 'ngx-decaf-searchbar', standalone: true, imports: [ForAngularModule, IonSearchbar], template: "<ion-searchbar\n  [id]=\"uid\"\n  ngClass=\"dcf-searchbar\"\n  name=\"search\"\n  mode=\"ios\"\n  (keyup.enter)=\"preventChange($event)\"\n  (ionChange)=\"handleChange($event)\"\n  (ionInput)=\"handleInput($event)\"\n  (ionClear)=\"handleClear()\"\n  [autocomplete]=\"autocomplete\"\n  [showCancelButton]=\"showCancelButton\"\n  [cancelButtonText]=\"buttonCancelText\"\n  [clearIcon]=\"clearIcon\"\n  [color]=\"color\"\n  [debounce]=\"debounce\"\n  [disabled]=\"disabled\"\n  [enterkeyhint]=\"enterkeyhint\"\n  [inputmode]=\"inputmode\"\n  [placeholder]=\"placeholder\"\n  [searchIcon]=\"searchIcon\"\n  [showClearButton]=\"showClearButton\"\n  [spellcheck]=\"spellcheck\"\n  [type]=\"type\"\n  #component\n />\n" }]
    }], () => [], { autocomplete: [{
            type: Input
        }], autocorrect: [{
            type: Input
        }], animated: [{
            type: Input
        }], buttonCancelText: [{
            type: Input
        }], clearIcon: [{
            type: Input
        }], color: [{
            type: Input
        }], debounce: [{
            type: Input
        }], disabled: [{
            type: Input
        }], enterkeyhint: [{
            type: Input
        }], inputmode: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], searchIcon: [{
            type: Input
        }], showCancelButton: [{
            type: Input
        }], showClearButton: [{
            type: Input
        }], spellcheck: [{
            type: Input
        }], type: [{
            type: Input
        }], value: [{
            type: Input
        }], queryKeys: [{
            type: Input
        }], isVisible: [{
            type: Input
        }], wrapper: [{
            type: Input
        }], wrapperColor: [{
            type: Input
        }], emitEventToWindow: [{
            type: Input
        }], searchEvent: [{
            type: Output
        }], handleToggleVisibility: [{
            type: HostListener,
            args: ["window:toggleSearchbarVisibility", ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SearchbarComponent, { className: "SearchbarComponent", filePath: "components/searchbar/searchbar.component.ts", lineNumber: 32 }); })();

const _c0$5 = ["optionsFilterElement"];
function _forTrack0$1($index, $item) { return this.trackItemFn($index, $item == null ? null : $item["index"]); }
const _c1$4 = a0 => ({ "dcf-hidden": a0 });
function FilterComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-decaf-searchbar", 15);
    i0.ɵɵlistener("searchEvent", function FilterComponent_Conditional_0_Template_ngx_decaf_searchbar_searchEvent_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.handleSearch($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("emitEventToWindow", false)("debounce", 500);
} }
function FilterComponent_For_6_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-chip", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const filter_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("outline", true);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(filter_r4 == null ? null : filter_r4["index"]);
} }
function FilterComponent_For_6_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-chip", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const filter_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("outline", true);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(filter_r4 == null ? null : filter_r4["condition"]);
} }
function FilterComponent_For_6_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-chip", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "ion-icon", 18);
    i0.ɵɵlistener("click", function FilterComponent_For_6_Conditional_2_Template_ion_icon_click_2_listener() { i0.ɵɵrestoreView(_r5); const filter_r4 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.removeFilter(filter_r4 == null ? null : filter_r4["value"])); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const filter_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("outline", true);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", filter_r4 == null ? null : filter_r4["value"], " ");
} }
function FilterComponent_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, FilterComponent_For_6_Conditional_0_Template, 2, 2, "ion-chip", 16)(1, FilterComponent_For_6_Conditional_1_Template, 2, 2, "ion-chip", 16)(2, FilterComponent_For_6_Conditional_2_Template, 3, 2, "ion-chip", 17);
} if (rf & 2) {
    const filter_r4 = ctx.$implicit;
    i0.ɵɵconditional((filter_r4 == null ? null : filter_r4["index"]) ? 0 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional((filter_r4 == null ? null : filter_r4["condition"]) ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional((filter_r4 == null ? null : filter_r4["value"]) ? 2 : -1);
} }
function FilterComponent_Conditional_11_Conditional_3_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵlistener("keydown.enter", function FilterComponent_Conditional_11_Conditional_3_For_1_Template_div_keydown_enter_0_listener() { const key_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.selectOption(key_r7)); })("click", function FilterComponent_Conditional_11_Conditional_3_For_1_Template_div_click_0_listener() { const key_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.selectOption(key_r7)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const key_r7 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", key_r7, " ");
} }
function FilterComponent_Conditional_11_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, FilterComponent_Conditional_11_Conditional_3_For_1_Template, 2, 1, "div", 20, i0.ɵɵrepeaterTrackByIdentity);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵrepeater(ctx_r2.filteredOptions);
} }
function FilterComponent_Conditional_11_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵlistener("click", function FilterComponent_Conditional_11_Conditional_4_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(2); ctx_r2.filteredOptions = ctx_r2.options; return i0.ɵɵresetView(ctx_r2.value = ""); })("keydown.enter", function FilterComponent_Conditional_11_Conditional_4_Template_div_keydown_enter_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(2); ctx_r2.filteredOptions = ctx_r2.options; return i0.ɵɵresetView(ctx_r2.value = ""); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r2.locale + ".no_suggestions"), " ");
} }
function FilterComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", null, 1)(2, "div");
    i0.ɵɵtemplate(3, FilterComponent_Conditional_11_Conditional_3_Template, 2, 0)(4, FilterComponent_Conditional_11_Conditional_4_Template, 3, 3, "div", 19);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMap("dcf-dropdown " + (ctx_r2.options.length > 0 ? " dcf-active" : ""));
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r2.filteredOptions.length > 0 ? 3 : 4);
} }
function FilterComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "ion-button", 12);
    i0.ɵɵlistener("click", function FilterComponent_Conditional_12_Template_ion_button_click_1_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.clear()); });
    i0.ɵɵelement(2, "ion-icon", 23);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("color", !ctx_r2.isDarkMode ? "dark" : "medium");
} }
function FilterComponent_Conditional_16_Conditional_3_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵlistener("keydown.enter", function FilterComponent_Conditional_16_Conditional_3_For_1_Template_div_keydown_enter_0_listener() { const key_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.selectOption(key_r11)); })("click", function FilterComponent_Conditional_16_Conditional_3_For_1_Template_div_click_0_listener() { const key_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.selectOption(key_r11)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const key_r11 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", key_r11, " ");
} }
function FilterComponent_Conditional_16_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, FilterComponent_Conditional_16_Conditional_3_For_1_Template, 2, 1, "div", 20, i0.ɵɵrepeaterTrackByIdentity);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵrepeater(ctx_r2.filteredOptions);
} }
function FilterComponent_Conditional_16_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵlistener("click", function FilterComponent_Conditional_16_Conditional_4_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r2 = i0.ɵɵnextContext(2); ctx_r2.filteredOptions = ctx_r2.options; return i0.ɵɵresetView(ctx_r2.value = ""); })("keydown.enter", function FilterComponent_Conditional_16_Conditional_4_Template_div_keydown_enter_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r2 = i0.ɵɵnextContext(2); ctx_r2.filteredOptions = ctx_r2.options; return i0.ɵɵresetView(ctx_r2.value = ""); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r2.locale + ".no_suggestions"), " ");
} }
function FilterComponent_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", null, 1)(2, "div");
    i0.ɵɵtemplate(3, FilterComponent_Conditional_16_Conditional_3_Template, 2, 0)(4, FilterComponent_Conditional_16_Conditional_4_Template, 3, 3, "div", 19);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMap("dcf-dropdown " + (ctx_r2.options.length > 0 ? " dcf-active" : ""));
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r2.filteredOptions.length > 0 ? 3 : 4);
} }
function FilterComponent_Conditional_17_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-select-option", 26);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sort_r14 = ctx.$implicit;
    i0.ɵɵproperty("value", sort_r14);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 2, sort_r14));
} }
function FilterComponent_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 24)(2, "div", 4)(3, "ion-select", 25);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵlistener("ionChange", function FilterComponent_Conditional_17_Template_ion_select_ionChange_3_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.handleSortChange($event)); });
    i0.ɵɵrepeaterCreate(5, FilterComponent_Conditional_17_For_6_Template, 3, 4, "ion-select-option", 26, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 27)(8, "ion-button", 28);
    i0.ɵɵlistener("click", function FilterComponent_Conditional_17_Template_ion_button_click_8_listener() { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.handleSortDirectionChange()); });
    i0.ɵɵelement(9, "ion-icon", 29);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("value", ctx_r2.sortValue)("label", i0.ɵɵpipeBind1(4, 4, ctx_r2.locale + ".sort"));
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r2.sortBy);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("color", !ctx_r2.isDarkMode ? "primary" : "medium")("name", ctx_r2.sortDirection === "desc" ? "arrow-down-outline" : "arrow-up-outline");
} }
/**
 * @description Advanced filter component for creating dynamic search filters with step-by-step construction.
 * @summary This component provides a comprehensive filtering interface that allows users to build
 * complex search criteria using a three-step approach: select index → select condition → enter value.
 * It supports filtering by multiple field indexes, comparison conditions, and values, displaying
 * selected filters as removable chips. The component is responsive and includes auto-suggestions
 * with keyboard navigation support.
 *
 * @example
 * ```html
 * <ngx-decaf-filter
 *   [indexes]="['name', 'email', 'department', 'status']"
 *   [conditions]="['Equal', 'Contains', 'Greater Than', 'Less Than']"
 *   [sort]="['createdAt', 'updatedAt']"
 *   [disableSort]="false"
 *   (filterEvent)="onFiltersChanged($event)">
 * </ngx-decaf-filter>
 * ```
 *
 * @mermaid
 * sequenceDiagram
 *   participant U as User
 *   participant F as FilterComponent
 *   participant P as Parent Component
 *
 *   U->>F: Focus input field
 *   F->>F: handleFocus() - Show available indexes
 *   U->>F: Select index (e.g., "name")
 *   F->>F: addFilter() - Step 1 completed
 *   F->>F: Show available conditions
 *   U->>F: Select condition (e.g., "Contains")
 *   F->>F: addFilter() - Step 2 completed
 *   F->>F: Show value input prompt
 *   U->>F: Enter value and press Enter
 *   F->>F: addFilter() - Step 3 completed
 *   F->>F: Create complete filter object
 *   F->>P: Emit filterEvent with new filter array
 *   F->>F: Reset to step 1 for next filter
 *
 * @memberOf ForAngularModule
 */
let FilterComponent = class FilterComponent extends NgxBaseComponent {
    /**
     * @description Constructor for FilterComponent.
     * @summary Initializes a new instance of the FilterComponent.
     * Calls the parent constructor with the component name to establish base locale string generation
     * and internationalization support.
     *
     * @memberOf FilterComponent
     */
    constructor() {
        super("FilterComponent");
        /**
         * @description Available field indexes for filtering operations.
         * @summary Defines the list of field names that users can filter by. These represent
         * the data properties available for filtering operations. Each index corresponds to
         * a field in the data model that supports comparison operations.
         *
         * @type {string[]}
         * @default []
         * @memberOf FilterComponent
         */
        this.indexes = [];
        /**
         * @description Available comparison conditions for filters.
         * @summary Defines the list of comparison operators that can be used when creating filters.
         * These conditions determine how the filter value is compared against the field value.
         * Common conditions include equality, containment, and numerical comparison operations.
         *
         * @type {string[]}
         * @default []
         * @memberOf FilterComponent
         */
        this.conditions = ['Equal', 'Contains', 'Not Contains', 'Greater Than', 'Less Than', 'Not Equal'];
        /**
         * @description Available sorting options for the filtered data.
         * @summary Defines the list of field names that can be used for sorting the filtered results.
         * When disableSort is false, this array is automatically merged with the indexes array
         * to provide comprehensive sorting capabilities.
         *
         * @type {string[]}
         * @default []
         * @memberOf FilterComponent
         */
        this.sortBy = [];
        /**
         * @description Controls whether sorting functionality is disabled.
         * @summary When set to true, prevents the automatic merging of sort and indexes arrays,
         * effectively disabling sorting capabilities. This is useful when you want to provide
         * filtering without sorting options.
         *
         * @type {boolean}
         * @default false
         * @memberOf FilterComponent
         */
        this.disableSort = false;
        /**
         * @description Available options for the current filter step.
         * @summary Contains the list of options available for selection in the current step.
         * This array changes dynamically based on the current step: indexes → conditions → empty for value input.
         *
         * @type {string[]}
         * @default []
         * @memberOf FilterComponent
         */
        this.options = [];
        /**
         * @description Filtered options based on user input.
         * @summary Contains the subset of options that match the current user input for real-time
         * filtering. This array is updated as the user types to show only relevant suggestions
         * in the dropdown menu.
         *
         * @type {string[]}
         * @default []
         * @memberOf FilterComponent
         */
        this.filteredOptions = [];
        /**
         * @description Complete filter objects created by the user.
         * @summary Array of complete filter objects, each containing index, condition, and value properties.
         * These represent the active filters that can be applied to data operations.
         *
         * @type {KeyValue[]}
         * @default []
         * @memberOf FilterComponent
         */
        this.filterValue = [];
        /**
         * @description Current filter being constructed.
         * @summary Temporary object that accumulates filter properties (index, condition, value)
         * during the three-step filter creation process. Gets added to filterValue when complete.
         *
         * @type {KeyValue}
         * @default {}
         * @memberOf FilterComponent
         */
        this.lastFilter = {};
        /**
         * @description Current step in the filter creation process.
         * @summary Tracks the current step of filter creation: 1 = index selection, 2 = condition selection,
         * 3 = value input. Automatically resets to 1 after completing a filter.
         *
         * @type {number}
         * @default 1
         * @memberOf FilterComponent
         */
        this.step = 1;
        /**
         * @description Controls dropdown visibility state.
         * @summary Boolean flag that determines whether the options dropdown is currently visible.
         * Used to manage the dropdown's open/close state and coordinate with focus/blur events.
         *
         * @type {boolean}
         * @default false
         * @memberOf FilterComponent
         */
        this.dropdownOpen = false;
        /**
         * @description Current input field value.
         * @summary Stores the current text input value that the user is typing. This value is
         * bound to the input field and is cleared after each successful filter step completion.
         *
         * @type {string}
         * @default ''
         * @memberOf FilterComponent
         */
        this.value = '';
        /**
         * @description Current sorting field value.
         * @summary Stores the field name currently selected for sorting operations.
         * This value determines which field is used to order the filtered results.
         * Defaults to 'id' and can be changed through the sort dropdown selection.
         *
         * @type {string}
         * @default 'id'
         * @memberOf FilterComponent
         */
        this.sortValue = 'id';
        /**
         * @description Current sorting direction.
         * @summary Defines the direction of the sort operation - ascending or descending.
         * This value works in conjunction with sortValue to determine the complete
         * sorting configuration for filtered results.
         *
         * @type {OrderDirection}
         * @default OrderDirection.DSC
         * @memberOf FilterComponent
         */
        this.sortDirection = OrderDirection.DSC;
        /**
         * @description Browsing mode (dark or light).
         * @summary Indicates whether the dark mode theme is currently enabled.
         * Defaults to `false`.
         *
         * @type {boolean}
         * @memberOf FilterComponent
         */
        this.isDarkMode = false;
        /**
         * @description Event emitter for filter changes.
         * @summary Emits filter events when the user creates, modifies, or clears filters.
         * The emitted value contains an array of complete filter objects or undefined when
         * filters are cleared. Parent components listen to this event to update their data display.
         *
         * @type {EventEmitter<KeyValue[] | undefined>}
         * @memberOf FilterComponent
         */
        this.filterEvent = new EventEmitter();
        /**
         * @description Event emitter for search events.
         * @summary Emits search events when the user interacts with the searchbar.
         * @type {EventEmitter<string>}
         * @memberOf FilterComponent
         */
        this.searchEvent = new EventEmitter();
        addIcons({ chevronDownOutline, chevronUpOutline });
    }
    /**
     * @description Initializes the component after Angular first displays the data-bound properties.
     * @summary Sets up the component by initializing window width tracking, setting up resize event
     * subscriptions with debouncing, configuring sorting options, and calling the base initialization.
     * This method prepares the component for user interaction and responsive behavior.
     *
     * @mermaid
     * sequenceDiagram
     *   participant A as Angular Lifecycle
     *   participant F as FilterComponent
     *   participant W as Window
     *   participant R as RxJS
     *
     *   A->>F: ngOnInit()
     *   F->>W: getWindowWidth()
     *   W-->>F: Return current width
     *   F->>R: Setup resize subscription with debounce
     *   R-->>F: Subscription created
     *   alt disableSort is false
     *     F->>F: Merge sort and indexes arrays
     *   end
     *   F->>F: Call initialize()
     *
     * @returns {Promise<void>}
     * @memberOf FilterComponent
     */
    async ngOnInit() {
        this.isDarkMode = await isDarkMode();
        this.windowWidth = getWindowWidth();
        this.windowResizeSubscription = fromEvent(window, 'resize')
            .pipe(debounceTime(300))
            .subscribe(() => {
            this.windowWidth = getWindowWidth();
        });
        this.getIndexes();
        this.initialize();
    }
    /**
     * @description Retrieves and configures available indexes for filtering and sorting.
     * @summary Extracts field indexes from the model if available and merges them with
     * sorting options when sorting is enabled. This method sets up the available field
     * options for both filtering and sorting operations based on the model structure.
     *
     * @returns {void}
     * @memberOf FilterComponent
     */
    getIndexes() {
        if (this.model)
            this.indexes = Object.keys(Repository.indexes(this.model) || {});
        if (!this.disableSort)
            this.sortBy = [...this.sortBy, ...this.indexes];
    }
    /**
     * @description Cleanup method called when the component is destroyed.
     * @summary Unsubscribes from window resize events to prevent memory leaks.
     * This is essential for proper cleanup of RxJS subscriptions when the component
     * is removed from the DOM.
     *
     * @returns {void}
     * @memberOf FilterComponent
     */
    ngOnDestroy() {
        this.windowResizeSubscription.unsubscribe();
        this.clear();
    }
    /**
     * @description Handles input events from the text field.
     * @summary Processes user input and filters the available options based on the typed value.
     * This method provides real-time filtering of suggestions as the user types in the input field.
     *
     * @param {InputEvent} event - The input event containing the new value
     * @returns {void}
     * @memberOf FilterComponent
     */
    handleInput(event) {
        const { value } = event.target;
        this.filteredOptions = this.filterOptions(value);
    }
    /**
     * @description Handles focus events on the input field.
     * @summary Sets up the available options when the input field receives focus and opens the dropdown.
     * If no options are provided, automatically determines the appropriate options based on current step.
     * This method initializes the dropdown with contextually relevant suggestions.
     *
     * @param {string[]} options - Optional array of options to display
     * @returns {void}
     * @memberOf FilterComponent
     */
    handleFocus(options = []) {
        if (!options.length)
            options = this.getOptions();
        this.filteredOptions = this.options = options;
        this.dropdownOpen = true;
    }
    /**
     * @description Handles blur events on the input field with delayed closing.
     * @summary Manages the dropdown closing behavior with a delay to allow for option selection.
     * Uses a two-phase approach to prevent premature closing when users click on dropdown options.
     *
     * @param {boolean} close - Internal flag to control the closing phase
     * @returns {void}
     * @memberOf FilterComponent
     */
    handleBlur(close = false) {
        if (!close) {
            this.dropdownOpen = false;
            setTimeout(() => {
                this.handleBlur(true);
            }, 100);
        }
        else {
            if (!this.dropdownOpen && this.options.length) {
                setTimeout(() => {
                    this.options = [];
                    this.dropdownOpen = false;
                }, 50);
            }
        }
    }
    /**
     * @description Determines the appropriate options based on the current filter step.
     * @summary Returns the contextually relevant options for the current step in the filter creation process.
     * Step 1 shows indexes, Step 2 shows conditions, Step 3 shows no options (value input).
     *
     * @returns {string[]} Array of options appropriate for the current step
     * @memberOf FilterComponent
     */
    getOptions() {
        switch (this.step) {
            case 1:
                this.options = this.indexes;
                break;
            case 2:
                this.options = this.conditions;
                break;
            case 3:
                this.options = [];
                break;
        }
        return this.options;
    }
    /**
     * @description Adds a filter step or completes filter creation through a three-step process.
     * @summary Core method for building filters step by step: Step 1 (Index) → Step 2 (Condition) → Step 3 (Value).
     * When all steps are complete, creates a complete filter object and adds it to the filter collection.
     * Handles both keyboard events (Enter to submit) and programmatic calls.
     *
     * @param {string} value - The value to add for the current step
     * @param {CustomEvent} event - Optional event (KeyboardEvent triggers submission when value is empty)
     * @returns {void}
     *
     * @mermaid
     * sequenceDiagram
     *   participant U as User
     *   participant F as FilterComponent
     *
     *   U->>F: addFilter(value, event)
     *   F->>F: Trim and validate value
     *   alt KeyboardEvent && empty value
     *     F->>F: submit() - Send current filters
     *   else Valid value or step 3
     *     alt Step 1 (Index)
     *       F->>F: lastFilter.index = value
     *       F->>F: options = conditions
     *     else Step 2 (Condition)
     *       F->>F: lastFilter.condition = value
     *       F->>F: options = []
     *     else Step 3 (Value)
     *       F->>F: lastFilter.value = value
     *       F->>F: Add complete filter to filterValue
     *       F->>F: Reset step to 1
     *     end
     *     F->>F: Increment step
     *     F->>F: Clear input & focus
     *     F->>F: Show next options
     *   end
     *
     * @memberOf FilterComponent
     */
    addFilter(value, event) {
        value = value.trim();
        if (event instanceof KeyboardEvent && !value) {
            this.submit();
        }
        else {
            if ((value && (!(event instanceof KeyboardEvent)) || this.step === 3)) {
                const filter = this.lastFilter;
                switch (this.step) {
                    case 1:
                        filter['index'] = value;
                        this.options = this.conditions;
                        break;
                    case 2:
                        filter['condition'] = value;
                        this.options = [];
                        break;
                    case 3:
                        filter['value'] = value;
                        this.options = this.indexes;
                        break;
                }
                if (!this.filterValue.length) {
                    this.filterValue.push(filter);
                }
                else {
                    if (this.step === 1)
                        this.filterValue.push(filter);
                }
                if (this.step === 3) {
                    this.step = 0;
                    this.filterValue[this.filterValue.length - 1] = filter;
                    this.lastFilter = {};
                }
                this.step++;
                this.value = '';
                if (this.options.length)
                    this.handleFocus(this.options);
                this.component.nativeElement.focus();
            }
        }
    }
    /**
     * @description Selects an option from the dropdown suggestions.
     * @summary Handles option selection when a user clicks on a suggestion in the dropdown.
     * This method acts as a bridge between dropdown clicks and the main addFilter logic.
     *
     * @param {CustomEvent} event - The click event from the dropdown option
     * @param {string} value - The selected option value
     * @returns {void}
     * @memberOf FilterComponent
     */
    selectOption(value) {
        this.addFilter(value);
    }
    /**
     * @description Determines if a filter option can be individually removed.
     * @summary Checks whether a filter component should display a close icon for removal.
     * Only value options can be removed individually; index and condition options are part
     * of the complete filter structure and cannot be removed separately.
     *
     * @param {string} option - The filter option text to check
     * @returns {boolean} True if the option can be cleared individually, false otherwise
     * @memberOf FilterComponent
     */
    allowClear(option) {
        return this.indexes.indexOf(option) === -1 && this.conditions.indexOf(option) === -1;
    }
    /**
     * @description Removes a complete filter from the collection based on filter value.
     * @summary Removes a complete filter by matching the provided value against filter values
     * in the collection. Uses string normalization to handle accents and case differences.
     * After removal, resets the interface to show available indexes for new filter creation.
     *
     * @param {string} filter - The filter value to remove (matches against filter.value property)
     * @returns {void}
     *
     * @mermaid
     * sequenceDiagram
     *   participant U as User
     *   participant F as FilterComponent
     *
     *   U->>F: removeFilter(filterValue)
     *   F->>F: cleanString(filterValue)
     *   F->>F: Filter out matching filter objects
     *   F->>F: Clear input value
     *   F->>F: handleFocus(indexes) - Reset to index selection
     *   Note over F: Filter removed and UI reset
     *
     * @memberOf FilterComponent
     */
    removeFilter(filter) {
        function cleanString(filter) {
            return filter
                .toLowerCase() // convert all characters to lowercase
                .normalize("NFD") // separate accent marks from characters
                .replace(/[\u0300-\u036f]/g, "") // remove accent marks
                .replace(/\s+/g, ""); // remove all whitespace
        }
        this.value = "";
        this.filterValue = this.filterValue.filter((item) => item?.['value'] && cleanString(item?.['value']) !== cleanString(filter));
        if (this.filterValue.length === 0) {
            this.step = 1;
            this.lastFilter = {};
        }
        this.handleFocus(this.indexes);
    }
    /**
     * @description Resets the component to its initial state.
     * @summary Clears all filter data, options, and resets the step counter to 1.
     * This method provides a clean slate for new filter creation without emitting events.
     *
     * @returns {void}
     * @memberOf FilterComponent
     */
    reset() {
        this.options = this.filteredOptions = this.filterValue = [];
        this.step = 1;
        this.lastFilter = {};
        this.value = '';
        setTimeout(() => {
            this.submit();
        }, 100);
    }
    /**
     * @description Clears all filters and notifies parent components.
     * @summary Resets the component state and emits undefined to notify parent components
     * that all filters have been cleared. This triggers any connected data refresh logic.
     *
     * @param {string} value - Optional parameter (currently unused)
     * @returns {void}
     * @memberOf FilterComponent
     */
    clear(value) {
        if (!value)
            this.reset();
    }
    /**
     * @description Submits the current filter collection to parent components.
     * @summary Emits the current filter array to parent components when filters are ready
     * to be applied. Only emits if there are active filters. Clears options after submission.
     *
     * @returns {void}
     * @memberOf FilterComponent
     */
    submit() {
        this.filterEvent.emit({
            query: this.filterValue.length > 0 ? this.filterValue : undefined,
            sort: {
                value: this.sortValue,
                direction: this.sortDirection
            }
        });
        if (this.filterValue.length === 0)
            this.options = [];
    }
    /**
     * @description Toggles the sort direction between ascending and descending.
     * @summary Handles sort direction changes by toggling between ASC and DSC values.
     * When the direction changes, automatically triggers a submit to apply the new
     * sorting configuration to the filtered results.
     *
     * @returns {void}
     * @memberOf FilterComponent
     */
    handleSortDirectionChange() {
        const direction = this.sortDirection === OrderDirection.ASC ? OrderDirection.DSC : OrderDirection.ASC;
        if (direction !== this.sortDirection) {
            this.sortDirection = direction;
            this.submit();
        }
    }
    /**
     * @description Handles sort field selection changes from the dropdown.
     * @summary Processes sort field changes when users select a different field
     * from the sort dropdown. Updates the sortValue property and triggers
     * a submit to apply the new sorting configuration if the value has changed.
     *
     * @param {CustomEvent} event - The select change event containing the new sort field value
     * @returns {void}
     * @memberOf FilterComponent
     */
    handleSortChange(event) {
        const target = event.target;
        const value = target.value;
        if (value !== this.sortValue) {
            this.sortValue = value;
            this.submit();
        }
    }
    /**
     * @description Filters available options based on user input with visual highlighting.
     * @summary Performs real-time filtering of available options based on user input.
     * Also handles visual highlighting of matching options in the dropdown. Returns all
     * options if input is less than 2 characters for performance optimization.
     *
     * @param {string | null | undefined} value - The search value to filter by
     * @returns {string[]} Array of filtered options that match the input
     *
     * @mermaid
     * sequenceDiagram
     *   participant U as User
     *   participant F as FilterComponent
     *   participant D as DOM
     *
     *   U->>F: filterOptions(inputValue)
     *   alt inputValue < 2 characters
     *     F->>D: Remove existing highlights
     *     F-->>U: Return all options
     *   else inputValue >= 2 characters
     *     F->>D: Query all option elements
     *     F->>D: Add highlight to first matching option
     *     F->>F: Filter options by substring match
     *     F-->>U: Return filtered options
     *   end
     *
     * @memberOf FilterComponent
     */
    filterOptions(value) {
        const optionsElement = this.optionsFilterElement.nativeElement;
        if (!value?.length || !value || value.length < 2) {
            const filteredOption = optionsElement.querySelector('.dcf-filtering-item');
            if (filteredOption)
                filteredOption.classList.remove('dcf-filtering-item');
            return this.options;
        }
        const options = optionsElement.querySelectorAll('.dcf-item');
        for (const option of options) {
            const isActive = option.textContent?.toLowerCase().includes(value.toLowerCase());
            if (isActive) {
                option.classList.add('dcf-filtering-item');
                break;
            }
        }
        return this.options.filter((option) => option.toLowerCase().includes(value.toLowerCase()));
    }
    /**
     * @description Handles search events from the integrated searchbar component.
     * @summary Processes search input from the searchbar and emits search events
     * to parent components. This method acts as a bridge between the internal
     * searchbar component and external search event listeners.
     *
     * @param {string | undefined} value - The search value entered by the user
     * @returns {void}
     * @memberOf FilterComponent
     */
    handleSearch(value) {
        this.searchEvent.emit(value);
    }
    static { this.ɵfac = function FilterComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FilterComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FilterComponent, selectors: [["ngx-decaf-filter"]], viewQuery: function FilterComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$5, 5, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.optionsFilterElement = _t.first);
        } }, inputs: { indexes: "indexes", conditions: "conditions", sortBy: "sortBy", disableSort: "disableSort" }, outputs: { filterEvent: "filterEvent", searchEvent: "searchEvent" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 18, vars: 14, consts: [["component", ""], ["optionsFilterElement", ""], [3, "emitEventToWindow", "debounce"], [1, "dcf-grid", "dcf-grid-small", "dcf-grid-match", "dcf-filter-grid", 3, "id", "ngClass"], [1, "dcf-width-expand"], [1, "dcf-filter"], [1, "dcf-input"], [1, "dcf-width-1-1"], ["fill", "none", "type", "text", 3, "ngModelChange", "keydown.enter", "keydown.backspace", "input", "click", "blur", "ngModel", "placeholder"], [3, "class"], [1, "dcf-icon-clear"], [1, "dcf-icon-search"], ["fill", "clear", "size", "small", 3, "click"], ["name", "search-outline", "slot", "icon-only", 3, "color"], [1, "dcf-width-1-5@m", "dcf-width-1-1", "dcf-sort-container"], [3, "searchEvent", "emitEventToWindow", "debounce"], [3, "outline"], [1, "dcf-filter-value", 3, "outline"], ["name", "close", "size", "small", 3, "click"], ["tabindex", "0", 1, "dcf-empty"], ["tabindex", "0", 1, "dcf-item"], ["tabindex", "0", 1, "dcf-item", 3, "keydown.enter", "click"], ["tabindex", "0", 1, "dcf-empty", 3, "click", "keydown.enter"], ["name", "trash-outline", "slot", "icon-only", 3, "color"], [1, "dcf-grid", "dcf-grid-collapse", "dcf-flex", "dcf-flex-middle", "dcf-grid-match"], ["toggleIcon", "chevron-down-outline", "expandedIcon", "chevron-up-outline", "interface", "popover", "label-placement", "floating", "fill", "outline", 1, "dcf-sort-select", 3, "ionChange", "value", "label"], [3, "value"], [1, "dcf-width-auto"], ["fill", "clear", 3, "click"], ["slot", "icon-only", 3, "color", "name"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵtemplate(0, FilterComponent_Conditional_0_Template, 1, 2, "ngx-decaf-searchbar", 2);
            i0.ɵɵelementStart(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6);
            i0.ɵɵrepeaterCreate(5, FilterComponent_For_6_Template, 3, 3, null, null, _forTrack0$1, true);
            i0.ɵɵelementStart(7, "div", 7)(8, "input", 8, 0);
            i0.ɵɵpipe(10, "translate");
            i0.ɵɵtwoWayListener("ngModelChange", function FilterComponent_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.value, $event) || (ctx.value = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("keydown.enter", function FilterComponent_Template_input_keydown_enter_8_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.addFilter(ctx.value, $event)); })("keydown.backspace", function FilterComponent_Template_input_keydown_backspace_8_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.clear(ctx.value)); })("input", function FilterComponent_Template_input_input_8_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.handleInput($event)); })("click", function FilterComponent_Template_input_click_8_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.handleFocus()); })("blur", function FilterComponent_Template_input_blur_8_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.handleBlur()); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(11, FilterComponent_Conditional_11_Template, 5, 3, "div", 9);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(12, FilterComponent_Conditional_12_Template, 3, 1, "div", 10);
            i0.ɵɵelementStart(13, "div", 11)(14, "ion-button", 12);
            i0.ɵɵlistener("click", function FilterComponent_Template_ion_button_click_14_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.submit()); });
            i0.ɵɵelement(15, "ion-icon", 13);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(16, FilterComponent_Conditional_16_Template, 5, 3, "div", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(17, FilterComponent_Conditional_17_Template, 10, 6, "div", 14);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵconditional(!ctx.indexes.length ? 0 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("id", ctx.uid)("ngClass", i0.ɵɵpureFunction1(12, _c1$4, !ctx.indexes.length));
            i0.ɵɵadvance(4);
            i0.ɵɵrepeater(ctx.filterValue);
            i0.ɵɵadvance(3);
            i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(10, 10, ctx.locale + (ctx.step === 3 ? ".type" : ".select")));
            i0.ɵɵtwoWayProperty("ngModel", ctx.value);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.windowWidth >= 768 ? 11 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.filterValue.length > 0 ? 12 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("color", !ctx.isDarkMode ? "dark" : "medium");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.windowWidth < 768 ? 16 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.disableSort ? 17 : -1);
        } }, dependencies: [ForAngularModule, i1.IonButton, i2.NgClass, i2$1.DefaultValueAccessor, i2$1.NgControlStatus, i2$1.NgModel, i3.TranslatePipe, IonChip,
            IonIcon,
            IonSelect,
            SearchbarComponent], styles: [".dcf-filter-grid[_ngcontent-%COMP%]{padding:0 .5rem;margin-top:.75rem;margin-bottom:.75rem}ion-select[_ngcontent-%COMP%]{min-height:44px!important}.dcf-hidden[_ngcontent-%COMP%]{display:none!important}.dcf-filter[_ngcontent-%COMP%]{display:flex;width:100%;min-height:40px;box-shadow:0 1px 2px #0a0d120d;border-radius:var(--dcf-border-radius);box-sizing:border-box}@media (prefers-color-scheme: light){.dcf-filter[_ngcontent-%COMP%]{border:1px solid var(--dcf-color-gray-3);background-color:#fff}.dcf-filter[_ngcontent-%COMP%]:focus-within{border-color:var(--dcf-color-primary);background-color:#fff}}@media (prefers-color-scheme: dark){.dcf-filter[_ngcontent-%COMP%]{border:1px solid var(--dcf-color-step-500)}.dcf-filter[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder, .dcf-filter[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:var(--dcf-color-gray-4)!important}.dcf-filter[_ngcontent-%COMP%]:hover{border-color:var(--dcf-color-gray-2)}.dcf-filter[_ngcontent-%COMP%]:focus-within{border-color:var(--dcf-color-gray-2)}}.dcf-filter[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{border-radius:6px;padding:0 8px!important;height:24px;min-height:24px;font-size:.75rem;font-style:normal;font-weight:500;flex-shrink:0;margin-right:2px;white-space:nowrap}@media (prefers-color-scheme: light){.dcf-filter[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{border:1px solid var(--dcf-color-gray-3);color:var(--dcf-color-gray-7)}.dcf-filter[_ngcontent-%COMP%]   ion-chip.dcf-filter-value[_ngcontent-%COMP%]{background:var(--dcf-color-gray-2);border-color:var(--dcf-color-gray-4)!important;color:var(--dcf-color-gray-8)!important}}@media (prefers-color-scheme: dark){.dcf-filter[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{border-color:var(--dcf-color-step-300);background:rgba(var(--dcf-color-medium-rgb),.1)}.dcf-filter[_ngcontent-%COMP%]   ion-chip.dcf-filter-value[_ngcontent-%COMP%]{background:rgba(var(--dcf-color-medium-rgb),.3)!important;border-color:var(--dcf-color-step-500)}}.dcf-filter[_ngcontent-%COMP%]   ion-chip.sc-ion-chip-md-h[_ngcontent-%COMP%], .dcf-filter[_ngcontent-%COMP%]   ion-chip.sc-ion-chip-ios-h[_ngcontent-%COMP%]{height:24px;min-height:24px}.dcf-filter[_ngcontent-%COMP%]   ion-chip.sc-ion-chip-md-h[_ngcontent-%COMP%]   .chip-native[_ngcontent-%COMP%], .dcf-filter[_ngcontent-%COMP%]   ion-chip.sc-ion-chip-ios-h[_ngcontent-%COMP%]   .chip-native[_ngcontent-%COMP%]{padding:0 8px!important;height:24px;min-height:24px}.dcf-filter[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{padding:0 4px;margin:0;font-size:.75rem;white-space:nowrap}.dcf-filter[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin:0 2px;font-size:.75rem}.dcf-filter[_ngcontent-%COMP%]   .dcf-input[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;overflow-x:auto;overflow-y:hidden;white-space:nowrap;padding-left:.5rem}.dcf-filter[_ngcontent-%COMP%]   .dcf-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{min-height:40px;min-width:100px;width:100%;font-size:1rem;border:none;outline:none;background:transparent;border:0px!important;outline:none!important}@media (prefers-color-scheme: light){.dcf-filter[_ngcontent-%COMP%]   .dcf-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:var(--dcf-color-gray-7)}}@media (prefers-color-scheme: dark){.dcf-filter[_ngcontent-%COMP%]   .dcf-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:var(--dcf-color-gray-1)}}.dcf-filter[_ngcontent-%COMP%]   .dcf-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border:0px!important;outline:none!important}.dcf-filter[_ngcontent-%COMP%]   .dcf-icon-clear[_ngcontent-%COMP%], .dcf-filter[_ngcontent-%COMP%]   .dcf-icon-search[_ngcontent-%COMP%]{display:flex;justify-content:center;text-align:center;align-items:center;min-width:40px}.dcf-filter[_ngcontent-%COMP%]   .dcf-icon-search[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.25rem}.dcf-sort-container[_ngcontent-%COMP%]{min-width:200px!important;width:auto}@media (min-width: 990px){.dcf-sort-container[_ngcontent-%COMP%]{max-width:20%!important}}@media (max-width: 680px){.dcf-sort-container[_ngcontent-%COMP%]{min-width:100%!important;margin:.75rem 0rem}}.dcf-dropdown[_ngcontent-%COMP%]{position:absolute;max-height:200px;overflow-y:auto;border-radius:4px;z-index:1000!important;min-width:200px;max-width:300px;display:none}@media (prefers-color-scheme: light){.dcf-dropdown[_ngcontent-%COMP%]{background-color:#fff}.dcf-dropdown.dcf-active[_ngcontent-%COMP%]{border:1px solid var(--dcf-color-gray-2)}}@media (prefers-color-scheme: dark){.dcf-dropdown[_ngcontent-%COMP%]{background-color:var(--dcf-item-background)}.dcf-dropdown.dcf-active[_ngcontent-%COMP%]{border:1px solid var(--dcf-color-step-600)}}.dcf-dropdown.dcf-active[_ngcontent-%COMP%]{display:block;margin-top:-3px;box-shadow:0 12px 16px -4px #0a0d1214,0 4px 6px -2px #0a0d1208,0 2px 2px -1px #0a0d120a!important;border-radius:var(--dcf-border-radius);padding:.5rem .25rem}@media (max-width: 768px){.dcf-dropdown.dcf-active[_ngcontent-%COMP%]{margin-top:55px}}.dcf-dropdown.dcf-active[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{cursor:pointer;height:35px;padding:.5rem 1rem;border:1px solid transparent;font-size:1rem;display:flex;align-items:center;border-radius:6px}@media (prefers-color-scheme: light){.dcf-dropdown.dcf-active[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{color:var(--dcf-color-gray-8)}.dcf-dropdown.dcf-active[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div.dcf-filtering-item[_ngcontent-%COMP%], .dcf-dropdown.dcf-active[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:only-child{border-color:var(--dcf-color-gray-3)}.dcf-dropdown.dcf-active[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div.dcf-filtering-item.dcf-empty[_ngcontent-%COMP%], .dcf-dropdown.dcf-active[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:only-child.dcf-empty{pointer-events:none;touch-action:none;cursor:text!important;border-color:transparent!important}.dcf-dropdown.dcf-active[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:hover{background-color:var(--dcf-color-gray-1)}}@media (prefers-color-scheme: dark){.dcf-dropdown.dcf-active[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{color:var(--dcf-color-gray-1)}.dcf-dropdown.dcf-active[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div.dcf-filtering-item[_ngcontent-%COMP%], .dcf-dropdown.dcf-active[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:only-child{border-color:var(--dcf-color-gray-5)}.dcf-dropdown.dcf-active[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div.dcf-filtering-item.dcf-empty[_ngcontent-%COMP%], .dcf-dropdown.dcf-active[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:only-child.dcf-empty{cursor:text!important;pointer-events:none;touch-action:none;border-color:transparent!important}.dcf-dropdown.dcf-active[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:hover{background-color:var(--dcf-color-gray-8)}}"] }); }
};
FilterComponent = __decorate([
    Dynamic(),
    __metadata("design:paramtypes", [])
], FilterComponent);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterComponent, [{
        type: Component,
        args: [{ selector: 'ngx-decaf-filter', imports: [
                    ForAngularModule,
                    IonLabel,
                    IonItem,
                    IonChip,
                    IonIcon,
                    IonSelect,
                    IonIcon,
                    SearchbarComponent
                ], standalone: true, template: "\n@if(!indexes.length) {\n  <ngx-decaf-searchbar [emitEventToWindow]=\"false\" [debounce]=\"500\" (searchEvent)=\"handleSearch($event)\" />\n}\n\n<div [id]=\"uid\" class=\"dcf-grid dcf-grid-small dcf-grid-match dcf-filter-grid\" [ngClass]=\"{'dcf-hidden': !indexes.length}\">\n  <div class=\"dcf-width-expand\">\n    <div class=\"dcf-filter\">\n      <div class=\"dcf-input\">\n        @for(filter of filterValue; track trackItemFn($index, filter?.['index'])) {\n          @if(filter?.['index']) {\n            <ion-chip [outline]=\"true\">{{ filter?.['index'] }}</ion-chip>\n          }\n          @if(filter?.['condition']) {\n            <ion-chip [outline]=\"true\">{{ filter?.['condition'] }}</ion-chip>\n          }\n          @if(filter?.['value']) {\n            <ion-chip [outline]=\"true\" class=\"dcf-filter-value\">\n              {{ filter?.['value'] }}\n              <ion-icon name=\"close\" (click)=\"removeFilter(filter?.['value'])\" size=\"small\"></ion-icon>\n            </ion-chip>\n          }\n        }\n        <div class=\"dcf-width-1-1\">\n             <!-- [readonly]=\"step !== 3\" -->\n          <input\n            fill=\"none\"\n            [(ngModel)]=\"value\"\n            (keydown.enter)=\"addFilter(value, $event)\"\n            (keydown.backspace)=\"clear(value)\"\n            (input)=\"handleInput($event)\"\n            (click)=\"handleFocus()\"\n            (blur)=\"handleBlur()\"\n            type=\"text\"\n\n            placeholder=\"{{ locale + (step === 3 ? '.type' : '.select') | translate }}\"\n            #component\n          />\n          @if(windowWidth >= 768) {\n            <div [class]=\"'dcf-dropdown ' + (options.length > 0 ? ' dcf-active' : '')\" #optionsFilterElement>\n              <div>\n                @if(filteredOptions.length > 0) {\n                  @for(key of filteredOptions; track key) {\n                    <div\n                      class=\"dcf-item\"\n                      tabindex=\"0\"\n                      (keydown.enter)=\"selectOption(key)\"\n                      (click)=\"selectOption(key)\">\n                      {{ key }}\n                    </div>\n                  }\n                } @else {\n                  <div class=\"dcf-empty\"\n                    (click)=\"filteredOptions = options; value = ''\"\n                    tabindex=\"0\"\n                    (keydown.enter)=\"filteredOptions = options; value = ''\"\n                  >\n                    {{ locale + '.no_suggestions' | translate }}\n                  </div>\n                }\n              </div>\n            </div>\n          }\n        </div>\n      </div>\n      @if(filterValue.length > 0) {\n        <div class=\"dcf-icon-clear\">\n          <ion-button fill=\"clear\" size=\"small\" (click)=\"clear()\">\n            <ion-icon name=\"trash-outline\" [color]=\"!isDarkMode ? 'dark' : 'medium'\" slot=\"icon-only\"></ion-icon>\n          </ion-button>\n        </div>\n      }\n      <div class=\"dcf-icon-search\">\n        <ion-button fill=\"clear\" size=\"small\" (click)=\"submit()\">\n          <ion-icon name=\"search-outline\" [color]=\"!isDarkMode ? 'dark' : 'medium'\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n    @if(windowWidth < 768) {\n      <div [class]=\"'dcf-dropdown ' + (options.length > 0 ? ' dcf-active' : '')\" #optionsFilterElement>\n        <div>\n          @if(filteredOptions.length > 0) {\n            @for(key of filteredOptions; track key) {\n              <div\n                class=\"dcf-item\"\n                tabindex=\"0\"\n                (keydown.enter)=\"selectOption(key)\"\n                (click)=\"selectOption(key)\">\n                {{ key }}\n              </div>\n            }\n          } @else {\n            <div class=\"dcf-empty\"\n            (click)=\"filteredOptions = options; value = ''\"\n            tabindex=\"0\"\n            (keydown.enter)=\"filteredOptions = options; value = ''\"\n            >\n              {{ locale + '.no_suggestions' | translate }}\n            </div>\n          }\n        </div>\n      </div>\n    }\n  </div>\n  @if(!disableSort) {\n    <div class=\"dcf-width-1-5@m dcf-width-1-1 dcf-sort-container\">\n      <div class=\"dcf-grid dcf-grid-collapse dcf-flex dcf-flex-middle dcf-grid-match\">\n        <div class=\"dcf-width-expand\">\n          <ion-select\n              toggleIcon=\"chevron-down-outline\"\n              expandedIcon=\"chevron-up-outline\"\n              class=\"dcf-sort-select\"\n              (ionChange)=\"handleSortChange($event)\"\n              interface=\"popover\"\n              [value]=\"sortValue\"\n              label-placement=\"floating\"\n              fill=\"outline\"\n              [label]=\"locale + '.sort' | translate\"\n            >\n            @for(sort of sortBy; track sort) {\n\n              <ion-select-option [value]=\"sort\">{{ sort | translate }}</ion-select-option>\n            }\n          </ion-select>\n        </div>\n        <div class=\"dcf-width-auto\">\n          <ion-button (click)=\"handleSortDirectionChange()\" fill=\"clear\">\n            <ion-icon slot=\"icon-only\" [color]=\"!isDarkMode ? 'primary' : 'medium'\" [name]=\"sortDirection === 'desc' ? 'arrow-down-outline' : 'arrow-up-outline'\"></ion-icon>\n          </ion-button>\n        </div>\n      </div>\n    </div>\n  }\n</div>\n\n\n", styles: [".dcf-filter-grid{padding:0 .5rem;margin-top:.75rem;margin-bottom:.75rem}ion-select{min-height:44px!important}.dcf-hidden{display:none!important}.dcf-filter{display:flex;width:100%;min-height:40px;box-shadow:0 1px 2px #0a0d120d;border-radius:var(--dcf-border-radius);box-sizing:border-box}@media (prefers-color-scheme: light){.dcf-filter{border:1px solid var(--dcf-color-gray-3);background-color:#fff}.dcf-filter:focus-within{border-color:var(--dcf-color-primary);background-color:#fff}}@media (prefers-color-scheme: dark){.dcf-filter{border:1px solid var(--dcf-color-step-500)}.dcf-filter ::-webkit-input-placeholder,.dcf-filter ::placeholder{color:var(--dcf-color-gray-4)!important}.dcf-filter:hover{border-color:var(--dcf-color-gray-2)}.dcf-filter:focus-within{border-color:var(--dcf-color-gray-2)}}.dcf-filter ion-chip{border-radius:6px;padding:0 8px!important;height:24px;min-height:24px;font-size:.75rem;font-style:normal;font-weight:500;flex-shrink:0;margin-right:2px;white-space:nowrap}@media (prefers-color-scheme: light){.dcf-filter ion-chip{border:1px solid var(--dcf-color-gray-3);color:var(--dcf-color-gray-7)}.dcf-filter ion-chip.dcf-filter-value{background:var(--dcf-color-gray-2);border-color:var(--dcf-color-gray-4)!important;color:var(--dcf-color-gray-8)!important}}@media (prefers-color-scheme: dark){.dcf-filter ion-chip{border-color:var(--dcf-color-step-300);background:rgba(var(--dcf-color-medium-rgb),.1)}.dcf-filter ion-chip.dcf-filter-value{background:rgba(var(--dcf-color-medium-rgb),.3)!important;border-color:var(--dcf-color-step-500)}}.dcf-filter ion-chip.sc-ion-chip-md-h,.dcf-filter ion-chip.sc-ion-chip-ios-h{height:24px;min-height:24px}.dcf-filter ion-chip.sc-ion-chip-md-h .chip-native,.dcf-filter ion-chip.sc-ion-chip-ios-h .chip-native{padding:0 8px!important;height:24px;min-height:24px}.dcf-filter ion-chip ion-label{padding:0 4px;margin:0;font-size:.75rem;white-space:nowrap}.dcf-filter ion-chip ion-icon{margin:0 2px;font-size:.75rem}.dcf-filter .dcf-input{width:100%;display:flex;align-items:center;overflow-x:auto;overflow-y:hidden;white-space:nowrap;padding-left:.5rem}.dcf-filter .dcf-input input{min-height:40px;min-width:100px;width:100%;font-size:1rem;border:none;outline:none;background:transparent;border:0px!important;outline:none!important}@media (prefers-color-scheme: light){.dcf-filter .dcf-input input{color:var(--dcf-color-gray-7)}}@media (prefers-color-scheme: dark){.dcf-filter .dcf-input input{color:var(--dcf-color-gray-1)}}.dcf-filter .dcf-input input:focus{border:0px!important;outline:none!important}.dcf-filter .dcf-icon-clear,.dcf-filter .dcf-icon-search{display:flex;justify-content:center;text-align:center;align-items:center;min-width:40px}.dcf-filter .dcf-icon-search ion-icon{font-size:1.25rem}.dcf-sort-container{min-width:200px!important;width:auto}@media (min-width: 990px){.dcf-sort-container{max-width:20%!important}}@media (max-width: 680px){.dcf-sort-container{min-width:100%!important;margin:.75rem 0rem}}.dcf-dropdown{position:absolute;max-height:200px;overflow-y:auto;border-radius:4px;z-index:1000!important;min-width:200px;max-width:300px;display:none}@media (prefers-color-scheme: light){.dcf-dropdown{background-color:#fff}.dcf-dropdown.dcf-active{border:1px solid var(--dcf-color-gray-2)}}@media (prefers-color-scheme: dark){.dcf-dropdown{background-color:var(--dcf-item-background)}.dcf-dropdown.dcf-active{border:1px solid var(--dcf-color-step-600)}}.dcf-dropdown.dcf-active{display:block;margin-top:-3px;box-shadow:0 12px 16px -4px #0a0d1214,0 4px 6px -2px #0a0d1208,0 2px 2px -1px #0a0d120a!important;border-radius:var(--dcf-border-radius);padding:.5rem .25rem}@media (max-width: 768px){.dcf-dropdown.dcf-active{margin-top:55px}}.dcf-dropdown.dcf-active>div>div{cursor:pointer;height:35px;padding:.5rem 1rem;border:1px solid transparent;font-size:1rem;display:flex;align-items:center;border-radius:6px}@media (prefers-color-scheme: light){.dcf-dropdown.dcf-active>div>div{color:var(--dcf-color-gray-8)}.dcf-dropdown.dcf-active>div>div.dcf-filtering-item,.dcf-dropdown.dcf-active>div>div:only-child{border-color:var(--dcf-color-gray-3)}.dcf-dropdown.dcf-active>div>div.dcf-filtering-item.dcf-empty,.dcf-dropdown.dcf-active>div>div:only-child.dcf-empty{pointer-events:none;touch-action:none;cursor:text!important;border-color:transparent!important}.dcf-dropdown.dcf-active>div>div:hover{background-color:var(--dcf-color-gray-1)}}@media (prefers-color-scheme: dark){.dcf-dropdown.dcf-active>div>div{color:var(--dcf-color-gray-1)}.dcf-dropdown.dcf-active>div>div.dcf-filtering-item,.dcf-dropdown.dcf-active>div>div:only-child{border-color:var(--dcf-color-gray-5)}.dcf-dropdown.dcf-active>div>div.dcf-filtering-item.dcf-empty,.dcf-dropdown.dcf-active>div>div:only-child.dcf-empty{cursor:text!important;pointer-events:none;touch-action:none;border-color:transparent!important}.dcf-dropdown.dcf-active>div>div:hover{background-color:var(--dcf-color-gray-8)}}\n"] }]
    }], () => [], { optionsFilterElement: [{
            type: ViewChild,
            args: ['optionsFilterElement', { read: ElementRef, static: false }]
        }], indexes: [{
            type: Input
        }], conditions: [{
            type: Input
        }], sortBy: [{
            type: Input
        }], disableSort: [{
            type: Input
        }], filterEvent: [{
            type: Output
        }], searchEvent: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FilterComponent, { className: "FilterComponent", filePath: "components/filter/filter.component.ts", lineNumber: 72 }); })();

const _c0$4 = ["inner"];
const _c1$3 = ["componentOuter"];
function ModelRendererComponent_ng_template_1_Template(rf, ctx) { }
function ModelRendererComponent_ng_template_3_For_2_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-decaf-component-renderer", 4);
} if (rf & 2) {
    const child_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("parent", child_r1);
} }
function ModelRendererComponent_ng_template_3_For_2_Conditional_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, null, 2);
} }
function ModelRendererComponent_ng_template_3_For_2_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ModelRendererComponent_ng_template_3_For_2_Conditional_1_ng_container_0_Template, 2, 0, "ng-container", 5);
} if (rf & 2) {
    const child_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngComponentOutlet", child_r1.component)("ngComponentOutletInjector", child_r1.injector)("ngComponentOutletInputs", child_r1.inputs)("ngComponentOutletContent", child_r1.content);
} }
function ModelRendererComponent_ng_template_3_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ModelRendererComponent_ng_template_3_For_2_Conditional_0_Template, 1, 1, "ngx-decaf-component-renderer", 4)(1, ModelRendererComponent_ng_template_3_For_2_Conditional_1_Template, 1, 4, "ng-container");
} if (rf & 2) {
    const child_r1 = ctx.$implicit;
    i0.ɵɵconditional((child_r1 == null ? null : child_r1.children == null ? null : child_r1.children.length) ? 0 : 1);
} }
function ModelRendererComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵrepeaterCreate(1, ModelRendererComponent_ng_template_3_For_2_Template, 2, 1, null, null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", ctx_r1.rendererId || null);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.output == null ? null : ctx_r1.output.children);
} }
/**
 * @description Component for rendering dynamic models
 * @summary This component is responsible for dynamically rendering models,
 * handling model changes, and managing event subscriptions for the rendered components.
 * It uses the NgxRenderingEngine to render the models and supports both string and Model inputs.
 * @class
 * @template M - Type extending Model
 * @param {Injector} injector - Angular Injector for dependency injection
 * @example
 * <ngx-decaf-model-renderer
 *   [model]="myModel"
 *   [globals]="globalVariables"
 *   (listenEvent)="handleEvent($event)">
 * </ngx-decaf-model-renderer>
 * @mermaid
 * sequenceDiagram
 *   participant App
 *   participant ModelRenderer
 *   participant RenderingEngine
 *   participant Model
 *   App->>ModelRenderer: Input model
 *   ModelRenderer->>Model: Parse if string
 *   Model-->>ModelRenderer: Parsed model
 *   ModelRenderer->>RenderingEngine: Render model
 *   RenderingEngine-->>ModelRenderer: Rendered output
 *   ModelRenderer->>ModelRenderer: Subscribe to events
 *   ModelRenderer-->>App: Emit events
 */
class ModelRendererComponent {
    constructor() {
        /**
         * @description Global variables to be passed to the rendered component
         */
        this.globals = {};
        /**
         * @description Event emitter for custom events from the rendered component
         */
        this.listenEvent = new EventEmitter();
        this.injector = inject(Injector);
        this.JSON = JSON;
    }
    // constructor() {}
    /**
     * @description Refreshes the rendered model
     * @param {string | M} model - The model to be rendered
     */
    refresh(model) {
        model =
            typeof model === 'string'
                ? Model.build({}, model)
                : model;
        this.output = model.render(this.globals || {}, this.vcr, this.injector, this.inner);
        if (this.output?.inputs)
            this.rendererId = sf(AngularEngineKeys.RENDERED_ID, this.output.inputs['rendererId']);
        this.instance = this.output?.instance;
        this.subscribeEvents();
    }
    /**
     * @description Lifecycle hook that is called when data-bound properties of a directive change
     * @param {SimpleChanges} changes - Object containing changes
     */
    ngOnChanges(changes) {
        if (changes[BaseComponentProps.MODEL]) {
            const { currentValue } = changes[BaseComponentProps.MODEL];
            this.refresh(currentValue);
        }
    }
    /**
     * @description Lifecycle hook that is called when a directive, pipe, or service is destroyed
     * @return {Promise<void>}
     */
    async ngOnDestroy() {
        if (this.instance) {
            this.unsubscribeEvents();
            await NgxRenderingEngine.destroy();
        }
        this.output = undefined;
    }
    subscribeEvents() {
        const component = this?.output?.component;
        if (this.instance && component) {
            const componentKeys = Object.keys(this.instance);
            for (const key of componentKeys) {
                const value = this.instance[key];
                if (value instanceof EventEmitter)
                    this.instance[key].subscribe((event) => {
                        this.listenEvent.emit({
                            component: component.name || '',
                            name: key,
                            ...event,
                        });
                    });
            }
        }
    }
    /**
     * @description Unsubscribes from events emitted by the rendered component
     */
    unsubscribeEvents() {
        if (this.instance) {
            const componentKeys = Object.keys(this.instance);
            for (const key of componentKeys) {
                const value = this.instance[key];
                if (value instanceof EventEmitter)
                    this.instance[key].unsubscribe();
            }
        }
    }
    static { this.ɵfac = function ModelRendererComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ModelRendererComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModelRendererComponent, selectors: [["ngx-decaf-model-renderer"]], viewQuery: function ModelRendererComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$4, 7, TemplateRef);
            i0.ɵɵviewQuery(_c1$3, 7, ViewContainerRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inner = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.vcr = _t.first);
        } }, hostVars: 1, hostBindings: function ModelRendererComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("id", ctx.rendererId);
        } }, inputs: { model: "model", globals: "globals", rendererId: "rendererId" }, outputs: { listenEvent: "listenEvent" }, standalone: true, features: [i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 5, vars: 1, consts: [["componentOuter", ""], ["inner", ""], ["childComponents", ""], [3, "id"], [3, "parent"], [4, "ngComponentOutlet", "ngComponentOutletInjector", "ngComponentOutletInputs", "ngComponentOutletContent"]], template: function ModelRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 3);
            i0.ɵɵtemplate(1, ModelRendererComponent_ng_template_1_Template, 0, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(3, ModelRendererComponent_ng_template_3_Template, 3, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("id", ctx.rendererId);
        } }, dependencies: [ForAngularModule, i2.NgComponentOutlet, ComponentRendererComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModelRendererComponent, [{
        type: Component,
        args: [{ standalone: true, imports: [ForAngularModule, NgComponentOutlet, ComponentRendererComponent], selector: 'ngx-decaf-model-renderer', host: { '[attr.id]': 'rendererId' }, template: "  <!-- Keep to avoid id conflicts -->\n  <div [id]=\"rendererId\"></div>\n\n  <ng-template #componentOuter></ng-template>\n  <ng-template #inner>\n    <div  [id]=\"rendererId || null\">\n      @for (child of output?.children; track child) {\n        @if(child?.children?.length) {\n          <ngx-decaf-component-renderer [parent]=\"child\" />\n        } @else {\n          <ng-container\n            #childComponents\n            *ngComponentOutlet=\"\n              child.component;\n              injector: child.injector;\n              inputs: child.inputs;\n              content:child.content;\n            \"\n          />\n        }\n      }\n    </div>\n  </ng-template>\n" }]
    }], null, { model: [{
            type: Input,
            args: [{ required: true }]
        }], globals: [{
            type: Input
        }], inner: [{
            type: ViewChild,
            args: ['inner', { read: TemplateRef, static: true }]
        }], rendererId: [{
            type: Input
        }], vcr: [{
            type: ViewChild,
            args: ['componentOuter', { static: true, read: ViewContainerRef }]
        }], listenEvent: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ModelRendererComponent, { className: "ModelRendererComponent", filePath: "components/model-renderer/model-renderer.component.ts", lineNumber: 66 }); })();

function _forTrack0($index, $item) { return this.trackItemFn($index, $item.col); }
const _c0$3 = a0 => ({ props: a0 });
function LayoutComponent_Conditional_0_For_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "ion-card", 3);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const row_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 1, row_r1.title), " ");
} }
function LayoutComponent_Conditional_0_For_1_For_3_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-card")(1, "ion-card-content")(2, "ngx-decaf-model-renderer", 5);
    i0.ɵɵlistener("listenEvent", function LayoutComponent_Conditional_0_For_1_For_3_Conditional_2_Template_ngx_decaf_model_renderer_listenEvent_2_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r2.handleEvent($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const child_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMap("dcf-height-1-1 " + ctx_r2.className);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("model", child_r4.props.name);
} }
function LayoutComponent_Conditional_0_For_1_For_3_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-decaf-component-renderer", 6);
    i0.ɵɵlistener("listenEvent", function LayoutComponent_Conditional_0_For_1_For_3_Conditional_3_Template_ngx_decaf_component_renderer_listenEvent_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r2.handleEvent($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("tag", child_r4.tag)("globals", i0.ɵɵpureFunction1(2, _c0$3, child_r4.props));
} }
function LayoutComponent_Conditional_0_For_1_For_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div");
    i0.ɵɵtemplate(2, LayoutComponent_Conditional_0_For_1_For_3_Conditional_2_Template, 3, 3, "ion-card", 2)(3, LayoutComponent_Conditional_0_For_1_For_3_Conditional_3_Template, 1, 4, "ngx-decaf-component-renderer", 4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const child_r4 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMap(child_r4.col === ctx_r2.cols.length ? "dcf-width-1-1" : "dcf-width-" + child_r4.col + "-" + ctx_r2.cols.length + "@" + ctx_r2.breakpoint);
    i0.ɵɵadvance();
    i0.ɵɵclassMap("dcf-grid-child " + child_r4.col);
    i0.ɵɵadvance();
    i0.ɵɵconditional(child_r4.tag === "ngx-decaf-crud-form" ? 2 : 3);
} }
function LayoutComponent_Conditional_0_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵtemplate(1, LayoutComponent_Conditional_0_For_1_Conditional_1_Template, 4, 3, "div", 1);
    i0.ɵɵrepeaterCreate(2, LayoutComponent_Conditional_0_For_1_For_3_Template, 4, 5, "div", 2, _forTrack0, true);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("id", ctx_r2.uid);
    i0.ɵɵadvance();
    i0.ɵɵconditional(row_r1 ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(row_r1.cols);
} }
function LayoutComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, LayoutComponent_Conditional_0_For_1_Template, 4, 2, "div", 0, i0.ɵɵcomponentInstance().trackItemFn, true);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵrepeater(ctx_r2.rows);
} }
/**
 * @description Layout component for creating responsive grid layouts in Angular applications.
 * @summary This component provides a flexible grid system that can be configured with dynamic
 * rows and columns. It supports responsive breakpoints and can render child components within
 * the grid structure. The component extends NgxBaseComponent to inherit common functionality
 * and integrates with the model and component renderer systems.
 *
 * @class LayoutComponent
 * @extends {NgxBaseComponent}
 * @implements {OnInit}
 * @memberOf LayoutComponent
 */
class LayoutComponent extends NgxBaseComponent {
    /**
     * @description Creates an instance of LayoutComponent.
     * @summary Initializes a new LayoutComponent with the component name "LayoutComponent".
     * This constructor calls the parent NgxBaseComponent constructor to set up base
     * functionality and component identification.
     *
     * @memberOf LayoutComponent
     */
    constructor() {
        super("LayoutComponent");
        /**
         * @description Number of columns or array of column definitions for the grid layout.
         * @summary Defines the column structure of the grid. When a number is provided, it creates
         * that many equal-width columns. When an array is provided, each element can define specific
         * column properties or sizing. This allows for flexible grid layouts that can adapt to
         * different content requirements.
         *
         * @type {(number | string[])}
         * @default 1
         * @memberOf LayoutComponent
         */
        this.cols = 1;
        /**
         * @description Number of rows or array of row definitions for the grid layout.
         * @summary Defines the row structure of the grid. When a number is provided, it creates
         * that many equal-height rows. When an array is provided, each element can define specific
         * row properties or sizing. This provides control over vertical spacing and content organization.
         *
         * @type {(number | string[])}
         * @default 1
         * @memberOf LayoutComponent
         */
        this.rows = 1;
        /**
         * @description Media breakpoint for responsive behavior.
         * @summary Determines the responsive breakpoint at which the layout should adapt.
         * This affects how the grid behaves on different screen sizes, allowing for
         * mobile-first or desktop-first responsive design patterns. The breakpoint
         * is automatically processed to ensure compatibility with the UI framework.
         *
         * @type {UIMediaBreakPoints}
         * @default 'medium'
         * @memberOf LayoutComponent
         */
        this.breakpoint = 'medium';
        /**
         * @description Array of child components or data to render within the grid.
         * @summary Contains the child elements that will be distributed across the grid layout.
         * Each item in the array represents content that will be rendered using the appropriate
         * renderer component (ModelRenderer or ComponentRenderer). This allows for mixed content
         * types within a single layout structure.
         *
         * @type {KeyValue[]}
         * @default []
         * @memberOf LayoutComponent
         */
        this.children = [];
    }
    /**
     * @description Getter that converts columns input to an array format.
     * @summary Transforms the cols input property into a standardized string array format.
     * When cols is a number, it creates an array with that many empty string elements.
     * When cols is already an array, it returns the array as-is. This normalization
     * ensures consistent handling of column definitions in the template.
     *
     * @type {string[]}
     * @readonly
     * @memberOf LayoutComponent
     */
    get _cols() {
        let cols = this.cols;
        if (typeof cols === "number")
            cols = Array.from({ length: Number(cols) }, () => ``);
        return cols;
    }
    /**
     * @description Getter that converts rows input to an array format.
     * @summary Transforms the rows input property into a standardized string array format.
     * When rows is a number, it creates an array with that many empty string elements.
     * When rows is already an array, it returns the array as-is. This normalization
     * ensures consistent handling of row definitions in the template.
     *
     * @type {KeyValue[]}
     * @readonly
     * @memberOf LayoutComponent
     */
    get _rows() {
        let rows = this.rows;
        if (typeof rows === "number")
            rows = Array.from({ length: Number(rows) }, () => ({ title: '' }));
        return rows.map((row, index) => {
            return {
                title: row?.['title'],
                cols: this.children.filter(child => {
                    if (child['row'] === index + 1)
                        return child;
                })
            };
        });
    }
    /**
     * @description Angular lifecycle hook that runs after component initialization.
     * @summary Called once, after the first ngOnChanges(). This method triggers the
     * component's initialization process, which includes property parsing and grid
     * setup. It ensures the component is properly configured before rendering.
     *
     * @memberOf LayoutComponent
     */
    ngOnInit() {
        this.initialize();
    }
    /**
     * @description Initializes the layout component with processed properties.
     * @summary Overrides the base component's initialize method to set up the grid layout.
     * This method processes input properties, normalizes the breakpoint value, converts
     * rows and columns to their array representations, and marks the component as initialized.
     * The initialization ensures all properties are in the correct format for rendering.
     *
     * @mermaid
     * sequenceDiagram
     *   participant L as LayoutComponent
     *   participant B as NgxBaseComponent
     *
     *   L->>B: parseProps(this)
     *   Note over L: Process component properties
     *   L->>L: Normalize breakpoint to lowercase
     *   L->>L: Convert rows to array format
     *   L->>L: Convert cols to array format
     *   L->>L: Set initialized = true
     *
     * @override
     * @memberOf LayoutComponent
     */
    initialize() {
        this.parseProps(this);
        this.breakpoint = this.breakpoint.slice(0, 2).toLowerCase();
        this.cols = this._cols;
        this.rows = this._rows;
        this.initialized = true;
    }
    static { this.ɵfac = function LayoutComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LayoutComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LayoutComponent, selectors: [["ngx-decaf-layout"]], inputs: { cols: "cols", rows: "rows", breakpoint: "breakpoint", children: "children" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [[1, "dcf-grid", "dcf-grid-collapse", "dcf-grid-match", 3, "id"], [1, "dcf-width-1-1", "dcf-grid-title"], [3, "class"], [1, "dcf-grid-title"], [3, "tag", "globals"], [3, "listenEvent", "model"], [3, "listenEvent", "tag", "globals"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, LayoutComponent_Conditional_0_Template, 2, 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.initialized ? 0 : -1);
        } }, dependencies: [ForAngularModule, i3.TranslatePipe, ModelRendererComponent, ComponentRendererComponent], styles: [".dcf-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.dcf-grid-title)     ngx-decaf-component-renderer>*>*{height:100%;display:flex;justify-content:center!important;align-items:center!important}.dcf-grid[_ngcontent-%COMP%]   ion-card.dcf-height-1-1[_ngcontent-%COMP%] > ion-card-content[_ngcontent-%COMP%]{margin-top:2rem}.dcf-grid.dcf-grid-small[_ngcontent-%COMP%]   .dcf-grid-child[_ngcontent-%COMP%]{margin-bottom:2rem}.dcf-grid.dcf-grid-collapse[_ngcontent-%COMP%]   .dcf-grid-child[_ngcontent-%COMP%]{margin-bottom:1.25rem}.dcf-grid.dcf-grid-collapse[_ngcontent-%COMP%]   .dcf-grid-child[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{margin-bottom:1.25rem}.dcf-grid-title[_ngcontent-%COMP%]{font-size:1.05rem!important;background:none;box-shadow:none;margin-bottom:0;padding-bottom:0;font-weight:600;color:var(--dcf-color-dark);display:flex;align-items:center;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutComponent, [{
        type: Component,
        args: [{ selector: 'ngx-decaf-layout', imports: [ForAngularModule, ModelRendererComponent, ComponentRendererComponent], standalone: true, template: "\n@if(initialized) {\n  @for (row of rows; track trackItemFn($index, row); let rowIndex = $index) {\n    <div [id]=\"uid\" class=\"dcf-grid dcf-grid-collapse dcf-grid-match\">\n      @if(row) {\n        <div class=\"dcf-width-1-1 dcf-grid-title\">\n          <ion-card class=\"dcf-grid-title\">\n            {{row.title | translate}}\n          </ion-card>\n        </div>\n      }\n      @for (child of row.cols; track trackItemFn($index, child.col); let colIndex = $index) {\n        <div [class]=\"(child.col === cols.length ? 'dcf-width-1-1' : 'dcf-width-'+child.col+'-'+cols.length+'@'+breakpoint)\">\n            <div [class]=\"'dcf-grid-child '+child.col \">\n              @if(child.tag === 'ngx-decaf-crud-form') {\n                <ion-card [class]=\"'dcf-height-1-1 ' + className\">\n                  <ion-card-content>\n                    <ngx-decaf-model-renderer\n                      [model]=\"child.props.name\"\n                      (listenEvent)=\"handleEvent($event)\"\n                      />\n                    </ion-card-content>\n                  </ion-card>\n              } @else {\n                <ngx-decaf-component-renderer\n                  [tag]=\"child.tag\"\n                  (listenEvent)=\"handleEvent($event)\"\n                  [globals]=\"{props: child.props}\"\n                />\n              }\n            </div>\n        </div>\n      }\n    </div>\n  }\n}\n", styles: [".dcf-grid>div:not(.dcf-grid-title) ::ng-deep ngx-decaf-component-renderer>*>*{height:100%;display:flex;justify-content:center!important;align-items:center!important}.dcf-grid ion-card.dcf-height-1-1>ion-card-content{margin-top:2rem}.dcf-grid.dcf-grid-small .dcf-grid-child{margin-bottom:2rem}.dcf-grid.dcf-grid-collapse .dcf-grid-child{margin-bottom:1.25rem}.dcf-grid.dcf-grid-collapse .dcf-grid-child ion-card{margin-bottom:1.25rem}.dcf-grid-title{font-size:1.05rem!important;background:none;box-shadow:none;margin-bottom:0;padding-bottom:0;font-weight:600;color:var(--dcf-color-dark);display:flex;align-items:center;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}\n"] }]
    }], () => [], { cols: [{
            type: Input
        }], rows: [{
            type: Input
        }], breakpoint: [{
            type: Input
        }], children: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "components/layout/layout.component.ts", lineNumber: 29 }); })();

const _c0$2 = ["actionMenuComponent"];
const _c1$2 = [[["", "slot", "end"]]];
const _c2$1 = ["[slot='end']"];
const _c3 = () => ["update", "delete"];
function ListItemComponent_Conditional_0_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "ion-avatar");
    i0.ɵɵelement(2, "ion-icon", 15);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("slot", ctx_r2.iconSlot);
} }
function ListItemComponent_Conditional_0_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "ion-avatar");
    i0.ɵɵelement(2, "ion-icon", 15);
    i0.ɵɵelementEnd()();
} }
function ListItemComponent_Conditional_0_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 16);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", ctx_r2.description, i0.ɵɵsanitizeHtml);
} }
function ListItemComponent_Conditional_0_Conditional_10_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 19);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r2.info, i0.ɵɵsanitizeHtml);
} }
function ListItemComponent_Conditional_0_Conditional_10_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 20);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r2.subinfo, i0.ɵɵsanitizeHtml);
} }
function ListItemComponent_Conditional_0_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "div");
    i0.ɵɵtemplate(2, ListItemComponent_Conditional_0_Conditional_10_span_2_Template, 1, 1, "span", 17)(3, ListItemComponent_Conditional_0_Conditional_10_div_3_Template, 1, 1, "div", 18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.info);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.subinfo);
} }
function ListItemComponent_Conditional_0_Conditional_12_ng_template_5_For_6_Conditional_0_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-icon", 30);
} }
function ListItemComponent_Conditional_0_Conditional_12_ng_template_5_For_6_Conditional_0_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-icon", 31);
} }
function ListItemComponent_Conditional_0_Conditional_12_ng_template_5_For_6_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-item", 28);
    i0.ɵɵlistener("click", function ListItemComponent_Conditional_0_Conditional_12_ng_template_5_For_6_Conditional_0_Template_ion_item_click_0_listener($event) { i0.ɵɵrestoreView(_r5); const operation_r6 = i0.ɵɵnextContext().$implicit; i0.ɵɵnextContext(3); const component_r2 = i0.ɵɵreference(1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.handleAction(operation_r6, $event, component_r2)); });
    i0.ɵɵelementStart(1, "ion-avatar", 29);
    i0.ɵɵtemplate(2, ListItemComponent_Conditional_0_Conditional_12_ng_template_5_For_6_Conditional_0_Conditional_2_Template, 1, 0, "ion-icon", 30)(3, ListItemComponent_Conditional_0_Conditional_12_ng_template_5_For_6_Conditional_0_Conditional_3_Template, 1, 0, "ion-icon", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "ion-label", 32);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const operation_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("button", true);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(operation_r6 === "update" ? 2 : 3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(6, 3, operation_r6));
} }
function ListItemComponent_Conditional_0_Conditional_12_ng_template_5_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListItemComponent_Conditional_0_Conditional_12_ng_template_5_For_6_Conditional_0_Template, 7, 5, "ion-item", 27);
} if (rf & 2) {
    const operation_r6 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵconditional(ctx_r2.operations.includes(operation_r6) ? 0 : -1);
} }
function ListItemComponent_Conditional_0_Conditional_12_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-content", 24)(1, "ion-list", 25)(2, "ion-list-header");
    i0.ɵɵelement(3, "h4", 26);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(5, ListItemComponent_Conditional_0_Conditional_12_ng_template_5_For_6_Template, 1, 1, null, null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 1, "actions"), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(3, _c3));
} }
function ListItemComponent_Conditional_0_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "ion-button", 21);
    i0.ɵɵlistener("click", function ListItemComponent_Conditional_0_Conditional_12_Template_ion_button_click_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.presentActionsMenu($event)); });
    i0.ɵɵelement(2, "ion-icon", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ion-popover", 23, 1);
    i0.ɵɵlistener("didDismiss", function ListItemComponent_Conditional_0_Conditional_12_Template_ion_popover_didDismiss_3_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.actionMenuOpen = false); });
    i0.ɵɵtemplate(5, ListItemComponent_Conditional_0_Conditional_12_ng_template_5_Template, 7, 4, "ng-template");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("isOpen", ctx_r2.actionMenuOpen);
} }
function ListItemComponent_Conditional_0_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} }
function ListItemComponent_Conditional_0_Conditional_14_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-item-option", 36);
    i0.ɵɵlistener("click", function ListItemComponent_Conditional_0_Conditional_14_Conditional_1_Template_ion_item_option_click_0_listener($event) { i0.ɵɵrestoreView(_r8); i0.ɵɵnextContext(2); const component_r2 = i0.ɵɵreference(1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.handleAction("update", $event, component_r2)); });
    i0.ɵɵelement(1, "ion-icon", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("expandable", ctx_r2.operations.length === 1);
} }
function ListItemComponent_Conditional_0_Conditional_14_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-item-option", 38);
    i0.ɵɵlistener("click", function ListItemComponent_Conditional_0_Conditional_14_Conditional_2_Template_ion_item_option_click_0_listener($event) { i0.ɵɵrestoreView(_r9); i0.ɵɵnextContext(2); const component_r2 = i0.ɵɵreference(1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.handleAction("delete", $event, component_r2)); });
    i0.ɵɵelement(1, "ion-icon", 39);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("expandable", ctx_r2.operations.length === 1);
} }
function ListItemComponent_Conditional_0_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-item-options", 33);
    i0.ɵɵlistener("ionSwipe", function ListItemComponent_Conditional_0_Conditional_14_Template_ion_item_options_ionSwipe_0_listener($event) { i0.ɵɵrestoreView(_r7); i0.ɵɵnextContext(); const component_r2 = i0.ɵɵreference(1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.operations.length === 1 ? ctx_r2.handleAction(ctx_r2.operations[0], $event, component_r2) : ""); });
    i0.ɵɵtemplate(1, ListItemComponent_Conditional_0_Conditional_14_Conditional_1_Template, 2, 1, "ion-item-option", 34)(2, ListItemComponent_Conditional_0_Conditional_14_Conditional_2_Template, 2, 1, "ion-item-option", 35);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵconditional((ctx_r2.operations == null ? null : ctx_r2.operations.includes("update")) ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional((ctx_r2.operations == null ? null : ctx_r2.operations.includes("delete")) ? 2 : -1);
} }
function ListItemComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-item-sliding", null, 0)(2, "ion-item", 2);
    i0.ɵɵlistener("click", function ListItemComponent_Conditional_0_Template_ion_item_click_2_listener($event) { i0.ɵɵrestoreView(_r1); const component_r2 = i0.ɵɵreference(1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView((ctx_r2.operations == null ? null : ctx_r2.operations.includes("read")) ? ctx_r2.handleAction("read", $event, component_r2) : ""); });
    i0.ɵɵtemplate(3, ListItemComponent_Conditional_0_Conditional_3_Template, 3, 1, "div", 3);
    i0.ɵɵelementStart(4, "div", 4)(5, "div", 5);
    i0.ɵɵtemplate(6, ListItemComponent_Conditional_0_Conditional_6_Template, 3, 0, "div", 6);
    i0.ɵɵelementStart(7, "div", 7);
    i0.ɵɵelement(8, "ion-label", 8);
    i0.ɵɵtemplate(9, ListItemComponent_Conditional_0_div_9_Template, 1, 1, "div", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, ListItemComponent_Conditional_0_Conditional_10_Template, 4, 2, "div", 10);
    i0.ɵɵelementStart(11, "div", 11);
    i0.ɵɵtemplate(12, ListItemComponent_Conditional_0_Conditional_12_Template, 6, 1, "div", 12)(13, ListItemComponent_Conditional_0_Conditional_13_Template, 2, 0, "div", 13);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(14, ListItemComponent_Conditional_0_Conditional_14_Template, 3, 2, "ion-item-options", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(ctx_r2.className);
    i0.ɵɵproperty("id", ctx_r2.uid)("lines", ctx_r2.lines)("button", ctx_r2.button);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.icon && ctx_r2.lines !== "inset" ? 3 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r2.icon && ctx_r2.lines === "inset" ? 6 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", ctx_r2.uid + " - " + ctx_r2.title, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.description);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.info || ctx_r2.subinfo ? 10 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional((ctx_r2.operations.includes("delete") || ctx_r2.operations.includes("update")) && ctx_r2.uid ? 12 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.windowWidth > 768 ? 13 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.showSlideItems && ctx_r2.uid ? 14 : -1);
} }
/**
 * @description A component for displaying a list item with various customization options.
 * @summary The ListItemComponent is an Angular component that extends NgxBaseComponent. It provides a flexible and customizable list item interface with support for icons, buttons, and various text elements. The component also handles actions and navigation based on user interactions.
 *
 * @class
 * @extends NgxBaseComponent
 *
 * @param {string} [lines='none'] - Determines the line style of the item. Can be 'inset', 'inseet', or 'none'.
 * @param {Record<string, any>} item - The data item to be displayed in the list item.
 * @param {string} icon - The name of the icon to be displayed.
 * @param {'start' | 'end'} [iconSlot='start'] - The position of the icon within the item.
 * @param {StringOrBoolean} [button=true] - Determines if the item should behave as a button.
 * @param {string} [title] - The main title of the list item.
 * @param {string} [description] - A description for the list item.
 * @param {string} [info] - Additional information for the list item.
 * @param {string} [subinfo] - Sub-information for the list item.
 *
 * @example
 * <ngx-decaf-list-item
 *   [item]="dataItem"
 *   icon="star"
 *   title="Item Title"
 *   description="Item Description"
 *   (clickEvent)="handleItemClick($event)">
 * </ngx-decaf-list-item>
 *
 * @mermaid
 * sequenceDiagram
 *   participant C as Component
 *   participant V as View
 *   participant U as User
 *   C->>V: Initialize component
 *   V->>U: Display list item
 *   U->>V: Click on item or action
 *   V->>C: Trigger handleAction()
 *   C->>C: Process action
 *   C->>V: Update view or navigate
 */
let ListItemComponent = class ListItemComponent extends NgxBaseComponent {
    /**
     * @description Creates an instance of ListItemComponent.
     * @summary Initializes a new ListItemComponent by calling the parent class constructor
     * with the component name for logging and identification purposes. Also registers
     * all available Ionic icons to ensure they can be displayed in the component.
     *
     * @memberOf ListItemComponent
     */
    constructor() {
        super("ListItemComponent");
        /**
         * @description Controls the display of lines around the list item.
         * @summary Determines how lines are displayed around the list item borders.
         * 'inset' shows lines with padding, 'full' shows full-width lines, and 'none'
         * removes all lines. This affects the visual separation between list items.
         *
         * @type {'inset' | 'full' | 'none'}
         * @default 'inset'
         * @memberOf ListItemComponent
         */
        this.lines = 'full';
        /**
         * @description Position of the icon within the list item.
         * @summary Determines whether the icon appears at the start (left in LTR languages)
         * or end (right in LTR languages) of the list item. This affects the overall
         * layout and visual hierarchy of the item content.
         *
         * @type {'start' | 'end'}
         * @default 'start'
         * @memberOf ListItemComponent
         */
        this.iconSlot = 'start';
        /**
         * @description Controls whether the list item behaves as a clickable button.
         * @summary When set to true, the list item will have button-like behavior including
         * hover effects, click handling, and appropriate accessibility attributes.
         * When false, the item is displayed as static content without interactive behavior.
         *
         * @type {StringOrBoolean}
         * @default true
         * @memberOf ListItemComponent
         */
        this.button = true;
        /**
         * @description Event emitter for list item click interactions.
         * @summary Emits custom events when the list item is clicked or when actions
         * are performed on it. The emitted event contains information about the action,
         * the item data, and other relevant context for parent components to handle.
         *
         * @type {EventEmitter<ListItemCustomEvent>}
         * @memberOf ListItemComponent
         */
        this.clickEvent = new EventEmitter();
        /**
         * @description Flag indicating whether slide items are currently enabled.
         * @summary Controls the visibility of slide actions based on screen size and
         * available operations. When true, users can swipe on the item to reveal
         * action buttons for operations like edit and delete.
         *
         * @type {boolean}
         * @default false
         * @memberOf ListItemComponent
         */
        this.showSlideItems = false;
        /**
         * @description Flag indicating whether the action menu popover is currently open.
         * @summary Tracks the state of the action menu to prevent multiple instances
         * from being opened simultaneously and to ensure proper cleanup when actions
         * are performed. Used for managing the popover lifecycle.
         *
         * @type {boolean}
         * @default false
         * @memberOf ListItemComponent
         */
        this.actionMenuOpen = false;
        /**
         * @description Angular NavController service for handling navigation.
         * @summary Injected service that provides methods for programmatic navigation
         * within the Ionic application. Used for navigating to different routes when
         * list item actions are performed or when the item itself is clicked.
         *
         * @private
         * @type {NavController}
         * @memberOf ListItemComponent
         */
        this.navController = inject(NavController);
        addIcons(allIcons);
    }
    /**
     * @description Initializes the component after Angular first displays the data-bound properties.
     * @summary Sets up the component by determining slide item visibility, processing boolean inputs,
     * building CSS class names based on properties, and capturing the current window width.
     * This method prepares the component for user interaction by ensuring all properties are
     * properly initialized and responsive behavior is configured.
     *
     * @mermaid
     * sequenceDiagram
     *   participant A as Angular Lifecycle
     *   participant L as ListItemComponent
     *   participant W as Window
     *
     *   A->>L: ngOnInit()
     *   L->>L: enableSlideItems()
     *   L->>L: Process button boolean
     *   L->>L: Build className with flex classes
     *   alt operations exist
     *     L->>L: Add 'action' class
     *   end
     *   L->>W: getWindowWidth()
     *   W-->>L: Return current width
     *   L->>L: Store windowWidth
     *
     * @return {Promise<void>}
     * @memberOf ListItemComponent
     */
    async ngOnInit() {
        this.showSlideItems = this.enableSlideItems();
        this.button = stringToBoolean(this.button);
        this.className = `${this.className}  dcf-flex dcf-flex-middle grid-item`;
        if (this.operations?.length)
            this.className += ` action`;
        this.windowWidth = getWindowWidth();
    }
    /**
     * @description Handles user interactions and actions performed on the list item.
     * @summary This method is the central action handler for list item interactions. It manages
     * event propagation, dismisses open action menus, removes focus traps, and either emits
     * events for parent components to handle or performs navigation based on the component's
     * route configuration. This method supports both event-driven and navigation-driven architectures.
     *
     * @param {CrudOperations} action - The type of CRUD operation being performed
     * @param {Event} event - The browser event that triggered the action
     * @param {HTMLElement} [target] - Optional target element for the event
     * @return {Promise<boolean|void>} A promise that resolves to navigation success or void for events
     *
     * @mermaid
     * sequenceDiagram
     *   participant U as User
     *   participant L as ListItemComponent
     *   participant P as Parent Component
     *   participant N as NavController
     *   participant E as Event System
     *
     *   U->>L: Perform action (click/swipe)
     *   L->>L: stopImmediatePropagation()
     *   alt actionMenuOpen
     *     L->>L: Dismiss action menu
     *   end
     *   L->>L: removeFocusTrap()
     *   alt No route configured
     *     L->>E: windowEventEmitter()
     *     L->>P: clickEvent.emit()
     *   else Route configured
     *     L->>N: redirect(action, uid)
     *     N-->>L: Return navigation result
     *   end
     *
     * @memberOf ListItemComponent
     */
    async handleAction(action, event, target) {
        event.stopImmediatePropagation();
        if (this.actionMenuOpen)
            await this.actionMenuComponent.dismiss();
        // forcing trap focus
        removeFocusTrap();
        if (!this.route) {
            const event = { target: target, action, pk: this.pk, data: this.uid, name: EventConstants.CLICK, component: this.componentName };
            windowEventEmitter(`ListItem${EventConstants.CLICK}`, event);
            return this.clickEvent.emit(event);
        }
        return await this.redirect(action, (typeof this.uid === 'number' ? `${this.uid}` : this.uid));
    }
    /**
     * @description Responsive handler that enables or disables slide items based on screen size and operations.
     * @summary This method is automatically called when the window is resized and also during component
     * initialization. It determines whether slide actions should be available based on the current
     * window width and the presence of UPDATE or DELETE operations. Slide items are typically hidden
     * on larger screens where there's space for dedicated action buttons.
     *
     * @return {boolean} True if slide items should be shown, false otherwise
     *
     * @mermaid
     * sequenceDiagram
     *   participant W as Window
     *   participant L as ListItemComponent
     *   participant U as UI
     *
     *   W->>L: resize event
     *   L->>W: getWindowWidth()
     *   W-->>L: Return current width
     *   L->>L: Store windowWidth
     *   alt No operations OR width > 768px
     *     L->>U: showSlideItems = false
     *   else Operations include UPDATE/DELETE
     *     L->>U: showSlideItems = true
     *   end
     *   L-->>U: Return showSlideItems value
     *
     * @memberOf ListItemComponent
     */
    enableSlideItems() {
        this.windowWidth = getWindowWidth();
        if (!this.operations?.length || this.windowWidth > 768)
            return this.showSlideItems = false;
        this.showSlideItems = this.operations.includes(OperationKeys.UPDATE) || this.operations.includes(OperationKeys.DELETE);
        return this.showSlideItems;
    }
    /**
     * @description Animates and removes an element from the DOM.
     * @summary This method applies CSS animation classes to create a smooth fade-out effect
     * before removing the element from the DOM. The animation enhances user experience by
     * providing visual feedback when items are deleted or removed from lists. The timing
     * is coordinated with the CSS animation duration to ensure the element is removed
     * after the animation completes.
     *
     * @param {HTMLElement} element - The DOM element to animate and remove
     * @return {void}
     *
     * @mermaid
     * sequenceDiagram
     *   participant L as ListItemComponent
     *   participant E as HTMLElement
     *   participant D as DOM
     *
     *   L->>E: Add animation classes
     *   Note over E: uk-animation-fade, uk-animation-medium, uk-animation-reverse
     *   E->>E: Start fade animation
     *   L->>L: setTimeout(600ms)
     *   Note over L: Wait for animation to complete
     *   L->>D: element.remove()
     *   D->>D: Remove element from DOM
     *
     * @memberOf ListItemComponent
     */
    removeElement(element) {
        element.classList.add('uk-animation-fade', 'uk-animation-medium', 'uk-animation-reverse');
        setTimeout(() => { element.remove(); }, 600);
    }
    /**
     * @description Navigates to a new route based on the specified action and item ID.
     * @summary This method constructs a navigation URL using the component's route configuration,
     * the specified action, and an item identifier. It uses Ionic's NavController to perform
     * forward navigation with appropriate animations. This method is typically used for
     * CRUD operations where each action (create, read, update, delete) has its own route.
     *
     * @param {string} action - The action to be performed (e.g., 'edit', 'view', 'delete')
     * @param {string} [id] - The unique identifier of the item to be acted upon
     * @return {Promise<boolean>} A promise that resolves to true if navigation was successful
     *
     * @mermaid
     * sequenceDiagram
     *   participant L as ListItemComponent
     *   participant N as NavController
     *   participant R as Router
     *
     *   L->>L: redirect(action, id)
     *   L->>L: Construct URL: /{route}/{action}/{id}
     *   L->>N: navigateForward(url)
     *   N->>R: Navigate to constructed URL
     *   R-->>N: Return navigation result
     *   N-->>L: Return boolean success
     *
     * @memberOf ListItemComponent
     */
    async redirect(action, id) {
        return await this.navController.navigateForward(`/${this.route}/${action}/${id || this.uid}`);
    }
    /**
     * @description Presents the actions menu popover for the list item.
     * @summary This method handles the display of a contextual action menu when triggered by user
     * interaction (typically a long press or right-click). It stops event propagation to prevent
     * unwanted side effects, removes any existing focus traps for accessibility, configures the
     * popover with the triggering event, and opens the action menu. The menu typically contains
     * available CRUD operations for the item.
     *
     * @param {Event} event - The event that triggered the action menu request
     * @return {void}
     *
     * @mermaid
     * sequenceDiagram
     *   participant U as User
     *   participant L as ListItemComponent
     *   participant P as Popover
     *   participant A as Accessibility
     *
     *   U->>L: Trigger action menu (long press/right-click)
     *   L->>L: stopImmediatePropagation()
     *   L->>A: removeFocusTrap()
     *   L->>P: Set event reference
     *   L->>L: actionMenuOpen = true
     *   L->>P: Display popover with actions
     *
     * @memberOf ListItemComponent
     */
    presentActionsMenu(event) {
        event.stopImmediatePropagation();
        // forcing trap focus
        removeFocusTrap();
        this.actionMenuComponent.event = event;
        this.actionMenuOpen = true;
    }
    static { this.ɵfac = function ListItemComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ListItemComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListItemComponent, selectors: [["ngx-decaf-list-item"]], viewQuery: function ListItemComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$2, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.actionMenuComponent = _t.first);
        } }, hostBindings: function ListItemComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("resize", function ListItemComponent_resize_HostBindingHandler($event) { return ctx.enableSlideItems($event); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { lines: "lines", item: "item", icon: "icon", iconSlot: "iconSlot", button: "button", title: "title", description: "description", info: "info", subinfo: "subinfo" }, outputs: { clickEvent: "clickEvent" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], ngContentSelectors: _c2$1, decls: 1, vars: 1, consts: [["component", ""], ["actionMenuComponent", ""], [3, "click", "id", "lines", "button"], [1, "dcf-icon", 3, "slot"], [1, "dcf-width-expand"], ["dcf-grid", "", 1, "dcf-flex", "dcf-flex-middle", "dcf-grid-collapse"], [1, "dcf-icon", "dcf-grid-icon"], [1, "dcf-width-expand@s", "dcf-width-1-1", "dcf-label"], [1, "dcf-item-title", 3, "innerHTML"], ["class", "dcf-description", 3, "innerHTML", 4, "ngIf"], [1, "dcf-width-auto@s", "dcf-width-expand", "dcf-info", "dcf-flex", "dcf-flex-right@s"], [1, "dcf-width-auto", "dcf-flex", "dcf-flex-middle", "dcf-flex-right"], ["id", "dcf-actions", 1, "dcf-visible@m"], ["id", "end"], ["side", "end"], ["aria-hidden", "true", "name", "reader-outline", "size", "default"], [1, "dcf-description", 3, "innerHTML"], [3, "innerHTML", 4, "ngIf"], ["class", "dcf-subinfo dcf-text-truncate", 3, "innerHTML", 4, "ngIf"], [3, "innerHTML"], [1, "dcf-subinfo", "dcf-text-truncate", 3, "innerHTML"], ["shape", "round", "fill", "clear", "color", "primary", 1, "dcf-hidden@m", 3, "click"], ["slot", "icon-only", "aria-hidden", "true", "name", "ellipsis-vertical-outline"], ["side", "bottom", "alignment", "left", 3, "didDismiss", "isOpen"], [1, "ion-padding"], ["lines", "none"], [1, "dcf-text-capitalize", 3, "innerHTML"], [3, "button"], [3, "click", "button"], ["aria-hidden", "true", "slot", "start", 1, "dcf-flex", "dcf-flex-middle"], ["color", "primary", "aria-hidden", "true", "name", "create-outline"], ["color", "danger", "aria-hidden", "true", "name", "trash"], [1, "dcf-text-capitalize"], ["side", "end", 3, "ionSwipe"], [1, "dcf-update", 3, "expandable"], [1, "dcf-", "delete", 3, "expandable"], [1, "dcf-update", 3, "click", "expandable"], ["aria-hidden", "true", "slot", "icon-only", "name", "create-outline"], [1, "dcf-", "delete", 3, "click", "expandable"], ["aria-hidden", "true", "slot", "icon-only", "name", "trash"]], template: function ListItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1$2);
            i0.ɵɵtemplate(0, ListItemComponent_Conditional_0_Template, 15, 13, "ion-item-sliding");
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.title || ctx.description ? 0 : -1);
        } }, dependencies: [ForAngularModule, i1.IonButton, i1.IonContent, i2.NgIf, i3.TranslatePipe, IonList,
            IonListHeader,
            IonItem,
            IonItemSliding,
            IonItemOptions,
            IonItemOption,
            IonIcon,
            IonLabel,
            IonPopover], styles: ["ion-item[_ngcontent-%COMP%]{--min-height: 50px;--padding-top: .25rem;--padding-bottom: .25rem;--padding-start: .75rem;--padding-end: .75rem;--inner-padding-start: 0px !important;--inner-padding-end: 0px !important;--background-hover: var(--dcf-color-gray-8);--background-focused: var(--dcf-color-gray-8)}@media (prefers-color-scheme: dark){ion-item[_ngcontent-%COMP%]{--background-hover-opacity: .25;--background-focused-opacity: .25}}@media (prefers-color-scheme: light){ion-item[_ngcontent-%COMP%]{--background-hover-opacity: .1;--background-focused-opacity: .1}}ion-item.item-lines-full[_ngcontent-%COMP%]{--padding-top: .5rem;--padding-bottom: .5rem;--padding-start: .25rem;-padding-end:.25rem;padding:0 .65rem}ion-item.item-lines-inset[_ngcontent-%COMP%]{--padding-top: 0rem !important;--padding-bottom: 0rem !important;--inner-padding-top: .5rem !important;--inner-padding-bottom: .65rem !important}@media (prefers-color-scheme: light){ion-item[_ngcontent-%COMP%]{--border-color: var(--dcf-color-gray-2)}ion-item[_ngcontent-%COMP%]   .dcf-info[_ngcontent-%COMP%]{color:var(--dcf-color-gray-6)}ion-item[_ngcontent-%COMP%]   .dcf-item-title[_ngcontent-%COMP%]{color:var(--dcf-color-gray-8)}ion-item[_ngcontent-%COMP%]   .dcf-description[_ngcontent-%COMP%]{color:var(--dcf-color-gray-6)}}@media (prefers-color-scheme: dark){ion-item[_ngcontent-%COMP%]{--border-color: var(--dcf-color-gray-6)}ion-item[_ngcontent-%COMP%]   .dcf-description[_ngcontent-%COMP%]{color:var(--dcf-color-gray-4)}}ion-item[_ngcontent-%COMP%]   .dcf-info[_ngcontent-%COMP%]{min-width:10vw;background:transparent!important}ion-item[_ngcontent-%COMP%]   .dcf-grid[_ngcontent-%COMP%]{padding:0!important;margin:0!important;min-width:100%!important}ion-item[_ngcontent-%COMP%]   .dcf-item-title[_ngcontent-%COMP%]{font-style:normal;font-weight:700}ion-item[_ngcontent-%COMP%]   .dcf-description[_ngcontent-%COMP%]{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-style:normal;font-weight:400;font-size:.925rem}ion-item[_ngcontent-%COMP%]::part(native){min-width:100%}ion-item[_ngcontent-%COMP%]   [slot=start][_ngcontent-%COMP%]{margin-right:.5rem!important}ion-item[_ngcontent-%COMP%]   [slot=end][_ngcontent-%COMP%]{margin-left:.5rem!important}ion-item[_ngcontent-%COMP%]   .dcf-info[_ngcontent-%COMP%]{font-size:.9rem}ion-item[_ngcontent-%COMP%]   .dcf-info[_ngcontent-%COMP%]   .dcf-subinfo.dcf-line[_ngcontent-%COMP%]{margin-left:.5rem}@media (min-width: var(--dcf-width-sm)){ion-item[_ngcontent-%COMP%]   .dcf-info[_ngcontent-%COMP%]   .dcf-subinfo.dcf-line[_ngcontent-%COMP%]{display:block;margin-left:0}}ion-item[_ngcontent-%COMP%]   #dcf-actions[_ngcontent-%COMP%]{padding:5px}@media (max-width: var(--dcf-width-m)){ion-item[_ngcontent-%COMP%]   #dcf-actions[_ngcontent-%COMP%]{display:none;pointer-events:none!important;cursor:text!important}ion-item[_ngcontent-%COMP%]   #dcf-actions[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{display:none;pointer-events:none!important;cursor:text!important}}ion-item[_ngcontent-%COMP%]   #dcf-actions[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--padding-start: 1rem;--padding-end: .75rem;--padding-top: .85rem !important;--padding-bottom: .85rem !important;color:#ccc;margin-right:.5rem!important;--background: var(--dcf-color-gray-2) !important}ion-item[_ngcontent-%COMP%]   #dcf-actions[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{position:relative;left:-1px}@media (max-width: var(--dcf-width-m)){ion-item[_ngcontent-%COMP%]   #dcf-end[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%]   [slot=end][_ngcontent-%COMP%]{display:none!important}}ion-item[_ngcontent-%COMP%]   #dcf-end[_ngcontent-%COMP%]{padding-top:5px;display:flex;align-items:flex-end}ion-item[_ngcontent-%COMP%]   .dcf-icon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center;margin-right:.5rem!important}ion-item[_ngcontent-%COMP%]   .dcf-icon.dcf-grid-icon[_ngcontent-%COMP%]{min-width:50px;text-align:left;display:flex;justify-content:flex-start}@media (max-width: var(--dcf-width-s)){ion-item[_ngcontent-%COMP%]   .dcf-icon[_ngcontent-%COMP%]{align-items:flex-start!important}}@media (prefers-color-scheme: light){ion-item[_ngcontent-%COMP%]   .dcf-icon[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{color:var(--dcf-color-gray-7);--background: var(--dcf-color-gray-1) !important}}@media (prefers-color-scheme: dark){ion-item[_ngcontent-%COMP%]   .dcf-icon[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{color:var(--dcf-color-gray-1)!important;--background: var(--dcf-color-gray-7) !important}}ion-item[_ngcontent-%COMP%]   .dcf-icon[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:20px}ion-item[_ngcontent-%COMP%]   .dcf-icon[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:48px;height:48px;display:flex;justify-content:center;align-items:center;text-align:center}@media (prefers-color-scheme: light){ion-item[_ngcontent-%COMP%]   .dcf-icon[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{color:var(--dcf-color-gray-7);background:var(--dcf-color-gray-1)!important}}@media (prefers-color-scheme: dark){ion-item[_ngcontent-%COMP%]   .dcf-icon[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{color:var(--dcf-color-gray-1)!important;background:var(--dcf-background-color)!important}}ion-item[_ngcontent-%COMP%]   .dcf-icon[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:20px}ion-item[_ngcontent-%COMP%]   .dcf-icon[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   .dcf-icon-large[_ngcontent-%COMP%]{transform:translateY(5px)}ion-item-sliding[_ngcontent-%COMP%]{box-sizing:border-box}@media (prefers-color-scheme: light){ion-item-sliding[_ngcontent-%COMP%]   ion-item-option[_ngcontent-%COMP%]:not(.dcf-delete), ion-item-sliding[_ngcontent-%COMP%]   ion-item-option[_ngcontent-%COMP%]:not(.dcf-update){background:rgba(var(--dcf-color-dark-rgb),.25)!important}ion-item-sliding[_ngcontent-%COMP%]   ion-item-option[_ngcontent-%COMP%]:not(.dcf-delete)   .dcf-ti[_ngcontent-%COMP%], ion-item-sliding[_ngcontent-%COMP%]   ion-item-option[_ngcontent-%COMP%]:not(.dcf-delete)   ion-icon[_ngcontent-%COMP%], ion-item-sliding[_ngcontent-%COMP%]   ion-item-option[_ngcontent-%COMP%]:not(.dcf-update)   .dcf-ti[_ngcontent-%COMP%], ion-item-sliding[_ngcontent-%COMP%]   ion-item-option[_ngcontent-%COMP%]:not(.dcf-update)   ion-icon[_ngcontent-%COMP%]{color:var(--dcf-color-gray-7)!important}ion-item-sliding[_ngcontent-%COMP%]   ion-item-option.dcf-delete[_ngcontent-%COMP%]{background:rgba(var(--dcf-color-danger-rgb),.05)!important}ion-item-sliding[_ngcontent-%COMP%]   ion-item-option.dcf-delete[_ngcontent-%COMP%]   .dcf-ti[_ngcontent-%COMP%], ion-item-sliding[_ngcontent-%COMP%]   ion-item-option.dcf-delete[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], ion-item-sliding[_ngcontent-%COMP%]   ion-item-option.dcf-delete[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--dcf-color-danger)!important}ion-item-sliding[_ngcontent-%COMP%]   ion-item-option.dcf-update[_ngcontent-%COMP%]{background:rgba(var(--dcf-color-primary-rgb),.05)!important}ion-item-sliding[_ngcontent-%COMP%]   ion-item-option.dcf-update[_ngcontent-%COMP%]   .dcf-ti[_ngcontent-%COMP%], ion-item-sliding[_ngcontent-%COMP%]   ion-item-option.dcf-update[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--dcf-color-primary)!important}}@media (prefers-color-scheme: dark){ion-item-sliding[_ngcontent-%COMP%]   ion-item-option[_ngcontent-%COMP%]:not(.dcf-delete), ion-item-sliding[_ngcontent-%COMP%]   ion-item-option[_ngcontent-%COMP%]:not(.dcf-update){background:rgba(var(--dcf-color-dark-rgb),1)!important}ion-item-sliding[_ngcontent-%COMP%]   ion-item-option[_ngcontent-%COMP%]:not(.dcf-delete)   .dcf-ti[_ngcontent-%COMP%], ion-item-sliding[_ngcontent-%COMP%]   ion-item-option[_ngcontent-%COMP%]:not(.dcf-delete)   ion-icon[_ngcontent-%COMP%], ion-item-sliding[_ngcontent-%COMP%]   ion-item-option[_ngcontent-%COMP%]:not(.dcf-update)   .dcf-ti[_ngcontent-%COMP%], ion-item-sliding[_ngcontent-%COMP%]   ion-item-option[_ngcontent-%COMP%]:not(.dcf-update)   ion-icon[_ngcontent-%COMP%]{color:var(--dcf-color-gray-2)!important}ion-item-sliding[_ngcontent-%COMP%]   ion-item-option.dcf-delete[_ngcontent-%COMP%]{background:rgba(var(--dcf-color-danger-rgb),.05)!important}ion-item-sliding[_ngcontent-%COMP%]   ion-item-option.dcf-delete[_ngcontent-%COMP%]   .dcf-ti[_ngcontent-%COMP%], ion-item-sliding[_ngcontent-%COMP%]   ion-item-option.dcf-delete[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], ion-item-sliding[_ngcontent-%COMP%]   ion-item-option.dcf-delete[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--dcf-color-danger)!important}ion-item-sliding[_ngcontent-%COMP%]   ion-item-option.dcf-update[_ngcontent-%COMP%]{background:rgba(var(--dcf-color-primary-rgb),.05)!important}ion-item-sliding[_ngcontent-%COMP%]   ion-item-option.dcf-update[_ngcontent-%COMP%]   .dcf-ti[_ngcontent-%COMP%], ion-item-sliding[_ngcontent-%COMP%]   ion-item-option.dcf-update[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--dcf-color-gray-2)!important}}ion-item-sliding[class*=active-slide][_ngcontent-%COMP%]{border-color:var(--dcf-color-gray-3)}ion-item-sliding[_ngcontent-%COMP%]   ion-item-option[_ngcontent-%COMP%]{color:var(--dcf-color-gray-5);box-shadow:inset 0 0 5px rgba(var(--dcf-color-dark-rgb),.15)!important;background:var(--dcf-color-gray-3)}"] }); }
};
ListItemComponent = __decorate([
    Dynamic(),
    __metadata("design:paramtypes", [])
], ListItemComponent);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListItemComponent, [{
        type: Component,
        args: [{ selector: 'ngx-decaf-list-item', standalone: true, imports: [
                    ForAngularModule,
                    IonList,
                    IonListHeader,
                    IonItem,
                    IonItemSliding,
                    IonItemOptions,
                    IonItemOption,
                    IonIcon,
                    IonLabel,
                    IonButton,
                    IonContent,
                    IonPopover
                ], template: "\n@if(title || description) {\n  <ion-item-sliding #component>\n    <ion-item\n      [id]=\"uid\"\n      [lines]=\"lines\"\n      [button]=\"button\"\n      [class]=\"className\"\n      (click)=\"operations?.includes('read') ? handleAction('read', $event, component) : ''\n    \">\n      @if(icon && lines !== 'inset') {\n        <div class=\"dcf-icon\" [slot]=\"iconSlot\">\n          <ion-avatar>\n            <ion-icon aria-hidden=\"true\" name=\"reader-outline\" size=\"default\"></ion-icon>\n          </ion-avatar>\n        </div>\n      }\n      <div class=\"dcf-width-expand\">\n        <div class=\"dcf-flex dcf-flex-middle dcf-grid-collapse\" dcf-grid>\n          @if(icon && lines === 'inset') {\n            <div class=\"dcf-icon dcf-grid-icon\">\n              <ion-avatar>\n                <ion-icon aria-hidden=\"true\" name=\"reader-outline\"  size=\"default\"></ion-icon>\n              </ion-avatar>\n            </div>\n          }\n          <div class=\"dcf-width-expand@s dcf-width-1-1 dcf-label\">\n            <ion-label class=\"dcf-item-title\" [innerHTML]=\"uid + ' - ' + title\" ></ion-label>\n            <div *ngIf =\"description\" class=\"dcf-description\" [innerHTML]=\"description\"></div>\n          </div>\n          @if(info || subinfo) {\n            <div class=\"dcf-width-auto@s dcf-width-expand dcf-info dcf-flex dcf-flex-right@s\">\n              <div>\n                  <span *ngIf=\"info\" [innerHTML]=\"info\"></span>\n                  <div *ngIf=\"subinfo\" class=\"dcf-subinfo dcf-text-truncate\" [innerHTML]=\"subinfo\" ></div>\n              </div>\n            </div>\n          }\n\n          <div class=\"dcf-width-auto dcf-flex dcf-flex-middle dcf-flex-right\">\n            @if((operations.includes('delete') || operations.includes('update')) && uid) {\n              <div class=\"dcf-visible@m\" id=\"dcf-actions\">\n                <ion-button class=\"dcf-hidden@m\" shape=\"round\" fill=\"clear\" color=\"primary\" (click)=\"presentActionsMenu($event)\">\n                  <ion-icon slot=\"icon-only\" aria-hidden=\"true\" name=\"ellipsis-vertical-outline\"></ion-icon>\n                </ion-button>\n                <ion-popover\n                  #actionMenuComponent\n                  side=\"bottom\"\n                  alignment=\"left\"\n\n                  [isOpen]=\"actionMenuOpen\"\n                  (didDismiss)=\"actionMenuOpen = false\">\n                  <ng-template>\n                    <ion-content class=\"ion-padding\">\n                      <ion-list lines=\"none\">\n                        <ion-list-header>\n                          <h4 class=\"dcf-text-capitalize\" [innerHTML]=\"'actions' | translate\"></h4>\n                        </ion-list-header>\n                        @for (operation of ['update', 'delete']; track operation) {\n                          @if(operations.includes(operation)) {\n                          <ion-item [button]=\"true\" (click)=\"handleAction(operation, $event, component)\">\n                              <ion-avatar class=\"dcf-flex dcf-flex-middle\" aria-hidden=\"true\" slot=\"start\">\n                                @if(operation === 'update') {\n                                  <ion-icon color=\"primary\" aria-hidden=\"true\" name=\"create-outline\"></ion-icon>\n                                } @else {\n                                  <ion-icon color=\"danger\" aria-hidden=\"true\" name=\"trash\"></ion-icon>\n                                }\n                              </ion-avatar>\n                              <ion-label class=\"dcf-text-capitalize\">{{ operation | translate }}</ion-label>\n                            </ion-item>\n                          }\n                        }\n                      </ion-list>\n                    </ion-content>\n                  </ng-template>\n                </ion-popover>\n              </div>\n            }\n            <!-- @if(operations?.length && uid) {\n              <div class=\"dcf-visible@m\" id=\"dcf-actions\">\n                @if(operations?.includes('update')) {\n                  <ion-button fill=\"clear\" size=\"small\" color=\"primary\" (click)=\"handleAction('update',  component)\">\n                    <ion-icon aria-hidden=\"true\" slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n                  </ion-button>\n                }\n                @if(operations?.includes('delete')) {\n                  <ion-button fill=\"clear\" size=\"small\" color=\"danger\" (click)=\"handleAction('delete',  component)\">\n                    <ion-icon aria-hidden=\"true\" slot=\"icon-only\" name=\"trash\"></ion-icon>\n                  </ion-button>\n                }\n              </div>\n            } -->\n            @if(windowWidth > 768) {\n              <div id=\"end\">\n                <ng-content select=\"[slot='end']\"></ng-content>\n              </div>\n            }\n          </div>\n        </div>\n      </div>\n    </ion-item>\n    @if(showSlideItems && uid) {\n      <ion-item-options side=\"end\" (ionSwipe)=\"operations.length === 1 ? handleAction(operations[0],  $event, component) : ''\">\n        @if(operations?.includes('update')) {\n          <ion-item-option class=\"dcf-update\" (click)=\"handleAction('update', $event, component)\" [expandable]=\"operations.length === 1\">\n            <ion-icon aria-hidden=\"true\" slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n          </ion-item-option>\n        }\n        @if(operations?.includes('delete')) {\n        <ion-item-option class=\"dcf-          delete\" (click)=\"handleAction('delete',  $event, component)\" [expandable]=\"operations.length === 1\">\n            <ion-icon aria-hidden=\"true\" slot=\"icon-only\" name=\"trash\"></ion-icon>\n          </ion-item-option>\n        }\n      </ion-item-options>\n    }\n  </ion-item-sliding>\n}\n", styles: ["ion-item{--min-height: 50px;--padding-top: .25rem;--padding-bottom: .25rem;--padding-start: .75rem;--padding-end: .75rem;--inner-padding-start: 0px !important;--inner-padding-end: 0px !important;--background-hover: var(--dcf-color-gray-8);--background-focused: var(--dcf-color-gray-8)}@media (prefers-color-scheme: dark){ion-item{--background-hover-opacity: .25;--background-focused-opacity: .25}}@media (prefers-color-scheme: light){ion-item{--background-hover-opacity: .1;--background-focused-opacity: .1}}ion-item.item-lines-full{--padding-top: .5rem;--padding-bottom: .5rem;--padding-start: .25rem;-padding-end:.25rem;padding:0 .65rem}ion-item.item-lines-inset{--padding-top: 0rem !important;--padding-bottom: 0rem !important;--inner-padding-top: .5rem !important;--inner-padding-bottom: .65rem !important}@media (prefers-color-scheme: light){ion-item{--border-color: var(--dcf-color-gray-2)}ion-item .dcf-info{color:var(--dcf-color-gray-6)}ion-item .dcf-item-title{color:var(--dcf-color-gray-8)}ion-item .dcf-description{color:var(--dcf-color-gray-6)}}@media (prefers-color-scheme: dark){ion-item{--border-color: var(--dcf-color-gray-6)}ion-item .dcf-description{color:var(--dcf-color-gray-4)}}ion-item .dcf-info{min-width:10vw;background:transparent!important}ion-item .dcf-grid{padding:0!important;margin:0!important;min-width:100%!important}ion-item .dcf-item-title{font-style:normal;font-weight:700}ion-item .dcf-description{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-style:normal;font-weight:400;font-size:.925rem}ion-item::part(native){min-width:100%}ion-item [slot=start]{margin-right:.5rem!important}ion-item [slot=end]{margin-left:.5rem!important}ion-item .dcf-info{font-size:.9rem}ion-item .dcf-info .dcf-subinfo.dcf-line{margin-left:.5rem}@media (min-width: var(--dcf-width-sm)){ion-item .dcf-info .dcf-subinfo.dcf-line{display:block;margin-left:0}}ion-item #dcf-actions{padding:5px}@media (max-width: var(--dcf-width-m)){ion-item #dcf-actions{display:none;pointer-events:none!important;cursor:text!important}ion-item #dcf-actions *{display:none;pointer-events:none!important;cursor:text!important}}ion-item #dcf-actions ion-button{--padding-start: 1rem;--padding-end: .75rem;--padding-top: .85rem !important;--padding-bottom: .85rem !important;color:#ccc;margin-right:.5rem!important;--background: var(--dcf-color-gray-2) !important}ion-item #dcf-actions ion-button ion-icon{position:relative;left:-1px}@media (max-width: var(--dcf-width-m)){ion-item #dcf-end,ion-item [slot=end]{display:none!important}}ion-item #dcf-end{padding-top:5px;display:flex;align-items:flex-end}ion-item .dcf-icon{display:flex;justify-content:center;align-items:center;text-align:center;margin-right:.5rem!important}ion-item .dcf-icon.dcf-grid-icon{min-width:50px;text-align:left;display:flex;justify-content:flex-start}@media (max-width: var(--dcf-width-s)){ion-item .dcf-icon{align-items:flex-start!important}}@media (prefers-color-scheme: light){ion-item .dcf-icon ion-button{color:var(--dcf-color-gray-7);--background: var(--dcf-color-gray-1) !important}}@media (prefers-color-scheme: dark){ion-item .dcf-icon ion-button{color:var(--dcf-color-gray-1)!important;--background: var(--dcf-color-gray-7) !important}}ion-item .dcf-icon ion-button ion-icon{font-size:20px}ion-item .dcf-icon ion-avatar{width:48px;height:48px;display:flex;justify-content:center;align-items:center;text-align:center}@media (prefers-color-scheme: light){ion-item .dcf-icon ion-avatar{color:var(--dcf-color-gray-7);background:var(--dcf-color-gray-1)!important}}@media (prefers-color-scheme: dark){ion-item .dcf-icon ion-avatar{color:var(--dcf-color-gray-1)!important;background:var(--dcf-background-color)!important}}ion-item .dcf-icon ion-avatar ion-icon{font-size:20px}ion-item .dcf-icon ion-avatar .dcf-icon-large{transform:translateY(5px)}ion-item-sliding{box-sizing:border-box}@media (prefers-color-scheme: light){ion-item-sliding ion-item-option:not(.dcf-delete),ion-item-sliding ion-item-option:not(.dcf-update){background:rgba(var(--dcf-color-dark-rgb),.25)!important}ion-item-sliding ion-item-option:not(.dcf-delete) .dcf-ti,ion-item-sliding ion-item-option:not(.dcf-delete) ion-icon,ion-item-sliding ion-item-option:not(.dcf-update) .dcf-ti,ion-item-sliding ion-item-option:not(.dcf-update) ion-icon{color:var(--dcf-color-gray-7)!important}ion-item-sliding ion-item-option.dcf-delete{background:rgba(var(--dcf-color-danger-rgb),.05)!important}ion-item-sliding ion-item-option.dcf-delete .dcf-ti,ion-item-sliding ion-item-option.dcf-delete *,ion-item-sliding ion-item-option.dcf-delete ion-icon{color:var(--dcf-color-danger)!important}ion-item-sliding ion-item-option.dcf-update{background:rgba(var(--dcf-color-primary-rgb),.05)!important}ion-item-sliding ion-item-option.dcf-update .dcf-ti,ion-item-sliding ion-item-option.dcf-update ion-icon{color:var(--dcf-color-primary)!important}}@media (prefers-color-scheme: dark){ion-item-sliding ion-item-option:not(.dcf-delete),ion-item-sliding ion-item-option:not(.dcf-update){background:rgba(var(--dcf-color-dark-rgb),1)!important}ion-item-sliding ion-item-option:not(.dcf-delete) .dcf-ti,ion-item-sliding ion-item-option:not(.dcf-delete) ion-icon,ion-item-sliding ion-item-option:not(.dcf-update) .dcf-ti,ion-item-sliding ion-item-option:not(.dcf-update) ion-icon{color:var(--dcf-color-gray-2)!important}ion-item-sliding ion-item-option.dcf-delete{background:rgba(var(--dcf-color-danger-rgb),.05)!important}ion-item-sliding ion-item-option.dcf-delete .dcf-ti,ion-item-sliding ion-item-option.dcf-delete *,ion-item-sliding ion-item-option.dcf-delete ion-icon{color:var(--dcf-color-danger)!important}ion-item-sliding ion-item-option.dcf-update{background:rgba(var(--dcf-color-primary-rgb),.05)!important}ion-item-sliding ion-item-option.dcf-update .dcf-ti,ion-item-sliding ion-item-option.dcf-update ion-icon{color:var(--dcf-color-gray-2)!important}}ion-item-sliding[class*=active-slide]{border-color:var(--dcf-color-gray-3)}ion-item-sliding ion-item-option{color:var(--dcf-color-gray-5);box-shadow:inset 0 0 5px rgba(var(--dcf-color-dark-rgb),.15)!important;background:var(--dcf-color-gray-3)}\n"] }]
    }], () => [], { actionMenuComponent: [{
            type: ViewChild,
            args: ['actionMenuComponent']
        }], lines: [{
            type: Input
        }], item: [{
            type: Input
        }], icon: [{
            type: Input
        }], iconSlot: [{
            type: Input
        }], button: [{
            type: Input
        }], title: [{
            type: Input
        }], description: [{
            type: Input
        }], info: [{
            type: Input
        }], subinfo: [{
            type: Input
        }], clickEvent: [{
            type: Output
        }], enableSlideItems: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ListItemComponent, { className: "ListItemComponent", filePath: "components/list-item/list-item.component.ts", lineNumber: 87 }); })();

const _c0$1 = (a0, a1) => ({ value0: a0, value1: a1 });
const _c1$1 = a0 => ({ "dcf-disabled": a0 });
const _c2 = a0 => ({ "dcf-active": a0 });
function PaginationComponent_For_9_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵlistener("click", function PaginationComponent_For_9_Template_div_click_0_listener() { const page_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.navigate(page_r3["index"])); })("keydown.enter", function PaginationComponent_For_9_Template_div_keydown_enter_0_listener() { const page_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.navigate(page_r3["index"])); });
    i0.ɵɵelementStart(1, "span", 10);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const page_r3 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(page_r3["class"]);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c2, ctx_r3.current === page_r3["index"]));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(page_r3["text"]);
} }
/**
 * @description A pagination component for navigating through multiple pages of content.
 * @summary This component provides a user interface for paginated content navigation,
 * displaying page numbers and navigation controls. It supports customizable page counts,
 * current page tracking, and emits events when users navigate between pages.
 *
 * The component intelligently handles large numbers of pages by showing a subset of page
 * numbers with ellipses to indicate skipped pages, ensuring the UI remains clean and usable
 * even with many pages.
 *
 * @mermaid
 * sequenceDiagram
 *   participant U as User
 *   participant P as PaginationComponent
 *   participant E as External Component
 *
 *   U->>P: Click page number
 *   P->>P: navigate(page)
 *   P->>P: handleClick(direction, page)
 *   P->>E: Emit clickEvent with PaginationCustomEvent
 *
 *   U->>P: Click next button
 *   P->>P: next()
 *   P->>P: handleClick('next')
 *   P->>E: Emit clickEvent with PaginationCustomEvent
 *
 *   U->>P: Click previous button
 *   P->>P: previous()
 *   P->>P: handleClick('previous')
 *   P->>E: Emit clickEvent with PaginationCustomEvent
 *
 * @example
 * <ngx-decaf-pagination
 *   [pages]="10"
 *   [current]="3"
 *   (clickEvent)="handlePageChange($event)">
 * </ngx-decaf-pagination>
 *
 * @extends {NgxBaseComponent}
 * @implements {OnInit}
 */
class PaginationComponent extends NgxBaseComponent {
    /**
     * @constructor
     * @description Initializes a new instance of the PaginationComponent.
     * Calls the parent constructor with the component name for generate base locale string.
     */
    constructor() {
        super("PaginationComponent");
        /**
         * @description Controls whether the component uses translation services.
         * @summary When set to true, the component will attempt to use translation services
         * for any text content. This allows for internationalization of the pagination component.
         *
         * @type {StringOrBoolean}
         * @default true
         * @memberOf PaginationComponent
         */
        this.translatable = true;
        /**
         * @description The currently active page number.
         * @summary Specifies which page is currently active or selected. This value is used
         * to highlight the current page in the UI and as a reference point for navigation.
         *
         * @type {number}
         * @default 1
         * @memberOf PaginationComponent
         */
        this.current = 1;
        /**
         * @description Event emitter for pagination navigation events.
         * @summary Emits a custom event when users navigate between pages, either by clicking
         * on page numbers or using the next/previous buttons. The event contains information
         * about the navigation direction and the target page number.
         *
         * @type {EventEmitter<PaginationCustomEvent>}
         * @memberOf PaginationComponent
         */
        this.clickEvent = new EventEmitter();
        addIcons({ chevronBackOutline, chevronForwardOutline });
    }
    /**
     * @description Initializes the component after Angular sets the input properties.
     * @summary Sets up the component by initializing the locale settings based on the
     * translatable property, generating the page numbers based on the total pages and
     * current page, and storing the last page number for boundary checking.
     *
     * @mermaid
     * sequenceDiagram
     *   participant A as Angular Lifecycle
     *   participant P as PaginationComponent
     *
     *   A->>P: ngOnInit()
     *   P->>P: getLocale(translatable)
     *   P->>P: Set locale
     *   P->>P: getPages(data, current)
     *   P->>P: Set pages array
     *   P->>P: Set last page number
     *
     * @returns {void}
     * @memberOf PaginationComponent
     */
    ngOnInit() {
        this.locale = this.getLocale(this.translatable);
        this.pages = this.getPages(this.totalPages, this.current);
        this.last = this.totalPages;
    }
    /**
     * @description Handles click events on pagination controls.
     * @summary Processes user interactions with the pagination component, updating the
     * current page if specified and emitting an event with navigation details. This method
     * is called when users click on page numbers or navigation buttons.
     *
     * @param {('next' | 'previous')} direction - The direction of navigation
     * @param {number} [page] - Optional page number to navigate to directly
     * @returns {void}
     *
     * @mermaid
     * sequenceDiagram
     *   participant U as User
     *   participant P as PaginationComponent
     *   participant E as External Component
     *
     *   U->>P: Click pagination control
     *   P->>P: handleClick(direction, page?)
     *   alt page is provided
     *     P->>P: Update current page
     *   end
     *   P->>E: Emit clickEvent with direction and page
     *
     * @memberOf PaginationComponent
     */
    handleClick(direction, page) {
        if (page)
            this.current = page;
        this.clickEvent.emit({
            name: EventConstants.CLICK,
            data: {
                direction,
                page: this.current
            },
            component: this.componentName
        });
    }
    /**
     * @description Generates the array of page objects for display.
     * @summary Creates an array of page objects based on the total number of pages and
     * the current page. For small page counts (≤5), all pages are shown. For larger page
     * counts, a subset is shown with ellipses to indicate skipped pages. This ensures
     * the pagination UI remains clean and usable even with many pages.
     *
     * @param {number} total - The total number of pages
     * @param {number} [current] - The current active page (defaults to this.current)
     * @returns {KeyValue[]} Array of page objects with index and text properties
     *
     * @mermaid
     * flowchart TD
     *   A[Start] --> B{total <= 5?}
     *   B -->|Yes| C[Show all pages]
     *   B -->|No| D[Show first page]
     *   D --> E[Show last pages]
     *   E --> F[Add ellipses for skipped pages]
     *   C --> G[Return pages array]
     *   F --> G
     *
     * @memberOf PaginationComponent
     */
    getPages(total, current) {
        if (!current)
            current = this.current;
        const pages = [];
        function getPage(index, text = '', clazz = 'button') {
            if (pages.some(item => item['index'] === index))
                return;
            pages.push({ index, text: index != null ? index.toString().padStart(2, '0') : text, class: clazz });
        }
        if (total <= 5) {
            for (let i = 1; i <= total; i++)
                getPage(i);
        }
        else {
            // Adiciona os dois primeiros
            getPage(1);
            getPage(2);
            // Adiciona "..." entre os blocos
            if (current && current > 3)
                getPage(null, '...');
            // Adiciona a página atual (se estiver no meio)
            if (current && current > 2 && current < total - 1)
                getPage(current);
            // Adiciona "..." entre os blocos
            if (current && current < total - 2)
                getPage(null, '...', 'separator');
            // Adiciona os dois últimos
            getPage(total - 1);
            getPage(total);
        }
        return pages;
    }
    /**
     * @description Gets the current active page number.
     * @summary Returns the current page number that is active in the pagination component.
     * This method provides a way to access the current page state from outside the component.
     *
     * @returns {number} The current page number
     * @memberOf PaginationComponent
     */
    getCurrent() {
        return this.current;
    }
    /**
     * @description Navigates to the next page.
     * @summary Increments the current page number if not at the last page and triggers
     * the click event handler with 'next' direction. This method is typically called
     * when the user clicks on the "next" button in the pagination UI.
     *
     * @returns {void}
     *
     * @mermaid
     * sequenceDiagram
     *   participant U as User
     *   participant P as PaginationComponent
     *
     *   U->>P: Click next button
     *   P->>P: next()
     *   alt page <= max pages
     *     P->>P: Increment current page
     *     P->>P: handleClick('next')
     *   end
     *
     * @memberOf PaginationComponent
     */
    next() {
        const page = this.current + 1;
        if (page <= Object.keys(this.pages)?.length || 0) {
            this.current = page;
            this.handleClick('next');
        }
    }
    /**
     * @description Navigates to the previous page.
     * @summary Decrements the current page number if not at the first page and triggers
     * the click event handler with 'previous' direction. This method is typically called
     * when the user clicks on the "previous" button in the pagination UI.
     *
     * @returns {void}
     *
     * @mermaid
     * sequenceDiagram
     *   participant U as User
     *   participant P as PaginationComponent
     *
     *   U->>P: Click previous button
     *   P->>P: previous()
     *   alt page > 0
     *     P->>P: Decrement current page
     *     P->>P: handleClick('previous')
     *   end
     *
     * @memberOf PaginationComponent
     */
    previous() {
        const page = this.current - 1;
        if (page > 0) {
            this.current = page;
            this.handleClick('previous');
        }
    }
    /**
     * @description Navigates to a specific page number.
     * @summary Updates the current page to the specified page number and triggers
     * the click event handler with the appropriate direction. This method is typically
     * called when the user clicks directly on a page number in the pagination UI.
     *
     * @param {number | null} page - The page number to navigate to
     * @returns {void}
     *
     * @mermaid
     * sequenceDiagram
     *   participant U as User
     *   participant P as PaginationComponent
     *
     *   U->>P: Click page number
     *   P->>P: navigate(page)
     *   alt page is not null and different from current
     *     P->>P: Determine direction (next/previous)
     *     P->>P: handleClick(direction, page)
     *   end
     *
     * @memberOf PaginationComponent
     */
    navigate(page) {
        if (page !== null && this.current !== page)
            this.handleClick(page > this.current ? 'next' : 'previous', page);
    }
    static { this.ɵfac = function PaginationComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaginationComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaginationComponent, selectors: [["ngx-decaf-pagination"]], inputs: { totalPages: "totalPages", current: "current" }, outputs: { clickEvent: "clickEvent" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 12, vars: 14, consts: [["paginationComponent", ""], [1, "dcf-paginator-container", "dcf-flex", "dcf-flex-center", 3, "id"], [1, "dcf-width-1-1"], [1, "dcf-pagination-resume", 3, "innerHTML"], [1, "dcf-pagination", "dcf-flex-center"], ["aria-label", "previous", "tabindex", "0", 3, "click", "keydown.enter", "ngClass"], ["name", "chevron-back-outline", "aria-hidden", "true"], ["tabindex", "0", 3, "class", "ngClass"], ["tabindex", "0", 3, "click", "keydown.enter", "ngClass"], ["name", "chevron-forward-outline", "aria-hidden", "true"], [1, "page-item"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
            i0.ɵɵelement(2, "div", 3);
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵelementStart(4, "div", 4, 0)(6, "div", 5);
            i0.ɵɵlistener("click", function PaginationComponent_Template_div_click_6_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.previous()); })("keydown.enter", function PaginationComponent_Template_div_keydown_enter_6_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.previous()); });
            i0.ɵɵelement(7, "ion-icon", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(8, PaginationComponent_For_9_Template, 3, 6, "div", 7, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementStart(10, "div", 8);
            i0.ɵɵlistener("click", function PaginationComponent_Template_div_click_10_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.next()); })("keydown.enter", function PaginationComponent_Template_div_keydown_enter_10_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.next()); });
            i0.ɵɵelement(11, "ion-icon", 9);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵproperty("id", ctx.uid);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind2(3, 4, ctx.locale + ".resume", i0.ɵɵpureFunction2(7, _c0$1, ctx.current, ctx.last)), i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(10, _c1$1, ctx.current === 1));
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.pages);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(12, _c1$1, ctx.current === ctx.last));
        } }, dependencies: [ForAngularModule, i2.NgClass, i3.TranslatePipe, IonIcon], styles: [".dcf-paginator-container[_ngcontent-%COMP%]{margin-bottom:1rem}.dcf-pagination[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;margin-left:0;padding:0;list-style:none}.dcf-pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center;font-weight:600;width:34px;line-height:34px;padding:0!important;border-radius:50%;box-sizing:border-box}@media (prefers-color-scheme: dark){.dcf-pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]{color:var(--dcf-color-gray-3)!important}}@media (prefers-color-scheme: light){.dcf-pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]{color:var(--dcf-color-gray-7)!important}}.dcf-pagination[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:none;padding-left:0;position:relative;margin:0px .15rem;cursor:pointer}.dcf-pagination[_ngcontent-%COMP%] > *.dcf-disabled[_ngcontent-%COMP%]{pointer-events:none;touch-action:none;cursor:text}.dcf-pagination[_ngcontent-%COMP%] > *.dcf-active[_ngcontent-%COMP%]{pointer-events:none;touch-action:none}@media (prefers-color-scheme: light){.dcf-pagination[_ngcontent-%COMP%] > *.dcf-active[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]{background:rgba(var(--dcf-color-primary-rgb),.15)}.dcf-pagination[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:hover:not(.dcf-active)   *[_ngcontent-%COMP%]{color:var(--dcf-color-primary)!important}}@media (prefers-color-scheme: dark){.dcf-pagination[_ngcontent-%COMP%] > *.dcf-active[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]{background:var(--dcf-color-gray-7)}.dcf-pagination[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:hover:not(.dcf-active)   *[_ngcontent-%COMP%]{color:var(--dcf-color-primary)!important}}.dcf-pagination-resume[_ngcontent-%COMP%]{margin:1rem 0px;text-align:center}@media (prefers-color-scheme: light){.dcf-pagination-resume[_ngcontent-%COMP%]{color:var(--dcf-color-gray-8)}}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationComponent, [{
        type: Component,
        args: [{ selector: 'ngx-decaf-pagination', imports: [
                    ForAngularModule,
                    IonIcon
                ], standalone: true, template: " <div [id]=\"uid\" class=\"dcf-paginator-container dcf-flex dcf-flex-center\">\n  <div class=\"dcf-width-1-1\">\n    <div class=\"dcf-pagination-resume\" [innerHTML]=\"locale + '.resume' | translate: {value0: current, value1: last}\"></div>\n    <div #paginationComponent class=\"dcf-pagination dcf-flex-center\">\n      <div\n        aria-label=\"previous\"\n        tabindex=\"0\"\n        (click)=\"previous()\"\n        (keydown.enter)=\"previous()\" [ngClass]=\"{'dcf-disabled': current === 1}\">\n        <ion-icon name=\"chevron-back-outline\" aria-hidden=\"true\"></ion-icon>\n      </div>\n      @for(page of pages; track page) {\n        <div tabindex=\"0\" [class]=\"page['class']\" (click)=\"navigate(page['index'])\"\n          (keydown.enter)=\"navigate(page['index'])\"\n          [ngClass]=\"{'dcf-active': current === page['index']}\">\n          <span class=\"page-item\">{{ page['text'] }}</span>\n        </div>\n      }\n      <div\n        tabindex=\"0\" (click)=\"next()\"\n        (keydown.enter)=\"next()\"\n        [ngClass]=\"{'dcf-disabled': current === last}\">\n        <ion-icon name=\"chevron-forward-outline\" aria-hidden=\"true\"></ion-icon>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".dcf-paginator-container{margin-bottom:1rem}.dcf-pagination{display:flex;flex-wrap:wrap;align-items:center;margin-left:0;padding:0;list-style:none}.dcf-pagination .page-item{display:flex;justify-content:center;align-items:center;text-align:center;font-weight:600;width:34px;line-height:34px;padding:0!important;border-radius:50%;box-sizing:border-box}@media (prefers-color-scheme: dark){.dcf-pagination .page-item{color:var(--dcf-color-gray-3)!important}}@media (prefers-color-scheme: light){.dcf-pagination .page-item{color:var(--dcf-color-gray-7)!important}}.dcf-pagination>*{flex:none;padding-left:0;position:relative;margin:0px .15rem;cursor:pointer}.dcf-pagination>*.dcf-disabled{pointer-events:none;touch-action:none;cursor:text}.dcf-pagination>*.dcf-active{pointer-events:none;touch-action:none}@media (prefers-color-scheme: light){.dcf-pagination>*.dcf-active .page-item{background:rgba(var(--dcf-color-primary-rgb),.15)}.dcf-pagination>*:hover:not(.dcf-active) *{color:var(--dcf-color-primary)!important}}@media (prefers-color-scheme: dark){.dcf-pagination>*.dcf-active .page-item{background:var(--dcf-color-gray-7)}.dcf-pagination>*:hover:not(.dcf-active) *{color:var(--dcf-color-primary)!important}}.dcf-pagination-resume{margin:1rem 0px;text-align:center}@media (prefers-color-scheme: light){.dcf-pagination-resume{color:var(--dcf-color-gray-8)}}\n"] }]
    }], () => [], { totalPages: [{
            type: Input,
            args: [{ required: true }]
        }], current: [{
            type: Input
        }], clickEvent: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaginationComponent, { className: "PaginationComponent", filePath: "components/pagination/pagination.component.ts", lineNumber: 62 }); })();

var ListComponentsTypes;
(function (ListComponentsTypes) {
    ListComponentsTypes["INFINITE"] = "infinite";
    ListComponentsTypes["PAGINATED"] = "paginated";
})(ListComponentsTypes || (ListComponentsTypes = {}));

const _c0 = ["*"];
const _c1 = (a0, a1, a2) => ({ item: a0, mapper: a1, route: a2 });
function ListComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-refresher", 2);
    i0.ɵɵlistener("ionRefresh", function ListComponent_Conditional_0_Template_ion_refresher_ionRefresh_0_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.handleRefresh($event)); });
    i0.ɵɵelement(1, "ion-refresher-content");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("pullFactor", 1)("pullMin", 100)("pullMax", 200);
} }
function ListComponent_Conditional_1_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-decaf-filter", 5);
    i0.ɵɵlistener("filterEvent", function ListComponent_Conditional_1_Conditional_0_Template_ngx_decaf_filter_filterEvent_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.handleFilter($event)); })("searchEvent", function ListComponent_Conditional_1_Conditional_0_Template_ngx_decaf_filter_searchEvent_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.handleSearch($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("model", ctx_r1.model)("sortDirection", ctx_r1.sortDirection)("disableSort", ctx_r1.disableSort);
} }
function ListComponent_Conditional_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-decaf-searchbar", 6);
    i0.ɵɵlistener("searchEvent", function ListComponent_Conditional_1_Conditional_1_Template_ngx_decaf_searchbar_searchEvent_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.handleSearch($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("emitEventToWindow", false)("debounce", 500);
} }
function ListComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListComponent_Conditional_1_Conditional_0_Template, 1, 3, "ngx-decaf-filter", 3)(1, ListComponent_Conditional_1_Conditional_1_Template, 1, 2, "ngx-decaf-searchbar", 4);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵconditional(ctx_r1.model && ctx_r1.enableFilter ? 0 : 1);
} }
function ListComponent_Conditional_2_Conditional_2_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-decaf-component-renderer", 9);
    i0.ɵɵlistener("listenEvent", function ListComponent_Conditional_2_Conditional_2_For_1_Template_ngx_decaf_component_renderer_listenEvent_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.handleEvent($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r6 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("tag", ctx_r1.item.tag)("globals", i0.ɵɵpureFunction3(2, _c1, child_r6, ctx_r1.mapper, ctx_r1.route));
} }
function ListComponent_Conditional_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, ListComponent_Conditional_2_Conditional_2_For_1_Template, 1, 6, "ngx-decaf-component-renderer", 8, i0.ɵɵcomponentInstance().trackItemFn, true);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵrepeater(ctx_r1.items);
} }
function ListComponent_Conditional_2_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function ListComponent_Conditional_2_Conditional_4_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-decaf-pagination", 12);
    i0.ɵɵlistener("clickEvent", function ListComponent_Conditional_2_Conditional_4_Conditional_0_Template_ngx_decaf_pagination_clickEvent_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.handlePaginate($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("totalPages", ctx_r1.pages)("current", ctx_r1.page);
} }
function ListComponent_Conditional_2_Conditional_4_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-infinite-scroll", 13);
    i0.ɵɵlistener("ionInfinite", function ListComponent_Conditional_2_Conditional_4_Conditional_1_Template_ion_infinite_scroll_ionInfinite_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.handleRefresh($event)); });
    i0.ɵɵelement(1, "ion-infinite-scroll-content", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMap((ctx_r1.searchValue == null ? null : ctx_r1.searchValue.length) ? "dcf-hidden" : "");
    i0.ɵɵproperty("position", ctx_r1.scrollPosition)("threshold", ctx_r1.scrollThreshold);
    i0.ɵɵadvance();
    i0.ɵɵproperty("loadingSpinner", ctx_r1.loadingSpinner)("loadingText", ctx_r1.loadingText);
} }
function ListComponent_Conditional_2_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListComponent_Conditional_2_Conditional_4_Conditional_0_Template, 1, 2, "ngx-decaf-pagination", 10)(1, ListComponent_Conditional_2_Conditional_4_Conditional_1_Template, 2, 6, "ion-infinite-scroll", 11);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵconditional(ctx_r1.pages > 0 && ctx_r1.type === "paginated" && !(ctx_r1.searchValue == null ? null : ctx_r1.searchValue.length) ? 0 : 1);
} }
function ListComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-list", 7, 0);
    i0.ɵɵtemplate(2, ListComponent_Conditional_2_Conditional_2_Template, 2, 0)(3, ListComponent_Conditional_2_Conditional_3_Template, 1, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, ListComponent_Conditional_2_Conditional_4_Template, 2, 1);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", ctx_r1.uid)("inset", ctx_r1.inset)("lines", ctx_r1.lines);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional((ctx_r1.item == null ? null : ctx_r1.item.tag) ? 2 : 3);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.loadMoreData ? 4 : -1);
} }
function ListComponent_Conditional_3_Conditional_0_ion_item_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-item")(1, "ion-thumbnail", 16);
    i0.ɵɵelement(2, "ion-skeleton-text", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ion-label");
    i0.ɵɵelement(4, "ion-skeleton-text", 17);
    i0.ɵɵelementStart(5, "ion-text", 18);
    i0.ɵɵelement(6, "ion-skeleton-text", 17);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("animated", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("animated", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("animated", true);
} }
function ListComponent_Conditional_3_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListComponent_Conditional_3_Conditional_0_ion_item_0_Template, 7, 3, "ion-item", 15);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.skeletonData);
} }
function ListComponent_Conditional_3_Conditional_1_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-decaf-empty-state", 19);
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵpipe(3, "translate");
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("title", i0.ɵɵpipeBind1(1, 4, ctx_r1.locale + "." + ctx_r1.empty.title))("subtitle", i0.ɵɵpipeBind1(2, 6, ctx_r1.locale + "." + ctx_r1.empty.subtitle))("buttonText", ctx_r1.empty.showButton ? i0.ɵɵpipeBind1(3, 8, ctx_r1.locale + "." + ctx_r1.empty.button) : "")("buttonLink", ctx_r1.empty.showButton ? ctx_r1.empty.route : "");
} }
function ListComponent_Conditional_3_Conditional_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-decaf-empty-state", 20);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("translatable", true)("searchValue", ctx_r1.searchValue);
} }
function ListComponent_Conditional_3_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListComponent_Conditional_3_Conditional_1_Conditional_0_Template, 4, 10, "ngx-decaf-empty-state", 19)(1, ListComponent_Conditional_3_Conditional_1_Conditional_1_Template, 1, 2, "ngx-decaf-empty-state", 20);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵconditional(!(ctx_r1.searchValue == null ? null : ctx_r1.searchValue.length) ? 0 : 1);
} }
function ListComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListComponent_Conditional_3_Conditional_0_Template, 1, 1, "ion-item")(1, ListComponent_Conditional_3_Conditional_1_Template, 2, 1);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵconditional(ctx_r1.refreshing ? 0 : 1);
} }
/**
 * @description A versatile list component that supports various data display modes.
 * @summary This component provides a flexible way to display lists of data with support
 * for infinite scrolling, pagination, searching, and custom item rendering. It can fetch
 * data from various sources including models, functions, or direct data input.
 *
 * The component supports two main display types:
 * 1. Infinite scrolling - Loads more data as the user scrolls
 * 2. Pagination - Displays data in pages with navigation controls
 *
 * Additional features include:
 * - Pull-to-refresh functionality
 * - Search filtering
 * - Empty state customization
 * - Custom item rendering
 * - Event emission for interactions
 *
 * @mermaid
 * sequenceDiagram
 *   participant U as User
 *   participant L as ListComponent
 *   participant D as Data Source
 *   participant E as External Components
 *
 *   U->>L: Initialize component
 *   L->>L: ngOnInit()
 *   L->>D: Request initial data
 *   D-->>L: Return data
 *   L->>L: Process and display data
 *
 *   alt User scrolls (Infinite mode)
 *     U->>L: Scroll to bottom
 *     L->>D: Request more data
 *     D-->>L: Return additional data
 *     L->>L: Append to existing data
 *   else User changes page (Paginated mode)
 *     U->>L: Click page number
 *     L->>L: handlePaginate()
 *     L->>D: Request data for page
 *     D-->>L: Return page data
 *     L->>L: Replace displayed data
 *   end
 *
 *   alt User searches
 *     U->>L: Enter search term
 *     L->>L: handleSearch()
 *     L->>D: Filter data by search term
 *     D-->>L: Return filtered data
 *     L->>L: Update displayed data
 *   end
 *
 *   alt User clicks item
 *     U->>L: Click list item
 *     L->>L: handleClick()
 *     L->>E: Emit clickEvent
 *   end
 *
 * @example
 * <ngx-decaf-list
 *   [source]="dataSource"
 *   [limit]="10"
 *   [type]="'infinite'"
 *   [showSearchbar]="true"
 *   (clickEvent)="handleItemClick($event)"
 *   (refreshEvent)="handleRefresh($event)">
 * </ngx-decaf-list>
 *
 * @extends {NgxBaseComponent}
 * @implements {OnInit}
 */
let ListComponent = class ListComponent extends NgxBaseComponent {
    /**
     * @description Initializes a new instance of the ListComponent.
     * @summary Creates a new ListComponent and sets up the base component with the appropriate
     * component name. This constructor is called when Angular instantiates the component and
     * before any input properties are set. It passes the component name to the parent class
     * constructor to enable proper localization and component identification.
     *
     * The constructor is intentionally minimal, with most initialization logic deferred to
     * the ngOnInit lifecycle hook. This follows Angular best practices by keeping the constructor
     * focused on dependency injection and basic setup, while complex initialization that depends
     * on input properties is handled in ngOnInit.
     *
     * @memberOf ListComponent
     */
    constructor() {
        super("ListComponent");
        /**
         * @description The display mode for the list component.
         * @summary Determines how the list data is loaded and displayed. Options include:
         * - INFINITE: Loads more data as the user scrolls (infinite scrolling)
         * - PAGINATED: Displays data in pages with navigation controls
         *
         * @type {ListComponentsTypes}
         * @default ListComponentsTypes.INFINITE
         * @memberOf ListComponent
         */
        this.type = ListComponentsTypes.INFINITE;
        /**
         * @description Controls whether the component uses translation services.
         * @summary When set to true, the component will attempt to use translation services
         * for any text content. This allows for internationalization of the list component.
         *
         * @type {StringOrBoolean}
         * @default true
         * @memberOf ListComponent
         */
        this.translatable = true;
        /**
         * @description Controls the visibility of the search bar.
         * @summary When set to true, displays a search bar at the top of the list that allows
         * users to filter the list items. The search functionality works by filtering the
         * existing data or by triggering a new data fetch with search parameters.
         *
         * @type {StringOrBoolean}
         * @default true
         * @memberOf ListComponent
         */
        this.showSearchbar = true;
        /**
         * @description Direct data input for the list component.
         * @summary Provides a way to directly pass data to the list component instead of
         * fetching it from a source. When both data and source are provided, the component
         * will use the source to fetch data only if the data array is empty.
         *
         * @type {KeyValue[] | undefined}
         * @default undefined
         * @memberOf ListComponent
         */
        this.data = undefined;
        /**
         * @description The starting index for data fetching.
         * @summary Specifies the index from which to start fetching data. This is used
         * for pagination and infinite scrolling to determine which subset of data to load.
         *
         * @type {number}
         * @default 0
         * @memberOf ListComponent
         */
        this.start = 0;
        /**
         * @description The number of items to fetch per page or load operation.
         * @summary Determines how many items are loaded at once during pagination or
         * infinite scrolling. This affects the size of data chunks requested from the source.
         *
         * @type {number}
         * @default 10
         * @memberOf ListComponent
         */
        this.limit = 10;
        /**
         * @description Controls whether more data can be loaded.
         * @summary When set to true, the component will allow loading additional data
         * through infinite scrolling or pagination. When false, the component will not
         * attempt to load more data beyond what is initially displayed.
         *
         * @type {StringOrBoolean}
         * @default true
         * @memberOf ListComponent
         */
        this.loadMoreData = true;
        /**
         * @description The style of dividing lines between list items.
         * @summary Determines how dividing lines appear between list items. Options include:
         * - "inset": Lines are inset from the edges
         * - "full": Lines extend the full width
         * - "none": No dividing lines
         *
         * @type {"inset" | "full" | "none"}
         * @default "full"
         * @memberOf ListComponent
         */
        this.lines = "full";
        /**
         * @description Controls whether the list has inset styling.
         * @summary When set to true, the list will have inset styling with rounded corners
         * and margin around the edges. This creates a card-like appearance for the list.
         *
         * @type {StringOrBoolean}
         * @default false
         * @memberOf ListComponent
         */
        this.inset = false;
        /**
         * @description The threshold for triggering infinite scroll loading.
         * @summary Specifies how close to the bottom of the list the user must scroll
         * before the component triggers loading of additional data. This is expressed
         * as a percentage of the list height.
         *
         * @type {string}
         * @default "15%"
         * @memberOf ListComponent
         */
        this.scrollThreshold = "15%";
        /**
         * @description The position where new items are added during infinite scrolling.
         * @summary Determines whether new items are added to the top or bottom of the list
         * when loading more data through infinite scrolling.
         *
         * @type {"bottom" | "top"}
         * @default "bottom"
         * @memberOf ListComponent
         */
        this.scrollPosition = "bottom";
        /**
         * @description Controls the visibility of the pull-to-refresh feature.
         * @summary When set to true, enables the pull-to-refresh functionality that allows
         * users to refresh the list data by pulling down from the top of the list.
         *
         * @type {StringOrBoolean}
         * @default true
         * @memberOf ListComponent
         */
        this.showRefresher = true;
        /**
         * @description The type of spinner to display during loading operations.
         * @summary Specifies the visual style of the loading spinner shown during data
         * fetching operations. Uses Ionic's predefined spinner types.
         *
         * @type {SpinnerTypes}
         * @default "circular"
         * @memberOf ListComponent
         */
        this.loadingSpinner = "circular";
        // /**
        //  * @description Query parameters for data fetching.
        //  * @summary Specifies additional query parameters to use when fetching data from
        //  * the source. This can be provided as a string (JSON) or a direct object.
        //  *
        //  * @type {string | KeyValue | undefined}
        //  * @memberOf ListComponent
        //  */
        // @Input()
        // query?: string | KeyValue;
        /**
         * @description Controls whether the filtering functionality is enabled.
         * @summary When set to true, enables the filter component that allows users to create
         * complex search criteria with multiple field filters, conditions, and values.
         * When false, disables the filter interface entirely.
         *
         * @type {StringOrBoolean}
         * @default true
         * @memberOf ListComponent
         */
        this.enableFilter = true;
        /**
         * @description Sorting parameters for data fetching.
         * @summary Specifies how the fetched data should be sorted. This can be provided
         * as a string (field name with optional direction) or a direct object.
         *
         * @type {string | KeyValue | undefined}
         * @memberOf ListComponent
         */
        this.sortDirection = OrderDirection.DSC;
        /**
         * @description Controls whether sorting functionality is disabled.
         * @summary When set to true, disables the sort controls and prevents users from
         * changing the sort order or field. The list will maintain its default or
         * programmatically set sort configuration without user interaction.
         *
         * @type {StringOrBoolean}
         * @default false
         * @memberOf ListComponent
         */
        this.disableSort = false;
        /**
         * @description Icon to display when the list is empty.
         * @summary Specifies the icon shown in the empty state when no data is available.
         * This can be any icon name supported by the application's icon system.
         *
         * @type {string | undefined}
         * @default 'ti-database-exclamation'
         * @memberOf ListComponent
         */
        this.emptyIcon = 'ti-database-exclamation';
        /**
         * @description Configuration for the empty state display.
         * @summary Customizes how the empty state is displayed when no data is available.
         * This includes the title, subtitle, button text, icon, and navigation link.
         *
         * @type {Partial<IListEmptyResult>}
         * @default {
         *   title: 'empty.title',
         *   subtitle: 'empty.subtitle',
         *   showButton: false,
         *   icon: 'alert-circle-outline',
         *   buttonText: 'locale.empty.button',
         *   link: ''
         * }
         * @memberOf ListComponent
         */
        this.empty = {
            title: 'empty.title',
            subtitle: 'empty.subtitle',
            showButton: false,
            icon: 'alert-circle-outline',
            buttonText: 'locale.empty.button',
            link: ''
        };
        /**
         * @description The current page number in paginated mode.
         * @summary Tracks which page is currently being displayed when the component
         * is in paginated mode. This is used for pagination controls and data fetching.
         *
         * @type {number}
         * @default 1
         * @memberOf ListComponent
         */
        this.page = 1;
        /**
         * @description Indicates whether a refresh operation is in progress.
         * @summary When true, the component is currently fetching new data. This is used
         * to control loading indicators and prevent duplicate refresh operations from
         * being triggered simultaneously.
         *
         * @type {boolean}
         * @default false
         * @memberOf ListComponent
         */
        this.refreshing = false;
        /**
         * @description Array used for rendering skeleton loading placeholders.
         * @summary Contains placeholder items that are displayed during data loading.
         * The length of this array determines how many skeleton items are shown.
         *
         * @type {string[]}
         * @default new Array(2)
         * @memberOf ListComponent
         */
        this.skeletonData = new Array(2);
        /**
         * @description The last page number that was displayed.
         * @summary Keeps track of the previously displayed page number, which is useful
         * for handling navigation and search operations in paginated mode.
         *
         * @type {number}
         * @default 1
         * @memberOf ListComponent
         */
        this.lastPage = 1;
        /**
         * @description Event emitter for refresh operations.
         * @summary Emits an event when the list data is refreshed, either through pull-to-refresh
         * or programmatic refresh. The event includes the refreshed data and component information.
         *
         * @type {EventEmitter<BaseCustomEvent>}
         * @memberOf ListComponent
         */
        this.refreshEvent = new EventEmitter();
        /**
         * @description Event emitter for item click interactions.
         * @summary Emits an event when a list item is clicked. The event includes the data
         * of the clicked item, allowing parent components to respond to the interaction.
         *
         * @type {EventEmitter<KeyValue>}
         * @memberOf ListComponent
         */
        this.clickEvent = new EventEmitter();
        /**
         * @description Subject for debouncing click events.
         * @summary Uses RxJS Subject to collect click events and emit them after a debounce
         * period. This prevents multiple rapid clicks from triggering multiple events.
         *
         * @private
         * @type {Subject<CustomEvent | ListItemCustomEvent | RendererCustomEvent>}
         * @memberOf ListComponent
         */
        this.clickItemSubject = new Subject();
        /**
         * @description Subject for debouncing repository observation events.
         * @summary RxJS Subject that collects repository change events and emits them after
         * a debounce period. This prevents multiple rapid repository changes from triggering
         * multiple list refresh operations, improving performance and user experience.
         *
         * @private
         * @type {Subject<any>}
         * @memberOf ListComponent
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.observerSubjet = new Subject();
        /**
         * @description Observer object for repository change notifications.
         * @summary Implements the Observer interface to receive notifications when the
         * underlying data repository changes. This enables automatic list updates when
         * data is created, updated, or deleted through the repository.
         *
         * @private
         * @type {Observer}
         * @memberOf ListComponent
         */
        this.observer = { refresh: async (...args) => this.observeRepository(...args) };
    }
    /**
     * @description Initializes the component after Angular sets the input properties.
     * @summary Sets up the component by initializing event subscriptions, processing boolean
     * inputs, and loading the initial data. This method prepares the component for user
     * interaction by ensuring all properties are properly initialized and data is loaded.
     *
     * @returns {Promise<void>}
     *
     * @mermaid
     * sequenceDiagram
     *   participant A as Angular Lifecycle
     *   participant L as ListComponent
     *   participant D as Data Source
     *
     *   A->>L: ngOnInit()
     *   L->>L: Set up click event debouncing
     *   L->>L: Process boolean inputs
     *   L->>L: Configure component based on inputs
     *   L->>L: refresh()
     *   L->>D: Request initial data
     *   D-->>L: Return data
     *   L->>L: Process and display data
     *   L->>L: Configure empty state if needed
     *   L->>L: initialize()
     *
     * @memberOf ListComponent
     */
    async ngOnInit() {
        this.clickItemSubject.pipe(debounceTime(100)).subscribe(event => this.clickEventEmit(event));
        this.observerSubjet.pipe(debounceTime(100)).subscribe(args => this.handleObserveEvent(args[0], args[1], args[2]));
        this.enableFilter = stringToBoolean(this.enableFilter);
        this.limit = Number(this.limit);
        this.start = Number(this.start);
        this.inset = stringToBoolean(this.inset);
        this.showRefresher = stringToBoolean(this.showRefresher);
        this.loadMoreData = stringToBoolean(this.loadMoreData);
        this.showSearchbar = stringToBoolean(this.showSearchbar);
        this.disableSort = stringToBoolean(this.disableSort);
        if (typeof this.item?.['tag'] === 'boolean' && this.item?.['tag'] === true)
            this.item['tag'] = ComponentsTagNames.LIST_ITEM;
        await this.refresh();
        if (this.operations.includes(OperationKeys.CREATE) && this.route)
            this.empty.link = `${this.route}/${OperationKeys.CREATE}`;
        this.initialize();
        if (this.model instanceof Model && this._repository)
            this._repository.observe(this.observer);
    }
    /**
     * @description Cleans up resources when the component is destroyed.
     * @summary Performs cleanup operations when the component is being removed from the DOM.
     * This includes clearing references to models and data to prevent memory leaks.
     *
     * @returns {void}
     * @memberOf ListComponent
     */
    ngOnDestroy() {
        if (this._repository)
            this._repository.unObserve(this.observer);
        this.data = this.model = this._repository = this.paginator = undefined;
    }
    /**
     * @description Handles repository observation events with debouncing.
     * @summary Processes repository change notifications and routes them appropriately.
     * For CREATE events with a UID, handles them immediately. For other events,
     * passes them to the debounced observer subject to prevent excessive updates.
     *
     * @param {...unknown[]} args - The repository event arguments including table, event type, and UID
     * @returns {Promise<void>}
     * @memberOf ListComponent
     */
    async observeRepository(...args) {
        const [table, event, uid] = args;
        if (event === OperationKeys.CREATE && !!uid)
            return this.handleObserveEvent(table, event, uid);
        return this.observerSubjet.next(args);
    }
    /**
     * @description Handles specific repository events and updates the list accordingly.
     * @summary Processes repository change events (CREATE, UPDATE, DELETE) and performs
     * the appropriate list operations. This includes adding new items, updating existing
     * ones, or removing deleted items from the list display.
     *
     * @param {string} table - The table/model name that changed
     * @param {OperationKeys} event - The type of operation (CREATE, UPDATE, DELETE)
     * @param {string | number} uid - The unique identifier of the affected item
     * @returns {Promise<void>}
     * @memberOf ListComponent
     */
    async handleObserveEvent(table, event, uid) {
        if (event === OperationKeys.CREATE) {
            if (uid) {
                await this.handleCreate(uid);
            }
            else {
                await this.refresh(true);
            }
        }
        else {
            if (event === OperationKeys.UPDATE)
                await this.handleUpdate(uid);
            if (event === OperationKeys.DELETE)
                this.handleDelete(uid);
            this.refreshEventEmit();
        }
    }
    /**
     * @description Function for tracking items in the list.
     * @summary Provides a tracking function for the `*ngFor` directive in the component template.
     * This function is used to identify and control the rendering of items in the list,
     * preventing duplicate or unnecessary rendering.
     *
     * The `trackItemFn` function takes two parameters: `index` (the index of the item in the list)
     * and `item` (the actual item from the list). It returns the tracking key, which in this case
     * is the union of the `uid` of the item with the model name.
     *
     * @param {number} index - The index of the item in the list.
  
     * @param {KeyValue | string | number} item - The actual item from the list.
     * @returns {string | number} The tracking key for the item.
     * @memberOf ListComponent
     */
    trackItemFn(index, item) {
        return `${item?.['uid'] || item?.[this.pk]}-${index}`;
    }
    /**
     * Handles the create event from the repository.
     *
     * @param {string | number} uid - The ID of the item to create.
     * @returns {Promise<void>} A promise that resolves when the item is created and added to the list.
     */
    async handleCreate(uid) {
        const result = await this._repository?.read(uid);
        const item = this.mapResults([result])[0];
        this.items = this.data = [item, ...this.items || []];
    }
    /**
     * @description Handles the update event from the repository.
     * @summary Updates the list item with the specified ID based on the new data.
     *
     * @param {string | number} uid - The ID of the item to update
     * @returns {Promise<void>}
     * @private
     * @memberOf ListComponent
     */
    async handleUpdate(uid) {
        const item = this.itemMapper(await this._repository?.read(uid) || {}, this.mapper);
        this.data = [];
        for (const key in this.items) {
            const child = this.items[key];
            if (child['uid'] === item['uid']) {
                this.items[key] = Object.assign({}, child, item);
                break;
            }
        }
        setTimeout(() => {
            this.data = [...this.items];
        }, 0);
    }
    /**
     * @description Removes an item from the list by ID.
     * @summary Filters out an item with the specified ID from the data array and
     * refreshes the list display. This is typically used after a delete operation.
     *
     * @param {string} uid - The ID of the item to delete
     * @param {string} pk - The primary key field name
     * @returns {Promise<void>}
     *
     * @memberOf ListComponent
     */
    handleDelete(uid, pk) {
        if (!pk)
            pk = this.pk;
        this.items = this.data?.filter((item) => item['uid'] !== uid) || [];
    }
    /**
     * @description Handles click events from list items.
     * @summary Listens for global ListItemClickEvent events and passes them to the
     * debounced click subject. This allows the component to respond to clicks on
     * list items regardless of where they originate from.
     *
     * @param {ListItemCustomEvent | RendererCustomEvent} event - The click event
     * @returns {void}
     *
     * @memberOf ListComponent
     */
    handleClick(event) {
        this.clickItemSubject.next(event);
    }
    /**
     * @description Handles search events from the search bar.
     * @summary Processes search queries from the search bar component, updating the
     * displayed data based on the search term. The behavior differs between infinite
     * and paginated modes to provide the best user experience for each mode.
     *
     * @param {string | undefined} value - The search term or undefined to clear search
     * @returns {Promise<void>}
     *
     * @mermaid
     * flowchart TD
     *   A[Search Event] --> B{Type is Infinite?}
     *   B -->|Yes| C[Disable loadMoreData]
     *   B -->|No| D[Enable loadMoreData]
     *   C --> E{Search value undefined?}
     *   E -->|Yes| F[Enable loadMoreData]
     *   E -->|No| G[Store search value]
     *   D --> G
     *   F --> H[Reset page to 1]
     *   G --> I[Refresh data]
     *   H --> I
     *
     * @memberOf ListComponent
     */
    async handleSearch(value) {
        if (this.type === ListComponentsTypes.INFINITE) {
            this.loadMoreData = false;
            if (value === undefined) {
                this.loadMoreData = true;
                this.page = 1;
            }
            this.searchValue = value;
            await this.refresh(true);
        }
        else {
            this.loadMoreData = true;
            this.searchValue = value;
            if (value === undefined)
                this.page = this.lastPage;
            await this.refresh(true);
        }
    }
    /**
     * @description Handles filter events from the filter component.
     * @summary Processes filter queries from the filter component and applies them
     * to the list data. This method acts as a bridge between the filter component
     * and the search functionality, converting filter queries into search operations.
     *
     * @param {IFilterQuery | undefined} value - The filter query object or undefined to clear filters
     * @returns {Promise<void>}
     * @memberOf ListComponent
     */
    async handleFilter(value) {
        await this.handleSearch(value);
    }
    /**
     * @description Clears the current search and resets the list.
     * @summary Convenience method that clears the search by calling handleSearch
     * with undefined. This resets the list to show all data without filtering.
     *
     * @returns {Promise<void>}
     * @memberOf ListComponent
     */
    async clearSearch() {
        await this.handleSearch(undefined);
    }
    /**
     * @description Emits a refresh event with the current data.
     * @summary Creates and emits a refresh event containing the current list data.
     * This notifies parent components that the list data has been refreshed.
     *
     * @param {KeyValue[]} [data] - Optional data to include in the event
     * @returns {void}
     *
     * @memberOf ListComponent
     */
    refreshEventEmit(data) {
        if (!data)
            data = this.items;
        this.skeletonData = new Array(data?.length || 2);
        this.refreshEvent.emit({
            name: EventConstants.REFRESH,
            data: data || [],
            component: this.componentName
        });
    }
    /**
     * @description Emits a click event for a list item.
     * @summary Processes and emits a click event when a list item is clicked.
     * This extracts the relevant data from the event and passes it to parent components.
     *
     * @private
     * @param {ListItemCustomEvent | RendererCustomEvent} event - The click event
     * @returns {void}
     *
     * @memberOf ListComponent
     */
    clickEventEmit(event) {
        this.clickEvent.emit(event);
    }
    /**
     * @description Refreshes the list data from the configured source.
     * @summary This method handles both initial data loading and subsequent refresh operations,
     * including pull-to-refresh and infinite scrolling. It manages the data fetching process,
     * updates the component's state, and handles pagination or infinite scrolling logic based
     * on the component's configuration.
     *
     * The method performs the following steps:
     * 1. Sets the refreshing flag to indicate a data fetch is in progress
     * 2. Calculates the appropriate start and limit values based on pagination settings
     * 3. Fetches data from the appropriate source (model or request)
     * 4. Updates the component's data and emits a refresh event
     * 5. Handles pagination or infinite scrolling state updates
     * 6. Completes any provided event (like InfiniteScrollCustomEvent)
     *
     * @param {InfiniteScrollCustomEvent | RefresherCustomEvent | boolean} event - The event that triggered the refresh,
     * or a boolean flag indicating if this is a forced refresh
     * @returns {Promise<void>} A promise that resolves when the refresh operation is complete
     *
     * @mermaid
     * sequenceDiagram
     *   participant L as ListComponent
     *   participant D as Data Source
     *   participant E as Event System
     *
     *   L->>L: refresh(event)
     *   L->>L: Set refreshing flag
     *   L->>L: Calculate start and limit
     *   alt Using model
     *     L->>D: getFromModel(force, start, limit)
     *     D-->>L: Return data
     *   else Using request
     *     L->>D: getFromRequest(force, start, limit)
     *     D-->>L: Return data
     *   end
     *   L->>E: refreshEventEmit()
     *   alt Infinite scrolling mode
     *     L->>L: Check if reached last page
     *     alt Last page reached
     *       L->>L: Complete scroll event
     *       L->>L: Disable loadMoreData
     *     else More pages available
     *       L->>L: Increment page number
     *       L->>L: Complete scroll event after delay
     *     end
     *   else Paginated mode
     *     L->>L: Clear refreshing flag after delay
     *   end
     *
     * @memberOf ListComponent
     */
    async refresh(event = false) {
        //  if(typeof force !== 'boolean' && force.type === EventConstants.BACK_BUTTON_NAVIGATION) {
        //    const {refresh} = (force as CustomEvent).detail;
        //    if(!refresh)
        //      return false;
        //  }
        this.refreshing = true;
        const start = this.page > 1 ? (this.page - 1) * this.limit : this.start;
        const limit = (this.page * (this.limit > 12 ? 12 : this.limit));
        this.data = !this.model ?
            await this.getFromRequest(!!event, start, limit)
            : await this.getFromModel(!!event);
        this.refreshEventEmit();
        if (this.type === ListComponentsTypes.INFINITE) {
            if (this.page === this.pages) {
                if (event?.target)
                    event.target.complete();
                this.loadMoreData = false;
            }
            else {
                this.page += 1;
                this.refreshing = false;
                setTimeout(() => {
                    if (event?.target && event?.type !== EventConstants.BACK_BUTTON_NAVIGATION)
                        event.target.complete();
                }, 200);
            }
        }
        else {
            setTimeout(() => {
                this.refreshing = false;
            }, 200);
        }
    }
    /**
   * @description Handles pagination events from the pagination component.
   * @summary Processes pagination events by updating the current page number and
   * refreshing the list data to display the selected page. This method is called
   * when a user interacts with the pagination controls to navigate between pages.
   *
   * @param {PaginationCustomEvent} event - The pagination event containing page information
   * @returns {void}
   *
   * @memberOf ListComponent
   */
    handlePaginate(event) {
        const { page } = event.data;
        this.page = page;
        this.refresh(true);
    }
    /**
     * @description Handles pull-to-refresh events from the refresher component.
     * @summary Processes refresh events triggered by the user pulling down on the list
     * or by programmatic refresh requests. This method refreshes the list data and
     * completes the refresher animation when the data is loaded.
     *
     * @param {InfiniteScrollCustomEvent | CustomEvent} [event] - The refresh event
     * @returns {Promise<void>} A promise that resolves when the refresh operation is complete
     *
     * @memberOf ListComponent
     */
    async handleRefresh(event) {
        await this.refresh(event || true);
        if (event instanceof CustomEvent)
            setTimeout(() => {
                // Any calls to load data go here
                event.target.complete();
            }, 400);
    }
    /**
     * @description Filters data based on a search string.
     * @summary Processes the current data array to find items that match the provided
     * search string. This uses the arrayQueryByString utility to perform the filtering
     * across all properties of the items.
     *
     * @param {KeyValue[]} results - The array of items to search through
     * @param {string} search - The search string to filter by
     * @returns {KeyValue[]} A promise that resolves to the filtered array of items
     *
     * @memberOf ListComponent
     */
    parseSearchResults(results, search) {
        return results.filter((item) => Object.values(item).some(value => value.toString().toLowerCase().includes(search?.toLowerCase())));
    }
    /**
     * @description Fetches data from a request source.
     * @summary Retrieves data from the configured source function or URL, processes it,
     * and updates the component's data state. This method handles both initial data loading
     * and subsequent refresh operations when using an external data source rather than a model.
     *
     * @param {boolean} force - Whether to force a refresh even if data already exists
     * @param {number} start - The starting index for pagination
     * @param {number} limit - The maximum number of items to retrieve
     * @returns {Promise<KeyValue[]>} A promise that resolves to the fetched data
     *
     * @memberOf ListComponent
     */
    async getFromRequest(force = false, start, limit) {
        let request = [];
        if (!this.data?.length || force || this.searchValue?.length || !!this.searchValue) {
            // (self.data as ListItem[]) = [];
            if (!this.searchValue?.length && !this.searchValue) {
                if (!this.source && !this.data?.length) {
                    this.logger.info('No data and source passed to infinite list');
                    return [];
                }
                if (this.source instanceof Function)
                    request = await this.source();
                if (!Array.isArray(request))
                    request = request?.['response']?.['data'] || request?.['results'] || [];
                this.data = [...await this.parseResult(request)];
                if (this.data?.length)
                    this.items = this.type === ListComponentsTypes.INFINITE ?
                        (this.items || []).concat([...this.data.slice(start, limit)]) : [...request.slice(start, limit)];
            }
            else {
                this.data = this.parseSearchResults(this.data, this.searchValue);
                this.items = this.data;
            }
        }
        if (this.loadMoreData && this.type === ListComponentsTypes.PAGINATED)
            this.getMoreData(this.data?.length || 0);
        return this.data || [];
    }
    /**
     * @description Fetches data from a model source.
     * @summary Retrieves data from the configured model using its pagination or find methods,
     * processes it, and updates the component's data state. This method handles both initial
     * data loading and subsequent refresh operations when using a model as the data source.
     *
     * @param {boolean} force - Whether to force a refresh even if data already exists
     * @param {number} start - The starting index for pagination
     * @param {number} limit - The maximum number of items to retrieve
     * @returns {Promise<KeyValue[]>} A promise that resolves to the fetched data
     *
     * @memberOf ListComponent
     */
    async getFromModel(force = false) {
        let data = [...this.data || []];
        let request = [];
        // getting model repository
        if (!this._repository)
            this._repository = this.repository;
        const repo = this._repository;
        if (!this.data?.length || force || this.searchValue?.length || !!this.searchValue) {
            try {
                if (!this.searchValue?.length && !this.searchValue) {
                    this.data = [];
                    // const rawQuery = this.parseQuery(self.model as Repository<Model>, start, limit);
                    // request = this.parseResult(await (this.model as any)?.paginate(start, limit));
                    if (!this.paginator) {
                        this.paginator = await repo
                            .select()
                            .orderBy([this.pk, this.sortDirection])
                            .paginate(this.limit);
                    }
                    request = await this.parseResult(this.paginator);
                }
                else {
                    if (!this.indexes)
                        this.indexes = (Object.values(this.mapper) || [this.pk]);
                    const condition = this.parseConditions(this.searchValue);
                    request = await this.parseResult(await repo.query(condition, (this.sortBy || this.pk), this.sortDirection));
                    data = [];
                }
                data = this.type === ListComponentsTypes.INFINITE ? [...(data).concat(request)] : [...request];
            }
            catch (error) {
                this.logger.error(error?.message || `Unable to find ${this.model} on registry. Return empty array from component`);
            }
        }
        if (data?.length) {
            if (this.searchValue) {
                this.items = [...data];
                if (this.items?.length <= this.limit)
                    this.loadMoreData = false;
            }
            else {
                this.items = [...data];
            }
        }
        if (this.type === ListComponentsTypes.PAGINATED && this.paginator)
            this.getMoreData(this.paginator.total);
        return data || [];
    }
    /**
     * @description Converts search values or filter queries into database conditions.
     * @summary Transforms search input or complex filter queries into Condition objects
     * that can be used for database querying. Handles both simple string/number searches
     * across indexed fields and complex filter queries with multiple criteria.
     *
     * For simple searches (string/number):
     * - Creates conditions that search across all indexed fields
     * - Uses equality for numeric values and regex for string values
     * - Combines conditions with OR logic to search multiple fields
     *
     * For complex filter queries:
     * - Processes each filter item with its specific condition type
     * - Supports Equal, Not Equal, Contains, Not Contains, Greater Than, Less Than
     * - Updates sort configuration based on the filter query
     * - Combines multiple filter conditions with OR logic
     *
     * @param {string | number | IFilterQuery} value - The search value or filter query object
     * @returns {Condition<Model>} A Condition object for database querying
     * @memberOf ListComponent
     */
    parseConditions(value) {
        let _condition;
        if (typeof value === Primitives.STRING || typeof value === Primitives.NUMBER) {
            _condition = Condition.attribute(this.pk).eq(!isNaN(value) ? Number(value) : value);
            for (const index of this.indexes) {
                if (index === this.pk)
                    continue;
                let orCondition;
                if (!isNaN(value)) {
                    orCondition = Condition.attribute(index).eq(Number(value));
                }
                else {
                    orCondition = Condition.attribute(index).regexp(value);
                }
                _condition = _condition.or(orCondition);
            }
        }
        else {
            const { query, sort } = value;
            _condition = Condition.attribute(this.pk).dif('null');
            if (query?.length)
                _condition = undefined;
            (query || []).forEach((item) => {
                const { value, condition, index } = item;
                let val = value;
                if (index === this.pk || !isNaN(val))
                    val = Number(val);
                let orCondition;
                switch (condition) {
                    case "Equal":
                        orCondition = Condition.attribute(index).eq(val);
                        break;
                    case "Not Equal":
                        orCondition = Condition.attribute(index).dif(val);
                        break;
                    case "Not Contains":
                        orCondition = !Condition.attribute(index).regexp(new RegExp(`^(?!.*${val}).*$`));
                        break;
                    case "Contains":
                        orCondition = Condition.attribute(index).regexp(val);
                        break;
                    case "Greater Than":
                        orCondition = Condition.attribute(index).gte(val);
                        break;
                    case "Less Than":
                        orCondition = Condition.attribute(index).lte(val);
                        break;
                }
                _condition = (!_condition ?
                    orCondition : _condition.and(orCondition));
            });
            this.sortBy = sort?.value || this.pk;
            this.sortDirection = sort?.direction || this.sortDirection;
        }
        return _condition;
    }
    /**
     * @description Processes query results into a standardized format.
     * @summary Handles different result formats from various data sources, extracting
     * pagination information when available and applying any configured data mapping.
     * This ensures consistent data structure regardless of the source.
     *
     * @protected
     * @param {KeyValue[] | Paginator} result - The raw query result
     * @returns {KeyValue[]} The processed array of items
     *
     * @memberOf ListComponent
     */
    async parseResult(result) {
        if (!Array.isArray(result) && ('page' in result && 'total' in result)) {
            const paginator = result;
            result = await paginator.page(this.page);
            // TODO: Chage for result.total;
            this.getMoreData(paginator.total);
        }
        else {
            this.getMoreData(result?.length || 0);
        }
        return (Object.keys(this.mapper || {}).length) ?
            this.mapResults(result) : result;
    }
    /**
     * @description Updates pagination state based on data length.
     * @summary Calculates whether more data is available and how many pages exist
     * based on the total number of items and the configured limit per page.
     * This information is used to control pagination UI and infinite scrolling behavior.
     *
     * @param {number} length - The total number of items available
     * @returns {void}
     *
     * @memberOf ListComponent
     */
    getMoreData(length) {
        if (this.type === ListComponentsTypes.INFINITE) {
            if (this.paginator)
                length = length * this.limit;
            if (length <= this.limit) {
                this.loadMoreData = false;
            }
            else {
                this.pages = Math.floor(length / this.limit);
                if ((this.pages * this.limit) < length)
                    this.pages += 1;
                if (this.pages === 1)
                    this.loadMoreData = false;
            }
        }
        else {
            this.pages = length;
            if (this.pages === 1)
                this.loadMoreData = false;
        }
    }
    /**
     * @description Maps a single item using the configured mapper.
     * @summary Transforms a data item according to the mapping configuration,
     * extracting nested properties and formatting values as needed. This allows
     * the component to display data in a format different from how it's stored.
     *
     * @protected
     * @param {KeyValue} item - The item to map
     * @param {KeyValue} mapper - The mapping configuration
     * @param {KeyValue} [props] - Additional properties to include
     * @returns {KeyValue} The mapped item
     *
     * @memberOf ListComponent
     */
    itemMapper(item, mapper, props) {
        return Object.entries(mapper).reduce((accum, [key, value]) => {
            const arrayValue = value.split('.');
            if (!value) {
                accum[key] = value;
            }
            else {
                if (arrayValue.length === 1) {
                    value = item?.[value] || value;
                    if (isValidDate(value))
                        value = `${formatDate(value)}`;
                    accum[key] = value;
                }
                else {
                    let val;
                    for (const _value of arrayValue)
                        val = !val
                            ? item[_value]
                            : (typeof val === 'string' ? JSON.parse(val) : val)[_value];
                    if (isValidDate(new Date(val)))
                        val = `${formatDate(val)}`;
                    accum[key] = val === null || val === undefined ? value : val;
                }
            }
            return Object.assign({}, props || {}, accum);
        }, {});
    }
    /**
     * @description Maps all result items using the configured mapper.
     * @summary Applies the itemMapper to each item in the result set, adding
     * common properties like operations and route information. This transforms
     * the raw data into the format expected by the list item components.
     *
     * @param {KeyValue[]} data - The array of items to map
     * @returns {KeyValue[]} The array of mapped items
     *
     * @memberOf ListComponent
     */
    mapResults(data) {
        if (!data || !data.length)
            return [];
        // passing uid as prop to mapper
        this.mapper = { ...this.mapper, ...{ uid: this.pk } };
        const props = Object.assign({
            operations: this.operations,
            route: this.route,
            ...Object.keys(this.item).reduce((acc, key) => {
                acc[key] = this.item[key];
                return acc;
            }, {}),
            // ... (!this.item.render ? {} :  Object.keys(this.item).reduce((acc: KeyValue, key: string) => {
            //   acc[key] = this.item[key as keyof IListItemProp];
            //   return acc;
            // }, {}))
        });
        return data.reduce((accum, curr) => {
            accum.push({ ...this.itemMapper(curr, this.mapper, props), ...{ pk: this.pk } });
            return accum;
        }, []);
    }
    static { this.ɵfac = function ListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ListComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListComponent, selectors: [["ngx-decaf-list"]], hostBindings: function ListComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("ListItemClickEvent", function ListComponent_ListItemClickEvent_HostBindingHandler($event) { return ctx.handleClick($event); }, false, i0.ɵɵresolveWindow)("searchbarEvent", function ListComponent_searchbarEvent_HostBindingHandler($event) { return ctx.handleSearch($event); }, false, i0.ɵɵresolveWindow)("BackButtonNavigationEndEvent", function ListComponent_BackButtonNavigationEndEvent_HostBindingHandler($event) { return ctx.refresh($event); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { type: "type", translatable: "translatable", showSearchbar: "showSearchbar", data: "data", source: "source", start: "start", limit: "limit", loadMoreData: "loadMoreData", lines: "lines", inset: "inset", scrollThreshold: "scrollThreshold", scrollPosition: "scrollPosition", loadingText: "loadingText", showRefresher: "showRefresher", loadingSpinner: "loadingSpinner", enableFilter: "enableFilter", sortDirection: "sortDirection", sortBy: "sortBy", disableSort: "disableSort", emptyIcon: "emptyIcon", empty: "empty" }, outputs: { refreshEvent: "refreshEvent", clickEvent: "clickEvent" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], ngContentSelectors: _c0, decls: 4, vars: 3, consts: [["component", ""], ["slot", "fixed", 3, "pullFactor", "pullMin", "pullMax"], ["slot", "fixed", 3, "ionRefresh", "pullFactor", "pullMin", "pullMax"], [3, "model", "sortDirection", "disableSort"], [3, "emitEventToWindow", "debounce"], [3, "filterEvent", "searchEvent", "model", "sortDirection", "disableSort"], [3, "searchEvent", "emitEventToWindow", "debounce"], [3, "id", "inset", "lines"], [3, "tag", "globals"], [3, "listenEvent", "tag", "globals"], [3, "totalPages", "current"], [3, "class", "position", "threshold"], [3, "clickEvent", "totalPages", "current"], [3, "ionInfinite", "position", "threshold"], [3, "loadingSpinner", "loadingText"], [4, "ngFor", "ngForOf"], ["slot", "start"], [3, "animated"], [1, "date", 2, "width", "20%"], [3, "title", "subtitle", "buttonText", "buttonLink"], ["icon", "search-outline", "ngClass", "empty-search", "title", "search.title", "subtitle", "search.subtitle", 3, "translatable", "searchValue"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, ListComponent_Conditional_0_Template, 2, 3, "ion-refresher", 1)(1, ListComponent_Conditional_1_Template, 2, 1)(2, ListComponent_Conditional_2_Template, 5, 5)(3, ListComponent_Conditional_3_Template, 2, 1);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.showRefresher ? 0 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showSearchbar ? 1 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional((ctx.data == null ? null : ctx.data.length) ? 2 : 3);
        } }, dependencies: [ForAngularModule, i1.IonText, i2.NgClass, i2.NgForOf, i3.TranslatePipe, IonRefresher,
            PaginationComponent,
            IonList,
            IonItem,
            IonThumbnail,
            IonSkeletonText,
            IonLabel,
            IonRefresherContent,
            IonInfiniteScroll,
            IonInfiniteScrollContent,
            SearchbarComponent,
            EmptyStateComponent,
            FilterComponent,
            ComponentRendererComponent], styles: ["ion-infinite-scroll-content[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%]{--color: var(--dcf-color-primary)}@media (max-width: 768px){#end[_ngcontent-%COMP%], [slot=end][_ngcontent-%COMP%]{display:none!important}}"] }); }
};
ListComponent = __decorate([
    Dynamic(),
    __metadata("design:paramtypes", [])
], ListComponent);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListComponent, [{
        type: Component,
        args: [{ selector: 'ngx-decaf-list', standalone: true, imports: [
                    ForAngularModule,
                    IonRefresher,
                    IonLoading,
                    PaginationComponent,
                    IonList,
                    IonItem,
                    IonThumbnail,
                    IonSkeletonText,
                    IonLabel,
                    IonText,
                    IonRefresherContent,
                    IonInfiniteScroll,
                    IonInfiniteScrollContent,
                    IonThumbnail,
                    IonSkeletonText,
                    SearchbarComponent,
                    EmptyStateComponent,
                    ListItemComponent,
                    FilterComponent,
                    ComponentRendererComponent
                ], template: "\n@if(showRefresher) {\n  <ion-refresher slot=\"fixed\" [pullFactor]=\"1\" [pullMin]=\"100\" [pullMax]=\"200\" (ionRefresh)=\"handleRefresh($event)\">\n    <ion-refresher-content />\n  </ion-refresher>\n}\n\n@if(showSearchbar) {\n  @if(model && enableFilter) {\n    <ngx-decaf-filter\n      [model]=\"model\"\n      [sortDirection]=\"sortDirection\"\n      [disableSort]=\"disableSort\"\n      (filterEvent)=\"handleFilter($event)\"\n      (searchEvent)=\"handleSearch($event)\"\n    />\n  } @else {\n    <ngx-decaf-searchbar [emitEventToWindow]=\"false\" [debounce]=\"500\" (searchEvent)=\"handleSearch($event)\" />\n  }\n}\n\n@if(data?.length) {\n  <ion-list [id]=\"uid\" [inset]=\"inset\" [lines]=\"lines\" #component>\n    @if(item?.tag) {\n      @for(child of items; track trackItemFn($index, child)) {\n        <ngx-decaf-component-renderer\n          [tag]=\"item.tag\"\n          (listenEvent)=\"handleEvent($event)\"\n          [globals]='{\n            item: child,\n            mapper: mapper,\n            route: route\n          }'>\n          </ngx-decaf-component-renderer>\n        }\n    } @else {\n      <ng-content></ng-content>\n    }\n  </ion-list>\n\n  @if(loadMoreData) {\n    @if(pages > 0 && type === 'paginated' && !searchValue?.length) {\n      <ngx-decaf-pagination\n        [totalPages]=\"pages\"\n        [current]=\"page\"\n        (clickEvent)=\"handlePaginate($event)\"\n      />\n\n    } @else {\n      <ion-infinite-scroll\n        [class]=\"searchValue?.length ? 'dcf-hidden' : ''\"\n        [position]=\"scrollPosition\"\n        [threshold]=\"scrollThreshold\"\n        (ionInfinite)=\"handleRefresh($event)\">\n        <ion-infinite-scroll-content [loadingSpinner]=\"loadingSpinner\" [loadingText]=\"loadingText\" />\n      </ion-infinite-scroll>\n    }\n  }\n} @else {\n  @if(refreshing) {\n    <ion-item *ngFor=\"let skl of skeletonData\">\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\n        <ion-text class=\"date\" style=\"width: 20%;\"><ion-skeleton-text [animated]=\"true\"></ion-skeleton-text></ion-text>\n      </ion-label>\n    </ion-item>\n  } @else {\n    @if(!searchValue?.length) {\n      <ngx-decaf-empty-state\n        [title]=\"(locale + '.'+ empty.title) | translate\"\n        [subtitle]=\"(locale + '.'+ empty.subtitle) | translate\"\n        [buttonText]=\"empty.showButton ? (locale + '.'+ empty.button | translate) : ''\"\n        [buttonLink]=\"empty.showButton ? empty.route : ''\"\n      />\n    } @else {\n      <ngx-decaf-empty-state\n        icon=\"search-outline\"\n        ngClass=\"empty-search\"\n        [translatable]=\"true\"\n        title=\"search.title\"\n        subtitle=\"search.subtitle\"\n        [searchValue]=\"searchValue\"\n      />\n    }\n  }\n}\n\n", styles: ["ion-infinite-scroll-content ion-spinner{--color: var(--dcf-color-primary)}@media (max-width: 768px){#end,[slot=end]{display:none!important}}\n"] }]
    }], () => [], { type: [{
            type: Input
        }], translatable: [{
            type: Input
        }], showSearchbar: [{
            type: Input
        }], data: [{
            type: Input
        }], source: [{
            type: Input
        }], start: [{
            type: Input
        }], limit: [{
            type: Input
        }], loadMoreData: [{
            type: Input
        }], lines: [{
            type: Input
        }], inset: [{
            type: Input
        }], scrollThreshold: [{
            type: Input
        }], scrollPosition: [{
            type: Input
        }], loadingText: [{
            type: Input
        }], showRefresher: [{
            type: Input
        }], loadingSpinner: [{
            type: Input
        }], enableFilter: [{
            type: Input
        }], sortDirection: [{
            type: Input
        }], sortBy: [{
            type: Input
        }], disableSort: [{
            type: Input
        }], emptyIcon: [{
            type: Input
        }], empty: [{
            type: Input
        }], refreshEvent: [{
            type: Output
        }], clickEvent: [{
            type: Output
        }], handleClick: [{
            type: HostListener,
            args: ['window:ListItemClickEvent', ['$event']]
        }], handleSearch: [{
            type: HostListener,
            args: ['window:searchbarEvent', ['$event']]
        }], refresh: [{
            type: HostListener,
            args: ['window:BackButtonNavigationEndEvent', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ListComponent, { className: "ListComponent", filePath: "components/list/list.component.ts", lineNumber: 146 }); })();

const Directives = [CollapsableDirective];
const Components = [
    ModelRendererComponent,
    ComponentRendererComponent,
    CrudFieldComponent,
    CrudFormComponent,
    EmptyStateComponent,
    ListComponent,
    ListItemComponent,
    SearchbarComponent,
    PaginationComponent,
    CrudFormComponent,
    FieldsetComponent,
    LayoutComponent,
    FilterComponent
];
class ForAngularComponentsModule {
    static { this.ɵfac = function ForAngularComponentsModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ForAngularComponentsModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ForAngularComponentsModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [Components, ForAngularModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ForAngularComponentsModule, [{
        type: NgModule,
        args: [{
                imports: [Components, Directives],
                declarations: [],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
                exports: [Components, Directives, ForAngularModule],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ForAngularComponentsModule, { imports: [ModelRendererComponent,
        ComponentRendererComponent,
        CrudFieldComponent,
        CrudFormComponent,
        EmptyStateComponent,
        ListComponent,
        ListItemComponent,
        SearchbarComponent,
        PaginationComponent,
        CrudFormComponent,
        FieldsetComponent,
        LayoutComponent,
        FilterComponent, CollapsableDirective], exports: [ModelRendererComponent,
        ComponentRendererComponent,
        CrudFieldComponent,
        CrudFormComponent,
        EmptyStateComponent,
        ListComponent,
        ListItemComponent,
        SearchbarComponent,
        PaginationComponent,
        CrudFormComponent,
        FieldsetComponent,
        LayoutComponent,
        FilterComponent, CollapsableDirective, ForAngularModule] }); })();

// Component exports

/**
 * @description Angular integration for the Decaf framework
 * @summary This module provides Angular components and services for integrating with the Decaf framework.
 * It includes components for rendering models, CRUD operations, and form handling, as well as
 * rendering engines and utility functions to facilitate Angular application development with Decaf.
 * @module for-angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularEngineKeys, BaseComponentProps, CollapsableDirective, ComponentRendererComponent, ComponentsTagNames, CrudFieldComponent, CrudFormComponent, CssClasses, DefaultFormReactiveOptions, Dynamic, DynamicModule, EmptyStateComponent, EventConstants, FieldsetComponent, FilterComponent, ForAngularComponentsModule, ForAngularModule, FormConstants, I18N_CONFIG_TOKEN, I18nLoader, I18nLoaderFactory, LayoutComponent, ListComponent, ListComponentsTypes, ListItemComponent, LoggerLevels, ModelRendererComponent, MultiI18nLoader, NgxBaseComponent, NgxCrudFormField, NgxFormService, NgxRenderingEngine, PaginationComponent, RouteDirections, SearchbarComponent, cleanSpaces, dataMapper, formatDate, generateRandomValue, getI18nLoaderFactoryProviderConfig, getInjectablesRegistry, getLocaleContext, getLocaleContextByKey, getLocaleFromClassName, getLocaleLanguage, getLogger, getOnWindow, getOnWindowDocument, getWindow, getWindowDocument, getWindowWidth, isDarkMode, isDevelopmentMode, isNotUndefined, isValidDate, itemMapper, parseToValidDate, removeFocusTrap, setOnWindow, stringToBoolean, windowEventEmitter };
//# sourceMappingURL=decaf-ts-for-angular.mjs.map
