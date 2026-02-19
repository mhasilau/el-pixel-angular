import { Routes } from '@angular/router';
import { CanActivateGuard } from './guards/can-activate.guard';
import { CanActivateChildGuard } from './guards/can-activate-child.guard';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { ResolveGuard } from './guards/resolve.guard';
import { CanMatchGuard } from './guards/can-match.guard';
import { MainPage } from './components/main-page/main-page';
import { Settings } from './components/settings/settings';
import { Security } from './components/settings/security/security';
import { Notifications } from './components/settings/notifications/notifications';
import { securityRoutes } from './components/settings/security.routes';
import { People } from './components/people/people';
import { Person } from './components/people/person/person';
import { RxjsMain } from './components/rxjs/rxjs-main/rxjs-main';
import { DemoDeactivateComponent } from './components/demo-deactivate.component';
import { PersonResolveComponent } from './components/person-resolve.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-page',
    pathMatch: 'full',
  },
  // Пример применения CanMatchGuard: только для путей, начинающихся с 'admin'
  {
    path: 'admin',
    canMatch: [CanMatchGuard],
    loadChildren: () => import('./components/settings/settings').then((m) => m.Settings), // пример lazy loading
  },
  {
    path: 'main-page',
    component: MainPage,
    canActivate: [CanActivateGuard],
  },
  {
    path: 'settings',
    component: Settings,
    canActivateChild: [CanActivateChildGuard],
    children: [...securityRoutes],
  },
  {
    path: 'demo-deactivate',
    component: DemoDeactivateComponent,
    canDeactivate: [CanDeactivateGuard],
  },
  {
    path: 'people',
    component: People,
    canActivate: [CanActivateGuard],
    canMatch: [CanMatchGuard],
  },
  {
    path: 'people/:id',
    component: Person,
    canActivate: [CanActivateGuard],
    canDeactivate: [CanDeactivateGuard],
    resolve: { data: ResolveGuard },
  },
  {
    path: 'rxjs',
    component: RxjsMain,
    canActivate: [CanActivateGuard],
    canDeactivate: [CanDeactivateGuard],
    resolve: { data: ResolveGuard },
    canMatch: [CanMatchGuard],
  },
  // Пример resolve
  {
    path: 'person-resolve/:id',
    component: PersonResolveComponent,
    resolve: { data: ResolveGuard },
  },
];
