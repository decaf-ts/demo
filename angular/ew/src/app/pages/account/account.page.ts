import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonContent } from '@ionic/angular/standalone';
import { getOnWindow, ModelRendererComponent, NgxPageDirective } from '@decaf-ts/for-angular';
import { TranslatePipe } from '@ngx-translate/core';
import { ContainerComponent } from '../../components/container/container.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { LoginForm } from 'src/app/forms/LoginForm';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: true,
  imports: [HeaderComponent, ModelRendererComponent, TranslatePipe, IonContent, IonCard, IonCardContent, ContainerComponent, ModelRendererComponent],
})
export class AccountPage extends NgxPageDirective implements OnInit{

  constructor() {
    super("Account", false);
  }

  ngOnInit(): void {
   this.model = new LoginForm({
    username: getOnWindow('loggedUser') || 'User',
    password: 'Decafts123-'
   });
  }
}
