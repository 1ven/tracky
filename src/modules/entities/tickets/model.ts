import * as pgp from "pg-promise";
import { compose, keys, values, pick } from "ramda";
import { Ticket } from "tracky-types";
import { mapInput, mapOutput } from "core/decorators";

type Fields = Pick<Ticket, "title" | "description">;

const allowedFields = mapInput(pick(["title", "description"]));

export const readAll = db => db.query("SELECT * FROM tickets");

export const create = compose(allowedFields)((props: Fields, db) =>
  db.one("INSERT INTO tickets ($1^) VALUES ($2:csv) RETURNING *", [
    keys(props).map(pgp.as.name).join(),
    values(props)
  ])
);

export const read = (id: Ticket["id"], db) =>
  db.one("SELECT * FROM tickets WHERE id = $1", [id]);

export const remove = (id: Ticket["id"], db) =>
  db.none("DELETE FROM tickets WHERE id = $1", [id]);

export const update = compose(
  allowedFields
)((props: Fields, id: Ticket["id"], db) =>
  db.one("UPDATE tickets SET ($2^) = ($3:csv) WHERE id = $1 RETURNING *", [
    id,
    keys(props).map(pgp.as.name).join(),
    values(props)
  ])
);
