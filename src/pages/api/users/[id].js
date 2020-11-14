import nextConnect from "next-connect";
import middleware from "../../../middleware";
import User from "../../../models/User";
import { forbiddenUnlessRoot } from "utils/auth";

const handler = nextConnect();
handler.use(middleware);

handler.patch(async (req, res) => {
  await forbiddenUnlessRoot(req, res);

  const {
    query: { id },
    body: { accessLevel },
  } = req;

  if (!["instructor", "admin", "revoked"].includes(accessLevel)) {
    return res.status(422).json({
      error: true,
      message: `"${accessLevel}" is not a valid access level`,
    });
  }

  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: id, accessLevel: { $ne: "root" } },
      { accessLevel },
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
