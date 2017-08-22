import { compose } from "ramda";
import { tap, methods, route } from "chunks";
import { fork } from "core/chunks";
import { readAll, create } from "./controller";
import init from "./storage";

// prettier-ignore
export default ({ db }) =>
  compose(tap(() => init(db)))(
    fork(
      route("/", fork(
        methods("GET", readAll({ db })),
        methods("POST", create({ db })),
      )),
    )
  );
