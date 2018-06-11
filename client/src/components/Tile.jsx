import React, { Component } from 'react';

import Context from './Context.jsx';

import style from '../styles/Tile.css';
import ship from '../assets/ship_small.png';
import explosion from '../assets/explosion_small.png';

export default class Tile extends Component {
  state = {
    selected: false
  }

  selectTile = (e) => {
    let opposite = !(this.state.selected);
    this.setState({selected: opposite});
  }
  
  render () {
    return (
      <div className='tileStyle' style={this.props.position}
        onClick={this.selectTile} id={`coordinate-${this.props.i}`} >
      <Context.Consumer>
      {({startGame}) => (
        startGame === false ?
          (this.state.selected ?
            <span><img src={ship} className='tilePiece' /></span>
            : <span></span>)
        : (this.state.selected === true ?
            <span><img src={explosion} className='tilePiece' /></span>
            : <span></span>)
      )}
      </Context.Consumer>
      </div>
    );
  }
}