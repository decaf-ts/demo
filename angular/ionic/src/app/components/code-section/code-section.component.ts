import { Component, Input } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { IonButton } from '@ionic/angular/standalone';
import { Dynamic, NgxComponentDirective } from '@decaf-ts/for-angular';
import { SectionBaseDirective } from 'src/app/utils/SectionBaseDirective';

@Dynamic()
@Component({
  selector: 'app-code-section',
  templateUrl: './code-section.component.html',
  styleUrls: ['./code-section.component.scss'],
  imports: [IonButton, ContainerComponent],
  standalone: true,
})
export class CodeSectionComponent extends SectionBaseDirective {}
