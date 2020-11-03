import { connect } from "../../utils/db";
import User from "../../models/User";
import { createExpirationDate, createResetToken } from "../../utils/auth";

const incorrectEmailMessage = "Account not found.";
const revokedMessage = "Account access has been revoked.";
const successMessage = "Password reset link emailed successfully.";

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
    if (user.accessLevel === "revoked") {
      throw new Error(revokedMessage);
    }

    user.passwordReset = {
      token: createResetToken(),
      expiration: createExpirationDate(new Date()),
    };

    await user.save();
    res.status(200).json({ message: successMessage });
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
}

export default handler;
