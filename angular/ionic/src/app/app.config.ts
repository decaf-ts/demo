import { ApplicationConfig, InjectionToken } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  RouteReuseStrategy,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
// import pt from '@decaf-ts/for-angular/assets/i18n/pt.json';

import { routes } from './app.routes';
import { getI18nLoaderFactoryProviderConfig, getWindow, I18nLoaderFactory, DecafRepositoryAdapter } from '@decaf-ts/for-angular';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { RamAdapter, Adapter } from '@decaf-ts/core';

export const DbAdapterProvider = new InjectionToken<DecafRepositoryAdapter>('DbAdapterProvider');

/**
 * Factory function to create and configure the database adapter
 * Sets the adapter name on the window object for global access
 */
export function createDbAdapter(): RamAdapter {


  const adapter = new RamAdapter({ user: 'user' }, "ram");
  // Set adapter name on window for global access
  getWindow()['dbAdapterFlavour'] = adapter.flavour;
  return adapter;
}

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: DbAdapterProvider, useFactory: createDbAdapter },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules), withComponentInputBinding()),
    provideHttpClient(),
    provideTranslateService({
      defaultLanguage: 'en',
      useDefaultLang: true,
      loader: {
        provide: TranslateLoader,
        useFactory: I18nLoaderFactory,
        deps: [HttpClient],
      },
    }),
    {
      ...getI18nLoaderFactoryProviderConfig({
        prefix: './assets/i18n/',
        suffix: '.json',
      }),
    },
  ],
};
