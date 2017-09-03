import { columns } from "core/database";
import read from "./read";
import { outputFields } from "./";

/**
 * Returns all tickets
 * 
 * @param db database connection
 */
export default db =>
  db
    .manyOrNone("SELECT id FROM tickets")
    .then(ids => Promise.all(ids.map(({ id }) => read(id, db))));
