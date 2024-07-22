import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7074/api'; // החלף ב-URL של ה-API שלך

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<string> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { email, password })
      .pipe(map(response => response.token));
  }

  checkToken(token: string): Observable<boolean> {
    return this.http.post<{ valid: boolean }>(`${this.apiUrl}/check-token`, { token })
      .pipe(map(response => response.valid));
  }
}

