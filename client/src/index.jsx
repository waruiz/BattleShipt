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
      console.log('Miss!');
    } else if (this.state.enemyShipLocations[i]) {
      console.log('Already taken!')
    } else {
      console.log('Hit!');
      this.setState({
        enemyShipLocations:
          Object.assign({},
            this.state.enemyShipLocations[i] = true,
            this.state.enemyShipLocations)
      });
    }
  }
  state = {
    addUsername: this.addUsername,
    toggleStartGame: this.toggleStartGame,
    strikeEnemy: this.strikeEnemy,
    username: '',
    startGame: false,
    opponentStartGame: false,
    enemyShipLocations: {},
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