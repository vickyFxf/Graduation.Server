/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 11:32:41 
 * @Last Modified by:   VickyFan 
 * @Last Modified time: 2018-04-09 11:32:41 
 */
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;
var schema = new Schema({
  subName: String,
  subSource: String,
  subCategory: String,
  subIntroduction: String,
  creatUserId: String,
  creatUserName:String,
  subTime: { type: Date, default: Date.now },
  isAudit: Number,
})
schema.plugin(mongoosePaginate);
var Subject = mongoose.model('Subject', schema, 'subject')
module.exports = Subject;