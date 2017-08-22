/**
 * Returns all tickets
 * 
 * @param db database connection
 */
export default db => db.query("SELECT * FROM tickets");