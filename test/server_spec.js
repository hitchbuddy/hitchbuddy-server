import chai from 'chai';
import {describe, it, before, after, beforeEach, afterEach} from 'mocha';
import server from './../src/server';
import io from 'socket.io-client';
const port = 1337;
chai.should();

describe('hitchhikers', () => {
  let socket;

  before(() => {
    server.listen(port);
  });

  after(() => {
    server.close();
  });

  beforeEach((done) => {
    socket = io.connect('http://localhost:1337', {
      'reconnection delay': 0, 'reopen delay': 0, 'force new connection': true,
    });
    socket.on('connect', () => {
      done();
    });
  });

  afterEach((done) => {
    socket.on('disconnect', () => {
      done();
    });
    socket.disconnect();
  });

  it('should initialize the app state and return to client', (done) => {
    socket.emit('INITIALIZE');

    socket.on('state', (state) => {
      state.should.eql({
        hitchhikers: [],
        currentCity: '',
      });
      done();
    });
  });

  it('should ask the server to give the list of hitchhikers of a given city', (done) => {
    socket.emit('FIND_HITCHHIKERS_BY_CITY', {state: {
      hitchhikers: [],
      currentCity: 'Berlin',
    }, city: 'New Delhi'}, () => {});

    socket.on('state', (state) => {
      state.should.eql({
        hitchhikers: ['hitchhiker1', 'hitchhiker2'],
        currentCity: 'New Delhi',
      });
      done();
    });
  });
});

