import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SystemClassesComponent } from './components/system-classes/system-classes.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SystemClassesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UpStudio.Web';
}
