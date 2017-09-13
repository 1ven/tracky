import { json, Request, Matched, Query } from "chunks";
import readAll from 'models/projects/tickets/readAll';

export default ({ db }) => (req: Request & Matched & Query) =>
  readAll(parseInt(req.params.id), db, req.query.filter).then(json);