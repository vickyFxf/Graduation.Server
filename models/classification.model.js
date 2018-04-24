/*
 * @Author: VickyFan 
 * @Date: 2018-04-23 09:38:59 
 * @Last Modified by:   VickyFan 
 * @Last Modified time: 2018-04-23 09:38:59 
 */
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;
var schema = new Schema({
  className:String,
  classType:Number
})
schema.plugin(mongoosePaginate);
var Classification = mongoose.model('Classification', schema, 'classification')
module.exports = Classification;
