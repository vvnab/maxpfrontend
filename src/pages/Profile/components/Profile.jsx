import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

class Profile extends Component {
  render() {
    const {profile} = this.props;
    return profile && <div className={ styles.profile }>
                        <div>
                          <b>Город</b>
                          { `: ${profile.city}` }
                        </div>
                        <br/>
                        <div>
                          <b>Знание языков:</b>
                          <ul>
                            { profile.languages.map(i => (<li key={ i }>
                                                            { i }
                                                          </li>)) }
                          </ul>
                        </div>
                        <div>
                          <b>Ссылки:</b>
                          <ul>
                            { profile.social.map(i => (<li key={ i.label }>
                                                         <a href={ i.link }> <i className={ i.icon }></i>
                                                           <span>{ i.label }</span> </a>
                                                       </li>)) }
                          </ul>
                        </div>
                      </div>
  }
}

Profile.propsTypes = {
  profile: PropTypes.object
}

export default Profile;