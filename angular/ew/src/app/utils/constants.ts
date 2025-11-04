import { IMenuItem } from "./interfaces";

export const DashboardMenuItem =  {
  label: 'Dashboard',
  icon: 'dashboard.svg',
  url: '/dashboard',
};

export const LogoutMenuItem =   {
  label: 'Logout',
  title: 'Login',
  icon: 'logout.svg',
  url: '/login',
  color: 'danger'
};

export const AppMenu: IMenuItem[] = [
  // DashboardMenuItem,
  // {
  //   label: 'Products',
  //   url: '/products',
  //   icon: 'product.svg',
  // },
  // {
  //   label: 'Batches',
  //   url: '/batches',
  //   icon: 'batche.svg',
  // },
   {
    label: 'Audit',
    url: '/audit',
    icon: 'audit.svg',
  },
   {
    label: 'Account',
    url: '/account',
    icon: 'account.svg',
  },
  // LogoutMenuItem
];
