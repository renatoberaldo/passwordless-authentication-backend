const client = require('../configs/stytch');

const authMiddleware = (req, res, next) => {
  const sessionToken = req.headers.sessiontoken;
  client.sessions
    .authenticate({ session_token: sessionToken })
    .then(() => {
      next();
    })
    .catch(err => {
      res.status(401).json(err);
    });
};

module.exports = authMiddleware;
