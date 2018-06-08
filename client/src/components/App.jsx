import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';

import Welcome from './Welcome.jsx';
import Battlefield from './Battlefield.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }
  render () {
    return (
      <div>
      {
        this.state.username ?
          <Redirect to="/battle" /> :
          <Redirect to="/" />
      }
      <Route exact="exact" path="/" component={Welcome} />
      <Route exact="exact" path="/battlefield" component={Battlefield} />
      </div>
    );
  }
}