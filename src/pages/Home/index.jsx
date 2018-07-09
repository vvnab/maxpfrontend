import React from 'react';
import PropTypes from 'prop-types';
import loremIpsum from 'lorem-ipsum';

import styles from './index.module.css';

const Home = ({location}) => {
  return (
    <section className={ styles.main }>
      <p className={ styles.paragraph }>
        { loremIpsum({
            count: 30
          }) }
      </p>
    </section>
    );
}

Home.propsTypes = {
  location: PropTypes.object.isRequired
}

export default Home;