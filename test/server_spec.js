import chai from 'chai';
import http from 'http';
import server from './../src/server';

const port = 1337;
const url = 'http://localhost:'+port;

describe("hitchhikers", () => {
  beforeEach(() => {
    server.listen(port);
  });

  afterEach(() => {
    server.close();
  });

  it("should ask the server to give the list of hitchhikers of a given city", (done) => {
    done();
  });
});
