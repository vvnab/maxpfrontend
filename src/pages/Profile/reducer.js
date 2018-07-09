const initialState = null;

export default (state = {
    payload: initialState
  }, action) => {
  switch (action.type) {
    case 'USER/SET_PROFILE':
      return {
        error: action.error,
        loading: action.loading,
        ...action.payload
      }
    default:
      return state
  }
}