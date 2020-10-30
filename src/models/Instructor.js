import mongoose from "mongoose";

const instructor = new mongoose.Schema({
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

export const Instructor = mongoose.model('Instructor', instructorSchema)