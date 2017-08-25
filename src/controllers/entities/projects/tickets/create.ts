import { json, RouteRequest } from "chunks";

export default ({ db }) => async (req: RouteRequest) =>
  json({message: `Create ticket for a ${req.params.id} id project`})