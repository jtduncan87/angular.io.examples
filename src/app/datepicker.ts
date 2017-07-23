import { Component, Input, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import { MdDatepicker} from '@angular/material';
@Component({
  selector: 'date-picker',
  templateUrl: './datepicker.html'
})
export class DatePickerComponent implements OnInit {
    @Input() pickerInput: String;
    @Output('pickerInput') dateChanged = new EventEmitter<String>();
    constructor(
    ) {};
    ngOnInit(): void {
    }
    setDateInput(inputDate){
      console.log('set date ' + inputDate);
      this.pickerInput = inputDate;
      this.dateChanged.emit(this.pickerInput);
    }
}