/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 11:32:55 
 * @Last Modified by:   VickyFan 
 * @Last Modified time: 2018-04-09 11:32:55 
 */
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;
var schema = new Schema({
  id: String,
  permissions: Number,
  name: String,
  sex: Number,
  college: String,
  major: String,
  class: Number,
  title:Number,
  position:Number,
  email: String,
  tel: String,
  password: String,
})
schema.plugin(mongoosePaginate);
var User = mongoose.model('User', schema, 'user')
module.exports = User;