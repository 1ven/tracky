import { compose } from 'ramda';
import { json, simple, RouteRequest, withStatus } from "chunks";
import { deleted } from 'core/response';
import * as model from "./model";

export const readAll = ({ db }) => (req: RouteRequest) =>
  model.readAll(db).then(json);

export const create = ({ db }) => (req: RouteRequest) =>
  model.create(req.body.title, db).then(json);

export const read = ({ db }) => (req: RouteRequest) =>
  model.read(parseInt(req.params.id), db).then(json)

export const remove = ({ db }) => (req: RouteRequest) =>
  model.remove(parseInt(req.params.id), db).then(deleted);

export const update = ({ db }) => (req: RouteRequest) =>
  model.update(parseInt(req.params.id), req.body, db).then(json);