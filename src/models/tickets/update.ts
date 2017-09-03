import { compose, keys, values, pick, prop } from "ramda";
import { mapInput, sequenceInput } from 'core/models';
import { Ticket, Project } from "tracky-types";
import { InputProps, inputFields } from './';
import read from './read';

const updateData = (props: InputProps, id: Ticket["id"], db) =>
  db.none("UPDATE tickets SET ($2:name) = ($3:csv) WHERE id = $1", [
    id,
    keys(props),
    values(props)
  ])

const updateProject = (projectId: Project["id"], id: Ticket["id"], db) =>
  db.none(
    `UPDATE projects_tickets SET project_id = $2 WHERE ticket_id = $1`,
    [id, projectId]
  )

/**
 * Updates a single ticket
 * 
 * @param props ticket props
 * @param id ticket id
 * @param db database connection
 */
export default sequenceInput(
  mapInput(pick(inputFields))(updateData),
  mapInput(prop('project'))(updateProject)
)(async (_, id: Ticket["id"], db) => await read(id, db))