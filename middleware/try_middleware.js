module.exports = function (req, res, next)
{
	console.log('Request URL :-', req.originalUrl);
	console.log('Request Parameters :-', req.params);
	// if the user ID is 0, skip to the next route
	if (req.params.id == 0)
	{
		next('route');
	}
	// otherwise pass the control to the next middleware function in this stack
	else
	{
		next(); //
	}
}