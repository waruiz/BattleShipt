import React from 'react';

const Context = React.createContext({
  addUsername: () => {},
  toggleStartGame: () => {},
  strikeEnemy: () => {},
});

module.exports = Context;