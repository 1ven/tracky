import {
  CkFork,
  CkRoute,
  CkMethods,
  RsJson,
  Chunk,
  Request,
  Response,
} from 'chunks';
import { Create } from './Create';
import { Rename } from './Rename';
import { ReadAll } from './ReadAll';
import { CkAction } from '../../../modules/chunk';

export class RootChunk implements Chunk {
  constructor(private cn) {}

  public act(req: Request): Response {
    return new CkFork(
      new CkRoute('/', new CkFork(
        new CkMethods('POST', new Create(this.cn)),
        new CkMethods('GET', new ReadAll(this.cn)),
      )),
      new CkRoute('/:id*', new CkFork(
        new CkMethods('PUT', new CkFork(
          new CkAction('rename', new Rename(this.cn)),
        )),
      )),
    ).act(req);
  }
}
