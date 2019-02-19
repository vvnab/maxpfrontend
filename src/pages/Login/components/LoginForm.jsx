import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';

import errors from '../../../constants/errors';
import Message from '../../../components/Message';

import styles from './index.module.css';

export class LoginForm extends Component {
  state = {
    email: 'max@test.com',
    password: '12345',
  // email: '',
  // password: ''
  }
  componentWillMount = () => {
    if (this.props.location.pathname === '/logout') {
      this.props.userLogout();
      this.props.history.replace('/login');
    }
  }
  componentWillReceiveProps = (nextProps) => {
    if (nextProps.user.error) {
      this.setState({
        password: ''
      });
    }
    if (!nextProps.user.error && nextProps.user.payload) {
      this.props.history.replace('/profile');
    }
  }
  handleChange = e => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    if (!validator.isEmail(this.state.email)) {
      // check email
      this.setState({
        fieldError: true,
        fieldErrorMessage: errors.wrong_email.message
      });
    } else if (this.state.password.length < 5) {
      // check password
      this.setState({
        fieldError: true,
        fieldErrorMessage: errors.wrong_password.message
      });
    } else {
      this.setState({
        fieldError: false,
        fieldErrorMessage: null
      });
      this.props.userLogin(this.state);
    }
  }
  render = () => {
    const {loading, payload, error} = this.props.user;
    const {email, password, fieldError, fieldErrorMessage} = this.state;
    const someError = error || fieldError;
    const errorMessage = fieldErrorMessage || (error && payload);
    return (
      <React.Fragment>
        <section className={ styles.main }>
          <form onSubmit={ this.handleSubmit }>
            <fieldset>
              <legend>Форма входа</legend>
              <p>
                <label>
                  <span className={ styles.label }>Имя:</span>
                  <input type='text' name='email' onChange={ this.handleChange } className={ styles.textField } value={ email } autoComplete='off' />
                </label>
              </p>
              <p>
                <label>
                  <span className={ styles.label }>Пароль:</span>
                  <input type='password' name='password' onChange={ this.handleChange } className={ styles.textField } value={ password } autoComplete='new-password' />
                </label>
              </p>
              <input type="submit" disabled={ loading || !email || !password } value={ loading ? 'Подождите' : 'Вход' } className={ styles.submitButton } />
            </fieldset>
          </form>
        </section>
        { someError && <Message type='error' text={ errorMessage } /> }
        </React.Fragment>
      );
  }
}

LoginForm.propsTypes = {
  user: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export default LoginForm;