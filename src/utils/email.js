import * as sendGrid from "@sendgrid/mail";

const unsubscribeId = 14692;
const templateIds = {
  registrationConfirmation: "d-02ed81f7628548248c3ecf1853714d6b",
};

export async function sendRegistrationConfirmation(sendTo) {
  sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
  const msgContent = {
    to: sendTo,
    from: { email: process.env.SENDGRID_SENDER, name: "Team DCIA" },
    asm: {
      groupId: unsubscribeId,
    },
    templateId: templateIds.registrationConfirmation,
  };

  return new Promise((resolve, reject) => {
    try {
      // Don't send emails in test/development
      if (process.env.NODE_ENV !== "production") {
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
