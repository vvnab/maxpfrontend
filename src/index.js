import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { store } from './store';
import './index.css';
import pages from './constants/pages';

ReactDOM.render(<Provider store={ store }>
                  <App pages={ pages }>
                  </App>
                </Provider>, document.getElementById('root'));

registerServiceWorker();