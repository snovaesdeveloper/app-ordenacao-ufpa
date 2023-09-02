import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'questao1',
    loadChildren: () => import('./questao1/questao1.module').then( m => m.Questao1PageModule)
  },
  {
    path: 'backuo',
    loadChildren: () => import('./backuo/backuo.module').then( m => m.BackuoPageModule)
  },
  {
    path: 'questao1a',
    loadChildren: () => import('./questao1a/questao1a.module').then( m => m.Questao1aPageModule)
  },
  {
    path: 'questao1b',
    loadChildren: () => import('./questao1b/questao1b.module').then( m => m.Questao1bPageModule)
  },
  {
    path: 'questao1c',
    loadChildren: () => import('./questao1c/questao1c.module').then( m => m.Questao1cPageModule)
  },
  {
    path: 'questao1d',
    loadChildren: () => import('./questao1d/questao1d.module').then( m => m.Questao1dPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
