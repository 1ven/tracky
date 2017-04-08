import * as express from 'express';
import * as pgp from 'pg-promise';

import { Features } from './core/Features';
import { TicketFeature } from './features';

const app = express();
const db = pgp()(process.env.DATABASE_URL);

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.listen(process.env.port, () => {
  console.log(`Listening at ${process.env.PORT}`);
});

const features = new Features([
  new TicketFeature(db),
]);

features.init();

