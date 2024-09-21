const express = require('express');
const router = express.Router();
const TrainRecord = require('../models/trainrecord');

// Create a new train record
router.post('/', async (req, res) => {
  const { compartmentNumber, componentsToChange, notes } = req.body;
  const trainRecord = new TrainRecord({ compartmentNumber, componentsToChange, notes });
  try {
    await trainRecord.save();
    res.status(201).send(trainRecord);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all train records
router.get('/', async (req, res) => {
  try {
    const records = await TrainRecord.find();
    res.status(200).send(records);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
