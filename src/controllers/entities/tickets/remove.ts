import * as model from 'models/tickets';
import { deleted } from 'core/response';
import { json, RouteRequest } from "chunks";

export default ({ db }) => (req: RouteRequest) =>
  model.remove(parseInt(req.params.id), db).then(deleted);
