import React, { Component } from 'react';

import Context from './Context.jsx';

export default class StartGameButton extends Component {
  state = {
    buttonActive: true,
  }
  render() {
    return(
      <div>
      <Context.Consumer>
      {({startGame, toggleStartGame}) => (
        !startGame ? <button onClick={toggleStartGame} >Start Game</button> : null
      )}
      </Context.Consumer>
      </div>
    );
  }
}