import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

// 參考1: https://blog.kevinyang.net/2019/02/14/ng-ngzone/
// 參考2: https://stackblitz.com/edit/angular-zone-change-detection?file=src/app/app.component.ts

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss']
})
export class ChangeDetectionComponent implements OnInit {

  num: number = 0;

  constructor(
    private appComponent: AppComponent,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    console.log(this.appComponent.zone);
    console.log(this.changeDetectorRef);
  }

  ngOnInit(): void {
  }

  updateNum() {
    this.num++;
  }

  updateNumOutsideAngular() {
    debugger;
    this.appComponent.zone.runOutsideAngular(() => {
      let i = 0;
      const token = setInterval(() => {
        this.num = ++i;
        console.log(this.num);
        if (i == 10) {
          clearInterval(token);
        }
      }, 1000);
    });
  }

  noop() {
  }
}
