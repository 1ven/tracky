import projects from './projects';
import tickets from './tickets';

export default (db) => Promise.all([
  tickets(db),
  projects(db),
])