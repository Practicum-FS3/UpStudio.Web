import { Component } from '@angular/core';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { HealthFundsComponent } from './components/health-funds/health-funds.component';
import { RouterOutlet, RouterModule } from '@angular/router';
import { SubscriptionBenefitsComponent } from '../subscription-benefits/subscription-benefits.component';
import { PaymentsOptionsComponent } from './components/payments-options/payments-options.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet 
            ,RouterModule
           ,HealthFundsComponent
            , SubscriptionBenefitsComponent,
          PaymentsOptionsComponent,
           OurTeamComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UpStudio.Web';
}
