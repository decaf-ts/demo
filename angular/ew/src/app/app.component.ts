
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
  NgxPageDirective,
} from '@decaf-ts/for-angular';
import { FakerRepository, IMenuItem } from './utils';
import { LogoComponent } from './components/logo/logo.component';
import { DashboardMenuItem, LogoutMenuItem, AppMenu } from './utils/constants';
import { AppModels, AppName, DbAdapterFlavour } from './app.config';
import { Repository, uses } from '@decaf-ts/core';
import {  ModelConstructor } from '@decaf-ts/decorator-validation';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { Product } from './models/Product';



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
  providers: []

})
export class AppComponent extends NgxPageDirective implements OnInit {


  constructor() {
    super("", true);
    this.title = "Decaf-ts for-angular demo";
    addIcons(IonicIcons);
  }

  /**
   * @description Lifecycle hook that is called after data-bound properties of a directive are initialized
   * @summary Sets up router event subscriptions and initializes the application
   * @return {Promise<void>}
   */
  async ngOnInit(): Promise<void> {
    await this.initialize();
  }

  /**
   * @description Initializes the application
   * @summary Sets the initialized flag and sets up repositories if in development mode
   * @return {Promise<void>}
   */
  override async initialize(): Promise<void> {
    const isDevelopment = isDevelopmentMode();
    const populate = [Product.name];
    const menu = [];
    const models = AppModels;
    for(let model of models) {
      uses(DbAdapterFlavour)(model);
      if(model instanceof Function)
        model = new (model as unknown as ModelConstructor<typeof model>)();
      const name = model.constructor.name.replace(/[0-9]/g, '');
      if (isDevelopment) {
        if(populate.includes(name)) {
          this.logger.info(`Populating repository for model: ${name}`);
          const repository = new FakerRepository(model, 3);
          await repository.init();
        }
      }

      menu.push({label: name,  name, url: `/model/${Repository.table(model)}`, icon: 'cube-outline'})
    }
    this.initialized = true;
    this.menu = [
      DashboardMenuItem,
      ...menu as IMenuItem[],

      LogoutMenuItem
    ];
    this.setPageTitle(this.router.url.replace('/', ''));
  }


  /**
   * @description Sets the browser page title based on the current route.
   * @summary Updates the browser's document title by finding the active menu item that matches
   * the provided route. If a matching menu item is found, it sets the title using the format
   * "Decaf For Angular - {menu title or label}". This improves SEO and provides clear context
   * to users about the current page. If a custom menu array is provided, it uses that instead
   * of the component's default menu.
   * @protected
   * @param {string} route - The current route path to match against menu items
   * @param {IMenuItem[]} [menu] - Optional custom menu array to search (uses this.menu if not provided)
   * @return {void}
   * @memberOf module:lib/engine/NgxPageDirective
   */
  protected override setPageTitle(route?: string, menu?: IMenuItem[]): void {
    if(!route)
      route = this.router.url.replace('/', '');
    if(menu)
      menu = this.menu;
    const activeMenu = this.menu.find(item => item?.url?.includes(route));
    if(activeMenu)
      this.titleService.setTitle(`${activeMenu?.title || activeMenu?.label} - ${AppName}`);
  }
}
