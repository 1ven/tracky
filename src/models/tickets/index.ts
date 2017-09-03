import { pick } from "ramda";
import { Ticket } from "tracky-types";
import { mapInput } from "core/decorators";

const debug = (fn) => (...args) => {
  console.log(args)
  return fn(...args);
}

export type InputProps = Pick<Ticket, 'title' | 'description'>
export type OutputProps = Pick<Ticket, 'id' | 'title' | 'description'>

export const inputFields = ["title", "description"];
export const outputFields = ["id", "title", "description"];

export default (db) => db.none(
  'CREATE TABLE IF NOT EXISTS tickets(' +
    'id serial PRIMARY KEY,' +
    'title text NOT NULL,' +
    'description text' +
  ')'
)