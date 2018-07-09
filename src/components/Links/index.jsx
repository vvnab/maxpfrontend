import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './index.module.css';

class Links extends Component {
  render() {
    const {pages, authenticated} = this.props;
    return (
      <ul className={ styles.list }>
        { pages && pages.map(i => (<li key={ i.href } className={ styles.item }>
                                     <NavLink exact to={ i.href } activeClassName={ styles.active }>
                                       { i.title }
                                     </NavLink>
                                   </li>)) }
        <li key='/login' className={ styles.item }>
          <NavLink exact to={ !authenticated ? '/login' : '/logout' } activeClassName={ styles.active }>
            { !authenticated ? 'Войти' : 'Выйти' }
          </NavLink>
        </li>
      </ul>
      );
  }
}

Links.propTypes = {
  pages: PropTypes.array.isRequired,
  authenticated: PropTypes.bool.isRequired
}

Links = withRouter(connect(state => ({
  authenticated: !!(state.login.payload && state.login.payload.id)
}))(Links));

export default Links;