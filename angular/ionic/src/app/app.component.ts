
import { Component, inject,  OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Platform } from '@ionic/angular';
import {
  IonApp,
  IonRouterOutlet,
} from '@ionic/angular/standalone';
import * as IonicIcons from 'ionicons/icons';
import { addIcons } from 'ionicons';




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
    IonRouterOutlet,
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
   * @description Ionic Platform service
   */
  platform: Platform = inject(Platform);

  /**
   * @description Angular Router service
   */
  router: Router = inject(Router);

  /**
   * @description Flag indicating if the application has been initialized
   */
  initialized = false;


  /**
   * @description disable or enable menu on page
   */
  disableMenu = true;

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
   this.initialized = true;
  }
}
