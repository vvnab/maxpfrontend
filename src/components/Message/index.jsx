import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

class Message extends Component {
  render() {
    const {type, text} = this.props;
    const messageType = type === 'error' ? styles.error : styles.info;
    return <section className={ styles.main }>
        <div className={ messageType }>
          { text }
        </div>
      </section>
  }
}

Message.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string
}

export default Message;