import React, { Component } from 'react';

import styles from '../styles/Grid.css';

export default class Grid extends Component {
  render() {
    return(
      <div id="ocean" className='gridSize' >
        <div id="grid" className='gridStyle' >
          <div className="tile" className='tileStyle'
            style={{gridColumn: 'col-start 1 / span 1'}} >1</div>
          <div className="tile" className='tileStyle'
            style={{gridColumn: 'col-start 2 / span 1'}} >2</div>
          <div className="tile" className='tileStyle'
            style={{gridColumn: 'col-start 3 / span 1'}} >3</div>
          <div className="tile" className='tileStyle'
            style={{gridColumn: 'col-start 4 / span 1'}} >4</div>
          <div className="tile" className='tileStyle'
            style={{gridColumn: 'col-start 5 / span 1'}} >5</div>
        </div>
      </div>
    );
  }
}