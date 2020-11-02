import nextConnect from "next-connect";
import middleware from "../../../middleware";
import User from "../../../models/User";
import { getSession } from "next-auth/client";

const handler = nextConnect();
handler.use(middleware);

handler.patch(async (req, res) => {
  const session = await getSession({ req });
  const {
    query: { id },
    body: { accessLevel },
  } = req;

  if (!session.user.accessLevel === "root") {
    return res.status(403).json({ error: true, message: "must be root user" });
  }
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
