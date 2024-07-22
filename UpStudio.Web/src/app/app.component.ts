import { Component } from '@angular/core';
import { HealthFundsComponent } from './components/health-funds/health-funds.component';
import { RouterOutlet, RouterModule } from '@angular/router';
// import { SubscriptionBenefitsComponent } from '../subscription-benefits/subscription-benefits.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClient} from '@angular/common/http';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HealthFundsComponent,FormsModule, LoginComponent, HttpClient],
            // , SubscriptionBenefitsComponent        
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'UpStudio.Web';
}


