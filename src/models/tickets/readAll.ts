/**
 * Returns all tickets
 * 
 * @param db database connection
 */
export default db => db.many("SELECT * FROM tickets");