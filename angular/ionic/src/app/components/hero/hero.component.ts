import { Component, OnInit } from '@angular/core';
import { Dynamic } from '@decaf-ts/for-angular';
import { HeaderComponent } from '../header/header.component';
import { ContainerComponent } from '../container/container.component';

@Dynamic()
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  imports: [HeaderComponent, ContainerComponent],
  standalone: true,
})
export class HeroComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
