import { IDatabase } from 'pg-promise';
import * as pgp from 'pg-promise';

export class PgStorage {
  public init(): Database {
    return pgp()(process.env.DATABASE_URL);
  }
}

export type Database = IDatabase<any>;

/* export type PgTransaction */
