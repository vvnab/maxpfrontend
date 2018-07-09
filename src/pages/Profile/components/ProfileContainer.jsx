import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../actions';
import Loading from '../../../hocs/Loading';
import Message from '../../../components/Message';

import Profile from './Profile';

import styles from './index.module.css';

class ProfileContainer extends Component {
  componentWillMount = () => {
    if (!this.props.profile) {
      this.props.userGetProfile();
    }
  }
  render() {
    const {profile, error} = this.props;
    return (
      <div>
        <section className={ styles.main }>
          <Profile profile={ profile } />
        </section>
        { error && <Message type='error' text={ `${profile}` } /> }
      </div>
      );
  }
}

ProfileContainer.propsTypes = {
  profile: PropTypes.object
}

ProfileContainer = Loading(ProfileContainer);

ProfileContainer = connect(state => ({
  profile: state.profile.payload,
  error: state.profile.error,
  loading: state.profile.loading
}), {
  userGetProfile: actions.userGetProfile
})(ProfileContainer)

export default ProfileContainer;