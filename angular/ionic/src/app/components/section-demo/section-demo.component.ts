import { Component, Input, OnInit } from '@angular/core';
import { Dynamic, IconComponent, NgxComponentDirective } from '@decaf-ts/for-angular';
import { IonButton } from '@ionic/angular/standalone';
import { ContainerComponent } from '../container/container.component';

@Dynamic()
@Component({
  selector: 'app-section-demo',
  templateUrl: './section-demo.component.html',
  styleUrls: ['./section-demo.component.scss'],
  imports: [IonButton, IconComponent, ContainerComponent],
  standalone: true,
})
export class SectionDemoComponent extends NgxComponentDirective {

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
