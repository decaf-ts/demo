import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { Dynamic } from '@decaf-ts/for-angular';

import { SectionBaseDirective } from 'src/app/utils/SectionBaseDirective';

@Dynamic()
@Component({
  selector: 'app-features-list',
  templateUrl: './features-list.component.html',
  styleUrls: ['./features-list.component.scss'],
  imports: [ContainerComponent],
  standalone: true,
})
export class FeaturesListComponent
  extends SectionBaseDirective
  implements OnInit
{
  async ngOnInit() {
    await super.initialize();
    this.initialized = true;
  }

  override async setSelectedModule(module: string) {
    if (this.selectedModule !== module && this.initialized) {
      this.emitModuleChange(module);
    }
    super.setSelectedModule(module);
  }
}
