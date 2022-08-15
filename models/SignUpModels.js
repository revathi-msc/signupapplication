const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        requried:true
    },
    username:{
        type:String,
        requried:true
    },
    email:{
        type:String,
        requried:true
    },
    password:{
        type:String,
        requried:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('mytable', signUpTemplate)



