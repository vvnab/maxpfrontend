import api from '../../api';
import * as t from './actionTypes'

export const userSet = (payload) => ({
  type: t.USER_LOGIN,
  payload
});

export const userLogin = (data) => async (dispatch) => {
  const {email, password} = data;
  dispatch(userSet({
    loading: true
  }));
  try {
    const user = await api.loginUser({
      email,
      password
    });
    dispatch(userSet({
      payload: user
    }));
  } catch (error) {
    console.error(error.message);
    dispatch(userSet({
      error: true,
      payload: error.message
    }));
  }
};

export const userLogout = () => ({
  type: t.USER_LOGOUT
});

