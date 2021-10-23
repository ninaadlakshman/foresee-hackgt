import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { StorelistComponent } from './storelist/storelist.component';

const routes: Routes = [
  {path: '', component: StorelistComponent},
  {path: 'items/:name', component: ItemlistComponent},
  {path: '**', component: StorelistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
