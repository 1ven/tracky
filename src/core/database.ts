import { IDatabase } from 'pg-promise';
import * as pgp from 'pg-promise';

export default () => pgp()(process.env.DATABASE_URL);

export type Database = IDatabase<any>