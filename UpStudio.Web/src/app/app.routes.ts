import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SubscriptionBenefitsComponent } from '../subscription-benefits/subscription-benefits.component';

export const routes: Routes = [
    { path: "", redirectTo:"/home" ,pathMatch:"full"},
    { path: "SubscriptionBenefits" ,component:SubscriptionBenefitsComponent},
    { path: "home" ,component:HomeComponent},
    // { path: "???" ,component:?????.},
    // { path: "?????" ,component:?????},
    // { path: "?????" ,component:?????},
    // { path: "?????" ,component:?????},
    // { path: "?????" ,component:?????},
    // { path: "?????" ,component:?????},
    // { path: "**" ,component:?????},
];
