import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { PaymentsOptionsComponent } from './components/payments-options/payments-options.component';

export const routes: Routes = [
  // { path: "", redirectTo:"home" ,pathMatch:"full"},
  { path: "", component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }



