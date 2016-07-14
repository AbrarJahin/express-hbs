module.exports = function(app)
{
	// catch 404 and forward to error handler
	app.use(function(req, res, next)
	{
		var err = new Error('Not Found');
		err.status = 404;
		next(err);
	});

	// Feel Free to add your custom error handlers here
	app.use(function(err, req, res, next)
	{
		console.error(err.stack);
		//res.status(500).send('Something broke!');
		if (res.headersSent)
		{
			return next(err);
		}
		else if (req.xhr)
		{
			res.status(500).send({ error: 'Something failed!' });
		}
		else
		{
			next(err);
		}
		res.status(500);
		res.render('error', { error: err });
	});

	// development error handler
	// will print stacktrace
	if (app.get('env') === 'development')
	{
		app.use(function(err, req, res, next)
		{
			res.status(err.status || 500);
			res.render('error', {
				message: err.message,
				error: err
			});
		});
	}

	// production error handler
	// no stacktraces leaked to user
	app.use(function(err, req, res, next)
	{
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: {}
		});
	});
}