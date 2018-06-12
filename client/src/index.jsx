import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Context from './components/Context.jsx';
import App from './components/App.jsx';

class Provider extends Component {
  addUsername = (username) => {
    this.setState({username});
  }
  toggleStartGame = () => {
    this.setState({startGame: true});
  }
  strikeEnemy = (i) => {
    if (this.state.enemyShipLocations[i] === undefined) {
      this.setState({userStrikeType: `was a MISS at location ${i}!`});
    } else if (this.state.enemyShipLocations[i]) {
      this.setState({userStrikeType: `was ALREADY TAKEN at location ${i}!`});
    } else {
      let newTotalSunk = this.state.totalEnemySunken + 1;
      if (newTotalSunk === 4) {
        this.setState({
          enemyShipLocations:
            Object.assign({},
              this.state.enemyShipLocations[i] = true,
              this.state.enemyShipLocations),
          userStrikeType: `was a HIT, and YOU'VE WON the battle!`,
          totalEnemySunken: newTotalSunk
        });
      } else {
        this.setState({
          enemyShipLocations:
            Object.assign({},
              this.state.enemyShipLocations[i] = true,
              this.state.enemyShipLocations),
          userStrikeType: `was a HIT at location ${i}!`,
          totalEnemySunken: newTotalSunk
        });
      }
    }
  }
  state = {
    addUsername: this.addUsername,
    toggleStartGame: this.toggleStartGame,
    strikeEnemy: this.strikeEnemy,
    username: '',
    startGame: false,
    opponentName: 'Computer', // default Computer for PC play, default '' for socket-integration play with person
    opponentStartGame: true, // default true for PC play, default false for real opponent play is integrated
    enemyShipLocations: {},
    userStrikeType: null,
    totalEnemySunken: 0,
  }
  componentDidMount() {
    let enemyTiles = {};
    for (let i = 0; i < 4; i++) {
      let tileNumber = Math.floor(Math.random() * 25) + 1;
      enemyTiles[tileNumber] = false;
    }
    this.setState({enemyShipLocations: enemyTiles});
  }
  render() {
    return (
      <Context.Provider value={this.state} >
        {this.props.children}
      </Context.Provider>
    );
  }
}

ReactDOM.render(
  <Provider>
    <Router><App /></Router>  
  </Provider>
  , document.getElementById('app')
);