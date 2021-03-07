export enum DbType {
  Oracle = 'A',
  Mssql = 'B',
  Mysql = 'C',
}

export interface ExcelRow {
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
