import { json, RouteRequest } from "chunks";
import { deleted } from 'core/response';
import remove from 'models/tickets/remove';

export default ({ db }) => (req: RouteRequest) =>
  remove(parseInt(req.params.id), db).then(deleted);
