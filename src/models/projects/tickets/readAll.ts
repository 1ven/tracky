import { Project } from "tracky-types";

/**
 * Returns all tickets in the specific project
 * 
 * @param db database connection
 */
export default (id: Project["id"], db) =>
  db.many(
    `SELECT t.* FROM tickets AS t
     INNER JOIN projects_tickets AS pt
     ON (t.id = pt.ticket_id) AND (pt.project_id = $1)`,
    [id]
  );
