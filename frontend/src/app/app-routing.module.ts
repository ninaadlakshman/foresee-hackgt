import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorelistComponent } from './storelist/storelist.component';
import { ForecastComponent } from './forecast/forecast.component';

const routes: Routes = [
  {path: '', component: StorelistComponent},
  {path: 'forecasting/:latitude/:longitude', component: ForecastComponent},
  {path: '**', component: StorelistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
