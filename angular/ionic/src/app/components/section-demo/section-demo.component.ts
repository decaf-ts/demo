import { Component, Input } from '@angular/core';
import { Dynamic, NgxComponentDirective } from '@decaf-ts/for-angular';
import { IonButton } from '@ionic/angular/standalone';
import { ContainerComponent } from '../container/container.component';
import { SectionBaseDirective } from 'src/app/utils/SectionBaseDirective';

@Dynamic()
@Component({
  selector: 'app-section-demo',
  templateUrl: './section-demo.component.html',
  styleUrls: ['./section-demo.component.scss'],
  imports: [IonButton, ContainerComponent],
  standalone: true,
})
export class SectionDemoComponent extends SectionBaseDirective {}
