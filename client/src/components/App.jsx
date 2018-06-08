import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';

import Welcome from './Welcome.jsx';
import Battlefield from './Battlefield.jsx';

export default class App extends Component {
  state = {
    username: ''
  }
  addUsername = (username) => {
    this.setState({username});
  }
  render () {
    return (
      <div>
      {
        this.state.username ?
          <Redirect to="/battlefield" /> :
          <Redirect to="/" />
      }
      <Route exact="exact" path="/"
        render={() => <Welcome addUsername={this.addUsername} /> } />
      <Route path="/battlefield"
        render={() => <Battlefield />} />
      </div>
    );
  }
}