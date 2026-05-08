import { Component, Input } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { Dynamic, NgxComponentDirective } from '@decaf-ts/for-angular';
import { TrustedByCompanies } from 'src/app/utils/data';
import { SectionBaseDirective } from 'src/app/utils/SectionBaseDirective';

@Dynamic()
@Component({
  selector: 'app-trusted-section',
  templateUrl: './trusted-section.component.html',
  styleUrls: ['./trusted-section.component.scss'],
  imports: [ContainerComponent],
  standalone: true,
})
export class TrustedSectionComponent extends SectionBaseDirective {
  companies: any[] = [...TrustedByCompanies, ...TrustedByCompanies];
}
