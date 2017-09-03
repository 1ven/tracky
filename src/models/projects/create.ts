import { Project } from "tracky-types";
import { outputFields } from "./";

/**
 * 
 * @param name project name
 * @param db database connection
 */
export default (name: Project["name"], db) =>
  db.one("INSERT INTO projects (name) VALUES ($1) RETURNING $2:name", [
    name,
    outputFields
  ]);
