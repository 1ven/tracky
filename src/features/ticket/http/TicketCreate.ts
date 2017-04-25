import {
  RsJson,
  PrJson,
  Chunk,
  Request,
  Response,
  HttpError,
} from 'chunks';
import { PgTickets } from '../models/';

export class TicketCreate implements Chunk {
  private connection: any;

  constructor(connection) {
    this.connection = connection;
  }

  public async act(req: Request): Promise<Response> {
    const props = new PrJson(req).content();
    // TODO: implement generic validation class
    if (!props.title) {
      throw new HttpError(400, '`title` is required');
    }
    //
    const tickets = new PgTickets(this.connection);
    const ticket = await tickets.add(props);

    return new RsJson(
      await ticket.read()
    );
  }
}
