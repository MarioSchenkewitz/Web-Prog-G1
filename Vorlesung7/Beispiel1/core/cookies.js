function set(req, res) {
    if (req.query.username) {
      const cookieParameter = {
        maxAge: 1000 * 60 * 4,
        expires: new Date(Date.now() + 1000 * 60 * 5),
        sameSite: "strict",
        secure: true
      };
  
      res.cookie(
        "data",
        JSON.stringify({ text: "Hello World" }),
        cookieParameter
      );
  
      res.cookie("loggedIn", 1, {
        ...cookieParameter,   // "..." enpackt die daten von oben,
        httpOnly: true,       // damit weitere eigenschaften mit hinzugegeben werden können
        path: "/"
      });
  
      res.cookie("username", req.query.username, {
        ...cookieParameter,
        httpOnly: true,
        path: "/data"
      });
    }
  }
  
  function unset(res) {
    res.clearCookie("loggedIn");
  }
  
  function username(req) {
    return req.cookies["username"];
  }
  
  module.exports = { set, unset, username };
  