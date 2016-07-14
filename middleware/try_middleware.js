module.exports = function (req, res, next)
{
	console.log('Request URL :-', req.originalUrl);
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