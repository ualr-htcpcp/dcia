import { Seeder } from "mongoose-data-seed";
import RegistrationRequest from "../src/models/RegistrationRequest";

const data = [
  {
    email: "instructor@example.com",
    password: "instructor",
    accessLevel: "instructor",
    requestStatus: "approved",
    locationInformation: {
      ipAddress: "111.111.1.1",
      location: "Seedville, USA",
    },
  },
  {
    email: "admin@example.com",
    password: "admin",
    accessLevel: "admin",
    requestStatus: "approved",
    locationInformation: {
      ipAddress: "111.111.1.1",
      location: "Seedville, USA",
    },
  },
  {
    email: "pending@example.com",
    password: "pending",
    accessLevel: "instructor",
    requestStatus: "pending",
    locationInformation: {
      ipAddress: "111.111.1.1",
      location: "Seedville, USA",
    },
  },
  {
    email: "denied@example.com",
    password: "denied",
    accessLevel: "instructor",
    requestStatus: "denied",
    locationInformation: {
      ipAddress: "111.111.1.1",
      location: "Seedville, USA",
    },
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
