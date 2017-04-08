import { Tickets, TicketInputProps, TicketProps } from './interfaces';
import { PgTicket } from './PgTicket';
import { CachedPgTicket } from './decorators';

class PgTickets implements Tickets {
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
      new CachedPgTicket(
        new PgTicket(this.connection, createdProps.id),
        createdProps,
      )
    );
  }

  public async iterate() {
    const propsList = await this.connection.query(
      'SELECT * FROM tickets'
    );

    return propsList.map((props: TicketProps) => {
      return (
        new CachedPgTicket(
          new PgTicket(this.connection, props.id),
          props,
        )
      );
    });
  }
}

export {
  PgTickets,
}
