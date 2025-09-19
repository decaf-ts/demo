import { Component, OnInit } from '@angular/core';
import { IonCard, IonContent } from '@ionic/angular/standalone';
import { OperationKeys } from '@decaf-ts/db-decorators';
import { KeyValue, getLogger, BaseCustomEvent, ModelRendererComponent } from '@decaf-ts/for-angular';
import { FieldSetForm } from '@shared/forms';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ContainerComponent } from 'src/app/components/container/container.component';


@Component({
  standalone: true,
  selector: 'app-fieldset',
  templateUrl: './fieldset.page.html',
  styleUrls: ['./fieldset.page.scss'],
  imports: [HeaderComponent, ContainerComponent, ModelRendererComponent, IonContent, IonCard]
})
export class FieldsetPage implements OnInit {

  title = 'Fieldset Component';

  model!: FieldSetForm;

  globals!: KeyValue;

  ngOnInit(): void {
    this.model = new FieldSetForm({});
    this.globals = { operation: OperationKeys.CREATE, };
  }

  handleSubmit(event: BaseCustomEvent): void {
    getLogger(this).info(`Submit event: ${JSON.stringify(event)}`);
  }
}
