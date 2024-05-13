const Murti = require('../models/Murti');

exports.bookMurti = async (req, res, next) => {
  try {
    const { name, email, phoneNumber, height, material, additionalRequirements } = req.body;

    const newMurti = new Murti({
      name,
      email,
      phoneNumber,
      height,
      material,
      additionalRequirements,
    });

    const savedMurti = await newMurti.save();

    res.status(201).json(savedMurti);
  } catch (error) {
    next(error);
  }
};

exports.getMurtis = async (req, res, next) => {
  try {
    const murtis = await Murti.find();
    res.status(200).json(murtis);
  } catch (error) {
    next(error);
  }
};