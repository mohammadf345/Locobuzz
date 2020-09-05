import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lb-summary',
  templateUrl: './lb-summary.component.html',
  styleUrls: ['./lb-summary.component.scss']
})
export class LbSummaryComponent implements OnInit {
  todayDate = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
