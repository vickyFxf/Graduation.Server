/**
 * 毕设题目模型
 * Created by Vicky on 2018/03/11.
 */
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var Schema = mongoose.Schema;

var schema = new Schema({
    subName:String,
    subSource:String,
    subCategory:String,
    subIntroduction:String,
    creatUserId:String,
    subTime:{ type: Date, default: Date.now },
    isAudit:Number,
})

schema.plugin(mongoosePaginate);
var Subject=mongoose.model('Subject',schema,'subject')
module.exports=Subject;