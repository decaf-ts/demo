import { Component, Input} from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { Dynamic, NgxComponentDirective } from '@decaf-ts/for-angular';
import { ModuleSamples } from 'src/app/utils/data';

@Dynamic()
@Component({
  selector: 'app-modules-section',
  templateUrl: './modules-section.component.html',
  styleUrls: ['./modules-section.component.scss'],
  imports: [ContainerComponent],
  standalone: true,
})
export class ModulesSectionComponent  extends NgxComponentDirective {
 @Input()
  meta?: string;

  @Input()
  title?: string;

  @Input()
  description?: string;

  @Input()
  demoSide: 'left' | 'right' = 'right';

  @Input()
  buttonText?: string;

  @Input()
  backgroundColor: 'default' | 'muted' = 'default';

  @Input()
  demoIcon?: string;

  @Input()
  demoDescription?: string;

  modules: any[] = [...ModuleSamples,...ModuleSamples]

  async ngOnInit() {
    if(this.translatable) {
      if(this.title) {
        this.title = await this.translate(this.title);
      }
      if(this.meta) {
        this.meta = await this.translate(this.meta);
      }
      if(this.description) {
        this.description = await this.translate(this.description);
      }
       if(this.demoDescription) {
        this.demoDescription = await this.translate(this.demoDescription);
      }
      if(this.buttonText) {
        this.buttonText = await this.translate(this.buttonText);
      }
    }

  }
}