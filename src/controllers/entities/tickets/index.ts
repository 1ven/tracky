import { compose } from "ramda";
import { tap, methods, route } from "chunks";
import { fork } from "core/chunks";
import readAll from './readAll';
import read from './read';
import remove from './remove';
import update from './update';

// prettier-ignore
export default ({ db }) =>
  fork(
    route("/", fork(
      methods("GET", readAll({ db })),
    )),
    route("/:id", fork(
      methods("GET", read({ db })),
      methods("DELETE", remove({ db })),
      methods("PATCH", update({ db }))
    ))
  )
