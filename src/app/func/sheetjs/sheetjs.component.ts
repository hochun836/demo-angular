import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DbType, ExcelRow } from 'src/app/common/scheme';
import { createSql as createSql4Mssql } from 'src/app/util/mssql-util';
import { createSql as createSql4Mysql } from 'src/app/util/mysql-util';
import { createSql as createSql4Oracle } from 'src/app/util/oracle-util';
import { isEmpty } from 'src/app/util/util';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-sheetjs',
  templateUrl: './sheetjs.component.html',
  styleUrls: ['./sheetjs.component.scss']
})
export class SheetjsComponent implements OnInit {

  @ViewChild('file', { static: true }) fileRef: ElementRef<HTMLInputElement>;

  DbType = DbType;
  dbType: DbType;
  reader = new FileReader();
  rowList: ExcelRow[];
  result: string;

  constructor() {
  }

  ngOnInit(): void {
    this.reader.onload = (event: ProgressEvent<FileReader>) => {
      const binaryString = event.target.result as string;
      const workbook: XLSX.WorkBook = XLSX.read(binaryString, { type: 'binary' });
      const sheetName: string = workbook.SheetNames[0];
      const sheet: XLSX.WorkSheet = workbook.Sheets[sheetName];
      this.rowList = XLSX.utils.sheet_to_json<ExcelRow>(sheet);
    };
  }

  handleFile() {
    const files: FileList = this.fileRef.nativeElement.files;
    if (files.length == 0) {
      this.rowList = undefined;
      return;
    }
    this.reader.readAsBinaryString(files[0]);
  }

  download(): void {
  }

  convert(): void {
    if (isEmpty(this.dbType)) {
      alert('尚未選擇資料庫類型');
      return;
    }
    if (isEmpty(this.fileRef.nativeElement.files)) {
      alert('尚未選擇檔案');
      return;
    }
    switch (this.dbType) {
      case DbType.Oracle:
        this.result = createSql4Oracle(this.rowList);
        break;
      case DbType.Mssql:
        this.result = createSql4Mssql(this.rowList);
        break;
      case DbType.Mysql:
        this.result = createSql4Mysql(this.rowList);
        break;
    }
  }
}
