import nextConnect from "next-connect";
import { forbiddenUnlessRoot } from "utils/auth";
import middleware from "../../middleware";
import User from "models/User";

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req, res) => {
  await forbiddenUnlessRoot(req, res);

  const users = await User.find(
    { accessLevel: { $ne: "root" } },
    { password: 0 },
    { sort: "accessLevel email _id" }
  ).lean();

  res.json(users);
});

export default handler;
