const mongoose = require('mongoose');
const {MONGODB_URI} = require('./config')

const connectDB = async () => {
  const conn = await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB; 
