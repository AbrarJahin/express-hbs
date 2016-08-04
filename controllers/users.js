var express = require('express');
var router = express.Router();
// var model = require('../models/user');

router.get('/json', function(req, res, next)
{
	res.json(
				{
					title		:	'Express',
					site_name	:	'Our Site',
					layout		:	{
										title		:	'Express',
										site_name	:	'Our Site',
										array		:	[
															'templates',
															'3 Asd',
															3,
															'templates'
														]
									}
				}
			);
});

router.get(
			'/',
			require('../middlewares/try_middleware'),
			function(req, res, next)
			{
				res.send('respond with a resource');
			});

module.exports = router;
