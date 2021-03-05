// handle unauthorised requests (no bearer token on protected route)
module.exports = function () {
    return function (err, req, res, next) {
        if (err.name === 'UnauthorizedError') {
            return res.status(401).send({error: 'Unauthorised'});
        }
        next();
    }
}