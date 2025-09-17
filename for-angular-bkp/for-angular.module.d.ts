import { ModuleWithProviders } from '@angular/core';
import { Logger } from '@decaf-ts/logging';
import { FunctionLike } from './engine';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular/standalone";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "@ngx-translate/core";
export declare function getLogger(instance: string | FunctionLike | unknown): Logger;
/**
 * @description Main Angular module for the Decaf framework
 * @summary The ForAngularModule provides the core functionality for integrating Decaf with Angular applications.
 * It imports and exports common Angular and Ionic components and modules needed for Decaf applications,
 * including form handling, translation support, and Ionic UI components. This module can be imported
 * directly or via the forRoot() method for proper initialization in the application's root module.
 *
 * @class ForAngularModule
 * @example
 * ```typescript
 * // In your app module:
 * @NgModule({
 *   imports: [
 *     ForAngularModule.forRoot(),
 *     // other imports
 *   ],
 *   // ...
 * })
 * export class AppModule {}
 * ```
 */
export declare class ForAngularModule {
    /**
     * @description Creates a module with providers for root module import
     * @summary This static method provides the proper way to import the ForAngularModule in the application's
     * root module. It returns a ModuleWithProviders object that includes the ForAngularModule itself.
     * Using forRoot() ensures that the module and its providers are properly initialized and only
     * instantiated once in the application.
     *
     * @return {ModuleWithProviders<ForAngularModule>} The module with its providers
     */
    static forRoot(): ModuleWithProviders<ForAngularModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ForAngularModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ForAngularModule, never, [typeof i1.IonApp, typeof i1.IonRouterOutlet, typeof i1.IonSplitPane, typeof i1.IonImg, typeof i1.IonText, typeof i1.IonTitle, typeof i1.IonButton, typeof i1.IonRouterLink, typeof i1.IonContent, typeof i2.CommonModule, typeof i3.FormsModule, typeof i3.ReactiveFormsModule, typeof i4.TranslateModule, typeof i4.TranslatePipe], [typeof i1.IonApp, typeof i1.IonRouterOutlet, typeof i1.IonSplitPane, typeof i1.IonImg, typeof i1.IonText, typeof i1.IonTitle, typeof i1.IonButton, typeof i1.IonRouterLink, typeof i1.IonContent, typeof i2.CommonModule, typeof i3.FormsModule, typeof i3.ReactiveFormsModule, typeof i4.TranslateModule, typeof i4.TranslatePipe]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ForAngularModule>;
}
//# sourceMappingURL=for-angular.module.d.ts.map