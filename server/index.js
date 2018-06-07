require('babel-polyfill');

const app = require('express')();
const http = require('http').Server(app);

app.get('/', (req, res) =>
  res.send('<h1>Hello from Socket.io!</h1>')
);

http.listen(3000, () => console.log(`Listening on port 3000`));