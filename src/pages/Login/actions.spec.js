import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

import { API_ROOT } from '../../constants/defaults'
import ERRORS from '../../constants/errors'
import { userSet, userLogin, userLogout } from './actions'
import * as t from './actionTypes'


import fetchMock from 'fetch-mock'
// import expect from 'expect'

const middlwares = [thunk]
const mockStore = configureMockStore(middlwares)

describe('userLogin async actions', () => {
  beforeEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('userLogin OK', () => {
    fetchMock.postOnce(`${API_ROOT}/validate`, {
      headers: {
        'content-type': 'application/json'
      },
      body: {
        data: {
          id: 1
        },
        status: 'ok'
      }
    })
    const expectedActions = [userSet({
      loading: true
    }), userSet({
      payload: {
        id: 1
      }
    })];
    const store = mockStore({})

    return store.dispatch(userLogin({
      email: '',
      password: ''
    })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  })

  it('userLogin server error', () => {
    fetchMock.postOnce(`${API_ROOT}/validate`, {
      headers: {
        'content-type': 'application/json'
      },
      body: {
        message: 'server_error',
        status: 'error'
      }
    })
    const expectedActions = [userSet({
      loading: true
    }), userSet({
      error: true,
      payload: ERRORS.server_error.message
    })];
    const store = mockStore({})

    return store.dispatch(userLogin({
      email: '',
      password: ''
    })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  })
  it('userLogin login error', () => {
    fetchMock.postOnce(`${API_ROOT}/validate`, {
      headers: {
        'content-type': 'application/json'
      },
      body: {
        message: 'wrong_email_or_password',
        status: 'error'
      }
    })
    const expectedActions = [userSet({
      loading: true
    }), userSet({
      error: true,
      payload: ERRORS.wrong_email_or_password.message
    })];
    const store = mockStore({})

    return store.dispatch(userLogin({
      email: '',
      password: ''
    })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  })
})

describe('userLogout sync action', () => {
  it('userLogout', () => {
    const expectedAction = {
      type: t.USER_LOGOUT,
    }
    expect(userLogout()).toEqual(expectedAction)
  })
})