import { connect } from "utils/db";
await connect();

const credentialSchema = new mongoose.Schema({
    password: String,
    email: String
});

const user = new mongoose.Schema({
    name: {
        first: String,
        last: String,
        required: true
    },
    accessLevel: {
        type: String,
        enum: [administrator, instructor, revoked],
        required: true
    },
    credentials: credentialSchema
})

export const User = mongoose.model('User', userSchema)