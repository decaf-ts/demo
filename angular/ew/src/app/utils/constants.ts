import {IGuardOptions, IMenuItem} from './interfaces';

export const SideMenu: IMenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'apps-outline',
    url: '/dashboard',
  },
  // {
  //   label: 'Crud',
  //   icon: 'save-outline',
  // },

  {
    label: 'Logout',
    icon: 'log-out-outline',
    url: '/login',
  },
];


export const SessionKeys: Readonly<{ loggedUser: string; authToken: string; role: 'apiReader' | 'apiWriter'}> = {
  loggedUser: 'loggedUser',
  authToken: 'authToken',
  role: 'apiReader',
} as const;


export const DefaultPages: Readonly<{ login: string, logged: string }> = {
  login: 'login',
  logged: 'dashboard'
} as const;

export const DefaultGuardOptions: IGuardOptions = {
  loggedIn: true,
  loginPage: DefaultPages.login,
  loggedPage: DefaultPages.logged,
};
