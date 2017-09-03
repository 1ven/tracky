import { json, RouteRequest } from "chunks";
import readAll from 'models/tickets/readAll';

export default ({ db }) => (req: RouteRequest) =>
  readAll(db).then(json);