// Avoid imperative code as much as possible
import * as express from 'express';
import * as pgp from 'pg-promise';

import {
  FtBasic,
  BkBasic,
  BkSafe,
  CkFork,
  CkRegEx,
} from 'chunks';

import { TicketFeature } from './features';

const db = pgp()(process.env.DATABASE_URL);

// init features after db was instantiated one by one

const ticketFt = new TicketFeature(db);
ticketFt.init();

new FtBasic(
  new BkSafe(
    new BkBasic(
      new CkFork(
        new CkRegEx('/tickets', ticketFt.chunk()),
      ),
    ),
  ),
).start(process.env.PORT, () => (
  console.log(`Listening at ${process.env.PORT}...`)
));
