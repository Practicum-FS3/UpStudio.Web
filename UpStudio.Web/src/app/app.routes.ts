import { Routes,RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeaboutComponent } from './homeabout/homeabout.component';

export const routes: Routes = [
// {path:'homeabout', component:HomeaboutComponent,children:[{path:'about',component:AboutComponent}]},
// {path:'about',component:AboutComponent},
{path:'',component:HomeaboutComponent},
{path:'about',component:AboutComponent}

];

export class AppRoutingMoudle{}