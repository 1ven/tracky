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

export class TicketChunk implements Chunk {
  private connection: any;

  constructor(connection) {
    this.connection = connection;
  }

  public act(req: Request): Response {
    return new CkFork(
      new CkMethods('POST', new TicketPOST(this.connection)),
    ).act(req);
  }
}
