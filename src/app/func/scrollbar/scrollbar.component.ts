import { Component, ElementRef, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scrollbar',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.scss']
})
export class ScrollbarComponent implements OnInit {

  @ViewChild('containerB', { static: true }) containerBRef: ElementRef<HTMLDivElement>;

  count = 0;

  constructor(
    private zone: NgZone,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {

    // 綁定事件監聽(一)
    // this.renderer.listen(this.containerBRef.nativeElement, 'scroll', this.onScrollB.bind(this));

    // 綁定事件監聽(二)
    // this.containerBRef.nativeElement.addEventListener('scroll', this.onScrollB.bind(this));

    // 綁定事件監聽(三)
    this.zone.runOutsideAngular(() => {
      this.renderer.listen(this.containerBRef.nativeElement, 'scroll', this.onScrollB.bind(this));
    });

    // 綁定事件監聽(四)
    // this.zone.runOutsideAngular(() => {
    //   this.containerBRef.nativeElement.addEventListener('scroll', this.onScrollB.bind(this));
    // });
  }

  onScrollA(event) {
    this.count++;
    console.log('scroll - A', event);
  }

  onScrollB(event) {
    this.count++;
    console.log('scroll - B', event);
  }
}
