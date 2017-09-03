export { default as mapInput } from './mapInput';
export { default as mapOutput } from './mapOutput';
export { default as sequenceInput } from './sequenceInput';

export type Input = (props, ...rest) => Promise<void>;