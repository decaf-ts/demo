import { isDevMode } from '@angular/core';
import { InjectableRegistryImp } from '@decaf-ts/injectable-decorators';
import { Primitives } from '@decaf-ts/decorator-validation';
import { getLogger } from '../for-angular.module';
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
export function getInjectablesRegistry() {
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
export function isDevelopmentMode(context = 'localhost') {
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
export function windowEventEmitter(name, detail, props) {
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
export function getOnWindowDocument(key) {
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
export function getWindowDocument() {
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
export function getOnWindow(key) {
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
export function setOnWindow(key, value) {
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
export function getWindow() {
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
export function getWindowWidth() {
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
export function isNotUndefined(prop) {
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
export function getLocaleFromClassName(instance, suffix) {
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
export function getLocaleLanguage() {
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
export function generateRandomValue(length = 8, onlyNumbers = false) {
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
export function stringToBoolean(prop) {
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
export function isValidDate(date) {
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
export function formatDate(date, locale) {
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
export function parseToValidDate(date) {
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
export function itemMapper(item, mapper, props) {
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
export function dataMapper(data, mapper, props) {
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
export function removeFocusTrap() {
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
export function cleanSpaces(value = "", lowercase = false) {
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
export async function isDarkMode() {
    const { matches } = getWindow().matchMedia('(prefers-color-scheme: dark)');
    return matches;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2hlbHBlcnMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUscUJBQXFCLEVBQXVCLE1BQU0saUNBQWlDLENBQUM7QUFDN0YsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRzVELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVsRCxJQUFJLGtCQUF1QyxDQUFDO0FBRTVDOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsTUFBTSxVQUFVLHNCQUFzQjtJQUNwQyxJQUFJLENBQUMsa0JBQWtCO1FBQ3JCLGtCQUFrQixHQUFHLElBQUkscUJBQXFCLEVBQUUsQ0FBQztJQUNuRCxPQUFPLGtCQUFrQixDQUFDO0FBQzVCLENBQUM7QUFFRDs7Ozs7Ozs7Ozs7O0dBWUc7QUFDSCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsVUFBa0IsV0FBVztJQUM3RCxJQUFJLENBQUMsT0FBTztRQUNWLE9BQU8sU0FBUyxFQUFFLENBQUM7SUFDckIsTUFBTSxHQUFHLEdBQUcsU0FBUyxFQUFFLENBQUM7SUFDeEIsT0FBTyxDQUNMLFNBQVMsRUFBRTtRQUNYLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxFQUFFLEtBQUssT0FBTyxDQUFDLFdBQVcsRUFBRTtRQUNqRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUMvQyxDQUFDO0FBQ0osQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDSCxNQUFNLFVBQVUsa0JBQWtCLENBQ2hDLElBQVksRUFDWixNQUFlLEVBQ2YsS0FBYztJQUVkLE1BQU0sSUFBSSxHQUFHLE1BQU0s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LE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1QsQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7R0FZRztBQUNILE1BQU0sVUFBVSxlQUFlO0lBQzdCLE1BQU0sR0FBRyxHQUFHLGlCQUFpQixFQUFFLENBQUM7SUFDaEMsSUFBRyxHQUFHLEVBQUUsYUFBYTtRQUNsQixHQUFHLENBQUMsYUFBNkIsRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUMvQyxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUNILE1BQU0sVUFBVSxXQUFXLENBQUMsUUFBZ0IsRUFBRSxFQUFFLFlBQXFCLEtBQUs7SUFDeEUsS0FBSyxHQUFHLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMvQyxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDakQsQ0FBQztBQUdEOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsTUFBTSxDQUFDLEtBQUssVUFBVSxVQUFVO0lBQzlCLE1BQU0sRUFBQyxPQUFPLEVBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUN6RSxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlUmVnaXN0cnlJbXAsIEluamVjdGFibGVzUmVnaXN0cnkgfSBmcm9tICdAZGVjYWYtdHMvaW5qZWN0YWJsZS1kZWNvcmF0b3JzJztcbmltcG9ydCB7IFByaW1pdGl2ZXMgfSBmcm9tICdAZGVjYWYtdHMvZGVjb3JhdG9yLXZhbGlkYXRpb24nO1xuaW1wb3J0IHsgS2V5VmFsdWUsIFN0cmluZ09yQm9vbGVhbiwgfSBmcm9tICcuLi9lbmdpbmUvdHlwZXMnO1xuaW1wb3J0IHsgRnVuY3Rpb25MaWtlIH0gZnJvbSAnLi4vZW5naW5lL3R5cGVzJztcbmltcG9ydCB7IGdldExvZ2dlciB9IGZyb20gJy4uL2Zvci1hbmd1bGFyLm1vZHVsZSc7XG5cbmxldCBpbmplY3RhYmxlUmVnaXN0cnk6IEluamVjdGFibGVzUmVnaXN0cnk7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFJldHJpZXZlcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBpbmplY3RhYmxlcyByZWdpc3RyeVxuICogQHN1bW1hcnkgVGhpcyBmdW5jdGlvbiBpbXBsZW1lbnRzIHRoZSBzaW5nbGV0b24gcGF0dGVybiBmb3IgdGhlIEluamVjdGFibGVzUmVnaXN0cnkuXG4gKiBJdCByZXR1cm5zIHRoZSBleGlzdGluZyByZWdpc3RyeSBpbnN0YW5jZSBpZiBvbmUgZXhpc3RzLCBvciBjcmVhdGVzIGEgbmV3IGluc3RhbmNlXG4gKiBpZiBub25lIGV4aXN0cy4gVGhlIHJlZ2lzdHJ5IGlzIHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIGluamVjdGFibGUgZGVwZW5kZW5jaWVzXG4gKiB0aHJvdWdob3V0IHRoZSBhcHBsaWNhdGlvbi5cbiAqXG4gKiBAcmV0dXJuIHtJbmplY3RhYmxlc1JlZ2lzdHJ5fSBUaGUgc2luZ2xldG9uIGluamVjdGFibGVzIHJlZ2lzdHJ5IGluc3RhbmNlXG4gKlxuICogQGZ1bmN0aW9uIGdldEluamVjdGFibGVzUmVnaXN0cnlcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Zm9yLWFuZ3VsYXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEluamVjdGFibGVzUmVnaXN0cnkoKTogSW5qZWN0YWJsZXNSZWdpc3RyeSB7XG4gIGlmICghaW5qZWN0YWJsZVJlZ2lzdHJ5KVxuICAgIGluamVjdGFibGVSZWdpc3RyeSA9IG5ldyBJbmplY3RhYmxlUmVnaXN0cnlJbXAoKTtcbiAgcmV0dXJuIGluamVjdGFibGVSZWdpc3RyeTtcbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyBpZiB0aGUgYXBwbGljYXRpb24gaXMgcnVubmluZyBpbiBkZXZlbG9wbWVudCBtb2RlXG4gKiBAc3VtbWFyeSBUaGlzIGZ1bmN0aW9uIGNoZWNrcyB3aGV0aGVyIHRoZSBhcHBsaWNhdGlvbiBpcyBjdXJyZW50bHkgcnVubmluZyBpbiBhIGRldmVsb3BtZW50XG4gKiBlbnZpcm9ubWVudC4gSXQgdXNlcyBBbmd1bGFyJ3MgaXNEZXZNb2RlKCkgZnVuY3Rpb24gYW5kIGFsc28gY2hlY2tzIHRoZSB3aW5kb3cgY29udGV4dFxuICogYW5kIGhvc3RuYW1lIGFnYWluc3QgdGhlIHByb3ZpZGVkIGNvbnRleHQgcGFyYW1ldGVyLiBUaGlzIGlzIHVzZWZ1bCBmb3IgZW5hYmxpbmdcbiAqIGRldmVsb3BtZW50LXNwZWNpZmljIGZlYXR1cmVzIG9yIGxvZ2dpbmcuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb250ZXh0PSdsb2NhbGhvc3QnXSAtIFRoZSBjb250ZXh0IHN0cmluZyB0byBjaGVjayBhZ2FpbnN0IHRoZSBjdXJyZW50IGVudmlyb25tZW50XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBhcHBsaWNhdGlvbiBpcyBydW5uaW5nIGluIGRldmVsb3BtZW50IG1vZGUsIGZhbHNlIG90aGVyd2lzZVxuICpcbiAqIEBmdW5jdGlvbiBpc0RldmVsb3BtZW50TW9kZVxuICogQG1lbWJlck9mIG1vZHVsZTpmb3ItYW5ndWxhclxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNEZXZlbG9wbWVudE1vZGUoY29udGV4dDogc3RyaW5nID0gJ2xvY2FsaG9zdCcpOiBib29sZWFuIHtcbiAgaWYgKCFjb250ZXh0KVxuICAgIHJldHVybiBpc0Rldk1vZGUoKTtcbiAgY29uc3Qgd2luID0gZ2V0V2luZG93KCk7XG4gIHJldHVybiAoXG4gICAgaXNEZXZNb2RlKCkgfHxcbiAgICB3aW4/LlsnZW52J10/LlsnQ09OVEVYVCddLnRvTG93ZXJDYXNlKCkgIT09IGNvbnRleHQudG9Mb3dlckNhc2UoKSB8fFxuICAgIHdpbj8uWydsb2NhdGlvbiddPy5ob3N0bmFtZT8uaW5jbHVkZXMoY29udGV4dClcbiAgKTtcbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gRGlzcGF0Y2hlcyBhIGN1c3RvbSBldmVudCB0byB0aGUgZG9jdW1lbnQgd2luZG93XG4gKiBAc3VtbWFyeSBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgYW5kIGRpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgdG8gdGhlIGJyb3dzZXIgd2luZG93LlxuICogSXQncyB1c2VmdWwgZm9yIGNyb3NzLWNvbXBvbmVudCBjb21tdW5pY2F0aW9uIG9yIGZvciB0cmlnZ2VyaW5nIGFwcGxpY2F0aW9uLXdpZGUgZXZlbnRzLlxuICogVGhlIGZ1bmN0aW9uIGFsbG93cyBzcGVjaWZ5aW5nIHRoZSBldmVudCBuYW1lLCBkZXRhaWwgZGF0YSwgYW5kIGFkZGl0aW9uYWwgZXZlbnQgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBjdXN0b20gZXZlbnQgdG8gZGlzcGF0Y2hcbiAqIEBwYXJhbSB7dW5rbm93bn0gZGV0YWlsIC0gVGhlIGRhdGEgdG8gaW5jbHVkZSBpbiB0aGUgZXZlbnQncyBkZXRhaWwgcHJvcGVydHlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcHJvcHNdIC0gT3B0aW9uYWwgYWRkaXRpb25hbCBwcm9wZXJ0aWVzIGZvciB0aGUgY3VzdG9tIGV2ZW50XG4gKiBAcmV0dXJuIHt2b2lkfVxuICpcbiAqIEBmdW5jdGlvbiB3aW5kb3dFdmVudEVtaXR0ZXJcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Zm9yLWFuZ3VsYXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdpbmRvd0V2ZW50RW1pdHRlcihcbiAgbmFtZTogc3RyaW5nLFxuICBkZXRhaWw6IHVua25vd24sXG4gIHByb3BzPzogb2JqZWN0XG4pOiB2b2lkIHtcbiAgY29uc3QgZGF0YSA9IE9iamVjdC5hc3NpZ24oXG4gICAge1xuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIGNvbXBvc2VkOiB0cnVlLFxuICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXG4gICAgICBkZXRhaWw6IGRldGFpbCxcbiAgICB9LFxuICAgIHByb3BzIHx8IHt9XG4gICk7XG4gIChnZXRXaW5kb3coKSBhcyBXaW5kb3cpLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KG5hbWUsIGRhdGEpKTtcbn1cbi8qKlxuICogQGRlc2NyaXB0aW9uIFJldHJpZXZlcyBhIHByb3BlcnR5IGZyb20gdGhlIHdpbmRvdydzIGRvY3VtZW50IG9iamVjdFxuICogQHN1bW1hcnkgVGhpcyBmdW5jdGlvbiBwcm92aWRlcyBhIHNhZmUgd2F5IHRvIGFjY2VzcyBwcm9wZXJ0aWVzIG9uIHRoZSB3aW5kb3cncyBkb2N1bWVudCBvYmplY3QuXG4gKiBJdCB1c2VzIHRoZSBnZXRXaW5kb3dEb2N1bWVudCBmdW5jdGlvbiB0byBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIGRvY3VtZW50LCB0aGVuIGFjY2Vzc2VzXG4gKiB0aGUgc3BlY2lmaWVkIHByb3BlcnR5LiBUaGlzIGlzIHVzZWZ1bCBmb3IgYnJvd3NlciBlbnZpcm9ubWVudCBpbnRlcmFjdGlvbnMgdGhhdCBuZWVkXG4gKiB0byBhY2Nlc3MgZG9jdW1lbnQgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IHRvIHJldHJpZXZlIGZyb20gdGhlIGRvY3VtZW50IG9iamVjdFxuICogQHJldHVybiB7YW55fSBUaGUgdmFsdWUgb2YgdGhlIHNwZWNpZmllZCBwcm9wZXJ0eSwgb3IgdW5kZWZpbmVkIGlmIHRoZSBkb2N1bWVudCBvciBwcm9wZXJ0eSBkb2Vzbid0IGV4aXN0XG4gKlxuICogQGZ1bmN0aW9uIGdldE9uV2luZG93RG9jdW1lbnRcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Zm9yLWFuZ3VsYXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE9uV2luZG93RG9jdW1lbnQoa2V5OiBzdHJpbmcpOiBEb2N1bWVudCB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IGRvYyA9IGdldFdpbmRvd0RvY3VtZW50KCk/LltrZXkgYXMga2V5b2YgRG9jdW1lbnRdO1xuICByZXR1cm4gZG9jIGluc3RhbmNlb2YgRG9jdW1lbnQgP1xuICAgIGRvYyA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gUmV0cmlldmVzIHRoZSBkb2N1bWVudCBvYmplY3QgZnJvbSB0aGUgd2luZG93XG4gKiBAc3VtbWFyeSBUaGlzIGZ1bmN0aW9uIHByb3ZpZGVzIGEgc2FmZSB3YXkgdG8gYWNjZXNzIHRoZSBkb2N1bWVudCBvYmplY3QgZnJvbSB0aGUgd2luZG93LlxuICogSXQgdXNlcyB0aGUgZ2V0T25XaW5kb3cgZnVuY3Rpb24gdG8gcmV0cmlldmUgdGhlICdkb2N1bWVudCcgcHJvcGVydHkgZnJvbSB0aGUgd2luZG93IG9iamVjdC5cbiAqIFRoaXMgaXMgdXNlZnVsIGZvciBicm93c2VyIGVudmlyb25tZW50IGludGVyYWN0aW9ucyB0aGF0IG5lZWQgYWNjZXNzIHRvIHRoZSBkb2N1bWVudC5cbiAqXG4gKiBAcmV0dXJuIHtEb2N1bWVudCB8IHVuZGVmaW5lZH0gVGhlIHdpbmRvdydzIGRvY3VtZW50IG9iamVjdCwgb3IgdW5kZWZpbmVkIGlmIGl0IGRvZXNuJ3QgZXhpc3RcbiAqXG4gKiBAZnVuY3Rpb24gZ2V0V2luZG93RG9jdW1lbnRcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Zm9yLWFuZ3VsYXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFdpbmRvd0RvY3VtZW50KCk6IERvY3VtZW50IHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGdldE9uV2luZG93KCdkb2N1bWVudCcpIGFzIERvY3VtZW50O1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBSZXRyaWV2ZXMgYSBwcm9wZXJ0eSBmcm9tIHRoZSB3aW5kb3cgb2JqZWN0XG4gKiBAc3VtbWFyeSBUaGlzIGZ1bmN0aW9uIHByb3ZpZGVzIGEgc2FmZSB3YXkgdG8gYWNjZXNzIHByb3BlcnRpZXMgb24gdGhlIHdpbmRvdyBvYmplY3QuXG4gKiBJdCB1c2VzIHRoZSBnZXRXaW5kb3cgZnVuY3Rpb24gdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSB3aW5kb3csIHRoZW4gYWNjZXNzZXNcbiAqIHRoZSBzcGVjaWZpZWQgcHJvcGVydHkuIFRoaXMgaXMgdXNlZnVsIGZvciBicm93c2VyIGVudmlyb25tZW50IGludGVyYWN0aW9ucyB0aGF0IG5lZWRcbiAqIHRvIGFjY2VzcyB3aW5kb3cgcHJvcGVydGllcyBvciBBUElzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdG8gcmV0cmlldmUgZnJvbSB0aGUgd2luZG93IG9iamVjdFxuICogQHJldHVybiB7dW5rbm93biB8IHVuZGVmaW5lZH0gVGhlIHZhbHVlIG9mIHRoZSBzcGVjaWZpZWQgcHJvcGVydHksIG9yIHVuZGVmaW5lZCBpZiB0aGUgd2luZG93IG9yIHByb3BlcnR5IGRvZXNuJ3QgZXhpc3RcbiAqXG4gKiBAZnVuY3Rpb24gZ2V0T25XaW5kb3dcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Zm9yLWFuZ3VsYXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE9uV2luZG93KGtleTogc3RyaW5nKTogdW5rbm93biB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBnZXRXaW5kb3coKT8uW2tleV07XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFNldHMgYSBwcm9wZXJ0eSBvbiB0aGUgd2luZG93IG9iamVjdFxuICogQHN1bW1hcnkgVGhpcyBmdW5jdGlvbiBwcm92aWRlcyBhIHdheSB0byBzZXQgcHJvcGVydGllcyBvbiB0aGUgd2luZG93IG9iamVjdC5cbiAqIEl0IHVzZXMgdGhlIGdldFdpbmRvdyBmdW5jdGlvbiB0byBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIHdpbmRvdywgdGhlbiBzZXRzXG4gKiB0aGUgc3BlY2lmaWVkIHByb3BlcnR5IHRvIHRoZSBwcm92aWRlZCB2YWx1ZS4gVGhpcyBpcyB1c2VmdWwgZm9yIHN0b3JpbmdcbiAqIGdsb2JhbCBkYXRhIG9yIGZ1bmN0aW9ucyB0aGF0IG5lZWQgdG8gYmUgYWNjZXNzaWJsZSBhY3Jvc3MgdGhlIGFwcGxpY2F0aW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdG8gc2V0IG9uIHRoZSB3aW5kb3cgb2JqZWN0XG4gKiBAcGFyYW0ge2FueX0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gYXNzaWduIHRvIHRoZSBwcm9wZXJ0eVxuICogQHJldHVybiB7dm9pZH1cbiAqXG4gKiBAZnVuY3Rpb24gc2V0T25XaW5kb3dcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Zm9yLWFuZ3VsYXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldE9uV2luZG93KGtleTogc3RyaW5nLCB2YWx1ZTogdW5rbm93bik6IHZvaWQge1xuICBnZXRXaW5kb3coKVtrZXldID0gdmFsdWU7XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFJldHJpZXZlcyB0aGUgZ2xvYmFsIHdpbmRvdyBvYmplY3RcbiAqIEBzdW1tYXJ5IFRoaXMgZnVuY3Rpb24gcHJvdmlkZXMgYSBzYWZlIHdheSB0byBhY2Nlc3MgdGhlIGdsb2JhbCB3aW5kb3cgb2JqZWN0LlxuICogSXQgdXNlcyBnbG9iYWxUaGlzIHRvIGVuc3VyZSBjb21wYXRpYmlsaXR5IGFjcm9zcyBkaWZmZXJlbnQgSmF2YVNjcmlwdCBlbnZpcm9ubWVudHMuXG4gKiBUaGlzIGlzIHRoZSBjb3JlIGZ1bmN0aW9uIHVzZWQgYnkgb3RoZXIgd2luZG93LXJlbGF0ZWQgdXRpbGl0eSBmdW5jdGlvbnMgdG9cbiAqIGFjY2VzcyB0aGUgd2luZG93IG9iamVjdC5cbiAqXG4gKiBAcmV0dXJuIHtXaW5kb3d9IFRoZSBnbG9iYWwgd2luZG93IG9iamVjdFxuICpcbiAqIEBmdW5jdGlvbiBnZXRXaW5kb3dcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Zm9yLWFuZ3VsYXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFdpbmRvdygpOiBXaW5kb3cgJiBLZXlWYWx1ZSB7XG4gIHJldHVybiAoZ2xvYmFsVGhpcyBhcyBLZXlWYWx1ZSk/Llsnd2luZG93J10gYXMgV2luZG93ICYgS2V5VmFsdWU7XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFJldHJpZXZlcyB0aGUgd2lkdGggb2YgdGhlIGJyb3dzZXIgd2luZG93XG4gKiBAc3VtbWFyeSBUaGlzIGZ1bmN0aW9uIHByb3ZpZGVzIGEgY29udmVuaWVudCB3YXkgdG8gZ2V0IHRoZSBjdXJyZW50IHdpZHRoIG9mIHRoZSBicm93c2VyIHdpbmRvdy5cbiAqIEl0IHVzZXMgdGhlIGdldE9uV2luZG93IGZ1bmN0aW9uIHRvIGFjY2VzcyB0aGUgJ2lubmVyV2lkdGgnIHByb3BlcnR5IG9mIHRoZSB3aW5kb3cgb2JqZWN0LlxuICogVGhpcyBpcyB1c2VmdWwgZm9yIHJlc3BvbnNpdmUgZGVzaWduIGltcGxlbWVudGF0aW9ucyBhbmQgdmlld3BvcnQtYmFzZWQgY2FsY3VsYXRpb25zLlxuICpcbiAqIEByZXR1cm4ge251bWJlciB8IHVuZGVmaW5lZH0gVGhlIGN1cnJlbnQgd2lkdGggb2YgdGhlIGJyb3dzZXIgd2luZG93IGluIHBpeGVsc1xuICpcbiAqIEBmdW5jdGlvbiBnZXRXaW5kb3dXaWR0aFxuICogQG1lbWJlck9mIG1vZHVsZTpmb3ItYW5ndWxhclxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2luZG93V2lkdGgoKTogbnVtYmVyIHtcbiAgcmV0dXJuIGdldE9uV2luZG93KCdpbm5lcldpZHRoJykgYXMgbnVtYmVyIHx8IDA7XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIENoZWNrcyBpZiBhIHZhbHVlIGlzICBub3QgdW5kZWZpbmVkXG4gKiBAc3VtbWFyeSBUaGlzIHV0aWxpdHkgZnVuY3Rpb24gZGV0ZXJtaW5lcyB3aGV0aGVyIGEgZ2l2ZW4gdmFsdWUgaXMgbm90IHVuZGVmaW5lZC5cbiAqIEl0J3MgYSBzaW1wbGUgd3JhcHBlciB0aGF0IG1ha2VzIGNvZGUgbW9yZSByZWFkYWJsZSB3aGVuIGNoZWNraW5nIGZvciBkZWZpbmVkIHZhbHVlcy5cbiAqIFRoZSBmdW5jdGlvbiBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBjaGVja2luZyBTdHJpbmdPckJvb2xlYW4gcHJvcGVydGllcyB0aGF0IG1pZ2h0IGJlIHVuZGVmaW5lZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ09yQm9vbGVhbiB8IHVuZGVmaW5lZH0gcHJvcCAtIFRoZSBwcm9wZXJ0eSB0byBjaGVja1xuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgbm90IHVuZGVmaW5lZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKlxuICogQGZ1bmN0aW9uIGlzTm90VW5kZWZpbmVkXG4gKiBAbWVtYmVyT2YgbW9kdWxlOmZvci1hbmd1bGFyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc05vdFVuZGVmaW5lZChwcm9wOiBTdHJpbmdPckJvb2xlYW4gfCB1bmRlZmluZWQpOiBib29sZWFuIHtcbiAgcmV0dXJuIChwcm9wICE9PSB1bmRlZmluZWQpIGFzIGJvb2xlYW47XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEdlbmVyYXRlcyBhIGxvY2FsZSBzdHJpbmcgZnJvbSBhIGNsYXNzIG5hbWUgb3IgaW5zdGFuY2VcbiAqIEBzdW1tYXJ5IFRoaXMgdXRpbGl0eSBmdW5jdGlvbiBjb252ZXJ0cyBhIGNsYXNzIG5hbWUgb3IgaW5zdGFuY2UgaW50byBhIGxvY2FsZSBzdHJpbmdcbiAqIHRoYXQgY2FuIGJlIHVzZWQgZm9yIGludGVybmF0aW9uYWxpemF0aW9uIHB1cnBvc2VzLiBJdCBoYW5kbGVzIGRpZmZlcmVudCBpbnB1dCB0eXBlc1xuICogKHN0cmluZywgZnVuY3Rpb24sIG9yIG9iamVjdCkgYW5kIGFwcGxpZXMgZm9ybWF0dGluZyBydWxlcyB0byBnZW5lcmF0ZSBhIGNvbnNpc3RlbnRcbiAqIGxvY2FsZSBpZGVudGlmaWVyLiBGb3Igc2hvcnQgbmFtZXMgKGxlc3MgdGhhbiAzIHBhcnRzKSwgaXQgcmV2ZXJzZXMgdGhlIGRvdC1zZXBhcmF0ZWRcbiAqIHN0cmluZy4gRm9yIGxvbmdlciBuYW1lcywgaXQgdXNlcyB0aGUgbGFzdCBwYXJ0IGFzIGEgcHJlZml4IGFuZCBqb2lucyB0aGUgcmVzdCB3aXRoXG4gKiB1bmRlcnNjb3Jlcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xGdW5jdGlvbkxpa2V8b2JqZWN0fSBpbnN0YW5jZSAtIFRoZSBpbnB1dCB0byBnZW5lcmF0ZSB0aGUgbG9jYWxlIGZyb20gKGNsYXNzIG5hbWUsIGNvbnN0cnVjdG9yLCBvciBpbnN0YW5jZSlcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3VmZml4XSAtIE9wdGlvbmFsIHN0cmluZyB0byBhcHBlbmQgdG8gdGhlIGluc3RhbmNlIG5hbWUgYmVmb3JlIHByb2Nlc3NpbmdcbiAqIEByZXR1cm4ge3N0cmluZ30gQSBmb3JtYXR0ZWQgbG9jYWxlIHN0cmluZyBkZXJpdmVkIGZyb20gdGhlIGlucHV0XG4gKlxuICogQGZ1bmN0aW9uIGdldExvY2FsZUZyb21DbGFzc05hbWVcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Zm9yLWFuZ3VsYXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsZUZyb21DbGFzc05hbWUoXG4gIGluc3RhbmNlOiBzdHJpbmcgfCBGdW5jdGlvbkxpa2UgfCBLZXlWYWx1ZSxcbiAgc3VmZml4Pzogc3RyaW5nXG4pOiBzdHJpbmcge1xuICBpZiAodHlwZW9mIGluc3RhbmNlICE9PSBQcmltaXRpdmVzLlNUUklORylcbiAgICBpbnN0YW5jZSA9IChpbnN0YW5jZSBhcyBGdW5jdGlvbkxpa2UpLm5hbWUgfHwgKGluc3RhbmNlIGFzIG9iamVjdCk/LmNvbnN0cnVjdG9yPy5uYW1lO1xuXG4gIGxldCBuYW1lOiBzdHJpbmcgfCBzdHJpbmdbXSA9IGluc3RhbmNlIGFzIHN0cmluZztcblxuICBpZiAoc3VmZml4KVxuICAgIG5hbWUgPSBgJHtpbnN0YW5jZX0ke3N1ZmZpeC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN1ZmZpeC5zbGljZSgxKX1gO1xuXG4gIG5hbWUgPSBuYW1lLnJlcGxhY2UoL198LS9nLCAnJykucmVwbGFjZSgvKD86Xlxcd3xbQS1aXXxcXGJcXHcpL2csICh3b3JkOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChpbmRleCA+IDEpIHdvcmQgPSAnLicgKyB3b3JkO1xuICAgICAgcmV0dXJuIHdvcmQudG9Mb3dlckNhc2UoKTtcbiAgICB9KS5zcGxpdCgnLicpO1xuXG4gIGlmIChuYW1lLmxlbmd0aCA8IDMpXG4gICAgcmV0dXJuIG5hbWUucmV2ZXJzZSgpLmpvaW4oJy4nKTtcblxuICBjb25zdCBwcmVmZml4ID0gbmFtZVtuYW1lLmxlbmd0aCAtIDFdO1xuICBuYW1lLnBvcCgpO1xuICBuYW1lID0gbmFtZS5qb2luKCdfJyk7XG4gIHJldHVybiBgJHtwcmVmZml4fS4ke25hbWV9YDtcbn1cblxuXG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFJldHJpZXZlcyB0aGUgY3VycmVudCBsb2NhbGUgbGFuZ3VhZ2VcbiAqIEBzdW1tYXJ5IFRoaXMgdXRpbGl0eSBmdW5jdGlvbiBnZXRzIHRoZSBjdXJyZW50IGxvY2FsZSBsYW5ndWFnZSBiYXNlZCBvbiB0aGUgdXNlcidzIGJyb3dzZXIgc2V0dGluZ3MuXG4gKiBJdCBwcm92aWRlcyBhIGNvbnNpc3RlbnQgd2F5IHRvIGFjY2VzcyB0aGUgdXNlcidzIGxhbmd1YWdlIHByZWZlcmVuY2UgdGhyb3VnaG91dCB0aGUgYXBwbGljYXRpb24uXG4gKiBUaGUgZnVuY3Rpb24gcmV0dXJucyB0aGUgYnJvd3NlcidzIG5hdmlnYXRvci5sYW5ndWFnZSB2YWx1ZSwgZGVmYXVsdGluZyB0byAnZW4nIGlmIG5vdCBhdmFpbGFibGUuXG4gKlxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgY3VycmVudCBsb2NhbGUgbGFuZ3VhZ2UgKGUuZy4sICdlbicsICdmcicpXG4gKlxuICogQGZ1bmN0aW9uIGdldExvY2FsZUxhbmd1YWdlXG4gKiBAbWVtYmVyT2YgbW9kdWxlOmZvci1hbmd1bGFyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGVMYW5ndWFnZSgpOiBzdHJpbmcge1xuICBjb25zdCB3aW4gPSBnZXRXaW5kb3coKTtcbiAgcmV0dXJuICh3aW4gYXMgV2luZG93KS5uYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgXCJlblwiO1xuICAvLyByZXR1cm4gd2luPy5bV0lORE9XX0tFWVMuTEFOR1VBR0VfU0VMRUNURURdIHx8ICh3aW4ubmF2aWdhdG9yLmxhbmd1YWdlIHx8ICcnKS5zcGxpdCgnLScpWzBdIHx8IFwiZW5cIjtcbn1cblxuXG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEdlbmVyYXRlcyBhIHJhbmRvbSBzdHJpbmcgb3IgbnVtYmVyIG9mIHNwZWNpZmllZCBsZW5ndGhcbiAqIEBzdW1tYXJ5IFRoaXMgdXRpbGl0eSBmdW5jdGlvbiBjcmVhdGVzIGEgcmFuZG9tIHN0cmluZyBvZiBhIHNwZWNpZmllZCBsZW5ndGguXG4gKiBJdCBjYW4gZ2VuZXJhdGUgZWl0aGVyIGFscGhhbnVtZXJpYyBzdHJpbmdzIChpbmNsdWRpbmcgdXBwZXJjYXNlIGFuZCBsb3dlcmNhc2UgbGV0dGVycylcbiAqIG9yIG51bWVyaWMtb25seSBzdHJpbmdzLiBUaGlzIGlzIHVzZWZ1bCBmb3IgY3JlYXRpbmcgcmFuZG9tIElEcywgdGVtcG9yYXJ5IHBhc3N3b3JkcyxcbiAqIG9yIG90aGVyIHJhbmRvbSBpZGVudGlmaWVycyB0aHJvdWdob3V0IHRoZSBhcHBsaWNhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD04XSAtIFRoZSBsZW5ndGggb2YgdGhlIHJhbmRvbSB2YWx1ZSB0byBnZW5lcmF0ZVxuICogQHBhcmFtIHtib29sZWFufSBbb25seU51bWJlcnM9ZmFsc2VdIC0gV2hldGhlciB0byBnZW5lcmF0ZSBvbmx5IG51bWVyaWMgY2hhcmFjdGVyc1xuICogQHJldHVybiB7c3RyaW5nfSBBIHJhbmRvbWx5IGdlbmVyYXRlZCBzdHJpbmcgb2YgdGhlIHNwZWNpZmllZCBsZW5ndGggYW5kIGNoYXJhY3RlciBzZXRcbiAqXG4gKiBAZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21WYWx1ZVxuICogQG1lbWJlck9mIG1vZHVsZTpmb3ItYW5ndWxhclxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21WYWx1ZShsZW5ndGg6IG51bWJlciA9IDgsIG9ubHlOdW1iZXJzOiBib29sZWFuID0gZmFsc2UpOiBzdHJpbmcge1xuICBjb25zdCBjaGFycyA9IG9ubHlOdW1iZXJzXG4gICAgPyAnMDEyMzQ1Njc4OSdcbiAgICA6ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XG4gIGxldCByZXN1bHQgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICByZXN1bHQgKz0gY2hhcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJzLmxlbmd0aCkpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuLyoqXG4gKiBDb252ZXJ0cyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIGJvb2xlYW4gb3IgYSBib29sZWFuIHZhbHVlIHRvIGEgYm9vbGVhbiB0eXBlLlxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7KCd0cnVlJyB8ICdmYWxzZScgfCBib29sZWFuKX0gcHJvcCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0LiBDYW4gYmUgdGhlIHN0cmluZyAndHJ1ZScsICdmYWxzZScsIG9yIGEgYm9vbGVhbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBUaGUgYm9vbGVhbiByZXByZXNlbnRhdGlvbiBvZiB0aGUgaW5wdXQgdmFsdWUuIFJldHVybnMgdHJ1ZSBpZiB0aGUgaW5wdXQgaXMgdGhlIHN0cmluZyAndHJ1ZScgb3IgYm9vbGVhbiB0cnVlLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdUb0Jvb2xlYW4ocHJvcDogJ3RydWUnIHwgJ2ZhbHNlJyB8IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgaWYodHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKVxuICAgIHByb3AgPSBwcm9wLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcbiAgcmV0dXJuIHByb3A7XG59XG5cblxuLyoqXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpcyBhIHZhbGlkIERhdGUgb2JqZWN0XG4gKlxuICogQHBhcmFtIHsoc3RyaW5nIHwgRGF0ZSB8IG51bWJlcil9IGRhdGUgLSBUaGUgdmFsdWUgdG8gY2hlY2suIENhbiBiZSBhIERhdGUgb2JqZWN0LCBhIHRpbWVzdGFtcCBudW1iZXIsIG9yIGEgZGF0ZSBzdHJpbmdcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYSB2YWxpZCBEYXRlIG9iamVjdCAobm90IE5hTiksIG90aGVyd2lzZSBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZERhdGUoZGF0ZTogc3RyaW5nIHwgRGF0ZSB8IG51bWJlcik6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIHJldHVybiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUgJiYgIWlzTmFOKGRhdGUgYXMgdW5rbm93biBhcyBudW1iZXIpKSB8fCAoKCkgPT4ge1xuICAgICAgY29uc3QgdGVzdFJlZ2V4ID0gbmV3IFJlZ0V4cCgvXlxcZHs0fS1cXGR7Mn0tXFxkezJ9JC8pLnRlc3QoZGF0ZSBhcyBzdHJpbmcpXG4gICAgICBpZih0eXBlb2YgZGF0ZSAhPT0gUHJpbWl0aXZlcy5TVFJJTkcgfHwgIShkYXRlIGFzIHN0cmluZyk/LmluY2x1ZGVzKCdUJykgJiYgIXRlc3RSZWdleClcbiAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICBkYXRlID0gKGRhdGUgYXMgc3RyaW5nKS5zcGxpdCgnVCcpWzBdO1xuICAgIGlmKCFuZXcgUmVnRXhwKC9eXFxkezR9LVxcZHsyfS1cXGR7Mn0kLykudGVzdChkYXRlKSlcbiAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiAhIShuZXcgRGF0ZShkYXRlKSk7XG4gICB9KSgpO1xuICB9IGNhdGNoKGVycm9yOiB1bmtub3duKSB7XG4gICAgZ2V0TG9nZ2VyKGlzVmFsaWREYXRlKS5lcnJvcihlcnJvciBhcyBFcnJvciB8IHN0cmluZyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogRm9ybWF0cyBhIGRhdGUgaW50byBhIGxvY2FsaXplZCBzdHJpbmcgcmVwcmVzZW50YXRpb25cbiAqXG4gKiBAcGFyYW0geyhzdHJpbmcgfCBEYXRlIHwgbnVtYmVyKX0gZGF0ZSAtIFRoZSBkYXRlIHRvIGZvcm1hdC4gQ2FuIGJlIGEgRGF0ZSBvYmplY3QsIGEgdGltZXN0YW1wIG51bWJlciwgb3IgYSBkYXRlIHN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtsb2NhbGVdIC0gVGhlIGxvY2FsZSB0byB1c2UgZm9yIGZvcm1hdHRpbmcuIElmIG5vdCBwcm92aWRlZCwgdGhlIHN5c3RlbSdzIGxvY2FsZSB3aWxsIGJlIHVzZWRcbiAqIEByZXR1cm4geyhEYXRlIHwgc3RyaW5nKX0gQSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGZvcm1hdCBERC9NTS9ZWVlZIGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIGxvY2FsZSxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgb3IgdGhlIG9yaWdpbmFsIGlucHV0IGFzIGEgc3RyaW5nIGlmIHRoZSBkYXRlIGlzIGludmFsaWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZTogc3RyaW5nIHwgRGF0ZSB8IG51bWJlciwgbG9jYWxlPzogc3RyaW5nIHwgdW5kZWZpbmVkKTogRGF0ZSB8IHN0cmluZyB7XG5cbiAgaWYoIWxvY2FsZSlcbiAgICBsb2NhbGUgPSBnZXRMb2NhbGVMYW5ndWFnZSgpO1xuXG4gIGlmKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgZGF0ZSA9PT0gJ251bWJlcicpXG4gICAgZGF0ZSA9IG5ldyBEYXRlKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJyA/IGRhdGUucmVwbGFjZSgvXFwvL2csICctJykgOiBkYXRlKTtcblxuICBpZighaXNWYWxpZERhdGUoZGF0ZSkpXG4gICAgcmV0dXJuIGAke2RhdGV9YCBhcyBzdHJpbmc7XG4gIGNvbnN0IHIgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKGxvY2FsZSwge1xuICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICBkYXk6IFwiMi1kaWdpdFwiLFxuICAgICAgbW9udGg6ICcyLWRpZ2l0J1xuICB9KTtcblxuXG4gIHJldHVybiByO1xufVxuXG4vKipcbiAqIEF0dGVtcHRzIHRvIHBhcnNlIGEgZGF0ZSBzdHJpbmcsIERhdGUgb2JqZWN0LCBvciBudW1iZXIgaW50byBhIHZhbGlkIERhdGUgb2JqZWN0XG4gKlxuICogQHBhcmFtIHsoc3RyaW5nIHwgRGF0ZSB8IG51bWJlcil9IGRhdGUgLSBUaGUgZGF0ZSB0byBwYXJzZS4gQ2FuIGJlIGEgRGF0ZSBvYmplY3QsIGEgdGltZXN0YW1wIG51bWJlcixcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvciBhIGRhdGUgc3RyaW5nIGluIHRoZSBmb3JtYXQgXCJERC9NTS9ZWVlZIEhIOk1NOlNTOk1TXCJcbiAqIEByZXR1cm4geyhEYXRlIHwgbnVsbCl9IEEgdmFsaWQgRGF0ZSBvYmplY3QgaWYgcGFyc2luZyBpcyBzdWNjZXNzZnVsLCBvciBudWxsIGlmIHRoZSBkYXRlIGlzIGludmFsaWRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgIG9yIGRvZXNuJ3QgbWF0Y2ggdGhlIGV4cGVjdGVkIGZvcm1hdFxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUb1ZhbGlkRGF0ZShkYXRlOiBzdHJpbmcgfCBEYXRlIHwgbnVtYmVyKTogRGF0ZSB8IG51bGwge1xuICBpZihpc1ZhbGlkRGF0ZShkYXRlKSlcbiAgICByZXR1cm4gZGF0ZSBhcyBEYXRlO1xuXG4gIGlmKCFgJHtkYXRlfWAuaW5jbHVkZXMoJy8nKSlcbiAgICByZXR1cm4gbnVsbDtcblxuICBjb25zdCBbZGF0ZVN0cmluZywgdGltZVN0cmluZ10gPSAoZGF0ZSBhcyBzdHJpbmcpLnNwbGl0KCcgJyk7XG4gIGNvbnN0IFtkYXksIG1vbnRoLCB5ZWFyXSA9IGRhdGVTdHJpbmcuc3BsaXQoJy8nKS5tYXAoTnVtYmVyKTtcbiAgY29uc3QgW2hvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBtaWxsaXNlY29uZHNdID0gdGltZVN0cmluZy5zcGxpdCgnOicpLm1hcChOdW1iZXIpO1xuICBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXksIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBtaWxsaXNlY29uZHMpO1xuXG4gIGlmKCFpc1ZhbGlkRGF0ZShkYXRlKSkge1xuICAgIGNvbnNvbGUud2FybigncGFyc2VUb1ZhbGlkRGF0ZSAtIEludmFsaWQgZGF0ZSBmb3JtYXQnLCBkYXRlKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkYXRlO1xufVxuXG5cbi8qKlxuICogTWFwcyBhbiBpdGVtIG9iamVjdCB1c2luZyBhIHByb3ZpZGVkIG1hcHBlciBvYmplY3QgYW5kIG9wdGlvbmFsIGFkZGl0aW9uYWwgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge0tleVZhbHVlfSBpdGVtIC0gVGhlIHNvdXJjZSBvYmplY3QgdG8gYmUgbWFwcGVkLlxuICogQHBhcmFtIHtLZXlWYWx1ZX0gbWFwcGVyIC0gQW4gb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgbWFwcGluZyBydWxlcy4gS2V5cyByZXByZXNlbnQgdGhlIG5ldyBwcm9wZXJ0eSBuYW1lcyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCB2YWx1ZXMgcmVwcmVzZW50IHRoZSBwYXRoIHRvIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlcyBpbiB0aGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7S2V5VmFsdWV9IFtwcm9wc10gLSBPcHRpb25hbCBhZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIG1hcHBlZCBvYmplY3QuXG4gKiBAcmV0dXJucyB7S2V5VmFsdWV9IEEgbmV3IG9iamVjdCB3aXRoIHByb3BlcnRpZXMgbWFwcGVkIGFjY29yZGluZyB0byB0aGUgbWFwcGVyIG9iamVjdCBhbmQgaW5jbHVkaW5nIGFueSBhZGRpdGlvbmFsIHByb3BlcnRpZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpdGVtTWFwcGVyKGl0ZW06IEtleVZhbHVlLCBtYXBwZXI6IEtleVZhbHVlLCBwcm9wcz86IEtleVZhbHVlKTogS2V5VmFsdWUge1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXMobWFwcGVyKS5yZWR1Y2UoKGFjY3VtOiBLZXlWYWx1ZSwgW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgY29uc3QgYXJyYXlWYWx1ZSA9ICh2YWx1ZSBhcyBzdHJpbmcpLnNwbGl0KCcuJyk7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgYWNjdW1ba2V5XSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoYXJyYXlWYWx1ZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgYWNjdW1ba2V5XSA9IGl0ZW0/Llt2YWx1ZSBhcyBzdHJpbmddIHx8ICh2YWx1ZSAhPT0ga2V5ID8gdmFsdWUgOiBcIlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB2YWw7XG5cbiAgICAgICAgZm9yIChjb25zdCBfdmFsdWUgb2YgYXJyYXlWYWx1ZSlcbiAgICAgICAgICB2YWwgPSAhdmFsXG4gICAgICAgICAgICA/IGl0ZW1bX3ZhbHVlXVxuICAgICAgICAgICAgOiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyBKU09OLnBhcnNlKHZhbCkgOiB2YWwpW192YWx1ZV07XG5cbiAgICAgICAgaWYgKGlzVmFsaWREYXRlKG5ldyBEYXRlKHZhbCkpKSB2YWwgPSBgJHtmb3JtYXREYXRlKHZhbCl9YDtcblxuICAgICAgICBhY2N1bVtrZXldID0gdmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkID8gdmFsdWUgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcm9wcyB8fCB7fSwgYWNjdW0pO1xuICB9LCB7fSk7XG59XG5cbi8qKlxuICogTWFwcyBhbiBhcnJheSBvZiBkYXRhIG9iamVjdHMgdXNpbmcgYSBwcm92aWRlZCBtYXBwZXIgb2JqZWN0LlxuICpcbiAqIEB0ZW1wbGF0ZSBUIC0gVGhlIHR5cGUgb2YgdGhlIHJlc3VsdGluZyBtYXBwZWQgaXRlbXMuXG4gKiBAcGFyYW0ge2FueVtdfSBkYXRhIC0gVGhlIGFycmF5IG9mIGRhdGEgb2JqZWN0cyB0byBiZSBtYXBwZWQuXG4gKiBAcGFyYW0ge0tleVZhbHVlfSBtYXBwZXIgLSBBbiBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSBtYXBwaW5nIHJ1bGVzLlxuICogQHBhcmFtIHtLZXlWYWx1ZX0gW3Byb3BzXSAtIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBiZSBpbmNsdWRlZCBpbiB0aGUgbWFwcGVkIGl0ZW1zLlxuICpcbiAqIEByZXR1cm5zIHtUW119IC0gVGhlIGFycmF5IG9mIG1hcHBlZCBpdGVtcy4gSWYgYW4gaXRlbSBpbiB0aGUgb3JpZ2luYWwgYXJyYXkgZG9lcyBub3QgaGF2ZSBhbnkgbm9uLW51bGwgdmFsdWVzIGFmdGVyIG1hcHBpbmcsXG4gKiB0aGUgb3JpZ2luYWwgaXRlbSBpcyByZXR1cm5lZCBpbnN0ZWFkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGF0YU1hcHBlcjxUPihkYXRhOiBUW10sIG1hcHBlcjogS2V5VmFsdWUsIHByb3BzPzogS2V5VmFsdWUpOiBUW10ge1xuICBpZiAoIWRhdGEgfHwgIWRhdGEubGVuZ3RoKSByZXR1cm4gW107XG4gIHJldHVybiBkYXRhLnJlZHVjZSgoYWNjdW06IFRbXSwgY3VycikgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBpdGVtTWFwcGVyKGN1cnIgYXMgS2V5VmFsdWUsIG1hcHBlciwgcHJvcHMpIGFzIFQ7XG4gICAgY29uc3QgaGFzVmFsdWVzID1cbiAgICAgIFsuLi5uZXcgU2V0KE9iamVjdC52YWx1ZXMoaXRlbSBhcyBUW10pKV0uZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUpLmxlbmd0aCA+XG4gICAgICAwO1xuICAgIGFjY3VtLnB1c2goaGFzVmFsdWVzID8gaXRlbSA6IGN1cnIpO1xuICAgIHJldHVybiBhY2N1bTtcbiAgfSwgW10pO1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIGZvY3VzIGZyb20gdGhlIGN1cnJlbnRseSBhY3RpdmUgRE9NIGVsZW1lbnRcbiAqIEBzdW1tYXJ5IFRoaXMgdXRpbGl0eSBmdW5jdGlvbiBibHVycyB0aGUgY3VycmVudGx5IGZvY3VzZWQgZWxlbWVudCBpbiB0aGUgZG9jdW1lbnQsXG4gKiBlZmZlY3RpdmVseSByZW1vdmluZyBmb2N1cyB0cmFwcyB0aGF0IG1pZ2h0IHByZXZlbnQgcHJvcGVyIG5hdmlnYXRpb24gb3Iga2V5Ym9hcmRcbiAqIGludGVyYWN0aW9uLiBJdCBzYWZlbHkgYWNjZXNzZXMgdGhlIGRvY3VtZW50J3MgYWN0aXZlRWxlbWVudCBhbmQgY2FsbHMgYmx1cigpIGlmXG4gKiBhbiBlbGVtZW50IGlzIGN1cnJlbnRseSBmb2N1c2VkLiBUaGlzIGlzIHVzZWZ1bCBmb3IgYWNjZXNzaWJpbGl0eSBhbmQgdXNlciBleHBlcmllbmNlXG4gKiBpbXByb3ZlbWVudHMsIHBhcnRpY3VsYXJseSB3aGVuIGNsb3NpbmcgbW9kYWxzIG9yIGRpYWxvZ3MuXG4gKlxuICogQHJldHVybiB7dm9pZH1cbiAqXG4gKiBAZnVuY3Rpb24gcmVtb3ZlRm9jdXNUcmFwXG4gKiBAbWVtYmVyT2YgbW9kdWxlOmZvci1hbmd1bGFyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGb2N1c1RyYXAoKTogdm9pZCB7XG4gIGNvbnN0IGRvYyA9IGdldFdpbmRvd0RvY3VtZW50KCk7XG4gIGlmKGRvYz8uYWN0aXZlRWxlbWVudClcbiAgICAoZG9jLmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpPy5ibHVyKCk7XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIENsZWFucyBhbmQgbm9ybWFsaXplcyB3aGl0ZXNwYWNlIGluIGEgc3RyaW5nIHZhbHVlXG4gKiBAc3VtbWFyeSBUaGlzIHV0aWxpdHkgZnVuY3Rpb24gdHJpbXMgbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZSBmcm9tIGEgc3RyaW5nXG4gKiBhbmQgcmVwbGFjZXMgbXVsdGlwbGUgY29uc2VjdXRpdmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIHdpdGggYSBzaW5nbGUgc3BhY2UuXG4gKiBPcHRpb25hbGx5IGNvbnZlcnRzIHRoZSByZXN1bHQgdG8gbG93ZXJjYXNlIGZvciBjb25zaXN0ZW50IHRleHQgcHJvY2Vzc2luZy5cbiAqIFRoaXMgaXMgdXNlZnVsIGZvciBub3JtYWxpemluZyB1c2VyIGlucHV0LCBzZWFyY2ggdGVybXMsIG9yIGRhdGEgc2FuaXRpemF0aW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBzdHJpbmcgdmFsdWUgdG8gY2xlYW4gYW5kIG5vcm1hbGl6ZVxuICogQHBhcmFtIHtib29sZWFufSBbbG93ZXJjYXNlPWZhbHNlXSAtIFdoZXRoZXIgdG8gY29udmVydCB0aGUgcmVzdWx0IHRvIGxvd2VyY2FzZVxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgY2xlYW5lZCBhbmQgbm9ybWFsaXplZCBzdHJpbmdcbiAqXG4gKiBAZnVuY3Rpb24gY2xlYW5TcGFjZXNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Zm9yLWFuZ3VsYXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuU3BhY2VzKHZhbHVlOiBzdHJpbmcgPSBcIlwiLCBsb3dlcmNhc2U6IGJvb2xlYW4gPSBmYWxzZSk6IHN0cmluZyB7XG4gIHZhbHVlID0gYCR7dmFsdWV9YC50cmltKCkucmVwbGFjZSgvXFxzKy9nLCAnICcpO1xuICByZXR1cm4gbG93ZXJjYXNlID8gdmFsdWUudG9Mb3dlckNhc2UoKSA6IHZhbHVlO1xufVxuXG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIERldGVybWluZXMgaWYgdGhlIHVzZXIncyBzeXN0ZW0gaXMgY3VycmVudGx5IGluIGRhcmsgbW9kZVxuICogQHN1bW1hcnkgVGhpcyBmdW5jdGlvbiBjaGVja3MgdGhlIHVzZXIncyBjb2xvciBzY2hlbWUgcHJlZmVyZW5jZSB1c2luZyB0aGUgQ1NTIG1lZGlhIHF1ZXJ5XG4gKiAnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScuIEl0IHJldHVybnMgYSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgc3lzdGVtIGlzXG4gKiBjdXJyZW50bHkgc2V0IHRvIGRhcmsgbW9kZS4gVGhpcyBpcyB1c2VmdWwgZm9yIGltcGxlbWVudGluZyB0aGVtZS1hd2FyZSBmdW5jdGlvbmFsaXR5XG4gKiBhbmQgYWRqdXN0aW5nIFVJIGVsZW1lbnRzIGJhc2VkIG9uIHRoZSB1c2VyJ3MgcHJlZmVycmVkIGNvbG9yIHNjaGVtZS5cbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSBUcnVlIGlmIHRoZSBzeXN0ZW0gaXMgaW4gZGFyayBtb2RlLCBmYWxzZSBvdGhlcndpc2VcbiAqXG4gKiBAZnVuY3Rpb24gaXNEYXJrTW9kZVxuICogQG1lbWJlck9mIG1vZHVsZTpmb3ItYW5ndWxhclxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNEYXJrTW9kZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgY29uc3Qge21hdGNoZXN9ID0gZ2V0V2luZG93KCkubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpO1xuICByZXR1cm4gbWF0Y2hlcztcbn1cbiJdfQ==