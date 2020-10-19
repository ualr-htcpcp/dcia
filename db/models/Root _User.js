const mongoose = require('mongoose')

const rootUser = new mongoose.Schema({
    userName: {
      type: String,
      required: true,
      unique: true,
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

  const RootUser = mongoose.model('rootUser', rootUser)