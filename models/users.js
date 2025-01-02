const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{type:String, unique:true, required:true},
    firstName:{ type:String, required:true},
    lastName:{ type:String, required:true},
    email:{type:String, required:true, unique:true },
    password:{type:String, required:true},
    joineDate: {type:Date, default: Date.now},
    
})

module.exports = mongoose.model('User',userSchema)