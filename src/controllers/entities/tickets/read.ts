import { json, RouteRequest } from "chunks";
import read from 'models/tickets/read';

export default ({ db }) => (req: RouteRequest) =>
  read(parseInt(req.params.id), db).then(json)