const jwt = require("jsonwebtoken");
const secret = require("../config");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  const token = req.headers.authorization;
  const words = token.split(" ");
  const jwtToken = words[1];
  const decodedValue = jwt.verify(jwtToken, secret);
  if (decodedValue.username) {
    next();
  } else {
    res.status(403).json({ msg: "you are not authorized to access" });
  }
}

module.exports = userMiddleware;
