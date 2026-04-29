import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { LayoutComponent, NgxPageDirective } from '@decaf-ts/for-angular';
import { ContainerComponent } from 'src/app/components/container/container.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HomeLayout } from 'src/app/layouts/HomeLayout';
import { HeroComponent } from 'src/app/components/hero/hero.component';
import { SectionDemoComponent } from 'src/app/components/section-demo/section-demo.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  providers: [HeroComponent, SectionDemoComponent],
  imports: [ IonContent, LayoutComponent],
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
