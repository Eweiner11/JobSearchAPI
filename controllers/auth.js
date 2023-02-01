exports.handleLogin = (req, res, next) => {
    try {
        res.status(200).json({})
    } catch (err) {
        next(err)
    }
}