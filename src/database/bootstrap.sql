-- CREATE OR REPLACE VIEW view_tickets AS
--   SELECT t.id, t.title, t.description, json_agg(p.*)::json->0
--   AS project FROM tickets AS t
--   LEFT JOIN projects_tickets AS pt ON (pt.ticket_id = t.id)
--   LEFT JOIN projects AS p ON (p.id = pt.project_id)
--   GROUP BY t.id;

-- # TODO: try to solve this using TRIGGER
-- # TODO: google, how to create columns for a view
-- CREATE OR REPLACE RULE insert_tickets_view AS ON INSERT TO view_tickets
--   DO INSTEAD (
--     INSERT INTO tickets (title, description) VALUES (new.title, new.description);
--     INSERT INTO projects_tickets VALUES (4, lastval())
--   )

-- create OR REPLACE RULE insert_tickets_view AS ON INSERT TO view_tickets DO INSTEAD (INSERT INTO tickets (title, description) VALUES (new.title, new.description); INSERT INTO projects_tickets VALUES (4, lastval()););

# NOT UNCOMMENT
# Create a ticket
-- WITH rows AS (
--   INSERT INTO tickets (title) VALUES ('new title')
--   RETURNING 4 AS project_id, id AS ticket_id
-- ) INSERT INTO projects_tickets SELECT * FROM rows;