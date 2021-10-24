import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Item } from 'src/interfaces/item.class';
import { Store } from 'src/interfaces/store.class';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient) { }

  getMockItemData(storeName: string | null): Observable<Item[]> {
    let items: Item[] = [
      new Item("Jeans", 
                "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww2.hm.com%2Fen_us%2Fproductpage.0706016002.html&psig=AOvVaw3Nm0avU38uQE3P7HhqoSHK&ust=1635108158524000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLikw9my4fMCFQAAAAAdAAAAABAF",
                3.00,
                "INCREASE",
                "Clothes"),
      new Item("Polo",
                "https://cdn-images.farfetch-contents.com/14/98/16/92/14981692_24859005_600.jpg",
                4.00,
                "INCREASE",
                "Clothes"),
      new Item("T-Shirt",
                "https://www.asket.com/imgproxy/e:1/format:jpeg/width:1080/resize:fit/quality:80/plain/https://asket.centracdn.net/client/dynamic/images/2_00d6bb1f5b-asket_tee_white_cart_thumb-original.jpg@jpg",
                56.00,
                "DECREASE",
                "Clothes")
    ]

    return of(items);
  }
}
