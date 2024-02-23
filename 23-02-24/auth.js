const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === "Chiara") {
    req.user = { name: "Chiara" };
    next();
  } else {
    res.status(401).send(`mi dispiace ${user} non sei autorizzato ad accedere`);
  }
};

module.exports = authorize;
