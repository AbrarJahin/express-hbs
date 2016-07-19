module.exports = function(app)
{
	//Resource Routing
	app.use(
				'/',
				require('./middlewares/try_middleware'),
				require('./controllers/index')
			);
	app.use(
				'/users',
				require('./controllers/users')
			);
}