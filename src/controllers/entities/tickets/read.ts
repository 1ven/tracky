import * as model from 'models/tickets';
import { json, RouteRequest } from "chunks";

export default ({ db }) => (req: RouteRequest) =>
  model.read(parseInt(req.params.id), db).then(json)