import { Component, Input } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { IonButton } from '@ionic/angular/standalone';
import { Dynamic, NgxComponentDirective } from '@decaf-ts/for-angular';

@Dynamic()
@Component({
  selector: 'app-code-section',
  templateUrl: './code-section.component.html',
  styleUrls: ['./code-section.component.scss'],
  imports: [IonButton, ContainerComponent],
  standalone: true,
})
export class CodeSectionComponent extends NgxComponentDirective {

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
      if(this.button1Text) {
        this.button1Text = await this.translate(this.button1Text);
      }
      if (this.button2Text) {
        this.button2Text = await this.translate(this.button2Text);
      }
    }

  }

}
