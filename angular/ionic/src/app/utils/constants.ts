import { MenuItem } from "./types";

export const SidebarMenu: MenuItem[] = [
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
