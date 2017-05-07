import {
  PrJson,
  RouteChunk,
  RouteRequest,
  Response,
  HttpError,
} from 'chunks';
import { PgTicket } from '../models';
import { GenericResponse } from '../../../modules/response';

// Probably, this class should implement different interface
// it will have act(req: RequestModified)
export class Rename implements RouteChunk {
  constructor(private cn) {}

  public async act(req: RouteRequest): Promise<Response> {
    // TODO: should we handle exceptions here?
    const { id } = req.params();
    // TODO: investigate, how to eliminate repeating
    // yourself everytime
    const props = new PrJson(req).content();
    // TODO: implement generic validation class
    if (!props.title) {
      throw new HttpError(400, '`title` is required');
    }
    //
    const ticket = new PgTicket(this.cn, id);

    return new GenericResponse(
      await ticket.rename(props.title)
    );
  }
}
