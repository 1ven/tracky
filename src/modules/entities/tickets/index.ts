import { compose } from "ramda";
import { tap, methods, route } from "chunks";
import { fork } from "core/chunks";
import { readAll, read, create, remove, update } from "./controller";
import init from "./storage";

// prettier-ignore
export default ({ db }) =>
  compose(tap(() => init(db)))(
    fork(
      route("/", fork(
        methods("GET", readAll({ db })),
        methods("POST", create({ db })),
      )),
      route("/:id", fork(
        methods("GET", read({ db })),
        methods("DELETE", remove({ db })),
        methods("PATCH", update({ db }))
      ))
    )
  );
