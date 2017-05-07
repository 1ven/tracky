export class PgTicketsStorage {
  constructor(private cn) {}

  public init() {
    return this.cn.none(
      'CREATE TABLE IF NOT EXISTS tickets(' +
        'id serial PRIMARY KEY,' +
        'title text NOT NULL' +
      ')'
    );
  }
}
