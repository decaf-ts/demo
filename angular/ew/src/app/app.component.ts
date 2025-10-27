
import { Component, inject,  OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Platform } from '@ionic/angular';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonRouterLink,
  IonImg
} from '@ionic/angular/standalone';
import * as IonicIcons from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { TranslateModule } from '@ngx-translate/core';
import {
  isDevelopmentMode,
  removeFocusTrap,
} from '@decaf-ts/_for-angular';
import { FakerRepository, IMenuItem } from './utils';
import { LogoComponent } from './components/logo/logo.component';
import { DashboardMenuItem, LogoutMenuItem, SidebarMenu } from './utils/constants';
import { appModels, databaseFlavour } from './app.config';
import { Repository, uses } from '@decaf-ts/core';
import { getNgxLoadingComponent } from './utils/NgxLoadingComponent';
import {  ModelConstructor } from '@decaf-ts/decorator-validation';


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
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonImg,
    IonLabel,
    IonRouterLink,
    IonRouterOutlet,
    TranslateModule,
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
  menu: IMenuItem[] = SidebarMenu;


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
  hasMenu = false;

  /**
   * @description The database adapter provider
   */
  // protected adapter: RamAdapter = inject(DB_ADAPTER_PROVIDER_TOKEN);

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
        this.hasMenu = !(url.includes('login'));
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
    this.menu = [];
    const isDevelopment = isDevelopmentMode();
    const models = appModels;
    const loading = getNgxLoadingComponent();
    const menu = [];
    const populate = ['Product'];
    const icons = {
      Product: 'products.svg',
      Batch: 'batches.svg',
    };
    await loading.show('Populating ' + name);
    for(let model of models) {
      uses(databaseFlavour)(model);
      if(model instanceof Function)
        model = new (model as unknown as ModelConstructor<any>)();
      const name = model.constructor.name.replace(/[0-9]/g, '');
       if (isDevelopment) {
        await loading.show('Populating ' + name);
        if(populate.includes(name)) {
          const repository = new FakerRepository(model);
          await repository.init();
        }
      }
      menu.push({label: `${name.toLowerCase()}.menu`,  name, url: `/model/${Repository.table(model)}`, icon: icons[name as keyof typeof icons] || 'database.svg' });
    }
    this.menu = [DashboardMenuItem, ...menu, LogoutMenuItem];
    if(loading.isVisible())
      await loading.remove();
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
