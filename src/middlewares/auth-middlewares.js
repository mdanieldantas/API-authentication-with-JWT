const jwt = require("jsonwebtoken");
const users = require("../models/users");

const secretKey = "minhaChaveSecreta";

const authMiddlewares = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Token not provided" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decodedToken = jwt.verify(token, secretKey);
    console.log(decodedToken);
    const user = users.find((user) => user.username === decodedToken.username);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    req.authenticatedUser = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token invalid" });
  }
  console.log(token);
  next();
};

module.exports = authMiddlewares;
