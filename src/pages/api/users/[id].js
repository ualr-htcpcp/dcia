import middleware from "middleware";
import Instructor from "models/Instructor";
import User from "models/User";
import nextConnect from "next-connect";
import { authenticate, forbiddenUnlessRoot } from "utils/auth";

const handler = nextConnect();
handler.use(middleware);
handler.use(authenticate);
handler.use(forbiddenUnlessRoot);

handler.patch(async (req, res) => {
  const {
    query: { id },
    body: { accessLevel, instructor: instructorId },
  } = req;

  if (!["instructor", "admin", "revoked"].includes(accessLevel)) {
    return res.status(422).json({
      error: true,
      message: `"${accessLevel}" is not a valid access level`,
    });
  }

  try {
    let instructor = null;
    if (instructorId) {
      instructor = await Instructor.findOne({ _id: instructorId });
    }

    const updatedUser = await User.findOneAndUpdate(
      { _id: id, accessLevel: { $ne: "root" } },
      { accessLevel, instructor },
      { new: true }
    )
      .select({ password: 0 })
      .lean();
    res.status(200).json({ data: updatedUser });
  } catch (err) {
    res.status(422).json({ error: true, message: err.message });
  }
});

export default handler;
