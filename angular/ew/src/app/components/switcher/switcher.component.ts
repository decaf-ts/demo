import { Component, OnInit } from '@angular/core';
import { Dynamic, LayoutComponent, NgxFormDirective } from '@decaf-ts/for-angular';

@Dynamic()
@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss'],
  standalone: true,
})
export class SwitcherComponent extends NgxFormDirective implements OnInit {


  override async ngOnInit() {
    super.ngOnInit()
    console.log(this);
  }

}
