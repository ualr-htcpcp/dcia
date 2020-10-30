import * as sendGrid from "@sendgrid/mail";
import User from "../models/User";

const unsubscribeId = 14692;
const fromTeam = "DCIA Team";
const fromApplication = "DCIA Application";
const templateIds = {
  registrationConfirmation: "d-02ed81f7628548248c3ecf1853714d6b",
  notifyRootUser: "d-d0831e054c9c433896a36b2430ebb580",
  passwordReset: "d-3cedb1dc419944c2bb960e8782a17681",
};
const passwordResetBaseUrl = "http://localhost:3000/reset_password";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function createResetUrl(token) {
  return `${passwordResetBaseUrl}?token=${token}`;
}

async function getRootUserEmails() {
  try {
    const emails = await User.find(
      { accessLevel: "root" },
      { _id: 0, email: 1 }
    );

    return emails.map((user) => user.email);
  } catch (err) {
    return err.message;
  }
}

export async function sendRootUserNotification(newRequestDetails) {
  sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
  const rootEmails = await getRootUserEmails();
  const msgContent = {
    to: rootEmails,
    from: { email: process.env.SENDGRID_SENDER, name: fromApplication },
    asm: {
      groupId: unsubscribeId,
    },
    templateId: templateIds.notifyRootUser,
    dynamicTemplateData: {
      request_email: newRequestDetails.email,
      request_access_level: capitalize(newRequestDetails.accessLevel),
    },
  };
  return new Promise((resolve, reject) => {
    try {
      // Don't send emails in test/development
      if (process.env.NODE_ENV !== "production") {
        console.log("ROOT USER NEW REGISTRATION EMAIL:");
        console.log(msgContent);
      } else {
        sendGrid.send(msgContent);
      }
      resolve("Emails sent!");
    } catch (err) {
      if (err.response) {
        reject(err.response);
      } else {
        reject("Error sending new request notification to root users.");
      }
    }
  });
}

export async function sendRegistrationConfirmation(sendTo) {
  sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
  const msgContent = {
    to: sendTo,
    from: { email: process.env.SENDGRID_SENDER, name: fromTeam },
    asm: {
      groupId: unsubscribeId,
    },
    templateId: templateIds.registrationConfirmation,
  };

  return new Promise((resolve, reject) => {
    try {
      // Don't send emails in test/development
      if (process.env.NODE_ENV !== "production") {
        console.log("REGISTRATION CONFIRMATION EMAIL:");
        console.log(msgContent);
      } else {
        sendGrid.send(msgContent);
      }
      resolve("Email Sent!");
    } catch (err) {
      if (err.response) {
        reject(err.response);
      } else {
        reject("Error sending notification email to new user.");
      }
    }
  });
}

export async function sendPasswordResetEmail(sendTo, token) {
  sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
  const msgContent = {
    to: sendTo,
    from: { email: process.env.SENDGRID_SENDER, name: fromTeam },
    asm: {
      groupId: unsubscribeId,
    },
    templateId: templateIds.passwordReset,
    dynamicTemplateData: {
      reset_link: createResetUrl(token);
    }
  };

  return new Promise((resolve, reject) => {
    try {
      if (process.env.NODE_ENV !== "production") {
        console.log("PASSWORD RESET EMAIL:");
        console.log(msgContent);
      } else {
        sendGrid.send(msgContent);
      }
      resolve("Email sent!");
    } catch (err) {
      if (err.response) {
        reject(err.response);
      } else {
        reject("Error sending password reset email to user.");
      }
    }
  });
}
