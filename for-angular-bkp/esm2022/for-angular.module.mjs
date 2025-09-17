import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonApp, IonRouterOutlet, IonSplitPane, IonImg, IonContent, IonText, IonButton, IonRouterLink, IonTitle } from '@ionic/angular/standalone';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { Logging } from '@decaf-ts/logging';
import * as i0 from "@angular/core";
const ComponentsAndModules = [
    IonApp,
    IonRouterOutlet,
    IonSplitPane,
    IonImg,
    IonText,
    IonTitle,
    IonButton,
    IonRouterLink,
    IonContent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    TranslatePipe,
];
const log = Logging.for("for-angular");
export function getLogger(instance) {
    return log.for(instance);
}
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
export class ForAngularModule {
    /**
     * @description Creates a module with providers for root module import
     * @summary This static method provides the proper way to import the ForAngularModule in the application's
     * root module. It returns a ModuleWithProviders object that includes the ForAngularModule itself.
     * Using forRoot() ensures that the module and its providers are properly initialized and only
     * instantiated once in the application.
     *
     * @return {ModuleWithProviders<ForAngularModule>} The module with its providers
     */
    static forRoot() {
        return {
            ngModule: ForAngularModule,
        };
    }
    static { this.ɵfac = function ForAngularModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ForAngularModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ForAngularModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [IonApp,
            IonRouterOutlet,
            IonSplitPane,
            IonImg,
            IonText,
            IonTitle,
            IonButton,
            IonContent,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            TranslateModule,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            TranslateModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ForAngularModule, [{
        type: NgModule,
        args: [{
                imports: ComponentsAndModules,
                declarations: [],
                exports: ComponentsAndModules,
                schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ForAngularModule, { imports: [IonApp,
        IonRouterOutlet,
        IonSplitPane,
        IonImg,
        IonText,
        IonTitle,
        IonButton,
        IonRouterLink,
        IonContent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        TranslatePipe], exports: [IonApp,
        IonRouterOutlet,
        IonSplitPane,
        IonImg,
        IonText,
        IonTitle,
        IonButton,
        IonRouterLink,
        IonContent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        TranslatePipe] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yLWFuZ3VsYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9mb3ItYW5ndWxhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBdUIsZ0JBQWdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxNQUFNLEVBQ04sZUFBZSxFQUNmLFlBQVksRUFDWixNQUFNLEVBQ04sVUFBVSxFQUNWLE9BQU8sRUFDUCxTQUFTLEVBQ1QsYUFBYSxFQUNiLFFBQVEsRUFDVCxNQUFNLDJCQUEyQixDQUFDO0FBQ25DLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JFLE9BQU8sRUFBVSxPQUFPLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFHcEQsTUFBTSxvQkFBb0IsR0FBRztJQUMzQixNQUFNO0lBQ04sZUFBZTtJQUNmLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsYUFBYTtJQUNiLFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtDQUNkLENBQUM7QUFFRixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3ZDLE1BQU0sVUFBVSxTQUFTLENBQUMsUUFBeUM7SUFDakUsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQWlDLENBQUMsQ0FBQztBQUNwRCxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHO0FBT0gsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQjs7Ozs7Ozs7T0FRRztJQUNILE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7U0FDM0IsQ0FBQztJQUNKLENBQUM7aUhBZFUsZ0JBQWdCO21FQUFoQixnQkFBZ0I7dUVBaEQzQixNQUFNO1lBQ04sZUFBZTtZQUNmLFlBQVk7WUFDWixNQUFNO1lBQ04sT0FBTztZQUNQLFFBQVE7WUFDUixTQUFTO1lBRVQsVUFBVTtZQUNWLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGVBQWU7WUFIZixZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtZQUNuQixlQUFlOztpRkFvQ0osZ0JBQWdCO2NBTjVCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsb0JBQW9CO2dCQUM3QixZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLG9CQUFvQjtnQkFDN0IsT0FBTyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsZ0JBQWdCLENBQUM7YUFDcEQ7O3dGQUNZLGdCQUFnQixjQWhEM0IsTUFBTTtRQUNOLGVBQWU7UUFDZixZQUFZO1FBQ1osTUFBTTtRQUNOLE9BQU87UUFDUCxRQUFRO1FBQ1IsU0FBUztRQUNULGFBQWE7UUFDYixVQUFVO1FBQ1YsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGFBQWEsYUFiYixNQUFNO1FBQ04sZUFBZTtRQUNmLFlBQVk7UUFDWixNQUFNO1FBQ04sT0FBTztRQUNQLFFBQVE7UUFDUixTQUFTO1FBQ1QsYUFBYTtRQUNiLFVBQVU7UUFDVixZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOT19FUlJPUlNfU0NIRU1BfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBJb25BcHAsXG4gIElvblJvdXRlck91dGxldCxcbiAgSW9uU3BsaXRQYW5lLFxuICBJb25JbWcsXG4gIElvbkNvbnRlbnQsXG4gIElvblRleHQsXG4gIElvbkJ1dHRvbixcbiAgSW9uUm91dGVyTGluayxcbiAgSW9uVGl0bGVcbn0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvc3RhbmRhbG9uZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSwgVHJhbnNsYXRlUGlwZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgTG9nZ2VyLCBMb2dnaW5nIH0gZnJvbSAnQGRlY2FmLXRzL2xvZ2dpbmcnO1xuaW1wb3J0IHsgRnVuY3Rpb25MaWtlIH0gZnJvbSAnLi9lbmdpbmUnO1xuXG5jb25zdCBDb21wb25lbnRzQW5kTW9kdWxlcyA9IFtcbiAgSW9uQXBwLFxuICBJb25Sb3V0ZXJPdXRsZXQsXG4gIElvblNwbGl0UGFuZSxcbiAgSW9uSW1nLFxuICBJb25UZXh0LFxuICBJb25UaXRsZSxcbiAgSW9uQnV0dG9uLFxuICBJb25Sb3V0ZXJMaW5rLFxuICBJb25Db250ZW50LFxuICBDb21tb25Nb2R1bGUsXG4gIEZvcm1zTW9kdWxlLFxuICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBUcmFuc2xhdGVNb2R1bGUsXG4gIFRyYW5zbGF0ZVBpcGUsXG5dO1xuXG5jb25zdCBsb2cgPSBMb2dnaW5nLmZvcihcImZvci1hbmd1bGFyXCIpO1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvZ2dlcihpbnN0YW5jZTogc3RyaW5nIHwgRnVuY3Rpb25MaWtlIHwgdW5rbm93bik6IExvZ2dlciB7XG4gIHJldHVybiBsb2cuZm9yKGluc3RhbmNlIGFzIHN0cmluZyB8IEZ1bmN0aW9uTGlrZSk7XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIE1haW4gQW5ndWxhciBtb2R1bGUgZm9yIHRoZSBEZWNhZiBmcmFtZXdvcmtcbiAqIEBzdW1tYXJ5IFRoZSBGb3JBbmd1bGFyTW9kdWxlIHByb3ZpZGVzIHRoZSBjb3JlIGZ1bmN0aW9uYWxpdHkgZm9yIGludGVncmF0aW5nIERlY2FmIHdpdGggQW5ndWxhciBhcHBsaWNhdGlvbnMuXG4gKiBJdCBpbXBvcnRzIGFuZCBleHBvcnRzIGNvbW1vbiBBbmd1bGFyIGFuZCBJb25pYyBjb21wb25lbnRzIGFuZCBtb2R1bGVzIG5lZWRlZCBmb3IgRGVjYWYgYXBwbGljYXRpb25zLFxuICogaW5jbHVkaW5nIGZvcm0gaGFuZGxpbmcsIHRyYW5zbGF0aW9uIHN1cHBvcnQsIGFuZCBJb25pYyBVSSBjb21wb25lbnRzLiBUaGlzIG1vZHVsZSBjYW4gYmUgaW1wb3J0ZWRcbiAqIGRpcmVjdGx5IG9yIHZpYSB0aGUgZm9yUm9vdCgpIG1ldGhvZCBmb3IgcHJvcGVyIGluaXRpYWxpemF0aW9uIGluIHRoZSBhcHBsaWNhdGlvbidzIHJvb3QgbW9kdWxlLlxuICpcbiAqIEBjbGFzcyBGb3JBbmd1bGFyTW9kdWxlXG4gKiBAZXhhbXBsZVxuICogYGBgdHlwZXNjcmlwdFxuICogLy8gSW4geW91ciBhcHAgbW9kdWxlOlxuICogQE5nTW9kdWxlKHtcbiAqICAgaW1wb3J0czogW1xuICogICAgIEZvckFuZ3VsYXJNb2R1bGUuZm9yUm9vdCgpLFxuICogICAgIC8vIG90aGVyIGltcG9ydHNcbiAqICAgXSxcbiAqICAgLy8gLi4uXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuICogYGBgXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IENvbXBvbmVudHNBbmRNb2R1bGVzLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBleHBvcnRzOiBDb21wb25lbnRzQW5kTW9kdWxlcyxcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIE5PX0VSUk9SU19TQ0hFTUFdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JBbmd1bGFyTW9kdWxlIHtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIGEgbW9kdWxlIHdpdGggcHJvdmlkZXJzIGZvciByb290IG1vZHVsZSBpbXBvcnRcbiAgICogQHN1bW1hcnkgVGhpcyBzdGF0aWMgbWV0aG9kIHByb3ZpZGVzIHRoZSBwcm9wZXIgd2F5IHRvIGltcG9ydCB0aGUgRm9yQW5ndWxhck1vZHVsZSBpbiB0aGUgYXBwbGljYXRpb24nc1xuICAgKiByb290IG1vZHVsZS4gSXQgcmV0dXJucyBhIE1vZHVsZVdpdGhQcm92aWRlcnMgb2JqZWN0IHRoYXQgaW5jbHVkZXMgdGhlIEZvckFuZ3VsYXJNb2R1bGUgaXRzZWxmLlxuICAgKiBVc2luZyBmb3JSb290KCkgZW5zdXJlcyB0aGF0IHRoZSBtb2R1bGUgYW5kIGl0cyBwcm92aWRlcnMgYXJlIHByb3Blcmx5IGluaXRpYWxpemVkIGFuZCBvbmx5XG4gICAqIGluc3RhbnRpYXRlZCBvbmNlIGluIHRoZSBhcHBsaWNhdGlvbi5cbiAgICpcbiAgICogQHJldHVybiB7TW9kdWxlV2l0aFByb3ZpZGVyczxGb3JBbmd1bGFyTW9kdWxlPn0gVGhlIG1vZHVsZSB3aXRoIGl0cyBwcm92aWRlcnNcbiAgICovXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Rm9yQW5ndWxhck1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRm9yQW5ndWxhck1vZHVsZSxcbiAgICB9O1xuICB9XG59XG4iXX0=