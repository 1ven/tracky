import tickets from './tickets';

export { default as readAll } from './readAll';
export { default as create } from './create';

const projects = (db) => db.none(
  'CREATE TABLE IF NOT EXISTS projects(' +
    'id serial PRIMARY KEY,' +
    'name text UNIQUE NOT NULL' +
  ');'
);

export default (db) => Promise.all([
  tickets(db),
  projects(db)
])