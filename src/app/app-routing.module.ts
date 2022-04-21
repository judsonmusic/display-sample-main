import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'example1',
    loadChildren: () => import('./pages/example1/example1.module').then( m => m.Example1PageModule)
  },
  {
    path: 'example2',
    loadChildren: () => import('./pages/example2/example2.module').then( m => m.Example2PageModule)
  },
  {
    path: 'example3',
    loadChildren: () => import('./pages/example3/example3.module').then( m => m.Example3PageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
