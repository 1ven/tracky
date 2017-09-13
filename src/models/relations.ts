export default (db) => db.none(
  'CREATE TABLE IF NOT EXISTS projects_tickets(' +
    'project_id integer NOT NULL REFERENCES projects (id) ON DELETE CASCADE,' +
    'ticket_id integer UNIQUE NOT NULL REFERENCES tickets (id) ON DELETE CASCADE' +
  ');'
)