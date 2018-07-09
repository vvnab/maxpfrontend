import { handleErrors } from './index';
import { API_ROOT } from '../constants/defaults';

export const loginUser = async ({email, password}) => {
  return await fetch(`${API_ROOT}/validate`, {
      method: 'POST',
      // credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(handleErrors);
}

export const getUserProfile = async (id) => {
  return await fetch(`${API_ROOT}/user-info/${id}`, {
      method: 'GET',
      // credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(handleErrors);
}
