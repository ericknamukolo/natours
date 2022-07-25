const mongoose = require('mongoose');

const tourSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour name is required'],
    unique: true,
  },
  rating: {
    type: String,
    default: 4.6,
  },
  price: {
    type: Number,
    required: [true, 'A tour price is required'],
  },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
