import React, { Component } from 'react';

import Context from './Context.jsx';
import StartGameButton from './StartGameButton.jsx';

export default class GameStatus extends Component {
  render() {
    return(
      <div>
      <Context.Consumer>
      {({startGame, opponentStartGame, opponentName}) => (
        !startGame && !opponentStartGame ?
          <span>Waiting on both players to start game. <StartGameButton /></span>
          : (startGame ?
            <span>Waiting on opponent to start game.</span>
            : <span>{opponentName} ready. Waiting on you to start game. <StartGameButton /></span>)
      )}
      </Context.Consumer>
      </div>
    );
  }
}