import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdk',
  templateUrl: './cdk.component.html',
  styleUrls: ['./cdk.component.scss']
})
export class CdkComponent implements OnInit {

  name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
