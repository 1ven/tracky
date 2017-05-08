import { Chunk } from 'chunks';
import { Database } from '../modules/storage';

// every feature should correspond to particular route
export interface Feature {
  init(db: Database): Promise<void>,
  chunk(): Chunk,
}

export { TicketsFeature } from './tickets';
