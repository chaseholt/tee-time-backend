const { TeeTime } = require('../models');

exports.getAllTeeTimes = async (req, res) => {
  try {
    const teeTimes = await TeeTime.findAll();
    res.status(200).json(teeTimes);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

exports.createTeeTime = async (req, res) => {
  try {
    const teeTime = await TeeTime.create(req.body);
    res.status(201).json(teeTime);
  } catch (error) {
    console.error(error);
    res.status(400).send('Bad request');
  }
};
