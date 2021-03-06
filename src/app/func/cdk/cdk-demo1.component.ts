import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdk-demo1',
  templateUrl: './cdk-demo1.component.html',
  styleUrls: ['./cdk-demo1.component.scss']
})
export class CdkDemo1Component implements OnInit {

  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  projectContentChanged($event: MutationRecord[]) {
    ++this.count;
    console.log(`資料變更，第 ${this.count} 次`);
    console.log($event, this.count);
  }
}
