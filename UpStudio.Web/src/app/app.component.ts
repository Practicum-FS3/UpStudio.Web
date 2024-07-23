import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { SubscriptionBenefitsComponent } from '../subscription-benefits/subscription-benefits.component';
import { QuestionsAndAnswersComponent } from './compotents/questions-and-answers/questions-and-answers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet 
            ,RouterModule
            , SubscriptionBenefitsComponent,QuestionsAndAnswersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UpStudio.Web';
}
