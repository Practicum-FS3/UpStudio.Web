import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../../models/Customer';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private apiUrl: string = 'http://localhost:5137/api';

  constructor(private http: HttpClient) {}
  customerRegistration(customer: Customer | null): void{
    this.http.post(`${this.apiUrl}/Customer`, customer);
  }
  getTrainings(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Training`);
  }
  getPaymentOptions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/PaymentOption`);
  }
  getHMOs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getAll`);
  }
  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Customer`);
  }
}
