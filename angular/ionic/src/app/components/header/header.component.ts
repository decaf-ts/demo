import { Component, inject, Input, OnInit } from '@angular/core';
import { CrudOperations, OperationKeys } from '@decaf-ts/db-decorators';
import { ElementSizes } from '@decaf-ts/ui-decorators';
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonToolbar,
  MenuController,
} from '@ionic/angular/standalone';

import {
  ElementSize,
  getWindowDocument,
  IMenuItem,
  NgxComponentDirective,
} from '@decaf-ts/for-angular';
import { BackButtonComponent } from '../back-button/back-button.component';
import { ContainerComponent } from '../container/container.component';
import { LogoComponent } from '../logo/logo.component';

/**
 * @description Header component for application pages.
 * @summary The HeaderComponent provides a consistent header across the application with
 * configurable elements such as title, back button, menu button, and CRUD operation controls.
 * It extends NgxComponentDirective to inherit common functionality and implements OnInit for
 * initialization logic. This component is designed to be flexible and adaptable to different
 * page contexts, supporting various navigation patterns and visual styles.
 *
 * @class HeaderComponent
 * @extends {NgxComponentDirective}
 * @implements {OnInit}
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    ContainerComponent,
    LogoComponent
  ],
  standalone: true,
})
/**
 * @class HeaderComponent
 * @extends {NgxComponentDirective}
 * @implements {OnInit}
 *
 * @description A configurable header component for Angular applications.
 * @summary Provides a flexible header component with support for menu buttons, back navigation,
 * logo display, color scheme toggling, and responsive design. The component includes built-in
 * support for dark mode, sticky/floating behavior, and customizable styling options.
 *
 * @example
 * ```html
 * <app-header
 *   [title]="'My Application'"
 *   [showMenuButton]="true"
 *   [showBackButton]="false"
 *   [backgroundColor]="'primary'"
 *   [sticky]="true"
 *   [showThemeToggleButton]="true">
 * </app-header>
 * ```
 *
 * @remarks
 * This component automatically handles user authentication by checking for a logged-in user
 * and redirecting to the login page if no user is found. It also provides responsive behavior
 * with separate mobile-specific styling options.
 *
 * Key features:
 * - Menu button with configurable position
 * - Back button navigation
 * - Logo display
 * - Color scheme toggle (light/dark mode)
 * - Sticky and floating header modes
 * - Responsive design with mobile-specific options
 * - Customizable colors and layout
 *
 * @memberOf app.components
 */
/**
 * @description Header component for displaying page titles, navigation controls, and branding elements.
 * @summary A versatile header component that provides a consistent navigation experience across the application.
 * It supports features such as menu buttons, back navigation, logo display, color scheme toggling, and
 * responsive behavior for mobile devices. The component can be customized through various input properties
 * to match different page requirements and design patterns.
 *
 * @remarks
 * This component extends NgxComponentDirective to inherit common functionality and implements OnInit
 * for initialization logic. It integrates with Ionic components for native mobile appearance and behavior.
 *
 * Key Features:
 * - Configurable menu and back button controls
 * - Support for logo and title display
 * - Responsive layout with mobile-specific properties
 * - Color scheme toggling between light and dark modes
 * - Sticky and floating header variants
 * - Authentication-aware with automatic login redirect
 * - Customizable colors, alignment, and border settings
 *
 * @example
 * ```typescript
 * <app-header
 *   [title]="'Dashboard'"
 *   [showMenuButton]="true"
 *   [showBackButton]="false"
 *   [backgroundColor]="'primary'"
 *   [showThemeToggleButton]="true">
 * </app-header>
 * ```
 *
 * @export
 * @class HeaderComponent
 * @extends {NgxComponentDirective}
 * @implements {OnInit}
 */
export class HeaderComponent extends NgxComponentDirective implements OnInit {
  /**
   * @description Overrides the current CRUD operation context for this header instance.
   * @summary Optional input that allows pages to specify the active operation (CREATE, READ, UPDATE, DELETE)
   * which can alter header controls (buttons, visibility) and routing behavior. When undefined the
   * component will inherit or resolve the operation from the surrounding context or parent component.
   * @type {OperationKeys | undefined}
   * @default undefined
   */
  @Input()
  override operation: OperationKeys | undefined = undefined;

