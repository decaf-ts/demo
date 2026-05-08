import { Component, HostListener, OnInit } from '@angular/core';
import { Dynamic, NgxComponentDirective } from '@decaf-ts/for-angular';
import { SectionBaseDirective } from 'src/app/utils/SectionBaseDirective';
import { ContainerComponent } from '../container/container.component';
import { IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';

@Dynamic()
@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss'],
  imports: [ContainerComponent, HeaderComponent],
  standalone: true,
})
export class TutorialsComponent extends SectionBaseDirective implements OnInit {
  async ngOnInit() {
    await super.initialize();
  }

  @HostListener('window:ModuleChange', ['$event'])
  async moduleChangeObserver(event: CustomEvent) {
    this.setSelectedModule(event.detail.data);
  }
}
