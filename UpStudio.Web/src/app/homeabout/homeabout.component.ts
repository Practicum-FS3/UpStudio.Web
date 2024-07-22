import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homeabout',
  standalone: true,
  imports: [CommonModule, AboutComponent,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './homeabout.component.html',
  styleUrl: './homeabout.component.scss'
})
export class HomeaboutComponent {

  arr=[
    {content:'aaaa ננהנבעבהנ הנבנעיכמעיכ יעכעיראטגעהנ העכעיעיעעעעע יעייכיככעכע',name:'כ.צ'},
    {content:'ממש חויה כל פעם להגיע ולהתעמל עם כזה צוות מקסים ומקום מרווח ומאובזר',name:'ח.מ'},
    {content:'ציוד חדיש ומתקדם שכיף לבא מרחוק ולהתעמל',name:'ש.ל'}]
  constructor(private router: Router) {}

}
