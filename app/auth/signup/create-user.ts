"use server";

import { redirect } from "next/navigation";
import { post } from "@/app/common/util/fetch";
import { FormResponse } from "@/app/common/interfaces/form-response.interface";

export default async function createUser(
  _prevState: FormResponse,
  formData: FormData
) {
  const { error } = await post("users", formData);
  if (error) {
    return { error };
  }
  redirect("/");
}
