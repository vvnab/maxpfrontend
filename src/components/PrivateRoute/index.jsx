import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class PrivateRoute extends React.Component {
  render = () => {
    const {component: Component, allowed, redirect, ...rest} = this.props;
    return <Route {...rest} render={ props => (
                          allowed ? <Component {...props} /> : <Redirect to={ { pathname: redirect, state: { from: props.location } } } />
                          ) } />
  }
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  allowed: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  redirect: PropTypes.string.isRequired
}

export default PrivateRoute;