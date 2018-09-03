import reducer, { initialState } from './reducer';
import * as t from './actionTypes';

describe('Profile reducer', () => {
  it('SET_PROFILE - loading', () => {
    const action = {
      type: t.SET_PROFILE,
      loading: true,
      error: null
    }
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
      error: null
    });
  })
  it('SET_PROFILE - loaded', () => {
    const stateBefore = {
      ...initialState,
      loading: true,
      error: null
    }
    const action = {
      type: t.SET_PROFILE,
      error: null,
      loading: false,
      payload: {
        name: 'vvnab'
      }
    }
    expect(reducer(stateBefore, action)).toEqual({
      ...stateBefore,
      loading: false,
      ...action.payload
    });
  })
  it('SET_PROFILE - error', () => {
    const stateBefore = {
      ...initialState,
      loading: true
    }
    const action = {
      type: t.SET_PROFILE,
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