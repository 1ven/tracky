import * as fs from 'fs';
import * as path from 'path';
import { Feature } from '../index';
import { PgTicketsStorage } from './storage';
import { RootChunk } from './chunks';

export class TicketsFeature implements Feature {
  private cn: any;

  constructor(cn) {
    this.cn = cn;
  }

  public chunk() {
    return new RootChunk(this.cn);
  }

  public init() {
    return new PgTicketsStorage(this.cn).init();
  }
}
