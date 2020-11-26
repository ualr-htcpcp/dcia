import { Seeder } from "mongoose-data-seed";
import RegistrationRequest from "../src/models/RegistrationRequest";

const data = [
  {
    email: "instructor@example.com",
    password: "instructor",
    accessLevel: "instructor",
    requestStatus: "approved",
  },
  {
    email: "admin@example.com",
    password: "admin",
    accessLevel: "admin",
    requestStatus: "approved",
  },
  {
    email: "pending@example.com",
    password: "pending",
    accessLevel: "instructor",
    requestStatus: "pending",
  },
];

class RegistrationrequestsSeeder extends Seeder {
  async shouldRun() {
    return RegistrationRequest.countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    return Promise.all(
      data.map(async (registrationRequest) => {
        return RegistrationRequest.create(registrationRequest);
      })
    );
  }
}

export default RegistrationrequestsSeeder;
