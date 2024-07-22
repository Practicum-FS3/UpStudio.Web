// import { Routes } from '@angular/router';



import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsOptionsComponent } from './components/payments-options/payments-options.component';


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


