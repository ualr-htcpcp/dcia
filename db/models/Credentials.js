const mongoose = require('mongoose')

const credentials = new mongoose.Schema({
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'instructor'
    },
    administrator: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'administrator'
    },
    rootUser: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'rootUser'
    }
  }, {timestamps: true})

const Credentials = mongoose.model('credentials', credentials)