import mongoose from "mongoose";

const student =  new mongoose.Schema({
    name: {
      first: String,
      last: String,
      required: true
    },
    tNumber: {
      type: Number,
      required: true,
      unigue: true,
      min: 0,
      max: 99999999
    }
  }, {timestamps: true})

  export const Student = mongoose.model('Student', studentSchema)