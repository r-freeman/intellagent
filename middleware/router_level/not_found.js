// middleware for handling routes that do not exist
module.exports = function () {
    return function (req, res, next) {
        if (!req.route) {
            return res.status(404).send({error: 'Not found'});
        }
        next();
    }
}