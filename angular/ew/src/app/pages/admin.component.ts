
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
  IonRouterLink
} from '@ionic/angular/standalone';
import * as IonicIcons from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { TranslateModule } from '@ngx-translate/core';
import {
  isDevelopmentMode,
  DB_ADAPTER_PROVIDER_TOKEN,
  removeFocusTrap
} from '@decaf-ts/for-angular';
import { FakerRepository, IMenuItem, SidebarMenu } from '@shared/utils';
import { CategoryModel, EmployeeModel } from '@shared/models';
import { LogoComponent } from '../components/logo/logo.component';

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
    IonLabel,
    IonRouterLink,
    IonRouterOutlet,
    TranslateModule,
    LogoComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  schemas: [],
})
export class AdminComponent  {

  /**
   * @description The title of the application
   */
  title = 'Decaf-ts for-angular demo';

  /**
   * @description The menu items for the application's navigation
   */
  menu: IMenuItem[] = SidebarMenu;
}
