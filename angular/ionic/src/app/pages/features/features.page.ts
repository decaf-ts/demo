import { Component, inject, Input } from '@angular/core';
import {
  LayoutComponent,
  NgxPageDirective,
  NgxRouterService,
} from '@decaf-ts/for-angular';
import { IonContent } from '@ionic/angular/standalone';
import { CodeSectionComponent } from 'src/app/components/code-section/code-section.component';
import { FeaturesListComponent } from 'src/app/components/features-list/features-list.component';
import { FeaturesComponent } from 'src/app/components/features/features.component';
import { ModulesCarouselComponent } from 'src/app/components/modules-carousel/modules-carousel.component';
import { SectionDemoComponent } from 'src/app/components/section-demo/section-demo.component';
import { TrustedSectionComponent } from 'src/app/components/trusted-section/trusted-section.component';
import { FeaturesLayout } from 'src/app/layouts/FeaturesLayout';

@Component({
  selector: 'app-features',
  templateUrl: './features.page.html',
  styleUrls: ['./features.page.scss'],
  standalone: true,
  providers: [
    FeaturesComponent,
    SectionDemoComponent,
    CodeSectionComponent,
    TrustedSectionComponent,
    ModulesCarouselComponent,
    FeaturesListComponent,
  ],
  imports: [IonContent, LayoutComponent],
})
export class FeaturesPage extends NgxPageDirective {
  @Input()
  module?: string;

  private routerService: NgxRouterService = inject(NgxRouterService);

  constructor() {
    super('FeaturesPage', false);
  }

  async ionViewWillEnter() {
    this.module = this.routerService.getQueryParamValue('module');
    await this.refresh(this.module);
  }

  async ionViewDidLeave(): Promise<void> {
    this.model = this.module = undefined;
    this.initialized = false;
    await super.ngOnDestroy();
  }

  override async refresh(module: string | undefined) {
    this.module = module;
    this.model = new FeaturesLayout();
    this.initialized = true;
    this.changeDetectorRef.detectChanges();
  }
}
