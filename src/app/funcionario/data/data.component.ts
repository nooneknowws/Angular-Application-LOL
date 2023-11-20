import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgbDatepicker, NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  @ViewChild('dp', { static: false }) private dp: NgbDatepicker | undefined;
  @Output() dateRangeSelected = new EventEmitter<Date[]>();

  startDate: NgbDate | null = null; 
  endDate: NgbDate | null = null;   

  constructor() { }

  ngOnInit(): void {
  }

  onDateSelected(date: NgbDate, type: 'start' | 'end') {
    if (type === 'start') {
      this.startDate = date;
    } else {
      this.endDate = date;
    }
  }

  confirmSelection() {
    if (this.startDate && this.endDate) {
      const startDateAsDate = new Date(this.startDate.year, this.startDate.month - 1, this.startDate.day || 1);
      const endDateAsDate = new Date(this.endDate.year, this.endDate.month - 1, this.endDate.day || 1);
      this.dateRangeSelected.emit([startDateAsDate, endDateAsDate]);
    }
  }
}
