import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RegistrationService } from '../../services/registrationService/registration.service';
import { Customer } from '../../models/Customer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  trainings: any;
  customers: any;
  paymentOptions: any;
  HMOs: any;
  private customer: Customer | null = null;

  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.trainings = this.registrationService.getTrainings().subscribe((customers: any[])=> {});
    this.customers = this.registrationService.getCustomers().subscribe();
    this.paymentOptions = this.registrationService.getPaymentOptions().subscribe();
    this.HMOs = this.registrationService.getHMOs().subscribe();
  }

  customerRegistration(customerData: any): void {
    this.customer = customerData;
    console.log('Customer registration data:', this.customer);
    // Make API call to register customer
    this.registrationService.customerRegistration(this.customer);
  }
}
