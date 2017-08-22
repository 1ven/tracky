import { route } from 'chunks';
import { fork } from 'core/chunks';
import tickets from './tickets';
import projects from './projects';

export default ({ db }) => fork(
  route('/tickets*', tickets({ db })),
  route('/projects*', projects({ db })),
)