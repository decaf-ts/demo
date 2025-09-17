import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, HostListener, inject, Input, Output, ViewChild } from '@angular/core';
import { OperationKeys } from '@decaf-ts/db-decorators';
import { NgxBaseComponent } from '../../engine/NgxBaseComponent';
import { ForAngularModule } from '../../for-angular.module';
import { removeFocusTrap, stringToBoolean } from '../../helpers/utils';
import { getWindowWidth, windowEventEmitter } from '../../helpers/utils';
import { Dynamic, EventConstants } from '../../engine';
import { NavController } from '@ionic/angular';
import { IonButton, IonItem, IonLabel, IonList, IonContent, IonIcon, IonListHeader, IonPopover, IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/angular/standalone';
import * as AllIcons from 'ionicons/icons';
import { addIcons } from 'ionicons';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular/standalone";
import * as i2 from "@angular/common";
import * as i3 from "@ngx-translate/core";
const _c0 = ["actionMenuComponent"];
const _c1 = [[["", "slot", "end"]]];
const _c2 = ["[slot='end']"];
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
        addIcons(AllIcons);
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
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.actionMenuComponent = _t.first);
        } }, hostBindings: function ListItemComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("resize", function ListItemComponent_resize_HostBindingHandler($event) { return ctx.enableSlideItems($event); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { lines: "lines", item: "item", icon: "icon", iconSlot: "iconSlot", button: "button", title: "title", description: "description", info: "info", subinfo: "subinfo" }, outputs: { clickEvent: "clickEvent" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], ngContentSelectors: _c2, decls: 1, vars: 1, consts: [["component", ""], ["actionMenuComponent", ""], [3, "click", "id", "lines", "button"], [1, "dcf-icon", 3, "slot"], [1, "dcf-width-expand"], ["dcf-grid", "", 1, "dcf-flex", "dcf-flex-middle", "dcf-grid-collapse"], [1, "dcf-icon", "dcf-grid-icon"], [1, "dcf-width-expand@s", "dcf-width-1-1", "dcf-label"], [1, "dcf-item-title", 3, "innerHTML"], ["class", "dcf-description", 3, "innerHTML", 4, "ngIf"], [1, "dcf-width-auto@s", "dcf-width-expand", "dcf-info", "dcf-flex", "dcf-flex-right@s"], [1, "dcf-width-auto", "dcf-flex", "dcf-flex-middle", "dcf-flex-right"], ["id", "dcf-actions", 1, "dcf-visible@m"], ["id", "end"], ["side", "end"], ["aria-hidden", "true", "name", "reader-outline", "size", "default"], [1, "dcf-description", 3, "innerHTML"], [3, "innerHTML", 4, "ngIf"], ["class", "dcf-subinfo dcf-text-truncate", 3, "innerHTML", 4, "ngIf"], [3, "innerHTML"], [1, "dcf-subinfo", "dcf-text-truncate", 3, "innerHTML"], ["shape", "round", "fill", "clear", "color", "primary", 1, "dcf-hidden@m", 3, "click"], ["slot", "icon-only", "aria-hidden", "true", "name", "ellipsis-vertical-outline"], ["side", "bottom", "alignment", "left", 3, "didDismiss", "isOpen"], [1, "ion-padding"], ["lines", "none"], [1, "dcf-text-capitalize", 3, "innerHTML"], [3, "button"], [3, "click", "button"], ["aria-hidden", "true", "slot", "start", 1, "dcf-flex", "dcf-flex-middle"], ["color", "primary", "aria-hidden", "true", "name", "create-outline"], ["color", "danger", "aria-hidden", "true", "name", "trash"], [1, "dcf-text-capitalize"], ["side", "end", 3, "ionSwipe"], [1, "dcf-update", 3, "expandable"], [1, "dcf-", "delete", 3, "expandable"], [1, "dcf-update", 3, "click", "expandable"], ["aria-hidden", "true", "slot", "icon-only", "name", "create-outline"], [1, "dcf-", "delete", 3, "click", "expandable"], ["aria-hidden", "true", "slot", "icon-only", "name", "trash"]], template: function ListItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
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
export { ListItemComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFHLE1BQU0sZUFBZSxDQUFDO0FBQ2pILE9BQU8sRUFBa0IsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQXVCLE1BQU0sY0FBYyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsU0FBUyxFQUNULE9BQU8sRUFDUCxRQUFRLEVBQ1IsT0FBTyxFQUNQLFVBQVUsRUFDVixPQUFPLEVBQ1AsYUFBYSxFQUNiLFVBQVUsRUFDVixjQUFjLEVBQ2QsY0FBYyxFQUNkLGFBQWEsRUFDZCxNQUFNLDJCQUEyQixDQUFDO0FBQ25DLE9BQU8sS0FBSyxRQUFRLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7Ozs7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S0FBSyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7a0hBaGFVLGlCQUFpQjtvRUFBakIsaUJBQWlCOzs7Ozs7WUFBakIsOEZBQUEsNEJBQXdCLCtCQUFQOzs7WUNyRjlCLHNGQUEyQjs7WUFBM0IsdURBbUhDOzRCRDdDRyxnQkFBZ0IsMERBQ2hCLE9BQU87WUFDUCxhQUFhO1lBQ2IsT0FBTztZQUNQLGNBQWM7WUFDZCxjQUFjO1lBQ2QsYUFBYTtZQUNiLE9BQU87WUFDUCxRQUFRO1lBR1IsVUFBVTs7QUFJRCxpQkFBaUI7SUF0QjdCLE9BQU8sRUFBRTs7R0FzQkcsaUJBQWlCLENBaWE3Qjs7aUZBamFZLGlCQUFpQjtjQXJCN0IsU0FBUzsyQkFDRSxxQkFBcUIsY0FHbkIsSUFBSSxXQUNQO29CQUNQLGdCQUFnQjtvQkFDaEIsT0FBTztvQkFDUCxhQUFhO29CQUNiLE9BQU87b0JBQ1AsY0FBYztvQkFDZCxjQUFjO29CQUNkLGFBQWE7b0JBQ2IsT0FBTztvQkFDUCxRQUFRO29CQUNSLFNBQVM7b0JBQ1QsVUFBVTtvQkFDVixVQUFVO2lCQUNYO29CQWVELG1CQUFtQjtrQkFEbEIsU0FBUzttQkFBQyxxQkFBcUI7WUFjaEMsS0FBSztrQkFESixLQUFLO1lBYUcsSUFBSTtrQkFEWixLQUFLO1lBYU4sSUFBSTtrQkFESCxLQUFLO1lBY04sUUFBUTtrQkFEUCxLQUFLO1lBY04sTUFBTTtrQkFETCxLQUFLO1lBYU4sS0FBSztrQkFESixLQUFLO1lBYU4sV0FBVztrQkFEVixLQUFLO1lBYU4sSUFBSTtrQkFESCxLQUFLO1lBYU4sT0FBTztrQkFETixLQUFLO1lBYU4sVUFBVTtrQkFEVCxNQUFNO1lBbUxQLGdCQUFnQjtrQkFEZixZQUFZO21CQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7a0ZBeFQ5QixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBpbmplY3QsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3J1ZE9wZXJhdGlvbnMsIE9wZXJhdGlvbktleXMgfSBmcm9tICdAZGVjYWYtdHMvZGItZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBTdHJpbmdPckJvb2xlYW4gfSBmcm9tICcuLi8uLi9lbmdpbmUvdHlwZXMnO1xuaW1wb3J0IHsgTmd4QmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2VuZ2luZS9OZ3hCYXNlQ29tcG9uZW50JztcbmltcG9ydCB7IEZvckFuZ3VsYXJNb2R1bGUgfSBmcm9tICcuLi8uLi9mb3ItYW5ndWxhci5tb2R1bGUnO1xuaW1wb3J0IHsgcmVtb3ZlRm9jdXNUcmFwLCBzdHJpbmdUb0Jvb2xlYW4gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJztcbmltcG9ydCB7IGdldFdpbmRvd1dpZHRoLCB3aW5kb3dFdmVudEVtaXR0ZXIgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJztcbmltcG9ydCB7IER5bmFtaWMsIEV2ZW50Q29uc3RhbnRzLCBMaXN0SXRlbUN1c3RvbUV2ZW50IH0gZnJvbSAnLi4vLi4vZW5naW5lJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQge1xuICBJb25CdXR0b24sXG4gIElvbkl0ZW0sXG4gIElvbkxhYmVsLFxuICBJb25MaXN0LFxuICBJb25Db250ZW50LFxuICBJb25JY29uLFxuICBJb25MaXN0SGVhZGVyLFxuICBJb25Qb3BvdmVyLFxuICBJb25JdGVtU2xpZGluZyxcbiAgSW9uSXRlbU9wdGlvbnMsXG4gIElvbkl0ZW1PcHRpb25cbn0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvc3RhbmRhbG9uZSc7XG5pbXBvcnQgKiBhcyBBbGxJY29ucyBmcm9tICdpb25pY29ucy9pY29ucyc7XG5pbXBvcnQgeyBhZGRJY29ucyB9IGZyb20gJ2lvbmljb25zJztcblxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBIGNvbXBvbmVudCBmb3IgZGlzcGxheWluZyBhIGxpc3QgaXRlbSB3aXRoIHZhcmlvdXMgY3VzdG9taXphdGlvbiBvcHRpb25zLlxuICogQHN1bW1hcnkgVGhlIExpc3RJdGVtQ29tcG9uZW50IGlzIGFuIEFuZ3VsYXIgY29tcG9uZW50IHRoYXQgZXh0ZW5kcyBOZ3hCYXNlQ29tcG9uZW50LiBJdCBwcm92aWRlcyBhIGZsZXhpYmxlIGFuZCBjdXN0b21pemFibGUgbGlzdCBpdGVtIGludGVyZmFjZSB3aXRoIHN1cHBvcnQgZm9yIGljb25zLCBidXR0b25zLCBhbmQgdmFyaW91cyB0ZXh0IGVsZW1lbnRzLiBUaGUgY29tcG9uZW50IGFsc28gaGFuZGxlcyBhY3Rpb25zIGFuZCBuYXZpZ2F0aW9uIGJhc2VkIG9uIHVzZXIgaW50ZXJhY3Rpb25zLlxuICpcbiAqIEBjbGFzc1xuICogQGV4dGVuZHMgTmd4QmFzZUNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbGluZXM9J25vbmUnXSAtIERldGVybWluZXMgdGhlIGxpbmUgc3R5bGUgb2YgdGhlIGl0ZW0uIENhbiBiZSAnaW5zZXQnLCAnaW5zZWV0Jywgb3IgJ25vbmUnLlxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSBpdGVtIC0gVGhlIGRhdGEgaXRlbSB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIGxpc3QgaXRlbS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpY29uIC0gVGhlIG5hbWUgb2YgdGhlIGljb24gdG8gYmUgZGlzcGxheWVkLlxuICogQHBhcmFtIHsnc3RhcnQnIHwgJ2VuZCd9IFtpY29uU2xvdD0nc3RhcnQnXSAtIFRoZSBwb3NpdGlvbiBvZiB0aGUgaWNvbiB3aXRoaW4gdGhlIGl0ZW0uXG4gKiBAcGFyYW0ge1N0cmluZ09yQm9vbGVhbn0gW2J1dHRvbj10cnVlXSAtIERldGVybWluZXMgaWYgdGhlIGl0ZW0gc2hvdWxkIGJlaGF2ZSBhcyBhIGJ1dHRvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbdGl0bGVdIC0gVGhlIG1haW4gdGl0bGUgb2YgdGhlIGxpc3QgaXRlbS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbZGVzY3JpcHRpb25dIC0gQSBkZXNjcmlwdGlvbiBmb3IgdGhlIGxpc3QgaXRlbS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbaW5mb10gLSBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIGZvciB0aGUgbGlzdCBpdGVtLlxuICogQHBhcmFtIHtzdHJpbmd9IFtzdWJpbmZvXSAtIFN1Yi1pbmZvcm1hdGlvbiBmb3IgdGhlIGxpc3QgaXRlbS5cbiAqXG4gKiBAZXhhbXBsZVxuICogPG5neC1kZWNhZi1saXN0LWl0ZW1cbiAqICAgW2l0ZW1dPVwiZGF0YUl0ZW1cIlxuICogICBpY29uPVwic3RhclwiXG4gKiAgIHRpdGxlPVwiSXRlbSBUaXRsZVwiXG4gKiAgIGRlc2NyaXB0aW9uPVwiSXRlbSBEZXNjcmlwdGlvblwiXG4gKiAgIChjbGlja0V2ZW50KT1cImhhbmRsZUl0ZW1DbGljaygkZXZlbnQpXCI+XG4gKiA8L25neC1kZWNhZi1saXN0LWl0ZW0+XG4gKlxuICogQG1lcm1haWRcbiAqIHNlcXVlbmNlRGlhZ3JhbVxuICogICBwYXJ0aWNpcGFudCBDIGFzIENvbXBvbmVudFxuICogICBwYXJ0aWNpcGFudCBWIGFzIFZpZXdcbiAqICAgcGFydGljaXBhbnQgVSBhcyBVc2VyXG4gKiAgIEMtPj5WOiBJbml0aWFsaXplIGNvbXBvbmVudFxuICogICBWLT4+VTogRGlzcGxheSBsaXN0IGl0ZW1cbiAqICAgVS0+PlY6IENsaWNrIG9uIGl0ZW0gb3IgYWN0aW9uXG4gKiAgIFYtPj5DOiBUcmlnZ2VyIGhhbmRsZUFjdGlvbigpXG4gKiAgIEMtPj5DOiBQcm9jZXNzIGFjdGlvblxuICogICBDLT4+VjogVXBkYXRlIHZpZXcgb3IgbmF2aWdhdGVcbiAqL1xuQER5bmFtaWMoKVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWRlY2FmLWxpc3QtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIEZvckFuZ3VsYXJNb2R1bGUsXG4gICAgSW9uTGlzdCxcbiAgICBJb25MaXN0SGVhZGVyLFxuICAgIElvbkl0ZW0sXG4gICAgSW9uSXRlbVNsaWRpbmcsXG4gICAgSW9uSXRlbU9wdGlvbnMsXG4gICAgSW9uSXRlbU9wdGlvbixcbiAgICBJb25JY29uLFxuICAgIElvbkxhYmVsLFxuICAgIElvbkJ1dHRvbixcbiAgICBJb25Db250ZW50LFxuICAgIElvblBvcG92ZXJcbiAgXVxuXG59KVxuZXhwb3J0IGNsYXNzIExpc3RJdGVtQ29tcG9uZW50IGV4dGVuZHMgTmd4QmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBSZWZlcmVuY2UgdG8gdGhlIGFjdGlvbiBtZW51IHBvcG92ZXIgY29tcG9uZW50LlxuICAgKiBAc3VtbWFyeSBWaWV3Q2hpbGQgcmVmZXJlbmNlIHRoYXQgcHJvdmlkZXMgYWNjZXNzIHRvIHRoZSBIVE1MSW9uUG9wb3ZlckVsZW1lbnRcbiAgICogdXNlZCBmb3IgZGlzcGxheWluZyBhY3Rpb24gbWVudXMuIFRoaXMgcmVmZXJlbmNlIGlzIHVzZWQgdG8gcHJvZ3JhbW1hdGljYWxseVxuICAgKiBjb250cm9sIHRoZSBwb3BvdmVyLCBzdWNoIGFzIGRpc21pc3NpbmcgaXQgd2hlbiBuZWNlc3NhcnkuXG4gICAqXG4gICAqIEB0eXBlIHtIVE1MSW9uUG9wb3ZlckVsZW1lbnR9XG4gICAqIEBtZW1iZXJPZiBMaXN0SXRlbUNvbXBvbmVudFxuICAgKi9cbiAgQFZpZXdDaGlsZCgnYWN0aW9uTWVudUNvbXBvbmVudCcpXG4gIGFjdGlvbk1lbnVDb21wb25lbnQhOiBIVE1MSW9uUG9wb3ZlckVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDb250cm9scyB0aGUgZGlzcGxheSBvZiBsaW5lcyBhcm91bmQgdGhlIGxpc3QgaXRlbS5cbiAgICogQHN1bW1hcnkgRGV0ZXJtaW5lcyBob3cgbGluZXMgYXJlIGRpc3BsYXllZCBhcm91bmQgdGhlIGxpc3QgaXRlbSBib3JkZXJzLlxuICAgKiAnaW5zZXQnIHNob3dzIGxpbmVzIHdpdGggcGFkZGluZywgJ2Z1bGwnIHNob3dzIGZ1bGwtd2lkdGggbGluZXMsIGFuZCAnbm9uZSdcbiAgICogcmVtb3ZlcyBhbGwgbGluZXMuIFRoaXMgYWZmZWN0cyB0aGUgdmlzdWFsIHNlcGFyYXRpb24gYmV0d2VlbiBsaXN0IGl0ZW1zLlxuICAgKlxuICAgKiBAdHlwZSB7J2luc2V0JyB8ICdmdWxsJyB8ICdub25lJ31cbiAgICogQGRlZmF1bHQgJ2luc2V0J1xuICAgKiBAbWVtYmVyT2YgTGlzdEl0ZW1Db21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGxpbmVzOiAnaW5zZXQnIHwgJ2Z1bGwnIHwgJ25vbmUnID0gJ2Z1bGwnO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhlIGRhdGEgb2JqZWN0IGFzc29jaWF0ZWQgd2l0aCB0aGlzIGxpc3QgaXRlbS5cbiAgICogQHN1bW1hcnkgQ29udGFpbnMgdGhlIHJhdyBkYXRhIHRoYXQgdGhpcyBsaXN0IGl0ZW0gcmVwcmVzZW50cy4gVGhpcyBvYmplY3RcbiAgICogaXMgdXNlZCB0byBleHRyYWN0IGRpc3BsYXkgaW5mb3JtYXRpb24gYW5kIGZvciBwYXNzaW5nIHRvIGV2ZW50IGhhbmRsZXJzXG4gICAqIHdoZW4gdGhlIGl0ZW0gaXMgaW50ZXJhY3RlZCB3aXRoLiBJdCBvdmVycmlkZXMgdGhlIGJhc2UgaXRlbSBwcm9wZXJ0eS5cbiAgICpcbiAgICogQHR5cGUge1JlY29yZDxzdHJpbmcsIHVua25vd24+fVxuICAgKiBAbWVtYmVyT2YgTGlzdEl0ZW1Db21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG92ZXJyaWRlIGl0ZW0hOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFRoZSBuYW1lIG9mIHRoZSBpY29uIHRvIGRpc3BsYXkgaW4gdGhlIGxpc3QgaXRlbS5cbiAgICogQHN1bW1hcnkgU3BlY2lmaWVzIHdoaWNoIGljb24gdG8gZGlzcGxheSB1c2luZyBJb25pYydzIGljb24gc3lzdGVtLlxuICAgKiBUaGUgaWNvbiBuYW1lIHNob3VsZCBjb3JyZXNwb25kIHRvIGFuIGF2YWlsYWJsZSBJb25pYyBpY29uIG9yIGEgY3VzdG9tXG4gICAqIGljb24gdGhhdCBoYXMgYmVlbiByZWdpc3RlcmVkIHdpdGggdGhlIGljb24gcmVnaXN0cnkuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJPZiBMaXN0SXRlbUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgaWNvbiE6IHN0cmluZztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFBvc2l0aW9uIG9mIHRoZSBpY29uIHdpdGhpbiB0aGUgbGlzdCBpdGVtLlxuICAgKiBAc3VtbWFyeSBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGljb24gYXBwZWFycyBhdCB0aGUgc3RhcnQgKGxlZnQgaW4gTFRSIGxhbmd1YWdlcylcbiAgICogb3IgZW5kIChyaWdodCBpbiBMVFIgbGFuZ3VhZ2VzKSBvZiB0aGUgbGlzdCBpdGVtLiBUaGlzIGFmZmVjdHMgdGhlIG92ZXJhbGxcbiAgICogbGF5b3V0IGFuZCB2aXN1YWwgaGllcmFyY2h5IG9mIHRoZSBpdGVtIGNvbnRlbnQuXG4gICAqXG4gICAqIEB0eXBlIHsnc3RhcnQnIHwgJ2VuZCd9XG4gICAqIEBkZWZhdWx0ICdzdGFydCdcbiAgICogQG1lbWJlck9mIExpc3RJdGVtQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBpY29uU2xvdDogJ3N0YXJ0JyB8ICdlbmQnID0nc3RhcnQnO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ29udHJvbHMgd2hldGhlciB0aGUgbGlzdCBpdGVtIGJlaGF2ZXMgYXMgYSBjbGlja2FibGUgYnV0dG9uLlxuICAgKiBAc3VtbWFyeSBXaGVuIHNldCB0byB0cnVlLCB0aGUgbGlzdCBpdGVtIHdpbGwgaGF2ZSBidXR0b24tbGlrZSBiZWhhdmlvciBpbmNsdWRpbmdcbiAgICogaG92ZXIgZWZmZWN0cywgY2xpY2sgaGFuZGxpbmcsIGFuZCBhcHByb3ByaWF0ZSBhY2Nlc3NpYmlsaXR5IGF0dHJpYnV0ZXMuXG4gICAqIFdoZW4gZmFsc2UsIHRoZSBpdGVtIGlzIGRpc3BsYXllZCBhcyBzdGF0aWMgY29udGVudCB3aXRob3V0IGludGVyYWN0aXZlIGJlaGF2aW9yLlxuICAgKlxuICAgKiBAdHlwZSB7U3RyaW5nT3JCb29sZWFufVxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqIEBtZW1iZXJPZiBMaXN0SXRlbUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgYnV0dG9uOiBTdHJpbmdPckJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhlIG1haW4gdGl0bGUgdGV4dCBkaXNwbGF5ZWQgaW4gdGhlIGxpc3QgaXRlbS5cbiAgICogQHN1bW1hcnkgU2V0cyB0aGUgcHJpbWFyeSB0ZXh0IGNvbnRlbnQgdGhhdCBhcHBlYXJzIHByb21pbmVudGx5IGluIHRoZSBsaXN0IGl0ZW0uXG4gICAqIFRoaXMgaXMgdHlwaWNhbGx5IHRoZSBtb3N0IGltcG9ydGFudCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgaXRlbSBhbmQgaXMgZGlzcGxheWVkXG4gICAqIHdpdGggZW1waGFzaXMgaW4gdGhlIGNvbXBvbmVudCdzIHZpc3VhbCBoaWVyYXJjaHkuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJPZiBMaXN0SXRlbUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgdGl0bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBTZWNvbmRhcnkgZGVzY3JpcHRpdmUgdGV4dCBmb3IgdGhlIGxpc3QgaXRlbS5cbiAgICogQHN1bW1hcnkgUHJvdmlkZXMgYWRkaXRpb25hbCBjb250ZXh0IG9yIGRldGFpbHMgYWJvdXQgdGhlIGl0ZW0uIFRoaXMgdGV4dFxuICAgKiBpcyB0eXBpY2FsbHkgZGlzcGxheWVkIGJlbG93IHRoZSB0aXRsZSB3aXRoIGxlc3MgdmlzdWFsIGVtcGhhc2lzLlxuICAgKiBVc2VmdWwgZm9yIHByb3ZpZGluZyBjb250ZXh0IHdpdGhvdXQgY2x1dHRlcmluZyB0aGUgbWFpbiB0aXRsZS5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlck9mIExpc3RJdGVtQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gdGV4dCBmb3IgdGhlIGxpc3QgaXRlbS5cbiAgICogQHN1bW1hcnkgRGlzcGxheXMgc3VwcGxlbWVudGFyeSBpbmZvcm1hdGlvbiB0aGF0IHByb3ZpZGVzIGV4dHJhIGNvbnRleHRcbiAgICogYWJvdXQgdGhlIGl0ZW0uIFRoaXMgY291bGQgaW5jbHVkZSBtZXRhZGF0YSwgc3RhdHVzIGluZm9ybWF0aW9uLCBvclxuICAgKiBvdGhlciByZWxldmFudCBkZXRhaWxzIHRoYXQgZG9uJ3QgZml0IGluIHRoZSB0aXRsZSBvciBkZXNjcmlwdGlvbi5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlck9mIExpc3RJdGVtQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBpbmZvPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gU3ViLWluZm9ybWF0aW9uIHRleHQgZGlzcGxheWVkIGluIHRoZSBsaXN0IGl0ZW0uXG4gICAqIEBzdW1tYXJ5IFByb3ZpZGVzIHRlcnRpYXJ5IGxldmVsIGluZm9ybWF0aW9uIHRoYXQgY29tcGxlbWVudHMgdGhlIGluZm8gZmllbGQuXG4gICAqIFRoaXMgaXMgdHlwaWNhbGx5IHVzZWQgZm9yIGFkZGl0aW9uYWwgbWV0YWRhdGEgb3IgY29udGV4dHVhbCBkZXRhaWxzXG4gICAqIHRoYXQgYXJlIHVzZWZ1bCBidXQgbm90IGNyaXRpY2FsIGZvciB1bmRlcnN0YW5kaW5nIHRoZSBpdGVtLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyT2YgTGlzdEl0ZW1Db21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHN1YmluZm8/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBFdmVudCBlbWl0dGVyIGZvciBsaXN0IGl0ZW0gY2xpY2sgaW50ZXJhY3Rpb25zLlxuICAgKiBAc3VtbWFyeSBFbWl0cyBjdXN0b20gZXZlbnRzIHdoZW4gdGhlIGxpc3QgaXRlbSBpcyBjbGlja2VkIG9yIHdoZW4gYWN0aW9uc1xuICAgKiBhcmUgcGVyZm9ybWVkIG9uIGl0LiBUaGUgZW1pdHRlZCBldmVudCBjb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYWN0aW9uLFxuICAgKiB0aGUgaXRlbSBkYXRhLCBhbmQgb3RoZXIgcmVsZXZhbnQgY29udGV4dCBmb3IgcGFyZW50IGNvbXBvbmVudHMgdG8gaGFuZGxlLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPExpc3RJdGVtQ3VzdG9tRXZlbnQ+fVxuICAgKiBAbWVtYmVyT2YgTGlzdEl0ZW1Db21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBjbGlja0V2ZW50OiAgRXZlbnRFbWl0dGVyPExpc3RJdGVtQ3VzdG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxMaXN0SXRlbUN1c3RvbUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgc2xpZGUgaXRlbXMgYXJlIGN1cnJlbnRseSBlbmFibGVkLlxuICAgKiBAc3VtbWFyeSBDb250cm9scyB0aGUgdmlzaWJpbGl0eSBvZiBzbGlkZSBhY3Rpb25zIGJhc2VkIG9uIHNjcmVlbiBzaXplIGFuZFxuICAgKiBhdmFpbGFibGUgb3BlcmF0aW9ucy4gV2hlbiB0cnVlLCB1c2VycyBjYW4gc3dpcGUgb24gdGhlIGl0ZW0gdG8gcmV2ZWFsXG4gICAqIGFjdGlvbiBidXR0b25zIGZvciBvcGVyYXRpb25zIGxpa2UgZWRpdCBhbmQgZGVsZXRlLlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQG1lbWJlck9mIExpc3RJdGVtQ29tcG9uZW50XG4gICAqL1xuICBzaG93U2xpZGVJdGVtczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ3VycmVudCB3aW5kb3cgd2lkdGggaW4gcGl4ZWxzLlxuICAgKiBAc3VtbWFyeSBTdG9yZXMgdGhlIGN1cnJlbnQgYnJvd3NlciB3aW5kb3cgd2lkdGggd2hpY2ggaXMgdXNlZCB0byBkZXRlcm1pbmVcbiAgICogcmVzcG9uc2l2ZSBiZWhhdmlvciwgc3VjaCBhcyB3aGVuIHRvIHNob3cgb3IgaGlkZSBzbGlkZSBpdGVtcyBiYXNlZCBvblxuICAgKiBzY3JlZW4gc2l6ZS4gVXBkYXRlZCBhdXRvbWF0aWNhbGx5IG9uIHdpbmRvdyByZXNpemUgZXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAbWVtYmVyT2YgTGlzdEl0ZW1Db21wb25lbnRcbiAgICovXG4gIHdpbmRvd1dpZHRoITogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGFjdGlvbiBtZW51IHBvcG92ZXIgaXMgY3VycmVudGx5IG9wZW4uXG4gICAqIEBzdW1tYXJ5IFRyYWNrcyB0aGUgc3RhdGUgb2YgdGhlIGFjdGlvbiBtZW51IHRvIHByZXZlbnQgbXVsdGlwbGUgaW5zdGFuY2VzXG4gICAqIGZyb20gYmVpbmcgb3BlbmVkIHNpbXVsdGFuZW91c2x5IGFuZCB0byBlbnN1cmUgcHJvcGVyIGNsZWFudXAgd2hlbiBhY3Rpb25zXG4gICAqIGFyZSBwZXJmb3JtZWQuIFVzZWQgZm9yIG1hbmFnaW5nIHRoZSBwb3BvdmVyIGxpZmVjeWNsZS5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJPZiBMaXN0SXRlbUNvbXBvbmVudFxuICAgKi9cbiAgYWN0aW9uTWVudU9wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEFuZ3VsYXIgTmF2Q29udHJvbGxlciBzZXJ2aWNlIGZvciBoYW5kbGluZyBuYXZpZ2F0aW9uLlxuICAgKiBAc3VtbWFyeSBJbmplY3RlZCBzZXJ2aWNlIHRoYXQgcHJvdmlkZXMgbWV0aG9kcyBmb3IgcHJvZ3JhbW1hdGljIG5hdmlnYXRpb25cbiAgICogd2l0aGluIHRoZSBJb25pYyBhcHBsaWNhdGlvbi4gVXNlZCBmb3IgbmF2aWdhdGluZyB0byBkaWZmZXJlbnQgcm91dGVzIHdoZW5cbiAgICogbGlzdCBpdGVtIGFjdGlvbnMgYXJlIHBlcmZvcm1lZCBvciB3aGVuIHRoZSBpdGVtIGl0c2VsZiBpcyBjbGlja2VkLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7TmF2Q29udHJvbGxlcn1cbiAgICogQG1lbWJlck9mIExpc3RJdGVtQ29tcG9uZW50XG4gICAqL1xuICBwcml2YXRlIG5hdkNvbnRyb2xsZXI6IE5hdkNvbnRyb2xsZXIgPSBpbmplY3QoTmF2Q29udHJvbGxlcik7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIExpc3RJdGVtQ29tcG9uZW50LlxuICAgKiBAc3VtbWFyeSBJbml0aWFsaXplcyBhIG5ldyBMaXN0SXRlbUNvbXBvbmVudCBieSBjYWxsaW5nIHRoZSBwYXJlbnQgY2xhc3MgY29uc3RydWN0b3JcbiAgICogd2l0aCB0aGUgY29tcG9uZW50IG5hbWUgZm9yIGxvZ2dpbmcgYW5kIGlkZW50aWZpY2F0aW9uIHB1cnBvc2VzLiBBbHNvIHJlZ2lzdGVyc1xuICAgKiBhbGwgYXZhaWxhYmxlIElvbmljIGljb25zIHRvIGVuc3VyZSB0aGV5IGNhbiBiZSBkaXNwbGF5ZWQgaW4gdGhlIGNvbXBvbmVudC5cbiAgICpcbiAgICogQG1lbWJlck9mIExpc3RJdGVtQ29tcG9uZW50XG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcIkxpc3RJdGVtQ29tcG9uZW50XCIpO1xuICAgIGFkZEljb25zKEFsbEljb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBJbml0aWFsaXplcyB0aGUgY29tcG9uZW50IGFmdGVyIEFuZ3VsYXIgZmlyc3QgZGlzcGxheXMgdGhlIGRhdGEtYm91bmQgcHJvcGVydGllcy5cbiAgICogQHN1bW1hcnkgU2V0cyB1cCB0aGUgY29tcG9uZW50IGJ5IGRldGVybWluaW5nIHNsaWRlIGl0ZW0gdmlzaWJpbGl0eSwgcHJvY2Vzc2luZyBib29sZWFuIGlucHV0cyxcbiAgICogYnVpbGRpbmcgQ1NTIGNsYXNzIG5hbWVzIGJhc2VkIG9uIHByb3BlcnRpZXMsIGFuZCBjYXB0dXJpbmcgdGhlIGN1cnJlbnQgd2luZG93IHdpZHRoLlxuICAgKiBUaGlzIG1ldGhvZCBwcmVwYXJlcyB0aGUgY29tcG9uZW50IGZvciB1c2VyIGludGVyYWN0aW9uIGJ5IGVuc3VyaW5nIGFsbCBwcm9wZXJ0aWVzIGFyZVxuICAgKiBwcm9wZXJseSBpbml0aWFsaXplZCBhbmQgcmVzcG9uc2l2ZSBiZWhhdmlvciBpcyBjb25maWd1cmVkLlxuICAgKlxuICAgKiBAbWVybWFpZFxuICAgKiBzZXF1ZW5jZURpYWdyYW1cbiAgICogICBwYXJ0aWNpcGFudCBBIGFzIEFuZ3VsYXIgTGlmZWN5Y2xlXG4gICAqICAgcGFydGljaXBhbnQgTCBhcyBMaXN0SXRlbUNvbXBvbmVudFxuICAgKiAgIHBhcnRpY2lwYW50IFcgYXMgV2luZG93XG4gICAqXG4gICAqICAgQS0+Pkw6IG5nT25Jbml0KClcbiAgICogICBMLT4+TDogZW5hYmxlU2xpZGVJdGVtcygpXG4gICAqICAgTC0+Pkw6IFByb2Nlc3MgYnV0dG9uIGJvb2xlYW5cbiAgICogICBMLT4+TDogQnVpbGQgY2xhc3NOYW1lIHdpdGggZmxleCBjbGFzc2VzXG4gICAqICAgYWx0IG9wZXJhdGlvbnMgZXhpc3RcbiAgICogICAgIEwtPj5MOiBBZGQgJ2FjdGlvbicgY2xhc3NcbiAgICogICBlbmRcbiAgICogICBMLT4+VzogZ2V0V2luZG93V2lkdGgoKVxuICAgKiAgIFctLT4+TDogUmV0dXJuIGN1cnJlbnQgd2lkdGhcbiAgICogICBMLT4+TDogU3RvcmUgd2luZG93V2lkdGhcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICogQG1lbWJlck9mIExpc3RJdGVtQ29tcG9uZW50XG4gICAqL1xuICBhc3luYyBuZ09uSW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLnNob3dTbGlkZUl0ZW1zID0gdGhpcy5lbmFibGVTbGlkZUl0ZW1zKCk7XG4gICAgdGhpcy5idXR0b24gPSBzdHJpbmdUb0Jvb2xlYW4odGhpcy5idXR0b24pO1xuXG4gICAgdGhpcy5jbGFzc05hbWUgPSBgJHt0aGlzLmNsYXNzTmFtZX0gIGRjZi1mbGV4IGRjZi1mbGV4LW1pZGRsZSBncmlkLWl0ZW1gO1xuICAgIGlmKHRoaXMub3BlcmF0aW9ucz8ubGVuZ3RoKVxuICAgICAgdGhpcy5jbGFzc05hbWUgKz0gYCBhY3Rpb25gO1xuICAgIHRoaXMud2luZG93V2lkdGggPSBnZXRXaW5kb3dXaWR0aCgpIGFzIG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gSGFuZGxlcyB1c2VyIGludGVyYWN0aW9ucyBhbmQgYWN0aW9ucyBwZXJmb3JtZWQgb24gdGhlIGxpc3QgaXRlbS5cbiAgICogQHN1bW1hcnkgVGhpcyBtZXRob2QgaXMgdGhlIGNlbnRyYWwgYWN0aW9uIGhhbmRsZXIgZm9yIGxpc3QgaXRlbSBpbnRlcmFjdGlvbnMuIEl0IG1hbmFnZXNcbiAgICogZXZlbnQgcHJvcGFnYXRpb24sIGRpc21pc3NlcyBvcGVuIGFjdGlvbiBtZW51cywgcmVtb3ZlcyBmb2N1cyB0cmFwcywgYW5kIGVpdGhlciBlbWl0c1xuICAgKiBldmVudHMgZm9yIHBhcmVudCBjb21wb25lbnRzIHRvIGhhbmRsZSBvciBwZXJmb3JtcyBuYXZpZ2F0aW9uIGJhc2VkIG9uIHRoZSBjb21wb25lbnQnc1xuICAgKiByb3V0ZSBjb25maWd1cmF0aW9uLiBUaGlzIG1ldGhvZCBzdXBwb3J0cyBib3RoIGV2ZW50LWRyaXZlbiBhbmQgbmF2aWdhdGlvbi1kcml2ZW4gYXJjaGl0ZWN0dXJlcy5cbiAgICpcbiAgICogQHBhcmFtIHtDcnVkT3BlcmF0aW9uc30gYWN0aW9uIC0gVGhlIHR5cGUgb2YgQ1JVRCBvcGVyYXRpb24gYmVpbmcgcGVyZm9ybWVkXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gVGhlIGJyb3dzZXIgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgdGhlIGFjdGlvblxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbdGFyZ2V0XSAtIE9wdGlvbmFsIHRhcmdldCBlbGVtZW50IGZvciB0aGUgZXZlbnRcbiAgICogQHJldHVybiB7UHJvbWlzZTxib29sZWFufHZvaWQ+fSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byBuYXZpZ2F0aW9uIHN1Y2Nlc3Mgb3Igdm9pZCBmb3IgZXZlbnRzXG4gICAqXG4gICAqIEBtZXJtYWlkXG4gICAqIHNlcXVlbmNlRGlhZ3JhbVxuICAgKiAgIHBhcnRpY2lwYW50IFUgYXMgVXNlclxuICAgKiAgIHBhcnRpY2lwYW50IEwgYXMgTGlzdEl0ZW1Db21wb25lbnRcbiAgICogICBwYXJ0aWNpcGFudCBQIGFzIFBhcmVudCBDb21wb25lbnRcbiAgICogICBwYXJ0aWNpcGFudCBOIGFzIE5hdkNvbnRyb2xsZXJcbiAgICogICBwYXJ0aWNpcGFudCBFIGFzIEV2ZW50IFN5c3RlbVxuICAgKlxuICAgKiAgIFUtPj5MOiBQZXJmb3JtIGFjdGlvbiAoY2xpY2svc3dpcGUpXG4gICAqICAgTC0+Pkw6IHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG4gICAqICAgYWx0IGFjdGlvbk1lbnVPcGVuXG4gICAqICAgICBMLT4+TDogRGlzbWlzcyBhY3Rpb24gbWVudVxuICAgKiAgIGVuZFxuICAgKiAgIEwtPj5MOiByZW1vdmVGb2N1c1RyYXAoKVxuICAgKiAgIGFsdCBObyByb3V0ZSBjb25maWd1cmVkXG4gICAqICAgICBMLT4+RTogd2luZG93RXZlbnRFbWl0dGVyKClcbiAgICogICAgIEwtPj5QOiBjbGlja0V2ZW50LmVtaXQoKVxuICAgKiAgIGVsc2UgUm91dGUgY29uZmlndXJlZFxuICAgKiAgICAgTC0+Pk46IHJlZGlyZWN0KGFjdGlvbiwgdWlkKVxuICAgKiAgICAgTi0tPj5MOiBSZXR1cm4gbmF2aWdhdGlvbiByZXN1bHRcbiAgICogICBlbmRcbiAgICpcbiAgICogQG1lbWJlck9mIExpc3RJdGVtQ29tcG9uZW50XG4gICAqL1xuICBhc3luYyBoYW5kbGVBY3Rpb24oYWN0aW9uOiBDcnVkT3BlcmF0aW9ucywgZXZlbnQ6IEV2ZW50LCB0YXJnZXQ/OiBIVE1MRWxlbWVudCk6IFByb21pc2U8Ym9vbGVhbnx2b2lkPiB7XG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgaWYodGhpcy5hY3Rpb25NZW51T3BlbilcbiAgICAgIGF3YWl0IHRoaXMuYWN0aW9uTWVudUNvbXBvbmVudC5kaXNtaXNzKCk7XG4gICAgLy8gZm9yY2luZyB0cmFwIGZvY3VzXG4gICAgcmVtb3ZlRm9jdXNUcmFwKCk7XG4gICAgaWYoIXRoaXMucm91dGUpIHtcbiAgICAgIGNvbnN0IGV2ZW50ID0ge3RhcmdldDogdGFyZ2V0LCBhY3Rpb24sIHBrOiB0aGlzLnBrLCBkYXRhOiB0aGlzLnVpZCwgbmFtZTogRXZlbnRDb25zdGFudHMuQ0xJQ0ssIGNvbXBvbmVudDogdGhpcy5jb21wb25lbnROYW1lIH0gYXMgTGlzdEl0ZW1DdXN0b21FdmVudDtcbiAgICAgIHdpbmRvd0V2ZW50RW1pdHRlcihgTGlzdEl0ZW0ke0V2ZW50Q29uc3RhbnRzLkNMSUNLfWAsIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLmNsaWNrRXZlbnQuZW1pdChldmVudCk7XG4gICAgfVxuICAgIHJldHVybiBhd2FpdCB0aGlzLnJlZGlyZWN0KGFjdGlvbiwgKHR5cGVvZiB0aGlzLnVpZCA9PT0gJ251bWJlcicgPyBgJHt0aGlzLnVpZH1gOiB0aGlzLnVpZCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBSZXNwb25zaXZlIGhhbmRsZXIgdGhhdCBlbmFibGVzIG9yIGRpc2FibGVzIHNsaWRlIGl0ZW1zIGJhc2VkIG9uIHNjcmVlbiBzaXplIGFuZCBvcGVyYXRpb25zLlxuICAgKiBAc3VtbWFyeSBUaGlzIG1ldGhvZCBpcyBhdXRvbWF0aWNhbGx5IGNhbGxlZCB3aGVuIHRoZSB3aW5kb3cgaXMgcmVzaXplZCBhbmQgYWxzbyBkdXJpbmcgY29tcG9uZW50XG4gICAqIGluaXRpYWxpemF0aW9uLiBJdCBkZXRlcm1pbmVzIHdoZXRoZXIgc2xpZGUgYWN0aW9ucyBzaG91bGQgYmUgYXZhaWxhYmxlIGJhc2VkIG9uIHRoZSBjdXJyZW50XG4gICAqIHdpbmRvdyB3aWR0aCBhbmQgdGhlIHByZXNlbmNlIG9mIFVQREFURSBvciBERUxFVEUgb3BlcmF0aW9ucy4gU2xpZGUgaXRlbXMgYXJlIHR5cGljYWxseSBoaWRkZW5cbiAgICogb24gbGFyZ2VyIHNjcmVlbnMgd2hlcmUgdGhlcmUncyBzcGFjZSBmb3IgZGVkaWNhdGVkIGFjdGlvbiBidXR0b25zLlxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHNsaWRlIGl0ZW1zIHNob3VsZCBiZSBzaG93biwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqXG4gICAqIEBtZXJtYWlkXG4gICAqIHNlcXVlbmNlRGlhZ3JhbVxuICAgKiAgIHBhcnRpY2lwYW50IFcgYXMgV2luZG93XG4gICAqICAgcGFydGljaXBhbnQgTCBhcyBMaXN0SXRlbUNvbXBvbmVudFxuICAgKiAgIHBhcnRpY2lwYW50IFUgYXMgVUlcbiAgICpcbiAgICogICBXLT4+TDogcmVzaXplIGV2ZW50XG4gICAqICAgTC0+Plc6IGdldFdpbmRvd1dpZHRoKClcbiAgICogICBXLS0+Pkw6IFJldHVybiBjdXJyZW50IHdpZHRoXG4gICAqICAgTC0+Pkw6IFN0b3JlIHdpbmRvd1dpZHRoXG4gICAqICAgYWx0IE5vIG9wZXJhdGlvbnMgT1Igd2lkdGggPiA3NjhweFxuICAgKiAgICAgTC0+PlU6IHNob3dTbGlkZUl0ZW1zID0gZmFsc2VcbiAgICogICBlbHNlIE9wZXJhdGlvbnMgaW5jbHVkZSBVUERBVEUvREVMRVRFXG4gICAqICAgICBMLT4+VTogc2hvd1NsaWRlSXRlbXMgPSB0cnVlXG4gICAqICAgZW5kXG4gICAqICAgTC0tPj5VOiBSZXR1cm4gc2hvd1NsaWRlSXRlbXMgdmFsdWVcbiAgICpcbiAgICogQG1lbWJlck9mIExpc3RJdGVtQ29tcG9uZW50XG4gICAqL1xuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgZW5hYmxlU2xpZGVJdGVtcygpOiBib29sZWFuIHtcbiAgICB0aGlzLndpbmRvd1dpZHRoID0gZ2V0V2luZG93V2lkdGgoKSBhcyBudW1iZXI7XG4gICAgaWYoIXRoaXMub3BlcmF0aW9ucz8ubGVuZ3RoIHx8IHRoaXMud2luZG93V2lkdGggPiA3NjgpXG4gICAgICByZXR1cm4gdGhpcy5zaG93U2xpZGVJdGVtcyA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd1NsaWRlSXRlbXMgPSB0aGlzLm9wZXJhdGlvbnMuaW5jbHVkZXMoT3BlcmF0aW9uS2V5cy5VUERBVEUpIHx8IHRoaXMub3BlcmF0aW9ucy5pbmNsdWRlcyhPcGVyYXRpb25LZXlzLkRFTEVURSk7XG4gICAgcmV0dXJuIHRoaXMuc2hvd1NsaWRlSXRlbXM7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEFuaW1hdGVzIGFuZCByZW1vdmVzIGFuIGVsZW1lbnQgZnJvbSB0aGUgRE9NLlxuICAgKiBAc3VtbWFyeSBUaGlzIG1ldGhvZCBhcHBsaWVzIENTUyBhbmltYXRpb24gY2xhc3NlcyB0byBjcmVhdGUgYSBzbW9vdGggZmFkZS1vdXQgZWZmZWN0XG4gICAqIGJlZm9yZSByZW1vdmluZyB0aGUgZWxlbWVudCBmcm9tIHRoZSBET00uIFRoZSBhbmltYXRpb24gZW5oYW5jZXMgdXNlciBleHBlcmllbmNlIGJ5XG4gICAqIHByb3ZpZGluZyB2aXN1YWwgZmVlZGJhY2sgd2hlbiBpdGVtcyBhcmUgZGVsZXRlZCBvciByZW1vdmVkIGZyb20gbGlzdHMuIFRoZSB0aW1pbmdcbiAgICogaXMgY29vcmRpbmF0ZWQgd2l0aCB0aGUgQ1NTIGFuaW1hdGlvbiBkdXJhdGlvbiB0byBlbnN1cmUgdGhlIGVsZW1lbnQgaXMgcmVtb3ZlZFxuICAgKiBhZnRlciB0aGUgYW5pbWF0aW9uIGNvbXBsZXRlcy5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBET00gZWxlbWVudCB0byBhbmltYXRlIGFuZCByZW1vdmVcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICpcbiAgICogQG1lcm1haWRcbiAgICogc2VxdWVuY2VEaWFncmFtXG4gICAqICAgcGFydGljaXBhbnQgTCBhcyBMaXN0SXRlbUNvbXBvbmVudFxuICAgKiAgIHBhcnRpY2lwYW50IEUgYXMgSFRNTEVsZW1lbnRcbiAgICogICBwYXJ0aWNpcGFudCBEIGFzIERPTVxuICAgKlxuICAgKiAgIEwtPj5FOiBBZGQgYW5pbWF0aW9uIGNsYXNzZXNcbiAgICogICBOb3RlIG92ZXIgRTogdWstYW5pbWF0aW9uLWZhZGUsIHVrLWFuaW1hdGlvbi1tZWRpdW0sIHVrLWFuaW1hdGlvbi1yZXZlcnNlXG4gICAqICAgRS0+PkU6IFN0YXJ0IGZhZGUgYW5pbWF0aW9uXG4gICAqICAgTC0+Pkw6IHNldFRpbWVvdXQoNjAwbXMpXG4gICAqICAgTm90ZSBvdmVyIEw6IFdhaXQgZm9yIGFuaW1hdGlvbiB0byBjb21wbGV0ZVxuICAgKiAgIEwtPj5EOiBlbGVtZW50LnJlbW92ZSgpXG4gICAqICAgRC0+PkQ6IFJlbW92ZSBlbGVtZW50IGZyb20gRE9NXG4gICAqXG4gICAqIEBtZW1iZXJPZiBMaXN0SXRlbUNvbXBvbmVudFxuICAgKi9cbiAgcmVtb3ZlRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndWstYW5pbWF0aW9uLWZhZGUnLCAndWstYW5pbWF0aW9uLW1lZGl1bScsICd1ay1hbmltYXRpb24tcmV2ZXJzZScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge2VsZW1lbnQucmVtb3ZlKCl9LCA2MDApXG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIE5hdmlnYXRlcyB0byBhIG5ldyByb3V0ZSBiYXNlZCBvbiB0aGUgc3BlY2lmaWVkIGFjdGlvbiBhbmQgaXRlbSBJRC5cbiAgICogQHN1bW1hcnkgVGhpcyBtZXRob2QgY29uc3RydWN0cyBhIG5hdmlnYXRpb24gVVJMIHVzaW5nIHRoZSBjb21wb25lbnQncyByb3V0ZSBjb25maWd1cmF0aW9uLFxuICAgKiB0aGUgc3BlY2lmaWVkIGFjdGlvbiwgYW5kIGFuIGl0ZW0gaWRlbnRpZmllci4gSXQgdXNlcyBJb25pYydzIE5hdkNvbnRyb2xsZXIgdG8gcGVyZm9ybVxuICAgKiBmb3J3YXJkIG5hdmlnYXRpb24gd2l0aCBhcHByb3ByaWF0ZSBhbmltYXRpb25zLiBUaGlzIG1ldGhvZCBpcyB0eXBpY2FsbHkgdXNlZCBmb3JcbiAgICogQ1JVRCBvcGVyYXRpb25zIHdoZXJlIGVhY2ggYWN0aW9uIChjcmVhdGUsIHJlYWQsIHVwZGF0ZSwgZGVsZXRlKSBoYXMgaXRzIG93biByb3V0ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbiAtIFRoZSBhY3Rpb24gdG8gYmUgcGVyZm9ybWVkIChlLmcuLCAnZWRpdCcsICd2aWV3JywgJ2RlbGV0ZScpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbaWRdIC0gVGhlIHVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBpdGVtIHRvIGJlIGFjdGVkIHVwb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdHJ1ZSBpZiBuYXZpZ2F0aW9uIHdhcyBzdWNjZXNzZnVsXG4gICAqXG4gICAqIEBtZXJtYWlkXG4gICAqIHNlcXVlbmNlRGlhZ3JhbVxuICAgKiAgIHBhcnRpY2lwYW50IEwgYXMgTGlzdEl0ZW1Db21wb25lbnRcbiAgICogICBwYXJ0aWNpcGFudCBOIGFzIE5hdkNvbnRyb2xsZXJcbiAgICogICBwYXJ0aWNpcGFudCBSIGFzIFJvdXRlclxuICAgKlxuICAgKiAgIEwtPj5MOiByZWRpcmVjdChhY3Rpb24sIGlkKVxuICAgKiAgIEwtPj5MOiBDb25zdHJ1Y3QgVVJMOiAve3JvdXRlfS97YWN0aW9ufS97aWR9XG4gICAqICAgTC0+Pk46IG5hdmlnYXRlRm9yd2FyZCh1cmwpXG4gICAqICAgTi0+PlI6IE5hdmlnYXRlIHRvIGNvbnN0cnVjdGVkIFVSTFxuICAgKiAgIFItLT4+TjogUmV0dXJuIG5hdmlnYXRpb24gcmVzdWx0XG4gICAqICAgTi0tPj5MOiBSZXR1cm4gYm9vbGVhbiBzdWNjZXNzXG4gICAqXG4gICAqIEBtZW1iZXJPZiBMaXN0SXRlbUNvbXBvbmVudFxuICAgKi9cbiAgYXN5bmMgcmVkaXJlY3QoYWN0aW9uOiBzdHJpbmcsIGlkPzogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubmF2Q29udHJvbGxlci5uYXZpZ2F0ZUZvcndhcmQoYC8ke3RoaXMucm91dGV9LyR7YWN0aW9ufS8ke2lkIHx8IHRoaXMudWlkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBQcmVzZW50cyB0aGUgYWN0aW9ucyBtZW51IHBvcG92ZXIgZm9yIHRoZSBsaXN0IGl0ZW0uXG4gICAqIEBzdW1tYXJ5IFRoaXMgbWV0aG9kIGhhbmRsZXMgdGhlIGRpc3BsYXkgb2YgYSBjb250ZXh0dWFsIGFjdGlvbiBtZW51IHdoZW4gdHJpZ2dlcmVkIGJ5IHVzZXJcbiAgICogaW50ZXJhY3Rpb24gKHR5cGljYWxseSBhIGxvbmcgcHJlc3Mgb3IgcmlnaHQtY2xpY2spLiBJdCBzdG9wcyBldmVudCBwcm9wYWdhdGlvbiB0byBwcmV2ZW50XG4gICAqIHVud2FudGVkIHNpZGUgZWZmZWN0cywgcmVtb3ZlcyBhbnkgZXhpc3RpbmcgZm9jdXMgdHJhcHMgZm9yIGFjY2Vzc2liaWxpdHksIGNvbmZpZ3VyZXMgdGhlXG4gICAqIHBvcG92ZXIgd2l0aCB0aGUgdHJpZ2dlcmluZyBldmVudCwgYW5kIG9wZW5zIHRoZSBhY3Rpb24gbWVudS4gVGhlIG1lbnUgdHlwaWNhbGx5IGNvbnRhaW5zXG4gICAqIGF2YWlsYWJsZSBDUlVEIG9wZXJhdGlvbnMgZm9yIHRoZSBpdGVtLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIFRoZSBldmVudCB0aGF0IHRyaWdnZXJlZCB0aGUgYWN0aW9uIG1lbnUgcmVxdWVzdFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKlxuICAgKiBAbWVybWFpZFxuICAgKiBzZXF1ZW5jZURpYWdyYW1cbiAgICogICBwYXJ0aWNpcGFudCBVIGFzIFVzZXJcbiAgICogICBwYXJ0aWNpcGFudCBMIGFzIExpc3RJdGVtQ29tcG9uZW50XG4gICAqICAgcGFydGljaXBhbnQgUCBhcyBQb3BvdmVyXG4gICAqICAgcGFydGljaXBhbnQgQSBhcyBBY2Nlc3NpYmlsaXR5XG4gICAqXG4gICAqICAgVS0+Pkw6IFRyaWdnZXIgYWN0aW9uIG1lbnUgKGxvbmcgcHJlc3MvcmlnaHQtY2xpY2spXG4gICAqICAgTC0+Pkw6IHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG4gICAqICAgTC0+PkE6IHJlbW92ZUZvY3VzVHJhcCgpXG4gICAqICAgTC0+PlA6IFNldCBldmVudCByZWZlcmVuY2VcbiAgICogICBMLT4+TDogYWN0aW9uTWVudU9wZW4gPSB0cnVlXG4gICAqICAgTC0+PlA6IERpc3BsYXkgcG9wb3ZlciB3aXRoIGFjdGlvbnNcbiAgICpcbiAgICogQG1lbWJlck9mIExpc3RJdGVtQ29tcG9uZW50XG4gICAqL1xuICBwcmVzZW50QWN0aW9uc01lbnUoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgLy8gZm9yY2luZyB0cmFwIGZvY3VzXG4gICAgcmVtb3ZlRm9jdXNUcmFwKCk7XG4gICAgdGhpcy5hY3Rpb25NZW51Q29tcG9uZW50LmV2ZW50ID0gZXZlbnQ7XG4gICAgdGhpcy5hY3Rpb25NZW51T3BlbiA9IHRydWU7XG4gIH1cbn1cbiIsIlxuQGlmKHRpdGxlIHx8IGRlc2NyaXB0aW9uKSB7XG4gIDxpb24taXRlbS1zbGlkaW5nICNjb21wb25lbnQ+XG4gICAgPGlvbi1pdGVtXG4gICAgICBbaWRdPVwidWlkXCJcbiAgICAgIFtsaW5lc109XCJsaW5lc1wiXG4gICAgICBbYnV0dG9uXT1cImJ1dHRvblwiXG4gICAgICBbY2xhc3NdPVwiY2xhc3NOYW1lXCJcbiAgICAgIChjbGljayk9XCJvcGVyYXRpb25zPy5pbmNsdWRlcygncmVhZCcpID8gaGFuZGxlQWN0aW9uKCdyZWFkJywgJGV2ZW50LCBjb21wb25lbnQpIDogJydcbiAgICBcIj5cbiAgICAgIEBpZihpY29uICYmIGxpbmVzICE9PSAnaW5zZXQnKSB7XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkY2YtaWNvblwiIFtzbG90XT1cImljb25TbG90XCI+XG4gICAgICAgICAgPGlvbi1hdmF0YXI+XG4gICAgICAgICAgICA8aW9uLWljb24gYXJpYS1oaWRkZW49XCJ0cnVlXCIgbmFtZT1cInJlYWRlci1vdXRsaW5lXCIgc2l6ZT1cImRlZmF1bHRcIj48L2lvbi1pY29uPlxuICAgICAgICAgIDwvaW9uLWF2YXRhcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgICA8ZGl2IGNsYXNzPVwiZGNmLXdpZHRoLWV4cGFuZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGNmLWZsZXggZGNmLWZsZXgtbWlkZGxlIGRjZi1ncmlkLWNvbGxhcHNlXCIgZGNmLWdyaWQ+XG4gICAgICAgICAgQGlmKGljb24gJiYgbGluZXMgPT09ICdpbnNldCcpIHtcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkY2YtaWNvbiBkY2YtZ3JpZC1pY29uXCI+XG4gICAgICAgICAgICAgIDxpb24tYXZhdGFyPlxuICAgICAgICAgICAgICAgIDxpb24taWNvbiBhcmlhLWhpZGRlbj1cInRydWVcIiBuYW1lPVwicmVhZGVyLW91dGxpbmVcIiAgc2l6ZT1cImRlZmF1bHRcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICA8L2lvbi1hdmF0YXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRjZi13aWR0aC1leHBhbmRAcyBkY2Ytd2lkdGgtMS0xIGRjZi1sYWJlbFwiPlxuICAgICAgICAgICAgPGlvbi1sYWJlbCBjbGFzcz1cImRjZi1pdGVtLXRpdGxlXCIgW2lubmVySFRNTF09XCJ1aWQgKyAnIC0gJyArIHRpdGxlXCIgPjwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgPGRpdiAqbmdJZiA9XCJkZXNjcmlwdGlvblwiIGNsYXNzPVwiZGNmLWRlc2NyaXB0aW9uXCIgW2lubmVySFRNTF09XCJkZXNjcmlwdGlvblwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIEBpZihpbmZvIHx8IHN1YmluZm8pIHtcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkY2Ytd2lkdGgtYXV0b0BzIGRjZi13aWR0aC1leHBhbmQgZGNmLWluZm8gZGNmLWZsZXggZGNmLWZsZXgtcmlnaHRAc1wiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJpbmZvXCIgW2lubmVySFRNTF09XCJpbmZvXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInN1YmluZm9cIiBjbGFzcz1cImRjZi1zdWJpbmZvIGRjZi10ZXh0LXRydW5jYXRlXCIgW2lubmVySFRNTF09XCJzdWJpbmZvXCIgPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkY2Ytd2lkdGgtYXV0byBkY2YtZmxleCBkY2YtZmxleC1taWRkbGUgZGNmLWZsZXgtcmlnaHRcIj5cbiAgICAgICAgICAgIEBpZigob3BlcmF0aW9ucy5pbmNsdWRlcygnZGVsZXRlJykgfHwgb3BlcmF0aW9ucy5pbmNsdWRlcygndXBkYXRlJykpICYmIHVpZCkge1xuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGNmLXZpc2libGVAbVwiIGlkPVwiZGNmLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8aW9uLWJ1dHRvbiBjbGFzcz1cImRjZi1oaWRkZW5AbVwiIHNoYXBlPVwicm91bmRcIiBmaWxsPVwiY2xlYXJcIiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwicHJlc2VudEFjdGlvbnNNZW51KCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgbmFtZT1cImVsbGlwc2lzLXZlcnRpY2FsLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8aW9uLXBvcG92ZXJcbiAgICAgICAgICAgICAgICAgICNhY3Rpb25NZW51Q29tcG9uZW50XG4gICAgICAgICAgICAgICAgICBzaWRlPVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgIGFsaWdubWVudD1cImxlZnRcIlxuXG4gICAgICAgICAgICAgICAgICBbaXNPcGVuXT1cImFjdGlvbk1lbnVPcGVuXCJcbiAgICAgICAgICAgICAgICAgIChkaWREaXNtaXNzKT1cImFjdGlvbk1lbnVPcGVuID0gZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPGlvbi1jb250ZW50IGNsYXNzPVwiaW9uLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW9uLWxpc3QgbGluZXM9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJkY2YtdGV4dC1jYXBpdGFsaXplXCIgW2lubmVySFRNTF09XCInYWN0aW9ucycgfCB0cmFuc2xhdGVcIj48L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pb24tbGlzdC1oZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICBAZm9yIChvcGVyYXRpb24gb2YgWyd1cGRhdGUnLCAnZGVsZXRlJ107IHRyYWNrIG9wZXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBAaWYob3BlcmF0aW9ucy5pbmNsdWRlcyhvcGVyYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpb24taXRlbSBbYnV0dG9uXT1cInRydWVcIiAoY2xpY2spPVwiaGFuZGxlQWN0aW9uKG9wZXJhdGlvbiwgJGV2ZW50LCBjb21wb25lbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWF2YXRhciBjbGFzcz1cImRjZi1mbGV4IGRjZi1mbGV4LW1pZGRsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNsb3Q9XCJzdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaWYob3BlcmF0aW9uID09PSAndXBkYXRlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBjb2xvcj1cInByaW1hcnlcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBuYW1lPVwiY3JlYXRlLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gY29sb3I9XCJkYW5nZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBuYW1lPVwidHJhc2hcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lvbi1hdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWxhYmVsIGNsYXNzPVwiZGNmLXRleHQtY2FwaXRhbGl6ZVwiPnt7IG9wZXJhdGlvbiB8IHRyYW5zbGF0ZSB9fTwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2lvbi1saXN0PlxuICAgICAgICAgICAgICAgICAgICA8L2lvbi1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L2lvbi1wb3BvdmVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwhLS0gQGlmKG9wZXJhdGlvbnM/Lmxlbmd0aCAmJiB1aWQpIHtcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRjZi12aXNpYmxlQG1cIiBpZD1cImRjZi1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgQGlmKG9wZXJhdGlvbnM/LmluY2x1ZGVzKCd1cGRhdGUnKSkge1xuICAgICAgICAgICAgICAgICAgPGlvbi1idXR0b24gZmlsbD1cImNsZWFyXCIgc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImhhbmRsZUFjdGlvbigndXBkYXRlJywgIGNvbXBvbmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwiY3JlYXRlLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAaWYob3BlcmF0aW9ucz8uaW5jbHVkZXMoJ2RlbGV0ZScpKSB7XG4gICAgICAgICAgICAgICAgICA8aW9uLWJ1dHRvbiBmaWxsPVwiY2xlYXJcIiBzaXplPVwic21hbGxcIiBjb2xvcj1cImRhbmdlclwiIChjbGljayk9XCJoYW5kbGVBY3Rpb24oJ2RlbGV0ZScsICBjb21wb25lbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBhcmlhLWhpZGRlbj1cInRydWVcIiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cInRyYXNoXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfSAtLT5cbiAgICAgICAgICAgIEBpZih3aW5kb3dXaWR0aCA+IDc2OCkge1xuICAgICAgICAgICAgICA8ZGl2IGlkPVwiZW5kXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3Nsb3Q9J2VuZCddXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2lvbi1pdGVtPlxuICAgIEBpZihzaG93U2xpZGVJdGVtcyAmJiB1aWQpIHtcbiAgICAgIDxpb24taXRlbS1vcHRpb25zIHNpZGU9XCJlbmRcIiAoaW9uU3dpcGUpPVwib3BlcmF0aW9ucy5sZW5ndGggPT09IDEgPyBoYW5kbGVBY3Rpb24ob3BlcmF0aW9uc1swXSwgICRldmVudCwgY29tcG9uZW50KSA6ICcnXCI+XG4gICAgICAgIEBpZihvcGVyYXRpb25zPy5pbmNsdWRlcygndXBkYXRlJykpIHtcbiAgICAgICAgICA8aW9uLWl0ZW0tb3B0aW9uIGNsYXNzPVwiZGNmLXVwZGF0ZVwiIChjbGljayk9XCJoYW5kbGVBY3Rpb24oJ3VwZGF0ZScsICRldmVudCwgY29tcG9uZW50KVwiIFtleHBhbmRhYmxlXT1cIm9wZXJhdGlvbnMubGVuZ3RoID09PSAxXCI+XG4gICAgICAgICAgICA8aW9uLWljb24gYXJpYS1oaWRkZW49XCJ0cnVlXCIgc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJjcmVhdGUtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgPC9pb24taXRlbS1vcHRpb24+XG4gICAgICAgIH1cbiAgICAgICAgQGlmKG9wZXJhdGlvbnM/LmluY2x1ZGVzKCdkZWxldGUnKSkge1xuICAgICAgICA8aW9uLWl0ZW0tb3B0aW9uIGNsYXNzPVwiZGNmLSAgICAgICAgICBkZWxldGVcIiAoY2xpY2spPVwiaGFuZGxlQWN0aW9uKCdkZWxldGUnLCAgJGV2ZW50LCBjb21wb25lbnQpXCIgW2V4cGFuZGFibGVdPVwib3BlcmF0aW9ucy5sZW5ndGggPT09IDFcIj5cbiAgICAgICAgICAgIDxpb24taWNvbiBhcmlhLWhpZGRlbj1cInRydWVcIiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cInRyYXNoXCI+PC9pb24taWNvbj5cbiAgICAgICAgICA8L2lvbi1pdGVtLW9wdGlvbj5cbiAgICAgICAgfVxuICAgICAgPC9pb24taXRlbS1vcHRpb25zPlxuICAgIH1cbiAgPC9pb24taXRlbS1zbGlkaW5nPlxufVxuIl19