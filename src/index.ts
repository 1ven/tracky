import { compose } from 'ramda';
import { start, safe, route } from 'chunks';
import { fork, cors } from './core/chunks';
import initDatabase from './core/database';
import initModels from './models';
import controllers from './controllers';

const db = initDatabase();

export const app = ({ db }) => compose(safe, cors)(fork(
  route('/v1*', controllers({ db }))
));

initModels(db).then(
  () => start(app({ db }), parseInt(process.env.PORT))
)

