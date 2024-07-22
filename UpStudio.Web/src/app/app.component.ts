import { Component } from '@angular/core';
import { HealthFundsComponent } from './components/health-funds/health-funds.component';
import { RouterOutlet, RouterModule } from '@angular/router';
import { SubscriptionBenefitsComponent } from './components/subscription-benefits/subscription-benefits.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    // HttpClient,
    HealthFundsComponent,
    SubscriptionBenefitsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'UpStudio.Web';
}
