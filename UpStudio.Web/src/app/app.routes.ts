// import { Routes } from '@angular/router';



import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsOptionsComponent } from './components/payments-options/payments-options.component';
export const routes: Routes = [
  { path: '', component:  PaymentsOptionsComponent}, // ברירת מחדל לקומפוננטת הבית
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const routes: Routes = [
    // { path: "", redirectTo:"home" ,pathMatch:"full"},
    // { path: "home" ,component:?????},
    // { path: "?????" ,component:?????},
    // { path: "?????" ,component:?????},
    // { path: "?????" ,component:?????},
    // { path: "?????" ,component:?????},
    // { path: "?????" ,component:?????},
    // { path: "?????" ,component:?????},
    // { path: "?????" ,component:?????},
    // { path: "**" ,component:?????},
// ];

