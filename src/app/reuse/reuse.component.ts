import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reuse',
  templateUrl: './reuse.component.html',
  styleUrls: ['./reuse.component.scss']
})
export class ReuseComponent implements OnInit {

  constructor() {
    console.log('《 0. constructor 》');
  }

  ngOnChanges() {
    console.log('《 1. ngOnChanges 》');
  }

  ngOnInit() {
    console.log('《 2. ngOnInit 》');
  }

  ngDoCheck() {
    console.log('《 3. ngDoCheck 》');
  }

  ngAfterContentInit() {
    console.log('《 4. ngAfterContentInit 》');
  }

  ngAfterContentChecked() {
    console.log('《 5. ngAfterContentChecked 》');
  }

  ngAfterViewInit() {
    console.log('《 6. ngAfterViewInit 》');
  }

  ngAfterViewChecked() {
    console.log('《 7. ngAfterViewChecked 》');
  }

  ngOnDestroy() {
    console.log('《 8. ngOnDestroy 》');
  }
}
