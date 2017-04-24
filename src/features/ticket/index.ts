import * as fs from 'fs';
import * as path from 'path';
import { PgTicketsStorage } from './storage';
import { TicketChunk } from './http';

export class TicketFeature {
  private connection: any;

  constructor(connection) {
    this.connection = connection;
  }

  public chunk() {
    return new TicketChunk(this.connection);
  }

  public async init() {
    return await new PgTicketsStorage(this.connection).init();
  }
}
