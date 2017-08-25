/**
 * Returns all projects
 * 
 * @param db database connection
 */
export default db => db.many("SELECT * FROM projects");