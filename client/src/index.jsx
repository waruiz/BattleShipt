import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Context from './components/Context.jsx';
import App from './components/App.jsx';

class Provider extends Component {
  addUsername = (username) => {
    this.setState({username});
  }
  state = {
    addUsername: this.addUsername,
    username: ''
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