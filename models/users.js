const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: { type: String },
    password: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    createdAt: { type: Date, default: new Date() },
    modifiedAt: { type: Date, default: null },
    status: { type: Boolean, default: true }
});


const User = mongoose.model('User', UserSchema);

module.exports = User