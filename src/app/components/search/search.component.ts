import { NgForm } from '@angular/forms';
import { Component, OnInit, Input, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {

  @Input() controls: any[];
  @ViewChild('f') form: NgForm;
  @Output() searchChange = new EventEmitter();

  constructor() {

  }

  ngAfterViewInit(): void {
    this.form.valueChanges
      .pipe(
        filter((val) => {
          if (JSON.stringify(val).includes('dupa')) {
            alert('sam jesteś dupa!');
            return false;
          } else {
            return true;
          }
        }),
        debounceTime(1000)
      )
      .subscribe((val) => {
        this.searchChange.emit(val);
      })
  }

  ngOnInit(): void {
  }

}
