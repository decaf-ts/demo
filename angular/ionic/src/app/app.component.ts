
import { Component, inject, Inject, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Platform } from '@ionic/angular';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { isDevelopmentMode, NgxRenderingEngine, getOnWindow, removeFocusTrap } from '@decaf-ts/for-angular';
import { Model, ModelBuilderFunction, ModelConstructor } from '@decaf-ts/decorator-validation';
import { MenuItem } from './utils/types';
import { SidebarMenu } from './utils/constants';
import * as IonicIcons from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { createDbAdapter, DbAdapterProvider } from './app.config';
import { Title } from '@angular/platform-browser';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { LogoComponent } from './components/logo/logo.component';
import { CategoryModel, EmployeeModel } from '@shared/models';
import { ForAngularRepository } from './utils/ForAngularRepository';
import { RamAdapter } from '@decaf-ts/core/ram/RamAdapter';
import { Repository } from '@decaf-ts/core';

try {
  new NgxRenderingEngine();
  Model.setBuilder(Model.fromModel as ModelBuilderFunction);

} catch (e: unknown) {
  throw new Error(`Failed to load rendering engine: ${e}`);
}

/**
 * @description Root component of the Decaf-ts for Angular application
 * @summary This component serves as the main entry point for the application.
 * It sets up the navigation menu, handles routing events, and initializes
 * the application state. It also manages the application title and menu visibility.
 * @class
 * @param {Platform} platform - Ionic Platform service
 * @param {Router} router - Angular Router service
 * @param {MenuController} menuController - Ionic MenuController service
 * @param {Title} titleService - Angular Title service
 * @example
 * <app-root></app-root>
 * @mermaid
 * sequenceDiagram
 *   participant App as AppComponent
 *   participant Router
 *   participant MenuController
 *   participant TitleService
 *   participant Repository
 *   App->>App: constructor()
 *   App->>App: ngOnInit()
 *   App->>Router: Subscribe to events
 *   Router-->>App: Navigation events
 *   App->>MenuController: Enable/Disable menu
 *   App->>TitleService: Set page title
 *   App->>App: initializeApp()
 *   alt isDevelopmentMode
 *     App->>Repository: Initialize repositories
 *   end
 */
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    IonApp,
    IonSplitPane,
    IonMenu,
    RouterLink,
    RouterLinkActive,
    IonContent,
    IonList,
    IonListHeader,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterLink,
    IonRouterOutlet,
    TranslateModule,
    TranslatePipe,
    LogoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [],
})
export class AppComponent implements OnInit {
  /**
   * @description The title of the application
   */
  title = 'Decaf-ts for-angular demo';

  /**
   * @description The menu items for the application's navigation
   */
  menu: MenuItem[] = SidebarMenu;


  /**
   * @description Ionic Platform service
   */
  platform: Platform = inject(Platform);

  /**
   * @description Angular Router service
   */
  router: Router = inject(Router);

  /**
   * @description The currently active menu item
   */
  activeItem = '';

  /**
   * @description The database adapter provider
   */
  // adapter = inject(DbAdapterProvider);

  /**
   * @description Flag indicating if the application has been initialized
   */
  initialized = false;

  /**
   * @description Angular Title service
   */
  private titleService: Title = inject(Title);

  /**
   * @description disable or enable menu on page
   */
  disableMenu = true;

  /**
   * @description The database adapter provider
   */
  protected adapter: RamAdapter = inject(DbAdapterProvider);

  /**
   * @description Initializes the component
   * @summary Sets up Ionic icons and disables the menu controller
   */
  constructor() {
    addIcons(IonicIcons);
  }

  /**
   * @description Lifecycle hook that is called after data-bound properties of a directive are initialized
   * @summary Sets up router event subscriptions and initializes the application
   * @return {Promise<void>}
   */
  async ngOnInit(): Promise<void> {
    await this.initializeApp();


    this.router.events.subscribe(async event => {
      if (event instanceof NavigationEnd) {
        const { url } = event;
        this.disableMenu = url.includes('login');
        this.setTitle(url.replace('/', '') || "login");
      }
      if (event instanceof NavigationStart)
        removeFocusTrap();
    });
  }

  /**
   * @description Initializes the application
   * @summary Sets the initialized flag and sets up repositories if in development mode
   * @return {Promise<void>}
   */
  async initializeApp(): Promise<void> {
    this.initialized = true;
    const isDevelopment = isDevelopmentMode();
    if (isDevelopment) {


      for (const instance of [CategoryModel, EmployeeModel]) {
        const model = new instance();
        const repo = Repository.forModel(instance as ModelConstructor<typeof model>, this.adapter.flavour);
        const repository = new ForAngularRepository<typeof model>(repo, model as Model);
        await repository.init();
      }

    }
  }

  /**
   * @description Sets the application title based on the current page
   * @summary Updates the document title with the application name and current page
   * @param {string} page - The current page URL
   */
  setTitle(page: string): void {
    const activeMenu = this.menu.find(item => item?.url?.includes(page));
    if (activeMenu)
      this.titleService.setTitle(`${this.title} - ${activeMenu?.title || activeMenu?.label}`);
  }
}
