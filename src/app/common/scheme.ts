export type SnavMode = 'over' | 'push' | 'side';

export enum DbType {
  Oracle = 'oracle',
  Mssql = 'mssql',
  Mysql = 'mysql',
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
