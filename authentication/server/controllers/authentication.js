const jwt = require('jwt-simple');
const config = require('../config');
const User = require('../models/user');

function tokenForUser(user) {
  const timestamp = new Date().getTime();

  return jwt.encode({
    sub: user.id, // subject
    iat: timestamp //issued-at-time
  }, config.secret)
};

exports.signin = function(req, res, next) {
  res.send({ token: tokenForUser(req.user) });
}

exports.signup = function(req, res, next) {

  const email = req.body.email;
  const password = req.body.password;

  if( !email || !password) {
    return res.status(422).send({
      error: 'You must provide an email and password'
    });
  }

  // See if user already exists
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    // If user exists return error
    if (existingUser) {
      return res.status(422).send({
        error: 'Email is in use'
      });
    }

    // If user doesn't exists create a new record
    const user = new User({
      email: email,
      password: password
    });

    // Respond to request indicating the user was created
    user.save(function(err) {
      if (err) { return next(err); }

      res.json({ token: tokenForUser(user) });
    });

  });
}
