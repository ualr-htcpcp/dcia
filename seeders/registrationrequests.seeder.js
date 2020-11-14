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
  {
    email: "denied@example.com",
    password: "denied",
    accessLevel: "instructor",
    requestStatus: "denied",
  },
  {
    email: "cxchiang@example.com",
    password: "instructor",
    accessLevel: "instructor",
    requestStatus: "approved",
  },
  {
    email: "pdhuff@example.com",
    password: "instructor",
    accessLevel: "instructor",
    requestStatus: "approved",
  },
  {
    email: "mgmilanova@example.com",
    password: "instructor",
    accessLevel: "instructor",
    requestStatus: "approved",
  },
  {
    email: "smorme@example.com",
    password: "instructor",
    accessLevel: "instructor",
    requestStatus: "approved",
  },
  {
    email: "jpspringer@example.com",
    password: "instructor",
    accessLevel: "instructor",
    requestStatus: "approved",
  },
  {
    email: "bwkeltch@example.com",
    password: "instructor",
    accessLevel: "instructor",
    requestStatus: "approved",
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
