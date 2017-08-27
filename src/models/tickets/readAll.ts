/**
 * Returns all tickets
 * 
 * @param db database connection
 */
export default db => db.manyOrNone("SELECT * FROM tickets");