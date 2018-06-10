import React, { Component } from 'react';

import Grid from './Grid.jsx';

import style from '../styles/Battlefield.css';

export default class Battlefield extends Component {
  render() {
    return(
      <div>
        <h1 className='headline' >Welcome to the battlefield {this.props.username}</h1>
        <Grid />
      </div>
    );
  }
}