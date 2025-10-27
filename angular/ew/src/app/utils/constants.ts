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

export const SidebarMenu: IMenuItem[] = [
  DashboardMenuItem,
  {
    label: 'Products',
    url: '/products',
    icon: 'products.svg',
  },
  {
    label: 'Batches',
    url: '/batches',
    icon: 'batches.svg',
  },
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
  LogoutMenuItem
];
