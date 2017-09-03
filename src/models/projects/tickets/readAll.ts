import { Project } from "tracky-types";
import read from "models/tickets/read";

/**
 * Returns all tickets in the specific project
 * 
 * @param db database connection
 */
export default (id: Project["id"], db) =>
  db.manyOrNone(
    `SELECT t.id FROM tickets AS t
     INNER JOIN projects_tickets AS pt
     ON (t.id = pt.ticket_id) AND (pt.project_id = $1)`,
    [id]
  ).then(ids => Promise.all(ids.map(({ id }) => read(id, db))));
