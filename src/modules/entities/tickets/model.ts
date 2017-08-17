import * as pgp from 'pg-promise';
import { keys, values } from 'ramda';
import { Partial } from 'core/types';

export type Ticket = {
  id: number;
  title: string;
}

export const readAll = db => db.query("SELECT * FROM tickets");

export const create = (title: Ticket["title"], db) =>
  db.one('INSERT INTO tickets (title) VALUES ($1) RETURNING *', [title]);

export const read = (id: Ticket["id"], db) =>
  db.one("SELECT * FROM tickets WHERE id = $1", [id]);

export const remove = (id: Ticket["id"], db) =>
  db.none("DELETE FROM tickets WHERE id = $1", [id]);

export const update = (id: Ticket["id"], props: Partial<Ticket>, db) =>
  db.one("UPDATE tickets SET ($2^) = ($3:csv) WHERE id = $1 RETURNING *", [
    id,
    keys(props).map(pgp.as.name).join(),
    values(props)
  ]);