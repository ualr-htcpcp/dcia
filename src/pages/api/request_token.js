import { connect } from "../../utils/db";
import User from "../../models/User";
import { createExpirationDate, createResetToken } from "../../utils/auth";

const incorrectEmailMessage = "Invalid email address provided.";
const successMessage = "Generated reset token successfully.";

async function handler(req, res) {
  try {
    if (!req.method === "POST") {
      throw new Error(`${req.method} not supported.}`);
    }
    await connect();
    const query = { email: req.body.email };
    const user = await User.findOne(query);

    if (!user) {
      throw new Error(incorrectEmailMessage);
    }

    user.passwordReset = {
      token: createResetToken(),
      expiration: createExpirationDate(new Date()),
    };

    await user.save();
    res.status(200).json({ message: successMessage });
  } catch (err) {
    console.log(err.typ);
    res.status(400).json({ error: true, message: err.message });
  }
}

export default handler;
