import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email!: string;
  password!: string;
  errorMessage: string = '';


  constructor(private authService: AuthService) { }

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      token => {
        console.log('Token:', token);
        // כאן אפשר לשמור את הטוקן ב-localStorage או ב-sessionStorage
        localStorage.setItem('token', token);

        // בדיקת תקפות הטוקן
        this.authService.checkToken(token).subscribe(
          valid => {
            if (valid) {
              console.log('Token is valid');
              // הפנה את המשתמש לדף אחר או בצע פעולה אחרת
            } else {
              console.log('Token is invalid');
              this.errorMessage = 'Token is invalid';
            }
          },
          error => {
            console.error('Token validation error', error);
            this.errorMessage = 'Token validation error';
          }
        );
      },
      error => {
        console.error('Login error', error);
        this.errorMessage = 'Login failed';
      }
    );
   }
}


