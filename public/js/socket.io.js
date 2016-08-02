var socket = io();

socket.on('welcome', function(data)
{
	addMessage(data.message);

	// Respond with a message including this clients' id sent from the server
	socket.emit('i am client', {data: 'foo!', id: data.id});
});

socket.on('time', function(data)
{
	addMessage(data.time);
});

socket.on('error',		console.error.bind(console));
socket.on('message',	console.log.bind(console));

function addMessage(message)
{
	var text = document.createTextNode(message),
		el = document.createElement('li'),
		messages = document.getElementById('messages');

	el.appendChild(text);
	messages.appendChild(el);
}

//Default Events
socket.on('connect', function()
{
	alert('connect');
});

socket.on('connect_error', function(data)
{
	alert(connect_error);
});

socket.on('connect_timeout', function()
{
	alert('connect_timeout');
});

socket.on('reconnect', function(attempt_number)
{
	alert('reconnect - '+attempt_number);
});

socket.on('reconnect_attempt', function()
{
	alert('reconnect_attempt');
});

socket.on('reconnecting', function(attempt_number)
{
	alert('reconnecting - '+attempt_number);
});

socket.on('reconnect_error', function(data)
{
	alert('reconnect_error');
});

socket.on('reconnect_failed', function()
{
	alert('reconnect_failed');
});