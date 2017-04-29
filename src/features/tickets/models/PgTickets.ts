import * as _ from 'lodash';
import { Tickets, TicketInputProps, TicketProps } from './index';
import { PgTicket } from './PgTicket';
import { PgTicketCached } from './PgTicketCached';

export class PgTickets implements Tickets {
  private connection: any;

  constructor(connection) {
    this.connection = connection;
  }

  public async add(props: TicketInputProps) {
    const createdProps = await this.connection.one(
      'INSERT INTO tickets (title) VALUES ($1) RETURNING *',
      props.title
    );

    return (
      new PgTicketCached(
        new PgTicket(this.connection, createdProps.id),
        _.toPlainObject(createdProps),
      )
    );
  }

  public async iterate() {
    const propsList = await this.connection.query(
      'SELECT * FROM tickets'
    );

    return propsList.map((props: TicketProps) => {
      return (
        new PgTicketCached(
          new PgTicket(this.connection, props.id),
          _.toPlainObject(props),
        )
      );
    });
  }
}
