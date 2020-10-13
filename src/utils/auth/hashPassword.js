import bcrypt from "bcrypt";

const saltRounds = 10;

async function hashPassword(pwd) {
  return await new Promise((resolve, reject) => {
    bcrypt.hash(pwd, saltRounds, (err, hash) => {
      if (err) reject(err);
      resolve(hash);
    });
  });
}

export default hashPassword;
