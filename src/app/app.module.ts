import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button'
import {InputNumberModule} from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { PaginatorModule } from 'primeng/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FieldsetModule} from 'primeng/fieldset';
import {TimelineModule} from 'primeng/timeline';
import {CardModule} from 'primeng/card';
import {TabView, TabViewModule} from 'primeng/tabview';
import { AppRoutingModule } from './app-routing.module';
import {OrderListModule} from 'primeng/orderlist';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StorelistComponent } from './storelist/storelist.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ItemlistComponent } from './itemlist/itemlist.component';
import {DataViewModule} from 'primeng/dataview';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StorelistComponent,
    ItemlistComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    ToolbarModule,
    ChartModule,
    PanelModule,
    BrowserAnimationsModule,
    PaginatorModule,
    OverlayPanelModule,
    InputTextareaModule,
    FieldsetModule,
    TimelineModule,
    CardModule,
    TabViewModule,
    OrderListModule,
    HttpClientModule,
    DataViewModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
