import { Component, OnInit } from '@angular/core';
import { LayoutComponent, NgxPageDirective } from '@decaf-ts/for-angular';
import { IonContent } from '@ionic/angular/standalone';
import { CodeSectionComponent } from 'src/app/components/code-section/code-section.component';
import { ExamplesComponent } from 'src/app/components/examples/examples.component';
import { ModulesCarouselComponent } from 'src/app/components/modules-carousel/modules-carousel.component';
import { SectionDemoComponent } from 'src/app/components/section-demo/section-demo.component';
import { TrustedSectionComponent } from 'src/app/components/trusted-section/trusted-section.component';
import { ExamplesLayout } from 'src/app/layouts/ExamplesLayout';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.page.html',
  styleUrls: ['./examples.page.scss'],
  standalone: true,
  providers: [
    ExamplesComponent,
    SectionDemoComponent,
    CodeSectionComponent,
    TrustedSectionComponent,
    ModulesCarouselComponent,
  ],
  imports: [IonContent, LayoutComponent],
})
export class ExamplesPage extends NgxPageDirective implements OnInit {
  constructor() {
    super('ModulesPage', false);
  }

  async ngOnInit(): Promise<void> {
    this.model = new ExamplesLayout();
    console.log(this.model);
    await super.initialize();
  }
}
