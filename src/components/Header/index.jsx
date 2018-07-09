import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Links from '../Links';

import styles from './index.module.css';
import logo from './logo.svg';

class Header extends Component {
  render() {
    const {pages} = this.props;
    return (
      <header className={ styles.header }>
        <img src={ logo } className={ styles.logo } alt="logo" />
        <h1 className={ styles.title }> Задание #2 </h1>
        <Links pages={ pages } />
      </header>
      );
  }
}

Header.propTypes = {
  pages: PropTypes.array.isRequired
}

export default Header;