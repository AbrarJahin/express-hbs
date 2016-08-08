var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = require("../models/post");

/* GET home page. */
router.get('/', function(req, res, next)
{
	var user = new Post({
							created_by: ""+Math.random()
						}).save();

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
