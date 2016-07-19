module.exports = function(app)
{
	//Resource Routing
	app.use(
				'/',
				require('./middlewares/try_middleware'),
				//controllers.index
				require('./controllers/index')
			);
	app.use(
				'/users',
				require('./controllers/users')
			);
}