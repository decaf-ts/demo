import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CrudFieldComponent } from './crud-field/crud-field.component';
import { CrudFormComponent } from './crud-form/crud-form.component';
import { ModelRendererComponent } from './model-renderer/model-renderer.component';
import { ForAngularModule } from '../for-angular.module';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ComponentRendererComponent } from './component-renderer/component-renderer.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ListComponent } from './list/list.component';
import { FieldsetComponent } from './fieldset/fieldset.component';
import { CollapsableDirective } from '../directives/collapsable.directive';
import { LayoutComponent } from './layout/layout.component';
import { FilterComponent } from './filter/filter.component';
import * as i0 from "@angular/core";
const Directives = [CollapsableDirective];
const Components = [
    ModelRendererComponent,
    ComponentRendererComponent,
    CrudFieldComponent,
    CrudFormComponent,
    EmptyStateComponent,
    ListComponent,
    ListItemComponent,
    SearchbarComponent,
    PaginationComponent,
    CrudFormComponent,
    FieldsetComponent,
    LayoutComponent,
    FilterComponent
];
export class ForAngularComponentsModule {
    static { this.ɵfac = function ForAngularComponentsModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ForAngularComponentsModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ForAngularComponentsModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [Components, ForAngularModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ForAngularComponentsModule, [{
        type: NgModule,
        args: [{
                imports: [Components, Directives],
                declarations: [],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
                exports: [Components, Directives, ForAngularModule],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ForAngularComponentsModule, { imports: [ModelRendererComponent,
        ComponentRendererComponent,
        CrudFieldComponent,
        CrudFormComponent,
        EmptyStateComponent,
        ListComponent,
        ListItemComponent,
        SearchbarComponent,
        PaginationComponent,
        CrudFormComponent,
        FieldsetComponent,
        LayoutComponent,
        FilterComponent, CollapsableDirective], exports: [ModelRendererComponent,
        ComponentRendererComponent,
        CrudFieldComponent,
        CrudFormComponent,
        EmptyStateComponent,
        ListComponent,
        ListItemComponent,
        SearchbarComponent,
        PaginationComponent,
        CrudFormComponent,
        FieldsetComponent,
        LayoutComponent,
        FilterComponent, CollapsableDirective, ForAngularModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yLWFuZ3VsYXItY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZm9yLWFuZ3VsYXItY29tcG9uZW50cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFNUQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQzFDLE1BQU0sVUFBVSxHQUFHO0lBQ2pCLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7Q0FDaEIsQ0FBQztBQVFGLE1BQU0sT0FBTywwQkFBMEI7MkhBQTFCLDBCQUEwQjttRUFBMUIsMEJBQTBCO3VFQUwzQixVQUFVLEVBR2MsZ0JBQWdCOztpRkFFdkMsMEJBQTBCO2NBTnRDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDO2dCQUNqQyxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLENBQUM7YUFDcEQ7O3dGQUNZLDBCQUEwQixjQXJCckMsc0JBQXNCO1FBQ3RCLDBCQUEwQjtRQUMxQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsZUFBZSxFQWRHLG9CQUFvQixhQUV0QyxzQkFBc0I7UUFDdEIsMEJBQTBCO1FBQzFCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixlQUFlLEVBZEcsb0JBQW9CLEVBcUJKLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDcnVkRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NydWQtZmllbGQvY3J1ZC1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3J1ZEZvcm1Db21wb25lbnQgfSBmcm9tICcuL2NydWQtZm9ybS9jcnVkLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGVsUmVuZGVyZXJDb21wb25lbnQgfSBmcm9tICcuL21vZGVsLXJlbmRlcmVyL21vZGVsLXJlbmRlcmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JBbmd1bGFyTW9kdWxlIH0gZnJvbSAnLi4vZm9yLWFuZ3VsYXIubW9kdWxlJztcbmltcG9ydCB7IFNlYXJjaGJhckNvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoYmFyL3NlYXJjaGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRW1wdHlTdGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vZW1wdHktc3RhdGUvZW1wdHktc3RhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb25lbnRSZW5kZXJlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50LXJlbmRlcmVyL2NvbXBvbmVudC1yZW5kZXJlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9saXN0L2xpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IEZpZWxkc2V0Q29tcG9uZW50IH0gZnJvbSAnLi9maWVsZHNldC9maWVsZHNldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sbGFwc2FibGVEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2NvbGxhcHNhYmxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC9sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyL2ZpbHRlci5jb21wb25lbnQnO1xuXG5jb25zdCBEaXJlY3RpdmVzID0gW0NvbGxhcHNhYmxlRGlyZWN0aXZlXTtcbmNvbnN0IENvbXBvbmVudHMgPSBbXG4gIE1vZGVsUmVuZGVyZXJDb21wb25lbnQsXG4gIENvbXBvbmVudFJlbmRlcmVyQ29tcG9uZW50LFxuICBDcnVkRmllbGRDb21wb25lbnQsXG4gIENydWRGb3JtQ29tcG9uZW50LFxuICBFbXB0eVN0YXRlQ29tcG9uZW50LFxuICBMaXN0Q29tcG9uZW50LFxuICBMaXN0SXRlbUNvbXBvbmVudCxcbiAgU2VhcmNoYmFyQ29tcG9uZW50LFxuICBQYWdpbmF0aW9uQ29tcG9uZW50LFxuICBDcnVkRm9ybUNvbXBvbmVudCxcbiAgRmllbGRzZXRDb21wb25lbnQsXG4gIExheW91dENvbXBvbmVudCxcbiAgRmlsdGVyQ29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tcG9uZW50cywgRGlyZWN0aXZlc10sXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXSxcbiAgZXhwb3J0czogW0NvbXBvbmVudHMsIERpcmVjdGl2ZXMsIEZvckFuZ3VsYXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JBbmd1bGFyQ29tcG9uZW50c01vZHVsZSB7fVxuIl19