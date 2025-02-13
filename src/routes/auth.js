const express = require('express');
const users = require('../models/users');
const authRouter = express.Router();

// Define a rota de autenticação
authRouter.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Valida os dados de entrada
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    const user = { username, password };
    users.push(user);

    res.status(201).json(user);
});

module.exports = authRouter;