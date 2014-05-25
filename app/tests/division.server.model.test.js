'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	Division = mongoose.model('Division');

/**
 * Globals
 */
var division, division2;

/**
 * Unit tests
 */
describe('Division Model Unit Tests:', function() {
	beforeEach(function(done) {
		division = new Division({
			name: "II.1",
			level: 2
		});

		division2 = new Division({
			name: "II.1",
			level: 2
		});

		done();
	});

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			return division.save(function(err) {
				should.not.exist(err);
				done();
			});
		});

		it('should fail to save an existing division again', function(done) {
			division.save();
			return division2.save(function(err) {
				should.exist(err);
				done();
			});
		});
		
	});

	afterEach(function(done) { 
		Division.remove().exec();
		done();
	});
});