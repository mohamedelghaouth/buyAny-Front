import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListcommandsRoutingModule } from './listcommands-routing.module';
import { ListcommandsComponent } from './listcommands.component';


@NgModule({
  declarations: [ListcommandsComponent],
  imports: [
    CommonModule,
    ListcommandsRoutingModule
  ]
})
export class ListcommandsModule { }
