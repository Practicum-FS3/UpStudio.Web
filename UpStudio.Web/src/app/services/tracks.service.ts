import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Track} from '../models/tracks.model';

@Injectable({
  providedIn: 'root'
})

export class TracksService {

  //c# הכתובת עליה הוא רץ -ה
  private baseUrl = 'https://localhost:7101';
  // apiUrl:string="/api/SubscriptionType"

  constructor(private http: HttpClient) { }

  // להביא את כל המידע מהקונטרולר
  getAll(): Observable<Array<Track>> {
    // לשנות את הכתובת
    return this.http.get<Array<Track>>(`${this.baseUrl}/api/SubscriptionType`)
  }

  getById(id:number): Observable<Track>{
    // לשנות את הכתובת
    return this.http.get<Track>(`${this.baseUrl}/api/SubscriptionType/${id}`)
  }

}
