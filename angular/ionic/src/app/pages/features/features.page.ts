import { Component, OnInit } from '@angular/core';
import { LayoutComponent, NgxPageDirective } from '@decaf-ts/for-angular';
import { IonContent } from '@ionic/angular/standalone';
import { CodeSectionComponent } from 'src/app/components/code-section/code-section.component';
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
  ],
  imports: [IonContent, LayoutComponent],
})
export class FeaturesPage extends NgxPageDirective implements OnInit {
  constructor() {
    super('FeaturesPage', false);
  }

  async ngOnInit(): Promise<void> {
    this.model = new FeaturesLayout();
    console.log(this.model);
    await super.initialize();
  }
}
