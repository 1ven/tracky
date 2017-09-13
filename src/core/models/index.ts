export { default as mapInput } from './mapInput';
export { default as mapOutput } from './mapOutput';
export { default as sequenceInput } from './sequenceInput';
export { default as makeFilter } from './makeFilter';

export type Input = (props, ...rest) => Promise<void>;