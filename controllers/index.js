var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require("../models/user");

/* GET home page. */
router.get('/', function(req, res, next)
{
	var user = new User({
							userSchema: ""+Math.random(),
							password: ""+Math.random()
						});

	//save model to MongoDB
	user.save(function (err)
	{
		if (err)
		{
			console.log("not saved");
			return err;
		}
		else
		{
			console.log("Post saved");
		}
	});

	res.render(
				'index',
				{
					title		:	'Express',
					site_name	:	'Our Site',
					layout		:	'templates/layout'
				}
			);
});

router.get('/try', function(req, res, next)
{
	res.render(
				'message'
			);
});

module.exports = router;
