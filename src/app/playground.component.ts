import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'playground',
  templateUrl: './playground.component.html'
})
export class PlaygroundComponent implements OnInit {
    @Input() dateInput: Date = new Date("2017/04/04");
    constructor(
    ) {};
    ngOnInit(): void {
      
    }
    goBack(): void {
    }
}