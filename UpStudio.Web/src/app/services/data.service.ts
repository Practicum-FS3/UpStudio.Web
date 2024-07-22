import { Injectable } from '@angular/core';
import { Customer } from '../modules/Customer ';
import { CustomerType } from '../modules/CustomerType ';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = "https://localhost:7101/api"
  constructor(private http: HttpClient) { }
  getAll(): Observable<Array<Customer>> {
      const data = this.http.get<Array<Customer>>(`${this.baseUrl}/Customer`)
      return data
  }

  getAllCustType(): Observable<Array<CustomerType>> {
    const data = this.http.get<Array<CustomerType>>(`${this.baseUrl}/CustomerType`)
    console.log(data);
    
    return data
}

  getCustByID(): Observable<Customer> {
    const data = this.http.get<Customer>(`${this.baseUrl}/Customer/${1}`)
    return data
  }

  updateCustByID(customer: Customer): Observable<Customer> {
    console.log('updateCustByID');
    console.log(customer);
    
    return this.http.put<Customer>(`${this.baseUrl}/Customer`, customer);
   

  }
}


// import { Injectable } from '@angular/core';
// import { Job } from '../modules/interfaces';
// import { JobTypes, WorkerLevel } from '../modules/enums';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {
//   private baseUrl = "http://127.0.0.1:8080"
//   constructor(private http: HttpClient) { }
//   getAll(): Observable<Array<Job>> {
//     const data = this.http.get<Array<Job>>(`${this.baseUrl}/jobs/all`)
//     return data
//   }
//   getJobByNumber(jobNumber:number):Observable<Job>{
//     console.log("getJobByNumber");
//     return this.http.get<Job>(`${this.baseUrl}/jobs/job/${jobNumber}`)
//   }
//   addJob(newJob: Job): Observable<Job> {
//     return this.http.post<Job>(`${this.baseUrl}/jobs/craete`,
//       newJob, {
//       headers: { 'content-type': "application/json" }
//     })
//   }
// }