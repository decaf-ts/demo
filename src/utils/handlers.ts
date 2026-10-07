import { DecafEventHandler } from "@decaf-ts/ui-decorators";


/**
 * @description Minimal event payload shape accepted by the demo event handlers.
 * @summary Wraps a `Record` of string key/value pairs under `data`, mirroring the
 * payload emitted by demo form events.
 *
 * @interface FormEvent
 * @memberOf module:demo.utils.handlers
 */
interface FormEvent {data: Record<string, string>}


/**
 * @description Handler for login events
 * @summary This class extends the {@link DecafEventHandler} to provide specific handling for login events.
 * It validates the presence of username and password in the event data.
 * @class
 * @memberOf module:demo.utils.handlers
 * @example
 * const loginHandler = new LoginHandler();
 * const event = {
 *   data: { username: 'user', password: 'pass' }
 * };
 * const isValid = await loginHandler.handle(event);
 * console.log(isValid); // true
 */
export class LoginHandler extends DecafEventHandler {
  /**
   * @description Handles the login event
   * @summary This method extracts the username and password from the event data
   * and checks if both are truthy values. It returns true if both username and
   * password are present, false otherwise.
   * @param {FormEvent} event - The event object containing login data
   * @return {Promise<boolean>} A promise that resolves to true if login is valid, false otherwise
   */
  override async handle(event: FormEvent): Promise<boolean> {
    const { username, password } = event.data;
    return !!username && !!password;
  }
}
