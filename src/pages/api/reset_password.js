import { connect } from "../../utils/db";
import User from "../../models/User";

async function handler(req, res) {
  try {
    if (!req.method === "POST") {
      throw new Error(`${req.method} not supported.}`);
    }
    await connect();
    const query = { "passwordReset.token": req.body.token };
    const user = await User.findOne(query);
    if (!user) {
      throw new Error("Invalid credentials provided.");
    }
    if (!user.checkResetToken(req.body.token)) {
      throw new Error("Password reset token expired.");
    }
    user.password = req.body.password;

    await user.save();

    res.status(200).json({ message: "Password successfully changed." });
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
}

export default handler;
