import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mov-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() totalItems: number
  @Input() pageSize: number
  @Input() currentPage: number;
  @Output() pageChange = new EventEmitter();
  lastPage: number;

  constructor() { }

  ngOnInit() {
    this.lastPage = Math.ceil(this.totalItems / this.pageSize);
  }

  ngOnChanges() {
    this.lastPage = Math.ceil(this.totalItems / this.pageSize);
  }

  updatePage(page) {
    this.currentPage = page;
    this.pageChange.emit({"page": page});
  }


}
