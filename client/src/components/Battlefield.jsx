import React, { Component } from 'react';

import Context from './Context.jsx';
import Grid from './Grid.jsx';
import GameProgress from './GameProgress.jsx';

import style from '../styles/Battlefield.css';

export default class Battlefield extends Component {
  render() {
    return(
      <div>
        <Context.Consumer>
        {(context) => (
          <h1 className='headline' >Welcome to the battlefield, General {context.username}</h1>
        )}
        </Context.Consumer>
        <Grid />
        <GameProgress />
      </div>
    );
  }
}