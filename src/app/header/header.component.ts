import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  commentInput: string;
  events1: any;
  events2: any;

  constructor() { 
    this.commentInput = "";
  }

  ngOnInit(): void {
    this.events1 = [
      {status: 'Test Bot with our own investment', date: '15/10/2020', icon: PrimeIcons.CHECK, color: '#9C27B0'},
      {status: 'Begin talks with outside investors', date: '15/10/2020', icon: PrimeIcons.KEY, color: '#673AB7'},
      {status: 'Add additional members to our team', date: '15/10/2020', icon: PrimeIcons.CHART_LINE, color: '#FF9800'},
      {status: 'Expand to other commodities markets', date: '16/10/2020', icon: PrimeIcons.CHART_BAR, color: '#607D8B'}
    ];

    this.events2 = [
        "2020", "2021", "2022", "2023"
    ];
  }

  onHide() {
    this.commentInput = "";
  }

}
