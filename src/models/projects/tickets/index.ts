export { default as create } from './create';
export { default as readAll } from './readAll';

export default (db) => db.none(
  'CREATE TABLE IF NOT EXISTS projects_tickets(' +
    'project_id integer REFERENCES projects (id) ON DELETE CASCADE,' +
    'ticket_id integer UNIQUE REFERENCES tickets (id) ON DELETE CASCADE' +
  ');'
)