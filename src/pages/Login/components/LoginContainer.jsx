import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import * as actions from '../actions';

const LoginContainer = connect(state => ({
  user: state.login
}), {
  userLogin: actions.userLogin,
  userLogout: actions.userLogout,
})(LoginForm)

export default LoginContainer;