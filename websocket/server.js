// Socket.io server responce to our app
module.exports = function(io)
{
	// Emit welcome message on connection
	io.on('connection', function(socket)
	{
		// Use socket to communicate with this particular client only, sending it it's own id
		socket.emit('welcome', { message: 'Welcome!', id: socket.id });
		socket.on('i am client', console.log);
	});

	// io.on('connection', function(socket)
	// {
	// 	console.log('a user connected');
	// 	socket.on('disconnect', function()
	// 	{
	// 		console.log('user disconnected');
	// 	});
	// });
}
