import { TicketsStorage } from './index';

class PgTicketsStorage implements TicketsStorage {
  private connection: any;

  constructor(connection) {
    this.connection = connection;
  }

  public async init() {
    return await this.connection.none(
      'CREATE TABLE IF NOT EXISTS tickets(' +
        'id serial PRIMARY KEY,' +
        'title text NOT NULL' +
      ')'
    );
  }
}

export {
  PgTicketsStorage,
}
