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
  state = {
    addUsername: this.addUsername,
    toggleStartGame: this.toggleStartGame,
    username: '',
    startGame: false,
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