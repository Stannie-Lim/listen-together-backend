module.exports = (io) => {
  let room;

  io.on('connection', socket => {
    console.log('welcome', socket.id);
    socket.on('joinroom', ({ roomCode, user }) => {
      room = roomCode;
      socket.join(roomCode);
      io.in(roomCode).emit('newuser', user);
      // console.log(user, roomCode);
    });
    
    socket.on('queuesong', ({ queue }) => {
      console.log(queue.length);
      io.in(room).emit('queue', queue);
    });
  });
};
