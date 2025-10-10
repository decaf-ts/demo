import { Injectable, inject } from '@angular/core';
import { RouterService } from './router.service';
import { DefaultPages, NgxToastComponent, NgxLoadingComponent, getNgxToastComponent, getNgxLoadingComponent, SessionKeys} from '../utils';
import { getWindow, RouteDirections } from '@decaf-ts/for-angular';
import { AxiosHttpAdapter } from '../utils/AxiosHttpAdapter';
import { HTTP_ADAPTER_TOKEN } from '../app.config';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly loading: NgxLoadingComponent = getNgxLoadingComponent();

  private readonly toast: NgxToastComponent = getNgxToastComponent();

  private routeService: RouterService = inject(RouterService);
  private httpAdapter: AxiosHttpAdapter = inject(HTTP_ADAPTER_TOKEN);
  private sessionService: SessionService = inject(SessionService);
  protected apiBaseUrl!: string;

  // constructor() {}

   async getUserAccountType(): Promise<string> {
    //TODO: Implement actual logic to get user account type
    return "apiWriter";
  }

  async isLoggedIn(redirect: boolean = false): Promise<boolean> {
    //TODO: Implement actual login check logic
    const isLoggedIn = true;
    if (redirect) {
      const options = isLoggedIn ?
        { page: DefaultPages.logged, direction: RouteDirections.FORWARD }
        : { page: DefaultPages.login, direction: RouteDirections.BACK };
      return await this.routeService.navigateTo(options.page, options.direction);
    }
    return isLoggedIn;
  }

  async login(): Promise<boolean | void> {
    return true;
    // try {
    //   const route = (await this.httpAdapter.getApiRoutes('auth'));
    //   if (!('data' in request)) {
    //     request = {
    //       data: request,
    //       url: route['login']
    //     };
    //   }
    //   const response = await this.httpAdapter.request(request);
    //   const token = response.result.token;
    //   await this.sessionService.storeToken(token);
    //   const decodedToken = await this.sessionService.getDecodedToken(token);
    //   if (decodedToken)
    //     await this.sessionService.create(['sub', 'role'], decodedToken);
    //   return response;
    // } catch (error: ErrorLike) {
    //   console.error('Erro ao realizar login:', error);
    //   throw error;
    // }

  }

  async isLoggedOut(): Promise<boolean> {
    return await this.isLoggedIn() ?
      this.routeService.navigateTo(DefaultPages.login, RouteDirections.BACK) : false;
  }

  async logout(): Promise<void> {
    await this.sessionService.delete();
    getWindow()[SessionKeys.loggedUser] = undefined;
  }

}
