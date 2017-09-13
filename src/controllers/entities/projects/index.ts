import { compose } from "ramda";
import { tap, methods, route } from "chunks";
import { fork } from "core/chunks";
import tickets from './tickets';
import readAll from './readAll';
import create from './create';

// prettier-ignore
export default ({ db }) =>
  fork(
    route("/", fork(
      methods("GET", readAll({ db })),
      methods("POST", create({ db })),
    )),
    route("/:id*", fork(
      route('/tickets*', tickets({ db }))
    ))
  )
