const mongoose = require('mongoose');
module.exports = () => {
    mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true });
    mongoose.connection.on('open',()=>{
        console.log('mongoDB: connected');
    });
    mongoose.connection.on('error', (err)=>{
        console.log('failed');
    });
    mongoose.Promise = global.Promise;
}