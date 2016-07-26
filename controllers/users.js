var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next)
{
	res.send('respond with a resource');
});

router.get('/asd', function(req, res, next)
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

module.exports = router;
