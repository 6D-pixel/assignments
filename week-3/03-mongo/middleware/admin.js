// Middleware for handling auth
const { Admin } = require("../db");
function adminMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  Admin.findOne({ username: username, password: password }).then((value) => {
    if (value) {
      next();
    } else {
      res.status(404).json({ msg: "Invalid username or password" });
    }
  });
}

module.exports = adminMiddleware;
