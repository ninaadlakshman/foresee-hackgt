import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Item } from 'src/interfaces/item.class';
import { Store } from 'src/interfaces/store.class';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "https://api.ncr.com/site/sites/find-nearby/";
  constructor(private readonly http: HttpClient) { }
  getFootTraffic(latitude: string, longitude: string): Observable<string> {
    const val = Math.floor(Math.random() * 4700) + 1700;
    const val2 = Math.floor(Math.random() * 2500) + 1000;
    return of(val.toString()).pipe(delay(val2));
  }
}
