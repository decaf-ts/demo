import { InjectablesRegistry } from '@decaf-ts/injectable-decorators';
import { KeyValue, StringOrBoolean } from '../engine/types';
import { FunctionLike } from '../engine/types';
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
export declare function getInjectablesRegistry(): InjectablesRegistry;
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
export declare function isDevelopmentMode(context?: string): boolean;
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
export declare function windowEventEmitter(name: string, detail: unknown, props?: object): void;
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
export declare function getOnWindowDocument(key: string): Document | undefined;
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
export declare function getWindowDocument(): Document | undefined;
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
export declare function getOnWindow(key: string): unknown | undefined;
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
export declare function setOnWindow(key: string, value: unknown): void;
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
export declare function getWindow(): Window & KeyValue;
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
export declare function getWindowWidth(): number;
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
export declare function isNotUndefined(prop: StringOrBoolean | undefined): boolean;
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
export declare function getLocaleFromClassName(instance: string | FunctionLike | KeyValue, suffix?: string): string;
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
export declare function getLocaleLanguage(): string;
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
export declare function generateRandomValue(length?: number, onlyNumbers?: boolean): string;
/**
 * Converts a string representation of a boolean or a boolean value to a boolean type.
 *
 * @export
 * @param {('true' | 'false' | boolean)} prop - The value to convert. Can be the string 'true', 'false', or a boolean.
 * @returns {boolean} The boolean representation of the input value. Returns true if the input is the string 'true' or boolean true, false otherwise.
 */
export declare function stringToBoolean(prop: 'true' | 'false' | boolean): boolean;
/**
 * Checks if a value is a valid Date object
 *
 * @param {(string | Date | number)} date - The value to check. Can be a Date object, a timestamp number, or a date string
 * @return {boolean} Returns true if the value is a valid Date object (not NaN), otherwise false
 */
export declare function isValidDate(date: string | Date | number): boolean;
/**
 * Formats a date into a localized string representation
 *
 * @param {(string | Date | number)} date - The date to format. Can be a Date object, a timestamp number, or a date string
 * @param {string} [locale] - The locale to use for formatting. If not provided, the system's locale will be used
 * @return {(Date | string)} A formatted date string in the format DD/MM/YYYY according to the specified locale,
 *                           or the original input as a string if the date is invalid
 */
export declare function formatDate(date: string | Date | number, locale?: string | undefined): Date | string;
/**
 * Attempts to parse a date string, Date object, or number into a valid Date object
 *
 * @param {(string | Date | number)} date - The date to parse. Can be a Date object, a timestamp number,
 *                                         or a date string in the format "DD/MM/YYYY HH:MM:SS:MS"
 * @return {(Date | null)} A valid Date object if parsing is successful, or null if the date is invalid
 *                         or doesn't match the expected format
 */
export declare function parseToValidDate(date: string | Date | number): Date | null;
/**
 * Maps an item object using a provided mapper object and optional additional properties.
 *
 * @param {KeyValue} item - The source object to be mapped.
 * @param {KeyValue} mapper - An object that defines the mapping rules. Keys represent the new property names,
 *                            and values represent the path to the corresponding values in the source object.
 * @param {KeyValue} [props] - Optional additional properties to be included in the mapped object.
 * @returns {KeyValue} A new object with properties mapped according to the mapper object and including any additional properties.
 */
export declare function itemMapper(item: KeyValue, mapper: KeyValue, props?: KeyValue): KeyValue;
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
export declare function dataMapper<T>(data: T[], mapper: KeyValue, props?: KeyValue): T[];
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
export declare function removeFocusTrap(): void;
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
export declare function cleanSpaces(value?: string, lowercase?: boolean): string;
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
export declare function isDarkMode(): Promise<boolean>;
//# sourceMappingURL=utils.d.ts.map