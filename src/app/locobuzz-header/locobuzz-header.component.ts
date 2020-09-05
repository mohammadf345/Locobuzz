import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locobuzz-header',
  templateUrl: './locobuzz-header.component.html',
  styleUrls: ['./locobuzz-header.component.scss']
})
export class LocobuzzHeaderComponent implements OnInit {
  imageSrc =  'assets/images/logo.png';
  userImage =  'assets/images/userloco.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
