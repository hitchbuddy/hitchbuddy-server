import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';
import makeStore from './store';
import {findHitchhikersByCity, findHitchhikersByCountry} from './action-creators';

const app = express();
const httpServer = http.createServer(app);
const port = process.env.PORT || 5000;

const server = {
  listen(customPort) {
    const io = new SocketIO(httpServer);

    io.on('connection', (socket) => {
      const store = makeStore();

      store.subscribe(
        () => socket.emit('state', store.getState().toJS())
      );

      socket.on('INITIALIZE', () => {
        socket.emit('state', store.getState().toJS());
      });

      socket.on('FIND_HITCHHIKERS_BY_CITY', (data) => {
        store.dispatch(findHitchhikersByCity(data.city));
      });

      socket.on('FIND_HITCHHIKERS_BY_COUNTRY', (data) => {
        store.dispatch(findHitchhikersByCountry(data.country));
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
