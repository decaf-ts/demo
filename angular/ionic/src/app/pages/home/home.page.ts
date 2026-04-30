import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { LayoutComponent, NgxPageDirective } from '@decaf-ts/for-angular';
import { HomeLayout } from 'src/app/layouts/HomeLayout';
import { HeroComponent } from 'src/app/components/hero/hero.component';
import { SectionDemoComponent } from 'src/app/components/section-demo/section-demo.component';
import { CodeSectionComponent } from 'src/app/components/code-section/code-section.component';
import { TrustedSectionComponent } from 'src/app/components/trusted-section/trusted-section.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  providers: [HeroComponent, SectionDemoComponent, CodeSectionComponent, TrustedSectionComponent],
  imports: [IonContent, LayoutComponent],
})
export class HomePage extends NgxPageDirective implements OnInit {

  constructor() {
    super('HomePage', false);
  }

  async ngOnInit(): Promise<void> {
    this.model = new HomeLayout();
    console.log(this.model);
    await super.initialize();
  }

}
