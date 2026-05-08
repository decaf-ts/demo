import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Dynamic, NgxComponentDirective } from '@decaf-ts/for-angular';
import { HeaderComponent } from '../header/header.component';
import { ContainerComponent } from '../container/container.component';
import { SectionBaseDirective } from 'src/app/utils/SectionBaseDirective';
import { ActivatedRoute } from '@angular/router';

@Dynamic()
@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  imports: [HeaderComponent, ContainerComponent],
  standalone: true,
})
export class ExamplesComponent extends SectionBaseDirective implements OnInit {
  async ngOnInit() {
    await super.initialize();
  }

  @HostListener('window:ModuleChange', ['$event'])
  async moduleChangeObserver(event: CustomEvent) {
    this.setSelectedModule(event.detail.data);
  }
}
