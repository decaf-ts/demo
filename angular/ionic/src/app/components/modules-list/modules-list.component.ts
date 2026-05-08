import { Component, Input } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { Dynamic, NgxComponentDirective } from '@decaf-ts/for-angular';
import { ModulesData } from 'src/app/utils/data';
import { ModuleInfoComponent } from '../module-info/module-info.component';
import { SectionBaseDirective } from 'src/app/utils/SectionBaseDirective';

@Dynamic()
@Component({
  selector: 'app-modules-list',
  templateUrl: './modules-list.component.html',
  styleUrls: ['./modules-list.component.scss'],
  imports: [ContainerComponent, ModuleInfoComponent],
  standalone: true,
})
export class ModulesListComponent extends SectionBaseDirective {}
