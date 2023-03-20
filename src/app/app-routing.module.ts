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
    path: 'facturas',
    loadChildren: () => import('./facturas/facturas.module').then( m => m.FacturasPageModule)
  },
  {
    path: 'registrar-factura',
    loadChildren: () => import('./registrar-factura/registrar-factura.module').then( m => m.RegistrarFacturaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
