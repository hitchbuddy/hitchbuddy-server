import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';
import {findHitchhikers} from './action-creators';

const app = express();
const httpServer = http.createServer(app);
const port = process.env.PORT || 5000;

const server = {
  listen(store, customPort) {
    const io = new SocketIO(httpServer);

    store.subscribe(
      () => io.emit('state', store.getState())
    );

    io.on('connection', (socket) => {
      socket.on('FIND_HITCHHIKERS_BY_CITY', (data, callback) => {
        store.dispatch(findHitchhikers(data.city));
        callback();
      });
    });

    const listen = typeof(customPort) === 'undefined' ? port : customPort;
    httpServer.listen(listen);
  },

  close() {
    httpServer.close();
  },
};

module.exports = server;
