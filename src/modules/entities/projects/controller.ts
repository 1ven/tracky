import { compose } from 'ramda';
import { json, simple, RouteRequest, withStatus } from "chunks";
import * as model from "./model";

export const readAll = ({ db }) => (req: RouteRequest) =>
  model.readAll(db).then(json);

export const create = ({ db }) => (req: RouteRequest) =>
  model.create(req.body.name, db).then(json);