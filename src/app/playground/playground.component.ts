import { Component, OnInit, ViewChild } from '@angular/core';
import { funcList } from '../data';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent implements OnInit {

  @ViewChild('snav') snav;

  opened = true;
  funcList = funcList;

  constructor() { }

  ngOnInit(): void {
  }

  clickFunc(): void {
  }
}
