module.exports = (io) => {
  let room;

  io.on('connection', socket => {
    console.log('welcome', socket.id);
    socket.on('joinroom', ({ roomCode, user }) => {
      room = roomCode;
      socket.join(roomCode);
      io.in(roomCode).emit('newuser', user);
    });
    
    socket.on('queuesong', ({ queue }) => {
      io.in(room).emit('queue', queue);
    });

    socket.on('foundintersection', intersection => {
      io.in(room).emit('foundintersection', intersection);
    });

    socket.on('leaveroom', () => {
      io.in(room).emit('disconnect');
    });
  });
};
