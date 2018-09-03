import * as t from './actionTypes';

export const initialState = {
  payload: [],
  error: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.NEWS_SET:
      return {
        ...state,
        error: action.error,
        loading: action.loading,
        payload: action.payload || []
      }
    default:
      return state
  }
}