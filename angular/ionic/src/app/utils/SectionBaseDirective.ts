import { Directive, inject, Input, OnDestroy } from '@angular/core';
import {
  NgxComponentDirective,
  NgxRouterService,
  windowEventEmitter,
} from '@decaf-ts/for-angular';
import { ModulesData } from 'src/app/utils/data';
import { ModuleData } from '../types/types-interfaces';

@Directive({ host: { '[attr.id]': 'uid' } })
export abstract class SectionBaseDirective extends NgxComponentDirective {
  @Input()
  meta?: string;

  @Input()
  module?: string;

  @Input()
  title?: string;

  @Input()
  description?: string;

  @Input()
  demoSide: 'left' | 'right' = 'right';

  @Input()
  buttonText?: string;

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

  @Input()
  logo?: string;

  @Input()
  logoContrast?: string;

  protected routerService = inject(NgxRouterService);

  protected selectedModule?: string;

  protected modules: ModuleData[] = [...ModulesData];

  selectedModuleData: ModuleData | undefined;

  override async initialize() {
    this.module = this.routerService.getQueryParamValue('module');
    if (this.module) {
      this.setSelectedModule(this.module);
    }
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
      if (this.buttonText) {
        this.buttonText = await this.translate(this.buttonText);
      }
      if (this.button1Text) {
        this.button1Text = await this.translate(this.button1Text);
      }

      if (this.button2Text) {
        this.button2Text = await this.translate(this.button2Text);
      }
    }
  }

  async setSelectedModule(module: string) {
    if (module !== this.selectedModule) {
      this.selectedModule = module as string;
      this.title = this.description = undefined;

      const ModuleData = this.modules.find(
        (m) => m.title === this.selectedModule
      );
      const urlSegment = this.routerService.getLastUrlSegment();
      const paramsIndex =
        urlSegment?.indexOf('?') === -1 ? undefined : urlSegment?.indexOf('?');
      const currentRoute = this.capitalizeFirstLetter(
        paramsIndex ? urlSegment.substring(0, paramsIndex) : urlSegment
      );

      this.title = ModuleData?.title
        ? `${currentRoute} for ${ModuleData?.title}`
        : 'Discover the Power of Modules';
      this.description =
        ModuleData?.description ||
        'Browse all Decaf modules and learn how to use them with examples extracted from their documentation.';
      this.selectedModuleData = ModuleData;
      this.changeDetectorRef.detectChanges();
    }
  }

  async clearModuleSection() {
    this.selectedModuleData = this.selectedModule = this.module = undefined;
    await this.emitModuleChange('');
  }

  async emitModuleChange(module: string) {
    console.log('Emitting module change for', module);
    windowEventEmitter('ModuleChange', {
      data: module,
    });
  }

  capitalizeFirstLetter(val: string): string | undefined {
    return val?.charAt(0)?.toUpperCase() + val?.slice(1);
  }

  override async ngOnDestroy(): Promise<void> {
    await super.ngOnDestroy();
  }
}
