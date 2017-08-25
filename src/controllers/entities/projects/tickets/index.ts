import { compose } from "ramda";
import { tap, methods, route } from "chunks";
import { fork } from "core/chunks";
import create from './create';
import readAll from './readAll';

// prettier-ignore
export default ({ db }) =>
  fork(
    route("/", fork(
      methods("GET", readAll({ db })),
      methods("POST", create({ db })),
    )),
  )
