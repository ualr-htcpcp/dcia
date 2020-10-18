import * as sendGrid from "@sendgrid/mail";

export async function sendRegistrationConfirmation(sendTo) {
  sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
  const msgContent = {
    to: sendTo,
    from: process.env.SENDGRID_SENDER,
    subject: "Registration Request Submitted",
    html: `
    <div style="font-family: sans-serif;">
      <h3>Your registration request was submitted successfully!</h3>
      <br/>
      <p>
        You will receive another email once your request has been evaluated.
      </p>
    </div>
    `,
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
