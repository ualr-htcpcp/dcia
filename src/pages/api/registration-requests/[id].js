import nextConnect from "next-connect";
import middleware from "../../../middleware";
import RegistrationRequest from "../../../models/RegistrationRequest";

const handler = nextConnect();
handler.use(middleware);

handler.patch(async (req, res) => {
  const {
    query: { id },
    body: { requestStatus },
  } = req;

  try {
    const registrationRequest = await RegistrationRequest.findById(id);
    if (registrationRequest) {
      await registrationRequest.update({ requestStatus });
      // if root user AND registration request pending or denied
      res.status(200).json({ message: `updated ${id} to ${requestStatus}` });
    } else {
      res.status(404).json({ error: true, message: "not found" });
    }
  } catch (err) {
    res.status(422).json({ error: true, message: err.message });
  }
});

export default handler;
