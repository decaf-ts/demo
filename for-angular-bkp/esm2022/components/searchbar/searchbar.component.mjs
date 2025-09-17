import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { windowEventEmitter } from '../../helpers/utils';
import { ForAngularModule } from '../../for-angular.module';
import { stringToBoolean } from '../../helpers/utils';
import { NgxBaseComponent } from '../../engine/NgxBaseComponent';
import { IonSearchbar } from '@ionic/angular/standalone';
import * as allIcons from 'ionicons/icons';
import { addIcons } from 'ionicons';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
export class SearchbarComponent extends NgxBaseComponent {
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
        } }, dependencies: [ForAngularModule, i1.NgClass, IonSearchbar] }); }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9zZWFyY2hiYXIvc2VhcmNoYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9zZWFyY2hiYXIvc2VhcmNoYmFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUcsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzlGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxLQUFLLFFBQVEsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7QUFFcEM7Ozs7Ozs7Ozs7OztHQVlHO0FBUUgsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGdCQUFnQjtJQTRRdEQ7Ozs7Ozs7T0FPRztJQUNIO1FBQ0UsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFuUjlCOzs7OztXQUtHO1FBQ0gsV0FBVztRQUNYLGtEQUFrRDtRQUVsRDs7Ozs7Ozs7OztXQVVHO1FBRUgsaUJBQVksR0FBa0MsS0FBSyxDQUFDO1FBRXBEOzs7Ozs7Ozs7V0FTRztRQUVILGdCQUFXLEdBQWlCLEtBQUssQ0FBQztRQUVsQzs7Ozs7Ozs7O1dBU0c7UUFFSCxhQUFRLEdBQW9CLElBQUks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QURBLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLEFBUkEsNEJBQVUsa0NBUW1CLDBDQUNRLDBDQUNBLDRCQUNkLG9CQUNSLDBCQUNNLDBCQUNBLGtDQUNRLDRCQUNOLGdDQUNJLDhCQUNGLHdDQUNVLDhCQUNWLGtCQUNaOzRCRE9ILGdCQUFnQixjQUFFLFlBQVk7O2lGQUU3QixrQkFBa0I7Y0FQOUIsU0FBUzsyQkFDRSxxQkFBcUIsY0FHbkIsSUFBSSxXQUNQLENBQUMsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDO29CQXlCekMsWUFBWTtrQkFEWCxLQUFLO1lBY04sV0FBVztrQkFEVixLQUFLO1lBY04sUUFBUTtrQkFEUCxLQUFLO1lBZU4sZ0JBQWdCO2tCQURmLEtBQUs7WUFXTixTQUFTO2tCQURSLEtBQUs7WUFXTixLQUFLO2tCQURKLEtBQUs7WUFXTixRQUFRO2tCQURQLEtBQUs7WUFXTixRQUFRO2tCQURQLEtBQUs7WUFXTixZQUFZO2tCQURYLEtBQUs7WUFXTixTQUFTO2tCQURSLEtBQUs7WUFXTixXQUFXO2tCQURWLEtBQUs7WUFXTixVQUFVO2tCQURULEtBQUs7WUFXTixnQkFBZ0I7a0JBRGYsS0FBSztZQVdOLGVBQWU7a0JBRGQsS0FBSztZQVdOLFVBQVU7a0JBRFQsS0FBSztZQVdOLElBQUk7a0JBREgsS0FBSztZQVdOLEtBQUs7a0JBREosS0FBSztZQVdOLFNBQVM7a0JBRFIsS0FBSztZQVdOLFNBQVM7a0JBRFIsS0FBSztZQVdOLE9BQU87a0JBRE4sS0FBSztZQVdOLFlBQVk7a0JBRFgsS0FBSztZQVdOLGlCQUFpQjtrQkFEaEIsS0FBSztZQXdCTixXQUFXO2tCQURWLE1BQU07WUFnRlAsc0JBQXNCO2tCQURyQixZQUFZO21CQUFDLGtDQUFrQyxFQUFFLENBQUMsUUFBUSxDQUFDOztrRkF4VmpELGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dG9jb21wbGV0ZVR5cGVzLCBQcmVkZWZpbmVkQ29sb3JzfSBmcm9tICdAaW9uaWMvY29yZSc7XG5pbXBvcnQgeyBTdHJpbmdPckJvb2xlYW4gfSBmcm9tICcuLi8uLi9lbmdpbmUvdHlwZXMnO1xuaW1wb3J0IHt3aW5kb3dFdmVudEVtaXR0ZXJ9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnO1xuaW1wb3J0IHsgRm9yQW5ndWxhck1vZHVsZSB9IGZyb20gJy4uLy4uL2Zvci1hbmd1bGFyLm1vZHVsZSc7XG5pbXBvcnQgeyBzdHJpbmdUb0Jvb2xlYW4gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJztcbmltcG9ydCB7IE5neEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9lbmdpbmUvTmd4QmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgeyBJb25TZWFyY2hiYXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJztcbmltcG9ydCAqIGFzIGFsbEljb25zIGZyb20gJ2lvbmljb25zL2ljb25zJztcbmltcG9ydCB7IGFkZEljb25zIH0gZnJvbSAnaW9uaWNvbnMnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBTZWFyY2hiYXIgY29tcG9uZW50IGZvciBBbmd1bGFyIGFwcGxpY2F0aW9ucy5cbiAqIEBzdW1tYXJ5IFRoZSBTZWFyY2hiYXJDb21wb25lbnQgcHJvdmlkZXMgYSBoaWdobHkgY3VzdG9taXphYmxlIHNlYXJjaCBpbnB1dCBmaWVsZCB3aXRoIGNvbXByZWhlbnNpdmVcbiAqIG9wdGlvbnMgZm9yIGFwcGVhcmFuY2UsIGJlaGF2aW9yLCBhbmQgaW50ZXJhY3Rpb24gcGF0dGVybnMuIEl0IGV4dGVuZHMgTmd4QmFzZUNvbXBvbmVudCB0byBpbmhlcml0XG4gKiBjb21tb24gZnVuY3Rpb25hbGl0eSBhbmQgaW1wbGVtZW50cyBPbkluaXQgZm9yIHByb3BlciBsaWZlY3ljbGUgbWFuYWdlbWVudC4gVGhpcyBjb21wb25lbnQgZmVhdHVyZXNcbiAqIGRlYm91bmNlZCBpbnB1dCBoYW5kbGluZywgd2luZG93IGV2ZW50IGludGVncmF0aW9uLCB2aXNpYmlsaXR5IGNvbnRyb2xzLCBhbmQgZXh0ZW5zaXZlIHN0eWxpbmcgb3B0aW9ucy5cbiAqIEl0J3MgZGVzaWduZWQgdG8gYmUgZmxleGlibGUgYW5kIGFkYXB0YWJsZSB0byBkaWZmZXJlbnQgc2VhcmNoIHJlcXVpcmVtZW50cyB3aXRoaW4gbW9kZXJuIHdlYiBhcHBsaWNhdGlvbnMuXG4gKlxuICogQGNsYXNzIFNlYXJjaGJhckNvbXBvbmVudFxuICogQGV4dGVuZHMge05neEJhc2VDb21wb25lbnR9XG4gKiBAaW1wbGVtZW50cyB7T25Jbml0fVxuICogQG1lbWJlck9mIFNlYXJjaGJhckNvbXBvbmVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZGVjYWYtc2VhcmNoYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaGJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaGJhci5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbRm9yQW5ndWxhck1vZHVsZSwgSW9uU2VhcmNoYmFyXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoYmFyQ29tcG9uZW50IGV4dGVuZHMgTmd4QmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGUgbW9kZSBvZiB0aGUgc2VhcmNoYmFyLlxuICAgKiBAc3VtbWFyeSBEZXRlcm1pbmVzIHRoZSB2aXN1YWwgc3R5bGUgb2YgdGhlIHNlYXJjaGJhciwgZWl0aGVyIGlPUyBvciBNYXRlcmlhbCBEZXNpZ24uXG4gICAqIEB0eXBlIHtcImlvc1wiIHwgXCJtZFwiIHwgdW5kZWZpbmVkfVxuICAgKiBAZGVmYXVsdCBcImlvc1wiXG4gICAqL1xuICAvLyBASW5wdXQoKVxuICAvLyBvdmVycmlkZSBtb2RlOiBcImlvc1wiIHwgXCJtZFwiIHwgdW5kZWZpbmVkID0gXCJtZFwiO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhlIGF1dG9jb21wbGV0ZSBhdHRyaWJ1dGUgZm9yIHRoZSBzZWFyY2hiYXIgaW5wdXQuXG4gICAqIEBzdW1tYXJ5IFNwZWNpZmllcyB3aGV0aGVyIHRoZSBicm93c2VyIHNob3VsZCBlbmFibGUgYXV0b2NvbXBsZXRlIGZvciB0aGUgaW5wdXQgZmllbGQuXG4gICAqIFRoaXMgY29udHJvbHMgdGhlIGJyb3dzZXIncyBidWlsdC1pbiBhdXRvY29tcGxldGUgZnVuY3Rpb25hbGl0eSwgaGVscGluZyB1c2VycyBieVxuICAgKiBzdWdnZXN0aW5nIHByZXZpb3VzbHkgZW50ZXJlZCB2YWx1ZXMgb3IgY29tbW9uIGlucHV0cy4gU2V0dGluZyB0byAnb2ZmJyBkaXNhYmxlc1xuICAgKiB0aGlzIGZlYXR1cmUgZm9yIHByaXZhY3kgb3Igc2VjdXJpdHkgcmVhc29ucy5cbiAgICpcbiAgICogQHR5cGUge0F1dG9jb21wbGV0ZVR5cGVzIHwgdW5kZWZpbmVkfVxuICAgKiBAZGVmYXVsdCBcIm9mZlwiXG4gICAqIEBtZW1iZXJPZiBTZWFyY2hiYXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGF1dG9jb21wbGV0ZTogQXV0b2NvbXBsZXRlVHlwZXMgfCB1bmRlZmluZWQgPSBcIm9mZlwiO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhlIGF1dG9jb3JyZWN0IGF0dHJpYnV0ZSBmb3IgdGhlIHNlYXJjaGJhciBpbnB1dC5cbiAgICogQHN1bW1hcnkgQ29udHJvbHMgd2hldGhlciB0aGUgYnJvd3NlciBzaG91bGQgZW5hYmxlIGF1dG9jb3JyZWN0IGZ1bmN0aW9uYWxpdHkgZm9yIHRoZSBpbnB1dCBmaWVsZC5cbiAgICogV2hlbiBlbmFibGVkLCB0aGUgYnJvd3NlciB3aWxsIGF1dG9tYXRpY2FsbHkgY29ycmVjdCBzcGVsbGluZyBtaXN0YWtlcyBhcyB0aGUgdXNlciB0eXBlcy5cbiAgICogVGhpcyBpcyB0eXBpY2FsbHkgZGlzYWJsZWQgZm9yIHNlYXJjaCBmaWVsZHMgdG8gcHJlc2VydmUgdGhlIHVzZXIncyBleGFjdCBzZWFyY2ggdGVybXMuXG4gICAqXG4gICAqIEB0eXBlIHtcIm9uXCIgfCBcIm9mZlwifVxuICAgKiBAZGVmYXVsdCBcIm9mZlwiXG4gICAqIEBtZW1iZXJPZiBTZWFyY2hiYXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGF1dG9jb3JyZWN0OiBcIm9uXCIgfCBcIm9mZlwiID0gXCJvZmZcIjtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFdoZXRoZXIgdGhlIHNlYXJjaGJhciBzaG91bGQgYW5pbWF0ZS5cbiAgICogQHN1bW1hcnkgQ29udHJvbHMgdGhlIGFuaW1hdGlvbiBiZWhhdmlvciBvZiB0aGUgc2VhcmNoYmFyIGR1cmluZyBhcHBlYXJhbmNlIGFuZCBkaXNhcHBlYXJhbmNlIHRyYW5zaXRpb25zLlxuICAgKiBXaGVuIGVuYWJsZWQsIHRoZSBzZWFyY2hiYXIgd2lsbCB1c2Ugc21vb3RoIGFuaW1hdGlvbnMgZm9yIHN0YXRlIGNoYW5nZXMsIHByb3ZpZGluZyBhIG1vcmVcbiAgICogcG9saXNoZWQgdXNlciBleHBlcmllbmNlLiBUaGlzIGFmZmVjdHMgdHJhbnNpdGlvbnMgbGlrZSBzaG93aW5nL2hpZGluZyB0aGUgY29tcG9uZW50LlxuICAgKlxuICAgKiBAdHlwZSB7U3RyaW5nT3JCb29sZWFufVxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqIEBtZW1iZXJPZiBTZWFyY2hiYXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGFuaW1hdGVkOiBTdHJpbmdPckJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhlIHRleHQgZm9yIHRoZSBjYW5jZWwgYnV0dG9uLlxuICAgKiBAc3VtbWFyeSBTcGVjaWZpZXMgdGhlIGxvY2FsaXplZCB0ZXh0IHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgY2FuY2VsIGJ1dHRvbiBvZiB0aGUgc2VhcmNoYmFyLlxuICAgKiBUaGlzIHRleHQgYXBwZWFycyB3aGVuIHRoZSBjYW5jZWwgYnV0dG9uIGlzIHZpc2libGUgYW5kIHByb3ZpZGVzIHVzZXJzIHdpdGggYSBjbGVhclxuICAgKiBpbmRpY2F0aW9uIG9mIGhvdyB0byBkaXNtaXNzIHRoZSBzZWFyY2ggaW50ZXJmYWNlLiBUaGUgdGV4dCBjYW4gYmUgY3VzdG9taXplZCBmb3JcbiAgICogZGlmZmVyZW50IGxhbmd1YWdlcyBhbmQgY3VsdHVyYWwgY29udGV4dHMuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0IFwiQ2FuY2VsXCJcbiAgICogQG1lbWJlck9mIFNlYXJjaGJhckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgYnV0dG9uQ2FuY2VsVGV4dDogc3RyaW5nID0gXCJDYW5jZWxcIjtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFRoZSBpY29uIHRvIHVzZSBmb3IgdGhlIGNsZWFyIGJ1dHRvbi5cbiAgICogQHN1bW1hcnkgU3BlY2lmaWVzIHRoZSBpY29uIHRvIGJlIGRpc3BsYXllZCBmb3IgdGhlIGNsZWFyIGJ1dHRvbiBvZiB0aGUgc2VhcmNoYmFyLlxuICAgKiBAdHlwZSB7c3RyaW5nIHwgdW5kZWZpbmVkfVxuICAgKiBAZGVmYXVsdCB1bmRlZmluZWRcbiAgICogQG1lbWJlck9mIFNlYXJjaGJhckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgY2xlYXJJY29uOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGUgY29sb3Igb2YgdGhlIHNlYXJjaGJhci5cbiAgICogQHN1bW1hcnkgU3BlY2lmaWVzIHRoZSBjb2xvciB0aGVtZSB0byBiZSBhcHBsaWVkIHRvIHRoZSBzZWFyY2hiYXIuXG4gICAqIEB0eXBlIHtzdHJpbmcgfCB1bmRlZmluZWR9XG4gICAqIEBkZWZhdWx0IHVuZGVmaW5lZFxuICAgKiBAbWVtYmVyT2YgU2VhcmNoYmFyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBjb2xvcjogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhlIGFtb3VudCBvZiB0aW1lLCBpbiBtaWxsaXNlY29uZHMsIHRvIHdhaXQgdG8gdHJpZ2dlciB0aGUgYGlvbkNoYW5nZWAgZXZlbnQgYWZ0ZXIgZWFjaCBrZXlzdHJva2UuXG4gICAqIEBzdW1tYXJ5IENvbnRyb2xzIHRoZSBkZWJvdW5jZSB0aW1lIGZvciB0aGUgc2VhcmNoIGlucHV0IHRvIHJlZHVjZSB0aGUgZnJlcXVlbmN5IG9mIGV2ZW50IGVtaXNzaW9ucy5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlZmF1bHQgNTAwXG4gICAqIEBtZW1iZXJPZiBTZWFyY2hiYXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGRlYm91bmNlOiBudW1iZXIgPSA1MDA7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBXaGV0aGVyIHRoZSBzZWFyY2hiYXIgaXMgZGlzYWJsZWQuXG4gICAqIEBzdW1tYXJ5IENvbnRyb2xzIHdoZXRoZXIgdGhlIHNlYXJjaGJhciBpcyBpbnRlcmFjdGl2ZSBvciBub3QuXG4gICAqIEB0eXBlIHtTdHJpbmdPckJvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJPZiBTZWFyY2hiYXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBTdHJpbmdPckJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEEgaGludCB0byB0aGUgYnJvd3NlciBmb3Igd2hpY2ggZW50ZXIga2V5IHRvIGRpc3BsYXkuXG4gICAqIEBzdW1tYXJ5IFNwZWNpZmllcyB0aGUgdHlwZSBvZiBhY3Rpb24gdGhhdCB3aWxsIGJlIHBlcmZvcm1lZCB3aGVuIHRoZSBlbnRlciBrZXkgaXMgcHJlc3NlZC5cbiAgICogQHR5cGUge1wic2VhcmNoXCIgfCBcImVudGVyXCIgfCBcImRvbmVcIiB8IFwiZ29cIiB8IFwibmV4dFwiIHwgXCJwcmV2aW91c1wiIHwgXCJzZW5kXCIgfCB1bmRlZmluZWR9XG4gICAqIEBkZWZhdWx0IFwiZW50ZXJcIlxuICAgKiBAbWVtYmVyT2YgU2VhcmNoYmFyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBlbnRlcmtleWhpbnQ6IFwic2VhcmNoXCIgfCBcImVudGVyXCIgfCBcImRvbmVcIiB8IFwiZ29cIiB8IFwibmV4dFwiIHwgXCJwcmV2aW91c1wiIHwgXCJzZW5kXCIgfCB1bmRlZmluZWQgPSBcImVudGVyXCI7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGUgaW5wdXQgbW9kZSBmb3IgdGhlIHNlYXJjaGJhci5cbiAgICogQHN1bW1hcnkgU3BlY2lmaWVzIHRoZSB0eXBlIG9mIGRhdGEgdGhhdCBtaWdodCBiZSBlbnRlcmVkIGJ5IHRoZSB1c2VyIHdoaWxlIGVkaXRpbmcgdGhlIGVsZW1lbnQgb3IgaXRzIGNvbnRlbnRzLlxuICAgKiBAdHlwZSB7XCJ0ZXh0XCIgfCBcInNlYXJjaFwiIHwgXCJub25lXCIgfCBcImVtYWlsXCIgfCBcInRlbFwiIHwgXCJ1cmxcIiB8IFwibnVtZXJpY1wiIHwgXCJkZWNpbWFsXCIgfCB1bmRlZmluZWR9XG4gICAqIEBkZWZhdWx0ICdzZWFyY2gnXG4gICAqIEBtZW1iZXJPZiBTZWFyY2hiYXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGlucHV0bW9kZTogXCJ0ZXh0XCIgfCBcInNlYXJjaFwiIHwgXCJub25lXCIgfCBcImVtYWlsXCIgfCBcInRlbFwiIHwgXCJ1cmxcIiB8IFwibnVtZXJpY1wiIHwgXCJkZWNpbWFsXCIgfCB1bmRlZmluZWQgPSAnc2VhcmNoJztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFRoZSBwbGFjZWhvbGRlciBmb3IgdGhlIHNlYXJjaGJhciBpbnB1dC5cbiAgICogQHN1bW1hcnkgU3BlY2lmaWVzIHRoZSBwbGFjZWhvbGRlciB0ZXh0IHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgc2VhcmNoYmFyIHdoZW4gaXQncyBlbXB0eS5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgXCJTZWFyY2hcIlxuICAgKiBAbWVtYmVyT2YgU2VhcmNoYmFyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlciA9IFwiU2VhcmNoXCI7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGUgaWNvbiB0byB1c2UgZm9yIHRoZSBzZWFyY2ggYnV0dG9uLlxuICAgKiBAc3VtbWFyeSBTcGVjaWZpZXMgdGhlIGljb24gdG8gYmUgZGlzcGxheWVkIGZvciB0aGUgc2VhcmNoIGJ1dHRvbiBvZiB0aGUgc2VhcmNoYmFyLlxuICAgKiBAdHlwZSB7c3RyaW5nIHwgdW5kZWZpbmVkfVxuICAgKiBAZGVmYXVsdCBcInNlYXJjaC1vdXRsaW5lXCJcbiAgICogQG1lbWJlck9mIFNlYXJjaGJhckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgc2VhcmNoSWNvbjogc3RyaW5nIHwgdW5kZWZpbmVkID0gXCJzZWFyY2gtb3V0bGluZVwiO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gV2hlbiB0byBzaG93IHRoZSBjYW5jZWwgYnV0dG9uLlxuICAgKiBAc3VtbWFyeSBDb250cm9scyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgY2FuY2VsIGJ1dHRvbiBpbiBkaWZmZXJlbnQgc3RhdGVzIG9mIHRoZSBzZWFyY2hiYXIuXG4gICAqIEB0eXBlIHtcImFsd2F5c1wiIHwgXCJmb2N1c1wiIHwgXCJuZXZlclwifVxuICAgKiBAZGVmYXVsdCBcIm5ldmVyXCJcbiAgICogQG1lbWJlck9mIFNlYXJjaGJhckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgc2hvd0NhbmNlbEJ1dHRvbjogXCJhbHdheXNcIiB8IFwiZm9jdXNcIiB8IFwibmV2ZXJcIiA9IFwibmV2ZXJcIjtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFdoZW4gdG8gc2hvdyB0aGUgY2xlYXIgYnV0dG9uLlxuICAgKiBAc3VtbWFyeSBDb250cm9scyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgY2xlYXIgYnV0dG9uIGluIGRpZmZlcmVudCBzdGF0ZXMgb2YgdGhlIHNlYXJjaGJhci5cbiAgICogQHR5cGUge1wiYWx3YXlzXCIgfCBcImZvY3VzXCIgfCBcIm5ldmVyXCJ9XG4gICAqIEBkZWZhdWx0IFwiZm9jdXNcIlxuICAgKiBAbWVtYmVyT2YgU2VhcmNoYmFyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBzaG93Q2xlYXJCdXR0b246IFwiYWx3YXlzXCIgfCBcImZvY3VzXCIgfCBcIm5ldmVyXCIgPSBcImZvY3VzXCI7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBXaGV0aGVyIHRvIGVuYWJsZSBzcGVsbGNoZWNrIG9uIHRoZSBzZWFyY2hiYXIgaW5wdXQuXG4gICAqIEBzdW1tYXJ5IENvbnRyb2xzIHdoZXRoZXIgdGhlIGJyb3dzZXIncyBzcGVsbGNoZWNrIGZlYXR1cmUgaXMgZW5hYmxlZCBmb3IgdGhlIHNlYXJjaGJhciBpbnB1dC5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJPZiBTZWFyY2hiYXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNwZWxsY2hlY2s6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFRoZSB0eXBlIG9mIGlucHV0IHRvIHVzZSBmb3IgdGhlIHNlYXJjaGJhci5cbiAgICogQHN1bW1hcnkgU3BlY2lmaWVzIHRoZSB0eXBlIG9mIGNvbnRyb2wgdG8gZGlzcGxheSBmb3IgdGhlIHNlYXJjaGJhciBpbnB1dC5cbiAgICogQHR5cGUge1wibnVtYmVyXCIgfCBcInRleHRcIiB8IFwic2VhcmNoXCIgfCBcImVtYWlsXCIgfCBcInBhc3N3b3JkXCIgfCBcInRlbFwiIHwgXCJ1cmxcIiB8IHVuZGVmaW5lZH1cbiAgICogQGRlZmF1bHQgXCJzZWFyY2hcIlxuICAgKiBAbWVtYmVyT2YgU2VhcmNoYmFyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICB0eXBlOiBcIm51bWJlclwiIHwgXCJ0ZXh0XCIgfCBcInNlYXJjaFwiIHwgXCJlbWFpbFwiIHwgXCJwYXNzd29yZFwiIHwgXCJ0ZWxcIiB8IFwidXJsXCIgfCB1bmRlZmluZWQgPSBcInNlYXJjaFwiO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhlIHZhbHVlIG9mIHRoZSBzZWFyY2hiYXIgaW5wdXQuXG4gICAqIEBzdW1tYXJ5IFNwZWNpZmllcyB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgc2VhcmNoYmFyIGlucHV0LlxuICAgKiBAdHlwZSB7bnVsbCB8IHN0cmluZyB8IHVuZGVmaW5lZH1cbiAgICogQGRlZmF1bHQgXCJcIlxuICAgKiBAbWVtYmVyT2YgU2VhcmNoYmFyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICB2YWx1ZTogbnVsbCB8IHN0cmluZyB8IHVuZGVmaW5lZCA9IFwiXCI7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGUga2V5cyB0byB1c2UgZm9yIHF1ZXJ5aW5nLlxuICAgKiBAc3VtbWFyeSBTcGVjaWZpZXMgdGhlIGtleXMgdG8gYmUgdXNlZCB3aGVuIHBlcmZvcm1pbmcgYSBzZWFyY2ggcXVlcnkuXG4gICAqIEB0eXBlIHtzdHJpbmcgfCBzdHJpbmdbXX1cbiAgICogQGRlZmF1bHQgXCJuYW1lXCJcbiAgICogQG1lbWJlck9mIFNlYXJjaGJhckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgcXVlcnlLZXlzOiBzdHJpbmcgfCBzdHJpbmdbXSA9IFwibmFtZVwiO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gV2hldGhlciB0aGUgc2VhcmNoYmFyIGlzIHZpc2libGUuXG4gICAqIEBzdW1tYXJ5IENvbnRyb2xzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBzZWFyY2hiYXIgY29tcG9uZW50LlxuICAgKiBAdHlwZSB7U3RyaW5nT3JCb29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAbWVtYmVyT2YgU2VhcmNoYmFyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBpc1Zpc2libGU6IFN0cmluZ09yQm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gV2hldGhlciB0byB3cmFwIHRoZSBzZWFyY2hiYXIgaW4gYSBjb250YWluZXIuXG4gICAqIEBzdW1tYXJ5IENvbnRyb2xzIHdoZXRoZXIgdGhlIHNlYXJjaGJhciBpcyB3cmFwcGVkIGluIGFuIGFkZGl0aW9uYWwgY29udGFpbmVyIGVsZW1lbnQuXG4gICAqIEB0eXBlIHtTdHJpbmdPckJvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJPZiBTZWFyY2hiYXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHdyYXBwZXI6IFN0cmluZ09yQm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhlIGNvbG9yIG9mIHRoZSB3cmFwcGVyLlxuICAgKiBAc3VtbWFyeSBTcGVjaWZpZXMgdGhlIGNvbG9yIHRoZW1lIHRvIGJlIGFwcGxpZWQgdG8gdGhlIHdyYXBwZXIgY29udGFpbmVyLCBpZiBwcmVzZW50LlxuICAgKiBAdHlwZSB7UHJlZGVmaW5lZENvbG9yc31cbiAgICogQGRlZmF1bHQgXCJwcmltYXJ5XCJcbiAgICogQG1lbWJlck9mIFNlYXJjaGJhckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgd3JhcHBlckNvbG9yOiBQcmVkZWZpbmVkQ29sb3JzID0gXCJwcmltYXJ5XCI7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBXaGV0aGVyIHRvIGVtaXQgZXZlbnRzIHRvIHRoZSB3aW5kb3cuXG4gICAqIEBzdW1tYXJ5IENvbnRyb2xzIHdoZXRoZXIgc2VhcmNoIGV2ZW50cyBzaG91bGQgYmUgZW1pdHRlZCBhcyB3aW5kb3cgZXZlbnRzLlxuICAgKiBAdHlwZSB7U3RyaW5nT3JCb29sZWFufVxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqIEBtZW1iZXJPZiBTZWFyY2hiYXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGVtaXRFdmVudFRvV2luZG93OiBTdHJpbmdPckJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIHNlYXJjaGJhci5cbiAgICogQHN1bW1hcnkgU3RvcmVzIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBzZWFyY2hiYXIgaW5wdXQgZm9yIGludGVybmFsIHN0YXRlIG1hbmFnZW1lbnQgYW5kIHByb2Nlc3NpbmcuXG4gICAqIFRoaXMgcHJvcGVydHkgaXMgdXNlZCB0byB0cmFjayB0aGUgc2VhcmNoIHRlcm0gdGhyb3VnaG91dCB0aGUgY29tcG9uZW50J3MgbGlmZWN5Y2xlIGFuZFxuICAgKiBjb29yZGluYXRlIGJldHdlZW4gZGlmZmVyZW50IGV2ZW50IGhhbmRsZXJzIGFuZCBtZXRob2RzLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nIHwgdW5kZWZpbmVkfVxuICAgKiBAbWVtYmVyT2YgU2VhcmNoYmFyQ29tcG9uZW50XG4gICAqL1xuICBjdXJyZW50VmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEV2ZW50IGVtaXR0ZXIgZm9yIHNlYXJjaCBldmVudHMuXG4gICAqIEBzdW1tYXJ5IEVtaXRzIHNlYXJjaCBldmVudHMgd2hlbiB0aGUgdXNlciBpbnRlcmFjdHMgd2l0aCB0aGUgc2VhcmNoYmFyLCBwcm92aWRpbmcgYSByZWFjdGl2ZVxuICAgKiBpbnRlcmZhY2UgZm9yIHBhcmVudCBjb21wb25lbnRzIHRvIHJlc3BvbmQgdG8gc2VhcmNoIGFjdGlvbnMuIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIGJ5XG4gICAqIHZhcmlvdXMgdXNlciBpbnRlcmFjdGlvbnMgaW5jbHVkaW5nIHR5cGluZywgY2xlYXJpbmcsIGFuZCBleHBsaWNpdCBzZWFyY2ggYWN0aW9ucy5cbiAgICpcbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxzdHJpbmc+fVxuICAgKiBAbWVtYmVyT2YgU2VhcmNoYmFyQ29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgc2VhcmNoRXZlbnQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFNlYXJjaGJhckNvbXBvbmVudC5cbiAgICogQHN1bW1hcnkgSW5pdGlhbGl6ZXMgdGhlIFNlYXJjaGJhckNvbXBvbmVudCB3aXRoIGFsbCBuZWNlc3NhcnkgZGVwZW5kZW5jaWVzIGFuZCBjb25maWd1cmF0aW9ucy5cbiAgICogRHVyaW5nIGluaXRpYWxpemF0aW9uLCBpdCBhZGRzIGFsbCBhdmFpbGFibGUgSW9uaWNvbnMgdG8gdGhlIGFwcGxpY2F0aW9uJ3MgaWNvbiByZWdpc3RyeSxcbiAgICogZW5zdXJpbmcgdGhhdCBzZWFyY2ggYW5kIGNsZWFyIGljb25zIGFyZSBhdmFpbGFibGUgZm9yIHVzZSB0aHJvdWdob3V0IHRoZSBjb21wb25lbnQncyBsaWZlY3ljbGUuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBTZWFyY2hiYXJDb21wb25lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCdTZWFyY2hiYXJDb21wb25lbnQnKTtcbiAgICBhZGRJY29ucyhhbGxJY29ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gSW5pdGlhbGl6ZXMgdGhlIGNvbXBvbmVudCBhZnRlciBBbmd1bGFyIGZpcnN0IGRpc3BsYXlzIHRoZSBkYXRhLWJvdW5kIHByb3BlcnRpZXMuXG4gICAqIEBzdW1tYXJ5IFBlcmZvcm1zIGVzc2VudGlhbCBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24gYnkgY29udmVydGluZyBzdHJpbmctYmFzZWQgYm9vbGVhbiBpbnB1dHNcbiAgICogdG8gcHJvcGVyIGJvb2xlYW4gdmFsdWVzIHVzaW5nIHRoZSBzdHJpbmdUb0Jvb2xlYW4gdXRpbGl0eS4gVGhpcyBlbnN1cmVzIHRoYXQgYWxsIGJvb2xlYW5cbiAgICogcHJvcGVydGllcyB3b3JrIGNvcnJlY3RseSByZWdhcmRsZXNzIG9mIGhvdyB0aGV5IHdlcmUgcGFzc2VkIGZyb20gcGFyZW50IGNvbXBvbmVudHMgb3IgdGVtcGxhdGVzLlxuICAgKlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKlxuICAgKiBAbWVybWFpZFxuICAgKiBzZXF1ZW5jZURpYWdyYW1cbiAgICogICBwYXJ0aWNpcGFudCBBIGFzIEFuZ3VsYXIgTGlmZWN5Y2xlXG4gICAqICAgcGFydGljaXBhbnQgUyBhcyBTZWFyY2hiYXJDb21wb25lbnRcbiAgICogICBwYXJ0aWNpcGFudCBVIGFzIFV0aWxpdHkgRnVuY3Rpb25zXG4gICAqXG4gICAqICAgQS0+PlM6IG5nT25Jbml0KClcbiAgICogICBTLT4+VTogc3RyaW5nVG9Cb29sZWFuKGVtaXRFdmVudFRvV2luZG93KVxuICAgKiAgIFUtLT4+UzogYm9vbGVhbiB2YWx1ZVxuICAgKiAgIFMtPj5VOiBzdHJpbmdUb0Jvb2xlYW4od3JhcHBlcilcbiAgICogICBVLS0+PlM6IGJvb2xlYW4gdmFsdWVcbiAgICogICBTLT4+VTogc3RyaW5nVG9Cb29sZWFuKGlzVmlzaWJsZSlcbiAgICogICBVLS0+PlM6IGJvb2xlYW4gdmFsdWVcbiAgICogICBTLT4+VTogc3RyaW5nVG9Cb29sZWFuKGRpc2FibGVkKVxuICAgKiAgIFUtLT4+UzogYm9vbGVhbiB2YWx1ZVxuICAgKiAgIFMtPj5VOiBzdHJpbmdUb0Jvb2xlYW4oYW5pbWF0ZWQpXG4gICAqICAgVS0tPj5TOiBib29sZWFuIHZhbHVlXG4gICAqICAgTm90ZSBvdmVyIFM6IENvbXBvbmVudCByZWFkeSBmb3IgaW50ZXJhY3Rpb25cbiAgICpcbiAgICogQG1lbWJlck9mIFNlYXJjaGJhckNvbXBvbmVudFxuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5lbWl0RXZlbnRUb1dpbmRvdyA9IHN0cmluZ1RvQm9vbGVhbih0aGlzLmVtaXRFdmVudFRvV2luZG93KTtcbiAgICB0aGlzLndyYXBwZXIgPSBzdHJpbmdUb0Jvb2xlYW4odGhpcy53cmFwcGVyKTtcbiAgICB0aGlzLmlzVmlzaWJsZSA9IHN0cmluZ1RvQm9vbGVhbih0aGlzLmlzVmlzaWJsZSk7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHN0cmluZ1RvQm9vbGVhbih0aGlzLmRpc2FibGVkKTtcbiAgICB0aGlzLmFuaW1hdGVkID0gc3RyaW5nVG9Cb29sZWFuKHRoaXMuYW5pbWF0ZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBIYW5kbGVzIHRoZSB2aXNpYmlsaXR5IHRvZ2dsZSBvZiB0aGUgc2VhcmNoYmFyIGNvbXBvbmVudC5cbiAgICogQHN1bW1hcnkgTGlzdGVucyBmb3IgZ2xvYmFsIHdpbmRvdyBldmVudHMgdG8gdG9nZ2xlIHRoZSB2aXNpYmlsaXR5IHN0YXRlIG9mIHRoZSBzZWFyY2hiYXIuXG4gICAqIFdoZW4gdGhlIHNlYXJjaGJhciBiZWNvbWVzIHZpc2libGUsIGl0IGF1dG9tYXRpY2FsbHkgZm9jdXNlcyBvbiB0aGUgaW5wdXQgZmllbGQgYWZ0ZXIgYSBicmllZlxuICAgKiBkZWxheSB0byBlbnN1cmUgc21vb3RoIGFuaW1hdGlvbiBjb21wbGV0aW9uLiBUaGlzIHByb3ZpZGVzIGEgc2VhbWxlc3MgdXNlciBleHBlcmllbmNlIGZvclxuICAgKiBzZWFyY2ggYWN0aXZhdGlvbiB0aHJvdWdoIGtleWJvYXJkIHNob3J0Y3V0cyBvciBwcm9ncmFtbWF0aWMgdHJpZ2dlcnMuXG4gICAqXG4gICAqIEBwYXJhbSB7Q3VzdG9tRXZlbnR9IGV2ZW50IC0gVGhlIGN1c3RvbSBldmVudCB0cmlnZ2VyaW5nIHRoZSB2aXNpYmlsaXR5IHRvZ2dsZSAodW51c2VkIGJ1dCByZXF1aXJlZCBieSBIb3N0TGlzdGVuZXIpXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqXG4gICAqIEBtZXJtYWlkXG4gICAqIHNlcXVlbmNlRGlhZ3JhbVxuICAgKiAgIHBhcnRpY2lwYW50IFcgYXMgV2luZG93XG4gICAqICAgcGFydGljaXBhbnQgUyBhcyBTZWFyY2hiYXJDb21wb25lbnRcbiAgICogICBwYXJ0aWNpcGFudCBFIGFzIERPTSBFbGVtZW50XG4gICAqXG4gICAqICAgVy0+PlM6IHRvZ2dsZVNlYXJjaGJhclZpc2liaWxpdHkgZXZlbnRcbiAgICogICBTLT4+UzogaGFuZGxlVG9nZ2xlVmlzaWJpbGl0eSgpXG4gICAqICAgUy0+PlM6IFRvZ2dsZSBpc1Zpc2libGUgc3RhdGVcbiAgICogICBhbHQgaXNWaXNpYmxlIGlzIHRydWUgQU5EIGNvbXBvbmVudCBleGlzdHNcbiAgICogICAgIFMtPj5TOiBzZXRUaW1lb3V0KDEyNW1zKVxuICAgKiAgICAgUy0+PkU6IHNldEZvY3VzKCkgb24gaW9uLXNlYXJjaGJhclxuICAgKiAgIGVuZFxuICAgKlxuICAgKiBAbWVtYmVyT2YgU2VhcmNoYmFyQ29tcG9uZW50XG4gICAqL1xuICBASG9zdExpc3RlbmVyKFwid2luZG93OnRvZ2dsZVNlYXJjaGJhclZpc2liaWxpdHlcIiwgWyckZXZlbnQnXSlcbiAgaGFuZGxlVG9nZ2xlVmlzaWJpbGl0eSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzVmlzaWJsZSA9ICF0aGlzLmlzVmlzaWJsZTtcbiAgICBpZih0aGlzLmlzVmlzaWJsZSAmJiAhIXRoaXMuY29tcG9uZW50Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAodGhpcy5jb21wb25lbnQubmF0aXZlRWxlbWVudCBhcyBIVE1MSW9uU2VhcmNoYmFyRWxlbWVudCkuc2V0Rm9jdXMoKTtcbiAgICAgIH0sIDEyNSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBUcmlnZ2VycyBhIG1hbnVhbCBzZWFyY2ggZXZlbnQgd2l0aCB0aGUgY3VycmVudCBzZWFyY2hiYXIgdmFsdWUuXG4gICAqIEBzdW1tYXJ5IFJldHJpZXZlcyB0aGUgY3VycmVudCB2YWx1ZSBmcm9tIHRoZSBzZWFyY2hiYXIncyBuYXRpdmUgZWxlbWVudCBhbmQgZW1pdHMgaXQgYXMgYSBzZWFyY2ggZXZlbnQuXG4gICAqIFRoaXMgbWV0aG9kIHByb3ZpZGVzIGEgcHJvZ3JhbW1hdGljIHdheSB0byB0cmlnZ2VyIHNlYXJjaCBmdW5jdGlvbmFsaXR5LCB1c2VmdWwgZm9yIGV4dGVybmFsXG4gICAqIGNvbXBvbmVudHMgb3Iga2V5Ym9hcmQgc2hvcnRjdXRzIHRoYXQgbmVlZCB0byBleGVjdXRlIHNlYXJjaCB3aXRob3V0IHVzZXIgaW50ZXJhY3Rpb24gd2l0aCB0aGUgc2VhcmNoYmFyIGl0c2VsZi5cbiAgICpcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICogQG1lbWJlck9mIFNlYXJjaGJhckNvbXBvbmVudFxuICAgKi9cbiAgc2VhcmNoKCk6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmNvbXBvbmVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxJb25TZWFyY2hiYXJFbGVtZW50O1xuICAgIHRoaXMuc2VhcmNoRXZlbnQuZW1pdChlbGVtZW50LnZhbHVlIHx8IHVuZGVmaW5lZCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEhhbmRsZXMgdmFsdWUgY2hhbmdlcyBpbiB0aGUgc2VhcmNoYmFyIGlucHV0IGZpZWxkLlxuICAgKiBAc3VtbWFyeSBQcm9jZXNzZXMgY2hhbmdlIGV2ZW50cyBmcm9tIHRoZSBJb25pYyBzZWFyY2hiYXIgY29tcG9uZW50IGFuZCBleHRyYWN0cyB0aGUgbmV3IHZhbHVlXG4gICAqIHRvIGVtaXQgYXMgYSBzZWFyY2ggZXZlbnQuIFRoaXMgbWV0aG9kIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB1c2VyIGZpbmlzaGVzIGVkaXRpbmcgdGhlIHNlYXJjaGJhclxuICAgKiB2YWx1ZSwgcHJvdmlkaW5nIGEgd2F5IHRvIHJlYWN0IHRvIGNvbXBsZXRlZCBpbnB1dCBjaGFuZ2VzIHJhdGhlciB0aGFuIHJlYWwtdGltZSB0eXBpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7Q3VzdG9tRXZlbnR9IGV2ZW50IC0gVGhlIGNoYW5nZSBldmVudCBmcm9tIHRoZSBJb25pYyBzZWFyY2hiYXIgY29udGFpbmluZyB0aGUgbmV3IHZhbHVlXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqIEBtZW1iZXJPZiBTZWFyY2hiYXJDb21wb25lbnRcbiAgICovXG4gIGhhbmRsZUNoYW5nZShldmVudDogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmVtaXRFdmVudChldmVudD8uZGV0YWlsPy52YWx1ZSA/PyB1bmRlZmluZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBIYW5kbGVzIGNsZWFyaW5nIG9mIHRoZSBzZWFyY2hiYXIgaW5wdXQgZmllbGQuXG4gICAqIEBzdW1tYXJ5IEVtaXRzIGFuIHVuZGVmaW5lZCB2YWx1ZSBhcyBhIHNlYXJjaCBldmVudCB3aGVuIHRoZSBzZWFyY2hiYXIgaXMgY2xlYXJlZCBieSB0aGUgdXNlci5cbiAgICogVGhpcyBtZXRob2QgaXMgdHlwaWNhbGx5IHRyaWdnZXJlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyB0aGUgY2xlYXIgYnV0dG9uIG9yIHVzZXMgb3RoZXJcbiAgICogY2xlYXIgbWVjaGFuaXNtcywgc2lnbmFsaW5nIHRoYXQgdGhlIHNlYXJjaCBzaG91bGQgYmUgcmVzZXQgb3IgY2xlYXJlZC5cbiAgICpcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICogQG1lbWJlck9mIFNlYXJjaGJhckNvbXBvbmVudFxuICAgKi9cbiAgaGFuZGxlQ2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5lbWl0RXZlbnQodW5kZWZpbmVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gSGFuZGxlcyByZWFsLXRpbWUgaW5wdXQgZXZlbnRzIG9uIHRoZSBzZWFyY2hiYXIuXG4gICAqIEBzdW1tYXJ5IFByb2Nlc3NlcyBpbnB1dCBldmVudHMgYXMgdGhlIHVzZXIgdHlwZXMsIHByb3ZpZGluZyBpbW1lZGlhdGUgZmVlZGJhY2sgZm9yIHNlYXJjaCBmdW5jdGlvbmFsaXR5LlxuICAgKiBUaGlzIG1ldGhvZCBpbXBsZW1lbnRzIHNtYXJ0IGNsZWFyaW5nIGJlaGF2aW9yIC0gaWYgdGhlIGlucHV0IGJlY29tZXMgZW1wdHksIGl0IGF1dG9tYXRpY2FsbHlcbiAgICogdHJpZ2dlcnMgdGhlIGNsZWFyIGhhbmRsZXIuIE90aGVyd2lzZSwgaXQgZW1pdHMgdGhlIGN1cnJlbnQgdmFsdWUgZm9yIHJlYWwtdGltZSBzZWFyY2ggc3VnZ2VzdGlvbnNcbiAgICogb3IgZmlsdGVyaW5nLiBUaGlzIGVuYWJsZXMgcmVzcG9uc2l2ZSBzZWFyY2ggZXhwZXJpZW5jZXMgd2l0aCBkZWJvdW5jZWQgZXZlbnQgaGFuZGxpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7Q3VzdG9tRXZlbnR9IGV2ZW50IC0gVGhlIGlucHV0IGV2ZW50IGZyb20gdGhlIElvbmljIHNlYXJjaGJhciBjb250YWluaW5nIHRoZSBjdXJyZW50IHZhbHVlXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqXG4gICAqIEBtZXJtYWlkXG4gICAqIHNlcXVlbmNlRGlhZ3JhbVxuICAgKiAgIHBhcnRpY2lwYW50IFUgYXMgVXNlclxuICAgKiAgIHBhcnRpY2lwYW50IFMgYXMgU2VhcmNoYmFyQ29tcG9uZW50XG4gICAqICAgcGFydGljaXBhbnQgRSBhcyBFdmVudCBTeXN0ZW1cbiAgICpcbiAgICogICBVLT4+UzogVHlwZSBpbiBzZWFyY2hiYXJcbiAgICogICBTLT4+UzogaGFuZGxlSW5wdXQoZXZlbnQpXG4gICAqICAgUy0+PlM6IEV4dHJhY3QgdmFsdWUgZnJvbSBldmVudFxuICAgKiAgIGFsdCB2YWx1ZSBpcyBlbXB0eSBvciBudWxsXG4gICAqICAgICBTLT4+UzogaGFuZGxlQ2xlYXIoKVxuICAgKiAgICAgUy0+PkU6IEVtaXQgdW5kZWZpbmVkXG4gICAqICAgZWxzZSB2YWx1ZSBoYXMgY29udGVudFxuICAgKiAgICAgUy0+PlM6IGVtaXRFdmVudCh2YWx1ZSlcbiAgICogICAgIFMtPj5FOiBFbWl0IHNlYXJjaCB2YWx1ZVxuICAgKiAgIGVuZFxuICAgKlxuICAgKiBAbWVtYmVyT2YgU2VhcmNoYmFyQ29tcG9uZW50XG4gICAqL1xuICBoYW5kbGVJbnB1dChldmVudDogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50Py5kZXRhaWw/LnZhbHVlO1xuICAgIGlmKCF2YWx1ZSB8fCAhdmFsdWU/Lmxlbmd0aClcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZUNsZWFyKCk7XG4gICAgdGhpcy5lbWl0RXZlbnQodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBIYW5kbGVzIGJsdXIgZXZlbnRzIG9uIHRoZSBzZWFyY2hiYXIuXG4gICAqIEBzdW1tYXJ5IEN1cnJlbnRseSBhbiBlbXB0eSBtZXRob2QsIGNhbiBiZSBpbXBsZW1lbnRlZCBmb3Igc3BlY2lmaWMgYmx1ciBiZWhhdmlvci5cbiAgICogQHBhcmFtIHtDdXN0b21FdmVudH0gZXZlbnQgLSBUaGUgYmx1ciBldmVudCBmcm9tIHRoZSBzZWFyY2hiYXJcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIC8vIGhhbmRsZUJsdXIoZXZlbnQ6IEN1c3RvbUV2ZW50KTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gRW1pdHMgc2VhcmNoIGV2ZW50cyB0aHJvdWdoIG11bHRpcGxlIGNoYW5uZWxzLlxuICAgKiBAc3VtbWFyeSBPcmNoZXN0cmF0ZXMgdGhlIGVtaXNzaW9uIG9mIHNlYXJjaCBldmVudHMgYm90aCBhcyBjb21wb25lbnQgb3V0cHV0IGV2ZW50cyBhbmQgb3B0aW9uYWxseVxuICAgKiBhcyBnbG9iYWwgd2luZG93IGV2ZW50cy4gVGhpcyBkdWFsLWNoYW5uZWwgYXBwcm9hY2ggZW5hYmxlcyBib3RoIGRpcmVjdCBwYXJlbnQtY2hpbGQgY29tbXVuaWNhdGlvblxuICAgKiBhbmQgYXBwbGljYXRpb24td2lkZSBldmVudCBicm9hZGNhc3RpbmcsIHN1cHBvcnRpbmcgZmxleGlibGUgaW50ZWdyYXRpb24gcGF0dGVybnMgYW5kIGxvb3NlIGNvdXBsaW5nXG4gICAqIGJldHdlZW4gY29tcG9uZW50cyB0aGF0IG5lZWQgdG8gcmVzcG9uZCB0byBzZWFyY2ggYWN0aW9ucy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmcgfCB1bmRlZmluZWR9IHZhbHVlIC0gVGhlIHNlYXJjaCB2YWx1ZSB0byBlbWl0IGFjcm9zcyBhbGwgY29uZmlndXJlZCBjaGFubmVsc1xuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKlxuICAgKiBAbWVybWFpZFxuICAgKiBzZXF1ZW5jZURpYWdyYW1cbiAgICogICBwYXJ0aWNpcGFudCBTIGFzIFNlYXJjaGJhckNvbXBvbmVudFxuICAgKiAgIHBhcnRpY2lwYW50IFAgYXMgUGFyZW50IENvbXBvbmVudFxuICAgKiAgIHBhcnRpY2lwYW50IFcgYXMgV2luZG93IEV2ZW50IFN5c3RlbVxuICAgKlxuICAgKiAgIFMtPj5TOiBlbWl0RXZlbnQodmFsdWUpXG4gICAqICAgUy0+PlA6IHNlYXJjaEV2ZW50LmVtaXQodmFsdWUpXG4gICAqICAgYWx0IGVtaXRFdmVudFRvV2luZG93IGlzIHRydWVcbiAgICogICAgIFMtPj5XOiB3aW5kb3dFdmVudEVtaXR0ZXIoJ3NlYXJjaGJhckV2ZW50Jywge3ZhbHVlfSlcbiAgICogICBlbmRcbiAgICpcbiAgICogQG1lbWJlck9mIFNlYXJjaGJhckNvbXBvbmVudFxuICAgKi9cbiAgZW1pdEV2ZW50KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaEV2ZW50LmVtaXQodmFsdWUpO1xuICAgIGlmKHRoaXMuZW1pdEV2ZW50VG9XaW5kb3cpXG4gICAgICB3aW5kb3dFdmVudEVtaXR0ZXIoJ3NlYXJjaGJhckV2ZW50Jywge3ZhbHVlOiB2YWx1ZX0pXG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFByZXZlbnRzIGRlZmF1bHQgYmVoYXZpb3Igb2YgRE9NIGV2ZW50cy5cbiAgICogQHN1bW1hcnkgVXRpbGl0eSBtZXRob2QgdG8gcHJldmVudCB1bndhbnRlZCBkZWZhdWx0IGFjdGlvbnMgb24gRE9NIGV2ZW50cywgc3VjaCBhcyBmb3JtIHN1Ym1pc3Npb25zXG4gICAqIG9yIG5hdmlnYXRpb24gdHJpZ2dlcnMuIFRoaXMgaXMgY29tbW9ubHkgdXNlZCBpbiBldmVudCBoYW5kbGVycyB3aGVyZSB0aGUgZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yXG4gICAqIHdvdWxkIGludGVyZmVyZSB3aXRoIHRoZSBjb21wb25lbnQncyBjdXN0b20gbG9naWMgb3IgdXNlciBleHBlcmllbmNlIGRlc2lnbi5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBUaGUgRE9NIGV2ZW50IHdob3NlIGRlZmF1bHQgYmVoYXZpb3Igc2hvdWxkIGJlIHByZXZlbnRlZFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKiBAbWVtYmVyT2YgU2VhcmNoYmFyQ29tcG9uZW50XG4gICAqL1xuICBwcmV2ZW50Q2hhbmdlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG4iLCI8aW9uLXNlYXJjaGJhclxuICBbaWRdPVwidWlkXCJcbiAgbmdDbGFzcz1cImRjZi1zZWFyY2hiYXJcIlxuICBuYW1lPVwic2VhcmNoXCJcbiAgbW9kZT1cImlvc1wiXG4gIChrZXl1cC5lbnRlcik9XCJwcmV2ZW50Q2hhbmdlKCRldmVudClcIlxuICAoaW9uQ2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCJcbiAgKGlvbklucHV0KT1cImhhbmRsZUlucHV0KCRldmVudClcIlxuICAoaW9uQ2xlYXIpPVwiaGFuZGxlQ2xlYXIoKVwiXG4gIFthdXRvY29tcGxldGVdPVwiYXV0b2NvbXBsZXRlXCJcbiAgW3Nob3dDYW5jZWxCdXR0b25dPVwic2hvd0NhbmNlbEJ1dHRvblwiXG4gIFtjYW5jZWxCdXR0b25UZXh0XT1cImJ1dHRvbkNhbmNlbFRleHRcIlxuICBbY2xlYXJJY29uXT1cImNsZWFySWNvblwiXG4gIFtjb2xvcl09XCJjb2xvclwiXG4gIFtkZWJvdW5jZV09XCJkZWJvdW5jZVwiXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gIFtlbnRlcmtleWhpbnRdPVwiZW50ZXJrZXloaW50XCJcbiAgW2lucHV0bW9kZV09XCJpbnB1dG1vZGVcIlxuICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICBbc2VhcmNoSWNvbl09XCJzZWFyY2hJY29uXCJcbiAgW3Nob3dDbGVhckJ1dHRvbl09XCJzaG93Q2xlYXJCdXR0b25cIlxuICBbc3BlbGxjaGVja109XCJzcGVsbGNoZWNrXCJcbiAgW3R5cGVdPVwidHlwZVwiXG4gICNjb21wb25lbnRcbiAvPlxuIl19