import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-health-funds',
  standalone: true,
  imports: [CommonModule, ButtonModule], // הוסף כאן את ButtonModule
  templateUrl: './health-funds.component.html',
  styleUrls: ['./health-funds.component.scss']
})
export class HealthFundsComponent {

}
