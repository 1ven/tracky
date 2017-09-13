import { pick } from "ramda";
import { Ticket } from "tracky-types";

const debug = (fn) => (...args) => {
  console.log(args)
  return fn(...args);
}

export type InputProps = Pick<Ticket, 'title' | 'description' | 'status'>
export type OutputProps = Pick<Ticket, 'id' | 'title' | 'description'>

export const inputFields = ["title", "description", "status"];
export const outputFields = ["id", "title", "description", "status"];
export const filterFields = ["status"];

export default (db) => db.none(
  'CREATE TABLE IF NOT EXISTS tickets(' +
    'id serial PRIMARY KEY,' +
    'status text NOT NULL REFERENCES tickets_statuses (key) ON DELETE RESTRICT,' +
    'title text NOT NULL,' +
    'description text' +
  ')'
)