import { json, RouteRequest } from "chunks";
import * as model from 'models/projects';

export default ({ db }) => (req: RouteRequest) =>
  model.readAll(db).then(json);