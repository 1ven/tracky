export default (db) => db.none(
  'CREATE TABLE IF NOT EXISTS projects(' +
    'id serial PRIMARY KEY,' +
    'name text UNIQUE NOT NULL' +
  ');'
)