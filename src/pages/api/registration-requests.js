import middleware from "middleware";
import RegistrationRequest from "models/RegistrationRequest";
import nextConnect from "next-connect";
import { authenticate, forbiddenUnlessRoot } from "utils/auth";

const handler = nextConnect();
handler.use(middleware);
handler.use(authenticate);
handler.use(forbiddenUnlessRoot);

handler.get(async (req, res) => {
  const registrationRequests = await RegistrationRequest.find(
    { requestStatus: { $in: ["pending", "denied"] } },
    { password: 0 },
    { sort: "createdAt _id" }
  ).lean();

  res.json(registrationRequests);
});

export default handler;
