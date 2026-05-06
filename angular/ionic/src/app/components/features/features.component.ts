import {
  Component,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Dynamic, NgxComponentDirective } from '@decaf-ts/for-angular';
import { HeaderComponent } from '../header/header.component';
import { ContainerComponent } from '../container/container.component';
import { ActivatedRoute } from '@angular/router';
import { ModulesData } from 'src/app/utils/data';

@Dynamic()
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  imports: [HeaderComponent, ContainerComponent],
  standalone: true,
})
export class FeaturesComponent
  extends NgxComponentDirective
  implements OnChanges, OnDestroy
{
  @Input()
  meta?: string;

  @Input()
  title?: string = 'Features';

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

  activatedRoute = inject(ActivatedRoute);

  module: string | null = null;

  modules: any[] = [...ModulesData];

  getParam(): void {
    const sub = this.activatedRoute.queryParamMap.subscribe({
      next: (params) => {
        this.module = params.get('module');
        if (this.module) {
          console.log('this.module:', this.module);
          const ModuleData = ModulesData.find((m) => m.title === this.module);
          this.title = ModuleData?.title;
          this.description = ModuleData?.description;
        } else {
          this.title = '';
          this.description = '';
        }
      },
      error(err) {
        console.log('err:', err);
      },
      complete: () => {
        console.log('unsubbed');
        sub.unsubscribe();
      },
    });
  }

  async ngOnInit() {
    // console.log('ngOnInit FeaturesComponent:');
    // this.getParam();

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
