import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { 
      path: 'listcommands',
      loadChildren: () => import('./listcommands/listcommands.module').then(m => m.ListcommandsModule)
    },
    { 
      path: 'products',
      loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
    },
    { 
      path: 'authentication',
      loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
