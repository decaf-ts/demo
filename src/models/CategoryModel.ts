import {
  Model,
  model,
  ModelArg,
  required
} from '@decaf-ts/decorator-validation';
import { uilistprop, uielement, uilistmodel, uimodel, hideOn } from '@decaf-ts/ui-decorators';
import { OperationKeys, timestamp } from '@decaf-ts/db-decorators';
import { index, pk } from '@decaf-ts/core';

/**
 * @description Category model rendered as a list item and CRUD form in the demo.
 * @summary Decorated as a `ngx-decaf-list-item` (with a cafe icon) and a
 * `ngx-decaf-crud-form` UI model; `name` and `description` feed the list item
 * title/description via `uilistprop`, and `createdAt` is set automatically on creation.
 *
 * @class CategoryModel
 * @extends Model
 * @memberOf module:demo.models.CategoryModel
 */
@uilistmodel('ngx-decaf-list-item', {icon: 'cafe-outline', className: 'testing'})
@uimodel('ngx-decaf-crud-form')
@model()
export class CategoryModel extends Model {

  /**
   * @description Primary key of the category.
   * @summary Auto-generated numeric identifier defined via the {@link pk} decorator.
   * @type {number}
   */
  @pk({type: 'Number' })
  id!: number;

  /**
   * @description Display name of the category.
   * @summary Required, rendered as a `ngx-decaf-crud-field` with category label and
   * placeholder translations; used as the list item `title` via `uilistprop`.
   * @type {string}
   */
  @required()
  @uielement('ngx-decaf-crud-field', {
    label: 'category.name.label',
    placeholder: 'category.name.placeholder',
  })
  @uilistprop('title')
  name!: string;

  /**
   * @description Optional long-form description of the category.
   * @summary Rendered as a textarea `ngx-decaf-crud-field`; used as the list item
   * `description` via `uilistprop` and flagged with a database `index`.
   * @type {string}
   */
  @uielement('ngx-decaf-crud-field', {
    label: 'category.description.label',
    placeholder: 'category.description.placeholder',
    type: 'textarea',
  })
  @uilistprop('description')
  @index()
  description!: string;

  /**
   * @description Creation timestamp of the category.
   * @summary Populated automatically by the {@link timestamp} decorator on `CREATE`,
   * rendered as a textarea `ngx-decaf-crud-field` used as the list item `info`,
   * and hidden from the form on `CREATE` via {@link hideOn}.
   * @type {Date}
   */
  @uielement('ngx-decaf-crud-field', {
    label: 'category.created.label',
    placeholder: 'category.created.placeholder',
    type: 'textarea',
  })
  @uilistprop('info')
  @timestamp([OperationKeys.CREATE])
  @hideOn(OperationKeys.CREATE)
  createdAt!: Date;

  /**
   * @description Last-update timestamp of the category.
   * @summary Populated automatically by the {@link timestamp} decorator on create and update operations.
   * @type {Date}
   */
  @timestamp()
  updateAt!: Date;

  /**
   * @description Creates a new {@link CategoryModel} instance.
   * @summary Initializes the model from the provided {@link ModelArg}, applying
   * validation and UI decorator metadata during base {@link Model} construction.
   *
   * @param {ModelArg<CategoryModel>} [args={}] - Optional initialization attributes for the model.
   */
  constructor(args: ModelArg<CategoryModel> = {}) {
    super(args);
  }
}
