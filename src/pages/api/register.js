import nextConnect from "next-connect";
import middleware from "../../middleware";
import RegistrationRequest from "../../models/RegistrationRequest";

const handler = nextConnect();
handler.use(middleware);

const accessLevels = ["instructor", "admin"];

handler.post(async (req, res) => {
  let errorMessage = {
    error: false,
    message: "",
    offendingFields: [],
  };
  try {
    // General field validation checks
    if (!req.body.email) {
      errorMessage.error = true;
      errorMessage.message += "Email is required. ";
      errorMessage.offendingFields.push("email");
    }
    if (!req.body.password) {
      errorMessage.error = true;
      errorMessage.message += "Password is required. ";
      errorMessage.offendingFields.push("password");
    }
    if (!req.body.accessLevel) {
      errorMessage.error = true;
      errorMessage.message += "Access Level is required.";
      errorMessage.offendingFields.push("accessLevel");
    }
    if (
      req.body.accessLevel !== "" &&
      !accessLevels.includes(req.body.accessLevel)
    ) {
      errorMessage.error = true;
      errorMessage.message += `'${req.body.accessLevel}' is not a valid access level.`;
      errorMessage.offendingFields.push("accessLevel");
    }

    const existingRequest = await RegistrationRequest.findOne({
      email: req.body.email,
    });

    if (existingRequest) {
      if (existingRequest.requestStatus === "pending") {
        errorMessage.error = true;
        errorMessage.message = "Pending registration request exists.";
      } else if (existingRequest.requestStatus === "approved") {
        errorMessage.error = true;
        errorMessage.message = "Account exists."; //TODO is this wording acceptable?
      } else {
        //? This is technically related to 1.2 functionality, is this an acceptable implementation?
        errorMessage.error = true;
        errorMessage.message = "This account has not been approved for access.";
      }
    }

    // Return multiple  errors at once, if needed
    if (errorMessage.error) {
      throw new Error(errorMessage);
    }

    const newRequest = new RegistrationRequest({
      email: req.body.email,
      password: req.body.password, //TODO: hash password
      accessLevel: req.body.accessLevel,
    });

    await newRequest.save();
    res.status(200).json({ message: "Registration request submitted." });
  } catch (err) {
    console.log(...err);
  }
});

export default handler;
