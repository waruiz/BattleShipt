import React, { Component } from 'react';

import Context from './Context.jsx';

export default class Battlefield extends Component {
  state = {
    newUsername: ''
  }
  handleInput = (event) => {
    let { value } = event.target;
    this.setState({newUsername: value});
  }
  render() {
    return(
      <div>
        <h1>Welcome to BattleShipt.</h1>
        <div>
        <form>
          <label>
            Your name, General:
            <input type="text" value={this.state.newUsername}
              onChange={this.handleInput} />
          </label>
          <Context.Consumer>
          {
            (addUsername) => (
              <input type="button" value="Submit" onClick={addUsername} />
            )
          }
          </Context.Consumer>
        </form>
        </div>
      </div>
    );
  }
}