import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  RouteReuseStrategy,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { RamAdapter } from '@decaf-ts/core';
import { provideI18nLoader, I18nLoaderFactory, provideDbAdapter, NgxRenderingEngine } from '@decaf-ts/_for-angular';
import { routes } from './app.routes';
import { Product } from './models/Product';
import { Batch } from './models/Batch';

export const databaseFlavour = "ram"; // TypeORMFlavour = "TypeORMAdapter"
export const appModels = [new Product(), new Batch()];

new RamAdapter({user: "user"}, databaseFlavour);

try {
  new NgxRenderingEngine();
} catch (e: unknown) {
  throw new Error(`Failed to load rendering engine: ${e}`);
}

// new RamAdapter({user: "user"});
export const appConfig: ApplicationConfig = {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // provideDbAdapter(RamAdapter, {user: "user"}),
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules), withComponentInputBinding()),
    provideHttpClient(),
    provideTranslateService({
      fallbackLang: 'en',
      lang: "en",
      loader: {
        provide: TranslateLoader,
        useFactory: I18nLoaderFactory,
        deps: [HttpClient],
      },
    }),
    provideI18nLoader({
      prefix: './assets/i18n/',
      suffix: '.json',
    }),
  ],
};
