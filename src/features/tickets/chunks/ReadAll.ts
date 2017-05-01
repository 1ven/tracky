import * as Bluebird from 'bluebird';
import {
  RsJson,
  Chunk,
  Request,
  Response,
} from 'chunks';
import { Ticket, PgTickets } from '../models';
import { GenericResponse } from '../../../modules/response';

export class ReadAll implements Chunk {
  private cn: any;

  constructor(cn) {
    this.cn = cn;
  }

  public async act(req: Request): Promise<Response> {
    const tickets = new PgTickets(this.cn);

    return new GenericResponse(
      await Bluebird.map(
        await tickets.iterate(),
        (t: Ticket) => t.read(),
      )
    );
  }
}
