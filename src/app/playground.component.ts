import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'playground',
  templateUrl: './playground.component.html'
})
export class PlaygroundComponent implements OnInit {
    dateInput: String = new Date("2017/04/04").toDateString();
    constructor(
    ) {};
    ngOnInit(): void {
      
    }
    goBack(): void {
    }
}