'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	_ = require('lodash');

/**
 * Create a Division
 */
exports.create = function(req, res) {
	var division = new Division(req);
  
  division.save(function(err) {
    if (err) {
      return res.send(400, {
        message: getErrorMessage(err)
      });
    } else {
      res.jsonp(division);
    }
  });
};

/**
 * Show the current Division
 */
exports.read = function(req, res) {
	res.jsonp(req.division);
};

/**
 * Delete an Division
 */
exports.delete = function(req, res) {
  var division = req.division;

  division.remove(function(err) {
    if (err) {
      return res.send(400, {
        message: getErrorMessage(err)
      });
    } else {
      res.jsonp(division);
    }
  });	
};

/**
 * Division middleware
 */
exports.divisionByID = function(req, res, next, id) {
  Division.findById(id).exec(function(err, division) {
    if (err) return next(err);
    if (!division) return next(new Error('Failed to load division ' + id));
    req.division = division;
    next();
  });
};
