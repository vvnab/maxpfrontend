import * as user from './user';
import * as news from './news';

import errors from '../constants/errors';

export const handleErrors = async result => {
  if (!result.ok) {
    throw errors['server_error'];
  }
  const response = await result.json();
  if (response.status === 'ok') {
    return response.data
  } else {
    throw errors[response.message] || new Error(response.message);
  }
}

const api = {
  ...user,
  ...news
}

export default api;