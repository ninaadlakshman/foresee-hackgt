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
    let url = "https://api.ncr.com/site/sites/find-nearby/" + latitude + "," + longitude;
    const date: string = new Date().toUTCString();
    console.log(date);
    const headerDict = {
        'Accept': 'application/json',
        'Authorization': 'AccessKey 13fca1e9a4c748d5880da53a37973065:fww5nfaPHwzVcryvPtMzBgYvwqI3hz9o5qevAWmq3F/pJyCBmAQFQIZivextyivY4qGoQm6kGTuT2DqiR63HQw==',
        'nep-organization': 'test-drive-d9dcb1811c4943d583a33',
        'Date': date,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    }
    const requestOptions = {                                                                                                                                                                                 
        headers: new HttpHeaders(headerDict), 
    };
    console.log(url);
    return this.http.get<FindNearby[]>(url, {headers: new HttpHeaders(headerDict)})
  }

}