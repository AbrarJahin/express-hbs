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

router.get('/asd', function(req, res, next)
{
	res.json(
				{
					title		:	'Express',
					site_name	:	'Our Site',
					layout		:	'templates/layout'
				}
			);
});

module.exports = router;
