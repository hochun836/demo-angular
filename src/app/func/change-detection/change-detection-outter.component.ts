import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection-outter',
  templateUrl: './change-detection-outter.component.html',
  styleUrls: ['./change-detection-outter.component.scss']
})
export class ChangeDetectionOutterComponent implements OnInit {

  obj = { name: 'Peter', age: 25 };

  constructor() { }

  ngOnInit(): void {
  }

}
