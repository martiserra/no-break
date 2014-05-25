'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
  autoIncrement = require('mongoose-auto-increment');

/**
 * Division Schema
 */
var DivisionSchema = new Schema({
	name: {
    type: String,
    default: '',
    unique: true,
    required: 'name cannot be blank'
  },
  level: {
    type: Number,
    min: 1
  }
});

DivisionSchema.plugin(autoIncrement.plugin, 'Division');
mongoose.model('Division', DivisionSchema);