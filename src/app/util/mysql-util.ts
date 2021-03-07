import { StringBuilder } from 'typescript-string-operations';
import { CHANGE_LINE } from '../common/constant';
import { ExcelRow } from '../common/scheme';
import { isNotEmpty } from './util';

export function createSql(rowList: ExcelRow[]): string {

  const sb = new StringBuilder();

  const startRow = 0;
  const endRow = rowList.length - 1;
  let currTableStartRow = startRow;
  let currTableEndRow = startRow;
  let nextTableStartRow = startRow;
  let currTableId: string;
  let nextTableId: string;

  rowList.forEach((row, i) => {

    currTableId = row.TableId;
    nextTableId = i == endRow ? '' : rowList[i + 1].TableId;

    if (currTableId !== nextTableId) {
      currTableStartRow = nextTableStartRow;
      currTableEndRow = i;
      nextTableStartRow = i + 1;
      const subRowList = rowList.slice(currTableStartRow, currTableEndRow);
      sb.Append(createOneTableSql(subRowList));
    }
  });

  return sb.ToString();
}

function createOneTableSql(rowList: ExcelRow[]): string {

  const sb = new StringBuilder();

  const startRow = 0;
  const endRow = rowList.length - 1;
  const tableId = rowList[startRow].TableId;
  const tableName = rowList[startRow].TableName;

  sb.Append(`--------------------------------------------------------------${CHANGE_LINE}`);
  sb.Append(`-------------- DDL for ${tableId} ( ${tableName} ) ${CHANGE_LINE}`);
  sb.Append(`--------------------------------------------------------------${CHANGE_LINE}`);

  // Table
  sb.Append(`DROP TABLE IF EXISTS \`${tableId}\`;${CHANGE_LINE}`);

  sb.Append(`CREATE TABLE \`${tableId}\` (${CHANGE_LINE}`);

  rowList.forEach((row, i) => {

    const columnId = row.ColumnId;
    const columnName = row.ColumnName;
    const dataType = row.DataType;
    const nullable = row.Nullable;
    const defaultValue = row.DefaultValue;
    const autoIncrement = row.AutoIncrement;
    const unique = row.Unique;
    const comment = row.Comment;

    const sql = new StringBuilder();

    sql.Append(`\`${columnId}\` ${dataType}`);

    if (nullable === 'Y') {
      sql.Append(" NULL");
    } else {
      sql.Append(" NOT NULL");
    }

    if (isNotEmpty(defaultValue)) {
      sql.Append(` DEFAULT ${defaultValue}`);
    }

    if (autoIncrement === 'Y') {
      sql.Append(" AUTO_INCREMENT");
    }

    if (isNotEmpty(comment)) {
      sql.Append(` COMMENT ${columnName}[${comment}]`);
    }

    if (i != endRow) {
      sql.Append(",");
    }

    sb.Append(sql.ToString() + CHANGE_LINE);
  });

  sb.Append(") ENGINE = InnoDB AUTO_INCREMENT = 261 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;" + CHANGE_LINE);

  return sb.ToString();
}

