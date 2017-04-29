export class PgTicketsStorage {
  private cn: any;

  constructor(cn) {
    this.cn = cn;
  }

  public init() {
    return this.cn.none(
      'CREATE TABLE IF NOT EXISTS tickets(' +
        'id serial PRIMARY KEY,' +
        'title text NOT NULL' +
      ')'
    );
  }
}
