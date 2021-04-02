import { CHANGE_LINE } from '../common/constant';
import { AOA, DbType } from '../common/scheme';
import { isNotEmpty, removeByIndex, StringBuilder } from './util';

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
  OnDelete,
  OnUpdate,
}

export function createSql(rowList: AOA, dbType: DbType, model: any): string {

  const sb = new StringBuilder();

  const startRow = 0;
  const endRow = rowList.length - 1;

  let currTableStartRow = startRow;
  let currTableEndRow = startRow;
  let tempTableStartRow = startRow;
  let currTableId: string;
  let nextTableId: string;

  rowList.forEach((row, i) => {

    currTableId = row[Column.TableId];
    nextTableId = i == endRow ? '' : rowList[i + 1][Column.TableId];

    if (currTableId !== nextTableId) {
      currTableStartRow = tempTableStartRow;
      currTableEndRow = i;
      tempTableStartRow = i + 1;
      const subRowList = rowList.slice(currTableStartRow, currTableEndRow);
      const sql = createOneTableSql(subRowList, dbType, model);
      sb.append(sql + CHANGE_LINE);
    }
  });

  return sb.toString();
}

function createOneTableSql(rowList: AOA, dbType: DbType, model: any): string {
  switch (dbType) {
    case DbType.Oracle:
      return create4Oracle(rowList, model);
    case DbType.Mssql:
      return create4Mssql(rowList, model);
    case DbType.Mysql:
      return create4Mysql(rowList, model);
  }
}

function create4Oracle(rowList: AOA, model: any): string {
  return '';
}

function create4Mssql(rowList: AOA, model: any): string {
  return '';
}

function create4Mysql(rowList: AOA, model: any): string {

  const sb = new StringBuilder();

  const startRow = 0;
  const endRow = rowList.length - 1;
  const tableId = rowList[startRow][MysqlColumn.TableId];
  const tableName = rowList[startRow][MysqlColumn.TableName];

  sb.append(`-- ------------------------------------------------------------` + CHANGE_LINE);
  sb.append(`-- ------------ DDL for ${tableId} (${tableName})` + CHANGE_LINE);
  sb.append(`-- ------------------------------------------------------------` + CHANGE_LINE);

  // Table
  sb.append(`DROP TABLE IF EXISTS \`${tableId}\`;` + CHANGE_LINE);

  sb.append(`CREATE TABLE \`${tableId}\` (` + CHANGE_LINE);

  // Column
  rowList.forEach(row => {

    const columnId = row[MysqlColumn.ColumnId];
    const columnName = row[MysqlColumn.ColumnName];
    const dataType = row[MysqlColumn.DataType];
    const nullable = row[MysqlColumn.Nullable];
    const defaultValue = row[MysqlColumn.DefaultValue];
    const autoIncrement = row[MysqlColumn.AutoIncrement];
    const comment = row[MysqlColumn.Comment];

    const sql = new StringBuilder();

    sql.append(`\`${columnId}\` ${dataType}`);

    if (nullable === 'Y') {
      sql.append('NULL');
    } else {
      sql.append('NOT NULL');
    }

    if (isNotEmpty(defaultValue)) {
      sql.append(`DEFAULT ${defaultValue}`);
    }

    if (autoIncrement === 'Y') {
      sql.append('AUTO_INCREMENT');
    }

    if (isNotEmpty(comment)) {
      sql.append(`COMMENT '${columnName}[${comment}]'`);
    } else {
      sql.append(`COMMENT '${columnName}'`);
    }

    sql.append(',');

    sb.append(sql.toString() + CHANGE_LINE);
  });

  // Primary Key
  const pkColumnIds = rowList
    .filter(row => isNotEmpty(row[MysqlColumn.PrimaryKey]))
    .map(row => `\`${row[MysqlColumn.ColumnId]}\``)
    .join(',');

  if (isNotEmpty(pkColumnIds)) {
    sb.append(`PRIMARY KEY (${pkColumnIds}) USING BTREE,` + CHANGE_LINE);
  }

  // Unique
  rowList
    .filter(row => isNotEmpty(row[MysqlColumn.Unique]))
    .map(row => `UNIQUE (\`${row[MysqlColumn.ColumnId]}\`),` + CHANGE_LINE)
    .forEach(sql => sb.append(sql));

  // Foreign Key
  rowList
    .filter(row => isNotEmpty(row[MysqlColumn.ReferenceTableId]))
    .map(row => `CONSTRAINT \`${row[MysqlColumn.TableId]}_${row[MysqlColumn.ColumnId]}\` FOREIGN KEY (\`${row[MysqlColumn.ColumnId]}\`) REFERENCES \`${row[MysqlColumn.ReferenceTableId]}\` (\`${row[MysqlColumn.ReferenceColumnId]}\`) ON DELETE ${row[MysqlColumn.OnDelete]} ON UPDATE ${row[MysqlColumn.OnUpdate]},` + CHANGE_LINE)
    .forEach(sql => sb.append(sql));

  sb.append(`) ENGINE = ${model.engine} CHARACTER SET = ${model.characterSet} COLLATE = ${model.collate} ROW_FORMAT = ${model.rowFormat};` + CHANGE_LINE);

  const result = sb.toString();
  return removeByIndex(result, result.lastIndexOf(','));
}

