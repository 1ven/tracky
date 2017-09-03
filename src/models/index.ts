import projects from './projects';
import tickets from './tickets';
import relations from './relations';

export default (db) => Promise.all([
  relations(db),
  tickets(db),
  projects(db),
])