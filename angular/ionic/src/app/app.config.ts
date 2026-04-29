import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  RouteReuseStrategy,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideTranslateService, RootTranslateServiceConfig, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideDecafI18nLoader, I18nLoaderFactory, provideDecafPageTransition, provideDecafI18nConfig, I18nResourceConfigType } from '@decaf-ts/for-angular';
import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // provideDbAdapter(RamAdapter, {user: "user"}),
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules), withComponentInputBinding()),
    provideHttpClient(),

    provideDecafPageTransition(),
    provideDecafI18nConfig(
      {
        fallbackLang: 'en',
        lang: 'en',
      } as RootTranslateServiceConfig,
      // optionally provide I18nLoader configuration, otherwise it will use default (same as setted below)
      {
        prefix: './assets/i18n/',
        suffix: '.json',
      } as I18nResourceConfigType
    ),
  ],
};
