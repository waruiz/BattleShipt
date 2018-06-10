import React, { Component } from 'react';

import Tile from './Tile.jsx';

import styles from '../styles/Grid.css';

export default class Grid extends Component {
  render() {
    let tiles = [];

    let columnStart = 1;
    let columnEnd = 2;
    let rowStart = 1;
    let rowEnd = 2;
    
    for (let i = 1; i <= 25; ++i) {
      let position = {
        gridArea: `${rowStart} / ${columnStart} / ${rowEnd} / ${columnEnd}`,
        borderBottom: 'solid 1px',
        borderRight: 'solid 1px'
      };

      if ((i > 1) && (i % 5 === 0)) {
        rowStart += 1;
        rowEnd += 1;
        columnStart = 1;
        columnEnd = 2;
      } else {
        columnStart += 1;
        columnEnd += 1;
      }
      tiles.push(
        <Tile position={position} i={i} />
      );
    }

    return(
      <div id="ocean" className='gridSize' >
        {tiles}
      </div>
    );
  }
}