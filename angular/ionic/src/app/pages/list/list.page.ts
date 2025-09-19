import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { faker } from '@faker-js/faker';
import { IonCard, IonCardContent, IonCardTitle, IonSearchbar, IonContent, IonItem, IonIcon, IonLabel, } from '@ionic/angular/standalone';
import { DecafRepository, ListComponentsTypes, ListComponent, BaseCustomEvent, EventConstants } from '@decaf-ts/for-angular';
import { getFakerData } from '@shared/utils';
import { EmployeeModel, CategoryModel } from '@shared/models';
import { Model } from '@decaf-ts/decorator-validation';
import { ContainerComponent } from 'src/app/components/container/container.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { OperationKeys } from '@decaf-ts/db-decorators';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.css'],
  standalone: true,
  imports: [ListComponent, HeaderComponent, ContainerComponent, IonContent, IonItem, IonIcon, IonLabel, IonCard, IonCardTitle, IonCardContent, IonSearchbar],
})
export class ListPage implements OnInit, OnDestroy {

  @Input()
  type: ListComponentsTypes = ListComponentsTypes.INFINITE;

  data!: Model[];

  model!: CategoryModel | EmployeeModel;

  repository!: DecafRepository<Model>;

  OperationKeys = OperationKeys;

  ngOnInit() {
    if (!this.type)
      this.type = ListComponentsTypes.INFINITE;
    this.model = this.type === ListComponentsTypes.INFINITE ?
      new EmployeeModel() : new CategoryModel();
    // this.repository = Repository.forModel(this.model?.constructor as Constructor<Model>, "ram");
  }

  ngOnDestroy() {
    this.data = [];
  }

  handleEvent(event: BaseCustomEvent) {
    const { name } = event;
    if (name === EventConstants.REFRESH)
      return this.handleListRefreshEvent(event);
  }

  handleListRefreshEvent(event: BaseCustomEvent) {
    const data = event.data as Model[];
    if (data?.length)
      this.data = [...data];
  }


  async refresh(): Promise<Model[] | void> {
    return this.getData()
  }

  async getData() {
    return getFakerData(100, {
      name: faker.person.fullName,
      occupation: faker.person.jobTitle,
      birthdate: faker.date.birthdate,
      hiredAt: faker.date.past
    });
  }
}
