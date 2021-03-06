import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import * as Sortable  from 'sortablejs';
import Sortable  from 'sortablejs';

@Component({
  selector: 'app-sortablejs',
  templateUrl: './sortablejs.component.html',
  styleUrls: ['./sortablejs.component.scss']
})
export class SortablejsComponent implements OnInit {

  @ViewChild('grid', { static: true }) gridRef: ElementRef<HTMLDivElement>;

  items = Array.from({ length: 10 }, (x, i) => i + 1);

  constructor() { }

  ngOnInit(): void {
    const sortable = new Sortable(this.gridRef.nativeElement, {
      animation: 300,
      easing: "cubic-bezier(1, 0, 0, 1)",
    });
  }
}
