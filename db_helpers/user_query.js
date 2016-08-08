var mongoose	= require('mongoose');
var User 		= mongoose.model('User');
var Q			= require('q');

exports.findByUsername = function(userName, callback)
{
	User.findOne({ user_name: userName}, function(err, user)
	{
		if(err)
		{
			return callback(err);
		}

		//success
		return callback(null, user);
	});
}

exports.findById = function(id, callback)
{
	User.findById(id, function(err, user)
	{
		if(err)
		{
			return callback(err);
		}

		return callback(null, user);
	});
}


exports.getData = function getUser(email)
{
	var foundCars, foundUser;
	return Q(User.findOne({ email: email }).exec())
				.then(function(user)
				{
					foundUser = user;
					return Q(Car.find({ ownerId: user._id }).exec())
				})
				.then(function(cars)
				{
					foundCars = cars;
					return Q(Bicycle.find({ ownerId: foundUser._id }).exec())
				})
				.then(function(bicycles)
				{
					return	{
								bicycles: bicycles,
								cars: foundCars
							};
				});
}