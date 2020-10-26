const mongoose = require('mongoose');

const timeTableSchema = mongoose.Schema({
  hours: Number,
  days: [
    {
      '0-1': Boolean,
      '1-2': Boolean,
      '2-3': Boolean,
      '3-4': Boolean,
      '4-5': Boolean,
      '5-6': Boolean,
      '6-7': Boolean,
      '7-8': Boolean,
      '8-9': Boolean,
      '9-10': Boolean,
      '10-11': Boolean,
      '11-12': Boolean,
      '12-13': Boolean,
      '13-14': Boolean,
      '14-15': Boolean,
      '15-16': Boolean,
      '16-17': Boolean,
      '17-18': Boolean,
      '18-19': Boolean,
      '19-20': Boolean,
      '20-21': Boolean,
      '21-22': Boolean,
      '22-23': Boolean,
      '23-00': Boolean,
    },
  ],
  user: mongoose.Schema.Types.ObjectId,
});

timeTableSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const TimeTable = mongoose.model('TimeTable', timeTableSchema);

module.exports = TimeTable;
