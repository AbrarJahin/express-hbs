var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = require("../models/post");		//Import Model

/* GET home page. */
router.get('/', function(req, res, next)
{
	var post = new Post({created_by: ""+Math.random()});

    post.save(function(error, data) {
      if(error) {
         return res.status(500).send({error: 'Error occurred during create post'});
      }
      return res.render('index',{
          title       :   'Express',
          site_name   :   'Our Site',
          layout      :   'templates/layout'
      });
   });

	// res.render(
	// 				'index',
	// 				{
	// 					title		:	'Express',
	// 					site_name	:	'Our Site',
	// 					layout		:	'templates/layout'
	// 				}
	// 			);
});

router.get('/try', function(req, res, next)
{
	res.render(
				'message'
			);
});

module.exports = router;
