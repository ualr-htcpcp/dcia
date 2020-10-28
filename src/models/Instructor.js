import { connect } from "utils/db";
await connect();

const instructor = new mongoose.Schema({
    name :{
        first: String,
        last: String
    },
    courseInstanceSchema: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'courseInstanceSchema'
    }]
}, {timestamps: true})

export const Instructor = mongoose.model('Instructor', instructorSchema)