import { Component, inject, Input, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent } from '@ionic/angular/standalone';
import {
  InternalError,
  IRepository,
  OperationKeys,
} from '@decaf-ts/db-decorators';
import { EventIds, Repository } from '@decaf-ts/core';
import { Model, Primitives } from '@decaf-ts/decorator-validation';
import { Logger } from '@decaf-ts/logging';
import { IBaseCustomEvent, EventConstants, KeyValue, getLogger, DecafRepository, ModelRendererComponent, NgxPageDirective, ListComponent } from '@decaf-ts/for-angular';
import { RouterService } from '../../services/router.service';
import { getNgxToastComponent } from '../../utils/NgxToastComponent';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ContainerComponent } from 'src/app/components/container/container.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-model',
  templateUrl: './model.page.html',
  imports: [ModelRendererComponent, TranslatePipe, ListComponent, HeaderComponent, ContainerComponent, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent],
  styleUrls: ['./model.page.scss'],
})
export class ModelPage extends NgxPageDirective {

  @Input()
  operation!:
    | OperationKeys.CREATE
    | OperationKeys.READ
    | OperationKeys.UPDATE
    | OperationKeys.DELETE;

  @Input()
  modelName!: string;

  allowedOperations: OperationKeys[] = [OperationKeys.CREATE, OperationKeys.READ];



  private routerService: RouterService = inject(RouterService);

  constructor() {
    super("ModelPage", false);
  }



  override async ionViewWillEnter(): Promise<void> {
    await super.ionViewWillEnter();
    if(this.modelId)
      this.allowedOperations =  this.allowedOperations.concat([OperationKeys.UPDATE, OperationKeys.DELETE]);
    await this.refresh(this.modelId);
  }

  async refresh(uid?: string | number): Promise<void> {
    if(!uid)
      uid = this.modelId as string | number;
    try {
      this._repository = this.repository;
      switch(this.operation){
        case OperationKeys.READ:
        case OperationKeys.UPDATE:
        case OperationKeys.DELETE:
          this.model = await this.handleGet(uid as string | number);
        break;
      }
    } catch (error: unknown) {
      this.log.for(this.refresh).error(error as Error | string);
    }
  }

  override async handleEvent(event: any) {
    const { name } = event;
    switch (name) {
      case EventConstants.SUBMIT:
        await this.handleSubmit(event);
      break;
    }
  }

  async handleSubmit(event: IBaseCustomEvent): Promise<void | Error> {
    try {
      const repo = this._repository as IRepository<Model>;
      const data = this.parseData(event.data as KeyValue);
      const result = this.operation === OperationKeys.CREATE ?
        await repo.create(data as Model) : this.operation === OperationKeys.UPDATE ?
          await repo.update(data as Model) : repo.delete(data as string | number);
      if(result) {
        (repo as DecafRepository<Model>).refresh(this.modelName, this.operation, this.modelId as EventIds);
        this.routerService.backToLastPage();
        await getNgxToastComponent().inform(`${this.operation} Item successfully`);
      }
    } catch (error: unknown) {
      this.log.for(this.handleSubmit).error(error as Error | string);
      throw new Error((error as Error)?.message || error as string);
    }
  }

  async handleGet(uid: string | number): Promise<Model | undefined> {
    if (!uid) {
      this.log.for(this.handleGet).info('No key passed to model page read operation, backing to last page');
      this.routerService.backToLastPage();
      return undefined;
    }
    const type = Reflect.getMetadata("design:type", this.model as KeyValue, this.repository.pk as string).name;
    const result = await (this._repository as IRepository<Model>).read(
      [Primitives.NUMBER, Primitives.BIGINT].includes(type.toLowerCase()) ? Number(uid) : uid
    );
    return result ?? undefined;
  }


  private parseData(data: Partial<Model>): Model | string | number {
      const repo = this._repository as IRepository<Model>;
      const type = Reflect.getMetadata("design:type", this.model as KeyValue, this.repository.pk as string).name;
      if(this.operation !== OperationKeys.DELETE)
        return Model.build(this.modelId ? Object.assign(data, {[repo.pk]:  this.modelId}) : data, this.modelName) as Model;
      return [Primitives.NUMBER, Primitives.BIGINT].includes(type.toLowerCase()) ? Number(this.modelId) : this.modelId as string;
  }
}
