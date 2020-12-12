import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection-inner',
  templateUrl: './change-detection-inner.component.html',
  styleUrls: ['./change-detection-inner.component.scss'],
  // changeDetection: ChangeDetectionStrategy.Default, // 盡可能找到所有變更 (髒檢查)
  changeDetection: ChangeDetectionStrategy.OnPush, // 只有在元件的 @Input 變更，且真正有變更時，才會進行變更偵測。
})
export class ChangeDetectionInnerComponent implements OnInit {

  @Input('obj') obj: any;

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  doClick() {
    this.changeDetectorRef.markForCheck();
  }

  noop() {
  }
}
