import chai from 'chai';
import http from 'http';
import server from './../src/server';
import io from 'socket.io-client';

const port = 1337;
const url = 'http://localhost:'+port;

describe("hitchhikers", () => {
  let socket;

  beforeEach(() => {
    server.listen(port);
    socket = io.connect('http://localhost:1337');
  });

  afterEach(() => {
    socket.disconnect();
    server.close();
  });

  it("should ask the server to give the list of hitchhikers of a given city", (done) => {
    socket.on('connect', function(){
      socket.emit('REQUEST_HITCHHIKERS_BY_CITY', {city: 'New Delhi'}, () => {
        done();
      });
    });
  });
});
