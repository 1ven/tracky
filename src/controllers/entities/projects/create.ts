import { json, RouteRequest } from "chunks";
import create from "models/projects/create";

export default ({ db }) => (req: RouteRequest) =>
  create(req.body.name, db).then(json);