// import { Routes } from '@angular/router';

// export const routes: Routes = [];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsOptionsComponent } from './payments-options/payments-options.component';
const routes: Routes = [
  { path: '', component:  PaymentsOptionsComponent}, // ברירת מחדל לקומפוננטת הבית
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
