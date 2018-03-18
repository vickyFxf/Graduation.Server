/**
 * 用户模型
 * Created by Vicky on 2018/03/11.
 */
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var Schema = mongoose.Schema;

var schema = new Schema({
    id:Number,
    permissions:Number,
    name:String,
    sex:Number,
    college:String,
    major:String,
    classs:Number,
    email:String,
    tel:String,
    password:String,
})

schema.plugin(mongoosePaginate);
var User=mongoose.model('Users',schema,'users')
module.exports=User;