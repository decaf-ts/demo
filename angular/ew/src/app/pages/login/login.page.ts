import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonContent } from '@ionic/angular/standalone';
import { ModelRendererComponent, NgxPageDirective } from '@decaf-ts/for-angular';
import { LogoComponent } from '../../components/logo/logo.component';
import { ContainerComponent } from '../../components/container/container.component';
import { LoginForm } from '../../forms/LoginForm';


/**
 * @description Login page component for user authentication
 * @summary This component handles the login functionality, including form rendering and event handling.
 * It uses the LoginForm for data binding and interacts with the LoginHandler for authentication logic.
 * The component also manages locale context for internationalization and provides user feedback
 * through toast messages for login operations.
 * @class
 * @param {LoginForm} model - Form model instance for login data binding
 * @param {string} locale - Locale context for internationalization
 * @param {Router} router - Angular Router for navigation
 * @param {ToastController} toastController - Ionic ToastController for displaying messages
 * @example
 * <app-login></app-login>
 * @mermaid
 * sequenceDiagram
 *   participant User
 *   participant LoginPage
 *   participant LoginHandler
 *   participant Router
 *   participant ToastController
 *   User->>LoginPage: Enter credentials
 *   LoginPage->>LoginHandler: Handle login event
 *   LoginHandler-->>LoginPage: Return login result
 *   LoginPage->>ToastController: Create toast message
 *   alt Login successful
 *     LoginPage->>Router: Navigate to dashboard
 *   end
 *   LoginPage->>ToastController: Present toast
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonCard, IonCardContent, LogoComponent, ContainerComponent, ModelRendererComponent],
})
export class LoginPage extends NgxPageDirective implements OnInit {

  constructor() {
    super("LoginPage", false);
  }

  ngOnInit(): void {
   this.model = new LoginForm({
    username: 'User',
    password: 'Decafts123-'
   });
  }
}
