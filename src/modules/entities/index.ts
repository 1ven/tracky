import { route } from 'chunks';
import { fork } from 'core/chunks';
import tickets from './tickets';

export default ({ db }) => fork(
  route('/tickets*', tickets({ db }))
)