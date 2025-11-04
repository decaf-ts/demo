import { Component } from '@angular/core';
import { IonCard, IonCardContent, IonCardTitle, IonContent, IonImg } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cardOutline, peopleOutline, documentAttachOutline } from 'ionicons/icons';
import { NgxPageDirective } from '@decaf-ts/for-angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ContainerComponent } from 'src/app/components/container/container.component';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [TranslatePipe, HeaderComponent, ContainerComponent, IonContent, IonCard, IonCardTitle, IonCardContent, IonImg],
})
export class DashboardPage extends NgxPageDirective {


  cards: {title: string, icon: string, url: string}[] = [
    { title: "product", icon: "product.svg", url: "/model/Product" },
    { title: "batch", icon: "batch.svg", url: "/model/Batch" },
    { title: "account", icon: "account.svg", url: "Account" }
  ];
  // model!: DashboardLayout;
  constructor() {
    super("Dashboard", true);
    addIcons({
      cardOutline,
      peopleOutline,
      documentAttachOutline,
    });
  }

  handleClick(page: string) {
    this.router.navigateByUrl(`${page}`);
  }
}
