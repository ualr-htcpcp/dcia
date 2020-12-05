import * as sendGrid from "@sendgrid/mail";
import { capitalize } from "./string";
import User from "../models/User";

const unsubscribeId = 14692;
const fromTeam = "DCIA Team";
const fromApplication = "DCIA Application";
const templateIds = {
  registrationConfirmation: "d-02ed81f7628548248c3ecf1853714d6b",
  notifyRootUser: "d-d0831e054c9c433896a36b2430ebb580",
  passwordReset: "d-3cedb1dc419944c2bb960e8782a17681",
  passwordResetConfirmation: "d-a011458f2d274526a23236091daa7372",
  userAccessChange: "d-9ec83ef57e52483187663999580ae97a",
  registrationRequestUpdate: "d-dcad74638f37429e951ee7d1e92c284d",
};

function createResetUrl(token) {
  return encodeURI(`${process.env.APP_URL}/reset_password?token=${token}`);
}

function isEmailEnabled() {
  const enabledServices = process.env.ENABLED_SERVICES || "";
  return enabledServices.split(",").includes("email");
}

export async function getLocationData(ipAddress) {
  const url = `${process.env.IP_API_ENDPOINT}/${ipAddress}?access_key=${process.env.IP_API_KEY}`;
  try {
    if (!isEmailEnabled()) {
      return Promise.resolve("Localhost, USA 🇺🇸");
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const json = await response.json();

    return Promise.resolve(
      `${json.city}, ${json.region_name} ${json.location.country_flag_emoji}`
    );
  } catch (err) {
    return Promise.reject(err);
  }
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
      if (isEmailEnabled()) {
        sendGrid.send(msgContents);
      } else {
        console.log(`${emailType} EMAIL: `);
        console.log(msgContents);
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
      request_ip: newRequestDetails.ipAddress,
      request_location: newRequestDetails.location,
    },
  };
  return await sendEmail(msgContent, emailType);
}

export async function sendRegistrationConfirmation(newRequestDetails) {
  const emailType = "NEW REGISTRATION CONFIRMATION"; // logging purposes only
  sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
  const msgContent = {
    to: newRequestDetails.email,
    from: { email: process.env.SENDGRID_SENDER, name: fromTeam },
    asm: {
      groupId: unsubscribeId,
    },
    templateId: templateIds.registrationConfirmation,
    dynamicTemplateData: {
      request_ip: newRequestDetails.ipAddress,
      request_location: newRequestDetails.location,
    },
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

export async function sendAccessLevelChange(sendTo, newAccessLevel) {
  const emailType = "ACCESS LEVEL CHANGE"; // logging purposes only
  const msgContent = {
    to: sendTo,
    from: { email: process.env.SENDGRID_SENDER, name: fromTeam },
    asm: {
      groupId: unsubscribeId,
    },
    dynamicTemplateData: {
      access_level: capitalize(newAccessLevel),
      access_revoked: false,
    },
    templateId: templateIds.userAccessChange,
  };

  if (newAccessLevel === "revoked") {
    msgContent.dynamicTemplateData.access_revoked = true;
  }

  return await sendEmail(msgContent, emailType);
}

export async function sendRegistrationRequestUpdate(sendTo, requestStatus) {
  const emailType = "REGISTRATION REQUEST UPDATED"; // logging purposes only
  const msgContent = {
    to: sendTo,
    from: { email: process.env.SENDGRID_SENDER, name: fromTeam },
    asm: {
      groupId: unsubscribeId,
    },
    dynamicTemplateData: {
      request_status: capitalize(requestStatus),
      request_denied: false,
    },
    templateId: templateIds.registrationRequestUpdate,
  };
  if (requestStatus === "denied") {
    msgContent.dynamicTemplateData.request_denied = true;
  }

  return await sendEmail(msgContent, emailType);
}
