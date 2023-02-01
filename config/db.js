const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connectDB = async () => {
  try{

    await mongoose.connect(process.env.DATABASE_CONNECTION);
    console.log('MongoDB Connected!');
  }catch(err){
    console.log(err)
  }
console.log('done')
};

module.exports = connectDB;