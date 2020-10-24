import User from "../models/User";
import RegistrationRequest from "../models/RegistrationRequest";
import { hashPassword } from "../utils/auth";

const instructorProps = {
  email: "test.instructor@example.com",
  password: hashPassword("approved"),
  accessLevel: "instructor",
};

export default async function seed() {
  let instructor = await User.findOne({ email: instructorProps.email });
  if (!instructor) {
    instructor = await User.create(instructorProps);
    RegistrationRequest.create({
      ...instructorProps,
      requestStatus: "approved",
    });
  }
}
