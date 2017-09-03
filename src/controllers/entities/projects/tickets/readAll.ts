import { json, RouteRequest } from "chunks";
import readAll from 'models/projects/tickets/readAll';

export default ({ db }) => (req: RouteRequest) =>
  readAll(parseInt(req.params.id), db).then(json);