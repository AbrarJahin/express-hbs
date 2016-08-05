module.exports = function(app)
{
	//Add your partial's folders or any partial here
	require('hbs').registerPartials(__dirname + '/views/partials');	//Registering Partials Directory
}
