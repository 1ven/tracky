import { isEmpty } from "ramda";
import { Input } from "./";

const isNothing = (val) => !val || isEmpty(val);

export default cb => (model: Input) => async (props, ...rest) => {
  const mapped = cb(props);
  return !isNothing(mapped) ? await model(mapped, ...rest) : void 0;
};
