import { handleErrors } from './index';
import { API_ROOT } from '../constants/defaults';

export const getNews = async () => {
  return await fetch(`${API_ROOT}/news`, {
      method: 'GET',
      // credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(handleErrors);
}