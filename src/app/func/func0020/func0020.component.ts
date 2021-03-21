import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DbType } from 'src/app/common/scheme';

@Component({
  selector: 'app-func0020',
  templateUrl: './func0020.component.html',
  styleUrls: ['./func0020.component.scss']
})
export class Func0020Component implements OnInit {

  @ViewChild('form', { static: false }) form: NgForm;
  @ViewChild('file', { static: false }) fileRef: HTMLInputElement;

  template: any;
  dbType: DbType;
  sql: string;
  model = {} as any;

  constructor() { }

  ngOnInit(): void {
  }

  handleChange(): void {
  }

  excel2Sql(): void {
  }
}
