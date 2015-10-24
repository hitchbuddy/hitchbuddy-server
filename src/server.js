import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';
const app = express();
const httpServer = http.createServer(app);
const port = process.env.PORT || 5000;

let server = {
  listen (customPort) {
    new SocketIO(httpServer);
    let listen = typeof(customPort) === 'undefined' ? port : customPort;
    httpServer.listen(listen);
  },

  close () {
    httpServer.close();
  }
};

module.exports = server;
