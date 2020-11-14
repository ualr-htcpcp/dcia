import nextConnect from "next-connect";
import middleware from "../../../middleware";
import RegistrationRequest from "../../../models/RegistrationRequest";
import User from "../../../models/User";
import { forbiddenUnlessRoot } from "utils/auth";

const handler = nextConnect();
handler.use(middleware);

handler.patch(async (req, res) => {
  await forbiddenUnlessRoot(req, res);

  const {
    query: { id },
    body: { accessLevel, requestStatus },
  } = req;

  if (!["instructor", "admin"].includes(accessLevel)) {
    return res.status(422).json({
      error: true,
      message: `"${accessLevel}" is not a valid access level`,
    });
  }
  if (!["approved", "denied"].includes(requestStatus)) {
    return res.status(422).json({
      error: true,
      message: `"${requestStatus}" is not a valid request status`,
    });
  }

  try {
    const updatedRegistrationRequest = await RegistrationRequest.findOneAndUpdate(
      { _id: id, accessLevel: { $ne: "root" } },
      { requestStatus },
      { new: true }
    ).lean();
    if (requestStatus === "approved") {
      const { email, password } = updatedRegistrationRequest;
      await User.create({ email, password, accessLevel });
    }
    res
      .status(200)
      .json({ data: { ...updatedRegistrationRequest, password: undefined } });
  } catch (err) {
    res.status(422).json({ error: true, message: err.message });
  }
});

export default handler;
