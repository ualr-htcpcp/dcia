const mongoose = require('mongoose')

const adminstrator = new mongoose.Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    credentials: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'credentials'
    }
 }, {timestamps: true})

const Administrator = mongoose.model('administrator', administrator)