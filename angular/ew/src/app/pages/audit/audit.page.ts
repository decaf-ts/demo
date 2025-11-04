import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { EmptyStateComponent,  NgxPageDirective } from '@decaf-ts/for-angular';
import { TranslatePipe } from '@ngx-translate/core';
import { ContainerComponent } from '../../components/container/container.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.page.html',
  styleUrls: ['./audit.page.scss'],
  standalone: true,
  imports: [HeaderComponent, EmptyStateComponent, TranslatePipe, IonContent,  ContainerComponent],
})
export class AuditPage extends NgxPageDirective{

  constructor() {
    super("Audit", false);
  }
}
