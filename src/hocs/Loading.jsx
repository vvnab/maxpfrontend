import React, { Component } from 'react';

import Loader from '../components/Loader';

const Loading = (WarpComponent) => {
  return class WithLoaderComponent extends Component {
    render = () => {
      return (this.props.loading ? <Loader/> : <WarpComponent {...this.props}/>)
    }
  }
}

export default Loading;