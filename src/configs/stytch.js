const stytch = require('stytch');
require('dotenv').config();

// Connect with Stytch App
const client = new stytch.Client({
  project_id: process.env.STYTCH_PROTECT_ID,
  secret: process.env.STYTCH_SECRET,
  env: stytch.envs.test,
});

module.exports = client;
