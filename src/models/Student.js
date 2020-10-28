import { connect } from "utils/db";
await connect();


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
    },
    courseInstanceSchema: [{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'courseInstanceSchema'
    }]
  }, {timestamps: true})

  export const Student = mongoose.model('Student', studentSchema)