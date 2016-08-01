var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next)
{
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
