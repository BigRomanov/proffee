'use strict';

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('index', {
		user: req.user || null
	});
};

exports.comingsoon = function(req, res) {
  res.render('comingsoon', {
    user: req.user || null
  });
};