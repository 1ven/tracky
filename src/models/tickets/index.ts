import { pick } from "ramda";
import { Ticket } from "tracky-types";
import { mapInput } from "core/decorators";

export type Fields = Pick<Ticket, "title" | "description">;
export const allowedFields = mapInput(pick(["title", "description"]));

export { default as readAll } from './readAll';
export { default as create } from './create';
export { default as read } from './read';
export { default as remove } from './remove';
export { default as update } from './update';

export default (db) => db.none(
  'CREATE TABLE IF NOT EXISTS tickets(' +
    'id serial PRIMARY KEY,' +
    'title text NOT NULL,' +
    'description text' +
  ')'
)