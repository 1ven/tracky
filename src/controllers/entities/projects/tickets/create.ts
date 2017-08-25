import { json, RouteRequest } from "chunks";
import * as model from "models/projects/tickets";

export default ({ db }) => (req: RouteRequest) =>
  model.create(parseInt(req.params.id), req.body, db).then(json);