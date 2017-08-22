import { compose, keys, values } from "ramda";
import { Fields, allowedFields } from './';

/**
 * Creates a ticket
 * 
 * @param props fields of a ticket
 * @param db database connection
 */
export default compose(allowedFields)((props: Fields, db) =>
  db.one("INSERT INTO tickets ($1:name) VALUES ($2:csv) RETURNING *", [
    keys(props),
    values(props)
  ])
);
