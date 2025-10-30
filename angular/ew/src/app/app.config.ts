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
import { provideI18nLoader, I18nLoaderFactory, provideDbAdapter, NgxRenderingEngine, provideI18n, I18nResourceConfigType, provideDynamicComponents } from '@decaf-ts/for-angular';
import { routes } from './app.routes';
import { Product } from './models/Product';
import { Batch } from './models/Batch';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { SwitcherComponent } from './components/switcher/switcher.component';

export const DbAdapterFlavour = 'ram';
export const AppModels = [new Product(), new Batch()];
export const AppName = 'Enterprise Wallet';

export const appConfig: ApplicationConfig = {
  providers: [
    // provide locale components for decaf rendering engine
    SwitcherComponent,
    ImageUploadComponent,
    // ImageUploadComponent,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideDbAdapter(RamAdapter, {user: "user"}, DbAdapterFlavour),
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
