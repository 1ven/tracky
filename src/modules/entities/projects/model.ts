import { Project } from "tracky-types";

export const readAll = db => db.query("SELECT * FROM projects");

export const create = (name: Project["name"], db) =>
  db.one("INSERT INTO projects (name) VALUES ($1) RETURNING *", [name])
