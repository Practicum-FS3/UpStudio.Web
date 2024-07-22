import { Component } from '@angular/core';
import {EditingFilesComponent} from '../editing-files/editing-files.component'
import { TabViewModule } from 'primeng/tabview';


// import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-personal-area',
  standalone: true,
  imports: [
    EditingFilesComponent,TabViewModule
  ],
  templateUrl: './personal-area.component.html',
  styleUrl: './personal-area.component.scss'
})
export class PersonalAreaComponent {
constructor(){
  
}
}
