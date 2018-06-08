require('babel-polyfill');

const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/dist/')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../client/dist/index.html')));

app.listen(3000, () => console.log(`Listening on port 3000`));