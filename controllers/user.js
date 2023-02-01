const User = require('../models/users')
var bcrypt = require('bcrypt-nodejs');

const generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

exports.createUser = async (req, res, next) => {
    const { userName, password } = req.body
    if (!userName || !password) throw new Error('Must Inlcude valid Username and Password')
    let userToAdd = {
        userName,
        password: generateHash(password),
        firstName: 'Eric',
        lastName: 'Weiner'
    }
    try {
        let added = await User.create(userToAdd)
        res.status(200).json(added)
    } catch (err) {
        // next(err)
        console.log(err)
    }
}

exports.removeUserById = async (req, res, next) => {
    const { id } = req.params
    if (!id) throw new Error('Must Inlcude user_id ')
    try {
        let userToRemove = await User.findByIdAndRemove(id)
        res.status(200).json(userToRemove)
    } catch (err) {
        // next(err)
        console.log(err)
    }
}