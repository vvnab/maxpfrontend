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
    },
    userLogin: () => {
    }
  }
  const initialState = {
    email: 'max@test.com',
    password: '12345'
  }

  describe('Login init state', () => {
    const mockUserLogin = jest.fn();
    const nextProps = {
      ...props,
      userLogin: mockUserLogin
    }
    const loginForm = shallow(<LoginForm {...nextProps} />);
    it('init', () => {
      loginForm.setState(initialState);
      expect(loginForm.state()).toEqual(initialState);
    })
  })
  // describe('Login handlers', () => {
  //   const loginForm = shallow(<LoginForm {...nextProps} />);
  //   beforeEach(() => {
  //     loginForm.find('[name="email"]').simulate('change', {

  //     })
  //   })
  //   it('init', () => {
  //     loginForm.setState(initialState);
  //     expect(loginForm.state()).toEqual(initialState);
  //   })
  // })
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

