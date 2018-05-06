/*
 * @Author: VickyFan 
 * @Date: 2018-04-23 09:38:59 
 * @Last Modified by:   VickyFan 
 * @Last Modified time: 2018-04-23 09:38:59 
 */
/**
 * Created by Administrator on 2017/10/17.
 */
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var schema = new Schema({
    fieldname:String,
    originalname:String,
    encoding:String,
    mimetype:String,
    destination:String,
    filename:String,
    path:String,
    size:String,
    isTemplate:Number,
    date:{type:Date,default:Date.now},
})                               

schema.plugin(mongoosePaginate);
var Upload=mongoose.model('Upload',schema,'upload');
module.exports=Upload;
