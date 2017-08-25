import { json, RouteRequest } from "chunks";
import * as model from 'models/projects/tickets';

export default ({ db }) => (req: RouteRequest) =>
  model.readAll(parseInt(req.params.id), db).then(json);