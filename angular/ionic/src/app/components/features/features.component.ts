import { Component, HostListener, OnInit } from '@angular/core';
import { Dynamic } from '@decaf-ts/for-angular';
import { HeaderComponent } from '../header/header.component';
import { ContainerComponent } from '../container/container.component';
import { SectionBaseDirective } from 'src/app/utils/SectionBaseDirective';

@Dynamic()
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  imports: [HeaderComponent, ContainerComponent],
  standalone: true,
})
export class FeaturesComponent extends SectionBaseDirective implements OnInit {
  async ngOnInit() {
    await super.initialize();
  }

  @HostListener('window:ModuleChange', ['$event'])
  async moduleChangeObserver(event: CustomEvent) {
    this.setSelectedModule(event.detail.data);
  }
}
