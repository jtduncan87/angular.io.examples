import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'date-picker',
  templateUrl: './datepicker.html'
})
export class DatePickerComponent implements OnInit {
    @Input() dateInput: Date;
    constructor(
    ) {};
    ngOnInit(): void {
      
    }
    goBack(): void {
    }
}