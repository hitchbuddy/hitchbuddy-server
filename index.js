require('babel/register');
import makeStore from './src/store';
import server from './src/server';
export const store = makeStore();

server.listen(store);
