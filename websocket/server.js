// Socket.io server responce to our app
module.exports = function(io)
{
	// Emit welcome message on connection
	io.on('connection', function(socket)
	{// Use socket to communicate with this particular client only, sending it it's own id
		//Receive User Events
		console.log( socket.id + ' - connected..' );

		//Sending Data to users on connect
		socket.emit(
						'broadcast_data',
						{
							message: 'Welcome!',
							id: socket.id
						}
					);

		//Receive User data
		socket.on('client_data', console.log);

		socket.on('error', function(error)
		{
			console.log( 'Error - ' + JSON.stringify(error) );
		});

		socket.on('disconnect', function(event_name)
		{
			console.log( 'Disconnected.. - ' + socket.id );
			//console.log( event_name );
		});
	});
}
