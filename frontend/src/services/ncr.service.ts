import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Store } from 'src/interfaces/store.class';
import { FindNearby } from 'src/interfaces/findnearby.class';

@Injectable({
  providedIn: 'root'
})
export class NCRService {

  constructor(private readonly http: HttpClient) { }
  
  findNearby(latitude: number, longitude: number): Observable<FindNearby[]> {
    //The 4C tea has decided to redact API Call due to cybersecurity concerns.
    return this.http.get<FindNearby[]>("");
  }

}