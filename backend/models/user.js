const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    unique: true,
  },
  name: String,
  passwordHash: String,
  timeTable: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TimeTable',
  },
  target: Number,
  contacts: [String],
  social: {
    type: Map,
    of: String,
  },
  todo: {
    lanes: [
      {
        id: String,
        title: String,
        cards: [
          { id: String, title: String, description: String, label: String },
        ],
      },
    ],
  },
});

userSchema.plugin(uniqueValidator);

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
