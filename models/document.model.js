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
  docStudentId:String,
  docStudentName:String,
  //任务书
  docName: String,//文件名
  target: String,//目标
  content: String,//内容             
  shouldDo: String,//应该要完成                                                                                                
  plan: String,//计划
  literature:String,//参考文献
  //开题报告
  reason:String,//目标
  keyquestion:String, //关键问题
  newValue:String,//创新价值
  //翻译
  translate:String,//翻译 
  //文献综述
  abstract:String,//摘要   
  keyWord:String,//关键词
  upDate: { type: Date, default: Date.now },                                      
  isAudit: Number,
  selectedBy:Number,//1暂被选，2被选，3未被选
  applyReason:String,//申请理由
})
schema.plugin(mongoosePaginate);
var Document = mongoose.model('Document', schema, 'document')
module.exports = Document;