/* user api schema */
const mongoose = require('mongoose');
const schema = mongoose.Schema;
exports.userSchema = new schema({
    firstname : {
        type : String,
        unique : false
    },
    lastname : {
        type : String,
        unique : false
    },
    email : {
        type : String,
        unique : true,
    },
    password :{
        type : String,
        unique : false
    }
},{timestamps : true});