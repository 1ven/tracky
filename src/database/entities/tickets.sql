# Keep all tickets related code here
CREATE TABLE IF NOT EXISTS tickets_statuses(
  id integer UNIQUE NOT NULL,
  title text NOT NULL
);

INSERT INTO tickets_statuses VALUES (
  0, 'To do'
), (
  1, 'Done'
), (
  2, 'Won''t do'
) ON CONFLICT (id) DO UPDATE SET id = excluded.id;