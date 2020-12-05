import middleware from "middleware";
import User from "models/User";
import nextConnect from "next-connect";
import { authenticate, forbiddenUnlessRoot } from "utils/auth";

const handler = nextConnect();
handler.use(middleware);
handler.use(authenticate);
handler.use(forbiddenUnlessRoot);

handler.get(async (req, res) => {
  const users = await User.find(
    { accessLevel: { $ne: "root" } },
    { password: 0 },
    { sort: "accessLevel email _id" }
  ).lean();

  res.json(users);
});

export default handler;
