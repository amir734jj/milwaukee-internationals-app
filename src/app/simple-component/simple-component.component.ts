import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-component',
  templateUrl: './simple-component.component.html',
  styleUrls: ['./simple-component.component.css']
})
export class SimpleComponentComponent implements OnInit {
  displayDetails: boolean = false;
  logs: string[];

  constructor() {
    this.logs = new Array<string>();
  }

  ngOnInit() { }

  logEvent() {
    // add to the begining of array
    this.logs.unshift((new Date()).toLocaleString());
  }
}
