import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HealthFundsComponent } from './components/health-funds/health-funds.component';
import { SubscriptionBenefitsComponent } from '../subscription-benefits/subscription-benefits.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    HealthFundsComponent,
    SubscriptionBenefitsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UpStudio.Web';
}
