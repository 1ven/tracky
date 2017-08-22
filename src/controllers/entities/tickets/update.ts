import * as model from 'models/tickets';
import { json, RouteRequest } from "chunks";

export default ({ db }) => (req: RouteRequest) =>
  model.update(req.body, parseInt(req.params.id), db).then(json);