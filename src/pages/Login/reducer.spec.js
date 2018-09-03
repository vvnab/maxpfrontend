import reducer, { initialState } from './reducer';
import * as t from './actionTypes';

describe('News reducer', () => {
  it('USER_LOGIN - loading', () => {
    const action = {
      type: t.USER_LOGIN,
      loading: true
    }
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      loading: true
    });
  })
  it('USER_LOGIN - loaded', () => {
    const stateBefore = {
      ...initialState,
      loading: true
    }
    const action = {
      type: t.USER_LOGIN,
      loading: false,
      payload: {
        id: 1
      }
    }
    expect(reducer(stateBefore, action)).toEqual({
      ...stateBefore,
      loading: false,
      ...action.payload
    });
  })
  it('USER_LOGIN - error', () => {
    const stateBefore = {
      ...initialState,
      loading: true
    }
    const action = {
      type: t.USER_LOGIN,
      loading: false,
      error: 'error'
    }
    expect(reducer(stateBefore, action)).toEqual({
      ...stateBefore,
      loading: false,
      error: action.error
    });
  })
})