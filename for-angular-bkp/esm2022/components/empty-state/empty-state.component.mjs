import { __decorate, __metadata } from "tslib";
import { Component, inject, Input } from '@angular/core';
import { IonCard, IonCardContent, IonIcon, IonTitle } from '@ionic/angular/standalone';
import * as allIcons from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ForAngularModule } from '../../for-angular.module';
import { Dynamic } from '../../engine';
import { stringToBoolean } from '../../helpers';
import { NgxBaseComponent } from '../../engine/NgxBaseComponent';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular/standalone";
import * as i2 from "@angular/common";
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
export { EmptyStateComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHktc3RhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2VtcHR5LXN0YXRlL2VtcHR5LXN0YXRlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9lbXB0eS1zdGF0ZS9lbXB0eS1zdGF0ZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFXLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFDTCxPQUFPLEVBQ1AsY0FBYyxFQUNkLE9BQU8sRUFDUCxRQUFRLEVBQ1QsTUFDSSwyQkFBMkIsQ0FBQztBQUNqQyxPQUFPLEtBQUssUUFBUSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLE9BQU8sRUFBbUIsTUFBTSxjQUFjLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7OztJQ2JuQyw4QkFBZ0M7SUFDOUIsOEJBSUk7SUFDTixpQkFBTTs7O0lBR04sd0JBQWtEOzs7SUFBOUMsZ0NBQW9CO0lBQUMsMkRBQW1COzs7SUFJMUMsdUJBQXNEOzs7SUFBbkQsbUNBQXVCO0lBQUMsOERBQXNCOzs7SUFFakQsdUJBQTRE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WUFjTixJQUFJO2tCQURILEtBQUs7WUFhTixRQUFRO2tCQURQLEtBQUs7WUFhTixTQUFTO2tCQURSLEtBQUs7WUFhTixVQUFVO2tCQURULEtBQUs7WUFhTixVQUFVO2tCQURULEtBQUs7WUFjTixVQUFVO2tCQURULEtBQUs7WUFhTixXQUFXO2tCQURWLEtBQUs7WUFhTixVQUFVO2tCQURULEtBQUs7WUFhTixXQUFXO2tCQURWLEtBQUs7O2tGQTdLSyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGluamVjdCwgSW5wdXQsIE9uSW5pdCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIElvbkNhcmQsXG4gIElvbkNhcmRDb250ZW50LFxuICBJb25JY29uLFxuICBJb25UaXRsZVxufVxuZnJvbSAnQGlvbmljL2FuZ3VsYXIvc3RhbmRhbG9uZSc7XG5pbXBvcnQgKiBhcyBhbGxJY29ucyBmcm9tICdpb25pY29ucy9pY29ucyc7XG5pbXBvcnQgeyBhZGRJY29ucyB9IGZyb20gJ2lvbmljb25zJztcbmltcG9ydCB7IEZvckFuZ3VsYXJNb2R1bGUgfSBmcm9tICcuLi8uLi9mb3ItYW5ndWxhci5tb2R1bGUnO1xuaW1wb3J0IHsgRHluYW1pYywgU3RyaW5nT3JCb29sZWFuIH0gZnJvbSAnLi4vLi4vZW5naW5lJztcbmltcG9ydCB7IHN0cmluZ1RvQm9vbGVhbiB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgTmd4QmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2VuZ2luZS9OZ3hCYXNlQ29tcG9uZW50JztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IEZ1bmN0aW9uTGlrZSB9IGZyb20gJy4uLy4uL2VuZ2luZS90eXBlcyc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIENvbXBvbmVudCBmb3IgZGlzcGxheWluZyBlbXB0eSBzdGF0ZSBtZXNzYWdlcyB3aXRoIG9wdGlvbmFsIGFjdGlvbnMuXG4gKiBAc3VtbWFyeSBUaGlzIGNvbXBvbmVudCBwcm92aWRlcyBhIHN0YW5kYXJkaXplZCB3YXkgdG8gZGlzcGxheSBlbXB0eSBzdGF0ZSBtZXNzYWdlc1xuICogd2hlbiBubyBkYXRhIGlzIGF2YWlsYWJsZSBvciB3aGVuIGEgdXNlciBuZWVkcyB0byB0YWtlIGFuIGFjdGlvbiB0byBwb3B1bGF0ZSBjb250ZW50LlxuICogSXQgaW5jbHVkZXMgY3VzdG9taXphYmxlIHRpdGxlLCBzdWJ0aXRsZSwgaWNvbiwgYW5kIGFjdGlvbiBidXR0b24gZWxlbWVudHMgdGhhdCBjYW4gYmVcbiAqIHN0eWxlZCBhbmQgY29uZmlndXJlZCB0aHJvdWdoIGlucHV0IHByb3BlcnRpZXMuIFRoZSBjb21wb25lbnQgc3VwcG9ydHMgbG9jYWxpemF0aW9uXG4gKiBhbmQgY2FuIHRyaWdnZXIgbmF2aWdhdGlvbiBvciBjdXN0b20gYWN0aW9ucyB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC5cbiAqXG4gKiBAbWVybWFpZFxuICogY2xhc3NEaWFncmFtXG4gKiAgIGNsYXNzIEVtcHR5U3RhdGVDb21wb25lbnQge1xuICogICAgICtzdHJpbmcgdGl0bGVcbiAqICAgICArc3RyaW5nIHRpdGxlQ29sb3JcbiAqICAgICArc3RyaW5nIHN1YnRpdGxlXG4gKiAgICAgK3N0cmluZyBzdWJ0aXRsZUNvbG9yXG4gKiAgICAgK1N0cmluZ09yQm9vbGVhbiBzaG93SWNvblxuICogICAgICtzdHJpbmcgaWNvblxuICogICAgICtzdHJpbmcgaWNvblNpemVcbiAqICAgICArc3RyaW5nIGljb25Db2xvclxuICogICAgICtzdHJpbmd8RnVuY3Rpb24gYnV0dG9uTGlua1xuICogICAgICtzdHJpbmcgYnV0dG9uVGV4dFxuICogICAgICtzdHJpbmcgYnV0dG9uRmlsbFxuICogICAgICtzdHJpbmcgYnV0dG9uQ29sb3JcbiAqICAgICArc3RyaW5nIGJ1dHRvblNpemVcbiAqICAgICArc3RyaW5nIHNlYXJjaFZhbHVlXG4gKiAgICAgLVJvdXRlciBSb3V0ZXJcbiAqICAgICArbmdPbkluaXQoKVxuICogICAgICtoYW5kbGVDbGljaygpXG4gKiAgIH1cbiAqICAgRW1wdHlTdGF0ZUNvbXBvbmVudCAtLXw+IE5neEJhc2VDb21wb25lbnRcbiAqICAgRW1wdHlTdGF0ZUNvbXBvbmVudCAtLXw+IE9uSW5pdFxuICpcbiAqIEBleHRlbmRzIHtOZ3hCYXNlQ29tcG9uZW50fVxuICogQGltcGxlbWVudHMge09uSW5pdH1cbiAqL1xuQER5bmFtaWMoKVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWRlY2FmLWVtcHR5LXN0YXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VtcHR5LXN0YXRlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZW1wdHktc3RhdGUuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIEZvckFuZ3VsYXJNb2R1bGUsXG4gICAgSW9uQ2FyZCxcbiAgICBJb25DYXJkQ29udGVudCxcbiAgICBJb25UaXRsZSxcbiAgICBJb25JY29uXG4gIF1cblxufSlcbmV4cG9ydCBjbGFzcyBFbXB0eVN0YXRlQ29tcG9uZW50IGV4dGVuZHMgTmd4QmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGUgbWFpbiB0aXRsZSBkaXNwbGF5ZWQgaW4gdGhlIGVtcHR5IHN0YXRlLlxuICAgKiBAc3VtbWFyeSBTcGVjaWZpZXMgdGhlIHByaW1hcnkgbWVzc2FnZSB0byBzaG93IGluIHRoZSBlbXB0eSBzdGF0ZSBjb21wb25lbnQuXG4gICAqIFRoaXMgdGV4dCBpcyB0eXBpY2FsbHkgdXNlZCB0byBpbmZvcm0gdGhlIHVzZXIgYWJvdXQgd2h5IHRoZXkncmUgc2VlaW5nIGFuIGVtcHR5IHZpZXcuXG4gICAqIElmIHRyYW5zbGF0YWJsZSBpcyB0cnVlLCB0aGlzIHdpbGwgYmUgcHJvY2Vzc2VkIHRocm91Z2ggdGhlIGxvY2FsaXphdGlvbiBzeXN0ZW0uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0IFwidGl0bGVcIlxuICAgKiBAbWVtYmVyT2YgRW1wdHlTdGF0ZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgdGl0bGU6IHN0cmluZyA9IFwidGl0bGVcIjtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFRoZSBjb2xvciBvZiB0aGUgdGl0bGUgdGV4dC5cbiAgICogQHN1bW1hcnkgU3BlY2lmaWVzIHRoZSBjb2xvciBmb3IgdGhlIHRpdGxlIHRleHQgdXNpbmcgdGhlIGFwcGxpY2F0aW9uJ3MgY29sb3Igc3lzdGVtLlxuICAgKiBUaGUgdmFsdWUgc2hvdWxkIGNvcnJlc3BvbmQgdG8gYSBjb2xvciB2YXJpYWJsZSBkZWZpbmVkIGluIHRoZSBhcHBsaWNhdGlvbidzIHRoZW1lLlxuICAgKiBUaGUgY29tcG9uZW50IHdpbGwgYXV0b21hdGljYWxseSBwcmVmaXggdGhpcyB3aXRoIFwiY29sb3ItXCIgdG8gY3JlYXRlIHRoZSBDU1MgY2xhc3MuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICdncmF5LTYnXG4gICAqIEBtZW1iZXJPZiBFbXB0eVN0YXRlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICB0aXRsZUNvbG9yID0gJ2dyYXktNic7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGUgc2Vjb25kYXJ5IG1lc3NhZ2UgZGlzcGxheWVkIGluIHRoZSBlbXB0eSBzdGF0ZS5cbiAgICogQHN1bW1hcnkgUHJvdmlkZXMgYWRkaXRpb25hbCBjb250ZXh0IG9yIGluc3RydWN0aW9ucyBiZWxvdyB0aGUgbWFpbiB0aXRsZS5cbiAgICogVGhpcyB0ZXh0IGlzIHR5cGljYWxseSB1c2VkIHRvIGd1aWRlIHRoZSB1c2VyIG9uIHdoYXQgYWN0aW9ucyB0aGV5IGNhbiB0YWtlLlxuICAgKiBJZiB0cmFuc2xhdGFibGUgaXMgdHJ1ZSwgdGhpcyB3aWxsIGJlIHByb2Nlc3NlZCB0aHJvdWdoIHRoZSBsb2NhbGl6YXRpb24gc3lzdGVtLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nIHwgdW5kZWZpbmVkfVxuICAgKiBAbWVtYmVyT2YgRW1wdHlTdGF0ZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgc3VidGl0bGU6IHN0cmluZyA9IFwiXCI7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGUgY29sb3Igb2YgdGhlIHN1YnRpdGxlIHRleHQuXG4gICAqIEBzdW1tYXJ5IFNwZWNpZmllcyB0aGUgY29sb3IgZm9yIHRoZSBzdWJ0aXRsZSB0ZXh0IHVzaW5nIHRoZSBhcHBsaWNhdGlvbidzIGNvbG9yIHN5c3RlbS5cbiAgICogVGhlIHZhbHVlIHNob3VsZCBjb3JyZXNwb25kIHRvIGEgY29sb3IgdmFyaWFibGUgZGVmaW5lZCBpbiB0aGUgYXBwbGljYXRpb24ncyB0aGVtZS5cbiAgICogVGhlIGNvbXBvbmVudCB3aWxsIGF1dG9tYXRpY2FsbHkgcHJlZml4IHRoaXMgd2l0aCBcImNvbG9yLVwiIHRvIGNyZWF0ZSB0aGUgQ1NTIGNsYXNzLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAnZ3JheS00J1xuICAgKiBAbWVtYmVyT2YgRW1wdHlTdGF0ZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgc3VidGl0bGVDb2xvcjogc3RyaW5nID0gJ2dyYXktNCc7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDb250cm9scyB3aGV0aGVyIHRoZSBpY29uIGlzIGRpc3BsYXllZC5cbiAgICogQHN1bW1hcnkgRGV0ZXJtaW5lcyBpZiB0aGUgdmlzdWFsIGljb24gc2hvdWxkIGJlIHNob3duIGluIHRoZSBlbXB0eSBzdGF0ZS5cbiAgICogVGhpcyBjYW4gYmUgcHJvdmlkZWQgYXMgYSBib29sZWFuIG9yIGEgc3RyaW5nIHRoYXQgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYSBib29sZWFuLlxuICAgKiBJY29ucyBoZWxwIHZpc3VhbGx5IGNvbW11bmljYXRlIHRoZSBlbXB0eSBzdGF0ZSBjb250ZXh0IHRvIHVzZXJzLlxuICAgKlxuICAgKiBAdHlwZSB7U3RyaW5nT3JCb29sZWFufVxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqIEBtZW1iZXJPZiBFbXB0eVN0YXRlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBzaG93SWNvbjogU3RyaW5nT3JCb29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFRoZSBuYW1lIG9mIHRoZSBpY29uIHRvIGRpc3BsYXkuXG4gICAqIEBzdW1tYXJ5IFNwZWNpZmllcyB3aGljaCBpY29uIHRvIHNob3cgd2hlbiBzaG93SWNvbiBpcyB0cnVlLlxuICAgKiBUaGUgY29tcG9uZW50IHVzZXMgdGhlIGljb24gc3lzdGVtIGRlZmluZWQgaW4gdGhlIGFwcGxpY2F0aW9uLFxuICAgKiBhbmQgdGhpcyB2YWx1ZSBzaG91bGQgY29ycmVzcG9uZCB0byBhbiBhdmFpbGFibGUgaWNvbiBuYW1lLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCBcInRpLWluZm8tc3F1YXJlLXJvdW5kZWRcIlxuICAgKiBAbWVtYmVyT2YgRW1wdHlTdGF0ZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgaWNvbjogc3RyaW5nID0gXCJ0aS1pbmZvLXNxdWFyZS1yb3VuZGVkXCI7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGUgc2l6ZSBvZiB0aGUgZGlzcGxheWVkIGljb24uXG4gICAqIEBzdW1tYXJ5IENvbnRyb2xzIHRoZSBzaXplIG9mIHRoZSBpY29uIHNob3duIGluIHRoZSBlbXB0eSBzdGF0ZS5cbiAgICogQ2FuIGJlIGVpdGhlciAnbGFyZ2UnIG9yICdzbWFsbCcgdG8gYWNjb21tb2RhdGUgZGlmZmVyZW50IGxheW91dCBuZWVkcy5cbiAgICpcbiAgICogQHR5cGUgeydsYXJnZScgfCAnc21hbGwnIHwgdW5kZWZpbmVkfVxuICAgKiBAZGVmYXVsdCAnbGFyZ2UnXG4gICAqIEBtZW1iZXJPZiBFbXB0eVN0YXRlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBpY29uU2l6ZT86ICdsYXJnZScgfCAnc21hbGwnID0gJ2xhcmdlJztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFRoZSBjb2xvciBvZiB0aGUgZGlzcGxheWVkIGljb24uXG4gICAqIEBzdW1tYXJ5IFNwZWNpZmllcyB0aGUgY29sb3IgZm9yIHRoZSBpY29uIHVzaW5nIElvbmljJ3MgcHJlZGVmaW5lZCBjb2xvciBzeXN0ZW0uXG4gICAqIFRoaXMgYWxsb3dzIHRoZSBpY29uIHRvIG1hdGNoIHRoZSBhcHBsaWNhdGlvbidzIGNvbG9yIHNjaGVtZS5cbiAgICpcbiAgICogQHR5cGUge1ByZWRlZmluZWRDb2xvcnMgfCB1bmRlZmluZWR9XG4gICAqIEBkZWZhdWx0ICdtZWRpdW0nXG4gICAqIEBtZW1iZXJPZiBFbXB0eVN0YXRlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBpY29uQ29sb3I/OiBzdHJpbmcgPSAnbWVkaXVtJztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFRoZSBuYXZpZ2F0aW9uIHRhcmdldCBvciBhY3Rpb24gZm9yIHRoZSBidXR0b24uXG4gICAqIEBzdW1tYXJ5IFNwZWNpZmllcyB3aGVyZSB0aGUgYnV0dG9uIHNob3VsZCBuYXZpZ2F0ZSB0byB3aGVuIGNsaWNrZWQgb3Igd2hhdCBmdW5jdGlvblxuICAgKiBpdCBzaG91bGQgZXhlY3V0ZS4gVGhpcyBjYW4gYmUgZWl0aGVyIGEgVVJMIHN0cmluZyBvciBhIGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyBuYXZpZ2F0aW9uLlxuICAgKiBXaGVuIG5vdCBwcm92aWRlZCwgdGhlIGJ1dHRvbiB3aWxsIG5vdCBwZXJmb3JtIGFueSBhY3Rpb24uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmcgfCBGdW5jdGlvbkxpa2UgfCB1bmRlZmluZWR9XG4gICAqIEBtZW1iZXJPZiBFbXB0eVN0YXRlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBidXR0b25MaW5rPzogc3RyaW5nIHwgRnVuY3Rpb25MaWtlO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhlIHRleHQgZGlzcGxheWVkIG9uIHRoZSBhY3Rpb24gYnV0dG9uLlxuICAgKiBAc3VtbWFyeSBTcGVjaWZpZXMgdGhlIGxhYmVsIGZvciB0aGUgYWN0aW9uIGJ1dHRvbiBpbiB0aGUgZW1wdHkgc3RhdGUuXG4gICAqIElmIHRyYW5zbGF0YWJsZSBpcyB0cnVlLCB0aGlzIHdpbGwgYmUgcHJvY2Vzc2VkIHRocm91Z2ggdGhlIGxvY2FsaXphdGlvbiBzeXN0ZW0uXG4gICAqIElmIG5vdCBwcm92aWRlZCwgdGhlIGJ1dHRvbiB3aWxsIG5vdCBkaXNwbGF5IGFueSB0ZXh0LlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nIHwgdW5kZWZpbmVkfVxuICAgKiBAbWVtYmVyT2YgRW1wdHlTdGF0ZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgYnV0dG9uVGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFRoZSBmaWxsIHN0eWxlIG9mIHRoZSBhY3Rpb24gYnV0dG9uLlxuICAgKiBAc3VtbWFyeSBDb250cm9scyB0aGUgdmlzdWFsIHN0eWxlIG9mIHRoZSBidXR0b24gdXNpbmcgSW9uaWMncyBidXR0b24gZmlsbCBvcHRpb25zLlxuICAgKiAnc29saWQnIGNyZWF0ZXMgYSBidXR0b24gd2l0aCBhIHNvbGlkIGJhY2tncm91bmQsICdvdXRsaW5lJyBjcmVhdGVzIGEgYnV0dG9uIHdpdGhcbiAgICoganVzdCBhIGJvcmRlciwgYW5kICdjbGVhcicgY3JlYXRlcyBhIGJ1dHRvbiB3aXRoIG5vIGJhY2tncm91bmQgb3IgYm9yZGVyLlxuICAgKlxuICAgKiBAdHlwZSB7J2NsZWFyJyB8ICdzb2xpZCcgfCAnb3V0bGluZSd9XG4gICAqIEBkZWZhdWx0ICdzb2xpZCdcbiAgICogQG1lbWJlck9mIEVtcHR5U3RhdGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGJ1dHRvbkZpbGw6ICdjbGVhcicgfCAnc29saWQnIHwgJ291dGxpbmUnID0gICdzb2xpZCc7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGUgY29sb3Igb2YgdGhlIGFjdGlvbiBidXR0b24uXG4gICAqIEBzdW1tYXJ5IFNwZWNpZmllcyB0aGUgY29sb3IgZm9yIHRoZSBidXR0b24gdXNpbmcgSW9uaWMncyBjb2xvciBzeXN0ZW0uXG4gICAqIFRoaXMgYWxsb3dzIHRoZSBidXR0b24gdG8gbWF0Y2ggdGhlIGFwcGxpY2F0aW9uJ3MgY29sb3Igc2NoZW1lLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAncHJpbWFyeSdcbiAgICogQG1lbWJlck9mIEVtcHR5U3RhdGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGJ1dHRvbkNvbG9yOiBzdHJpbmcgPSAgJ3ByaW1hcnknO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhlIHNpemUgb2YgdGhlIGFjdGlvbiBidXR0b24uXG4gICAqIEBzdW1tYXJ5IENvbnRyb2xzIHRoZSBzaXplIG9mIHRoZSBidXR0b24gc2hvd24gaW4gdGhlIGVtcHR5IHN0YXRlLlxuICAgKiBDYW4gYmUgJ2xhcmdlJywgJ3NtYWxsJywgb3IgJ2RlZmF1bHQnIHRvIGFjY29tbW9kYXRlIGRpZmZlcmVudCBsYXlvdXQgbmVlZHMuXG4gICAqXG4gICAqIEB0eXBlIHsnbGFyZ2UnIHwgJ3NtYWxsJyB8ICdkZWZhdWx0J31cbiAgICogQGRlZmF1bHQgJ2RlZmF1bHQnXG4gICAqIEBtZW1iZXJPZiBFbXB0eVN0YXRlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBidXR0b25TaXplOiAnbGFyZ2UnIHwgJ3NtYWxsJyB8ICdkZWZhdWx0JyA9ICAnZGVmYXVsdCc7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGUgc2VhcmNoIHZhbHVlIHRoYXQgcmVzdWx0ZWQgaW4gbm8gcmVzdWx0cy5cbiAgICogQHN1bW1hcnkgV2hlbiB0aGUgZW1wdHkgc3RhdGUgaXMgc2hvd24gZHVlIHRvIGEgc2VhcmNoIHdpdGggbm8gcmVzdWx0cyxcbiAgICogdGhpcyBwcm9wZXJ0eSBjYW4gaG9sZCB0aGUgc2VhcmNoIHRlcm0gdGhhdCB3YXMgdXNlZC4gVGhpcyBjYW4gYmUgZGlzcGxheWVkXG4gICAqIGluIHRoZSBlbXB0eSBzdGF0ZSBtZXNzYWdlIHRvIHByb3ZpZGUgY29udGV4dCB0byB0aGUgdXNlci5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlck9mIEVtcHR5U3RhdGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNlYXJjaFZhbHVlITogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gU2VydmljZSBmb3IgaGFuZGxpbmcgbmF2aWdhdGlvbiBvcGVyYXRpb25zLlxuICAgKiBAc3VtbWFyeSBJbmplY3RlZCBzZXJ2aWNlIHRoYXQgcHJvdmlkZXMgbWV0aG9kcyBmb3IgbmF2aWdhdGluZyBiZXR3ZWVuIHJvdXRlcy5cbiAgICogVGhpcyBzZXJ2aWNlIGlzIHVzZWQgd2hlbiB0aGUgYnV0dG9uTGluayBpcyBhIHN0cmluZyBVUkwgdG8gbmF2aWdhdGUgdG8gdGhhdCBsb2NhdGlvbi5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge1JvdXRlcn1cbiAgICogQG1lbWJlck9mIEVtcHR5U3RhdGVDb21wb25lbnRcbiAgICovXG4gIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIgPSBpbmplY3QoUm91dGVyKTtcblxuICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyID0gaW5qZWN0KERvbVNhbml0aXplcik7XG5cbiAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UgPSBpbmplY3QoVHJhbnNsYXRlU2VydmljZSk7XG5cbiAgc2VhcmNoU3VidGl0bGUhOiBTYWZlSHRtbFxuXG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEVtcHR5U3RhdGVDb21wb25lbnQuXG4gICAqIEBzdW1tYXJ5IEluaXRpYWxpemVzIGEgbmV3IEVtcHR5U3RhdGVDb21wb25lbnQgYnkgY2FsbGluZyB0aGUgcGFyZW50IGNsYXNzIGNvbnN0cnVjdG9yXG4gICAqIHdpdGggdGhlIGNvbXBvbmVudCBuYW1lIGZvciBsb2dnaW5nIGFuZCBpZGVudGlmaWNhdGlvbiBwdXJwb3Nlcy4gVGhpcyBjb21wb25lbnQgcHJvdmlkZXNcbiAgICogYSBzdGFuZGFyZGl6ZWQgd2F5IHRvIGRpc3BsYXkgZW1wdHkgc3RhdGUgbWVzc2FnZXMgd2l0aCBvcHRpb25hbCBpY29ucyBhbmQgYWN0aW9uIGJ1dHRvbnMuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBFbXB0eVN0YXRlQ29tcG9uZW50XG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcIkVtcHR5U3RhdGVDb21wb25lbnRcIik7XG4gICAgYWRkSWNvbnMoYWxsSWNvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBJbml0aWFsaXplcyB0aGUgY29tcG9uZW50IGFmdGVyIEFuZ3VsYXIgZmlyc3QgZGlzcGxheXMgdGhlIGRhdGEtYm91bmQgcHJvcGVydGllcy5cbiAgICogQHN1bW1hcnkgU2V0cyB1cCB0aGUgY29tcG9uZW50IGJ5IHByb2Nlc3NpbmcgYm9vbGVhbiBpbnB1dHMsIGFwcGx5aW5nIGxvY2FsaXphdGlvbiB0byB0ZXh0XG4gICAqIGVsZW1lbnRzIGlmIHRyYW5zbGF0aW9uIGlzIGVuYWJsZWQsIGFuZCBmb3JtYXR0aW5nIENTUyBjbGFzc2VzIGZvciB0aXRsZSBhbmQgc3VidGl0bGUgY29sb3JzLlxuICAgKiBUaGlzIG1ldGhvZCBwcmVwYXJlcyB0aGUgY29tcG9uZW50IGZvciB1c2VyIGludGVyYWN0aW9uIGJ5IGVuc3VyaW5nIGFsbCBwcm9wZXJ0aWVzIGFyZVxuICAgKiBwcm9wZXJseSBpbml0aWFsaXplZCBhbmQgbG9jYWxpemVkLlxuICAgKlxuICAgKiBAbWVybWFpZFxuICAgKiBzZXF1ZW5jZURpYWdyYW1cbiAgICogICBwYXJ0aWNpcGFudCBBIGFzIEFuZ3VsYXIgTGlmZWN5Y2xlXG4gICAqICAgcGFydGljaXBhbnQgRSBhcyBFbXB0eVN0YXRlQ29tcG9uZW50XG4gICAqXG4gICAqICAgQS0+PkU6IG5nT25Jbml0KClcbiAgICogICBFLT4+RTogUHJvY2VzcyB0cmFuc2xhdGFibGUgZmxhZ1xuICAgKiAgIEUtPj5FOiBQcm9jZXNzIHNob3dJY29uIGZsYWdcbiAgICogICBFLT4+RTogR2V0IGxvY2FsZSBzZXR0aW5nc1xuICAgKiAgIGFsdCB0cmFuc2xhdGFibGUgaXMgdHJ1ZVxuICAgKiAgICAgRS0+PkU6IExvY2FsaXplIHRpdGxlXG4gICAqICAgICBFLT4+RTogTG9jYWxpemUgc3VidGl0bGVcbiAgICogICAgIEUtPj5FOiBMb2NhbGl6ZSBidXR0b25UZXh0XG4gICAqICAgZW5kXG4gICAqICAgRS0+PkU6IEZvcm1hdCB0aXRsZSBDU1MgY2xhc3NcbiAgICogICBFLT4+RTogRm9ybWF0IHN1YnRpdGxlIENTUyBjbGFzc1xuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgKiBAbWVtYmVyT2YgRW1wdHlTdGF0ZUNvbXBvbmVudFxuICAgKi9cbiAgYXN5bmMgbmdPbkluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5wYXJzZVByb3BzKHRoaXMpO1xuICAgIHRoaXMudHJhbnNsYXRhYmxlID0gc3RyaW5nVG9Cb29sZWFuKHRoaXMudHJhbnNsYXRhYmxlKTtcbiAgICB0aGlzLnNob3dJY29uID0gc3RyaW5nVG9Cb29sZWFuKHRoaXMuc2hvd0ljb24pO1xuICAgIHRoaXMubG9jYWxlID0gdGhpcy5nZXRMb2NhbGUodGhpcy50cmFuc2xhdGFibGUpO1xuXG4gICAgLy8gaWYodGhpcy50cmFuc2xhdGFibGUpIHtcbiAgICAvLyAgIHRoaXMudGl0bGUgPSBnZW5lcmF0ZUxvY2FsZUZyb21TdHJpbmcodGhpcy5sb2NhbGUsIHRoaXMudGl0bGUpO1xuICAgIC8vICAgdGhpcy5zdWJ0aXRsZSA9IGdlbmVyYXRlTG9jYWxlRnJvbVN0cmluZyh0aGlzLmxvY2FsZSwgdGhpcy5zdWJ0aXRsZSk7XG4gICAgLy8gICB0aGlzLmJ1dHRvblRleHQgPSBnZW5lcmF0ZUxvY2FsZUZyb21TdHJpbmcodGhpcy5sb2NhbGUsIHRoaXMuYnV0dG9uVGV4dCk7XG4gICAgLy8gfVxuXG4gICAgdGhpcy50aXRsZUNvbG9yID0gYGRjZi10aXRsZSBjb2xvci0ke3RoaXMudGl0bGVDb2xvcn1gO1xuICAgIHRoaXMuc3VidGl0bGVDb2xvciA9IGBkY2Ytc3VidGl0bGUgY29sb3ItJHt0aGlzLnRpdGxlQ29sb3J9YDtcblxuICAgIGlmKHRoaXMuc2VhcmNoVmFsdWUgJiYgdGhpcy50cmFuc2xhdGFibGUpXG4gICAgICB0aGlzLnNlYXJjaFN1YnRpdGxlID0gYXdhaXQgdGhpcy5nZXRTZWFyY2hTdWJ0aXRsZSh0aGlzLnN1YnRpdGxlIGFzIHN0cmluZyk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEhhbmRsZXMgY2xpY2sgZXZlbnRzIG9uIHRoZSBhY3Rpb24gYnV0dG9uLlxuICAgKiBAc3VtbWFyeSBUaGlzIG1ldGhvZCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdXNlciBjbGlja3MgdGhlIGFjdGlvbiBidXR0b24gaW4gdGhlIGVtcHR5IHN0YXRlXG4gICAqIGNvbXBvbmVudC4gSXQgc3VwcG9ydHMgdGhyZWUgbmF2aWdhdGlvbiBwYXR0ZXJuczogMSkgbm8gYWN0aW9uIHdoZW4gYnV0dG9uTGluayBpcyBub3QgcHJvdmlkZWQsXG4gICAqIDIpIGN1c3RvbSBmdW5jdGlvbiBleGVjdXRpb24gd2hlbiBidXR0b25MaW5rIGlzIGEgZnVuY3Rpb24sIGFuZCAzKSBuYXZpZ2F0aW9uIHRvIGEgc3BlY2lmaWMgVVJMXG4gICAqIHdoZW4gYnV0dG9uTGluayBpcyBhIHN0cmluZy4gVGhpcyBmbGV4aWJpbGl0eSBhbGxvd3MgdGhlIGVtcHR5IHN0YXRlIHRvIHRyaWdnZXIgdmFyaW91cyBhY3Rpb25zXG4gICAqIGJhc2VkIG9uIHRoZSBjb250ZXh0IGluIHdoaWNoIGl0J3MgdXNlZC5cbiAgICpcbiAgICogQG1lcm1haWRcbiAgICogc2VxdWVuY2VEaWFncmFtXG4gICAqICAgcGFydGljaXBhbnQgVSBhcyBVc2VyXG4gICAqICAgcGFydGljaXBhbnQgRSBhcyBFbXB0eVN0YXRlQ29tcG9uZW50XG4gICAqICAgcGFydGljaXBhbnQgTiBhcyBSb3V0ZXJcbiAgICpcbiAgICogICBVLT4+RTogQ2xpY2sgYWN0aW9uIGJ1dHRvblxuICAgKiAgIEUtPj5FOiBoYW5kbGVDbGljaygpXG4gICAqICAgYWx0IGJ1dHRvbkxpbmsgaXMgbm90IHByb3ZpZGVkXG4gICAqICAgICBFLS0+PlU6IFJldHVybiBmYWxzZSAobm8gYWN0aW9uKVxuICAgKiAgIGVsc2UgYnV0dG9uTGluayBpcyBhIGZ1bmN0aW9uXG4gICAqICAgICBFLT4+RTogRXhlY3V0ZSBidXR0b25MaW5rIGZ1bmN0aW9uXG4gICAqICAgICBFLS0+PlU6IFJldHVybiBmdW5jdGlvbiByZXN1bHRcbiAgICogICBlbHNlIGJ1dHRvbkxpbmsgaXMgYSBVUkwgc3RyaW5nXG4gICAqICAgICBFLT4+TjogbmF2aWdhdGVGb3J3YXJkKGJ1dHRvbkxpbmspXG4gICAqICAgICBOLS0+PkU6IFJldHVybiBuYXZpZ2F0aW9uIHJlc3VsdFxuICAgKiAgICAgRS0tPj5VOiBSZXR1cm4gbmF2aWdhdGlvbiByZXN1bHRcbiAgICogICBlbmRcbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbiB8IHZvaWQgfCBQcm9taXNlPGJvb2xlYW4+fVxuICAgKiAgIC0gZmFsc2UgaWYgbm8gYWN0aW9uIGlzIHRha2VuXG4gICAqICAgLSBUaGUgcmVzdWx0IG9mIHRoZSBidXR0b25MaW5rIGZ1bmN0aW9uIGlmIGl0J3MgYSBmdW5jdGlvblxuICAgKiAgIC0gQSBQcm9taXNlIHJlc29sdmluZyB0byB0aGUgbmF2aWdhdGlvbiByZXN1bHQgaWYgYnV0dG9uTGluayBpcyBhIFVSTFxuICAgKiBAbWVtYmVyT2YgRW1wdHlTdGF0ZUNvbXBvbmVudFxuICAgKi9cbiAgaGFuZGxlQ2xpY2soKTogYm9vbGVhbiB8IHZvaWQgfCBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBmbiA9IHRoaXMuYnV0dG9uTGluaztcbiAgICBpZighZm4pXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYoZm4gaW5zdGFuY2VvZiBGdW5jdGlvbilcbiAgICAgIHJldHVybiBmbigpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtmbiBhcyBzdHJpbmddKTtcbiAgfVxuXG5cbiAvKipcbiAgICogQGRlc2NyaXB0aW9uIEdlbmVyYXRlcyBhIGxvY2FsaXplZCBhbmQgc2FuaXRpemVkIHN1YnRpdGxlIGZvciBzZWFyY2ggcmVzdWx0cy5cbiAgICogQHN1bW1hcnkgVGhpcyBtZXRob2QgdGFrZXMgYSBjb250ZW50IHN0cmluZywgdHlwaWNhbGx5IHRoZSBzdWJ0aXRsZSwgYW5kIHByb2Nlc3NlcyBpdFxuICAgKiB0aHJvdWdoIHRoZSB0cmFuc2xhdGlvbiBzZXJ2aWNlLiBJdCByZXBsYWNlcyBhIHBsYWNlaG9sZGVyICgndmFsdWUwJykgd2l0aCB0aGUgYWN0dWFsXG4gICAqIHNlYXJjaCB2YWx1ZSwgdGhlbiBzYW5pdGl6ZXMgdGhlIHJlc3VsdCB0byBzYWZlbHkgdXNlIGFzIEhUTUwuIFRoaXMgaXMgcGFydGljdWxhcmx5XG4gICAqIHVzZWZ1bCBmb3IgZGlzcGxheWluZyBkeW5hbWljLCBsb2NhbGl6ZWQgbWVzc2FnZXMgaW4gdGhlIGVtcHR5IHN0YXRlIHdoZW4gYSBzZWFyY2hcbiAgICogeWllbGRzIG5vIHJlc3VsdHMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IC0gVGhlIGNvbnRlbnQgc3RyaW5nIHRvIGJlIHRyYW5zbGF0ZWQgYW5kIHByb2Nlc3NlZFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFNhZmVIdG1sPn0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBzYW5pdGl6ZWQgSFRNTCBzdHJpbmdcbiAgICpcbiAgICogQG1lcm1haWRcbiAgICogc2VxdWVuY2VEaWFncmFtXG4gICAqICAgcGFydGljaXBhbnQgRSBhcyBFbXB0eVN0YXRlQ29tcG9uZW50XG4gICAqICAgcGFydGljaXBhbnQgVCBhcyBUcmFuc2xhdGVTZXJ2aWNlXG4gICAqICAgcGFydGljaXBhbnQgUyBhcyBEb21TYW5pdGl6ZXJcbiAgICpcbiAgICogICBFLT4+VDogaW5zdGFudChjb250ZW50LCB7J3ZhbHVlMCc6IHNlYXJjaFZhbHVlfSlcbiAgICogICBULS0+PkU6IFJldHVybiB0cmFuc2xhdGVkIHN0cmluZ1xuICAgKiAgIEUtPj5TOiBieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0cmFuc2xhdGVkU3RyaW5nKVxuICAgKiAgIFMtLT4+RTogUmV0dXJuIHNhbml0aXplZCBTYWZlSHRtbFxuICAgKlxuICAgKiBAbWVtYmVyT2YgRW1wdHlTdGF0ZUNvbXBvbmVudFxuICAgKi9cbiAgYXN5bmMgZ2V0U2VhcmNoU3VidGl0bGUoY29udGVudDogc3RyaW5nKTogUHJvbWlzZTxTYWZlSHRtbD4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMudHJhbnNsYXRlLmluc3RhbnQoY29udGVudCwgeyd2YWx1ZTAnOiB0aGlzLnNlYXJjaFZhbHVlfSk7XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHJlc3VsdCk7XG4gIH1cbn1cbiIsIlxuPGlvbi1jYXJkIFtpZF09XCJ1aWRcIiBbbmdDbGFzc109XCJjbGFzc05hbWVcIj5cbiAgPGlvbi1jYXJkLWNvbnRlbnQ+XG4gICAgQGlmKGljb24gJiYgc2hvd0ljb24pIHtcbiAgICAgIDxkaXYgY2xhc3M9XCJkY2YtaWNvbi1jb250YWluZXJcIj5cbiAgICAgICAgPGlvbi1pY29uXG4gICAgICAgICAgbmFtZT1cImFsZXJ0LWNpcmNsZS1vdXRsaW5lXCJcbiAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgIGNvbG9yPVwiZGFuZ2VyXCJcbiAgICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgfVxuICAgIEBpZih0aXRsZSkge1xuICAgICAgPGg1IFtjbGFzc109XCJ0aXRsZUNvbG9yXCIgW2lubmVySFRNTF09XCJ0aXRsZVwiPjwvaDU+XG4gICAgfVxuICAgIEBpZihzdWJ0aXRsZSkge1xuICAgICAgQGlmKCFzZWFyY2hWYWx1ZSkge1xuICAgICAgICA8cCBbY2xhc3NdPVwic3VidGl0bGVDb2xvclwiIFtpbm5lckhUTUxdPVwic3VidGl0bGVcIj48L3A+XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgPHAgW2NsYXNzXT1cInN1YnRpdGxlQ29sb3JcIiBbaW5uZXJIVE1MXT1cInNlYXJjaFN1YnRpdGxlXCI+PC9wPlxuICAgICAgfVxuICAgIH1cbiAgICBAaWYoYnV0dG9uTGluayAmJiBidXR0b25UZXh0KSB7XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW9uLWJ1dHRvblxuICAgICAgICAgIFtzaXplXT1cImJ1dHRvblNpemVcIlxuICAgICAgICAgIFtmaWxsXT1cImJ1dHRvbkZpbGxcIlxuICAgICAgICAgIFtjb2xvcl09XCJidXR0b25Db2xvclwiXG4gICAgICAgICAgKGNsaWNrKT1cImhhbmRsZUNsaWNrKClcIj5cbiAgICAgICAgICB7eyAgYnV0dG9uVGV4dCB9fVxuICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gIDwvaW9uLWNhcmQtY29udGVudD5cbjwvaW9uLWNhcmQ+XG4iXX0=