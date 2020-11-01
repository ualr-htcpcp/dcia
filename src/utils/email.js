import * as sendGrid from "@sendgrid/mail";
import User from "../models/User";

const unsubscribeId = 14692;
const fromTeam = "DCIA Team";
const fromApplication = "DCIA Application";
const templateIds = {
  registrationConfirmation: "d-02ed81f7628548248c3ecf1853714d6b",
  notifyRootUser: "d-d0831e054c9c433896a36b2430ebb580",
  passwordReset: "d-3cedb1dc419944c2bb960e8782a17681",
  passwordResetConfirmation: "d-a011458f2d274526a23236091daa7372",
};
const passwordResetBaseUrl = "http://localhost:3000/reset_password";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function createResetUrl(token) {
  const queryParams = encodeURIComponent(`/?token=${token}`);
  return passwordResetBaseUrl + queryParams;
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

async function sendEmail(msgContents, emailType) {
  sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
  return new Promise((resolve, reject) => {
    try {
      // Don't send emails in test/development
      if (process.env.NODE_ENV !== "production") {
        console.log(`${emailType} EMAIL: `);
        console.log(msgContents);
      } else {
        sendGrid.send(msgContents);
      }
      resolve("Email(s) sent!");
    } catch (err) {
      if (err.response) {
        reject(err.response);
      } else {
        reject("Uncaught error sending email(s).");
      }
    }
  });
}

export async function sendRootUserNotification(newRequestDetails) {
  const emailType = "ROOT USER NEW REGISTRATION"; // logging purposes only
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
  return await sendEmail(msgContent, emailType);
}

export async function sendRegistrationConfirmation(sendTo) {
  const emailType = "REGISTRATION CONFIRMATION"; // logging purposes only
  const msgContent = {
    to: sendTo,
    from: { email: process.env.SENDGRID_SENDER, name: fromTeam },
    asm: {
      groupId: unsubscribeId,
    },
    templateId: templateIds.registrationConfirmation,
  };
  return await sendEmail(msgContent, emailType);
}

export async function sendPasswordResetEmail(sendTo, token) {
  const emailType = "PASSWORD RESET"; // logging purposes only
  const msgContent = {
    to: sendTo,
    from: { email: process.env.SENDGRID_SENDER, name: fromTeam },
    asm: {
      groupId: unsubscribeId,
    },
    templateId: templateIds.passwordReset,
    dynamicTemplateData: {
      reset_link: createResetUrl(token),
    },
  };

  return await sendEmail(msgContent, emailType);
}

export async function sendPasswordResetConfirmation(sendTo) {
  const emailType = "PASSWORD RESET CONFIRMATION"; // logging purposes only
  const msgContent = {
    to: sendTo,
    from: { email: process.env.SENDGRID_SENDER, name: fromTeam },
    asm: {
      groupId: unsubscribeId,
    },
    templateId: templateIds.passwordResetConfirmation,
  };

  return await sendEmail(msgContent, emailType);
}
