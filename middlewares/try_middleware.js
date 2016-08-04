module.exports = function (req, res, next)
{
	//console.log('Request URL :-', req.originalUrl);
	//console.log('Request Parameters :-', req.params);

	// if the user is logged in
	if (req.user)
	{
		console.log('Logged In');
		next('route');
	}
	// otherwise pass the control to the next middleware function in this stack
	else
	{
		console.log('Not Logged In');
		next();
		//res.redirect('/login');
	}
}