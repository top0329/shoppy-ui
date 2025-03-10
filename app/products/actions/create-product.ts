"use server";

import { revalidateTag } from "next/cache";
import { post } from "@/app/common/util/fetch";

export default async function createProduct(formData: FormData) {
  const response = await post("products", formData);
  revalidateTag("products");
  return response;
}
