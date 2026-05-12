import { Component, OnInit } from '@angular/core';
import { Dynamic } from '@decaf-ts/for-angular';
import { SectionBaseDirective } from 'src/app/utils/SectionBaseDirective';
import { ContainerComponent } from '../container/container.component';

@Dynamic()
@Component({
  selector: 'app-footer-generic',
  templateUrl: './footer-generic.component.html',
  styleUrls: ['./footer-generic.component.scss'],
  imports: [ContainerComponent],
  standalone: true,
})
export class FooterGenericComponent
  extends SectionBaseDirective
  implements OnInit
{
  async ngOnInit() {
    await super.initialize();
    this.initialized = true;
  }
}
