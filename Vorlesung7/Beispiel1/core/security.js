function handleSecurity(req, res, next) {
    if (!req.cookies.loggedIn) {
      res.status(401).send("Unauthorized");
    } else {
      next();
    }
  }
  
  module.exports = handleSecurity;
  