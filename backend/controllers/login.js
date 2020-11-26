const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = require('express').Router();

router.post('/', async (req, res) => {
  const body = req.body;
  const userToLogin = await User.findOne({ userName: body.userName });
  const passwordCorrect =
    userToLogin === null
      ? false
      : await bcrypt.compare(body.password, userToLogin.passwordHash);
  if (!(userToLogin && passwordCorrect)) {
    return res.status(401).send({
      error: 'invalid username or password',
    });
  }
  const userForToken = {
    userName: userToLogin.userName,
    id: userToLogin._id,
  };

  const token = jwt.sign(userForToken, 'hello');

  res.status(200).send({
    token,
    userName: userToLogin.userName,
    name: userToLogin.name,
    todo: userToLogin.todo,
    social: userToLogin.social,
    contacts: userToLogin.contacts,
    target: userToLogin.target,
  });
});

module.exports = router;
