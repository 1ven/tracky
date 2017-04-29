import { Chunk } from 'chunks';
import { Database } from '../modules/storage';

export interface Feature {
  init(db: Database): Promise<void>,
  chunk(): Chunk,
}

export { TicketsFeature } from './tickets';
