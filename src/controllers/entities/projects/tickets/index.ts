import { compose } from "ramda";
import { tap, methods, route } from "chunks";
import { fork } from "core/chunks";
import create from './create';

// prettier-ignore
export default ({ db }) =>
  fork(
    route("/", fork(
      methods("POST", create({ db })),
    )),
  )
