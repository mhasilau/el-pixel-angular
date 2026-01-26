import { Route, Routes } from '@angular/router';
import { Security } from './security/security';
import { Notifications } from './notifications/notifications';

export const securityRoutes: Routes = [
  {
    path: '',
    redirectTo: 'security',
    pathMatch: 'full',
  },
  {
    path: 'security',
    component: Security,
  },
  {
    path: 'notifications',
    component: Notifications,
  },
];
