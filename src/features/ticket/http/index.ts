import {
  CkFork,
  CkRegEx,
  CkMethods,
  RsJson,
  Chunk,
  Request,
  Response,
} from 'chunks';
import { TicketCreate } from './TicketCreate';
import { TicketsRead } from './TicketsRead';

export class TicketChunk implements Chunk {
  // TODO: rename to `cn`, add type
  private connection: any;

  constructor(connection) {
    this.connection = connection;
    // TODO: instantiate PgTickets here?
  }

  public act(req: Request): Response {
    // TODO: Implement nested CkRegEx in chunks
    return new CkFork(
      new CkMethods('POST', new TicketCreate(this.connection)),
      new CkMethods('GET', new TicketsRead(this.connection)),
    ).act(req);
  }
}
