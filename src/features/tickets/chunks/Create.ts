import {
  RsJson,
  PrJson,
  Chunk,
  Request,
  Response,
  HttpError,
} from 'chunks';
import { PgTickets } from '../models/';

export class Create implements Chunk {
  private cn: any;

  constructor(cn) {
    this.cn = cn;
  }

  public async act(req: Request): Promise<Response> {
    const props = new PrJson(req).content();
    // TODO: implement generic validation class
    if (!props.title) {
      throw new HttpError(400, '`title` is required');
    }
    //
    const tickets = new PgTickets(this.cn);
    const ticket = await tickets.add(props);

    return new RsJson(
      await ticket.read()
    );
  }
}
