import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardTitle, IonContent, IonSearchbar } from '@ionic/angular/standalone';
import { KeyValue, ListComponent, BaseCustomEvent, EventConstants, ListComponentsTypes } from '@decaf-ts/for-angular';
import { EmployeeModel, CategoryModel } from '@shared/models';
import { Model } from '@decaf-ts/decorator-validation';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ContainerComponent } from 'src/app/components/container/container.component';
import { OperationKeys } from '@decaf-ts/db-decorators';

@Component({
  selector: 'app-list-model',
  templateUrl: './list-model.page.html',
  styleUrls: ['./list-model.page.css'],
  standalone: true,
  imports: [HeaderComponent, ContainerComponent, ListComponent, IonContent, IonCard, IonCardTitle, IonCardContent, IonSearchbar],
})
export class ListModelPage implements OnInit {

  @Input()
  type: ListComponentsTypes = ListComponentsTypes.INFINITE;

  data!: KeyValue[];

  model!: EmployeeModel | CategoryModel;

  OperationKeys = OperationKeys;

  async ngOnInit() {
    this.model = this.type === ListComponentsTypes.INFINITE ?
      new EmployeeModel() : new CategoryModel();
  }

  handleEvent(event: BaseCustomEvent) {
    const { name, data } = event;
    if (name === EventConstants.REFRESH)
      return this.handleListRefreshEvent(data as Model[]);

  }

  handleListRefreshEvent(items: Model[]) {
    if (items.length) {
      this.data = items.reduce((accum: Model[], curr) => {
        accum.push(curr);
        return accum;
      }, [] as Model[]);
    }
  }
}
