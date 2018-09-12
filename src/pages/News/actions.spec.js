import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

import { API_ROOT } from '../../constants/defaults'
import ERRORS from '../../constants/errors'
import { newsSet, newsGet } from './actions'
import * as t from './actionTypes'


import fetchMock from 'fetch-mock'
// import expect from 'expect'

const middlwares = [thunk]
const mockStore = configureMockStore(middlwares)

describe('News async actions', () => {
  beforeEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('newsGet ok', () => {
    fetchMock.getOnce(`${API_ROOT}/news`, {
      headers: {
        'content-type': 'application/json'
      },
      body: {
        data: [1, 2, 3],
        status: 'ok'
      }
    })
    const expectedActions = [newsSet({
      loading: true
    }), newsSet({
      payload: [1, 2, 3]
    })];
    const store = mockStore({})

    return store.dispatch(newsGet()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  })

  it('newsGet error', () => {
    fetchMock.getOnce(`${API_ROOT}/news`, {
      headers: {
        'content-type': 'application/json'
      },
      body: {
        message: 'server_error',
        status: 'error'
      }
    })
    const expectedActions = [newsSet({
      loading: true
    }), newsSet({
      error: true,
      payload: ERRORS.server_error.message
    })];
    const store = mockStore({})

    return store.dispatch(newsGet()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  })
})