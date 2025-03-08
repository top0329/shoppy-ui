"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTHENTICATION_COOKIE } from "./auth-cookie";

export default async function logout() {
  (await cookies()).delete(AUTHENTICATION_COOKIE);
  redirect("/auth/login");
}
