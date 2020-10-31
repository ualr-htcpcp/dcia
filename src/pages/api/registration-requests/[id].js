import nextConnect from "next-connect";
import middleware from "../../../middleware";
import RegistrationRequest from "../../../models/RegistrationRequest";
import { getSession } from "next-auth/client";

const handler = nextConnect();
handler.use(middleware);

handler.patch(async (req, res) => {
  const session = await getSession({ req });
  const {
    query: { id },
    body: { accessLevel, requestStatus },
  } = req;

  if (!session.user.accessLevel === "root") {
    return res.status(403).json({ error: true, message: "must be root user" });
  }
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
    const registrationRequest = await RegistrationRequest.findById(id);
    if (registrationRequest) {
      await registrationRequest.update({ accessLevel, requestStatus });
      res.status(200).json({ message: `updated ${id} to ${requestStatus}` });
    } else {
      res.status(404).json({ error: true, message: "not found" });
    }
  } catch (err) {
    res.status(422).json({ error: true, message: err.message });
  }
});

export default handler;
