
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsOptionsComponent } from './payments-options/payments-options.component';
import { LoginComponent } from './login/login.component';

// const routes: Routes = [
//   { path: '', component:  PaymentsOptionsComponent}, // ברירת מחדל לקומפוננטת הבית
// ];

export const routes: Routes = [
  { path: "", redirectTo:"home" ,pathMatch:"full"},
  { path: "home" ,component:PaymentsOptionsComponent},
  { path: "PaymentsOptions" ,component:PaymentsOptionsComponent},
  { path: "Login" ,component:LoginComponent},
  // { path: "?????" ,component:?????},
  // { path: "?????" ,component:?????},
  // { path: "?????" ,component:?????},
  // { path: "?????" ,component:?????},
  // { path: "?????" ,component:?????},
  // { path: "**" ,component:?????},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


