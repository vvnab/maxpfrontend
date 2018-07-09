import React from 'react';
import PropTypes from 'prop-types';

const NewsList = ({news}) => {
  return !!news.length && <div>
                            <ol>
                              { news.map(i => (
                                  <li key={ i.id }>
                                    <h4>{ i.title }</h4>
                                    <p>
                                      { i.text }
                                    </p>
                                  </li>
                                )) }
                            </ol>
                            <br/>
                            <strong> { `всего новостей: ${news.length}` } </strong>
                          </div>
}

NewsList.propTypes = {
  news: PropTypes.array.isRequired
}

export default NewsList;