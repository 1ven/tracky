import { merge, pick } from "ramda";
import { Request, json } from "chunks";
import { app } from "../../";

export type Entry = {
  name: string;
} & Pick<Request, "method" | "uri" | "body">;

export default ({ db }) => async req => {
  const responses = await Promise.all(req.body.map(performEntry(req, db)));
  const result = responses.reduce(merge, {});

  return json(result);
};

const performEntry = ({ headers }: Request, db) => (entry: Entry) =>
  app({ db })({
    headers,
    ...pick(["method", "uri", "body"], entry) as any
  }).then(res => ({ [entry.name]: res.body }));
