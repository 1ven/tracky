/**
 * Returns all projects
 * 
 * @param db database connection
 */
export default db => db.manyOrNone("SELECT * FROM projects");