import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trainer } from '../interfaces/Trainer';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
private baseUrl='http://127.0.0.1:8080'
  constructor(private http:HttpClient) { }

  getAll():Observable<Array<Trainer>>{
    return this.http.get<Array<Trainer>>
    (`${this.baseUrl}/Trainer/getAllTrainers`)
  }

  getById(trainerId:number):Observable<Trainer>{
    return this.http.get<Trainer>
    (`${this.baseUrl}/about`)
  }

  delete(){}
  update(){}
  addTrainer(newTrainer:Trainer):Observable<Trainer>{
    return this.http.post<Trainer>(`${this.baseUrl}/about/`,
      newTrainer, {
      headers: { 'content-type': 'application/json' }
    })
  }
}
