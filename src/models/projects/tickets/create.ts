import { compose, keys, values } from "ramda";
import { Project } from "tracky-types";
import create from "models/tickets/create";
import read from "models/tickets/read";

// TODO: return "project" prop

/**
 * Creates a ticket and assigns it with a specific project.
 * 
 * @param id project id
 * @param props ticket props
 * @param db database connection
 */
export default (id: Project["id"], props, db) =>
  create(props, db).then((ticket: any) =>
    db
      .none("INSERT INTO projects_tickets VALUES ($1, $2)", [id, ticket.id])
      .then(() => read(ticket.id, db))
  );
