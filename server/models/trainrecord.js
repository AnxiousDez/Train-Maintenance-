const mongoose = require('mongoose');

const TrainRecordSchema = new mongoose.Schema({
  coachNumber: { type: String, required: true },
  code: {type: String, required: true},
  arrivalDate: { type: Date, default: Date.now },
  componentsToChange: { type: [String], required: true },
  notes: { type: String, default: '' }
});

module.exports = mongoose.model('TrainRecord', TrainRecordSchema);
