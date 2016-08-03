//Front End Socket Implementation

var socket = io();

//Sending data to server
socket.on('broadcast_data', function(data)
{
	addMessage(data.message);

	// Respond with a message including this clients' id sent from the server
	socket.emit('client_data',
					{
						data: 'Try Data',
						id: data.id
					}
				);
});

socket.on('time', function(data)
{
	console.log(socket.id + ' - time interval call');
	addMessage(data.time);
});

socket.on('error',		console.error.bind(console));
socket.on('message',	console.log.bind(console));

//Default Events
socket.on('connect', function()
{
	console.log(socket.id + ' - connect');
});

socket.on('connect_error', function(data)
{
	console.log(socket.id + ' - connect_error');
});

socket.on('connect_timeout', function()
{
	console.log(socket.id + ' - connect_timeout');
});

socket.on('reconnect', function(attempt_number)
{
	console.log(socket.id + ' - reconnect - '+attempt_number);
});

socket.on('reconnect_attempt', function()
{
	console.log(socket.id + ' - reconnect_attempt');
});

socket.on('reconnecting', function(attempt_number)
{
	console.log(socket.id + ' - reconnecting - '+attempt_number);
});

socket.on('reconnect_error', function(data)
{
	console.log(socket.id + ' - reconnect_error');
});

socket.on('reconnect_failed', function()
{
	console.log('reconnect_failed');
});

function addMessage(message)
{
	var text = document.createTextNode(message),
		el = document.createElement('li'),
		messages = document.getElementById('messages');

	el.appendChild(text);
	messages.appendChild(el);
}
