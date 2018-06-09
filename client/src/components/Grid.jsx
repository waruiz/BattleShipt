import React, { Component } from 'react';

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
        gridArea: `${rowStart} / ${columnStart} / ${rowEnd} / ${columnEnd}`
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
        <div style={position} >{i}</div>
      );
    }

    return(
      <div id="ocean" className='gridSize' >
        {tiles}
      </div>
    );
  }
}