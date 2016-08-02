// Socket.io server listens to our app
module.exports = function(io)
{
	// Send current time to all connected clients
	function sendTime()
	{
		io.emit('time', { time: new Date().toJSON() });
	}
	// Send current time every 10 secs
	setInterval(sendTime, 10000);
}
