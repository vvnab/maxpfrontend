import React from 'React'
import { shallow } from 'enzyme'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  const props = {
    user: {},
    location: {
      pathname: '/logout'
    },
    history: '',
    userLogout: () => {
    }
  }
  const initialState = {
    email: 'max@test.com',
    password: '12345'
  }
  
  describe('Login ok', () => {
    const nextProps = {
      ...props,
    }
    const loginForm = shallow(<LoginForm {...nextProps} />);
    it('renders properly', () => {
      expect(loginForm).toMatchSnapshot();
    })
    it('ok', () => {
      expect(loginForm.find('form')).toHaveLength(1);
      expect(loginForm.find('Message')).toHaveLength(0);
    })
  })
  describe('error', () => {
    const nextProps = {
      ...props,
      user: {
        error: true,
        payload: "Error"
      }
    }
    const loginForm = shallow(<LoginForm {...nextProps} />);
    it('error', () => {
      expect(loginForm.find('Message')).toHaveLength(1);
    })
  })
})

