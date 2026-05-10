import { Component, OnInit } from '@angular/core';
import { LayoutComponent, NgxPageDirective } from '@decaf-ts/for-angular';
import { IonContent } from '@ionic/angular/standalone';
import { TutorialsComponent } from 'src/app/components/tutorials/tutorials.component';
import { SectionDemoComponent } from 'src/app/components/section-demo/section-demo.component';
import { TutorialsLayout } from 'src/app/layouts/TutorialsLayout';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.page.html',
  styleUrls: ['./tutorials.page.scss'],
  standalone: true,
  providers: [TutorialsComponent, SectionDemoComponent],
  imports: [IonContent, LayoutComponent],
})
export class TutorialsPage extends NgxPageDirective implements OnInit {
  constructor() {
    super('TutorialsPage', false);
  }

  async ngOnInit(): Promise<void> {
    this.model = new TutorialsLayout();
    console.log(this.model);
    await super.initialize();
  }
}
