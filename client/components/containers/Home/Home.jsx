import React, { Component } from 'react';
import withLayout from '../../../lib/withLayout';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Home Page</div>
    );
  }
}

export default withLayout(Home);