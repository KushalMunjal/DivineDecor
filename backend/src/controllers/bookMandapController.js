// controllers/bookMandapController.js

const Mandap = require('../models/Mandap');

exports.bookMandap = async (req, res, next) => {
  try {
    const { name, email, phoneNumber, date, location, decorations, additionalRequirements } = req.body;

    const newMandap = new Mandap({
      name,
      email,
      phoneNumber,
      date,
      location,
      decorations,
      additionalRequirements,
    });

    const savedMandap = await newMandap.save();

    res.status(201).json(savedMandap);
  } catch (error) {
    next(error);
  }
};

exports.fetchAllMandapBookings = async (req, res, next) => {
    try {
      const mandapBookings = await Mandap.find();
      res.status(200).json(mandapBookings);
    } catch (error) {
      next(error);
    }
  };