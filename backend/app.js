const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const loginRouter = require('./controllers/login');
const userRouter = require('./controllers/user');
const timeTableRouter = require('./controllers/timeTable');

console.log('connecting to', process.env.MONGODB_URI);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch(error => {
    console.error('error connection to MongoDB:', error.message);
  });

app.use(cors());
app.use(express.json());

app.use('/api/login', loginRouter);
app.use('/api/timeTable', timeTableRouter);
app.use('/api/user', userRouter);

module.exports = app;
