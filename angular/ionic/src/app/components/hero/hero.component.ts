import { Component, Input, OnInit } from '@angular/core';
import { Dynamic, NgxComponentDirective } from '@decaf-ts/for-angular';
import { HeaderComponent } from '../header/header.component';
import { ContainerComponent } from '../container/container.component';
import {
  IonButton,
  IonChip,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { SectionBaseDirective } from 'src/app/utils/SectionBaseDirective';

@Dynamic()
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  imports: [
    HeaderComponent,
    ContainerComponent,
    IonButton,
    IonChip,
    IonIcon,
    IonLabel,
    RouterLink,
  ],
  standalone: true,
})
export class HeroComponent extends SectionBaseDirective {}
