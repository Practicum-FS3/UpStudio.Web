// import { Routes } from '@angular/router';



import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsOptionsComponent } from '../app/components/payments-options/payments-options.component';

@NgModule({
  //imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routes: Routes = [
   { path: "", redirectTo:"home" ,pathMatch:"full"},
    // { path: "home" ,component:?????},
    // { path: "?????" ,component:?????},
    // { path: "?????" ,component:?????},
    // { path: "?????" ,component:?????},
    // { path: "?????" ,component:?????},
    // { path: "?????" ,component:?????},
    // { path: "?????" ,component:?????},
    // { path: "?????" ,component:?????},
    // { path: "**" ,component:?????},
];

