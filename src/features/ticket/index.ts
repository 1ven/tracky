import * as fs from 'fs';
import * as path from 'path';

class TicketFeature {
  private connection: any;

  constructor(connection) {
    this.connection = connection;
  }

  private createTable() {
    const ticketSql = fs.readFileSync(
      path.resolve(__dirname, 'database/tickets.sql'),
      'utf-8',
    );
    return this.connection.none(ticketSql);
  }

  public async init() {
    await this.createTable();
  }
}

export { TicketFeature }
