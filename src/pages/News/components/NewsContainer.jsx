import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loading from '../../../hocs/Loading';
import Message from '../../../components/Message';

import * as actions from '../actions';
import NewsList from './NewsList';
import styles from './index.module.css';

class NewsContainer extends React.Component {
  componentWillMount() {
    if (!this.props.error && !this.props.news.length) {
      this.props.newsGet();
    }
  }
  render() {
    const {news, error} = this.props;
    return (
      <div>
        <section className={ styles.main }>
          { !error && <NewsList news={ news } /> }
        </section>
        { error && <Message type='error' text={ `${news}` } /> }
      </div>
      );
  }
}

NewsContainer.propTypes = {
  news: PropTypes.array.isRequired
}

NewsContainer = Loading(NewsContainer);

export default connect(state => ({
  error: state.news.error,
  news: state.news.payload || [],
  loading: state.news.loading
}), {
  newsGet: actions.newsGet
})(NewsContainer);