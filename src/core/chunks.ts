import { makeFork, withStatus, json, withHeaders, empty } from "chunks";

export const fork = makeFork(
  withStatus(404)(
    json({
      message: "Not Found"
    })
  )
);

export const cors = chunk => async req =>
  req.method === "OPTIONS"
    ? withHeaders({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Content-type,Accept",
        "Access-Control-Allow-Methods": "GET,PUT,PATCH,POST,DELETE,OPTIONS"
      })(empty())
    : withHeaders({
        "Access-Control-Allow-Origin": "*"
      })(await chunk(req));
