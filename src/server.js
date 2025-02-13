const express = require('express');
const authRouter = require('./routes/auth');
const protectedRouter = require('./routes/protected');
const app = express();

app.use(express.json());
app.use("/auth", authRouter);
app.use("/protected", protectedRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {    
    console.log(`Server is running on port ${PORT}`);
});