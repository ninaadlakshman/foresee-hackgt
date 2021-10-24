import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessageService, SharedModule } from 'primeng/api';
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
import {DataViewModule} from 'primeng/dataview';
import {SplitterModule} from 'primeng/splitter';
import { ForecastComponent } from './forecast/forecast.component';
import {GMapModule} from 'primeng/gmap';
import { FormsModule } from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StorelistComponent,
    ForecastComponent
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
    DataViewModule,
    SplitterModule,
    GMapModule,
    FormsModule,
    CheckboxModule,
    DialogModule,
    ToastModule,
    TagModule
  ],
  providers: [
    HttpClient,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
