export interface Report {
  files: File[];
}

export interface File {
  statementMap: StatementMap[];
}

export interface StatementMap {
  start: {
    line: number;
    column: number;
  };
  end: {
    line: number;
    column: number;
  };
}
