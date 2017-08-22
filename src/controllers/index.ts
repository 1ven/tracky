import { route, methods } from 'chunks';
import { fork } from 'core/chunks';
import entities from './entities';
import bulk from './bulk';

export default ({ db }) => fork(
  route('/entities*', entities({ db })),
  methods('POST', route('/bulk*', bulk({ db })))
)