import {
  FtBasic,
  BkBasic,
  BkSafe,
  CkFork,
  CkRoute,
} from 'chunks';
import { PgStorage } from './modules/storage';
import { TicketsFeature } from './features';

const db = new PgStorage().init();
const ticketsFt = new TicketsFeature(db);

ticketsFt.init();

new FtBasic(
  new BkSafe(
    new BkBasic(
      new CkFork(
        new CkRoute('/entities*', new CkFork(
          new CkRoute('/tickets*', ticketsFt.chunk()),
        )),
      ),
    ),
  ),
).start(process.env.PORT, () => (
  console.log(`Listening at ${process.env.PORT}...`)
));
