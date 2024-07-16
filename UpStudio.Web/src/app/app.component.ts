import { Component } from '@angular/core';
import { HealthFundsComponent } from './components/health-funds/health-funds.component';
import { RouterOutlet, RouterModule } from '@angular/router';
import { SubscriptionBenefitsComponent } from '../subscription-benefits/subscription-benefits.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet 
            ,RouterModule
           ,HealthFundsComponent
            , SubscriptionBenefitsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UpStudio.Web';
}
