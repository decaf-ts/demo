import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { Dynamic, windowEventEmitter } from '@decaf-ts/for-angular';

import { ComponentEventNames } from '@decaf-ts/ui-decorators';
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
    this.module = module;
    this.selectedModule = module;
    const ModuleData = this.modules.find(
      (m) => m.title === this.selectedModule
    );
    this.title = `Features for ${ModuleData?.title}`;
    this.description = ModuleData?.description;
    this.selectedModuleData = ModuleData;
    this.changeDetectorRef.detectChanges();
  }
}
