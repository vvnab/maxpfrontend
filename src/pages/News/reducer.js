const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NEWS/SET':
      return {
        error: action.error,
        loading: action.loading,
        ...action.payload
      }
    default:
      return state
  }
}