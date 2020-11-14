import nextConnect from "next-connect";
import { forbiddenUnlessRoot } from "utils/auth";
import middleware from "../../middleware";
import RegistrationRequest from "models/RegistrationRequest";

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req, res) => {
  await forbiddenUnlessRoot(req, res);

  const registrationRequests = await RegistrationRequest.find(
    { requestStatus: { $in: ["pending", "denied"] } },
    { password: 0 },
    { sort: "createdAt _id" }
  ).lean();

  res.json(registrationRequests);
});

export default handler;
