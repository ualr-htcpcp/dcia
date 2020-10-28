import * as sendGrid from "@sendgrid/mail";
import User from "../models/User";

const unsubscribeId = 14692;
const emailFromName = "DCIA Application";
const templateIds = {
  registrationConfirmation: "d-02ed81f7628548248c3ecf1853714d6b",
  notifyRootUser: "d-d0831e054c9c433896a36b2430ebb580",
};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
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
    from: { email: process.env.SENDGRID_SENDER, name: emailFromName },
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
    from: { email: process.env.SENDGRID_SENDER, name: emailFromName },
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
