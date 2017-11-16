import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {

  bands = this.props.store.getState().bands.map((band, index) => {
    return <Band band={band} key={index} store={this.props.store} />
  });

  render() {
    return(
      <ul>
        {this.bands}
      </ul>
    );
  }
};

export default Bands;
