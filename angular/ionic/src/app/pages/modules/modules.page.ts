import { Component, OnInit } from '@angular/core';
import { LayoutComponent, NgxPageDirective } from '@decaf-ts/for-angular';
import { IonContent } from '@ionic/angular/standalone';
import { CodeSectionComponent } from 'src/app/components/code-section/code-section.component';
import { ModulesSectionComponent } from 'src/app/components/modules-section/modules-section.component';
import { ModulesComponent } from 'src/app/components/modules/modules.component';
import { SectionDemoComponent } from 'src/app/components/section-demo/section-demo.component';
import { TrustedSectionComponent } from 'src/app/components/trusted-section/trusted-section.component';
import { ModulesLayout } from 'src/app/layouts/ModulesLayout';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.page.html',
  styleUrls: ['./modules.page.scss'],
  standalone: true,
  providers: [ModulesComponent, SectionDemoComponent, CodeSectionComponent, TrustedSectionComponent, ModulesSectionComponent],
  imports:[IonContent, LayoutComponent]
})
export class ModulesPage extends NgxPageDirective implements OnInit  {
  constructor() {
    super('ModulesPage', false);
  }

  async ngOnInit(): Promise<void> {
    this.model = new ModulesLayout();
    console.log(this.model);
    await super.initialize();
  }

}
