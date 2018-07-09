import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

class NotFound extends React.Component {
  render() {
    const {location} = this.props;
    return (
      <section className={ styles.main }>
        <h2> PATH: { location.pathname } </h2>
        <h1>К сожалению, страница не найдена!</h1>
      </section>
      );
  }
}

NotFound.propsTypes = {
  location: PropTypes.object.isRequired
}

export default NotFound;