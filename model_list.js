//Register your models here - file name
var model_list	=	[
						"user",
						"post"
					];

module.exports = function(app)
{
	model_list.forEach(function(value)
	{
		require('./models/'+value);
	});
}
