const client = require('../configs/stytch');

async function login(req, res, next) {
  try {
    const email = req.body.email;
    const params = {
      email,
      login_magic_link_url: 'http://localhost:3000/auth',
      signup_magic_link_url: 'http://localhost:3000/auth',
    };

    const response = await client.magicLinks.email.loginOrCreate(params);

    res
      .status(200)
      .json(
        'Email sent! Please verify your email an click in the Login Buttom there!'
      );
  } catch (err) {
    res.status(400).json(err.error_message);
  }
}

async function auth(req, res, next) {
  try {
    const token = req.body.token;
    const sessionToken = await client.magicLinks.authenticate(token, {
      session_duration_minutes: 30,
    });
    res.json(sessionToken);
  } catch (error) {
    res.json(error);
  }
}

async function test(req, res, next) {
  res.status(200).json('Congrats! This user is authenticated!');
}

module.exports = {
  login,
  auth,
  test,
};
