import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './index.module.css';

import Home from '../../pages/Home';
import Login from '../../pages/Login';
import News from '../../pages/News';
import Profile from '../../pages/Profile';
import NotFound from '../../pages/NotFound';

import Header from '../Header';
import PrivateRoute from '../PrivateRoute';

class App extends Component {
  render() {
    const {pages, logged} = this.props;
    return ( <Router>
               <div className={ styles.app }>
                 <Header pages={ pages } />
                 <Switch>
                   <Route exact path='/' component={ Home } />
                   <Route path='/news' component={ News } />
                   <PrivateRoute path='/profile' component={ Profile } allowed={ logged } redirect='/login' />
                   <Route path='/login' component={ Login } />
                   <Route path='/logout' component={ Login } />
                   <Route component={ NotFound } />
                 </Switch>
               </div>
             </Router>
      );
  }
}

App.propTypes = {
  pages: PropTypes.array.isRequired
}

export default connect(state => ({
  logged: (!state.login.error && !!state.login.payload && !!state.login.payload.id)
}))(App);