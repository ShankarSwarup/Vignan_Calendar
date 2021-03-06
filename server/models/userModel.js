const mongoose = require('mongoose')

const User = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
}
    ,{
        collection : 'vignan-calendar'
    }
)

const model = mongoose.model('UserData',User)

module.exports = model