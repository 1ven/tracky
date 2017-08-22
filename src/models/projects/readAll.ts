/**
 * Returns all projects
 * 
 * @param db database connection
 */
export default db => db.query("SELECT * FROM projects");