import React, { Component } from 'react';

import Context from './Context.jsx';

export default class ScoreBoard extends Component {
  render() {
    return(
      <div>
      <Context.Consumer>
      {({userStrikeType}) => (
        userStrikeType !== null ?
          <p>Most recent strike {userStrikeType}</p>
          : <p>Play your first strike on the board.</p>
      )}
      </Context.Consumer>
      </div>
    );
  }
}