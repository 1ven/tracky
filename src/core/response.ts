import { compose } from 'ramda';
import { empty, withStatus } from "chunks";

export const deleted = compose(withStatus(204), empty);