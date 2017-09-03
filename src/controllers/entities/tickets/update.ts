import { json, RouteRequest } from "chunks";
import update from 'models/tickets/update';

export default ({ db }) => (req: RouteRequest) =>
  update(req.body, parseInt(req.params.id), db).then(json);