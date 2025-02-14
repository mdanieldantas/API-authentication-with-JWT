const express = require('express');
const users = require('../models/users');
const authRouter = express.Router();
const jwt = require('jsonwebtoken');

// Define a chave secreta para ser usada na assinatura do token
const secretKey = 'minhaChaveSecreta';

// Define a rota de autenticação
authRouter.post('/register', (req, res) => {
    const { username, password } = req.body;

    // // Valida os dados de entrada
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    const user = { username, password };
    users.push(user);

    res.status(201).json(user);
});

authRouter.post('/login', (req, res) => {
    const {username, password} = req.body;
    
    const user = users.find(user => user.username === username && user.password === password);

    if (!user){
        return res.status(401).json({message: 'Invalid credentials'});
    } 
    const payload = {username}; 
    // Gera o token de autenticação e o retorna na resposta da requisição
   const token = jwt.sign(payload, secretKey,{
// expira em 1 hora
        expiresIn: '1h'
    });

    res.json({token});
});

module.exports = authRouter;