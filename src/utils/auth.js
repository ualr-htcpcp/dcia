import bcrypt from "bcryptjs";
import crypto from "crypto";
import { getSession, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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

export function useProtectPage({ adminOnly = false, rootOnly = false } = {}) {
  const router = useRouter();
  const [session, loading] = useSession();
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    if (!loading && !session) {
      router.push("/signin");
    } else if (session) {
      const accessLevel = session.user.accessLevel;
      if (
        (adminOnly && !["admin", "root"].includes(accessLevel)) ||
        (rootOnly && accessLevel !== "root")
      ) {
        router.push("/");
      } else {
        setHasAccess(true);
      }
    }
  }, [session, loading, router, adminOnly, rootOnly]);

  return hasAccess && session;
}

export async function authenticate(req, res, next) {
  const session = await getSession({ req });
  if (session) {
    next();
  } else {
    res
      .status(401)
      .json({ error: true, message: "Unauthorized: must be signed in" })
      .end();
  }
}

export async function forbiddenUnlessAdmin(req, res, next) {
  const session = await getSession({ req });
  if (["admin", "root"].includes(session?.user?.accessLevel)) {
    next?.();
  } else {
    res
      .status(403)
      .json({ error: true, message: "Forbidden: must be an admin" })
      .end();
  }
}

export async function forbiddenUnlessRoot(req, res, next) {
  const session = await getSession({ req });
  if (session?.user?.accessLevel === "root") {
    next?.();
  } else {
    res
      .status(403)
      .json({ error: true, message: "Forbidden: must be a root user" })
      .end();
  }
}

export function isAdmin(session) {
  return ["admin", "root"].includes(session?.user.accessLevel);
}
