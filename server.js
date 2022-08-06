const express = require('express');
require('dotenv').config();
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
app.use(express.static('static'));

server.listen(process.env.PORT, () => {
  console.log('listening on *:' + process.env.PORT);
});

io.on('connection', (socket) => {
  console.log('new connection: ' + socket.id);
});
