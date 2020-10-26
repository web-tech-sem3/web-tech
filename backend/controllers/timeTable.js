const router = require('express').Router();
const jwt = require('jsonwebtoken');
const TimeTable = require('../models/timeTable');
const bcrypt = require('bcrypt');

const getTokenFrom = req => {
  const authorization = req.get('authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7);
  }
  return null;
};

router.get('/', async (req, res) => {
  const body = req.body;
  const timeTable = TimeTable.findOne({ id: body.id });
});

router.post('/', async (req, res) => {
  const body = req.body;
  const token = getTokenFrom(req);
  console.log(token);
  const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: 'token missing or invalid' });
  }
  const user = await User.findById(decodedToken.id);
  const timeTableItem = new TimeTable({
    hours: body.hours,
    days: body.days,
    user: user._id,
  });
  const savedTable = await timeTableItem.save();
  await user.save();
  res.json(savedBlog);
});

module.exports = router;
