import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio-page',
    pathMatch: 'full',
  },
  {
    path: 'inicio-page',
    loadComponent: () => import('./pages/inicio-page/inicio-page.page').then( m => m.InicioPagePage)
  },
  {
    path: 'grid-buttons',
    loadComponent: () => import('./pages/grid-buttons/grid-buttons.page').then( m => m.GridButtonsPage)
  },
  {
    path: 'alert',
    loadComponent: () => import('./pages/alert/alert.page').then( m => m.AlertPage)
  },
  {
    path: 'avatar',
    loadComponent: () => import('./pages/avatar/avatar.page').then( m => m.AvatarPage)
  },
  {
    path: 'action-sheet',
    loadComponent: () => import('./pages/action-sheet/action-sheet.page').then( m => m.ActionSheetPage)
  },
];
