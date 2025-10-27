import { Component, Input, OnInit } from '@angular/core';
import { CrudOperations, OperationKeys } from '@decaf-ts/db-decorators';
import { DemoModel } from '@shared/models';
import { IBaseCustomEvent, KeyValue, ModelRendererComponent, getLogger } from '@decaf-ts/for-angular';
import { IonCard, IonCardContent, IonContent } from '@ionic/angular/standalone';
import { ContainerComponent } from 'src/app/components/container/container.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.css'],
  standalone: true,
  imports: [ModelRendererComponent, HeaderComponent, ContainerComponent, IonContent, IonCard, IonCardContent]
})
export class CrudPage implements OnInit {

  title = 'Decaf-ts for-angular demo';

  @Input()
  protected readonly OperationKeys: CrudOperations = OperationKeys.CREATE;

  @Input()
  operation: CrudOperations = OperationKeys.CREATE;

  model!: DemoModel;

  globals!: KeyValue;

  ngOnInit(): void {
    if (!this.operation)
      this.operation = OperationKeys.CREATE;

    this.model = new DemoModel({
      id: 1,
      name: 'John Doe',
      // birthdate: '1989-12-12',
      email: 'john.doe@example.com',
      website: 'https://johndoe.example.com',
      password: 'password123',
      ... (this.operation === OperationKeys.READ ?
        {
          category: { name: "Demo Category", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
          user: { username: "Admin", secret: "DemoPass" },
          gender: "male",
          birthdate: "1989-12-12",

        } : {}),
    });

    this.globals = {
      operation: this.operation,
      uid: (this.operation === OperationKeys.DELETE ? this.model.id : undefined),
    };
  }

  handleSubmit(event: IBaseCustomEvent): void {
    getLogger(this).info(`Submit event: ${JSON.stringify(event)}`);
  }
}
