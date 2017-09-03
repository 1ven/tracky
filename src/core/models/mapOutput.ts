export default cb => (model: () => Promise<any>) => async (...args) =>
  cb(await model(...args))