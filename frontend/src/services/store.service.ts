import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Store } from 'src/interfaces/store.class';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private readonly http: HttpClient) { }

  getStores(): Observable<Store[]>{
    return of([
      new Store("Atlanta, Georgia", "https://paigemindsthegap.com/wp-content/uploads/2020/02/Atlanta-1.jpg","33.748997","-84.387985"),
      new Store ("San Francisco, California", "https://www.sfaf.org/wp-content/uploads/posts/SF_bridge_1200x800.jpg", "37.774929", "-122.419418"),
      new Store("New York City, New York", "https://static.politico.com/dims4/default/af81090/2147483647/resize/1160x%3E/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F36%2F98%2F5ceb5cf3473c91620bb5bea1254d%2Flede1-200331-blesener-politico-009.jpg", "40.712776", "-74.005974"),
      new Store("Seattle, Washington", "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fi.forbesimg.com%2Fmedia%2Flists%2Fplaces%2Fseattle-wa_416x416.jpg", "47.606209", "-122.332069"),
      new Store("Austin, Texas", "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F8e7f0b10-9f6f-4bd2-990b-df5253705594.jpg?fit=scale-down&source=next&width=700", "30.267153", "-97.743057"),
      new Store("Chicago, Illinois", "https://cdn.choosechicago.com/uploads/2019/05/loop-1800x900.jpg", "41.878113", "-87.629799"),
      new Store("Philadelphia, Pennsylvania", "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/77/cc.jpg", "39.952583", "-75.165222")
    ])
  }
  
}
