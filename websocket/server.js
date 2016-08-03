// Socket.io server responce to our app
module.exports = function(io)
{
	// Emit welcome message on connection
	io.on('connection', function(socket)
	{// Use socket to communicate with this particular client only, sending it it's own id
		//Sending Data to users
		socket.emit(
						'broadcast_data',
						{
							message: 'Welcome!',
							id: socket.id
						}
					);

		//Receive User data
		socket.on('client_data', console.log);

		//Receive User Events
		console.log( socket.id + ' - connected..' );

		socket.on('error', function(error)
		{
			console.log( 'Error - ' + JSON.stringify(error) );
		});

		socket.on('disconnect', function(event_name)
		{
			console.log( 'Disconnected.. - ' + socket.id );
			//console.log( event_name );
		});

		socket.on('reconnect', function(reconnect_number)
		{
			console.log( socket.id + ' - Reconnect - ' + reconnect_number );
		});

		socket.on('reconnect_attempt', function()
		{
			console.log( 'Reconnect attempt...' );
		});

		socket.on('reconnecting', function(reconnect_number)
		{
			console.log( 'Reconnecting... - ' + reconnect_number );
		});

		socket.on('reconnect_error', function(error)
		{
			console.log( 'Reconnect error - ' + JSON.stringify(error) );
		});

		socket.on('reconnect_failed', function()
		{
			console.log( 'Reconnect failed...' );
		});

	});
}
