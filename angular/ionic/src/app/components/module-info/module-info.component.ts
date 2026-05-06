import { Component, Input } from '@angular/core';
import { Dynamic, NgxComponentDirective } from '@decaf-ts/for-angular';
import { IonButton } from '@ionic/angular/standalone';
import { ContainerComponent } from '../container/container.component';

@Dynamic()
@Component({
  selector: 'app-module-info',
  templateUrl: './module-info.component.html',
  styleUrls: ['./module-info.component.scss'],
  imports: [IonButton, ContainerComponent],
  standalone: true,
})
export class ModuleInfoComponent extends NgxComponentDirective {
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
  button1Text?: string;

  @Input()
  button2Text?: string;

  @Input()
  backgroundColor: 'default' | 'muted' = 'default';

  @Input()
  demoIcon?: string;

  @Input()
  demoDescription?: string;

  buttonAction(route: string) {
    this.router.navigate([`/${route}`], {
      queryParams: { module: this.title },
    });
  }

  async ngOnInit() {
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
    }
  }
}
