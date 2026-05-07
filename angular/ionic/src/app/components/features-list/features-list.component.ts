import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { Dynamic, NgxComponentDirective } from '@decaf-ts/for-angular';
import { ModulesData } from 'src/app/utils/data';
import { ModuleInfoComponent } from '../module-info/module-info.component';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ModuleData } from 'src/app/types/types-interfaces';

@Dynamic()
@Component({
  selector: 'app-features-list',
  templateUrl: './features-list.component.html',
  styleUrls: ['./features-list.component.scss'],
  imports: [ContainerComponent],
  standalone: true,
})
export class FeaturesListComponent extends NgxComponentDirective {
  @Input()
  meta?: string;

  @Input()
  title?: string;

  @Input()
  description?: string;

  @Input()
  demoSide: 'left' | 'right' = 'right';

  @Input()
  button1Text?: string;

  @Input()
  button2Text?: string;

  @Input()
  backgroundColor: 'default' | 'muted' = 'default';

  @Input()
  demoIcon?: string;

  @Input()
  demoDescription?: string;

  @Output() selectModel = new EventEmitter();

  activatedRoute = inject(ActivatedRoute);

  selectedModule: string | null = null;

  modules = [...ModulesData];

  sub!: Subscription;

  selectedModuleData: ModuleData | undefined;

  setSelectedModule(selectedModule?: string) {
    if (selectedModule) this.selectedModule = selectedModule;
    if (this.selectedModule) {
      this.selectModel.emit(this.selectedModuleData);
      console.log('this.selectedModule:', this.selectedModule);
      this.selectedModuleData = ModulesData.find(
        (m) => m.title === this.selectedModule
      );
      this.title = `Features for ${this.selectedModuleData?.title}`;
      this.description = this.selectedModuleData?.description;
    }
  }

  getParam(param: string): void {
    this.sub?.unsubscribe();
    this.sub = this.activatedRoute.queryParamMap.subscribe({
      next: (params) => {
        this.selectedModule = params.get(param);
        if (this.selectedModule) {
          console.log('this.selectedModule:', this.selectedModule);
          this.selectedModuleData = ModulesData.find(
            (m) => m.title === this.selectedModule
          );
          this.title = `Features for ${this.selectedModuleData?.title}`;
          this.description = this.selectedModuleData?.description;
        }
      },
      error: (err) => {
        console.log('err:', err);
      },
      complete: () => {
        console.log('unsubbed');
        this.sub.unsubscribe();
      },
    });
  }

  async ngOnInit() {
    this.getParam('module');
    if (this.translatable) {
      if (this.title) {
        this.title = await this.translate(this.title);
      }
      if (this.meta) {
        this.meta = await this.translate(this.meta);
      }
      if (this.description) {
        this.description = await this.translate(this.description);
      }
      if (this.demoDescription) {
        this.demoDescription = await this.translate(this.demoDescription);
      }
      if (this.button1Text) {
        this.button1Text = await this.translate(this.button1Text);
      }

      if (this.button2Text) {
        this.button2Text = await this.translate(this.button2Text);
      }
    }
  }
}
