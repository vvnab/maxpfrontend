import * as t from './actionTypes';
const initialState = null;

export default (state = {
    payload: initialState
  }, action) => {
  switch (action.type) {
    case t.SET_PROFILE:
      return {
        error: action.error,
        loading: action.loading,
        ...action.payload
      }
    default:
      return state
  }
}