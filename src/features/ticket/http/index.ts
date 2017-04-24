import {
  CkFork,
  CkRegEx,
  CkMethods,
  RsJson,
  Chunk,
  Request,
  Response,
} from 'chunks';
import { TicketPOST } from './TicketPOST';
import { TicketsGET } from './TicketsGET';

export class TicketChunk implements Chunk {
  private connection: any;

  constructor(connection) {
    this.connection = connection;
    // TODO: instantiate PgTickets here?
  }

  public act(req: Request): Response {
    return new CkFork(
      new CkMethods('POST', new TicketPOST(this.connection)),
      new CkMethods('GET', new TicketsGET(this.connection)),
    ).act(req);
  }
}
