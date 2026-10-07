import {
  model,
  Model,
  ModelArg,
} from '@decaf-ts/decorator-validation';
import { uichild, uilayoutprop, uielement, uilayout } from '@decaf-ts/ui-decorators';
import { CategoryModel } from '../models/CategoryModel';
import { EmployeeModel } from '../models/EmployeeModel';

/**
 * @description Demo dashboard layout composed of empty states and nested CRUD forms.
 * @summary Arranged as a `ngx-decaf-layout` with three rows ('Primeira Linha',
 * 'Segunda Linha', 'Terceira Linha'); each property declares its row/column placement
 * via `uilayoutprop` and either renders a `ngx-decaf-empty-state` placeholder
 * (via `uielement`) or embeds a child model form (via `uichild`).
 *
 * @class DashboardLayout
 * @extends Model
 * @memberOf module:demo.layouts.Dashboard
 */
@uilayout('ngx-decaf-layout', 3, ['Primeira Linha', 'Segunda Linha', 'Terceira Linha'])
@model()
export class DashboardLayout extends Model {

  /**
   * @description Empty-state placeholder occupying row 3, column 1.
   * @summary Rendered by the `ngx-decaf-empty-state` component with a title,
   * subtitle and default card styling; positioned via `uilayoutprop`.
   * @type {string}
   */
  @uielement('ngx-decaf-empty-state', {
    'title': 'Primeiro componente',
    'subtitle': 'Uma linha e 1 uma coluna',
    'className': 'dcf-card-default'
  })
  @uilayoutprop(3, 1)
  left!: string;

  /**
   * @description Empty-state placeholder occupying row 2, column 2.
   * @summary Rendered by the `ngx-decaf-empty-state` component with a title,
   * subtitle and default card styling; positioned via `uilayoutprop`.
   * @type {string}
   */
  @uielement('ngx-decaf-empty-state', {
    title: 'Segundo componente',
    subtitle: 'Subtítulo do segundo componente',
    className: 'dcf-card-default'
  })
  @uilayoutprop(2, 2)
  right!: string;

  /**
   * @description Embedded employee CRUD form occupying row 1, column 2.
   * @summary Renders an {@link EmployeeModel} through the `ngx-decaf-crud-form`
   * child component; positioned via `uilayoutprop`.
   * @type {EmployeeModel}
   */
  @uilayoutprop(1, 2)
  @uichild(EmployeeModel.name, 'ngx-decaf-crud-form')
  employee!: EmployeeModel;

  /**
   * @description Embedded category CRUD form occupying row 1, column 3.
   * @summary Renders a {@link CategoryModel} through the `ngx-decaf-crud-form`
   * child component; positioned via `uilayoutprop`.
   * @type {CategoryModel}
   */
  @uilayoutprop(1, 3)
  @uichild(CategoryModel.name, 'ngx-decaf-crud-form')
  category!: CategoryModel;

  /**
   * @description Empty-state placeholder occupying row 2, column 3.
   * @summary Rendered by the `ngx-decaf-empty-state` component with a title,
   * subtitle and default card styling; positioned via `uilayoutprop`.
   * @type {string}
   */
  @uielement('ngx-decaf-empty-state', {
    title: 'Segundo componente',
    subtitle: 'Subtítulo do segundo componente',
    className: 'dcf-card-default'
  })
  @uilayoutprop(2, 3)
  right2!: string;

  // @uilayoutprop(2, 3)
  // @uichild(DemoModel.name, 'ngx-decaf-crud-form')
  // demoModel!: DemoModel;

  /**
   * @description Creates a new {@link DashboardLayout} instance.
   * @summary Initializes the model from the provided {@link ModelArg}, applying
   * validation and layout decorator metadata during base {@link Model} construction.
   *
   * @param {ModelArg<DashboardLayout>} [args={}] - Optional initialization attributes for the model.
   */
  constructor(args: ModelArg<DashboardLayout> = {}) {
    super(args);
  }
}
