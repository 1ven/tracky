import { Ticket, TicketInputProps } from './index';

export class PgTicket implements Ticket {
  private connection: any;
  private id: number;

  constructor(connection, id: number) {
    this.connection = connection;
    this.id = id;
  }

  public async read() {
    return await this.connection.one(
      'SELECT * FROM tickets WHERE id = $1',
      this.id,
    );
  }

  public async remove() {
    return await this.connection.none(
      'DELETE FROM tickets WHERE id = $1',
      this.id,
    );
  }

  public async update(props: TicketInputProps) {
    return await this.connection.none(
      'UPDATE tickets SET ($2^) = ($3:csv) WHERE id = $1',
      [this.id, Object.keys(props), props],
    );
  }
}
