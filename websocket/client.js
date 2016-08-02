module.exports = function(io)
{
	// Emit welcome message on connection
	io.on('connection', function(socket)
	{
		// Use socket to communicate with this particular client only, sending it it's own id
		socket.emit('welcome', { message: 'Welcome!', id: socket.id });
		socket.on('i am client', console.log);
	});
}
