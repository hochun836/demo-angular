import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdk-demo2',
  templateUrl: './cdk-demo2.component.html',
  styleUrls: ['./cdk-demo2.component.scss']
})
export class CdkDemo2Component implements OnInit {

  constructor(
    private scrollDispatcher: ScrollDispatcher
  ) { }

  ngOnInit(): void {
    this.scrollDispatcher.scrolled(1000).subscribe((scrollable: CdkScrollable) => {
      console.log('發生 scroll 了，來源為：', scrollable ? scrollable.getElementRef().nativeElement : null);
    });
  }
}
