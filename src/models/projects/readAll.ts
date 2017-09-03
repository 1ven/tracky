import { outputFields } from "./";

/**
 * Returns all projects
 * 
 * @param db database connection
 */
export default db =>
  db.manyOrNone("SELECT $1:name FROM projects", [outputFields]);
