import { Component, Input } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { Dynamic } from '@decaf-ts/for-angular';
import { faq, ModuleSamples } from 'src/app/utils/data';
import { IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';
import { SectionBaseDirective } from 'src/app/utils/SectionBaseDirective';

@Dynamic()
@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.scss'],
  imports: [ContainerComponent, IonGrid, IonCol, IonRow],
  standalone: true,
})
export class FaqSectionComponent extends SectionBaseDirective {
  override modules: any[] = [...ModuleSamples, ...ModuleSamples];
  questions = faq;
}
