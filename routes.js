module.exports = function(app)
{
	app.use(
				'/users',
				require('./controllers/users')
			);
	//Resource Routing
	app.use(
				'/',
				require('./middlewares/try_middleware'),
				//controllers.index
				require('./controllers/index')
			);
}