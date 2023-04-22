import io from 'socket.io-client';

let socket: any;

export const connect = () => {
  socket = io('http://localhost:3000');

  socket.on('connect', () => {
    console.log('Connected to server');
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from server');
  });
};

export const getData = (callback: Function) => {
  if (socket) {
    socket.on('data', (data: any) => {
      callback(data);
    });
  }
};