import nextConnect from "next-connect";
import middleware from "../../middleware";
import bcrypt from "bcrypt";
import RegistrationRequest from "../../models/RegistrationRequest";

const handler = nextConnect();
handler.use(middleware);

const saltRounds = 10; //? Does this need to be moved somewhere else?
const accessLevels = ["instructor", "admin"];

handler.post(async (req, res) => {
  let validationError = {
    error: false,
    message: "",
    offendingFields: [],
  };
  try {
    //TODO: we should probably abstract this to use throughout the solution
    // General field validation checks
    if (!req.body.email) {
      validationError.error = true;
      validationError.message += "Email is required. ";
      validationError.offendingFields.push("email");
    }
    if (!req.body.password) {
      validationError.error = true;
      validationError.message += "Password is required. ";
      validationError.offendingFields.push("password");
    }
    if (!req.body.accessLevel) {
      validationError.error = true;
      validationError.message += "Access Level is required.";
      validationError.offendingFields.push("accessLevel");
    }
    if (req.body.accessLevel && !accessLevels.includes(req.body.accessLevel)) {
      validationError.error = true;
      validationError.message += `'${req.body.accessLevel}' is not a valid access level.`;
      validationError.offendingFields.push("accessLevel");
    }

    // Return multiple validation errors at once, if needed
    if (validationError.error) {
      throw validationError;
    }

    // Passed field validations, now check for existing request
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
        existingRequestError.message = "Account exists."; //TODO is this wording acceptable?
        throw existingRequestError;
      } else {
        //? This is technically related to 1.2 functionality, is this an acceptable implementation?
        existingRequestError.message =
          "This account has not been approved for access.";
        throw existingRequestError;
      }
    }

    // Passed field validations and existing request check, hash password and store new request
    await bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
      if (err) {
        throw err;
      }
      const newRequest = new RegistrationRequest({
        email: req.body.email,
        password: hash,
        accessLevel: req.body.accessLevel,
      });
      await newRequest.save();
    });

    res.status(200).json({ message: "Registration request submitted." });
  } catch (err) {
    res.status(400).json(err);
  }
});

export default handler;
