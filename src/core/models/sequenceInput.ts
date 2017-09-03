/**
 * Executes promises in "inputs" and resolves result of "fn"
 */
export default (...inputs) => (fn) => async (...args) => {
  for (let inp of inputs) {
    await inp(...args);
  }

  return fn(...args)
}