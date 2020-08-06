import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mov-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {

  selectedSort: string = "rating";
  selectedDirection: string = "desc";
  descending: boolean = true;
  @Output() changeSorting: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeSort() {
    this.changeSorting.emit({
      sort: this.selectedSort,
      sortDirection: this.selectedDirection
    })
  }

  changeDirection() {
    if (this.descending == true) {
      this.descending = false;
      this.selectedDirection = "asc";
    } else {
      this.descending = true;
      this.selectedDirection = "desc";
    }
    this.changeSort();
  }
}
