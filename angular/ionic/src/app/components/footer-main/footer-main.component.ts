import { Component, OnInit } from '@angular/core';
import { Dynamic } from '@decaf-ts/for-angular';
import { SectionBaseDirective } from 'src/app/utils/SectionBaseDirective';
import { ContainerComponent } from '../container/container.component';
import { NgStyle } from '@angular/common';
import { infoData } from 'src/app/utils/data';

@Dynamic()
@Component({
  selector: 'app-footer-main',
  templateUrl: './footer-main.component.html',
  styleUrls: ['./footer-main.component.scss'],
  imports: [ContainerComponent, NgStyle],
  standalone: true,
})
export class FooterMainComponent
  extends SectionBaseDirective
  implements OnInit
{
  data = infoData;

  async ngOnInit() {
    await super.initialize();
    this.initialized = true;
  }
}
