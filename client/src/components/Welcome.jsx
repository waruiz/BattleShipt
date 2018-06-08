import React, { Component } from 'react';

export default class Battlefield extends Component {
  state = {
    newUsername: ''
  }
  handleInput = (event) => {
    let { value } = event.target;
    this.setState({newUsername: value});
  }
  render() {
    const { addUsername } = this.props;
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
          <input type="button" value="Submit" onClick={addUsername} />
        </form>
        </div>
      </div>
    );
  }
}