import { json, RouteRequest } from "chunks";
import readAll from 'models/projects/readAll';

export default ({ db }) => (req: RouteRequest) =>
  readAll(db).then(json);