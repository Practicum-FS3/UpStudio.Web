import { Routes } from '@angular/router';
import { PersonalAreaComponent} from '../app/components/personal-area/personal-area.component';
import { SubscriptionBenefitsComponent } from '../subscription-benefits/subscription-benefits.component';



export const routes: Routes = [
    { path: "", redirectTo:"home" ,pathMatch:"full"},
    // { path: "home" ,component:????????},
    // { path: "?????" ,component:?????},
    // { path: "?????" ,component:?????},
    // { path: "?????" ,component:?????},
    // { path: "?????" ,component:?????},
    // { path: "?????" ,component:?????},
     { path: "home", component:  SubscriptionBenefitsComponent},
     { path: "personal-area" ,component:PersonalAreaComponent},
    // { path: "**" ,component:?????},
];
