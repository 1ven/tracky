import {
  RsJson,
  Chunk,
  Request,
  Response,
  HttpError,
} from 'chunks';
import { PgTickets } from '../models/';

export class TicketPOST implements Chunk {
  private connection: any;

  constructor(connection) {
    this.connection = connection;
  }

  public async act(req: Request): Promise<Response> {
    // TODO: improve, implement class in Chunks
    // TODO: handle json parsing erros
    const props = JSON.parse(req.body());
    //
    // TODO: implement generic validation class
    if (!props.title) {
      throw new HttpError(400);
    }
    //
    const tickets = new PgTickets(this.connection);
    const ticket = await tickets.add(props);

    return new RsJson(
      await ticket.read()
    );
  }
}
