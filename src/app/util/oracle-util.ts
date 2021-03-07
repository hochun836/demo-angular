import { StringBuilder } from 'typescript-string-operations';
import { ExcelRow } from '../common/scheme';

export function createSql(dataList: ExcelRow[]): string {

  const result = new StringBuilder();

  let currTable: string;
  let nextTable: string;

  dataList.forEach(data => {

  });

  return result.ToString();
}

function createOneTableSql() {

}

