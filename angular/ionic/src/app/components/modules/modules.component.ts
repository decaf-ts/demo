import { Component, Input, OnInit } from '@angular/core';
import { Dynamic, NgxComponentDirective } from '@decaf-ts/for-angular';
import { HeaderComponent } from '../header/header.component';
import { ContainerComponent } from '../container/container.component';

@Dynamic()
@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss'],
  imports: [HeaderComponent, ContainerComponent],
  standalone: true,
})
export class ModulesComponent extends NgxComponentDirective {

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

      if(this.button2Text) {
        this.button2Text = await this.translate(this.button2Text);
      }
    }

  }

}
