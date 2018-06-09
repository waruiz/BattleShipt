import React, { Component } from 'react';

import Grid from './Grid.jsx';

export default class Battlefield extends Component {
  render() {
    return(
      <div>
        <h1>Welcome to the battlefield.</h1>
        <Grid />
      </div>
    );
  }
}