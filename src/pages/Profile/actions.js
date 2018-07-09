import api from '../../api';

export const userSetProfile = (payload) => ({
  type: 'USER/SET_PROFILE',
  payload
});

export const userGetProfile = () => async (dispatch, getState) => {
  dispatch(userSetProfile({
    loading: true
  }));
  try {
    const profile = await api.getUserProfile(getState().login.payload.id);
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
    console.error(error);
    dispatch(userSetProfile({
      error: true,
      payload: error
    }));
  }
};