import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  message: string;

  constructor() {
    this.message = "Warning message is here from typescript!";
  }

  ngOnInit() {
  }

}
