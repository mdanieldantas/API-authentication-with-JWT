const express = require('express');
const authMiddleware = require('../middlewares/auth-middlewares');

const protectedRouter = express.Router();

protectedRouter.get('/dashboard', authMiddleware, (req, res) => {
    const username = req.authenticatedUser.username;
    res.json({ message: `Você está na área protegida. Bem vindo ${username}`});
});

module.exports = protectedRouter;