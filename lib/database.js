const mongoose = require('mongoose');
const DBURL = process.env.DBURL


module.exports =() => {
    mongoose.connect(DBURL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
    mongoose.connection.on('connected', function(){
        console.log("Mongoose default connection is open and connected");
    });
    mongoose.connection.on('error', function(err){
        console.log("Mongoose default connection has occured "+err+" error");
    });
    mongoose.connection.on('disconnected', function(){
        console.log("Mongoose default connection is disconnected");
    });
    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log("Mongoose default connection is disconnected due to application termination");
            process.exit(0)
        });
    });
};