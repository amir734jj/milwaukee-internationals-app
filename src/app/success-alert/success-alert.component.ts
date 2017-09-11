import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styles: [`
      p.message {
        background-color: blue;
      }
    `]
})
export class SuccessAlertComponent implements OnInit {
  message: string;

  constructor() {
    this.message = "Success message is here from typescript!";
  }

  ngOnInit() {
  }

}
