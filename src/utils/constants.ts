import { IMenuItem } from "./types";

export const SidebarMenu: IMenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'apps-outline',
    url: '/dashboard',
  },
  {
    label: 'Crud',
    icon: 'save-outline',
  },
  {
    label: 'Fieldset',
    url: '/fieldset',
  },
 {
    label: 'Steps Form',
    url: '/steps-form',
  },
  {
    label: 'Read',
    url: '/crud/read',
  },
  {
    label: 'Create / Update',
    url: '/crud/create',
  },
  {
    label: 'Delete',
    url: '/crud/delete',
  },
  {
    label: 'Data Lists',
    icon: 'list-outline',
  },
  {
    label: 'Employees (Infinite)',
    url: '/list/infinite',
  },
  {
    label: 'Categories (Paginated)',
    url: '/list/paginated',
  },
  {
    label: 'Model Lists',
    icon: 'list-outline',
  },
  {
    label: 'Employees (Infinite)',
    url: '/list-model/infinite',
  },
  {
    label: 'Categories (Paginated)',
    url: '/list-model/paginated',
  },
  {
    label: 'Logout',
    title: 'Login',
    icon: 'log-out-outline',
    url: '/login',
    color: 'danger'
  },
];
