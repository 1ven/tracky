import { isEmpty } from 'ramda';
import * as pgp from 'pg-promise';

export default (spec) =>
  !spec || isEmpty(spec) ? 'true' : Object.keys(spec).reduce((acc, k, i) =>
    `${i !== 0 ? 'AND ' : ''}${pgp.as.name(k)} = ${pgp.as.text(spec[k])}`
  , '')