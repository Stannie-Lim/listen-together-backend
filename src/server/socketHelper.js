const io = require('socket.io');

let _socketServer;
const setUp = (server)=> {
  _socketServer = io(server);
  _socketServer.on('connect', (client)=> {
    _socketServer.on('newuser', data => {
        console.log(data);
    });
    // client.on('identify', (token)=> {
    //   client.userId = jwt.decode(token, process.env.JWT).id;
    //   console.log(client.userId);
    // });
  });
}

const socketServer = ()=> _socketServer;

module.exports = {
  setUp,
  socketServer
};