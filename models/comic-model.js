const mongoose = require('mongoose');
const {Schema} = mongoose;
const comicSchema = new Schema({
    _id: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: false
    },
    publisher: {
      type: String,
      required: false
    },
    genre: {
      type: String,
      required: false
    },
    pages: {
      type: Number,
      required: false
    },
    rating: {
      type: Number,
      required: false
    },
    synopsis: {
      type: String,
      required: false
    },
    image: {
      type: String,
      required: false
    }
  });

  const Comic = mongoose.model('Comic', comicSchema);

  module.exports = Comic;