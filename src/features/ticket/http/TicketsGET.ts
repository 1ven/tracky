import * as Bluebird from 'bluebird';
import {
  RsJson,
  Chunk,
  Request,
  Response,
} from 'chunks';
import { Ticket, PgTickets } from '../models/';

export class TicketsGET implements Chunk {
  private connection: any;

  constructor(connection) {
    this.connection = connection;
  }

  public async act(req: Request): Promise<Response> {
    // TODO: Provide tickets variable from constructor?
    const tickets = new PgTickets(this.connection);

    return new RsJson(
      await Bluebird.map(
        await tickets.iterate(),
        (t: Ticket) => t.read(),
      )
    );
  }
}
