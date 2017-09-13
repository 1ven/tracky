import { compose } from "ramda";
import { tap, methods, route, queryString } from "chunks";
import { fork } from "core/chunks";
import create from './create';
import readAll from './readAll';

// prettier-ignore
export default ({ db }) =>
  queryString(fork(
    route("/(*)", fork(
      methods("GET", readAll({ db })),
    )),
    route("/", fork(
      methods("POST", create({ db })),
    )),
  ))
