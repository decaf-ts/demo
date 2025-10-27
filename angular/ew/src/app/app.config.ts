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
import { RamAdapter } from '@decaf-ts/core/ram';
import { provideI18nLoader, I18nLoaderFactory, provideDbAdapter, NgxRenderingEngine, provideI18n, I18nResourceConfigType } from '@decaf-ts/for-angular';
import { routes } from './app.routes';
import { Product } from './models/Product';
import { Batch } from './models/Batch';

export const databaseFlavour = "ram"; // TypeORMFlavour = "TypeORMAdapter"
export const appModels = [new Product(), new Batch()];

new RamAdapter({user: "user"}, databaseFlavour);


// new RamAdapter({user: "user"});
export const appConfig: ApplicationConfig = {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // provideDbAdapter(RamAdapter, {user: "user"}),
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules), withComponentInputBinding()),
    provideHttpClient(),
     provideI18n(
      {
        fallbackLang: 'en',
        lang: "en",
      } as RootTranslateServiceConfig,
      // optionally provide I18nLoader configuration, otherwise it will use default (same as setted below)
      {
        prefix: './assets/i18n/',
        suffix: '.json',
      } as I18nResourceConfigType
    )
  ],
};
