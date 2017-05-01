// 1. Not to repeat { result: ... } every time
// 2. Make it scalable.
// - If we will replace JSON by XML in the future, we need to do this in one place.
// - If we will decide to add { meta: ... } field to any existing response, we need to able to do this by composition, via decorator, not editing existing code.
// 3. Use one instance for common responses

export class GenericResponse extends RsWrap {
  constructor(data: PlainData) {
    super(new RsJson({
      result: data,
    }));
  }
}

