import io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import authentication from '@feathersjs/authentication-client';

const apiUrl = 'https://hsbackend.azurewebsites.net/';
const url = 'http://localhost:3035';
const API =
  process.env.NODE_ENV !== 'production'
    ? url
    : 'https://healthstack-backend.herokuapp.com';
const socket = io(apiUrl, {
  transports: ['websocket'],
  forceNew: true,
});
const client = feathers();
client.configure(socketio(socket, { timeout: 700000000 })); //700000
client.configure(
  authentication({
    storage: window.localStorage,
  })
);
//client.configure(restClient.axios(axios));

export default client;
