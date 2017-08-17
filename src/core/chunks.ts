import { makeFork, withStatus, json, withHeaders } from 'chunks';

export const fork = makeFork(withStatus(404)(json({
  message: 'Not Found'
})))

export const headers = (chunk) => async (req) =>
  withHeaders({
    "Access-Control-Allow-Origin": "*"
  })(await chunk(req));