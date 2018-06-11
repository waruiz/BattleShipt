import React from 'react';

const Context = React.createContext({
  addUsername: () => {},
  toggleStartGame: () => {},
});

module.exports = Context;