import React, { Component } from 'react';

import Context from './Context.jsx';
import GameStatus from './GameStatus.jsx';
import ScoreBoard from './ScoreBoard.jsx';

import style from '../styles/GameProgress.css';

export default class GameProgress extends Component {
  render() {
    return(
      <div className='progressCard' >
      <Context.Consumer>
      {(context) => (
        context.startGame && context.opponentStartGame ?
        <ScoreBoard /> : <GameStatus />
      )}
      </Context.Consumer>
      </div>
    );
  }
}