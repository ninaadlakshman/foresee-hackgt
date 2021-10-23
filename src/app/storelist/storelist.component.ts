import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from 'src/interfaces/store.class';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-storelist',
  templateUrl: './storelist.component.html',
  styleUrls: ['./storelist.component.scss']
})
export class StorelistComponent implements OnInit {
  stores: Store[] = [];
  constructor(
    private readonly apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
    this.apiService.getStores().subscribe((stores: Store[]) => {
      this.stores = stores;
    })
  }

  onSelectStore(store: Store) {
    this.router.navigate(['items', store.name]);
  }

}
