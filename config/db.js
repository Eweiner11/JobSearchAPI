require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_CONNECTION_URI, {
    useNewUrlParser: true,
  });

  console.log('MongoDB Connected!');
};

module.exports = connectDB;
