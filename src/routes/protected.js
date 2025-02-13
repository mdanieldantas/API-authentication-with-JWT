const express = require('express');
const authMiddleware = require('../middlewares/auth-middlewares');

const protectedRouter = express.Router();

protectedRouter.get('/dashboard', authMiddleware, (req, res) => {
    res.json({ message: 'Você está na área protegida' });
});

module.exports = protectedRouter;