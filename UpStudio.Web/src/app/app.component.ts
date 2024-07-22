import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OurTeamComponent } from './components/our-team/our-team.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,OurTeamComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UpStudio.Web';
}
