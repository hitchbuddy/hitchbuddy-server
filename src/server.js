import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';
import makeStore from './store';
import {findHitchhikers} from './action-creators';

const app = express();
const httpServer = http.createServer(app);
const port = process.env.PORT || 5000;

const server = {
  listen(customPort) {
    const io = new SocketIO(httpServer);

    io.on('connection', (socket) => {
      const store = makeStore();

      store.subscribe(
        () => socket.emit('state', store.getState())
      );

      socket.on('INITIALIZE', () => {
        socket.emit('state', store.getState());
      });

      socket.on('FIND_HITCHHIKERS_BY_CITY', (data) => {
        store.dispatch(findHitchhikers(data.city));
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
