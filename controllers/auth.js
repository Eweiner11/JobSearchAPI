var bcrypt = require('bcrypt-nodejs');
const User = require('../models/users');

const isValidPassword = (password1, password2) => {
    return bcrypt.compareSync(password1, password2);
}

exports.handleLogin = async (req, res, next) => {
    const {userName, password} = req.body
    try {
        const user = await User.findOne({userName:userName})
        if(!isValidPassword(password,user.password)){
            throw new Error('invalid password')
        }
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}