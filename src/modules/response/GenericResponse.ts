import { RsJson, RsWrap, PlainData } from 'chunks';

export class GenericResponse extends RsWrap {
  constructor(data: PlainData) {
    super(new RsJson({
      result: data,
    }));
  }
}

