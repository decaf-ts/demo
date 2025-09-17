import { DecafRepository, formatDate, FunctionLike } from '@decaf-ts/for-angular';
import { faker } from '@faker-js/faker';
import { Model, ModelConstructor } from '@decaf-ts/decorator-validation';
import { EmployeeModel, CategoryModel } from '@shared/models';
import { InternalError } from '@decaf-ts/db-decorators';
import { Repository } from '@decaf-ts/core';


export class ForAngularRepository<T extends Model> {

  private data: T[] = [];
  constructor(protected _repository: DecafRepository<T> | ModelConstructor<T>, protected model?: string | Model) { }

  private get repository(): DecafRepository<Model> {
    if (!this._repository) {
      const constructor = Model.get(typeof this.model === 'string' ? this.model : (this.model as Model).constructor.name);
      if (!constructor)
        throw new InternalError(
          'Cannot find model. was it registered with @model?',
        );
      try {
        this.model = new constructor();
        this._repository = Repository.forModel(constructor) as unknown as DecafRepository<T>;
      } catch (error: unknown) {
        throw new InternalError(
          (error as Error)?.message || error as string
        );
      }
    }
    return this._repository as DecafRepository<Model>;
  }

  public async init(): Promise<void> {
    if (!this._repository)
      this._repository = this.repository as DecafRepository<T>;
    let data = await (this._repository as unknown as DecafRepository<Model>)?.select().execute();
    if (!this.data?.length) {
      const items = 15;
      data = ((this.model as Model).constructor.name !== 'CategoryModel' ? generateEmployes(items) : generateCatories(items)) as Model[];
      data = await this.repository?.createAll(data) as T[];
    }
    this.data = data as T[] || [];
  }

  // public async getAll(): Promise<Model[]> {
  //   return await this._repository?.select().execute() || [];
  // }

  // async read(id: string): Promise<Model> {
  //   const res = await this._repository?.read(id) as Model;
  //   return res;
  // }
}

function generateEmployes(limit = 100): EmployeeModel[] {
  return getFakerData(limit, {
    name: faker.person.fullName,
    occupation: faker.person.jobTitle,
    birthdate: () => faker.date.birthdate(),
    hiredAt: (random: number = Math.floor(Math.random() * 5) + 1) =>
      faker.date.past({ years: random }),
  }, EmployeeModel.name);
}

function generateCatories(limit = 100): CategoryModel[] {
  return getFakerData<CategoryModel>(limit, {
    name: () =>
      faker.commerce.department() +
      ' ' +
      faker.commerce.productAdjective() +
      ' ' +
      faker.commerce.productMaterial(),
    description: () => faker.commerce.productDescription(),
  }, CategoryModel.name);
}

export function getFakerData<T extends Model>(
  limit = 100,
  data: Record<string, FunctionLike>,
  model?: string,
): T[] {
  let index = 1;
  return Array.from({ length: limit }, () => {
    const item = {} as T & { id: number; createdAt: Date };
    for (const [key, value] of Object.entries(data)) {
      const val = value();
      item[key as keyof T] = val.constructor === Date ? formatDate(val) : val;
    }
    // item.id = index;
    // item.createdAt = faker.date.past({ refDate: '2025-01-01' });
    index = index + 1;
    return (!model ? item : Model.build(item, model)) as T;
  });
}
