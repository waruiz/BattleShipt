import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App.jsx';
import Context from './components/Context.jsx';

class Provider extends Component {
  state = {
    username: 'William'
  }
  addUsername = (username) => {
    this.setState({username});
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