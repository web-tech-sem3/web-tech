const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const passwordHash = await bcrypt.hash(body.password, 10);
  const newUser = new User({
    userName: body.userName,
    name: body.name,
    passwordHash: passwordHash,
    todo: {
      lanes: [
        {
          id: 'lane1',
          title: 'Planned Tasks',
          cards: [],
        },
        {
          id: 'lane2',
          title: 'In Progress',
          cards: [],
        },
        {
          id: 'lane3',
          title: 'Completed',
          cards: [],
        },
      ],
    },
    target: 0,
  });
  try {
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (e) {
    res.status(204).end();
  }
});

router.put('/target', async (req, res) => {
  const body = req.body;
  const result = await User.findOneAndUpdate(
    {
      userName: body.userName,
    },
    { target: body.target }
  );
  res.json(result);
});

router.put('/contacts', async (req, res) => {
  const body = req.body;
  const result = await User.findOneAndUpdate(
    { userName: body.userName },
    { contacts: body.contacts }
  );
  res.json(result);
});

router.put('/social', async (req, res) => {
  const body = req.body;
  const result = await User.findOneAndUpdate(
    { userName: body.userName },
    { social: body.social }
  );
  res.json(result);
});

router.put('/todo', async (req, res) => {
  const body = req.body;
  const result = await User.findOneAndUpdate(
    { userName: body.userName },
    { todo: body.todo }
  );
  res.json(result);
});

router.get('/todo/:userName', async (req, res) => {
  const userName = req.params.userName;
  const result = await User.findOne({ userName: userName });
  return res.json(result);
});

module.exports = router;
