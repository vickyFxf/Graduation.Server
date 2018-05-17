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
    studentId:String,
    teacherId:String,
    docType:String,
    date:{type:Date,default:Date.now},
})                               

schema.plugin(mongoosePaginate);
var TeacherDocument=mongoose.model('TeacherDocument',schema,'teacherDocument');
module.exports=TeacherDocument;