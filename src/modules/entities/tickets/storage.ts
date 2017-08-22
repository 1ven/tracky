export default (db) => db.none(
  'CREATE TABLE IF NOT EXISTS tickets(' +
    'id serial PRIMARY KEY,' +
    'title text NOT NULL,' +
    'description text' +
  ')'
)