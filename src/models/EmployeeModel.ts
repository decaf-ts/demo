import {  Model, model, ModelArg, required } from '@decaf-ts/decorator-validation';
import { uielement, uilistmodel, uilistprop, uimodel } from '@decaf-ts/ui-decorators';
import { pk } from '@decaf-ts/core';
import { OperationKeys, timestamp } from '@decaf-ts/db-decorators';

/**
 * @description Employee model rendered as a list item and CRUD form in the demo.
 * @summary Decorated as a `ngx-decaf-list-item` (with a person icon) and a
 * `ngx-decaf-crud-form` UI model; `id`, `name`, `occupation` and `birthdate` feed the
 * list item rendering via `uilistprop`, and timestamps are managed automatically.
 *
 * @class EmployeeModel
 * @extends Model
 * @memberOf module:demo.models.EmployeeModel
 */
@uilistmodel('ngx-decaf-list-item', { icon: 'person-outline' })
@uimodel('ngx-decaf-crud-form')
@model()
export class EmployeeModel extends Model {

  /**
   * @description Primary key of the employee.
   * @summary Auto-generated numeric identifier defined via the {@link pk} decorator;
   * used as the list item `uid` via `uilistprop`.
   * @type {number}
   */
  @uilistprop('uid')
  @pk({type: 'Number' })
  id!: number;

  /**
   * @description Display name of the employee.
   * @summary Required, rendered as a `ngx-decaf-crud-field` with employee label and
   * placeholder translations; used as the list item `title` via `uilistprop`.
   * @type {string}
   */
  @required()
  @uielement('ngx-decaf-crud-field', {
    label: 'employee.name.label',
    placeholder: 'employee.name.placeholder',
  })
  @uilistprop('title')
  name!: string;

  // @required()
  // @email()
  // @eq('../../email')
  // @uielement('ngx-decaf-crud-field', {
  //   label: 'employee.companyEmail.label',
  //   placeholder: 'employee.companyEmail.placeholder',
  // })
  // companyEmail!: string;

  /**
   * @description Job occupation of the employee.
   * @summary Required, rendered as a `ngx-decaf-crud-field` with employee label and
   * placeholder translations; used as the list item `description` via `uilistprop`.
   * @type {string}
   */
  @required()
  @uielement('ngx-decaf-crud-field', {
    label: 'employee.occupation.label',
    placeholder: 'employee.occupation.placeholder',
  })
  @uilistprop('description')
  occupation!: string;

  /**
   * @description Birth date of the employee.
   * @summary Accepts a `Date` or an ISO date string; used as the list item `info` via `uilistprop`.
   * @type {Date | string}
   */
  @uilistprop('info')
  birthdate!: Date | string;

  /**
   * @description Date the employee was hired.
   * @summary Plain date attribute, not rendered in the list item.
   * @type {Date}
   */
  hiredAt!: Date;

  /**
   * @description Creation timestamp of the employee.
   * @summary Populated automatically by the {@link timestamp} decorator on `CREATE`.
   * @type {Date}
   */
  @timestamp([OperationKeys.CREATE])
  createdAt!: Date;

  /**
   * @description Last-update timestamp of the employee.
   * @summary Populated automatically by the {@link timestamp} decorator on create and update operations.
   * @type {Date}
   */
  @timestamp()
  updateAt!: Date;

  /**
   * @description Creates a new {@link EmployeeModel} instance.
   * @summary Initializes the model from the provided {@link ModelArg}, applying
   * validation and UI decorator metadata during base {@link Model} construction.
   *
   * @param {ModelArg<EmployeeModel>} [args={}] - Optional initialization attributes for the model.
   */
  constructor(args: ModelArg<EmployeeModel> = {}) {
    super(args);
  }
}
