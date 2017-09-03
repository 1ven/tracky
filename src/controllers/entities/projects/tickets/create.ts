import { json, RouteRequest } from "chunks";
import create from "models/projects/tickets/create";

export default ({ db }) => (req: RouteRequest) =>
{
  console.log(req)
  return create(parseInt(req.params.id), req.body, db).then(json);
}