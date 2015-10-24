import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';
const app = express();
const httpServer = http.createServer(app);
const port = process.env.PORT || 5000;

let server = {
  listen (customPort) {
    const io = new SocketIO(httpServer);

    io.on('connection', (socket) => {
      socket.on('REQUEST_HITCHHIKERS_BY_CITY', (data, callback) => {
        console.log('haha');
        callback();
      });
    });

    let listen = typeof(customPort) === 'undefined' ? port : customPort;
    httpServer.listen(listen);
  },

  close () {
    httpServer.close();
  }
};

module.exports = server;
