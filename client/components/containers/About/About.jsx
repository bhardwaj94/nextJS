import React, { Component } from 'react';
import withLayout from '../../../lib/withLayout';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>About Page</div>
    );
  }
}

export default withLayout(About);