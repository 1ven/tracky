import { Ticket } from "tracky-types";

/**
 * Returns a single ticket
 * 
 * @param id ticket id
 * @param db database connection
 */
export default (id: Ticket["id"], db) =>
  db.one("SELECT * FROM tickets WHERE id = $1", [id]);