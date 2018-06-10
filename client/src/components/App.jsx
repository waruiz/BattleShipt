import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';

import Welcome from './Welcome.jsx';
import Battlefield from './Battlefield.jsx';

export default class App extends Component {
  render () {
    return (
      <div>
      {
        false ?
          <Redirect to="/battlefield" /> :
          <Redirect to="/" />
      }
      <Route exact="exact" path="/"
        render={() => <Welcome addUsername={this.props.addUsername} /> } />
      <Route path="/battlefield"
        render={() => <Battlefield username={this.state.username} />} />
      </div>
    );
  }
}