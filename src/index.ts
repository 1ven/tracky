import { compose } from 'ramda';
import { start, safe, route } from 'chunks';
import { fork, cors } from './core/chunks';
import initDatabase from './core/database';
import modules from './modules';

const db = initDatabase();
export const app = ({ db }) => compose(safe, cors)(fork(
  route('/v1*', modules({ db }))
));

start(app({ db }), parseInt(process.env.PORT));
