const { INDEX_PATH, PORT } = process.env;

import { compose } from "ramda";
import { start, safe, route, html, when } from "chunks";
import { fork, cors } from "./core/chunks";
import { readSync } from "./core/fs";
import initDatabase from "./core/database";
import models from "./models";
import controllers from "./controllers";

const db = initDatabase();

export const app = ({ db }) =>
  compose(safe, cors)(
    fork(
      route("/v1*", controllers({ db })),
      when(!!INDEX_PATH, route("/", async () => html(readSync(INDEX_PATH))))
    )
  );

models(db).then(() => start(app({ db }), parseInt(PORT)));
