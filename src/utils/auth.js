import bcrypt from "bcrypt";
import crypto from "crypto";
import { getSession } from "next-auth/client";

const saltRounds = 10;
const resetTokenLength = 40;
const resetTokenExpiration = 3; // in days

export function createResetToken() {
  return crypto.randomBytes(48).toString("base64").substr(0, resetTokenLength);
}

export function createExpirationDate(now) {
  const expiry = new Date(now.valueOf());
  expiry.setDate(now.getDate() + resetTokenExpiration);
  return expiry;
}

export async function hashPassword(pwd) {
  return await new Promise((resolve, reject) => {
    bcrypt.hash(pwd, saltRounds, (err, hash) => {
      if (err) reject(err);
      resolve(hash);
    });
  });
}

export async function checkPassword(password, passwordHash) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, same) => {
      if (err) {
        return reject(err);
      } else {
        resolve(same);
      }
    });
  });
}

export async function ProtectPage(context) {
  const session = await getSession(context);

  if (!session) {
    context.res.writeHeader(307, { Location: "/signin" });
    context.res.end();
  }
  return { props: {} };
}
