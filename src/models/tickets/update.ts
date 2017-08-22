import * as pgp from "pg-promise";
import { compose, keys, values } from "ramda";
import { Ticket } from "tracky-types";
import { Fields, allowedFields } from './';

/**
 * Updates a single ticket
 * 
 * @param props fields of a ticket
 * @param id ticket id
 * @param db database connection
 */
export default compose(
  allowedFields
)((props: Fields, id: Ticket["id"], db) =>
  db.one("UPDATE tickets SET ($2^) = ($3:csv) WHERE id = $1 RETURNING *", [
    id,
    keys(props).map(pgp.as.name).join(),
    values(props)
  ])
);

// export const complete = (resolution, ...rest) => update({ resolution }, ...rest)