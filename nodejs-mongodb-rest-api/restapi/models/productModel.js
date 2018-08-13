'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Schema = new Schema({

  product_name: { type: String, Required:  'Product name cannot be left blank.' },
  
  price:    { type: String,     Required:  'Product price cannot be left blank.'},
  
  category: { type: String ,    Required:  'Product category cannot be left blank'}

});

module.exports = mongoose.model('Products', Schema);