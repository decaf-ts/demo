import { UIKeys } from '@decaf-ts/ui-decorators';
import { VALIDATION_PARENT_KEY } from '@decaf-ts/decorator-validation';
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
export const AngularEngineKeys = {
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
export const FormConstants = {
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
export const EventConstants = {
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
export var LoggerLevels;
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
export var RouteDirections;
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
export var ComponentsTagNames;
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
export var BaseComponentProps;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9lbmdpbmUvY29uc3RhbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV2RTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUNILE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHO0lBQy9CLE9BQU8sRUFBRSxHQUFHLE1BQU0sQ0FBQyxPQUFPLFdBQVc7SUFDckMsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QixXQUFXLEVBQUUsaUJBQWlCO0lBQzlCLElBQUksRUFBRSxNQUFNO0lBQ1osVUFBVSxFQUFFLGFBQWE7SUFDekIsUUFBUSxFQUFFLGNBQWM7SUFDeEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsV0FBVyxFQUFFLGlCQUFpQjtJQUM5QixNQUFNLEVBQUUsU0FBUztJQUNqQixxQkFBcUIsRUFBRSxxQkFBcUI7SUFDNUMsMEJBQTBCLEVBQUUsZ0JBQWdCO0NBQzdDLENBQUM7QUFFRjs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUc7SUFDM0IsS0FBSyxFQUFFLE9BQU87SUFDZCxPQUFPLEVBQUUsU0FBUztDQUNuQixDQUFDO0FBRUY7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUc7SUFDNUIsc0JBQXNCLEVBQUUsOEJBQThCO0lBQ3RELE9BQU8sRUFBRSxjQUFjO0lBQ3ZCLEtBQUssRUFBRSxZQUFZO0lBQ25CLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLGdCQUFnQixFQUFFLHNCQUFzQjtJQUN4QyxrQkFBa0IsRUFBRSx1QkFBdUI7SUFDM0MscUJBQXFCLEVBQUUsMEJBQTBCO0lBQ2pELHFCQUFxQixFQUFFLDBCQUEwQjtJQUNqRCw0REFBNEQ7Q0FDN0QsQ0FBQTtBQUVEOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDSCxNQUFNLENBQU4sSUFBWSxZQU9YO0FBUEQsV0FBWSxZQUFZO0lBQ3RCLDZDQUFPLENBQUE7SUFDUCxpREFBUyxDQUFBO0lBQ1QsK0NBQVEsQ0FBQTtJQUNSLCtDQUFRLENBQUE7SUFDUixpREFBUyxDQUFBO0lBQ1QsdURBQVksQ0FBQTtBQUNkLENBQUMsRUFQVyxZQUFZLEtBQVosWUFBWSxRQU92QjtBQUFBLENBQUM7QUFFRjs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBTSxDQUFOLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN6QixnQ0FBYSxDQUFBO0lBQ2Isc0NBQW1CLENBQUE7SUFDbkIsZ0NBQWEsQ0FBQTtBQUNmLENBQUMsRUFKVyxlQUFlLEtBQWYsZUFBZSxRQUkxQjtBQUdEOzs7Ozs7Ozs7O0dBVUc7QUFDSCxNQUFNLENBQU4sSUFBWSxrQkFJWDtBQUpELFdBQVksa0JBQWtCO0lBQzVCLHVEQUFpQyxDQUFBO0lBQ2pDLCtEQUF5QyxDQUFBO0lBQ3pDLGlFQUEyQyxDQUFBO0FBQzdDLENBQUMsRUFKVyxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBSTdCO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJHO0FBQ0gsTUFBTSxDQUFOLElBQVksa0JBV1g7QUFYRCxXQUFZLGtCQUFrQjtJQUM1QixxQ0FBZSxDQUFBO0lBQ2YsdUNBQWlCLENBQUE7SUFDakIsK0JBQVMsQ0FBQTtJQUNULHFDQUFlLENBQUE7SUFDZixxQ0FBZSxDQUFBO0lBQ2YsK0NBQXlCLENBQUE7SUFDekIsaUNBQVcsQ0FBQTtJQUNYLG1EQUE2QixDQUFBO0lBQzdCLHVDQUFpQixDQUFBO0lBQ2pCLGlEQUEyQixDQUFBO0FBQzdCLENBQUMsRUFYVyxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBVzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVUlLZXlzIH0gZnJvbSAnQGRlY2FmLXRzL3VpLWRlY29yYXRvcnMnO1xuaW1wb3J0IHsgVkFMSURBVElPTl9QQVJFTlRfS0VZIH0gZnJvbSAnQGRlY2FmLXRzL2RlY29yYXRvci12YWxpZGF0aW9uJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQW5ndWxhciBlbmdpbmUga2V5IGNvbnN0YW50c1xuICogQHN1bW1hcnkgQ29udGFpbnMga2V5IHN0cmluZ3MgdXNlZCBieSB0aGUgQW5ndWxhciByZW5kZXJpbmcgZW5naW5lIGZvciByZWZsZWN0aW9uLFxuICogZHluYW1pYyBjb21wb25lbnQgY3JlYXRpb24sIGFuZCBvdGhlciBlbmdpbmUgb3BlcmF0aW9ucy5cbiAqIEB0eXBlZGVmIHtPYmplY3R9IEFuZ3VsYXJFbmdpbmVLZXlzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gUkVGTEVDVCAtIFByZWZpeCBmb3IgcmVmbGVjdGlvbiBtZXRhZGF0YSBrZXlzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gRFlOQU1JQyAtIEtleSBmb3IgZHluYW1pYyBjb21wb25lbnQgaWRlbnRpZmljYXRpb25cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBTk5PVEFUSU9OUyAtIEtleSBmb3IgY29tcG9uZW50IGFubm90YXRpb25zXG4gKiBAcHJvcGVydHkge3N0cmluZ30gRUNNUCAtIEtleSBmb3IgZW1iZWRkZWQgY29tcG9uZW50c1xuICogQHByb3BlcnR5IHtzdHJpbmd9IE5HX1JFRkxFQ1QgLSBQcmVmaXggZm9yIEFuZ3VsYXIgcmVmbGVjdGlvbiBhdHRyaWJ1dGVzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gUkVOREVSRUQgLSBQcmVmaXggZm9yIHJlbmRlcmVkIGNvbXBvbmVudCBtYXJrZXJzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gTUFQUEVSIC0gS2V5IGZvciBwcm9wZXJ0eSBtYXBwZXJzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQ0hJTERSRU4gLSBLZXkgZm9yIGNoaWxkIGNvbXBvbmVudHNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBMSVNUQUJMRSAtIEtleSBmb3IgbGlzdGFibGUgY29tcG9uZW50c1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFJFTkRFUiAtIEtleSBmb3IgcmVuZGVyYWJsZSBjb21wb25lbnRzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gUkVOREVSRURfSUQgLSBUZW1wbGF0ZSBmb3IgcmVuZGVyZWQgY29tcG9uZW50IElEc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFBBUkVOVCAtIEtleSBmb3IgY29tcGFyaXNvbiBkZWNvcmF0b3JzIGFuZCB2YWxpZGF0b3JzXG4gKiBAY29uc3QgQW5ndWxhckVuZ2luZUtleXNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6ZW5naW5lXG4gKi9cbmV4cG9ydCBjb25zdCBBbmd1bGFyRW5naW5lS2V5cyA9IHtcbiAgUkVGTEVDVDogYCR7VUlLZXlzLlJFRkxFQ1R9LmFuZ3VsYXIuYCxcbiAgRFlOQU1JQzogJ2R5bmFtaWMtY29tcG9uZW50JyxcbiAgQU5OT1RBVElPTlM6ICdfX2Fubm90YXRpb25zX18nLFxuICBFQ01QOiAnZWNtcCcsXG4gIE5HX1JFRkxFQ1Q6ICduZy1yZWZsZWN0LScsXG4gIFJFTkRFUkVEOiAncmVuZGVyZWQtYXMtJyxcbiAgTUFQUEVSOiAnbWFwcGVyJyxcbiAgQ0hJTERSRU46ICdjaGlsZHJlbicsXG4gIExJU1RBQkxFOiAnbGlzdGFibGUnLFxuICBSRU5ERVI6ICdyZW5kZXInLFxuICBSRU5ERVJFRF9JRDogJ3JlbmRlcmVkLWFzLXswfScsXG4gIFBBUkVOVDogJ19wYXJlbnQnLFxuICBWQUxJREFUSU9OX1BBUkVOVF9LRVk6IFZBTElEQVRJT05fUEFSRU5UX0tFWSxcbiAgRk9STV9HUk9VUF9DT01QT05FTlRfUFJPUFM6ICdjb21wb25lbnRQcm9wcydcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEZvcm0gdmFsaWRhdGlvbiBzdGF0ZSBjb25zdGFudHNcbiAqIEBzdW1tYXJ5IENvbnRhaW5zIGNvbnN0YW50cyByZXByZXNlbnRpbmcgdGhlIHBvc3NpYmxlIHZhbGlkYXRpb24gc3RhdGVzIG9mIGEgZm9ybS5cbiAqIFRoZXNlIGFyZSB1c2VkIHRvIGNoZWNrIGFuZCBoYW5kbGUgZm9ybSB2YWxpZGF0aW9uIHRocm91Z2hvdXQgdGhlIGFwcGxpY2F0aW9uLlxuICogQHR5cGVkZWYge09iamVjdH0gRm9ybUNvbnN0YW50c1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFZBTElEIC0gQ29uc3RhbnQgcmVwcmVzZW50aW5nIGEgdmFsaWQgZm9ybSBzdGF0ZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IElOVkFMSUQgLSBDb25zdGFudCByZXByZXNlbnRpbmcgYW4gaW52YWxpZCBmb3JtIHN0YXRlXG4gKiBAY29uc3QgRm9ybUNvbnN0YW50c1xuICogQG1lbWJlck9mIG1vZHVsZTplbmdpbmVcbiAqL1xuZXhwb3J0IGNvbnN0IEZvcm1Db25zdGFudHMgPSB7XG4gIFZBTElEOiAnVkFMSUQnLFxuICBJTlZBTElEOiAnSU5WQUxJRCcsXG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBFdmVudCBuYW1lIGNvbnN0YW50c1xuICogQHN1bW1hcnkgRW51bSBjb250YWluaW5nIGNvbnN0YW50cyBmb3IgZXZlbnQgbmFtZXMgdXNlZCB0aHJvdWdob3V0IHRoZSBhcHBsaWNhdGlvbi5cbiAqIFRoZXNlIGFyZSB1c2VkIHRvIHN0YW5kYXJkaXplIGV2ZW50IG5hbWluZyBhbmQgaGFuZGxpbmcuXG4gKiBAZW51bSB7c3RyaW5nfVxuICogQHJlYWRvbmx5XG4gKiBAcHJvcGVydHkge3N0cmluZ30gQkFDS19CVVRUT05fTkFWSUdBVElPTiAtIEV2ZW50IGZpcmVkIHdoZW4gYmFjayBidXR0b24gbmF2aWdhdGlvbiBlbmRzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gUkVGUkVTSF9FVkVOVCAtIEV2ZW50IGZpcmVkIHdoZW4gYSByZWZyZXNoIGFjdGlvbiBvY2N1cnNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBDTElDS19FVkVOVCAtIEV2ZW50IGZpcmVkIHdoZW4gYSBjbGljayBhY3Rpb24gb2NjdXJzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gU1VCTUlUX0VWRU5UIC0gRXZlbnQgZmlyZWQgd2hlbiBhIGZvcm0gc3VibWlzc2lvbiBvY2N1cnNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6ZW5naW5lXG4gKi9cbmV4cG9ydCBjb25zdCBFdmVudENvbnN0YW50cyA9IHtcbiAgQkFDS19CVVRUT05fTkFWSUdBVElPTjogJ2JhY2tCdXR0b25OYXZpZ2F0aW9uRW5kRXZlbnQnLFxuICBSRUZSRVNIOiAnUmVmcmVzaEV2ZW50JyxcbiAgQ0xJQ0s6ICdDbGlja0V2ZW50JyxcbiAgU1VCTUlUOiAnU3VibWl0RXZlbnQnLFxuICBWQUxJREFUSU9OX0VSUk9SOiAndmFsaWRhdGlvbkVycm9yRXZlbnQnLFxuICBGSUVMRFNFVF9BRERfR1JPVVA6ICdmaWVsZHNldEFkZEdyb3VwRXZlbnQnLFxuICBGSUVMRFNFVF9VUERBVEVfR1JPVVA6ICdmaWVsZHNldFVwZGF0ZUdyb3VwRXZlbnQnLFxuICBGSUVMRFNFVF9SRU1PVkVfR1JPVVA6ICdmaWVsZHNldFJlbW92ZUdyb3VwRXZlbnQnLFxuICAvLyBGSUVMRFNFVF9HUk9VUF9WQUxJREFUSU9OOiAnZmllbGRzZXRHcm91cFZhbGlkYXRpb25FdmVudCdcbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gTG9nZ2VyIGxldmVsIGNvbnN0YW50c1xuICogQHN1bW1hcnkgRW51bSBkZWZpbmluZyB0aGUgbG9nZ2luZyBsZXZlbHMgdXNlZCBpbiB0aGUgYXBwbGljYXRpb24ncyBsb2dnaW5nIHN5c3RlbS5cbiAqIExvd2VyIHZhbHVlcyByZXByZXNlbnQgbW9yZSB2ZXJib3NlIGxvZ2dpbmcsIHdoaWxlIGhpZ2hlciB2YWx1ZXMgcmVwcmVzZW50IG1vcmUgY3JpdGljYWwgbG9ncy5cbiAqIEBlbnVtIHtudW1iZXJ9XG4gKiBAcmVhZG9ubHlcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBBTEwgLSBMb2cgZXZlcnl0aGluZyAobW9zdCB2ZXJib3NlKVxuICogQHByb3BlcnR5IHtudW1iZXJ9IERFQlVHIC0gTG9nIGRlYnVnIGluZm9ybWF0aW9uXG4gKiBAcHJvcGVydHkge251bWJlcn0gSU5GTyAtIExvZyBpbmZvcm1hdGlvbmFsIG1lc3NhZ2VzXG4gKiBAcHJvcGVydHkge251bWJlcn0gV0FSTiAtIExvZyB3YXJuaW5nc1xuICogQHByb3BlcnR5IHtudW1iZXJ9IEVSUk9SIC0gTG9nIGVycm9yc1xuICogQHByb3BlcnR5IHtudW1iZXJ9IENSSVRJQ0FMIC0gTG9nIGNyaXRpY2FsIGVycm9ycyAobGVhc3QgdmVyYm9zZSlcbiAqIEBtZW1iZXJPZiBtb2R1bGU6ZW5naW5lXG4gKi9cbmV4cG9ydCBlbnVtIExvZ2dlckxldmVscyB7XG4gIEFMTCA9IDAsXG4gIERFQlVHID0gMSxcbiAgSU5GTyA9IDIsXG4gIFdBUk4gPSAzLFxuICBFUlJPUiA9IDQsXG4gIENSSVRJQ0FMID0gNVxufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gUm91dGUgZGlyZWN0aW9uIGNvbnN0YW50c1xuICogQHN1bW1hcnkgRW51bSBkZWZpbmluZyB0aGUgcG9zc2libGUgbmF2aWdhdGlvbiBkaXJlY3Rpb25zIGluIHRoZSBhcHBsaWNhdGlvbi5cbiAqIFVzZWQgZm9yIGNvbnRyb2xsaW5nIG5hdmlnYXRpb24gZmxvdyBhbmQgYW5pbWF0aW9uIGRpcmVjdGlvbnMuXG4gKiBAZW51bSB7c3RyaW5nfVxuICogQHJlYWRvbmx5XG4gKiBAcHJvcGVydHkge3N0cmluZ30gQkFDSyAtIE5hdmlnYXRlIGJhY2sgdG8gdGhlIHByZXZpb3VzIHBhZ2VcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBGT1JXQVJEIC0gTmF2aWdhdGUgZm9yd2FyZCB0byB0aGUgbmV4dCBwYWdlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gUk9PVCAtIE5hdmlnYXRlIHRvIHRoZSByb290L2hvbWUgcGFnZVxuICogQG1lbWJlck9mIG1vZHVsZTplbmdpbmVcbiAqL1xuZXhwb3J0IGVudW0gUm91dGVEaXJlY3Rpb25zIHtcbiAgQkFDSyA9ICdiYWNrJyxcbiAgRk9SV0FSRCA9ICdmb3J3YXJkJyxcbiAgUk9PVCA9ICdyb290Jyxcbn1cblxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBDb21wb25lbnQgdGFnIG5hbWUgY29uc3RhbnRzXG4gKiBAc3VtbWFyeSBFbnVtIGRlZmluaW5nIHRoZSB0YWcgbmFtZXMgZm9yIGN1c3RvbSBjb21wb25lbnRzIHVzZWQgaW4gdGhlIGFwcGxpY2F0aW9uLlxuICogVGhlc2UgdGFnIG5hbWVzIGFyZSB1c2VkIGZvciBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFuZCByZW5kZXJpbmcuXG4gKiBAZW51bSB7c3RyaW5nfVxuICogQHJlYWRvbmx5XG4gKiBAcHJvcGVydHkge3N0cmluZ30gTElTVF9JVEVNIC0gVGFnIG5hbWUgZm9yIGxpc3QgaXRlbSBjb21wb25lbnRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBMSVNUX0lORklOSVRFIC0gVGFnIG5hbWUgZm9yIGluZmluaXRlIHNjcm9sbGluZyBsaXN0IGNvbXBvbmVudFxuICogQHByb3BlcnR5IHtzdHJpbmd9IExJU1RfUEFHSU5BVEVEIC0gVGFnIG5hbWUgZm9yIHBhZ2luYXRlZCBsaXN0IGNvbXBvbmVudFxuICogQG1lbWJlck9mIG1vZHVsZTplbmdpbmVcbiAqL1xuZXhwb3J0IGVudW0gQ29tcG9uZW50c1RhZ05hbWVzIHtcbiAgTElTVF9JVEVNID0gJ25neC1kZWNhZi1saXN0LWl0ZW0nLFxuICBMSVNUX0lORklOSVRFID0gJ25neC1kZWNhZi1saXN0LWluZmluaXRlJyxcbiAgTElTVF9QQUdJTkFURUQgPSAnbmd4LWRlY2FmLWxpc3QtcGFnaW5hdGVkJyxcbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQmFzZSBjb21wb25lbnQgcHJvcGVydHkgbmFtZSBjb25zdGFudHNcbiAqIEBzdW1tYXJ5IEVudW0gZGVmaW5pbmcgdGhlIHN0YW5kYXJkIHByb3BlcnR5IG5hbWVzIHVzZWQgYnkgYmFzZSBjb21wb25lbnRzIGluIHRoZSBhcHBsaWNhdGlvbi5cbiAqIFRoZXNlIHByb3BlcnR5IG5hbWVzIGFyZSB1c2VkIGZvciBjb25zaXN0ZW50IHByb3BlcnR5IGFjY2VzcyBhY3Jvc3MgY29tcG9uZW50cy5cbiAqIEBlbnVtIHtzdHJpbmd9XG4gKiBAcmVhZG9ubHlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBNT0RFTCAtIFByb3BlcnR5IG5hbWUgZm9yIHRoZSBjb21wb25lbnQncyBkYXRhIG1vZGVsXG4gKiBAcHJvcGVydHkge3N0cmluZ30gTE9DQUxFIC0gUHJvcGVydHkgbmFtZSBmb3IgbG9jYWxpemF0aW9uIHNldHRpbmdzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gUEsgLSBQcm9wZXJ0eSBuYW1lIGZvciBwcmltYXJ5IGtleVxuICogQHByb3BlcnR5IHtzdHJpbmd9IElURU1TIC0gUHJvcGVydHkgbmFtZSBmb3IgY29sbGVjdGlvbiBpdGVtc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFJPVVRFIC0gUHJvcGVydHkgbmFtZSBmb3Igcm91dGluZyBpbmZvcm1hdGlvblxuICogQHByb3BlcnR5IHtzdHJpbmd9IE9QRVJBVElPTlMgLSBQcm9wZXJ0eSBuYW1lIGZvciBhdmFpbGFibGUgb3BlcmF0aW9uc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFVJRCAtIFByb3BlcnR5IG5hbWUgZm9yIHVuaXF1ZSBpZGVudGlmaWVyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gVFJBTlNMQVRBQkxFIC0gUHJvcGVydHkgbmFtZSBmb3IgdHJhbnNsYXRpb24gZmxhZ1xuICogQHByb3BlcnR5IHtzdHJpbmd9IE1BUFBFUiAtIFByb3BlcnR5IG5hbWUgZm9yIHByb3BlcnR5IG1hcHBlclxuICogQHByb3BlcnR5IHtzdHJpbmd9IElOSVRJQUxJWkVEIC0gUHJvcGVydHkgbmFtZSBmb3IgaW5pdGlhbGl6YXRpb24gc3RhdGVcbiAqIEBtZW1iZXJPZiBtb2R1bGU6ZW5naW5lXG4gKi9cbmV4cG9ydCBlbnVtIEJhc2VDb21wb25lbnRQcm9wcyB7XG4gIE1PREVMID0gJ21vZGVsJyxcbiAgTE9DQUxFID0gJ2xvY2FsZScsXG4gIFBLID0gJ3BrJyxcbiAgSVRFTVMgPSAnaXRlbXMnLFxuICBST1VURSA9ICdyb3V0ZScsXG4gIE9QRVJBVElPTlMgPSAnb3BlcmF0aW9ucycsXG4gIFVJRCA9ICd1aWQnLFxuICBUUkFOU0xBVEFCTEUgPSAndHJhbnNsYXRhYmxlJyxcbiAgTUFQUEVSID0gJ21hcHBlcicsXG4gIElOSVRJQUxJWkVEID0gJ2luaXRpYWxpemVkJyxcbn1cblxuXG4iXX0=