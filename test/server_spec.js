import chai from 'chai';
import http from 'http';
import makeStore from './../src/store';
import server from './../src/server';
import io from 'socket.io-client';

const port = 1337;
const url = 'http://localhost:'+port;

const should = chai.should();

describe("hitchhikers", () => {
  let socket, store;

  beforeEach(() => {
    store = makeStore();
    server.listen(store, port);
    socket = io.connect('http://localhost:1337');
  });

  afterEach(() => {
    socket.disconnect();
    server.close();
  });

  it("should ask the server to give the list of hitchhikers of a given city", (done) => {
    const stateAfterInit = store.getState();

    socket.on('connect', function(){
      socket.emit('FIND_HITCHHIKERS_BY_CITY', {city: 'New Delhi'}, () => {});
      socket.on('state', (state) => {
        state.hitchhikers.should.eql(['hitchhiker1', 'hitchhiker2']);
      });
    });

    store.subscribe(() => {
      stateAfterInit.hitchhikers.should.eql([]);
      store.getState().hitchhikers.should.eql(['hitchhiker1', 'hitchhiker2']);
      done();
    });
  });
});
