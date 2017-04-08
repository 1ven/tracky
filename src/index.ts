import * as express from 'express';
import * as pgp from 'pg-promise';

const app = express();
const db = pgp()(process.env.DATABASE_URL);

db.any('select * from information_schema.tables').then(console.log).catch(console.log);

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.listen(process.env.port, () => {
  console.log(`Listening at ${process.env.PORT}`);
});
