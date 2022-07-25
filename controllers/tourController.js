const Tour = require('./../models/tourModel');

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestedAt: newDate,
    // results: tours.length,
    data: {
      //  tours,
    },
  });
};

exports.getTour = (req, res) => {
  //  const tour = tours.at(req.params.id);
  res.status(200).json({
    status: 'success',
    data: {
      //   tour,
    },
  });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: 'updated tour here',
  });
};

exports.deleteTour = (req, res) => {};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    return res.status(201).json({
      status: 'success',
      data: {
        newTour,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
