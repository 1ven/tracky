export { default as readAll } from './readAll';
export { default as create } from './create';

export default (db) => db.none(
  'CREATE TABLE IF NOT EXISTS projects(' +
    'id serial PRIMARY KEY,' +
    'name text UNIQUE NOT NULL' +
  ');'
)