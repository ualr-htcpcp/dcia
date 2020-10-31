import mongoose from "mongoose";

const instructorSchema = new mongoose.Schema({
    name :{
        first: String,
        last: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {timestamps: true})

export default mongoose.models.Instructor ||  mongoose.model('Instructor', instructorSchema)