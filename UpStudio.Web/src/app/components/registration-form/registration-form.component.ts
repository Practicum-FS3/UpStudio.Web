import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
interface Training {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.scss'
})
export class RegistrationFormComponent {
  training: Training[] = [
    {value:"קלאסי-0",viewValue:"פילאטיס קלאסי"},
    {value:"דינאמי-1",viewValue:"פילאטיס דינאמי"},
    {value:"ר.אגן-2",viewValue:"פילאטיס ר.אגן"},
  ];
}

