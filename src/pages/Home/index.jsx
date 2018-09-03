import React from 'react';
import PropTypes from 'prop-types';
import loremIpsum from 'lorem-ipsum';
import _ from 'lodash';

import styles from './index.module.css';

const header = (count) => loremIpsum({
  count,
  units: 'words'
})

const paragraph = (min, max) => loremIpsum({
  count: _.random(min, max)
})

const paragraphs = (min, max) => _.map(_.range(_.random(min, max)), (i, k) => <p key={ k } className={ styles.paragraph }>
                                                                                { paragraph(5, 15) }
                                                                              </p>)

const Home = ({location}) => {
  return (
    <section className={ styles.main }>
      <h2 className={ styles.header }> { header(2) } </h2>
      { paragraphs(2, 4) }
    </section>
    );
}

Home.propsTypes = {
  location: PropTypes.object.isRequired
}

export default Home;