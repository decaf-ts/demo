import { Component, Input, OnInit } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { Dynamic, windowEventEmitter } from '@decaf-ts/for-angular';
import { faq, ModuleSamples } from 'src/app/utils/data';
import { SectionBaseDirective } from 'src/app/utils/SectionBaseDirective';

@Dynamic()
@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.scss'],
  imports: [ContainerComponent],
  standalone: true,
})
export class FaqSectionComponent extends SectionBaseDirective {
  override modules: any[] = [...ModuleSamples, ...ModuleSamples];
  questions = faq;
}
