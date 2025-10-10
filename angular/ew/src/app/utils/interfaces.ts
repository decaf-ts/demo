import { Constructor, Model } from "@decaf-ts/decorator-validation";
import { PredefinedColors } from "@ionic/core";

export interface IDecodedToken {
  sub: string;
  iat?: number;
  nbf?: number;
  exp?: number;
  iss?: string;
  aud?: string;
}

export interface IGuardRedirect {
  /** @description URL to redirect to after authentication */
  url?: string,
  /** @description Whether redirect should be performed */
  redirect?: boolean
}

export interface IGuardOptions {
  /** @description Whether user must be logged in to access the route */
  loggedIn: boolean,
  /** @description Whether to redirect back to original URL after login */
  redirectBack?: boolean
  /** @description Whether the guard has been processed/handled */
  handled?: boolean,
  /** @description Custom login page URL (default: system login page) */
  loginPage: string
  /** @description Page to redirect to after successful login */
  loggedPage: string
}



export interface IMenuItem {
  /** @description Display label for the menu item */
  label: string;
  /** @description Optional URL for navigation (omit for headers/groups) */
  url?: string;
  /** @description Optional Ionic icon name for the menu item */
  icon?: string;
  /** @description Role(s) required to access this menu item */
  roles?: string[] | string;
  /** @description Whether to show this item in the menu (default: true) */
  showMenu?: boolean;
  /** @description Optional Ionic color for the menu item */
  color?: PredefinedColors;
}

export interface IRawQuery<M extends Model> {
    select: undefined | (keyof M)[];
    from: Constructor<M>;
    where: (el: M) => boolean;
    sort?: (el: M, el2: M) => number;
    limit?: number;
    skip?: number;
}


