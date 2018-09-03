import api from '../../api';
import * as t from './actionTypes';

export const userSetProfile = (payload) => ({
  type: t.SET_PROFILE,
  payload
});

export const userGetProfile = (id) => async (dispatch) => {
  dispatch(userSetProfile({
    loading: true
  }));
  try {
    const profile = await api.getUserProfile(id);
    // update profile
    profile.social = profile.social.map(i => {
      let icon;
      if (i.label === 'web') {
        icon = `fas fa-globe`
      } else {
        icon = `fab fa-${i.label}`
      }
      return {
        ...i,
        icon
      }
    });
    profile.social.sort((a, b) => a.label === 'web' ? -1 : a.label < b.label);
    // ===============================
    dispatch(userSetProfile({
      payload: profile
    }));
  } catch (error) {
    console.error(error.message);
    dispatch(userSetProfile({
      error: true,
      payload: error.message
    }));
  }
};