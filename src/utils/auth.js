import bcrypt from "bcryptjs";
import crypto from "crypto";
import { getSession, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

const saltRounds = 10;
const resetTokenLength = 40;
const resetTokenExpiration = 3; // in days

export function createResetToken() {
  return crypto.randomBytes(48).toString("hex").substr(0, resetTokenLength);
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

export function useProtectPage(accessLevels = ["instructor", "admin", "root"]) {
  const router = useRouter();
  const [session, loading] = useSession();

  useEffect(() => {
    if (!loading && !session) {
      router.push("/signin");
    } else if (session && !accessLevels.includes(session.user.accessLevel)) {
      router.push("/");
    }
  }, [session, loading, router, accessLevels]);

  return session;
}

export async function forbiddenUnlessAdmin(req, res) {
  const session = await getSession({ req });
  if (!session || !["admin", "root"].includes(session.user.accessLevel)) {
    return res.status(403).json({ error: true, message: "Forbidden" });
  }
}
