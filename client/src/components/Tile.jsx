import React, { Component } from 'react';

import style from '../styles/Tile.css';
import ship from '../assets/ship_small.png';

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
        onClick={this.selectTile} >
      {this.state.selected ? <span><img src={ship}/></span>
          : <span></span>}
      </div>
    );
  }
}