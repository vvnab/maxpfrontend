import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

import { API_ROOT } from '../../constants/defaults'
import ERRORS from '../../constants/errors'
import { userGetProfile, userSetProfile } from './actions'
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

  it('userGetProfile OK', () => {
    fetchMock.getOnce(`${API_ROOT}/user-info/1`, {
      headers: {
        'content-type': 'application/json'
      },
      body: {
        data: {
          userId: 1,
          social: [{
            label: 'other'
          }, {
            label: 'web'
          }]
        },
        status: 'ok'
      }
    })
    const expectedActions = [userSetProfile({
      loading: true
    }), userSetProfile({
      payload: {
        userId: 1,
        social: [{
          label: 'web',
          icon: 'fas fa-globe'
        }, {
          label: 'other',
          icon: 'fab fa-other'
        }]
      }
    })];
    const store = mockStore({})

    return store.dispatch(userGetProfile(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  })

  it('userGetProfile error', () => {
    fetchMock.getOnce(`${API_ROOT}/user-info/1`, {
      headers: {
        'content-type': 'application/json'
      },
      body: {
        message: 'server_error',
        status: 'error'
      }
    })
    const expectedActions = [userSetProfile({
      loading: true
    }), userSetProfile({
      error: true,
      payload: ERRORS.server_error.message
    })];
    const store = mockStore({})

    return store.dispatch(userGetProfile(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  })
})