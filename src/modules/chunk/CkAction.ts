import { Request, Chunk, CkRoute } from 'chunks';

export class CkAction implements Chunk {
  constructor(private action: string, private origin: Chunk) {}

  public act(req: Request) {
    return new CkRoute(`?action=${this.action}`, this.origin).act(req);
  }
}