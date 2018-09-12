import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loading from '../../../hocs/Loading';
import Message from '../../../components/Message';

import * as actions from '../actions';
import NewsList from './NewsList';
import styles from './index.module.css';

export class NewsContainer extends React.Component {
  componentWillMount() {
    if (!this.props.error && !this.props.payload.length) {
      this.props.newsGet();
    }
  }
  render() {
    const {payload, error} = this.props;
    return (
      <React.Fragment>
        <section className={ styles.main }>
          { !error && <NewsList news={ payload } /> }
        </section>
        { error && <Message type='error' text={ `${payload}` } /> }
      </React.Fragment>
      );
  }
}

NewsContainer.propTypes = {
  payload: PropTypes.any.isRequired
}

export default connect(state => ({
  error: state.news.error,
  payload: state.news.payload || [],
  loading: state.news.loading
}), {
  newsGet: actions.newsGet
})(Loading(NewsContainer));