const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connectDB = async () => {
  await mongoose.connect(`mongodb://localhost:27017/jobsearch`, {
    useNewUrlParser: true,
  });

  console.log('MongoDB Connected!');
};

module.exports = connectDB;
