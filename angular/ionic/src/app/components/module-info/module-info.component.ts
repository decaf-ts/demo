import { Component, Input } from '@angular/core';
import { Dynamic } from '@decaf-ts/for-angular';
import { IonButton } from '@ionic/angular/standalone';
import { ContainerComponent } from '../container/container.component';
import { SectionBaseDirective } from 'src/app/utils/SectionBaseDirective';

@Dynamic()
@Component({
  selector: 'app-module-info',
  templateUrl: './module-info.component.html',
  styleUrls: ['./module-info.component.scss'],
  imports: [IonButton, ContainerComponent],
  standalone: true,
})
export class ModuleInfoComponent extends SectionBaseDirective {
  buttonAction(route: string) {
    this.router.navigate([`/${route}`], {
      queryParams: { module: this.title },
    });
  }
}
