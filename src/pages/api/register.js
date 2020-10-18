import nextConnect from "next-connect";
import middleware from "../../middleware";
import RegistrationRequest from "../../models/RegistrationRequest";

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req, res) => {
  try {
    const existingRequest = await RegistrationRequest.findOne({
      email: req.body.email,
    });
    if (existingRequest) {
      let existingRequestError = {
        error: true,
        message: "",
      };
      if (existingRequest.requestStatus === "pending") {
        existingRequestError.message = "Pending registration request exists.";
        throw existingRequestError;
      } else if (existingRequest.requestStatus === "approved") {
        existingRequestError.message = "Account exists.";
        throw existingRequestError;
      } else {
        existingRequestError.message =
          "This account has not been approved for access.";
        throw existingRequestError;
      }
    }

    const newRequest = new RegistrationRequest({
      email: req.body.email,
      password: req.body.password,
      accessLevel: req.body.accessLevel,
    });

    await newRequest.save();

    res.status(200).json({ message: "Registration request submitted." });
  } catch (err) {
    console.log(err.typ);
    res.status(400).json({ error: true, message: err.message });
  }
});

export default handler;
