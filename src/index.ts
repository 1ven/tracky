import { compose } from 'ramda';
import { start, safe, route } from 'chunks';
import { fork, cors } from './core/chunks';
import initDatabase from './core/database';
import modules from './modules';

const db = initDatabase();
const app = compose(safe, cors)(fork(
  route('/v1*', modules({ db }))
));

start(app, parseInt(process.env.PORT));
