const jwt = require('jsonwebtoken');


const authMiddlewares = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader)
    next();
}

module.exports = authMiddlewares;