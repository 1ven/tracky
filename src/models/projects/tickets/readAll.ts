import { pick } from "ramda";
import { Project } from "tracky-types";
import { makeFilter } from "core/models";
import read from "models/tickets/read";
import { filterFields } from "models/tickets";

/**
 * Returns all tickets in the specific project
 * 
 * @param db database connection
 */
export default (id: Project["id"], db, filter?) =>
  db
    .manyOrNone(
      `
     SELECT t.id FROM tickets AS t
     INNER JOIN projects_tickets AS pt
     ON (t.id = pt.ticket_id) AND (pt.project_id = $1)
     WHERE $2:raw`,
      [id, makeFilter(pick(filterFields, filter || {}))]
    )
    .then(ids => Promise.all(ids.map(({ id }) => read(id, db))));
