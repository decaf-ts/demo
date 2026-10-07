import { pk } from '@decaf-ts/core';
import { eq, Model, model, ModelArg, password, required } from '@decaf-ts/decorator-validation';
import { uielement, uilistmodel, uimodel } from '@decaf-ts/ui-decorators';

/**
 * @description User model rendered as a list item and CRUD form in the demo.
 * @summary Decorated as a `ngx-decaf-list-item` (with a cafe icon) and a
 * `ngx-decaf-crud-form` UI model; combines a required `username` with a required,
 * password-masked `secret` that must match itself via the {@link eq} validation.
 *
 * @class UserModel
 * @extends Model
 * @memberOf module:demo.models.UserModel
 */
@uilistmodel('ngx-decaf-list-item', { icon: 'cafe-outline' })
@uimodel('ngx-decaf-crud-form')
@model()
export class UserModel extends Model {

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
   * @description Password secret of the user.
   * @summary Required and masked by the {@link password} decorator; validated with
   * {@link eq} against its own value (a confirmation-matching demo pattern), rendered
   * as a `ngx-decaf-crud-field` with the secret label translation.
   * @type {string}
   */
  @required()
  @password()
  @eq('../password')
  @uielement('ngx-decaf-crud-field', { label: 'user.secret.label' })
  secret!: string;

  /**
   * @description Creates a new {@link UserModel} instance.
   * @summary Initializes the model from the provided {@link ModelArg}, applying
   * validation and UI decorator metadata during base {@link Model} construction.
   *
   * @param {ModelArg<UserModel>} [args={}] - Optional initialization attributes for the model.
   */
  constructor(args: ModelArg<UserModel> = {}) {
    super(args);
  }
}

