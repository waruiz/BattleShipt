import React, { Component } from 'react';

import Context from './Context.jsx';

import style from '../styles/Tile.css';
import ship from '../assets/ship_small.png';
import explosion from '../assets/explosion_small.png';

export default class Tile extends Component {
  state = {
    selected: false,
    shipPlaced: false,
  }

  selectTile = (gameStatus, i, callback) => {
    let opposite = !(this.state.selected);
    if (!gameStatus) {
      let myShip = !(this.state.shipPlaced);
      this.setState({selected: opposite, shipPlaced: myShip});
    } else {
      callback(i);
      this.setState({selected: opposite});
    }
  }
  
  render () {
    return (
      <Context.Consumer>
        {({startGame, strikeEnemy}) => (
          <React.Fragment>
            <div className='tileStyle' style={this.props.position}
              onClick={() => this.selectTile(startGame, this.props.i, strikeEnemy)} id={`coordinate-${this.props.i}`} >
            {
            startGame === false ?
              (this.state.selected ?
                <span><img src={ship} className='tilePiece' /></span>
                : <span></span>)
            : (this.state.selected && this.state.shipPlaced === false ?
                <span><img src={explosion} className='tilePiece' /></span>
                : (this.state.selected && this.state.shipPlaced ?
                  <span><img src={ship} className='tilePiece' /></span> : <span></span>))
            }
            </div>
          </React.Fragment>
        )}
      </Context.Consumer>
    );
  }
}