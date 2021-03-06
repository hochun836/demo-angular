import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hammerjs',
  templateUrl: './hammerjs.component.html',
  styleUrls: ['./hammerjs.component.scss']
})
export class HammerjsComponent implements OnInit {

  direction = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSwipe(event) {
    console.log('swipe', event);
    const x = Math.abs(event.deltaX) > 40 ? (event.deltaX > 0 ? "Right" : "Left") : "";
    const y = Math.abs(event.deltaY) > 40 ? (event.deltaY > 0 ? "Down" : "Up") : "";
    this.direction += `You swiped in <b> ${x} ${y} </b> direction <hr>`;
  }

  doAbc(event) {
    console.log(event);
  }

}
