var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var Schema = mongoose.Schema;

var schema = new Schema({
    className:String,
    classType:Number
})

schema.plugin(mongoosePaginate);
var Classification=mongoose.model('Classification',schema,'classification')
module.exports=Classification;