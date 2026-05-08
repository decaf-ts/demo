import { Component, Input, OnInit } from '@angular/core';
import { Dynamic, NgxComponentDirective } from '@decaf-ts/for-angular';
import { HeaderComponent } from '../header/header.component';
import { ContainerComponent } from '../container/container.component';
import { SectionBaseDirective } from 'src/app/utils/SectionBaseDirective';

@Dynamic()
@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss'],
  imports: [HeaderComponent, ContainerComponent],
  standalone: true,
})
export class ModulesComponent extends SectionBaseDirective {}
