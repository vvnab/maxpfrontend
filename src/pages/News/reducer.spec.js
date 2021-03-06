import reducer, { initialState } from './reducer';
import * as t from './actionTypes';

describe('News reducer', () => {
  it('NEWS_SET - loading', () => {
    const action = {
      type: t.NEWS_SET,
      loading: true,
      error: null
    }
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      loading: true
    });
  })
  it('NEWS_SET - loaded', () => {
    const stateBefore = {
      ...initialState,
      loading: true
    }
    const action = {
      type: t.NEWS_SET,
      error: null,
      loading: false,
      payload: [1, 2]
    }
    expect(reducer(stateBefore, action)).toEqual({
      ...stateBefore,
      loading: false,
      payload: action.payload
    });
  })
  it('NEWS_SET - error', () => {
    const stateBefore = {
      ...initialState,
      loading: true
    }
    const action = {
      type: t.NEWS_SET,
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