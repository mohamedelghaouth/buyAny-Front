import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListcommandsComponent } from './listcommands.component';

const routes: Routes = [{ path: '', component: ListcommandsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListcommandsRoutingModule { }
