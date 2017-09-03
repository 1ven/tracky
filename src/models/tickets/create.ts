import { compose, keys, values, pick } from "ramda";
import { mapInput } from 'core/models';
import { InputProps, inputFields, outputFields } from './';

/**
 * Creates a ticket
 * 
 * @param props fields of a ticket
 * @param db database connection
 */
export default compose(mapInput(pick(inputFields)))((props: InputProps, db) =>
  db.one("INSERT INTO tickets ($1:name) VALUES ($2:csv) RETURNING $3:name", [
    keys(props),
    values(props),
    outputFields
  ])
);