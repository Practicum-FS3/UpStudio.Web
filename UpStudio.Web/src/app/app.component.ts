import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HealthFundsComponent } from './components/health-funds/health-funds.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HealthFundsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UpStudio.Web';
}
