import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Store } from 'src/interfaces/store.class';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient) { }

  getStores(): Observable<Store[]>{
    return of([
      new Store("Ralph Lauren", "https://www.ralphlauren.com/on/demandware.static/-/Sites-RalphLauren_US-Library/default/dwd0329cb9/images/social-sharing/RLNA-Social-Image.jpg"),
      new Store("Gucci", "https://logos-world.net/wp-content/uploads/2020/04/Gucci-Symbol.png")
    ])
  }
}
