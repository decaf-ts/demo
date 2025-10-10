import { inject, Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { Logger } from '@decaf-ts/logging';
import { Primitives } from '@decaf-ts/decorator-validation';
import { getLogger, RouteDirections } from '@decaf-ts/for-angular';
import { IMenuItem, IGuardOptions } from '../utils/interfaces';
import { DefaultGuardOptions, SideMenu } from '../utils/constants';
import { getNgxToastComponent } from '../utils/NgxToastComponent';
import { RouterService } from '../services/router.service';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardService {

  private state!: RouterStateSnapshot;

  private route!: ActivatedRouteSnapshot;

  protected options!: IGuardOptions;

  protected menu: IMenuItem[] = SideMenu;

  private authService: AuthService = inject(AuthService);

  private routeService: RouterService = inject(RouterService);

  private menuController: MenuController = inject(MenuController);

  private logger: Logger = getLogger('AuthGuard');

  // constructor() {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    options: IGuardOptions = DefaultGuardOptions): Promise<boolean> {
    this.options = options;
    this.state = state;
    this.route = route;
    const allowed = await this.isAllowed(route, state) || await this.redirect(options);
    return allowed;
  }

  /**
   * @method redirect
   * @description Handles redirection for unauthorized access attempts
   * @param {IGuardOptions} options - Guard configuration options
   * @returns {Promise<boolean>} Promise that resolves to false (access denied)
   * @private
   * @example
   * ```typescript
   * // Internal usage - redirects to login with return URL
   * const denied = await this.redirect({
   *   loggedIn: true,
   *   redirectBack: true,
   *   loginPage: '/auth/login'
   * });
   * // Returns false and navigates to login page
   * ```
   */
  private async redirect(options: IGuardOptions): Promise<boolean> {
    const { pathname, search } = window.location;
    // await this.getRequestParams();
    const routeState = {};
    if (search) {
      Object.assign(routeState, {
        state: {
          url: pathname + search,
          redirect: options.redirectBack
        }
      });
    }
    await this.routeService.navigateTo(this.options.loginPage, RouteDirections.FORWARD, routeState);
    await getNgxToastComponent().warn('You need to be logged in to access this page.');
    return false;
  }

  /**
   * @method isAllowed
   * @description Checks if user has permission to access a specific route based on authentication and menu roles
   * @param {ActivatedRouteSnapshot} route - The route to check access for
   * @param {RouterStateSnapshot} state - The current state (unused but required by interface)
   * @returns {Promise<boolean>} Promise that resolves to true if access is allowed
   * @example
   * ```typescript
   * const hasAccess = await guard.isAllowed(route, state);
   * if (hasAccess) {
   *   // User has permission to access this route
   *   this.menuController.enable(true);
   * }
   * ```
   */
  async isAllowed(route: ActivatedRouteSnapshot, state?: RouterStateSnapshot): Promise<boolean> {

    const isLoggedIn = await this.authService.isLoggedIn();

    if (!this.menu?.length)
      return isLoggedIn;

    const url = route.url.join('/');
    const menuItem = this.menu.find((item: IMenuItem) => (item.url === url));

    if (!menuItem || !menuItem?.roles)
      return isLoggedIn;

    const accessRoles = (typeof menuItem.roles === Primitives.STRING) ? [menuItem.roles] : menuItem.roles;
    const userRole = await this.authService.getUserAccountType();

    if (!userRole || !accessRoles.includes(userRole))
      return await this.routeToLogin('Access denied by user role');

    if (!menuItem?.showMenu || menuItem.showMenu === true)
      this.menuController.enable(true);
    return true;
  }

  /**
   * @method routeToLogin
   * @description Redirects user to login page with optional error message logging
   * @param {string} [message] - Optional error message to log
   * @returns {Promise<boolean>} Promise that resolves to false (access denied)
   * @private
   * @example
   * ```typescript
   * // Redirect with custom message
   * return await this.routeToLogin('Session expired');
   *
   * // Redirect with default message
   * return await this.routeToLogin();
   * ```
   */
  private async routeToLogin(message?: string): Promise<boolean> {
    await this.routeService.navigateTo(this.options.loginPage, RouteDirections.BACK);
    this.logger.error(message || 'You are not logged in, access denied.');
    return false;
  }
}

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> => {
  const options: IGuardOptions = Object.assign({}, DefaultGuardOptions, route?.data || {});
  return inject(AuthGuardService).canActivate(route, state, options);
}