  /**
   * @description Available CRUD operations for this component instance.
   * @summary Defines which CRUD operations (Create, Read, Update, Delete) are available
   * for this component. This affects which operations can be performed on the data and
   * which operation buttons are displayed in the UI. By default, only READ operations are enabled.
   * @type {CrudOperations[]}
   * @default [OperationKeys.READ]
   * @memberOf module:lib/engine/NgxComponentDirective
   */
  @Input()
  override operations: CrudOperations[] = [];


  /**
   * @description Controls whether the menu button is displayed.
   * @summary When set to true, the component will display a menu button that can be used
   * to toggle the application's side menu. This is particularly useful for mobile
   * applications or any interface that uses a slide-in menu for navigation.
   * The menu controller is automatically enabled/disabled based on this property.
   *
   * @type {boolean}
   * @default true
   * @memberOf HeaderComponent
   */
  @Input()
  showMenuButton: boolean = true;

  /**
   * @description Position of the menu button in the header.
   * @summary Determines whether the menu button appears at the start or end of the header.
   * This allows for customization of the header layout based on design requirements.
   *
   * @type {'start' | 'end'}
   * @default 'start'
   * @memberOf HeaderComponent
   */
  @Input()
  buttonMenuSlot: 'start' | 'end' = 'start';

  /**
   * @description The title text displayed in the header.
   * @summary Sets the main title text
   * This typically represents the name of the current page or section.
   *
   * @type {string}
   * @memberOf HeaderComponent
   */
  @Input()
  title?: string;

  /**
   * @description Background color of the header.
   * @summary Sets the background color of the header using Ionic's predefined color palette.
   * This allows the header to match the application's color scheme.
   *
   * @type {string}
   * @default "primary"
   * @memberOf HeaderComponent
   */
  @Input()
  color:
    | 'white'
    | 'danger'
    | 'dark'
    | 'light'
    | 'medium'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'tertiary'
    | 'warning'
    | string
    | undefined = 'white';


  /**
   * @description Size preset for the container width.
   * @summary Controls the width of the container using predefined size classes.
   * Options include 'block', 'small', 'medium', 'large', and others defined in
   * the ElementSize type. This property is ignored when expand is true.
   *
   * @type {ElementSize}
   * @default 'expand'
   */
  @Input()
  size: ElementSize = ElementSizes.expand;


  /**
   * @description Controls whether the header has a translucent effect.
   * @summary When set to true, the header will have a translucent appearance,
   * allowing content behind it to be partially visible. This creates a modern,
   * layered UI effect.
   *
   * @type {boolean}
   * @default false
   * @memberOf HeaderComponent
   */
  @Input()
  translucent: boolean = true;

  menu: IMenuItem[] = [];

  /**
   * @description Service for handling routing operations.
   * @summary Injected service that provides methods for navigating between routes.
   * This service is used for navigation when changing operations or performing
   * actions on the model.
   *
   * @private
   * @type {RouterService}
   * @memberOf HeaderComponent
   */
  private menuController: MenuController = inject(MenuController);

  /**
   * @description Creates an instance of HeaderComponent.
   * @summary Initializes a new HeaderComponent by calling the parent class constructor
   * with the component name for logging and identification purposes.
   *
   * @memberOf HeaderComponent
   */
  constructor() {
    super('HeaderComponent');
  }

  /**
   * @description Initializes the component after Angular first displays the data-bound properties.
   * @summary Sets up the component by processing boolean inputs, enabling/disabling the menu controller,
   * and building the CSS class string based on the component's properties. This method prepares
   * the component for user interaction by ensuring all properties are properly initialized.
   *
   * @mermaid
   * sequenceDiagram
   *   participant A as Angular Lifecycle
   *   participant H as HeaderComponent
   *
   *   A->>H: ngOnInit()
   *   H->>M: enable(showMenuButton)
   *   H->>H: Process showBackButton
   *   H->>H: Process translucent
   *   H->>H: Process expand
   *   H->>H: Build CSS class string
   *
   * @returns {Promise<void> }
   * @memberOf HeaderComponent
   */
  async ngOnInit(): Promise<void> {
    this.initialized = true;
    this.menu = [
      {
        label: 'Modules',
      },
      {
        label: 'Features',
      },
      {
        label: 'Documentation',
      },
      {
        label: 'Community',
      }
    ]
  }


  async scrollToSection(id: string): Promise<void> {
    const document = getWindowDocument() as Document;
    const element = document.querySelector(`#${id}`);
    console.log('Scrolling to section:', id, element);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
