import request from 'superagent';
import { stringify } from 'qs';

import { SERVER_ENDPOINT } from 'constants/static/env';

function APICall({ endpoint, method, query, payload }) {
  return new Promise((resolve, reject) => {
    let r = request[method.toLowerCase()](`${SERVER_ENDPOINT}${endpoint}`);

    if (query)
      r.query(stringify(query));

    if (payload)
      r = r.send(payload);

    r.end((error, data) => (
      error
      ? reject(error)
      : resolve(data.body)
    ));
  });
}

export const API_CALL = 'API_CALL';
