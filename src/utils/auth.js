import bcrypt from "bcrypt";
import { getSession } from "next-auth/client";

const saltRounds = 10;

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

export async function ProtectPage(context, accessLevels = null) {
  const session = await getSession(context);

  if (!session) {
    context.res.writeHeader(307, { Location: "/signin" });
    context.res.end();
  } else if (accessLevels && !accessLevels.includes(session.user.accessLevel)) {
    context.res.writeHeader(307, { Location: "/" });
    context.res.end();
  } else {
    return { props: { session } };
  }
}
