import * as fs from "fs";
import * as path from "path";
import { render } from 'ejs';
import { compose } from "ramda";
import { start, safe, route, html } from "chunks";
import { index } from 'tracky-static';
import { fork, cors } from "./core/chunks";
import initDatabase from "./core/database";
import initModels from "./models";
import controllers from "./controllers";

const db = initDatabase();

export const app = ({ db }) =>
  compose(safe, cors)(
    fork(
      route("/v1*", controllers({ db })),
      route("/", async () => html(render(index)))
    )
  );

initModels(db).then(() => start(app({ db }), parseInt(process.env.PORT)));
