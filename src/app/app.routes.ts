import { Routes } from '@angular/router';
import { MainPage } from './components/main-page/main-page';
import { Settings } from './components/settings/settings';
import { Security } from './components/settings/security/security';
import { Notifications } from './components/settings/notifications/notifications';
import { securityRoutes } from './components/settings/security.routes';
import { People } from './components/people/people';
import { Person } from './components/people/person/person';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-page',
    pathMatch: 'full',
  },
  {
    path: 'main-page',
    component: MainPage,
  },
  {
    path: 'settings',
    component: Settings,
    children: [...securityRoutes],
  },
  {
    path: 'people',
    component: People,
  },
  {
    path: 'people/:id',
    component: Person,
  },
];
