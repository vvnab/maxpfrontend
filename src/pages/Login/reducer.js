const initialState = {};

export default (state = {
    payload: initialState
  }, action) => {
  switch (action.type) {
    case 'USER/LOGIN':
      return {
        error: action.error,
        loading: action.loading,
        ...action.payload
      }
    case 'USER/LOGOUT':
      return {}
    default:
      return state
  }
}