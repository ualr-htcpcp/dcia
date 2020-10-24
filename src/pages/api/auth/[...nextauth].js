import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import { connect } from "../../../utils/db";
import User from "../../../models/User";
import RegistrationRequest from "../../../models/RegistrationRequest";

const invalidCredentials = "The email or password you entered is incorrect.";

const options = {
  pages: {
    signIn: "/signin",
    error: "/signin",
  },
  providers: [
    Providers.Credentials({
      authorize: async ({ email, password }) => {
        await connect();

        const query = { email };
        const user = await User.findOne(query);

        if (user) {
          if (user.accessLevel === "revoked") {
            return Promise.reject(
              new Error("Account access has been revoked.")
            );
          } else if (await user.checkPassword(password)) {
            const sessionUser = { id: user.id, email: user.email };
            return Promise.resolve(sessionUser);
          } else {
            return Promise.reject(new Error(invalidCredentials));
          }
        } else {
          const registrationRequest = await RegistrationRequest.findOne(query);
          if (registrationRequest) {
            const status = registrationRequest.requestStatus;
            return Promise.reject(
              new Error(`Registration request is ${status}.`)
            );
          } else {
            return Promise.reject(new Error(invalidCredentials));
          }
        }
      },
    }),
  ],
};

export default (req, res) => NextAuth(req, res, options);
