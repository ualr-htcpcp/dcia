import { connect } from "utils/db";
await connect();


const course = new mongoose.Schema({
    title: { 
      type: String,
      required: true
    },
    courseNumber: {
      type: Number,
      min: 1000,
      max: 9999,
      required: true,
      unique: true
    },
    courseInstanceSchema: [{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'courseInstanceSchema'
    }],
    studentOutcomeSchema: [{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'studentOutcomeSchema'
    }]
  }, {timestamps: true})

export const Course = mongoose.model('Course', courseSchema)