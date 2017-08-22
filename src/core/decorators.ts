import { pick } from "ramda";

export const mapInput = cb => model => async (props, ...rest) =>
  await model(cb(props), ...rest);

export const mapOutput = cb => model => async (...args) =>
  cb(await model(...args))