import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lb-ticket',
  templateUrl: './lb-ticket.component.html',
  styleUrls: ['./lb-ticket.component.scss']
})
export class LbTicketComponent implements OnInit {
  todayDate = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
