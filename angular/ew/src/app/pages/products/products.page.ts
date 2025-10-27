import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ContainerComponent } from 'src/app/components/container/container.component';
import { IBaseCustomEvent, EventConstants, ListComponent } from '@decaf-ts/_for-angular';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
 imports: [HeaderComponent, ContainerComponent, ListComponent, IonContent, IonCard, IonCardContent],
})
export class ProductsPage implements OnInit {

  model!: Product;
  // constructor() { }

  ngOnInit() {
    this.model = new Product();
  }

    handleEvent(event: IBaseCustomEvent) {
    const {name, data } = event;
    console.log(name, data);

  }

}
