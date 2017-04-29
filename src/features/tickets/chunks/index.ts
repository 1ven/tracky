import {
  CkFork,
  CkRegEx,
  CkMethods,
  RsJson,
  Chunk,
  Request,
  Response,
} from 'chunks';
import { Create } from './Create';
import { ReadAll } from './ReadAll';

export class RootChunk implements Chunk {
  private cn: any;

  constructor(cn) {
    this.cn = cn;
  }

  public act(req: Request): Response {
    return new CkRegEx('/tickets', new CkFork(
      new CkMethods('POST', new Create(this.cn)),
      new CkMethods('GET', new ReadAll(this.cn)),
    )).act(req);
  }
}
