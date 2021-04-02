import { CHANGE_LINE } from '../common/constant';
import { AOA, DbType } from '../common/scheme';
import { isNotEmpty, StringBuilder } from './util';

enum Column {
  TableId,
  TableName,
}

enum MysqlColumn {
  TableId,
  TableName,
  PrimaryKey,
  ColumnId,
  ColumnName,
  DataType,
  Nullable,
  DefaultValue,
  AutoIncrement,
  Unique,
  Comment,
  ReferenceTableId,
  ReferenceColumnId,
}

export function createSql(rowList: AOA, dbType: DbType): string {

  const sb = new StringBuilder();

  const startRow = 0;
  const endRow = rowList.length - 1;
  let currTableStartRow = startRow;
  let currTableEndRow = startRow;
  let nextTableStartRow = startRow;
  let currTableId: string;
  let nextTableId: string;

  rowList.forEach((row, i) => {

    currTableId = row[Column.TableId];
    nextTableId = i == endRow ? '' : rowList[i + 1][Column.TableId];

    if (currTableId !== nextTableId) {
      currTableStartRow = nextTableStartRow;
      currTableEndRow = i;
      nextTableStartRow = i + 1;
      const subRowList = rowList.slice(currTableStartRow, currTableEndRow);
      sb.append(createOneTableSql(subRowList, dbType));
    }
  });

  return sb.toString();
}

function createOneTableSql(rowList: AOA, dbType: DbType): string {
  switch (dbType) {
    case DbType.Oracle:
      return "";
    case DbType.Mssql:
      return "";
    case DbType.Mysql:
      return create4Mysql(rowList);
  }
}

function create4Mysql(rowList: AOA): string {

  const sb = new StringBuilder();

  const startRow = 0;
  const endRow = rowList.length - 1;
  const tableId = rowList[startRow][MysqlColumn.TableId];
  const tableName = rowList[startRow][MysqlColumn.TableName];

  sb.append(`--------------------------------------------------------------${CHANGE_LINE}`);
  sb.append(`-------------- DDL for ${tableId} ( ${tableName} ) ${CHANGE_LINE}`);
  sb.append(`--------------------------------------------------------------${CHANGE_LINE}`);

  // Table
  sb.append(`DROP TABLE IF EXISTS \`${tableId}\`;${CHANGE_LINE}`);

  sb.append(`CREATE TABLE \`${tableId}\` (${CHANGE_LINE}`);

  rowList.forEach((row, i) => {

    const columnId = row[MysqlColumn.ColumnId];
    const columnName = row[MysqlColumn.ColumnName];
    const dataType = row[MysqlColumn.DataType];
    const nullable = row[MysqlColumn.Nullable];
    const defaultValue = row[MysqlColumn.DefaultValue];
    const autoIncrement = row[MysqlColumn.AutoIncrement];
    const unique = row[MysqlColumn.Unique];
    const comment = row[MysqlColumn.Comment];

    const sql = new StringBuilder();

    sql.append(`\`${columnId}\` ${dataType}`);

    if (nullable === 'Y') {
      sql.append(" NULL");
    } else {
      sql.append(" NOT NULL");
    }

    if (isNotEmpty(defaultValue)) {
      sql.append(` DEFAULT ${defaultValue}`);
    }

    if (autoIncrement === 'Y') {
      sql.append(" AUTO_INCREMENT");
    }

    if (isNotEmpty(comment)) {
      sql.append(` COMMENT ${columnName}[${comment}]`);
    }

    if (i != endRow) {
      sql.append(",");
    }

    sb.append(sql.toString() + CHANGE_LINE);
  });

  sb.append(") ENGINE = InnoDB AUTO_INCREMENT = 261 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Compact;" + CHANGE_LINE);

  return sb.toString();
}

