import { pk } from '@decaf-ts/core';
import { OperationKeys } from '@decaf-ts/db-decorators';
import { list, Model, model, ModelArg, required } from '@decaf-ts/decorator-validation';
import { hideOn, uichild, uielement, uilistmodel, uimodel } from '@decaf-ts/ui-decorators';

/**
 * @description Minimal user model used as a nested list item in the fieldset form demo.
 * @summary Decorated as a `ngx-decaf-list-item` and a `ngx-decaf-crud-form` UI model,
 * rendering only the required `username` field; `id` serves as the numeric primary key.
 *
 * @class User
 * @extends Model
 * @memberOf module:demo.forms.FieldsetForm
 */
@uilistmodel('ngx-decaf-list-item', { icon: 'cafe-outline' })
@uimodel('ngx-decaf-crud-form')
@model()
export class User extends Model {

  /**
   * @description Primary key of the user.
   * @summary Auto-generated numeric identifier defined via the {@link pk} decorator.
   * @type {number}
   */
  @pk({type: 'Number' })
  id!: number;

  /**
   * @description Login name of the user.
   * @summary Required, rendered as a `ngx-decaf-crud-field` with the user label translation.
   * @type {string}
   */
  @required()
  @uielement('ngx-decaf-crud-field', {
    label: 'user.username.label'
  })
  username!: string;

  /**
   * @description Creates a new {@link User} instance.
   * @summary Initializes the model from the provided {@link ModelArg}, applying
   * validation and UI decorator metadata during base {@link Model} construction.
   *
   * @param {ModelArg<User>} [args={}] - Optional initialization attributes for the model.
   */
  constructor(args: ModelArg<User> = {}) {
    super(args);
  }
}


/**
 * @description Demonstrates a form embedding a list of child models inside a fieldset.
 * @summary The `user` property holds an array of {@link User} records rendered by the
 * `ngx-decaf-fieldset` component (one `ngx-decaf-list-item` per entry, titled by the
 * child's `username`); the `id` is hidden on create and update operations.
 *
 * @class FieldSetForm
 * @extends Model
 * @memberOf module:demo.forms.FieldsetForm
 */
@uilistmodel('ngx-decaf-list-item', { icon: 'cafe-outline' })
@uimodel('ngx-decaf-crud-form')
@model()
export class FieldSetForm extends Model {

  /**
   * @description Primary key of the form.
   * @summary Numeric identifier hidden from the rendered form on
   * `CREATE` and `UPDATE` operations via the {@link hideOn} decorator.
   * @type {number}
   */
  @pk({type: 'Number' })
  @hideOn(OperationKeys.CREATE, OperationKeys.UPDATE)
  id!: number;


  /**
   * @description List of users rendered as children of the fieldset component.
   * @summary Decorated with {@link list} (array of {@link User}) and {@link uichild},
   * mapping each child item's `title` to the user's `username` and using `username` as the item key.
   * @type {User}
   */
  @list(User, 'Array')
  @uichild(User.name, 'ngx-decaf-fieldset', {mapper: {title: 'username'}, pk: 'username'}, true)
  user!: User;

  /**
   * @description Creates a new {@link FieldSetForm} instance.
   * @summary Initializes the model from the provided {@link ModelArg}, applying
   * validation and UI decorator metadata during base {@link Model} construction.
   *
   * @param {ModelArg<FieldSetForm>} [args={}] - Optional initialization attributes for the model.
   */
  constructor(args: ModelArg<FieldSetForm> = {}) {
    super(args);
  }
}
