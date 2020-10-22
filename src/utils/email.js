import * as sendGrid from "@sendgrid/mail";

const templateIds = {
  registrationConfirmation: "d-02ed81f7628548248c3ecf1853714d6b",
};

export async function sendRegistrationConfirmation(sendTo) {
  sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
  const msgContent = {
    to: sendTo,
    from: process.env.SENDGRID_SENDER,
    templateId: templateIds.registrationConfirmation,
  };

  return await new Promise((resolve, reject) => {
    try {
      // Don't send emails in test/development
      if (process.env.NODE_ENV !== "production") {
        console.log(msgContent);
        resolve("Email Sent!");
      } else {
        sendGrid.send(msgContent);
        resolve("Email Sent!");
      }
    } catch (err) {
      if (err.response) {
        reject(err.response);
      }
    }
  });
}
