import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'priceoptimization';
  size = 50;
  
  constructor() {
    
  }

}
