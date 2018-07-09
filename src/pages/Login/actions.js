import api from '../../api';

export const userSet = (payload) => ({
  type: 'USER/LOGIN',
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
    console.error(error);
    dispatch(userSet({
      error: true,
      payload: error
    }));
  }
};

export const userLogout = () => ({
  type: 'USER/LOGOUT'
});

